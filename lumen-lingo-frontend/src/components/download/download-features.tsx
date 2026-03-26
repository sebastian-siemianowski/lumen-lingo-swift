'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const statKeys = ['languages', 'soundscapes', 'practiceModes', 'flashcards'] as const;
const statValues = ['9', '12', '3', '\u221e'];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function DownloadFeatures() {
  const t = useTranslations('Download');

  const statAccents = ['text-violet', 'text-cyan', 'text-amber', 'text-violet'];

  return (
    <section className="relative px-6 py-20">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 max-w-lg -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/20 to-transparent" aria-hidden />

      <div className="mx-auto max-w-3xl">
        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-glass-border bg-glass-border sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease }}
        >
          {statKeys.map((key, i) => (
            <motion.div
              key={key}
              className="flex flex-col items-center gap-1.5 bg-surface py-7"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease }}
            >
              <span className={`font-display text-3xl font-bold ${statAccents[i]}`}>{statValues[i]}</span>
              <span className="text-sm text-foreground-secondary">{t(`stats.${key}`)}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Transparency note */}
        <motion.p
          className="mt-8 text-center text-sm text-foreground-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t('upgradeNote')}
        </motion.p>
      </div>
    </section>
  );
}
