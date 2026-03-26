'use client';

import { motion } from 'framer-motion';
import { Heading, Text, Container, Section } from '@/components/ui';
import { FadeIn, StaggerItem, CountUp } from '@/components/motion';
import { SparkleIcon } from '@/components/icons';
import { useTranslations } from 'next-intl';

/* ─── Comparison data (max 5 — impactful and concise) ─── */

const comparisons = [
  {
    others: 'Rote repetition with plain text cards',
    lumenlingo: 'Glass-morphic flashcards with immersive visual feedback',
  },
  {
    others: 'Silent study in a sterile interface',
    lumenlingo: '12 ambient soundscapes — from Paris cafés to deep space',
  },
  {
    others: 'One-size-fits-all quizzes',
    lumenlingo: 'Three distinct modes that adapt to your level',
  },
  {
    others: 'Utilitarian UI with gamification gimmicks',
    lumenlingo: 'Handcrafted glass-morphism with cosmic animations',
  },
  {
    others: 'Streak pressure and guilt-driven notifications',
    lumenlingo: 'Breathing orbs and visual mindfulness for calm learning',
  },
];

const keyFacts = [
  { target: 9, label: 'Languages', suffix: '' },
  { target: 25, label: 'Language Pairs', suffix: '+' },
  { target: 12, label: 'Soundscapes', suffix: '' },
  { target: 3, label: 'Practice Modes', suffix: '' },
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
            <span className="text-foreground-muted">Others</span>
            <span className="w-px" />
            <span className="text-violet">LumenLingo</span>
          </div>

          {comparisons.map((c, i) => (
            <StaggerItem key={i}>
              {/* Comparison row */}
              <div className="group grid grid-cols-1 gap-3 rounded-xl p-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
                {/* Others column — dimmed, faded */}
                <p className="text-sm leading-relaxed text-foreground-muted line-through decoration-foreground-muted/30">
                  {c.others}
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
                    {c.lumenlingo}
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
              <div key={fact.label} className="flex flex-col items-center gap-1 text-center">
                <CountUp
                  target={fact.target}
                  suffix={fact.suffix}
                  className="font-display text-3xl font-bold text-foreground sm:text-4xl"
                />
                <span className="text-sm text-foreground-muted">{fact.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
