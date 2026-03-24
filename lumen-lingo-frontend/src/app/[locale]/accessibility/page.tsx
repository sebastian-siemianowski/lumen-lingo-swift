import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { LanguageDisclaimer } from '@/components/legal';
import { BreadcrumbJsonLd } from '@/components/home';
import { Link } from '@/i18n/navigation';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Accessibility.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/accessibility', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/accessibility', locale),
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

const extLink = 'text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors';

export default async function AccessibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Accessibility' });

  const richTags = {
    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
    code: (chunks: React.ReactNode) => <code>{chunks}</code>,
    eaaLink: (chunks: React.ReactNode) => (
      <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882" target="_blank" rel="noopener noreferrer">{chunks}</a>
    ),
    enLink: (chunks: React.ReactNode) => (
      <a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf" target="_blank" rel="noopener noreferrer">{chunks}</a>
    ),
    adaLink: (chunks: React.ReactNode) => (
      <a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer">{chunks}</a>
    ),
    vpatLink: (chunks: React.ReactNode) => (
      <Link href="/accessibility/vpat" className={extLink}>{chunks}</Link>
    ),
    wcagLink: (chunks: React.ReactNode) => (
      <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">{chunks}</a>
    ),
    ehrcLink: (chunks: React.ReactNode) => (
      <a href="https://www.equalityhumanrights.com/en" target="_blank" rel="noopener noreferrer">{chunks}</a>
    ),
    emailLink: (chunks: React.ReactNode) => (
      <a href="mailto:accessibility@lumenshore.com">{chunks}</a>
    ),
    contactLink: (chunks: React.ReactNode) => (
      <Link href="/contact" className={extLink}>{chunks}</Link>
    ),
  };

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('breadcrumb'), href: '/accessibility' }]} />

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
            <div className="mt-6 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2 text-xs text-white/50">
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-white/40" aria-hidden>
                  <path d="M8 4v4l2.5 1.5M14 8A6 6 0 112 8a6 6 0 0112 0z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
                {t('hero.lastUpdated')}
              </span>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <LanguageDisclaimer href="/accessibility" />

      {/* Content */}
      <Section className="py-8 pb-20 sm:py-12 sm:pb-28">
        <Container>
          <FadeIn>
            <div className="legal-prose mx-auto max-w-3xl">
              <section id="commitment">
                <h2>{t('commitment.heading')}</h2>
                <p>{t('commitment.p1')}</p>
              </section>

              <section id="eaa-scope">
                <h2>{t('eaaScope.heading')}</h2>
                <p>{t.rich('eaaScope.p1', richTags)}</p>
                <p>{t.rich('eaaScope.p2', richTags)}</p>
              </section>

              <section id="us-accessibility">
                <h2>{t('usAccessibility.heading')}</h2>
                <p>{t.rich('usAccessibility.p1', richTags)}</p>
                <p>{t.rich('usAccessibility.p2', richTags)}</p>
                <p>{t.rich('usAccessibility.p3', richTags)}</p>
              </section>

              <section id="conformance">
                <h2>{t('conformance.heading')}</h2>
                <p>{t.rich('conformance.p1', richTags)}</p>
                <p>{t.rich('conformance.p2', richTags)}</p>
                <p>{t.rich('conformance.p3', richTags)}</p>
              </section>

              <section id="measures">
                <h2>{t('measures.heading')}</h2>
                <p>{t('measures.intro')}</p>
                <ul>
                  <li>{t('measures.li1')}</li>
                  <li>{t('measures.li2')}</li>
                  <li>{t('measures.li3')}</li>
                  <li>{t('measures.li4')}</li>
                  <li>{t('measures.li5')}</li>
                  <li>{t.rich('measures.li6', richTags)}</li>
                  <li>{t('measures.li7')}</li>
                  <li>{t('measures.li8')}</li>
                  <li>{t('measures.li9')}</li>
                </ul>
              </section>

              <section id="technologies">
                <h2>{t('technologies.heading')}</h2>
                <p>{t('technologies.intro')}</p>
                <ul>
                  <li>{t('technologies.li1')}</li>
                  <li>{t('technologies.li2')}</li>
                  <li>{t('technologies.li3')}</li>
                  <li>{t('technologies.li4')}</li>
                </ul>
                <p>{t('technologies.outro')}</p>
              </section>

              <section id="assistive-technology">
                <h2>{t('assistiveTech.heading')}</h2>
                <p>{t('assistiveTech.intro')}</p>
                <ul>
                  <li>{t('assistiveTech.li1')}</li>
                  <li>{t('assistiveTech.li2')}</li>
                  <li>{t('assistiveTech.li3')}</li>
                  <li>{t('assistiveTech.li4')}</li>
                </ul>
              </section>

              <section id="known-limitations">
                <h2>{t('knownLimitations.heading')}</h2>
                <p>{t('knownLimitations.intro')}</p>
                <h3>{t('knownLimitations.websiteHeading')}</h3>
                <ul>
                  <li>{t.rich('knownLimitations.websiteLi1', richTags)}<br /><em>{t('knownLimitations.websiteLi1Status')}</em></li>
                  <li>{t.rich('knownLimitations.websiteLi2', richTags)}<br /><em>{t('knownLimitations.websiteLi2Status')}</em></li>
                </ul>
                <h3>{t('knownLimitations.iosHeading')}</h3>
                <ul>
                  <li>{t.rich('knownLimitations.iosLi1', richTags)}<br /><em>{t('knownLimitations.iosLi1Target')}</em></li>
                  <li>{t.rich('knownLimitations.iosLi2', richTags)}<br /><em>{t('knownLimitations.iosLi2Target')}</em></li>
                  <li>{t.rich('knownLimitations.iosLi3', richTags)}<br /><em>{t('knownLimitations.iosLi3Status')}</em></li>
                  <li>{t.rich('knownLimitations.iosLi4', richTags)}<br /><em>{t('knownLimitations.iosLi4Target')}</em></li>
                </ul>
                <p>{t('knownLimitations.outro')}</p>
              </section>

              <section id="alternatives">
                <h2>{t('alternatives.heading')}</h2>
                <p>{t('alternatives.intro')}</p>
                <ul>
                  <li>{t.rich('alternatives.li1', richTags)}</li>
                  <li>{t.rich('alternatives.li2', richTags)}</li>
                  <li>{t.rich('alternatives.li3', richTags)}</li>
                  <li>{t.rich('alternatives.li4', richTags)}</li>
                </ul>
              </section>

              <section id="audit-schedule">
                <h2>{t('auditSchedule.heading')}</h2>
                <p>{t('auditSchedule.intro')}</p>
                <ul>
                  <li>{t.rich('auditSchedule.li1', richTags)}</li>
                  <li>{t.rich('auditSchedule.li2', richTags)}</li>
                  <li>{t.rich('auditSchedule.li3', richTags)}</li>
                  <li>{t.rich('auditSchedule.li4', richTags)}</li>
                </ul>
                <p>{t('auditSchedule.outro')}</p>
              </section>

              <section id="feedback">
                <h2>{t('feedback.heading')}</h2>
                <p>{t('feedback.intro')}</p>
                <ul>
                  <li>{t.rich('feedback.li1Email', richTags)}</li>
                  <li>{t.rich('feedback.li2Contact', richTags)}</li>
                  <li>{t.rich('feedback.li3Vpat', richTags)}</li>
                </ul>
                <p>{t('feedback.response')}</p>
              </section>

              <section id="disproportionate-burden">
                <h2>{t('disproportionateBurden.heading')}</h2>
                <p>{t('disproportionateBurden.p1')}</p>
                <p>{t('disproportionateBurden.p2')}</p>
                <ul>
                  <li>{t('disproportionateBurden.li1')}</li>
                  <li>{t('disproportionateBurden.li2')}</li>
                  <li>{t('disproportionateBurden.li3')}</li>
                  <li>{t('disproportionateBurden.li4')}</li>
                </ul>
                <p>{t('disproportionateBurden.p3')}</p>
              </section>

              <section id="enforcement">
                <h2>{t('enforcement.heading')}</h2>
                <h3>{t('enforcement.ukHeading')}</h3>
                <p>{t.rich('enforcement.ukP1', richTags)}</p>
                <h3>{t('enforcement.euHeading')}</h3>
                <p>{t('enforcement.euP1')}</p>
                <h3>{t('enforcement.usHeading')}</h3>
                <p>{t.rich('enforcement.usP1', richTags)}</p>
              </section>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageTransition>
  );
}
