'use client';

import { GlassCard } from '@/components/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { useTranslations } from 'next-intl';

interface ValueCardData {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
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
    titleKey: 'values.beauty',
    descKey: 'values.beautyDesc',
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
    titleKey: 'values.science',
    descKey: 'values.scienceDesc',
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
    titleKey: 'values.privacy',
    descKey: 'values.privacyDesc',
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
    titleKey: 'values.accessible',
    descKey: 'values.accessibleDesc',
    tint: 'violet',
  },
];

export function ValueCards() {
  const t = useTranslations('About');
  return (
    <StaggerChildren className="grid gap-6 sm:grid-cols-2">
      {values.map((v) => (
        <StaggerItem key={v.titleKey}>
          <GlassCard tint={v.tint} className="h-full">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-white/70">
              {v.icon}
            </div>
            <h3 className="mb-2 font-[family-name:var(--font-cabinet)] text-lg font-semibold text-white/90">
              {t(v.titleKey as any)}
            </h3>
            <p className="text-sm leading-relaxed text-white/50">{t(v.descKey as any)}</p>
          </GlassCard>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
