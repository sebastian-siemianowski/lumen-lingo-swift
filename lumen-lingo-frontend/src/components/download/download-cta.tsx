'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AppStoreBadge } from '@/components/home/app-store-badge';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const trustSignals = [
  { icon: '🔒', key: 'privacy' },
  { icon: '🎁', key: 'free' },
  { icon: '⚡', key: 'noAccount' },
] as const;

export function DownloadCTA() {
  const t = useTranslations('Download.cta');

  return (
    <section className="relative px-6 py-24">
      {/* Divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 max-w-lg -translate-x-1/2 bg-gradient-to-r from-transparent via-violet/20 to-transparent" aria-hidden />

      <motion.div
        className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-glass-border bg-glass/80 p-10 text-center backdrop-blur-md sm:p-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease }}
      >
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/[0.04] via-transparent to-cyan/[0.04]" aria-hidden />

        {/* Animated border shine */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden>
          <div className="animate-spin-slow absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(139,92,246,0.1)_10%,transparent_20%)]" />
        </div>

        <div className="relative flex flex-col items-center gap-6">
          <motion.h2
            className="font-display text-3xl font-bold text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease }}
          >
            {t('heading')}
          </motion.h2>

          <motion.p
            className="max-w-md text-foreground-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t('description')}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="relative mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease }}
          >
            <motion.div
              className="absolute -inset-4 rounded-2xl bg-violet/8 blur-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <AppStoreBadge size="lg" location="download_cta" />
            </motion.div>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            className="mt-2 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {trustSignals.map(({ icon, key }) => (
              <span
                key={key}
                className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-glass/60 px-3.5 py-1.5 text-xs text-foreground-muted backdrop-blur-sm"
              >
                <span aria-hidden>{icon}</span>
                {t(key)}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
