'use client';

import { useState, useRef, useEffect, useTransition, useCallback } from 'react';
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

/* Native greeting — far more evocative than "Abc" */
const localeGreeting: Record<Locale, string> = {
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
  ja: 'こんにちは',
  de: 'Hallo',
  pl: 'Cześć',
  ar: 'مرحبا',
  zh: '你好',
  uk: 'Привіт',
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Animated trigger globe ── */
function GlobeIcon({ active }: { active: boolean }) {
  return (
    <motion.div className="relative flex h-7 w-7 items-center justify-center" aria-hidden>
      {/* Orbital ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-violet/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      {/* Inner glow on open */}
      <motion.div
        className="absolute inset-0.5 rounded-full bg-violet/10 blur-[6px]"
        animate={{ opacity: active ? 0.8 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <svg className="relative h-4 w-4 text-violet/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.732-3.558" />
      </svg>
    </motion.div>
  );
}

/* ── Locale row with hover spotlight ── */
function LocaleRow({
  loc,
  isActive,
  greeting,
  flag,
  name,
  index,
  onSelect,
}: {
  loc: Locale;
  isActive: boolean;
  greeting: string;
  flag: string;
  name: string;
  index: number;
  onSelect: (loc: Locale) => void;
}) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      spotlightRef.current?.style.setProperty('--sx', `${e.clientX - rect.left}px`);
    },
    [],
  );

  return (
    <motion.button
      role="option"
      aria-selected={isActive}
      onClick={() => onSelect(loc)}
      onPointerMove={onPointerMove}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.035, duration: 0.3, ease }}
      className={cn(
        'group/item relative flex w-full items-center gap-3.5 px-4 py-3 text-sm outline-none transition-colors duration-200',
        isActive
          ? 'text-foreground'
          : 'text-foreground-secondary hover:text-foreground',
      )}
    >
      {/* Pointer-following spotlight (hover only, not active) */}
      {!isActive && (
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute inset-y-0.5 -inset-x-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
          style={{
            background: 'radial-gradient(120px circle at var(--sx, 50%) 50%, rgba(139,92,246,0.06), transparent 70%)',
          }}
        />
      )}

      {/* Active row: glass background + gradient bar */}
      {isActive && (
        <>
          <motion.div
            layoutId="locale-active-bg"
            className="pointer-events-none absolute inset-x-2 inset-y-0.5 rounded-xl bg-gradient-to-r from-violet/[0.07] via-violet/[0.04] to-transparent"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          <motion.div
            layoutId="locale-active-bar"
            className="absolute inset-y-2 start-1.5 w-[2.5px] rounded-full bg-gradient-to-b from-violet via-violet/80 to-cyan"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        </>
      )}

      {/* Flag orb — glass circle with subtle depth */}
      <motion.span
        className={cn(
          'relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg leading-none transition-all duration-200',
          isActive
            ? 'bg-violet/[0.08] shadow-[0_0_12px_rgba(139,92,246,0.12)]'
            : 'bg-white/[0.03] group-hover/item:bg-white/[0.05]',
        )}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      >
        {/* Soft ring */}
        <span className={cn(
          'absolute inset-0 rounded-full border transition-colors duration-200',
          isActive
            ? 'border-violet/25'
            : 'border-white/[0.06] group-hover/item:border-white/[0.1]',
        )} />
        {flag}
      </motion.span>

      {/* Text: name + greeting */}
      <span className="relative z-10 flex flex-1 flex-col items-start">
        <span className={cn(
          'text-[13px] font-medium leading-snug tracking-wide transition-colors duration-200',
          isActive && 'text-foreground',
        )}>
          {name}
        </span>
        <span className={cn(
          'text-[11px] leading-snug italic transition-colors duration-200',
          isActive ? 'text-violet/50' : 'text-foreground-muted/40',
        )}>
          {greeting}
        </span>
      </span>

      {/* Checkmark orb */}
      {isActive && (
        <motion.div
          layoutId="locale-check"
          className="relative z-10 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-violet/15 shadow-[0_0_8px_rgba(139,92,246,0.15)]"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <svg className="h-3 w-3 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}

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
        options[next]?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const switchLocale = useCallback(
    (newLocale: Locale) => {
      setOpen(false);
      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
      });
    },
    [pathname, router],
  );

  return (
    <div ref={containerRef} className="relative">
      {/* ── Trigger ── */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'group relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-all duration-300',
          'border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm',
          'text-foreground-secondary hover:text-foreground hover:border-white/[0.12] hover:bg-white/[0.05]',
          'focus-visible:ring-2 focus-visible:ring-violet/40 focus-visible:outline-none',
          open && 'border-violet/25 bg-violet/[0.04]',
          isPending && 'opacity-60 pointer-events-none',
        )}
        aria-label={t('label')}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <GlobeIcon active={open} />
        <span className="text-base leading-none" aria-hidden>
          {localeFlags[locale]}
        </span>
        <span className="hidden sm:inline text-xs tracking-wider opacity-70">{locale.toUpperCase()}</span>
        <motion.svg
          className="h-3 w-3 opacity-40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease }}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* ── Dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, scale: 0.97, filter: 'blur(2px)' }}
            transition={{ duration: 0.3, ease }}
            className="absolute end-0 z-50 mt-3 w-72 origin-top-end overflow-hidden rounded-2xl border border-white/[0.07]"
            style={{
              background: 'linear-gradient(170deg, rgba(18,16,28,0.98) 0%, rgba(10,10,16,0.99) 100%)',
              backdropFilter: 'blur(60px) saturate(1.6)',
              boxShadow:
                '0 24px 80px rgba(0,0,0,0.55), 0 0 1px rgba(255,255,255,0.05) inset, 0 0 100px rgba(139,92,246,0.05)',
            }}
            role="listbox"
            aria-label={t('label')}
          >
            {/* ── Ambient glow layer ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden>
              <motion.div
                className="absolute -top-16 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-violet/[0.06] blur-[60px]"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-10 right-1/4 h-24 w-36 rounded-full bg-cyan/[0.04] blur-[50px]"
                animate={{ opacity: [0.2, 0.45, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              />
            </div>

            {/* Top edge light */}
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" aria-hidden />

            {/* ── Header ── */}
            <motion.div
              className="relative border-b border-white/[0.04] px-4 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-foreground-muted/50">
                {t('label')}
              </p>
            </motion.div>

            {/* ── Scrollable language list ── */}
            <div className="relative max-h-[min(540px,70vh)] overflow-y-auto py-1 [scrollbar-width:thin] [scrollbar-color:rgba(139,92,246,0.15)_transparent]">
              {routing.locales.map((loc, i) => (
                <LocaleRow
                  key={loc}
                  loc={loc}
                  isActive={loc === locale}
                  greeting={localeGreeting[loc]}
                  flag={localeFlags[loc]}
                  name={t(loc)}
                  index={i}
                  onSelect={switchLocale}
                />
              ))}
            </div>

            {/* Bottom edge */}
            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" aria-hidden />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
