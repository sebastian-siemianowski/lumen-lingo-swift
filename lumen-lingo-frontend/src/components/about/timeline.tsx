'use client';

import { FadeIn } from '@/components/motion';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: '2024',
    title: 'The Spark',
    description:
      'LumenShore was founded with a bold idea: language learning could be as beautiful as it is effective. The first prototype was born in a weekend hackathon.',
  },
  {
    year: 'Early 2025',
    title: 'First Beta',
    description:
      'Our closed beta launched with English–Spanish flashcards, spaced repetition, and the very first nebula background. Early testers called it "addictive."',
  },
  {
    year: 'Mid 2025',
    title: 'App Store Launch',
    description:
      'LumenLingo hit the App Store with 9 languages, 25+ language pairs, ambient soundscapes, and the breathing orb that became our signature feature.',
  },
  {
    year: '2026',
    title: 'Growing & Evolving',
    description:
      'New practice modes, premium tiers, offline support, and a thriving community of learners who believe that beauty and education go hand in hand.',
  },
];

export function Timeline() {
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
          return (
            <FadeIn
              key={m.year}
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
                      {m.year}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-cabinet)] text-lg font-semibold text-white/90">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/50">{m.description}</p>
                  </div>
                  <div className="sm:hidden" />
                </>
              ) : (
                <div className="hidden sm:block" />
              )}

              {/* Content (always visible on mobile, alternates on desktop) */}
              <div className={`${isLeft ? 'sm:hidden' : ''} col-start-2 sm:col-start-auto`}>
                <span className="inline-block rounded-full border border-glass-border bg-white/[0.04] px-3 py-1 font-[family-name:var(--font-cabinet)] text-xs font-medium text-violet">
                  {m.year}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-cabinet)] text-lg font-semibold text-white/90">
                  {m.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{m.description}</p>
              </div>

              {!isLeft && <div className="hidden sm:block" />}
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
