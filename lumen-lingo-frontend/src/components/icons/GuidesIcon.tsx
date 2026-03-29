import type { IconProps } from './types';

/** Open book with radiating knowledge lines — Guides category. */
export function GuidesIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Open book */}
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      {/* Radiating lines from spine */}
      <path d="M12 3v-1" opacity={0.5} strokeWidth={1.25} />
      <path d="M9 2l-1-0.8" opacity={0.4} strokeWidth={1.25} />
      <path d="M15 2l1-0.8" opacity={0.4} strokeWidth={1.25} />
    </svg>
  );
}
