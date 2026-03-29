'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

interface ScrollDepthTrackerProps {
  /** Fraction of the sentinel element visible before firing (0-1). */
  threshold?: number;
  slug: string;
  title: string;
}

/**
 * Fires a `blog_post_read` event when the user scrolls past a sentinel.
 * Place this ~75% down the blog post content.
 */
export function ScrollDepthTracker({ threshold = 0.5, slug, title }: ScrollDepthTrackerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          trackEvent('blog_post_read', { slug, title });
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [slug, title, threshold]);

  return <div ref={ref} aria-hidden className="pointer-events-none h-px w-full" />;
}
