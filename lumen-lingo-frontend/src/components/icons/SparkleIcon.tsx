import type { IconProps } from './types';

/** Four-point sparkle star — replaces ✨. */
export function SparkleIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Main four-point sparkle */}
      <path d="M12 2c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" />
      {/* Small accent sparkle */}
      <path
        d="M19 3c0 1.5-1.5 3-3 3 1.5 0 3 1.5 3 3 0-1.5 1.5-3 3-3-1.5 0-3-1.5-3-3z"
        strokeWidth={1.25}
        opacity={0.5}
      />
    </svg>
  );
}
