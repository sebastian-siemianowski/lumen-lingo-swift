'use client';

import { cn } from '@/lib/utils';
import { GlassCard, Heading, Text, Container, Section } from '@/components/ui';
import { StaggerChildren, StaggerItem, FadeIn, CountUp } from '@/components/motion';
import { useTranslations } from 'next-intl';

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
  tint: 'violet' | 'cyan' | 'amber';
}

const differentiators: Differentiator[] = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path d="M8 40l8-16 8 10 8-20 8 12" className="stroke-violet" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="24" r="3" className="fill-violet/20 stroke-violet/60" strokeWidth="1" />
        <circle cx="32" cy="14" r="3" className="fill-cyan/20 stroke-cyan/60" strokeWidth="1" />
        <path d="M6 8v34h36" className="stroke-foreground-muted/20" strokeWidth="1" strokeLinecap="round" />
        <circle cx="24" cy="34" r="2" className="fill-amber/30" />
      </svg>
    ),
    title: 'Breathtaking Design',
    description:
      'Every screen is handcrafted with glass morphism, cosmic backgrounds, and smooth animations — learning has never looked this good.',
    tint: 'violet',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="16" className="stroke-cyan/30" strokeWidth="1" />
        <circle cx="24" cy="24" r="10" className="stroke-cyan" strokeWidth="2" />
        <path d="M24 14c5.523 0 10 4.477 10 10" className="stroke-cyan" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 18l-6-6M30 18l6-6M18 30l-6 6M30 30l6 6" className="stroke-cyan/20" strokeWidth="1" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" className="fill-cyan/20" />
        <circle cx="12" cy="12" r="1.5" className="fill-violet/40" />
        <circle cx="36" cy="36" r="1.5" className="fill-amber/40" />
      </svg>
    ),
    title: 'Immersive Environments',
    description:
      "12 ambient soundscapes from Paris cafés to deep space — create the perfect atmosphere for focused learning.",
    tint: 'cyan',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="6" y="10" width="14" height="14" rx="3" className="fill-violet/10 stroke-violet" strokeWidth="2" />
        <rect x="28" y="10" width="14" height="14" rx="3" className="fill-cyan/10 stroke-cyan" strokeWidth="2" />
        <rect x="17" y="26" width="14" height="14" rx="3" className="fill-amber/10 stroke-amber" strokeWidth="2" />
        <text x="13" y="20" textAnchor="middle" className="fill-violet text-[8px] font-bold">A</text>
        <text x="35" y="20" textAnchor="middle" className="fill-cyan text-[8px] font-bold">B</text>
        <text x="24" y="36" textAnchor="middle" className="fill-amber text-[8px] font-bold">C</text>
      </svg>
    ),
    title: '3 Distinct Practice Modes',
    description:
      'Flashcards, grammar quizzes, and word builder challenges across 25+ language pairs — variety that keeps you engaged.',
    tint: 'amber',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="16" className="stroke-violet/20" strokeWidth="1" />
        <circle cx="24" cy="24" r="11" className="fill-violet/5 stroke-violet" strokeWidth="2">
          <animate attributeName="r" values="11;12.5;11" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="24" cy="24" r="6" className="fill-violet/10 stroke-violet/40" strokeWidth="1">
          <animate attributeName="r" values="6;7;6" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="24" cy="24" r="2.5" className="fill-violet/20" />
        <path d="M10 24c0-2 1-3 2-3s2 1 2 3" className="stroke-cyan/30" strokeWidth="1" strokeLinecap="round" />
        <path d="M34 24c0-2 1-3 2-3s2 1 2 3" className="stroke-amber/30" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: 'Visual Mindfulness',
    description:
      'Breathing orbs, quantum flow scenes, and nebula drift backgrounds — reduce learning anxiety with calming visual experiences.',
    tint: 'violet',
  },
];

const keyFacts = [
  { target: 9, label: 'Languages', suffix: '' },
  { target: 25, label: 'Language Pairs', suffix: '+' },
  { target: 12, label: 'Soundscapes', suffix: '' },
  { target: 3, label: 'Practice Modes', suffix: '' },
];

function DifferentiatorCard({ icon, title, description, tint }: Differentiator) {
  return (
    <GlassCard tint={tint} className="flex flex-col gap-4">
      <div
        className={cn(
          'flex h-14 w-14 items-center justify-center rounded-2xl',
          tint === 'violet' && 'bg-violet/10',
          tint === 'cyan' && 'bg-cyan/10',
          tint === 'amber' && 'bg-amber/10',
        )}
      >
        {icon}
      </div>

      <Heading as="h3" className="!text-xl">
        {title}
      </Heading>

      <Text size="sm" colour="secondary" className="leading-relaxed">
        {description}
      </Text>
    </GlassCard>
  );
}

export function DifferentiatorSection() {
  const t = useTranslations('Differentiators');
  return (
    <Section
      id="why-lumenlingo"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />
      }
    >
      <Container>
        {/* Section header */}
        <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
          <Heading as="h2" gradient>
            {t('heading')}
          </Heading>
          <Text size="lg" colour="secondary" className="mt-4">
            {t('description')}
          </Text>
        </FadeIn>

        {/* Differentiator cards */}
        <StaggerChildren
          staggerInterval={0.1}
          className="grid gap-6 sm:grid-cols-2"
        >
          {differentiators.map((d) => (
            <StaggerItem key={d.title}>
              <DifferentiatorCard {...d} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Key facts bar */}
        <FadeIn delay={0.3} className="mt-16">
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
