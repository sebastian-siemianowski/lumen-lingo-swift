'use client';

import { Container, Heading, Text, Section } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { AppStoreBadge } from './app-store-badge';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

function FloatingOrbs() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Small floating orbs */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/[0.03] animate-drift-slow"
          style={{
            width: 8 + i * 6,
            height: 8 + i * 6,
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * -4}s`,
            animationDuration: `${18 + i * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

function QRPlaceholder() {
  return (
    <div className="hidden flex-col items-center gap-3 lg:flex">
      {/* QR code placeholder — a structured pattern */}
      <div className="rounded-xl border border-white/10 bg-white p-3">
        <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none">
          {/* QR positioning squares */}
          <rect x="4" y="4" width="32" height="32" rx="2" fill="#1a1a24" />
          <rect x="8" y="8" width="24" height="24" rx="1" fill="white" />
          <rect x="12" y="12" width="16" height="16" rx="1" fill="#1a1a24" />

          <rect x="84" y="4" width="32" height="32" rx="2" fill="#1a1a24" />
          <rect x="88" y="8" width="24" height="24" rx="1" fill="white" />
          <rect x="92" y="12" width="16" height="16" rx="1" fill="#1a1a24" />

          <rect x="4" y="84" width="32" height="32" rx="2" fill="#1a1a24" />
          <rect x="8" y="88" width="24" height="24" rx="1" fill="white" />
          <rect x="12" y="92" width="16" height="16" rx="1" fill="#1a1a24" />

          {/* QR data pattern */}
          {[44, 52, 60, 68, 76].map((x) =>
            [44, 52, 60, 68, 76].map((y) => (
              <rect
                key={`${x}-${y}`}
                x={x}
                y={y}
                width="6"
                height="6"
                fill={(x + y) % 16 === 0 ? '#1a1a24' : 'transparent'}
              />
            )),
          )}
          {[44, 52, 60].map((x) =>
            [4, 12, 20, 28].map((y) => (
              <rect
                key={`h-${x}-${y}`}
                x={x}
                y={y}
                width="6"
                height="6"
                fill={(x * y) % 3 === 0 ? '#1a1a24' : 'transparent'}
              />
            )),
          )}
          {[4, 12, 20, 28].map((x) =>
            [44, 52, 60].map((y) => (
              <rect
                key={`v-${x}-${y}`}
                x={x}
                y={y}
                width="6"
                height="6"
                fill={(x + y) % 5 === 0 ? '#1a1a24' : 'transparent'}
              />
            )),
          )}
        </svg>
      </div>
      <Text size="sm" colour="muted">
        Scan to download
      </Text>
    </div>
  );
}

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e1145] via-[#0f1a3d] to-[#1a0e3e]" />

      {/* Glass overlay for depth */}
      <div className="absolute inset-0 bg-glass" />

      {/* Floating orbs */}
      <FloatingOrbs />

      {/* Top gradient border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />

      {/* Content */}
      <div className="relative py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          {/* Text + CTA */}
          <FadeIn className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            <Heading
              as="h2"
              className="text-shadow-glow"
            >
              Start Your Language Journey{' '}
              <span className="text-gradient">Today</span>
            </Heading>

            <Text size="lg" colour="secondary" className="mt-4">
              Download LumenLingo free on the App Store. Premium tiers available
              for serious learners.
            </Text>

            <div className="mt-8">
              <AppStoreBadge size="lg" location="cta_banner" />
            </div>
          </FadeIn>

          {/* QR code — desktop only */}
          <FadeIn direction="right" delay={0.2}>
            <QRPlaceholder />
          </FadeIn>
        </Container>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />
    </section>
  );
}
