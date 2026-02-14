import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-8 border border-gray-100"
    >
      <Quote className="w-10 h-10 text-sunny-gold/30 mb-4" />
      
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-sunny-gold text-sunny-gold" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-sunny-teal/10 flex items-center justify-center">
          <span className="text-sunny-teal font-bold">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
          {(testimonial.role || testimonial.company) && (
            <p className="text-sm text-gray-500">
              {testimonial.role}{testimonial.role && testimonial.company && ', '}{testimonial.company}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
