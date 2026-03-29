'use client';

import { FadeIn } from '@/components/motion';
import { useTranslations } from 'next-intl';

interface Milestone {
  dateKey: string;
  titleKey: string;
  descKey: string;
}

const milestones: Milestone[] = [
  { dateKey: 'timeline.sparkDate', titleKey: 'timeline.spark', descKey: 'timeline.sparkDesc' },
  { dateKey: 'timeline.betaDate', titleKey: 'timeline.beta', descKey: 'timeline.betaDesc' },
  { dateKey: 'timeline.launchDate', titleKey: 'timeline.launch', descKey: 'timeline.launchDesc' },
  { dateKey: 'timeline.growingDate', titleKey: 'timeline.growing', descKey: 'timeline.growingDesc' },
];

export function Timeline() {
  const t = useTranslations('About');
  return (
    <div className="relative">
      {/* Connecting line */}
      <div
        className="absolute start-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-violet/40 via-cyan/20 to-transparent sm:start-1/2 sm:-translate-x-px"
        aria-hidden
      />

      <div className="space-y-12 sm:space-y-16">
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          const year = t(m.dateKey as any);
          const title = t(m.titleKey as any);
          const description = t(m.descKey as any);
          return (
            <FadeIn
              key={m.titleKey}
              delay={i * 0.12}
              className="relative grid grid-cols-[40px_1fr] gap-4 sm:grid-cols-2 sm:gap-12"
            >
              {/* Dot */}
              <div className="absolute start-[14px] top-1.5 z-10 sm:start-1/2 sm:-translate-x-1/2">
                <div className="h-[11px] w-[11px] rounded-full border-2 border-violet/60 bg-background" />
              </div>

              {/* Mobile: always right of line */}
              {/* Desktop: alternate left/right */}
              {isLeft ? (
                <>
                  <div className="hidden text-end sm:block">
                    <span className="inline-block rounded-full border border-glass-border bg-white/[0.04] px-3 py-1 font-[family-name:var(--font-cabinet)] text-xs font-medium text-violet">
                      {year}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-cabinet)] text-lg font-semibold text-white/90">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/50">{description}</p>
                  </div>
                  <div className="sm:hidden" />
                </>
              ) : (
                <div className="hidden sm:block" />
              )}

              {/* Content (always visible on mobile, alternates on desktop) */}
              <div className={`${isLeft ? 'sm:hidden' : ''} col-start-2 sm:col-start-auto`}>
                <span className="inline-block rounded-full border border-glass-border bg-white/[0.04] px-3 py-1 font-[family-name:var(--font-cabinet)] text-xs font-medium text-violet">
                  {year}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-cabinet)] text-lg font-semibold text-white/90">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{description}</p>
              </div>

              {!isLeft && <div className="hidden sm:block" />}
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
