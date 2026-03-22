'use client';

import { Container, Heading, Text, Button } from '@/components/ui';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { CosmicGradient } from '@/components/background';
import { IPhoneMockup } from './iphone-mockup';
import { AppStoreBadge } from './app-store-badge';

const trustStats = [
  '9 Languages',
  '25+ Language Pairs',
  '12 Ambient Soundscapes',
  'Free to Start',
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen min-h-[100dvh] items-center overflow-hidden pt-20 pb-16 lg:pt-24">
      {/* Animated cosmic gradient background */}
      <CosmicGradient />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — Copy & CTAs */}
          <StaggerChildren staggerInterval={0.12} className="max-w-xl">
            {/* Badge */}
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/5 px-4 py-1.5 text-sm text-violet">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
                </span>
                Now available on iOS
              </span>
            </StaggerItem>

            {/* Headline */}
            <StaggerItem className="mt-6">
              <Heading as="h1" className="!leading-[1.05]">
                Master Languages{' '}
                <span className="text-gradient">Through Immersive</span>{' '}
                Experiences
              </Heading>
            </StaggerItem>

            {/* Subheadline */}
            <StaggerItem className="mt-6">
              <Text size="lg" colour="secondary" className="max-w-md">
                A visual journey through language learning. Beautiful flashcards,
                ambient soundscapes, and breathing exercises — designed to make
                every session feel like a meditation.
              </Text>
            </StaggerItem>

            {/* CTA group */}
            <StaggerItem className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreBadge location="homepage_hero" />
              <Button variant="ghost" size="lg" className="gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </Button>
            </StaggerItem>

            {/* Trust bar */}
            <StaggerItem className="mt-10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground-muted">
                {trustStats.map((stat, i) => (
                  <span key={stat} className="flex items-center gap-2">
                    {i > 0 && (
                      <span className="hidden text-foreground-muted/30 sm:inline" aria-hidden="true">·</span>
                    )}
                    {stat}
                  </span>
                ))}
              </div>
            </StaggerItem>
          </StaggerChildren>

          {/* Right column — iPhone mockup */}
          <FadeIn direction="right" delay={0.4} className="flex justify-center lg:justify-end">
            <IPhoneMockup />
          </FadeIn>
        </div>
      </Container>

      {/* Bottom gradient fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
