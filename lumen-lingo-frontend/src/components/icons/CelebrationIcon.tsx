import type { IconProps } from './types';

/** Party popper / confetti burst — replaces 🎉 for high-score celebrations. */
export function CelebrationIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Popper cone */}
      <path d="M4 21L10 10l4 4L4 21z" fill="currentColor" opacity={0.1} />
      <path d="M4 21L10 10l4 4L4 21z" />
      {/* Burst lines */}
      <path d="M14 10l2-4" />
      <path d="M16 14l4-1" opacity={0.7} />
      <path d="M10 6l-1-4" opacity={0.5} />
      <path d="M17 8l3-2" opacity={0.6} />
      {/* Confetti dots */}
      <circle cx="18" cy="4" r="1" fill="currentColor" opacity={0.5} />
      <circle cx="20" cy="10" r="0.75" fill="currentColor" opacity={0.4} />
      <circle cx="8" cy="3" r="0.75" fill="currentColor" opacity={0.4} />
      <circle cx="15" cy="5" r="0.5" fill="currentColor" opacity={0.3} />
    </svg>
  );
}
