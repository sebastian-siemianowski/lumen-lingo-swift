'use client';

import { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import type { ComponentType } from 'react';
import type { IconProps } from '@/components/icons';
import { FlashcardIcon, SpacedRepetitionIcon, SoundscapeIcon } from '@/components/icons';
import { spring } from '@/lib/motion';
import { cn } from '@/lib/utils';

const screenshotKeys = ['flashcards', 'practice', 'soundscapes'] as const;
const gradients = ['from-violet/20 to-cyan/10', 'from-cyan/20 to-violet/10', 'from-violet/15 to-amber/10'];
const icons: ComponentType<IconProps>[] = [FlashcardIcon, SpacedRepetitionIcon, SoundscapeIcon];

const CARD_W = 260;
const GAP = 24;

export function DownloadShowcase() {
  const [active, setActive] = useState(0);
  const t = useTranslations('Download.showcase');
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(idx, screenshotKeys.length - 1));
      setActive(clamped);
      animate(x, -clamped * (CARD_W + GAP), { ...spring.smooth });
    },
    [x],
  );

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipe = info.offset.x + info.velocity.x * 0.3;
    if (swipe < -50) goTo(active + 1);
    else if (swipe > 50) goTo(active - 1);
    else goTo(active);
  };

  return (
    <section
      className="relative px-6 py-20"
      role="region"
      aria-label="App screenshots"
      aria-roledescription="carousel"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet/6 blur-[120px]"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-cyan/4 blur-[80px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
          {t('heading')}
        </h2>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="group relative mx-auto overflow-hidden"
          style={{ maxWidth: CARD_W + 120 }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(active - 1); }
            if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
          }}
        >
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            style={{ x, gap: GAP, paddingLeft: 60, paddingRight: 60 }}
            drag="x"
            dragConstraints={{ left: -(screenshotKeys.length - 1) * (CARD_W + GAP), right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
          >
            {screenshotKeys.map((key, i) => {
              const Icon = icons[i]!;
              return (
                <motion.div
                  key={key}
                  className="glass-card shrink-0 overflow-hidden rounded-2xl"
                  style={{ width: CARD_W }}
                  animate={{
                    scale: i === active ? 1 : 0.88,
                    opacity: i === active ? 1 : 0.5,
                  }}
                  transition={spring.smooth}
                >
                  <div className={`flex aspect-[9/16] flex-col items-center justify-center gap-3 bg-gradient-to-br p-6 ${gradients[i]}`}>
                    <Icon size={40} className="text-foreground-secondary" aria-hidden />
                    <span className="font-display text-sm font-bold text-foreground">{t(key)}</span>
                    <span className="text-xs text-foreground-muted">{t(`${key}Sub`)}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Desktop arrows (show on hover) */}
          {active > 0 && (
            <button
              onClick={() => goTo(active - 1)}
              className="absolute start-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-glass-border bg-surface/90 p-2 text-foreground-muted backdrop-blur-sm transition-opacity hover:text-foreground group-hover:flex"
              aria-label="Previous screenshot"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
          )}
          {active < screenshotKeys.length - 1 && (
            <button
              onClick={() => goTo(active + 1)}
              className="absolute end-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-glass-border bg-surface/90 p-2 text-foreground-muted backdrop-blur-sm transition-opacity hover:text-foreground group-hover:flex"
              aria-label="Next screenshot"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          )}
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {screenshotKeys.map((key, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                'rounded-full transition-all duration-200',
                i === active
                  ? 'h-3 w-3 bg-[--color-violet]'
                  : 'h-2 w-2 bg-[--color-glass-border] hover:bg-[--color-foreground-muted]',
              )}
              aria-label={`View screenshot ${i + 1}: ${t(key)}`}
            />
          ))}
        </div>

        {/* Captions */}
        <p className="mt-4 text-center text-sm text-foreground-secondary">
          {t(screenshotKeys[active])}
        </p>
      </div>
    </section>
  );
}
