import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { BreadcrumbJsonLd } from '@/components/home';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';
import { HelpContent } from './help-content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Help.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/help', locale),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: localizedUrl('/help', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      type: 'website',
    },
  };
}

export default async function HelpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Help' });

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('heading'), href: '/help' }]} />

      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              {t('heading')}
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg text-lg">
              {t('intro')}
            </Text>
          </FadeIn>
        </Container>
      </Section>

      <HelpContent />
    </PageTransition>
  );
}
