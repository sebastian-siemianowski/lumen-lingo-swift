'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GlassCard, Heading, Text, Container, Section } from '@/components/ui';
import { StaggerItem, FadeIn } from '@/components/motion';
import { fadeUp } from '@/lib/motion';
import { useTranslations } from 'next-intl';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tint: 'violet' | 'cyan' | 'amber';
  anchor: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="4" y="8" width="40" height="32" rx="6" className="stroke-violet" strokeWidth="2" />
        <rect x="10" y="14" width="28" height="20" rx="3" className="fill-violet/10 stroke-violet/40" strokeWidth="1.5" />
        <path d="M20 24l4-3v6l-4-3z" className="fill-violet" />
        <circle cx="32" cy="19" r="2" className="fill-cyan/60" />
        <path d="M14 30h20" className="stroke-violet/30" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Immersive Flashcards',
    description:
      'Beautiful glass-morphic cards with smooth gestures and instant feedback. Swipe, flip, and master vocabulary in a stunning visual environment.',
    tint: 'violet',
    anchor: '#flashcards',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="18" className="stroke-cyan" strokeWidth="2" />
        <path d="M24 12c6.627 0 12 5.373 12 12" className="stroke-cyan" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" className="fill-cyan/20 stroke-cyan" strokeWidth="1.5" />
        <path d="M24 20v-2M28 24h2M24 28v2M20 24h-2" className="stroke-cyan/40" strokeWidth="1" strokeLinecap="round" />
        <path d="M15 15l2 2M33 15l-2 2" className="stroke-cyan/30" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: 'Smart Practice',
    description:
      'Spaced repetition recommendations that adapt to your learning pace. Three distinct modes—match, recall, and compose—keep sessions fresh.',
    tint: 'cyan',
    anchor: '#practice',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path d="M8 34c4-8 10-18 16-18s12 10 16 18" className="stroke-violet" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 30c3-6 7-12 12-12s9 6 12 12" className="stroke-violet/40" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2" className="fill-amber/60" />
        <circle cx="32" cy="14" r="1.5" className="fill-cyan/50" />
        <circle cx="24" cy="10" r="1" className="fill-violet/60" />
        <path d="M20 38h8" className="stroke-violet/20" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: 'Rich Soundscapes',
    description:
      'Ambient audio environments—from cosmic nebulae to forest clearings—that enhance focus and retention during every study session.',
    tint: 'violet',
    anchor: '#soundscapes',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="14" className="stroke-amber/60" strokeWidth="1" />
        <circle cx="24" cy="24" r="10" className="fill-amber/5 stroke-amber" strokeWidth="2">
          <animate attributeName="r" values="10;11;10" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="24" cy="24" r="5" className="fill-amber/10 stroke-amber/40" strokeWidth="1">
          <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="24" cy="24" r="2" className="fill-amber/30" />
      </svg>
    ),
    title: 'Breathing Orbs',
    description:
      'Calming animated backgrounds that gently pulse and shift— reducing learning anxiety and creating a meditative study atmosphere.',
    tint: 'amber',
    anchor: '#breathing-orbs',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="16" cy="16" r="8" className="stroke-cyan" strokeWidth="2" />
        <circle cx="32" cy="16" r="8" className="stroke-violet" strokeWidth="2" />
        <circle cx="24" cy="30" r="8" className="stroke-amber" strokeWidth="2" />
        <text x="16" y="18" textAnchor="middle" className="fill-cyan text-[7px] font-bold">ES</text>
        <text x="32" y="18" textAnchor="middle" className="fill-violet text-[7px] font-bold">FR</text>
        <text x="24" y="32" textAnchor="middle" className="fill-amber text-[7px] font-bold">JP</text>
      </svg>
    ),
    title: '25+ Language Pairs',
    description:
      '9 languages including Spanish, French, Japanese, German, Arabic, Chinese, and more—with 25+ pair combinations to learn from.',
    tint: 'cyan',
    anchor: '#language-pairs',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="8" y="12" width="32" height="24" rx="4" className="stroke-violet" strokeWidth="2" />
        <path d="M14 30V22" className="stroke-violet/40" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 30V18" className="stroke-cyan" strokeWidth="3" strokeLinecap="round" />
        <path d="M26 30V20" className="stroke-violet" strokeWidth="3" strokeLinecap="round" />
        <path d="M32 30V16" className="stroke-amber" strokeWidth="3" strokeLinecap="round" />
        <path d="M38 30V14" className="stroke-violet" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Progress Tracking',
    description:
      'Comprehensive statistics, streaks, and mastery indicators. Watch your vocabulary grow with beautiful visualisations and milestones.',
    tint: 'violet',
    anchor: '#progress',
  },
];

/* ─── Accent glow mapping for heading text-shadow ─── */
const glowByTint = {
  violet: 'group-hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.2)]',
  cyan: 'group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.2)]',
  amber: 'group-hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]',
} as const;

function FeatureCard({ icon, title, description, tint, anchor }: Feature) {
  return (
    <Link href={`/features${anchor}`} className="block outline-none">
      <GlassCard
        tint={tint}
        className="group flex h-full flex-col gap-4"
        whileTap={{ y: -2, scale: 1.005 }}
      >
        {/* Icon container — muted by default, accent-bright on hover */}
        <div
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-2xl opacity-60 transition-opacity duration-200 group-hover:opacity-100',
            tint === 'violet' && 'bg-violet/10',
            tint === 'cyan' && 'bg-cyan/10',
            tint === 'amber' && 'bg-amber/10',
          )}
        >
          {icon}
        </div>

        <Heading
          as="h3"
          className={cn(
            '!text-xl !sm:text-xl transition-all duration-200',
            glowByTint[tint],
          )}
        >
          {title}
        </Heading>

        <Text size="sm" colour="secondary" className="leading-relaxed">
          {description}
        </Text>
      </GlassCard>
    </Link>
  );
}

export function FeatureShowcase() {
  const t = useTranslations('FeatureShowcase');
  return (
    <Section
      id="features"
      background={
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06)_0%,transparent_70%)]" />
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

        {/* Feature grid — staggered entry at -80px viewport margin */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <FeatureCard {...feature} />
            </StaggerItem>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
