import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { ProtectedEmail } from '@/components/ui/protected-email';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/home';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'AI Transparency Policy',
  description:
    'How LumenLingo uses algorithms and AI, our EU AI Act compliance assessment, GDPR automated decision-making review, and UK AI framework principles.',
  alternates: {
    canonical: 'https://lumenlingo.com/ai-transparency',
  },
  openGraph: {
    title: 'AI Transparency Policy — LumenLingo',
    description:
      'Our approach to algorithmic transparency, AI risk classification, and user rights under the EU AI Act and GDPR.',
    url: 'https://lumenlingo.com/ai-transparency',
    siteName: 'LumenLingo',
    type: 'website',
  },
};

export default async function AITransparencyPage({
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
          { name: 'AI Transparency Policy', href: '/ai-transparency' },
        ]}
      />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              AI Transparency Policy
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg">
              How LumenLingo uses algorithms and our commitments under the
              EU AI Act, GDPR, and UK AI framework.
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
              <section id="overview">
                <h2>Overview</h2>
                <p>
                  LumenLingo is a language-learning application that uses
                  algorithmic techniques to personalise the learning experience.
                  This page explains what algorithms we use, how they affect
                  your experience, and how we comply with applicable AI
                  regulation including the{' '}
                  <a
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EU Artificial Intelligence Act (Regulation 2024/1689)
                  </a>
                  , the UK&apos;s pro-innovation AI framework, and the GDPR&apos;s
                  provisions on automated decision-making.
                </p>
              </section>

              <section id="algorithms-we-use">
                <h2>Algorithms We Use</h2>
                <p>
                  LumenLingo currently employs the following algorithmic systems:
                </p>
                <h3>Spaced Repetition Algorithm</h3>
                <p>
                  Flashcard review intervals are calculated using a spaced
                  repetition algorithm that adapts to your performance. Cards
                  you answer correctly are shown less frequently; cards you
                  struggle with are shown more often. This system uses only
                  your in-app learning data (correct/incorrect answers, review
                  timestamps) and does not process personal data beyond your
                  learning activity.
                </p>
                <h3>Progress Tracking</h3>
                <p>
                  Category completion percentages, difficulty scores, and
                  learning streaks are computed from your answer history. These
                  calculations are deterministic (not AI/ML-based) and run
                  locally on your device.
                </p>
                <h3>Content Ordering</h3>
                <p>
                  The order in which vocabulary categories and exercises are
                  presented may be influenced by your learning progress. This
                  is rule-based ordering, not machine learning.
                </p>
              </section>

              <section id="eu-ai-act">
                <h2>EU AI Act Risk Classification</h2>
                <p>
                  The EU AI Act classifies AI systems into risk categories.
                  We have assessed LumenLingo&apos;s algorithmic features as
                  follows:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Risk Category</th>
                      <th>Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Spaced repetition algorithm</td>
                      <td><strong>Minimal risk</strong></td>
                      <td>
                        Does not impact human rights, safety, or fundamental
                        freedoms. Purely educational optimisation with no
                        profiling or significant decision-making.
                      </td>
                    </tr>
                    <tr>
                      <td>Learning path personalisation</td>
                      <td><strong>Minimal risk</strong></td>
                      <td>
                        Rule-based ordering of content categories. Not an AI
                        system as defined in Art. 3(1). No opacity or autonomy
                        risk.
                      </td>
                    </tr>
                    <tr>
                      <td>Future: AI-generated content</td>
                      <td><strong>Limited risk</strong> (transparency obligation)</td>
                      <td>
                        If implemented, must disclose AI-generated content to
                        users per Art. 50. Users must be informed they are
                        interacting with AI-generated material.
                      </td>
                    </tr>
                    <tr>
                      <td>Future: Learning path AI</td>
                      <td><strong>Limited risk</strong> (transparency obligation)</td>
                      <td>
                        If ML-based personalisation is introduced, users must
                        be informed the system uses AI per Art. 50.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  None of LumenLingo&apos;s current or planned features fall
                  within the &ldquo;high risk&rdquo; (Annex III) or
                  &ldquo;unacceptable risk&rdquo; (Art. 5) categories. Educational
                  software is not listed in Annex III unless it determines
                  access to education or vocational training, which LumenLingo
                  does not.
                </p>
              </section>

              <section id="transparency">
                <h2>Transparency Obligations</h2>
                <p>
                  Even for minimal and limited-risk AI systems, the EU AI Act
                  imposes transparency obligations. We commit to the following:
                </p>
                <ul>
                  <li>
                    <strong>Disclosure:</strong> If we introduce AI-powered
                    features (e.g. AI-generated example sentences, AI tutoring),
                    we will clearly label that content as AI-generated.
                  </li>
                  <li>
                    <strong>Explainability:</strong> Users can understand how
                    the spaced repetition algorithm works — it is described
                    above and does not use opaque ML models.
                  </li>
                  <li>
                    <strong>User control:</strong> Users can reset their
                    learning progress at any time, which clears all algorithmic
                    personalisation data.
                  </li>
                  <li>
                    <strong>No deception:</strong> We do not use AI to
                    manipulate, deceive, or exploit users. Our algorithms exist
                    solely to improve learning outcomes.
                  </li>
                </ul>
              </section>

              <section id="gdpr-art22">
                <h2>GDPR Article 22 — Automated Decision-Making</h2>
                <p>
                  Article 22 of the GDPR gives individuals the right not to be
                  subject to decisions based solely on automated processing that
                  produce legal effects or similarly significant effects.
                </p>
                <h3>Assessment</h3>
                <p>
                  We have assessed each algorithmic feature against the Art L 22
                  threshold:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Sole automated decision?</th>
                      <th>Legal/significant effect?</th>
                      <th>Art. 22 applies?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Spaced repetition scheduling</td>
                      <td>Yes (automated)</td>
                      <td>No — affects flashcard order only</td>
                      <td><strong>No</strong></td>
                    </tr>
                    <tr>
                      <td>Progress scores</td>
                      <td>Yes (deterministic calculation)</td>
                      <td>No — informational display only</td>
                      <td><strong>No</strong></td>
                    </tr>
                    <tr>
                      <td>Content ordering</td>
                      <td>Yes (rule-based)</td>
                      <td>No — does not restrict access to content</td>
                      <td><strong>No</strong></td>
                    </tr>
                    <tr>
                      <td>Future: Subscription tier recommendations</td>
                      <td>Could be automated</td>
                      <td>Below threshold — user makes final purchase decision</td>
                      <td><strong>No</strong> (but will review if implemented)</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <strong>Conclusion:</strong> No current LumenLingo feature
                  triggers GDPR Art. 22 obligations. We will reassess each new
                  algorithmic feature before launch using the checklist below.
                </p>
                <p>
                  Regardless, under Art. 13–14 GDPR, we provide information
                  about the existence of automated decision-making in our{' '}
                  <Link href="/privacy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                    Privacy Policy
                  </Link>.
                </p>
              </section>

              <section id="uk-ai-framework">
                <h2>UK AI Framework Principles</h2>
                <p>
                  The UK government&apos;s{' '}
                  <a
                    href="https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pro-innovation Regulation of AI White Paper
                  </a>{' '}
                  sets out five cross-sectoral principles. Here is how
                  LumenLingo&apos;s algorithmic features align:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Principle</th>
                      <th>How we meet it</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Safety, security &amp; robustness</strong></td>
                      <td>
                        Algorithms are deterministic or simple statistical
                        models with predictable behaviour. No safety-critical
                        decisions. Data processed on-device where possible.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Transparency &amp; explainability</strong></td>
                      <td>
                        This page documents all algorithmic systems. Spaced
                        repetition logic is described plainly. AI-generated
                        content will be labelled if introduced.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Fairness</strong></td>
                      <td>
                        Algorithms do not discriminate based on protected
                        characteristics. Learning schedules are based solely
                        on individual performance data.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Accountability &amp; governance</strong></td>
                      <td>
                        LumenShore Limited is accountable for all algorithmic
                        systems. Each AI feature must pass the legal checklist
                        below before deployment.
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Contestability &amp; redress</strong></td>
                      <td>
                        Users can reset their progress data at any time. Usage
                        queries
                        can be raised via{' '}
                        <ProtectedEmail emailKey="support" />.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section id="ai-checklist">
                <h2>AI Feature Legal Checklist</h2>
                <p>
                  Before deploying any new AI or algorithmic feature,
                  LumenShore evaluates it against the following checklist:
                </p>
                <ol>
                  <li>
                    <strong>Automated decisions about users?</strong> — Does the
                    feature make decisions that affect user access, pricing, or
                    content availability? If yes → assess GDPR Art. 22
                    applicability.
                  </li>
                  <li>
                    <strong>Personal data for training?</strong> — Does the
                    feature use personal data to train or fine-tune models? If
                    yes → conduct DPIA (Data Protection Impact Assessment),
                    identify lawful basis, ensure data minimisation.
                  </li>
                  <li>
                    <strong>AI-generated content?</strong> — Does the feature
                    generate text, images, or audio that users might mistake for
                    human-created? If yes → label as AI-generated per EU AI Act
                    Art. 50.
                  </li>
                  <li>
                    <strong>User profiling?</strong> — Does the feature build
                    profiles of user behaviour beyond what is necessary for the
                    service? If yes → provide opt-out per GDPR Art. 21 and
                    disclose in Privacy Policy.
                  </li>
                  <li>
                    <strong>EU AI Act risk category?</strong> — Classify the
                    feature per Art. 6 (high risk), Art. 50 (limited risk), or
                    minimal risk. Document the classification and rationale.
                  </li>
                  <li>
                    <strong>UK AI principles?</strong> — Assess against all five
                    UK framework principles (safety, transparency, fairness,
                    accountability, contestability).
                  </li>
                  <li>
                    <strong>Bias testing?</strong> — Has the feature been tested
                    for bias across user demographics (age, language,
                    disability)?
                  </li>
                </ol>
                <p>
                  This checklist is reviewed annually and updated as regulatory
                  guidance evolves.
                </p>
              </section>

              <section id="contact">
                <h2>Contact</h2>
                <p>
                  Questions about LumenLingo&apos;s use of algorithms or AI can be
                  directed to{' '}
                  <ProtectedEmail emailKey="support" />
                  . You may also visit our{' '}
                  <Link href="/privacy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                    Contact page
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
