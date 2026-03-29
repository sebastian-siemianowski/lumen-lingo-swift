'use client';

import { useCallback, useRef, useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/motion';
import { ProtectedEmail } from '@/components/ui/protected-email';
import type { EmailKey } from '@/lib/email-registry';
import type { FAQItem } from './faq-data';

const EMAIL_TOKEN_RE = /\{\{EMAIL:(\w+)\}\}/g;

/** Parse answer text, replacing {{EMAIL:key}} tokens with ProtectedEmail components */
function renderAnswer(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = EMAIL_TOKEN_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <ProtectedEmail key={match.index} emailKey={match[1] as EmailKey} />,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex === 0) return text;
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
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
        target = index < items.length - 1 ? index + 1 : 0;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        target = index > 0 ? index - 1 : items.length - 1;
      } else if (e.key === 'Home') {
        e.preventDefault();
        target = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        target = items.length - 1;
      }

      if (target !== null) {
        buttonRefs.current[target]?.focus();
      }
    },
    [items.length],
  );

  return (
    <div role="region" aria-label="Frequently Asked Questions" className={cn('flex flex-col gap-3', className)}>
      {items.map((item, index) => {
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;
        const isOpen = openIndex === index;

        return (
          <FadeIn key={item.question} delay={index * 0.04}>
            <div
              className={cn(
                'group overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300',
                'bg-surface-card/40',
                isOpen
                  ? 'border-violet/30 bg-surface-card/60 shadow-[0_0_24px_rgba(139,92,246,0.06)]'
                  : 'border-glass-border hover:border-white/15 hover:bg-surface-card/50',
              )}
            >
              <h3>
                <button
                  ref={(el) => { buttonRefs.current[index] = el; }}
                  id={triggerId}
                  onClick={() => toggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className={cn(
                    'text-sm font-medium sm:text-base transition-colors duration-200',
                    isOpen ? 'text-white' : 'text-white/85 group-hover:text-white/95',
                  )}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={cn(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                      isOpen
                        ? 'border-violet/40 bg-violet/10 text-violet'
                        : 'border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white/60',
                    )}
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
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
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <div className="h-px w-full bg-gradient-to-r from-violet/20 via-white/5 to-transparent mb-4" />
                      <p className="text-sm leading-relaxed text-white/55 sm:text-[15px] sm:leading-relaxed">
                        {renderAnswer(item.answer)}
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
  );
}
