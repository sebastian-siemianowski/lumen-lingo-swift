'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { spring } from '@/lib/motion';

interface TocItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const chipBarRef = useRef<HTMLDivElement>(null);

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
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  /* Auto-scroll the chip bar when active item changes on mobile */
  useEffect(() => {
    if (!chipBarRef.current || !activeId) return;
    const chip = chipBarRef.current.querySelector(`[data-toc-id="${activeId}"]`);
    if (chip) {
      chip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeId]);

  return (
    <>
      {/* ─── Desktop sidebar ─── */}
      <motion.nav
        aria-label="Feature sections"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={spring.smooth}
        className="hidden lg:block sticky top-24 max-h-[calc(100vh-128px)] self-start overflow-y-auto pe-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-glass-border"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground-muted">
          On this page
        </p>
        <ul className="flex flex-col gap-1">
          {items.map(({ id, label, icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 border-s-2',
                  activeId === id
                    ? 'bg-violet/10 text-violet font-medium border-violet'
                    : 'text-foreground-muted hover:text-foreground-secondary hover:bg-white/[0.03] border-transparent',
                )}
              >
                {icon && <span className="shrink-0 [&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>}
                {label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* ─── Mobile chip bar ─── */}
      <div
        ref={chipBarRef}
        className="lg:hidden sticky top-16 z-10 -mx-4 flex gap-2 overflow-x-auto px-4 py-3 scrollbar-none bg-[var(--color-background,rgba(10,10,20,0.95))] backdrop-blur-sm"
      >
        {items.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            data-toc-id={id}
            className={cn(
              'flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 whitespace-nowrap',
              activeId === id
                ? 'bg-violet/15 text-violet'
                : 'text-foreground-muted hover:text-foreground-secondary',
            )}
          >
            {icon && <span className="[&>svg]:h-3 [&>svg]:w-3">{icon}</span>}
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
