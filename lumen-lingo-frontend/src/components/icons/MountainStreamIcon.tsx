import type { IconProps } from './types';

/** Mountain peak with flowing water line — replaces ⛰️ in soundscape presets. */
export function MountainStreamIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Mountain */}
      <path d="M4 20L10 6l3 5 3-3 4 12H4z" fill="currentColor" opacity={0.08} />
      <path d="M4 20L10 6l3 5 3-3 4 12" />
      {/* Snow cap */}
      <path d="M10 6l1.5 2.5L10.5 10" opacity={0.4} />
      {/* Stream */}
      <path d="M2 18c1.5-1 3 0 4.5-1s3 0 4.5-1" opacity={0.5} />
    </svg>
  );
}
