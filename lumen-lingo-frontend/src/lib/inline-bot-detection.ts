/**
 * Inline Bot Detection — Lightweight singleton for ProtectedEmail components.
 *
 * Collects passive human signals (mouse, scroll, touch, keyboard, time,
 * pointer type, webdriver) once per page load. Shared across all
 * ProtectedEmail instances to avoid duplicate event listeners.
 *
 * Uses the same signal scoring model as the contact page's useBotDetection
 * hook, but without React lifecycle overhead.
 */

import { BOT_DETECTION_THRESHOLD } from '@/lib/email-config';
import { isBotDetected } from '@/components/contact/email-honeypot';

// ─── Signal weights (same as use-bot-detection.ts) ────────────────
const WEIGHTS = {
  mouseMoved: 15,
  scrollDetected: 15,
  timeOnPage: 15,
  touchInteraction: 15,
  keyboardActivity: 10,
  pointerFine: 10,
  noWebDriver: 10,
  honeypotClean: 10,
} as const;

type SignalKey = keyof typeof WEIGHTS;
type SignalMap = Record<SignalKey, boolean>;

// ─── Singleton state ──────────────────────────────────────────────
let _initialized = false;
let _mountTime = 0;

const _signals: SignalMap = {
  mouseMoved: false,
  scrollDetected: false,
  timeOnPage: false,
  touchInteraction: false,
  keyboardActivity: false,
  pointerFine: false,
  noWebDriver: false,
  honeypotClean: false,
};

// ─── Environment checks ──────────────────────────────────────────

function checkPointerFine(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.matchMedia('(pointer: fine)').matches;
  } catch {
    return false;
  }
}

function checkNoWebDriver(): boolean {
  if (typeof navigator === 'undefined') return false;
  if (navigator.webdriver === true) return false;
  const w = window as unknown as Record<string, unknown>;
  if (w._phantom || w.__nightmare || w.callPhantom) return false;
  return true;
}

// ─── Initialization ──────────────────────────────────────────────

function init(): void {
  if (_initialized || typeof window === 'undefined') return;
  _initialized = true;
  _mountTime = performance.now();

  // Static checks
  if (checkPointerFine()) _signals.pointerFine = true;
  if (checkNoWebDriver()) _signals.noWebDriver = true;
  if (!isBotDetected()) _signals.honeypotClean = true;

  // Mouse movement
  let mouseCount = 0;
  const onMouseMove = () => {
    mouseCount++;
    if (mouseCount >= 3) {
      _signals.mouseMoved = true;
      document.removeEventListener('mousemove', onMouseMove);
    }
  };
  document.addEventListener('mousemove', onMouseMove, { passive: true });

  // Scroll
  const onScroll = () => {
    _signals.scrollDetected = true;
    document.removeEventListener('scroll', onScroll);
  };
  document.addEventListener('scroll', onScroll, { passive: true });

  // Touch
  const onTouch = () => {
    _signals.touchInteraction = true;
    document.removeEventListener('touchstart', onTouch);
  };
  document.addEventListener('touchstart', onTouch, { passive: true });

  // Keyboard
  const onKeyDown = () => {
    _signals.keyboardActivity = true;
    document.removeEventListener('keydown', onKeyDown);
  };
  document.addEventListener('keydown', onKeyDown, { passive: true });
}

// ─── Public API ──────────────────────────────────────────────────

function computeScore(): number {
  // Honeypot override
  if (isBotDetected()) return 0;

  // Refresh time signal
  if (_mountTime > 0 && performance.now() - _mountTime > 3000) {
    _signals.timeOnPage = true;
  }

  // Refresh honeypot
  _signals.honeypotClean = !isBotDetected();

  let score = 0;
  for (const key of Object.keys(WEIGHTS) as SignalKey[]) {
    if (_signals[key]) score += WEIGHTS[key];
  }
  return score;
}

export function isLikelyHuman(): boolean {
  init();
  return computeScore() >= BOT_DETECTION_THRESHOLD;
}

export function getInlineScore(): number {
  init();
  return computeScore();
}

export function ensureInitialized(): void {
  init();
}
