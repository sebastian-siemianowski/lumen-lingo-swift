import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, background, id, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn('relative py-[--spacing-section-y]', className)}
        {...props}
      >
        {background && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            {background}
          </div>
        )}
        <div className="relative">{children}</div>
      </section>
    );
  },
);

Section.displayName = 'Section';

export { Section, type SectionProps };
