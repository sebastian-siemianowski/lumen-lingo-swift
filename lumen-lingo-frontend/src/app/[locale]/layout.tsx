import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { RouteProgress } from '@/components/layout/route-progress';
import { NetworkStatus } from '@/components/layout/network-status';
import { ServiceWorkerRegistration } from '@/components/layout/service-worker-registration';
import { UtmCapture } from '@/components/analytics';
import { CookieConsentBanner } from '@/components/cookie-consent';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <RouteProgress />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <CookieConsentBanner />
      <UtmCapture />
      <NetworkStatus />
      <ServiceWorkerRegistration />
    </NextIntlClientProvider>
  );
}
