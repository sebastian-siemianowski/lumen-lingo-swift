import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/home';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'VPAT — Voluntary Product Accessibility Template',
  description:
    'LumenLingo VPAT documenting WCAG 2.1 Level AA conformance for the website, iOS app, and digital services.',
  alternates: {
    canonical: 'https://lumenlingo.com/accessibility/vpat',
  },
};

export default async function VPATPage({
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
          { name: 'VPAT', href: '/accessibility/vpat' },
        ]}
      />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              Voluntary Product Accessibility Template
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg">
              WCAG 2.1 Level AA conformance evaluation for LumenLingo, based
              on the ITI VPAT&reg; 2.5 format.
            </Text>
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2 text-xs text-white/50">
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-white/40" aria-hidden>
                  <path d="M8 4v4l2.5 1.5M14 8A6 6 0 112 8a6 6 0 0112 0z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
                Evaluation date: 24 March 2026
              </span>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8 pb-20 sm:py-12 sm:pb-28">
        <Container>
          <FadeIn>
            <div className="legal-prose mx-auto max-w-4xl">
              <section id="product-info">
                <h2>Product Information</h2>
                <table>
                  <tbody>
                    <tr>
                      <td><strong>Product Name</strong></td>
                      <td>LumenLingo</td>
                    </tr>
                    <tr>
                      <td><strong>Product Version</strong></td>
                      <td>Website (lumenlingo.com) &amp; iOS App v1.x</td>
                    </tr>
                    <tr>
                      <td><strong>Vendor</strong></td>
                      <td>LumenShore Limited (Company No. 09607326, England &amp; Wales)</td>
                    </tr>
                    <tr>
                      <td><strong>Contact</strong></td>
                      <td><a href="mailto:accessibility@lumenlingo.com">accessibility@lumenlingo.com</a></td>
                    </tr>
                    <tr>
                      <td><strong>Evaluation Methods</strong></td>
                      <td>Manual testing with VoiceOver (macOS/iOS), keyboard-only navigation, automated tooling, visual contrast audit</td>
                    </tr>
                    <tr>
                      <td><strong>Applicable Standard</strong></td>
                      <td>WCAG 2.1 Level AA &amp; EN 301 549 v3.2.1</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section id="terms">
                <h2>Conformance Level Definitions</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Term</th>
                      <th>Definition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Supports</strong></td>
                      <td>The functionality of the product has at least one method that meets the criterion without known defects or consistently meets the criterion.</td>
                    </tr>
                    <tr>
                      <td><strong>Partially Supports</strong></td>
                      <td>Some functionality of the product does not meet the criterion.</td>
                    </tr>
                    <tr>
                      <td><strong>Does Not Support</strong></td>
                      <td>The majority of product functionality does not meet the criterion.</td>
                    </tr>
                    <tr>
                      <td><strong>Not Applicable</strong></td>
                      <td>The criterion is not relevant to the product.</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section id="wcag-table-a">
                <h2>WCAG 2.1 Level A</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Conformance</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.1.1 Non-text Content</td>
                      <td>Partially Supports</td>
                      <td>Website: images have alt text. iOS app: key UI elements labelled; decorative views rely on SwiftUI defaults.</td>
                    </tr>
                    <tr>
                      <td>1.2.1 Audio-only / Video-only (Prerecorded)</td>
                      <td>Not Applicable</td>
                      <td>No prerecorded audio or video content.</td>
                    </tr>
                    <tr>
                      <td>1.2.2 Captions (Prerecorded)</td>
                      <td>Not Applicable</td>
                      <td>No prerecorded video content.</td>
                    </tr>
                    <tr>
                      <td>1.2.3 Audio Description (Prerecorded)</td>
                      <td>Not Applicable</td>
                      <td>No prerecorded video content.</td>
                    </tr>
                    <tr>
                      <td>1.3.1 Info and Relationships</td>
                      <td>Supports</td>
                      <td>Semantic HTML headings, lists, tables, landmarks throughout website. iOS app uses standard SwiftUI components.</td>
                    </tr>
                    <tr>
                      <td>1.3.2 Meaningful Sequence</td>
                      <td>Supports</td>
                      <td>Content order matches visual presentation on both platforms.</td>
                    </tr>
                    <tr>
                      <td>1.3.3 Sensory Characteristics</td>
                      <td>Supports</td>
                      <td>Instructions do not rely solely on colour, shape, or location.</td>
                    </tr>
                    <tr>
                      <td>1.4.1 Use of Color</td>
                      <td>Supports</td>
                      <td>Colour is not the sole means of conveying information (icons, text labels accompany colour cues).</td>
                    </tr>
                    <tr>
                      <td>1.4.2 Audio Control</td>
                      <td>Supports</td>
                      <td>All sound effects are user-configurable in Settings.</td>
                    </tr>
                    <tr>
                      <td>2.1.1 Keyboard</td>
                      <td>Supports</td>
                      <td>Website: all interactive elements reachable via Tab/Enter. iOS: standard SwiftUI controls support keyboard/switch control.</td>
                    </tr>
                    <tr>
                      <td>2.1.2 No Keyboard Trap</td>
                      <td>Supports</td>
                      <td>No keyboard traps identified. Modals dismiss with Escape.</td>
                    </tr>
                    <tr>
                      <td>2.2.1 Timing Adjustable</td>
                      <td>Not Applicable</td>
                      <td>No timed content or session timeouts.</td>
                    </tr>
                    <tr>
                      <td>2.2.2 Pause, Stop, Hide</td>
                      <td>Supports</td>
                      <td>Background animations respect prefers-reduced-motion. No auto-playing content that cannot be paused.</td>
                    </tr>
                    <tr>
                      <td>2.3.1 Three Flashes</td>
                      <td>Supports</td>
                      <td>No content flashes more than three times per second.</td>
                    </tr>
                    <tr>
                      <td>2.4.1 Bypass Blocks</td>
                      <td>Supports</td>
                      <td>Skip-to-content link provided on all pages. Main landmark structure used.</td>
                    </tr>
                    <tr>
                      <td>2.4.2 Page Titled</td>
                      <td>Supports</td>
                      <td>All pages have descriptive, unique titles.</td>
                    </tr>
                    <tr>
                      <td>2.4.3 Focus Order</td>
                      <td>Supports</td>
                      <td>Tab order follows natural reading order.</td>
                    </tr>
                    <tr>
                      <td>2.4.4 Link Purpose (In Context)</td>
                      <td>Supports</td>
                      <td>Link text describes destination; no ambiguous &ldquo;click here&rdquo; links.</td>
                    </tr>
                    <tr>
                      <td>2.5.1 Pointer Gestures</td>
                      <td>Supports</td>
                      <td>All multi-point gestures have single-pointer alternatives.</td>
                    </tr>
                    <tr>
                      <td>2.5.2 Pointer Cancellation</td>
                      <td>Supports</td>
                      <td>Actions fire on up-event (touch end / mouse up).</td>
                    </tr>
                    <tr>
                      <td>3.1.1 Language of Page</td>
                      <td>Supports</td>
                      <td>Lang attribute set on html element per locale.</td>
                    </tr>
                    <tr>
                      <td>3.2.1 On Focus</td>
                      <td>Supports</td>
                      <td>No context changes on focus.</td>
                    </tr>
                    <tr>
                      <td>3.2.2 On Input</td>
                      <td>Supports</td>
                      <td>Form inputs do not trigger unexpected context changes.</td>
                    </tr>
                    <tr>
                      <td>3.3.1 Error Identification</td>
                      <td>Supports</td>
                      <td>Form errors identified in text with accessible messaging.</td>
                    </tr>
                    <tr>
                      <td>3.3.2 Labels or Instructions</td>
                      <td>Supports</td>
                      <td>All form fields have associated labels.</td>
                    </tr>
                    <tr>
                      <td>4.1.1 Parsing</td>
                      <td>Supports</td>
                      <td>Valid HTML output via React/Next.js. No duplicate IDs.</td>
                    </tr>
                    <tr>
                      <td>4.1.2 Name, Role, Value</td>
                      <td>Partially Supports</td>
                      <td>Website: fully supports via semantic HTML and ARIA. iOS app: standard controls compliant; some custom views lack explicit roles.</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section id="wcag-table-aa">
                <h2>WCAG 2.1 Level AA</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Conformance</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.2.4 Captions (Live)</td>
                      <td>Not Applicable</td>
                      <td>No live audio or video.</td>
                    </tr>
                    <tr>
                      <td>1.2.5 Audio Description (Prerecorded)</td>
                      <td>Not Applicable</td>
                      <td>No prerecorded video.</td>
                    </tr>
                    <tr>
                      <td>1.3.4 Orientation</td>
                      <td>Supports</td>
                      <td>Content not restricted to single orientation on either platform.</td>
                    </tr>
                    <tr>
                      <td>1.3.5 Identify Input Purpose</td>
                      <td>Supports</td>
                      <td>Form fields use appropriate autocomplete attributes and textContentType.</td>
                    </tr>
                    <tr>
                      <td>1.4.3 Contrast (Minimum)</td>
                      <td>Supports</td>
                      <td>4.5:1 ratio for normal text, 3:1 for large text across light and dark themes.</td>
                    </tr>
                    <tr>
                      <td>1.4.4 Resize Text</td>
                      <td>Partially Supports</td>
                      <td>Website: text reflows at 200% zoom. iOS app: ~87% of text uses fixed sizes; Dynamic Type migration planned for Q4 2026.</td>
                    </tr>
                    <tr>
                      <td>1.4.5 Images of Text</td>
                      <td>Supports</td>
                      <td>Content uses real text, not images of text (except decorative elements).</td>
                    </tr>
                    <tr>
                      <td>1.4.10 Reflow</td>
                      <td>Supports</td>
                      <td>Website content reflows to 320px width. iOS app adjusts to any screen size.</td>
                    </tr>
                    <tr>
                      <td>1.4.11 Non-text Contrast</td>
                      <td>Supports</td>
                      <td>UI components and graphics meet 3:1 contrast ratio.</td>
                    </tr>
                    <tr>
                      <td>1.4.12 Text Spacing</td>
                      <td>Supports</td>
                      <td>Website content adjusts to increased text spacing without loss.</td>
                    </tr>
                    <tr>
                      <td>1.4.13 Content on Hover or Focus</td>
                      <td>Supports</td>
                      <td>Hover/focus content is dismissible and persistent.</td>
                    </tr>
                    <tr>
                      <td>2.4.5 Multiple Ways</td>
                      <td>Supports</td>
                      <td>Navigation menu, breadcrumbs, and sitemap provide multiple paths.</td>
                    </tr>
                    <tr>
                      <td>2.4.6 Headings and Labels</td>
                      <td>Supports</td>
                      <td>Descriptive headings and labels throughout.</td>
                    </tr>
                    <tr>
                      <td>2.4.7 Focus Visible</td>
                      <td>Supports</td>
                      <td>Visible focus indicators on all interactive elements.</td>
                    </tr>
                    <tr>
                      <td>2.5.8 Target Size (Minimum)</td>
                      <td>Partially Supports</td>
                      <td>Most targets meet 24×24 CSS px. Some small iOS icon buttons being audited; target Q3 2026.</td>
                    </tr>
                    <tr>
                      <td>3.1.2 Language of Parts</td>
                      <td>Supports</td>
                      <td>Foreign language content in flashcards is appropriately marked.</td>
                    </tr>
                    <tr>
                      <td>3.2.3 Consistent Navigation</td>
                      <td>Supports</td>
                      <td>Navigation consistent across all pages.</td>
                    </tr>
                    <tr>
                      <td>3.2.4 Consistent Identification</td>
                      <td>Supports</td>
                      <td>Components with same function identified consistently.</td>
                    </tr>
                    <tr>
                      <td>3.3.3 Error Suggestion</td>
                      <td>Supports</td>
                      <td>Form validation provides actionable suggestions.</td>
                    </tr>
                    <tr>
                      <td>3.3.4 Error Prevention (Legal, Financial, Data)</td>
                      <td>Supports</td>
                      <td>Subscription purchases use App Store&apos;s confirmation flow.</td>
                    </tr>
                    <tr>
                      <td>4.1.3 Status Messages</td>
                      <td>Partially Supports</td>
                      <td>Website: status messages use ARIA live regions. iOS: PDF generation progress announced; some game status changes are silent.</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section id="additional-notes">
                <h2>Additional Notes</h2>
                <ul>
                  <li>
                    This VPAT covers lumenlingo.com and the LumenLingo iOS app
                    as evaluated on 24 March 2026.
                  </li>
                  <li>
                    The evaluation was conducted by LumenShore Ltd using manual
                    testing with VoiceOver (macOS 15 / iOS 18), keyboard-only
                    navigation in Safari, Chrome, and Firefox, and visual
                    inspection of colour contrast.
                  </li>
                  <li>
                    Items marked &ldquo;Partially Supports&rdquo; have
                    corresponding remediation timelines documented in
                    our{' '}
                    <Link href="/accessibility" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                      Accessibility Statement
                    </Link>.
                  </li>
                  <li>
                    This document is updated alongside the accessibility
                    statement following each quarterly audit.
                  </li>
                </ul>
              </section>

              <section id="contact">
                <h2>Contact</h2>
                <p>
                  For questions about this VPAT or to request an updated
                  version, contact{' '}
                  <a href="mailto:accessibility@lumenlingo.com">
                    accessibility@lumenlingo.com
                  </a>.
                </p>
              </section>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageTransition>
  );
}
