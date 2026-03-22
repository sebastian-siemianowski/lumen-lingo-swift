'use client';

import { useEffect } from 'react';

/**
 * Registers the service worker in production only.
 * Skips Vercel preview deployments to avoid cache conflicts.
 */
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !('serviceWorker' in navigator) ||
      process.env.NODE_ENV !== 'production'
    ) {
      return;
    }

    // Skip Vercel preview deployments
    const host = window.location.hostname;
    if (host.includes('.vercel.app') && !host.startsWith('lumenlingo')) {
      return;
    }

    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Registration failed — silently ignore
    });
  }, []);

  return null;
}
