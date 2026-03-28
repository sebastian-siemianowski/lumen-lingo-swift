import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { ProtectedEmail } from '@/components/ui/protected-email';
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
  const t = await getTranslations({ locale, namespace: 'CookiePage.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/cookies', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/cookies', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocales: getOgAlternateLocales(locale),
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  };
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'CookiePage' });
  const tLegal = await getTranslations({ locale, namespace: 'Legal' });

  const richTags = {
    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
    emailLink: () => <ProtectedEmail emailKey="legal" />,
  };

  const tocItems = [
    { id: 'overview', text: t('overview.heading'), level: 2 },
    { id: 'cookie-consent', text: t('consent.heading'), level: 2 },
    { id: 'cookie-granularity', text: t('granularity.heading'), level: 2 },
    { id: 'localstorage', text: t('localStorage.heading'), level: 2 },
    { id: 'sessionstorage', text: t('sessionStorage.heading'), level: 2 },
    { id: 'service-worker', text: t('serviceWorker.heading'), level: 2 },
    { id: 'cookies', text: t('cookies.heading'), level: 2 },
    { id: 'third-party', text: t('thirdParty.heading'), level: 2 },
    { id: 'manage', text: t('manage.heading'), level: 2 },
    { id: 'browser-instructions', text: t('browserInstructions.heading'), level: 2 },
    { id: 'consent-accountability', text: t('consentAccountability.heading'), level: 2 },
    { id: 'gpc', text: t('gpc.heading'), level: 2 },
    { id: 'pecr-compliance', text: t('pecrCompliance.heading'), level: 2 },
    { id: 'updates', text: t('updates.heading'), level: 2 },
    { id: 'data-retention-crossref', text: t('retention.heading'), level: 2 },
    { id: 'ico-complaint', text: t('icoComplaint.heading'), level: 2 },
    { id: 'cookie-accessibility', text: t('accessibility.heading'), level: 2 },
    { id: 'contact', text: t('contact.heading'), level: 2 },
  ];

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('breadcrumb'), href: '/cookies' }]} />

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
                {t('updates.v1', { b: (chunks: React.ReactNode) => <>{chunks}</> })}
              </span>
              <DownloadPDFButton label={tLegal('downloadPdf')} />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8 sm:py-12 pb-20 sm:pb-28">
        <Container>
          <LanguageDisclaimer href="/cookies" />
          <LegalUpdateBanner
            version="1.0"
            documentKey="cookies"
            message={t('updateBannerMessage')}
            linkText={tLegal('updateBannerLink')}
            changesAnchor="updates"
            dismissLabel={tLegal('updateBannerDismiss')}
          />
          <div className="mx-auto max-w-5xl xl:grid xl:grid-cols-[1fr_240px] xl:gap-10">
            {/* Mobile TOC */}
            <div className="col-span-full mb-6">
              <MobileLegalTOC items={tocItems} label={tLegal('tocLabel')} />
            </div>
            <FadeIn>
              <div className="legal-prose">

                {/* Overview */}
                <section id="overview">
                  <h2>{t('overview.heading')}</h2>
                  <p>{t('overview.p1')}</p>
                  <p>{t('overview.p2')}</p>
                </section>

                {/* Cookie Consent (19.1-19.3) */}
                <section id="cookie-consent">
                  <h2>{t('consent.heading')}</h2>
                  <p>{t('consent.rejection')}</p>
                  <p>{t('consent.withdrawal')}</p>
                  <p>{t('consent.affirmative')}</p>
                </section>

                {/* Cookie Granularity (19.4) */}
                <section id="cookie-granularity">
                  <h2>{t('granularity.heading')}</h2>
                  <p>{t('granularity.p1')}</p>
                  <ul>
                    <li>{t.rich('granularity.li1', richTags)}</li>
                    <li>{t.rich('granularity.li2', richTags)}</li>
                    <li>{t.rich('granularity.li3', richTags)}</li>
                  </ul>
                  <p>{t('granularity.p2')}</p>
                </section>

                {/* Summary Table */}
                <div className="my-8 overflow-x-auto rounded-lg border border-glass-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-glass-border bg-white/[0.02]">
                        <th className="px-4 py-3 text-left font-semibold text-foreground">{t('table.key')}</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">{t('table.type')}</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">{t('table.category')}</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">{t('table.purpose')}</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">{t('table.duration')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-glass-border/50">
                        <td className="px-4 py-3 font-mono text-xs text-foreground">ll_cookie_consent</td>
                        <td className="px-4 py-3 text-foreground-muted">localStorage</td>
                        <td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">Essential</span></td>
                        <td className="px-4 py-3 text-foreground-muted">{t('localStorage.consentKey.purpose')}</td>
                        <td className="px-4 py-3 text-foreground-muted">13 months</td>
                      </tr>
                      <tr className="border-b border-glass-border/50">
                        <td className="px-4 py-3 font-mono text-xs text-foreground">NEXT_LOCALE</td>
                        <td className="px-4 py-3 text-foreground-muted">localStorage / Cookie</td>
                        <td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">Essential</span></td>
                        <td className="px-4 py-3 text-foreground-muted">{t('localStorage.localeKey.purpose')}</td>
                        <td className="px-4 py-3 text-foreground-muted">Persistent</td>
                      </tr>
                      <tr className="border-b border-glass-border/50">
                        <td className="px-4 py-3 font-mono text-xs text-foreground">ll_utm</td>
                        <td className="px-4 py-3 text-foreground-muted">sessionStorage</td>
                        <td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-violet-500/10 px-2 py-0.5 text-xs font-medium text-violet-400">Analytics</span></td>
                        <td className="px-4 py-3 text-foreground-muted">{t('sessionStorage.utmKey.purpose')}</td>
                        <td className="px-4 py-3 text-foreground-muted">Session</td>
                      </tr>
                      <tr className="border-b border-glass-border/50 last:border-b-0">
                        <td className="px-4 py-3 font-mono text-xs text-foreground">Sentry replay</td>
                        <td className="px-4 py-3 text-foreground-muted">sessionStorage</td>
                        <td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">Consent required</span></td>
                        <td className="px-4 py-3 text-foreground-muted">{t('sessionStorage.sentryKey.purpose')}</td>
                        <td className="px-4 py-3 text-foreground-muted">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* localStorage */}
                <section id="localstorage">
                  <h2>{t('localStorage.heading')}</h2>
                  <p>{t('localStorage.intro')}</p>

                  <h3>{t('localStorage.consentKey.heading')}</h3>
                  <ul>
                    <li><strong>{t('table.category')}:</strong> {t('localStorage.consentKey.category')}</li>
                    <li><strong>{t('table.purpose')}:</strong> {t('localStorage.consentKey.purpose')}</li>
                    <li><strong>{t('table.duration')}:</strong> {t('localStorage.consentKey.duration')}</li>
                    <li><strong>Data:</strong> {t('localStorage.consentKey.data')}</li>
                  </ul>

                  <h3>{t('localStorage.localeKey.heading')}</h3>
                  <ul>
                    <li><strong>{t('table.category')}:</strong> {t('localStorage.localeKey.category')}</li>
                    <li><strong>{t('table.purpose')}:</strong> {t('localStorage.localeKey.purpose')}</li>
                    <li><strong>{t('table.duration')}:</strong> {t('localStorage.localeKey.duration')}</li>
                    <li><strong>Data:</strong> {t('localStorage.localeKey.data')}</li>
                  </ul>
                </section>

                {/* sessionStorage */}
                <section id="sessionstorage">
                  <h2>{t('sessionStorage.heading')}</h2>
                  <p>{t('sessionStorage.intro')}</p>

                  <h3>{t('sessionStorage.utmKey.heading')}</h3>
                  <ul>
                    <li><strong>{t('table.category')}:</strong> {t('sessionStorage.utmKey.category')}</li>
                    <li><strong>{t('table.purpose')}:</strong> {t('sessionStorage.utmKey.purpose')}</li>
                    <li><strong>{t('table.duration')}:</strong> {t('sessionStorage.utmKey.duration')}</li>
                    <li><strong>Data:</strong> {t('sessionStorage.utmKey.data')}</li>
                  </ul>

                  <h3>{t('sessionStorage.sentryKey.heading')}</h3>
                  <ul>
                    <li><strong>{t('table.category')}:</strong> {t('sessionStorage.sentryKey.category')}</li>
                    <li><strong>{t('table.purpose')}:</strong> {t('sessionStorage.sentryKey.purpose')}</li>
                    <li><strong>{t('table.duration')}:</strong> {t('sessionStorage.sentryKey.duration')}</li>
                    <li><strong>Data:</strong> {t('sessionStorage.sentryKey.data')}</li>
                  </ul>

                  <h3>{t('sessionStorage.sentryKeys.heading')}</h3>
                  <p>{t('sessionStorage.sentryKeys.intro')}</p>

                  <h4><code>{t('sessionStorage.sentryKeys.replaySession.heading')}</code></h4>
                  <ul>
                    <li><strong>{t('table.category')}:</strong> {t('sessionStorage.sentryKeys.replaySession.category')}</li>
                    <li><strong>{t('table.purpose')}:</strong> {t('sessionStorage.sentryKeys.replaySession.purpose')}</li>
                    <li><strong>{t('table.duration')}:</strong> {t('sessionStorage.sentryKeys.replaySession.duration')}</li>
                    <li><strong>Data:</strong> {t('sessionStorage.sentryKeys.replaySession.data')}</li>
                  </ul>

                  <h4><code>{t('sessionStorage.sentryKeys.sentryUser.heading')}</code></h4>
                  <ul>
                    <li><strong>{t('table.category')}:</strong> {t('sessionStorage.sentryKeys.sentryUser.category')}</li>
                    <li><strong>{t('table.purpose')}:</strong> {t('sessionStorage.sentryKeys.sentryUser.purpose')}</li>
                    <li><strong>{t('table.duration')}:</strong> {t('sessionStorage.sentryKeys.sentryUser.duration')}</li>
                    <li><strong>Data:</strong> {t('sessionStorage.sentryKeys.sentryUser.data')}</li>
                  </ul>
                </section>

                {/* Service Worker */}
                <section id="service-worker">
                  <h2>{t('serviceWorker.heading')}</h2>
                  <p>{t('serviceWorker.intro')}</p>
                  <p className="font-mono text-xs text-white/40">{t('serviceWorker.cacheName')}</p>

                  <h3>{t('serviceWorker.strategies.heading')}</h3>
                  <ul>
                    <li>{t.rich('serviceWorker.strategies.static', richTags)}</li>
                    <li>{t.rich('serviceWorker.strategies.pages', richTags)}</li>
                    <li>{t.rich('serviceWorker.strategies.offline', richTags)}</li>
                  </ul>
                  <p>{t('serviceWorker.p1')}</p>
                  <p>{t('serviceWorker.p2')}</p>
                </section>

                {/* Cookies */}
                <section id="cookies">
                  <h2>{t('cookies.heading')}</h2>
                  <p>{t('cookies.intro')}</p>

                  <h3>{t('cookies.locale.heading')}</h3>
                  <ul>
                    <li><strong>{t('table.category')}:</strong> {t('cookies.locale.category')}</li>
                    <li><strong>{t('table.purpose')}:</strong> {t('cookies.locale.purpose')}</li>
                    <li><strong>{t('table.duration')}:</strong> {t('cookies.locale.duration')}</li>
                    <li><strong>Data:</strong> {t('cookies.locale.data')}</li>
                  </ul>
                  <p>{t('cookies.p1')}</p>
                </section>

                {/* Third-Party */}
                <section id="third-party">
                  <h2>{t('thirdParty.heading')}</h2>
                  <p>{t('thirdParty.intro')}</p>

                  <h3>{t('thirdParty.vercel.heading')}</h3>
                  <p>{t.rich('thirdParty.vercel.description', richTags)}</p>
                  <p><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">{t('thirdParty.vercel.link')}</a></p>

                  <h3>{t('thirdParty.sentry.heading')}</h3>
                  <p>{t.rich('thirdParty.sentry.description', richTags)}</p>
                  <p><a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">{t('thirdParty.sentry.link')}</a></p>

                  <h3>{t('thirdParty.speedInsights.heading')}</h3>
                  <p>{t.rich('thirdParty.speedInsights.description', richTags)}</p>
                  <p><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">{t('thirdParty.speedInsights.link')}</a></p>
                </section>

                {/* Manage */}
                <section id="manage">
                  <h2>{t('manage.heading')}</h2>
                  <p>{t('manage.p1')}</p>
                  <p>{t('manage.p2')}</p>
                  <p>{t('manage.p3')}</p>
                </section>

                {/* Browser Instructions (19.5) */}
                <section id="browser-instructions">
                  <h2>{t('browserInstructions.heading')}</h2>
                  <p>{t('browserInstructions.intro')}</p>
                  <ul>
                    <li>{t.rich('browserInstructions.chrome', {
                      ...richTags,
                      chromeLink: (chunks: React.ReactNode) => <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">{chunks}</a>,
                    })}</li>
                    <li>{t.rich('browserInstructions.safari', {
                      ...richTags,
                      safariLink: (chunks: React.ReactNode) => <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">{chunks}</a>,
                    })}</li>
                    <li>{t.rich('browserInstructions.firefox', {
                      ...richTags,
                      firefoxLink: (chunks: React.ReactNode) => <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer">{chunks}</a>,
                    })}</li>
                    <li>{t.rich('browserInstructions.edge', {
                      ...richTags,
                      edgeLink: (chunks: React.ReactNode) => <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">{chunks}</a>,
                    })}</li>
                  </ul>
                  <p>{t('browserInstructions.itp')}</p>
                </section>

                {/* Consent Accountability */}
                <section id="consent-accountability">
                  <h2>{t('consentAccountability.heading')}</h2>
                  <p>{t.rich('consentAccountability.p1', { ...richTags, code: (chunks: React.ReactNode) => <code>{chunks}</code> })}</p>
                  <p>{t('consentAccountability.p2')}</p>
                  <p>{t('consentAccountability.p3')}</p>
                </section>

                {/* GPC & DNT */}
                <section id="gpc">
                  <h2>{t('gpc.heading')}</h2>
                  <p>{t('gpc.p1')}</p>
                  <p>{t('gpc.p2')}</p>
                  <p>{t('gpc.p3')}</p>
                </section>

                {/* UK PECR Compliance */}
                <section id="pecr-compliance">
                  <h2>{t('pecrCompliance.heading')}</h2>
                  <p>{t('pecrCompliance.p1')}</p>
                  <p>{t('pecrCompliance.p2')}</p>
                  <p>{t.rich('pecrCompliance.p3', richTags)}</p>
                  <p>{t.rich('pecrCompliance.p4', richTags)}</p>
                  <p>{t('pecrCompliance.p5')}</p>
                </section>

                {/* Updates */}
                <section id="updates">
                  <h2>{t('updates.heading')}</h2>
                  <p>{t('updates.p1')}</p>
                  <p>{t.rich('updates.version', richTags)}</p>
                  <h3>{t('updates.versionHistory')}</h3>
                  <ul>                    <li>{t.rich('updates.v1_2', richTags)}</li>                    <li>{t.rich('updates.v1', richTags)}</li>
                  </ul>
                </section>

                {/* Data Retention Cross-Reference */}
                <section id="data-retention-crossref">
                  <h2>{t('retention.heading')}</h2>
                  <p>{t.rich('retention.crossRef', { privacyLink: (chunks: React.ReactNode) => <Link href={`/${locale}/privacy`}>{chunks}</Link> })}</p>
                </section>

                {/* ICO Complaint Right */}
                <section id="ico-complaint">
                  <h2>{t('icoComplaint.heading')}</h2>
                  <p>{t('icoComplaint.p1')}</p>
                  <ul>
                    <li>{t.rich('icoComplaint.icoWebsite', { ...richTags, icoLink: (chunks: React.ReactNode) => <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">{chunks}</a> })}</li>
                    <li>{t.rich('icoComplaint.icoPhone', richTags)}</li>
                    <li>{t.rich('icoComplaint.icoAddress', richTags)}</li>
                  </ul>
                  <p>{t.rich('icoComplaint.p2', { ...richTags, emailLink: () => <ProtectedEmail emailKey="legal" /> })}</p>
                </section>

                {/* Cookie Settings Accessibility (19.6) */}
                <section id="cookie-accessibility">
                  <h2>{t('accessibility.heading')}</h2>
                  <p>{t.rich('accessibility.p1', {
                    ...richTags,
                    emailLink: () => <ProtectedEmail emailKey="legal" />,
                  })}</p>
                </section>

                {/* Contact */}
                <section id="contact">
                  <h2>{t('contact.heading')}</h2>
                  <p>{t('contact.intro')}</p>
                  <ul>
                    <li>{t.rich('contact.email', { b: (chunks: React.ReactNode) => <strong>{chunks}</strong>, emailLink: () => <ProtectedEmail emailKey="legal" /> })}</li>
                    <li>{t.rich('contact.company', richTags)}</li>
                  </ul>
                  <p>{t('contact.responseTime')}</p>
                </section>
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
