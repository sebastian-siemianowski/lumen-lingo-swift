export type BlogFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  image?: string;
  tags: string[];
  category: 'Language Tips' | 'App Updates' | 'Learning Science' | 'Culture' | 'Guides';
  readingTime: string;
  featured: boolean;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};

const localeMap: Record<string, string> = {
  en: 'en-GB',
  es: 'es-ES',
  fr: 'fr-FR',
  ja: 'ja-JP',
  de: 'de-DE',
  pl: 'pl-PL',
  ar: 'ar-SA',
  zh: 'zh-CN',
  uk: 'uk-UA',
};

export function formatDate(dateStr: string, locale?: string): string {
  const bcp47 = (locale && localeMap[locale]) ?? 'en-GB';
  return new Date(dateStr).toLocaleDateString(bcp47, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
