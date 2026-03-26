'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FAQAccordion, contactFaqItems } from '@/components/contact';
import { Container, Section, GlassCard, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { getFeatureFlag } from '@/lib/feature-flags';

const allQuickLinks = [
  {
    href: '/contact',
    key: 'contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 3.806-9.75 8.5 0 2.624 1.29 4.98 3.345 6.575-.19 1.23-.63 2.35-1.345 3.175a.375.375 0 00.28.625c2.07 0 3.74-.76 4.92-1.65.81.125 1.66.2 2.55.2 5.385 0 9.75-3.806 9.75-8.5S17.385 2.25 12 2.25z" />
      </svg>
    ),
    accent: 'violet',
  },
  {
    href: '/data-request',
    key: 'dataRequest',
    flag: 'DATA_REQUEST_LIVE' as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    accent: 'cyan',
  },
  {
    href: '/accessibility',
    key: 'accessibility',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="4.5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 8.5l4-1 3 0 4.5 1M12 11v3l-2.5 5M12 14l2.5 5" />
      </svg>
    ),
    accent: 'amber',
  },
] as const;

const quickLinks = allQuickLinks.filter((link) =>
  !('flag' in link && link.flag) || getFeatureFlag(link.flag),
);

export function HelpContent() {
  const t = useTranslations('Help');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return contactFaqItems;
    const q = query.toLowerCase();
    return contactFaqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      {/* Search */}
      <Section className="py-4">
        <Container className="max-w-3xl">
          <FadeIn>
            <div className="relative">
              <svg
                className="absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[--color-foreground-muted]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full rounded-xl border border-[--color-glass-border] bg-[--color-surface-card]/60 py-3 pe-4 ps-12 text-sm text-[--color-foreground] placeholder:text-[--color-foreground-muted] backdrop-blur-sm transition-colors focus:border-[--color-violet]/50 focus:outline-none"
              />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Quick Links */}
      <Section className="py-6 sm:py-8">
        <Container className="max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {quickLinks.map((link, i) => (
              <FadeIn key={link.key} delay={i * 0.08}>
                <Link href={link.href}>
                  <GlassCard className="group flex items-center gap-3 p-4 transition-colors hover:border-[--color-glass-hover]">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-opacity group-hover:opacity-100 opacity-70 ${
                      link.accent === 'violet' ? 'bg-[--color-violet]/10 text-[--color-violet]' :
                      link.accent === 'cyan' ? 'bg-[--color-cyan]/10 text-[--color-cyan]' :
                      'bg-[--color-amber]/10 text-[--color-amber]'
                    }`} aria-hidden>
                      {link.icon}
                    </div>
                    <Text className="text-sm font-medium">{t(`quickLinks.${link.key}`)}</Text>
                  </GlassCard>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          {filtered.length > 0 ? (
            <FAQAccordion items={filtered} />
          ) : (
            <FadeIn>
              <GlassCard className="p-6 text-center">
                <Text colour="muted" className="text-sm">
                  {t('noResults')}
                </Text>
              </GlassCard>
            </FadeIn>
          )}
        </Container>
      </Section>

      {/* Can't find answer CTA */}
      <Section className="pt-4 pb-20 sm:pt-8 sm:pb-28">
        <Container className="max-w-3xl">
          <FadeIn>
            <GlassCard className="p-6 sm:p-8 text-center">
              <Text className="text-base font-semibold">{t('ctaHeading')}</Text>
              <Text colour="secondary" className="mt-2 text-sm">
                {t('ctaDesc')}
              </Text>
              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-[--radius-button] border border-[--color-violet]/30 bg-[--color-violet]/10 px-5 py-2.5 text-sm font-medium text-[--color-violet] transition-colors hover:bg-[--color-violet]/20"
              >
                {t('ctaButton')}
              </Link>
            </GlassCard>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
