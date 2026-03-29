'use client';

import { motion } from 'framer-motion';
import { Heading, Text, Container, Section } from '@/components/ui';
import { FadeIn, StaggerItem, CountUp } from '@/components/motion';
import { SparkleIcon } from '@/components/icons';
import { useTranslations } from 'next-intl';

/* ─── Comparison data (max 5 — impactful and concise) ─── */

const comparisonKeys = [1, 2, 3, 4, 5] as const;

const keyFacts = [
  { target: 9, labelKey: 'fact1', suffix: '' },
  { target: 25, labelKey: 'fact2', suffix: '+' },
  { target: 12, labelKey: 'fact3', suffix: '' },
  { target: 3, labelKey: 'fact4', suffix: '' },
];

export function DifferentiatorSection() {
  const t = useTranslations('Differentiators');
  return (
    <Section
      id="why-lumenlingo"
      className="pt-[120px]"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />
      }
    >
      <Container>
        {/* Section heading — font-display, text-gradient */}
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <Heading as="h2" gradient className="font-display text-3xl md:text-4xl">
            {t('heading')}
          </Heading>
          <Text size="lg" colour="secondary" className="mt-4">
            {t('description')}
          </Text>
        </FadeIn>

        {/* Comparison rows — staggered reveal */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-3xl space-y-3"
        >
          {/* Column headers (desktop) */}
          <div className="mb-2 hidden grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 text-xs font-semibold uppercase tracking-wider sm:grid">
            <span className="text-foreground-muted">{t('comparison.othersHeader')}</span>
            <span className="w-px" />
            <span className="text-violet">{t('comparison.lumenHeader')}</span>
          </div>

          {comparisonKeys.map((n) => (
            <StaggerItem key={n}>
              {/* Comparison row */}
              <div className="group grid grid-cols-1 gap-3 rounded-xl p-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
                {/* Others column — dimmed, faded */}
                <p className="text-sm leading-relaxed text-foreground-muted line-through decoration-foreground-muted/30">
                  {t(`comparison.others${n}` as any)}
                </p>

                {/* Vertical divider (desktop) */}
                <div
                  className="hidden w-px self-stretch bg-gradient-to-b from-transparent via-[var(--glass-border,rgba(255,255,255,0.08))] to-transparent sm:block"
                  aria-hidden
                />

                {/* Horizontal divider (mobile) */}
                <div
                  className="h-px w-full bg-gradient-to-r from-transparent via-[var(--glass-border,rgba(255,255,255,0.08))] to-transparent sm:hidden"
                  aria-hidden
                />

                {/* LumenLingo column — bright with SparkleIcon */}
                <div className="flex items-start gap-2 rounded-lg px-3 py-1.5 transition-colors duration-150 group-hover:bg-violet/5 sm:items-center">
                  <SparkleIcon
                    size={14}
                    className="mt-0.5 shrink-0 text-violet sm:mt-0"
                    aria-hidden
                  />
                  <p className="text-sm leading-relaxed text-foreground">
                    {t(`comparison.lumen${n}` as any)}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </motion.div>

        {/* Key facts bar */}
        <FadeIn delay={0.3} className="mt-16 mb-8 md:mb-16">
          <div className="glass-card mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-8 rounded-2xl p-8 sm:justify-between sm:gap-4">
            {keyFacts.map((fact) => (
              <div key={fact.labelKey} className="flex flex-col items-center gap-1 text-center">
                <CountUp
                  target={fact.target}
                  suffix={fact.suffix}
                  className="font-display text-3xl font-bold text-foreground sm:text-4xl"
                />
                <span className="text-sm text-foreground-muted">{t(fact.labelKey as any)}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
