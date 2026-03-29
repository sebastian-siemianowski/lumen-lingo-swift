import { cn } from '@/lib/utils';

type SkeletonVariant = 'text' | 'heading' | 'image' | 'card' | 'button' | 'avatar';

interface SkeletonProps {
  className?: string;
  variant?: SkeletonVariant;
}

const variantStyles: Record<SkeletonVariant, string> = {
  text: 'h-4 w-full rounded-sm',
  heading: 'h-6 w-3/4 rounded-sm',
  image: 'h-48 w-full rounded-[--radius-card]',
  card: 'h-64 w-full rounded-[--radius-card]',
  button: 'h-10 w-32 rounded-[--radius-button]',
  avatar: 'h-10 w-10 rounded-full',
};

/** Violet-tinted shimmer skeleton matching the glass morphism aesthetic. */
export function Skeleton({ className, variant }: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'animate-skeleton border border-[--color-glass-border]/50 bg-[--color-glass] motion-reduce:animate-none',
        variant ? variantStyles[variant] : 'rounded-sm',
        className,
      )}
    />
  );
}

/** Pre-configured text block with varying widths to simulate real text. */
export function SkeletonTextBlock({ lines = 4, className }: { lines?: number; className?: string }) {
  const widths = ['w-full', 'w-[85%]', 'w-[92%]', 'w-[70%]', 'w-[88%]', 'w-[76%]'];
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton key={i} variant="text" className={widths[i % widths.length]} />
      ))}
    </div>
  );
}
