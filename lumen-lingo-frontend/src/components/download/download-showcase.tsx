'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const screenshots = [
  {
    id: 'flashcards',
    title: 'Immersive Flashcards',
    gradient: 'from-violet/20 to-cyan/10',
    emoji: '🃏',
    subtitle: 'Swipe through beautifully designed cards',
  },
  {
    id: 'practice',
    title: 'Smart Practice',
    gradient: 'from-cyan/20 to-violet/10',
    emoji: '🧠',
    subtitle: 'Three adaptive game modes',
  },
  {
    id: 'soundscapes',
    title: 'Ambient Soundscapes',
    gradient: 'from-violet/15 to-amber/10',
    emoji: '🎧',
    subtitle: '12 curated focus environments',
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function DownloadShowcase() {
  const [active, setActive] = useState(0);
  const prefersReduced = useReducedMotion();

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % screenshots.length);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const interval = setInterval(advance, 3500);
    return () => clearInterval(interval);
  }, [advance, prefersReduced]);

  const current = screenshots[active];

  return (
    <section className="relative px-6 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-violet/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Device mockup */}
        <div className={prefersReduced ? '' : 'animate-float'}>
          <div className="relative mx-auto w-[240px] sm:w-[260px]">
            <div className="absolute -inset-8 rounded-[60px] bg-violet/8 blur-[50px]" />
            <div className="relative overflow-hidden rounded-[40px] border-[3px] border-white/10 bg-[#0a0a0f] p-2.5 shadow-2xl">
              <div className="absolute top-2.5 left-1/2 z-20 h-[24px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[32px] bg-surface">
                <AnimatePresence mode="wait">
                  {current && (
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, ease }}
                      className="absolute inset-0 flex flex-col"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient}`} />
                      <div className="relative flex flex-1 flex-col items-center justify-center gap-3 p-5 pt-10">
                        <span className="text-4xl">{current.emoji}</span>
                        <span className="font-display text-sm font-bold text-foreground">
                          {current.title}
                        </span>
                        <span className="text-xs text-foreground-muted">{current.subtitle}</span>
                        <div className="mt-3 flex w-full flex-col gap-2">
                          <div className="h-7 w-full rounded-lg bg-white/5" />
                          <div className="h-7 w-3/4 rounded-lg bg-white/3" />
                          <div className="h-7 w-5/6 rounded-lg bg-white/4" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Carousel dots */}
            <div className="mt-5 flex justify-center gap-2">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-6 bg-violet'
                      : 'w-1.5 bg-foreground-muted/40 hover:bg-foreground-muted/60'
                  }`}
                  aria-label={`View screenshot ${i + 1}: ${screenshots[i]?.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Captions */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Designed to delight
          </h2>
          <p className="max-w-md text-foreground-secondary leading-relaxed">
            Every interaction is crafted with care. Smooth animations, 
            subtle haptics, and ambient soundscapes create a learning 
            environment you actually want to return to.
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {screenshots.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                  i === active
                    ? 'border-violet/40 bg-violet-muted text-foreground'
                    : 'border-glass-border bg-glass text-foreground-secondary hover:bg-glass-hover'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
