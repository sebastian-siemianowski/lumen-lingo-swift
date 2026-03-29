'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-violet text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:bg-violet-hover active:bg-violet-active hover:shadow-[0_0_48px_rgba(139,92,246,0.5)] focus-visible:shadow-[0_0_48px_rgba(139,92,246,0.5)]',
  secondary:
    'glass-card text-foreground hover:bg-glass-hover border border-glass-border hover:shadow-[0_0_24px_rgba(255,255,255,0.04)] focus-visible:shadow-[0_0_24px_rgba(255,255,255,0.04)]',
  ghost:
    'bg-transparent text-foreground-secondary hover:text-foreground hover:bg-white/5',
  link: 'bg-transparent text-violet hover:text-violet-hover underline-offset-4 hover:underline p-0',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5 text-sm rounded-[--radius-sm]',
  md: 'px-6 py-2.5 text-base rounded-[--radius-button]',
  lg: 'px-8 py-3 text-lg rounded-[--radius-button]',
  xl: 'px-10 py-4 text-xl rounded-[--radius-button]',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={cn(
          'inline-flex cursor-pointer items-center justify-center font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
