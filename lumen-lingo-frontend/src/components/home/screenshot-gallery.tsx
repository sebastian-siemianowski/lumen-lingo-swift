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
    id: 'practice-mode',
    title: 'Practice',
    caption: 'Three distinct modes that adapt to your pace',
    gradient: 'from-cyan/25 via-cyan/10 to-violet/5',
    icon: SpacedRepetitionIcon,
  },
  {
    id: 'soundscapes',
    title: 'Soundscapes',
    caption: 'Ambient environments that enhance focus',
    gradient: 'from-violet/20 via-amber/10 to-violet/5',
    icon: SoundscapeIcon,
  },
  {
    id: 'breathing-orbs',
    title: 'Breathing Orbs',
    caption: 'Calming backgrounds for mindful learning',
    gradient: 'from-amber/20 via-amber/10 to-violet/5',
    icon: BreathingOrbIcon,
  },
  {
    id: 'progress',
    title: 'Progress',
    caption: 'Track streaks, XP, and mastery levels',
    gradient: 'from-cyan/20 via-violet/10 to-cyan/5',
    icon: ProgressIcon,
  },
  {
    id: 'membership',
    title: 'Membership',
    caption: 'Premium tiers for serious learners',
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

/* ─── Gallery-specific mock screens ─── */

function GalleryFlashcardScreen() {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2">
      <span className="text-[8px] tracking-wide text-foreground-muted/70 uppercase">
        Spanish → English
      </span>
      <div className="glass-card w-full rounded-xl border border-glass-border p-2.5 text-center">
        <span className="font-display text-sm font-bold text-foreground">Mariposa</span>
        <div className="my-1.5 h-px w-full bg-glass-border" />
        <span className="text-xs text-cyan">Butterfly</span>
      </div>
      <div className="flex w-full items-center justify-between px-1">
        <span className="text-[8px] text-foreground-muted/60">7 of 20</span>
        <span className="text-[7px] text-foreground-muted/40">Tap to flip</span>
      </div>
    </div>
  );
}

function GalleryPracticeScreen() {
  return (
    <div className="mt-2 flex w-full flex-col gap-1.5">
      <div className="rounded-lg border border-glass-border bg-white/5 p-2 text-center">
        <span className="text-[9px] font-medium text-foreground">Translate: 夢</span>
      </div>
      {['Dream', 'Sleep', 'Cloud'].map((opt, i) => (
        <div
          key={opt}
          className={`rounded-md border px-2 py-1 text-[9px] ${
            i === 0
              ? 'border-cyan/40 bg-cyan/10 text-cyan'
              : 'border-glass-border bg-white/3 text-foreground-muted'
          }`}
        >
          {opt}
        </div>
      ))}
    </div>
  );
}

function GallerySoundscapeScreen() {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-violet/20 bg-violet/5">
        <div className="absolute inset-0 rounded-full bg-violet/10 animate-pulse" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="relative text-violet">
          <path d="M9 18V6l12 6-12 6z" fill="currentColor" />
        </svg>
      </div>
      <span className="font-display text-[10px] font-bold text-foreground">Ocean Waves</span>
      <div className="flex items-end gap-[2px] h-5">
        {[4, 7, 5, 10, 3, 8, 6, 9, 4, 7, 5, 8].map((h, i) => (
          <div key={i} className="w-[2px] rounded-full bg-violet/40" style={{ height: `${h * 1.5}px` }} />
        ))}
      </div>
    </div>
  );
}

function GalleryBreathingScreen() {
  return (
    <div className="mt-2 flex w-full flex-col items-center gap-2">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 animate-pulse" />
        <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-cyan/60 to-violet/60" />
      </div>
      <span className="font-display text-[10px] font-bold text-foreground">Breathe Out</span>
      <span className="text-[7px] text-foreground-muted/60">Box Breathing · 4s cycle</span>
    </div>
  );
}

function GalleryProgressScreen() {
  return (
    <div className="mt-2 flex w-full flex-col gap-2">
      <div className="flex items-end justify-between gap-0.5 h-10">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
          <div key={day + i} className="flex flex-col items-center gap-0.5">
            <div
              className="w-3 rounded-sm bg-gradient-to-t from-violet/60 to-violet"
              style={{ height: `${[16, 24, 20, 32, 18, 28, 12][i]}px` }}
            />
            <span className="text-[6px] text-foreground-muted/60">{day}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between rounded-md border border-glass-border bg-white/3 px-2 py-1">
        <div className="text-center">
          <span className="block text-[9px] font-bold text-violet">152</span>
          <span className="text-[6px] text-foreground-muted/60">XP</span>
        </div>
        <div className="text-center">
          <span className="block text-[9px] font-bold text-cyan">31</span>
          <span className="text-[6px] text-foreground-muted/60">Cards</span>
        </div>
        <div className="text-center">
          <span className="block text-[9px] font-bold text-amber">92%</span>
          <span className="text-[6px] text-foreground-muted/60">Acc</span>
        </div>
      </div>
    </div>
  );
}

function GalleryMembershipScreen() {
  return (
    <div className="mt-2 flex w-full flex-col gap-2">
      <div className="rounded-lg border border-amber/30 bg-gradient-to-br from-amber/10 to-violet/5 p-2 text-center">
        <span className="text-[9px] font-bold text-amber">✦ Premium</span>
        <span className="mt-0.5 block text-[7px] text-foreground-muted">All languages · Unlimited decks</span>
      </div>
      <div className="rounded-lg border border-glass-border bg-white/3 p-2 text-center">
        <span className="text-[9px] font-medium text-foreground">Free</span>
        <span className="mt-0.5 block text-[7px] text-foreground-muted">1 language · 3 decks</span>
      </div>
      <div className="rounded-lg border border-violet/30 bg-violet/5 p-2 text-center">
        <span className="text-[9px] font-medium text-violet">Lifetime</span>
        <span className="mt-0.5 block text-[7px] text-foreground-muted">One-time purchase</span>
      </div>
    </div>
  );
}

function GalleryScreenContent({ screenshotId }: { screenshotId: string }) {
  switch (screenshotId) {
    case 'flashcard-view': return <GalleryFlashcardScreen />;
    case 'practice-mode': return <GalleryPracticeScreen />;
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
          isActive ? 'shadow-[0_0_60px_rgba(139,92,246,0.3)]' : ''
        }`}
      >
        {/* Device body */}
        <div className="overflow-hidden rounded-[44px] border-[3px] border-white/10 bg-[#0a0a0f] p-3">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black" />

          {/* Screen */}
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] bg-surface">
            <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient}`} />
            <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 pt-14">
              <screenshot.icon size={48} className="text-foreground-secondary" aria-hidden />
              <span className="font-display text-sm font-bold text-foreground">
                {screenshot.title}
              </span>

              <GalleryScreenContent screenshotId={screenshot.id} />
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

      {/* Dot indicators with layout animation */}
      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Screenshot navigation">
        {screenshots.map((_, i) => (
          <motion.button
            key={i}
            role="tab"
            layout
            onClick={() => snapTo(i)}
            className={`h-2 rounded-full ${
              i === activeIndex
                ? 'w-6 bg-violet'
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
