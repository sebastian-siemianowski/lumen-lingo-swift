import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
} from '@/lib/blog';
import { MDXContent } from '@/components/blog/mdx-content';
import { PostCard } from '@/components/blog/post-card';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { ShareButtons } from '@/components/blog/share-buttons';
import { PageTransition } from '@/components/layout';
import { JsonLd, BreadcrumbJsonLd } from '@/components/home';
import { ScrollDepthTracker } from '@/components/analytics';
import { BlogNewsletterCTA } from '@/components/newsletter';

// ─── Static params for SSG ─────────────────────────────────────────
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// ─── Dynamic metadata ──────────────────────────────────────────────
interface SlugPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const { frontmatter } = post;
  const ogImage = frontmatter.image
    ? frontmatter.image
    : `/blog/og?title=${encodeURIComponent(frontmatter.title)}&category=${encodeURIComponent(frontmatter.category)}`;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: {
      canonical: `https://lumenlingo.com/blog/${slug}`,
    },
    openGraph: {
      title: `${frontmatter.title} — LumenLingo`,
      description: frontmatter.description,
      url: `https://lumenlingo.com/blog/${slug}`,
      siteName: 'LumenLingo',
      type: 'article',
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt ?? frontmatter.publishedAt,
      authors: [frontmatter.author],
      tags: frontmatter.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: frontmatter.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${frontmatter.title} — LumenLingo`,
      description: frontmatter.description,
      images: [ogImage],
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;
  const related = getRelatedPosts(slug, 3);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt ?? frontmatter.publishedAt,
    author: {
      '@type': 'Person',
      name: frontmatter.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LumenShore',
      logo: { '@type': 'ImageObject', url: 'https://lumenlingo.com/logo.png' },
    },
    image: frontmatter.image ?? 'https://lumenlingo.com/og-image.png',
    mainEntityOfPage: `https://lumenlingo.com/blog/${slug}`,
  };

  return (
    <PageTransition>
      <JsonLd data={articleLd} />
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, { name: frontmatter.title, href: `/blog/${slug}` }]} />

      <article>
        {/* Header */}
        <header className="relative overflow-hidden">
          {/* Cover image or gradient */}
          <div className="relative h-[40vh] min-h-[320px]">
            {frontmatter.image ? (
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-[--color-violet]/20 via-[--color-surface] to-[--color-cyan]/20" />
            )}
            {/* Gradient overlay for title readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[--color-background] via-[--color-background]/60 to-transparent" />
          </div>

          {/* Title overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-6 pb-8 sm:px-8">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link
                href={`/blog/category/${encodeURIComponent(frontmatter.category)}`}
                className="rounded-[--radius-pill] bg-[--color-violet]/15 px-3 py-1 text-xs font-semibold text-[--color-violet] transition-colors hover:bg-[--color-violet]/25"
              >
                {frontmatter.category}
              </Link>
              {frontmatter.tags.slice(0, 3).map((tag: string) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${encodeURIComponent(tag)}`}
                  className="rounded-[--radius-pill] bg-white/5 px-3 py-1 text-xs text-[--color-foreground-muted] transition-colors hover:bg-white/10 hover:text-[--color-foreground]"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-[--color-foreground] sm:text-4xl lg:text-5xl">
              {frontmatter.title}
            </h1>
          </div>
        </header>

        {/* Author bar */}
        <div className="mx-auto max-w-4xl px-6 py-6 sm:px-8">
          <div className="flex flex-wrap items-center gap-4 border-b border-[--color-glass-border] pb-6 text-sm text-[--color-foreground-secondary]">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[--color-violet]/15 font-display text-xs font-bold text-[--color-violet]">
                {frontmatter.author
                  .split(' ')
                  .map((w: string) => w[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <span className="font-medium text-[--color-foreground]">
                {frontmatter.author}
              </span>
            </div>
            <span aria-hidden="true">·</span>
            <time dateTime={frontmatter.publishedAt}>
              {formatDate(frontmatter.publishedAt)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{frontmatter.readingTime}</span>
            <div className="ml-auto">
              <ShareButtons
                title={frontmatter.title}
                url={`https://lumenlingo.com/blog/${slug}`}
              />
            </div>
          </div>
        </div>

        {/* Article body with TOC sidebar */}
        <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
          <div className="relative xl:grid xl:grid-cols-[1fr_220px] xl:gap-12">
            <div className="prose-lumenlingo mx-auto max-w-[720px]">
              <MDXContent source={content} />
              <BlogNewsletterCTA />
              <ScrollDepthTracker slug={slug} title={frontmatter.title} />
            </div>
            <aside className="hidden xl:block">
              <TableOfContents content={content} />
            </aside>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-[--color-glass-border] py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <h2 className="mb-10 font-display text-2xl font-bold text-[--color-foreground]">
              Continue Reading
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PostCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
