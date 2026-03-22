'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import { Button } from '@/components/ui';
import { getAppStoreUrl } from '@/lib/appStoreUrl';
import { trackEvent } from '@/lib/analytics';

// ─── Demo card data ────────────────────────────────────────────────
interface DemoCard {
  word: string;
  translation: string;
  romanisation?: string;
  language: string;
}

const DEMO_CARDS: DemoCard[] = [
  { word: 'Bonjour', translation: 'Hello', language: 'French' },
  { word: 'Gracias', translation: 'Thank you', language: 'Spanish' },
  { word: 'Auf Wiedersehen', translation: 'Goodbye', language: 'German' },
  { word: 'お願いします', translation: 'Please', romanisation: 'Onegaishimasu', language: 'Japanese' },
  { word: 'Sí', translation: 'Yes', language: 'Spanish' },
];

const SWIPE_THRESHOLD = 80;
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type DemoState = 'playing' | 'complete';

export function FlashcardDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [demoState, setDemoState] = useState<DemoState>('playing');
  const [results, setResults] = useState<('correct' | 'incorrect')[]>([]);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);
  const [hasTrackedStart, setHasTrackedStart] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const correctOpacity = useTransform(x, [0, SWIPE_THRESHOLD], [0, 1]);
  const incorrectOpacity = useTransform(x, [-SWIPE_THRESHOLD, 0], [1, 0]);

  const card = DEMO_CARDS[currentIndex];
  const progress = currentIndex / DEMO_CARDS.length;

  // Track demo start on first interaction
  useEffect(() => {
    if (!hasTrackedStart && (flipped || results.length > 0)) {
      trackEvent('demo_started', { cards: String(DEMO_CARDS.length) });
      setHasTrackedStart(true);
    }
  }, [flipped, results.length, hasTrackedStart]);

  const advanceCard = useCallback(
    (result: 'correct' | 'incorrect') => {
      const direction = result === 'correct' ? 'right' : 'left';
      setExitDirection(direction);
      setResults((prev) => [...prev, result]);

      setTimeout(() => {
        const nextIndex = currentIndex + 1;
        if (nextIndex >= DEMO_CARDS.length) {
          setDemoState('complete');
          trackEvent('demo_completed', {
            correct: String(results.filter((r) => r === 'correct').length + (result === 'correct' ? 1 : 0)),
            total: String(DEMO_CARDS.length),
          });
        } else {
          setCurrentIndex(nextIndex);
          setFlipped(false);
          setExitDirection(null);
        }
      }, 300);
    },
    [currentIndex, results],
  );

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      if (info.offset.x > SWIPE_THRESHOLD) {
        advanceCard('correct');
      } else if (info.offset.x < -SWIPE_THRESHOLD) {
        advanceCard('incorrect');
      }
    },
    [advanceCard],
  );

  // Keyboard navigation
  useEffect(() => {
    if (demoState !== 'playing') return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        advanceCard('correct');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        advanceCard('incorrect');
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [demoState, advanceCard]);

  function resetDemo() {
    setCurrentIndex(0);
    setFlipped(false);
    setDemoState('playing');
    setResults([]);
    setExitDirection(null);
  }

  if (demoState === 'complete') {
    const correctCount = results.filter((r) => r === 'correct').length;
    return <CompletionScreen correct={correctCount} total={DEMO_CARDS.length} onRestart={resetDemo} />;
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center"
      role="region"
      aria-label="Interactive flashcard demo"
    >
      {/* Progress bar */}
      <div className="mb-8 w-full max-w-xs">
        <div className="mb-2 flex items-center justify-between text-xs text-foreground-muted">
          <span>Card {currentIndex + 1} of {DEMO_CARDS.length}</span>
          <span className="font-medium text-foreground">{card.language}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
            initial={false}
            animate={{ width: `${((currentIndex) / DEMO_CARDS.length) * 100}%` }}
            transition={{ duration: 0.4, ease }}
          />
        </div>
      </div>

      {/* Card area */}
      <div className="relative h-[320px] w-full max-w-[280px] sm:h-[360px] sm:max-w-[320px]">
        <AnimatePresence mode="popLayout">
          {!exitDirection && (
            <motion.div
              key={currentIndex}
              className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing"
              style={{ x, rotate }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                x: exitDirection === 'right' ? 300 : -300,
                opacity: 0,
                rotate: exitDirection === 'right' ? 15 : -15,
                transition: { duration: 0.3 },
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Swipe indicators */}
              <motion.div
                className="pointer-events-none absolute -right-2 top-6 z-10 rounded-lg border-2 border-emerald-400 px-3 py-1 text-sm font-bold text-emerald-400"
                style={{ opacity: correctOpacity, rotate: 12 }}
              >
                GOT IT ✓
              </motion.div>
              <motion.div
                className="pointer-events-none absolute -left-2 top-6 z-10 rounded-lg border-2 border-red-400 px-3 py-1 text-sm font-bold text-red-400"
                style={{ opacity: incorrectOpacity, rotate: -12 }}
              >
                SKIP ✗
              </motion.div>

              {/* The card itself — 3D flip */}
              <div
                className="relative h-full w-full [perspective:800px]"
                onClick={() => setFlipped((f) => !f)}
              >
                <motion.div
                  className="relative h-full w-full [transform-style:preserve-3d]"
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Front face */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-glass-border bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 shadow-xl backdrop-blur-xl [backface-visibility:hidden]">
                    <span className="mb-3 rounded-[--radius-pill] bg-violet/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-violet uppercase">
                      {card.language}
                    </span>
                    <span className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
                      {card.word}
                    </span>
                    {card.romanisation && (
                      <span className="mt-2 text-sm text-foreground-muted">
                        {card.romanisation}
                      </span>
                    )}
                    <span className="mt-6 text-xs text-foreground-muted/60">
                      Tap to reveal
                    </span>
                  </div>

                  {/* Back face */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/[0.08] to-violet/[0.04] p-8 shadow-xl backdrop-blur-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <span className="mb-3 rounded-[--radius-pill] bg-cyan/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-cyan uppercase">
                      English
                    </span>
                    <span className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
                      {card.translation}
                    </span>
                    <span className="mt-6 text-xs text-foreground-muted/60">
                      Swipe to continue
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action buttons */}
      <div className="mt-8 flex items-center gap-6">
        <button
          type="button"
          onClick={() => advanceCard('incorrect')}
          aria-label="Skip — I didn't know this"
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-glass-border bg-white/5 text-foreground-muted transition-all hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-label="Flip card"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-white/5 text-foreground-muted transition-all hover:border-violet/30 hover:text-violet focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => advanceCard('correct')}
          aria-label="Got it — I knew this"
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-glass-border bg-white/5 text-foreground-muted transition-all hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>
      </div>

      {/* Keyboard hints */}
      <div className="mt-6 hidden items-center gap-4 text-[10px] text-foreground-muted/50 sm:flex">
        <span>
          <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-foreground-muted">←</kbd> Skip
        </span>
        <span>
          <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-foreground-muted">Space</kbd> Flip
        </span>
        <span>
          <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-foreground-muted">→</kbd> Got it
        </span>
      </div>
    </div>
  );
}

// ─── Completion screen ─────────────────────────────────────────────
function CompletionScreen({
  correct,
  total,
  onRestart,
}: {
  correct: number;
  total: number;
  onRestart: () => void;
}) {
  const percentage = Math.round((correct / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease }}
      className="flex flex-col items-center text-center"
    >
      {/* Score ring */}
      <div className="relative mb-6 flex h-32 w-32 items-center justify-center">
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="4" className="text-white/5" />
          <motion.circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-violet"
            stroke="url(#scoreGrad)"
            strokeDasharray={2 * Math.PI * 52}
            initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - percentage / 100) }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col items-center">
          <span className="font-display text-3xl font-bold text-foreground">{percentage}%</span>
          <span className="text-xs text-foreground-muted">{correct}/{total}</span>
        </div>
      </div>

      <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
        {percentage >= 80 ? '🎉 Amazing!' : percentage >= 60 ? '👏 Great effort!' : '💪 Keep going!'}
      </h3>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground-muted">
        Love it? The real experience is even better — with 9 languages, adaptive learning,
        ambient soundscapes, and thousands of flashcards.
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <a
          href={getAppStoreUrl('demo_completion')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('demo_cta_click', { location: 'completion' })}
        >
          <Button variant="primary" size="lg">
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download Free
          </Button>
        </a>

        <Button variant="ghost" size="lg" onClick={onRestart}>
          Try Again
        </Button>
      </div>
    </motion.div>
  );
}
