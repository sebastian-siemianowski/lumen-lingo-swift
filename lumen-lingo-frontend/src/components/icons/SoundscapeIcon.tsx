import type { IconProps } from './types';

/** Layered sound waves radiating from a centre point — replaces 🎵, 🎧, and inline wave SVGs. */
export function SoundscapeIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Centre point */}
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity={0.3} />
      <circle cx="12" cy="12" r="2" />
      {/* Inner wave */}
      <path d="M8 8.5a5.5 5.5 0 0 0 0 7" />
      <path d="M16 8.5a5.5 5.5 0 0 1 0 7" />
      {/* Outer wave */}
      <path d="M5.5 5.5a10 10 0 0 0 0 13" opacity={0.5} />
      <path d="M18.5 5.5a10 10 0 0 1 0 13" opacity={0.5} />
    </svg>
  );
}
