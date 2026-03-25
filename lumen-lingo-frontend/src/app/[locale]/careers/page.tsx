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
  const t = await getTranslations({ locale, namespace: 'Careers.meta' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/careers', locale),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: localizedUrl('/careers', locale),
      siteName: 'LumenLingo',
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      type: 'website',
    },
  };
}

const values = [
  { emoji: '🎨', key: 'craft' },
  { emoji: '🔒', key: 'privacy' },
  { emoji: '🌍', key: 'accessibility' },
  { emoji: '💡', key: 'curiosity' },
] as const;

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Careers' });

  return (
    <PageTransition>
      <BreadcrumbJsonLd locale={locale} items={[{ name: 'Home', href: '/' }, { name: t('heading'), href: '/careers' }]} />

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

      <Section className="py-8 sm:py-12">
        <Container className="max-w-3xl">
          <FadeIn>
            <GlassCard className="p-6 sm:p-8">
              <Text colour="secondary" className="leading-relaxed">
                {t('story')}
              </Text>
              <Text colour="secondary" className="mt-4 leading-relaxed">
                {t('cta')}
              </Text>
              <a
                href="mailto:careers@lumenshore.com"
                className="mt-4 inline-flex items-center gap-2 rounded-[--radius-button] border border-[--color-violet]/30 bg-[--color-violet]/10 px-5 py-2.5 text-sm font-medium text-[--color-violet] transition-colors hover:bg-[--color-violet]/20"
              >
                careers@lumenshore.com
              </a>
            </GlassCard>
          </FadeIn>
        </Container>
      </Section>

      <Section className="pt-4 pb-20 sm:pt-8 sm:pb-28">
        <Container className="max-w-3xl">
          <FadeIn>
            <Heading as="h2" className="mb-8 text-xl sm:text-2xl">
              {t('valuesHeading')}
            </Heading>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <FadeIn key={v.key} delay={i * 0.08}>
                <GlassCard className="p-5">
                  <span className="text-2xl" aria-hidden>{v.emoji}</span>
                  <Heading as="h3" className="mt-2 text-base font-semibold">
                    {t(`values.${v.key}`)}
                  </Heading>
                  <Text colour="secondary" className="mt-1 text-sm">
                    {t(`values.${v.key}Desc`)}
                  </Text>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
