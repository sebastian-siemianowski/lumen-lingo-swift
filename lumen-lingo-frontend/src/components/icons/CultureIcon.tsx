import type { IconProps } from './types';

/** Globe with latitude/longitude lines and cultural compass points — Culture category. */
export function CultureIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Globe */}
      <circle cx="12" cy="12" r="10" />
      {/* Latitude lines */}
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      {/* Compass diamond */}
      <path d="M12 8l1.5 4-1.5 4-1.5-4z" fill="currentColor" stroke="none" opacity={0.3} />
    </svg>
  );
}
