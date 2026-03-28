'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui';
import { ConfettiBurst } from '@/components/early-access';
import { CosmicGradient } from '@/components/background';
import { spring, stagger } from '@/lib/motion';
import { AppStoreBadge } from '@/components/home/app-store-badge';
import { trackEvent } from '@/lib/analytics';

/* ─── Constants ────────────────────────────────────────────────── */

const SHARE_URL = 'https://lumenlingo.com/share';

/* Choreography timing (ms offsets from page load) */
const T = {
  aura:      0,
  badge:     0.15,
  headline:  0.3,
  wordGap:   0.06,
  sub:       0.55,
  features:  0.7,
  featureI:  0.08,
  cta:       1.0,
  share:     1.2,
  trust:     1.5,
} as const;

const FEATURES = [
  {
    gradient: 'from-violet/20 to-violet/5',
    glow: 'rgba(139,92,246,0.35)',
    iconGlow: 'shadow-[0_0_24px_rgba(139,92,246,0.4)]',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3" />
      </svg>
    ),
    label: '9 Languages',
    sub: '25+ learning pairs',
  },
  {
    gradient: 'from-cyan/20 to-cyan/5',
    glow: 'rgba(6,182,212,0.35)',
    iconGlow: 'shadow-[0_0_24px_rgba(6,182,212,0.4)]',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    label: '12 Soundscapes',
    sub: 'Ambient immersion',
  },
  {
    gradient: 'from-amber/20 to-amber/5',
    glow: 'rgba(245,158,11,0.35)',
    iconGlow: 'shadow-[0_0_24px_rgba(245,158,11,0.4)]',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    label: 'Science-Backed',
    sub: 'Cognitive research',
  },
  {
    gradient: 'from-violet/15 via-cyan/10 to-violet/5',
    glow: 'rgba(139,92,246,0.25)',
    iconGlow: 'shadow-[0_0_24px_rgba(139,92,246,0.3)]',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    color: 'hover:border-foreground/30 hover:bg-foreground/[0.06] hover:text-foreground',
    href: (text: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
    icon: (
      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    color: 'hover:border-emerald-500/30 hover:bg-emerald-500/[0.06] hover:text-emerald-400',
    href: (text: string) =>
      `https://wa.me/?text=${encodeURIComponent(text)}`,
    icon: (
      <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    color: 'hover:border-cyan/30 hover:bg-cyan/[0.06] hover:text-cyan',
    href: (text: string) =>
      `mailto:?subject=${encodeURIComponent('Discover LumenLingo')}&body=${encodeURIComponent(text)}`,
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

/* ─── Headline word-stagger helper ─────────────────────────────── */
const WORDS_BEFORE = ['Language', 'Learning,'];
const WORDS_GRADIENT = ['Reimagined'];

/* ─── Component ────────────────────────────────────────────────── */

export function EarlyAccessHero() {
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const confettiTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  /* Cursor-reactive glow */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const glowX = useTransform(springX, [0, 1], ['20%', '80%']);
  const glowY = useTransform(springY, [0, 1], ['20%', '80%']);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      if (confettiTimeoutRef.current) clearTimeout(confettiTimeoutRef.current);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [mouseX, mouseY]);

  const shareText = `I just discovered LumenLingo — a beautiful language learning app with multi-sensory immersion, ambient soundscapes, and science-backed methods. Check it out: ${SHARE_URL}`;

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setShowConfetti(true);
      trackEvent('share_link_copied', { source: 'share_page' });
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2500);
      confettiTimeoutRef.current = setTimeout(() => setShowConfetti(false), 3500);
    } catch {
      /* fallback handled by browser */
    }
  }, []);

  return (
    <>
      <AnimatePresence>{showConfetti && <ConfettiBurst />}</AnimatePresence>

      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen min-h-[100dvh] overflow-hidden"
      >
        {/* ── L1: Cosmic nebula base ── */}
        <CosmicGradient />

        {/* ── L2: Cursor-reactive aurora glow ── */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]: string[]) =>
                `radial-gradient(ellipse 60% 50% at ${x} ${y}, rgba(139,92,246,0.08) 0%, transparent 70%)`,
            ),
          }}
        />

        {/* ── L3: Accent orbs (static, atmospheric) ── */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/3 h-[500px] w-[500px] rounded-full bg-violet/[0.07] blur-[140px] animate-cosmic-drift-1" />
          <div className="absolute -bottom-40 right-1/4 h-[450px] w-[450px] rounded-full bg-cyan/[0.05] blur-[120px] animate-cosmic-drift-2" />
          <div className="absolute top-1/2 -left-20 h-[350px] w-[350px] rounded-full bg-amber/[0.04] blur-[100px] animate-cosmic-drift-3" />
        </div>

        {/* ── L4: Fractal noise texture ── */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />

        <Container>
          <div className="flex flex-col items-center pt-28 pb-16 sm:pt-32">

            {/* ─────────── Upper section: brand & headline ─────────── */}
            <div className="w-full max-w-3xl text-center">

              {/* Badge — pulsing aurora dot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ ...spring.smooth, delay: T.badge }}
                className="mb-8 inline-flex items-center gap-2.5 rounded-[--radius-pill] border border-violet/25 bg-violet/[0.08] px-5 py-2 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-violet uppercase">
                  Share the Experience
                </span>
              </motion.div>

              {/* Headline — word-by-word stagger with glow */}
              <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {WORDS_BEFORE.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ ...spring.gentle, delay: T.headline + i * T.wordGap }}
                    className="mr-[0.3em] inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
                <br className="sm:hidden" />
                {WORDS_GRADIENT.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      ...spring.gentle,
                      delay: T.headline + (WORDS_BEFORE.length + i) * T.wordGap,
                    }}
                    className="inline-block text-shadow-glow bg-gradient-to-r from-violet via-cyan to-violet bg-[length:200%_auto] bg-clip-text text-transparent ea-gradient-shift"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Sub-headline — elegant, breathing */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.gentle, delay: T.sub }}
                className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-foreground-muted sm:text-xl"
              >
                Multi-sensory immersion crafted with care. Beautiful design,
                ambient soundscapes, and methods grounded in cognitive science.
              </motion.p>
            </div>

            {/* ─────────── Share section — soft breathing glass ─────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring.gentle, delay: T.share }}
              className="relative mx-auto mt-4 w-full max-w-lg"
            >
              {/* Soft ambient glow underneath */}
              <div
                className="pointer-events-none absolute -inset-6 rounded-[32px] opacity-40 blur-[40px]"
                aria-hidden="true"
                style={{
                  background: 'radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.15), rgba(6,182,212,0.08) 60%, transparent 80%)',
                }}
              />

              {/* Card body */}
              <div className="relative overflow-hidden rounded-[20px] border border-glass-border/40 bg-white/[0.03] backdrop-blur-xl">
                <div className="relative px-6 py-8 sm:px-8 sm:py-10">
                  {/* Heading with sparkle */}
                  <div className="text-center">
                    <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                      Know someone who&apos;d love this?
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted/70">
                      Share with a fellow language lover &mdash; they&apos;ll thank you.
                    </p>
                  </div>

                  {/* Copy link bar */}
                  <div className="mt-7 flex items-center gap-2 rounded-2xl border border-glass-border/50 bg-white/[0.03] p-1.5 backdrop-blur-sm">
                    <span className="flex-1 truncate px-3 text-sm text-foreground-muted/60 select-all">
                      {SHARE_URL}
                    </span>
                    <motion.button
                      type="button"
                      onClick={copyLink}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={spring.snappy}
                      className="relative shrink-0 overflow-hidden rounded-xl bg-violet px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-hover hover:shadow-[0_0_28px_rgba(139,92,246,0.35)]"
                    >
                      {/* Button aurora shimmer */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
                        style={{
                          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                        }}
                      />
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={copied ? 'copied' : 'copy'}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="relative"
                        >
                          {copied ? (
                            <span className="flex items-center gap-1.5">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              Copied!
                            </span>
                          ) : (
                            'Copy Link'
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </motion.button>
                  </div>

                  {/* Social share row */}
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="text-xs tracking-wide text-foreground-muted/40 uppercase">
                      or share via
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-glass-border/40 to-transparent" />
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-3">
                    {SHARE_LINKS.map((link, i) => (
                      <motion.a
                        key={link.label}
                        href={link.href(shareText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('share_social_click', { platform: link.label, source: 'share_page' })}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...spring.smooth, delay: T.share + 0.15 + i * 0.06 }}
                        whileHover={{ y: -3, scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex h-11 w-11 items-center justify-center rounded-full border border-glass-border/40 text-foreground-muted/60 backdrop-blur-sm transition-all duration-300 ${link.color}`}
                        aria-label={`Share on ${link.label}`}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ─────────── Feature cards — glass morphism with glow ─────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.features, duration: 0.3 }}
              className="mx-auto mt-14 grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
            >
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ ...spring.smooth, delay: T.features + i * T.featureI }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  onHoverStart={() => setHoveredFeature(i)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-glass-border/40 bg-white/[0.025] p-5 backdrop-blur-sm transition-colors duration-500 hover:border-glass-border hover:bg-white/[0.05]"
                >
                  {/* Ambient glow behind card on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(ellipse at 50% 30%, ${f.glow} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon container with glow ring */}
                  <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-foreground/80 transition-all duration-500 group-hover:text-foreground group-hover:${f.iconGlow}`}>
                    {f.icon}
                  </div>

                  <div className="relative text-center">
                    <span className="block text-sm font-semibold text-foreground/90">{f.label}</span>
                    <span className="mt-0.5 block text-[11px] tracking-wide text-foreground-muted/50 transition-colors duration-500 group-hover:text-foreground-muted/70">
                      {f.sub}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ─────────── CTA: App Store badge ─────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...spring.smooth, delay: T.cta }}
              className="mt-14 flex justify-center"
            >
              <AppStoreBadge location="share_page" size="lg" />
            </motion.div>

            {/* ─────────── Trust signals — floating glass pills ─────────── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.trust, duration: 0.6 }}
              className="mt-14 flex flex-wrap items-center justify-center gap-3"
            >
              {[
                {
                  label: 'Handcrafted UI',
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                    </svg>
                  ),
                },
                {
                  label: 'Privacy First',
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  ),
                },
                {
                  label: 'Free to Start',
                  icon: (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <motion.span
                  key={item.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring.gentle, delay: T.trust + i * 0.08 }}
                  className="inline-flex items-center gap-2 rounded-[--radius-pill] border border-glass-border/30 bg-white/[0.02] px-4 py-2 text-xs text-foreground-muted/50 backdrop-blur-sm transition-all duration-500 hover:border-glass-border/60 hover:bg-white/[0.04] hover:text-foreground-muted/70"
                >
                  {item.icon}
                  {item.label}
                </motion.span>
              ))}
            </motion.div>

          </div>
        </Container>
      </section>
    </>
  );
}
