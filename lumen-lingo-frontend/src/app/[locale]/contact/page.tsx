import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FAQAccordion, ContactSection, contactFaqItems } from '@/components/contact';
import { JsonLd, BreadcrumbJsonLd } from '@/components/home';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/contact', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/contact', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocales: getOgAlternateLocales(locale),
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'LumenLingo Help & Contact',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/og-image.png'],
    },
  };
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return (
    <PageTransition>
      <JsonLd data={faqLd} />
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('heading'), href: '/contact' }]} />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              {t('heading')}
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg text-lg">
              {t('description')}
            </Text>
            <Text colour="secondary" className="mt-2 text-sm">
              {t('supportLanguage')}
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <FadeIn className="mb-8">
            <Heading as="h2" className="text-xl sm:text-2xl">
              {t('faqHeading')}
            </Heading>
          </FadeIn>
          <FAQAccordion items={contactFaqItems} />
        </Container>
      </Section>

      {/* Contact Section */}
      <Section className="pt-4 pb-20 sm:pt-8 sm:pb-28">
        <Container className="max-w-3xl">
          <FadeIn delay={0.1}>
            <ContactSection />
          </FadeIn>
        </Container>
      </Section>
    </PageTransition>
  );
}
