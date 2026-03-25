'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AppStoreBadge } from '@/components/home/app-store-badge';
import { spring } from '@/lib/motion';
import { useFeatureFlag } from '@/hooks/use-feature-flag';

export function DownloadHero() {
  const t = useTranslations('Download');
  const appStoreLive = useFeatureFlag('APP_STORE_LIVE');

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/8 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan/5 blur-[80px]" />
      </div>

      <motion.div
        className="relative z-10 flex max-w-lg flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={spring.smooth}
      >
        {/* App icon */}
        <motion.div
          className="flex h-24 w-24 items-center justify-center rounded-[22px] border border-white/10 bg-gradient-to-br from-violet to-cyan shadow-[0_0_40px_rgba(139,92,246,0.25)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ...spring.smooth, delay: 0.1 }}
        >
          <span className="text-4xl font-bold text-white" aria-hidden="true">L</span>
        </motion.div>

        {/* App name & tagline */}
        <div className="space-y-3">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t('heading')}
          </h1>
          <p className="mx-auto max-w-md text-lg text-foreground-secondary sm:text-xl">
            {t('description')}
          </p>
        </div>

        {/* App Store badge with pulse glow + hover scale */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            boxShadow: [
              '0 0 20px rgba(139,92,246,0.1)',
              '0 0 30px rgba(139,92,246,0.15)',
              '0 0 20px rgba(139,92,246,0.1)',
            ],
          }}
          transition={{
            opacity: { ...spring.smooth, delay: 0.3 },
            y: { ...spring.smooth, delay: 0.3 },
            boxShadow: { duration: 3, repeat: Infinity },
          }}
          whileHover={{ scale: 1.03 }}
          className="rounded-xl"
        >
          <AppStoreBadge size="lg" location="download_page" />
        </motion.div>

        {/* Trust signal */}
        {appStoreLive ? (
          <p className="flex items-center gap-1 text-sm text-foreground-muted">
            <span className="text-amber-400" aria-hidden>★</span>
            {t('meta')}
          </p>
        ) : (
          <p className="text-sm text-foreground-muted">
            Be among the first to experience LumenLingo
          </p>
        )}

        {/* iOS requirement */}
        <p className="text-xs text-foreground-muted">
          Available on iOS 17+
        </p>
      </motion.div>
    </section>
  );
}
