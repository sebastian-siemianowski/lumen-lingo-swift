import type { IconProps } from './types';

/** Overlapping speech bubbles with different scripts — replaces 🌍 and inline globe SVGs. */
export function LanguagePairIcon({ size = 24, className, 'aria-label': ariaLabel, ...props }: IconProps) {
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
      {/* Back speech bubble */}
      <path
        d="M20 8a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v2a5 5 0 0 0 4 4.9V18l3-3h4a5 5 0 0 0 5-5V8z"
        opacity={0.35}
      />
      {/* Front speech bubble (offset) */}
      <path d="M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2a4 4 0 0 0 3 3.87V20l2.5-2.5H14a4 4 0 0 0 4-4v-2z" />
      {/* Script hint character */}
      <text
        x="12"
        y="13.5"
        textAnchor="middle"
        fontSize="5"
        fontWeight="600"
        fill="currentColor"
        stroke="none"
        opacity={0.7}
      >
        Aa
      </text>
    </svg>
  );
}
