import { PostCardSkeleton } from '@/components/blog/post-card-skeleton';
import { Skeleton } from '@/components/ui/skeleton';

/** Shown during route transitions to blog pages. Matches BlogPage layout. */
export default function BlogLoading() {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero area placeholder */}
      <div className="relative flex items-center justify-center overflow-hidden py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <Skeleton className="mx-auto h-10 w-48" />
          <Skeleton className="mx-auto mt-4 h-5 w-80" />
        </div>
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        {/* Category filter placeholder */}
        <div className="mb-8 flex gap-3">
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </div>

        {/* Featured post skeleton */}
        <div className="mb-12">
          <PostCardSkeleton featured />
        </div>

        {/* Grid of 6 skeletons */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <PostCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
