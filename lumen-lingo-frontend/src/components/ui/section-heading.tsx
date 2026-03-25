import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
  gradient?: boolean;
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ title, subtitle, align = 'center', gradient = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(align === 'center' && 'text-center', className)}
        {...props}
      >
        <h2
          className={cn(
            'font-display text-2xl font-bold tracking-tight md:text-4xl text-foreground',
            gradient && 'text-gradient',
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={cn(
            'mt-4 text-lg leading-relaxed text-foreground-secondary',
            align === 'center' && 'mx-auto max-w-2xl',
          )}>
            {subtitle}
          </p>
        )}
      </div>
    );
  },
);

SectionHeading.displayName = 'SectionHeading';

export { SectionHeading, type SectionHeadingProps };
