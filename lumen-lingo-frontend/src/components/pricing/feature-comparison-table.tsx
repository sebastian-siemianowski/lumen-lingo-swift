'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';

/* ─── Data types ─── */
type CellValue = boolean | string;

interface Row {
  feature: string;
  free: CellValue;
  pro: CellValue;
  elite: CellValue;
  royal: CellValue;
}

const rows: Row[] = [
  {
    feature: 'Language Pairs',
    free: '3',
    pro: '7',
    elite: '25+',
    royal: '25+',
  },
  {
    feature: 'Practice Modes',
    free: '3 (Beginner)',
    pro: '3 (2 levels)',
    elite: '3 (All levels)',
    royal: '3 (All levels)',
  },
  {
    feature: 'Daily Practice Limit',
    free: '30 min',
    pro: 'Unlimited',
    elite: 'Unlimited',
    royal: 'Unlimited',
  },
  {
    feature: 'Flashcard Deck Size',
    free: '50 cards',
    pro: '75 cards',
    elite: '100 cards',
    royal: 'Unlimited',
  },
  {
    feature: 'Breathing Orbs',
    free: false,
    pro: true,
    elite: true,
    royal: true,
  },
  {
    feature: 'Soundscapes',
    free: false,
    pro: '1',
    elite: '8',
    royal: 'All 12',
  },
  {
    feature: 'Quantum Flow Backgrounds',
    free: false,
    pro: false,
    elite: '4 scenes',
    royal: 'All 6',
  },
  {
    feature: 'Nebula Drift Backgrounds',
    free: '1',
    pro: '1',
    elite: '4 presets',
    royal: 'All 6',
  },
  {
    feature: 'Offline Mode',
    free: false,
    pro: true,
    elite: true,
    royal: true,
  },
  {
    feature: 'XP Multiplier',
    free: '1×',
    pro: '1.25×',
    elite: '1.5×',
    royal: '2×',
  },
  {
    feature: 'Advanced Analytics',
    free: false,
    pro: false,
    elite: true,
    royal: true,
  },
  {
    feature: 'Data Export',
    free: false,
    pro: false,
    elite: true,
    royal: true,
  },
  {
    feature: 'Shareable Result Cards',
    free: false,
    pro: false,
    elite: false,
    royal: true,
  },
  {
    feature: 'Monthly Reports',
    free: false,
    pro: false,
    elite: false,
    royal: true,
  },
  {
    feature: 'Personalised Tips',
    free: false,
    pro: false,
    elite: false,
    royal: true,
  },
];

const tierCols = [
  { key: 'free' as const, label: 'Free', accent: 'text-white/60' },
  { key: 'pro' as const, label: 'Pro', accent: 'text-violet' },
  { key: 'elite' as const, label: 'Elite', accent: 'text-cyan' },
  { key: 'royal' as const, label: 'Royal', accent: 'text-amber' },
];

function CellContent({ value, accent }: { value: CellValue; accent: string }) {
  if (value === true) {
    return (
      <svg viewBox="0 0 16 16" fill="none" className={cn('mx-auto h-5 w-5', accent)}>
        <path
          d="M4 8l3 3 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (value === false) {
    return <span className="text-white/20">—</span>;
  }
  return <span className={cn('text-sm font-medium', accent)}>{value}</span>;
}

export function FeatureComparisonTable() {
  return (
    <Section className="pb-20 sm:pb-28">
      <Container>
        <FadeIn className="mb-12 text-center">
          <Heading as="h2" gradient className="mb-4">
            Compare All Features
          </Heading>
          <Text colour="secondary" className="mx-auto max-w-xl">
            Every tier builds on the one before it. See exactly what you get at
            each level.
          </Text>
        </FadeIn>

        <FadeIn delay={0.15}>
          <motion.div
            className="overflow-x-auto rounded-xl border border-glass-border bg-surface-card/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <table className="w-full min-w-[640px] text-start">
              {/* Header */}
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="px-4 py-4 text-sm font-medium text-white/40 sm:px-6">
                    Feature
                  </th>
                  {tierCols.map((col) => (
                    <th
                      key={col.key}
                      className={cn(
                        'px-4 py-4 text-center text-sm font-semibold sm:px-6',
                        col.accent,
                      )}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      'transition-colors hover:bg-white/[0.02]',
                      i < rows.length - 1 && 'border-b border-glass-border/50',
                    )}
                  >
                    <td className="px-4 py-3.5 text-sm text-white/70 sm:px-6">
                      {row.feature}
                    </td>
                    {tierCols.map((col) => (
                      <td key={col.key} className="px-4 py-3.5 text-center sm:px-6">
                        <CellContent value={row[col.key]} accent={col.accent} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </FadeIn>
      </Container>
    </Section>
  );
}
