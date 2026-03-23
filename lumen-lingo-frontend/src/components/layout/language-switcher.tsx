'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  ja: '🇯🇵',
  de: '🇩🇪',
  pt: '🇧🇷',
  pl: '🇵🇱',
  ar: '🇸🇦',
  zh: '🇨🇳',
  uk: '🇺🇦',
};

export function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function switchLocale(newLocale: Locale) {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-1.5 rounded-[--radius-sm] px-2.5 py-2 text-sm font-medium transition-all',
          'text-foreground-secondary hover:text-foreground hover:bg-white/5',
          'focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none',
          isPending && 'opacity-60 pointer-events-none',
        )}
        aria-label={t('label')}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="text-base leading-none" aria-hidden>
          {localeFlags[locale]}
        </span>
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <svg
          className={cn(
            'h-3.5 w-3.5 transition-transform duration-200',
            open && 'rotate-180',
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="absolute right-0 mt-2 w-48 origin-top-right overflow-hidden rounded-[--radius-button] border border-glass-border bg-surface/95 shadow-xl backdrop-blur-xl"
            role="listbox"
            aria-label={t('label')}
          >
            {routing.locales.map((loc) => {
              const isActive = loc === locale;
              return (
                <button
                  key={loc}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => switchLocale(loc)}
                  className={cn(
                    'flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                    isActive
                      ? 'bg-violet/10 text-violet font-medium'
                      : 'text-foreground-secondary hover:bg-white/5 hover:text-foreground',
                  )}
                >
                  <span className="text-base leading-none">{localeFlags[loc]}</span>
                  <span className="flex-1 text-left">{t(loc)}</span>
                  {isActive && (
                    <motion.svg
                      layoutId="locale-check"
                      className="h-4 w-4 text-violet"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
