import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/home';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Corporate Governance',
  description:
    'LumenShore Limited corporate governance disclosures, Companies Act 2006 compliance, director duties, and company information.',
  alternates: {
    canonical: 'https://lumenlingo.com/corporate-governance',
  },
  openGraph: {
    title: 'Corporate Governance — LumenLingo',
    description:
      'Company information, governance framework, and statutory disclosures for LumenShore Limited.',
    url: 'https://lumenlingo.com/corporate-governance',
    siteName: 'LumenLingo',
    type: 'website',
  },
};

export default async function CorporateGovernancePage({
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
          { name: 'Corporate Governance', href: '/corporate-governance' },
        ]}
      />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              Corporate Governance
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg">
              Company information, governance framework, and statutory
              disclosures.
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
              <section id="company-information">
                <h2>Company Information</h2>
                <table>
                  <tbody>
                    <tr>
                      <td><strong>Legal name</strong></td>
                      <td>LumenShore Limited</td>
                    </tr>
                    <tr>
                      <td><strong>Company number</strong></td>
                      <td>09607326</td>
                    </tr>
                    <tr>
                      <td><strong>Jurisdiction</strong></td>
                      <td>England &amp; Wales</td>
                    </tr>
                    <tr>
                      <td><strong>Incorporated</strong></td>
                      <td>26 May 2015</td>
                    </tr>
                    <tr>
                      <td><strong>VAT number</strong></td>
                      <td>GB 270411929</td>
                    </tr>
                    <tr>
                      <td><strong>Registered office</strong></td>
                      <td>
                        Windsor House, Troon Way Business Centre, Humberstone
                        Lane, Leicester, LE4 9HA, United Kingdom
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Companies House profile</strong></td>
                      <td>
                        <a
                          href="https://find-and-update.company-information.service.gov.uk/company/09607326"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Companies House
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section id="governance-framework">
                <h2>Governance Framework</h2>
                <p>
                  LumenShore Limited is governed under the Companies Act 2006.
                  As a private limited company, we maintain governance practices
                  proportionate to our size while fulfilling all statutory
                  obligations.
                </p>
              </section>

              <section id="filing-obligations">
                <h2>Statutory Filing Obligations</h2>
                <p>
                  The following filings are maintained on a rolling basis:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Obligation</th>
                      <th>Filed with</th>
                      <th>Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Confirmation Statement</td>
                      <td>Companies House</td>
                      <td>At least annually (within 14 days of review date)</td>
                    </tr>
                    <tr>
                      <td>Annual Accounts</td>
                      <td>Companies House</td>
                      <td>Within 9 months of financial year-end</td>
                    </tr>
                    <tr>
                      <td>Corporation Tax Return (CT600)</td>
                      <td>HMRC</td>
                      <td>Within 12 months of accounting period end</td>
                    </tr>
                    <tr>
                      <td>Corporation Tax Payment</td>
                      <td>HMRC</td>
                      <td>Within 9 months and 1 day of accounting period end</td>
                    </tr>
                    <tr>
                      <td>VAT Returns</td>
                      <td>HMRC</td>
                      <td>Quarterly (via Making Tax Digital)</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section id="director-duties">
                <h2>Director Duties</h2>
                <p>
                  Directors of LumenShore Limited are bound by the general
                  duties set out in the Companies Act 2006, sections 171–177:
                </p>
                <ol>
                  <li>
                    <strong>Act within powers</strong> (s.171) — exercise
                    powers only for the purposes for which they are conferred,
                    in accordance with the company&apos;s constitution.
                  </li>
                  <li>
                    <strong>Promote the success of the company</strong> (s.172)
                    — act in the way most likely to promote the success of the
                    company for the benefit of its members as a whole, having
                    regard to long-term consequences, employee interests,
                    business relationships, community and environmental impact,
                    and the desirability of maintaining a reputation for high
                    standards of business conduct.
                  </li>
                  <li>
                    <strong>Exercise independent judgment</strong> (s.173) —
                    not subordinate decision-making power to another person
                    unless authorised by the constitution.
                  </li>
                  <li>
                    <strong>Exercise reasonable care, skill and diligence</strong>{' '}
                    (s.174) — apply the standard of care, skill, and diligence
                    that would be exercised by a reasonably diligent person
                    with both the general knowledge and skills reasonably
                    expected and the specific knowledge and skills the director
                    actually possesses.
                  </li>
                  <li>
                    <strong>Avoid conflicts of interest</strong> (s.175) —
                    avoid situations in which a direct or indirect interest
                    conflicts, or possibly may conflict, with the interests of
                    the company.
                  </li>
                  <li>
                    <strong>Not accept benefits from third parties</strong>{' '}
                    (s.176) — must not accept a benefit from a third party
                    conferred by reason of being a director.
                  </li>
                  <li>
                    <strong>Declare interest in proposed transactions</strong>{' '}
                    (s.177) — if a director is in any way directly or
                    indirectly interested in a proposed transaction, they must
                    declare the nature and extent of that interest.
                  </li>
                </ol>
              </section>

              <section id="psc-register">
                <h2>Persons with Significant Control (PSC)</h2>
                <p>
                  Under the Small Business, Enterprise and Employment Act 2015,
                  LumenShore Limited maintains a register of persons with
                  significant control. A PSC is an individual who:
                </p>
                <ul>
                  <li>Holds more than 25% of the company&apos;s shares;</li>
                  <li>Holds more than 25% of the company&apos;s voting rights;</li>
                  <li>Has the right to appoint or remove a majority of the board of directors; or</li>
                  <li>Otherwise exercises, or has the right to exercise, significant influence or control.</li>
                </ul>
                <p>
                  Changes to PSC information are filed with Companies House
                  within 14 days and confirmed in the annual Confirmation
                  Statement. The PSC register is available for public
                  inspection via Companies House.
                </p>
              </section>

              <section id="statutory-registers">
                <h2>Statutory Registers</h2>
                <p>
                  LumenShore Limited maintains the following statutory
                  registers as required by the Companies Act 2006:
                </p>
                <ul>
                  <li>Register of members (s.113)</li>
                  <li>Register of directors (s.162)</li>
                  <li>Register of directors&apos; residential addresses (s.165)</li>
                  <li>Register of persons with significant control (s.790M)</li>
                  <li>Register of charges (s.876) — where applicable</li>
                </ul>
                <p>
                  Registers may be inspected at the registered office address
                  or via the Companies House public register.
                </p>
              </section>

              <section id="insurance">
                <h2>Insurance Coverage</h2>
                <p>
                  LumenShore Limited maintains insurance coverage appropriate
                  to its business activities and risk profile:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Policy Type</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Cyber Liability</strong></td>
                      <td>
                        Data breach response costs, IT forensics, notification
                        costs, regulatory investigation costs, business
                        interruption from cyber incidents, and third-party
                        claims arising from data breaches.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Professional Indemnity</strong></td>
                      <td>
                        Claims of negligence or inadequate service arising from
                        the provision of educational content and language-learning
                        tools.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Directors&apos; &amp; Officers&apos; (D&amp;O) Liability</strong></td>
                      <td>
                        Personal liability protection for directors, including
                        legal defence costs and claims related to data
                        protection compliance.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Product Liability</strong></td>
                      <td>
                        Coverage for claims related to digital products, in
                        light of the EU Product Liability Directive which may
                        extend to software products.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Employers&apos; Liability</strong></td>
                      <td>
                        Compulsory under the Employers&apos; Liability
                        (Compulsory Insurance) Act 1969 if employing staff.
                        Obtained when employees are engaged.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Coverage amounts and policies are reviewed annually, aligned
                  with business growth and the expanding user base. Specific
                  policy details and limits are maintained internally and are
                  not publicly disclosed.
                </p>
              </section>

              <section id="contact">
                <h2>Contact</h2>
                <p>
                  For corporate governance enquiries, contact{' '}
                  <a href="mailto:support@lumenlingo.com">
                    support@lumenlingo.com
                  </a>
                  . For regulatory matters, see our{' '}
                  <Link href="/privacy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/terms" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                    Terms of Service
                  </Link>.
                </p>
              </section>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageTransition>
  );
}
