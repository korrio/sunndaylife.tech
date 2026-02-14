import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { TeamCard } from '@/components/TeamCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { homePage, testimonials } from '@/content/pages';
import { services } from '@/content/services';
import { getCaseStudies, getTeamMembers, getPage } from '@/lib/storage';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [caseStudies, setCaseStudies] = useState(getCaseStudies());
  const [teamMembers, setTeamMembers] = useState(getTeamMembers());
  const [pageData, setPageData] = useState(getPage('home') || homePage);

  // Refresh data when component mounts
  useEffect(() => {
    setCaseStudies(getCaseStudies());
    setTeamMembers(getTeamMembers());
    const storedPage = getPage('home');
    if (storedPage) {
      setPageData(storedPage);
    }
  }, []);

  const whoWeAre = pageData.sections.find(s => s.id === 'who-we-are');
  const philosophy = pageData.sections.find(s => s.id === 'philosophy');
  const cta = pageData.sections.find(s => s.id === 'cta');

  return (
    <>
      {/* Hero */}
      <Hero 
        title={pageData.hero.title}
        description={pageData.hero.description}
      />

      {/* Who We Are */}
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
                {whoWeAre?.title}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                {whoWeAre?.content.heading}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {whoWeAre?.content.body}
              </p>
              <Button asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {whoWeAre?.content.stats?.map((stat: any) => (
                <div 
                  key={stat.label}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <div className="text-4xl font-bold text-sunny-teal mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
              Our Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              How We Help You
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
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
                {philosophy?.title}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                {philosophy?.content.heading}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {philosophy?.content.body}
              </p>

              <div className="space-y-4">
                {philosophy?.content.values?.map((value: any) => (
                  <div key={value.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sunny-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-sunny-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Business First, Technology Second
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe that IT should serve the business, not the other way around. 
                Our approach focuses on understanding your business needs first, then 
                designing technology solutions that drive real value and growth.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Case Studies Preview */}
      <Section className="bg-sunny-teal">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
                Our Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                Our Latest Projects
              </h2>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 border-white text-white hover:bg-white hover:text-sunny-teal" asChild>
              <Link to="/case-studies">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            {caseStudies.slice(0, 2).map((caseStudy, index) => (
              <CaseStudyCard 
                key={caseStudy.id} 
                caseStudy={caseStudy} 
                index={index}
                featured={index === 0}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Preview */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sunny-teal font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-sunny-teal rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {cta?.content.heading}
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              {cta?.content.description}
            </p>
            <Button variant="white" size="lg" asChild>
              <Link to={cta?.content.buttonLink || '/contact'}>
                {cta?.content.buttonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
