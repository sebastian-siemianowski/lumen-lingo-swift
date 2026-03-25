'use client';

import { useState, type ComponentType } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';
import { formatDate, type BlogPost } from '@/lib/blog-utils';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { spring } from '@/lib/motion';
import type { IconProps } from '@/components/icons';
import {
  LanguageTipsIcon,
  AppUpdatesIcon,
  LearningScienceIcon,
  CultureIcon,
  GuidesIcon,
} from '@/components/icons';

interface PostCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
  priority?: boolean;
}

const categoryColors: Record<string, { badge: string; glow: string }> = {
  'Language Tips': { badge: 'bg-[--color-violet]/15 text-[--color-violet]', glow: 'group-hover:shadow-[0_0_12px_rgba(139,92,246,0.2)]' },
  'App Updates': { badge: 'bg-[--color-cyan]/15 text-[--color-cyan]', glow: 'group-hover:shadow-[0_0_12px_rgba(6,182,212,0.2)]' },
  'Learning Science': { badge: 'bg-[--color-amber]/15 text-[--color-amber]', glow: 'group-hover:shadow-[0_0_12px_rgba(245,158,11,0.2)]' },
  Culture: { badge: 'bg-emerald-500/15 text-emerald-400', glow: 'group-hover:shadow-[0_0_12px_rgba(52,211,153,0.2)]' },
  Guides: { badge: 'bg-rose-500/15 text-rose-400', glow: 'group-hover:shadow-[0_0_12px_rgba(251,113,133,0.2)]' },
};

const categoryIcons: Record<string, ComponentType<IconProps>> = {
  'Language Tips': LanguageTipsIcon,
  'App Updates': AppUpdatesIcon,
  'Learning Science': LearningScienceIcon,
  Culture: CultureIcon,
  Guides: GuidesIcon,
};

const categoryGlowStyles: Record<string, string> = {
  'Language Tips': 'drop-shadow-[0_0_6px_rgba(139,92,246,0.4)]',
  'App Updates': 'drop-shadow-[0_0_6px_rgba(6,182,212,0.4)]',
  'Learning Science': 'drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]',
  Culture: 'drop-shadow-[0_0_6px_rgba(52,211,153,0.4)]',
  Guides: 'drop-shadow-[0_0_6px_rgba(251,113,133,0.4)]',
};

export function PostCard({ post, index = 0, featured = false, priority = false }: PostCardProps) {
  const prefersReduced = useReducedMotion();
  const locale = useLocale();
  const [imgLoaded, setImgLoaded] = useState(false);
  const { frontmatter, slug } = post;

  return (
    <motion.div
      {...(!prefersReduced && {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        transition: {
          duration: 0.5,
          delay: index * 0.06,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
        whileHover: {
          y: -4,
          scale: 1.01,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
      })}
    >      <Link
        href={`/blog/${slug}`}
        className={cn(
          'glass-card group relative block overflow-hidden rounded-[--radius-card] transition-colors',
          featured
            ? 'border border-[--color-violet]/15 bg-[--color-surface-card]/80 md:grid md:grid-cols-[3fr_2fr] md:gap-0'
            : 'border border-[--color-glass-border] hover:border-[--color-glass-hover]',
        )}
      >
        {/* Featured pill badge */}
        {featured && (
          <span className="absolute end-4 top-4 z-10 rounded-full bg-[--color-violet] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            Featured
          </span>
        )}
        {/* Cover image area */}
        <div
          className={cn(
            'relative overflow-hidden',
            featured ? 'aspect-[16/10] md:aspect-auto' : 'aspect-[16/9]',
          )}
        >
          {frontmatter.image ? (
            <>
              {/* Blur placeholder shown until image loads */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br from-[--color-violet]/10 via-[--color-surface-card] to-[--color-cyan]/10 transition-opacity duration-500',
                  imgLoaded ? 'opacity-0' : 'opacity-100',
                )}
              />
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                quality={80}
                priority={priority}
                sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                className={cn(
                  'object-cover transition-all duration-500 group-hover:scale-105',
                  imgLoaded ? 'opacity-100' : 'opacity-0',
                )}
                onLoad={() => setImgLoaded(true)}
              />
            </>
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
          {/* Category badge with icon */}
          <div className="absolute start-4 top-4">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-[--radius-pill] px-3 py-1 text-xs font-semibold backdrop-blur-md transition-shadow duration-300',
                categoryColors[frontmatter.category]?.badge ??
                  'bg-white/10 text-[--color-foreground]',
                categoryColors[frontmatter.category]?.glow,
              )}
            >
              {(() => {
                const Icon = categoryIcons[frontmatter.category];
                if (!Icon) return null;
                return (
                  <motion.span
                    className={cn(
                      'inline-flex',
                      featured && categoryGlowStyles[frontmatter.category],
                    )}
                    whileHover={prefersReduced ? undefined : { scale: 1.2, rotate: 8 }}
                    transition={spring.snappy}
                  >
                    <Icon size={featured ? 18 : 14} />
                  </motion.span>
                );
              })()}
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
            {/* "Read →" reveal on hover */}
            <span className="ms-auto translate-x-2 text-xs font-semibold text-[--color-violet] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 rtl:-translate-x-2 rtl:group-hover:translate-x-0">
              Read&nbsp;&rarr;
            </span>
          </div>

          {/* Author & date row */}
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[--color-foreground-muted]">
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
              {formatDate(frontmatter.publishedAt, locale)}
            </time>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden="true">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
                <path d="M6 3.5V6l2 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {frontmatter.readingTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
