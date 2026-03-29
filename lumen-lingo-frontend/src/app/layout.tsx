import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getLocale } from 'next-intl/server';
import { APP_STORE_ID } from '@/lib/appStoreConfig';
import { getFontVariableClasses } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'LumenLingo — Master Languages Through Immersive Experiences',
    template: '%s — LumenLingo',
  },
  description:
    'Download LumenLingo, the premium language learning app for iPhone. Beautiful flashcards, adaptive practice, ambient soundscapes, and more. Free on the App Store.',
  metadataBase: new URL('https://lumenlingo.com'),
  other: {
    'apple-itunes-app': `app-id=${APP_STORE_ID}`,
    'theme-color': '#0a0a0f',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${getFontVariableClasses(locale)} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
