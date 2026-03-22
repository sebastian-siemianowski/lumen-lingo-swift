import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { CTABanner, JsonLd, organizationLd } from '@/components/home';
import { ValueCards } from '@/components/about/value-cards';
import { Timeline } from '@/components/about/timeline';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet LumenShore — the team behind LumenLingo. We believe language learning should be beautiful, science-backed, and accessible to all.',
  alternates: {
    canonical: 'https://lumenlingo.com/about',
  },
  openGraph: {
    title: 'About — LumenShore',
    description:
      'Meet LumenShore — the team behind LumenLingo. We believe language learning should be beautiful, science-backed, and accessible to all.',
    url: 'https://lumenlingo.com/about',
    siteName: 'LumenLingo',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About — LumenShore',
    description:
      'Meet LumenShore — the team behind LumenLingo. Beautiful, science-backed language learning.',
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <JsonLd data={organizationLd} />

      {/* Hero */}
      <Section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        {/* Ambient background blobs */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet/8 blur-[120px]" />
          <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-cyan/6 blur-[120px]" />
        </div>

        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-6">
              We Believe Learning Should Be Beautiful
            </Heading>
            <Text colour="secondary" size="lg" className="mx-auto max-w-xl">
              LumenShore is a small, passionate team building the language-learning experience we always wished existed.
            </Text>
          </FadeIn>
        </Container>
      </Section>

      {/* Mission Statement */}
      <Section className="py-12 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn>
            <Heading as="h2" className="mb-8 text-center">
              Our Story
            </Heading>
            <div className="space-y-5 text-[0.9375rem] leading-relaxed text-white/55">
              <p>
                LumenLingo started with a frustration. Every language app we tried felt like a chore — gamified to the point of distraction, cluttered with ads, or simply ugly. We knew that learning a language is one of the most rewarding things a person can do. Why did the tools feel so uninspiring?
              </p>
              <p>
                So we built something different. LumenLingo is what happens when you treat language learning as a craft, not a factory line. Every interaction is intentional. The cosmic backgrounds aren&apos;t decoration — they create a calm headspace for focused learning. The soundscapes aren&apos;t gimmicks — they leverage how ambient audio improves memory retention. The spaced repetition isn&apos;t a checkbox — it&apos;s a finely tuned engine that adapts to <em>your</em> brain.
              </p>
              <p>
                We believe that beauty and function are not at odds. A well-crafted experience makes you want to come back. And when you come back, you learn. That&apos;s the magic: the most effective app is the one you actually use.
              </p>
              <p>
                LumenShore is still small, and that&apos;s by design. Every decision goes through people who care deeply about the product. No feature committees. No growth hacks. Just an unwavering focus on making language learning feel extraordinary.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Values */}
      <Section className="py-12 sm:py-20">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h2" className="mb-3">
              What We Stand For
            </Heading>
            <Text colour="secondary" className="mx-auto mb-12 max-w-lg">
              Four principles that guide every decision we make.
            </Text>
          </FadeIn>
          <ValueCards />
        </Container>
      </Section>

      {/* Timeline */}
      <Section className="py-12 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <Heading as="h2" className="mb-3">
              Our Journey
            </Heading>
            <Text colour="secondary" className="mx-auto mb-14 max-w-lg">
              Key milestones on the road from idea to impact.
            </Text>
          </FadeIn>
          <Timeline />
        </Container>
      </Section>

      {/* Team narrative */}
      <Section className="py-12 sm:py-20">
        <Container className="max-w-3xl">
          <FadeIn className="text-center">
            <div className="mx-auto max-w-2xl rounded-2xl border border-glass-border bg-white/[0.02] p-8 sm:p-12">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet/20 to-cyan/10">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-violet" aria-hidden>
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 16v-4M12 8h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <Heading as="h3" className="mb-3 text-xl">
                Small Team, Big Ambitions
              </Heading>
              <p className="text-sm leading-relaxed text-white/50">
                LumenShore is built by a small, dedicated team of developers, designers, and linguists who believe that the best products come from people who use them. We&apos;re not a startup chasing metrics — we&apos;re craftspeople building something we&apos;re genuinely proud of. Every line of code, every translation, every shader effect is handcrafted with intention.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner />
    </PageTransition>
  );
}
