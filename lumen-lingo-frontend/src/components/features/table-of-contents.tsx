'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const activeIndex = items.findIndex(({ id }) => id === activeId);

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
        {/* Card wrapper */}
        <div className="rounded-2xl border border-glass-border/50 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 shadow-lg shadow-black/5 backdrop-blur-sm">
          <p className="mb-1 px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground-muted/40">
            On this page
          </p>
          {/* Progress indicator */}
          <div className="mb-3 mx-2 h-0.5 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
              animate={{ width: activeIndex >= 0 ? `${((activeIndex + 1) / items.length) * 100}%` : '0%' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <ul className="flex flex-col gap-0.5">
            {items.map(({ id, label, icon }, i) => {
              const isActive = activeId === id;
              return (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    className={cn(
                      'relative flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] transition-all duration-300',
                      isActive
                        ? 'font-semibold text-foreground'
                        : 'text-foreground-muted/60 hover:text-foreground-muted hover:bg-white/[0.03]',
                    )}
                  >
                    {/* Active background */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="toc-active"
                          className="absolute inset-0 rounded-xl border border-violet/20 bg-violet/[0.08]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    {/* Icon */}
                    {icon && (
                      <span className={cn(
                        'relative z-[1] flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 [&>svg]:h-3 [&>svg]:w-3',
                        isActive ? 'bg-violet/15 text-violet' : 'bg-white/[0.04] text-foreground-muted/40',
                      )}>
                        {icon}
                      </span>
                    )}
                    <span className="relative z-[1]">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
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
              'flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-200 whitespace-nowrap',
              activeId === id
                ? 'border-violet/30 bg-violet/10 text-violet shadow-sm shadow-violet/10'
                : 'border-transparent text-foreground-muted hover:text-foreground-secondary',
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
