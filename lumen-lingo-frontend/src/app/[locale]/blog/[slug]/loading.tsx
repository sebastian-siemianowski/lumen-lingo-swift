import { PostBodySkeleton } from '@/components/blog/post-body-skeleton';
import { Skeleton } from '@/components/ui/skeleton';

/** Shown during route transitions to individual blog posts. */
export default function BlogPostLoading() {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero cover image placeholder */}
      <div className="relative h-[40vh] min-h-[320px]">
        <Skeleton className="h-full w-full rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-background] via-[--color-background]/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-6 pb-8 sm:px-8">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-5 w-14 rounded-full" />
          </div>
          <Skeleton className="mt-4 h-10 w-4/5" />
          <Skeleton className="mt-2 h-10 w-3/5" />
          <div className="mt-4 flex gap-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>

      <PostBodySkeleton />
    </div>
  );
}
