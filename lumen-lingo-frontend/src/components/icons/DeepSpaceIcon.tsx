import type { IconProps } from './types';

/** Constellation / nebula dot-pattern — replaces 🌌 in soundscape presets. */
export function DeepSpaceIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Central star */}
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity={0.6} />
      {/* Orbital ring */}
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-20 12 12)" opacity={0.3} />
      {/* Constellation dots */}
      <circle cx="5" cy="6" r="1" fill="currentColor" opacity={0.5} />
      <circle cx="19" cy="8" r="0.75" fill="currentColor" opacity={0.35} />
      <circle cx="7" cy="18" r="0.75" fill="currentColor" opacity={0.35} />
      <circle cx="18" cy="17" r="1" fill="currentColor" opacity={0.5} />
      {/* Connecting lines */}
      <path d="M5 6l7 6M19 8l-7 4M7 18l5-6M18 17l-6-5" opacity={0.15} strokeWidth={0.75} />
    </svg>
  );
}
