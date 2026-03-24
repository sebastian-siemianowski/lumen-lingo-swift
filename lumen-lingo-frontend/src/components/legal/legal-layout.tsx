'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface LegalTOCProps {
  items: TOCItem[];
}

export function LegalTOC({ items, label }: LegalTOCProps & { label?: string }) {
  const [activeId, setActiveId] = useState<string>('');
  const scrollRef = useRef<HTMLUListElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 2);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 2);
  }, []);

  /* Intersection observer to track active section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  /* Auto-scroll the TOC to keep the active item visible */
  useEffect(() => {
    if (!activeId || !scrollRef.current) return;
    const active = scrollRef.current.querySelector<HTMLElement>(`[data-toc-id="${activeId}"]`);
    if (!active) return;

    const container = scrollRef.current;
    const activeTop = active.offsetTop - container.offsetTop;
    const activeBottom = activeTop + active.offsetHeight;
    const visibleTop = container.scrollTop;
    const visibleBottom = visibleTop + container.clientHeight;

    if (activeTop < visibleTop + 24) {
      container.scrollTo({ top: activeTop - 24, behavior: 'smooth' });
    } else if (activeBottom > visibleBottom - 24) {
      container.scrollTo({ top: activeBottom - container.clientHeight + 24, behavior: 'smooth' });
    }
  }, [activeId]);

  /* Track scroll state for fade indicators */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => { el.removeEventListener('scroll', updateScrollState); ro.disconnect(); };
  }, [updateScrollState]);

  return (
    <nav aria-label="Table of contents" className="hidden xl:block">
      <div className="sticky top-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30">
          {label ?? 'On this page'}
        </p>

        <div className="relative">
          {/* Top fade */}
          <div
            className={cn(
              'pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-[var(--background,#0a0a0a)] to-transparent transition-opacity duration-200',
              canScrollUp ? 'opacity-100' : 'opacity-0',
            )}
          />

          <ul
            ref={scrollRef}
            className="toc-scroll max-h-[calc(100vh-10rem)] space-y-1 overflow-y-auto border-s border-white/[0.06] pe-1"
          >
            {items.map((item) => (
              <li key={item.id} data-toc-id={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={cn(
                    'relative block py-1.5 ps-4 text-[13px] leading-snug transition-all duration-200',
                    item.level > 2 && 'ps-7',
                    activeId === item.id
                      ? 'text-violet font-medium'
                      : 'text-white/35 hover:text-white/60',
                  )}
                >
                  {activeId === item.id && (
                    <motion.div
                      layoutId="toc-indicator"
                      className="absolute start-0 top-0 bottom-0 w-px bg-violet"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom fade */}
          <div
            className={cn(
              'pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6 bg-gradient-to-t from-[var(--background,#0a0a0a)] to-transparent transition-opacity duration-200',
              canScrollDown ? 'opacity-100' : 'opacity-0',
            )}
          />
        </div>
      </div>
    </nav>
  );
}

export function DownloadPDFButton({ label }: { label?: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white/50 transition-all hover:border-white/15 hover:text-white/70"
    >
      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden>
        <path d="M2 10v3a1 1 0 001 1h10a1 1 0 001-1v-3M8 2v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label ?? 'Download as PDF'}
    </button>
  );
}
