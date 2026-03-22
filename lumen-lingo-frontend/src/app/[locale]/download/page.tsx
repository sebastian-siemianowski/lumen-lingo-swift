import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { DownloadHero } from '@/components/download/download-hero';
import { DownloadBenefits } from '@/components/download/download-benefits';
import { DownloadFeatures } from '@/components/download/download-features';
import { DownloadShowcase } from '@/components/download/download-showcase';
import { DownloadQR } from '@/components/download/download-qr';

export const metadata: Metadata = {
  title: 'Download LumenLingo — Free on the App Store',
  description:
    'Download LumenLingo for iPhone. Beautiful flashcards, adaptive practice, 12 ambient soundscapes, 9 languages. Free to start.',
  openGraph: {
    title: 'Download LumenLingo — Free on the App Store',
    description:
      'Master languages through immersive experiences. Beautiful flashcards, adaptive practice, and ambient soundscapes.',
    type: 'website',
  },
};

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="relative overflow-hidden">
      <DownloadHero />
      <DownloadBenefits />
      <DownloadShowcase />
      <DownloadFeatures />
      <DownloadQR />
    </div>
  );
}
