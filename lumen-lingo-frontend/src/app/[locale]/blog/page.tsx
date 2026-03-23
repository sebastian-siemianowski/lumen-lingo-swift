import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getAllPosts, getPostsByCategory, getFeaturedPost, paginatePosts } from '@/lib/blog';
import { BlogHero, PostCard, CategoryFilter, Pagination } from '@/components/blog';
import { PageTransition } from '@/components/layout';
import { BreadcrumbJsonLd } from '@/components/home';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      ...buildAlternates('/blog', locale),
      types: {
        'application/rss+xml': localizedUrl('/blog/feed.xml', locale),
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/blog', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocales: getOgAlternateLocales(locale),
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LumenLingo Blog' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/og-image.png'],
    },
  };
}

interface BlogPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; page?: string }>;
}

export default async function BlogPage({ params: paramsPromise, searchParams }: BlogPageProps) {
  const { locale } = await paramsPromise;
  setRequestLocale(locale);
  const params = await searchParams;
  const category = params.category;
  const page = Number(params.page) || 1;

  const allPosts = category ? getPostsByCategory(category, locale) : getAllPosts(locale);
  const featured = !category ? getFeaturedPost(locale) : undefined;
  const postsWithoutFeatured = featured
    ? allPosts.filter((p) => p.slug !== featured.slug)
    : allPosts;
  const { posts, totalPages, currentPage } = paginatePosts(postsWithoutFeatured, page);

  const searchParamsRecord: Record<string, string> = {};
  if (category) searchParamsRecord.category = category;

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />
      <BlogHero />

      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <Suspense fallback={null}>
          <CategoryFilter />
        </Suspense>

        {/* Featured post */}
        {featured && page === 1 && !category && (
          <div className="mb-12">
            <PostCard post={featured} featured priority />
          </div>
        )}

        {/* Post grid */}
        {posts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[--color-surface-card]">
              <svg
                className="h-8 w-8 text-[--color-foreground-muted]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m0 0l3-3m-3 3l3 3"
                />
              </svg>
            </div>
            <h2 className="font-display text-xl font-bold text-[--color-foreground]">
              No posts found
            </h2>
            <p className="mt-2 text-sm text-[--color-foreground-muted]">
              {category
                ? `No posts in the "${category}" category yet. Check back soon!`
                : 'Blog posts are coming soon. Stay tuned!'}
            </p>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          searchParams={searchParamsRecord}
        />
      </section>
    </PageTransition>
  );
}
