'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const benefitKeys = ['flashcards', 'practice', 'soundscapes'] as const;

const icons = [
  <svg key="flashcards" className="h-8 w-8 text-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>,
  <svg key="practice" className="h-8 w-8 text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>,
  <svg key="soundscapes" className="h-8 w-8 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-2.166-1.248 1.803 1.803 0 0 0-2.165-1.249l-1.32.377A2.25 2.25 0 0 1 9 15.553V12m10.5-3V5.25A2.25 2.25 0 0 0 17.25 3h-1.5A2.25 2.25 0 0 0 13.5 5.25v3.75m6-3v3.75m-6-3v3.75" />
  </svg>,
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function DownloadBenefits() {
  const t = useTranslations('Download.benefits');

  const accents = ['from-violet/10 to-violet/5', 'from-cyan/10 to-cyan/5', 'from-amber/10 to-amber/5'];

  return (
    <section className="relative px-6 py-20">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 max-w-lg -translate-x-1/2 bg-gradient-to-r from-transparent via-violet/20 to-transparent" aria-hidden />

      <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-3">
        {benefitKeys.map((key, i) => (
          <motion.div
            key={key}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-glass-border/50 bg-glass/50 p-6 text-center transition-colors duration-300 hover:border-glass-border hover:bg-glass"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.12, duration: 0.5, ease }}
          >
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accents[i]} border border-glass-border shadow-sm transition-transform duration-300 group-hover:scale-110`}>
              {icons[i]}
            </div>
            <h2 className="font-display text-lg font-bold text-foreground">{t(key)}</h2>
            <p className="text-sm leading-relaxed text-foreground-secondary">{t(`${key}Desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
