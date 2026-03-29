import 'server-only';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { z } from 'zod';

export { formatDate, type BlogPost, type BlogFrontmatter } from './blog-utils';
import type { BlogPost } from './blog-utils';

// ─── Frontmatter Schema ──────────────────────────────────────────────
const frontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  publishedAt: z.string().refine((d) => !isNaN(Date.parse(d)), {
    message: 'publishedAt must be a valid date string',
  }),
  updatedAt: z
    .string()
    .refine((d) => !isNaN(Date.parse(d)), {
      message: 'updatedAt must be a valid date string',
    })
    .optional(),
  author: z.string().default('LumenShore Team'),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
  category: z.enum([
    'Language Tips',
    'App Updates',
    'Learning Science',
    'Culture',
    'Guides',
  ]),
  readingTime: z.string().optional(),
  featured: z.boolean().default(false),
});

type Frontmatter = z.infer<typeof frontmatterSchema>;

// ─── Paths ──────────────────────────────────────────────────────────
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

/**
 * Resolve the content directory for a given locale.
 * Per-locale posts live in src/content/blog/{locale}/ (e.g. blog/es/).
 * Falls back to the default directory (English) when no locale dir exists.
 */
function getContentDir(locale?: string): string {
  if (locale && locale !== 'en') {
    const localeDir = path.join(CONTENT_DIR, locale);
    if (fs.existsSync(localeDir)) return localeDir;
  }
  return CONTENT_DIR;
}

function getMDXFiles(locale?: string): string[] {
  const dir = getContentDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'));
}

const CJK_LOCALES = new Set(['ja', 'zh']);
const CJK_CHARS_PER_MINUTE = 500;
const CJK_REGEX = /[\u3000-\u9fff\uf900-\ufaff]/g;

function cjkReadingTime(text: string): string {
  const cjkChars = (text.match(CJK_REGEX) || []).length;
  const nonCjk = text.replace(CJK_REGEX, ' ');
  const words = nonCjk.split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(cjkChars / CJK_CHARS_PER_MINUTE + words / 200);
  return `${minutes} min read`;
}

function parsePost(filename: string, locale?: string): BlogPost | null {
  const dir = getContentDir(locale);
  const filePath = path.join(dir, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    console.error(`Invalid frontmatter in ${filename}:`, parsed.error.format());
    return null;
  }

  const fm = parsed.data;

  // Auto-calculate reading time if not set
  if (!fm.readingTime) {
    fm.readingTime = locale && CJK_LOCALES.has(locale)
      ? cjkReadingTime(content)
      : readingTime(content).text;
  }

  const slug = filename.replace(/\.mdx$/, '');

  return { slug, frontmatter: fm as BlogPost['frontmatter'], content };
}

// ─── Public API ────────────────────────────────────────────────────
export function getAllPosts(locale?: string): BlogPost[] {
  return getMDXFiles(locale)
    .map((f) => parsePost(f, locale))
    .filter((p): p is BlogPost => p !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime(),
    );
}

export function getPostBySlug(slug: string, locale?: string): BlogPost | null {
  const filename = `${slug}.mdx`;
  const dir = getContentDir(locale);
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) {
    // Fall back to default locale if locale-specific post doesn't exist
    if (locale && locale !== 'en') return getPostBySlug(slug);
    return null;
  }
  return parsePost(filename, locale);
}

export function getPostsByCategory(category: string, locale?: string): BlogPost[] {
  return getAllPosts(locale).filter(
    (p) => p.frontmatter.category.toLowerCase() === category.toLowerCase(),
  );
}

export function getPostsByTag(tag: string, locale?: string): BlogPost[] {
  return getAllPosts(locale).filter((p) =>
    p.frontmatter.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

export function getAllCategories(locale?: string): string[] {
  const posts = getAllPosts(locale);
  const cats = new Set(posts.map((p) => p.frontmatter.category));
  return Array.from(cats).sort();
}

export function getAllTags(locale?: string): string[] {
  const posts = getAllPosts(locale);
  const tags = new Set(posts.flatMap((p) => p.frontmatter.tags));
  return Array.from(tags).sort();
}

export function getFeaturedPost(locale?: string): BlogPost | undefined {
  return getAllPosts(locale).find((p) => p.frontmatter.featured);
}

export function getRelatedPosts(currentSlug: string, limit = 3, locale?: string): BlogPost[] {
  const current = getPostBySlug(currentSlug, locale);
  if (!current) return [];

  const all = getAllPosts(locale).filter((p) => p.slug !== currentSlug);

  // Score posts by shared tags and category match
  const scored = all.map((post) => {
    let score = 0;
    if (post.frontmatter.category === current.frontmatter.category) score += 2;
    const sharedTags = post.frontmatter.tags.filter((t) =>
      current.frontmatter.tags.includes(t),
    );
    score += sharedTags.length;
    return { post, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

export function paginatePosts(
  posts: BlogPost[],
  page: number,
  perPage = 12,
): { posts: BlogPost[]; totalPages: number; currentPage: number } {
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage));
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * perPage;
  return {
    posts: posts.slice(start, start + perPage),
    totalPages,
    currentPage,
  };
}
