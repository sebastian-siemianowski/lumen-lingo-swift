'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  'All',
  'Language Tips',
  'App Updates',
  'Learning Science',
  'Culture',
  'Guides',
] as const;

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get('category') ?? 'All';

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
    <nav
      aria-label="Blog categories"
      className="mb-12 flex flex-wrap items-center justify-center gap-2"
    >
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            className={cn(
              'rounded-[--radius-pill] px-4 py-2 text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-[--color-violet] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                : 'border border-[--color-glass-border] bg-[--color-glass] text-[--color-foreground-secondary] hover:border-[--color-violet]/30 hover:text-[--color-foreground]',
            )}
            aria-current={isActive ? 'true' : undefined}
          >
            {cat}
          </button>
        );
      })}
    </nav>
  );
}
