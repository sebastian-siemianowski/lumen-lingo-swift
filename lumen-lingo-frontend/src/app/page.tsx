import type { Metadata } from 'next';
import {
  HeroSection,
  FeatureShowcase,
  ScreenshotGallery,
  DifferentiatorSection,
  CTABanner,
  JsonLd,
  softwareApplicationLd,
  organizationLd,
} from '@/components/home';
import { PageTransition } from '@/components/layout';

export const metadata: Metadata = {
  title: 'LumenLingo — Master Languages Through Immersive Experiences',
  description:
    'Download LumenLingo, the premium language learning app for iPhone. Beautiful flashcards, adaptive practice, ambient soundscapes, and more. Free on the App Store.',
  alternates: {
    canonical: 'https://lumenlingo.com',
  },
  openGraph: {
    title: 'LumenLingo — Master Languages Through Immersive Experiences',
    description:
      'Download LumenLingo, the premium language learning app for iPhone. Beautiful flashcards, adaptive practice, ambient soundscapes, and more.',
    url: 'https://lumenlingo.com',
    siteName: 'LumenLingo',
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
    title: 'LumenLingo — Master Languages Through Immersive Experiences',
    description:
      'Download LumenLingo, the premium language learning app for iPhone. Beautiful flashcards, adaptive practice, ambient soundscapes, and more.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  return (
    <PageTransition>
      <JsonLd data={softwareApplicationLd} />
      <JsonLd data={organizationLd} />
      <HeroSection />
      <FeatureShowcase />
      <ScreenshotGallery />
      <DifferentiatorSection />
      <CTABanner />
    </PageTransition>
  );
}
