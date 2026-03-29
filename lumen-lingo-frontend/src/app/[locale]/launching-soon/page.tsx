import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { LaunchingSoonContent } from './launching-soon-content';
import { buildAlternates, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'Launching Soon — LumenLingo',
    description:
      'LumenLingo is coming soon to the App Store. Beautiful, mindful language learning — crafted with care.',
    alternates: buildAlternates('/launching-soon', locale),
    openGraph: {
      title: 'Launching Soon — LumenLingo',
      description:
        'LumenLingo is coming soon to the App Store. Beautiful, mindful language learning — crafted with care.',
      url: localizedUrl('/launching-soon', locale),
      siteName: 'LumenLingo',
      type: 'website',
    },
  };
}

export default async function LaunchingSoonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LaunchingSoonContent />;
}
