'use client';

import { useEffect } from 'react';

/**
 * Root layout error boundary — renders when the root layout itself throws.
 * Must provide its own <html>/<body> since the layout is broken.
 * Kept minimal: inline styles only (no Tailwind, no external CSS guaranteed).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Best-effort error tracking — analytics may not be loaded
    try {
      if (typeof window !== 'undefined' && 'va' in window) {
        (window as Record<string, unknown>).va?.('event', {
          name: 'global_error',
          data: { digest: error.digest ?? 'unknown' },
        });
      }
    } catch {
      // silently ignore — analytics unavailable
    }
  }, [error.digest]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0f',
          color: '#e4e4e7',
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        {/* Subtle violet glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.06) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 480 }}>
          {/* Calming SVG orb */}
          <svg
            viewBox="0 0 120 120"
            width="120"
            height="120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: '0 auto 2rem' }}
            aria-hidden="true"
          >
            <circle cx="60" cy="60" r="40" fill="#111118" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
            <circle cx="60" cy="60" r="28" fill="#0a0a0f" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
            <circle cx="60" cy="60" r="4" fill="#8b5cf6" opacity="0.5" />
          </svg>

          <h1
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            Something Went Wrong
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#8b8b94',
              marginBottom: '2rem',
            }}
          >
            We encountered an unexpected issue. This has been noted, and we&apos;re on it.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => reset()}
              style={{
                padding: '0.625rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#fff',
                background: '#8b5cf6',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(139,92,246,0.25)',
                transition: 'box-shadow 0.2s',
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: '0.625rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#e4e4e7',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
