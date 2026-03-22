'use client';

import { motion } from 'framer-motion';
import { NewsletterForm } from './newsletter-form';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function BlogNewsletterCTA() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease }}
      className="not-prose my-10 overflow-hidden rounded-2xl border border-glass-border bg-gradient-to-br from-violet/5 via-surface to-cyan/5"
      role="complementary"
      aria-label="Newsletter signup"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet/20 bg-violet/10">
            <svg className="h-5 w-5 text-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="font-display text-lg font-bold text-foreground">
              Enjoying this article?
            </h3>
            <p className="mt-1 text-sm text-foreground-secondary">
              Get language learning insights, app updates, and study tips delivered to your inbox.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <NewsletterForm source="blog_inline" />
        </div>
      </div>
    </motion.aside>
  );
}
