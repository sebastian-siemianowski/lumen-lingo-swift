'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function BlogHero() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <BlogHeroContent />;
  }

  return <BlogHeroContent animated />;
}

function BlogHeroContent({ animated = false }: { animated?: boolean }) {
  const initial = animated ? { opacity: 0, y: 20 } : undefined;
  const animate = animated ? { opacity: 1, y: 0 } : undefined;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[--color-violet]/8 blur-[120px]" />
        <div className="absolute right-1/4 top-20 h-[400px] w-[500px] translate-x-1/2 rounded-full bg-[--color-cyan]/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={initial}
            animate={animate}
            transition={animated ? { duration: 0.6, delay: 0, ease } : undefined}
          >
            <span className="inline-flex items-center gap-2 rounded-[--radius-pill] border border-[--color-violet]/20 bg-[--color-violet]/10 px-4 py-1.5 text-xs font-semibold text-[--color-violet]">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              The LumenLingo Journal
            </span>
          </motion.div>

          <motion.div
            initial={initial}
            animate={animate}
            transition={animated ? { duration: 0.6, delay: 0.1, ease } : undefined}
          >
            <h1 className="text-gradient mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Tips, Guides &amp; Insights
            </h1>
          </motion.div>

          <motion.div
            initial={initial}
            animate={animate}
            transition={animated ? { duration: 0.6, delay: 0.2, ease } : undefined}
          >
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[--color-foreground-secondary]">
              Explore the science of language learning, practical study tips, and
              the latest from the LumenLingo team. Written for learners who want
              to go deeper.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[--color-background] to-transparent" />
    </section>
  );
}
