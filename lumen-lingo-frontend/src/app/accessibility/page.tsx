import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/home';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'LumenLingo is committed to digital accessibility. Learn about our WCAG 2.1 AA conformance, assistive technology support, and how to report accessibility issues.',
  alternates: {
    canonical: 'https://lumenlingo.com/accessibility',
  },
  openGraph: {
    title: 'Accessibility Statement — LumenLingo',
    description:
      'Our commitment to making language learning accessible to everyone, regardless of ability.',
    url: 'https://lumenlingo.com/accessibility',
    siteName: 'LumenLingo',
    type: 'website',
  },
};

export default function AccessibilityPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Accessibility Statement', href: '/accessibility' },
        ]}
      />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              Accessibility Statement
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg">
              Language learning should be for everyone. We&apos;re committed to
              making LumenLingo accessible to all users, regardless of ability.
            </Text>
            <div className="mt-6 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2 text-xs text-white/50">
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-white/40" aria-hidden>
                  <path d="M8 4v4l2.5 1.5M14 8A6 6 0 112 8a6 6 0 0112 0z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
                Last updated: 22 March 2026
              </span>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8 pb-20 sm:py-12 sm:pb-28">
        <Container>
          <FadeIn>
            <div className="legal-prose mx-auto max-w-3xl">
              <section id="commitment">
                <h2>Our Commitment</h2>
                <p>
                  LumenShore Ltd is committed to ensuring digital accessibility
                  for people with disabilities. We continually improve the user
                  experience for everyone and apply the relevant accessibility
                  standards to both our website and the LumenLingo iOS
                  application.
                </p>
              </section>

              <section id="conformance">
                <h2>Conformance Status</h2>
                <p>
                  The{' '}
                  <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
                    Web Content Accessibility Guidelines (WCAG)
                  </a>{' '}
                  define requirements for designers and developers to improve
                  accessibility for people with disabilities. It defines three
                  levels of conformance: Level A, Level AA, and Level AAA.
                </p>
                <p>
                  <strong>lumenlingo.com</strong> is partially conformant with
                  WCAG 2.1 Level AA. &ldquo;Partially conformant&rdquo; means
                  that some parts of the content do not fully conform to the
                  accessibility standard. We are actively working toward full
                  conformance.
                </p>
              </section>

              <section id="measures">
                <h2>Measures We Take</h2>
                <p>
                  LumenShore takes the following measures to ensure the
                  accessibility of lumenlingo.com:
                </p>
                <ul>
                  <li>
                    Include accessibility as part of our design and development
                    process
                  </li>
                  <li>
                    Use semantic HTML elements and ARIA landmarks for page
                    structure
                  </li>
                  <li>
                    Maintain colour contrast ratios that meet or exceed WCAG 2.1
                    AA standards (4.5:1 for normal text, 3:1 for large text)
                  </li>
                  <li>
                    Provide visible focus indicators on all interactive elements
                  </li>
                  <li>Ensure all content is navigable via keyboard alone</li>
                  <li>
                    Respect the{' '}
                    <code>prefers-reduced-motion</code> system
                    preference — all animations are disabled when this
                    preference is set
                  </li>
                  <li>
                    Provide meaningful alternative text for images and
                    decorative elements
                  </li>
                  <li>
                    Include a skip-to-content link for keyboard users
                  </li>
                  <li>
                    Test with screen readers including VoiceOver on macOS and
                    iOS
                  </li>
                </ul>
              </section>

              <section id="technologies">
                <h2>Technologies</h2>
                <p>
                  Accessibility of lumenlingo.com relies on the following
                  technologies:
                </p>
                <ul>
                  <li>HTML</li>
                  <li>WAI-ARIA</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <p>
                  These technologies are relied upon for conformance with the
                  accessibility standards used.
                </p>
              </section>

              <section id="assistive-technology">
                <h2>Assistive Technology Compatibility</h2>
                <p>
                  lumenlingo.com is designed to be compatible with the following
                  assistive technologies:
                </p>
                <ul>
                  <li>VoiceOver on macOS and iOS</li>
                  <li>
                    Keyboard-only navigation across all major browsers (Safari,
                    Chrome, Firefox, Edge)
                  </li>
                  <li>Browser zoom up to 200% without loss of content</li>
                  <li>High contrast and inverted colour modes</li>
                </ul>
              </section>

              <section id="known-limitations">
                <h2>Known Limitations</h2>
                <p>
                  Despite our best efforts, some areas may have limitations:
                </p>
                <ul>
                  <li>
                    <strong>Screenshot carousel:</strong> Drag-to-swipe
                    interaction requires touch or mouse input. Keyboard
                    navigation via arrow keys is provided as an alternative.
                  </li>
                  <li>
                    <strong>Glass morphism effects:</strong> The
                    backdrop-blur visual effects may not render on all browsers.
                    Content remains fully readable regardless.
                  </li>
                </ul>
                <p>
                  We are actively working to identify and resolve any
                  accessibility gaps.
                </p>
              </section>

              <section id="feedback">
                <h2>Feedback</h2>
                <p>
                  We welcome your feedback on the accessibility of lumenlingo.com.
                  If you encounter accessibility barriers or have suggestions for
                  improvement, please contact us:
                </p>
                <ul>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:accessibility@lumenshore.com">
                      accessibility@lumenshore.com
                    </a>
                  </li>
                  <li>
                    <strong>General contact:</strong>{' '}
                    <a href="/contact">Contact page</a>
                  </li>
                </ul>
                <p>
                  We aim to respond to accessibility feedback within 5 business
                  days.
                </p>
              </section>

              <section id="enforcement">
                <h2>Enforcement Procedure</h2>
                <p>
                  If you are not satisfied with our response to your
                  accessibility concern, you may escalate by contacting the{' '}
                  <a
                    href="https://www.equalityhumanrights.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Equality and Human Rights Commission (EHRC)
                  </a>{' '}
                  in the United Kingdom.
                </p>
              </section>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageTransition>
  );
}
