import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import type { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sunny-teal/10 to-sunny-gold/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400 text-sm">{member.name}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-sunny-teal font-medium text-sm mb-4">{member.role}</p>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {member.specializations.slice(0, 3).map((spec) => (
            <span 
              key={spec} 
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sunny-teal hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-sunny-teal hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
