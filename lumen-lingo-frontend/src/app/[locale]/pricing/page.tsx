import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PricingHero, PricingGrid, FeatureComparisonTable, PricingFAQ, faqItems } from '@/components/pricing';
import { CTABanner, JsonLd, BreadcrumbJsonLd } from '@/components/home';
import { PageTransition } from '@/components/layout';
import { PageViewTracker } from '@/components/analytics';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pricing.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/pricing', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/pricing', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocales: getOgAlternateLocales(locale),
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'LumenLingo Pricing — Premium Language Learning App',
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

const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'LumenLingo',
  description: 'Premium language learning app for iPhone with flashcards, practice modes, soundscapes, and more.',
  brand: {
    '@type': 'Organization',
    name: 'LumenShore',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '0',
        priceCurrency: 'GBP',
        valueAddedTaxIncluded: true,
      },
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '9.99',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '9.99',
        priceCurrency: 'GBP',
        billingDuration: 'P1M',
        valueAddedTaxIncluded: true,
      },
    },
    {
      '@type': 'Offer',
      name: 'Elite',
      price: '19.99',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '19.99',
        priceCurrency: 'GBP',
        billingDuration: 'P1M',
        valueAddedTaxIncluded: true,
      },
    },
    {
      '@type': 'Offer',
      name: 'Royal',
      price: '99.99',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '99.99',
        priceCurrency: 'GBP',
        billingDuration: 'P1M',
        valueAddedTaxIncluded: true,
      },
    },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageTransition>
      <PageViewTracker event="pricing_view" />
      <JsonLd data={productLd} />
      <JsonLd data={faqLd} />
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }]} />
      <PricingHero />
      <PricingGrid />
      <FeatureComparisonTable />
      <PricingFAQ />
      <CTABanner />
    </PageTransition>
  );
}
