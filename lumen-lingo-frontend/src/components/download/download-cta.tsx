'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AppStoreBadge } from '@/components/home/app-store-badge';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* Trust signals with refined SVG icons instead of emojis */
const trustSignals = [
  {
    key: 'privacy',
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    key: 'free',
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
  },
  {
    key: 'noAccount',
    icon: (
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
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
        {/* Breathing aurora background — slow, tranquil */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden>
          <motion.div
            className="absolute -inset-[40%] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06)_0%,transparent_60%)]" 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -inset-[20%] bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.04)_0%,transparent_50%)]" 
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Soft top edge light */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden />

        <div className="relative flex flex-col items-center gap-6">
          {/* Small decorative constellation */}
          <motion.div
            className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-glass-border bg-glass/60"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <svg className="h-5 w-5 text-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
            </svg>
          </motion.div>

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
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <AppStoreBadge size="lg" location="download_cta" />
            </motion.div>
          </motion.div>

          {/* Trust pills — elegant SVG icons, no emojis */}
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
                <span className="text-violet/70" aria-hidden>{icon}</span>
                {t(key)}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
