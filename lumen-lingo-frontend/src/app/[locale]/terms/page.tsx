import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { LegalTOC, DownloadPDFButton } from '@/components/legal';
import { BreadcrumbJsonLd } from '@/components/home';
import { Link } from '@/i18n/navigation';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Terms.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/terms', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('description'),
      url: localizedUrl('/terms', locale),
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

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Terms' });
  const tLegal = await getTranslations({ locale, namespace: 'Legal' });

  const richTags = {
    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
  };

  const tocItems = [
    { id: 'introduction', text: t('introduction.heading'), level: 2 },
    { id: 'acceptance', text: t('acceptance.heading'), level: 2 },
    { id: 'your-account', text: t('yourAccount.heading'), level: 2 },
    { id: 'subscriptions', text: t('subscriptions.heading'), level: 2 },
    { id: 'acceptable-use', text: t('acceptableUse.heading'), level: 2 },
    { id: 'intellectual-property', text: t('intellectualProperty.heading'), level: 2 },
    { id: 'user-content', text: t('userContent.heading'), level: 2 },
    { id: 'disclaimers', text: t('disclaimers.heading'), level: 2 },
    { id: 'limitation-of-liability', text: t('limitationOfLiability.heading'), level: 2 },
    { id: 'consumer-rights', text: t('consumerRights.heading'), level: 2 },
    { id: 'aggregate-data', text: t('aggregateData.heading'), level: 2 },
    { id: 'termination', text: t('termination.heading'), level: 2 },
    { id: 'geographic-restrictions', text: t('geographicRestrictions.heading'), level: 2 },
    { id: 'governing-law', text: t('governingLaw.heading'), level: 2 },
    { id: 'changes', text: t('changes.heading'), level: 2 },
    { id: 'contact', text: t('contactUs.heading'), level: 2 },
  ];

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('breadcrumb'), href: '/terms' }]} />

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

                <section id="acceptance">
                  <h2>{t('acceptance.heading')}</h2>
                  <p>{t('acceptance.intro')}</p>
                  <ul>
                    <li>{t('acceptance.li1')}</li>
                    <li>{t('acceptance.li2')}</li>
                    <li>{t('acceptance.li3')}</li>
                    <li>{t('acceptance.li4')}</li>
                  </ul>
                </section>

                <section id="your-account">
                  <h2>{t('yourAccount.heading')}</h2>
                  <p>{t('yourAccount.intro')}</p>
                  <ul>
                    <li>{t('yourAccount.li1')}</li>
                    <li>{t('yourAccount.li2')}</li>
                    <li>{t('yourAccount.li3')}</li>
                  </ul>
                </section>

                <section id="subscriptions">
                  <h2>{t('subscriptions.heading')}</h2>
                  <p>{t('subscriptions.intro')}</p>
                  <ul>
                    <li>{t.rich('subscriptions.li1', richTags)}</li>
                    <li>{t.rich('subscriptions.li2', richTags)}</li>
                    <li>{t.rich('subscriptions.li3', richTags)}</li>
                    <li>{t.rich('subscriptions.li4', richTags)}</li>
                    <li>{t.rich('subscriptions.li5', richTags)}</li>
                    <li>{t.rich('subscriptions.li6', richTags)}</li>
                    <li>{t.rich('subscriptions.li7', richTags)}</li>
                  </ul>
                </section>

                <section id="acceptable-use">
                  <h2>{t('acceptableUse.heading')}</h2>
                  <p>{t('acceptableUse.intro')}</p>
                  <ul>
                    <li>{t('acceptableUse.li1')}</li>
                    <li>{t('acceptableUse.li2')}</li>
                    <li>{t('acceptableUse.li3')}</li>
                    <li>{t('acceptableUse.li4')}</li>
                    <li>{t('acceptableUse.li5')}</li>
                    <li>{t('acceptableUse.li6')}</li>
                  </ul>
                </section>

                <section id="intellectual-property">
                  <h2>{t('intellectualProperty.heading')}</h2>
                  <p>{t('intellectualProperty.p1')}</p>
                  <p>{t('intellectualProperty.p2')}</p>
                  <ul>
                    <li>{t('intellectualProperty.li1')}</li>
                    <li>{t('intellectualProperty.li2')}</li>
                    <li>{t('intellectualProperty.li3')}</li>
                  </ul>
                </section>

                <section id="user-content">
                  <h2>{t('userContent.heading')}</h2>
                  <p>{t('userContent.p1')}</p>
                  <p>{t.rich('userContent.p2', { privacyLink: (chunks: React.ReactNode) => <Link href="/privacy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</Link> })}</p>
                </section>

                <section id="disclaimers">
                  <h2>{t('disclaimers.heading')}</h2>
                  <p>{t('disclaimers.intro')}</p>
                  <ul>
                    <li>{t('disclaimers.li1')}</li>
                    <li>{t('disclaimers.li2')}</li>
                    <li>{t('disclaimers.li3')}</li>
                    <li>{t('disclaimers.li4')}</li>
                  </ul>
                  <p>{t('disclaimers.supplement')}</p>
                </section>

                <section id="limitation-of-liability">
                  <h2>{t('limitationOfLiability.heading')}</h2>
                  <p>{t('limitationOfLiability.intro')}</p>
                  <ul>
                    <li>{t('limitationOfLiability.li1')}</li>
                    <li>{t('limitationOfLiability.li2')}</li>
                    <li>{t('limitationOfLiability.li3')}</li>
                    <li>{t('limitationOfLiability.li4')}</li>
                  </ul>
                  <p>{t('limitationOfLiability.cap')}</p>
                </section>

                {/* ── Consumer Rights (UK CRA 2015) ── */}
                <section id="consumer-rights">
                  <h2>{t('consumerRights.heading')}</h2>
                  <p>{t.rich('consumerRights.intro', richTags)}</p>

                  <h3>{t('consumerRights.qualityHeading')}</h3>
                  <p>{t('consumerRights.qualityP1')}</p>
                  <ul>
                    <li>{t.rich('consumerRights.qualityLi1', richTags)}</li>
                    <li>{t.rich('consumerRights.qualityLi2', richTags)}</li>
                    <li>{t.rich('consumerRights.qualityLi3', richTags)}</li>
                  </ul>

                  <h3>{t('consumerRights.remediesHeading')}</h3>
                  <p>{t('consumerRights.remediesP1')}</p>
                  <ul>
                    <li>{t.rich('consumerRights.remediesLi1', richTags)}</li>
                    <li>{t.rich('consumerRights.remediesLi2', richTags)}</li>
                    <li>{t.rich('consumerRights.remediesLi3', richTags)}</li>
                  </ul>

                  <h3>{t('consumerRights.coolingOffHeading')}</h3>
                  <p>{t.rich('consumerRights.coolingOffP1', richTags)}</p>
                  <p>{t('consumerRights.coolingOffP2')}</p>

                  <h3>{t('consumerRights.refundsHeading')}</h3>
                  <p>{t.rich('consumerRights.refundsP1', richTags)}</p>
                  <p>{t('consumerRights.refundsP2')}</p>

                  <p>{t.rich('consumerRights.statutory', richTags)}</p>
                </section>

                {/* ── Aggregate Data ── */}
                <section id="aggregate-data">
                  <h2>{t('aggregateData.heading')}</h2>
                  <p>{t('aggregateData.p1')}</p>
                  <p>{t('aggregateData.p2')}</p>
                  <p>{t('aggregateData.p3')}</p>
                  <p>{t('aggregateData.p4')}</p>
                  <p>{t('aggregateData.survival')}</p>
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

                <section id="geographic-restrictions">
                  <h2>{t('geographicRestrictions.heading')}</h2>
                  <p>{t('geographicRestrictions.intro')}</p>
                  <ul>
                    <li>{t('geographicRestrictions.bullet1')}</li>
                    <li>{t('geographicRestrictions.bullet2')}</li>
                    <li>{t('geographicRestrictions.bullet3')}</li>
                  </ul>
                  <p>{t('geographicRestrictions.closing')}</p>
                </section>

                <section id="governing-law">
                  <h2>{t('governingLaw.heading')}</h2>
                  <p>{t('governingLaw.p1')}</p>
                  <p>{t('governingLaw.p2')}</p>
                </section>

                <section id="changes">
                  <h2>{t('changes.heading')}</h2>
                  <p>{t('changes.p1')}</p>
                  <p>{t('changes.p2')}</p>
                </section>

                <section id="contact">
                  <h2>{t('contactUs.heading')}</h2>
                  <p>{t('contactUs.intro')}</p>
                  <ul>
                    <li>{t.rich('contactUs.email', { b: (chunks: React.ReactNode) => <strong>{chunks}</strong>, emailLink: (chunks: React.ReactNode) => <a href="mailto:hello@lumenshore.com">{chunks}</a> })}</li>
                    <li>{t.rich('contactUs.company', richTags)}</li>
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
