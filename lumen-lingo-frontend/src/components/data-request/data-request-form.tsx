'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

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

export function DataRequestForm() {
  const t = useTranslations('DataRequest.form');
  const tSuccess = useTranslations('DataRequest.success');
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!form.get('name')?.toString().trim()) errs.name = t('requiredField');
    const email = form.get('email')?.toString().trim() ?? '';
    if (!email) errs.email = t('requiredField');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t('invalidEmail');
    if (!form.get('requestType')?.toString()) errs.requestType = t('requiredField');
    if (!form.get('details')?.toString().trim()) errs.details = t('requiredField');
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState('submitting');

    const name = formData.get('name')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const requestType = formData.get('requestType')?.toString() ?? '';
    const details = formData.get('details')?.toString().trim() ?? '';

    const subject = encodeURIComponent(`DSAR — ${requestType}`);
    const body = encodeURIComponent(
      `Data Subject Access Request\n\nName: ${name}\nEmail: ${email}\nRequest Type: ${requestType}\n\nDetails:\n${details}`
    );

    window.location.href = `mailto:hello@lumenshore.com?subject=${subject}&body=${body}`;

    // Show success after brief delay to allow mailto to open
    setTimeout(() => setState('success'), 500);
  }

  const inputClasses =
    'w-full rounded-xl border border-glass-border bg-white/[0.03] px-4 py-3 text-sm text-white/90 placeholder:text-white/30 outline-none transition-colors focus:border-white/20 focus:bg-white/[0.05]';

  return (
    <AnimatePresence mode="wait">
      {state === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease }}
          className="rounded-2xl border border-glass-border bg-white/[0.03] p-8 text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 text-emerald-400"
              aria-hidden
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-white/90">
            {tSuccess('heading')}
          </h3>
          <p className="mb-2 text-sm leading-relaxed text-white/60">
            {tSuccess('p1')}
          </p>
          <p className="mb-4 text-sm leading-relaxed text-white/60">
            {tSuccess('p2')}
          </p>
          <p className="text-xs text-white/40">{tSuccess('reference')}</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-glass-border bg-white/[0.03] p-6 sm:p-8"
        >
          <h2 className="mb-6 text-lg font-semibold text-white/90">
            {t('heading')}
          </h2>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="dsar-name"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                {t('nameLabel')}
              </label>
              <input
                id="dsar-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={t('namePlaceholder')}
                className={inputClasses}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="dsar-email"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                {t('emailLabel')}
              </label>
              <input
                id="dsar-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t('emailPlaceholder')}
                className={inputClasses}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Request Type */}
            <div>
              <label
                htmlFor="dsar-type"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                {t('requestTypeLabel')}
              </label>
              <select
                id="dsar-type"
                name="requestType"
                defaultValue=""
                className={`${inputClasses} cursor-pointer appearance-none`}
              >
                <option value="" disabled>
                  {t('requestTypePlaceholder')}
                </option>
                {REQUEST_TYPES.map((type) => (
                  <option key={type} value={t(type)} className="bg-zinc-900">
                    {t(type)}
                  </option>
                ))}
              </select>
              {errors.requestType && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.requestType}
                </p>
              )}
            </div>

            {/* Details */}
            <div>
              <label
                htmlFor="dsar-details"
                className="mb-1.5 block text-sm font-medium text-white/70"
              >
                {t('detailsLabel')}
              </label>
              <textarea
                id="dsar-details"
                name="details"
                rows={4}
                placeholder={t('detailsPlaceholder')}
                className={`${inputClasses} resize-y`}
              />
              {errors.details && (
                <p className="mt-1 text-xs text-red-400">{errors.details}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={state === 'submitting'}
              className="w-full rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {state === 'submitting' ? t('submitting') : t('submitButton')}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
