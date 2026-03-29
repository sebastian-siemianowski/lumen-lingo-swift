'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState('');
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Extract headings from MDX content
  useEffect(() => {
    const matches = content.matchAll(/^(#{2,4})\s+(.+)$/gm);
    const extracted: Heading[] = [];
    for (const match of matches) {
      if (!match[1] || !match[2]) continue;
      const level = match[1].length;
      const text = match[2].replace(/[*_`~]/g, '');
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      extracted.push({ id, text, level });
    }
    setHeadings(extracted);
  }, [content]);

  // Scrollspy
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  // Reading progress
  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile panel on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [mobileOpen]);

  if (headings.length < 3) return null;

  const tocList = (
    <ul className="space-y-1 border-s border-[--color-glass-border]">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
            className={cn(
              'block border-s-2 py-1 text-sm transition-colors',
              heading.level === 3 ? 'ps-6' : heading.level === 4 ? 'ps-9' : 'ps-3',
              activeId === heading.id
                ? 'border-[--color-violet] text-[--color-violet]'
                : 'border-transparent text-[--color-foreground-muted] hover:border-[--color-glass-hover] hover:text-[--color-foreground-secondary]',
            )}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Reading progress bar */}
      <div
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="fixed inset-x-0 top-16 z-40 h-0.5"
        style={{ opacity: progress > 0.01 ? 1 : 0, transition: 'opacity 0.3s' }}
      >
        <div
          className="h-full bg-gradient-to-r from-[--color-violet] to-[--color-cyan]"
          style={{ width: `${progress * 100}%`, transition: 'width 50ms linear' }}
        />
      </div>

      {/* Desktop sidebar TOC */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:block sticky top-24 max-h-[calc(100vh-128px)] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[--color-glass-border]"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[--color-foreground-muted]">
          On this page
        </p>
        {tocList}
      </nav>

      {/* Mobile disclosure TOC */}
      <div ref={panelRef} className="lg:hidden relative mb-8">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center justify-between rounded-xl border border-[--color-glass-border] bg-[--color-surface-card]/60 px-4 py-3 text-sm font-medium text-[--color-foreground-secondary] backdrop-blur-sm"
          aria-expanded={mobileOpen}
        >
          On this page
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className={cn('h-4 w-4 text-[--color-foreground-muted] transition-transform duration-200', mobileOpen && 'rotate-180')}
          >
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {mobileOpen && (
          <div className="absolute inset-x-0 top-full z-20 mt-2 rounded-xl border border-[--color-glass-border] bg-[--color-surface-card]/95 p-4 shadow-xl backdrop-blur-md">
            {tocList}
          </div>
        )}
      </div>
    </>
  );
}
