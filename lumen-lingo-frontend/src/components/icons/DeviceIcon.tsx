import type { IconProps } from './types';

/** Smartphone outline — replaces 📱. */
export function DeviceIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Phone body */}
      <rect x="6" y="2" width="12" height="20" rx="3" />
      {/* Screen area */}
      <rect x="8" y="5" width="8" height="11" rx="1" opacity={0.15} fill="currentColor" />
      {/* Home indicator bar */}
      <path d="M10 19.5h4" />
      {/* Notch/camera */}
      <path d="M10 4h4" opacity={0.4} />
    </svg>
  );
}
