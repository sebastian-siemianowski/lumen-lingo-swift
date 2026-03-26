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

/* ─── Category-specific gradient backgrounds for posts without images ─── */
const categoryGradients: Record<string, { bg: string; accent: string; secondary: string; orb1: string; orb2: string }> = {
  'Language Tips': {
    bg: 'from-violet/20 via-[--color-surface-card] to-fuchsia-500/10',
    accent: 'bg-violet/30',
    secondary: 'bg-fuchsia-400/15',
    orb1: 'bg-violet/12',
    orb2: 'bg-fuchsia-400/8',
  },
  'App Updates': {
    bg: 'from-cyan/20 via-[--color-surface-card] to-sky-500/10',
    accent: 'bg-cyan/30',
    secondary: 'bg-sky-400/15',
    orb1: 'bg-cyan/12',
    orb2: 'bg-sky-400/8',
  },
  'Learning Science': {
    bg: 'from-amber/20 via-[--color-surface-card] to-orange-500/10',
    accent: 'bg-amber/30',
    secondary: 'bg-orange-400/15',
    orb1: 'bg-amber/12',
    orb2: 'bg-orange-400/8',
  },
  Culture: {
    bg: 'from-emerald-500/20 via-[--color-surface-card] to-teal-500/10',
    accent: 'bg-emerald-500/30',
    secondary: 'bg-teal-400/15',
    orb1: 'bg-emerald-500/12',
    orb2: 'bg-teal-400/8',
  },
  Guides: {
    bg: 'from-rose-500/20 via-[--color-surface-card] to-pink-500/10',
    accent: 'bg-rose-500/30',
    secondary: 'bg-pink-400/15',
    orb1: 'bg-rose-500/12',
    orb2: 'bg-pink-400/8',
  },
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
            (() => {
              const grad = categoryGradients[frontmatter.category] ?? categoryGradients['Language Tips'];
              const Icon = categoryIcons[frontmatter.category];
              return (
                <div className={cn('relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br', grad.bg)}>
                  {/* Ambient orbs */}
                  <div className={cn('absolute -top-8 -end-8 h-32 w-32 rounded-full blur-2xl', grad.orb1)} />
                  <div className={cn('absolute -bottom-6 -start-6 h-28 w-28 rounded-full blur-2xl', grad.orb2)} />
                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Icon with glow */}
                  {Icon && (
                    <div className="relative transition-transform duration-300 group-hover:scale-110">
                      <div className={cn('absolute inset-0 scale-150 rounded-full blur-xl', grad.secondary)} />
                      <Icon size={featured ? 56 : 44} className="relative" />
                    </div>
                  )}
                  {/* Shimmer line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              );
            })()
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

          {/* Tags */}
          {frontmatter.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {frontmatter.tags.slice(0, featured ? 5 : 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[--color-glass-border] bg-white/[0.03] px-2 py-0.5 text-[10px] text-[--color-foreground-muted] transition-colors group-hover:border-[--color-glass-hover]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

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
