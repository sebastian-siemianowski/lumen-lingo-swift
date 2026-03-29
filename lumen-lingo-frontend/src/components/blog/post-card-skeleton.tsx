import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface PostCardSkeletonProps {
  featured?: boolean;
}

/** Skeleton matching <PostCard> dimensions to prevent layout shift. */
export function PostCardSkeleton({ featured = false }: PostCardSkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'overflow-hidden rounded-[--radius-card] border border-[--color-glass-border] bg-[--color-surface-card]',
        featured && 'md:grid md:grid-cols-2 md:gap-0',
      )}
    >
      {/* Image area */}
      <Skeleton
        className={cn(
          'w-full rounded-none',
          featured ? 'aspect-[16/10] md:aspect-auto md:h-full' : 'aspect-[16/9]',
        )}
      />

      {/* Content */}
      <div className={cn('p-6', featured && 'md:p-8')}>
        {/* Title */}
        <Skeleton className={cn('h-6 w-4/5', featured && 'h-7')} />
        {featured && <Skeleton className="mt-2 h-7 w-3/5" />}

        {/* Description lines */}
        <Skeleton className="mt-4 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-11/12" />
        <Skeleton className="mt-2 h-4 w-3/4" />

        {/* Meta row */}
        <div className="mt-5 flex items-center gap-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-14" />
        </div>
      </div>
    </div>
  );
}
