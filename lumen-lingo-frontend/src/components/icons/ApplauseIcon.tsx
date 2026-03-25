import type { IconProps } from './types';

/** Trophy / good-score symbol — replaces 👏 for mid-range celebrations. */
export function ApplauseIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Trophy cup */}
      <path d="M8 3h8v5a4 4 0 0 1-8 0V3z" />
      {/* Left handle */}
      <path d="M8 5H6a2 2 0 0 0 0 4h2" opacity={0.6} />
      {/* Right handle */}
      <path d="M16 5h2a2 2 0 0 1 0 4h-2" opacity={0.6} />
      {/* Stem */}
      <path d="M12 12v3" />
      {/* Base */}
      <path d="M8 18h8" />
      <path d="M9 15h6v3H9z" fill="currentColor" opacity={0.08} />
      <rect x="9" y="15" width="6" height="3" rx="0.5" />
      {/* Star accent */}
      <path d="M12 1l0.5 1.5L12 1z" opacity={0.3} />
    </svg>
  );
}
