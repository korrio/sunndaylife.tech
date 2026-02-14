import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import siteSettings from '@/content/site-settings.json';

const contactInfo = [
  { icon: Mail, label: "Email", value: siteSettings.contactEmail, href: `mailto:${siteSettings.contactEmail}` },
  { icon: Phone, label: "Phone", value: siteSettings.contactPhone || "+66 XXX XXX XXX", href: `tel:${siteSettings.contactPhone}` },
  { icon: MapPin, label: "Address", value: siteSettings.address },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 9:00 AM - 6:00 PM" },
];

export default function Contact() {
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
            <span className="text-white/80 font-medium">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Let's Build Something Different
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Ready to transform your IT operations? Get in touch with us for a free consultation 
              and discover how we can help your business grow.
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
                Send Message
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                Get in Touch
              </h2>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input placeholder="Your company name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-sunny-teal">
                    <option>Select a service</option>
                    <option>Virtual IT Department</option>
                    <option>IT Debt Collection</option>
                    <option>IT Compliance</option>
                    <option>IT Project Overseas</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project and requirements..."
                    rows={5}
                  />
                </div>

                <Button size="lg" className="w-full">
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
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
                Contact Information
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                Reach Out to Us
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to discuss your project? We're here to help. 
                Reach out through any of the following channels.
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
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Map will be displayed here</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
