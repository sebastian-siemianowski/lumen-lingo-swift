'use client';

import { useEffect, useState, useCallback, useRef, startTransition } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

/**
 * Thin iridescent progress bar below the header, similar to NProgress.
 * Triggers on client-side navigations via pathname changes.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const startTime = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const start = useCallback(() => {
    clearTimers();
    startTime.current = Date.now();
    setProgress(0);
    setVisible(true);
    // Phase 1: rapid fill to 80% in 400ms
    requestAnimationFrame(() => setProgress(30));
    timers.current.push(setTimeout(() => setProgress(60), 150));
    timers.current.push(setTimeout(() => setProgress(80), 400));
    // Phase 2: slow creep 80→95 over ~3s
    timers.current.push(setTimeout(() => setProgress(88), 1500));
    timers.current.push(setTimeout(() => setProgress(93), 3000));
    timers.current.push(setTimeout(() => setProgress(95), 4500));
  }, [clearTimers]);

  const finish = useCallback(() => {
    clearTimers();
    // Ensure minimum visible time of 150ms
    const elapsed = Date.now() - startTime.current;
    const delay = Math.max(0, 150 - elapsed);
    timers.current.push(
      setTimeout(() => {
        setProgress(100);
        // Phase 3: snap to 100% then fade
        timers.current.push(
          setTimeout(() => {
            setVisible(false);
            setProgress(0);
          }, 200),
        );
      }, delay),
    );
  }, [clearTimers]);

  useEffect(() => {
    if (visible) {
      finish();
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

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
      if (href !== pathname) {
        startTransition(() => { start(); });
      }
    };
    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, [pathname, start]);

  useEffect(() => clearTimers, [clearTimers]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-14 z-[45] h-0.5 sm:top-16"
    >
      <div
        className={cn(
          'h-full bg-gradient-to-r from-[--color-violet] via-[--color-cyan] to-[--color-violet]',
          progress < 100
            ? 'transition-[width] duration-500 ease-out'
            : 'transition-[width] duration-100 ease-in',
        )}
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 8px rgba(139,92,246,0.3)',
        }}
      />
    </div>
  );
}
