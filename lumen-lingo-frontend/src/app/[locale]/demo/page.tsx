import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { FlashcardDemo } from '@/components/demo';
import { Section, Container, Heading, Text } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Try It — Interactive Flashcard Demo | LumenLingo',
  description:
    'Experience LumenLingo flashcards right in your browser. Flip, swipe, and learn — then download the full app for free.',
  openGraph: {
    title: 'Try It — Interactive Flashcard Demo | LumenLingo',
    description:
      'Swipe through beautiful flashcards in 5 languages. Experience the quality before you download.',
    type: 'website',
  },
};

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="relative overflow-hidden">
      <Section padding="hero">
        <Container size="sm" className="text-center">
          <span className="mb-4 inline-block rounded-[--radius-pill] bg-violet/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-violet uppercase">
            Try it now
          </span>

          <Heading as="h1" size="display" className="mb-4">
            Feel the{' '}
            <span className="bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">
              experience
            </span>
          </Heading>

          <Text variant="lead" className="mx-auto mb-12 max-w-lg text-foreground-muted">
            Tap a card to flip it, then swipe right if you knew it or left to skip.
            Five cards. Five languages. Zero commitment.
          </Text>

          <FlashcardDemo />
        </Container>
      </Section>
    </div>
  );
}
