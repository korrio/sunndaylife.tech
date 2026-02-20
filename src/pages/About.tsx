import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MotionBanner } from '@/components/MotionBanner';
import { useLanguage } from '@/lib/language';
import { ArrowRight, Globe, Shield, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Globe,
    title: "Business-Driven Solutions",
    titleTh: "โซลูชันขับเคลื่อนด้วยธุรกิจ",
    description: "IT exists to drive businesses forward, not hold them back. We align technology with your business goals.",
    descriptionTh: "ไอทีมีอยู่เพื่อขับเคลื่อนธุรกิจให้ก้าวไปข้างหน้า ไม่ใช่ยับยั้ง เราจัดเทคโนโลยีให้สอดคล้องกับเป้าหมายทางธุรกิจของคุณ"
  },
  {
    icon: Shield,
    title: "Attention to Details",
    titleTh: "ใส่ใจในรายละเอียด",
    description: "Even minor IT issues can escalate; we proactively address them before they disrupt operations.",
    descriptionTh: "แม้ปัญหาไอทีเล็กน้อยก็สามารถบานปลายได้ เราจัดการอย่างเชิงรุกก่อนที่จะรบกวนการดำเนินงาน"
  },
  {
    icon: Users,
    title: "Owner Driven Services",
    titleTh: "บริการขับเคลื่อนโดยเจ้าของ",
    description: "Direct ownership and accountability in everything we do. Your success is our priority.",
    descriptionTh: "ความเป็นเจ้าของและความรับผิดชอบโดยตรงในทุกสิ่งที่เราทำ ความสำเร็จของคุณคือสิ่งสำคัญของเรา"
  },
  {
    icon: Award,
    title: "Continuous Improvement",
    titleTh: "การปรับปรุงอย่างต่อเนื่อง",
    description: "We strive to evolve with every client, delivering tailored services that grow alongside their needs.",
    descriptionTh: "เราพยายามพัฒนาไปพร้อมกับทุกลูกค้า ส่งมอบบริการที่ปรับแต่งให้เหมาะกับความต้องการที่เติบโต"
  }
];

const experiences = [
  { region: "Somalia", regionTh: "โซมาเลีย", description: "Critical IT operations management", descriptionTh: "การบริหารงานไอทีที่สำคัญ" },
  { region: "Kenya", regionTh: "เคนยา", description: "International organization support", descriptionTh: "การสนับสนุนองค์กรระหว่างประเทศ" },
  { region: "Myanmar", regionTh: "เมียนมา", description: "Regional IT infrastructure deployment", descriptionTh: "การติดตั้งโครงสร้างพื้นฐานไอทีภูมิภาค" },
  { region: "Egypt", regionTh: "อียิปต์", description: "International discussions participation", descriptionTh: "การมีส่วนร่วมในการหารือระดับนานาชาติ" },
  { region: "Serbia", regionTh: "เซอร์เบีย", description: "Strategic IT consulting", descriptionTh: "ที่ปรึกษาไอทีเชิงกลยุทธ์" },
  { region: "Timor Leste", regionTh: "ติมอร์-เลสเต", description: "Server installation project", descriptionTh: "โครงการติดตั้งเซิร์ฟเวอร์" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Banner */}
      <MotionBanner
        title="About Us"
        titleTh="เกี่ยวกับเรา"
        subtitle="Your Trusted IT Partner - Bridging global best practices with local business needs"
        subtitleTh="พาร์ทเนอร์ไอทีที่คุณวางใจได้ - เชื่อมมาตรฐานระดับโลกเข้ากับความต้องการของธุรกิจท้องถิ่น"
        variant="about"
      />

      {/* Story */}
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
                {t("Bridging Global Best Practices with Local Needs", "เชื่อมมาตรฐานระดับโลกเข้ากับความต้องการท้องถิ่น")}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {t(
                    "Our journey began with a vision to bridge global best practices with local business needs. From managing IT operations in critical regions like Somalia, Kenya, and Myanmar to participating in international discussions in Egypt and Serbia, our expertise is rooted in real-world problem-solving and strategic thinking.",
                    "การเดินทางของเราเริ่มต้นจากวิสัยทัศน์ที่จะเชื่อมมาตรฐานระดับโลกเข้ากับความต้องการของธุรกิจท้องถิ่น จากการบริหารงานไอทีในพื้นที่สำคัญเช่น โซมาเลีย เคนยา และเมียนมา ไปจนถึงการมีส่วนร่วมในการหารือระดับนานาชาติที่อียิปต์และเซอร์เบีย ความเชี่ยวชาญของเราฝังรากอยู่บนพื้นฐานของการแก้ปัญหาจริงและการคิดเชิงกลยุทธ์"
                  )}
                </p>
                <p>
                  {t(
                    "At Sunny Day, we believe that technology should empower businesses to focus on what they do best. By prioritizing business continuity, IT security, and innovation, we help our clients grow while ensuring stability and efficiency in their operations.",
                    "ที่ Sunny Day เราเชื่อว่าเทคโนโลยีควรช่วยให้อำนาจแก่ธุรกิจในการโฟกัสกับสิ่งที่พวกเขาทำได้ดีที่สุด โดยให้ความสำคัญกับความต่อเนื่องทางธุรกิจ ความปลอดภัยไอที และนวัตกรรม เราช่วยให้ลูกค้าของเราเติบโตในขณะที่รักษาเสถียรภาพและประสิทธิภาพในการดำเนินงาน"
                  )}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {t("Global Experience", "ประสบการณ์ระดับโลก")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {experiences.map((exp) => (
                  <div key={exp.region} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-sunny-teal">{t(exp.region, exp.regionTh)}</div>
                    <div className="text-sm text-gray-600">{t(exp.description, exp.descriptionTh)}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
              {t("Our Values", "ค่านิยมของเรา")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              {t("What We Stand For", "สิ่งที่เรายืนหยัด")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <div className="w-12 h-12 bg-sunny-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-sunny-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(value.title, value.titleTh)}</h3>
                <p className="text-gray-600">{t(value.description, value.descriptionTh)}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How We Work */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
                {t("How We Work", "วิธีการทำงานของเรา")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                {t("Integrated Service Model", "โมเดลบริการแบบบูรณาการ")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t(
                  "Our approach combines consultation, implementation, and ongoing operation to deliver comprehensive IT solutions that grow with your business.",
                  "วิธีการของเราผสมผสานการให้คำปรึกษา การติดตั้ง และการดำเนินงานอย่างต่อเนื่อง เพื่อส่งมอบโซลูชันไอทีครบวงจรที่เติบโตไปพร้อมกับธุรกิจของคุณ"
                )}
              </p>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Consult", titleTh: "ปรึกษา", desc: "Paving the idea and task toward your goal", descTh: "วางแนวความคิดและงานสู่เป้าหมายของคุณ" },
                  { step: "02", title: "Implement", titleTh: "ติดตั้ง", desc: "Take action toward the goal", descTh: "ดำเนินการสู่เป้าหมาย" },
                  { step: "03", title: "Operate", titleTh: "ดำเนินงาน", desc: "Continuously stabilize and improve workflow", descTh: "รักษาเสถียรภาพและปรับปรุงเวิร์กโฟลว์อย่างต่อเนื่อง" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-sunny-teal text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t(item.title, item.titleTh)}</h4>
                      <p className="text-gray-600 text-sm">{t(item.desc, item.descTh)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-sunny-teal rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">{t("Support Habits", "นิสัยในการสนับสนุน")}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">{t("Business First", "ธุรกิจก่อน")}</h4>
                  <p className="text-white/80">
                    {t(
                      "IT department exists because we help drive the business further, not the other way around.",
                      "แผนกไอทีมีอยู่เพราะเราช่วยขับเคลื่อนธุรกิจให้ก้าวไปข้างหน้า ไม่ใช่กลับกัน"
                    )}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{t("Attention into the Details", "ใส่ใจในรายละเอียด")}</h4>
                  <p className="text-white/80">
                    {t(
                      "A little chronic problem can cause major incident one day. We catch issues early.",
                      "ปัญหาเรื้อรังเล็กน้อยอาจก่อให้เกิดเหตุการณ์ร้ายแรงในวันหนึ่ง เราจับปัญหาตั้งแต่เนิ่นๆ"
                    )}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{t("Pro-active Services", "บริการเชิงรุก")}</h4>
                  <p className="text-white/80">
                    {t(
                      "Plan ahead, fix the problem before it occurs. If it happens, we already know how to fix.",
                      "วางแผนล่วงหน้า แก้ไขปัญหาก่อนที่จะเกิด หากเกิดขึ้น เรารู้แล้วว่าต้องแก้ไขอย่างไร"
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-sunny-teal/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t("Ready to Work Together?", "พร้อมร่วมงานกัน?")}
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              {t(
                "Let's discuss how we can help transform your IT operations and drive your business forward.",
                "มาหารือกันว่าเราจะช่วยเปลี่ยนแปลงการดำเนินงานไอทีและขับเคลื่อนธุรกิจของคุณได้อย่างไร"
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
