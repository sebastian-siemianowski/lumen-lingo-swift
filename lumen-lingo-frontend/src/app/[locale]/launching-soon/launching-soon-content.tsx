'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container, Heading, Text, Section } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { CosmicGradient } from '@/components/background';
import { AppStoreBadge } from '@/components/home/app-store-badge';

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <rect x="12" y="6" width="28" height="20" rx="4" className="stroke-violet/30" strokeWidth="1.5" />
        <rect x="8" y="12" width="28" height="20" rx="4" className="fill-violet/5 stroke-violet" strokeWidth="2" />
        <path d="M15 20h14" className="stroke-violet/60" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 25h8" className="stroke-violet/30" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Immersive Flashcards',
    desc: 'Liquid-glass cards with 3D flip animations, shimmer effects, and dopamine-driven feedback.',
    accent: 'violet' as const,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <circle cx="24" cy="24" r="18" className="stroke-cyan/40" strokeWidth="1.5" />
        <path d="M24 12c6.627 0 12 5.373 12 12" className="stroke-cyan" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" className="fill-cyan/20 stroke-cyan" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Spaced Repetition',
    desc: 'Science-backed learning with adaptive scheduling across three distinct practice modes.',
    accent: 'cyan' as const,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <circle cx="24" cy="24" r="10" className="fill-amber/5 stroke-amber" strokeWidth="2">
          <animate attributeName="r" values="10;11;10" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="24" cy="24" r="5" className="fill-amber/10 stroke-amber/40" strokeWidth="1">
          <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="24" cy="24" r="2" className="fill-amber/30" />
        <circle cx="24" cy="24" r="14" className="stroke-amber/20" strokeWidth="1" />
      </svg>
    ),
    title: 'Living Backgrounds',
    desc: 'Breathing orbs, aurora borealis scenes, and cosmic soundscapes that make study feel magical.',
    accent: 'amber' as const,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <circle cx="16" cy="18" r="7" className="stroke-cyan" strokeWidth="1.5" />
        <circle cx="32" cy="18" r="7" className="stroke-violet" strokeWidth="1.5" />
        <circle cx="24" cy="30" r="7" className="stroke-amber" strokeWidth="1.5" />
        <text x="16" y="20" textAnchor="middle" className="fill-cyan text-[7px] font-bold">ES</text>
        <text x="32" y="20" textAnchor="middle" className="fill-violet text-[7px] font-bold">FR</text>
        <text x="24" y="32" textAnchor="middle" className="fill-amber text-[7px] font-bold">JP</text>
      </svg>
    ),
    title: '25+ Language Pairs',
    desc: '9 languages with every combination — from Spanish to Japanese, Arabic to Chinese.',
    accent: 'cyan' as const,
  },
];

const accentMap = {
  violet: {
    bg: 'bg-violet/10',
    text: 'text-violet',
    border: 'border-violet/20',
    glow: 'shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]',
    gradient: 'from-violet/20 to-transparent',
  },
  cyan: {
    bg: 'bg-cyan/10',
    text: 'text-cyan',
    border: 'border-cyan/20',
    glow: 'shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]',
    gradient: 'from-cyan/20 to-transparent',
  },
  amber: {
    bg: 'bg-amber/10',
    text: 'text-amber',
    border: 'border-amber/20',
    glow: 'shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)]',
    gradient: 'from-amber/20 to-transparent',
  },
} as const;

export function LaunchingSoonContent() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CosmicGradient />

      {/* Hero */}
      <Section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <Container className="max-w-2xl">
          <FadeIn className="text-center">
            {/* Pulsing status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/5 px-4 py-1.5 text-sm text-violet"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
              </span>
              In Development
            </motion.div>

            <Heading as="h1" gradient className="mb-6">
              Launching Soon
            </Heading>

            <Text size="lg" colour="secondary" className="mx-auto max-w-lg leading-relaxed">
              We&apos;re crafting something beautiful. LumenLingo is a mindful
              language learning app built with obsessive attention to detail —
              coming soon to the App Store.
            </Text>

            {/* App Store badge */}
            <div className="mt-10 flex justify-center">
              <AppStoreBadge location="launching_soon" />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Divider line */}
      <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-violet/30 to-transparent" />

      {/* What to expect heading */}
      <Section className="relative pt-12 pb-4 sm:pt-16 sm:pb-6">
        <Container className="max-w-2xl">
          <FadeIn className="text-center">
            <Text size="sm" colour="muted" className="uppercase tracking-[0.2em]">
              What to expect
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* Feature highlights — 2×2 grid with equal boxes */}
      <Section className="relative py-4 sm:py-8">
        <Container className="max-w-2xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((h, i) => {
              const accent = accentMap[h.accent];
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04] ${accent.glow}`}
                >
                  {/* Top accent line */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.gradient}`} />

                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${accent.bg} ${accent.text} transition-transform duration-300 group-hover:scale-110`}>
                    {h.icon}
                  </div>

                  <h3 className="text-sm font-semibold text-foreground sm:text-base">
                    {h.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground-muted sm:text-sm">
                    {h.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Bottom tagline */}
      <Section className="relative py-10 sm:py-16">
        <Container className="max-w-md text-center">
          <FadeIn>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sm italic leading-relaxed text-foreground-muted/60"
            >
              &ldquo;Language learning should feel like meditation, not homework.&rdquo;
            </motion.p>
          </FadeIn>
        </Container>
      </Section>

      {/* Back link */}
      <Section className="relative pb-20">
        <Container className="max-w-2xl text-center">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
