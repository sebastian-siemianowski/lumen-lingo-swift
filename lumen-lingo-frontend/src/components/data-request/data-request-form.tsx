'use client';

import { useState, useRef, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Input, Textarea, Select, Label, ErrorText } from '@/components/ui';
import { cn } from '@/lib/utils';
import { getProtectedEmail } from '@/lib/email-registry';

type FormState = 'idle' | 'submitting' | 'success';

const REQUEST_TYPES = [
  'typeAccess',
  'typeRectification',
  'typeErasure',
  'typePortability',
  'typeRestriction',
  'typeObjection',
] as const;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const FIELDS = ['name', 'email', 'requestType', 'details'] as const;
type Field = (typeof FIELDS)[number];

export function DataRequestForm() {
  const t = useTranslations('DataRequest.form');
  const tSuccess = useTranslations('DataRequest.success');
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState<Record<string, string>>({ name: '', email: '', requestType: '', details: '' });
  const formRef = useRef<HTMLFormElement>(null);

  function validateField(field: Field, value: string): string {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'Please enter your name so we can identify your record.';
      case 'email':
        if (!value.trim()) return 'Please enter a valid email address so we can respond to you.';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address so we can respond to you.';
      case 'requestType':
        return value ? '' : "Please select what you'd like us to do with your data.";
      case 'details':
        return value.trim().length >= 20 ? '' : 'Please provide at least 20 characters of detail.';
      default:
        return '';
    }
  }

  function handleBlur(field: Field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, values[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  }

  function handleChange(field: Field, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  }

  const completedCount = FIELDS.filter((f) => !validateField(f, values[f])).length;
  const allValid = completedCount === FIELDS.length;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    for (const f of FIELDS) {
      const err = validateField(f, values[f]);
      if (err) newErrors[f] = err;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.fromEntries(FIELDS.map((f) => [f, true])));
      return;
    }
    setErrors({});
    setState('submitting');

    const subject = encodeURIComponent(`DSAR — ${values.requestType}`);
    const body = encodeURIComponent(
      `Data Subject Access Request\n\nName: ${values.name}\nEmail: ${values.email}\nRequest Type: ${values.requestType}\n\nDetails:\n${values.details}`,
    );
    window.location.href = `mailto:${getProtectedEmail('support')}?subject=${subject}&body=${body}`;
    setTimeout(() => setState('success'), 500);
  }

  return (
    <AnimatePresence mode="wait">
      {state === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease }}
          className="glass-card p-6 text-center md:p-8"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 text-emerald-400"
              aria-hidden
            >
              <motion.path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
              />
            </motion.svg>
          </div>
          <h3 className="mb-2 font-display text-lg font-bold text-[--color-foreground]">
            {tSuccess('heading')}
          </h3>
          <p className="mb-2 text-sm leading-relaxed text-[--color-foreground-secondary]">
            Your email client has been opened with your request. Please review and send.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm text-[--color-violet] hover:underline"
          >
            Back to homepage
          </Link>
        </motion.div>
      ) : (
        <motion.form
          ref={formRef}
          key="form"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease }}
          onSubmit={handleSubmit}
          noValidate
          className="glass-card mx-auto max-w-xl p-6 md:p-8"
        >
          {/* Progress dots */}
          <div className="mb-6 flex items-center justify-center gap-2">
            {FIELDS.map((f, i) => (
              <div
                key={f}
                className={cn(
                  'h-2 w-2 rounded-full transition-colors duration-200',
                  !validateField(f, values[f])
                    ? 'bg-[--color-violet]'
                    : 'border border-[--color-glass-border] bg-transparent',
                )}
                aria-label={`Field ${i + 1} ${!validateField(f, values[f]) ? 'complete' : 'incomplete'}`}
              />
            ))}
          </div>

          <h2 className="mb-6 font-display text-lg font-bold text-[--color-foreground]">
            {t('heading')}
          </h2>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <Label htmlFor="dsar-name">{t('nameLabel')}</Label>
              <Input
                id="dsar-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={t('namePlaceholder')}
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                error={!!errors.name}
                aria-required="true"
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="dsar-email">{t('emailLabel')}</Label>
              <Input
                id="dsar-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t('emailPlaceholder')}
                value={values.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                error={!!errors.email}
                aria-required="true"
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>

            {/* Request Type */}
            <div>
              <Label htmlFor="dsar-type">{t('requestTypeLabel')}</Label>
              <Select
                id="dsar-type"
                name="requestType"
                value={values.requestType}
                onChange={(e) => handleChange('requestType', e.target.value)}
                onBlur={() => handleBlur('requestType')}
                error={!!errors.requestType}
                aria-required="true"
              >
                <option value="" disabled>
                  {t('requestTypePlaceholder')}
                </option>
                {REQUEST_TYPES.map((type) => (
                  <option key={type} value={t(type)}>
                    {t(type)}
                  </option>
                ))}
              </Select>
              {errors.requestType && <ErrorText>{errors.requestType}</ErrorText>}
            </div>

            {/* Details */}
            <div>
              <Label htmlFor="dsar-details">{t('detailsLabel')}</Label>
              <Textarea
                id="dsar-details"
                name="details"
                rows={4}
                placeholder={t('detailsPlaceholder')}
                value={values.details}
                onChange={(e) => handleChange('details', e.target.value)}
                onBlur={() => handleBlur('details')}
                error={!!errors.details}
              />
              <div className="mt-1 flex items-center justify-between">
                {errors.details ? (
                  <ErrorText>{errors.details}</ErrorText>
                ) : (
                  <span />
                )}
                <span
                  className={cn(
                    'text-xs transition-colors',
                    values.details.trim().length >= 20
                      ? 'text-[--color-foreground]'
                      : values.details.trim().length >= 15
                        ? 'text-amber-400'
                        : 'text-[--color-foreground-muted]',
                  )}
                >
                  {values.details.trim().length}/20
                </span>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={state === 'submitting' || !allValid}
              animate={
                allValid
                  ? { opacity: 1, boxShadow: ['0 0 0 rgba(139,92,246,0)', '0 0 20px rgba(139,92,246,0.3)', '0 0 0 rgba(139,92,246,0)'] }
                  : { opacity: 0.5 }
              }
              transition={{ duration: 0.6 }}
              className="w-full rounded-[--radius-button] bg-[--color-violet] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[--color-violet-hover] disabled:cursor-not-allowed"
            >
              {state === 'submitting' ? t('submitting') : t('submitButton')}
            </motion.button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
