import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FeaturesHero, FeaturesContent, FeatureWalkthroughs, LanguagePairGrid } from '@/components/features';
import { CTABanner, JsonLd, BreadcrumbJsonLd, getSoftwareApplicationLd } from '@/components/home';
import { PageTransition } from '@/components/layout';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Features.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/features', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/features', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'LumenLingo Features — Premium Language Learning App',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/og-image.png'],
    },
  };
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return (
    <PageTransition>
      <JsonLd data={getSoftwareApplicationLd(t('jsonLdDescription'))} />
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: 'Features', href: '/features' }]} />
      <FeaturesHero />
      <FeaturesContent />
      <FeatureWalkthroughs />
      <LanguagePairGrid />
      <CTABanner />
    </PageTransition>
  );
}
