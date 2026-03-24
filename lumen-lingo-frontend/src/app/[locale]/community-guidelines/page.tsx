import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/home';
import { LegalTOC } from '@/components/legal';

export const metadata: Metadata = {
  title: 'Community Guidelines',
  description:
    'LumenLingo community guidelines, content moderation policy, and user-generated content terms.',
  alternates: {
    canonical: 'https://lumenlingo.com/community-guidelines',
  },
  openGraph: {
    title: 'Community Guidelines — LumenLingo',
    description:
      'Our expectations for community behaviour, content moderation processes, and user-generated content policies.',
    url: 'https://lumenlingo.com/community-guidelines',
    siteName: 'LumenLingo',
    type: 'website',
  },
};

export default async function CommunityGuidelinesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CommunityGuidelinesContent locale={locale} />;
}

function CommunityGuidelinesContent({ locale }: { locale: string }) {
  const t = useTranslations('CommunityGuidelines');
  const tLegal = useTranslations('Legal');

  const tocItems = [
    { id: 'introduction', text: t('introduction.heading'), level: 2 },
    { id: 'acceptable-use', text: t('acceptableUse.heading'), level: 2 },
    { id: 'prohibited-content', text: t('prohibitedContent.heading'), level: 2 },
    { id: 'content-moderation', text: t('contentModeration.heading'), level: 2 },
    { id: 'reporting', text: t('reporting.heading'), level: 2 },
    { id: 'enforcement', text: t('enforcement.heading'), level: 2 },
    { id: 'appeals', text: t('appeals.heading'), level: 2 },
    { id: 'ugc-terms', text: t('ugcTerms.heading'), level: 2 },
    { id: 'dsa-compliance', text: t('dsaCompliance.heading'), level: 2 },
    { id: 'changes', text: t('changes.heading'), level: 2 },
  ];

  return (
    <PageTransition>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: 'Home', href: '/' },
          { name: t('breadcrumb'), href: '/community-guidelines' },
        ]}
      />

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
                {tLegal('lastUpdated')}
              </span>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8 pb-20 sm:py-12 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-4xl xl:grid xl:grid-cols-[1fr_200px] xl:gap-12">
            <FadeIn>
              <div className="legal-prose">

              <section id="introduction">
                <h2>{t('introduction.heading')}</h2>
                <p>{t('introduction.p1')}</p>
                <p>{t('introduction.p2')}</p>
              </section>

              <section id="acceptable-use">
                <h2>{t('acceptableUse.heading')}</h2>
                <p>{t('acceptableUse.p1')}</p>
                <ul>
                  <li>{t('acceptableUse.li1')}</li>
                  <li>{t('acceptableUse.li2')}</li>
                  <li>{t('acceptableUse.li3')}</li>
                  <li>{t('acceptableUse.li4')}</li>
                  <li>{t('acceptableUse.li5')}</li>
                </ul>
              </section>

              <section id="prohibited-content">
                <h2>{t('prohibitedContent.heading')}</h2>
                <p>{t('prohibitedContent.p1')}</p>
                <ul>
                  <li>{t('prohibitedContent.li1')}</li>
                  <li>{t('prohibitedContent.li2')}</li>
                  <li>{t('prohibitedContent.li3')}</li>
                  <li>{t('prohibitedContent.li4')}</li>
                  <li>{t('prohibitedContent.li5')}</li>
                  <li>{t('prohibitedContent.li6')}</li>
                  <li>{t('prohibitedContent.li7')}</li>
                  <li>{t('prohibitedContent.li8')}</li>
                </ul>
              </section>

              <section id="content-moderation">
                <h2>{t('contentModeration.heading')}</h2>
                <p>{t('contentModeration.p1')}</p>
                <ul>
                  <li>{t('contentModeration.li1')}</li>
                  <li>{t('contentModeration.li2')}</li>
                  <li>{t('contentModeration.li3')}</li>
                  <li>{t('contentModeration.li4')}</li>
                </ul>
                <p>{t('contentModeration.p2')}</p>
              </section>

              <section id="reporting">
                <h2>{t('reporting.heading')}</h2>
                <p>{t('reporting.p1')}</p>
                <ul>
                  <li>{t('reporting.li1')}</li>
                  <li>{t('reporting.li2')}</li>
                  <li>{t('reporting.li3')}</li>
                  <li>{t('reporting.li4')}</li>
                </ul>
                <p>{t('reporting.p2')}</p>
              </section>

              <section id="enforcement">
                <h2>{t('enforcement.heading')}</h2>
                <p>{t('enforcement.p1')}</p>
                <ul>
                  <li>{t('enforcement.li1')}</li>
                  <li>{t('enforcement.li2')}</li>
                  <li>{t('enforcement.li3')}</li>
                  <li>{t('enforcement.li4')}</li>
                </ul>
                <p>{t('enforcement.p2')}</p>
              </section>

              <section id="appeals">
                <h2>{t('appeals.heading')}</h2>
                <p>{t('appeals.p1')}</p>
                <ul>
                  <li>{t('appeals.li1')}</li>
                  <li>{t('appeals.li2')}</li>
                  <li>{t('appeals.li3')}</li>
                </ul>
              </section>

              <section id="ugc-terms">
                <h2>{t('ugcTerms.heading')}</h2>
                <p>{t('ugcTerms.p1')}</p>
                <ul>
                  <li>{t('ugcTerms.li1')}</li>
                  <li>{t('ugcTerms.li2')}</li>
                  <li>{t('ugcTerms.li3')}</li>
                  <li>{t('ugcTerms.li4')}</li>
                  <li>{t('ugcTerms.li5')}</li>
                </ul>
              </section>

              <section id="dsa-compliance">
                <h2>{t('dsaCompliance.heading')}</h2>
                <p>{t('dsaCompliance.p1')}</p>
                <ul>
                  <li>{t('dsaCompliance.li1')}</li>
                  <li>{t('dsaCompliance.li2')}</li>
                  <li>{t('dsaCompliance.li3')}</li>
                  <li>{t('dsaCompliance.li4')}</li>
                  <li>{t('dsaCompliance.li5')}</li>
                </ul>
              </section>

              <section id="changes">
                <h2>{t('changes.heading')}</h2>
                <p>{t('changes.p1')}</p>
              </section>
              </div>
            </FadeIn>

            <LegalTOC items={tocItems} label={tLegal('tocLabel')} />
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
