import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/home';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'LumenLingo accessibility statement per the European Accessibility Act (EAA) and WCAG 2.1 AA. Conformance status, EN 301 549, known limitations, remediation timelines, and how to report issues.',
  alternates: {
    canonical: 'https://lumenlingo.com/accessibility',
  },
  openGraph: {
    title: 'Accessibility Statement — LumenLingo',
    description:
      'Our commitment to making language learning accessible to everyone, with EAA conformance details and remediation timelines.',
    url: 'https://lumenlingo.com/accessibility',
    siteName: 'LumenLingo',
    type: 'website',
  },
};

export default async function AccessibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageTransition>
      <BreadcrumbJsonLd
        locale={locale}
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
                Last updated: 24 March 2026
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

              <section id="eaa-scope">
                <h2>European Accessibility Act (EAA) Scope</h2>
                <p>
                  The{' '}
                  <a
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    European Accessibility Act (Directive 2019/882)
                  </a>{' '}
                  came into force on 28 June 2025, requiring digital services
                  offered to EU consumers to meet accessibility standards.
                </p>
                <p>
                  LumenLingo sells digital language-learning subscriptions to
                  consumers in EU member states. As an e-commerce service with
                  associated website and mobile application, LumenLingo falls
                  within the scope of the EAA. Compliance requires meeting the{' '}
                  <a
                    href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EN 301 549
                  </a>{' '}
                  harmonised European standard, which references WCAG 2.1
                  Level AA for web content and provides additional requirements
                  for mobile applications.
                </p>
              </section>

              <section id="us-accessibility">
                <h2>US Accessibility (ADA &amp; Section 508)</h2>
                <p>
                  US courts increasingly interpret{' '}
                  <a
                    href="https://www.ada.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Title III of the Americans with Disabilities Act (ADA)
                  </a>{' '}
                  as applying to websites and mobile applications. While no
                  formal web accessibility standard is mandated by the ADA,
                  WCAG 2.1 Level AA is the de facto industry standard
                  referenced by the Department of Justice.
                </p>
                <p>
                  LumenLingo targets WCAG 2.1 Level AA for both our website
                  and iOS app, satisfying the ADA&apos;s requirement for
                  equal access to digital services. Our conformance status,
                  known limitations, and remediation timelines are documented
                  on this page and in our{' '}
                  <Link href="/accessibility/vpat" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                    Voluntary Product Accessibility Template (VPAT)
                  </Link>.
                </p>
                <p>
                  <strong>Section 508</strong> applies to US federal agencies
                  and their contractors. LumenShore Ltd does not currently
                  contract with US federal agencies, so Section 508 is not
                  directly applicable. However, our WCAG 2.1 AA compliance
                  target meets the equivalent Section 508 technical standard
                  (which references WCAG 2.0 Level AA).
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
                  WCAG 2.1 Level AA and EN 301 549 v3.2.1.
                  &ldquo;Partially conformant&rdquo; means that some parts of
                  the content do not fully conform to the accessibility
                  standard. Known non-conformities are listed below with
                  remediation timelines. We are actively working toward full
                  conformance.
                </p>
                <p>
                  <strong>LumenLingo iOS app</strong> is partially conformant
                  with EN 301 549 requirements for non-web software (Clause 11).
                  The app targets WCAG 2.1 Level AA where applicable and
                  implements platform accessibility APIs (VoiceOver, Reduce
                  Motion) for key interactions.
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
                <h2>Known Limitations &amp; Remediation</h2>
                <p>
                  Despite our best efforts, some areas have limitations we are
                  actively working to address. In accordance with the EAA, we
                  list known non-conformities below with planned remediation
                  timelines.
                </p>
                <h3>Website (lumenlingo.com)</h3>
                <ul>
                  <li>
                    <strong>Screenshot carousel:</strong> Drag-to-swipe
                    interaction requires touch or mouse input. Keyboard
                    navigation via arrow keys is provided as an alternative.
                    <br />
                    <em>Status: Alternative provided. No further action needed.</em>
                  </li>
                  <li>
                    <strong>Glass morphism effects:</strong> The
                    backdrop-blur visual effects may not render on all browsers.
                    Content remains fully readable regardless.
                    <br />
                    <em>Status: Gracefully degrades. No further action needed.</em>
                  </li>
                </ul>
                <h3>iOS Application</h3>
                <ul>
                  <li>
                    <strong>VoiceOver labels (WCAG 4.1.2 — Name, Role, Value):</strong>{' '}
                    Key interactive elements (categories, flashcards,
                    membership badges, PDF export toolbar, collapsible sections)
                    include VoiceOver labels and hints. Approximately 15% of
                    views have explicit accessibility labels; the remainder rely
                    on SwiftUI&apos;s built-in accessibility for standard
                    controls (buttons, toggles, text). Custom decorative views
                    (glass cards, parallax effects) lack explicit descriptions.
                    <br />
                    <em>Target: Q3 2026 — Add explicit VoiceOver labels to all
                    custom views and game elements.</em>
                  </li>
                  <li>
                    <strong>Dynamic Type (WCAG 1.4.4 — Resize Text):</strong>{' '}
                    The iOS app does not yet fully support Dynamic Type.
                    Approximately 87% of text uses fixed sizes optimised for the
                    glass-morphism design. Users who rely on larger text sizes
                    may not see all text scale. A migration to scalable text
                    styles is planned.
                    <br />
                    <em>Target: Q4 2026 — Migrate to @ScaledMetric and
                    semantic font styles across all views.</em>
                  </li>
                  <li>
                    <strong>Reduce Motion (WCAG 2.3.3 — Animation from Interactions):</strong>{' '}
                    All major animation-heavy views (flashcard flips, parallax
                    effects, particle celebrations, expand/collapse sections,
                    PDF export animations) respect the system Reduce Motion
                    preference. Background nebula renderers continue to animate
                    as purely decorative content.
                    <br />
                    <em>Status: Compliant for interactive animations. Decorative
                    animations excluded per WCAG exception.</em>
                  </li>
                  <li>
                    <strong>Target Size (WCAG 2.5.8 — Target Size Minimum):</strong>{' '}
                    Most interactive targets meet the 44×44pt minimum. Some
                    smaller icon buttons in secondary views may fall below this
                    threshold.
                    <br />
                    <em>Target: Q3 2026 — Audit all touch targets and ensure
                    44pt minimum.</em>
                  </li>
                </ul>
                <p>
                  We are actively working to identify and resolve accessibility
                  gaps. Our roadmap includes quarterly accessibility audits
                  (see below).
                </p>
              </section>

              <section id="alternatives">
                <h2>Alternative Ways to Access Content</h2>
                <p>
                  If you have difficulty using any part of LumenLingo, the
                  following alternatives are available:
                </p>
                <ul>
                  <li>
                    <strong>Email support:</strong> Contact us at{' '}
                    <a href="mailto:accessibility@lumenshore.com">
                      accessibility@lumenshore.com
                    </a>{' '}
                    and we will provide the content you need in an accessible
                    format (plain text, audio description, or alternative layout).
                  </li>
                  <li>
                    <strong>Keyboard navigation:</strong> All website content
                    and interactions can be accessed using keyboard alone
                    (Tab, Shift+Tab, Enter, Escape, arrow keys).
                  </li>
                  <li>
                    <strong>Screen reader:</strong> The website is tested with
                    VoiceOver. If you encounter issues with any assistive
                    technology, please let us know.
                  </li>
                  <li>
                    <strong>Browser adjustments:</strong> The website supports
                    zoom up to 200%, high-contrast mode, and inverted colours.
                  </li>
                </ul>
              </section>

              <section id="audit-schedule">
                <h2>Accessibility Audit Schedule</h2>
                <p>
                  We conduct regular accessibility audits to maintain and
                  improve compliance:
                </p>
                <ul>
                  <li><strong>Q1 (January–March):</strong> Website WCAG 2.1 AA full audit (automated and manual testing)</li>
                  <li><strong>Q2 (April–June):</strong> iOS app VoiceOver and Dynamic Type audit</li>
                  <li><strong>Q3 (July–September):</strong> Cross-platform screen reader testing</li>
                  <li><strong>Q4 (October–December):</strong> Annual comprehensive review and remediation planning</li>
                </ul>
                <p>
                  Findings from each audit are published in an updated version of
                  this statement.
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
                    <Link href="/contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">Contact page</Link>
                  </li>
                  <li>
                    <strong>VPAT:</strong>{' '}
                    <Link href="/accessibility/vpat" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                      View our Voluntary Product Accessibility Template
                    </Link>
                  </li>
                </ul>
                <p>
                  We aim to respond to accessibility feedback within 5 business
                  days. If you submit an accessibility complaint, we will
                  acknowledge receipt within 2 business days and provide a
                  substantive response — including a remediation plan for any
                  confirmed barrier — within 15 business days.
                </p>
              </section>

              <section id="disproportionate-burden">
                <h2>Disproportionate Burden Assessment</h2>
                <p>
                  Article 14 of the European Accessibility Act allows
                  micro-enterprises (fewer than 10 employees and annual
                  turnover below &euro;2 million) to claim an exemption where
                  compliance would impose a &ldquo;disproportionate
                  burden.&rdquo;
                </p>
                <p>
                  LumenShore Limited (Company No. 09607326, England &amp;
                  Wales) currently qualifies as a micro-enterprise. However, we
                  do not rely on this exemption as a blanket defence. Instead,
                  we take reasonable measures to comply with EN 301 549 and
                  WCAG 2.1 AA, prioritising the highest-impact accessibility
                  improvements within our resources:
                </p>
                <ul>
                  <li>Keyboard and screen-reader access for all core workflows</li>
                  <li>Colour-contrast compliance across light and dark themes</li>
                  <li>Reduced-motion support for all interactive animations</li>
                  <li>Quarterly audit schedule with documented remediation plan</li>
                </ul>
                <p>
                  Where full conformance is not yet achieved (e.g. complete
                  Dynamic Type support in the iOS app), we document the
                  non-conformity above with a remediation timeline. This
                  assessment is reviewed annually alongside the accessibility
                  audit.
                </p>
              </section>

              <section id="enforcement">
                <h2>Enforcement Procedure</h2>
                <h3>United Kingdom</h3>
                <p>
                  If you are not satisfied with our response to your
                  accessibility concern, you may escalate by contacting the{' '}
                  <a
                    href="https://www.equalityhumanrights.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Equality and Human Rights Commission (EHRC)
                  </a>.
                </p>
                <h3>European Union</h3>
                <p>
                  EU residents may contact the national enforcement
                  authority in their EU member state responsible for the
                  European Accessibility Act. A list of designated market
                  surveillance authorities is maintained by each member state
                  under Article 19 of the EAA.
                </p>
                <h3>United States</h3>
                <p>
                  US residents with accessibility concerns may file a
                  complaint under Title III of the Americans with Disabilities
                  Act. We encourage you to contact us first
                  at{' '}
                  <a href="mailto:accessibility@lumenshore.com">
                    accessibility@lumenshore.com
                  </a>{' '}
                  so we can resolve the issue directly. Our{' '}
                  <Link href="/accessibility/vpat" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">VPAT</Link>{' '}
                  documents our current conformance level.
                </p>
              </section>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageTransition>
  );
}
