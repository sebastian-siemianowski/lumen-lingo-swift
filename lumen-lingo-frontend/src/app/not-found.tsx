'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { StarField } from '@/components/background';
import { trackEvent } from '@/lib/analytics';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { spring } from '@/lib/motion';
import { getFeatureFlag } from '@/lib/feature-flags';

/* ------------------------------------------------------------------
 * Inline i18n — not-found renders outside the IntlProvider
 * (root-level catch-all), so we detect locale from the URL path
 * and use a minimal built-in translations map.
 * ------------------------------------------------------------------ */

const SUPPORTED_LOCALES = ['en', 'es', 'fr', 'ja', 'de', 'pl', 'ar', 'zh', 'uk'] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const messages: Record<SupportedLocale, {
  number: string; heading: string; description: string;
  searchPlaceholder: string; goHome: string; browseFeatures: string;
  readBlog: string; contactUs: string;
}> = {
  en: { number: '404', heading: 'Lost in the Cosmos', description: "The page you\u2019re looking for has drifted away. Let us help you find your way.", searchPlaceholder: 'Search pages\u2026', goHome: 'Go Home', browseFeatures: 'Browse Features', readBlog: 'Read the Blog', contactUs: 'Contact Us' },
  es: { number: '404', heading: 'Perdido en el Cosmos', description: 'La p\u00e1gina que buscas se ha desvanecido. D\u00e9janos ayudarte a encontrar tu camino.', searchPlaceholder: 'Buscar p\u00e1ginas\u2026', goHome: 'Ir al Inicio', browseFeatures: 'Explorar Funciones', readBlog: 'Leer el Blog', contactUs: 'Cont\u00e1ctanos' },
  fr: { number: '404', heading: 'Perdu dans le Cosmos', description: "La page que vous cherchez s\u2019est envol\u00e9e. Laissez-nous vous aider \u00e0 retrouver votre chemin.", searchPlaceholder: 'Rechercher des pages\u2026', goHome: "Retour \u00e0 l\u2019Accueil", browseFeatures: 'Voir les Fonctionnalit\u00e9s', readBlog: 'Lire le Blog', contactUs: 'Nous Contacter' },
  ja: { number: '404', heading: '\u5b87\u5b99\u3067\u8ff7\u5b50\u306b', description: '\u304a\u63a2\u3057\u306e\u30da\u30fc\u30b8\u306f\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u6b63\u3057\u3044\u9053\u3078\u3054\u6848\u5185\u3044\u305f\u3057\u307e\u3059\u3002', searchPlaceholder: '\u30da\u30fc\u30b8\u3092\u691c\u7d22\u2026', goHome: '\u30db\u30fc\u30e0\u306b\u623b\u308b', browseFeatures: '\u6a5f\u80fd\u3092\u898b\u308b', readBlog: '\u30d6\u30ed\u30b0\u3092\u8aad\u3080', contactUs: '\u304a\u554f\u3044\u5408\u308f\u305b' },
  de: { number: '404', heading: 'Im Kosmos Verloren', description: 'Die Seite, die Sie suchen, ist verschwunden. Lassen Sie uns Ihnen den Weg weisen.', searchPlaceholder: 'Seiten durchsuchen\u2026', goHome: 'Zur Startseite', browseFeatures: 'Funktionen Entdecken', readBlog: 'Blog Lesen', contactUs: 'Kontakt' },
  pl: { number: '404', heading: 'Zagubiony w Kosmosie', description: 'Strona, kt\u00f3rej szukasz, odp\u0142yn\u0119\u0142a w przestrze\u0144. Pomo\u017cemy Ci odnale\u017a\u0107 drog\u0119.', searchPlaceholder: 'Szukaj stron\u2026', goHome: 'Strona g\u0142\u00f3wna', browseFeatures: 'Przegl\u0105daj funkcje', readBlog: 'Czytaj blog', contactUs: 'Kontakt' },
  ar: { number: '\u0664\u0660\u0664', heading: '\u062a\u0627\u0626\u0647 \u0641\u064a \u0627\u0644\u0641\u0636\u0627\u0621', description: '\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u062a\u064a \u062a\u0628\u062d\u062b \u0639\u0646\u0647\u0627 \u0627\u0646\u062c\u0631\u0641\u062a \u0628\u0639\u064a\u062f\u0627\u064b. \u062f\u0639\u0646\u0627 \u0646\u0633\u0627\u0639\u062f\u0643 \u0641\u064a \u0625\u064a\u062c\u0627\u062f \u0637\u0631\u064a\u0642\u0643.', searchPlaceholder: '\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0635\u0641\u062d\u0627\u062a\u2026', goHome: '\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', browseFeatures: '\u062a\u0635\u0641\u062d \u0627\u0644\u0645\u0632\u0627\u064a\u0627', readBlog: '\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u062f\u0648\u0646\u0629', contactUs: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627' },
  zh: { number: '404', heading: '\u8ff7\u5931\u5728\u5b87\u5b99\u4e2d', description: '\u4f60\u8981\u627e\u7684\u9875\u9762\u5df2\u98d8\u5411\u8fdc\u65b9\u3002\u8ba9\u6211\u4eec\u5e2e\u4f60\u627e\u5230\u65b9\u5411\u3002', searchPlaceholder: '\u641c\u7d22\u9875\u9762\u2026', goHome: '\u8fd4\u56de\u9996\u9875', browseFeatures: '\u6d4f\u89c8\u529f\u80fd', readBlog: '\u9605\u8bfb\u535a\u5ba2', contactUs: '\u8054\u7cfb\u6211\u4eec' },
  uk: { number: '404', heading: '\u0417\u0430\u0433\u0443\u0431\u043b\u0435\u043d\u0456 \u0432 \u041a\u043e\u0441\u043c\u043e\u0441\u0456', description: '\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0430, \u044f\u043a\u0443 \u0432\u0438 \u0448\u0443\u043a\u0430\u0454\u0442\u0435, \u0432\u0456\u0434\u043b\u0435\u0442\u0456\u043b\u0430 \u0433\u0435\u0442\u044c. \u0414\u043e\u043f\u043e\u043c\u043e\u0436\u0435\u043c\u043e \u0432\u0430\u043c \u0437\u043d\u0430\u0439\u0442\u0438 \u0448\u043b\u044f\u0445.', searchPlaceholder: '\u041f\u043e\u0448\u0443\u043a \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a\u2026', goHome: '\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443', browseFeatures: '\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456', readBlog: '\u0427\u0438\u0442\u0430\u0442\u0438 \u0431\u043b\u043e\u0433', contactUs: "\u0417\u0432\u2019\u044f\u0437\u0430\u0442\u0438\u0441\u044f \u0437 \u043d\u0430\u043c\u0438" },
};

function detectLocale(): SupportedLocale {
  if (typeof window === 'undefined') return 'en';
  const seg = window.location.pathname.split('/')[1] ?? '';
  return (SUPPORTED_LOCALES as readonly string[]).includes(seg)
    ? (seg as SupportedLocale)
    : 'en';
}

/* ------------------------------------------------------------------ */
/*  Floating astronaut SVG — lightweight, on-brand, cosmic            */
/* ------------------------------------------------------------------ */

function FloatingAstronaut({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="relative mx-auto mb-8 h-48 w-48 sm:h-56 sm:w-56"
      animate={reduced ? {} : { y: [0, -14, 0], rotate: [0, 3, -2, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Glow halo behind astronaut */}
      <div className="absolute inset-0 rounded-full bg-violet/10 blur-3xl" />

      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 h-full w-full drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]"
        aria-hidden="true"
      >
        {/* Helmet */}
        <circle cx="100" cy="72" r="38" fill="#1e1e2e" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="100" cy="72" r="30" fill="#111118" />
        {/* Visor reflection */}
        <ellipse cx="92" cy="65" rx="12" ry="8" fill="#8b5cf6" opacity="0.15" />
        <ellipse cx="88" cy="62" rx="5" ry="3" fill="#06b6d4" opacity="0.25" />

        {/* Body */}
        <rect x="72" y="106" width="56" height="50" rx="12" fill="#1e1e2e" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.9" />
        {/* Chest light */}
        <circle cx="100" cy="124" r="4" fill="#8b5cf6" opacity="0.6" />
        <circle cx="100" cy="124" r="2" fill="#c4b5fd" />

        {/* Backpack */}
        <rect x="60" y="112" width="14" height="36" rx="5" fill="#1e1e2e" stroke="#6d28d9" strokeWidth="1" opacity="0.7" />

        {/* Arms */}
        <path d="M72 118 Q52 132 58 150" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M128 118 Q148 128 144 146" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
        {/* Gloves */}
        <circle cx="58" cy="150" r="5" fill="#1e1e2e" stroke="#8b5cf6" strokeWidth="1.5" />
        <circle cx="144" cy="146" r="5" fill="#1e1e2e" stroke="#8b5cf6" strokeWidth="1.5" />

        {/* Legs */}
        <path d="M84 156 Q80 174 78 186" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M116 156 Q120 174 122 186" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
        {/* Boots */}
        <ellipse cx="78" cy="188" rx="7" ry="4" fill="#1e1e2e" stroke="#8b5cf6" strokeWidth="1.5" />
        <ellipse cx="122" cy="188" rx="7" ry="4" fill="#1e1e2e" stroke="#8b5cf6" strokeWidth="1.5" />

        {/* Tether line */}
        <path d="M60 130 Q30 140 20 110 Q10 70 40 50" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" fill="none" />
      </svg>

      {/* Orbiting particles */}
      <motion.div
        className="absolute top-6 right-4 h-2 w-2 rounded-full bg-cyan/50"
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '70px 50px' }}
      />
      <motion.div
        className="absolute bottom-8 left-2 h-1.5 w-1.5 rounded-full bg-violet/40"
        animate={reduced ? {} : { rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '90px 30px' }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Quick-link button data — generated from locale                    */
/* ------------------------------------------------------------------ */

function getQuickLinks(t: (typeof messages)[SupportedLocale]) {
  return [
    { href: '/', label: t.goHome },
    { href: '/features', label: t.browseFeatures },
    { href: '/blog', label: t.readBlog },
    { href: '/about', label: t.contactUs },
  ] as const;
}

/* ------------------------------------------------------------------ */
/*  Search bar — simple site search via navigation                    */
/* ------------------------------------------------------------------ */

function SiteSearch({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState('');

  const pages = [
    { href: '/', label: 'Homepage', keywords: 'home main landing' },
    { href: '/features', label: 'Features', keywords: 'flashcards soundscapes practice' },
    { href: '/pricing', label: 'Pricing', keywords: 'pro elite royal free plan tier' },
    { href: '/blog', label: 'Blog', keywords: 'articles posts language learning' },
    { href: '/about', label: 'About LumenShore', keywords: 'company team mission' },
    { href: '/faq', label: 'FAQ', keywords: 'questions help support contact' },
    { href: '/privacy', label: 'Privacy Policy', keywords: 'data privacy gdpr' },
    { href: '/terms', label: 'Terms of Service', keywords: 'legal terms conditions' },
    ...(getFeatureFlag('EARLY_ACCESS_LIVE')
      ? [{ href: '/share', label: 'Share', keywords: 'share discover tell a friend' }]
      : []),
    { href: '/launching-soon', label: 'Launching Soon', keywords: 'coming soon launch app store' },
  ];

  const lower = query.toLowerCase();
  const filtered =
    lower.length >= 2
      ? pages.filter(
          (p) =>
            p.label.toLowerCase().includes(lower) ||
            p.keywords.includes(lower),
        )
      : [];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative">
        <svg
          className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full rounded-xl border border-glass-border bg-surface/60 py-3 ps-10 pe-4 text-sm text-foreground placeholder:text-foreground-muted backdrop-blur-sm transition-shadow focus:shadow-[0_0_24px_rgba(139,92,246,0.15)] focus-visible:outline-none focus:ring-1 focus:ring-violet/40"
        />
      </div>

      {filtered.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full z-20 mt-2 w-full overflow-hidden rounded-xl border border-glass-border bg-surface/90 backdrop-blur-md"
        >
          {filtered.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="block px-4 py-3 text-sm text-foreground-secondary transition-colors hover:bg-violet/10 hover:text-foreground"
            >
              {p.label}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  404 Page Component                                                */
/* ------------------------------------------------------------------ */

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring.smooth,
  },
};

export default function NotFound() {
  const prefersReduced = useReducedMotion();
  const locale = useMemo(detectLocale, []);
  const t = messages[locale];
  const quickLinks = useMemo(() => getQuickLinks(t), [t]);

  useEffect(() => {
    trackEvent('page_not_found', { path: window.location.pathname });
  }, []);

  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4">
      {/* Cosmic background */}
      <StarField />

      {/* Minimal logo header */}
      <div className="absolute top-0 inset-x-0 z-20 flex justify-center py-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-[--radius-sm] focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none"
          aria-label="LumenLingo home"
        >
          <div className="relative flex h-9 w-9 items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet to-cyan opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="relative text-lg font-bold text-white">L</span>
          </div>
          <span className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-violet">
            LumenLingo
          </span>
        </Link>
      </div>

      {/* Diffused gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(139,92,246,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.06)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-lg text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* 404 number — massive, glassy */}
        <motion.div variants={fadeUp} className="mb-2">
          <span className="text-gradient select-none text-[8rem] font-bold leading-none tracking-tighter sm:text-[10rem]">
            {t.number}
          </span>
        </motion.div>

        {/* Astronaut illustration */}
        <motion.div variants={fadeUp}>
          <FloatingAstronaut reduced={prefersReduced} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {t.heading}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="mb-8 text-base leading-relaxed text-foreground-secondary sm:text-lg"
        >
          {t.description}
        </motion.p>

        {/* Search */}
        <motion.div variants={fadeUp} className="mb-8">
          <SiteSearch placeholder={t.searchPlaceholder} />
        </motion.div>

        {/* Quick links */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.href === '/'
                  ? 'inline-flex items-center justify-center rounded-[--radius-button] bg-violet px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all duration-200 hover:bg-violet-hover hover:shadow-[0_0_48px_rgba(139,92,246,0.5)]'
                  : 'glass-card inline-flex items-center justify-center rounded-[--radius-button] border border-glass-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-glass-hover'
              }
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
