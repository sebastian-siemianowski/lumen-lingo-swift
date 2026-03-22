import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { FeaturesHero, FeaturesContent, FeatureWalkthroughs, LanguagePairGrid } from '@/components/features';
import { CTABanner, JsonLd, BreadcrumbJsonLd, softwareApplicationLd } from '@/components/home';
import { PageTransition } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore the full feature set of LumenLingo: immersive flashcards, smart spaced repetition, 3 practice modes, 12 ambient soundscapes, breathing orbs, 25+ language pairs, and more.',
  alternates: {
    canonical: 'https://lumenlingo.com/features',
  },
  openGraph: {
    title: 'Features — LumenLingo',
    description:
      'Explore the full feature set of LumenLingo: immersive flashcards, smart spaced repetition, 3 practice modes, 12 ambient soundscapes, and more.',
    url: 'https://lumenlingo.com/features',
    siteName: 'LumenLingo',
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
    title: 'Features — LumenLingo',
    description:
      'Explore the full feature set of LumenLingo: immersive flashcards, smart spaced repetition, 3 practice modes, 12 ambient soundscapes, and more.',
    images: ['/og-image.png'],
  },
};

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageTransition>
      <JsonLd data={softwareApplicationLd} />
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Features', href: '/features' }]} />
      <FeaturesHero />
      <FeaturesContent />
      <FeatureWalkthroughs />
      <LanguagePairGrid />
      <CTABanner />
    </PageTransition>
  );
}
