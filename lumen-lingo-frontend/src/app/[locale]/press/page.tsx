import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { BreadcrumbJsonLd } from '@/components/home';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text, GlassCard } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { buildAlternates, getOgLocale, getOgAlternateLocales, localizedUrl } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Press.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/press', locale),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: localizedUrl('/press', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      type: 'website',
    },
  };
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Press' });

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('heading'), href: '/press' }]} />

      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              {t('heading')}
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg text-lg">
              {t('intro')}
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* Company Description */}
      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <FadeIn>
            <Heading as="h2" className="mb-4 text-xl sm:text-2xl">
              {t('aboutHeading')}
            </Heading>
            <GlassCard className="p-6 sm:p-8">
              <Text colour="secondary" className="leading-relaxed">
                {t('aboutP1')}
              </Text>
              <Text colour="secondary" className="mt-4 leading-relaxed">
                {t('aboutP2')}
              </Text>
              <Text colour="secondary" className="mt-4 leading-relaxed">
                {t('aboutP3')}
              </Text>
            </GlassCard>
          </FadeIn>
        </Container>
      </Section>

      {/* Key Stats */}
      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <FadeIn>
            <Heading as="h2" className="mb-6 text-xl sm:text-2xl">
              {t('statsHeading')}
            </Heading>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-3">
            {(['languages', 'pairs', 'modes'] as const).map((key, i) => (
              <FadeIn key={key} delay={i * 0.08}>
                <GlassCard className="p-5 text-center">
                  <Text className="text-2xl font-display font-bold text-[--color-violet]">
                    {t(`stats.${key}Value`)}
                  </Text>
                  <Text colour="secondary" className="mt-1 text-sm">
                    {t(`stats.${key}`)}
                  </Text>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Brand Assets */}
      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <FadeIn>
            <Heading as="h2" className="mb-4 text-xl sm:text-2xl">
              {t('assetsHeading')}
            </Heading>
            <GlassCard className="p-6 sm:p-8">
              <Text colour="secondary" className="leading-relaxed">
                {t('assetsDesc')}
              </Text>
              <a
                href="mailto:press@lumenshore.com"
                className="mt-4 inline-flex items-center gap-2 rounded-[--radius-button] border border-[--color-cyan]/30 bg-[--color-cyan]/10 px-5 py-2.5 text-sm font-medium text-[--color-cyan] transition-colors hover:bg-[--color-cyan]/20"
              >
                press@lumenshore.com
              </a>
            </GlassCard>
          </FadeIn>
        </Container>
      </Section>

      {/* In the News */}
      <Section className="pt-4 pb-20 sm:pt-8 sm:pb-28">
        <Container className="max-w-3xl">
          <FadeIn>
            <Heading as="h2" className="mb-4 text-xl sm:text-2xl">
              {t('newsHeading')}
            </Heading>
            <GlassCard className="p-6 sm:p-8 text-center">
              <Text colour="muted" className="text-sm">
                {t('newsEmpty')}
              </Text>
            </GlassCard>
          </FadeIn>
        </Container>
      </Section>
    </PageTransition>
  );
}
