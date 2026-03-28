'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, GlassCard } from '@/components/ui';
import { ConfettiBurst } from '@/components/early-access';
import { spring } from '@/lib/motion';
import { AppStoreBadge } from '@/components/home/app-store-badge';
import { trackEvent } from '@/lib/analytics';

const SHARE_URL = 'https://lumenlingo.com/early-access';

const FEATURES = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3" />
      </svg>
    ),
    label: '9 Languages',
    sub: '25+ learning pairs',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    label: '12 Soundscapes',
    sub: 'Ambient immersion',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    label: 'Science-Backed',
    sub: 'Cognitive research',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    label: 'iOS Native',
    sub: 'Built with SwiftUI',
  },
];

const SHARE_LINKS = [
  {
    label: 'X (Twitter)',
    href: (text: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: (text: string) =>
      `https://wa.me/?text=${encodeURIComponent(text)}`,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: (text: string) =>
      `mailto:?subject=${encodeURIComponent('Discover LumenLingo')}&body=${encodeURIComponent(text)}`,
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export function EarlyAccessHero() {
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const shareText = `I just discovered LumenLingo -- a beautiful language learning app with multi-sensory immersion, ambient soundscapes, and science-backed methods. Check it out: ${SHARE_URL}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setShowConfetti(true);
      trackEvent('share_link_copied', { source: 'early_access' });
      setTimeout(() => setCopied(false), 2500);
      setTimeout(() => setShowConfetti(false), 3500);
    } catch {
      /* fallback handled by browser */
    }
  }

  return (
    <>
      {showConfetti && <ConfettiBurst />}

      <section className="relative min-h-screen min-h-[100dvh] overflow-hidden">
        {/* Cosmic background gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-violet/8 blur-[120px]" />
          <div className="absolute -bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan/6 blur-[100px]" />
          <div className="absolute top-1/3 right-1/3 h-[300px] w-[300px] rounded-full bg-amber/5 blur-[80px]" />
        </div>

        <Container>
          <div className="flex min-h-screen min-h-[100dvh] flex-col items-center justify-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={spring.smooth}
              className="w-full max-w-2xl text-center"
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...spring.smooth, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-[--radius-pill] border border-violet/20 bg-violet/10 px-4 py-1.5 text-xs font-semibold text-violet"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
                </span>
                Early Access
              </motion.span>

              {/* Headline */}
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Language Learning,{' '}
                <span className="bg-gradient-to-r from-violet via-cyan to-violet bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-foreground-muted sm:text-lg">
                Multi-sensory immersion crafted with care. Beautiful design,
                ambient soundscapes, and methods grounded in cognitive science.
              </p>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.smooth, delay: 0.15 }}
                className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...spring.smooth, delay: 0.2 + i * 0.06 }}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-glass-border/40 bg-white/[0.02] px-3 py-4 transition-all duration-500 hover:border-glass-border/80 hover:bg-white/[0.04]"
                  >
                    <span className="text-foreground-muted/60 transition-colors duration-500 group-hover:text-violet">
                      {f.icon}
                    </span>
                    <span className="text-xs font-semibold text-foreground/90">{f.label}</span>
                    <span className="text-[11px] text-foreground-muted/50">{f.sub}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Share card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.smooth, delay: 0.3 }}
                className="mt-12"
              >
                <GlassCard className="gradient-border rounded-2xl p-6 sm:p-8">
                  <div className="space-y-6">
                    {/* Share heading */}
                    <div>
                      <h2 className="text-lg font-semibold text-foreground sm:text-xl">
                        Know someone who&apos;d love this?
                      </h2>
                      <p className="mt-1.5 text-sm text-foreground-muted/70">
                        Share LumenLingo with a fellow language lover.
                      </p>
                    </div>

                    {/* Copy link */}
                    <div className="flex items-center gap-2 rounded-[--radius-button] border border-glass-border bg-white/5 p-1.5">
                      <span className="flex-1 truncate px-3 text-sm text-foreground-muted">{SHARE_URL}</span>
                      <motion.button
                        type="button"
                        onClick={copyLink}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={spring.snappy}
                        className="shrink-0 rounded-[--radius-button] bg-violet px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-hover hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                      >
                        {copied ? 'Copied!' : 'Copy Link'}
                      </motion.button>
                    </div>

                    {/* Social share */}
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-xs text-foreground-muted/60">Share via:</span>
                      {SHARE_LINKS.map((link) => (
                        <a
                          key={link.label}
                          href={link.href(shareText)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackEvent('share_social_click', { platform: link.label, source: 'early_access' })}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border/50 text-foreground-muted transition-all duration-300 hover:border-violet/40 hover:bg-violet/10 hover:text-violet hover:shadow-[0_0_16px_rgba(139,92,246,0.15)]"
                          aria-label={`Share on ${link.label}`}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* App Store badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.smooth, delay: 0.4 }}
                className="mt-10 flex justify-center"
              >
                <AppStoreBadge location="early_access" size="lg" />
              </motion.div>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-foreground-muted/60"
              >
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                  Handcrafted UI
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  Privacy First
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  Free to Start
                </span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
