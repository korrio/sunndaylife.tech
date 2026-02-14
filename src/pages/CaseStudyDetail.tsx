import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, Container } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { caseStudies } from '@/content/case-studies';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(cs => cs.id === id);

  if (!caseStudy) {
    return (
      <Section className="pt-32">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
            <Button asChild>
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  const currentIndex = caseStudies.findIndex(cs => cs.id === id);
  const prevCaseStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCaseStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-sunny-teal">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Case Studies
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-white/50 text-white">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-white/90 text-xl">{caseStudy.subtitle}</p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="h-96 bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
                <span className="text-gray-400">Case Study Image</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {caseStudy.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-sunny-teal/5 rounded-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
                <ul className="space-y-3">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-sunny-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-32">
                <h3 className="font-bold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">Category</div>
                    <div className="font-medium">{caseStudy.tags[0]}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Status</div>
                    <Badge variant="sunny">Completed</Badge>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-bold text-gray-900 mb-4">Need Similar Solution?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Let's discuss how we can help with your project.
                  </p>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section className="bg-gray-50">
        <Container>
          <div className="flex justify-between items-center">
            {prevCaseStudy ? (
              <Button variant="outline" asChild>
                <Link to={`/case-studies/${prevCaseStudy.id}`}>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Previous
                </Link>
              </Button>
            ) : (
              <div />
            )}
            
            {nextCaseStudy ? (
              <Button variant="outline" asChild>
                <Link to={`/case-studies/${nextCaseStudy.id}`}>
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
