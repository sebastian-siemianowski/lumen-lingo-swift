'use client';

import { useEffect, useState, useCallback, startTransition } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

/**
 * Thin violet progress bar at the top of the viewport, similar to NProgress.
 * Triggers on client-side navigations via pathname changes.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const start = useCallback(() => {
    setProgress(0);
    setVisible(true);
    // Animate to 80% quickly, then slow down
    requestAnimationFrame(() => setProgress(30));
    const t1 = setTimeout(() => setProgress(60), 150);
    const t2 = setTimeout(() => setProgress(80), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const finish = useCallback(() => {
    setProgress(100);
    const t = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // On pathname change, trigger finish animation
    if (visible) {
      const cleanup = finish();
      return cleanup;
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Intercept link clicks to start the progress bar
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        anchor.target === '_blank'
      ) return;
      // Only trigger for internal navigations to a different path
      if (href !== pathname) {
        startTransition(() => { start(); });
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, [pathname, start]);

  if (!visible) return null;

  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed inset-x-0 top-0 z-[100] h-[2px]"
    >
      <div
        className={cn(
          'h-full bg-gradient-to-r from-violet via-cyan to-violet transition-all',
          progress < 100 ? 'duration-500 ease-out' : 'duration-200 ease-in',
        )}
        style={{ width: `${progress}%` }}
      />
      {/* Glow pulse at the tip */}
      <div
        className="absolute right-0 top-0 h-full w-24 -translate-y-px bg-gradient-to-l from-violet/40 to-transparent transition-all"
        style={{ opacity: progress > 0 && progress < 100 ? 1 : 0 }}
      />
    </div>
  );
}
