'use client';

import { useEffect, useState } from 'react';
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

export function LegalTOC({ items }: LegalTOCProps) {
  const [activeId, setActiveId] = useState<string>('');

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

  return (
    <nav aria-label="Table of contents" className="hidden xl:block">
      <div className="sticky top-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30">
          On this page
        </p>
        <ul className="space-y-1 border-l border-white/[0.06]">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={cn(
                  'relative block py-1.5 pl-4 text-[13px] leading-snug transition-all duration-200',
                  item.level > 2 && 'pl-7',
                  activeId === item.id
                    ? 'text-violet font-medium'
                    : 'text-white/35 hover:text-white/60',
                )}
              >
                {activeId === item.id && (
                  <motion.div
                    layoutId="toc-indicator"
                    className="absolute left-0 top-0 bottom-0 w-px bg-violet"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function DownloadPDFButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-glass-border bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white/50 transition-all hover:border-white/15 hover:text-white/70"
    >
      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden>
        <path d="M2 10v3a1 1 0 001 1h10a1 1 0 001-1v-3M8 2v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Download as PDF
    </button>
  );
}
