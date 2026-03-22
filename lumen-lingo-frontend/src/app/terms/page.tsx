import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { LegalTOC, DownloadPDFButton } from '@/components/legal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for LumenLingo. Understand your rights and responsibilities when using our language-learning app — written in plain English.',
  alternates: {
    canonical: 'https://lumenlingo.com/terms',
  },
  openGraph: {
    title: 'Terms of Service — LumenLingo',
    description:
      'Terms of Service for LumenLingo. Understand your rights and responsibilities when using our app.',
    url: 'https://lumenlingo.com/terms',
    siteName: 'LumenLingo',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service — LumenLingo',
    description:
      'Terms of Service for LumenLingo. Understand your rights and responsibilities when using our app.',
  },
};

const tocItems = [
  { id: 'introduction', text: 'Introduction', level: 2 },
  { id: 'acceptance', text: 'Acceptance of Terms', level: 2 },
  { id: 'your-account', text: 'Your Account', level: 2 },
  { id: 'subscriptions', text: 'Subscriptions & Billing', level: 2 },
  { id: 'acceptable-use', text: 'Acceptable Use', level: 2 },
  { id: 'intellectual-property', text: 'Intellectual Property', level: 2 },
  { id: 'user-content', text: 'User Content & Data', level: 2 },
  { id: 'disclaimers', text: 'Disclaimers', level: 2 },
  { id: 'limitation-of-liability', text: 'Limitation of Liability', level: 2 },
  { id: 'termination', text: 'Termination', level: 2 },
  { id: 'governing-law', text: 'Governing Law', level: 2 },
  { id: 'changes', text: 'Changes to These Terms', level: 2 },
  { id: 'contact', text: 'Contact Us', level: 2 },
];

export default function TermsPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              Terms of Service
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg">
              The rules of the road for using LumenLingo — written simply, because legal documents shouldn&apos;t need a dictionary.
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
                <section id="introduction">
                  <h2>Introduction</h2>
                  <p>
                    Welcome to LumenLingo. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the LumenLingo mobile application (&ldquo;the App&rdquo;) operated by LumenShore Ltd (&ldquo;LumenShore&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
                  </p>
                  <p>
                    By downloading, installing, or using LumenLingo, you agree to be bound by these Terms. If you don&apos;t agree with any part of these Terms, please don&apos;t use the App.
                  </p>
                </section>

                <section id="acceptance">
                  <h2>Acceptance of Terms</h2>
                  <p>
                    By accessing or using LumenLingo, you confirm that:
                  </p>
                  <ul>
                    <li>You are at least 13 years old (or the minimum age required in your jurisdiction).</li>
                    <li>If you are under 18, you have obtained consent from a parent or legal guardian.</li>
                    <li>You have the legal capacity to enter into a binding agreement.</li>
                    <li>You will comply with these Terms and all applicable laws.</li>
                  </ul>
                </section>

                <section id="your-account">
                  <h2>Your Account</h2>
                  <p>
                    LumenLingo does not require traditional account registration. Your identity within the App is tied to your Apple ID and device. You are responsible for:
                  </p>
                  <ul>
                    <li>Maintaining the security of your Apple ID and device access.</li>
                    <li>All activity that occurs through your use of the App.</li>
                    <li>Keeping your device&apos;s operating system updated for the best experience and security.</li>
                  </ul>
                </section>

                <section id="subscriptions">
                  <h2>Subscriptions &amp; Billing</h2>
                  <p>
                    LumenLingo offers free and premium membership tiers. Premium features require a paid subscription.
                  </p>
                  <ul>
                    <li><strong>Billing</strong> — all subscriptions are processed and managed by Apple through the App Store. We do not handle payments directly.</li>
                    <li><strong>Free tier</strong> — provides access to core learning features with limited language pairs and practice modes.</li>
                    <li><strong>Premium tiers</strong> — unlock additional language pairs, unlimited practice, soundscapes, breathing orbs, and other premium features as described in the App.</li>
                    <li><strong>Auto-renewal</strong> — subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period.</li>
                    <li><strong>Cancellation</strong> — you can cancel your subscription at any time through your Apple ID Settings &rarr; Subscriptions. Cancellation takes effect at the end of your current billing period.</li>
                    <li><strong>Refunds</strong> — refund requests are handled by Apple in accordance with their refund policies. Contact Apple Support for refund enquiries.</li>
                    <li><strong>Price changes</strong> — we may adjust subscription prices. You will be notified in advance, and changes apply only to your next renewal period.</li>
                  </ul>
                </section>

                <section id="acceptable-use">
                  <h2>Acceptable Use</h2>
                  <p>You agree to use LumenLingo only for lawful purposes and in accordance with these Terms. You must not:</p>
                  <ul>
                    <li>Reverse engineer, decompile, or disassemble any part of the App.</li>
                    <li>Attempt to access, tamper with, or use non-public areas of the App or its systems.</li>
                    <li>Copy, modify, distribute, or create derivative works based on the App.</li>
                    <li>Use the App in any way that could damage, disable, overburden, or impair its functionality.</li>
                    <li>Use automated scripts, bots, or other tools to interact with the App.</li>
                    <li>Attempt to circumvent subscription or tier restrictions.</li>
                  </ul>
                </section>

                <section id="intellectual-property">
                  <h2>Intellectual Property</h2>
                  <p>
                    All content within LumenLingo — including but not limited to flashcard content, translations, audio, soundscapes, visual designs, shader effects, animations, the LumenLingo name, and the LumenShore brand — is the intellectual property of LumenShore Ltd and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    Your subscription grants you a limited, non-exclusive, non-transferable, revocable licence to use the App for personal, non-commercial language-learning purposes. This licence does not include the right to:
                  </p>
                  <ul>
                    <li>Reproduce, distribute, or publicly display any App content.</li>
                    <li>Use any content for commercial purposes or in competing products.</li>
                    <li>Remove or alter any proprietary notices or labels.</li>
                  </ul>
                </section>

                <section id="user-content">
                  <h2>User Content &amp; Data</h2>
                  <p>
                    Your learning data (progress, preferences, practice history) is stored on your device and in your personal iCloud account. LumenShore does not claim ownership of your personal learning data.
                  </p>
                  <p>
                    For more details on how we handle data, please review our <a href="/privacy">Privacy Policy</a>.
                  </p>
                </section>

                <section id="disclaimers">
                  <h2>Disclaimers</h2>
                  <p>
                    LumenLingo is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While we strive for accuracy and quality, we make no warranties, expressed or implied, regarding:
                  </p>
                  <ul>
                    <li>The accuracy or completeness of any language content or translations.</li>
                    <li>Uninterrupted or error-free operation of the App.</li>
                    <li>The results you may achieve from using the App.</li>
                    <li>The availability of specific features at any given time.</li>
                  </ul>
                  <p>
                    LumenLingo is a supplementary learning tool. It is not a substitute for professional language instruction, certified translation services, or academic coursework.
                  </p>
                </section>

                <section id="limitation-of-liability">
                  <h2>Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by applicable law, LumenShore Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill arising from:
                  </p>
                  <ul>
                    <li>Your use of (or inability to use) the App.</li>
                    <li>Any errors, omissions, or inaccuracies in the content.</li>
                    <li>Unauthorised access to your device or data (not caused by our negligence).</li>
                    <li>Any interruption or cessation of the service.</li>
                  </ul>
                  <p>
                    Our total liability for any claim arising from these Terms or your use of LumenLingo shall not exceed the amount you paid for the App in the 12 months preceding the claim.
                  </p>
                </section>

                <section id="termination">
                  <h2>Termination</h2>
                  <p>
                    You may stop using LumenLingo at any time by deleting the App. Your subscription, if active, should be cancelled separately through Apple&apos;s subscription management.
                  </p>
                  <p>
                    We reserve the right to suspend or terminate access to the App if we reasonably believe you have violated these Terms. In the event of termination:
                  </p>
                  <ul>
                    <li>Your licence to use the App is immediately revoked.</li>
                    <li>Your local data remains on your device until you choose to delete it.</li>
                    <li>Active subscriptions should be cancelled through Apple.</li>
                    <li>Provisions that by their nature should survive termination will remain in effect.</li>
                  </ul>
                </section>

                <section id="governing-law">
                  <h2>Governing Law</h2>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles.
                  </p>
                  <p>
                    Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales. However, this does not affect your statutory rights as a consumer in your country of residence.
                  </p>
                </section>

                <section id="changes">
                  <h2>Changes to These Terms</h2>
                  <p>
                    We may update these Terms from time to time. When we make significant changes, we&apos;ll update the &ldquo;Last updated&rdquo; date at the top and may notify you through the App.
                  </p>
                  <p>
                    Continued use of LumenLingo after changes are posted constitutes acceptance of the revised Terms. If you disagree with the changes, please stop using the App and cancel any active subscription.
                  </p>
                </section>

                <section id="contact">
                  <h2>Contact Us</h2>
                  <p>
                    If you have questions about these Terms or need to report a concern, please contact us:
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
