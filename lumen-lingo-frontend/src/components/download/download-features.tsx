'use client';

import { motion } from 'framer-motion';

const features = [
  { value: '9', label: 'Languages' },
  { value: '12', label: 'Soundscapes' },
  { value: '3', label: 'Practice Modes' },
  { value: '∞', label: 'Flashcards' },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function DownloadFeatures() {
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
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-1 bg-surface py-6">
              <span className="font-display text-2xl font-bold text-violet">{f.value}</span>
              <span className="text-sm text-foreground-secondary">{f.label}</span>
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
          Free to start. Pro, Elite, and Royal tiers available in-app.
        </motion.p>
      </div>
    </section>
  );
}
