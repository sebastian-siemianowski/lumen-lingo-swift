'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

/* ── Circular progress ring ── */
function ProgressRing({ progress }: { progress: number }) {
  const size = 32;
  const strokeWidth = 2.5;
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - progress);

  return (
    <svg width={size} height={size} className="shrink-0 -rotate-90">
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={strokeWidth}
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="url(#toc-ring-gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-[stroke-dashoffset] duration-300 ease-out"
      />
      <defs>
        <linearGradient id="toc-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LegalTOC({ items, label }: LegalTOCProps & { label?: string }) {
  const [activeId, setActiveId] = useState<string>('');
  const [readProgress, setReadProgress] = useState(0);
  const scrollRef = useRef<HTMLUListElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  /* Number only top-level items for section numbering */
  const numberedMap = useMemo(() => {
    const map = new Map<string, number>();
    let n = 0;
    for (const item of items) {
      if (item.level <= 2) {
        n += 1;
        map.set(item.id, n);
      }
    }
    return map;
  }, [items]);

  const activeIndex = useMemo(
    () => items.findIndex((i) => i.id === activeId),
    [items, activeId],
  );

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 2);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 2);
  }, []);

  /* Page reading progress */
  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
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

  const percentLabel = `${Math.round(readProgress * 100)}%`;

  return (
    <motion.nav
      aria-label="Table of contents"
      className="hidden xl:block"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, ...spring.gentle }}
    >
      <div className="sticky top-28">
        {/* ── Glass card wrapper ── */}
        <div className="toc-card rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-sm">
          {/* ── Header with progress ring ── */}
          <div className="mb-4 flex items-center gap-3">
            <ProgressRing progress={readProgress} />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {label ?? 'On this page'}
              </p>
              <p className="mt-0.5 text-[11px] tabular-nums text-white/25">
                {percentLabel} read
              </p>
            </div>
          </div>

          {/* ── Gradient progress bar ── */}
          <div className="mb-4 h-px w-full overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
              style={{ width: `${readProgress * 100}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          <div className="relative">
            {/* Top fade */}
            <div
              className={cn(
                'pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-white/[0.02] to-transparent transition-opacity duration-200',
                canScrollUp ? 'opacity-100' : 'opacity-0',
              )}
            />

            <ul
              ref={scrollRef}
              className="toc-scroll max-h-[calc(100vh-16rem)] space-y-0.5 overflow-y-auto pe-1"
            >
              {items.map((item, idx) => {
                const isActive = activeId === item.id;
                const isHovered = hoveredId === item.id;
                const isPast = activeIndex >= 0 && idx < activeIndex;
                const sectionNum = numberedMap.get(item.id);

                return (
                  <li key={item.id} data-toc-id={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={cn(
                        'group relative flex items-start gap-2.5 rounded-lg py-2 ps-3 pe-2 text-[13px] leading-snug transition-all duration-200',
                        item.level > 2 && 'ms-5',
                        isActive
                          ? 'bg-violet/[0.08] text-violet font-medium'
                          : isPast
                            ? 'text-white/30 hover:bg-white/[0.03] hover:text-white/50'
                            : 'text-white/40 hover:bg-white/[0.03] hover:text-white/60',
                      )}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.div
                          layoutId="toc-indicator"
                          className="absolute inset-y-1 start-0 w-[3px] rounded-full bg-gradient-to-b from-violet to-cyan"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}

                      {/* Section number badge */}
                      {sectionNum != null && (
                        <span
                          className={cn(
                            'mt-px flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] text-[10px] font-semibold tabular-nums transition-all duration-200',
                            isActive
                              ? 'bg-violet/20 text-violet'
                              : isPast
                                ? 'bg-white/[0.04] text-white/25'
                                : 'bg-white/[0.04] text-white/30 group-hover:bg-white/[0.06] group-hover:text-white/50',
                          )}
                        >
                          {sectionNum}
                        </span>
                      )}

                      <span className="min-w-0 flex-1">{item.text}</span>

                      {/* Completed check for past sections */}
                      {isPast && item.level <= 2 && (
                        <motion.svg
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mt-0.5 h-3 w-3 shrink-0 text-white/20"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M3.5 8.5l3 3 6-6.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Bottom fade */}
            <div
              className={cn(
                'pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6 bg-gradient-to-t from-white/[0.02] to-transparent transition-opacity duration-200',
                canScrollDown ? 'opacity-100' : 'opacity-0',
              )}
            />
          </div>

          {/* ── Section counter ── */}
          <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
            <span className="text-[11px] text-white/25">
              {activeIndex >= 0 ? activeIndex + 1 : 0} / {items.filter((i) => i.level <= 2).length} sections
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
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
  const [readProgress, setReadProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>('');

  /* Page reading progress */
  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Track active section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
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

  /* Number top-level items */
  const numberedMap = useMemo(() => {
    const map = new Map<string, number>();
    let n = 0;
    for (const item of items) {
      if (item.level <= 2) { n += 1; map.set(item.id, n); }
    }
    return map;
  }, [items]);

  const activeItem = items.find((i) => i.id === activeId);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex w-full items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 backdrop-blur-sm transition-all hover:border-white/[0.1] hover:bg-white/[0.04]"
        aria-expanded={open}
      >
        {/* Mini progress ring */}
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
          <svg width="32" height="32" className="-rotate-90">
            <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
            <circle
              cx="16" cy="16" r="13" fill="none"
              stroke="url(#mobile-ring-grad)"
              strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 13}
              strokeDashoffset={2 * Math.PI * 13 * (1 - readProgress)}
              className="transition-[stroke-dashoffset] duration-300"
            />
            <defs>
              <linearGradient id="mobile-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          <span className="absolute text-[9px] font-bold tabular-nums text-white/40">
            {Math.round(readProgress * 100)}%
          </span>
        </div>

        <div className="min-w-0 flex-1 text-start">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
            {label ?? 'Sections'}
          </p>
          {activeItem && (
            <p className="mt-0.5 truncate text-[13px] font-medium text-violet">
              {activeItem.text}
            </p>
          )}
        </div>

        <svg
          className={cn('h-4 w-4 shrink-0 text-white/30 transition-transform duration-200', open && 'rotate-180')}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-2 space-y-0.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 backdrop-blur-sm">
              {items.map((item) => {
                const isActive = activeId === item.id;
                const sectionNum = numberedMap.get(item.id);

                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={cn(
                        'flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all duration-150',
                        item.level > 2 && 'ms-5',
                        isActive
                          ? 'bg-violet/[0.08] font-medium text-violet'
                          : 'text-white/40 hover:bg-white/[0.03] hover:text-white/60',
                      )}
                    >
                      {sectionNum != null && (
                        <span
                          className={cn(
                            'flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold tabular-nums',
                            isActive ? 'bg-violet/20 text-violet' : 'bg-white/[0.04] text-white/30',
                          )}
                        >
                          {sectionNum}
                        </span>
                      )}
                      <span className="min-w-0 flex-1 truncate">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
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
