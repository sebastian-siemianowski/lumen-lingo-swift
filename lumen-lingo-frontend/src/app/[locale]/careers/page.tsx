import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { BreadcrumbJsonLd } from '@/components/home';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text, GlassCard } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Careers.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/careers', locale),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: localizedUrl('/careers', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      type: 'website',
    },
  };
}

const values = [
  {
    key: 'craft',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'from-violet to-fuchsia-500',
    ring: 'border-violet/20 bg-violet/10 text-violet',
  },
  {
    key: 'privacy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'from-emerald-400 to-cyan',
    ring: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-400',
  },
  {
    key: 'accessibility',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'from-cyan to-blue-400',
    ring: 'border-cyan/20 bg-cyan/10 text-cyan',
  },
  {
    key: 'curiosity',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'from-amber-400 to-orange-400',
    ring: 'border-amber-400/20 bg-amber-400/10 text-amber-400',
  },
] as const;

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Careers' });

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('heading'), href: '/careers' }]} />

      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              {t('heading')}
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg text-lg">
              {t('intro')}
            </Text>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <FadeIn>
            <GlassCard className="p-6 sm:p-8">
              <Text colour="secondary" className="leading-relaxed">
                {t('story')}
              </Text>
              <Text colour="secondary" className="mt-4 leading-relaxed">
                LumenLingo is a solo project at this stage. There are no open
                positions and we are not accepting applications right now. If
                that changes in the future, we&apos;ll update this page.
              </Text>
            </GlassCard>
          </FadeIn>
        </Container>
      </Section>

      <Section className="pt-4 pb-20 sm:pt-8 sm:pb-28">
        <Container className="max-w-3xl">
          <FadeIn>
            <Heading as="h2" className="mb-8 text-xl sm:text-2xl">
              {t('valuesHeading')}
            </Heading>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.key} delay={i * 0.08}>
                <GlassCard className="group relative overflow-hidden p-6">
                  {/* Subtle gradient accent line at top */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${v.accent} opacity-40`} aria-hidden />
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${v.ring}`}>
                    {v.icon}
                  </div>
                  <Heading as="h3" className="mt-3 text-base font-semibold">
                    {t(`values.${v.key}`)}
                  </Heading>
                  <Text colour="secondary" className="mt-1.5 text-sm leading-relaxed">
                    {t(`values.${v.key}Desc`)}
                  </Text>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
