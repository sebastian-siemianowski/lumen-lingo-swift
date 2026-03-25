import type { IconProps } from './types';

/** Stylised wave crest — replaces 🌊 in soundscape presets. */
export function OceanWavesIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Top wave */}
      <path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      {/* Middle wave */}
      <path d="M2 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0" opacity={0.6} />
      {/* Bottom wave */}
      <path d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" opacity={0.3} />
    </svg>
  );
}
