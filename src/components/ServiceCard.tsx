import { motion } from 'framer-motion';
import { Building2, Shield, CheckCircle, Globe, ArrowRight } from 'lucide-react';
import type { Service } from '@/types';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Shield,
  CheckCircle,
  Globe,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-8">
        <div className="w-14 h-14 bg-sunny-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-sunny-teal group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-sunny-teal group-hover:text-white transition-colors" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-6 line-clamp-3">
          {service.description}
        </p>

        {service.features && (
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-sunny-teal flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Link 
          to="/services"
          className="inline-flex items-center text-sunny-teal font-medium hover:gap-3 gap-2 transition-all"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
