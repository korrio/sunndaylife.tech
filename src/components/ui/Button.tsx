import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef, ReactElement, cloneElement } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'default';
  size?: 'sm' | 'md' | 'lg' | 'default';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm',
      
      // Variant styles
      variant === 'primary' && 'bg-sunny-teal text-white hover:bg-sunny-teal-dark focus:ring-sunny-teal',
      variant === 'secondary' && 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
      variant === 'outline' && 'border-2 border-sunny-teal text-sunny-teal hover:bg-sunny-teal hover:text-white focus:ring-sunny-teal',
      variant === 'ghost' && 'hover:bg-gray-100 focus:ring-gray-500',
      variant === 'white' && 'bg-white text-gray-900 hover:bg-gray-100 focus:ring-white',
      variant === 'default' && 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500',
      
      // Size styles
      size === 'sm' && 'px-4 py-2 text-sm',
      size === 'md' && 'px-6 py-3 text-base',
      size === 'lg' && 'px-8 py-4 text-lg',
      
      className
    );

    if (asChild && children) {
      // Clone the child element (usually a Link) and add our button classes
      const child = children as ReactElement;
      return cloneElement(child, {
        className: cn(baseClasses, child.props.className),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
