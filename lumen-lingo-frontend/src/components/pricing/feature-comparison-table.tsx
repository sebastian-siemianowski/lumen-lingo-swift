'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn, StaggerChildren } from '@/components/motion';
import { spring, stagger, fadeUp } from '@/lib/motion';

/* ─── Data ─── */
type CellValue = boolean | string;

interface Row {
  feature: string;
  free: CellValue;
  pro: CellValue;
  elite: CellValue;
  royal: CellValue;
}

interface Category {
  label: string;
  icon: React.ReactNode;
  rows: Row[];
}

/* ─── Category SVG icons ─── */
const BookIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-violet" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 4.5A2.5 2.5 0 0 1 5.5 2H10v16H5.5A2.5 2.5 0 0 1 3 15.5v-11Z" />
    <path d="M10 2h4.5A2.5 2.5 0 0 1 17 4.5v11a2.5 2.5 0 0 1-2.5 2.5H10V2Z" />
  </svg>
);
const SparklesIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-cyan" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2l1.5 4.5L16 8l-4.5 1.5L10 14l-1.5-4.5L4 8l4.5-1.5L10 2Z" />
    <path d="M15 12l.75 2.25L18 15l-2.25.75L15 18l-.75-2.25L12 15l2.25-.75L15 12Z" />
  </svg>
);
const BoltIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-amber" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 2L4 11h5l-1 7 7-9h-5l1-7Z" />
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-cyan" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17V10h3v7H3ZM8.5 17V6h3v11h-3ZM14 17V2h3v15h-3Z" />
  </svg>
);
const CrownIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-amber" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14l1.5-8L8 10l2-7 2 7 3.5-4L17 14H3Z" />
    <path d="M3 14h14v2H3v-2Z" />
  </svg>
);

const categories: Category[] = [
  {
    label: 'Learning Features',
    icon: <BookIcon />,
    rows: [
      { feature: 'Language Pairs', free: '3', pro: '7', elite: '25+', royal: '25+' },
      { feature: 'Practice Modes', free: '3 (Beginner)', pro: '3 (2 levels)', elite: '3 (All levels)', royal: '3 (All levels)' },
      { feature: 'Daily Practice Limit', free: '30 min', pro: 'Unlimited', elite: 'Unlimited', royal: 'Unlimited' },
      { feature: 'Flashcard Deck Size', free: '50 cards', pro: '75 cards', elite: '100 cards', royal: 'Unlimited' },
    ],
  },
  {
    label: 'Immersive Experience',
    icon: <SparklesIcon />,
    rows: [
      { feature: 'Breathing Orbs', free: false, pro: true, elite: true, royal: true },
      { feature: 'Soundscapes', free: '—', pro: '1', elite: '8', royal: 'All 12' },
      { feature: 'Quantum Flow Backgrounds', free: '—', pro: '—', elite: '4 scenes', royal: 'All 6' },
      { feature: 'Nebula Drift Backgrounds', free: '1', pro: '1', elite: '4 presets', royal: 'All 6' },
    ],
  },
  {
    label: 'Productivity',
    icon: <BoltIcon />,
    rows: [
      { feature: 'Offline Mode', free: false, pro: true, elite: true, royal: true },
      { feature: 'XP Multiplier', free: '1×', pro: '1.25×', elite: '1.5×', royal: '2×' },
    ],
  },
  {
    label: 'Analytics & Insights',
    icon: <ChartIcon />,
    rows: [
      { feature: 'Advanced Analytics', free: false, pro: false, elite: true, royal: true },
      { feature: 'Data Export', free: false, pro: false, elite: true, royal: true },
    ],
  },
  {
    label: 'Royal Exclusive',
    icon: <CrownIcon />,
    rows: [
      { feature: 'Shareable Result Cards', free: false, pro: false, elite: false, royal: true },
      { feature: 'Monthly Reports', free: false, pro: false, elite: false, royal: true },
      { feature: 'Personalised Tips', free: false, pro: false, elite: false, royal: true },
    ],
  },
];

/* ─── Tier styling ─── */
interface TierCol {
  key: 'free' | 'pro' | 'elite' | 'royal';
  label: string;
  price: string;
  accent: string;
  dot: string;
  colBg: string;
  colBgHover: string;
  glowColor: string;
  badge?: string;
}

const tierCols: TierCol[] = [
  {
    key: 'free',
    label: 'Free',
    price: '£0',
    accent: 'text-foreground-muted',
    dot: 'bg-foreground-muted/50',
    colBg: '',
    colBgHover: 'group-hover/row:bg-white/[0.015]',
    glowColor: '',
  },
  {
    key: 'pro',
    label: 'Pro',
    price: '£9.99/mo',
    accent: 'text-violet',
    dot: 'bg-violet',
    colBg: 'bg-violet/[0.02]',
    colBgHover: 'group-hover/row:bg-violet/[0.05]',
    glowColor: 'violet',
  },
  {
    key: 'elite',
    label: 'Elite',
    price: '£19.99/mo',
    accent: 'text-cyan',
    dot: 'bg-cyan',
    colBg: 'bg-cyan/[0.035]',
    colBgHover: 'group-hover/row:bg-cyan/[0.06]',
    glowColor: 'cyan',
    badge: 'Most Popular',
  },
  {
    key: 'royal',
    label: 'Royal',
    price: '£99.99/mo',
    accent: 'text-amber',
    dot: 'bg-amber',
    colBg: 'bg-amber/[0.02]',
    colBgHover: 'group-hover/row:bg-amber/[0.05]',
    glowColor: 'amber',
  },
];

/* ─── Cell renderer ─── */

function CellContent({ value, accent, tier }: { value: CellValue; accent: string; tier: string }) {
  if (value === true) {
    return (
      <motion.span
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-full',
          tier === 'elite'
            ? 'bg-cyan/15 text-cyan'
            : tier === 'royal'
              ? 'bg-amber/15 text-amber'
              : tier === 'pro'
                ? 'bg-violet/15 text-violet'
                : 'bg-white/10 text-foreground-muted',
        )}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
          <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.span>
    );
  }
  if (value === false || value === '—') {
    return <span className="text-foreground-muted/20 select-none">—</span>;
  }
  if (value === 'Unlimited') {
    return (
      <span className={cn('font-display text-base font-bold tracking-tight', accent)}>
        ∞
      </span>
    );
  }
  const str = String(value);
  const numMatch = str.match(/^((?:All\s+)?[\d.]+\S*)\s*(.*)/);
  if (numMatch) {
    const [, num, qualifier] = numMatch;
    return (
      <span className={cn('text-[13px]', accent)}>
        <span className="font-display font-bold">{num}</span>
        {qualifier && <span className="ml-0.5 font-normal opacity-50">{qualifier}</span>}
      </span>
    );
  }
  return <span className={cn('text-[13px] font-semibold', accent)}>{value}</span>;
}

/* ─── Sticky left col + shadow ─── */
const stickyLeft =
  'sticky left-0 z-[2] after:pointer-events-none after:absolute after:inset-y-0 after:-right-4 after:w-4 after:bg-gradient-to-r after:from-black/10 after:to-transparent';

export function FeatureComparisonTable() {
  let globalRowIdx = 0;

  return (
    <Section className="pb-20 sm:pb-28">
      <Container>
        <FadeIn className="mb-14 text-center">
          <Heading as="h2" gradient className="mb-4">
            Compare All Features
          </Heading>
          <Text colour="secondary" className="mx-auto max-w-lg text-[15px]">
            Every tier builds on the one before it. See exactly what you get at each level.
          </Text>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-px rounded-[18px] bg-gradient-to-b from-cyan/20 via-violet/10 to-amber/10 opacity-60 blur-sm" aria-hidden />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-2xl border border-glass-border/80 bg-surface-card/70 shadow-2xl shadow-black/10 backdrop-blur-xl">
              {/* Top shimmer line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" aria-hidden />

              {/* Scroll container */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[740px] border-collapse text-start" role="table">
                  {/* ── Header ── */}
                  <thead>
                    <tr role="row">
                      {/* Corner cell */}
                      <th
                        scope="col"
                        role="columnheader"
                        className={cn(
                          stickyLeft,
                          'w-[210px] min-w-[180px] border-b border-glass-border/60 bg-surface-card/95 px-5 py-6 text-start backdrop-blur-xl sm:w-[250px] sm:px-7',
                        )}
                      >
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-foreground-muted/60">
                          Feature
                        </span>
                      </th>

                      {/* Tier headers */}
                      {tierCols.map((col, i) => (
                        <th
                          key={col.key}
                          scope="col"
                          role="columnheader"
                          className={cn(
                            'relative border-b border-glass-border/60 px-3 py-6 text-center sm:px-5',
                            col.colBg,
                            i > 0 && 'border-l border-l-white/[0.04]',
                          )}
                        >
                          <motion.div
                            className="flex flex-col items-center gap-1.5"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...spring.gentle, delay: i * 0.06 }}
                          >
                            {/* Popular badge */}
                            {col.badge && (
                              <motion.span
                                animate={{ scale: [1, 1.04, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="mb-1 inline-block rounded-full bg-gradient-to-r from-cyan to-cyan/80 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan/20"
                              >
                                {col.badge}
                              </motion.span>
                            )}
                            {/* Tier dot + name */}
                            <span className={cn('flex items-center gap-2 text-sm font-bold tracking-wide', col.accent)}>
                              <span className={cn(
                                'inline-block h-2.5 w-2.5 rounded-full shadow-sm',
                                col.dot,
                                col.glowColor === 'cyan' && 'shadow-cyan/40',
                                col.glowColor === 'violet' && 'shadow-violet/40',
                                col.glowColor === 'amber' && 'shadow-amber/40',
                              )} />
                              {col.label}
                            </span>
                            {/* Price */}
                            <span className="text-xs text-foreground-muted/50">
                              {col.price}
                            </span>
                          </motion.div>

                          {/* Column top glow for popular tier */}
                          {col.badge && (
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan/[0.06] to-transparent" aria-hidden />
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {categories.map((cat, catIdx) => (
                      <Fragment key={cat.label}>
                        {/* ── Category header ── */}
                        <tr role="row">
                          <td
                            colSpan={5}
                            className={cn(
                              'px-5 pb-2.5 pt-5 sm:px-7',
                              catIdx > 0 && 'border-t border-t-glass-border/40',
                            )}
                          >
                            <span className="flex items-center gap-3">
                              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.06]" aria-hidden>
                                {cat.icon}
                              </span>
                              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground-muted/70">
                                {cat.label}
                              </span>
                              <span className="h-px flex-1 bg-gradient-to-r from-glass-border/50 to-transparent" aria-hidden />
                            </span>
                          </td>
                        </tr>

                        {/* ── Feature rows ── */}
                        {cat.rows.map((row) => {
                          const idx = globalRowIdx++;

                          return (
                            <motion.tr
                              key={row.feature}
                              role="row"
                              className={cn(
                                'group/row transition-all duration-200',
                                idx % 2 === 1 && 'bg-white/[0.015]',
                              )}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true, margin: '-20px' }}
                              transition={{ duration: 0.3, delay: idx * 0.02 }}
                            >
                              {/* Feature name */}
                              <td
                                role="cell"
                                className={cn(
                                  stickyLeft,
                                  'px-5 py-3.5 text-[13px] font-medium leading-snug text-foreground-secondary/80 backdrop-blur-xl transition-colors duration-200 group-hover/row:text-foreground sm:px-7',
                                  idx % 2 === 1
                                    ? 'bg-surface-card'
                                    : 'bg-surface-card/95',
                                )}
                              >
                                {row.feature}
                              </td>

                              {/* Value cells */}
                              {tierCols.map((col, colIdx) => (
                                <td
                                  key={col.key}
                                  role="cell"
                                  className={cn(
                                    'px-3 py-3.5 text-center transition-all duration-200 sm:px-5',
                                    colIdx > 0 && 'border-l border-l-white/[0.03]',
                                    col.colBg,
                                    col.colBgHover,
                                  )}
                                >
                                  <CellContent value={row[col.key]} accent={col.accent} tier={col.key} />
                                </td>
                              ))}
                            </motion.tr>
                          );
                        })}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Bottom shimmer line */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent" aria-hidden />
            </div>

            {/* Mobile scroll hint */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-12 rounded-r-2xl bg-gradient-to-l from-[var(--color-background)] via-[var(--color-background)]/60 to-transparent sm:hidden"
              aria-hidden
            />
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
