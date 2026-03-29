'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { spring } from '@/lib/motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  tint?: 'default' | 'violet' | 'cyan' | 'amber';
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}

const tintStyles: Record<string, string> = {
  default: '',
  violet: 'border-violet/20 hover:border-violet/30',
  cyan: 'border-cyan/20 hover:border-cyan/30',
  amber: 'border-amber/20 hover:border-amber/30',
};

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ tint = 'default', hover = true, className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
        transition={spring.snappy}
        className={cn(
          'glass-card rounded-[--radius-card] p-6 shadow-card transition-all duration-300',
          hover && 'glass-card-hover hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)]',
          tintStyles[tint],
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

GlassCard.displayName = 'GlassCard';

export { GlassCard, type GlassCardProps };
