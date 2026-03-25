'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FAQAccordion, contactFaqItems } from '@/components/contact';
import { Container, Section, GlassCard, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';

const quickLinks = [
  { href: '/contact', key: 'contact', icon: '💬' },
  { href: '/data-request', key: 'dataRequest', icon: '🔐' },
  { href: '/accessibility', key: 'accessibility', icon: '♿' },
] as const;

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
                  <GlassCard className="flex items-center gap-3 p-4 transition-colors hover:border-[--color-glass-hover]">
                    <span className="text-xl" aria-hidden>{link.icon}</span>
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
