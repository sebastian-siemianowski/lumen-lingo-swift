'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AppStoreBadge } from '@/components/home/app-store-badge';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function DownloadQR() {
  const t = useTranslations('Download.qr');

  return (
    <section className="relative px-6 py-20 pb-12">
      {/* top divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 max-w-lg -translate-x-1/2 bg-gradient-to-r from-transparent via-violet/30 to-transparent" />

      <motion.div
        className="mx-auto flex max-w-lg flex-col items-center gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease }}
      >
        <h2 className="font-display text-2xl font-bold text-foreground">
          {t('heading')}
        </h2>
        <p className="text-foreground-secondary">
          {t('description')}
        </p>

        {/* QR code placeholder — replace with real QR image once App Store ID is live */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-2xl border border-glass-border bg-white p-3">
            {/* 
              This is a placeholder QR pattern. Replace with an actual QR code image
              pointing to the App Store URL once the app is published:
              src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(getAppStoreUrl('download_qr'))}`}
            */}
            <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-[2px]" aria-hidden="true">
              {/* Top-left finder */}
              {[0, 1, 2, 3, 4, 5, 6].map((row) =>
                [0, 1, 2, 3, 4, 5, 6].map((col) => {
                  const isTopLeftFinder =
                    row < 7 && col < 7 && (row === 0 || row === 6 || col === 0 || col === 6 || (row >= 2 && row <= 4 && col >= 2 && col <= 4));
                  return (
                    <div
                      key={`${row}-${col}`}
                      className={`rounded-[1px] ${isTopLeftFinder ? 'bg-[#0a0a0f]' : row % 2 === col % 3 ? 'bg-[#0a0a0f]' : 'bg-transparent'}`}
                    />
                  );
                }),
              )}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-violet to-cyan">
                <span className="text-lg font-bold text-white">L</span>
              </div>
            </div>
          </div>
          <span className="text-xs text-foreground-muted">
            {t('fallback')}
          </span>
        </div>

        {/* Final CTA for mobile visitors */}
        <div className="sm:hidden">
          <AppStoreBadge size="lg" location="download_page" />
        </div>
      </motion.div>
    </section>
  );
}
