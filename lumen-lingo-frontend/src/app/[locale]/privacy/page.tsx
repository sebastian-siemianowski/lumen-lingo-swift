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
  const t = await getTranslations({ locale, namespace: 'Privacy.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/privacy', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('description'),
      url: localizedUrl('/privacy', locale),
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

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Privacy' });
  const tLegal = await getTranslations({ locale, namespace: 'Legal' });

  const richTags = {
    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
  };

  const tocItems = [
    { id: 'overview', text: t('overview.heading'), level: 2 },
    { id: 'website-data', text: t('websiteData.heading'), level: 2 },
    { id: 'sentry-replay', text: t('sentryReplay.heading'), level: 3 },
    { id: 'vercel-analytics', text: t('vercelAnalytics.heading'), level: 3 },
    { id: 'custom-events', text: t('customEvents.heading'), level: 3 },
    { id: 'service-worker', text: t('serviceWorker.heading'), level: 3 },
    { id: 'app-data', text: t('appData.heading'), level: 2 },
    { id: 'what-we-dont-collect', text: t('whatWeDontCollect.heading'), level: 2 },
    { id: 'legal-basis', text: t('legalBasis.heading'), level: 2 },
    { id: 'data-flow', text: t('dataFlow.heading'), level: 2 },
    { id: 'how-we-use', text: t('howWeUse.heading'), level: 2 },
    { id: 'data-storage', text: t('dataStorage.heading'), level: 2 },
    { id: 'third-party', text: t('thirdParty.heading'), level: 2 },
    { id: 'sub-processors', text: t('subProcessors.heading'), level: 2 },
    { id: 'international-transfers', text: t('internationalTransfers.heading'), level: 2 },
    { id: 'aggregate-data', text: t('aggregateData.heading'), level: 2 },
    { id: 'childrens-privacy', text: t('childrensPrivacy.heading'), level: 2 },
    { id: 'data-retention', text: t('dataRetention.heading'), level: 2 },
    { id: 'your-rights', text: t('yourRights.heading'), level: 2 },
    { id: 'policy-updates', text: t('policyUpdates.heading'), level: 2 },
    { id: 'contact-us', text: t('contactUs.heading'), level: 2 },
  ];

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('breadcrumb'), href: '/privacy' }]} />

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
              <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2 text-xs text-white/50">
                {tLegal('version')}
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
                <section id="overview">
                  <h2>{t('overview.heading')}</h2>
                  <p>{t('overview.p1')}</p>
                  <p>{t('overview.p2')}</p>
                  <p>{t('overview.p3')}</p>
                </section>

                {/* ── Website Data Collection ── */}
                <section id="website-data">
                  <h2>{t('websiteData.heading')}</h2>
                  <p>{t('websiteData.intro')}</p>
                  <ul>
                    <li>{t.rich('websiteData.li1', richTags)}</li>
                    <li>{t.rich('websiteData.li2', richTags)}</li>
                    <li>{t.rich('websiteData.li3', richTags)}</li>
                    <li>{t.rich('websiteData.li4', richTags)}</li>
                    <li>{t.rich('websiteData.li5', richTags)}</li>
                    <li>{t.rich('websiteData.li6', richTags)}</li>
                    <li>{t.rich('websiteData.li7', richTags)}</li>
                  </ul>
                </section>

                <section id="sentry-replay">
                  <h3>{t('sentryReplay.heading')}</h3>
                  <p>{t('sentryReplay.p1')}</p>
                  <p>{t.rich('sentryReplay.p2', richTags)}</p>
                  <p>{t.rich('sentryReplay.p3', richTags)}</p>
                  <p>{t.rich('sentryReplay.p4', richTags)}</p>
                  <p>{t.rich('sentryReplay.p5', richTags)}</p>
                </section>

                <section id="vercel-analytics">
                  <h3>{t('vercelAnalytics.heading')}</h3>
                  <p>{t('vercelAnalytics.p1')}</p>
                  <ul>
                    <li>{t.rich('vercelAnalytics.li1', richTags)}</li>
                    <li>{t.rich('vercelAnalytics.li2', richTags)}</li>
                    <li>{t.rich('vercelAnalytics.li3', richTags)}</li>
                  </ul>
                  <p>{t.rich('vercelAnalytics.p2', { vercelPrivacy: (chunks: React.ReactNode) => <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">{chunks}</a> })}</p>
                </section>

                <section id="custom-events">
                  <h3>{t('customEvents.heading')}</h3>
                  <p>{t('customEvents.intro')}</p>
                  <ul>
                    <li>{t.rich('customEvents.li1', richTags)}</li>
                    <li>{t.rich('customEvents.li2', richTags)}</li>
                    <li>{t.rich('customEvents.li3', richTags)}</li>
                    <li>{t.rich('customEvents.li4', richTags)}</li>
                    <li>{t.rich('customEvents.li5', richTags)}</li>
                    <li>{t.rich('customEvents.li6', richTags)}</li>
                    <li>{t.rich('customEvents.li7', richTags)}</li>
                    <li>{t.rich('customEvents.li8', richTags)}</li>
                    <li>{t.rich('customEvents.li9', richTags)}</li>
                    <li>{t.rich('customEvents.li10', richTags)}</li>
                    <li>{t.rich('customEvents.li11', richTags)}</li>
                  </ul>
                </section>

                <section id="service-worker">
                  <h3>{t('serviceWorker.heading')}</h3>
                  <p>{t('serviceWorker.p1')}</p>
                  <p>{t('serviceWorker.p2')}</p>
                </section>

                {/* ── iOS App Data Collection ── */}
                <section id="app-data">
                  <h2>{t('appData.heading')}</h2>
                  <p>{t('appData.intro')}</p>
                  <ul>
                    <li>{t.rich('appData.li1', richTags)}</li>
                    <li>{t.rich('appData.li2', richTags)}</li>
                    <li>{t.rich('appData.li3', richTags)}</li>
                    <li>{t.rich('appData.li4', richTags)}</li>
                  </ul>
                </section>

                <section id="what-we-dont-collect">
                  <h2>{t('whatWeDontCollect.heading')}</h2>
                  <p>{t.rich('whatWeDontCollect.intro', richTags)}</p>
                  <ul>
                    <li>{t('whatWeDontCollect.li1')}</li>
                    <li>{t('whatWeDontCollect.li2')}</li>
                    <li>{t('whatWeDontCollect.li3')}</li>
                    <li>{t('whatWeDontCollect.li4')}</li>
                    <li>{t('whatWeDontCollect.li5')}</li>
                    <li>{t('whatWeDontCollect.li6')}</li>
                  </ul>
                </section>

                {/* ── Legal Basis for Processing ── */}
                <section id="legal-basis">
                  <h2>{t('legalBasis.heading')}</h2>
                  <p>{t('legalBasis.intro')}</p>
                  <h3>{t('legalBasis.consentHeading')}</h3>
                  <ul>
                    <li>{t.rich('legalBasis.consentLi1', richTags)}</li>
                    <li>{t.rich('legalBasis.consentLi2', richTags)}</li>
                    <li>{t.rich('legalBasis.consentLi3', richTags)}</li>
                  </ul>
                  <h3>{t('legalBasis.legitimateHeading')}</h3>
                  <ul>
                    <li>{t.rich('legalBasis.legitimateLi1', richTags)}</li>
                    <li>{t.rich('legalBasis.legitimateLi2', richTags)}</li>
                    <li>{t.rich('legalBasis.legitimateLi3', richTags)}</li>
                  </ul>
                  <h3>{t('legalBasis.contractHeading')}</h3>
                  <ul>
                    <li>{t.rich('legalBasis.contractLi1', richTags)}</li>
                    <li>{t.rich('legalBasis.contractLi2', richTags)}</li>
                    <li>{t.rich('legalBasis.contractLi3', richTags)}</li>
                  </ul>
                </section>

                {/* ── Where Your Data Goes ── */}
                <section id="data-flow">
                  <h2>{t('dataFlow.heading')}</h2>
                  <p>{t('dataFlow.intro')}</p>
                  <ul>
                    <li>{t.rich('dataFlow.li1', richTags)}</li>
                    <li>{t.rich('dataFlow.li2', richTags)}</li>
                    <li>{t.rich('dataFlow.li3', richTags)}</li>
                    <li>{t.rich('dataFlow.li4', richTags)}</li>
                    <li>{t.rich('dataFlow.li5', richTags)}</li>
                  </ul>
                  <p>{t('dataFlow.noOtherParties')}</p>
                </section>

                <section id="how-we-use">
                  <h2>{t('howWeUse.heading')}</h2>
                  <p>{t('howWeUse.intro')}</p>
                  <ul>
                    <li>{t.rich('howWeUse.li1', richTags)}</li>
                    <li>{t.rich('howWeUse.li2', richTags)}</li>
                    <li>{t.rich('howWeUse.li3', richTags)}</li>
                    <li>{t.rich('howWeUse.li4', richTags)}</li>
                    <li>{t.rich('howWeUse.li5', richTags)}</li>
                    <li>{t.rich('howWeUse.li6', richTags)}</li>
                  </ul>
                </section>

                <section id="data-storage">
                  <h2>{t('dataStorage.heading')}</h2>
                  <p>{t('dataStorage.intro')}</p>
                  <ul>
                    <li>{t.rich('dataStorage.li1', richTags)}</li>
                    <li>{t.rich('dataStorage.li2', richTags)}</li>
                    <li>{t.rich('dataStorage.li3', richTags)}</li>
                    <li>{t.rich('dataStorage.li4', richTags)}</li>
                    <li>{t.rich('dataStorage.li5', richTags)}</li>
                  </ul>
                </section>

                <section id="third-party">
                  <h2>{t('thirdParty.heading')}</h2>
                  <p>{t('thirdParty.intro')}</p>
                  <ul>
                    <li>{t.rich('thirdParty.li1', { b: (chunks: React.ReactNode) => <strong>{chunks}</strong>, applePrivacy: (chunks: React.ReactNode) => <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">{chunks}</a> })}</li>
                    <li>{t.rich('thirdParty.li2', { b: (chunks: React.ReactNode) => <strong>{chunks}</strong>, vercelPrivacy: (chunks: React.ReactNode) => <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">{chunks}</a> })}</li>
                    <li>{t.rich('thirdParty.li3', { b: (chunks: React.ReactNode) => <strong>{chunks}</strong>, sentryPrivacy: (chunks: React.ReactNode) => <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">{chunks}</a> })}</li>
                  </ul>
                  <p>{t('thirdParty.noAdNetworks')}</p>
                </section>

                {/* ── Sub-Processors ── */}
                <section id="sub-processors">
                  <h2>{t('subProcessors.heading')}</h2>
                  <p>{t('subProcessors.intro')}</p>
                  <div className="my-6 overflow-x-auto rounded-lg border border-glass-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-glass-border bg-white/[0.02]">
                          <th className="px-4 py-3 text-left font-semibold text-foreground">{t('subProcessors.tableHeaders.service')}</th>
                          <th className="px-4 py-3 text-left font-semibold text-foreground">{t('subProcessors.tableHeaders.purpose')}</th>
                          <th className="px-4 py-3 text-left font-semibold text-foreground">{t('subProcessors.tableHeaders.dataProcessed')}</th>
                          <th className="px-4 py-3 text-left font-semibold text-foreground">{t('subProcessors.tableHeaders.location')}</th>
                          <th className="px-4 py-3 text-left font-semibold text-foreground">{t('subProcessors.tableHeaders.privacyPolicy')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(['apple', 'vercel', 'sentry'] as const).map((key) => (
                          <tr key={key} className="border-b border-glass-border/50 last:border-b-0">
                            <td className="px-4 py-3 font-medium text-foreground">{t(`subProcessors.processors.${key}.service`)}</td>
                            <td className="px-4 py-3 text-foreground-muted">{t(`subProcessors.processors.${key}.purpose`)}</td>
                            <td className="px-4 py-3 text-foreground-muted">{t(`subProcessors.processors.${key}.dataProcessed`)}</td>
                            <td className="px-4 py-3 text-foreground-muted">{t(`subProcessors.processors.${key}.location`)}</td>
                            <td className="px-4 py-3">
                              <a href={t(`subProcessors.processors.${key}.privacyUrl`)} target="_blank" rel="noopener noreferrer">
                                {t(`subProcessors.processors.${key}.privacyLabel`)}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3>{t('subProcessors.dpaStatus.heading')}</h3>
                  <p>{t('subProcessors.dpaStatus.p1')}</p>
                  <ul>
                    <li>{t.rich('subProcessors.dpaStatus.li1', richTags)}</li>
                    <li>{t.rich('subProcessors.dpaStatus.li2', richTags)}</li>
                    <li>{t.rich('subProcessors.dpaStatus.li3', richTags)}</li>
                  </ul>

                  <h3>{t('subProcessors.changes.heading')}</h3>
                  <p>{t('subProcessors.changes.p1')}</p>
                </section>

                {/* ── International Data Transfers ── */}
                <section id="international-transfers">
                  <h2>{t('internationalTransfers.heading')}</h2>
                  <p>{t('internationalTransfers.intro')}</p>
                  <ul>
                    <li>{t.rich('internationalTransfers.li1', richTags)}</li>
                    <li>{t.rich('internationalTransfers.li2', richTags)}</li>
                    <li>{t.rich('internationalTransfers.li3', richTags)}</li>
                  </ul>
                  <h3>{t('internationalTransfers.safeguards.heading')}</h3>
                  <p>{t('internationalTransfers.safeguards.intro')}</p>
                  <ul>
                    <li>{t.rich('internationalTransfers.safeguards.li1', richTags)}</li>
                    <li>{t.rich('internationalTransfers.safeguards.li2', richTags)}</li>
                    <li>{t.rich('internationalTransfers.safeguards.li3', richTags)}</li>
                    <li>{t.rich('internationalTransfers.safeguards.li4', richTags)}</li>
                  </ul>
                  <p>{t('internationalTransfers.p1')}</p>
                </section>

                {/* ── Aggregated and De-identified Data ── */}
                <section id="aggregate-data">
                  <h2>{t('aggregateData.heading')}</h2>
                  <p>{t('aggregateData.p1')}</p>
                  <p>{t('aggregateData.p2')}</p>
                  <ul>
                    <li>{t('aggregateData.li1')}</li>
                    <li>{t('aggregateData.li2')}</li>
                    <li>{t('aggregateData.li3')}</li>
                    <li>{t('aggregateData.li4')}</li>
                    <li>{t('aggregateData.li5')}</li>
                  </ul>
                  <h3>{t('aggregateData.deIdentification.heading')}</h3>
                  <p>{t('aggregateData.deIdentification.p1')}</p>
                  <ul>
                    <li>{t.rich('aggregateData.deIdentification.li1', richTags)}</li>
                    <li>{t.rich('aggregateData.deIdentification.li2', richTags)}</li>
                  </ul>
                  <h3>{t('aggregateData.examples.heading')}</h3>
                  <p>{t('aggregateData.examples.p1')}</p>
                  <ul>
                    <li>{t('aggregateData.examples.li1')}</li>
                    <li>{t('aggregateData.examples.li2')}</li>
                    <li>{t('aggregateData.examples.li3')}</li>
                    <li>{t('aggregateData.examples.li4')}</li>
                    <li>{t('aggregateData.examples.li5')}</li>
                  </ul>
                  <p>{t('aggregateData.examples.p2')}</p>
                  <p>{t('aggregateData.survival')}</p>
                </section>

                <section id="childrens-privacy">
                  <h2>{t('childrensPrivacy.heading')}</h2>
                  <p>{t('childrensPrivacy.p1')}</p>
                  <p>{t('childrensPrivacy.p2')}</p>
                  <p>{t('childrensPrivacy.p3')}</p>
                </section>

                <section id="data-retention">
                  <h2>{t('dataRetention.heading')}</h2>
                  <p>{t('dataRetention.intro')}</p>
                  <h3>{t('dataRetention.websiteHeading')}</h3>
                  <ul>
                    <li>{t.rich('dataRetention.websiteLi1', richTags)}</li>
                    <li>{t.rich('dataRetention.websiteLi2', richTags)}</li>
                    <li>{t.rich('dataRetention.websiteLi3', richTags)}</li>
                    <li>{t.rich('dataRetention.websiteLi4', richTags)}</li>
                  </ul>
                  <h3>{t('dataRetention.appHeading')}</h3>
                  <ul>
                    <li>{t.rich('dataRetention.appLi1', richTags)}</li>
                    <li>{t.rich('dataRetention.appLi2', richTags)}</li>
                    <li>{t.rich('dataRetention.appLi3', richTags)}</li>
                    <li>{t.rich('dataRetention.appLi4', richTags)}</li>
                  </ul>
                </section>

                <section id="your-rights">
                  <h2>{t('yourRights.heading')}</h2>
                  <p>{t('yourRights.intro')}</p>
                  <h3>{t('yourRights.gdprHeading')}</h3>
                  <ul>
                    <li>{t('yourRights.gdprLi1')}</li>
                    <li>{t('yourRights.gdprLi2')}</li>
                    <li>{t('yourRights.gdprLi3')}</li>
                    <li>{t('yourRights.gdprLi4')}</li>
                    <li>{t('yourRights.gdprLi5')}</li>
                    <li>{t('yourRights.gdprLi6')}</li>
                    <li>{t('yourRights.gdprLi7')}</li>
                  </ul>
                  <h3>{t('yourRights.ccpaHeading')}</h3>
                  <ul>
                    <li>{t('yourRights.ccpaLi1')}</li>
                    <li>{t('yourRights.ccpaLi2')}</li>
                    <li>{t('yourRights.ccpaLi3')}</li>
                    <li>{t('yourRights.ccpaLi4')}</li>
                  </ul>
                  <p>{t('yourRights.exerciseRights')}</p>
                </section>

                <section id="policy-updates">
                  <h2>{t('policyUpdates.heading')}</h2>
                  <p>{t('policyUpdates.p1')}</p>
                  <p>{t('policyUpdates.p2')}</p>
                  <h3>{t('policyUpdates.versionHistory')}</h3>
                  <ul>
                    <li>{t.rich('policyUpdates.v2', richTags)}</li>
                    <li>{t.rich('policyUpdates.v1', richTags)}</li>
                  </ul>
                </section>

                <section id="contact-us">
                  <h2>{t('contactUs.heading')}</h2>
                  <p>{t('contactUs.intro')}</p>
                  <ul>
                    <li>{t.rich('contactUs.email', { b: (chunks: React.ReactNode) => <strong>{chunks}</strong>, emailLink: (chunks: React.ReactNode) => <a href="mailto:hello@lumenshore.com">{chunks}</a> })}</li>
                    <li>{t.rich('contactUs.company', richTags)}</li>
                    <li>{t.rich('contactUs.companyNumber', richTags)}</li>
                    <li>{t.rich('contactUs.vatNumber', richTags)}</li>
                  </ul>
                  <p>{t('contactUs.responseTime')}</p>
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
