'use client';

import { useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const benefitKeys = ['flashcards', 'practice', 'soundscapes'] as const;

const icons = [
  <svg key="flashcards" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>,
  <svg key="practice" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>,
  <svg key="soundscapes" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-2.166-1.248 1.803 1.803 0 0 0-2.165-1.249l-1.32.377A2.25 2.25 0 0 1 9 15.553V12m10.5-3V5.25A2.25 2.25 0 0 0 17.25 3h-1.5A2.25 2.25 0 0 0 13.5 5.25v3.75m6-3v3.75m-6-3v3.75" />
  </svg>,
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const accentColors = ['violet', 'cyan', 'amber'] as const;
const glowColors = ['rgba(139,92,246,0.15)', 'rgba(6,182,212,0.15)', 'rgba(245,158,11,0.15)'];
const iconColors = ['text-violet', 'text-cyan', 'text-amber'];
const borderHoverColors = ['hover:border-violet/20', 'hover:border-cyan/20', 'hover:border-amber/20'];

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 12);
    rotateX.set(-y * 12);
  }, [rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <div className="perspective-800">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
        className={`group relative flex flex-col items-center gap-5 rounded-2xl border border-glass-border/60 bg-glass/60 p-8 text-center backdrop-blur-sm transition-colors duration-300 ${borderHoverColors[index]}`}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: index * 0.15, duration: 0.6, ease }}
      >
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 40px ${glowColors[index]}, 0 0 30px ${glowColors[index]}` }}
        />
        {children}
      </motion.div>
    </div>
  );
}

export function DownloadBenefits() {
  const t = useTranslations('Download.benefits');

  const accents = ['from-violet/15 to-violet/5', 'from-cyan/15 to-cyan/5', 'from-amber/15 to-amber/5'];

  return (
    <section className="relative px-6 py-24">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 max-w-lg -translate-x-1/2 bg-gradient-to-r from-transparent via-violet/25 to-transparent" aria-hidden />

      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
        {benefitKeys.map((key, i) => (
          <TiltCard key={key} index={i}>
            <div className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${accents[i]} border border-glass-border shadow-sm`}>
              <div className={iconColors[i]}>{icons[i]}</div>
              {/* Animated shine sweep on hover */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
            </div>
            <h2 className="font-display text-lg font-bold text-foreground">{t(key)}</h2>
            <p className="text-sm leading-relaxed text-foreground-secondary">{t(`${key}Desc`)}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
