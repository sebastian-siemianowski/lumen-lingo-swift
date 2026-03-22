'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getAppStoreUrl } from '@/lib/appStoreUrl';
import { trackEvent } from '@/lib/analytics';
import { Container } from '@/components/ui';
import { LanguageSwitcher } from './language-switcher';

const navLinks = [
  { href: '/features', key: 'features' },
  { href: '/pricing', key: 'pricing' },
  { href: '/blog', key: 'blog' },
  { href: '/about', key: 'about' },
] as const;

export function Header() {
  const t = useTranslations('Nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Escape key to close & focus trap
  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobile();
        return;
      }

      if (e.key === 'Tab' && mobileMenuRef.current) {
        const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    // Auto-focus first link in menu
    requestAnimationFrame(() => {
      const firstLink = mobileMenuRef.current?.querySelector<HTMLElement>('a[href]');
      firstLink?.focus();
    });

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen, closeMobile]);

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="fixed top-2 left-2 z-[100] -translate-y-full rounded-[--radius-button] bg-violet px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        {t('skipToContent')}
      </a>

      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-glass-border bg-background/80 shadow-lg backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between sm:h-20" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5 rounded-[--radius-sm] focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none" aria-label="LumenLingo home">
              <div className="relative flex h-9 w-9 items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet to-cyan opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="relative text-lg font-bold text-white">L</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-violet">
                LumenLingo
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative rounded-[--radius-sm] px-4 py-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none"
                >
                  {t(link.key)}
                  {/* Slide-in underline */}
                  <span className="absolute bottom-0.5 left-4 right-4 h-[2px] origin-left scale-x-0 rounded-full bg-violet transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href={getAppStoreUrl('nav_download')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('app_store_click', { location: 'nav_download' })}
                className="inline-flex cursor-pointer items-center justify-center rounded-[--radius-sm] bg-violet px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-violet-hover hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none glow-violet"
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {t('download')}
              </a>
            </div>

            {/* Language switcher (desktop) */}
            <div className="hidden md:flex">
              <LanguageSwitcher />
            </div>

            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-11 w-11 items-center justify-center rounded-[--radius-sm] transition-colors hover:bg-white/5 md:hidden"
              aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
              aria-expanded={mobileOpen}
            >
              <div className="flex w-5 flex-col gap-[5px]">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] w-full rounded-full bg-foreground"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="block h-[2px] w-full rounded-full bg-foreground"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] w-full rounded-full bg-foreground"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
              aria-hidden
            />

            {/* Panel */}
            <motion.div
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-label={t('mobileNav')}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[min(85vw,360px)] border-l border-glass-border bg-background/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex h-full flex-col px-6 pt-24 pb-8">
                <nav className="flex flex-1 flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className="block rounded-[--radius-button] px-4 py-3 text-lg font-medium text-foreground-secondary transition-all hover:bg-white/5 hover:text-foreground"
                      >
                        {t(link.key)}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href={getAppStoreUrl('nav_download')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent('app_store_click', { location: 'nav_download' });
                      closeMobile();
                    }}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-[--radius-button] bg-violet px-8 py-3 text-lg font-medium text-white transition-all duration-200 hover:bg-violet-hover hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none glow-violet"
                  >
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    {t('downloadFree')}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
