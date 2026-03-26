'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { Container, Heading, Text, Button, Section } from '@/components/ui';
import { AppStoreBadge } from './app-store-badge';
import { useTranslations } from 'next-intl';
import { scaleIn } from '@/lib/motion';
import { useFeatureFlag } from '@/hooks/use-feature-flag';

export function CTABanner() {
  const t = useTranslations('CTA');
  const reviewsLive = useFeatureFlag('REVIEWS_LIVE');
  return (
    <Section>
      <Container>
        {/* Banner enters with scaleIn on viewport entry */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="glass-card relative overflow-hidden rounded-[--radius-card] p-10 md:p-16"
        >
          {/* Warm gradient overlay: violet-muted → cyan-muted at 5% */}
          <div
            className="absolute inset-0 rounded-[--radius-card] bg-gradient-to-r from-violet/5 to-cyan/5"
            aria-hidden
          />

          <div className="relative flex flex-col items-center text-center">
            {/* Headline — font-display, text-gradient */}
            <Heading as="h2" className="font-display text-2xl md:text-3xl">
              {t.rich('heading', {
                gradient: (chunks) => (
                  <span className="text-gradient">{chunks}</span>
                ),
              })}
            </Heading>

            <Text size="lg" colour="secondary" className="mt-4 max-w-lg">
              {t('description')}
            </Text>

            {/* CTA group: button + App Store badge */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              {/* Primary CTA with shimmer highlight */}
              <Link href="/launching-soon">
                <Button
                  variant="primary"
                  size="lg"
                  className="relative overflow-hidden"
                >
                  <motion.span
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '200%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    aria-hidden
                  />
                  Launching Soon
                </Button>
              </Link>
              <AppStoreBadge location="homepage_cta_banner" />
            </div>

            {/* Commitment-lowering text */}
            <p className="mt-3 text-sm text-foreground-muted">
              Free to start. No credit card required.
            </p>

            {/* Trust micro-element */}
            <div className="mt-4 flex items-center gap-1.5 text-sm">
              {reviewsLive ? (
                <>
                  <span className="text-amber" aria-label="5 star rating">
                    ★★★★★
                  </span>
                  <span className="text-foreground-muted">
                    4.9 on the App Store
                  </span>
                </>
              ) : (
                <span className="text-foreground-muted">
                  Built by language lovers, for language lovers
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
