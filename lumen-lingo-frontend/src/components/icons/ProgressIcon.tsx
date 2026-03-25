import type { IconProps } from './types';

/** Ascending bar chart with subtle upward arrow — replaces 📊 and inline bar-chart SVGs. */
export function ProgressIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Bars ascending left to right */}
      <path d="M4 20v-4" />
      <path d="M8 20v-7" />
      <path d="M12 20v-10" />
      <path d="M16 20v-13" />
      <path d="M20 20v-16" />
      {/* Upward trend arrow */}
      <path d="M4 14l16-10" opacity={0.3} strokeWidth={1} />
      <path d="M17 4h3v3" opacity={0.4} strokeWidth={1.25} />
    </svg>
  );
}
