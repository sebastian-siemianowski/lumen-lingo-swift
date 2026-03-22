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

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://lumenlingo.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const softwareApplicationLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LumenLingo',
  operatingSystem: 'iOS',
  applicationCategory: 'EducationApplication',
  description:
    'Premium language learning app with immersive flashcards, adaptive practice, ambient soundscapes, and more. 9 languages, 25+ language pairs.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
};

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
