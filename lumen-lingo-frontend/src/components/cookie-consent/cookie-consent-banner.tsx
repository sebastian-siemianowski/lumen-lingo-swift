'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  getConsentPreferences,
  setConsentPreferences,
  acceptAll,
  rejectAll,
  hasConsentDecision,
  type ConsentPreferences,
} from '@/lib/cookie-consent';
import Link from 'next/link';

type View = 'banner' | 'preferences';

interface CategoryToggleProps {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

function CategoryToggle({ id, label, description, checked, disabled, onChange }: CategoryToggleProps) {
  return (
    <div className="flex items-start gap-4 py-3">
      <div className="flex-1 min-w-0">
        <label htmlFor={id} className="text-sm font-medium text-foreground cursor-pointer">
          {label}
        </label>
        <p className="mt-0.5 text-xs leading-relaxed text-foreground-muted">{description}</p>
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`
          relative mt-0.5 inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full
          transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-violet
          focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none
          ${disabled ? 'cursor-not-allowed opacity-60' : ''}
          ${checked
            ? 'bg-gradient-to-r from-violet to-cyan shadow-[0_0_12px_rgba(139,92,246,0.3)]'
            : 'bg-white/10 border border-white/10'
          }
        `}
      >
        <span className="sr-only">{label}</span>
        <span
          className={`
            pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-lg
            transition-transform duration-200
            ${checked ? 'translate-x-[1.375rem]' : 'translate-x-1'}
          `}
        />
      </button>
    </div>
  );
}

export function CookieConsentBanner() {
  const t = useTranslations('CookieConsent');
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<View>('banner');
  const [prefs, setPrefs] = useState({
    analytics: false,
    errorMonitoring: false,
    sessionReplay: false,
  });
  const bannerRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Show banner if no consent decision has been made
    if (!hasConsentDecision()) {
      setVisible(true);
    }
  }, []);

  // Focus management when banner appears
  useEffect(() => {
    if (visible && firstButtonRef.current) {
      // Small delay to let animation start
      const timer = setTimeout(() => firstButtonRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  // Listen for "open cookie settings" events from footer
  useEffect(() => {
    function handleOpenSettings() {
      const existing = getConsentPreferences();
      if (existing) {
        setPrefs({
          analytics: existing.analytics,
          errorMonitoring: existing.errorMonitoring,
          sessionReplay: existing.sessionReplay,
        });
      }
      setView('preferences');
      setVisible(true);
    }
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const handleAcceptAll = useCallback(() => {
    acceptAll();
    setVisible(false);
    setView('banner');
  }, []);

  const handleRejectAll = useCallback(() => {
    rejectAll();
    setVisible(false);
    setView('banner');
  }, []);

  const handleSavePreferences = useCallback(() => {
    setConsentPreferences(prefs);
    setVisible(false);
    setView('banner');
  }, [prefs]);

  const handleManagePreferences = useCallback(() => {
    const existing = getConsentPreferences();
    if (existing) {
      setPrefs({
        analytics: existing.analytics,
        errorMonitoring: existing.errorMonitoring,
        sessionReplay: existing.sessionReplay,
      });
    }
    setView('preferences');
  }, []);

  // Trap focus within banner when visible
  useEffect(() => {
    if (!visible) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        // Don't close on escape if no prior decision
        if (hasConsentDecision()) {
          setVisible(false);
          setView('banner');
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop overlay for preferences view */}
          {view === 'preferences' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
          )}

          <motion.div
            ref={bannerRef}
            role="dialog"
            aria-modal={view === 'preferences'}
            aria-label={t('bannerTitle')}
            initial={view === 'banner'
              ? { y: 100, opacity: 0 }
              : { scale: 0.95, opacity: 0 }
            }
            animate={view === 'banner'
              ? { y: 0, opacity: 1 }
              : { scale: 1, opacity: 1 }
            }
            exit={view === 'banner'
              ? { y: 100, opacity: 0 }
              : { scale: 0.95, opacity: 0 }
            }
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            className={`
              fixed z-[9999]
              ${view === 'banner'
                ? 'inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-lg'
                : 'inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-md sm:w-full'
              }
            `}
          >
            {/* Glow effect behind card */}
            <div
              className="absolute -inset-px rounded-2xl opacity-50"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.1))',
                filter: 'blur(12px)',
              }}
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e18]/95 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              {/* Top gradient line */}
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(6,182,212,0.3), transparent)',
                }}
                aria-hidden="true"
              />

              <div className="p-5 sm:p-6">
                {view === 'banner' ? (
                  /* ─── Compact Banner View ─── */
                  <>
                    <div className="flex items-start gap-3">
                      {/* Cookie icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet/20 to-cyan/10 border border-violet/20">
                        <svg className="h-5 w-5 text-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="8" cy="9" r="1" fill="currentColor" />
                          <circle cx="15" cy="8" r="1" fill="currentColor" />
                          <circle cx="10" cy="14" r="1" fill="currentColor" />
                          <circle cx="16" cy="13" r="1" fill="currentColor" />
                          <circle cx="13" cy="17" r="0.8" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-sm font-semibold text-foreground">
                          {t('bannerTitle')}
                        </h2>
                        <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                          {t('bannerDescription')}{' '}
                          <Link href="/cookies" className="text-violet hover:text-violet-hover underline underline-offset-2 transition-colors">
                            {t('learnMore')}
                          </Link>
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                      <button
                        ref={firstButtonRef}
                        onClick={handleAcceptAll}
                        className="
                          inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium
                          bg-gradient-to-r from-violet to-violet-hover text-white
                          shadow-[0_0_20px_rgba(139,92,246,0.25)]
                          hover:shadow-[0_0_32px_rgba(139,92,246,0.4)]
                          transition-all duration-200
                          focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2
                          focus-visible:ring-offset-background focus-visible:outline-none
                        "
                      >
                        {t('acceptAll')}
                      </button>
                      <button
                        onClick={handleRejectAll}
                        className="
                          inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium
                          border border-white/[0.08] bg-white/[0.04] text-foreground
                          hover:bg-white/[0.08] hover:border-white/[0.12]
                          transition-all duration-200
                          focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2
                          focus-visible:ring-offset-background focus-visible:outline-none
                        "
                      >
                        {t('rejectAll')}
                      </button>
                      <button
                        onClick={handleManagePreferences}
                        className="
                          inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium
                          text-foreground-muted hover:text-foreground
                          transition-colors duration-200
                          focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2
                          focus-visible:ring-offset-background focus-visible:outline-none
                        "
                      >
                        {t('managePreferences')}
                      </button>
                    </div>
                  </>
                ) : (
                  /* ─── Expanded Preferences View ─── */
                  <>
                    <div className="flex items-center justify-between">
                      <h2 className="text-base font-semibold text-foreground">
                        {t('preferencesTitle')}
                      </h2>
                      <button
                        onClick={() => {
                          if (hasConsentDecision()) {
                            setVisible(false);
                            setView('banner');
                          } else {
                            setView('banner');
                          }
                        }}
                        className="
                          flex h-8 w-8 items-center justify-center rounded-lg
                          text-foreground-muted hover:text-foreground hover:bg-white/[0.06]
                          transition-colors duration-200
                          focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none
                        "
                        aria-label={t('close')}
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                      {t('preferencesDescription')}
                    </p>

                    {/* Category toggles */}
                    <div className="mt-4 space-y-1 divide-y divide-white/[0.06]">
                      <CategoryToggle
                        id="consent-essential"
                        label={t('categories.essential.label')}
                        description={t('categories.essential.description')}
                        checked={true}
                        disabled={true}
                        onChange={() => {}}
                      />
                      <CategoryToggle
                        id="consent-analytics"
                        label={t('categories.analytics.label')}
                        description={t('categories.analytics.description')}
                        checked={prefs.analytics}
                        onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                      />
                      <CategoryToggle
                        id="consent-error"
                        label={t('categories.errorMonitoring.label')}
                        description={t('categories.errorMonitoring.description')}
                        checked={prefs.errorMonitoring}
                        onChange={(v) => setPrefs((p) => ({ ...p, errorMonitoring: v }))}
                      />
                      <CategoryToggle
                        id="consent-replay"
                        label={t('categories.sessionReplay.label')}
                        description={t('categories.sessionReplay.description')}
                        checked={prefs.sessionReplay}
                        onChange={(v) => setPrefs((p) => ({ ...p, sessionReplay: v }))}
                      />
                    </div>

                    {/* Preference action buttons */}
                    <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                      <button
                        onClick={handleSavePreferences}
                        className="
                          flex-1 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium
                          bg-gradient-to-r from-violet to-violet-hover text-white
                          shadow-[0_0_20px_rgba(139,92,246,0.25)]
                          hover:shadow-[0_0_32px_rgba(139,92,246,0.4)]
                          transition-all duration-200
                          focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2
                          focus-visible:ring-offset-background focus-visible:outline-none
                        "
                      >
                        {t('savePreferences')}
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="
                          flex-1 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium
                          border border-white/[0.08] bg-white/[0.04] text-foreground
                          hover:bg-white/[0.08] hover:border-white/[0.12]
                          transition-all duration-200
                          focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2
                          focus-visible:ring-offset-background focus-visible:outline-none
                        "
                      >
                        {t('acceptAll')}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
