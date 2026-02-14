import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { TeamCard } from '@/components/TeamCard';
import { getTeamMembers } from '@/lib/storage';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Award, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const highlights = [
  { icon: Globe, title: "Global Experience", desc: "Worked across 5+ countries" },
  { icon: Award, title: "Certified Experts", desc: "ISO & industry certified" },
  { icon: Users, title: "Client Focused", desc: "50+ satisfied clients" },
];

export default function Team() {
  const [teamMembers, setTeamMembers] = useState(getTeamMembers());

  // Refresh data when component mounts
  useEffect(() => {
    setTeamMembers(getTeamMembers());
  }, []);

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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                International Experience
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team has worked in critical regions around the world, bringing a wealth of 
                international experience to every project. From managing IT operations in Somalia, 
                Kenya, and Myanmar to participating in international discussions in Egypt and Serbia, 
                we understand the unique challenges of global IT deployments.
              </p>
              <ul className="space-y-3">
                {['ICRC (International Committee of the Red Cross)', 'UN ILO (International Labour Organization)', 'Global logistics and supply chain', 'International compliance standards'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sunny-teal rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Team?
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Owner-Driven Approach</h4>
                  <p className="text-gray-600 text-sm">Direct involvement from leadership in every project ensures quality delivery.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                  <p className="text-gray-600 text-sm">Successfully delivered projects across multiple industries and regions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                  <p className="text-gray-600 text-sm">Staying current with the latest technologies and best practices.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-sunny-teal">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Work With Our Team
            </h2>
            <p className="text-white/90 mb-8">
              Let's discuss how our experienced team can help transform your IT operations.
            </p>
            <Button variant="white" size="lg" asChild>
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
