import type { IconProps } from './types';

/** Rising flame for encouragement — replaces 💪 for keep-going celebrations. */
export function EncourageIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Outer flame */}
      <path
        d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12z"
        fill="currentColor"
        opacity={0.08}
      />
      <path d="M12 2C8 6 6 10 6 14a6 6 0 0 0 12 0c0-4-2-8-6-12z" />
      {/* Inner flame */}
      <path
        d="M12 10c-1.5 2-2.5 4-2.5 6a2.5 2.5 0 0 0 5 0c0-2-1-4-2.5-6z"
        opacity={0.5}
      />
    </svg>
  );
}
