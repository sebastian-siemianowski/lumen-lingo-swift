'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container, Section, Heading, Text } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/motion';
import { StarField } from '@/components/background';

export function PricingHero() {
  const t = useTranslations('Pricing');

  return (
    <Section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      {/* Star field background */}
      <StarField />

      {/* Colour accent gradients layered on top of stars */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet/8 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[500px] rounded-full bg-cyan/6 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[400px] rounded-full bg-amber/4 blur-[100px]" />
      </div>

      <Container>
        <StaggerChildren className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <StaggerItem>
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm">💎</span>
              <span className="text-sm font-medium text-white/70">
                {t('badge')}
              </span>
            </motion.div>
          </StaggerItem>

          {/* Headline */}
          <StaggerItem>
            <Heading as="h1" gradient className="mb-6 text-4xl sm:text-5xl lg:text-6xl">
              {t('heading')}
            </Heading>
          </StaggerItem>

          {/* Subline */}
          <StaggerItem>
            <Text size="lg" colour="secondary" className="mx-auto max-w-2xl">
              {t('description')}
            </Text>
          </StaggerItem>

          {/* Trial note */}
          <StaggerItem>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber/20 bg-amber/5 px-4 py-2">
              <span className="text-sm">✨</span>
              <Text size="sm" colour="secondary">
                {t('trialBadge')}
              </Text>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </Container>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </Section>
  );
}
