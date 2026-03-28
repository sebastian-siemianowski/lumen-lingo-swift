'use client';

import { useCallback, useRef } from 'react';
import { trackHoneypotTriggered } from '@/lib/email-analytics';

// Session-scoped flag — survives re-renders but not page refresh.
// We explicitly do NOT use localStorage/sessionStorage (AC5 from Story 1.3).
let _botDetected = false;

/** Check whether the honeypot has been triggered this session */
export function isBotDetected(): boolean {
  return _botDetected;
}

/** Mark the session as bot-detected (irreversible for this session) */
function flagBot(): void {
  _botDetected = true;
}

/**
 * Reset the bot flag — exported only for testing purposes.
 * @internal
 */
export function _resetBotFlag(): void {
  _botDetected = false;
}

/**
 * EmailHoneypot — a visually hidden honeypot link that looks like a
 * mailto: to scrapers. Positioned off-screen (not display:none) so
 * bots still parse it. If any JS interaction occurs, the session is
 * permanently flagged.
 *
 * Rendered with real HTML in SSR — bots see "trap@lumenlingo.com".
 */
export function EmailHoneypot() {
  const hasTriggered = useRef(false);

  const handleTrap = useCallback((type: 'click' | 'focus') => {
    if (hasTriggered.current) return;
    hasTriggered.current = true;
    flagBot();
    trackHoneypotTriggered(type);
  }, []);

  return (
    <a
      href="mailto:trap@lumenlingo.com"
      aria-hidden="true"
      tabIndex={-1}
      onClick={(e) => {
        e.preventDefault();
        handleTrap('click');
      }}
      onFocus={() => handleTrap('focus')}
      style={{
        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        opacity: 0.01,
      }}
    >
      trap@lumenlingo.com
    </a>
  );
}
