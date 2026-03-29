import { describe, it, expect } from 'vitest';
import { formatDate } from '@/lib/blog-utils';
import type { BlogPost } from '@/lib/blog-utils';

describe('formatDate', () => {
  it('formats ISO date string to en-GB locale', () => {
    expect(formatDate('2026-03-15')).toBe('15 March 2026');
  });

  it('formats a date in another month', () => {
    expect(formatDate('2025-01-01')).toBe('1 January 2025');
  });

  it('formats December dates correctly', () => {
    expect(formatDate('2024-12-25')).toBe('25 December 2024');
  });

  it('handles date with time component', () => {
    expect(formatDate('2026-06-10T14:30:00Z')).toBe('10 June 2026');
  });

  it('returns "Invalid Date" for garbage input', () => {
    const result = formatDate('not-a-date');
    expect(result).toBe('Invalid Date');
  });

  it('formats date in French locale', () => {
    expect(formatDate('2026-03-22', 'fr')).toBe('22 mars 2026');
  });

  it('formats date in Japanese locale', () => {
    expect(formatDate('2026-03-22', 'ja')).toBe('2026年3月22日');
  });

  it('formats date in German locale', () => {
    expect(formatDate('2026-03-22', 'de')).toBe('22. März 2026');
  });

  it('defaults to en-GB for unknown locale', () => {
    expect(formatDate('2026-03-15', 'xx')).toBe('15 March 2026');
  });
});

describe('BlogPost type', () => {
  it('is structurally valid when constructed manually', () => {
    const post: BlogPost = {
      slug: 'test-post',
      frontmatter: {
        title: 'Test Post',
        description: 'A test',
        publishedAt: '2026-01-01',
        author: 'Test',
        tags: ['test'],
        category: 'Guides',
        readingTime: '3 min read',
        featured: false,
      },
      content: '# Hello',
    };
    expect(post.slug).toBe('test-post');
    expect(post.frontmatter.category).toBe('Guides');
  });
});
