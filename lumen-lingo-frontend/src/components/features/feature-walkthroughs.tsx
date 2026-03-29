'use client';

import { Container, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import {
  FlashcardFlowAnimation,
  WordBuilderAnimation,
  SoundscapeAnimation,
} from './animated-walkthroughs';

const WALKTHROUGHS = [
  {
    title: 'Flashcard Flow',
    description:
      'Cards appear with silky animations. Tap to flip, swipe right when you know it. Physics-based feedback makes every interaction feel alive.',
    tint: 'violet' as const,
    Animation: FlashcardFlowAnimation,
  },
  {
    title: 'Word Builder',
    description:
      'Select letters one by one to construct the target word. A satisfying cascade of animations celebrates every correct answer.',
    tint: 'cyan' as const,
    Animation: WordBuilderAnimation,
  },
  {
    title: 'Soundscape Selection',
    description:
      'Browse 12 handcrafted ambient soundscapes. Pick one, and an audio visualiser pulses gently while you study.',
    tint: 'amber' as const,
    Animation: SoundscapeAnimation,
  },
];

export function FeatureWalkthroughs() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-[--radius-pill] bg-violet/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-violet uppercase">
            See it in action
          </span>
          <Heading as="h2" size="lg" className="mb-3">
            How it feels to learn
          </Heading>
          <Text variant="lead" colour="secondary" className="mx-auto max-w-lg">
            Three core experiences, each crafted to keep you engaged and progressing.
          </Text>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {WALKTHROUGHS.map(({ title, description, tint, Animation }, i) => (
            <FadeIn key={title} delay={i * 0.12}>
              <div className="flex flex-col items-center text-center">
                <Animation />
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-foreground-muted">
                  {description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
