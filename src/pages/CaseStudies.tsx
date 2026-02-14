import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { getCaseStudies } from '@/lib/storage';
import { useState, useEffect } from 'react';

const categories = ['All', 'Overseas Project', 'Debt Collection', 'Compliance', 'Interim IT'];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [caseStudies, setCaseStudies] = useState(getCaseStudies());

  // Refresh data when component mounts (to get latest from localStorage)
  useEffect(() => {
    setCaseStudies(getCaseStudies());
  }, []);

  const filteredCaseStudies = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.tags.some(tag => tag.includes(activeCategory)));

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
            <span className="text-white/80 font-medium">Case Studies</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Our Latest Projects
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Discover how we've helped businesses across different industries transform 
              their IT operations and achieve their goals.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter */}
      <Section className="pb-0">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-sunny-teal text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section>
        <Container>
          <div className="grid gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
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

      {/* Stats */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '5', label: 'Countries Deployed' },
              { value: '50+', label: 'Projects Completed' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '6', label: 'Months to ISO Cert' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-sunny-teal">{stat.value}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
