import type { IconProps } from './types';

/** Clean brain silhouette — replaces 🧠 in hero badges and learning contexts. */
export function BrainIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      <path d="M12 4C9.5 4 7 5.5 6 7.5c-1.2 2.4-.5 5 .5 6.5 1 1.5 1.5 3 1.5 4.5V20h4v-1.5" />
      <path d="M8.5 9a2 2 0 0 0-1.5 2" opacity={0.5} />
      <path d="M9.5 6.5A3.5 3.5 0 0 0 6.5 9" opacity={0.4} />
      {/* Right hemisphere */}
      <path d="M12 4c2.5 0 5 1.5 6 3.5 1.2 2.4.5 5-.5 6.5-1 1.5-1.5 3-1.5 4.5V20h-4v-1.5" />
      <path d="M15.5 9a2 2 0 0 1 1.5 2" opacity={0.5} />
      <path d="M14.5 6.5A3.5 3.5 0 0 1 17.5 9" opacity={0.4} />
      {/* Centre divide */}
      <path d="M12 4v16" opacity={0.2} strokeDasharray="2 2" />
    </svg>
  );
}
