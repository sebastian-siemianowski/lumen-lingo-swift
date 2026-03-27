import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { LanguageDisclaimer } from '@/components/legal';
import { BreadcrumbJsonLd } from '@/components/home';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Security.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/security', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/security', locale),
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

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Security' });

  const richTags = {
    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
    emailLink: (chunks: React.ReactNode) => (
      <a href="mailto:security@lumenlingo.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</a>
    ),
    supportLink: (chunks: React.ReactNode) => (
      <a href="mailto:support@lumenlingo.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</a>
    ),
    securityTxtLink: (chunks: React.ReactNode) => (
      <a href="/.well-known/security.txt" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</a>
    ),
  };

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('breadcrumb'), href: '/security' }]} />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              {t('hero.heading')}
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg">
              {t('hero.subtitle')}
            </Text>
          </FadeIn>
        </Container>
      </Section>

      <LanguageDisclaimer href="/security" />

      {/* Content */}
      <Section className="py-8 pb-20 sm:py-12 sm:pb-28">
        <Container>
          <FadeIn>
            <div className="legal-prose mx-auto max-w-3xl">
              <section id="reporting">
                <h2>{t('reporting.heading')}</h2>
                <p>{t.rich('reporting.p1', richTags)}</p>
                <p>{t('reporting.p2')}</p>
                <p>{t.rich('reporting.p3', richTags)}</p>
              </section>

              <section id="scope">
                <h2>{t('scope.heading')}</h2>

                <h3>{t('scope.inScopeHeading')}</h3>
                <ul>
                  <li>{t('scope.inScope1')}</li>
                  <li>{t('scope.inScope2')}</li>
                  <li>{t('scope.inScope3')}</li>
                  <li>{t('scope.inScope4')}</li>
                  <li>{t('scope.inScope5')}</li>
                  <li>{t('scope.inScope6')}</li>
                  <li>{t('scope.inScope7')}</li>
                </ul>

                <h3>{t('scope.outOfScopeHeading')}</h3>
                <ul>
                  <li>{t('scope.outOfScope1')}</li>
                  <li>{t('scope.outOfScope2')}</li>
                  <li>{t('scope.outOfScope3')}</li>
                  <li>{t('scope.outOfScope4')}</li>
                  <li>{t('scope.outOfScope5')}</li>
                  <li>{t('scope.outOfScope6')}</li>
                </ul>
              </section>

              <section id="response">
                <h2>{t('response.heading')}</h2>
                <p>{t('response.p1')}</p>
                <ul>
                  <li>{t.rich('response.item1', richTags)}</li>
                  <li>{t.rich('response.item2', richTags)}</li>
                  <li>{t.rich('response.item3', richTags)}</li>
                  <li>{t.rich('response.item4', richTags)}</li>
                </ul>
                <p>{t('response.p2')}</p>
              </section>

              <section id="safe-harbour">
                <h2>{t('safeHarbour.heading')}</h2>
                <p>{t('safeHarbour.p1')}</p>
                <ul>
                  <li>{t('safeHarbour.item1')}</li>
                  <li>{t('safeHarbour.item2')}</li>
                  <li>{t('safeHarbour.item3')}</li>
                  <li>{t('safeHarbour.item4')}</li>
                </ul>
                <p>{t('safeHarbour.p2')}</p>
              </section>

              <section id="contact">
                <h2>{t('contact.heading')}</h2>
                <p>{t.rich('contact.p1', richTags)}</p>
                <p>{t.rich('contact.p2', richTags)}</p>
                <p>{t('contact.p3')}</p>
              </section>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageTransition>
  );
}
