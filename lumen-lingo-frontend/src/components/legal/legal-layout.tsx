'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { spring } from '@/lib/motion';

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

/** Collapsible TOC for mobile (xl: hidden) */
export function MobileLegalTOC({ items, label }: LegalTOCProps & { label?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-lg border border-glass-border bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-foreground-secondary transition-colors hover:bg-white/[0.05]"
        aria-expanded={open}
      >
        {label ?? 'Sections'}
        <svg
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 space-y-0.5 overflow-hidden rounded-lg border border-glass-border bg-white/[0.02] p-2"
          >
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={cn(
                    'block rounded px-3 py-1.5 text-sm text-foreground-muted transition-colors hover:text-foreground',
                    item.level > 2 && 'ps-6',
                  )}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Floating back-to-top button — appears after scrolling 400px */
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={spring.smooth}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 end-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-surface/90 text-foreground-muted shadow-lg backdrop-blur-sm transition-colors hover:text-foreground"
          aria-label="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
