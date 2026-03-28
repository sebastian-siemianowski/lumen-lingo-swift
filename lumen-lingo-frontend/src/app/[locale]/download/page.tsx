import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { DownloadHero } from '@/components/download/download-hero';
import { DownloadBenefits } from '@/components/download/download-benefits';
import { DownloadFeatures } from '@/components/download/download-features';
import { DownloadShowcase } from '@/components/download/download-showcase';
import { DownloadQR } from '@/components/download/download-qr';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

const isDev = process.env.NODE_ENV === 'development';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Download.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/download', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/download', locale),
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
      {isDev && <DownloadQR />}
    </div>
  );
}
