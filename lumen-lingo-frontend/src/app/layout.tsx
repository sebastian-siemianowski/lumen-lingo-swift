import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getLocale } from 'next-intl/server';
import { APP_STORE_ID } from '@/lib/appStoreConfig';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-cabinet',
  weight: ['500', '700'],
  display: 'swap',
});

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
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
