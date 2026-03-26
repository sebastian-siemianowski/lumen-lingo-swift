'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import {
  FlashcardIcon,
  SpacedRepetitionIcon,
  SoundscapeIcon,
  ProgressIcon,
  BreathingOrbIcon,
} from '@/components/icons';

/* ─── Tab data (matches real iOS app features) ─── */

const TABS = [
  {
    id: 'flashcards',
    title: 'Immersive Flashcards',
    tabLabel: 'Cards',
    gradient: 'from-violet/20 via-violet/8 to-cyan/10',
    icon: FlashcardIcon,
    label: 'Flashcard View',
  },
  {
    id: 'grammar',
    title: 'Grammar Challenge',
    tabLabel: 'Grammar',
    gradient: 'from-cyan/20 via-cyan/8 to-violet/10',
    icon: SpacedRepetitionIcon,
    label: 'Grammar Challenge',
  },
  {
    id: 'soundscapes',
    title: 'Ambient Soundscapes',
    tabLabel: 'Sounds',
    gradient: 'from-violet/15 via-amber/8 to-amber/10',
    icon: SoundscapeIcon,
    label: 'Soundscapes',
  },
  {
    id: 'progress',
    title: 'Your Journey',
    tabLabel: 'Journey',
    gradient: 'from-amber/15 via-amber/5 to-violet/10',
    icon: ProgressIcon,
    label: 'Your Progress',
  },
  {
    id: 'orbs',
    title: 'Breathing Orbs',
    tabLabel: 'Orbs',
    gradient: 'from-cyan/15 via-violet/8 to-violet/15',
    icon: BreathingOrbIcon,
    label: 'Visual Ambiance',
  },
];

const AUTO_ADVANCE_MS = 5_000;

/* ─── Screen transition variants ─── */

const screenVariants = {
  enter: (dir: number) => ({
    x: dir * 30,
    opacity: 0,
    scale: 0.96,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (dir: number) => ({
    x: dir * -30,
    opacity: 0,
    scale: 0.96,
    filter: 'blur(4px)',
  }),
};

const screenTransition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as const,
};

/* ─── Tab-specific screen content (accurate to real iOS app) ─── */

function FlashcardScreen() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gotIt, setGotIt] = useState(false);

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setTimeout(() => setShowAnswer(true), 350);
    }
  };

  const handleAnswer = (correct: boolean) => {
    setGotIt(correct);
    setTimeout(() => {
      setIsFlipped(false);
      setShowAnswer(false);
      setGotIt(false);
    }, 800);
  };

  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2">
      <span className="text-[9px] tracking-wide text-foreground-muted/70 uppercase">
        English → Japanese
      </span>
      {/* Interactive 3D-flip flashcard */}
      <div
        className="relative w-full cursor-pointer"
        style={{ perspective: '600px' }}
        onClick={handleFlip}
      >
        <motion.div
          className="relative w-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* FRONT */}
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.06] p-4 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full bg-violet/25 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-cyan/15 blur-xl" />
            {/* Frost shimmer */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03]" />
            <span className="font-display relative block text-xl font-bold tracking-tight bg-gradient-to-r from-violet via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Serenity
            </span>
            <span className="mt-1 block text-[9px] text-foreground-muted/50">noun</span>
            <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <motion.span
              className="text-[10px] text-foreground-muted/50 flex items-center justify-center gap-1"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              🖐 Tap to Reveal
            </motion.span>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 w-full overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.06] p-4 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="pointer-events-none absolute -top-6 -left-6 h-20 w-20 rounded-full bg-cyan/25 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-violet/15 blur-xl" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03]" />
            <span className="font-display relative block text-xl font-bold tracking-tight bg-gradient-to-r from-cyan via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              静けさ
            </span>
            <span className="mt-0.5 block text-[9px] text-foreground-muted/50">shizukesa</span>
            <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
            <span className="text-[9px] italic text-foreground-muted/60">&ldquo;The serenity of the temple&rdquo;</span>
            <span className="mt-0.5 block text-[8px] text-foreground-muted/40">お寺の静けさ</span>
          </div>
        </motion.div>

        {/* Success particles */}
        <AnimatePresence>
          {gotIt && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-emerald-400"
                  initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  animate={{
                    opacity: 0,
                    x: (Math.random() - 0.5) * 60,
                    y: -20 - Math.random() * 40,
                    scale: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Answer buttons — appear after flip */}
      <AnimatePresence>
        {showAnswer && !gotIt && (
          <motion.div
            className="flex w-full gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); handleAnswer(false); }}
              className="flex-1 rounded-xl border border-amber/30 bg-amber/8 px-2 py-1.5 text-[9px] font-medium text-amber backdrop-blur-sm transition-all hover:bg-amber/15 hover:shadow-[0_0_12px_rgba(245,158,11,0.2)]"
            >
              ↺ Still Learning
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleAnswer(true); }}
              className="flex-1 rounded-xl border border-cyan/30 bg-cyan/8 px-2 py-1.5 text-[9px] font-medium text-cyan backdrop-blur-sm transition-all hover:bg-cyan/15 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)]"
            >
              ✓ Got It
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <div className="flex w-full items-center gap-2 px-1">
        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/8">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet to-cyan shadow-[0_0_8px_rgba(139,92,246,0.4)]"
            initial={{ width: 0 }}
            animate={{ width: '25%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
        <span className="text-[9px] font-medium text-foreground-muted/60">3/12</span>
      </div>
    </div>
  );
}

function GrammarScreen() {
  const [selected, setSelected] = useState<number | null>(null);
  const options = [
    { label: 'A. Light', correct: true },
    { label: 'B. Shadow', correct: false },
    { label: 'C. Water', correct: false },
    { label: 'D. Wind', correct: false },
  ];

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setTimeout(() => setSelected(null), 1500);
  };

  return (
    <div className="mt-2 flex w-full flex-col gap-2">
      <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-2.5 text-center backdrop-blur-sm">
        <span className="text-[10px] font-medium text-foreground">
          What does 光 mean?
        </span>
      </div>
      {options.map((opt, i) => {
        const isSelected = selected === i;
        const showCorrect = selected !== null && opt.correct;
        const showWrong = isSelected && !opt.correct;
        return (
          <motion.button
            key={opt.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: isSelected ? [1, 1.03, 1] : 1,
            }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.25 }}
            onClick={() => handleSelect(i)}
            className={`rounded-xl border px-3 py-2 text-left text-[10px] transition-all cursor-pointer ${
              showCorrect
                ? 'border-cyan/40 bg-cyan/8 text-cyan shadow-[0_0_16px_rgba(6,182,212,0.2),inset_0_1px_0_rgba(6,182,212,0.15)]'
                : showWrong
                ? 'border-red-400/40 bg-red-400/8 text-red-400 shadow-[0_0_16px_rgba(248,113,113,0.15)]'
                : selected !== null && !opt.correct
                ? 'border-white/[0.04] bg-white/[0.01] text-foreground-muted/40'
                : 'border-white/[0.06] bg-white/[0.02] text-foreground-muted hover:bg-white/[0.04] hover:border-white/[0.1]'
            }`}
          >
            {opt.label}
          </motion.button>
        );
      })}
      <div className="mt-1 flex items-center justify-center gap-1.5">
        <div className="h-1 w-8 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-violet to-cyan" />
        </div>
        <span className="text-[8px] text-foreground-muted/60">80% accuracy</span>
      </div>
    </div>
  );
}

function SoundscapeScreen() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2.5">
      {/* Toggle-style ambient player (matches real app) */}
      <button
        className="relative flex w-full items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] p-2.5 backdrop-blur-sm cursor-pointer transition-all hover:bg-white/[0.06] hover:border-white/[0.12]"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet/30 to-amber/20">
          <motion.div
            className="absolute inset-0 rounded-full bg-violet/20"
            animate={isPlaying ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] } : { scale: 1, opacity: 0.15 }}
            transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'easeInOut' }}
          />
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative text-violet">
            {isPlaying ? (
              <>
                <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
                <line x1="16" y1="9" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="22" y1="9" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </div>
        <div className="flex flex-1 flex-col gap-0.5">
          <span className="font-display text-[10px] font-bold text-foreground">Paris Café</span>
          <span className="text-[8px] text-foreground-muted/60">Cozy · Warm chatter &amp; clinking cups</span>
        </div>
      </button>
      {/* Volume slider */}
      <div className="flex w-full items-center gap-2 px-1">
        <svg width="10" height="10" viewBox="0 0 24 24" className="text-foreground-muted/40">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
        </svg>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-violet/60 to-violet" />
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" className="text-foreground-muted/60">
          <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      {/* Soundscape category pills */}
      <div className="flex flex-wrap justify-center gap-1">
        {['Cozy', 'Nature', 'Atmospheric', 'Travel'].map((cat, i) => (
          <span
            key={cat}
            className={`rounded-full border px-2 py-0.5 text-[7px] ${
              i === 0
                ? 'border-violet/30 bg-violet/10 text-violet'
                : 'border-white/[0.06] bg-white/[0.02] text-foreground-muted/60'
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
      <span className="text-[7px] text-foreground-muted/40">12 immersive soundscapes</span>
    </div>
  );
}

function ProgressScreen() {
  const barHeights = [20, 32, 28, 40, 24, 36, 16];
  const barColors = [
    'from-violet/40 to-violet/70',
    'from-violet/50 to-violet/80',
    'from-violet/45 to-violet/75',
    'from-violet/60 to-cyan/80',
    'from-violet/40 to-violet/70',
    'from-violet/55 to-cyan/75',
    'from-violet/35 to-violet/60',
  ];
  return (
    <div className="mt-2 flex w-full flex-col gap-2.5">
      {/* Level ring */}
      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
            <motion.circle
              cx="18" cy="18" r="15" fill="none" stroke="url(#progressGrad)" strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="94.25"
              initial={{ strokeDashoffset: 94.25 }}
              animate={{ strokeDashoffset: 94.25 * 0.28 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(139,92,246)" />
                <stop offset="100%" stopColor="rgb(6,182,212)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] font-bold text-foreground">12</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-medium text-foreground">Level 12</span>
          <span className="text-[8px] text-foreground-muted/60">248 / 350 XP</span>
        </div>
        <span className="ml-auto text-[9px] text-amber">🔥 7</span>
      </div>
      {/* Weekly chart — pill-shaped bars with glow-on-tallest */}
      <div className="flex items-end justify-between gap-1.5 h-12">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
          const isTallest = barHeights[i] === Math.max(...barHeights);
          return (
            <div key={day + i} className="flex flex-1 flex-col items-center gap-1">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: barHeights[i], opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full max-w-[18px] rounded-full bg-gradient-to-t ${barColors[i]} ${
                  isTallest ? 'shadow-[0_0_12px_rgba(6,182,212,0.35)]' : 'shadow-[0_0_4px_rgba(139,92,246,0.15)]'
                }`}
              />
              <span className={`text-[7px] ${i === 6 ? 'font-bold text-foreground-muted' : 'text-foreground-muted/50'}`}>{day}</span>
            </div>
          );
        })}
      </div>
      {/* Stats row */}
      <div className="flex justify-between rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 backdrop-blur-sm">
        <div className="text-center">
          <motion.span
            className="block text-[11px] font-bold text-violet"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >248</motion.span>
          <span className="text-[7px] text-foreground-muted/50">XP</span>
        </div>
        <div className="h-auto w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="text-center">
          <motion.span
            className="block text-[11px] font-bold text-cyan"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >42</motion.span>
          <span className="text-[7px] text-foreground-muted/50">Cards</span>
        </div>
        <div className="h-auto w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="text-center">
          <motion.span
            className="block text-[11px] font-bold text-amber"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >89%</motion.span>
          <span className="text-[7px] text-foreground-muted/50">Mastery</span>
        </div>
      </div>
    </div>
  );
}

function BreathingOrbScreen() {
  const themes = [
    {
      name: 'Barcelona Nights',
      colors: ['from-indigo-500/30 to-pink-500/20', 'from-amber-400/25 to-teal-400/15', 'from-purple-500/30 to-indigo-500/20'],
      palette: ['bg-indigo-500', 'bg-pink-500', 'bg-amber-500', 'bg-teal-400', 'bg-purple-500'],
    },
    {
      name: 'Tokyo Sunset',
      colors: ['from-red-500/30 to-orange-500/20', 'from-pink-400/25 to-amber-400/15', 'from-rose-500/30 to-red-500/20'],
      palette: ['bg-red-500', 'bg-orange-500', 'bg-pink-400', 'bg-amber-400', 'bg-rose-500'],
    },
    {
      name: 'Northern Lights',
      colors: ['from-emerald-500/30 to-cyan-500/20', 'from-teal-400/25 to-blue-400/15', 'from-green-500/30 to-emerald-500/20'],
      palette: ['bg-emerald-500', 'bg-cyan-500', 'bg-teal-400', 'bg-blue-400', 'bg-green-500'],
    },
  ];
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex];

  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2.5">
      {/* City-themed orb preview — click to cycle */}
      <button
        className="relative flex h-20 w-full items-center justify-center cursor-pointer"
        onClick={() => setThemeIndex((themeIndex + 1) % themes.length)}
      >
        <motion.div
          key={`orb1-${themeIndex}`}
          className={`absolute h-14 w-14 rounded-full bg-gradient-to-br ${theme.colors[0]} blur-lg`}
          animate={{
            scale: [1, 1.15, 1],
            x: [-4, 4, -4],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          key={`orb2-${themeIndex}`}
          className={`absolute h-10 w-10 translate-x-3 rounded-full bg-gradient-to-br ${theme.colors[1]} blur-md`}
          animate={{
            scale: [1.1, 1, 1.1],
            y: [-3, 3, -3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          key={`orb3-${themeIndex}`}
          className={`absolute h-12 w-12 -translate-x-2 translate-y-1 rounded-full bg-gradient-to-br ${theme.colors[2]} blur-lg`}
          animate={{
            scale: [1, 1.2, 1],
            x: [2, -2, 2],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </button>
      <motion.span
        key={theme.name}
        className="font-display text-[11px] font-bold text-foreground"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme.name}
      </motion.span>
      {/* Color palette preview */}
      <div className="flex gap-1.5">
        {theme.palette.map((color, i) => (
          <motion.div
            key={`${color}-${themeIndex}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.05 + i * 0.04, type: 'spring', stiffness: 400 }}
            className={`h-2.5 w-2.5 rounded-full ${color} shadow-lg`}
          />
        ))}
      </div>
      <span className="text-[8px] text-foreground-muted/60">Tap to explore · 6 city themes</span>
    </div>
  );
}

function ScreenContent({ tabId }: { tabId: string }) {
  switch (tabId) {
    case 'flashcards': return <FlashcardScreen />;
    case 'grammar': return <GrammarScreen />;
    case 'soundscapes': return <SoundscapeScreen />;
    case 'progress': return <ProgressScreen />;
    case 'orbs': return <BreathingOrbScreen />;
    default: return null;
  }
}

/* ─── Status bar (time · signal · battery) ─── */

function StatusBar() {
  return (
    <div className="absolute top-4 right-0 left-0 z-30 flex items-center justify-between px-8">
      <span className="text-[10px] font-semibold leading-none text-white/80">
        9:41
      </span>
      <div className="flex items-center gap-1.5">
        {/* Cellular signal */}
        <svg
          width="13"
          height="8"
          viewBox="0 0 13 8"
          className="text-white/70"
          aria-hidden
        >
          <rect x="0" y="5.5" width="2" height="2.5" rx="0.5" fill="currentColor" />
          <rect x="3.5" y="3.5" width="2" height="4.5" rx="0.5" fill="currentColor" />
          <rect x="7" y="1.5" width="2" height="6.5" rx="0.5" fill="currentColor" />
          <rect x="10.5" y="0" width="2" height="8" rx="0.5" fill="currentColor" />
        </svg>
        {/* WiFi */}
        <svg width="12" height="9" viewBox="0 0 16 12" className="text-white/70" aria-hidden>
          <path d="M8 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="currentColor" transform="translate(0,-2)" />
          <path d="M4.93 8.36a4.5 4.5 0 0 1 6.14 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="translate(0,-2)" />
          <path d="M2.1 5.53a8 8 0 0 1 11.8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="translate(0,-2)" />
          <path d="M.29 2.7A11 11 0 0 1 15.71 2.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="translate(0,-2)" />
        </svg>
        {/* Battery */}
        <svg
          width="18"
          height="8"
          viewBox="0 0 18 8"
          className="text-white/70"
          aria-hidden
        >
          <rect
            x="0.5"
            y="0.5"
            width="14"
            height="7"
            rx="1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <rect x="1.5" y="1.5" width="10" height="5" rx="1" fill="currentColor" />
          <rect x="15" y="2.5" width="1.5" height="3" rx="0.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export function IPhoneMockup() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReduced = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const tablistRef = useRef<HTMLDivElement>(null);

  /* Auto-advance every 5 s; resets on interaction */
  const resetAutoAdvance = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % TABS.length);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    resetAutoAdvance();
    return () => clearInterval(timerRef.current);
  }, [resetAutoAdvance]);

  const goTo = (index: number) => {
    setDirection(index >= active ? 1 : -1);
    setActive(index);
    resetAutoAdvance();
  };

  /* Keyboard: arrow keys cycle tabs */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = (active + 1) % TABS.length;
    else if (e.key === 'ArrowLeft') next = (active - 1 + TABS.length) % TABS.length;
    if (next !== null) {
      e.preventDefault();
      goTo(next);
      tablistRef.current?.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
    }
  };

  const current = TABS[active];

  return (
    <div className={prefersReduced ? '' : 'animate-float'}>
      <div className="relative mx-auto w-[280px] sm:w-[300px]">
        {/* Multi-layer ambient glow behind device */}
        <div className="pointer-events-none absolute -inset-12">
          <motion.div
            className="absolute inset-0 rounded-[80px] bg-violet/12 blur-[80px]"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-4 rounded-[60px] bg-cyan/8 blur-[60px]"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>

        {/* Device body — titanium-style frame with edge shimmer */}
        <div className="relative overflow-hidden rounded-[44px] border-[3px] border-white/[0.14] bg-[#08080d] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_1px_rgba(255,255,255,0.12),0_0_40px_rgba(139,92,246,0.08)]">
          {/* Bezel highlight — top specular reflection */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[60%] rounded-t-[44px] bg-gradient-to-b from-white/[0.08] to-transparent" />
          {/* Side edge highlights for 3D depth */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[1px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[1px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent" />

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />

          {/* Status bar */}
          <StatusBar />

          {/* Screen with depth shadow and glass effect */}
          <div
            className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] bg-surface cursor-pointer"
            style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)' }}
          >
            {/* Screen content with directional slide transitions */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                id={`panel-${current.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${current.id}`}
                custom={direction}
                variants={screenVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={prefersReduced ? { duration: 0 } : screenTransition}
                className="absolute inset-0 flex flex-col"
              >
                {/* Gradient backdrop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient}`} />

                {/* Subtle mesh noise texture */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                {/* Screen content (padded for tab bar) */}
                <div className="relative flex flex-1 flex-col items-center justify-center gap-3 p-6 pt-12 pb-16">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotate: -8 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.05, type: 'spring', stiffness: 200 }}
                    className="relative"
                  >
                    {/* Soft icon halo */}
                    <div className="pointer-events-none absolute -inset-3 rounded-full bg-violet/10 blur-xl" />
                    <current.icon
                      size={48}
                      className="relative text-foreground-secondary drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]"
                      aria-hidden
                    />
                  </motion.div>
                  <motion.span
                    className="font-display text-sm font-bold text-foreground drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.12 }}
                  >
                    {current.title}
                  </motion.span>

                  <ScreenContent tabId={current.id} />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Glass reflection overlay — diagonal light streak */}
            <div
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.02) 100%)',
              }}
            />

            {/* Tab bar — frosted glass with rounded bottom matching iPhone curve */}
            <LayoutGroup>
              <div
                ref={tablistRef}
                role="tablist"
                aria-label="App features"
                onKeyDown={handleKeyDown}
                className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-around rounded-b-[36px] border-t border-white/[0.06] bg-surface/70 px-1 pb-5 pt-1.5 backdrop-blur-xl"
              >
                {TABS.map((tab, i) => {
                  const Icon = tab.icon;
                  const isActive = i === active;
                  return (
                    <button
                      key={tab.id}
                      id={`tab-${tab.id}`}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.id}`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => goTo(i)}
                      className="relative flex flex-col items-center gap-0.5 rounded px-1 outline-none focus-visible:ring-2 focus-visible:ring-violet"
                    >
                      <Icon
                        size={16}
                        className={`transition-colors duration-200 ${
                          isActive ? 'text-violet drop-shadow-[0_0_4px_rgba(139,92,246,0.4)]' : 'text-foreground-muted/60'
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`text-[8px] leading-tight transition-colors duration-200 ${
                          isActive ? 'text-violet' : 'text-foreground-muted/60'
                        }`}
                      >
                        {tab.tabLabel}
                      </span>
                      {/* Active indicator pill — slides via layout animation */}
                      {isActive && (
                        <motion.div
                          layoutId="mockupTabPill"
                          className="absolute -bottom-1 h-[2px] w-4 rounded-full bg-violet shadow-[0_0_6px_rgba(139,92,246,0.5)]"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>

            {/* Home indicator */}
            <div className="pointer-events-none absolute inset-x-0 bottom-1 z-20 flex justify-center">
              <div className="h-[3px] w-[100px] rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* External dot indicators with glow */}
        <div className="mt-6 flex justify-center gap-2">
          {TABS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 bg-violet shadow-[0_0_8px_rgba(139,92,246,0.4)]'
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
