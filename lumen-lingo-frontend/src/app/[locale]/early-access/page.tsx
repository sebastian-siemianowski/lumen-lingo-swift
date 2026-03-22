import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { EarlyAccessHero } from '@/components/early-access';

export const metadata: Metadata = {
  title: 'Early Access — Be Among the First',
  description:
    'Join the LumenLingo early access list. Get notified first when new languages and features launch. Exclusive offers for early supporters.',
  openGraph: {
    title: 'Early Access — LumenLingo',
    description:
      'Join the waitlist and get early access to LumenLingo. Master a new language through multi-sensory immersion.',
    type: 'website',
  },
};

export default async function EarlyAccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="relative overflow-hidden">
      <Suspense>
        <EarlyAccessHero />
      </Suspense>
    </div>
  );
}
