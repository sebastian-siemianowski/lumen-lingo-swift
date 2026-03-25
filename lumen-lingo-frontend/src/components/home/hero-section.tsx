'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Container, Heading, Text, Button } from '@/components/ui';
import { CountUp } from '@/components/motion';
import { CosmicGradient } from '@/components/background';
import { IPhoneMockup } from './iphone-mockup';
import { AppStoreBadge } from './app-store-badge';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/* ─────────────────────────────────────────────
 * Hero Entrance Choreography
 *
 * All timings in seconds. Tweak this single object
 * to retune the entire entrance sequence.
 * Total sequence start-to-last-element: ≤ 1 200 ms.
 * ───────────────────────────────────────────── */
const T = {
  badge: 0.1,
  headline: 0.25,
  wordGap: 0.04, // 40 ms stagger per word
  sub: 0.45,
  cta: 0.6,
  trust: 0.75,
  mockup: 0.4,
} as const;

const SPRING = { type: 'spring' as const, stiffness: 200, damping: 20 };
const SPRING_MOCKUP = { type: 'spring' as const, stiffness: 120, damping: 18 };

/* ─── Variants (one per choreo beat) ─── */

const heroBadge: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: T.badge } },
};

const heroWord = (index: number): Variants => ({
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...SPRING, delay: T.headline + index * T.wordGap },
  },
});

const heroSub: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: T.sub } },
};

const heroCta: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { ...SPRING, delay: T.cta } },
};

const heroTrust: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ...SPRING, delay: T.trust } },
};

const heroMockup: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { ...SPRING_MOCKUP, delay: T.mockup },
  },
};

/* ─── Headline word parser (preserves <gradient> tags) ─── */

function parseHeadlineWords(raw: string): { word: string; gradient: boolean }[] {
  const result: { word: string; gradient: boolean }[] = [];
  const parts = raw.split(/(<gradient>|<\/gradient>)/);
  let inGradient = false;
  for (const part of parts) {
    if (part === '<gradient>') {
      inGradient = true;
      continue;
    }
    if (part === '</gradient>') {
      inGradient = false;
      continue;
    }
    for (const w of part.trim().split(/\s+/).filter(Boolean)) {
      result.push({ word: w, gradient: inGradient });
    }
  }
  return result;
}

/* ─── Trust value parser (extracts leading number for CountUp) ─── */

function parseTrustValue(text: string): { num?: number; suffix?: string; rest: string } {
  const match = text.match(/^(\d+)(\+)?\s+(.+)$/);
  return match
    ? { num: parseInt(match[1], 10), suffix: match[2] ?? '', rest: match[3] }
    : { rest: text };
}

/* ─── Component ─── */

export function HeroSection() {
  const t = useTranslations('Hero');
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const headlineWords = parseHeadlineWords(t.raw('headline') as string);

  return (
    <section className="relative flex min-h-screen min-h-[100dvh] items-center overflow-hidden pt-20 pb-16 lg:pt-24">
      {/* Animated cosmic gradient background (T+0 — already running) */}
      <CosmicGradient />

      <Container className="relative">
        <motion.div
          ref={ref}
          initial={prefersReduced ? 'visible' : 'hidden'}
          animate={prefersReduced || isInView ? 'visible' : 'hidden'}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left column — Copy & CTAs */}
          <div className="max-w-xl">
            {/* Badge — T+100 ms */}
            <motion.div variants={heroBadge}>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/5 px-4 py-1.5 text-sm text-violet">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
                </span>
                {t('badge')}
              </span>
            </motion.div>

            {/* Headline — word-by-word from T+250 ms, 40 ms stagger */}
            <Heading as="h1" className="mt-6 !leading-[1.05]">
              {headlineWords.map(({ word, gradient }, i) => (
                <motion.span
                  key={i}
                  variants={heroWord(i)}
                  className="inline-block"
                  style={{
                    marginRight: i < headlineWords.length - 1 ? '0.25em' : undefined,
                  }}
                >
                  {gradient ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </Heading>

            {/* Subheadline — T+450 ms */}
            <motion.div variants={heroSub} className="mt-6">
              <Text size="lg" colour="secondary" className="max-w-md">
                {t('subheadline')}
              </Text>
            </motion.div>

            {/* CTA group — T+600 ms (scaleIn) */}
            <motion.div variants={heroCta} className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreBadge location="homepage_hero" />
              <Button variant="ghost" size="lg" className="gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('watchDemo')}
              </Button>
            </motion.div>

            {/* Trust bar — T+750 ms with CountUp */}
            <motion.div variants={heroTrust} className="mt-10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground-muted">
                {(['languages', 'pairs', 'soundscapes', 'freeToStart'] as const).map(
                  (key, i) => {
                    const text = t(`trust.${key}`);
                    const parsed = parseTrustValue(text);
                    return (
                      <span key={key} className="flex items-center gap-2">
                        {i > 0 && (
                          <span
                            className="hidden text-foreground-muted/30 sm:inline"
                            aria-hidden="true"
                          >
                            ·
                          </span>
                        )}
                        {parsed.num !== undefined ? (
                          <>
                            <CountUp
                              target={parsed.num}
                              suffix={parsed.suffix}
                              duration={0.8}
                              delay={T.trust}
                            />{' '}
                            {parsed.rest}
                          </>
                        ) : (
                          text
                        )}
                      </span>
                    );
                  },
                )}
              </div>
            </motion.div>
          </div>

          {/* Right column — iPhone mockup (T+400 ms, slower spring) */}
          <motion.div variants={heroMockup} className="flex justify-center lg:justify-end">
            <IPhoneMockup />
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
