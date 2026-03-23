import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { LegalTOC, DownloadPDFButton } from '@/components/legal';
import { BreadcrumbJsonLd } from '@/components/home';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Eula.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/eula', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('description'),
      url: localizedUrl('/eula', locale),
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

export default async function EulaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Eula' });
  const tLegal = await getTranslations({ locale, namespace: 'Legal' });

  const richTags = {
    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
  };

  const tocItems = [
    { id: 'introduction', text: t('introduction.heading'), level: 2 },
    { id: 'licence-grant', text: t('licenceGrant.heading'), level: 2 },
    { id: 'tier-access', text: t('tierAccess.heading'), level: 2 },
    { id: 'content-ownership', text: t('contentOwnership.heading'), level: 2 },
    { id: 'restrictions', text: t('restrictions.heading'), level: 2 },
    { id: 'termination', text: t('termination.heading'), level: 2 },
    { id: 'warranties', text: t('warranties.heading'), level: 2 },
    { id: 'liability', text: t('liability.heading'), level: 2 },
    { id: 'assumption-of-risk', text: t('assumptionOfRisk.heading'), level: 2 },
    { id: 'governing-law', text: t('governingLaw.heading'), level: 2 },
    { id: 'apple-terms', text: t('appleTerms.heading'), level: 2 },
    { id: 'changes', text: t('changes.heading'), level: 2 },
    { id: 'contact', text: t('contact.heading'), level: 2 },
  ];

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('breadcrumb'), href: '/eula' }]} />

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
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2 text-xs text-white/50">
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-white/40" aria-hidden>
                  <path d="M8 4v4l2.5 1.5M14 8A6 6 0 112 8a6 6 0 0112 0z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
                {tLegal('lastUpdated')}
              </span>
              <DownloadPDFButton label={tLegal('downloadPdf')} />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8 sm:py-12 pb-20 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-4xl xl:grid xl:grid-cols-[1fr_200px] xl:gap-12">
            {/* Prose */}
            <FadeIn>
              <div className="legal-prose">
                <section id="introduction">
                  <h2>{t('introduction.heading')}</h2>
                  <p>{t('introduction.p1')}</p>
                  <p>{t('introduction.p2')}</p>
                </section>

                <section id="licence-grant">
                  <h2>{t('licenceGrant.heading')}</h2>
                  <p>{t('licenceGrant.intro')}</p>
                  <ul>
                    <li>{t('licenceGrant.li1')}</li>
                    <li>{t('licenceGrant.li2')}</li>
                    <li>{t('licenceGrant.li3')}</li>
                  </ul>
                  <p>{t('licenceGrant.p1')}</p>
                </section>

                <section id="tier-access">
                  <h2>{t('tierAccess.heading')}</h2>
                  <p>{t('tierAccess.intro')}</p>
                  <ul>
                    <li>{t.rich('tierAccess.li1', richTags)}</li>
                    <li>{t.rich('tierAccess.li2', richTags)}</li>
                    <li>{t.rich('tierAccess.li3', richTags)}</li>
                    <li>{t.rich('tierAccess.li4', richTags)}</li>
                  </ul>
                  <p>{t('tierAccess.p1')}</p>
                </section>

                <section id="content-ownership">
                  <h2>{t('contentOwnership.heading')}</h2>
                  <p>{t('contentOwnership.p1')}</p>
                  <p>{t('contentOwnership.p2')}</p>
                </section>

                <section id="restrictions">
                  <h2>{t('restrictions.heading')}</h2>
                  <p>{t('restrictions.intro')}</p>
                  <ul>
                    <li>{t('restrictions.li1')}</li>
                    <li>{t('restrictions.li2')}</li>
                    <li>{t('restrictions.li3')}</li>
                    <li>{t('restrictions.li4')}</li>
                    <li>{t('restrictions.li5')}</li>
                    <li>{t('restrictions.li6')}</li>
                    <li>{t('restrictions.li7')}</li>
                  </ul>
                </section>

                <section id="termination">
                  <h2>{t('termination.heading')}</h2>
                  <p>{t('termination.p1')}</p>
                  <p>{t('termination.p2')}</p>
                  <ul>
                    <li>{t('termination.li1')}</li>
                    <li>{t('termination.li2')}</li>
                    <li>{t('termination.li3')}</li>
                    <li>{t('termination.li4')}</li>
                  </ul>
                </section>

                <section id="warranties">
                  <h2>{t('warranties.heading')}</h2>
                  <p>{t('warranties.p1')}</p>
                  <ul>
                    <li>{t('warranties.li1')}</li>
                    <li>{t('warranties.li2')}</li>
                    <li>{t('warranties.li3')}</li>
                    <li>{t('warranties.li4')}</li>
                  </ul>
                  <p>{t('warranties.p2')}</p>
                </section>

                <section id="liability">
                  <h2>{t('liability.heading')}</h2>
                  <p>{t('liability.p1')}</p>
                  <ul>
                    <li>{t('liability.li1')}</li>
                    <li>{t('liability.li2')}</li>
                    <li>{t('liability.li3')}</li>
                    <li>{t('liability.li4')}</li>
                  </ul>
                  <p>{t('liability.cap')}</p>
                </section>

                <section id="assumption-of-risk">
                  <h2>{t('assumptionOfRisk.heading')}</h2>
                  <p>{t('assumptionOfRisk.p1')}</p>
                  <p>{t('assumptionOfRisk.p2')}</p>
                </section>

                <section id="governing-law">
                  <h2>{t('governingLaw.heading')}</h2>
                  <p>{t('governingLaw.p1')}</p>
                  <p>{t('governingLaw.p2')}</p>
                </section>

                <section id="apple-terms">
                  <h2>{t('appleTerms.heading')}</h2>
                  <p>{t('appleTerms.intro')}</p>
                  <ol>
                    <li>{t('appleTerms.li1')}</li>
                    <li>{t('appleTerms.li2')}</li>
                    <li>{t('appleTerms.li3')}</li>
                    <li>{t('appleTerms.li4')}</li>
                    <li>{t('appleTerms.li5')}</li>
                    <li>{t('appleTerms.li6')}</li>
                  </ol>
                </section>

                <section id="changes">
                  <h2>{t('changes.heading')}</h2>
                  <p>{t('changes.p1')}</p>
                  <p>{t('changes.p2')}</p>
                </section>

                <section id="contact">
                  <h2>{t('contact.heading')}</h2>
                  <p>{t('contact.intro')}</p>
                  <ul>
                    <li>{t.rich('contact.email', { b: (chunks: React.ReactNode) => <strong>{chunks}</strong>, emailLink: (chunks: React.ReactNode) => <a href="mailto:hello@lumenshore.com">{chunks}</a> })}</li>
                    <li>{t.rich('contact.company', richTags)}</li>
                    <li>{t.rich('contact.address', richTags)}</li>
                  </ul>
                  <p>{t('contact.responseTime')}</p>
                </section>

                <p className="mt-12 text-xs text-white/30">{t('trademarkAttribution')}</p>
              </div>
            </FadeIn>

            {/* Sidebar TOC */}
            <LegalTOC items={tocItems} label={tLegal('tocLabel')} />
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
