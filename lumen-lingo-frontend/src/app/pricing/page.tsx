import type { Metadata } from 'next';
import { PricingHero, PricingGrid, FeatureComparisonTable, PricingFAQ, faqItems } from '@/components/pricing';
import { CTABanner, JsonLd, BreadcrumbJsonLd } from '@/components/home';
import { PageTransition } from '@/components/layout';
import { PageViewTracker } from '@/components/analytics';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Choose the perfect LumenLingo membership tier. Start free, or unlock Pro, Elite, or Royal for more languages, soundscapes, visual backgrounds, and premium features.',
  alternates: {
    canonical: 'https://lumenlingo.com/pricing',
  },
  openGraph: {
    title: 'Pricing — LumenLingo',
    description:
      'Compare Free, Pro, Elite, and Royal membership tiers. Start free, upgrade when ready.',
    url: 'https://lumenlingo.com/pricing',
    siteName: 'LumenLingo',
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
    title: 'Pricing — LumenLingo',
    description:
      'Compare Free, Pro, Elite, and Royal membership tiers. Start free, upgrade when ready.',
    images: ['/og-image.png'],
  },
};

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

export default function PricingPage() {
  return (
    <PageTransition>
      <PageViewTracker event="pricing_view" />
      <JsonLd data={productLd} />
      <JsonLd data={faqLd} />
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }]} />
      <PricingHero />
      <PricingGrid />
      <FeatureComparisonTable />
      <PricingFAQ />
      <CTABanner />
    </PageTransition>
  );
}
