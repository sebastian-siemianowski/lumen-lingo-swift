import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { LanguagePairGrid } from '@/components/features';
import { CTABanner, BreadcrumbJsonLd, JsonLd } from '@/components/home';
import { Section, Container, Heading, Text } from '@/components/ui';
import { PageTransition } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Supported Languages — 9 Languages, 25+ Pairs | LumenLingo',
  description:
    'Explore all language pairs supported by LumenLingo. Learn Spanish, French, German, Japanese, Chinese, Arabic, Italian, Polish and more with beautiful flashcards.',
  alternates: { canonical: 'https://lumenlingo.com/languages' },
  openGraph: {
    title: 'Supported Languages — LumenLingo',
    description:
      '9 languages, 25+ bidirectional pairs. Learn in any direction with curated vocabulary and adaptive practice.',
    url: 'https://lumenlingo.com/languages',
    siteName: 'LumenLingo',
    type: 'website',
  },
};

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'LumenLingo Supported Language Pairs',
  numberOfItems: 25,
  itemListElement: [
    'English → Spanish',
    'English → French',
    'English → German',
    'English → Japanese',
    'English → Chinese',
    'English → Arabic',
    'English → Italian',
    'English → Polish',
    'Spanish → English',
    'French → English',
    'German → English',
    'Spanish → French',
  ].map((name, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
  })),
};

export default async function LanguagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageTransition>
      <JsonLd data={itemListLd} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Languages', href: '/languages' },
        ]}
      />

      <Section padding="hero">
        <Container size="sm" className="text-center">
          <span className="mb-4 inline-block rounded-[--radius-pill] bg-cyan/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan uppercase">
            Languages
          </span>
          <Heading as="h1" size="display" className="mb-4">
            Learn in{' '}
            <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
              any direction
            </span>
          </Heading>
          <Text variant="lead" className="mx-auto max-w-lg text-foreground-muted">
            9 languages. 25+ bidirectional pairs. Curated vocabulary, pronunciation guides,
            and adaptive practice — all in one beautiful app.
          </Text>
        </Container>
      </Section>

      <LanguagePairGrid />
      <CTABanner />
    </PageTransition>
  );
}
