import { describe, it, expect, vi, beforeAll } from 'vitest';

// Mock 'server-only' — it throws when imported outside of RSC
vi.mock('server-only', () => ({}));

// Import after mock
const blog = await import('@/lib/blog');

describe('getAllPosts', () => {
  it('returns an array of posts', () => {
    const posts = blog.getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
  });

  it('posts are sorted by publishedAt descending', () => {
    const posts = blog.getAllPosts();
    for (let i = 1; i < posts.length; i++) {
      const prev = new Date(posts[i - 1].frontmatter.publishedAt).getTime();
      const curr = new Date(posts[i].frontmatter.publishedAt).getTime();
      expect(prev).toBeGreaterThanOrEqual(curr);
    }
  });

  it('every post has required frontmatter fields', () => {
    const posts = blog.getAllPosts();
    for (const post of posts) {
      expect(post.slug).toBeTruthy();
      expect(post.frontmatter.title).toBeTruthy();
      expect(post.frontmatter.description).toBeTruthy();
      expect(post.frontmatter.publishedAt).toBeTruthy();
      expect(post.frontmatter.author).toBeTruthy();
      expect(post.frontmatter.category).toBeTruthy();
      expect(post.frontmatter.readingTime).toBeTruthy();
      expect(Array.isArray(post.frontmatter.tags)).toBe(true);
    }
  });

  it('every post has a non-empty content string', () => {
    const posts = blog.getAllPosts();
    for (const post of posts) {
      expect(post.content.length).toBeGreaterThan(0);
    }
  });
});

describe('getPostBySlug', () => {
  it('returns a post for a known slug', () => {
    const post = blog.getPostBySlug('introducing-lumenlingo');
    expect(post).not.toBeNull();
    expect(post!.slug).toBe('introducing-lumenlingo');
  });

  it('returns null for a non-existent slug', () => {
    const post = blog.getPostBySlug('this-post-does-not-exist-xyz');
    expect(post).toBeNull();
  });

  it('returns English fallback when locale post not found', () => {
    const post = blog.getPostBySlug('introducing-lumenlingo', 'fr');
    expect(post).not.toBeNull();
    expect(post!.slug).toBe('introducing-lumenlingo');
  });
});

describe('getPostsByCategory', () => {
  it('returns posts matching category (case-insensitive)', () => {
    const posts = blog.getPostsByCategory('Learning Science');
    expect(posts.length).toBeGreaterThan(0);
    for (const p of posts) {
      expect(p.frontmatter.category.toLowerCase()).toBe('learning science');
    }
  });

  it('returns empty array for unknown category', () => {
    const posts = blog.getPostsByCategory('Nonexistent Category');
    expect(posts).toEqual([]);
  });
});

describe('getPostsByTag', () => {
  it('returns posts matching a known tag', () => {
    const posts = blog.getPostsByTag('spanish');
    expect(posts.length).toBeGreaterThan(0);
  });

  it('returns empty array for unknown tag', () => {
    const posts = blog.getPostsByTag('zzz-unknown-tag');
    expect(posts).toEqual([]);
  });
});

describe('getAllCategories', () => {
  it('returns a sorted array of unique category strings', () => {
    const cats = blog.getAllCategories();
    expect(cats.length).toBeGreaterThan(0);
    const sorted = [...cats].sort();
    expect(cats).toEqual(sorted);
  });
});

describe('getAllTags', () => {
  it('returns a sorted array of unique tags', () => {
    const tags = blog.getAllTags();
    expect(tags.length).toBeGreaterThan(0);
    const sorted = [...tags].sort();
    expect(tags).toEqual(sorted);
  });
});

describe('getFeaturedPost', () => {
  it('returns a post with featured: true', () => {
    const featured = blog.getFeaturedPost();
    expect(featured).toBeDefined();
    expect(featured!.frontmatter.featured).toBe(true);
  });
});

describe('getRelatedPosts', () => {
  it('returns related posts excluding the current slug', () => {
    const posts = blog.getAllPosts();
    const slug = posts[0].slug;
    const related = blog.getRelatedPosts(slug, 3);
    expect(related.length).toBeLessThanOrEqual(3);
    for (const p of related) {
      expect(p.slug).not.toBe(slug);
    }
  });

  it('returns empty array for non-existent slug', () => {
    const related = blog.getRelatedPosts('impossible-slug-xyz');
    expect(related).toEqual([]);
  });
});

describe('paginatePosts', () => {
  let allPosts: ReturnType<typeof blog.getAllPosts>;
  beforeAll(() => {
    allPosts = blog.getAllPosts();
  });

  it('returns correct page slice', () => {
    const result = blog.paginatePosts(allPosts, 1, 5);
    expect(result.currentPage).toBe(1);
    expect(result.posts.length).toBeLessThanOrEqual(5);
    expect(result.totalPages).toBe(Math.ceil(allPosts.length / 5));
  });

  it('page 2 returns next slice', () => {
    const result = blog.paginatePosts(allPosts, 2, 5);
    expect(result.currentPage).toBe(2);
  });

  it('out-of-range page is clamped', () => {
    const result = blog.paginatePosts(allPosts, 999, 5);
    expect(result.currentPage).toBe(result.totalPages);
  });

  it('page < 1 is clamped to 1', () => {
    const result = blog.paginatePosts(allPosts, 0, 5);
    expect(result.currentPage).toBe(1);
  });
});

describe('locale-aware blog', () => {
  it('getAllPosts with es locale returns Spanish posts', () => {
    const posts = blog.getAllPosts('es');
    expect(posts.length).toBeGreaterThan(0);
  });

  it('getPostBySlug with es locale returns Spanish version when available', () => {
    const post = blog.getPostBySlug('why-immersive-learning-works', 'es');
    expect(post).not.toBeNull();
    // Spanish version should have Spanish title
    expect(post!.frontmatter.title).toContain('Aprend');
  });
});
