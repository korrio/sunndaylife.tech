import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/Button';
import { services } from '@/content/services';
import { ArrowRight, CheckCircle2, Clock, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  { icon: Clock, title: "Fast Deployment", desc: "IT department ready in 30 days" },
  { icon: Users, title: "Expert Team", desc: "10+ years of experience" },
  { icon: Shield, title: "Secure & Compliant", desc: "ISO27001 certified approach" },
];

export default function Services() {
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
            <span className="text-white/80 font-medium">Our Services</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Comprehensive IT Solutions
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              From virtual IT departments to overseas project implementation, we deliver 
              value-driven, proactive, and tailored IT solutions for your business.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              The Sunny Day Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-sunny-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-sunny-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                What You'll Receive
              </h2>
              <div className="space-y-4">
                {[
                  "Continuous Improvement Report",
                  "Tailor Made Services and Agile Management",
                  "Pro-active monitoring and maintenance",
                  "Regular security audits and updates",
                  "24/7 support for critical issues",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sunny-teal flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-sunny-gold/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Transform Your IT?
              </h3>
              <p className="text-gray-600 mb-8">
                Get started with a free consultation. We'll analyze your current setup 
                and recommend the best solutions for your business.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
