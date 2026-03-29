'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AppStoreBadge } from '@/components/home/app-store-badge';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* Trust signals with refined SVG icons */
const trustSignals = [
  {
    key: 'privacy' as const,
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    key: 'free' as const,
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    key: 'noAccount' as const,
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
];

/* Floating stars for the CTA background */
function generateStars(count: number) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: `${(i * 41 + 17) % 100}%`,
      y: `${(i * 67 + 23) % 100}%`,
      size: 1 + (i % 2) * 0.5,
      delay: (i * 0.6) % 5,
      duration: 2.5 + (i % 3),
    });
  }
  return stars;
}

export function DownloadCTA() {
  const t = useTranslations('Download.cta');
  const stars = useMemo(() => generateStars(20), []);

  return (
    <section className="relative px-6 py-28">
      {/* Full-width ambient glow behind the card */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/8 blur-[160px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan/5 blur-[100px]"
          animate={{ opacity: [0.2, 0.5, 0.2], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <motion.div
        className="relative mx-auto max-w-2xl overflow-hidden rounded-[32px] border border-white/[0.06] p-12 text-center sm:p-16"
        style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.04) 0%, rgba(15,15,20,0.95) 40%, rgba(6,182,212,0.03) 100%)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset, 0 40px 80px rgba(0,0,0,0.4), 0 0 120px rgba(139,92,246,0.06)',
        }}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
      >
        {/* Contained star field */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]" aria-hidden>
          {stars.map((s) => (
            <motion.div
              key={s.id}
              className="absolute rounded-full bg-white"
              style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
              animate={{ opacity: [0.05, 0.35, 0.05] }}
              transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* Top edge light — like real glass catching light */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" aria-hidden />
        {/* Bottom subtle glow line */}
        <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-violet/10 to-transparent" aria-hidden />

        {/* Slow breathing inner glow */}
        <motion.div
          className="pointer-events-none absolute top-0 left-1/2 h-[200px] w-[400px] -translate-x-1/2 rounded-full bg-violet/[0.03] blur-[80px]"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        />

        <div className="relative flex flex-col items-center gap-7">
          {/* Decorative icon with orbital ring */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <motion.div
              className="absolute -inset-4 rounded-full border border-white/[0.04]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-2 rounded-full bg-violet/10 blur-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-gradient-to-br from-violet/20 to-cyan/10 backdrop-blur-sm">
              <svg className="h-6 w-6 text-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
              </svg>
            </div>
          </motion.div>

          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
          >
            {t('heading')}
          </motion.h2>

          <motion.p
            className="max-w-md text-base leading-relaxed text-foreground-secondary"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {t('description')}
          </motion.p>

          {/* App Store badge with breathing glow */}
          <motion.div
            className="relative mt-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease }}
          >
            <motion.div
              className="absolute -inset-6 rounded-2xl bg-violet/6 blur-3xl"
              animate={{ opacity: [0.3, 0.55, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="relative"
            >
              <AppStoreBadge size="lg" location="download_cta" />
            </motion.div>
          </motion.div>

          {/* Trust signals — premium pill design */}
          <motion.div
            className="mt-4 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            {trustSignals.map(({ icon, key }) => (
              <span
                key={key}
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-xs font-medium text-foreground-muted/90 transition-all duration-300 hover:border-violet/15 hover:bg-violet/[0.04] hover:text-foreground-secondary"
              >
                <span className="text-violet/50 transition-colors duration-300 group-hover:text-violet/80" aria-hidden>{icon}</span>
                {t(key)}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
