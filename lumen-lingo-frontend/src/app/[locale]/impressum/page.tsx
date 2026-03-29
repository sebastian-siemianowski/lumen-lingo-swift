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
  const t = await getTranslations({ locale, namespace: 'Impressum.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/impressum', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('description'),
      url: localizedUrl('/impressum', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocales: getOgAlternateLocales(locale),
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: t('ogTitle'),
      description: t('description'),
    },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Impressum' });

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('meta.breadcrumb'), href: '/impressum' }]} />

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
                  <h2>{t('companyHeading')}</h2>
                  <p>{t('companyName')}</p>
                  <p>{t('companyNumber')}</p>
                  <p>{t('companyJurisdiction')}</p>
                </section>

                <section>
                  <h2>{t('addressHeading')}</h2>
                  <p>{t('addressLine1')}</p>
                  <p>{t('addressLine2')}</p>
                  <p>{t('addressLine3')}</p>
                </section>

                <section>
                  <h2>{t('contactHeading')}</h2>
                  <p>{t.rich('contactEmail', { emailLink: () => <ProtectedEmail emailKey="legal" /> })}</p>
                </section>

                <section>
                  <h2>{t('vatHeading')}</h2>
                  <p>{t('vatNumber')}</p>
                </section>

                <section>
                  <h2>{t('responsibleHeading')}</h2>
                  <p>{t('responsibleP1')}</p>
                </section>

                <section>
                  <h2>{t('disputeHeading')}</h2>
                  <p>{t.rich('disputeP1', { odrLink: (chunks: React.ReactNode) => <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">{chunks}</a> })}</p>
                </section>

                <section>
                  <h2>{t('liabilityHeading')}</h2>
                  <p>{t('liabilityP1')}</p>
                </section>

                <section>
                  <h2>{t('linksHeading')}</h2>
                  <p>{t('linksP1')}</p>
                </section>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
