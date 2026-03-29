import { localizedUrl } from '@/lib/seo';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbJsonLd({ items, locale }: { items: BreadcrumbItem[]; locale?: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: locale ? localizedUrl(item.href === '/' ? '' : item.href, locale) : `https://lumenlingo.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getSoftwareApplicationLd(description?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LumenLingo',
    operatingSystem: 'iOS',
    applicationCategory: 'EducationApplication',
    description:
      description ??
      'Premium language learning app with immersive flashcards, adaptive practice, ambient soundscapes, and more. 9 languages, 25+ language pairs.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
  };
}

/** @deprecated Use getSoftwareApplicationLd() for localised descriptions */
export const softwareApplicationLd = getSoftwareApplicationLd();

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LumenShore',
  url: 'https://lumenlingo.com',
  logo: 'https://lumenlingo.com/logo.png',
  sameAs: [
    'https://twitter.com/lumenlingo',
    'https://instagram.com/lumenlingo',
    'https://youtube.com/@lumenlingo',
  ],
};
