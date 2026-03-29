'use client';

import { useEffect, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';

const statKeys = ['languages', 'soundscapes', 'practiceModes', 'flashcards'] as const;
const statNumericValues = [9, 12, 3, -1]; // -1 = infinity
const statDisplayValues = ['9', '12', '3', '∞'];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const statAccents = ['text-violet', 'text-cyan', 'text-amber', 'text-violet'];
const glowAccents = [
  'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]',
  'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]',
  'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]',
  'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]',
];

function useCountUp(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || target < 0) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);

  return target < 0 ? '∞' : count.toString();
}

function StatCell({ index, statKey }: { index: number; statKey: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const t = useTranslations('Download');
  const displayValue = useCountUp(statNumericValues[index]!, 800, inView);

  return (
    <motion.div
      ref={ref}
      className={`group flex flex-col items-center gap-2 bg-surface py-8 transition-shadow duration-300 ${glowAccents[index]}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease }}
    >
      <span className={`font-display text-4xl font-bold ${statAccents[index]} sm:text-5xl`}>
        {displayValue}
      </span>
      <span className="text-sm text-foreground-secondary">{t(`stats.${statKey}`)}</span>
    </motion.div>
  );
}

export function DownloadFeatures() {
  const t = useTranslations('Download');

  return (
    <section className="relative px-6 py-24">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 max-w-lg -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan/25 to-transparent" aria-hidden />

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
            <StatCell key={key} index={i} statKey={key} />
          ))}
        </motion.div>

        {/* Transparency note */}
        <motion.p
          className="mt-10 text-center text-sm text-foreground-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {t('upgradeNote')}
        </motion.p>
      </div>
    </section>
  );
}
