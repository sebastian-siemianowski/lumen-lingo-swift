'use client';

import { FadeIn } from '@/components/motion';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: 'Late 2025',
    title: 'The Spark',
    description:
      'First working prototype built — a weekend hackathon that refused to stay a weekend. The mission: make language learning feel beautiful.',
  },
  {
    year: 'Early 2026',
    title: 'Building Brick by Brick',
    description:
      'Iteration after iteration. Flashcard engine, spaced repetition algorithm, 9 languages, soundscapes, breathing orbs — each feature hand-polished before moving to the next.',
  },
  {
    year: 'March 2026',
    title: 'Approaching Launch',
    description:
      'Beta testing with early adopters. Premium tiers refined. The website you\'re reading right now, crafted with the same obsessive care as the app itself.',
  },
  {
    year: 'The Road Ahead',
    title: 'What Comes Next',
    description:
      'New practice modes, community features, and the App Store launch. Built by a solo developer with the ambition of a studio and the attention to detail of an artisan.',
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
