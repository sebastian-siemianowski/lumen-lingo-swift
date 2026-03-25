'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { trackEvent } from '@/lib/analytics';
import { CelebrationIcon, ApplauseIcon, EncourageIcon } from '@/components/icons';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { CountUp } from '@/components/motion';
import Link from 'next/link';

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
const VELOCITY_THRESHOLD = 400;
const FAST_SWIPE_DISTANCE = 50;
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type DemoState = 'playing' | 'complete' | 'draining';

export function FlashcardDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [demoState, setDemoState] = useState<DemoState>('playing');
  const [results, setResults] = useState<('correct' | 'incorrect')[]>([]);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);
  const [hasTrackedStart, setHasTrackedStart] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const correctOpacity = useTransform(x, [0, SWIPE_THRESHOLD], [0, 1]);
  const incorrectOpacity = useTransform(x, [-SWIPE_THRESHOLD, 0], [1, 0]);

  // Dynamic shadow that intensifies during drag
  const dragShadow = useTransform(x, (v) => {
    const t = Math.min(Math.abs(v) / SWIPE_THRESHOLD, 1);
    return `0 ${4 + 8 * t}px ${20 + 20 * t}px rgba(0,0,0,${0.15 + 0.35 * t})`;
  });
  // Colour tint overlays (green = correct, red = skip)
  const greenTint = useTransform(x, [0, SWIPE_THRESHOLD], [0, 0.15]);
  const redTint = useTransform(x, [-SWIPE_THRESHOLD, 0], [0.15, 0]);

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
      trackEvent(result === 'correct' ? 'demo_card_swiped_correct' : 'demo_card_swiped_incorrect', {
        card: String(currentIndex + 1),
      });

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
      const fastRight =
        info.velocity.x > VELOCITY_THRESHOLD && info.offset.x > FAST_SWIPE_DISTANCE;
      const fastLeft =
        info.velocity.x < -VELOCITY_THRESHOLD && info.offset.x < -FAST_SWIPE_DISTANCE;

      if (info.offset.x > SWIPE_THRESHOLD || fastRight) {
        advanceCard('correct');
      } else if (info.offset.x < -SWIPE_THRESHOLD || fastLeft) {
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
        setFlipped((f) => {
          trackEvent('demo_card_flipped', { card: String(currentIndex + 1) });
          return !f;
        });
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
    setDemoState('draining');
    setTimeout(() => {
      setCurrentIndex(0);
      setFlipped(false);
      setDemoState('playing');
      setResults([]);
      setExitDirection(null);
    }, 300);
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
      {/* Instruction — fades out after first swipe */}
      <AnimatePresence>
        {results.length === 0 && (
          <motion.p
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex items-center justify-center gap-2 text-sm text-foreground-muted"
          >
            <span aria-hidden>←</span>
            Swipe right for correct, left to skip
            <span aria-hidden>→</span>
          </motion.p>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <div className="mb-8 w-full max-w-xs">
        <div className="mb-2 flex items-center justify-between text-xs text-foreground-muted">
          {/* Number-flip counter */}
          <div className="relative flex h-4 items-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={currentIndex}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {currentIndex + 1} / {DEMO_CARDS.length}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="font-medium text-foreground">{card.language}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet via-cyan to-amber"
            initial={false}
            animate={{
              width: `${(currentIndex / DEMO_CARDS.length) * 100}%`,
              boxShadow: [
                '0 0 0 rgba(139,92,246,0)',
                '0 0 8px rgba(139,92,246,0.4)',
                '0 0 0 rgba(139,92,246,0)',
              ],
            }}
            transition={{
              width: { type: 'spring', stiffness: 100, damping: 15 },
              boxShadow: { duration: 0.3 },
            }}
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
              style={{ x, rotate, boxShadow: dragShadow }}
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
                transition: { duration: 0.25 },
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Swipe indicators */}
              <motion.div
                className="pointer-events-none absolute -end-2 top-6 z-10 rounded-lg border-2 border-emerald-400 px-3 py-1 text-sm font-bold text-emerald-400"
                style={{ opacity: correctOpacity, rotate: 12 }}
              >
                GOT IT ✓
              </motion.div>
              <motion.div
                className="pointer-events-none absolute -start-2 top-6 z-10 rounded-lg border-2 border-red-400 px-3 py-1 text-sm font-bold text-red-400"
                style={{ opacity: incorrectOpacity, rotate: -12 }}
              >
                SKIP ✗
              </motion.div>

              {/* Colour tint overlays — smooth during drag */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-emerald-500"
                style={{ opacity: greenTint }}
                aria-hidden
              />
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-red-500"
                style={{ opacity: redTint }}
                aria-hidden
              />

              {/* The card itself — 3D flip */}
              <div
                className={cn(
                  'relative h-full w-full',
                  !prefersReduced && '[perspective:1000px]',
                )}
                onClick={() => setFlipped((f) => !f)}
              >
                <motion.div
                  className={cn(
                    'relative h-full w-full',
                    !prefersReduced && '[transform-style:preserve-3d]',
                  )}
                  animate={
                    prefersReduced
                      ? {}
                      : {
                          rotateY: flipped ? 180 : 0,
                          boxShadow: [
                            '0 0 0 rgba(139,92,246,0)',
                            '0 0 30px rgba(139,92,246,0.3)',
                            '0 0 0 rgba(139,92,246,0)',
                          ],
                        }
                  }
                  transition={{ duration: prefersReduced ? 0 : 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Front face */}
                  <motion.div
                    className={cn(
                      'absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-glass-border bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 shadow-xl backdrop-blur-xl',
                      !prefersReduced && '[backface-visibility:hidden]',
                    )}
                    animate={prefersReduced ? { opacity: flipped ? 0 : 1 } : {}}
                    transition={prefersReduced ? { duration: 0.15 } : {}}
                  >
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
                  </motion.div>

                  {/* Back face */}
                  <motion.div
                    className={cn(
                      'absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/[0.08] to-violet/[0.04] p-8 shadow-xl backdrop-blur-xl',
                      !prefersReduced
                        ? '[backface-visibility:hidden] [transform:rotateY(180deg)]'
                        : '',
                    )}
                    animate={prefersReduced ? { opacity: flipped ? 1 : 0 } : {}}
                    transition={prefersReduced ? { duration: 0.15 } : {}}
                  >
                    <span className="mb-3 rounded-[--radius-pill] bg-cyan/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-cyan uppercase">
                      English
                    </span>
                    <span className="text-center font-display text-3xl font-bold text-violet sm:text-4xl">
                      {card.translation}
                    </span>
                    {card.romanisation && (
                      <>
                        <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-violet/30 to-transparent" />
                        <span className="mt-3 text-sm text-foreground-muted">
                          {card.romanisation}
                        </span>
                      </>
                    )}
                    <span className="mt-6 text-xs text-foreground-muted/60">
                      Swipe to continue
                    </span>
                  </motion.div>
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
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col items-center">
          <CountUp
            target={percentage}
            suffix="%"
            duration={0.6}
            delay={0.8}
            className="font-display text-3xl font-bold text-foreground"
          />
          <span className="text-xs text-foreground-muted">{correct}/{total}</span>
        </div>
      </div>

      <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
        <span className="flex items-center justify-center gap-2">
          {/* Celebration icon — springs in T+200ms after score counting (score ~1.4s, so ~1.6s total) */}
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.6,
              type: 'spring',
              stiffness: 300,
              damping: 15,
            }}
            className="inline-flex"
          >
            {percentage >= 80
              ? <CelebrationIcon size={48} className="text-amber" aria-hidden />
              : percentage >= 60
                ? <ApplauseIcon size={48} className="text-violet" aria-hidden />
                : <EncourageIcon size={48} className="text-cyan" aria-hidden />
            }
          </motion.span>
          {percentage >= 80 ? 'Amazing!' : percentage >= 60 ? 'Great effort!' : 'Keep going!'}
        </span>
      </h3>

      <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground-muted">
        Love it? The real experience is even better — with 9 languages, adaptive learning,
        ambient soundscapes, and thousands of flashcards.
      </p>

      {/* CTA buttons — appear at T+800ms with fadeUp */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
      >
        <Link href="/download">
          <Button variant="primary" size="lg">
            Try the Full App
          </Button>
        </Link>

        <Button variant="ghost" size="lg" onClick={onRestart}>
          Try Again
        </Button>
      </motion.div>
    </motion.div>
  );
}
