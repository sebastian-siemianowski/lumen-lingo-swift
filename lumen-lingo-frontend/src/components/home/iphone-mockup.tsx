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
    label: 'Flashcard View',
  },
  {
    id: 'practice',
    title: 'Smart Practice',
    gradient: 'from-cyan/20 to-violet/10',
    emoji: '🧠',
    label: 'Practice Mode',
  },
  {
    id: 'soundscapes',
    title: 'Ambient Soundscapes',
    gradient: 'from-violet/15 to-amber/10',
    emoji: '🎧',
    label: 'Soundscapes',
  },
  {
    id: 'progress',
    title: 'Progress Tracking',
    gradient: 'from-amber/15 to-violet/10',
    emoji: '📊',
    label: 'Your Progress',
  },
  {
    id: 'orbs',
    title: 'Breathing Orbs',
    gradient: 'from-cyan/15 to-violet/15',
    emoji: '🔮',
    label: 'Visual Calm',
  },
];

export function IPhoneMockup() {
  const [active, setActive] = useState(0);
  const prefersReduced = useReducedMotion();

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % screenshots.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 4000);
    return () => clearInterval(interval);
  }, [advance]);

  const current = screenshots[active];

  return (
    <div className={prefersReduced ? '' : 'animate-float'}>
      {/* Device frame */}
      <div className="relative mx-auto w-[280px] sm:w-[300px]">
        {/* Glow behind device */}
        <div className="absolute -inset-8 rounded-[60px] bg-violet/10 blur-[60px]" />

        {/* Device body */}
        <div className="relative overflow-hidden rounded-[44px] border-[3px] border-white/10 bg-[#0a0a0f] p-3 shadow-2xl">
          {/* Notch / Dynamic Island */}
          <div className="absolute top-3 left-1/2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black" />

          {/* Screen */}
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] bg-surface">
            <AnimatePresence mode="wait">
              {current && (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col"
                >
                  {/* Screenshot background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient}`} />

                  {/* Simulated app content */}
                  <div className="relative flex flex-1 flex-col items-center justify-center gap-3 p-6 pt-12">
                    <span className="text-5xl">{current.emoji}</span>
                    <span className="font-display text-sm font-bold text-foreground">
                      {current.title}
                    </span>
                    <span className="text-xs text-foreground-muted">{current.label}</span>

                    {/* Fake UI skeleton bars */}
                    <div className="mt-4 flex w-full flex-col gap-2">
                      <div className="h-8 w-full rounded-lg bg-white/5" />
                      <div className="h-8 w-3/4 rounded-lg bg-white/3" />
                      <div className="h-8 w-5/6 rounded-lg bg-white/4" />
                    </div>

                    {/* Fake bottom nav */}
                    <div className="mt-auto flex w-full justify-around pt-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-5 w-5 rounded-full bg-white/8" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="mt-6 flex justify-center gap-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 bg-violet'
                  : 'w-1.5 bg-foreground-muted/30 hover:bg-foreground-muted/50'
              }`}
              aria-label={`View screenshot ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
