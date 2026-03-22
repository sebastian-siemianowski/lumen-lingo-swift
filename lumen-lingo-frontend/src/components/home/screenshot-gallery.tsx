'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, type PanInfo } from 'framer-motion';
import { Container, Heading, Text, Section } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useTranslations } from 'next-intl';

interface Screenshot {
  id: string;
  title: string;
  caption: string;
  gradient: string;
  emoji: string;
}

const screenshots: Screenshot[] = [
  {
    id: 'flashcard-view',
    title: 'Flashcards',
    caption: 'Glass-morphic cards with smooth swipe gestures',
    gradient: 'from-violet/25 via-violet/10 to-cyan/5',
    emoji: '🃏',
  },
  {
    id: 'practice-mode',
    title: 'Practice',
    caption: 'Three distinct modes that adapt to your pace',
    gradient: 'from-cyan/25 via-cyan/10 to-violet/5',
    emoji: '🧠',
  },
  {
    id: 'soundscapes',
    title: 'Soundscapes',
    caption: 'Ambient environments that enhance focus',
    gradient: 'from-violet/20 via-amber/10 to-violet/5',
    emoji: '🎧',
  },
  {
    id: 'breathing-orbs',
    title: 'Breathing Orbs',
    caption: 'Calming backgrounds for mindful learning',
    gradient: 'from-amber/20 via-amber/10 to-violet/5',
    emoji: '🔮',
  },
  {
    id: 'progress',
    title: 'Progress',
    caption: 'Track streaks, XP, and mastery levels',
    gradient: 'from-cyan/20 via-violet/10 to-cyan/5',
    emoji: '📊',
  },
  {
    id: 'membership',
    title: 'Membership',
    caption: 'Premium tiers for serious learners',
    gradient: 'from-amber/25 via-violet/10 to-amber/5',
    emoji: '👑',
  },
];

const CARD_WIDTH = 280;
const CARD_GAP = 24;
const SNAP_THRESHOLD = 50;

function DeviceFrame({
  screenshot,
  isActive,
}: {
  screenshot: Screenshot;
  isActive: boolean;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="flex-shrink-0 cursor-grab select-none active:cursor-grabbing"
      style={{ width: CARD_WIDTH }}
      animate={
        prefersReduced
          ? { opacity: isActive ? 1 : 0.5 }
          : {
              scale: isActive ? 1.08 : 0.92,
              opacity: isActive ? 1 : 0.5,
            }
      }
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
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
              <span className="text-5xl">{screenshot.emoji}</span>
              <span className="font-display text-sm font-bold text-foreground">
                {screenshot.title}
              </span>

              {/* Simulated content skeleton */}
              <div className="mt-4 flex w-full flex-col gap-2">
                <div className="h-6 w-full rounded-md bg-white/5" />
                <div className="h-6 w-4/5 rounded-md bg-white/3" />
                <div className="h-20 w-full rounded-lg bg-white/4" />
                <div className="flex gap-2">
                  <div className="h-8 flex-1 rounded-md bg-white/5" />
                  <div className="h-8 flex-1 rounded-md bg-white/3" />
                </div>
              </div>
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
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const prefersReduced = useReducedMotion();
  const isDragging = useRef(false);

  const totalItems = screenshots.length;
  const slideWidth = CARD_WIDTH + CARD_GAP;

  const snapTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalItems - 1));
      setActiveIndex(clamped);
      x.set(-clamped * slideWidth);
    },
    [totalItems, slideWidth, x],
  );

  const handleDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      isDragging.current = false;
      const offset = info.offset.x;
      const velocity = info.velocity.x;

      if (Math.abs(offset) > SNAP_THRESHOLD || Math.abs(velocity) > 300) {
        const direction = offset > 0 ? -1 : 1;
        snapTo(activeIndex + direction);
      } else {
        snapTo(activeIndex);
      }
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
        className="relative overflow-hidden"
        tabIndex={0}
        role="region"
        aria-label="App screenshot gallery"
        aria-roledescription="carousel"
      >
        <motion.div
          className="flex cursor-grab items-start active:cursor-grabbing"
          style={{
            x: prefersReduced ? undefined : springX,
            paddingLeft: `max(calc(50vw - ${CARD_WIDTH / 2}px), 24px)`,
            paddingRight: `max(calc(50vw - ${CARD_WIDTH / 2}px), 24px)`,
            gap: CARD_GAP,
          }}
          drag={prefersReduced ? false : 'x'}
          dragConstraints={{
            left: -(totalItems - 1) * slideWidth,
            right: 0,
          }}
          dragElastic={0.1}
          onDragStart={() => {
            isDragging.current = true;
          }}
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
                isActive={i === activeIndex}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Screenshot navigation">
        {screenshots.map((_, i) => (
          <button
            key={i}
            role="tab"
            onClick={() => snapTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-8 bg-violet'
                : 'w-2 bg-foreground-muted/40 hover:bg-foreground-muted/60'
            }`}
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
