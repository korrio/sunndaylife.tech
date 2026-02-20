import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MotionBanner } from '@/components/MotionBanner';
import { useLanguage } from '@/lib/language';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Award, Users, Target, Lightbulb, Heart } from 'lucide-react';

const milestones = [
  {
    year: '2014',
    title: 'International Experience',
    titleTh: 'ประสบการณ์ระดับนานาชาติ',
    description: 'Started IT career with ICRC, working in challenging regions like Somalia, Kenya, and Myanmar.',
    descriptionTh: 'เริ่มต้นอาชีพไอทีกับ ICRC ทำงานในพื้นที่ท้าทายเช่น โซมาเลีย เคนยา และเมียนมา',
    icon: Globe,
  },
  {
    year: '2018',
    yearTh: '2561',
    title: 'UN ILO Experience',
    titleTh: 'ประสบการณ์ UN ILO',
    description: 'Expanded expertise with United Nations ILO, managing IT operations at scale.',
    descriptionTh: 'ขยายความเชี่ยวชาญกับ UN ILO บริหารงานไอทีในระดับใหญ่',
    icon: Award,
  },
  {
    year: '2020',
    yearTh: '2563',
    title: 'Founded Sunny Day 365',
    titleTh: 'ก่อตั้ง Sunny Day 365',
    description: 'Established the company with a vision to change how businesses approach IT.',
    descriptionTh: 'ก่อตั้งบริษัทด้วยวิสัยทัศน์ที่จะเปลี่ยนแปลงวิธีที่ธุรกิจเข้าถึงไอที',
    icon: Lightbulb,
  },
  {
    year: '2024',
    yearTh: '2567',
    title: '50+ Clients Served',
    titleTh: 'บริการลูกค้ากว่า 50 ราย',
    description: 'Helped businesses across 5 countries transform their IT operations.',
    descriptionTh: 'ช่วยธุรกิจกว่า 5 ประเทศเปลี่ยนแปลงการดำเนินงานไอที',
    icon: Users,
  },
];

const values = [
  {
    icon: Target,
    title: 'Business First',
    titleTh: 'ธุรกิจก่อน',
    description: 'Technology should serve business goals, not the other way around.',
    descriptionTh: 'เทคโนโลยีควรให้บริการเป้าหมายทางธุรกิจ ไม่ใช่กลับกัน',
  },
  {
    icon: Heart,
    title: 'Owner Driven',
    titleTh: 'ขับเคลื่อนโดยเจ้าของ',
    description: 'Direct involvement from leadership ensures quality delivery.',
    descriptionTh: 'การมีส่วนร่วมโดยตรงจากผู้บริหารช่วยให้มั่นใจในคุณภาพ',
  },
  {
    icon: Lightbulb,
    title: 'Proactive Solutions',
    titleTh: 'โซลูชันเชิงรุก',
    description: 'We anticipate problems before they impact your business.',
    descriptionTh: 'เราคาดการณ์ปัญหาก่อนที่จะส่งผลกระทบต่อธุรกิจของคุณ',
  },
];

export default function Background() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Banner */}
      <MotionBanner
        title="Background"
        titleTh="ความเป็นมา"
        subtitle="The Journey of Sunny Day 365 - From international experience to local impact"
        subtitleTh="การเดินทางของ Sunny Day 365 - จากประสบการณ์ระดับโลกสู่การสร้างผลกระทบในท้องถิ่น"
        variant="about"
      />

      {/* Story Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
                {t("Our Story", "เรื่องราวของเรา")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                {t(
                  "Founded to Change How Businesses Manage Technology",
                  "ก่อตั้งขึ้นเพื่อเปลี่ยนแปลงวิธีที่ธุรกิจจัดการเทคโนโลยี"
                )}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {t(
                    "Sunny Day 365 was established with a clear intention: to 'change the mindset' of how organizations manage technology. We are committed to delivering quality IT solutions, driven by proactive work and specifically designed to fit the context of each business.",
                    "Sunny Day 365 ก่อตั้งขึ้นด้วยความตั้งใจที่ชัดเจน: เพื่อ 'เปลี่ยนวิธีคิด' ขององค์กรในการจัดการเทคโนโลยี เรามุ่งมั่นที่จะส่งมอบโซลูชัน IT ระดับคุณภาพ ขับเคลื่อนด้วยการทำงานเชิงรุก และออกแบบเฉพาะให้สอดรับกับบริบทของแต่ละธุรกิจ"
                  )}
                </p>
                <p>
                  {t(
                    "Our journey began with a vision to connect 'world-class standards' with 'local business needs' in a balanced way. With work experience in challenging IT environments including Somalia, Kenya, Myanmar, and participation in international forums in Egypt and Serbia.",
                    "การเดินทางของเราเริ่มต้นจากวิสัยทัศน์ที่จะเชื่อม 'มาตรฐานระดับโลก' เข้ากับ 'ความต้องการของธุรกิจท้องถิ่น' อย่างลงตัว ด้วยประสบการณ์ทำงานในสภาพแวดล้อมไอทีที่ท้าทายรวมถึง โซมาเลีย เคนยา เมียนมา และการมีส่วนร่วมในเวทีนานาชาติที่อยุ่ปีร์ต์และเซอร์เบีย"
                  )}
                </p>
                <p>
                  {t(
                    "These experiences have forged our expertise on a foundation of real problem-solving and strategic thinking that truly answers business needs.",
                    "ประสบการณ์เหล่านี้ได้หล่อหลอมความเชี่ยวชาญของเราบนพื้นฐานของการแก้ปัญหาจริงและการคิดเชิงกลยุทธ์ที่ตอบโจทย์ความต้องการทางธุรกิจอย่างแท้จริง"
                  )}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-sunny-teal to-sunny-gold rounded-2xl p-1">
                <div className="w-full h-full bg-white rounded-2xl p-8 flex flex-col justify-center">
                  <blockquote className="text-2xl font-medium text-gray-900 italic leading-relaxed">
                    "{t(
                      "IT department exists because we help drive the business further.",
                      "แผนก IT มีอยู่เพราะเราช่วยขับเคลื่อนธุรกิจให้ก้าวไปข้างหน้า"
                    )}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-sunny-teal rounded-full flex items-center justify-center text-white font-bold">
                      P
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phongsaphat Duma</div>
                      <div className="text-sm text-gray-500">
                        {t("Founder & Managing Director", "ผู้ก่อตั้งและกรรมการผู้จัดการ")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
              {t("Our Journey", "การเดินทางของเรา")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              {t("Milestones", "จุดเปลี่ยนสำคัญ")}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-sunny-teal/20 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  }`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-sunny-teal font-bold text-2xl mb-2">
                        {t(milestone.year, milestone.yearTh || milestone.year)}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {t(milestone.title, milestone.titleTh)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t(milestone.description, milestone.descriptionTh)}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-sunny-teal rounded-full flex items-center justify-center z-10">
                    <milestone.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
              {t("Our Philosophy", "ปรัชญาของเรา")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              {t("Core Values", "ค่านิยมหลัก")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-sunny-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-sunny-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(value.title, value.titleTh)}
                </h3>
                <p className="text-gray-600">
                  {t(value.description, value.descriptionTh)}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-sunny-teal">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Years Experience', labelTh: 'ปีประสบการณ์' },
              { value: '5+', label: 'Countries', labelTh: 'ประเทศ' },
              { value: '50+', label: 'Clients', labelTh: 'ลูกค้า' },
              { value: '6', label: 'Months to ISO', labelTh: 'เดือนสู่ ISO' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{t(stat.label, stat.labelTh)}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("Ready to Work With Us?", "พร้อมร่วมงานกับเรา?")}
            </h2>
            <p className="text-gray-600 mb-8">
              {t(
                "Let's discuss how our experience can help transform your IT operations.",
                "มาหารือกันว่าประสบการณ์ของเราจะช่วยเปลี่ยนแปลงการดำเนินงานไอทีของคุณได้อย่างไร"
              )}
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                {t("Get in Touch", "ติดต่อเรา")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
