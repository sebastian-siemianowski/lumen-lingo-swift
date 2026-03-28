'use client';

import { cn } from '@/lib/utils';
import { Container } from '@/components/ui';
import { motion } from 'framer-motion';
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
        <span className="text-[9px] font-medium text-foreground-muted/60">3 / 5</span>
      </div>
      {/* Flashcard */}
      <div className="relative mx-auto flex flex-1 w-full max-w-[280px] flex-col items-center justify-center rounded-2xl border border-violet/20 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 shadow-lg shadow-violet/5">
        <div className="absolute top-3 right-3 rounded-full bg-violet/10 px-2 py-0.5 text-[7px] font-semibold text-violet">3D Flip</div>
        <span className="mb-1 text-[9px] font-semibold tracking-wider text-violet/60 uppercase">French</span>
        <span className="text-2xl font-bold text-foreground">Bonjour</span>
        <span className="mt-1 text-[10px] text-foreground-muted/50">/ bɔ̃.ʒuʁ /</span>
        <div className="mt-4 flex items-center gap-1.5 text-[8px] text-foreground-muted/30">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 8l5 5 5-5" /></svg>
          Tap to flip
        </div>
      </div>
      {/* Action buttons — matching the actual app */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1.5 rounded-full border border-red-400/20 bg-red-500/5 px-4 py-2">
          <svg viewBox="0 0 16 16" className="h-3 w-3 text-red-400/60" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 4l8 8M12 4l-8 8" /></svg>
          <span className="text-[8px] font-semibold text-red-400/60">Still Learning</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-4 py-2">
          <svg viewBox="0 0 16 16" className="h-3 w-3 text-emerald-400/60" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M4 8l3 3 5-5" /></svg>
          <span className="text-[8px] font-semibold text-emerald-400/60">Got It</span>
        </div>
      </div>
      {/* XP indicator */}
      <div className="mt-2 text-center text-[8px] font-medium text-violet/50">+10 XP per card</div>
    </div>
  );
}

function SpacedRepetitionPreview() {
  const categories = [
    { label: 'Greetings', mastered: 18, total: 20, color: 'bg-emerald-400' },
    { label: 'Food & Drink', mastered: 12, total: 25, color: 'bg-cyan' },
    { label: 'Travel', mastered: 5, total: 30, color: 'bg-violet' },
    { label: 'Business', mastered: 2, total: 20, color: 'bg-amber' },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-cyan/[0.06] to-background p-6">
      <div className="mb-4 text-center">
        <span className="text-[9px] font-semibold tracking-wider text-cyan/60 uppercase">Mastery Tracking</span>
        <div className="mt-1 text-sm font-bold text-foreground">37 of 95 mastered</div>
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
          <div className="text-[8px] text-foreground-muted/40">Streak</div>
          <div className="mt-0.5 flex items-center gap-1 text-lg font-bold text-foreground">
            7
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-amber" fill="currentColor"><path d="M8 1.5c-.3 0-.5.1-.7.3L4.5 6.5C3.5 8 3 9.2 3 10.3 3 12.9 5.2 15 8 15s5-2.1 5-4.7c0-1.1-.5-2.3-1.5-3.8L8.7 1.8C8.5 1.6 8.3 1.5 8 1.5z" /></svg>
          </div>
        </div>
        <div className="flex-1 rounded-lg border border-glass-border/40 bg-white/[0.03] p-2.5">
          <div className="text-[8px] text-foreground-muted/40">Accuracy</div>
          <div className="mt-0.5 text-lg font-bold text-cyan">94%</div>
        </div>
        <div className="flex-1 rounded-lg border border-glass-border/40 bg-white/[0.03] p-2.5">
          <div className="text-[8px] text-foreground-muted/40">Total XP</div>
          <div className="mt-0.5 text-lg font-bold text-violet">2,450</div>
        </div>
      </div>
    </div>
  );
}

function PracticeModesPreview() {
  const modes = [
    { name: 'Flash Cards', desc: '3D flip cards, swipe to recall', active: false, iconPath: 'M3 5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm10 0a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z' },
    { name: 'Grammar Challenge', desc: 'Multiple-choice A / B / C / D', active: true, iconPath: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { name: 'Word Builder', desc: 'Build words letter by letter, 15 XP', active: false, iconPath: 'M4 6h16M4 10h16M4 14h10' },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-violet/[0.04] via-background to-cyan/[0.04] p-6">
      <div className="mb-4 text-center">
        <span className="text-[9px] font-semibold tracking-wider text-violet/60 uppercase">Choose Mode</span>
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
              <div className="rounded-full bg-violet/20 px-2 py-0.5 text-[7px] font-bold text-violet">Intermediate</div>
            )}
          </div>
        ))}
      </div>
      {/* Start button */}
      <div className="mt-4 flex justify-center">
        <div className="rounded-full bg-gradient-to-r from-violet to-cyan px-8 py-2 text-[10px] font-bold text-white shadow-lg shadow-violet/20">
          Start Session
        </div>
      </div>
    </div>
  );
}

function SoundscapePreview() {
  const categories = [
    { name: 'Cozy', count: 3, color: 'from-amber/40 to-orange-400/30', dot: 'bg-amber' },
    { name: 'Nature', count: 3, color: 'from-emerald-400/40 to-cyan/30', dot: 'bg-emerald-400' },
    { name: 'Atmospheric', count: 3, color: 'from-violet/40 to-indigo-400/30', dot: 'bg-violet' },
    { name: 'Travel', count: 3, color: 'from-cyan/40 to-sky-400/30', dot: 'bg-cyan' },
  ];
  const scapes = [
    { name: 'Paris Café', cat: 'Cozy', Icon: ParisCafeIcon },
    { name: 'Japanese Bamboo Forest', cat: 'Nature', Icon: OceanWavesIcon },
    { name: 'Deep Space Drift', cat: 'Atmospheric', Icon: DeepSpaceIcon, active: true },
    { name: 'Dominican Beach', cat: 'Travel', Icon: OceanWavesIcon },
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
          <span className="text-[9px] font-semibold tracking-[0.2em] text-violet/60 uppercase">12 Ambient Soundscapes</span>
          <div className="mt-1 text-xs font-medium text-foreground-muted/50">Four categories, find your focus</div>
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
                <div className="text-[8px] font-semibold text-violet/70 uppercase tracking-wider">Now Playing</div>
                <div className="text-[11px] font-semibold text-foreground">Deep Space Drift</div>
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
  const cities = [
    { name: 'Barcelona', color: 'from-rose-500/30 to-amber/25', active: true },
    { name: 'Shanghai', color: 'from-cyan/30 to-emerald-400/20', active: false },
    { name: 'Tokyo', color: 'from-orange-400/30 to-rose-400/20', active: false },
    { name: 'New York', color: 'from-violet/30 to-emerald-400/20', active: false },
    { name: 'Paris', color: 'from-violet/30 to-rose-300/20', active: false },
    { name: 'Krakow', color: 'from-amber/30 to-violet/20', active: false },
  ];

  const types = [
    { label: '6 Breathing Orbs', color: 'text-amber', bg: 'bg-amber/10', border: 'border-amber/20' },
    { label: '6 Nebula Drift', color: 'text-violet', bg: 'bg-violet/10', border: 'border-violet/20' },
    { label: '6 Quantum Flow', color: 'text-cyan', bg: 'bg-cyan/10', border: 'border-cyan/20' },
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
        <span className="text-[9px] font-semibold tracking-[0.2em] text-amber/60 uppercase">18 Visual Backgrounds</span>
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
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-cyan/[0.06] to-background p-6">
      <div className="mb-4 text-center">
        <span className="text-[9px] font-semibold tracking-wider text-cyan/60 uppercase">Your Progress</span>
      </div>
      {/* XP and level */}
      <div className="mb-4 flex items-center justify-between rounded-xl border border-glass-border/40 bg-white/[0.03] px-4 py-3">
        <div>
          <div className="text-[8px] text-foreground-muted/40">Level 12</div>
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
      <div className="text-[8px] font-medium text-foreground-muted/50 mb-2">This week</div>
      <div className="flex items-end justify-between gap-1.5 px-1">
        {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div className={cn(
              'w-full rounded-sm',
              i === 5 ? 'bg-gradient-to-t from-cyan to-violet' : 'bg-white/10',
            )} style={{ height: `${h * 0.6}px` }} />
            <span className="text-[7px] text-foreground-muted/30">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
          </div>
        ))}
      </div>
      {/* Streak */}
      <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-glass-border/30 bg-white/[0.02] py-2 text-[9px] text-foreground-muted/60">
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-amber" fill="currentColor"><path d="M8 1.5c-.3 0-.5.1-.7.3L4.5 6.5C3.5 8 3 9.2 3 10.3 3 12.9 5.2 15 8 15s5-2.1 5-4.7c0-1.1-.5-2.3-1.5-3.8L8.7 1.8C8.5 1.6 8.3 1.5 8 1.5z" /></svg>
        7-day streak
      </div>
    </div>
  );
}

function LanguagePairPreview() {
  const pairs = [
    { from: 'EN', to: 'ES', label: 'English → Spanish', tier: 'Free', tierCol: 'text-emerald-400 bg-emerald-500/10' },
    { from: 'EN', to: 'FR', label: 'English → French', tier: 'Free', tierCol: 'text-emerald-400 bg-emerald-500/10' },
    { from: 'EN', to: 'DE', label: 'English → German', tier: 'Free', tierCol: 'text-emerald-400 bg-emerald-500/10' },
    { from: 'EN', to: 'JA', label: 'English → Japanese', tier: 'Pro', tierCol: 'text-violet bg-violet/10' },
    { from: 'EN', to: 'UK', label: 'English → Ukrainian', tier: 'Pro', tierCol: 'text-violet bg-violet/10' },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-cyan/[0.04] to-amber/[0.03] p-6">
      <div className="mb-4 text-center">
        <span className="text-[9px] font-semibold tracking-wider text-cyan/60 uppercase">Language Pairs</span>
        <div className="mt-1 text-sm font-bold text-foreground">25+ Combinations</div>
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
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      highlight: '3 pairs',
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
      highlight: 'Offline',
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
      highlight: 'All Languages',
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
      highlight: 'Everything',
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
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 220, damping: 20 }}
            className={cn(
              'group relative flex flex-col items-center gap-1.5 rounded-2xl border p-2.5 sm:p-3 backdrop-blur-sm transition-all duration-500',
              t.ringColor,
              t.active
                ? 'bg-white/[0.04] shadow-xl shadow-cyan/5 ring-1 ring-cyan/15'
                : 'bg-white/[0.02]',
            )}
          >
            {/* Active shimmer */}
            {t.active && (
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
            {t.active && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 18 }}
                className="absolute -top-2 rounded-full bg-gradient-to-r from-cyan to-violet px-2.5 py-0.5 text-[7px] font-bold tracking-wider text-white uppercase shadow-lg shadow-cyan/20"
              >
                Popular
              </motion.div>
            )}

            {/* Animated ring indicator */}
            <div className="relative flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
              {/* Background glow */}
              <motion.div
                className={cn('absolute -inset-1 rounded-full blur-lg', t.glowColor)}
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: t.active ? 2.5 : 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              />
              {/* Ring track */}
              <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/[0.06]" />
                <motion.circle
                  cx="24" cy="24" r="20" fill="none" strokeWidth="3"
                  strokeLinecap="round"
                  className={cn('', t.textColor)}
                  style={{ filter: t.active ? 'drop-shadow(0 0 6px rgba(6,182,212,0.5))' : `drop-shadow(0 0 3px currentColor)` }}
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 20 * (1 - t.fillPercent / 100) }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 1.2, ease: 'easeOut' }}
                />
              </svg>
              {/* Icon */}
              <DiamondIcon size={14} className={cn(t.textColor, 'relative z-10 transition-colors')} aria-hidden />
            </div>

            {/* Name + price */}
            <div className="relative z-10 text-center">
              <div className={cn('text-[11px] font-bold tracking-wide sm:text-xs', t.active ? 'text-foreground' : 'text-foreground-muted/70')}>
                {t.name}
              </div>
              <div className="mt-0.5 text-[9px] font-medium text-foreground-muted/40">{t.price}</div>
            </div>

            {/* Feature highlight chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 250, damping: 22 }}
              className={cn(
                'rounded-full px-2.5 py-0.5 text-[7px] font-semibold',
                t.glowColor, t.textColor,
              )}
            >
              {t.highlight}
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
        <span className="text-[8px] font-medium text-amber/50">14-day free Royal trial</span>
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
const tocItems = [
  { id: 'flashcards', label: 'Immersive Flashcards', icon: <FlashcardIcon size={14} /> },
  { id: 'spaced-repetition', label: 'Smart Spaced Repetition', icon: <SpacedRepetitionIcon size={14} /> },
  { id: 'practice-modes', label: 'Practice Modes', icon: <PracticeModeIcon size={14} /> },
  { id: 'soundscapes', label: 'Soundscapes', icon: <SoundscapeIcon size={14} /> },
  { id: 'breathing-orbs', label: 'Breathing Orbs & Visuals', icon: <BreathingOrbIcon size={14} /> },
  { id: 'progress', label: 'Progress & Analytics', icon: <ProgressIcon size={14} /> },
  { id: 'languages', label: 'Language Pairs', icon: <LanguagePairIcon size={14} /> },
  { id: 'membership', label: 'Membership Tiers', icon: <MembershipIcon size={14} /> },
];

export function FeaturesContent() {
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
            title="Immersive Flashcards"
            tint="violet"
            description={[
              'LumenLingo\'s flashcard experience is unlike anything else. Each card is a glass-morphic surface that responds to touch with silky-smooth gestures — swipe right for correct, left for incorrect, and watch the card animate with satisfying physics-based feedback.',
              'Cards display source and target language text with pronunciation guides, and smart colour coding reinforces your memory through visual association. The frosted-glass design adapts to dark and light modes with cosmic and architectural aesthetics respectively.',
              'Every interaction is deliberate. The flip animation reveals the answer with a graceful 3D rotation. Colour-coded borders flash green for "Got It" and red for "Still Learning". Sound feedback complements each gesture, creating a multi-sensory learning loop that earns you 10 XP per correct answer.',
            ]}
            capabilities={[
              'Swipe gestures with physics-based spring animations',
              '3D card flip with glass-morphic design',
              'Instant colour-coded feedback on every answer',
              'Pronunciation guides for non-Latin scripts',
              'Multi-sensory feedback: visual + audio',
              'Customisable deck sizes per tier (50–unlimited)',
            ]}
            screenshot={<FlashcardPreview />}
          />

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 2. Smart Spaced Repetition ── */}
          <FeatureSection
            id="spaced-repetition"
            icon={icons.spacedRepetition}
            title="Smart Spaced Repetition"
            tint="cyan"
            reversed
            description={[
              'LumenLingo tracks your performance across every card and surfaces vocabulary you need to practise most. Words you struggle with appear more frequently; words you\'ve mastered recede — so you spend time where it matters.',
              'The system organises vocabulary into categories — Greetings, Food, Travel, Business, and more — tracking your mastered word count per category. Clear progress bars show exactly how much of each topic you\'ve conquered.',
              'Unlike rigid SRS systems, LumenLingo adapts in real time. Miss a card after a long break? It reappears sooner. Nail five in a row? The word joins your mastered set. The algorithm works with your brain, not against it.',
            ]}
            capabilities={[
              'Per-category mastery tracking',
              'Mastered word sets that grow with you',
              'Accuracy and streak statistics',
              'Real-time difficulty adjustment',
              'Visual mastery progress bars per topic',
              'XP system: 10 XP per Flash Card, 10 per Quiz, 15 per Word Builder',
            ]}
            screenshot={<SpacedRepetitionPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 3. Practice Modes ── */}
          <FeatureSection
            id="practice-modes"
            icon={icons.practice}
            title="3 Distinct Practice Modes"
            tint="violet"
            description={[
              'Variety is the engine of engagement. LumenLingo offers three fundamentally different practice modes — each targeting a different cognitive skill — so your sessions never feel repetitive.',
              'Flash Cards build recognition speed with satisfying 3D flip animations. Grammar Challenge tests your understanding with multiple-choice A/B/C/D questions and explanation panels that teach you why an answer is correct. Word Builder challenges you to construct words letter by letter, strengthening spelling and recall simultaneously.',
              'Each mode supports three difficulty levels — Beginner, Intermediate, and Advanced — progressively unlocked through your tier. Idle hints nudge you gently if you hesitate, keeping the learning flow unbroken.',
            ]}
            capabilities={[
              'Flash Cards: 3D flip with swipe gestures',
              'Grammar Challenge: A/B/C/D with explanations',
              'Word Builder: letter-by-letter construction, 15 XP',
              'Three difficulty levels per mode',
              'Progress tracked independently per mode',
              'Idle hints to keep you in flow',
            ]}
            screenshot={<PracticeModesPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 4. Soundscapes ── */}
          <FeatureSection
            id="soundscapes"
            icon={icons.soundscapes}
            title="12 Ambient Soundscapes"
            tint="violet"
            reversed
            description={[
              'Transform your study environment with 12 handcrafted ambient soundscapes spanning four categories: Cozy, Nature, Atmospheric, and Travel. Each soundscape is a carefully layered audio composition designed to enhance focus and reduce distractions.',
              'Study in a Parisian café with the gentle murmur of conversation and clinking cups. Or drift into deep focus with the cosmic hum of a space station. Every soundscape is mixed at optimal volume levels to sit beneath your learning without competing for attention.',
              'Research shows that consistent ambient audio creates environmental context cues that boost retention. When you study with the same soundscape, your brain associates the audio signature with the learning state, making recall easier.',
            ]}
            capabilities={[
              'Cozy: Paris Caf\u00e9, Rainy Window, Midnight Jazz Piano',
              'Nature: Mountain Campfire, Japanese Bamboo Forest, Amazon Rainforest',
              'Atmospheric: Observatory Night, Desert Night Sky, Deep Space Drift',
              'Travel: Dominican Beach, Tokyo Night Street, Venice Canal Morning',
              'Volume balancing with system audio',
              'Tier-gated access (0 free \u2192 1 Pro \u2192 8 Elite \u2192 12 Royal)',
            ]}
            screenshot={<SoundscapePreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 5. Breathing Orbs & Visuals ── */}
          <FeatureSection
            id="breathing-orbs"
            icon={icons.orbs}
            title="Breathing Orbs & Visual Backgrounds"
            tint="amber"
            description={[
              'LumenLingo is the only language app that treats visual wellness as a core feature. Breathing Orbs are calming, animated backgrounds that gently pulse in rhythm — creating a meditative atmosphere that reduces learning anxiety and sharpens focus.',
              'Choose from 6 city-inspired colour schemes, each evoking the palette of a real-world location. Beyond orbs, explore Quantum Flow scenes — dynamic particle systems that create mesmerising visual flow — and Nebula Drift presets with real-time cosmic animations rendered in Metal.',
              'These aren\'t just eye candy. Studies in environmental psychology show that calming visual stimuli reduce cortisol levels and improve working memory. Every visual background in LumenLingo is designed with this research in mind.',
            ]}
            capabilities={[
              '6 city-inspired Breathing Orb colour schemes',
              '6 Quantum Flow particle scenes (Elite+)',
              '6 Nebula Drift cosmic presets (Elite+)',
              'Real-time Metal shader rendering',
              'Respects reduced-motion preferences',
              'Tier-gated access with progressive unlocking',
            ]}
            screenshot={<BreathingOrbPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 6. Progress & Analytics ── */}
          <FeatureSection
            id="progress"
            icon={icons.progress}
            title="Progress & Analytics"
            tint="cyan"
            reversed
            description={[
              'LumenLingo\'s progress system turns learning into a visible journey. An XP system rewards consistent practice — earn points for every correct answer, streak bonuses for consecutive days, and multipliers based on your membership tier.',
              'Track your per-game statistics across all three practice modes: accuracy rates, average response times, most-practised categories, and streaks. Beautiful visualisations make your data easy to understand at a glance.',
              'Daily goals keep you accountable. Set a target practice time or card count, and watch your daily ring fill as you make progress. Monthly reports (Elite and Royal tiers) summarise your growth with detailed breakdowns by language pair and difficulty level.',
            ]}
            capabilities={[
              'XP system with tier-based multipliers (1×–2×)',
              'Streak tracking with daily goals',
              'Per-mode accuracy and speed analytics',
              'Category mastery breakdowns',
              'Beautiful progress visualisations',
              'Monthly reports (Elite/Royal)',
            ]}
            screenshot={<ProgressPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 7. Language Pairs ── */}
          <FeatureSection
            id="languages"
            icon={icons.languages}
            title="25 Language Pairs"
            tint="cyan"
            description={[
              'LumenLingo supports 9 languages \u2014 English, Spanish, French, German, Japanese, Chinese, Arabic, Polish, and Ukrainian \u2014 in 25 bidirectional pair combinations. Learn Spanish from English, or flip it around and learn English from Spanish.',
              'Each language pair comes with a curated vocabulary deck covering essential categories: greetings, food, travel, business, emotions, and more. Non-Latin scripts include romanisation and pronunciation guides to lower the barrier to entry.',
              'Language pairs are tier-gated: Free users get 3 core pairs (English\u2192Spanish, French, German), Pro unlocks 7 pairs including Japanese and Arabic, and Elite/Royal unlock the full catalogue of 25 pairs.',
            ]}
            capabilities={[
              '9 languages: ES, FR, DE, JA, ZH, AR, PL, UK, EN',
              '25 bidirectional pair combinations',
              'Curated vocabulary per category',
              'Romanisation for non-Latin scripts',
              'Tier-gated: 3 Free \u2192 7 Pro \u2192 25 Elite/Royal',
              'Bidirectional learning support',
            ]}
            screenshot={<LanguagePairPreview />}
          />

          <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

          {/* ── 8. Membership Tiers ── */}
          <FeatureSection
            id="membership"
            icon={icons.tiers}
            title="Membership Tiers"
            tint="amber"
            reversed
            description={[
              'LumenLingo offers five membership tiers — Free, Trial, Pro, Elite, and Royal — each designed for a different stage of your learning journey. Start with a generous free tier and upgrade as your ambitions grow.',
              'Every tier unlocks progressively more language pairs, soundscapes, visual backgrounds, and advanced features. Pro adds unlimited practice time and offline mode. Elite opens all language pairs, advanced difficulty, and Quantum Flow scenes. Royal gives you everything — including all Nebula Drift presets, unlimited decks, and a 2× XP multiplier.',
              'All tiers are managed through the App Store with simple monthly billing. Try Royal-level access free for 14 days to experience everything LumenLingo has to offer.',
            ]}
            capabilities={[
              'Free tier with 3 language pairs and 50-card decks',
              'Pro (£9.99/mo): unlimited practice + offline mode',
              'Elite (£19.99/mo): all languages + Quantum Flow',
              'Royal (£99.99/mo): everything + 2× XP + Nebula Drift',
              '14-day free Royal trial',
              'Simple App Store subscription management',
            ]}
            screenshot={<MembershipPreview />}
          />
        </div>
      </div>
    </Container>
  );
}
