import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { EarlyAccessHero } from '@/components/early-access';
import { getFeatureFlag } from '@/lib/feature-flags';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'EarlyAccess.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/share', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/share', locale),
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

export default async function SharePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!getFeatureFlag('EARLY_ACCESS_LIVE')) {
    redirect('/launching-soon');
  }

  return (
    <div className="relative overflow-hidden">
      <Suspense>
        <EarlyAccessHero />
      </Suspense>
    </div>
  );
}
