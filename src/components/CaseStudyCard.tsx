import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/types';
import { Badge } from './ui/Badge';
import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
  featured?: boolean;
}

export function CaseStudyCard({ caseStudy, index, featured = false }: CaseStudyCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
      >
        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-auto bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sunny-teal/20 to-sunny-gold/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Case Study Image</span>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="sunny">{tag}</Badge>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
            <p className="text-sunny-teal font-medium mb-4">{caseStudy.subtitle}</p>
            <p className="text-gray-600 mb-6">{caseStudy.description}</p>
            <Link 
              to={`/case-studies/${caseStudy.id}`}
              className="inline-flex items-center text-sunny-teal font-medium hover:gap-3 gap-2 transition-all"
            >
              Read Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="h-48 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sunny-teal/20 to-sunny-gold/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Case Study Image</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {caseStudy.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sunny-teal transition-colors">
          {caseStudy.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{caseStudy.description}</p>
      </div>
    </motion.div>
  );
}
