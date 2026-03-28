'use client';

import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';
import { getAppStoreUrl, type CampaignToken } from '@/lib/appStoreUrl';
import { useFeatureFlag } from '@/hooks/use-feature-flag';

interface AppStoreBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Campaign token for App Store attribution. */
  location?: CampaignToken | string;
}

const sizes = {
  sm: 'h-10',
  md: 'h-12',
  lg: 'h-14',
};

export function AppStoreBadge({ className, size = 'md', location = 'unknown' }: AppStoreBadgeProps) {
  const appStoreLive = useFeatureFlag('APP_STORE_LIVE');
  const earlyAccessLive = useFeatureFlag('EARLY_ACCESS_LIVE');

  if (!appStoreLive) {
    const comingSoonHref = earlyAccessLive ? '/share' : '/launching-soon';
    return (
      <a
        href={comingSoonHref}
        onClick={() => trackEvent('coming_soon_click', { location })}
        className={cn(
          'group relative inline-flex items-center gap-2.5 rounded-[--radius-button] border border-violet/30 bg-white/[0.03] px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-violet/50 hover:bg-violet/[0.06] hover:shadow-[0_0_24px_rgba(139,92,246,0.15)] hover:scale-[1.02] active:scale-100 focus-visible:ring-2 focus-visible:ring-violet focus-visible:shadow-[0_0_24px_rgba(139,92,246,0.15)] focus-visible:outline-none',
          sizes[size],
          className,
        )}
        aria-label="Coming soon to the App Store"
      >
        {/* Pulsing violet border glow */}
        <span
          className="pointer-events-none absolute inset-0 rounded-[--radius-button] animate-pulse opacity-40"
          style={{
            boxShadow: '0 0 12px rgba(139,92,246,0.2), inset 0 0 12px rgba(139,92,246,0.05)',
          }}
          aria-hidden
        />
        <svg className="h-6 w-6 flex-shrink-0 text-white/80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] text-white/50">Coming Soon to the</span>
          <span className="text-base font-semibold text-white/90">App Store</span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={getAppStoreUrl(location)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('app_store_click', { location })}
      className={cn(
        'inline-flex items-center gap-2.5 rounded-[--radius-button] border border-white/20 bg-black px-5 py-2.5 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:shadow-[0_0_24px_rgba(139,92,246,0.15)] hover:scale-[1.02] active:scale-100 focus-visible:ring-2 focus-visible:ring-violet focus-visible:shadow-[0_0_24px_rgba(139,92,246,0.15)] focus-visible:outline-none',
        sizes[size],
        className,
      )}
      aria-label="Launching Soon on the App Store"
    >
      <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] text-white/70">Launching Soon on the</span>
        <span className="text-base font-semibold text-white">App Store</span>
      </div>
    </a>
  );
}
