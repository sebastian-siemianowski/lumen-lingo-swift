import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/layout';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/home';
import licensesData from '@/data/open-source-licenses.json';

export const metadata: Metadata = {
  title: 'Open-Source Licenses',
  description:
    'Open-source software acknowledgments and licenses used in the LumenLingo website.',
  alternates: {
    canonical: 'https://lumenlingo.com/open-source',
  },
  openGraph: {
    title: 'Open-Source Licenses — LumenLingo',
    description:
      'Acknowledgments for the open-source packages that help power LumenLingo.',
    url: 'https://lumenlingo.com/open-source',
    siteName: 'LumenLingo',
    type: 'website',
  },
};

type LicenseGroup = { license: string; packages: { name: string; version: string }[] };

function groupByLicense(packages: typeof licensesData.packages): LicenseGroup[] {
  const map = new Map<string, { name: string; version: string }[]>();
  for (const pkg of packages) {
    const group = map.get(pkg.license) ?? [];
    group.push({ name: pkg.name, version: pkg.version });
    map.set(pkg.license, group);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([license, pkgs]) => ({ license, packages: pkgs }));
}

export default async function OpenSourcePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const groups = groupByLicense(licensesData.packages);
  const total = licensesData.packages.length;

  return (
    <PageTransition>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: 'Home', href: '/' },
          { name: 'Open-Source Licenses', href: '/open-source' },
        ]}
      />

      {/* Hero */}
      <Section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <Container className="max-w-4xl">
          <FadeIn className="text-center">
            <Heading as="h1" gradient className="mb-4">
              Open-Source Licenses
            </Heading>
            <Text colour="secondary" className="mx-auto max-w-lg">
              LumenLingo is built with the help of {total} open-source packages.
              We are grateful to the maintainers and contributors of these
              projects.
            </Text>
            <div className="mt-6 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/[0.03] px-4 py-2 text-xs text-white/50">
                Last generated: {licensesData.generatedAt}
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
                <h2>License Summary</h2>
                <table>
                  <thead>
                    <tr>
                      <th>License</th>
                      <th>Packages</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groups.map((g) => (
                      <tr key={g.license}>
                        <td>{g.license}</td>
                        <td>{g.packages.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              {groups.map((g) => (
                <section key={g.license} id={g.license.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                  <h2>
                    {g.license}{' '}
                    <span className="text-sm font-normal text-white/40">
                      ({g.packages.length})
                    </span>
                  </h2>
                  <ul>
                    {g.packages.map((pkg) => (
                      <li key={pkg.name}>
                        <code>{pkg.name}</code>{' '}
                        <span className="text-white/40">v{pkg.version}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <section id="ios-app">
                <h2>iOS App</h2>
                <p>
                  The LumenLingo iOS app is built entirely with Apple&apos;s
                  native frameworks (SwiftUI, SwiftData, Metal, AVFoundation) and
                  currently has <strong>zero external dependencies</strong>. If
                  third-party libraries are added in the future, they will be
                  acknowledged here.
                </p>
              </section>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageTransition>
  );
}
