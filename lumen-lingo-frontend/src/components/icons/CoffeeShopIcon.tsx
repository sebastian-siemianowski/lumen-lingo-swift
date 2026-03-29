import type { IconProps } from './types';

/** Steaming cup silhouette — replaces ☕ in soundscape presets. */
export function CoffeeShopIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Cup body */}
      <path d="M5 10h12v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-6z" />
      {/* Handle */}
      <path d="M17 12h1a2 2 0 0 1 0 4h-1" />
      {/* Saucer */}
      <path d="M3 20h16" opacity={0.4} />
      {/* Steam wisps */}
      <path d="M8 7c0-1.5 1-2 1-3" opacity={0.5} />
      <path d="M11 6c0-1.5 1-2 1-3" opacity={0.35} />
      <path d="M14 7c0-1.5 1-2 1-3" opacity={0.5} />
    </svg>
  );
}
