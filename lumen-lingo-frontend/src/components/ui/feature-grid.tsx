import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FeatureGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4;
  children: React.ReactNode;
}

const colStyles: Record<number, string> = {
  2: 'grid grid-cols-1 sm:grid-cols-2 gap-6',
  3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
  4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6',
};

const FeatureGrid = forwardRef<HTMLDivElement, FeatureGridProps>(
  ({ columns = 3, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(colStyles[columns], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FeatureGrid.displayName = 'FeatureGrid';

export { FeatureGrid, type FeatureGridProps };
