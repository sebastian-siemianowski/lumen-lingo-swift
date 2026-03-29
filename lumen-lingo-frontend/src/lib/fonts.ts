import { Inter, Space_Grotesk, Noto_Sans_JP, Noto_Sans_SC } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-cabinet',
  weight: ['500', '700'],
  display: 'swap',
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ['japanese', 'latin'],
  variable: '--font-cjk-jp',
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: false,
});

export const notoSansSC = Noto_Sans_SC({
  subsets: ['chinese-simplified', 'latin'],
  variable: '--font-cjk-sc',
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: false,
});

/**
 * Returns the CSS variable class string for the given locale.
 * CJK locales get their dedicated font variable appended.
 */
export function getFontVariableClasses(locale: string): string {
  const base = `${inter.variable} ${spaceGrotesk.variable}`;
  switch (locale) {
    case 'ja':
      return `${base} ${notoSansJP.variable}`;
    case 'zh':
      return `${base} ${notoSansSC.variable}`;
    default:
      return base;
  }
}
