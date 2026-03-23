'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav
      aria-label="Table of contents"
      className="hidden xl:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pe-4"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground-muted">
        On this page
      </p>
      <ul className="flex flex-col gap-1">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                'block rounded-lg px-3 py-2 text-sm transition-all duration-200',
                activeId === id
                  ? 'bg-violet/10 text-violet font-medium border-s-2 border-violet'
                  : 'text-foreground-muted hover:text-foreground-secondary hover:bg-white/[0.03] border-s-2 border-transparent',
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
