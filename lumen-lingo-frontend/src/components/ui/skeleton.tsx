import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

/** Violet-tinted shimmer skeleton matching the glass morphism aesthetic. */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'animate-skeleton rounded-[--radius-sm] bg-white/[0.04]',
        className,
      )}
    />
  );
}
