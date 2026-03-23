'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Heading, Text, GlassCard } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { NewsletterForm } from '@/components/newsletter';
import { cn } from '@/lib/utils';

// ─── Language pair data ────────────────────────────────────────────
interface LanguagePair {
  source: string;
  sourceFlag: string;
  target: string;
  targetFlag: string;
  count: string;
  tier: 'Free' | 'Pro' | 'Elite';
  sample: { word: string; translation: string };
}

const LANGUAGE_PAIRS: LanguagePair[] = [
  { source: 'English', sourceFlag: '🇬🇧', target: 'Spanish', targetFlag: '🇪🇸', count: '2,500+', tier: 'Free', sample: { word: 'Hola', translation: 'Hello' } },
  { source: 'English', sourceFlag: '🇬🇧', target: 'French', targetFlag: '🇫🇷', count: '2,200+', tier: 'Free', sample: { word: 'Bonjour', translation: 'Hello' } },
  { source: 'English', sourceFlag: '🇬🇧', target: 'German', targetFlag: '🇩🇪', count: '2,100+', tier: 'Free', sample: { word: 'Danke', translation: 'Thank you' } },
  { source: 'English', sourceFlag: '🇬🇧', target: 'Japanese', targetFlag: '🇯🇵', count: '1,800+', tier: 'Pro', sample: { word: 'ありがとう', translation: 'Thank you' } },
  { source: 'English', sourceFlag: '🇬🇧', target: 'Chinese', targetFlag: '🇨🇳', count: '1,900+', tier: 'Pro', sample: { word: '你好', translation: 'Hello' } },
  { source: 'English', sourceFlag: '🇬🇧', target: 'Arabic', targetFlag: '🇸🇦', count: '1,600+', tier: 'Pro', sample: { word: 'شكرًا', translation: 'Thank you' } },
  { source: 'English', sourceFlag: '🇬🇧', target: 'Italian', targetFlag: '🇮🇹', count: '2,000+', tier: 'Elite', sample: { word: 'Grazie', translation: 'Thank you' } },
  { source: 'English', sourceFlag: '🇬🇧', target: 'Polish', targetFlag: '🇵🇱', count: '1,700+', tier: 'Elite', sample: { word: 'Dziękuję', translation: 'Thank you' } },
  { source: 'Spanish', sourceFlag: '🇪🇸', target: 'English', targetFlag: '🇬🇧', count: '2,500+', tier: 'Free', sample: { word: 'Hello', translation: 'Hola' } },
  { source: 'French', sourceFlag: '🇫🇷', target: 'English', targetFlag: '🇬🇧', count: '2,200+', tier: 'Pro', sample: { word: 'Goodbye', translation: 'Au revoir' } },
  { source: 'German', sourceFlag: '🇩🇪', target: 'English', targetFlag: '🇬🇧', count: '2,100+', tier: 'Pro', sample: { word: 'Please', translation: 'Bitte' } },
  { source: 'Spanish', sourceFlag: '🇪🇸', target: 'French', targetFlag: '🇫🇷', count: '1,400+', tier: 'Elite', sample: { word: 'Merci', translation: 'Gracias' } },
];

const TIER_STYLES = {
  Free: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-400/20',
  },
  Pro: {
    bg: 'bg-violet/10',
    text: 'text-violet',
    border: 'border-violet/20',
  },
  Elite: {
    bg: 'bg-amber/10',
    text: 'text-amber',
    border: 'border-amber/20',
  },
};

// ─── Language pair card ────────────────────────────────────────────
function LanguagePairCard({ pair, index }: { pair: LanguagePair; index: number }) {
  const [hovered, setHovered] = useState(false);
  const tier = TIER_STYLES[pair.tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <GlassCard
        className="relative cursor-default overflow-hidden p-5"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Flags + arrow */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-2xl" role="img" aria-label={pair.source}>
            {pair.sourceFlag}
          </span>
          <svg className="h-4 w-4 text-foreground-muted/40 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          <span className="text-2xl" role="img" aria-label={pair.target}>
            {pair.targetFlag}
          </span>
        </div>

        {/* Pair name */}
        <h3 className="text-sm font-semibold text-foreground">
          {pair.source} → {pair.target}
        </h3>

        {/* Stats row */}
        <div className="mt-2 flex items-center gap-3">
          <span className="text-xs text-foreground-muted">
            {pair.count} flashcards
          </span>
          <span
            className={cn(
              'rounded-[--radius-pill] border px-2 py-0.5 text-[10px] font-semibold',
              tier.bg,
              tier.text,
              tier.border,
            )}
          >
            {pair.tier}
          </span>
        </div>

        {/* Hover preview */}
        <motion.div
          className="mt-3 overflow-hidden rounded-lg border border-glass-border/50 bg-white/[0.02] px-3 py-2"
          initial={false}
          animate={{
            height: hovered ? 'auto' : 0,
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? 12 : 0,
          }}
          transition={{ duration: 0.25 }}
          aria-hidden={!hovered}
        >
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-foreground">{pair.sample.word}</span>
            <span className="text-foreground-muted">{pair.sample.translation}</span>
          </div>
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Coming Soon card ──────────────────────────────────────────────
function ComingSoonCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <GlassCard tint="violet" hover={false} className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-2 text-3xl">🌍</div>
        <h3 className="text-sm font-semibold text-foreground">More languages coming soon</h3>
        <p className="mt-1 text-xs text-foreground-muted">
          Subscribe to be the first to know when new language pairs launch.
        </p>
        <div className="mt-4 w-full">
          <NewsletterForm source="language_grid" compact />
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ─── Main grid ─────────────────────────────────────────────────────
export function LanguagePairGrid() {
  return (
    <section id="language-pairs" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <FadeIn className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-[--radius-pill] bg-cyan/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan uppercase">
            Language Pairs
          </span>
          <Heading as="h2" size="lg" className="mb-3">
            9 languages, 25+ combinations
          </Heading>
          <Text variant="lead" colour="secondary" className="mx-auto max-w-lg">
            Learn in any direction. Hover any card to see a sample flashcard.
          </Text>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {LANGUAGE_PAIRS.map((pair, i) => (
            <LanguagePairCard key={`${pair.source}-${pair.target}`} pair={pair} index={i} />
          ))}
          <ComingSoonCard index={LANGUAGE_PAIRS.length} />
        </div>
      </Container>
    </section>
  );
}
