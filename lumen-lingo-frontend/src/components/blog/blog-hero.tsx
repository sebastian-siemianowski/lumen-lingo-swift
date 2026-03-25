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
  const prefersReduced = useReducedMotion();
  const anim = (cls: string) => (prefersReduced ? '' : cls);
  const initial = animated ? { opacity: 0, y: 20 } : undefined;
  const animate = animated ? { opacity: 1, y: 0 } : undefined;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Cosmic gradient — opacities boosted for shorter section to match homepage intensity */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-background" />

        <div
          className={`absolute -top-[10%] -right-[10%] h-[min(700px,80vw)] w-[min(700px,80vw)] rounded-full bg-violet/[0.30] will-change-transform ${anim('animate-cosmic-drift-1')}`}
          style={{ filter: 'blur(100px)' }}
        />
        <div
          className={`absolute -bottom-[10%] -left-[8%] h-[min(560px,65vw)] w-[min(560px,65vw)] rounded-full bg-cyan/[0.22] will-change-transform ${anim('animate-cosmic-drift-2')}`}
          style={{ filter: 'blur(90px)' }}
        />
        <div
          className={`absolute top-[20%] right-[10%] h-[min(480px,50vw)] w-[min(480px,50vw)] rounded-full bg-[#1e3a5f]/[0.30] will-change-transform ${anim('animate-cosmic-drift-3')}`}
          style={{ filter: 'blur(80px)' }}
        />
        <div
          className={`absolute top-1/2 left-1/2 h-[min(360px,40vw)] w-[min(360px,40vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.15] will-change-transform ${anim('animate-cosmic-pulse')}`}
          style={{ filter: 'blur(70px)' }}
        />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_95%)]" />
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

      {/* Soft bottom blend */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </section>
  );
}
