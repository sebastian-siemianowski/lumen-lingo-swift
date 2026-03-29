import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { ProtectedEmail } from '@/components/ui/protected-email';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/home';
import { LanguageDisclaimer, BackToTop } from '@/components/legal';
import { getFeatureFlag } from '@/lib/feature-flags';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';
import { DataRequestForm } from '@/components/data-request/data-request-form';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'DataRequest.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/data-request', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/data-request', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  };
}

export default async function DataRequestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!getFeatureFlag('DATA_REQUEST_LIVE')) {
    redirect('/');
  }

  const t = await getTranslations({ locale, namespace: 'DataRequest' });

  const richTags = {
    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
    emailLink: () => <ProtectedEmail emailKey="legal" />,
  };

  return (
    <PageTransition>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: 'Home', href: '/' },
          { name: t('heading'), href: '/data-request' },
        ]}
      />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              {t('heading')}
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg text-lg">
              {t('subtitle')}
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* Your Rights Overview */}
      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <LanguageDisclaimer href="/data-request" />
          <FadeIn>
            <div className="prose prose-invert prose-sm max-w-none">
              <h2>{t('overview.heading')}</h2>
              <p>{t('overview.p1')}</p>
              <ul>
                <li>{t.rich('overview.li1', richTags)}</li>
                <li>{t.rich('overview.li2', richTags)}</li>
                <li>{t.rich('overview.li3', richTags)}</li>
                <li>{t.rich('overview.li4', richTags)}</li>
                <li>{t.rich('overview.li5', richTags)}</li>
                <li>{t.rich('overview.li6', richTags)}</li>
              </ul>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* iOS Note */}
      <Section className="py-4 sm:py-6">
        <Container className="max-w-3xl">
          <FadeIn delay={0.05}>
            <div className="rounded-2xl border border-glass-border bg-white/[0.03] p-6">
              <h3 className="mb-2 text-sm font-semibold text-white/80">
                {t('iosNote.heading')}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {t('iosNote.p1')}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {t('iosNote.p2')}
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Request Form */}
      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <FadeIn delay={0.1}>
            <DataRequestForm />
          </FadeIn>
        </Container>
      </Section>

      {/* Process Steps */}
      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <FadeIn delay={0.15}>
            <h2 className="mb-8 text-xl font-semibold text-white/90">
              {t('process.heading')}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {(['step1', 'step2', 'step3', 'step4'] as const).map(
                (step, i) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-glass-border bg-white/[0.03] p-5"
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-xs font-semibold text-white/60">
                      {i + 1}
                    </div>
                    <h3 className="mb-1 text-sm font-semibold text-white/80">
                      {t(`process.${step}Title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">
                      {t(`process.${step}Desc`)}
                    </p>
                  </div>
                ),
              )}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Email Alternative */}
      <Section className="pt-4 pb-20 sm:pt-8 sm:pb-28">
        <Container className="max-w-3xl">
          <FadeIn delay={0.2}>
            <div className="prose prose-invert prose-sm max-w-none text-center">
              <h2>{t('contact.heading')}</h2>
              <p>{t.rich('contact.p1', richTags)}</p>
              <p className="text-white/40">{t('contact.responseTime')}</p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <BackToTop />
    </PageTransition>
  );
}
