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

/* ─── Tab data ─── */

const TABS = [
  {
    id: 'flashcards',
    title: 'Immersive Flashcards',
    tabLabel: 'Cards',
    gradient: 'from-violet/20 to-cyan/10',
    icon: FlashcardIcon,
    label: 'Flashcard View',
  },
  {
    id: 'practice',
    title: 'Smart Practice',
    tabLabel: 'Practice',
    gradient: 'from-cyan/20 to-violet/10',
    icon: SpacedRepetitionIcon,
    label: 'Practice Mode',
  },
  {
    id: 'soundscapes',
    title: 'Ambient Soundscapes',
    tabLabel: 'Sounds',
    gradient: 'from-violet/15 to-amber/10',
    icon: SoundscapeIcon,
    label: 'Soundscapes',
  },
  {
    id: 'progress',
    title: 'Progress Tracking',
    tabLabel: 'Stats',
    gradient: 'from-amber/15 to-violet/10',
    icon: ProgressIcon,
    label: 'Your Progress',
  },
  {
    id: 'orbs',
    title: 'Breathing Orbs',
    tabLabel: 'Breathe',
    gradient: 'from-cyan/15 to-violet/15',
    icon: BreathingOrbIcon,
    label: 'Visual Calm',
  },
];

const AUTO_ADVANCE_MS = 5_000;

/* ─── Screen transition variants ─── */

const screenVariants = {
  enter: (dir: number) => ({ x: dir * 20, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -20, opacity: 0 }),
};

const screenTransition = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };

/* ─── Tab-specific mock content ─── */

function FlashcardScreen() {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2">
      <span className="text-[9px] tracking-wide text-foreground-muted/70 uppercase">
        English → Japanese
      </span>
      <div className="glass-card w-full rounded-xl border border-glass-border p-3 text-center">
        <span className="font-display text-base font-bold text-foreground">
          Serenity
        </span>
        <div className="my-1.5 h-px w-full bg-glass-border" />
        <span className="text-xs text-cyan">静けさ</span>
        <span className="mt-0.5 block text-[9px] text-foreground-muted/60">
          shizukesa
        </span>
      </div>
      <div className="flex w-full items-center justify-between px-1">
        <span className="text-[9px] text-foreground-muted/60">3 of 12</span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className={`h-1 w-2 rounded-full ${i <= 3 ? 'bg-violet' : 'bg-white/10'}`}
            />
          ))}
        </div>
      </div>
      <span className="mt-1 text-[8px] text-foreground-muted/40">Tap to flip</span>
    </div>
  );
}

function PracticeScreen() {
  return (
    <div className="mt-2 flex w-full flex-col gap-2">
      <div className="rounded-lg border border-glass-border bg-white/5 p-2 text-center">
        <span className="text-[10px] font-medium text-foreground">
          What does 光 mean?
        </span>
      </div>
      {['Light', 'Shadow', 'Water', 'Wind'].map((opt, i) => (
        <button
          key={opt}
          className={`rounded-lg border px-3 py-1.5 text-left text-[10px] transition-colors ${
            i === 0
              ? 'border-cyan/40 bg-cyan/10 text-cyan'
              : 'border-glass-border bg-white/3 text-foreground-muted'
          }`}
        >
          {opt}
        </button>
      ))}
      <div className="mt-1 flex items-center justify-center gap-1">
        <div className="h-1 w-8 rounded-full bg-violet" />
        <span className="text-[8px] text-foreground-muted/60">80% accuracy</span>
      </div>
    </div>
  );
}

function SoundscapeScreen() {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-3">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-violet/20 bg-violet/5">
        <div className="absolute inset-0 rounded-full bg-violet/10 animate-pulse" />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="relative text-violet">
          <path d="M9 18V6l12 6-12 6z" fill="currentColor" />
        </svg>
      </div>
      <span className="font-display text-[11px] font-bold text-foreground">Midnight Rain</span>
      {/* Waveform bars */}
      <div className="flex items-end gap-[2px] h-6">
        {[3, 5, 8, 12, 6, 10, 4, 7, 11, 5, 9, 3, 6, 8, 4].map((h, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-violet/40"
            style={{ height: `${h * 2}px` }}
          />
        ))}
      </div>
      <span className="text-[8px] text-foreground-muted/60">2:34 / 60:00</span>
    </div>
  );
}

function ProgressScreen() {
  return (
    <div className="mt-2 flex w-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium text-foreground">This Week</span>
        <span className="text-[9px] text-amber">🔥 7-day streak</span>
      </div>
      <div className="flex items-end justify-between gap-1 h-12">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
          <div key={day + i} className="flex flex-col items-center gap-1">
            <div
              className="w-4 rounded-sm bg-gradient-to-t from-violet/60 to-violet"
              style={{ height: `${[20, 32, 28, 40, 24, 36, 16][i]}px` }}
            />
            <span className="text-[7px] text-foreground-muted/60">{day}</span>
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between rounded-lg border border-glass-border bg-white/3 px-2 py-1.5">
        <div className="text-center">
          <span className="block text-[10px] font-bold text-violet">248</span>
          <span className="text-[7px] text-foreground-muted/60">XP</span>
        </div>
        <div className="text-center">
          <span className="block text-[10px] font-bold text-cyan">42</span>
          <span className="text-[7px] text-foreground-muted/60">Cards</span>
        </div>
        <div className="text-center">
          <span className="block text-[10px] font-bold text-amber">89%</span>
          <span className="text-[7px] text-foreground-muted/60">Mastery</span>
        </div>
      </div>
    </div>
  );
}

function BreathingOrbScreen() {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-3">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 animate-pulse" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan/30 to-violet/30 blur-sm" />
        <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-cyan/60 to-violet/60" />
      </div>
      <span className="font-display text-[11px] font-bold text-foreground">Breathe In</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1 w-4 rounded-full ${i <= 2 ? 'bg-cyan' : 'bg-white/10'}`}
          />
        ))}
      </div>
      <span className="text-[8px] text-foreground-muted/60">4-7-8 Relaxation</span>
    </div>
  );
}

function ScreenContent({ tabId }: { tabId: string }) {
  switch (tabId) {
    case 'flashcards': return <FlashcardScreen />;
    case 'practice': return <PracticeScreen />;
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
      <span className="text-[10px] font-medium leading-none text-foreground-muted">
        9:41
      </span>
      <div className="flex items-center gap-1">
        {/* Cellular signal */}
        <svg
          width="13"
          height="8"
          viewBox="0 0 13 8"
          className="text-foreground-muted"
          aria-hidden
        >
          <rect x="0" y="5.5" width="2" height="2.5" rx="0.5" fill="currentColor" />
          <rect x="3.5" y="3.5" width="2" height="4.5" rx="0.5" fill="currentColor" />
          <rect x="7" y="1.5" width="2" height="6.5" rx="0.5" fill="currentColor" />
          <rect x="10.5" y="0" width="2" height="8" rx="0.5" fill="currentColor" />
        </svg>
        {/* Battery */}
        <svg
          width="18"
          height="8"
          viewBox="0 0 18 8"
          className="text-foreground-muted"
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
        {/* Glow behind device */}
        <div className="absolute -inset-8 rounded-[60px] bg-violet/10 blur-[60px]" />

        {/* Device body */}
        <div className="relative overflow-hidden rounded-[44px] border-[3px] border-white/10 bg-[#0a0a0f] p-3 shadow-2xl">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black" />

          {/* Status bar */}
          <StatusBar />

          {/* Screen with inner shadow for device depth */}
          <div
            className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] bg-surface"
            style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)' }}
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

                {/* Screen content (padded for tab bar) */}
                <div className="relative flex flex-1 flex-col items-center justify-center gap-3 p-6 pt-12 pb-16">
                  <current.icon
                    size={48}
                    className="text-foreground-secondary"
                    aria-hidden
                  />
                  <span className="font-display text-sm font-bold text-foreground">
                    {current.title}
                  </span>

                  <ScreenContent tabId={current.id} />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Tab bar — real icons with layout-animated indicator pill */}
            <LayoutGroup>
              <div
                ref={tablistRef}
                role="tablist"
                aria-label="App features"
                onKeyDown={handleKeyDown}
                className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-around border-t border-white/5 bg-surface/80 px-1 pb-4 pt-1.5 backdrop-blur-md"
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
                        className={`transition-colors duration-150 ${
                          isActive ? 'text-violet' : 'text-foreground-muted'
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`text-[9px] leading-tight transition-colors duration-150 ${
                          isActive ? 'text-violet' : 'text-foreground-muted'
                        }`}
                      >
                        {tab.tabLabel}
                      </span>
                      {/* Active indicator pill — slides via layout animation */}
                      {isActive && (
                        <motion.div
                          layoutId="mockupTabPill"
                          className="absolute -bottom-1 h-[2px] w-4 rounded-full bg-violet"
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
          </div>
        </div>

        {/* External dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {TABS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 bg-violet'
                  : 'w-1.5 bg-foreground-muted/40 hover:bg-foreground-muted/60'
              }`}
              aria-label={`View screenshot ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
