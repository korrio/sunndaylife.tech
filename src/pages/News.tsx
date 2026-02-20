import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MotionBanner } from '@/components/MotionBanner';
import { useLanguage } from '@/lib/language';
import { newsItems, getFeaturedNews } from '@/content/news';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All', labelTh: 'ทั้งหมด' },
  { id: 'Company News', label: 'Company News', labelTh: 'ข่าวบริษัท' },
  { id: 'Project Update', label: 'Project Update', labelTh: 'อัปเดตโครงการ' },
  { id: 'Success Story', label: 'Success Story', labelTh: 'เรื่องราวความสำเร็จ' },
  { id: 'Case Study', label: 'Case Study', labelTh: 'กรณีศึกษา' },
];

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

export default function News() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  
  const featuredNews = getFeaturedNews();
  
  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  // Sort by date (newest first)
  const sortedNews = filteredNews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Hero Banner */}
      <MotionBanner
        title="News & Updates"
        titleTh="ข่าวสารและอัปเดต"
        subtitle="Latest news, project updates, and success stories from Sunny Day 365"
        subtitleTh="ข่าวสารล่าสุด อัปเดตโครงการ และเรื่องราวความสำเร็จจาก Sunny Day 365"
        variant="experiences"
      />

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <Section className="pb-0">
          <Container>
            <div className="mb-8">
              <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
                {t("Featured", "เด่น")}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">
                {t("Featured News", "ข่าวเด่น")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-sunny-gold text-white text-sm font-medium rounded-full">
                      {t(news.category, news.categoryTh)}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(news.date, language)}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sunny-teal transition-colors line-clamp-2">
                      {t(news.title, news.titleTh)}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {t(news.excerpt, news.excerptTh)}
                    </p>
                    <Link 
                      to={`/news/${news.id}`}
                      className="inline-flex items-center text-sunny-teal font-medium hover:underline"
                    >
                      {t("Read More", "อ่านเพิ่มเติม")}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* All News */}
      <Section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
                {t("All News", "ข่าวทั้งหมด")}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">
                {t("Latest Updates", "อัปเดตล่าสุด")}
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-sunny-teal text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t(category.label, category.labelTh)}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="aspect-video bg-gray-100 relative">
                  <span className="absolute top-3 left-3 px-2 py-1 bg-sunny-teal/90 text-white text-xs font-medium rounded">
                    {t(news.category, news.categoryTh)}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(news.date, language)}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sunny-teal transition-colors line-clamp-2">
                    {t(news.title, news.titleTh)}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {t(news.excerpt, news.excerptTh)}
                  </p>
                  <Link 
                    to={`/news/${news.id}`}
                    className="inline-flex items-center text-sm text-sunny-teal font-medium hover:underline"
                  >
                    {t("Read More", "อ่านเพิ่มเติม")}
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty State */}
          {sortedNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {t("No news found in this category.", "ไม่พบข่าวในหมวดหมู่นี้")}
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-sunny-teal">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("Stay Updated", "ติดตามข่าวสาร")}
            </h2>
            <p className="text-white/90 mb-8">
              {t(
                "Follow us for the latest updates on our projects and services.",
                "ติดตามเราเพื่อรับข่าวสารล่าสุดเกี่ยวกับโครงการและบริการของเรา"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" asChild>
                <Link to="/contact">
                  {t("Contact Us", "ติดต่อเรา")}
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-sunny-teal"
                asChild
              >
                <Link to="/services">
                  {t("Our Services", "บริการของเรา")}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
