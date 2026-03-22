import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { UtmCapture } from '@/components/analytics';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <UtmCapture />
      </body>
    </html>
  );
}
