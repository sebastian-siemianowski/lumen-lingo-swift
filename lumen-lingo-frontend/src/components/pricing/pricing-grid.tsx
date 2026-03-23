'use client';

import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/ui';
import { PricingCard } from './pricing-card';
import type { Tier } from './pricing-card';

const tierKeys: Tier[] = ['free', 'pro', 'elite', 'royal'];
const popularTiers = new Set<Tier>(['elite']);

export function PricingGrid() {
  const t = useTranslations('Pricing');

  return (
    <Section className="pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tierKeys.map((tier, i) => (
            <PricingCard
              key={tier}
              tier={tier}
              name={t(`tier.${tier}.name`)}
              price={t(`tier.${tier}.price`)}
              period={t('perMonth')}
              description={t(`tier.${tier}.description`)}
              features={t.raw(`tier.${tier}.features`) as string[]}
              cta={t(`tier.${tier}.cta`)}
              popular={popularTiers.has(tier)}
              delay={i * 0.1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
