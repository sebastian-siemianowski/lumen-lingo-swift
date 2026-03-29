import type { IconProps } from './types';

/** Brain with neural connection nodes — Learning Science category. */
export function LearningScienceIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Left hemisphere */}
      <path d="M9.5 2a5.5 5.5 0 0 0-4.88 8.01A4 4 0 0 0 6 18h1.5" />
      <path d="M6.12 10a5.46 5.46 0 0 0-.12 1.17A4.49 4.49 0 0 0 3 15.5" />
      {/* Right hemisphere */}
      <path d="M14.5 2a5.5 5.5 0 0 1 4.88 8.01A4 4 0 0 1 18 18h-1.5" />
      <path d="M17.88 10c.08.38.12.77.12 1.17A4.49 4.49 0 0 1 21 15.5" />
      {/* Center stem */}
      <path d="M12 2v20" />
      {/* Neural nodes */}
      <circle cx="8.5" cy="7" r="1" fill="currentColor" stroke="none" opacity={0.5} />
      <circle cx="15.5" cy="7" r="1" fill="currentColor" stroke="none" opacity={0.5} />
      <circle cx="10" cy="13" r="0.75" fill="currentColor" stroke="none" opacity={0.4} />
      <circle cx="14" cy="13" r="0.75" fill="currentColor" stroke="none" opacity={0.4} />
    </svg>
  );
}
