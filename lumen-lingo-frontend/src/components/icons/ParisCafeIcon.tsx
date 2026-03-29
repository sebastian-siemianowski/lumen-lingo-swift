import type { IconProps } from './types';

/** Minimal Eiffel Tower outline — replaces 🇫🇷 for Paris Café ambiance. */
export function ParisCafeIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Tower silhouette */}
      <path d="M12 2L8 10h8L12 2z" opacity={0.3} fill="currentColor" />
      <path d="M12 2L8 10M12 2l4 8" />
      <path d="M8 10L5 21M16 10l3 11" />
      {/* Cross beams */}
      <path d="M8 10h8" />
      <path d="M6.5 15.5h11" opacity={0.5} />
      {/* Base */}
      <path d="M4 21h16" />
      {/* Antenna */}
      <path d="M12 2V0.5" opacity={0.4} />
    </svg>
  );
}
