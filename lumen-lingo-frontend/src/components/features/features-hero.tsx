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
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {([DeviceIcon, DesignIcon, BrainIcon] as ComponentType<IconProps>[]).map((Icon, i) => {
                const style = PILL_STYLES[i]!;
                return (
                  <div
                    key={i}
                    className={`group relative flex items-center gap-2.5 rounded-2xl border border-glass-border/60 bg-gradient-to-r ${style.accent} px-5 py-3 shadow-lg ${style.glow} backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-glass-border`}
                  >
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] ${style.iconColor}`}>
                      <Icon size={18} aria-hidden />
                    </div>
                    <span className="text-sm font-semibold text-foreground/90">
                      {badges[i]}
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
