import type { IconProps } from './types';

/** Concentric circles with gentle pulse feel — replaces 🔮 and inline animated circles. */
export function BreathingOrbIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Outer ring */}
      <circle cx="12" cy="12" r="10" opacity={0.25} />
      {/* Middle ring */}
      <circle cx="12" cy="12" r="7" opacity={0.5} />
      {/* Inner ring */}
      <circle cx="12" cy="12" r="4" />
      {/* Center dot */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity={0.4} />
    </svg>
  );
}
