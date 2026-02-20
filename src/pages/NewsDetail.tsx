import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/language';
import { getNewsById, newsItems } from '@/content/news';
import { ArrowLeft, Calendar, Facebook, Twitter, Linkedin } from 'lucide-react';

function formatDate(dateString: string, language: string) {
  const date = new Date(dateString);
  if (language === 'th') {
    const thaiMonths = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];
    const buddhistYear = date.getFullYear() + 543;
    return `${date.getDate()} ${thaiMonths[date.getMonth()]} ${buddhistYear}`;
  }
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  
  const news = id ? getNewsById(id) : undefined;
  
  // Get related news (same category, excluding current)
  const relatedNews = news 
    ? newsItems
        .filter(item => item.category === news.category && item.id !== news.id)
        .slice(0, 3)
    : [];

  if (!news) {
    return (
      <Section className="pt-32">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {t("News Not Found", "ไม่พบข่าว")}
            </h1>
            <p className="text-gray-600 mb-8">
              {t("The news article you're looking for doesn't exist.", "บทความข่าวที่คุณกำลังมองหาไม่มีอยู่")}
            </p>
            <Button asChild>
              <Link to="/news">
                <ArrowLeft className="mr-2 w-4 h-4" />
                {t("Back to News", "กลับไปที่ข่าว")}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-sunny-teal">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/news" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t("Back to News", "กลับไปที่ข่าว")}
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                {t(news.category, news.categoryTh)}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t(news.title, news.titleTh)}
            </h1>
            
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {formatDate(news.date, language)}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <Section className="pb-0">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {/* Featured Image */}
              <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
                <span className="text-gray-400">{t("Article Image", "รูปภาพบทความ")}</span>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {t(news.excerpt, news.excerptTh)}
                </p>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t(news.content, news.contentTh)}
                </div>
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {t("Share this article", "แชร์บทความนี้")}
                </h3>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                {/* Related News */}
                {relatedNews.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4">
                      {t("Related News", "ข่าวที่เกี่ยวข้อง")}
                    </h3>
                    <div className="space-y-4">
                      {relatedNews.map((item) => (
                        <Link
                          key={item.id}
                          to={`/news/${item.id}`}
                          className="block group"
                        >
                          <div className="text-xs text-sunny-teal font-medium mb-1">
                            {t(item.category, item.categoryTh)}
                          </div>
                          <h4 className="font-medium text-gray-900 group-hover:text-sunny-teal transition-colors line-clamp-2">
                            {t(item.title, item.titleTh)}
                          </h4>
                          <div className="text-sm text-gray-500 mt-1">
                            {formatDate(item.date, language)}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-6 bg-sunny-teal rounded-lg p-6 text-white">
                  <h3 className="font-bold mb-2">
                    {t("Need IT Solutions?", "ต้องการโซลูชันไอที?")}
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    {t(
                      "Contact us for a free consultation.",
                      "ติดต่อเราเพื่อขอคำปรึกษาฟรี"
                    )}
                  </p>
                  <Button variant="white" size="sm" className="w-full" asChild>
                    <Link to="/contact">
                      {t("Contact Us", "ติดต่อเรา")}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.aside>
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section className="bg-gray-50">
        <Container>
          <div className="flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/news">
                <ArrowLeft className="mr-2 w-4 h-4" />
                {t("All News", "ข่าวทั้งหมด")}
              </Link>
            </Button>
            
            <Button asChild>
              <Link to="/contact">
                {t("Get in Touch", "ติดต่อเรา")}
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
