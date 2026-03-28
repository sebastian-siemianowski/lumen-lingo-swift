'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const screenshotKeys = ['flashcards', 'practice', 'soundscapes'] as const;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Mock screen content for each feature ── */
function FlashcardScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-violet/20 via-background to-cyan/10 p-6">
      {/* Language pair */}
      <div className="flex items-center gap-2 text-xs text-foreground-muted">
        <span className="rounded-full bg-glass px-2 py-0.5">🇯🇵 Japanese</span>
        <span aria-hidden>→</span>
        <span className="rounded-full bg-glass px-2 py-0.5">🇬🇧 English</span>
      </div>
      {/* Flashcard */}
      <motion.div
        className="w-full max-w-[200px] rounded-xl border border-glass-border bg-surface-card/80 p-5 text-center shadow-lg backdrop-blur-sm"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="font-display text-2xl font-bold text-foreground">こんにちは</p>
        <p className="mt-1 text-xs text-foreground-muted">konnichiwa</p>
        <div className="my-3 h-px bg-glass-border" />
        <p className="text-lg text-violet">Hello</p>
      </motion.div>
      {/* Progress dots */}
      <div className="flex gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={cn('h-1.5 rounded-full', i < 3 ? 'w-1.5 bg-violet' : 'w-1.5 bg-glass-border')} />
        ))}
      </div>
      <p className="text-[10px] text-foreground-muted">Card 3 of 5</p>
    </div>
  );
}

function PracticeScreen() {
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex h-full flex-col gap-4 bg-gradient-to-br from-cyan/15 via-background to-violet/10 p-5">
      <div className="text-center">
        <p className="text-[10px] font-medium text-cyan">MULTIPLE CHOICE</p>
        <p className="mt-2 font-display text-sm font-bold text-foreground">What does &quot;merci&quot; mean?</p>
      </div>
      <div className="flex flex-col gap-2">
        {['Goodbye', 'Thank you', 'Hello', 'Please'].map((opt, i) => (
          <motion.button
            key={opt}
            className={cn(
              'rounded-lg border px-3 py-2 text-left text-xs transition-all',
              i === selected
                ? 'border-cyan/40 bg-cyan/10 text-cyan'
                : 'border-glass-border bg-glass/50 text-foreground-secondary',
            )}
            animate={i === selected ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="mr-2 inline-block h-3.5 w-3.5 rounded-full border border-current text-center text-[8px] leading-[13px]">
              {i === selected ? '●' : ' '}
            </span>
            {opt}
          </motion.button>
        ))}
      </div>
      {/* Progress bar */}
      <div className="mt-auto">
        <div className="h-1 overflow-hidden rounded-full bg-glass-border">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
            initial={{ width: '0%' }}
            animate={{ width: '60%' }}
            transition={{ duration: 1.5, ease }}
          />
        </div>
        <p className="mt-1 text-center text-[9px] text-foreground-muted">60% complete</p>
      </div>
    </div>
  );
}

function SoundscapeScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-violet/15 via-background to-cyan/10 p-5">
      <p className="text-[10px] font-medium text-violet">NOW PLAYING</p>
      <div className="text-center">
        <p className="font-display text-sm font-bold text-foreground">✦ Deep Space Drift</p>
        <p className="text-[10px] text-foreground-muted">Atmospheric · Cosmic ambient</p>
      </div>
      {/* Equalizer bars */}
      <div className="flex items-end gap-1">
        {[40, 65, 50, 80, 35, 70, 55, 45, 75, 60, 40, 55].map((h, i) => (
          <motion.div
            key={i}
            className="w-1.5 rounded-full bg-gradient-to-t from-violet/60 to-cyan"
            animate={{ height: [h * 0.4, h * 0.8, h * 0.4] }}
            transition={{ duration: 1 + (i % 3) * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
            style={{ height: h * 0.5 }}
          />
        ))}
      </div>
      {/* Play controls */}
      <div className="flex items-center gap-4">
        <svg className="h-4 w-4 text-foreground-muted" viewBox="0 0 24 24" fill="currentColor"><path d="M19 12L5 21V3l14 9z" /></svg>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet/30 bg-violet/10">
          <svg className="h-5 w-5 text-violet" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z" /></svg>
        </div>
        <svg className="h-4 w-4 text-foreground-muted" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12l14-9v18L5 12z" /></svg>
      </div>
      {/* Volume */}
      <div className="flex w-full items-center gap-2 px-2">
        <svg className="h-3 w-3 text-foreground-muted" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3z" /></svg>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-glass-border">
          <div className="h-full w-3/4 rounded-full bg-violet/50" />
        </div>
      </div>
    </div>
  );
}

const screens = [FlashcardScreen, PracticeScreen, SoundscapeScreen];

export function DownloadShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = useTranslations('Download.showcase');

  /* Auto-advance every 4s unless paused */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % screenshotKeys.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setPaused(true);
    /* Resume auto-advance after 8s of inactivity */
    const resume = setTimeout(() => setPaused(false), 8000);
    return () => clearTimeout(resume);
  }, []);

  const Screen = screens[active]!;

  return (
    <section
      className="relative px-6 py-24"
      role="region"
      aria-label="App screenshots"
      aria-roledescription="carousel"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet/6 blur-[120px]"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Section heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {t('heading')}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-foreground-secondary">
            {t('description')}
          </p>
        </motion.div>

        {/* iPhone Device Mockup */}
        <motion.div
          className="mx-auto flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            {/* Device aurora glow */}
            <div className="absolute -inset-8 animate-spin-slow rounded-[60px] opacity-30" style={{
              background: 'conic-gradient(from 0deg, rgba(139,92,246,0.3), rgba(6,182,212,0.2), rgba(245,158,11,0.15), rgba(139,92,246,0.3))',
              filter: 'blur(30px)',
            }} />

            {/* Device frame — titanium edge feel */}
            <div className="relative overflow-hidden rounded-[44px] border-[3px] border-white/[0.1] shadow-[0_0_80px_rgba(139,92,246,0.12),_0_20px_60px_rgba(0,0,0,0.5)]" style={{ width: 280, background: 'linear-gradient(180deg, rgba(30,30,35,1) 0%, rgba(20,20,25,1) 100%)' }}>
              {/* Notch / Dynamic Island */}
              <div className="absolute top-3 left-1/2 z-20 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_4px_rgba(0,0,0,0.8)]" />

              {/* Screen area */}
              <div className="mx-[2px] mb-[2px] mt-[2px] overflow-hidden rounded-[42px] bg-background" style={{ aspectRatio: '9/19.5' }}>
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2">
                  <span className="text-[9px] font-semibold text-foreground-muted">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 w-3 rounded-[1px] border border-foreground-muted/40" aria-hidden>
                      <div className="h-full w-2/3 rounded-[0.5px] bg-foreground-muted/40" />
                    </div>
                  </div>
                </div>

                {/* Screen content with AnimatePresence */}
                <div className="relative" style={{ height: 420 }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4, ease }}
                    >
                      <Screen />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Home indicator */}
                <div className="flex justify-center pb-2 pt-1">
                  <div className="h-1 w-28 rounded-full bg-white/15" />
                </div>
              </div>

              {/* Subtle edge highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[44px] border border-white/[0.04]" />
            </div>
          </div>
        </motion.div>

        {/* Dot indicators + label */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex gap-2.5">
            {screenshotKeys.map((key, i) => (
              <button
                key={key}
                onClick={() => goTo(i)}
                className="group relative flex items-center justify-center p-1"
                aria-label={`View: ${t(key)}`}
              >
                <span className={cn(
                  'block rounded-full transition-all duration-300',
                  i === active
                    ? 'h-2.5 w-8 bg-violet'
                    : 'h-2.5 w-2.5 bg-glass-border group-hover:bg-foreground-muted',
                )} />
              </button>
            ))}
          </div>
          <p className="text-sm font-medium text-foreground">
            {t(screenshotKeys[active])}
          </p>
          <p className="text-xs text-foreground-muted">
            {t(`${screenshotKeys[active]}Sub`)}
          </p>
        </div>
      </div>
    </section>
  );
}
