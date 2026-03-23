'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState('');
  const [headings, setHeadings] = useState<Heading[]>([]);

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

  // Scrollspy: observe heading elements
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
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 },
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="hidden xl:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[--color-foreground-muted]">
        On this page
      </p>
      <ul className="space-y-1 border-s border-[--color-glass-border]">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className={`block border-s-2 py-1 text-sm transition-colors ${
                heading.level === 3 ? 'ps-6' : heading.level === 4 ? 'ps-9' : 'ps-3'
              } ${
                activeId === heading.id
                  ? 'border-[--color-violet] text-[--color-violet]'
                  : 'border-transparent text-[--color-foreground-muted] hover:border-[--color-glass-hover] hover:text-[--color-foreground-secondary]'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
