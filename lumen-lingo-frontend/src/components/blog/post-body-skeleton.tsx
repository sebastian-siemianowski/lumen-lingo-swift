import { Skeleton } from '@/components/ui/skeleton';

/** Skeleton matching the blog prose layout to prevent CLS. */
export function PostBodySkeleton() {
  return (
    <div aria-hidden className="mx-auto max-w-3xl space-y-6 px-6 py-12 sm:px-8">
      {/* Heading */}
      <Skeleton className="h-8 w-3/5" />

      {/* Paragraph block 1 */}
      <div className="space-y-2.5">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[95%]" />
        <Skeleton className="h-4 w-[88%]" />
        <Skeleton className="h-4 w-[92%]" />
      </div>

      {/* Sub-heading */}
      <Skeleton className="h-6 w-2/5" />

      {/* Paragraph block 2 */}
      <div className="space-y-2.5">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[85%]" />
      </div>

      {/* Image placeholder */}
      <Skeleton className="aspect-video w-full rounded-[--radius-card]" />

      {/* Paragraph block 3 */}
      <div className="space-y-2.5">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[93%]" />
        <Skeleton className="h-4 w-[78%]" />
        <Skeleton className="h-4 w-[87%]" />
      </div>
    </div>
  );
}
