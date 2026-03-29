import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import messages from '../../messages/en.json';

// ─── Mock next-intl for all component tests ────────────────────────
// Returns a `t` function that resolves dot-notated keys against en.json.
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return path; // fallback: return the key itself
  }, obj);
}

vi.mock('next-intl', () => {
  function useTranslations(namespace?: string) {
    const base = namespace
      ? (getNestedValue(messages as Record<string, unknown>, namespace) as Record<string, unknown>) ?? {}
      : (messages as Record<string, unknown>);

    const t = (key: string, params?: Record<string, unknown>) => {
      let val = getNestedValue(base as Record<string, unknown>, key);
      if (typeof val === 'string' && params) {
        for (const [k, v] of Object.entries(params)) {
          val = (val as string).replaceAll(`{${k}}`, String(v));
        }
      }
      return typeof val === 'string' ? val : key;
    };
    t.raw = (key: string) => getNestedValue(base as Record<string, unknown>, key);
    t.rich = t;
    t.markup = t;
    t.has = (key: string) => getNestedValue(base as Record<string, unknown>, key) !== key;
    return t;
  }

  return {
    useTranslations,
    useLocale: () => 'en',
    useMessages: () => messages,
    useFormatter: () => ({
      number: (v: number) => String(v),
      dateTime: (v: Date) => v.toISOString(),
      relativeTime: (v: number) => String(v),
    }),
    NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => children,
  };
});

// Also mock use-intl (used internally by next-intl)
vi.mock('use-intl', async () => {
  const nextIntl = await import('next-intl');
  return { ...nextIntl };
});

// Polyfill IntersectionObserver for framer-motion whileInView
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver =
  globalThis.IntersectionObserver ?? (MockIntersectionObserver as unknown as typeof IntersectionObserver);

// Polyfill window.matchMedia for useReducedMotion / useMediaQuery hooks
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}
