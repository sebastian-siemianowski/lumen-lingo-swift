import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/home';
import { ProtectedEmail } from '@/components/ui/protected-email';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'MentionsLegales.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/mentions-legales', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('description'),
      url: localizedUrl('/mentions-legales', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: t('ogTitle'),
      description: t('description'),
    },
  };
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'MentionsLegales' });

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('meta.breadcrumb'), href: '/mentions-legales' }]} />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              {t('heading')}
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg">
              {t('subheading')}
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8 sm:py-12 pb-20 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div className="legal-prose">
                <section>
                  <h2>{t('publisherHeading')}</h2>
                  <p>{t('publisherName')}</p>
                  <p>{t('publisherReg')}</p>
                  <p>{t('publisherJurisdiction')}</p>
                  <p>{t('publisherAddress')}</p>
                  <p>{t('publisherVat')}</p>
                  <p>{t.rich('publisherEmail', { emailLink: () => <ProtectedEmail emailKey="legal" /> })}</p>
                  <p>{t('publisherWebsite')}</p>
                </section>

                <section>
                  <h2>{t('directorHeading')}</h2>
                  <p>{t('directorName')}</p>
                </section>

                <section>
                  <h2>{t('hostingHeading')}</h2>
                  <p>{t('hostingName')}</p>
                  <p>{t('hostingAddress')}</p>
                  <p>{t('hostingWebsite')}</p>
                </section>

                <section>
                  <h2>{t('intellectualHeading')}</h2>
                  <p>{t('intellectualP1')}</p>
                </section>

                <section>
                  <h2>{t('disputeHeading')}</h2>
                  <p>{t.rich('disputeP1', { emailLink: () => <ProtectedEmail emailKey="legal" /> })}</p>
                </section>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
