import type { MetadataRoute } from 'next';
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://lumenlingo.com';
  const { locales, defaultLocale } = routing;

  function localizedUrl(path: string): string {
    return `${siteUrl}${path}`;
  }

  function alternates(path: string) {
    return {
      languages: Object.fromEntries(
        locales.map((locale) => [
          locale,
          `${siteUrl}${locale === defaultLocale ? '' : `/${locale}`}${path}`,
        ]),
      ),
    };
  }

  // Static pages
  const staticPaths = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/features', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/pricing', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/blog', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/cookies', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/eula', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/accessibility', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/security', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/data-request', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/download', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/languages', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/early-access', changeFrequency: 'monthly' as const, priority: 0.6 },
    { path: '/demo', changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map(({ path, changeFrequency, priority }) => ({
    url: localizedUrl(path || '/'),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: alternates(path),
  }));

  // Blog posts
  const posts = getAllPosts();
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.updatedAt ?? post.frontmatter.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: alternates(`/blog/${post.slug}`),
  }));

  // Category pages
  const categories = getAllCategories();
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${siteUrl}/blog/category/${encodeURIComponent(cat)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
    alternates: alternates(`/blog/category/${encodeURIComponent(cat)}`),
  }));

  // Tag pages
  const tags = getAllTags();
  const tagPages: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${siteUrl}/blog/tag/${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.4,
    alternates: alternates(`/blog/tag/${encodeURIComponent(tag)}`),
  }));

  return [...staticPages, ...postPages, ...categoryPages, ...tagPages];
}
