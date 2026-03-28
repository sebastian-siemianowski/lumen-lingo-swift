'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ── Locale metadata ── */
const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  ja: '🇯🇵',
  de: '🇩🇪',
  pl: '🇵🇱',
  ar: '🇸🇦',
  zh: '🇨🇳',
  uk: '🇺🇦',
};

/* Native script sample for each locale — gives a cosmic/cultural feel */
const localeScript: Record<Locale, string> = {
  en: 'Abc',
  es: 'Ábc',
  fr: 'Àbc',
  ja: 'あいう',
  de: 'Äbc',
  pl: 'Łść',
  ar: 'أبت',
  zh: '你好',
  uk: 'Абв',
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

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

  // Close on Escape & arrow key navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const container = containerRef.current?.querySelector('[role="listbox"]');
        const options = container?.querySelectorAll<HTMLButtonElement>('[role="option"]');
        if (!options?.length) return;
        const focused = document.activeElement as HTMLElement;
        const idx = Array.from(options).indexOf(focused as HTMLButtonElement);
        const next = e.key === 'ArrowDown'
          ? (idx + 1) % options.length
          : (idx - 1 + options.length) % options.length;
        options[next].focus();
      }
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
      {/* ── Trigger ── */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'group relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all duration-300',
          'border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm',
          'text-foreground-secondary hover:text-foreground hover:border-white/[0.1] hover:bg-white/[0.06]',
          'focus-visible:ring-2 focus-visible:ring-violet/50 focus-visible:outline-none',
          open && 'border-violet/20 bg-violet/[0.04]',
          isPending && 'opacity-60 pointer-events-none',
        )}
        aria-label={t('label')}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {/* Globe icon */}
        <svg className="h-4 w-4 text-violet/60 transition-colors duration-300 group-hover:text-violet/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.732-3.558" />
        </svg>
        <span className="text-base leading-none" aria-hidden>
          {localeFlags[locale]}
        </span>
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <motion.svg
          className="h-3 w-3 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease }}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* ── Dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.25, ease }}
            className="absolute end-0 z-50 mt-3 w-64 origin-top-end overflow-hidden rounded-2xl border border-white/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.5),_0_0_80px_rgba(139,92,246,0.06)]"
            style={{
              background: 'linear-gradient(170deg, rgba(20,18,30,0.97) 0%, rgba(12,12,18,0.98) 100%)',
              backdropFilter: 'blur(40px) saturate(1.5)',
            }}
            role="listbox"
            aria-label={t('label')}
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden>
              <div className="absolute -top-12 left-1/2 h-24 w-40 -translate-x-1/2 bg-violet/[0.07] blur-[50px]" />
              <div className="absolute -bottom-8 right-0 h-20 w-32 bg-cyan/[0.04] blur-[40px]" />
            </div>
            {/* Top edge light */}
            <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" aria-hidden />

            {/* Scrollable list */}
            <div className="relative max-h-[min(420px,60vh)] overflow-y-auto py-1.5 [scrollbar-width:thin] [scrollbar-color:rgba(139,92,246,0.2)_transparent]">
              {routing.locales.map((loc, i) => {
                const isActive = loc === locale;
                return (
                  <motion.button
                    key={loc}
                    role="option"
                    aria-selected={isActive}
                    onClick={() => switchLocale(loc)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.25, ease }}
                    className={cn(
                      'group/item relative flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200',
                      isActive
                        ? 'text-foreground'
                        : 'text-foreground-secondary hover:text-foreground',
                    )}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="locale-active-bar"
                        className="absolute inset-y-1 start-1 w-[3px] rounded-full bg-gradient-to-b from-violet to-cyan"
                        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                      />
                    )}

                    {/* Hover glow */}
                    <div className={cn(
                      'pointer-events-none absolute inset-x-2 inset-y-0.5 rounded-xl transition-all duration-200',
                      isActive
                        ? 'bg-violet/[0.06]'
                        : 'bg-transparent group-hover/item:bg-white/[0.04]',
                    )} />

                    {/* Flag in a little glass circle */}
                    <span className={cn(
                      'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-base leading-none transition-all duration-200',
                      isActive
                        ? 'border-violet/20 bg-violet/[0.08]'
                        : 'border-white/[0.05] bg-white/[0.02] group-hover/item:border-white/[0.08] group-hover/item:bg-white/[0.04]',
                    )}>
                      {localeFlags[loc]}
                    </span>

                    {/* Language name + native script */}
                    <span className="relative z-10 flex flex-1 flex-col items-start gap-0.5">
                      <span className={cn(
                        'text-[13px] font-medium leading-tight transition-colors duration-200',
                        isActive && 'text-foreground',
                      )}>
                        {t(loc)}
                      </span>
                      <span className="text-[10px] leading-tight text-foreground-muted/60">
                        {localeScript[loc]}
                      </span>
                    </span>

                    {/* Active check */}
                    {isActive && (
                      <motion.div
                        layoutId="locale-check"
                        className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-violet/15"
                        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                      >
                        <svg className="h-3 w-3 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Bottom edge */}
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" aria-hidden />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
