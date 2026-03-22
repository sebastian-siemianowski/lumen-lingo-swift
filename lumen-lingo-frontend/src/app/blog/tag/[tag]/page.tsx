import type { Metadata } from 'next';
import { getAllTags, getPostsByTag, paginatePosts } from '@/lib/blog';
import { PostCard, Pagination } from '@/components/blog';
import { PageTransition } from '@/components/layout';
import Link from 'next/link';

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

interface TagPageProps {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `#${decoded} — Blog`,
    description: `Browse LumenLingo blog posts tagged with "${decoded}".`,
    alternates: {
      canonical: `https://lumenlingo.com/blog/tag/${tag}`,
    },
  };
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const { tag } = await params;
  const sp = await searchParams;
  const decoded = decodeURIComponent(tag);
  const page = Number(sp.page) || 1;
  const allPosts = getPostsByTag(decoded);
  const { posts, totalPages, currentPage } = paginatePosts(allPosts, page);

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[--color-foreground-muted]">
            <Link href="/blog" className="transition-colors hover:text-[--color-violet]">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[--color-foreground]">#{decoded}</span>
          </nav>

          <h1 className="font-display text-3xl font-bold text-[--color-foreground] sm:text-4xl">
            #{decoded}
          </h1>
          <p className="mt-3 text-[--color-foreground-secondary]">
            {allPosts.length} {allPosts.length === 1 ? 'post' : 'posts'} with this tag
          </p>

          {posts.length > 0 ? (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-[--color-foreground-muted]">
              No posts with this tag yet.
            </p>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath={`/blog/tag/${tag}`}
          />
        </div>
      </section>
    </PageTransition>
  );
}
