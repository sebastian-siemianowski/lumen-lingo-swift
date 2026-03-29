import type { IconProps } from './types';

/** Faceted gem for premium contexts — replaces 💎. */
export function DiamondIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      {...props}
    >
      {/* Top facet band */}
      <path d="M4.5 9h15L12 21 4.5 9z" />
      <path d="M4.5 9L8 4h8l3.5 5" />
      {/* Inner facet lines */}
      <path d="M9 9l3 12 3-12" opacity={0.35} />
      <path d="M8 4l1 5M16 4l-1 5" opacity={0.35} />
      {/* Crown line */}
      <path d="M4.5 9h15" />
      {/* Sparkle accent */}
      <circle cx="12" cy="7" r="0.5" fill="currentColor" opacity={0.4} />
    </svg>
  );
}
