'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from 'framer-motion';
import { Container, Heading, Text, Section } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useTranslations } from 'next-intl';
import type { ComponentType } from 'react';
import type { IconProps } from '@/components/icons';
import {
  FlashcardIcon,
  SpacedRepetitionIcon,
  SoundscapeIcon,
  BreathingOrbIcon,
  ProgressIcon,
  MembershipIcon,
} from '@/components/icons';

interface Screenshot {
  id: string;
  title: string;
  caption: string;
  gradient: string;
  icon: ComponentType<IconProps>;
}

const screenshots: Screenshot[] = [
  {
    id: 'flashcard-view',
    title: 'Flashcards',
    caption: 'Glass-morphic cards with smooth swipe gestures',
    gradient: 'from-violet/25 via-violet/10 to-cyan/5',
    icon: FlashcardIcon,
  },
  {
    id: 'grammar-challenge',
    title: 'Grammar Challenge',
    caption: 'Multiple-choice questions that adapt to your level',
    gradient: 'from-cyan/25 via-cyan/10 to-violet/5',
    icon: SpacedRepetitionIcon,
  },
  {
    id: 'soundscapes',
    title: 'Soundscapes',
    caption: '12 ambient environments that enhance focus',
    gradient: 'from-violet/20 via-amber/10 to-violet/5',
    icon: SoundscapeIcon,
  },
  {
    id: 'breathing-orbs',
    title: 'Breathing Orbs',
    caption: '6 city-inspired visual themes for mindful learning',
    gradient: 'from-amber/20 via-amber/10 to-violet/5',
    icon: BreathingOrbIcon,
  },
  {
    id: 'progress',
    title: 'Journey',
    caption: 'Track streaks, XP, and mastery levels',
    gradient: 'from-cyan/20 via-violet/10 to-cyan/5',
    icon: ProgressIcon,
  },
  {
    id: 'membership',
    title: 'Membership',
    caption: 'Free, Pro, Elite & Royal tiers for every learner',
    gradient: 'from-amber/25 via-violet/10 to-amber/5',
    icon: MembershipIcon,
  },
];

const CARD_WIDTH = 280;
const CARD_GAP = 24;
const SLIDE_WIDTH = CARD_WIDTH + CARD_GAP;
const SNAP_THRESHOLD = 50;

/* ─── Snap spring ─── */
const SNAP_SPRING = { type: 'spring' as const, stiffness: 250, damping: 25 };

/* ─── Gallery-specific screen content (accurate to real iOS app) ─── */

function GalleryFlashcardScreen() {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2">
      <span className="text-[8px] tracking-wide text-foreground-muted/70 uppercase">
        Spanish → English
      </span>
      <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] p-2.5 text-center backdrop-blur-sm">
        <div className="pointer-events-none absolute -top-4 -right-4 h-10 w-10 rounded-full bg-violet/15 blur-lg" />
        <span className="font-display relative text-sm font-bold text-foreground">Mariposa</span>
        <div className="my-1.5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-xs text-cyan">Butterfly</span>
      </div>
      <div className="flex w-full items-center justify-between px-1">
        <span className="text-[8px] text-foreground-muted/60">7 of 20</span>
        <span className="text-[7px] text-foreground-muted/40">Swipe to flip</span>
      </div>
    </div>
  );
}

function GalleryGrammarScreen() {
  return (
    <div className="mt-2 flex w-full flex-col gap-1.5">
      <div className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-2 text-center backdrop-blur-sm">
        <span className="text-[9px] font-medium text-foreground">What does 夢 mean?</span>
      </div>
      {[
        { label: 'A. Dream', correct: true },
        { label: 'B. Sleep', correct: false },
        { label: 'C. Cloud', correct: false },
      ].map((opt) => (
        <div
          key={opt.label}
          className={`rounded-md border px-2 py-1 text-[9px] ${
            opt.correct
              ? 'border-cyan/40 bg-cyan/10 text-cyan shadow-[0_0_8px_rgba(6,182,212,0.1)]'
              : 'border-white/[0.06] bg-white/[0.02] text-foreground-muted'
          }`}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
}

function GallerySoundscapeScreen() {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2">
      <div className="relative flex w-full items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] p-2 backdrop-blur-sm">
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet/20">
          <svg width="10" height="10" viewBox="0 0 24 24" className="text-violet">
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-display text-[9px] font-bold text-foreground">Rainy Window</span>
          <span className="text-[7px] text-foreground-muted/60">Cozy</span>
        </div>
      </div>
      {/* Volume */}
      <div className="flex w-full items-center gap-1 px-0.5">
        <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[55%] rounded-full bg-violet/60" />
        </div>
      </div>
      <span className="text-[7px] text-foreground-muted/40">12 ambient soundscapes</span>
    </div>
  );
}

function GalleryBreathingScreen() {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2">
      <div className="relative flex h-16 w-full items-center justify-center">
        {/* Mini orb cluster */}
        <div className="absolute h-10 w-10 rounded-full bg-gradient-to-br from-red-500/25 to-amber-500/15 blur-md" />
        <div className="absolute h-8 w-8 translate-x-2 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-400/10 blur-md" />
        <div className="absolute h-9 w-9 -translate-x-2 translate-y-1 rounded-full bg-gradient-to-br from-red-600/20 to-pink-500/15 blur-md" />
      </div>
      <span className="font-display text-[10px] font-bold text-foreground">Tokyo Sunset</span>
      <div className="flex gap-1">
        {['bg-red-500', 'bg-amber-500', 'bg-pink-500', 'bg-orange-400'].map((color) => (
          <div key={color} className={`h-2 w-2 rounded-full ${color} shadow-sm`} />
        ))}
      </div>
      <span className="text-[7px] text-foreground-muted/60">6 city-inspired schemes</span>
    </div>
  );
}

function GalleryProgressScreen() {
  const barHeights = [16, 24, 20, 32, 18, 28, 12];
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
    <div className="mt-2 flex w-full flex-col gap-2">
      {/* Mini level ring */}
      <div className="flex items-center gap-2">
        <div className="relative h-8 w-8 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
            <circle cx="18" cy="18" r="15" fill="none" stroke="url(#galleryProgressGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="94.25" strokeDashoffset={94.25 * 0.28} />
            <defs>
              <linearGradient id="galleryProgressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(139,92,246)" />
                <stop offset="100%" stopColor="rgb(6,182,212)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8px] font-bold text-foreground">12</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] font-medium text-foreground">Level 12</span>
          <span className="text-[6px] text-foreground-muted/60">152 / 350 XP</span>
        </div>
        <span className="ml-auto text-[8px] text-amber">\uD83D\uDD25 7</span>
      </div>
      {/* Chart with pill bars */}
      <div className="flex items-end justify-between gap-1 h-10">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
          const isTallest = barHeights[i] === Math.max(...barHeights);
          return (
            <div key={day + i} className="flex flex-1 flex-col items-center gap-0.5">
              <div
                className={`w-full max-w-[14px] rounded-full bg-gradient-to-t ${barColors[i]} ${isTallest ? 'shadow-[0_0_8px_rgba(6,182,212,0.3)]' : ''}`}
                style={{ height: `${barHeights[i]}px` }}
              />
              <span className="text-[6px] text-foreground-muted/50">{day}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between rounded-lg border border-white/[0.08] bg-white/[0.04] px-2 py-1 backdrop-blur-sm">
        <div className="text-center">
          <span className="block text-[9px] font-bold text-violet">152</span>
          <span className="text-[6px] text-foreground-muted/50">XP</span>
        </div>
        <div className="h-auto w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="text-center">
          <span className="block text-[9px] font-bold text-cyan">31</span>
          <span className="text-[6px] text-foreground-muted/50">Cards</span>
        </div>
        <div className="h-auto w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="text-center">
          <span className="block text-[9px] font-bold text-amber">92%</span>
          <span className="text-[6px] text-foreground-muted/50">Acc</span>
        </div>
      </div>
    </div>
  );
}

function GalleryMembershipScreen() {
  return (
    <div className="mt-2 flex w-full flex-col gap-1.5">
      <div className="rounded-lg border border-amber/30 bg-gradient-to-br from-amber/10 to-violet/5 p-2 text-center">
        <span className="text-[9px] font-bold text-amber">👑 Royal</span>
        <span className="mt-0.5 block text-[7px] text-foreground-muted">7 languages · All features</span>
      </div>
      <div className="rounded-lg border border-violet/30 bg-violet/5 p-2 text-center">
        <span className="text-[9px] font-medium text-violet">✦ Elite</span>
        <span className="mt-0.5 block text-[7px] text-foreground-muted">3 languages · 8 soundscapes</span>
      </div>
      <div className="rounded-lg border border-cyan/30 bg-cyan/5 p-2 text-center">
        <span className="text-[9px] font-medium text-cyan">Pro</span>
        <span className="mt-0.5 block text-[7px] text-foreground-muted">1 language · Unlimited practice</span>
      </div>
      <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-1.5 text-center">
        <span className="text-[8px] font-medium text-foreground-muted">Free</span>
      </div>
    </div>
  );
}

function GalleryScreenContent({ screenshotId }: { screenshotId: string }) {
  switch (screenshotId) {
    case 'flashcard-view': return <GalleryFlashcardScreen />;
    case 'grammar-challenge': return <GalleryGrammarScreen />;
    case 'soundscapes': return <GallerySoundscapeScreen />;
    case 'breathing-orbs': return <GalleryBreathingScreen />;
    case 'progress': return <GalleryProgressScreen />;
    case 'membership': return <GalleryMembershipScreen />;
    default: return null;
  }
}

/* ─── Device frame with useTransform interpolation ─── */

function DeviceFrame({
  screenshot,
  index,
  scrollX,
  isActive,
}: {
  screenshot: Screenshot;
  index: number;
  scrollX: MotionValue<number>;
  isActive: boolean;
}) {
  const cardCenter = -index * SLIDE_WIDTH;

  const scale = useTransform(scrollX, (v) => {
    const progress = Math.min(Math.abs(v - cardCenter) / SLIDE_WIDTH, 1);
    return 1 - progress * 0.08; // 1 → 0.92
  });

  const opacity = useTransform(scrollX, (v) => {
    const progress = Math.min(Math.abs(v - cardCenter) / SLIDE_WIDTH, 1);
    return 1 - progress * 0.5; // 1 → 0.5
  });

  return (
    <motion.div
      className="flex-shrink-0 cursor-grab select-none active:cursor-grabbing"
      style={{ width: CARD_WIDTH, scale, opacity }}
    >
      {/* Glow ring for active item */}
      <div
        className={`relative rounded-[44px] transition-shadow duration-500 ${
          isActive ? 'shadow-[0_0_60px_rgba(139,92,246,0.25),0_0_20px_rgba(6,182,212,0.1)]' : ''
        }`}
      >
        {/* Device body — titanium-style frame with edge shimmer */}
        <div className="overflow-hidden rounded-[44px] border-[3px] border-white/[0.14] bg-[#08080d] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_1px_rgba(255,255,255,0.12),0_0_30px_rgba(139,92,246,0.06)]">
          {/* Bezel highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[50%] rounded-t-[44px] bg-gradient-to-b from-white/[0.06] to-transparent" />
          {/* Side edge highlights for 3D depth */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[1px] bg-gradient-to-b from-white/[0.05] via-white/[0.015] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[1px] bg-gradient-to-b from-white/[0.05] via-white/[0.015] to-transparent" />

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />

          {/* Screen */}
          <div
            className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] bg-surface"
            style={{ boxShadow: 'inset 0 0 24px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.04)' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient}`} />

            {/* Subtle mesh texture */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.012]" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 pt-14">
              <div className="relative">
                {/* Soft icon halo */}
                <div className="pointer-events-none absolute -inset-3 rounded-full bg-violet/10 blur-xl" />
                <screenshot.icon size={48} className="relative text-foreground-secondary drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]" aria-hidden />
              </div>
              <span className="font-display text-sm font-bold text-foreground drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                {screenshot.title}
              </span>

              <GalleryScreenContent screenshotId={screenshot.id} />
            </div>

            {/* Glass reflection overlay */}
            <div
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.015) 100%)',
              }}
            />

            {/* Home indicator */}
            <div className="pointer-events-none absolute inset-x-0 bottom-1.5 z-20 flex justify-center">
              <div className="h-[3px] w-[80px] rounded-full bg-white/15" />
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p
        className={`mt-4 text-center text-sm transition-colors duration-300 ${
          isActive ? 'text-foreground-secondary' : 'text-foreground-muted'
        }`}
      >
        {screenshot.caption}
      </p>
    </motion.div>
  );
}

export function ScreenshotGallery() {
  const t = useTranslations('ScreenshotGallery');
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const prefersReduced = useReducedMotion();

  const totalItems = screenshots.length;

  const snapTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalItems - 1));
      setActiveIndex(clamped);
      const target = -clamped * SLIDE_WIDTH;
      if (prefersReduced) {
        x.set(target);
      } else {
        animate(x, target, SNAP_SPRING);
      }
    },
    [totalItems, x, prefersReduced],
  );

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      const offset = info.offset.x;
      const velocity = info.velocity.x;

      let cards = 0;
      if (Math.abs(velocity) > 800) {
        // Very fast swipe: advance by two cards
        cards = offset > 0 ? -2 : 2;
      } else if (Math.abs(offset) > SNAP_THRESHOLD || Math.abs(velocity) > 300) {
        cards = offset > 0 ? -1 : 1;
      }

      snapTo(activeIndex + cards);
    },
    [activeIndex, snapTo],
  );

  // Keyboard navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') snapTo(activeIndex - 1);
      if (e.key === 'ArrowRight') snapTo(activeIndex + 1);
    }

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, snapTo]);

  return (
    <Section
      id="gallery"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04)_0%,transparent_70%)]" />
      }
    >
      <Container>
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <Heading as="h2" gradient>
            {t('heading')}
          </Heading>
          <Text size="lg" colour="secondary" className="mt-4">
            {t('description')}
          </Text>
        </FadeIn>
      </Container>

      {/* Gallery track — full width, overflow hidden */}
      <div
        ref={containerRef}
        className="relative overflow-hidden focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2"
        tabIndex={0}
        role="region"
        aria-label="App screenshots"
        aria-roledescription="carousel"
      >
        <motion.div
          className="flex cursor-grab items-start active:cursor-grabbing"
          style={{
            x,
            paddingLeft: `max(calc(50vw - ${CARD_WIDTH / 2}px), 24px)`,
            paddingRight: `max(calc(50vw - ${CARD_WIDTH / 2}px), 24px)`,
            gap: CARD_GAP,
          }}
          drag="x"
          dragConstraints={{
            left: -(totalItems - 1) * SLIDE_WIDTH,
            right: 0,
          }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {screenshots.map((screenshot, i) => (
            <div
              key={screenshot.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${screenshots.length}: ${screenshot.title}`}
            >
              <DeviceFrame
                screenshot={screenshot}
                index={i}
                scrollX={x}
                isActive={i === activeIndex}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dot indicators with glow on active */}
      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Screenshot navigation">
        {screenshots.map((_, i) => (
          <motion.button
            key={i}
            role="tab"
            layout
            onClick={() => snapTo(i)}
            className={`h-2 rounded-full ${
              i === activeIndex
                ? 'w-6 bg-violet shadow-[0_0_8px_rgba(139,92,246,0.4)]'
                : 'w-2 bg-foreground-muted/30'
            }`}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            aria-label={`Go to screenshot ${i + 1}: ${screenshots[i]?.title}`}
            aria-selected={i === activeIndex}
          />
        ))}
      </div>

      {/* Live region for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Screenshot {activeIndex + 1} of {screenshots.length}: {screenshots[activeIndex]?.title}
      </div>
    </Section>
  );
}
