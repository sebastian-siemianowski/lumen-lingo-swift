import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { LegalTOC, DownloadPDFButton, LanguageDisclaimer, LegalUpdateBanner, MobileLegalTOC, BackToTop } from '@/components/legal';
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
    { id: 'vat-compliance', text: t('vatCompliance.heading'), level: 2 },
    { id: 'eu-vat-compliance', text: t('euVatCompliance.heading'), level: 2 },
    { id: 'international-tax', text: t('internationalTax.heading'), level: 2 },
    { id: 'pricing-compliance', text: t('pricingCompliance.heading'), level: 2 },
    { id: 'distance-selling', text: t('distanceSelling.heading'), level: 2 },
    { id: 'acceptable-use', text: t('acceptableUse.heading'), level: 2 },
    { id: 'intellectual-property', text: t('intellectualProperty.heading'), level: 2 },
    { id: 'copyright-infringement', text: t('copyrightInfringement.heading'), level: 2 },
    { id: 'content-protection', text: t('contentProtection.heading'), level: 2 },
    { id: 'data-export', text: t('dataExport.heading'), level: 2 },
    { id: 'user-content', text: t('userContent.heading'), level: 2 },
    { id: 'disclaimers', text: t('disclaimers.heading'), level: 2 },
    { id: 'educational-disclaimer', text: t('educationalDisclaimer.heading'), level: 2 },
    { id: 'limitation-of-liability', text: t('limitationOfLiability.heading'), level: 2 },
    { id: 'force-majeure', text: t('forceMajeure.heading'), level: 2 },
    { id: 'indemnification', text: t('indemnification.heading'), level: 2 },
    { id: 'tiered-liability-caps', text: t('tieredLiabilityCaps.heading'), level: 2 },
    { id: 'damage-exclusions', text: t('damageExclusions.heading'), level: 2 },
    { id: 'warranty-disclaimer', text: t('warrantyDisclaimer.heading'), level: 2 },
    { id: 'user-reliance', text: t('userReliance.heading'), level: 2 },
    { id: 'third-party-services', text: t('thirdPartyServices.heading'), level: 2 },
    { id: 'service-availability', text: t('serviceAvailability.heading'), level: 2 },
    { id: 'consumer-rights', text: t('consumerRights.heading'), level: 2 },
    { id: 'eu-consumer-rights', text: t('euConsumerRights.heading'), level: 2 },
    { id: 'aggregate-data', text: t('aggregateData.heading'), level: 2 },
    { id: 'termination', text: t('termination.heading'), level: 2 },
    { id: 'geographic-restrictions', text: t('geographicRestrictions.heading'), level: 2 },
    { id: 'sanctions-compliance', text: t('sanctionsCompliance.heading'), level: 2 },
    { id: 'encryption-export', text: t('encryptionExport.heading'), level: 2 },
    { id: 'dispute-resolution', text: t('disputeResolution.heading'), level: 2 },
    { id: 'us-arbitration', text: t('usArbitration.heading'), level: 2 },
    { id: 'enforcement-remedies', text: t('enforcementRemedies.heading'), level: 2 },
    { id: 'entire-agreement', text: t('entireAgreement.heading'), level: 2 },
    { id: 'severability', text: t('severability.heading'), level: 2 },
    { id: 'assignment', text: t('assignment.heading'), level: 2 },
    { id: 'waiver', text: t('waiver.heading'), level: 2 },
    { id: 'no-partnership', text: t('noPartnership.heading'), level: 2 },
    { id: 'electronic-communications', text: t('electronicCommunications.heading'), level: 2 },
    { id: 'headings-clause', text: t('headingsClause.heading'), level: 2 },
    { id: 'survival', text: t('survival.heading'), level: 2 },
    { id: 'no-third-party-beneficiaries', text: t('noThirdPartyBeneficiaries.heading'), level: 2 },
    { id: 'user-representations', text: t('userRepresentations.heading'), level: 2 },
    { id: 'user-obligations', text: t('userObligations.heading'), level: 2 },
    { id: 'user-indemnification', text: t('userIndemnification.heading'), level: 2 },
    { id: 'breach-consequences', text: t('breachConsequences.heading'), level: 2 },
    { id: 'service-modification', text: t('serviceModification.heading'), level: 2 },
    { id: 'service-suspension', text: t('serviceSuspension.heading'), level: 2 },
    { id: 'service-termination', text: t('serviceTermination.heading'), level: 2 },
    { id: 'terms-modification', text: t('termsModification.heading'), level: 2 },
    { id: 'termination-effect', text: t('terminationEffect.heading'), level: 2 },
    { id: 'claims-limitation', text: t('claimsLimitation.heading'), level: 2 },
    { id: 'refund-policy', text: t('refundPolicy.heading'), level: 2 },
    { id: 'governing-law', text: t('governingLaw.heading'), level: 2 },
    { id: 'assumption-of-risk', text: t('assumptionOfRisk.heading'), level: 2 },
    { id: 'third-party-disclaimer', text: t('thirdPartyDisclaimer.heading'), level: 2 },
    { id: 'feedback-ip', text: t('feedbackIP.heading'), level: 2 },
    { id: 'pre-suit-notice', text: t('preSuitNotice.heading'), level: 2 },
    { id: 'sole-remedy', text: t('soleRemedy.heading'), level: 2 },
    { id: 'data-loss-shield', text: t('dataLossShield.heading'), level: 2 },
    { id: 'service-discontinuation', text: t('serviceDiscontinuation.heading'), level: 2 },
    { id: 'regulatory-shield', text: t('regulatoryShield.heading'), level: 2 },
    { id: 'account-security', text: t('accountSecurity.heading'), level: 2 },
    { id: 'class-action-waiver', text: t('classActionWaiver.heading'), level: 2 },
    { id: 'dsa-compliance', text: t('dsaCompliance.heading'), level: 2 },
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
              <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2 text-xs text-white/50">
                {tLegal('termsVersion')}
              </span>
              <DownloadPDFButton label={tLegal('downloadPdf')} />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8 sm:py-12 pb-20 sm:pb-28">
        <Container>
          <LanguageDisclaimer href="/terms" />
          <LegalUpdateBanner
            version="1.0"
            documentKey="terms"
            message={t('updateBannerMessage')}
            linkText={tLegal('updateBannerLink')}
            changesAnchor="changes"
            dismissLabel={tLegal('updateBannerDismiss')}
          />
          <div className="mx-auto max-w-4xl xl:grid xl:grid-cols-[1fr_200px] xl:gap-12">
            {/* Mobile TOC */}
            <div className="col-span-full mb-6">
              <MobileLegalTOC items={tocItems} label={tLegal('tocLabel')} />
            </div>
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

                <section id="vat-compliance">
                  <h2>{t('vatCompliance.heading')}</h2>
                  <p>{t('vatCompliance.intro')}</p>

                  <h3>{t('vatCompliance.iapHeading')}</h3>
                  <p>{t('vatCompliance.iapP1')}</p>
                  <p>{t('vatCompliance.iapP2')}</p>

                  <h3>{t('vatCompliance.directHeading')}</h3>
                  <p>{t('vatCompliance.directP1')}</p>
                  <p>{t('vatCompliance.directP2')}</p>

                  <h3>{t('vatCompliance.recordsHeading')}</h3>
                  <p>{t('vatCompliance.recordsP1')}</p>
                </section>

                <section id="eu-vat-compliance">
                  <h2>{t('euVatCompliance.heading')}</h2>
                  <p>{t('euVatCompliance.intro')}</p>

                  <h3>{t('euVatCompliance.appleMarketplaceHeading')}</h3>
                  <p>{t('euVatCompliance.appleMarketplaceP1')}</p>
                  <p>{t('euVatCompliance.appleMarketplaceP2')}</p>

                  <h3>{t('euVatCompliance.ossHeading')}</h3>
                  <p>{t('euVatCompliance.ossP1')}</p>
                  <p>{t('euVatCompliance.ossP2')}</p>

                  <h3>{t('euVatCompliance.b2bHeading')}</h3>
                  <p>{t('euVatCompliance.b2bP1')}</p>

                  <h3>{t('euVatCompliance.evidenceHeading')}</h3>
                  <p>{t('euVatCompliance.evidenceP1')}</p>
                </section>

                <section id="international-tax">
                  <h2>{t('internationalTax.heading')}</h2>
                  <p>{t('internationalTax.intro')}</p>

                  <h3>{t('internationalTax.japanHeading')}</h3>
                  <p>{t('internationalTax.japanP1')}</p>

                  <h3>{t('internationalTax.usHeading')}</h3>
                  <p>{t('internationalTax.usP1')}</p>

                  <h3>{t('internationalTax.australiaHeading')}</h3>
                  <p>{t('internationalTax.australiaP1')}</p>

                  <h3>{t('internationalTax.indiaHeading')}</h3>
                  <p>{t('internationalTax.indiaP1')}</p>

                  <h3>{t('internationalTax.oecdHeading')}</h3>
                  <p>{t('internationalTax.oecdP1')}</p>

                  <h3>{t('internationalTax.corporationTaxHeading')}</h3>
                  <p>{t('internationalTax.corporationTaxP1')}</p>

                  <h3>{t('internationalTax.transferPricingHeading')}</h3>
                  <p>{t('internationalTax.transferPricingP1')}</p>
                </section>

                <section id="pricing-compliance">
                  <h2>{t('pricingCompliance.heading')}</h2>
                  <p>{t('pricingCompliance.intro')}</p>

                  <h3>{t('pricingCompliance.ukPriceMarkingHeading')}</h3>
                  <p>{t('pricingCompliance.ukPriceMarkingP1')}</p>

                  <h3>{t('pricingCompliance.euConsumerRightsHeading')}</h3>
                  <p>{t('pricingCompliance.euConsumerRightsP1')}</p>

                  <h3>{t('pricingCompliance.euOmnibusHeading')}</h3>
                  <p>{t('pricingCompliance.euOmnibusP1')}</p>

                  <h3>{t('pricingCompliance.iosAppPricingHeading')}</h3>
                  <p>{t('pricingCompliance.iosAppPricingP1')}</p>

                  <h3>{t('pricingCompliance.websitePricingHeading')}</h3>
                  <p>{t('pricingCompliance.websitePricingP1')}</p>
                </section>

                <section id="distance-selling">
                  <h2>{t('distanceSelling.heading')}</h2>
                  <p>{t('distanceSelling.intro')}</p>
                  <ul>
                    <li>{t.rich('distanceSelling.li1', richTags)}</li>
                    <li>{t.rich('distanceSelling.li2', richTags)}</li>
                    <li>{t.rich('distanceSelling.li3', richTags)}</li>
                    <li>{t.rich('distanceSelling.li4', richTags)}</li>
                    <li>{t.rich('distanceSelling.li5', richTags)}</li>
                    <li>{t.rich('distanceSelling.li6', richTags)}</li>
                    <li>{t.rich('distanceSelling.li7', {
                      ...richTags,
                      refundLink: (chunks: React.ReactNode) => (
                        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">{chunks}</a>
                      ),
                      email: (chunks: React.ReactNode) => (
                        <a href="mailto:support@lumenshore.com">{chunks}</a>
                      ),
                    })}</li>
                    <li>{t.rich('distanceSelling.li8', {
                      ...richTags,
                      email: (chunks: React.ReactNode) => (
                        <a href="mailto:support@lumenshore.com">{chunks}</a>
                      ),
                    })}</li>
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
                    <li>{t('intellectualProperty.li4')}</li>
                    <li>{t('intellectualProperty.li5')}</li>
                  </ul>
                </section>

                <section id="copyright-infringement">
                  <h2>{t('copyrightInfringement.heading')}</h2>
                  <p>{t('copyrightInfringement.p1')}</p>
                  <p>{t('copyrightInfringement.p2')}</p>
                  <ul>
                    <li>{t('copyrightInfringement.li1')}</li>
                    <li>{t('copyrightInfringement.li2')}</li>
                    <li>{t('copyrightInfringement.li3')}</li>
                    <li>{t('copyrightInfringement.li4')}</li>
                    <li>{t('copyrightInfringement.li5')}</li>
                    <li>{t('copyrightInfringement.li6')}</li>
                  </ul>
                  <p>
                    {t.rich('copyrightInfringement.p3', {
                      email: (chunks: React.ReactNode) => (
                        <a href="mailto:legal@lumenshore.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</a>
                      ),
                    })}
                  </p>
                  <p>{t('copyrightInfringement.p4')}</p>
                  <p>{t('copyrightInfringement.p5')}</p>
                  <p>{t('copyrightInfringement.p6')}</p>
                </section>

                <section id="content-protection">
                  <h2>{t('contentProtection.heading')}</h2>
                  <p>{t('contentProtection.p1')}</p>
                  <ul>
                    <li>{t('contentProtection.li1')}</li>
                    <li>{t('contentProtection.li2')}</li>
                    <li>{t('contentProtection.li3')}</li>
                  </ul>
                  <p>{t('contentProtection.p2')}</p>
                  <ul>
                    <li>{t('contentProtection.li4')}</li>
                    <li>{t('contentProtection.li5')}</li>
                    <li>{t('contentProtection.li6')}</li>
                  </ul>
                </section>

                <section id="data-export">
                  <h2>{t('dataExport.heading')}</h2>
                  <p>{t('dataExport.p1')}</p>
                  <ul>
                    <li>{t('dataExport.li1')}</li>
                    <li>{t('dataExport.li2')}</li>
                    <li>{t('dataExport.li3')}</li>
                  </ul>
                  <p>{t('dataExport.p2')}</p>
                </section>

                <section id="user-content">
                  <h2>{t('userContent.heading')}</h2>
                  <p>{t('userContent.p1')}</p>
                  <p>{t('userContent.p2UGC')}</p>
                  <p>{t.rich('userContent.p3', { privacyLink: (chunks: React.ReactNode) => <Link href="/privacy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</Link> })}</p>
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

                <section id="educational-disclaimer">
                  <h2>{t('educationalDisclaimer.heading')}</h2>
                  <p>{t('educationalDisclaimer.p1')}</p>
                  <p>{t('educationalDisclaimer.p2')}</p>
                  <p>{t('educationalDisclaimer.p3')}</p>
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
                  <p>{t('limitationOfLiability.statutory')}</p>
                </section>

                <section id="force-majeure">
                  <h2>{t('forceMajeure.heading')}</h2>
                  <p>{t('forceMajeure.p1')}</p>
                  <p>{t('forceMajeure.p2')}</p>
                </section>

                <section id="indemnification">
                  <h2>{t('indemnification.heading')}</h2>
                  <p>{t('indemnification.p1')}</p>
                  <ul>
                    <li>{t('indemnification.li1')}</li>
                    <li>{t('indemnification.li2')}</li>
                    <li>{t('indemnification.li3')}</li>
                    <li>{t('indemnification.li4')}</li>
                  </ul>
                </section>

                <section id="tiered-liability-caps">
                  <h2>{t('tieredLiabilityCaps.heading')}</h2>
                  <p>{t('tieredLiabilityCaps.freeP1')}</p>
                  <p>{t('tieredLiabilityCaps.paidP1')}</p>
                  <p>{t('tieredLiabilityCaps.iapNote')}</p>
                </section>

                <section id="damage-exclusions">
                  <h2>{t('damageExclusions.heading')}</h2>
                  <p>{t('damageExclusions.p1')}</p>
                  <p>{t('damageExclusions.p2')}</p>
                </section>

                <section id="warranty-disclaimer">
                  <h2>{t('warrantyDisclaimer.heading')}</h2>
                  <p>{t('warrantyDisclaimer.p1')}</p>
                  <p>{t('warrantyDisclaimer.p2')}</p>
                  <p>{t('warrantyDisclaimer.ukCarveout')}</p>
                </section>

                <section id="user-reliance">
                  <h2>{t('userReliance.heading')}</h2>
                  <p>{t('userReliance.p1')}</p>
                  <p>{t('userReliance.p2')}</p>
                </section>

                <section id="third-party-services">
                  <h2>{t('thirdPartyServices.heading')}</h2>
                  <p>{t('thirdPartyServices.p1')}</p>
                  <p>{t('thirdPartyServices.p2')}</p>
                </section>

                <section id="service-availability">
                  <h2>{t('serviceAvailability.heading')}</h2>
                  <p>{t('serviceAvailability.p1')}</p>
                  <p>{t('serviceAvailability.p2')}</p>
                  <p>{t('serviceAvailability.p3')}</p>
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

                {/* ── EU Consumer Rights Directive (2011/83/EU) ── */}
                <section id="eu-consumer-rights">
                  <h2>{t('euConsumerRights.heading')}</h2>
                  <p>{t('euConsumerRights.intro')}</p>

                  <h3>{t('euConsumerRights.preContractualHeading')}</h3>
                  <p>{t('euConsumerRights.preContractualP1')}</p>
                  <ul>
                    <li>{t.rich('euConsumerRights.preContractualLi1', richTags)}</li>
                    <li>{t.rich('euConsumerRights.preContractualLi2', richTags)}</li>
                    <li>{t.rich('euConsumerRights.preContractualLi3', richTags)}</li>
                    <li>{t.rich('euConsumerRights.preContractualLi4', richTags)}</li>
                    <li>{t.rich('euConsumerRights.preContractualLi5', richTags)}</li>
                  </ul>

                  <h3>{t('euConsumerRights.withdrawalHeading')}</h3>
                  <p>{t.rich('euConsumerRights.withdrawalP1', richTags)}</p>
                  <p>{t('euConsumerRights.withdrawalP2')}</p>

                  <h3>{t('euConsumerRights.hiddenChargesHeading')}</h3>
                  <p>{t('euConsumerRights.hiddenChargesP1')}</p>

                  <h3>{t('euConsumerRights.buttonObligationHeading')}</h3>
                  <p>{t('euConsumerRights.buttonObligationP1')}</p>

                  <h3>{t('euConsumerRights.cancellationHeading')}</h3>
                  <p>{t('euConsumerRights.cancellationP1')}</p>

                  <p>{t('euConsumerRights.statutory')}</p>
                </section>

                {/* ── Aggregate Data (cross-reference to Privacy Policy) ── */}
                <section id="aggregate-data">
                  <h2>{t('aggregateData.heading')}</h2>
                  <p>{t.rich('aggregateData.crossReference', {
                    privacyLink: (chunks: React.ReactNode) => (
                      <Link href="/privacy#aggregate-data" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</Link>
                    ),
                  })}</p>
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

                <section id="sanctions-compliance">
                  <h2>{t('sanctionsCompliance.heading')}</h2>
                  <p>{t('sanctionsCompliance.intro')}</p>

                  <h3>{t('sanctionsCompliance.ukHeading')}</h3>
                  <p>{t('sanctionsCompliance.ukP1')}</p>

                  <h3>{t('sanctionsCompliance.usHeading')}</h3>
                  <p>{t('sanctionsCompliance.usP1')}</p>

                  <h3>{t('sanctionsCompliance.euHeading')}</h3>
                  <p>{t('sanctionsCompliance.euP1')}</p>

                  <h3>{t('sanctionsCompliance.ukraineHeading')}</h3>
                  <p>{t('sanctionsCompliance.ukraineP1')}</p>

                  <h3>{t('sanctionsCompliance.screeningHeading')}</h3>
                  <p>{t('sanctionsCompliance.screeningP1')}</p>
                </section>

                <section id="encryption-export">
                  <h2>{t('encryptionExport.heading')}</h2>
                  <p>{t('encryptionExport.intro')}</p>

                  <h3>{t('encryptionExport.auditHeading')}</h3>
                  <p>{t('encryptionExport.auditP1')}</p>
                  <ul>
                    <li>{t('encryptionExport.auditLi1')}</li>
                    <li>{t('encryptionExport.auditLi2')}</li>
                    <li>{t('encryptionExport.auditLi3')}</li>
                    <li>{t('encryptionExport.auditLi4')}</li>
                  </ul>

                  <h3>{t('encryptionExport.earHeading')}</h3>
                  <p>{t('encryptionExport.earP1')}</p>

                  <h3>{t('encryptionExport.frenchHeading')}</h3>
                  <p>{t('encryptionExport.frenchP1')}</p>

                  <h3>{t('encryptionExport.appStoreHeading')}</h3>
                  <p>{t('encryptionExport.appStoreP1')}</p>
                </section>

                <section id="dispute-resolution">
                  <h2>{t('disputeResolution.heading')}</h2>
                  <p>{t('disputeResolution.intro')}</p>

                  <h3>{t('disputeResolution.step1Heading')}</h3>
                  <p>{t.rich('disputeResolution.step1P1', {
                    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                    emailLink: (chunks: React.ReactNode) => (
                      <a href="mailto:hello@lumenshore.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</a>
                    ),
                  })}</p>

                  <h3>{t('disputeResolution.step2Heading')}</h3>
                  <p>{t('disputeResolution.step2P1')}</p>

                  <h3>{t('disputeResolution.step3Heading')}</h3>
                  <p>{t('disputeResolution.step3P1')}</p>

                  <h3>{t('disputeResolution.odrHeading')}</h3>
                  <p>{t.rich('disputeResolution.odrP1', {
                    odrLink: (chunks: React.ReactNode) => (
                      <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</a>
                    ),
                  })}</p>

                  <h3>{t('disputeResolution.arbitrationHeading')}</h3>
                  <p>{t.rich('disputeResolution.arbitrationP1', richTags)}</p>
                  <p>{t.rich('disputeResolution.arbitrationP2', richTags)}</p>

                  <h3>{t('disputeResolution.classActionHeading')}</h3>
                  <p>{t('disputeResolution.classActionP1')}</p>

                  <p>{t('disputeResolution.consumerNote')}</p>
                </section>

                <section id="us-arbitration">
                  <h2>{t('usArbitration.heading')}</h2>
                  <p>{t('usArbitration.p1')}</p>
                  <p>{t('usArbitration.p2')}</p>
                  <p>{t('usArbitration.p3')}</p>

                  <h3>{t('usArbitration.classActionHeading')}</h3>
                  <p><strong>{t('usArbitration.classActionP1')}</strong></p>
                  <p>{t('usArbitration.classActionP2')}</p>

                  <h3>{t('usArbitration.optOutHeading')}</h3>
                  <p>{t.rich('usArbitration.optOutP1', {
                    emailLink: (chunks: React.ReactNode) => (
                      <a href="mailto:hello@lumenshore.com" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">{chunks}</a>
                    ),
                  })}</p>

                  <h3>{t('usArbitration.smallClaimsHeading')}</h3>
                  <p>{t('usArbitration.smallClaimsP1')}</p>

                  <h3>{t('usArbitration.exceptionsHeading')}</h3>
                  <p>{t('usArbitration.exceptionsP1')}</p>

                  <p>{t('usArbitration.severabilityP1')}</p>
                </section>

                <section id="enforcement-remedies">
                  <h2>{t('enforcementRemedies.heading')}</h2>
                  <p>{t('enforcementRemedies.p1')}</p>
                  <p>{t('enforcementRemedies.p2')}</p>
                  <ul>
                    <li>{t('enforcementRemedies.li1')}</li>
                    <li>{t('enforcementRemedies.li2')}</li>
                    <li>{t('enforcementRemedies.li3')}</li>
                  </ul>
                  <p>{t('enforcementRemedies.p3')}</p>
                </section>

                {/* ── Protective Boilerplate (Story 14.6) ─────────── */}
                <section id="entire-agreement">
                  <h2>{t('entireAgreement.heading')}</h2>
                  <p>{t('entireAgreement.p1')}</p>
                  <p>{t('entireAgreement.p2')}</p>
                  <p>{t('entireAgreement.p3')}</p>
                </section>

                <section id="severability">
                  <h2>{t('severability.heading')}</h2>
                  <p>{t('severability.p1')}</p>
                  <p>{t('severability.p2')}</p>
                </section>

                <section id="assignment">
                  <h2>{t('assignment.heading')}</h2>
                  <p>{t('assignment.p1')}</p>
                  <p>{t('assignment.p2')}</p>
                </section>

                <section id="waiver">
                  <h2>{t('waiver.heading')}</h2>
                  <p>{t('waiver.p1')}</p>
                  <p>{t('waiver.p2')}</p>
                  <p>{t('waiver.p3')}</p>
                </section>

                <section id="no-partnership">
                  <h2>{t('noPartnership.heading')}</h2>
                  <p>{t('noPartnership.p1')}</p>
                  <p>{t('noPartnership.p2')}</p>
                </section>

                <section id="electronic-communications">
                  <h2>{t('electronicCommunications.heading')}</h2>
                  <p>{t('electronicCommunications.p1')}</p>
                  <p>{t('electronicCommunications.p2')}</p>
                </section>

                <section id="headings-clause">
                  <h2>{t('headingsClause.heading')}</h2>
                  <p>{t('headingsClause.p1')}</p>
                </section>

                <section id="survival">
                  <h2>{t('survival.heading')}</h2>
                  <p>{t('survival.p1')}</p>
                </section>

                <section id="no-third-party-beneficiaries">
                  <h2>{t('noThirdPartyBeneficiaries.heading')}</h2>
                  <p>{t('noThirdPartyBeneficiaries.p1')}</p>
                  <p>{t('noThirdPartyBeneficiaries.p2')}</p>
                  <p>{t('noThirdPartyBeneficiaries.appleException')}</p>
                </section>

                {/* ── User Representations & Obligations (Story 14.7) ── */}
                <section id="user-representations">
                  <h2>{t('userRepresentations.heading')}</h2>
                  <p>{t('userRepresentations.p1')}</p>
                  <ul>
                    <li>{t('userRepresentations.li1')}</li>
                    <li>{t('userRepresentations.li2')}</li>
                    <li>{t('userRepresentations.li3')}</li>
                    <li>{t('userRepresentations.li4')}</li>
                    <li>{t('userRepresentations.li5')}</li>
                    <li>{t('userRepresentations.li6')}</li>
                  </ul>
                </section>

                <section id="user-obligations">
                  <h2>{t('userObligations.heading')}</h2>
                  <p>{t('userObligations.p1')}</p>
                  <ul>
                    <li>{t('userObligations.li1')}</li>
                    <li>{t('userObligations.li2')}</li>
                    <li>{t('userObligations.li3')}</li>
                    <li>{t('userObligations.li4')}</li>
                    <li>{t('userObligations.li5')}</li>
                    <li>{t('userObligations.li6')}</li>
                    <li>{t('userObligations.li7')}</li>
                    <li>{t('userObligations.li8')}</li>
                  </ul>
                </section>

                <section id="user-indemnification">
                  <h2>{t('userIndemnification.heading')}</h2>
                  <p>{t('userIndemnification.p1')}</p>
                  <ul>
                    <li>{t('userIndemnification.li1')}</li>
                    <li>{t('userIndemnification.li2')}</li>
                    <li>{t('userIndemnification.li3')}</li>
                    <li>{t('userIndemnification.li4')}</li>
                  </ul>
                  <p>{t('userIndemnification.p2')}</p>
                </section>

                <section id="breach-consequences">
                  <h2>{t('breachConsequences.heading')}</h2>
                  <p>{t('breachConsequences.p1')}</p>
                  <ul>
                    <li>{t('breachConsequences.li1')}</li>
                    <li>{t('breachConsequences.li2')}</li>
                    <li>{t('breachConsequences.li3')}</li>
                  </ul>
                  <p>{t('breachConsequences.p2')}</p>
                </section>

                {/* ── Service Modification Rights (Story 14.8) ── */}
                <section id="service-modification">
                  <h2>{t('serviceModification.heading')}</h2>
                  <p>{t('serviceModification.p1')}</p>
                  <p>{t('serviceModification.p2')}</p>
                  <p>{t('serviceModification.p3')}</p>
                </section>

                <section id="service-suspension">
                  <h2>{t('serviceSuspension.heading')}</h2>
                  <p>{t('serviceSuspension.p1')}</p>
                  <p>{t('serviceSuspension.p2')}</p>
                  <p>{t('serviceSuspension.p3')}</p>
                </section>

                <section id="service-termination">
                  <h2>{t('serviceTermination.heading')}</h2>
                  <p>{t('serviceTermination.p1')}</p>
                  <ul>
                    <li>{t('serviceTermination.li1')}</li>
                    <li>{t('serviceTermination.li2')}</li>
                    <li>{t('serviceTermination.li3')}</li>
                    <li>{t('serviceTermination.li4')}</li>
                  </ul>
                  <p>{t('serviceTermination.p2')}</p>
                  <p>{t('serviceTermination.p3')}</p>
                </section>

                <section id="terms-modification">
                  <h2>{t('termsModification.heading')}</h2>
                  <p>{t('termsModification.p1')}</p>
                  <p>{t('termsModification.p2')}</p>
                  <p>{t('termsModification.p3')}</p>
                  <p>{t('termsModification.p4')}</p>
                  <p>{t('termsModification.p5')}</p>
                </section>

                <section id="termination-effect">
                  <h2>{t('terminationEffect.heading')}</h2>
                  <p>{t('terminationEffect.p1')}</p>
                  <p>{t('terminationEffect.p2')}</p>
                  <p>{t('terminationEffect.p3')}</p>
                  <p>{t('terminationEffect.p4')}</p>
                </section>

                {/* ── Limitation Period for Claims (Story 14.9) ── */}
                <section id="claims-limitation">
                  <h2>{t('claimsLimitation.heading')}</h2>
                  <p>{t('claimsLimitation.p1')}</p>
                  <p>{t('claimsLimitation.p2')}</p>
                  <p>{t('claimsLimitation.p3')}</p>
                  <p>{t('claimsLimitation.p4')}</p>
                  <p>{t('claimsLimitation.p5')}</p>
                </section>

                {/* ── Refund & Cancellation Policy (Story 14.10) ── */}
                <section id="refund-policy">
                  <h2>{t('refundPolicy.heading')}</h2>
                  <h3>{t('refundPolicy.appleIapHeading')}</h3>
                  <p>{t('refundPolicy.appleIap1')}</p>
                  <p>{t('refundPolicy.appleIap2')}</p>
                  <p>{t('refundPolicy.appleIap3')}</p>
                  <h3>{t('refundPolicy.cancellationHeading')}</h3>
                  <p>{t('refundPolicy.cancellation1')}</p>
                  <p>{t('refundPolicy.cancellation2')}</p>
                  <p>{t('refundPolicy.cancellation3')}</p>
                  <h3>{t('refundPolicy.trialHeading')}</h3>
                  <p>{t('refundPolicy.trial1')}</p>
                  <p>{t('refundPolicy.trial2')}</p>
                  <h3>{t('refundPolicy.coolingOffHeading')}</h3>
                  <p>{t('refundPolicy.coolingOff1')}</p>
                  <p>{t('refundPolicy.coolingOff2')}</p>
                  <p>{t('refundPolicy.coolingOff3')}</p>
                </section>

                {/* ── Governing Law, Jurisdiction & Venue (Story 14.11) ── */}
                <section id="governing-law">
                  <h2>{t('governingLaw.heading')}</h2>
                  <h3>{t('governingLaw.lawHeading')}</h3>
                  <p>{t('governingLaw.law1')}</p>
                  <p>{t('governingLaw.law2')}</p>
                  <h3>{t('governingLaw.jurisdictionHeading')}</h3>
                  <p>{t('governingLaw.jurisdiction1')}</p>
                  <p>{t('governingLaw.jurisdiction2')}</p>
                  <p>{t('governingLaw.jurisdiction3')}</p>
                  <h3>{t('governingLaw.venueHeading')}</h3>
                  <p>{t('governingLaw.venue1')}</p>
                  <p>{t('governingLaw.venue2')}</p>
                  <h3>{t('governingLaw.enforceabilityHeading')}</h3>
                  <p>{t('governingLaw.enforceability1')}</p>
                  <p>{t('governingLaw.enforceability2')}</p>
                  <p>{t('governingLaw.enforceability3')}</p>
                  <h3>{t('governingLaw.languageHeading')}</h3>
                  <p>{t('governingLaw.language1')}</p>
                  <p>{t('governingLaw.language2')}</p>
                </section>

                {/* ── Assumption of Risk & Release (Story 14.12) ── */}
                <section id="assumption-of-risk">
                  <h2>{t('assumptionOfRisk.heading')}</h2>
                  <h3>{t('assumptionOfRisk.riskHeading')}</h3>
                  <p>{t('assumptionOfRisk.risk1')}</p>
                  <p>{t('assumptionOfRisk.risk2')}</p>
                  <h3>{t('assumptionOfRisk.releaseHeading')}</h3>
                  <p>{t('assumptionOfRisk.release1')}</p>
                  <p>{t('assumptionOfRisk.release2')}</p>
                  <h3>{t('assumptionOfRisk.carveOutHeading')}</h3>
                  <p>{t('assumptionOfRisk.carveOut1')}</p>
                  <p>{t('assumptionOfRisk.carveOut2')}</p>
                </section>

                {/* ── Third-Party Content, Links & Services (Story 14.13) ── */}
                <section id="third-party-disclaimer">
                  <h2>{t('thirdPartyDisclaimer.heading')}</h2>
                  <h3>{t('thirdPartyDisclaimer.linksHeading')}</h3>
                  <p>{t('thirdPartyDisclaimer.links1')}</p>
                  <p>{t('thirdPartyDisclaimer.links2')}</p>
                  <p>{t('thirdPartyDisclaimer.links3')}</p>
                  <h3>{t('thirdPartyDisclaimer.appleHeading')}</h3>
                  <p>{t('thirdPartyDisclaimer.apple1')}</p>
                  <p>{t('thirdPartyDisclaimer.apple2')}</p>
                  <p>{t('thirdPartyDisclaimer.apple3')}</p>
                  <p>{t('thirdPartyDisclaimer.apple4')}</p>
                  <h3>{t('thirdPartyDisclaimer.infraHeading')}</h3>
                  <p>{t('thirdPartyDisclaimer.infra1')}</p>
                  <p>{t('thirdPartyDisclaimer.infra2')}</p>
                  <h3>{t('thirdPartyDisclaimer.ugcHeading')}</h3>
                  <p>{t('thirdPartyDisclaimer.ugc1')}</p>
                  <h3>{t('thirdPartyDisclaimer.authHeading')}</h3>
                  <p>{t('thirdPartyDisclaimer.auth1')}</p>
                </section>

                {/* ── Feedback & Submissions IP (Story 14.14) ── */}
                <section id="feedback-ip">
                  <h2>{t('feedbackIP.heading')}</h2>
                  <h3>{t('feedbackIP.assignHeading')}</h3>
                  <p>{t('feedbackIP.assign1')}</p>
                  <p>{t('feedbackIP.assign2')}</p>
                  <p>{t('feedbackIP.assign3')}</p>
                  <h3>{t('feedbackIP.obligationHeading')}</h3>
                  <p>{t('feedbackIP.obligation1')}</p>
                  <p>{t('feedbackIP.obligation2')}</p>
                  <h3>{t('feedbackIP.confidentialityHeading')}</h3>
                  <p>{t('feedbackIP.confidentiality1')}</p>
                  <p>{t('feedbackIP.confidentiality2')}</p>
                  <h3>{t('feedbackIP.representationHeading')}</h3>
                  <p>{t('feedbackIP.representation1')}</p>
                  <p>{t('feedbackIP.representation2')}</p>
                </section>

                {/* ── Pre-Suit Notice & Mandatory Negotiation (Story 14.15) ── */}
                <section id="pre-suit-notice">
                  <h2>{t('preSuitNotice.heading')}</h2>
                  <h3>{t('preSuitNotice.noticeHeading')}</h3>
                  <p>{t('preSuitNotice.notice1')}</p>
                  <p>{t('preSuitNotice.notice2')}</p>
                  <h3>{t('preSuitNotice.negotiationHeading')}</h3>
                  <p>{t('preSuitNotice.negotiation1')}</p>
                  <p>{t('preSuitNotice.negotiation2')}</p>
                  <p>{t('preSuitNotice.negotiation3')}</p>
                  <h3>{t('preSuitNotice.consequenceHeading')}</h3>
                  <p>{t('preSuitNotice.consequence1')}</p>
                  <p>{t('preSuitNotice.consequence2')}</p>
                  <h3>{t('preSuitNotice.exceptionHeading')}</h3>
                  <p>{t('preSuitNotice.exception1')}</p>
                  <h3>{t('preSuitNotice.tollingHeading')}</h3>
                  <p>{t('preSuitNotice.tolling1')}</p>
                  <p>{t('preSuitNotice.tolling2')}</p>
                </section>

                {/* ── Sole & Exclusive Remedy (Story 14.16) ── */}
                <section id="sole-remedy">
                  <h2>{t('soleRemedy.heading')}</h2>
                  <h3>{t('soleRemedy.dissatisfactionHeading')}</h3>
                  <p>{t('soleRemedy.dissatisfaction1')}</p>
                  <p>{t('soleRemedy.dissatisfaction2')}</p>
                  <p>{t('soleRemedy.dissatisfaction3')}</p>
                  <h3>{t('soleRemedy.failureHeading')}</h3>
                  <p>{t('soleRemedy.failure1')}</p>
                  <p>{t('soleRemedy.failure2')}</p>
                  <p>{t('soleRemedy.failure3')}</p>
                  <h3>{t('soleRemedy.performanceHeading')}</h3>
                  <p>{t('soleRemedy.performance1')}</p>
                  <p>{t('soleRemedy.performance2')}</p>
                  <h3>{t('soleRemedy.cumulativeHeading')}</h3>
                  <p>{t('soleRemedy.cumulative1')}</p>
                  <p>{t('soleRemedy.cumulative2')}</p>
                  <h3>{t('soleRemedy.consumerHeading')}</h3>
                  <p>{t('soleRemedy.consumer1')}</p>
                  <p>{t('soleRemedy.consumer2')}</p>
                </section>

                <section id="data-loss-shield">
                  <h2>{t('dataLossShield.heading')}</h2>
                  <h3>{t('dataLossShield.dataLossHeading')}</h3>
                  <p>{t('dataLossShield.dataLoss1')}</p>
                  <p>{t('dataLossShield.dataLoss2')}</p>
                  <p>{t('dataLossShield.dataLoss3')}</p>
                  <p>{t('dataLossShield.dataLoss4')}</p>
                  <h3>{t('dataLossShield.interruptionHeading')}</h3>
                  <p>{t('dataLossShield.interruption1')}</p>
                  <p>{t('dataLossShield.interruption2')}</p>
                  <p>{t('dataLossShield.interruption3')}</p>
                  <p>{t('dataLossShield.interruption4')}</p>
                  <h3>{t('dataLossShield.forceMajeureHeading')}</h3>
                  <p>{t('dataLossShield.forceMajeure1')}</p>
                  <p>{t('dataLossShield.forceMajeure2')}</p>
                  <p>{t('dataLossShield.forceMajeure3')}</p>
                  <p>{t('dataLossShield.forceMajeure4')}</p>
                  <h3>{t('dataLossShield.updateHeading')}</h3>
                  <p>{t('dataLossShield.update1')}</p>
                  <p>{t('dataLossShield.update2')}</p>
                  <p>{t('dataLossShield.update3')}</p>
                  <h3>{t('dataLossShield.cloudHeading')}</h3>
                  <p>{t('dataLossShield.cloud1')}</p>
                  <p>{t('dataLossShield.cloud2')}</p>
                  <p>{t('dataLossShield.cloud3')}</p>
                  <h3>{t('dataLossShield.fiduciaryHeading')}</h3>
                  <p>{t('dataLossShield.fiduciary1')}</p>
                  <p>{t('dataLossShield.fiduciary2')}</p>
                </section>

                <section id="service-discontinuation">
                  <h2>{t('serviceDiscontinuation.heading')}</h2>
                  <h3>{t('serviceDiscontinuation.discontinueHeading')}</h3>
                  <p>{t('serviceDiscontinuation.discontinue1')}</p>
                  <p>{t('serviceDiscontinuation.discontinue2')}</p>
                  <p>{t('serviceDiscontinuation.discontinue3')}</p>
                  <p>{t('serviceDiscontinuation.discontinue4')}</p>
                  <h3>{t('serviceDiscontinuation.liabilityCapHeading')}</h3>
                  <p>{t('serviceDiscontinuation.liabilityCap1')}</p>
                  <p>{t('serviceDiscontinuation.liabilityCap2')}</p>
                  <p>{t('serviceDiscontinuation.liabilityCap3')}</p>
                  <h3>{t('serviceDiscontinuation.transferHeading')}</h3>
                  <p>{t('serviceDiscontinuation.transfer1')}</p>
                  <p>{t('serviceDiscontinuation.transfer2')}</p>
                  <p>{t('serviceDiscontinuation.transfer3')}</p>
                  <p>{t('serviceDiscontinuation.transfer4')}</p>
                  <h3>{t('serviceDiscontinuation.insolvencyHeading')}</h3>
                  <p>{t('serviceDiscontinuation.insolvency1')}</p>
                  <p>{t('serviceDiscontinuation.insolvency2')}</p>
                  <p>{t('serviceDiscontinuation.insolvency3')}</p>
                  <h3>{t('serviceDiscontinuation.minimumHeading')}</h3>
                  <p>{t('serviceDiscontinuation.minimum1')}</p>
                  <p>{t('serviceDiscontinuation.minimum2')}</p>
                  <h3>{t('serviceDiscontinuation.contentRemovalHeading')}</h3>
                  <p>{t('serviceDiscontinuation.contentRemoval1')}</p>
                  <p>{t('serviceDiscontinuation.contentRemoval2')}</p>
                  <p>{t('serviceDiscontinuation.contentRemoval3')}</p>
                  <h3>{t('serviceDiscontinuation.survivalHeading')}</h3>
                  <p>{t('serviceDiscontinuation.survival1')}</p>
                </section>

                <section id="regulatory-shield">
                  <h2>{t('regulatoryShield.heading')}</h2>
                  <h3>{t('regulatoryShield.regulatoryChangeHeading')}</h3>
                  <p>{t('regulatoryShield.regulatoryChange1')}</p>
                  <p>{t('regulatoryShield.regulatoryChange2')}</p>
                  <p>{t('regulatoryShield.regulatoryChange3')}</p>
                  <h3>{t('regulatoryShield.geoRestrictionHeading')}</h3>
                  <p>{t('regulatoryShield.geoRestriction1')}</p>
                  <p>{t('regulatoryShield.geoRestriction2')}</p>
                  <p>{t('regulatoryShield.geoRestriction3')}</p>
                  <h3>{t('regulatoryShield.applePolicyHeading')}</h3>
                  <p>{t('regulatoryShield.applePolicy1')}</p>
                  <p>{t('regulatoryShield.applePolicy2')}</p>
                  <p>{t('regulatoryShield.applePolicy3')}</p>
                  <h3>{t('regulatoryShield.taxPricingHeading')}</h3>
                  <p>{t('regulatoryShield.taxPricing1')}</p>
                  <p>{t('regulatoryShield.taxPricing2')}</p>
                  <h3>{t('regulatoryShield.dataProtectionHeading')}</h3>
                  <p>{t('regulatoryShield.dataProtection1')}</p>
                  <p>{t('regulatoryShield.dataProtection2')}</p>
                  <h3>{t('regulatoryShield.indemnificationHeading')}</h3>
                  <p>{t('regulatoryShield.indemnification1')}</p>
                  <p>{t('regulatoryShield.indemnification2')}</p>
                </section>

                <section id="account-security">
                  <h2>{t('accountSecurity.heading')}</h2>
                  <h3>{t('accountSecurity.singleUserHeading')}</h3>
                  <p>{t('accountSecurity.singleUser1')}</p>
                  <p>{t('accountSecurity.singleUser2')}</p>
                  <p>{t('accountSecurity.singleUser3')}</p>
                  <h3>{t('accountSecurity.credentialHeading')}</h3>
                  <p>{t('accountSecurity.credential1')}</p>
                  <p>{t('accountSecurity.credential2')}</p>
                  <p>{t('accountSecurity.credential3')}</p>
                  <h3>{t('accountSecurity.securityHeading')}</h3>
                  <p>{t('accountSecurity.security1')}</p>
                  <p>{t('accountSecurity.security2')}</p>
                  <p>{t('accountSecurity.security3')}</p>
                  <p>{t('accountSecurity.security4')}</p>
                  <h3>{t('accountSecurity.familyHeading')}</h3>
                  <p>{t('accountSecurity.family1')}</p>
                  <p>{t('accountSecurity.family2')}</p>
                  <p>{t('accountSecurity.family3')}</p>
                  <h3>{t('accountSecurity.institutionalHeading')}</h3>
                  <p>{t('accountSecurity.institutional1')}</p>
                  <p>{t('accountSecurity.institutional2')}</p>
                  <p>{t('accountSecurity.institutional3')}</p>
                  <h3>{t('accountSecurity.enforcementHeading')}</h3>
                  <p>{t('accountSecurity.enforcement1')}</p>
                  <p>{t('accountSecurity.enforcement2')}</p>
                </section>

                <section id="class-action-waiver">
                  <h2>{t('classActionWaiver.heading')}</h2>
                  <h3>{t('classActionWaiver.ukGloHeading')}</h3>
                  <p>{t('classActionWaiver.ukGlo1')}</p>
                  <p>{t('classActionWaiver.ukGlo2')}</p>
                  <h3>{t('classActionWaiver.euDirectiveHeading')}</h3>
                  <p>{t('classActionWaiver.euDirective1')}</p>
                  <p>{t('classActionWaiver.euDirective2')}</p>
                  <h3>{t('classActionWaiver.globalHeading')}</h3>
                  <p>{t('classActionWaiver.global1')}</p>
                  <p>{t('classActionWaiver.global2')}</p>
                  <h3>{t('classActionWaiver.exceptionsHeading')}</h3>
                  <p>{t('classActionWaiver.exceptions1')}</p>
                  <p>{t('classActionWaiver.exceptions2')}</p>
                  <p>{t('classActionWaiver.exceptions3')}</p>
                  <h3>{t('classActionWaiver.enforceabilityHeading')}</h3>
                  <p>{t('classActionWaiver.enforceability1')}</p>
                  <p>{t('classActionWaiver.enforceability2')}</p>
                  <h3>{t('classActionWaiver.individualHeading')}</h3>
                  <p>{t('classActionWaiver.individual1')}</p>
                  <p>{t('classActionWaiver.individual2')}</p>
                </section>

                <section id="dsa-compliance">
                  <h2>{t('dsaCompliance.heading')}</h2>
                  <h3>{t('dsaCompliance.contactHeading')}</h3>
                  <p>{t('dsaCompliance.contact1')}</p>
                  <p>{t('dsaCompliance.contact2')}</p>
                  <p>{t('dsaCompliance.contact3')}</p>
                  <h3>{t('dsaCompliance.intermediaryHeading')}</h3>
                  <p>{t('dsaCompliance.intermediary1')}</p>
                  <p>{t('dsaCompliance.intermediary2')}</p>
                  <p>{t('dsaCompliance.intermediary3')}</p>
                  <h3>{t('dsaCompliance.transparencyHeading')}</h3>
                  <p>{t('dsaCompliance.transparency1')}</p>
                  <p>{t('dsaCompliance.transparency2')}</p>
                  <p>{t('dsaCompliance.transparency3')}</p>
                  <h3>{t('dsaCompliance.complianceHeading')}</h3>
                  <p>{t('dsaCompliance.compliance1')}</p>
                  <p>{t('dsaCompliance.compliance2')}</p>
                  <p>{t('dsaCompliance.compliance3')}</p>
                </section>

                <section id="changes">
                  <h2>{t('changes.heading')}</h2>
                  <p>{t('changes.p1')}</p>
                  <p>{t('changes.p2')}</p>
                  <h3>{t('changes.versionHistory')}</h3>
                  <ul>
                    <li>{t.rich('changes.v1_1', richTags)}</li>
                    <li>{t.rich('changes.v1', richTags)}</li>
                  </ul>
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

                <p className="mt-12 text-xs text-white/30">{tLegal('trademarkAttribution')}</p>
              </div>
            </FadeIn>

            {/* Sidebar TOC */}
            <LegalTOC items={tocItems} label={tLegal('tocLabel')} />
          </div>
        </Container>
      </Section>

      <BackToTop />
    </PageTransition>
  );
}
