'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getAppStoreUrl } from '@/lib/appStoreUrl';
import { NewsletterForm } from '@/components/newsletter';
import { useFeatureFlag } from '@/hooks/use-feature-flag';
import { type FeatureFlagName, isDevOnlyFlag } from '@/lib/feature-flags';

const footerSections = [
  {
    key: 'Product' as const,
    links: [
      { href: '/features', key: 'features' },
      { href: '/pricing', key: 'pricing' },
      { href: '/early-access', key: 'earlyAccess', flag: 'EARLY_ACCESS_LIVE' as FeatureFlagName },
      { href: '/download', key: 'download' },
    ],
  },
  {
    key: 'Company' as const,
    links: [
      { href: '/about', key: 'about' },
      { href: '/blog', key: 'blog' },
      { href: '/careers', key: 'careers' },
      { href: '/press', key: 'pressKit', flag: 'PRESS_KIT_LIVE' as FeatureFlagName },
    ],
  },
  {
    key: 'Support' as const,
    links: [
      { href: '/help', key: 'helpCentre' },
      { href: '/contact', key: 'contact' },
      { href: '/privacy', key: 'privacy' },
      { href: '/terms', key: 'terms' },
      { href: '/eula', key: 'eula' },
      { href: '/cookies', key: 'cookiePolicy' },
      { href: '/accessibility', key: 'accessibility' },
      { href: '/data-request', key: 'dataRequest', flag: 'DATA_REQUEST_LIVE' as FeatureFlagName },
      { href: '/open-source', key: 'openSource' },
    ],
  },
];

const socialLinks = [
  {
    label: 'X (Twitter)',
    href: '#',
    hoverClass: 'hover:text-foreground hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    hoverClass: 'hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.3)]',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    hoverClass: 'hover:text-red-400 hover:drop-shadow-[0_0_6px_rgba(248,113,113,0.3)]',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function Footer() {
  const t = useTranslations('Footer');
  const appStoreLive = useFeatureFlag('APP_STORE_LIVE');
  const earlyAccessLive = useFeatureFlag('EARLY_ACCESS_LIVE');
  const pressKitLive = useFeatureFlag('PRESS_KIT_LIVE');
  const dataRequestLive = useFeatureFlag('DATA_REQUEST_LIVE');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const flagValues: Record<string, boolean> = {
    EARLY_ACCESS_LIVE: earlyAccessLive,
    PRESS_KIT_LIVE: pressKitLive,
    DATA_REQUEST_LIVE: dataRequestLive,
  };

  function toggleSection(heading: string) {
    setOpenSection((prev) => (prev === heading ? null : heading));
  }

  return (
    <footer role="contentinfo" className="relative border-t border-glass-border">
      {/* Subtle upward radial glow — fades into the void background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,92,246,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Glow line at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />

      <Container>
        <div className="py-16 sm:py-20">
          {/* Main grid */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-9 w-9 items-center justify-center">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet to-cyan opacity-80" />
                  <span className="relative text-lg font-bold text-white">L</span>
                </div>
                <span className="font-display text-lg font-bold text-foreground">LumenLingo</span>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground-muted">
                {t('tagline')}
              </p>

              {/* Newsletter signup */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-foreground">{t('newsletter.heading')}</h3>
                <p className="mt-1 text-xs text-foreground-muted">{t('newsletter.subheading')}</p>
                <div className="mt-3 max-w-sm">
                  <NewsletterForm source="footer" compact />
                </div>
              </div>

              {/* App Store badge */}
              <a
                href={appStoreLive ? getAppStoreUrl('footer') : (earlyAccessLive ? '/early-access' : '/launching-soon')}
                target={appStoreLive ? '_blank' : undefined}
                rel={appStoreLive ? 'noopener noreferrer' : undefined}
                className="mt-6 inline-flex items-center gap-2 rounded-[--radius-button] border border-glass-border bg-white/5 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/10"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {appStoreLive ? t('downloadAppStore') : 'Coming Soon'}
              </a>

              {/* Social links */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full text-foreground-muted transition-all focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none',
                      social.hoverClass,
                    )}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns — accordion on mobile, columns on sm+ */}
            {footerSections.map(({ key: sectionKey, links }) => {
              const isOpen = openSection === sectionKey;
              const heading = t(`sections.${sectionKey}`);
              return (
                <div key={sectionKey}>
                  {/* Desktop heading (hidden on mobile) */}
                  <h3 className="hidden text-sm font-semibold uppercase tracking-wider text-foreground sm:block">
                    {heading}
                  </h3>

                  {/* Mobile accordion trigger */}
                  <button
                    type="button"
                    onClick={() => toggleSection(sectionKey)}
                    className="flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-wider text-foreground sm:hidden"
                    aria-expanded={isOpen}
                    aria-controls={`footer-${sectionKey}`}
                  >
                    {heading}
                    <svg
                      className={`h-4 w-4 text-foreground-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Links — always visible on sm+, toggled on mobile */}
                  <ul
                    id={`footer-${sectionKey}`}
                    role="region"
                    className={`mt-4 space-y-3 sm:block ${isOpen ? 'block' : 'hidden'}`}
                  >
                    {links
                      .filter((link) => {
                        if (!('flag' in link) || !link.flag) return true;
                        return flagValues[link.flag] ?? true;
                      })
                      .map((link) => {
                        const devOnly = 'flag' in link && link.flag && isDevOnlyFlag(link.flag as FeatureFlagName);
                        return (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="inline-flex items-center gap-1.5 rounded py-2.5 text-sm text-foreground-muted transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none sm:py-1"
                            >
                              {t(`links.${link.key}`)}
                              {devOnly && (
                                <span className="inline-flex items-center gap-0.5 rounded border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium leading-none text-amber-400" title="Visible in development only">
                                  <svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5" aria-hidden>
                                    <path d="M8 1l1.545 3.13L13 4.635l-2.5 2.437.59 3.44L8 8.885l-3.09 1.626.59-3.44L3 4.636l3.455-.504L8 1z" fill="currentColor" />
                                  </svg>
                                  DEV
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>

                  {/* Divider on mobile between sections */}
                  <div className="mt-3 border-b border-glass-border sm:hidden" />
                </div>
              );
            })}
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-glass-border pt-8 sm:flex-row">
            <p className="text-xs text-foreground-muted">
              &copy; 2015&ndash;{new Date().getFullYear()} {t('copyright')}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy#ccpa-notice"
                className="text-xs text-foreground-muted transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none rounded py-1"
              >
                {t('links.doNotSell')}
              </Link>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
                className="text-xs text-foreground-muted transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none rounded py-1"
              >
                {t('links.cookieSettings')}
              </button>
              <p className="text-xs text-foreground-muted">
                {t('madeIn')}
              </p>
            </div>
          </div>

          {/* UK Companies Act 2006 s.82 — Statutory disclosures */}
          <div className="mt-4 text-center text-[10px] leading-relaxed text-foreground-muted/50">
            <p>{t('companyDisclosures.name')}</p>
            <p>{t('companyDisclosures.address')}</p>
            <p>{t('companyDisclosures.vatNumber')}</p>
          </div>

          {/* Apple trademark attribution */}
          <p className="mt-3 text-center text-[10px] text-foreground-muted/50">
            {t('trademarkAttribution')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
