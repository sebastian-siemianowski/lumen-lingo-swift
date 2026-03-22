import type { Metadata } from 'next';
import { getAllCategories, getPostsByCategory, paginatePosts } from '@/lib/blog';
import { PostCard, Pagination } from '@/components/blog';
import { PageTransition } from '@/components/layout';
import { BreadcrumbJsonLd } from '@/components/home';
import Link from 'next/link';

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: encodeURIComponent(category) }));
}

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  return {
    title: `${decoded} — Blog`,
    description: `Browse LumenLingo blog posts in the ${decoded} category. Tips, guides, and insights for language learners.`,
    alternates: {
      canonical: `https://lumenlingo.com/blog/category/${category}`,
    },
    openGraph: {
      title: `${decoded} — LumenLingo Blog`,
      description: `Browse LumenLingo blog posts in the ${decoded} category.`,
      url: `https://lumenlingo.com/blog/category/${category}`,
      siteName: 'LumenLingo',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${decoded} — LumenLingo Blog` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${decoded} — LumenLingo Blog`,
      description: `Browse LumenLingo blog posts in the ${decoded} category.`,
      images: ['/og-image.png'],
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category } = await params;
  const sp = await searchParams;
  const decoded = decodeURIComponent(category);
  const page = Number(sp.page) || 1;
  const allPosts = getPostsByCategory(decoded);
  const { posts, totalPages, currentPage } = paginatePosts(allPosts, page);

  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, { name: decoded, href: `/blog/category/${category}` }]} />
      <section className="relative pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[--color-foreground-muted]">
            <Link href="/blog" className="transition-colors hover:text-[--color-violet]">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[--color-foreground]">{decoded}</span>
          </nav>

          <h1 className="font-display text-3xl font-bold text-[--color-foreground] sm:text-4xl">
            {decoded}
          </h1>
          <p className="mt-3 text-[--color-foreground-secondary]">
            {allPosts.length} {allPosts.length === 1 ? 'post' : 'posts'} in this category
          </p>

          {posts.length > 0 ? (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-[--color-foreground-muted]">
              No posts in this category yet.
            </p>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath={`/blog/category/${category}`}
          />
        </div>
      </section>
    </PageTransition>
  );
}
