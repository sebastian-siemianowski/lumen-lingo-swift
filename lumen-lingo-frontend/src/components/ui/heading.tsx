import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  gradient?: boolean;
  children: React.ReactNode;
}

const headingSizes: Record<HeadingLevel, string> = {
  h1: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]',
  h2: 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]',
  h3: 'text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.2]',
  h4: 'text-xl sm:text-2xl font-semibold leading-[1.3]',
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = 'h2', gradient = false, className, children, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          'font-display text-foreground',
          headingSizes[Tag],
          gradient && 'text-gradient',
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = 'Heading';

export { Heading, type HeadingProps };
