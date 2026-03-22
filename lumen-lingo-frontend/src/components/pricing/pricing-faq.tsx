'use client';

import { useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container, Section, Heading, Text } from '@/components/ui';
import { FadeIn } from '@/components/motion';
import { faqItems } from './faq-data';
import type { FAQItem } from './faq-data';

export type { FAQItem };

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      let target: number | null = null;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        target = index < faqItems.length - 1 ? index + 1 : 0;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        target = index > 0 ? index - 1 : faqItems.length - 1;
      } else if (e.key === 'Home') {
        e.preventDefault();
        target = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        target = faqItems.length - 1;
      }

      if (target !== null) {
        buttonRefs.current[target]?.focus();
      }
    },
    [],
  );

  return (
    <Section className="pb-20 sm:pb-28">
      <Container className="max-w-3xl">
        <FadeIn className="mb-12 text-center">
          <Heading as="h2" gradient className="mb-4">
            Frequently Asked Questions
          </Heading>
          <Text colour="secondary" className="mx-auto max-w-xl">
            Everything you need to know about LumenLingo&apos;s pricing and subscriptions.
          </Text>
        </FadeIn>

        <div role="region" aria-label="Frequently Asked Questions" className="flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <FadeIn key={item.question} delay={index * 0.05}>
                <div
                  className={cn(
                    'overflow-hidden rounded-xl border backdrop-blur-sm transition-colors',
                    'bg-surface-card/40',
                    openIndex === index
                      ? 'border-violet/30 bg-surface-card/60'
                      : 'border-glass-border hover:border-white/15',
                  )}
                >
                  <h3>
                    <button
                      ref={(el) => { buttonRefs.current[index] = el; }}
                      id={triggerId}
                      onClick={() => toggle(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                      aria-expanded={openIndex === index}
                      aria-controls={panelId}
                    >
                      <span className="text-sm font-medium text-white/90 sm:text-base">
                        {item.question}
                      </span>
                      <motion.svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-5 w-5 shrink-0 text-white/40"
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <path
                          d="M5 8l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 sm:px-6">
                          <p className="text-sm leading-relaxed text-white/55">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
