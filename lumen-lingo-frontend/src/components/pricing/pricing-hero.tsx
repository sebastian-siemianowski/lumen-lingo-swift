'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container, Heading, Text } from '@/components/ui';
import { StaggerChildren, StaggerItem } from '@/components/motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { DiamondIcon, SparkleIcon } from '@/components/icons';

export function PricingHero() {
  const t = useTranslations('Pricing');
  const prefersReduced = useReducedMotion();
  const anim = (cls: string) => (prefersReduced ? '' : cls);

  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Cosmic gradient — opacities boosted for shorter section to match homepage intensity */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-background" />

        {/* Violet orb */}
        <div
          className={`absolute -top-[10%] -right-[10%] h-[min(700px,80vw)] w-[min(700px,80vw)] rounded-full bg-violet/[0.30] will-change-transform ${anim('animate-cosmic-drift-1')}`}
          style={{ filter: 'blur(100px)' }}
        />

        {/* Cyan orb */}
        <div
          className={`absolute -bottom-[10%] -left-[8%] h-[min(560px,65vw)] w-[min(560px,65vw)] rounded-full bg-cyan/[0.22] will-change-transform ${anim('animate-cosmic-drift-2')}`}
          style={{ filter: 'blur(90px)' }}
        />

        {/* Deep blue orb */}
        <div
          className={`absolute top-[20%] right-[10%] h-[min(480px,50vw)] w-[min(480px,50vw)] rounded-full bg-[#1e3a5f]/[0.30] will-change-transform ${anim('animate-cosmic-drift-3')}`}
          style={{ filter: 'blur(80px)' }}
        />

        {/* Warm violet pulse */}
        <div
          className={`absolute top-1/2 left-1/2 h-[min(360px,40vw)] w-[min(360px,40vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.15] will-change-transform ${anim('animate-cosmic-pulse')}`}
          style={{ filter: 'blur(70px)' }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />

        {/* Vignette — 95% to preserve gradient visibility */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_95%)]" />
      </div>

      <Container className="relative">
        <StaggerChildren className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <StaggerItem>
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <DiamondIcon size={14} className="text-amber" aria-hidden />
              <span className="text-sm font-medium text-white/70">
                {t('badge')}
              </span>
            </motion.div>
          </StaggerItem>

          {/* Headline */}
          <StaggerItem>
            <Heading as="h1" gradient className="mb-6 text-4xl sm:text-5xl lg:text-6xl">
              {t('heading')}
            </Heading>
          </StaggerItem>

          {/* Subline */}
          <StaggerItem>
            <Text size="lg" colour="secondary" className="mx-auto max-w-2xl">
              {t('description')}
            </Text>
          </StaggerItem>

          {/* Trial note */}
          <StaggerItem>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber/20 bg-amber/5 px-4 py-2">
              <SparkleIcon size={14} className="text-violet" aria-hidden />
              <Text size="sm" colour="secondary">
                {t('trialBadge')}
              </Text>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </Container>

      {/* Soft bottom blend into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </section>
  );
}
