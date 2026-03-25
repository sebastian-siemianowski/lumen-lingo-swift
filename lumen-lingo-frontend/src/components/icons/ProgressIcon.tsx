import type { IconProps } from './types';

/** Ascending gradient bar chart with a flame accent — replaces 📊 and inline bar-chart SVGs. */
export function ProgressIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      {...props}
    >
      <defs>
        <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* Rounded pill bars ascending left to right */}
      <rect x="2.5" y="16" width="2.5" height="4" rx="1.25" fill="url(#barGrad)" />
      <rect x="6.75" y="13" width="2.5" height="7" rx="1.25" fill="url(#barGrad)" />
      <rect x="11" y="10" width="2.5" height="10" rx="1.25" fill="url(#barGrad)" />
      <rect x="15.25" y="7" width="2.5" height="13" rx="1.25" fill="url(#barGrad)" />
      <rect x="19.5" y="4" width="2.5" height="16" rx="1.25" fill="url(#barGrad)" />
      {/* Spark / flame accent on tallest bar */}
      <path d="M20.75 3.5c0-1.2.5-2 .5-2s.5.8.5 2a.5.5 0 0 1-1 0z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}
