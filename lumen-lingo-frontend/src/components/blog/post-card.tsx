'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { formatDate, type BlogPost } from '@/lib/blog-utils';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface PostCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
  priority?: boolean;
}

const categoryColors: Record<string, string> = {
  'Language Tips': 'bg-[--color-violet]/15 text-[--color-violet]',
  'App Updates': 'bg-[--color-cyan]/15 text-[--color-cyan]',
  'Learning Science': 'bg-[--color-cyan]/15 text-[--color-cyan]',
  Culture: 'bg-[--color-amber]/15 text-[--color-amber]',
  Guides: 'bg-[--color-violet]/15 text-[--color-violet]',
};

export function PostCard({ post, index = 0, featured = false, priority = false }: PostCardProps) {
  const prefersReduced = useReducedMotion();
  const { frontmatter, slug } = post;

  return (
    <motion.div
      {...(!prefersReduced && {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        transition: {
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
        whileHover: { y: -4, transition: { duration: 0.25 } },
      })}
    >      <Link
        href={`/blog/${slug}`}
        className={cn(
          'glass-card group block overflow-hidden rounded-[--radius-card] transition-colors',
          'border border-[--color-glass-border] hover:border-[--color-glass-hover]',
          featured && 'md:grid md:grid-cols-2 md:gap-0',
        )}
      >
        {/* Cover image area */}
        <div
          className={cn(
            'relative overflow-hidden',
            featured ? 'aspect-[16/10] md:aspect-auto' : 'aspect-[16/9]',
          )}
        >
          {frontmatter.image ? (
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              priority={priority}
              sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[--color-violet]/20 via-[--color-surface-card] to-[--color-cyan]/20">
              <svg
                className="h-12 w-12 text-[--color-foreground-muted]/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
          )}
          {/* Category badge */}
          <div className="absolute left-4 top-4">
            <span
              className={cn(
                'inline-flex rounded-[--radius-pill] px-3 py-1 text-xs font-semibold backdrop-blur-md',
                categoryColors[frontmatter.category] ??
                  'bg-white/10 text-[--color-foreground]',
              )}
            >
              {frontmatter.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={cn('flex flex-col justify-center p-6', featured && 'md:p-8')}>
          <h3
            className={cn(
              'font-display font-bold text-[--color-foreground] transition-colors group-hover:text-[--color-violet]',
              featured ? 'text-xl sm:text-2xl' : 'line-clamp-2 text-lg',
            )}
          >
            {frontmatter.title}
          </h3>

          <p
            className={cn(
              'mt-3 text-sm leading-relaxed text-[--color-foreground-secondary]',
              featured ? 'line-clamp-4' : 'line-clamp-3',
            )}
          >
            {frontmatter.description}
          </p>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[--color-foreground-muted]">
            <div className="flex items-center gap-2">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[--color-violet]/20 text-[10px] font-bold text-[--color-violet]"
                aria-hidden="true"
              >
                {frontmatter.author
                  .split(' ')
                  .map((w) => w[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
              <span>{frontmatter.author}</span>
            </div>
            <span aria-hidden="true">·</span>
            <time dateTime={frontmatter.publishedAt}>
              {formatDate(frontmatter.publishedAt)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{frontmatter.readingTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
