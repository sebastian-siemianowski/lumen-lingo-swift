'use client';

import { useTranslations } from 'next-intl';
import { Container, Heading, Text } from '@/components/ui';
import { StaggerChildren, StaggerItem, FadeIn } from '@/components/motion';
import { DeviceIcon, DesignIcon, BrainIcon } from '@/components/icons';
import type { ComponentType } from 'react';
import type { IconProps } from '@/components/icons';

const PILL_STYLES = [
  { accent: 'from-violet/20 to-violet/5', iconColor: 'text-violet', glow: 'shadow-violet/10' },
  { accent: 'from-cyan/20 to-cyan/5', iconColor: 'text-cyan', glow: 'shadow-cyan/10' },
  { accent: 'from-amber/20 to-amber/5', iconColor: 'text-amber', glow: 'shadow-amber/10' },
];

export function FeaturesHero() {
  const t = useTranslations('Features');
  const badges = t.raw('badges') as string[];

  return (
    <section className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(139,92,246,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.06)_0%,transparent_50%)]" />
      </div>

      <Container className="relative">
        <StaggerChildren
          staggerInterval={0.12}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <StaggerItem>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/5 px-4 py-1.5 text-sm font-medium text-violet">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
                <path d="M8 0l2.09 5.527L16 6.18l-4.36 3.89L12.82 16 8 12.527 3.18 16l1.18-5.93L0 6.18l5.91-.653z" />
              </svg>
              {t('badge')}
            </span>
          </StaggerItem>

          <StaggerItem>
            <Heading as="h1" gradient className="mt-2">
              {t('heading')}
            </Heading>
          </StaggerItem>

          <StaggerItem>
            <Text size="xl" colour="secondary" className="mt-6 max-w-2xl">
              {t('description')}
            </Text>
          </StaggerItem>

          {/* Premium pill badges */}
          <StaggerItem>
            <div className="mt-14 flex flex-wrap items-stretch justify-center gap-4 sm:gap-5">
              {([DeviceIcon, DesignIcon, BrainIcon] as ComponentType<IconProps>[]).map((Icon, i) => {
                const style = PILL_STYLES[i]!;
                const descriptions = [
                  'Built with SwiftUI',
                  'Every pixel considered',
                  'Cognitive research',
                ];
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col items-center gap-3 rounded-2xl border border-glass-border/40 bg-white/[0.02] px-6 py-5 backdrop-blur-sm transition-all duration-500 hover:border-glass-border/80 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.12)]"
                  >
                    {/* Icon container with ambient glow */}
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${style.accent.replace('from-', 'bg-').split(' ')[0]}`} />
                      <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-glass-border/40 bg-white/[0.04] ${style.iconColor} transition-all duration-500 group-hover:border-glass-border/80 group-hover:bg-white/[0.06] group-hover:scale-110`}>
                        <Icon size={22} aria-hidden />
                      </div>
                    </div>
                    {/* Label */}
                    <span className="text-sm font-semibold tracking-wide text-foreground/90">
                      {badges[i]}
                    </span>
                    {/* Subtle descriptor */}
                    <span className="text-[11px] leading-tight text-foreground-muted/50 transition-colors duration-300 group-hover:text-foreground-muted/70">
                      {descriptions[i]}
                    </span>
                  </div>
                );
              })}
            </div>
          </StaggerItem>
        </StaggerChildren>
      </Container>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
