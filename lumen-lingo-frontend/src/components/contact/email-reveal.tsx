'use client';

/**
 * EmailReveal — Client-Only Email Display
 *
 * This component handles the secure display of the email address.
 * The email is NEVER rendered during SSR — it's assembled from
 * encoded fragments only after client-side human verification.
 *
 * For Story 1.2: This component uses 'use client' directive and
 * only imports the assembler (which contains no raw email strings).
 */

import { useState, useCallback } from 'react';
import { assembleEmail } from '@/lib/email-assembler';

interface EmailRevealProps {
  /** Called when the email is successfully revealed */
  onReveal?: () => void;
  /** Additional CSS class names */
  className?: string;
}

/**
 * Placeholder component shown before the email is revealed.
 * Contains zero email-related text in the DOM.
 */
function EmailPlaceholder({ onRequest }: { onRequest: () => void }) {
  return (
    <button
      onClick={onRequest}
      className="font-mono text-sm text-[--color-foreground-muted] transition-colors hover:text-[--color-foreground-secondary]"
      aria-label="Reveal email address"
    >
      ••••••@••••••••.com
    </button>
  );
}

/**
 * Displays the assembled email after verification.
 * The email exists in memory only — assembled on demand.
 */
function EmailDisplay({ email }: { email: string }) {
  return (
    <span className="font-mono text-sm text-[--color-foreground]">
      {email}
    </span>
  );
}

export function EmailReveal({ onReveal, className }: EmailRevealProps) {
  const [email, setEmail] = useState<string | null>(null);

  const handleReveal = useCallback(() => {
    // Assemble the email from encoded fragments — only on user action
    const assembled = assembleEmail();
    setEmail(assembled);
    onReveal?.();
  }, [onReveal]);

  return (
    <div className={className}>
      {email ? (
        <EmailDisplay email={email} />
      ) : (
        <EmailPlaceholder onRequest={handleReveal} />
      )}
    </div>
  );
}
