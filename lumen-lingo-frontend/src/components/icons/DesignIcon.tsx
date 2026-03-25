import type { IconProps } from './types';

/** Pen-tool / bezier-curve for design contexts — replaces 🎨. */
export function DesignIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Pen tip pointing down-right */}
      <path d="M12 20l-1.5-1.5L17 12l2 2-6.5 6.5z" fill="currentColor" opacity={0.1} />
      <path d="M17 12l2 2-5.5 5.5L12 18" />
      {/* Pen body */}
      <path d="M17 12L9.5 4.5" />
      {/* Bezier curve */}
      <path d="M4 18C4 12 8 8 14 4" opacity={0.4} strokeDasharray="2 3" />
      {/* Control point handles */}
      <circle cx="4" cy="18" r="1.5" />
      <circle cx="14" cy="4" r="1.5" />
    </svg>
  );
}
