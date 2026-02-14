import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'dark' | 'gradient' | 'sunny';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'py-20 lg:py-28',
          variant === 'default' && 'bg-white',
          variant === 'dark' && 'bg-gray-900 text-white',
          variant === 'gradient' && 'bg-gradient-to-br from-sunny-gold via-sunny-light to-sunny-gold',
          variant === 'sunny' && 'bg-sunny-teal text-white',
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)} 
      {...props} 
    />
  )
);

Container.displayName = 'Container';

export { Section, Container };
