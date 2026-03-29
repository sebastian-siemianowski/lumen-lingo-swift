'use client';

import { cn } from '@/lib/utils';
import { Container } from '@/components/ui';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FeatureSection } from './feature-section';
import { TableOfContents } from './table-of-contents';
import {
  FlashcardIcon,
  SpacedRepetitionIcon,
  PracticeModeIcon,
  SoundscapeIcon,
  BreathingOrbIcon,
  ProgressIcon,
  LanguagePairIcon,
  MembershipIcon,
  ParisCafeIcon,
  OceanWavesIcon,
  DeepSpaceIcon,
  DiamondIcon,
} from '@/components/icons';

/* ─── iOS-representative mini-UIs for each feature ─── */

function FlashcardPreview() {
  const t = useTranslations('Features');
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-violet/[0.06] to-background p-6">
      {/* iOS status bar hint */}
      <div className="mb-4 flex items-center justify-between px-1">
        <div className="h-1.5 w-8 rounded-full bg-white/10" />
        <div className="text-[8px] font-medium text-foreground-muted/40">9:41</div>
        <div className="flex gap-1">
          <div className="h-1.5 w-4 rounded-full bg-white/10" />
        </div>
      </div>
      {/* Progress bar */}
      <div className="mb-5 flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-violet to-cyan" />
        </div>
        <span className="text-[9px] font-medium text-foreground-muted/60">{t('previews.flashcard.progress')}</span>
      </div>
      {/* Flashcard */}
      <div className="relative mx-auto flex flex-1 w-full max-w-[280px] flex-col items-center justify-center rounded-2xl border border-violet/20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-lg shadow-violet/5">
        <div className="absolute top-3 right-3 rounded-full bg-violet/10 px-2 py-0.5 text-[7px] font-semibold text-violet">{t('previews.flashcard.badge')}</div>
        <span className="mb-1 text-[9px] font-semibold tracking-wider text-violet/60 uppercase">{t('previews.flashcard.language')}</span>
        <span className="text-2xl font-bold text-foreground">Bonjour</span>
        <span className="mt-1 text-[10px] text-foreground-muted/50">/ bɔ̃.ʒuʁ /</span>
        <div className="mt-4 flex items-center gap-1.5 text-[8px] text-foreground-muted/30">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 8l5 5 5-5" /></svg>
          {t('previews.flashcard.tapToFlip')}
        </div>
      </div>
      {/* Action buttons — matching the actual app */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1.5 rounded-full border border-red-400/20 bg-red-500/5 px-4 py-2">
          <svg viewBox="0 0 16 16" className="h-3 w-3 text-red-400/60" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 4l8 8M12 4l-8 8" /></svg>
          <span className="text-[8px] font-semibold text-red-400/60">{t('previews.flashcard.stillLearning')}</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-4 py-2">
          <svg viewBox="0 0 16 16" className="h-3 w-3 text-emerald-400/60" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M4 8l3 3 5-5" /></svg>
          <span className="text-[8px] font-semibold text-emerald-400/60">{t('previews.flashcard.gotIt')}</span>
        </div>
      </div>
      {/* XP indicator */}
      <div className="mt-2 text-center text-[8px] font-medium text-violet/50">{t('previews.flashcard.xpPerCard')}</div>
    </div>
  );
}

function SpacedRepetitionPreview() {
  const t = useTranslations('Features');
  const categories = [
    { label: t('previews.spacedRep.greetings'), mastered: 18, total: 20, color: 'bg-emerald-400' },
    { label: t('previews.spacedRep.foodDrink'), mastered: 12, total: 25, color: 'bg-cyan' },
    { label: t('previews.spacedRep.travel'), mastered: 5, total: 30, color: 'bg-violet' },
    { label: t('previews.spacedRep.business'), mastered: 2, total: 20, color: 'bg-amber' },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-cyan/[0.06] to-background p-6">
      <div className="mb-4 text-center">
        <span className="text-[9px] font-semibold tracking-wider text-cyan/60 uppercase">{t('previews.spacedRep.masteryTracking')}</span>
        <div className="mt-1 text-sm font-bold text-foreground">{t('previews.spacedRep.mastered')}</div>
      </div>
      {/* Category mastery levels */}
      <div className="flex flex-col gap-3">
        {categories.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span className="w-20 text-right text-[9px] font-medium text-foreground-muted/60">{c.label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
              <div className={cn('h-full rounded-full transition-all', c.color)} style={{ width: `${(c.mastered / c.total) * 100}%` }} />
            </div>
            <span className="w-10 text-[9px] font-bold text-foreground-muted/80">{c.mastered}/{c.total}</span>
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="mt-5 flex items-center gap-2">
        <div className="flex-1 rounded-lg border border-glass-border/40 bg-white/[0.03] p-2.5">
          <div className="text-[8px] text-foreground-muted/40">{t('previews.spacedRep.streak')}</div>
          <div className="mt-0.5 flex items-center gap-1 text-lg font-bold text-foreground">
            7
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-amber" fill="currentColor"><path d="M8 1.5c-.3 0-.5.1-.7.3L4.5 6.5C3.5 8 3 9.2 3 10.3 3 12.9 5.2 15 8 15s5-2.1 5-4.7c0-1.1-.5-2.3-1.5-3.8L8.7 1.8C8.5 1.6 8.3 1.5 8 1.5z" /></svg>
          </div>
        </div>
        <div className="flex-1 rounded-lg border border-glass-border/40 bg-white/[0.03] p-2.5">
          <div className="text-[8px] text-foreground-muted/40">{t('previews.spacedRep.accuracy')}</div>
          <div className="mt-0.5 text-lg font-bold text-cyan">94%</div>
        </div>
        <div className="flex-1 rounded-lg border border-glass-border/40 bg-white/[0.03] p-2.5">
          <div className="text-[8px] text-foreground-muted/40">{t('previews.spacedRep.totalXp')}</div>
          <div className="mt-0.5 text-lg font-bold text-violet">2,450</div>
        </div>
      </div>
    </div>
  );
}

function PracticeModesPreview() {
  const t = useTranslations('Features');
  const modes = [
    { name: t('previews.practice.flashCards'), desc: t('previews.practice.flashCardsDesc'), active: false, iconPath: 'M3 5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm10 0a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z' },
    { name: t('previews.practice.grammarChallenge'), desc: t('previews.practice.grammarChallengeDesc'), active: true, iconPath: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { name: t('previews.practice.wordBuilder'), desc: t('previews.practice.wordBuilderDesc'), active: false, iconPath: 'M4 6h16M4 10h16M4 14h10' },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-violet/[0.04] via-background to-cyan/[0.04] p-6">
      <div className="mb-4 text-center">
        <span className="text-[9px] font-semibold tracking-wider text-violet/60 uppercase">{t('previews.practice.chooseMode')}</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {modes.map((m) => (
          <div key={m.name} className={cn(
            'flex items-center gap-3 rounded-xl border p-3 transition-all',
            m.active
              ? 'border-violet/30 bg-violet/[0.06] shadow-lg shadow-violet/5'
              : 'border-glass-border/40 bg-white/[0.02]',
          )}>
            <div className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
              m.active ? 'bg-violet/15' : 'bg-white/5',
            )}>
              <svg viewBox="0 0 24 24" className={cn('h-4 w-4', m.active ? 'text-violet' : 'text-foreground-muted/50')} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d={m.iconPath} /></svg>
            </div>
            <div className="flex-1">
              <div className={cn('text-xs font-semibold', m.active ? 'text-foreground' : 'text-foreground-muted')}>{m.name}</div>
              <div className="text-[8px] text-foreground-muted/50">{m.desc}</div>
            </div>
            {m.active && (
              <div className="rounded-full bg-violet/20 px-2 py-0.5 text-[7px] font-bold text-violet">{t('previews.practice.intermediate')}</div>
            )}
          </div>
        ))}
      </div>
      {/* Start button */}
      <div className="mt-4 flex justify-center">
        <div className="rounded-full bg-gradient-to-r from-violet to-cyan px-8 py-2 text-[10px] font-bold text-white shadow-lg shadow-violet/20">
          {t('previews.practice.startSession')}
        </div>
      </div>
    </div>
  );
}

function SoundscapePreview() {
  const t = useTranslations('Features');
  const categories = [
    { name: t('previews.soundscapes.cozy'), count: 3, color: 'from-amber/40 to-orange-400/30', dot: 'bg-amber' },
    { name: t('previews.soundscapes.nature'), count: 3, color: 'from-emerald-400/40 to-cyan/30', dot: 'bg-emerald-400' },
    { name: t('previews.soundscapes.atmospheric'), count: 3, color: 'from-violet/40 to-indigo-400/30', dot: 'bg-violet' },
    { name: t('previews.soundscapes.travel'), count: 3, color: 'from-cyan/40 to-sky-400/30', dot: 'bg-cyan' },
  ];
  const scapes = [
    { name: t('previews.soundscapes.parisCafe'), cat: t('previews.soundscapes.cozy'), Icon: ParisCafeIcon },
    { name: t('previews.soundscapes.bambooForest'), cat: t('previews.soundscapes.nature'), Icon: OceanWavesIcon },
    { name: t('previews.soundscapes.deepSpace'), cat: t('previews.soundscapes.atmospheric'), Icon: DeepSpaceIcon, active: true },
    { name: t('previews.soundscapes.dominicanBeach'), cat: t('previews.soundscapes.travel'), Icon: OceanWavesIcon },
  ];

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-b from-violet/[0.06] via-background to-amber/[0.04] p-6">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute top-1/4 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet/[0.08] blur-[60px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-cyan/[0.06] blur-[40px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Header */}
        <div className="mb-5 text-center">
          <span className="text-[9px] font-semibold tracking-[0.2em] text-violet/60 uppercase">{t('previews.soundscapes.heading')}</span>
          <div className="mt-1 text-xs font-medium text-foreground-muted/50">{t('previews.soundscapes.subheading')}</div>
        </div>

        {/* Category pills */}
        <div className="mb-5 flex flex-wrap justify-center gap-1.5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
              className="flex items-center gap-1.5 rounded-full border border-glass-border/30 bg-white/[0.03] px-2.5 py-1 backdrop-blur-sm"
            >
              <div className={cn('h-1.5 w-1.5 rounded-full', cat.dot)} />
              <span className="text-[8px] font-medium text-foreground-muted/70">{cat.name}</span>
              <span className="text-[7px] text-foreground-muted/30">{cat.count}</span>
            </motion.div>
          ))}
        </div>

        {/* Soundscape list */}
        <div className="flex flex-col gap-2">
          {scapes.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 250, damping: 22 }}
              className={cn(
                'group/scape flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-300',
                s.active
                  ? 'border-violet/30 bg-violet/[0.08] shadow-lg shadow-violet/5'
                  : 'border-glass-border/30 bg-white/[0.02] hover:border-glass-border/50 hover:bg-white/[0.04]',
              )}
            >
              <div className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors',
                s.active ? 'bg-violet/15' : 'bg-white/5',
              )}>
                <s.Icon size={16} className={s.active ? 'text-violet' : 'text-foreground-muted/50'} aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <div className={cn('text-[10px] font-semibold truncate', s.active ? 'text-foreground' : 'text-foreground-muted/80')}>{s.name}</div>
                <div className="text-[7px] text-foreground-muted/40">{s.cat}</div>
              </div>
              {s.active && (
                <div className="flex items-end gap-[2px]">
                  {[0.4, 0.7, 1, 0.85, 0.55, 0.95, 0.6, 0.8].map((h, j) => (
                    <motion.div
                      key={j}
                      className="w-[2px] rounded-full bg-gradient-to-t from-violet to-cyan"
                      animate={{
                        height: [`${h * 14}px`, `${h * 6}px`, `${h * 16}px`, `${h * 8}px`, `${h * 14}px`],
                      }}
                      transition={{
                        duration: 2 + j * 0.12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: j * 0.08,
                      }}
                      style={{ height: `${h * 14}px` }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Now Playing — cinematic bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 22 }}
          className="mt-4 overflow-hidden rounded-2xl border border-violet/20 bg-gradient-to-r from-violet/[0.06] via-violet/[0.08] to-cyan/[0.04]"
        >
          <div className="relative px-4 py-3">
            {/* Shimmer overlay */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(139,92,246,0.06) 50%, transparent 60%)',
              }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            />
            <div className="relative flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet/15">
                <DeepSpaceIcon size={14} className="text-violet" aria-hidden />
              </div>
              <div className="flex-1">
                <div className="text-[8px] font-semibold text-violet/70 uppercase tracking-wider">{t('previews.soundscapes.nowPlaying')}</div>
                <div className="text-[11px] font-semibold text-foreground">{t('previews.soundscapes.deepSpace')}</div>
              </div>
              <div className="flex items-end gap-[1.5px]">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-[1.5px] rounded-full bg-gradient-to-t from-violet to-cyan"
                    animate={{
                      height: [`${4 + Math.sin(i * 0.7) * 6}px`, `${4 + Math.cos(i * 0.5) * 8}px`, `${4 + Math.sin(i * 0.9) * 5}px`, `${4 + Math.sin(i * 0.7) * 6}px`],
                    }}
                    transition={{
                      duration: 1.8 + i * 0.05,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.04,
                    }}
                    style={{ height: `${4 + Math.sin(i * 0.7) * 6}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BreathingOrbPreview() {
  const t = useTranslations('Features');
  const cities = [
    { name: 'Barcelona', color: 'from-rose-500/30 to-amber/25', active: true },
    { name: 'Shanghai', color: 'from-cyan/30 to-emerald-400/20', active: false },
    { name: 'Tokyo', color: 'from-orange-400/30 to-rose-400/20', active: false },
    { name: 'New York', color: 'from-violet/30 to-emerald-400/20', active: false },
    { name: 'Paris', color: 'from-violet/30 to-rose-300/20', active: false },
    { name: 'Krakow', color: 'from-amber/30 to-violet/20', active: false },
  ];

  const types = [
    { label: t('previews.breathingOrbs.breathingOrbs'), color: 'text-amber', bg: 'bg-amber/10', border: 'border-amber/20' },
    { label: t('previews.breathingOrbs.nebulaDrift'), color: 'text-violet', bg: 'bg-violet/10', border: 'border-violet/20' },
    { label: t('previews.breathingOrbs.quantumFlow'), color: 'text-cyan', bg: 'bg-cyan/10', border: 'border-cyan/20' },
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-amber/[0.04] via-background to-violet/[0.04]">
      {/* Deep ambient background layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute top-1/3 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.06] blur-[80px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 h-32 w-32 rounded-full bg-violet/[0.05] blur-[60px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 h-24 w-24 rounded-full bg-rose-400/[0.04] blur-[50px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
        />
      </div>

      {/* Header */}
      <div className="absolute top-4 left-0 right-0 z-10 text-center">
        <span className="text-[9px] font-semibold tracking-[0.2em] text-amber/60 uppercase">{t('previews.breathingOrbs.heading')}</span>
      </div>

      {/* Central breathing orb — the hero element */}
      <div className="relative h-36 w-36 sm:h-40 sm:w-40">
        {/* Outermost glow ring */}
        <motion.div
          className="absolute -inset-4 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Layer 1 — outer haze */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-500/10 to-amber/[0.06] blur-xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Layer 2 */}
        <motion.div
          className="absolute inset-3 rounded-full bg-gradient-to-br from-orange-400/15 to-rose-400/10 blur-lg"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
        {/* Layer 3 */}
        <motion.div
          className="absolute inset-6 rounded-full bg-gradient-to-br from-amber/20 to-violet/10 blur-md"
          animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        {/* Layer 4 — inner glow */}
        <motion.div
          className="absolute inset-9 rounded-full bg-gradient-to-br from-amber/30 to-rose-300/20"
          animate={{ scale: [1, 1.04, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        />
        {/* Core — bright center */}
        <motion.div
          className="absolute inset-[44px] rounded-full bg-gradient-to-br from-white/20 to-amber/15"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />

        {/* Floating particles around the orb */}
        {[
          { x: '-20%', y: '-15%', size: 3, delay: 0 },
          { x: '105%', y: '20%', size: 2, delay: 1.2 },
          { x: '85%', y: '95%', size: 2.5, delay: 0.6 },
          { x: '-10%', y: '80%', size: 2, delay: 1.8 },
          { x: '50%', y: '-20%', size: 1.5, delay: 2.2 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber/40"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Type badges — below the orb */}
      <div className="absolute bottom-16 z-10 flex gap-2 px-4">
        {types.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 250, damping: 22 }}
            className={cn('rounded-full border px-2.5 py-1 text-[7px] font-semibold', t.bg, t.border, t.color)}
          >
            {t.label}
          </motion.div>
        ))}
      </div>

      {/* City selector chips */}
      <div className="absolute bottom-5 z-10 flex gap-1.5 px-4">
        {cities.map((city, i) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 + i * 0.06, type: 'spring', stiffness: 300, damping: 20 }}
            className={cn(
              'rounded-full px-2 py-0.5 text-[7px] font-medium transition-all',
              city.active
                ? 'bg-amber/15 text-amber shadow-sm shadow-amber/10'
                : 'bg-white/5 text-foreground-muted/40 hover:bg-white/8 hover:text-foreground-muted/60',
            )}
          >
            {city.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProgressPreview() {
  const t = useTranslations('Features');
  const days = t.raw('previews.progress.days') as string[];
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-cyan/[0.06] to-background p-6">
      <div className="mb-4 text-center">
        <span className="text-[9px] font-semibold tracking-wider text-cyan/60 uppercase">{t('previews.progress.heading')}</span>
      </div>
      {/* XP and level */}
      <div className="mb-4 flex items-center justify-between rounded-xl border border-glass-border/40 bg-white/[0.03] px-4 py-3">
        <div>
          <div className="text-[8px] text-foreground-muted/40">{t('previews.progress.level')}</div>
          <div className="text-base font-bold text-foreground">2,450 XP</div>
        </div>
        <div className="relative h-12 w-12">
          <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
            <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/5" />
            <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="100.53" strokeDashoffset="30" strokeLinecap="round" className="text-cyan" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-cyan">70%</div>
        </div>
      </div>
      {/* Weekly chart */}
      <div className="text-[8px] font-medium text-foreground-muted/50 mb-2">{t('previews.progress.thisWeek')}</div>
      <div className="flex items-end justify-between gap-1.5 px-1">
        {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div className={cn(
              'w-full rounded-sm',
              i === 5 ? 'bg-gradient-to-t from-cyan to-violet' : 'bg-white/10',
            )} style={{ height: `${h * 0.6}px` }} />
            <span className="text-[7px] text-foreground-muted/30">{days[i]}</span>
          </div>
        ))}
      </div>
      {/* Streak */}
      <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-glass-border/30 bg-white/[0.02] py-2 text-[9px] text-foreground-muted/60">
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-amber" fill="currentColor"><path d="M8 1.5c-.3 0-.5.1-.7.3L4.5 6.5C3.5 8 3 9.2 3 10.3 3 12.9 5.2 15 8 15s5-2.1 5-4.7c0-1.1-.5-2.3-1.5-3.8L8.7 1.8C8.5 1.6 8.3 1.5 8 1.5z" /></svg>
        {t('previews.progress.streak')}
      </div>
    </div>
  );
}

function LanguagePairPreview() {
  const t = useTranslations('Features');
  const pairs = [
    { from: 'EN', to: 'ES', label: t('previews.languagePairs.enEs'), tier: 'Free', tierCol: 'text-emerald-400 bg-emerald-500/10' },
    { from: 'EN', to: 'FR', label: t('previews.languagePairs.enFr'), tier: 'Free', tierCol: 'text-emerald-400 bg-emerald-500/10' },
    { from: 'EN', to: 'DE', label: t('previews.languagePairs.enDe'), tier: 'Free', tierCol: 'text-emerald-400 bg-emerald-500/10' },
    { from: 'EN', to: 'JA', label: t('previews.languagePairs.enJa'), tier: 'Pro', tierCol: 'text-violet bg-violet/10' },
    { from: 'EN', to: 'UK', label: t('previews.languagePairs.enUk'), tier: 'Pro', tierCol: 'text-violet bg-violet/10' },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-cyan/[0.04] to-amber/[0.03] p-6">
      <div className="mb-4 text-center">
        <span className="text-[9px] font-semibold tracking-wider text-cyan/60 uppercase">{t('previews.languagePairs.heading')}</span>
        <div className="mt-1 text-sm font-bold text-foreground">{t('previews.languagePairs.combinations')}</div>
      </div>
      <div className="flex flex-col gap-1.5">
        {pairs.map((p) => (
          <div key={p.label} className="flex items-center gap-2.5 rounded-lg border border-glass-border/30 bg-white/[0.02] px-3 py-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/5 text-[8px] font-bold text-foreground-muted/70">{p.from}</span>
            <svg className="h-3 w-3 shrink-0 text-foreground-muted/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/5 text-[8px] font-bold text-foreground-muted/70">{p.to}</span>
            <span className="flex-1 text-[9px] font-medium text-foreground-muted/60">{p.label}</span>
            <span className={cn('rounded-full px-1.5 py-0.5 text-[7px] font-bold', p.tierCol)}>{p.tier}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MembershipPreview() {
  const t = useTranslations('Features');
  const tiers = [
    {
      name: t('previews.membership.starter'),
      price: 'Free',
      highlight: t('previews.membership.threePairs'),
      gradient: 'from-foreground-muted/30 to-foreground-muted/15',
      ringColor: 'border-foreground-muted/15',
      glowColor: 'bg-foreground-muted/5',
      textColor: 'text-foreground-muted/60',
      fillPercent: 25,
      active: false,
    },
    {
      name: 'Pro',
      price: '£9.99',
      highlight: t('previews.membership.offline'),
      gradient: 'from-violet to-violet/50',
      ringColor: 'border-violet/30',
      glowColor: 'bg-violet/8',
      textColor: 'text-violet',
      fillPercent: 50,
      active: false,
    },
    {
      name: 'Elite',
      price: '£19.99',
      highlight: t('previews.membership.allLanguages'),
      gradient: 'from-cyan to-violet/60',
      ringColor: 'border-cyan/40',
      glowColor: 'bg-cyan/10',
      textColor: 'text-cyan',
      fillPercent: 75,
      active: true,
    },
    {
      name: 'Royal',
      price: '£99.99',
      highlight: t('previews.membership.everything'),
      gradient: 'from-amber via-amber/80 to-rose-400/60',
      ringColor: 'border-amber/40',
      glowColor: 'bg-amber/10',
      textColor: 'text-amber',
      fillPercent: 100,
      active: false,
    },
  ];

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-amber/[0.04] via-background to-violet/[0.04] p-4 sm:p-5">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute top-[15%] left-[20%] h-40 w-40 rounded-full bg-violet/[0.05] blur-[60px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] h-36 w-36 rounded-full bg-amber/[0.06] blur-[50px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.04] blur-[40px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      {/* 2×2 Grid of tier cards */}
      <div className="relative z-10 grid w-full grid-cols-2 gap-2.5">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 220, damping: 20 }}
            className={cn(
              'group relative flex flex-col items-center gap-1.5 rounded-2xl border p-2.5 sm:p-3 backdrop-blur-sm transition-all duration-500',
              tier.ringColor,
              tier.active
                ? 'bg-white/[0.04] shadow-xl shadow-cyan/5 ring-1 ring-cyan/15'
                : 'bg-white/[0.02]',
            )}
          >
            {/* Active shimmer */}
            {tier.active && (
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(105deg, transparent 30%, rgba(6,182,212,0.08) 50%, transparent 70%)',
                }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 2.5 }}
              />
            )}

            {/* Popular badge */}
            {tier.active && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 18 }}
                className="absolute -top-2 rounded-full bg-gradient-to-r from-cyan to-violet px-2.5 py-0.5 text-[7px] font-bold tracking-wider text-white uppercase shadow-lg shadow-cyan/20"
              >
                {t('previews.membership.popular')}
              </motion.div>
            )}

            {/* Animated ring indicator */}
            <div className="relative flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
              {/* Background glow */}
              <motion.div
                className={cn('absolute -inset-1 rounded-full blur-lg', tier.glowColor)}
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: tier.active ? 2.5 : 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              />
              {/* Ring track */}
              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/[0.06]" />
                <motion.circle
                  cx="24" cy="24" r="20" fill="none" strokeWidth="3"
                  strokeLinecap="round"
                  className={cn('', tier.textColor)}
                  style={{ filter: tier.active ? 'drop-shadow(0 0 6px rgba(6,182,212,0.5))' : `drop-shadow(0 0 3px currentColor)` }}
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 20 * (1 - tier.fillPercent / 100) }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 1.2, ease: 'easeOut' }}
                />
              </svg>
              {/* Icon */}
              <DiamondIcon size={14} className={cn(tier.textColor, 'relative z-10 transition-colors')} aria-hidden />
            </div>

            {/* Name + price */}
            <div className="relative z-10 text-center">
              <div className={cn('text-[11px] font-bold tracking-wide sm:text-xs', tier.active ? 'text-foreground' : 'text-foreground-muted/70')}>
                {tier.name}
              </div>
              <div className="mt-0.5 text-[9px] font-medium text-foreground-muted/40">{tier.price}</div>
            </div>

            {/* Feature highlight chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 250, damping: 22 }}
              className={cn(
                'rounded-full px-2.5 py-0.5 text-[7px] font-semibold',
                tier.glowColor, tier.textColor,
              )}
            >
              {tier.highlight}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Trial badge at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 22 }}
        className="relative z-10 mt-2.5 flex items-center gap-2"
      >
        <div className="h-px w-6 bg-gradient-to-r from-transparent to-amber/20" />
        <span className="text-[8px] font-medium text-amber/50">{t('previews.membership.trial')}</span>
        <div className="h-px w-6 bg-gradient-to-l from-transparent to-amber/20" />
      </motion.div>
    </div>
  );
}

/* ─── Feature icons (Epic 1 icons at size 32) ─── */
const icons = {
  flashcards: <FlashcardIcon size={32} className="text-violet" />,
  spacedRepetition: <SpacedRepetitionIcon size={32} className="text-cyan" />,
  practice: <PracticeModeIcon size={32} className="text-violet" />,
  soundscapes: <SoundscapeIcon size={32} className="text-violet" />,
  orbs: <BreathingOrbIcon size={32} className="text-amber" />,
  progress: <ProgressIcon size={32} className="text-cyan" />,
  languages: <LanguagePairIcon size={32} className="text-cyan" />,
  tiers: <MembershipIcon size={32} className="text-amber" />,
};

/* ─── Feature data ─── */
const tocIcons = [
  { id: 'flashcards', key: 'flashcards', icon: <FlashcardIcon size={14} /> },
  { id: 'spaced-repetition', key: 'spacedRepetition', icon: <SpacedRepetitionIcon size={14} /> },
  { id: 'practice-modes', key: 'practiceModes', icon: <PracticeModeIcon size={14} /> },
  { id: 'soundscapes', key: 'soundscapes', icon: <SoundscapeIcon size={14} /> },
  { id: 'breathing-orbs', key: 'breathingOrbs', icon: <BreathingOrbIcon size={14} /> },
  { id: 'progress', key: 'progress', icon: <ProgressIcon size={14} /> },
  { id: 'languages', key: 'languages', icon: <LanguagePairIcon size={14} /> },
  { id: 'membership', key: 'membership', icon: <MembershipIcon size={14} /> },
];

export function FeaturesContent() {
  const t = useTranslations('Features');
  const tocItems = tocIcons.map((item) => ({
    id: item.id,
    label: t(`toc.${item.key}` as any),
    icon: item.icon,
  }));
  const s = (section: string) => ({
    title: t(`sections.${section}.title` as any),
    description: t.raw(`sections.${section}.description`) as string[],
    capabilities: t.raw(`sections.${section}.capabilities`) as string[],
  });
  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        {/* Sticky sidebar */}
        <TableOfContents items={tocItems} />

        {/* Feature sections */}
        <div>
          {/* ── 1. Immersive Flashcards ── */}
          <FeatureSection
            id="flashcards"
            icon={icons.flashcards}
            tint="violet"
            {...s('flashcards')}
            screenshot={<FlashcardPreview />}
          />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 2. Smart Spaced Repetition ── */}
          <FeatureSection
            id="spaced-repetition"
            icon={icons.spacedRepetition}
            tint="cyan"
            reversed
            {...s('spacedRepetition')}
            screenshot={<SpacedRepetitionPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 3. Practice Modes ── */}
          <FeatureSection
            id="practice-modes"
            icon={icons.practice}
            tint="violet"
            {...s('practiceModes')}
            screenshot={<PracticeModesPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 4. Soundscapes ── */}
          <FeatureSection
            id="soundscapes"
            icon={icons.soundscapes}
            tint="violet"
            reversed
            {...s('soundscapes')}
            screenshot={<SoundscapePreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 5. Breathing Orbs & Visuals ── */}
          <FeatureSection
            id="breathing-orbs"
            icon={icons.orbs}
            tint="amber"
            {...s('breathingOrbs')}
            screenshot={<BreathingOrbPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 6. Progress & Analytics ── */}
          <FeatureSection
            id="progress"
            icon={icons.progress}
            tint="cyan"
            reversed
            {...s('progress')}
            screenshot={<ProgressPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 7. Language Pairs ── */}
          <FeatureSection
            id="languages"
            icon={icons.languages}
            tint="cyan"
            {...s('languages')}
            screenshot={<LanguagePairPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 8. Membership Tiers ── */}
          <FeatureSection
            id="membership"
            icon={icons.tiers}
            tint="amber"
            reversed
            {...s('membership')}
            screenshot={<MembershipPreview />}
          />
        </div>
      </div>
    </Container>
  );
}
