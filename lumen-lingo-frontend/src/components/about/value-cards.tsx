'use client';

import { GlassCard } from '@/components/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';

interface ValueCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  tint: 'violet' | 'cyan' | 'amber' | 'default';
}

const values: ValueCardData[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Beauty in Everything',
    description:
      'We craft every pixel with care. From shader-driven backgrounds to hand-tuned animations, LumenLingo is designed to feel as beautiful as it is functional.',
    tint: 'violet',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0-4h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Science-Backed Learning',
    description:
      'Every feature is grounded in cognitive research. Spaced repetition, active recall, and multi-modal engagement aren\'t buzzwords — they\'re our foundation.',
    tint: 'cyan',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Privacy First',
    description:
      'Your learning data lives on your device and syncs through your personal iCloud. We designed LumenLingo so your data stays under your control — today that means no external servers touch your information.',
    tint: 'amber',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Accessible to All',
    description:
      'Premium quality shouldn\'t mean exclusion. Our free tier is generous, our pricing is fair, and our goal is to make beautiful learning available to everyone.',
    tint: 'violet',
  },
];

export function ValueCards() {
  return (
    <StaggerChildren className="grid gap-6 sm:grid-cols-2">
      {values.map((v) => (
        <StaggerItem key={v.title}>
          <GlassCard tint={v.tint} className="h-full">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white/70">
              {v.icon}
            </div>
            <h3 className="mb-2 font-[family-name:var(--font-cabinet)] text-lg font-semibold text-white/90">
              {v.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/50">{v.description}</p>
          </GlassCard>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
