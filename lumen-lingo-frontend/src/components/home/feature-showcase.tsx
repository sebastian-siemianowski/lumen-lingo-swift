'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GlassCard, Heading, Text, Container, Section } from '@/components/ui';
import { StaggerItem, FadeIn } from '@/components/motion';
import { fadeUp } from '@/lib/motion';
import { useTranslations } from 'next-intl';

interface Feature {
  preview: React.ReactNode;
  title: string;
  description: string;
  tint: 'violet' | 'cyan' | 'amber';
  anchor: string;
}

/* ─── Mini visual previews that show how features look in the iOS app ─── */

function FlashcardPreview() {
  return (
    <div className="relative mx-auto h-32 w-full max-w-[180px]">
      {/* Back card - offset for depth */}
      <div className="absolute left-1/2 top-2 h-24 w-[140px] -translate-x-[44%] rounded-xl border border-violet/10 bg-gradient-to-br from-violet/5 to-fuchsia-500/5" />
      {/* Front card - glass effect */}
      <div className="absolute left-1/2 top-5 h-24 w-[140px] -translate-x-1/2 overflow-hidden rounded-xl border border-violet/20 bg-gradient-to-br from-violet/10 via-fuchsia-500/5 to-amber/5 shadow-lg shadow-violet/5">
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
        {/* Text lines */}
        <div className="flex h-full flex-col items-center justify-center gap-2 p-3">
          <div className="h-1.5 w-16 rounded-full bg-violet/30" />
          <div className="h-1.5 w-10 rounded-full bg-violet/15" />
          <div className="mt-2 h-1 w-8 rounded-full bg-fuchsia-400/20" />
        </div>
      </div>
      {/* Flip arrow */}
      <svg viewBox="0 0 24 12" className="absolute bottom-0 right-2 h-3 w-6 text-cyan/40">
        <path d="M2 6c4-4 8-4 12 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M12 6l2-2M12 6l2 2" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function PracticePreview() {
  return (
    <div className="relative mx-auto h-32 w-full max-w-[180px]">
      {/* Adaptive ring */}
      <svg viewBox="0 0 80 80" className="absolute left-1/2 top-1 h-20 w-20 -translate-x-1/2">
        <circle cx="40" cy="40" r="32" className="stroke-cyan/10" strokeWidth="4" fill="none" />
        <circle cx="40" cy="40" r="32" className="stroke-cyan" strokeWidth="4" fill="none" strokeDasharray="160 201" strokeLinecap="round" transform="rotate(-90 40 40)">
          <animate attributeName="stroke-dasharray" values="80 201;140 201;80 201" dur="4s" repeatCount="indefinite" />
        </circle>
        <text x="40" y="44" textAnchor="middle" className="fill-cyan text-[11px] font-bold">79%</text>
      </svg>
      {/* Three mode pills */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        <div className="rounded-full border border-cyan/20 bg-cyan/5 px-2 py-0.5 text-[8px] text-cyan/70">Match</div>
        <div className="rounded-full border border-violet/20 bg-violet/5 px-2 py-0.5 text-[8px] text-violet/70">Recall</div>
        <div className="rounded-full border border-amber/20 bg-amber/5 px-2 py-0.5 text-[8px] text-amber/70">Build</div>
      </div>
    </div>
  );
}

function SoundscapePreview() {
  return (
    <div className="relative mx-auto h-32 w-full max-w-[180px] overflow-hidden">
      {/* Aurora wave layers */}
      <svg viewBox="0 0 180 100" className="absolute inset-0 h-full w-full">
        <path d="M0 70 Q30 40 60 55 Q90 70 120 50 Q150 30 180 45 L180 100 L0 100Z" className="fill-violet/8">
          <animate attributeName="d" values="M0 70 Q30 40 60 55 Q90 70 120 50 Q150 30 180 45 L180 100 L0 100Z;M0 60 Q30 50 60 40 Q90 55 120 45 Q150 40 180 55 L180 100 L0 100Z;M0 70 Q30 40 60 55 Q90 70 120 50 Q150 30 180 45 L180 100 L0 100Z" dur="6s" repeatCount="indefinite" />
        </path>
        <path d="M0 80 Q40 55 80 65 Q120 75 160 55 Q170 50 180 55 L180 100 L0 100Z" className="fill-violet/5">
          <animate attributeName="d" values="M0 80 Q40 55 80 65 Q120 75 160 55 Q170 50 180 55 L180 100 L0 100Z;M0 75 Q40 65 80 55 Q120 65 160 60 Q170 55 180 60 L180 100 L0 100Z;M0 80 Q40 55 80 65 Q120 75 160 55 Q170 50 180 55 L180 100 L0 100Z" dur="8s" repeatCount="indefinite" />
        </path>
      </svg>
      {/* Floating particles */}
      <div className="absolute left-[25%] top-[30%] h-1.5 w-1.5 rounded-full bg-amber/40" />
      <div className="absolute left-[65%] top-[20%] h-1 w-1 rounded-full bg-cyan/30" />
      <div className="absolute left-[45%] top-[45%] h-1 w-1 rounded-full bg-violet/30" />
      {/* Audio wave bars */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-end gap-[3px]">
        {[14, 22, 18, 28, 16, 24, 12, 20, 26, 14].map((h, i) => (
          <div key={i} className="w-[3px] rounded-full bg-violet/30" style={{ height: `${h}px` }}>
            <div className="h-full w-full animate-pulse rounded-full bg-violet/20" style={{ animationDelay: `${i * 0.15}s` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function BreathingOrbPreview() {
  return (
    <div className="relative mx-auto h-32 w-full max-w-[180px]">
      {/* Outer ring */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/10">
        <div className="absolute inset-0 rounded-full bg-amber/[0.03]">
          <div className="absolute inset-0 animate-pulse rounded-full bg-amber/[0.02]" />
        </div>
      </div>
      {/* Middle orb */}
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/15 bg-gradient-to-br from-amber/10 to-orange-400/5 shadow-[0_0_40px_-5px_rgba(245,158,11,0.15)]">
        <div className="absolute inset-0 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-amber/5" />
      </div>
      {/* Inner core */}
      <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber/20 to-orange-300/10 shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
    </div>
  );
}

function LanguagePairPreview() {
  return (
    <div className="relative mx-auto h-32 w-full max-w-[180px]">
      {/* Interconnected circles */}
      <svg viewBox="0 0 160 100" className="absolute inset-0 h-full w-full">
        {/* Connection lines */}
        <line x1="40" y1="35" x2="80" y2="65" className="stroke-white/[0.06]" strokeWidth="0.5" />
        <line x1="120" y1="35" x2="80" y2="65" className="stroke-white/[0.06]" strokeWidth="0.5" />
        <line x1="40" y1="35" x2="120" y2="35" className="stroke-white/[0.06]" strokeWidth="0.5" />
        {/* Language nodes */}
        <circle cx="40" cy="35" r="16" className="fill-cyan/5 stroke-cyan/30" strokeWidth="1.5" />
        <text x="40" y="38" textAnchor="middle" className="fill-cyan text-[9px] font-bold">EN</text>
        <circle cx="120" cy="35" r="16" className="fill-violet/5 stroke-violet/30" strokeWidth="1.5" />
        <text x="120" y="38" textAnchor="middle" className="fill-violet text-[9px] font-bold">FR</text>
        <circle cx="80" cy="65" r="16" className="fill-amber/5 stroke-amber/30" strokeWidth="1.5" />
        <text x="80" y="68" textAnchor="middle" className="fill-amber text-[9px] font-bold">JP</text>
        {/* Additional smaller nodes */}
        <circle cx="28" cy="68" r="8" className="fill-violet/3 stroke-violet/15" strokeWidth="1" />
        <text x="28" y="70" textAnchor="middle" className="fill-violet/50 text-[5px] font-medium">ES</text>
        <circle cx="132" cy="68" r="8" className="fill-cyan/3 stroke-cyan/15" strokeWidth="1" />
        <text x="132" y="70" textAnchor="middle" className="fill-cyan/50 text-[5px] font-medium">DE</text>
        <circle cx="80" cy="22" r="8" className="fill-amber/3 stroke-amber/15" strokeWidth="1" />
        <text x="80" y="24" textAnchor="middle" className="fill-amber/50 text-[5px] font-medium">AR</text>
      </svg>
    </div>
  );
}

function ProgressPreview() {
  return (
    <div className="relative mx-auto h-32 w-full max-w-[180px]">
      {/* Mini chart */}
      <div className="absolute left-1/2 top-3 flex -translate-x-1/2 items-end gap-1.5">
        {[
          { h: 18, color: 'bg-violet/40' },
          { h: 26, color: 'bg-cyan/40' },
          { h: 22, color: 'bg-violet/30' },
          { h: 34, color: 'bg-cyan/50' },
          { h: 28, color: 'bg-violet/40' },
          { h: 38, color: 'bg-amber/50' },
          { h: 30, color: 'bg-violet/40' },
        ].map((bar, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className={`w-3 rounded-sm ${bar.color}`} style={{ height: `${bar.h}px` }} />
            <span className="text-[6px] text-foreground-muted/40">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
            </span>
          </div>
        ))}
      </div>
      {/* Stats row */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-3">
        <div className="text-center">
          <div className="text-[10px] font-bold text-violet/70">847</div>
          <div className="text-[6px] text-foreground-muted/40">XP</div>
        </div>
        <div className="text-center">
          <div className="text-[10px] font-bold text-amber/70">12</div>
          <div className="text-[6px] text-foreground-muted/40">Streak</div>
        </div>
        <div className="text-center">
          <div className="text-[10px] font-bold text-cyan/70">94%</div>
          <div className="text-[6px] text-foreground-muted/40">Accuracy</div>
        </div>
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    preview: <FlashcardPreview />,
    title: 'Immersive Flashcards',
    description:
      'Liquid-glass cards with 3D flip animations, shimmer overlays, and dopamine-driven glow feedback. Swipe, flip, and master vocabulary in a stunning visual environment.',
    tint: 'violet',
    anchor: '#flashcards',
  },
  {
    preview: <PracticePreview />,
    title: 'Smart Practice',
    description:
      'Adaptive spaced repetition across three modes — match, recall, and word builder. Accuracy-driven mood gradients and kinetic feedback keep sessions alive.',
    tint: 'cyan',
    anchor: '#practice',
  },
  {
    preview: <SoundscapePreview />,
    title: 'Rich Soundscapes',
    description:
      'Aurora borealis scenes and ambient audio worlds — from cosmic nebulae to forest clearings — designed to sharpen focus and deepen retention.',
    tint: 'violet',
    anchor: '#soundscapes',
  },
  {
    preview: <BreathingOrbPreview />,
    title: 'Breathing Orbs',
    description:
      'City-inspired colour schemes with softly pulsing orbs that drift and glow. Six palettes from Barcelona Nights to Tokyo Sunset create a meditative study atmosphere.',
    tint: 'amber',
    anchor: '#breathing-orbs',
  },
  {
    preview: <LanguagePairPreview />,
    title: '25+ Language Pairs',
    description:
      '9 languages with every pair combination — Spanish, French, Japanese, German, Arabic, Chinese, and more. Unlock new pairs as you progress.',
    tint: 'cyan',
    anchor: '#language-pairs',
  },
  {
    preview: <ProgressPreview />,
    title: 'Progress Tracking',
    description:
      'Weekly activity charts, streak fire, XP milestones, and mastery rings. Watch your vocabulary grow with beautiful gradient visualisations.',
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

function FeatureCard({ preview, title, description, tint, anchor }: Feature) {
  return (
    <Link href={`/features${anchor}`} className="block h-full outline-none">
      <GlassCard
        tint={tint}
        className="group flex h-full flex-col gap-4 overflow-hidden"
        whileTap={{ y: -2, scale: 1.005 }}
      >
        {/* Visual preview area */}
        <div className="relative -mx-1 -mt-1 overflow-hidden rounded-xl">
          {preview}
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
            <StaggerItem key={feature.title} className="h-full">
              <FeatureCard {...feature} />
            </StaggerItem>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
