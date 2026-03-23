import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FlashcardDemo } from '@/components/demo';
import { Section, Container, Heading, Text } from '@/components/ui';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Demo.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/demo', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/demo', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocales: getOgAlternateLocales(locale),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="relative overflow-hidden">
      <Section padding="hero">
        <Container size="sm" className="text-center">
          <span className="mb-4 inline-block rounded-[--radius-pill] bg-violet/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-violet uppercase">
            Try it now
          </span>

          <Heading as="h1" size="display" className="mb-4">
            Feel the{' '}
            <span className="bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">
              experience
            </span>
          </Heading>

          <Text variant="lead" className="mx-auto mb-12 max-w-lg text-foreground-muted">
            Tap a card to flip it, then swipe right if you knew it or left to skip.
            Five cards. Five languages. Zero commitment.
          </Text>

          <FlashcardDemo />
        </Container>
      </Section>
    </div>
  );
}
