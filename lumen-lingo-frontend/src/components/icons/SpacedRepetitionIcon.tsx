import type { IconProps } from './types';

/** Clock face with curved repeat arrow — replaces 🧠 in spaced-repetition context. */
export function SpacedRepetitionIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Clock face */}
      <circle cx="12" cy="12" r="9" />
      {/* Clock hands */}
      <path d="M12 7v5l3 3" />
      {/* Repeat arrow curving around top */}
      <path d="M4.5 7.5A9 9 0 0 1 18 5" strokeWidth={1.25} />
      <path d="M18 2v3.5h-3.5" strokeWidth={1.25} />
    </svg>
  );
}
