import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/language';

// Contact info with bilingual support
const getContactInfo = (t: (en: string, th?: string) => string) => [
  { 
    icon: Mail, 
    label: t("Email", "อีเมล"), 
    value: "contact@sunnydaylife.tech", 
    href: "mailto:contact@sunnydaylife.tech" 
  },
  { 
    icon: Phone, 
    label: t("Phone", "โทรศัพท์"), 
    value: "+66 2 XXX XXXX", 
    href: "tel:+662XXXXXXX" 
  },
  { 
    icon: MapPin, 
    label: t("Address", "ที่อยู่"), 
    value: t("Bangkok, Thailand", "กรุงเทพมหานคร, ประเทศไทย") 
  },
  { 
    icon: Clock, 
    label: t("Hours", "เวลาทำการ"), 
    value: t("Mon-Fri: 9:00 AM - 6:00 PM", "จันทร์-ศุกร์: 9:00 - 18:00 น.") 
  },
];

// LINE contact
const lineContact = {
  id: "@sunnyday365",
  url: "https://line.me/ti/p/@sunnyday365"
};

export default function Contact() {
  const { t } = useLanguage();
  const contactInfo = getContactInfo(t);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-sunny-teal">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-white/80 font-medium">{t("Contact Us", "ติดต่อเรา")}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              {t("Let's Build Something Different", "มาสร้างสิ่งที่แตกต่างไปด้วยกัน")}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              {t(
                "Focus on your work, let us deal with technology. We'll contact you within 24 hours.",
                "โฟกัสกับงานของคุณ เรื่องเทคโนโลยีให้เราดูแล เราจะติดต่อคุณอย่างเร็วที่สุดภายใน 24 ชั่วโมง"
              )}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
                {t("Send Message", "ส่งข้อความ")}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                {t("Request Free Consultation", "ขอคำปรึกษาฟรี")}
              </h2>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("First Name", "ชื่อ")}
                    </label>
                    <Input placeholder={t("John", "สมชาย")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("Last Name", "นามสกุล")}
                    </label>
                    <Input placeholder={t("Doe", "ใจดี")} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Email", "อีเมล")}
                  </label>
                  <Input type="email" placeholder="email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Phone", "เบอร์โทรศัพท์")}
                  </label>
                  <Input placeholder="08X-XXX-XXXX" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Company Name", "ชื่อบริษัท")}
                  </label>
                  <Input placeholder={t("Your company name", "ชื่อบริษัทของคุณ")} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Service Interested In", "สนใจบริการด้านใด")}
                  </label>
                  <select className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-sunny-teal">
                    <option>{t("Select a service", "เลือกบริการ")}</option>
                    <option>{t("Virtual IT Department", "แผนก IT เสมือนจริง")}</option>
                    <option>{t("IT Debt Collection", "ระบบ IT สำหรับธุรกิจบริหารหนี้")}</option>
                    <option>{t("IT Compliance", "IT Compliance & ISO")}</option>
                    <option>{t("IT Project Overseas", "โครงการ IT ต่างประเทศ")}</option>
                    <option>{t("Other", "อื่นๆ")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("Message", "ข้อความถึงเรา")}
                  </label>
                  <Textarea 
                    placeholder={t(
                      "Tell us about your IT challenges and requirements...",
                      "บอกโจทย์ความต้องการด้านไอทีของคุณกับเรา..."
                    )}
                    rows={5}
                  />
                </div>

                <Button size="lg" className="w-full">
                  <Send className="mr-2 w-5 h-5" />
                  {t("Send Message", "ส่งข้อความ")}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
                {t("Contact Information", "ข้อมูลติดต่อ")}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                {t("Reach Out to Us", "ติดต่อเรา")}
              </h2>
              <p className="text-gray-600 mb-8">
                {t(
                  "Have a question or want to discuss your project? We're here to help.",
                  "มีคำถามหรือต้องการปรึกษาโครงการ? เราพร้อมช่วยเหลือคุณ"
                )}
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sunny-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-sunny-teal" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-lg font-medium text-gray-900 hover:text-sunny-teal transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium text-gray-900">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}

                {/* LINE Contact */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LINE</div>
                    <a 
                      href={lineContact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors"
                    >
                      {lineContact.id}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      {t("Scan QR code or click to add friend", "สแกน QR Code หรือคลิกเพื่อเพิ่มเพื่อน")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.589041473904!2d100.562379375899!3d13.74565569735744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eef159a441f%3A0x638d1a6a7a5f7e4e!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("Office Location", "ที่ตั้งสำนักงาน")}
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
