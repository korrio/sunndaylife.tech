import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'sunny';
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full',
          variant === 'default' && 'bg-gray-100 text-gray-800',
          variant === 'outline' && 'bg-transparent border border-gray-300 text-gray-700',
          variant === 'sunny' && 'bg-sunny-gold/10 text-sunny-teal border border-sunny-gold/30',
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
