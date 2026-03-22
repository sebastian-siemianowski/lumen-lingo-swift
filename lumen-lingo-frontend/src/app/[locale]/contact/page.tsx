import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { FAQAccordion, ContactSection, contactFaqItems } from '@/components/contact';
import { JsonLd, BreadcrumbJsonLd } from '@/components/home';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';

export const metadata: Metadata = {
  title: 'Help & Contact',
  description:
    'Find answers to common questions about LumenLingo or get in touch with the LumenShore team. We\'re here to help with your language learning journey.',
  alternates: {
    canonical: 'https://lumenlingo.com/contact',
  },
  openGraph: {
    title: 'Help & Contact — LumenLingo',
    description:
      'Find answers to common questions about LumenLingo or get in touch with the LumenShore team.',
    url: 'https://lumenlingo.com/contact',
    siteName: 'LumenLingo',
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
    title: 'Help & Contact — LumenLingo',
    description:
      'Find answers to common questions about LumenLingo or get in touch with the LumenShore team.',
    images: ['/og-image.png'],
  },
};

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
  return (
    <PageTransition>
      <JsonLd data={faqLd} />
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Help & Contact', href: '/contact' }]} />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              How can we help?
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg text-lg">
              Browse our frequently asked questions or reach out directly — we&apos;re always happy to hear from you.
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <FadeIn className="mb-8">
            <Heading as="h2" className="text-xl sm:text-2xl">
              Frequently Asked Questions
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
