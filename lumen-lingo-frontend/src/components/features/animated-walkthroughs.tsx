'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { cn } from '@/lib/utils';

// ─── Shared phone frame ────────────────────────────────────────────
function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative mx-auto w-[220px] overflow-hidden rounded-[28px] border border-glass-border bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-2 shadow-xl sm:w-[260px]',
        className,
      )}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-background/80" />
      {/* Screen */}
      <div className="relative overflow-hidden rounded-[20px] bg-background">
        {children}
      </div>
    </div>
  );
}

// ─── 1. Flashcard Flow Animation ───────────────────────────────────
const FLASHCARD_DURATION = 10000; // 10s loop

export function FlashcardFlowAnimation() {
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(0); // 0: appear, 1: flip, 2: swipe, 3: next
  const ref = useRef<HTMLDivElement>(null);

  // Intersection observer
  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setPlaying(e.isIntersecting),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  // Animation loop
  useEffect(() => {
    if (!playing || reduced) return;
    setStep(0);
    const timers = [
      setTimeout(() => setStep(1), 2000),  // flip
      setTimeout(() => setStep(2), 5000),  // swipe
      setTimeout(() => setStep(3), 7000),  // next card
      setTimeout(() => setStep(0), 9500),  // reset
    ];
    const loop = setInterval(() => {
      setStep(0);
      timers.push(
        setTimeout(() => setStep(1), 2000),
        setTimeout(() => setStep(2), 5000),
        setTimeout(() => setStep(3), 7000),
        setTimeout(() => setStep(0), 9500),
      );
    }, FLASHCARD_DURATION);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [playing, reduced]);

  if (reduced) {
    return (
      <PhoneFrame>
        <FlashcardStatic />
      </PhoneFrame>
    );
  }

  return (
    <div ref={ref}>
      <PhoneFrame>
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-background p-4">
          {/* Top bar */}
          <div className="mb-3 flex items-center justify-between pt-6">
            <div className="h-2 w-16 rounded-full bg-white/10" />
            <div className="text-[9px] font-medium text-foreground-muted">Card 1 of 5</div>
          </div>

          {/* Progress bar */}
          <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
              animate={{ width: step >= 2 ? '40%' : '20%' }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Card area */}
          <div className="relative mx-auto h-[55%] w-full [perspective:600px]">
            <AnimatePresence mode="wait">
              {step < 2 ? (
                <motion.div
                  key="card"
                  className="absolute inset-0 [transform-style:preserve-3d]"
                  animate={{ rotateY: step >= 1 ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-glass-border bg-gradient-to-br from-white/[0.06] to-white/[0.02] [backface-visibility:hidden]">
                    <span className="mb-1 text-[8px] font-semibold text-violet uppercase">French</span>
                    <span className="text-lg font-bold text-foreground">Bonjour</span>
                    <span className="mt-1 text-[8px] text-foreground-muted">Tap to flip</span>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-cyan/20 bg-gradient-to-br from-cyan/[0.06] to-violet/[0.03] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <span className="mb-1 text-[8px] font-semibold text-cyan uppercase">English</span>
                    <span className="text-lg font-bold text-foreground">Hello</span>
                  </div>
                </motion.div>
              ) : step === 2 ? (
                <motion.div
                  key="swipe"
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/5 to-white/[0.02]"
                  initial={{ x: 0, opacity: 1, rotate: 0 }}
                  animate={{ x: 180, opacity: 0, rotate: 12 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <span className="mb-1 text-[8px] font-semibold text-emerald-400">GOT IT ✓</span>
                  <span className="text-lg font-bold text-foreground">Hello</span>
                </motion.div>
              ) : (
                <motion.div
                  key="next"
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-glass-border bg-gradient-to-br from-white/[0.06] to-white/[0.02]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <span className="mb-1 text-[8px] font-semibold text-violet uppercase">Spanish</span>
                  <span className="text-lg font-bold text-foreground">Gracias</span>
                  <span className="mt-1 text-[8px] text-foreground-muted">Tap to flip</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action buttons */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full border transition-colors',
              step === 2 ? 'border-red-400/20 bg-red-500/5' : 'border-glass-border bg-white/5',
            )}>
              <span className="text-xs text-foreground-muted">✗</span>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-glass-border bg-white/5">
              <span className="text-[8px] text-foreground-muted">↻</span>
            </div>
            <div className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full border transition-colors',
              step === 2 ? 'border-emerald-400/40 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.2)]' : 'border-glass-border bg-white/5',
            )}>
              <span className={cn('text-xs', step === 2 ? 'text-emerald-400' : 'text-foreground-muted')}>✓</span>
            </div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function FlashcardStatic() {
  return (
    <div className="relative aspect-[9/16] w-full bg-background p-4">
      <div className="pt-6" />
      <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
        <div className="h-full w-1/5 rounded-full bg-gradient-to-r from-violet to-cyan" />
      </div>
      <div className="mx-auto flex h-[55%] w-full flex-col items-center justify-center rounded-xl border border-glass-border bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
        <span className="mb-1 text-[8px] font-semibold text-violet uppercase">French</span>
        <span className="text-lg font-bold text-foreground">Bonjour</span>
        <span className="mt-1 text-[8px] text-foreground-muted">Tap to flip</span>
      </div>
    </div>
  );
}

// ─── 2. Word Builder Animation ─────────────────────────────────────
const LETTERS = ['H', 'E', 'L', 'L', 'O'];
const SCRAMBLED = ['L', 'E', 'H', 'O', 'L'];
const WORD_BUILDER_DURATION = 10000;

export function WordBuilderAnimation() {
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [placedCount, setPlacedCount] = useState(0);
  const [complete, setComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setPlaying(e.isIntersecting),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!playing || reduced) return;
    setPlacedCount(0);
    setComplete(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    function runCycle() {
      setPlacedCount(0);
      setComplete(false);
      // Place letters one by one
      for (let i = 0; i < LETTERS.length; i++) {
        timers.push(setTimeout(() => setPlacedCount(i + 1), 1500 + i * 900));
      }
      // Mark complete
      timers.push(setTimeout(() => setComplete(true), 1500 + LETTERS.length * 900 + 400));
      // Reset
      timers.push(setTimeout(() => {
        setPlacedCount(0);
        setComplete(false);
      }, WORD_BUILDER_DURATION - 300));
    }

    runCycle();
    const loop = setInterval(runCycle, WORD_BUILDER_DURATION);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [playing, reduced]);

  if (reduced) {
    return (
      <PhoneFrame>
        <WordBuilderStatic />
      </PhoneFrame>
    );
  }

  return (
    <div ref={ref}>
      <PhoneFrame>
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-background p-4">
          {/* Header */}
          <div className="mb-2 pt-6 text-center">
            <span className="text-[8px] font-semibold tracking-wider text-violet/60 uppercase">Word Builder</span>
            <div className="mt-1 text-[9px] text-foreground-muted">Build the word for &quot;Hello&quot;</div>
          </div>

          {/* Target slots */}
          <div className="mx-auto mb-6 flex w-fit gap-1.5 pt-2">
            {LETTERS.map((letter, i) => (
              <motion.div
                key={`slot-${i}`}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-bold',
                  i < placedCount
                    ? complete
                      ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-400'
                      : 'border-violet/30 bg-violet/10 text-foreground'
                    : 'border-dashed border-glass-border bg-white/[0.02] text-transparent',
                )}
                animate={
                  complete && i < placedCount
                    ? { scale: [1, 1.15, 1], transition: { delay: i * 0.06, duration: 0.3 } }
                    : {}
                }
              >
                {i < placedCount ? letter : '_'}
              </motion.div>
            ))}
          </div>

          {/* Completion glow */}
          <AnimatePresence>
            {complete && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 text-center"
              >
                <span className="text-xs font-semibold text-emerald-400">✓ Correct!</span>
                <div className="mt-0.5 text-[8px] text-foreground-muted">+15 XP</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Available tiles */}
          <div className="mx-auto flex w-fit flex-wrap justify-center gap-1.5">
            {SCRAMBLED.map((letter, i) => {
              // Check if this tile has been "used" — find the first matching unused
              const usedIndices: number[] = [];
              for (let p = 0; p < placedCount; p++) {
                const target = LETTERS[p];
                const idx = SCRAMBLED.findIndex(
                  (l, si) => l === target && !usedIndices.includes(si),
                );
                if (idx !== -1) usedIndices.push(idx);
              }
              const isUsed = usedIndices.includes(i);

              return (
                <motion.div
                  key={`tile-${i}`}
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-bold',
                    isUsed
                      ? 'border-glass-border/30 bg-white/[0.01] text-foreground-muted/20'
                      : 'border-glass-border bg-white/5 text-foreground shadow-sm',
                  )}
                  animate={{ scale: isUsed ? 0.9 : 1, opacity: isUsed ? 0.3 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {letter}
                </motion.div>
              );
            })}
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function WordBuilderStatic() {
  return (
    <div className="relative aspect-[9/16] w-full bg-background p-4">
      <div className="mb-2 pt-6 text-center">
        <span className="text-[8px] font-semibold text-violet/60 uppercase">Word Builder</span>
        <div className="mt-1 text-[9px] text-foreground-muted">Build the word for &quot;Hello&quot;</div>
      </div>
      <div className="mx-auto mb-6 flex w-fit gap-1.5 pt-2">
        {LETTERS.map((letter, i) => (
          <div key={i} className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet/30 bg-violet/10 text-sm font-bold text-foreground">
            {letter}
          </div>
        ))}
      </div>
      <div className="text-center text-xs font-semibold text-emerald-400">✓ Correct!</div>
    </div>
  );
}

// ─── 3. Soundscape Selection Animation ─────────────────────────────
const SOUNDSCAPES = [
  { name: 'Coffee Shop', icon: '☕', category: 'Cozy' },
  { name: 'Ocean Waves', icon: '🌊', category: 'Nature' },
  { name: 'Deep Space', icon: '🌌', category: 'Atmospheric' },
  { name: 'Paris Café', icon: '🇫🇷', category: 'Travel' },
  { name: 'Mountain Stream', icon: '⛰️', category: 'Nature' },
];

const SOUNDSCAPE_DURATION = 10000;

export function SoundscapeAnimation() {
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [showVisualiser, setShowVisualiser] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setPlaying(e.isIntersecting),
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!playing || reduced) return;
    setSelectedIdx(-1);
    setShowVisualiser(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    function runCycle() {
      setSelectedIdx(-1);
      setShowVisualiser(false);
      // Browse items
      timers.push(setTimeout(() => setSelectedIdx(0), 1200));
      timers.push(setTimeout(() => setSelectedIdx(1), 2400));
      timers.push(setTimeout(() => setSelectedIdx(2), 3600));
      // Select Deep Space
      timers.push(setTimeout(() => {
        setSelectedIdx(2);
        setShowVisualiser(true);
      }, 4800));
      // Reset
      timers.push(setTimeout(() => {
        setSelectedIdx(-1);
        setShowVisualiser(false);
      }, SOUNDSCAPE_DURATION - 300));
    }

    runCycle();
    const loop = setInterval(runCycle, SOUNDSCAPE_DURATION);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [playing, reduced]);

  if (reduced) {
    return (
      <PhoneFrame>
        <SoundscapeStatic />
      </PhoneFrame>
    );
  }

  return (
    <div ref={ref}>
      <PhoneFrame>
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-background p-4">
          {/* Header */}
          <div className="mb-3 pt-6 text-center">
            <span className="text-[8px] font-semibold tracking-wider text-amber/60 uppercase">Soundscapes</span>
            <div className="mt-1 text-[9px] text-foreground-muted">Find your focus</div>
          </div>

          {/* Soundscape list */}
          <div className="flex flex-col gap-1.5">
            {SOUNDSCAPES.slice(0, 4).map((s, i) => (
              <motion.div
                key={s.name}
                className={cn(
                  'flex items-center gap-2.5 rounded-xl border px-3 py-2 transition-colors',
                  i === selectedIdx
                    ? 'border-violet/30 bg-violet/5'
                    : 'border-glass-border/50 bg-white/[0.02]',
                )}
                animate={{
                  scale: i === selectedIdx ? 1.02 : 1,
                  borderColor: i === selectedIdx ? 'rgba(139,92,246,0.3)' : 'rgba(255,255,255,0.06)',
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base">{s.icon}</span>
                <div className="flex-1">
                  <div className={cn(
                    'text-[10px] font-medium',
                    i === selectedIdx ? 'text-foreground' : 'text-foreground-muted',
                  )}>
                    {s.name}
                  </div>
                  <div className="text-[7px] text-foreground-muted/50">{s.category}</div>
                </div>
                {i === selectedIdx && showVisualiser && (
                  <div className="flex items-end gap-[2px]">
                    {[0.6, 1, 0.7, 0.4, 0.85].map((h, bi) => (
                      <motion.div
                        key={bi}
                        className="w-[2px] rounded-full bg-violet"
                        animate={{
                          height: [h * 12, h * 6, h * 12],
                        }}
                        transition={{
                          duration: 0.8 + bi * 0.1,
                          repeat: Infinity,
                          repeatType: 'mirror',
                          delay: bi * 0.1,
                        }}
                        style={{ height: h * 12 }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Ambient visualiser overlay */}
          <AnimatePresence>
            {showVisualiser && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-3 flex flex-col items-center gap-1"
              >
                <div className="text-[8px] font-semibold text-violet">Now Playing</div>
                <div className="text-[10px] font-medium text-foreground">
                  🌌 Deep Space
                </div>
                {/* Waveform visualiser */}
                <div className="mt-1 flex items-end gap-[1.5px]">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-[2px] rounded-full bg-gradient-to-t from-violet to-cyan"
                      animate={{
                        height: [
                          4 + Math.sin(i * 0.8) * 6,
                          8 + Math.cos(i * 0.5) * 8,
                          4 + Math.sin(i * 0.8) * 6,
                        ],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        delay: i * 0.05,
                      }}
                      style={{ height: 4 + Math.sin(i * 0.8) * 6 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PhoneFrame>
    </div>
  );
}

function SoundscapeStatic() {
  return (
    <div className="relative aspect-[9/16] w-full bg-background p-4">
      <div className="mb-3 pt-6 text-center">
        <span className="text-[8px] font-semibold text-amber/60 uppercase">Soundscapes</span>
        <div className="mt-1 text-[9px] text-foreground-muted">Find your focus</div>
      </div>
      <div className="flex flex-col gap-1.5">
        {SOUNDSCAPES.slice(0, 4).map((s, i) => (
          <div
            key={s.name}
            className={cn(
              'flex items-center gap-2.5 rounded-xl border px-3 py-2',
              i === 2 ? 'border-violet/30 bg-violet/5' : 'border-glass-border/50 bg-white/[0.02]',
            )}
          >
            <span className="text-base">{s.icon}</span>
            <div>
              <div className="text-[10px] font-medium text-foreground-muted">{s.name}</div>
              <div className="text-[7px] text-foreground-muted/50">{s.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
