import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Globe, Shield, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Globe,
    title: "Business-Driven Solutions",
    description: "IT exists to drive businesses forward, not hold them back. We align technology with your business goals."
  },
  {
    icon: Shield,
    title: "Attention to Details",
    description: "Even minor IT issues can escalate; we proactively address them before they disrupt operations."
  },
  {
    icon: Users,
    title: "Owner Driven Services",
    description: "Direct ownership and accountability in everything we do. Your success is our priority."
  },
  {
    icon: Award,
    title: "Continuous Improvement",
    description: "We strive to evolve with every client, delivering tailored services that grow alongside their needs."
  }
];

const experiences = [
  { region: "Somalia", description: "Critical IT operations management" },
  { region: "Kenya", description: "International organization support" },
  { region: "Myanmar", description: "Regional IT infrastructure deployment" },
  { region: "Egypt", description: "International discussions participation" },
  { region: "Serbia", description: "Strategic IT consulting" },
  { region: "Timor Leste", description: "Server installation project" },
];

export default function About() {
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
            <span className="text-white/80 font-medium">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Your Trusted IT Partner
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Sunny Day 365 was founded to break away from traditional approaches to how businesses 
              manage technology. Led by Phongsaphat Duma, a seasoned IT professional with over a 
              decade of experience in international organizations.
            </p>
          </motion.div>
        </Container>
      </section>

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
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Bridging Global Best Practices with Local Needs
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our journey began with a vision to bridge global best practices with local business needs. 
                  From managing IT operations in critical regions like Somalia, Kenya, and Myanmar to 
                  participating in international discussions in Egypt and Serbia, our expertise is rooted 
                  in real-world problem-solving and strategic thinking.
                </p>
                <p>
                  At Sunny Day, we believe that technology should empower businesses to focus on what they 
                  do best. By prioritizing business continuity, IT security, and innovation, we help our 
                  clients grow while ensuring stability and efficiency in their operations.
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Global Experience</h3>
              <div className="grid grid-cols-2 gap-4">
                {experiences.map((exp) => (
                  <div key={exp.region} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-sunny-teal">{exp.region}</div>
                    <div className="text-sm text-gray-600">{exp.description}</div>
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
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              What We Stand For
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Integrated Service Model
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our approach combines consultation, implementation, and ongoing operation to deliver 
                comprehensive IT solutions that grow with your business.
              </p>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Consult", desc: "Paving the idea and task toward your goal" },
                  { step: "02", title: "Implement", desc: "Take action toward the goal" },
                  { step: "03", title: "Operate", desc: "Continuously stabilize and improve workflow" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-sunny-teal text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
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
              <h3 className="text-2xl font-bold mb-6">Support Habits</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Business First</h4>
                  <p className="text-white/80">
                    IT department exists because we help drive the business further, not the other way around.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Attention into the Details</h4>
                  <p className="text-white/80">
                    A little chronic problem can cause major incident one day. We catch issues early.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Pro-active Services</h4>
                  <p className="text-white/80">
                    Plan ahead, fix the problem before it occurs. If it happens, we already know how to fix.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="gradient">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              Let's discuss how we can help transform your IT operations and drive your business forward.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
