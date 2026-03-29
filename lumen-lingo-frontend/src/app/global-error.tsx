'use client';

import { useEffect, useMemo } from 'react';
import * as Sentry from '@sentry/nextjs';

/* ------------------------------------------------------------------
 * Inline i18n — global-error renders outside the IntlProvider
 * (the root layout itself has crashed), so we detect locale from
 * the URL path and use a minimal built-in translations map.
 * ------------------------------------------------------------------ */

const SUPPORTED_LOCALES = ['en', 'es', 'fr', 'ja', 'de', 'pl', 'ar', 'zh', 'uk'] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const messages: Record<SupportedLocale, { heading: string; description: string; tryAgain: string; goHome: string }> = {
  en: { heading: 'Something Unexpected Happened', description: "Don\u2019t worry \u2014 the cosmos is vast, and minor disruptions happen. Let\u2019s get you back on track.", tryAgain: 'Try Again', goHome: 'Go Home' },
  es: { heading: 'Algo Inesperado Ocurri\u00f3', description: 'No te preocupes \u2014 el cosmos es vasto y las peque\u00f1as disrupciones suceden. Vamos a ponerte de vuelta en el camino.', tryAgain: 'Intentar de Nuevo', goHome: 'Ir al Inicio' },
  fr: { heading: "Quelque Chose d\u2019Inattendu s\u2019est Produit", description: "Ne vous inqui\u00e9tez pas \u2014 le cosmos est vaste et les petites perturbations arrivent. Remettons-vous sur la bonne voie.", tryAgain: 'R\u00e9essayer', goHome: "Retour \u00e0 l\u2019Accueil" },
  ja: { heading: '\u4e88\u671f\u3057\u306a\u3044\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f', description: '\u3054\u5fc3\u914d\u306a\u304f \u2014 \u5b87\u5b99\u306f\u5e83\u304f\u3001\u5c0f\u3055\u306a\u4e71\u308c\u306f\u4ed8\u304d\u3082\u306e\u3067\u3059\u3002\u3059\u3050\u306b\u6b63\u3057\u3044\u8ecc\u9053\u306b\u623b\u3057\u307e\u3057\u3087\u3046\u3002', tryAgain: '\u3082\u3046\u4e00\u5ea6\u8a66\u3059', goHome: '\u30db\u30fc\u30e0\u306b\u623b\u308b' },
  de: { heading: 'Etwas Unerwartetes ist Passiert', description: 'Keine Sorge \u2014 der Kosmos ist weit und kleine St\u00f6rungen kommen vor. Wir bringen Sie wieder auf Kurs.', tryAgain: 'Erneut Versuchen', goHome: 'Zur Startseite' },
  pl: { heading: 'Co\u015b Nieoczekiwanego Si\u0119 Wydarzy\u0142o', description: 'Nie martw si\u0119 \u2014 kosmos jest rozleg\u0142y, a drobne zak\u0142\u00f3cenia si\u0119 zdarzaj\u0105. Pomo\u017cemy Ci wr\u00f3ci\u0107 na w\u0142a\u015bciwy tor.', tryAgain: 'Spr\u00f3buj ponownie', goHome: 'Strona g\u0142\u00f3wna' },
  ar: { heading: '\u062d\u062f\u062b \u0634\u064a\u0621 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639', description: '\u0644\u0627 \u062a\u0642\u0644\u0642 \u2014 \u0627\u0644\u0641\u0636\u0627\u0621 \u0634\u0627\u0633\u0639 \u0648\u0627\u0644\u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062a \u0627\u0644\u0637\u0641\u064a\u0641\u0629 \u0648\u0627\u0631\u062f\u0629. \u062f\u0639\u0646\u0627 \u0646\u0639\u064a\u062f\u0643 \u0625\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0631 \u0627\u0644\u0635\u062d\u064a\u062d.', tryAgain: '\u062d\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649', goHome: '\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629' },
  zh: { heading: '\u53d1\u751f\u4e86\u610f\u5916', description: '\u522b\u62c5\u5fc3\u2014\u2014\u5b87\u5b99\u6d69\u701a\uff0c\u5c0f\u6ce2\u6f9c\u5728\u6240\u96be\u514d\u3002\u8ba9\u6211\u4eec\u5e2e\u4f60\u56de\u5230\u6b63\u8f68\u3002', tryAgain: '\u91cd\u8bd5', goHome: '\u8fd4\u56de\u9996\u9875' },
  uk: { heading: '\u0421\u0442\u0430\u043b\u043e\u0441\u044f \u0429\u043e\u0441\u044c \u041d\u0435\u0441\u043f\u043e\u0434\u0456\u0432\u0430\u043d\u0435', description: '\u041d\u0435 \u0445\u0432\u0438\u043b\u044e\u0439\u0442\u0435\u0441\u044c \u2014 \u043a\u043e\u0441\u043c\u043e\u0441 \u0432\u0435\u043b\u0438\u0447\u0435\u0437\u043d\u0438\u0439, \u0456 \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u0456 \u0437\u0431\u043e\u0457 \u0442\u0440\u0430\u043f\u043b\u044f\u044e\u0442\u044c\u0441\u044f. \u0414\u043e\u043f\u043e\u043c\u043e\u0436\u0435\u043c\u043e \u0432\u0430\u043c \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u043d\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439 \u0448\u043b\u044f\u0445.', tryAgain: '\u0421\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u043d\u043e\u0432\u0443', goHome: '\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443' },
};

function detectLocale(): SupportedLocale {
  if (typeof window === 'undefined') return 'en';
  const seg = window.location.pathname.split('/')[1];
  return (SUPPORTED_LOCALES as readonly string[]).includes(seg)
    ? (seg as SupportedLocale)
    : 'en';
}

/**
 * Root layout error boundary — renders when the root layout itself throws.
 * Must provide its own <html>/<body> since the layout is broken.
 * Kept minimal: inline styles only (no Tailwind, no external CSS guaranteed).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  const locale = useMemo(detectLocale, []);
  const t = messages[locale];
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0f',
          color: '#e4e4e7',
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        {/* Diffused gradient background */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 50% 20%, rgba(139,92,246,0.12) 0%, transparent 60%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 80% 80%, rgba(6,182,212,0.06) 0%, transparent 50%)',
            }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 480 }}>
          {/* Calming SVG orb */}
          <svg
            viewBox="0 0 120 120"
            width="120"
            height="120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: '0 auto 2rem' }}
            aria-hidden="true"
          >
            <circle cx="60" cy="60" r="40" fill="#111118" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
            <circle cx="60" cy="60" r="28" fill="#0a0a0f" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
            <circle cx="60" cy="60" r="4" fill="#8b5cf6" opacity="0.5" />
          </svg>

          <h1
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            {t.heading}
          </h1>

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#8b8b94',
              marginBottom: '2rem',
            }}
          >
            {t.description}
          </p>

          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => reset()}
              style={{
                padding: '0.625rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#fff',
                background: '#8b5cf6',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(139,92,246,0.25)',
                transition: 'box-shadow 0.2s',
              }}
            >
              {t.tryAgain}
            </button>
            <a
              href="/"
              style={{
                padding: '0.625rem 1.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#e4e4e7',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              {t.goHome}
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
