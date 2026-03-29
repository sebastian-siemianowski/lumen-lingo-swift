import type { IconProps } from './types';

/** Stylised card with flip indicator — replaces 🃏 and inline flashcard SVGs. */
export function FlashcardIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Back card (slightly offset) */}
      <rect x="5" y="3" width="16" height="12" rx="2" opacity={0.35} />
      {/* Front card */}
      <rect x="3" y="6" width="16" height="12" rx="2" />
      {/* Flip indicator arrow */}
      <path d="M13 20c2.5-.5 4-2 4.5-4" strokeWidth={1.25} />
      <path d="M17.5 14l.5 2.5L15.5 16" strokeWidth={1.25} />
      {/* Card divider line */}
      <path d="M7 12h8" opacity={0.4} />
    </svg>
  );
}
