'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const statKeys = ['languages', 'soundscapes', 'practiceModes', 'flashcards'] as const;
const statValues = ['9', '12', '3', '\u221e'];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function DownloadFeatures() {
  const t = useTranslations('Download');

  return (
    <section className="relative px-6 py-16">
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
            <div key={key} className="flex flex-col items-center gap-1 bg-surface py-6">
              <span className="font-display text-2xl font-bold text-violet">{statValues[i]}</span>
              <span className="text-sm text-foreground-secondary">{t(`stats.${key}`)}</span>
            </div>
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
