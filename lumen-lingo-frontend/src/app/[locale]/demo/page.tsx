import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FlashcardDemo } from '@/components/demo';
import { Section, Container, Heading, Text, Button } from '@/components/ui';
import { GradientMesh } from '@/components/home/gradient-mesh';
import { FlashcardIcon, PracticeModeIcon, SoundscapeIcon, ProgressIcon } from '@/components/icons';
import { GlassCard } from '@/components/ui';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Demo.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/demo', locale),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: localizedUrl('/demo', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="relative overflow-hidden">
      {/* Gradient mesh background at 30% opacity */}
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <GradientMesh />
      </div>

      {/* Hero */}
      <Section padding="hero">
        <Container size="sm" className="text-center">
          <span className="mb-4 inline-block rounded-[--radius-pill] bg-violet/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-violet uppercase">
            Try it now
          </span>

          <Heading as="h1" size="display" className="mb-4 font-display text-3xl md:text-4xl">
            Feel the{' '}
            <span className="text-gradient">
              experience
            </span>
          </Heading>

          <Text variant="lead" className="mx-auto mb-8 max-w-lg text-foreground-muted">
            Tap a card to flip it, then swipe right if you knew it or left to skip.
            Five cards. Five languages. Zero commitment.
          </Text>

          <a href="#demo-card" className="inline-block">
            <Button variant="primary" size="lg">
              Start Demo
            </Button>
          </a>
        </Container>
      </Section>

      {/* Flashcard demo in glass-card frame */}
      <Section>
        <Container size="sm">
          <div id="demo-card" className="scroll-mt-24">
            <div className="glass-card rounded-[--radius-card] p-8 md:p-12">
              <FlashcardDemo />
            </div>
          </div>
        </Container>
      </Section>

      {/* What you'll get in the full app */}
      <Section>
        <Container>
          <Heading as="h2" className="mb-8 text-center font-display text-2xl md:text-3xl">
            What you&apos;ll get in the{' '}
            <span className="text-gradient">full app</span>
          </Heading>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FlashcardIcon size={24} className="text-violet" />,
                title: '2,500+ Flashcards',
                description: 'Glass-morphic cards with spaced repetition across 25+ language pairs.',
                href: '/features#flashcards',
              },
              {
                icon: <PracticeModeIcon size={24} className="text-cyan" />,
                title: '3 Practice Modes',
                description: 'Match, recall, and compose — three ways to cement your knowledge.',
                href: '/features#practice',
              },
              {
                icon: <SoundscapeIcon size={24} className="text-amber" />,
                title: '12 Soundscapes',
                description: 'From Paris cafés to deep space — immersive environments for focused learning.',
                href: '/features#soundscapes',
              },
              {
                icon: <ProgressIcon size={24} className="text-violet" />,
                title: 'Smart Progress',
                description: 'Track streaks, accuracy, and growth with beautiful visualisations.',
                href: '/features#progress',
              },
            ].map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <GlassCard tint="default" className="flex h-full flex-col gap-3 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {feature.description}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
