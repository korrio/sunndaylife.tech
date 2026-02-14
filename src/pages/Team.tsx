import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { TeamCard } from '@/components/TeamCard';
import { teamMembers } from '@/content/team';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Award, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  { icon: Globe, title: "Global Experience", desc: "Worked across 5+ countries" },
  { icon: Award, title: "Certified Experts", desc: "ISO & industry certified" },
  { icon: Users, title: "Client Focused", desc: "50+ satisfied clients" },
];

export default function Team() {
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
            <span className="text-white/80 font-medium">Our Team</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Meet Our Leadership
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Experienced professionals with a passion for delivering exceptional IT services. 
              Our team combines international experience with local expertise.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Team Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Highlights */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white rounded-lg p-8 shadow-sm"
              >
                <div className="w-16 h-16 bg-sunny-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-sunny-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
                Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Phongsaphat's Background
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-sunny-teal pl-6">
                  <h4 className="font-semibold text-gray-900">International Committee of the Red Cross (ICRC)</h4>
                  <p className="text-sunny-teal text-sm">Service Desk | Service Manager | APAC</p>
                  <p className="text-gray-600 mt-2">
                    Led IT service management across Asia-Pacific region, managing critical 
                    operations in challenging environments including Somalia, Kenya, and Myanmar.
                  </p>
                </div>
                <div className="border-l-4 border-gray-300 pl-6">
                  <h4 className="font-semibold text-gray-900">United Nations ILO</h4>
                  <p className="text-sunny-teal text-sm">Assistant Manager</p>
                  <p className="text-gray-600 mt-2">
                    Contributed to international labor organization IT initiatives, 
                    participating in discussions in Egypt and Serbia.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
                Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Sawee's Background
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-sunny-teal pl-6">
                  <h4 className="font-semibold text-gray-900">Homepro</h4>
                  <p className="text-sunny-teal text-sm">System Engineer Manager</p>
                  <p className="text-gray-600 mt-2">
                    Managed system engineering teams and infrastructure for one of Thailand's 
                    leading home improvement retailers.
                  </p>
                </div>
                <div className="border-l-4 border-gray-300 pl-6">
                  <h4 className="font-semibold text-gray-900">Media Plus</h4>
                  <p className="text-sunny-teal text-sm">System Analyst</p>
                  <p className="text-gray-600 mt-2">
                    Analyzed and optimized system performance for media and broadcasting 
                    technology infrastructure.
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
              Want to Join Our Team?
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              We're always looking for talented individuals who are passionate about IT 
              and delivering exceptional service to clients.
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
