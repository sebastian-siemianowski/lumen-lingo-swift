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
    { id: 'information-we-collect', text: t('informationWeCollect.heading'), level: 2 },
    { id: 'what-we-dont-collect', text: t('whatWeDontCollect.heading'), level: 2 },
    { id: 'how-we-use', text: t('howWeUse.heading'), level: 2 },
    { id: 'data-storage', text: t('dataStorage.heading'), level: 2 },
    { id: 'third-party', text: t('thirdParty.heading'), level: 2 },
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
                </section>

                <section id="information-we-collect">
                  <h2>{t('informationWeCollect.heading')}</h2>
                  <p>{t('informationWeCollect.intro')}</p>
                  <ul>
                    <li>{t.rich('informationWeCollect.li1', richTags)}</li>
                    <li>{t.rich('informationWeCollect.li2', richTags)}</li>
                    <li>{t.rich('informationWeCollect.li3', richTags)}</li>
                    <li>{t.rich('informationWeCollect.li4', richTags)}</li>
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

                <section id="how-we-use">
                  <h2>{t('howWeUse.heading')}</h2>
                  <p>{t('howWeUse.intro')}</p>
                  <ul>
                    <li>{t.rich('howWeUse.li1', richTags)}</li>
                    <li>{t.rich('howWeUse.li2', richTags)}</li>
                    <li>{t.rich('howWeUse.li3', richTags)}</li>
                    <li>{t.rich('howWeUse.li4', richTags)}</li>
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
                  </ul>
                </section>

                <section id="third-party">
                  <h2>{t('thirdParty.heading')}</h2>
                  <p>{t('thirdParty.intro')}</p>
                  <ul>
                    <li>{t.rich('thirdParty.li1', { b: (chunks: React.ReactNode) => <strong>{chunks}</strong>, applePrivacy: (chunks: React.ReactNode) => <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">{chunks}</a> })}</li>
                    <li>{t.rich('thirdParty.li2', richTags)}</li>
                    <li>{t.rich('thirdParty.li3', richTags)}</li>
                  </ul>
                  <p>{t('thirdParty.noAdNetworks')}</p>
                </section>

                <section id="childrens-privacy">
                  <h2>{t('childrensPrivacy.heading')}</h2>
                  <p>{t('childrensPrivacy.p1')}</p>
                  <p>{t('childrensPrivacy.p2')}</p>
                </section>

                <section id="data-retention">
                  <h2>{t('dataRetention.heading')}</h2>
                  <p>{t('dataRetention.intro')}</p>
                  <ul>
                    <li>{t.rich('dataRetention.li1', richTags)}</li>
                    <li>{t.rich('dataRetention.li2', richTags)}</li>
                    <li>{t.rich('dataRetention.li3', richTags)}</li>
                    <li>{t.rich('dataRetention.li4', richTags)}</li>
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
                  </ul>
                  <h3>{t('yourRights.ccpaHeading')}</h3>
                  <ul>
                    <li>{t('yourRights.ccpaLi1')}</li>
                    <li>{t('yourRights.ccpaLi2')}</li>
                    <li>{t('yourRights.ccpaLi3')}</li>
                    <li>{t('yourRights.ccpaLi4')}</li>
                  </ul>
                </section>

                <section id="policy-updates">
                  <h2>{t('policyUpdates.heading')}</h2>
                  <p>{t('policyUpdates.p1')}</p>
                  <p>{t('policyUpdates.p2')}</p>
                </section>

                <section id="contact-us">
                  <h2>{t('contactUs.heading')}</h2>
                  <p>{t('contactUs.intro')}</p>
                  <ul>
                    <li>{t.rich('contactUs.email', { b: (chunks: React.ReactNode) => <strong>{chunks}</strong>, emailLink: (chunks: React.ReactNode) => <a href="mailto:hello@lumenshore.com">{chunks}</a> })}</li>
                    <li>{t.rich('contactUs.company', richTags)}</li>
                  </ul>
                  <p>{t('contactUs.responseTime')}</p>
                </section>
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
