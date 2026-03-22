import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { OfflineContent } from './offline-content';

export const metadata: Metadata = {
  title: "You're Offline",
  robots: { index: false },
};

export default async function OfflinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OfflineContent />;
}
