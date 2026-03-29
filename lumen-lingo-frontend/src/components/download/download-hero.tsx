'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AppStoreBadge } from '@/components/home/app-store-badge';
import { spring, staggerContainer } from '@/lib/motion';
import { useFeatureFlag } from '@/hooks/use-feature-flag';

/* Deterministic particle positions for the star field */
function generateParticles(count: number) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      x: `${(i * 37 + 13) % 100}%`,
      y: `${(i * 53 + 7) % 100}%`,
      size: 1 + (i % 3),
      delay: (i * 0.4) % 6,
      duration: 3 + (i % 4),
    });
  }
  return particles;
}

const containerVariants = staggerContainer(0.14);

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { ...spring.smooth },
  },
};

export function DownloadHero() {
  const t = useTranslations('Download');
  const appStoreLive = useFeatureFlag('APP_STORE_LIVE');
  const particles = useMemo(() => generateParticles(35), []);

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
      {/* ── Rich layered background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Primary violet bloom — large & dominant */}
        <motion.div
          className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/12 blur-[180px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Cyan accent — upper right drift */}
        <motion.div
          className="absolute top-[20%] right-[15%] h-[450px] w-[450px] rounded-full bg-cyan/8 blur-[130px]"
          animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Amber accent — lower left */}
        <motion.div
          className="absolute bottom-[20%] left-[15%] h-[350px] w-[350px] rounded-full bg-amber/6 blur-[110px]"
          animate={{ opacity: [0.2, 0.5, 0.2], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Floating particle star field */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Orbital rings around center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="absolute -left-[200px] -top-[200px] h-[400px] w-[400px] rounded-full border border-white/[0.03]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -left-[300px] -top-[300px] h-[600px] w-[600px] rounded-full border border-white/[0.02]"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Mesh texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex max-w-xl flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* App icon with rotating gradient ring */}
        <motion.div className="relative" variants={itemVariants}>
          {/* Spinning conic gradient halo */}
          <div className="absolute -inset-5 animate-spin-slow rounded-[32px] opacity-50" style={{
            background: 'conic-gradient(from 0deg, #8b5cf6, #06b6d4, #f59e0b, #8b5cf6)',
            filter: 'blur(20px)',
          }} />
          {/* Inner breathing glow */}
          <motion.div
            className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-violet/40 to-cyan/30 blur-xl"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Icon itself */}
          <div className="relative flex h-28 w-28 items-center justify-center rounded-[24px] border border-white/15 bg-gradient-to-br from-violet to-cyan shadow-[0_0_60px_rgba(139,92,246,0.3)]">
            <span className="text-5xl font-bold text-white" aria-hidden="true">L</span>
          </div>
        </motion.div>

        {/* Heading — consistent with page, no shimmer */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h1 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t('heading')}
          </h1>
          <p className="mx-auto max-w-md text-lg leading-relaxed text-foreground-secondary sm:text-xl">
            {t('description')}
          </p>
        </motion.div>

        {/* CTA with pulsing glow */}
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            className="absolute -inset-4 rounded-2xl bg-violet/10 blur-2xl"
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <AppStoreBadge size="lg" location="download_page" />
          </motion.div>
        </motion.div>

        {/* Trust signal */}
        <motion.div variants={itemVariants}>
          {appStoreLive ? (
            <p className="flex items-center gap-1.5 text-sm text-foreground-muted">
              <span className="text-amber-400" aria-hidden>★</span>
              {t('tagline')}
            </p>
          ) : (
            <p className="text-sm text-foreground-muted">
              {t('earlyAccess')}
            </p>
          )}
        </motion.div>

        {/* iOS requirement chip */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-glass-border bg-glass/80 px-3.5 py-1.5 text-xs text-foreground-muted backdrop-blur-sm">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {t('requires')}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/10 p-1"
          aria-hidden
        >
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-white/40"
            animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
