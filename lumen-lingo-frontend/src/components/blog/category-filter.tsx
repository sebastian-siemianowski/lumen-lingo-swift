'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

/* Category slugs used as URL param values — always English */
const CATEGORY_SLUGS = [
  'All',
  'Language Tips',
  'App Updates',
  'Learning Science',
  'Culture',
  'Guides',
] as const;

/* Maps slug → translation key */
const CATEGORY_KEYS: Record<string, string> = {
  All: 'categories.all',
  'Language Tips': 'categories.languageTips',
  'App Updates': 'categories.appUpdates',
  'Learning Science': 'categories.learningScience',
  Culture: 'categories.culture',
  Guides: 'categories.guides',
};

const categoryActiveStyles: Record<string, string> = {
  All: 'bg-[--color-glass] text-[--color-foreground]',
  'Language Tips': 'bg-[--color-violet]/10 text-[--color-violet]',
  'App Updates': 'bg-[--color-cyan]/10 text-[--color-cyan]',
  'Learning Science': 'bg-amber-500/10 text-amber-400',
  Culture: 'bg-emerald-500/10 text-emerald-400',
  Guides: 'bg-rose-500/10 text-rose-400',
};

interface CategoryFilterProps {
  counts?: Record<string, number>;
}

export function CategoryFilter({ counts }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('Blog');
  const active = searchParams.get('category') ?? 'All';
  const scrollRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Auto-scroll active chip into view
  useEffect(() => {
    const chip = chipRefs.current.get(active);
    if (chip && scrollRef.current) {
      chip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [active]);

  function handleSelect(cat: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === 'All') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    params.delete('page');
    router.push(`/blog?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="relative mb-12">
      {/* Scroll fade indicators */}
      <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-8 bg-gradient-to-r from-[--color-surface] to-transparent sm:hidden" />
      <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-8 bg-gradient-to-l from-[--color-surface] to-transparent sm:hidden" />
      <nav
        ref={scrollRef}
        role="radiogroup"
        aria-label="Blog categories"
        className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-none sm:flex-wrap"
        onKeyDown={(e) => {
          if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
          e.preventDefault();
          const idx = CATEGORY_SLUGS.indexOf(active as (typeof CATEGORY_SLUGS)[number]);
          const next = e.key === 'ArrowRight'
            ? (idx + 1) % CATEGORY_SLUGS.length
            : (idx - 1 + CATEGORY_SLUGS.length) % CATEGORY_SLUGS.length;
          handleSelect(CATEGORY_SLUGS[next]);
          chipRefs.current.get(CATEGORY_SLUGS[next])?.focus();
        }}
      >
        {CATEGORY_SLUGS.map((cat) => {
          const isActive = active === cat;
          const count = cat === 'All' ? undefined : counts?.[cat];
          return (
            <button
              key={cat}
              ref={(el) => {
                if (el) chipRefs.current.set(cat, el);
              }}
              role="radio"
              aria-checked={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleSelect(cat)}
              className={cn(
                'shrink-0 rounded-[--radius-pill] px-4 py-2.5 text-sm font-medium transition-all duration-200 sm:py-2',
                isActive
                  ? categoryActiveStyles[cat]
                  : 'bg-[--color-glass] text-[--color-foreground-muted] hover:bg-[--color-glass-hover] hover:text-[--color-foreground-secondary]',
              )}
            >
              {t(CATEGORY_KEYS[cat])}
              {count != null && (
                <span className="ms-1.5 text-xs opacity-50">({count})</span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
