import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  HeroSection,
  FeatureShowcase,
  ScreenshotGallery,
  DifferentiatorSection,
  CTABanner,
  JsonLd,
  getSoftwareApplicationLd,
  organizationLd,
} from '@/components/home';
import { PageTransition } from '@/components/layout';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('', locale),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: localizedUrl('', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocales: getOgAlternateLocales(locale),
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'LumenLingo — Premium Language Learning App',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
    },
  };
}

export default async function Home({
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
      <JsonLd data={organizationLd} />
      <HeroSection />
      <FeatureShowcase />
      <ScreenshotGallery />
      <DifferentiatorSection />
      <CTABanner />
    </PageTransition>
  );
}
