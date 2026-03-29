/**
 * Motion Token System — LumenLingo
 *
 * Springs simulate physical objects. Use snappy for responsive UI,
 * smooth for spatial transitions, gentle for content reveals, bouncy
 * for celebrations. Every animation in the codebase should reference
 * these tokens so our motion language is as rigorous as our colour tokens.
 */
import { useEffect, useState } from 'react';
import type { Variants, Transition } from 'framer-motion';

// ─── Spring presets ────────────────────────────────────────────────
export const spring = {
  snappy: { type: 'spring' as const, stiffness: 400, damping: 20 },
  smooth: { type: 'spring' as const, stiffness: 300, damping: 25 },
  gentle: { type: 'spring' as const, stiffness: 200, damping: 22 },
  bouncy: { type: 'spring' as const, stiffness: 250, damping: 15 },
} as const;

// ─── Duration presets ──────────────────────────────────────────────
export const duration = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  dramatic: 0.8,
} as const;

// ─── Stagger presets ───────────────────────────────────────────────
export const stagger = {
  tight: 0.04,
  normal: 0.08,
  relaxed: 0.12,
} as const;

// ─── Variant helpers ───────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: spring.gentle },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: spring.gentle },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: spring.gentle },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: spring.gentle },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: spring.smooth },
};

export const blur: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: duration.slow } },
};

export function staggerContainer(staggerOverride?: number): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerOverride ?? stagger.normal,
        delayChildren: 0.1,
      },
    },
  };
}

// Backward-compatible named exports
export const staggerContainerDefault: Variants = staggerContainer();
export const staggerContainerFast: Variants = staggerContainer(stagger.tight);

// ─── Reduced motion hook ───────────────────────────────────────────
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return reduced;
}

// ─── Convenience: variants namespace ───────────────────────────────
export const variants = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  blur,
  staggerContainer,
} as const;
