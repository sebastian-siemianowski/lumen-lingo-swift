'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { spring } from '@/lib/motion';
import { trackEvent } from '@/lib/analytics';
import { getAppStoreUrl } from '@/lib/appStoreUrl';
import { SparkleIcon, DiamondIcon, MembershipIcon } from '@/components/icons';

/* ─── Types ─── */
export type Tier = 'free' | 'pro' | 'elite' | 'royal';

interface PricingCardProps {
  tier: Tier;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  delay?: number;
}

/* ─── Tier-specific styling ─── */
const tierStyles: Record<
  Tier,
  {
    border: string;
    glow: string;
    badge: string;
    cta: string;
    accent: string;
    tint: string;
    shimmer?: boolean;
    shimmerSpeed?: string;
    icon?: React.ReactNode;
  }
> = {
  free: {
    border: 'border-white/10',
    glow: '',
    badge: 'bg-white/5 text-white/50',
    cta: 'border border-white/15 bg-transparent hover:bg-white/5 text-white',
    accent: 'text-foreground',
    tint: '',
    icon: <SparkleIcon size={20} className="text-foreground-muted" />,
  },
  pro: {
    border: 'border-violet/20',
    glow: 'shadow-[0_4px_20px_rgba(139,92,246,0.08)]',
    badge: 'bg-violet/10 text-violet',
    cta: 'bg-violet hover:bg-violet/90 text-white',
    accent: 'text-violet',
    tint: 'bg-violet/5',
    icon: <DiamondIcon size={20} className="text-violet" />,
  },
  elite: {
    border: 'border-cyan/30',
    glow: 'shadow-[0_0_60px_-8px_rgba(6,182,212,0.35)]',
    badge: 'bg-cyan/10 text-cyan',
    cta: 'bg-gradient-to-r from-cyan to-violet hover:opacity-90 text-white',
    accent: 'text-cyan',
    tint: 'bg-cyan/5',
    shimmer: true,
    shimmerSpeed: 'animate-[spin_4s_linear_infinite]',
    icon: null,
  },
  royal: {
    border: 'border-amber/25',
    glow: 'shadow-[0_4px_30px_rgba(245,158,11,0.1)]',
    badge: 'bg-amber/10 text-amber',
    cta: 'bg-gradient-to-r from-amber to-amber/70 hover:opacity-90 text-black font-semibold',
    accent: 'text-amber',
    tint: 'bg-amber/5',
    shimmer: true,
    shimmerSpeed: 'animate-[spin_6s_linear_infinite]',
    icon: <MembershipIcon size={24} className="text-amber" />,
  },
};

const checkIcons: Record<Tier, React.ReactNode> = {
  free: (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-foreground-muted/40">
      <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pro: (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-violet">
      <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  elite: (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-cyan">
      <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  royal: (
    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 shrink-0 text-amber">
      <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function PricingCard({
  tier,
  name,
  price,
  period = '/month',
  description,
  features,
  cta,
  popular,
  delay = 0,
}: PricingCardProps) {
  const style = tierStyles[tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ ...spring.smooth, delay }}
      whileHover={{
        y: tier === 'elite' ? -14 : -6,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className={cn(
        'relative flex flex-col rounded-2xl border backdrop-blur-sm',
        'bg-surface-card/60 p-6 sm:p-8',
        style.border,
        style.glow,
        popular && '-translate-y-2 lg:z-10',
      )}
    >
      {/* Tier tint overlay */}
      {style.tint && (
        <div
          className={cn('absolute inset-0 rounded-2xl', style.tint)}
          aria-hidden
        />
      )}

      {/* Shimmer overlay for Elite/Royal */}
      {style.shimmer && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div
            className={cn(
              'absolute -top-1/2 -left-1/2 h-[200%] w-[200%] opacity-[0.04]',
              style.shimmerSpeed,
              tier === 'elite'
                ? 'bg-[conic-gradient(from_0deg,transparent,#06b6d4,transparent,#8b5cf6,transparent)]'
                : 'bg-[conic-gradient(from_0deg,transparent,#f59e0b,transparent,#f59e0b,transparent)]',
            )}
          />
        </div>
      )}

      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full bg-cyan px-4 py-1 text-xs font-semibold text-white shadow-lg"
          >
            Most Popular
          </motion.div>
        </div>
      )}

      {/* Tier icon */}
      {style.icon && (
        <div className="relative mb-3">{style.icon}</div>
      )}

      {/* Tier name */}
      <div className={cn('mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider', style.badge)}>
        {name}
      </div>

      {/* Price */}
      <div className="mb-2 flex items-baseline gap-1">
        <span className={cn('text-4xl font-bold font-display sm:text-5xl', style.accent)}>
          {price}
        </span>
        {period && tier !== 'free' && (
          <span className="text-sm text-white/40">{period}</span>
        )}
      </div>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-white/50">{description}</p>

      {/* Divider */}
      <div className="mb-6 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

      {/* Features */}
      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            {checkIcons[tier]}
            <span className="text-sm leading-relaxed text-white/70">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.a
        href={getAppStoreUrl(`pricing_${tier}`)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackEvent('app_store_click', { location: `pricing_${tier}` });
          trackEvent('pricing_cta_click', { tier });
        }}
        className={cn(
          'block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-colors',
          style.cta,
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {cta}
      </motion.a>
    </motion.div>
  );
}
