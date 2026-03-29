import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'tier' | 'status' | 'tag';
type TierColour = 'free' | 'pro' | 'elite' | 'royal';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  tier?: TierColour;
  children: React.ReactNode;
}

const tierColours: Record<TierColour, string> = {
  free: 'bg-foreground-muted/20 text-foreground-secondary border-foreground-muted/30',
  pro: 'bg-violet-muted text-violet border-violet/30',
  elite: 'bg-cyan-muted text-cyan border-cyan/30',
  royal: 'bg-amber-muted text-amber border-amber/30',
};

const variantBase: Record<BadgeVariant, string> = {
  tier: 'font-semibold uppercase tracking-wider text-xs',
  status: 'font-medium text-xs',
  tag: 'font-normal text-sm',
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'tag', tier = 'free', className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-[--radius-pill] border px-3 py-1',
          variantBase[variant],
          variant === 'tier' ? tierColours[tier] : 'bg-glass border-glass-border text-foreground-secondary',
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';

export { Badge, type BadgeProps, type TierColour };
