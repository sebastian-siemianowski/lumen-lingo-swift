import type { IconProps } from './types';

/** Grid of four tiles with one highlighted — replaces 🎯 and inline grid SVGs. */
export function PracticeModeIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Top-left tile (highlighted) */}
      <rect x="3" y="3" width="8" height="8" rx="1.5" fill="currentColor" opacity={0.15} />
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      {/* Top-right tile */}
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      {/* Bottom-left tile */}
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      {/* Bottom-right tile */}
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
      {/* Check mark in highlighted tile */}
      <path d="M5.5 7.5l1.5 1.5 3-3" strokeWidth={1.25} />
    </svg>
  );
}
