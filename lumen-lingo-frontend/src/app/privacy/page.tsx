import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { LegalTOC, DownloadPDFButton } from '@/components/legal';
import { BreadcrumbJsonLd } from '@/components/home';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read how LumenShore handles your data with care. Learn about our privacy-first approach, on-device processing, iCloud sync, and your rights under GDPR and CCPA.',
  alternates: {
    canonical: 'https://lumenlingo.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — LumenLingo',
    description:
      'Read how LumenShore handles your data with care. Privacy-first, on-device processing, iCloud sync.',
    url: 'https://lumenlingo.com/privacy',
    siteName: 'LumenLingo',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy — LumenLingo',
    description:
      'Read how LumenShore handles your data with care. Privacy-first, on-device processing, iCloud sync.',
  },
};

const tocItems = [
  { id: 'overview', text: 'Overview', level: 2 },
  { id: 'information-we-collect', text: 'Information We Collect', level: 2 },
  { id: 'what-we-dont-collect', text: "What We Don't Collect", level: 2 },
  { id: 'how-we-use', text: 'How We Use Your Information', level: 2 },
  { id: 'data-storage', text: 'Data Storage & Security', level: 2 },
  { id: 'third-party', text: 'Third-Party Services', level: 2 },
  { id: 'childrens-privacy', text: "Children's Privacy", level: 2 },
  { id: 'data-retention', text: 'Data Retention & Deletion', level: 2 },
  { id: 'your-rights', text: 'Your Rights', level: 2 },
  { id: 'policy-updates', text: 'Policy Updates', level: 2 },
  { id: 'contact-us', text: 'Contact Us', level: 2 },
];

export default function PrivacyPage() {
  return (
    <PageTransition>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy', href: '/privacy' }]} />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              Privacy Policy
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg">
              Your privacy matters deeply to us. Here&apos;s exactly how we handle your data — in plain English, not legal jargon.
            </Text>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2 text-xs text-white/50">
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-white/40" aria-hidden>
                  <path d="M8 4v4l2.5 1.5M14 8A6 6 0 112 8a6 6 0 0112 0z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </svg>
                Last updated: 22 March 2026
              </span>
              <DownloadPDFButton />
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8 sm:py-12 pb-20 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-4xl xl:grid xl:grid-cols-[1fr_200px] xl:gap-12">
            {/* Prose */}
            <FadeIn>
              <div className="legal-prose">
                <section id="overview">
                  <h2>Overview</h2>
                  <p>
                    LumenShore Ltd (&ldquo;LumenShore&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the LumenLingo mobile application (&ldquo;the App&rdquo;). This Privacy Policy explains how we collect, use, store, and protect information when you use LumenLingo.
                  </p>
                  <p>
                    We built LumenLingo with a privacy-first architecture. Your learning data is processed and stored on your device and in your personal iCloud account — not on our servers. We believe your data is yours, and it should stay that way.
                  </p>
                </section>

                <section id="information-we-collect">
                  <h2>Information We Collect</h2>
                  <p>LumenLingo collects minimal data necessary to provide a great learning experience:</p>
                  <ul>
                    <li><strong>Learning progress data</strong> — flashcard mastery levels, practice scores, streaks, XP, and session history. This data is stored locally on your device and synced via iCloud.</li>
                    <li><strong>App preferences</strong> — your selected language pairs, soundscape preferences, visual background choices, and tier selection. Stored on-device and synced via iCloud.</li>
                    <li><strong>Subscription status</strong> — your membership tier, managed entirely by Apple through the App Store. We receive a subscription status from Apple but do not process payment information.</li>
                    <li><strong>Anonymous analytics</strong> — we may collect aggregated, non-identifiable usage metrics (such as which features are most popular) to improve the app. No personal data is included.</li>
                  </ul>
                </section>

                <section id="what-we-dont-collect">
                  <h2>What We Don&apos;t Collect</h2>
                  <p>We want to be clear about what we <strong>never</strong> collect:</p>
                  <ul>
                    <li>No email addresses, names, or personal identifiers (the app doesn&apos;t require account registration)</li>
                    <li>No location data or GPS coordinates</li>
                    <li>No contacts, photos, or access to other apps on your device</li>
                    <li>No payment or credit card information (Apple handles all billing)</li>
                    <li>No advertising identifiers or tracking pixels</li>
                    <li>No data sold or shared with third-party advertisers — ever</li>
                  </ul>
                </section>

                <section id="how-we-use">
                  <h2>How We Use Your Information</h2>
                  <p>The limited data we handle is used solely to:</p>
                  <ul>
                    <li><strong>Personalise your learning</strong> — spaced repetition scheduling, difficulty adaptation, and progress tracking depend on your learning history.</li>
                    <li><strong>Sync your progress</strong> — iCloud sync ensures your data follows you across all your Apple devices.</li>
                    <li><strong>Manage your subscription</strong> — we verify your membership tier to unlock the appropriate features.</li>
                    <li><strong>Improve the app</strong> — anonymous aggregate data helps us understand which features are valuable and where to focus development.</li>
                  </ul>
                </section>

                <section id="data-storage">
                  <h2>Data Storage &amp; Security</h2>
                  <p>
                    LumenLingo uses a privacy-first, on-device architecture:
                  </p>
                  <ul>
                    <li><strong>On-device storage</strong> — all learning data is stored locally using Apple&apos;s SwiftData framework, protected by your device&apos;s built-in encryption.</li>
                    <li><strong>iCloud sync</strong> — data syncs between your devices via your personal iCloud account, encrypted end-to-end by Apple. We do not have access to your iCloud data.</li>
                    <li><strong>No external servers</strong> — LumenLingo does not maintain servers that store your personal data. There is no cloud database for us to secure (or breach).</li>
                    <li><strong>App Store security</strong> — subscription management is handled by Apple&apos;s secure infrastructure.</li>
                  </ul>
                </section>

                <section id="third-party">
                  <h2>Third-Party Services</h2>
                  <p>LumenLingo integrates with a limited number of third-party services:</p>
                  <ul>
                    <li><strong>Apple App Store</strong> — for app distribution, subscription management, and payment processing. Subject to <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>.</li>
                    <li><strong>Apple iCloud</strong> — for data synchronisation across devices. Subject to Apple&apos;s iCloud terms.</li>
                    <li><strong>Privacy-respecting analytics</strong> — if we use analytics, we use cookie-free, GDPR-compliant tools that collect no personally identifiable information.</li>
                  </ul>
                  <p>We do not use Google Analytics, Facebook SDK, or any advertising networks.</p>
                </section>

                <section id="childrens-privacy">
                  <h2>Children&apos;s Privacy</h2>
                  <p>
                    LumenLingo is designed for users of all ages and does not knowingly collect personal information from children under 13 (or the applicable age in your jurisdiction). Since the app does not require account registration and stores data locally, no personal information is transmitted to us from any user, including children.
                  </p>
                  <p>
                    Parents and guardians can manage or delete the app and its data at any time through standard iOS device management.
                  </p>
                </section>

                <section id="data-retention">
                  <h2>Data Retention &amp; Deletion</h2>
                  <p>
                    Since your data lives on your device and in your iCloud account, you have complete control over it:
                  </p>
                  <ul>
                    <li><strong>Reset progress</strong> — use the in-app Settings &rarr; Reset Progress option to clear all learning data.</li>
                    <li><strong>Delete the app</strong> — uninstalling LumenLingo removes all locally stored data.</li>
                    <li><strong>iCloud data</strong> — you can manage iCloud storage through your device&apos;s Settings &rarr; Apple ID &rarr; iCloud &rarr; Manage Storage.</li>
                    <li><strong>Subscription</strong> — cancel your subscription through Settings &rarr; Apple ID &rarr; Subscriptions. No data is retained by us after cancellation.</li>
                  </ul>
                </section>

                <section id="your-rights">
                  <h2>Your Rights</h2>
                  <p>
                    Depending on your location, you may have additional rights regarding your data:
                  </p>
                  <h3>Under GDPR (European Economic Area &amp; UK)</h3>
                  <ul>
                    <li>Right to access your data — your data is already on your device and iCloud.</li>
                    <li>Right to rectification — you can edit your preferences directly in the app.</li>
                    <li>Right to erasure — reset progress or delete the app to remove all data.</li>
                    <li>Right to data portability — your data is stored in standard formats in iCloud.</li>
                    <li>Right to object — contact us to opt out of anonymous analytics.</li>
                  </ul>
                  <h3>Under CCPA (California)</h3>
                  <ul>
                    <li>Right to know what data is collected — detailed above; we collect minimal data.</li>
                    <li>Right to delete — reset progress or delete the app.</li>
                    <li>Right to opt out — we do not sell personal information to anyone.</li>
                    <li>Non-discrimination — you will not be treated differently for exercising your rights.</li>
                  </ul>
                </section>

                <section id="policy-updates">
                  <h2>Policy Updates</h2>
                  <p>
                    We may update this Privacy Policy from time to time, typically to reflect changes in the app&apos;s features or legal requirements. When we make significant changes, we&apos;ll update the &ldquo;Last updated&rdquo; date at the top of this page.
                  </p>
                  <p>
                    We encourage you to review this page periodically. Continued use of LumenLingo after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section id="contact-us">
                  <h2>Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, your data, or want to exercise your rights, please reach out:
                  </p>
                  <ul>
                    <li><strong>Email</strong>: <a href="mailto:hello@lumenshore.com">hello@lumenshore.com</a></li>
                    <li><strong>Company</strong>: LumenShore Ltd, United Kingdom</li>
                  </ul>
                  <p>We typically respond within 48 hours.</p>
                </section>
              </div>
            </FadeIn>

            {/* Sidebar TOC */}
            <LegalTOC items={tocItems} />
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
