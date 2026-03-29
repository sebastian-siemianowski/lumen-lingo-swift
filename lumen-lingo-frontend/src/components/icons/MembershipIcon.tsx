import type { IconProps } from './types';

/** Crown / laurel symbol for membership tiers — replaces 👑 and inline star-pedestal SVGs. */
export function MembershipIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Crown body */}
      <path d="M4 17l2-10 4 4 2-6 2 6 4-4 2 10H4z" />
      {/* Crown base band */}
      <path d="M4 17h16v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z" fill="currentColor" opacity={0.1} />
      <rect x="4" y="17" width="16" height="3" rx="1" />
      {/* Crown jewels */}
      <circle cx="12" cy="15" r="1" fill="currentColor" opacity={0.4} />
      <circle cx="8" cy="15.5" r="0.75" fill="currentColor" opacity={0.25} />
      <circle cx="16" cy="15.5" r="0.75" fill="currentColor" opacity={0.25} />
    </svg>
  );
}
