'use client';

import { Container, Section } from '@/components/ui';
import { PricingCard } from './pricing-card';
import type { Tier } from './pricing-card';

interface TierData {
  tier: Tier;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: TierData[] = [
  {
    tier: 'free',
    name: 'Free',
    price: '£0',
    description:
      'Perfect for getting started. Explore core features and see why learners love LumenLingo.',
    features: [
      '3 language pairs (EN↔ES, FR, DE)',
      'All 3 practice modes at Beginner',
      '30 minutes daily practice',
      '50-card flashcard decks',
      'Lagoon Nebula background',
      'Basic progress tracking',
    ],
    cta: 'Get Started Free',
  },
  {
    tier: 'pro',
    name: 'Pro',
    price: '£9.99',
    description:
      'For committed learners who want more languages, unlimited practice, and richer experiences.',
    features: [
      'Everything in Free, plus:',
      '7 language pairs (+JP, ZH, AR, PL)',
      'Beginner + Intermediate difficulty',
      'Unlimited daily practice',
      '75-card flashcard decks',
      '6 Breathing Orb colour schemes',
      '1 ambient soundscape',
      'Offline mode',
      '1.25× XP multiplier',
    ],
    cta: 'Upgrade to Pro',
  },
  {
    tier: 'elite',
    name: 'Elite',
    price: '£19.99',
    description:
      'Unlock the full LumenLingo experience with all languages, advanced modes, and stunning visuals.',
    features: [
      'Everything in Pro, plus:',
      'All 25+ language pairs',
      'All 3 difficulty levels',
      '100-card flashcard decks',
      '8 ambient soundscapes',
      '4 Quantum Flow backgrounds',
      '4 Nebula Drift presets',
      'Advanced analytics & data export',
      '1.5× XP multiplier',
    ],
    cta: 'Go Elite',
    popular: true,
  },
  {
    tier: 'royal',
    name: 'Royal',
    price: '£99.99',
    description:
      'The ultimate tier for language masters. Every feature, no limits, premium-only extras.',
    features: [
      'Everything in Elite, plus:',
      'Unlimited flashcard deck size',
      'All 12 ambient soundscapes',
      'All 6 Quantum Flow scenes',
      'All 6 Nebula Drift presets',
      'Personalised learning tips',
      'Shareable result cards',
      'Deep analytics + monthly reports',
      '2× XP multiplier',
    ],
    cta: 'Go Royal',
  },
];

export function PricingGrid() {
  return (
    <Section className="pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <PricingCard key={t.tier} {...t} delay={i * 0.1} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
