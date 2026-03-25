import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// ─── Size variants ─────────────────────────────────────────────────
const sizeStyles = {
  sm: 'py-2 text-sm',
  md: 'py-2.5 text-base',
  lg: 'py-3 text-lg',
} as const;

type InputSize = keyof typeof sizeStyles;

// ─── Shared base classes ───────────────────────────────────────────
const baseClasses =
  'w-full rounded-[--radius-button] border bg-[--color-glass] px-4 text-[--color-foreground] placeholder:text-[--color-foreground-muted]/50 transition-all duration-150 ease-in-out focus:border-[--color-violet] focus:ring-1 focus:ring-[--color-violet]/30 focus:bg-[--color-glass-hover] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50';

function borderClass(error?: boolean) {
  return error
    ? 'border-red-400/50 ring-1 ring-red-400/20'
    : 'border-[--color-glass-border]';
}

// ─── Input ─────────────────────────────────────────────────────────
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize = 'md', error, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(baseClasses, sizeStyles[inputSize], borderClass(error), className)}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

// ─── Textarea ──────────────────────────────────────────────────────
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputSize?: InputSize;
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, inputSize = 'md', error, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        baseClasses,
        sizeStyles[inputSize],
        borderClass(error),
        'min-h-[120px] resize-y',
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = 'Textarea';

// ─── Select ────────────────────────────────────────────────────────
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  inputSize?: InputSize;
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, inputSize = 'md', error, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          baseClasses,
          sizeStyles[inputSize],
          borderClass(error),
          'appearance-none pe-10',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[--color-foreground-muted]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  ),
);
Select.displayName = 'Select';

// ─── Label ─────────────────────────────────────────────────────────
export function Label({
  className,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn('mb-1.5 block text-sm font-medium text-[--color-foreground-secondary]', className)}
      {...props}
    >
      {children}
    </label>
  );
}

// ─── HelperText ────────────────────────────────────────────────────
export function HelperText({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn('mt-1 text-xs text-[--color-foreground-muted]', className)}>
      {children}
    </p>
  );
}

// ─── ErrorText ─────────────────────────────────────────────────────
export function ErrorText({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      role="alert"
      className={cn(
        'mt-1 text-xs text-red-400 animate-in fade-in slide-in-from-bottom-1 duration-100',
        className,
      )}
    >
      {children}
    </p>
  );
}
