'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Floating indicator that fades in when the browser goes offline.
 * Non-intrusive: sits at bottom-center, auto-hides on reconnect.
 */
export function NetworkStatus() {
  const [online, setOnline] = useState(true);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    // Set initial state
    setOnline(navigator.onLine);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {!online && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        >
          <div className="flex items-center gap-2 rounded-full border border-amber/20 bg-surface/90 px-4 py-2 shadow-[0_0_24px_rgba(245,158,11,0.1)] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber" />
            </span>
            <span className="text-sm font-medium text-foreground-secondary">
              You&apos;re offline
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
