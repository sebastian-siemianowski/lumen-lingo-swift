'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { BOT_DETECTION_THRESHOLD } from '@/lib/email-config';
import { isBotDetected } from '@/components/contact/email-honeypot';
import { trackRateLimited, trackGateBlocked } from '@/lib/email-analytics';

// ─── Signal weights ────────────────────────────────────────────────
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

export type SignalMap = Record<SignalKey, boolean>;

/** Extra environment checks that modulate the noWebDriver signal (Story 3.3) */
export interface EnvironmentResult {
  webdriverClean: boolean;
  noPhantom: boolean;
  hasLanguages: boolean;
  hasPlugins: boolean | null; // null = inapplicable (mobile/Safari)
}

export interface BotDetectionResult {
  score: number;
  signals: SignalMap;
  isHuman: boolean;
  /** Whether the user is rate-limited due to too many failed attempts */
  rateLimited: boolean;
  /** Seconds remaining in the cooldown (0 if not rate-limited) */
  cooldownRemaining: number;
  /** Call this when a reveal attempt fails (hold too short, score too low) */
  recordFailedAttempt: () => void;
  /** Capture a signal snapshot for logging/analytics (capped at 50/session) */
  getSignalSnapshot: () => Record<string, unknown> | null;
}

// ─── Rate limiting constants (Story 3.5) ───────────────────────────
const MAX_ATTEMPTS = 5;
const COOLDOWN_MS = 60_000; // 60 seconds

// ─── Mouse movement ring buffer ────────────────────────────────────
const RING_BUFFER_SIZE = 10;
const COLLINEARITY_TOLERANCE = 2; // px
const SUPERHUMAN_SPEED_MS = 50; // total time threshold

interface MousePosition {
  x: number;
  y: number;
  timestamp: number;
}

/**
 * Fixed-size ring buffer for mouse positions.
 * Overwrites oldest entries once full.
 */
export class MouseRingBuffer {
  private buffer: (MousePosition | null)[];
  private writeIndex = 0;
  private _count = 0;

  constructor(size: number = RING_BUFFER_SIZE) {
    this.buffer = new Array(size).fill(null);
  }

  push(pos: MousePosition): void {
    this.buffer[this.writeIndex] = pos;
    this.writeIndex = (this.writeIndex + 1) % this.buffer.length;
    if (this._count < this.buffer.length) this._count++;
  }

  get count(): number {
    return this._count;
  }

  /** Get all stored positions in chronological order */
  getAll(): MousePosition[] {
    if (this._count < this.buffer.length) {
      return this.buffer.slice(0, this._count) as MousePosition[];
    }
    // Buffer is full — read from writeIndex (oldest) wrapping around
    const result: MousePosition[] = [];
    for (let i = 0; i < this.buffer.length; i++) {
      result.push(this.buffer[(this.writeIndex + i) % this.buffer.length] as MousePosition);
    }
    return result;
  }
}

/**
 * Check if all points are collinear within a tolerance.
 * Uses cross-product method for each consecutive triplet.
 */
export function arePointsCollinear(positions: MousePosition[], tolerance: number = COLLINEARITY_TOLERANCE): boolean {
  if (positions.length < 3) return false;
  for (let i = 0; i < positions.length - 2; i++) {
    const p1 = positions[i]!;
    const p2 = positions[i + 1]!;
    const p3 = positions[i + 2]!;
    const crossProduct = Math.abs(
      (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x),
    );
    if (crossProduct > tolerance) return false;
  }
  return true;
}

/**
 * Check if all movements happened at superhuman speed.
 * Returns true if total time span < threshold.
 */
export function isSuperhumanSpeed(positions: MousePosition[], threshold: number = SUPERHUMAN_SPEED_MS): boolean {
  if (positions.length < 2) return false;
  const totalTime = positions[positions.length - 1]!.timestamp - positions[0]!.timestamp;
  return totalTime < threshold;
}

// ─── Helpers ───────────────────────────────────────────────────────

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
  return navigator.webdriver !== true;
}

/** Check for PhantomJS/Nightmare indicators on window */
function checkNoPhantom(): boolean {
  if (typeof window === 'undefined') return true;
  const w = window as unknown as Record<string, unknown>;
  return !w._phantom && !w.__nightmare && !w.callPhantom;
}

/** Check that browser has language preferences set */
function checkHasLanguages(): boolean {
  if (typeof navigator === 'undefined') return true;
  try {
    return Array.isArray(navigator.languages) && navigator.languages.length > 0;
  } catch {
    return true; // Can't evaluate → assume clean
  }
}

/**
 * Check that browser has plugins (desktop only).
 * Returns null if inapplicable (touch device / plugins API unavailable).
 */
function checkHasPlugins(): boolean | null {
  if (typeof navigator === 'undefined') return null;
  // Skip on touch-only devices (mobile) where plugins are inapplicable
  try {
    const isTouchOnly = window.matchMedia('(pointer: coarse)').matches &&
      !window.matchMedia('(pointer: fine)').matches;
    if (isTouchOnly) return null;
  } catch {
    return null;
  }
  try {
    // navigator.plugins may be undefined in some environments
    if (!navigator.plugins) return null;
    return navigator.plugins.length > 0;
  } catch {
    return null;
  }
}

/**
 * Run all environment checks once and return the result.
 * Used in startCollection for Story 3.3 fingerprinting.
 */
export function evaluateEnvironment(): EnvironmentResult {
  return {
    webdriverClean: checkNoWebDriver(),
    noPhantom: checkNoPhantom(),
    hasLanguages: checkHasLanguages(),
    hasPlugins: checkHasPlugins(),
  };
}

/**
 * Compute the effective weight for the noWebDriver signal based on environment checks.
 * If webdriver is detected, weight is 0 (hard fail).
 * Otherwise, each applicable check gets an equal share of the remaining weight.
 * If some checks are inapplicable (null), their weight share is redistributed.
 * Base weight = WEIGHTS.noWebDriver (10).
 */
export function computeEnvironmentWeight(env: EnvironmentResult): number {
  // Hard fail: webdriver detected → zero the entire signal
  if (!env.webdriverClean) return 0;

  // Remaining checks divide the weight equally among applicable ones
  const softChecks: { passed: boolean; applicable: boolean }[] = [
    { passed: env.noPhantom, applicable: true },
    { passed: env.hasLanguages, applicable: true },
    { passed: env.hasPlugins ?? true, applicable: env.hasPlugins !== null },
  ];

  const applicableChecks = softChecks.filter((c) => c.applicable);
  if (applicableChecks.length === 0) return WEIGHTS.noWebDriver; // All inapplicable → full weight

  // webdriver check passed → start with its share, then add soft checks
  const webdriverShare = WEIGHTS.noWebDriver / (applicableChecks.length + 1);
  const perCheckWeight = webdriverShare; // Equal shares
  let weight = webdriverShare; // webdriver passed

  for (const check of applicableChecks) {
    if (check.passed) weight += perCheckWeight;
  }

  return Math.round(weight);
}

// ─── Cadence analysis (Story 3.4) ──────────────────────────────────
const SUSPICIOUS_SCROLL_MS = 500; // Scroll < 500ms after viewport entry
const ROBOTIC_CADENCE_MS = 100; // All gaps < 100ms → robotic

/**
 * Analyse the cadence of interaction events.
 * Returns a multiplier: 1 for natural, 0.5 for robotic cadence.
 *
 * Robotic: all inter-event gaps < 100ms AND standard deviation is very low.
 * This catches bot scripts that fire events in a tight loop.
 */
export function analyseCadence(timestamps: number[]): number {
  if (timestamps.length < 3) return 1; // Not enough data

  const gaps: number[] = [];
  for (let i = 1; i < timestamps.length; i++) {
    gaps.push(timestamps[i]! - timestamps[i - 1]!);
  }

  // Check if all gaps are suspiciously fast
  const allTooFast = gaps.every((g) => g < ROBOTIC_CADENCE_MS);
  if (!allTooFast) return 1; // At least one natural gap → fine

  // Compute standard deviation of gaps
  const mean = gaps.reduce((a, b) => a + b, 0) / gaps.length;
  const variance = gaps.reduce((sum, g) => sum + (g - mean) ** 2, 0) / gaps.length;
  const stddev = Math.sqrt(variance);

  // Very uniform timing (low stddev relative to mean) → robotic
  if (stddev < 20) return 0.5;

  return 1;
}

// ─── Hook ──────────────────────────────────────────────────────────

/**
 * Passive bot detection engine.
 *
 * Collects behavioural signals from the moment the hook is "started"
 * (when the contact section enters the viewport) and produces a
 * confidence score 0–100. Signal weights are summed; ≥ THRESHOLD → human.
 *
 * @param containerRef - Ref to the container element to observe for viewport entry
 */
export function useBotDetection(
  containerRef: React.RefObject<HTMLElement | null>,
): BotDetectionResult {
  // ── Mutable signal state (avoids re-renders during collection) ───
  const signalsRef = useRef<SignalMap>({
    mouseMoved: false,
    scrollDetected: false,
    timeOnPage: false,
    touchInteraction: false,
    keyboardActivity: false,
    pointerFine: false,
    noWebDriver: false,
    honeypotClean: false,
  });

  // Track whether collection has started (viewport entry)
  const startedRef = useRef(false);
  const mountTimeRef = useRef<number>(0);
  const mousePositionsRef = useRef<number>(0);
  const mouseRingBufferRef = useRef(new MouseRingBuffer());
  const mouseWeightRef = useRef(0); // Variable weight: 0, 7, or 15
  const envWeightRef = useRef(0); // Variable weight from environment fingerprinting
  const scrollWeightRef = useRef<number>(WEIGHTS.scrollDetected); // Variable: 0 or 15 (Story 3.4)
  const eventTimestampsRef = useRef<number[]>([]); // For cadence analysis (Story 3.4)
  const cadenceMultiplierRef = useRef(1); // 1 = natural, 0.5 = robotic
  const envResultRef = useRef<EnvironmentResult | null>(null); // Story 5.2: kept for snapshot

  // Rate limiting (Story 3.5)
  const attemptCountRef = useRef(0);
  const cooldownUntilRef = useRef(0); // timestamp via performance.now()
  const cooldownTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Debounce timer for recalculation
  const recalcTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Exported reactive state ──────────────────────────────────────
  const [scoreResult, setScoreResult] = useState<{
    score: number;
    signals: SignalMap;
    isHuman: boolean;
  }>({
    score: 0,
    signals: { ...signalsRef.current },
    isHuman: false,
  });

  // Rate-limiting reactive state (Story 3.5)
  const [rateLimited, setRateLimited] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // ── Score calculator ─────────────────────────────────────────────
  const recalculateScore = useCallback(() => {
    // Honeypot override — score locked at 0
    if (isBotDetected()) {
      setScoreResult({
        score: 0,
        signals: { ...signalsRef.current, honeypotClean: false },
        isHuman: false,
      });
      return;
    }

    const signals = signalsRef.current;

    // Update cadence multiplier before scoring (Story 3.4)
    cadenceMultiplierRef.current = analyseCadence(eventTimestampsRef.current);

    let score = 0;
    for (const key of Object.keys(WEIGHTS) as SignalKey[]) {
      if (key === 'mouseMoved') {
        // Use variable weight from motion analysis
        if (signals.mouseMoved) {
          score += Math.round(mouseWeightRef.current * cadenceMultiplierRef.current);
        }
      } else if (key === 'noWebDriver') {
        // Use variable weight from environment fingerprinting (Story 3.3)
        if (signals.noWebDriver) {
          score += envWeightRef.current;
        }
      } else if (key === 'scrollDetected') {
        // Use variable weight — suspsicious if scrolled too fast (Story 3.4)
        if (signals.scrollDetected) {
          score += Math.round(scrollWeightRef.current * cadenceMultiplierRef.current);
        }
      } else if (key === 'touchInteraction' || key === 'keyboardActivity') {
        // Interaction signals affected by cadence multiplier
        if (signals[key]) {
          score += Math.round(WEIGHTS[key] * cadenceMultiplierRef.current);
        }
      } else if (signals[key]) {
        score += WEIGHTS[key];
      }
    }

    setScoreResult({
      score,
      signals: { ...signals },
      isHuman: score >= BOT_DETECTION_THRESHOLD,
    });
  }, []);

  // ── Debounced recalc (max once per 500ms) ────────────────────────
  const scheduleRecalc = useCallback(() => {
    if (recalcTimerRef.current) return; // Already scheduled
    recalcTimerRef.current = setTimeout(() => {
      recalcTimerRef.current = null;
      recalculateScore();
    }, 500);
  }, [recalculateScore]);

  // ── Signal setters ───────────────────────────────────────────────
  const markSignal = useCallback(
    (key: SignalKey) => {
      if (signalsRef.current[key]) return; // Already set
      signalsRef.current[key] = true;
      scheduleRecalc();
    },
    [scheduleRecalc],
  );

  // ── Start collection (called when container enters viewport) ─────
  const startCollection = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    mountTimeRef.current = performance.now();

    // Static checks (run once)
    if (checkPointerFine()) markSignal('pointerFine');

    // Environment fingerprinting (Story 3.3) — runs once
    const env = evaluateEnvironment();
    envResultRef.current = env;
    envWeightRef.current = computeEnvironmentWeight(env);
    if (envWeightRef.current > 0) markSignal('noWebDriver');

    if (!isBotDetected()) markSignal('honeypotClean');

    // Recalculate immediately with static signals
    recalculateScore();

    // ── Mouse movement listener (with ring buffer & quality analysis) ─
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionsRef.current += 1;
      const now = performance.now();
      mouseRingBufferRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: now,
      });

      // Record first mouse event for cadence analysis
      if (mousePositionsRef.current === 1) {
        eventTimestampsRef.current.push(now);
      }

      if (mousePositionsRef.current >= 3 && !signalsRef.current.mouseMoved) {
        // Enough positions — evaluate quality
        const positions = mouseRingBufferRef.current.getAll();

        if (isSuperhumanSpeed(positions)) {
          // Superhuman speed — zero the signal
          mouseWeightRef.current = 0;
        } else if (positions.length >= RING_BUFFER_SIZE && arePointsCollinear(positions)) {
          // All collinear — halve the weight
          mouseWeightRef.current = 7;
        } else {
          // Normal human movement
          mouseWeightRef.current = WEIGHTS.mouseMoved; // 15
        }

        signalsRef.current.mouseMoved = true;
        scheduleRecalc();
      }

      // Continue collecting for quality re-evaluation when buffer fills
      if (mouseRingBufferRef.current.count >= RING_BUFFER_SIZE) {
        // Re-evaluate quality with full buffer
        const positions = mouseRingBufferRef.current.getAll();
        const prevWeight = mouseWeightRef.current;

        if (isSuperhumanSpeed(positions)) {
          mouseWeightRef.current = 0;
        } else if (arePointsCollinear(positions)) {
          mouseWeightRef.current = 7;
        } else {
          mouseWeightRef.current = WEIGHTS.mouseMoved;
        }

        if (mouseWeightRef.current !== prevWeight) {
          scheduleRecalc();
        }

        // Stop listening once we have a full buffer evaluation
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ── Scroll listener (with timing check — Story 3.4) ────────────
    const handleScroll = () => {
      const timeSinceViewport = performance.now() - mountTimeRef.current;
      if (timeSinceViewport < SUSPICIOUS_SCROLL_MS) {
        scrollWeightRef.current = 0; // Suspicious immediate scroll
      }
      eventTimestampsRef.current.push(performance.now());
      markSignal('scrollDetected');
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ── Touch listener (with cadence tracking) ───────────────────
    const handleTouch = () => {
      eventTimestampsRef.current.push(performance.now());
      markSignal('touchInteraction');
      window.removeEventListener('touchstart', handleTouch);
    };
    window.addEventListener('touchstart', handleTouch, { passive: true });

    // ── Keyboard listener (with cadence tracking) ────────────────
    const handleKeyDown = () => {
      eventTimestampsRef.current.push(performance.now());
      markSignal('keyboardActivity');
      window.removeEventListener('keydown', handleKeyDown);
    };
    window.addEventListener('keydown', handleKeyDown, { passive: true });

    // ── Time on page (3s timer) ──────────────────────────────────
    const timeTimer = setTimeout(() => {
      markSignal('timeOnPage');
    }, 3000);

    // ── Cleanup function stored for unmount ───────────────────────
    cleanupRef.current = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeTimer);
    };
  }, [markSignal, recalculateScore, scheduleRecalc]);

  const cleanupRef = useRef<(() => void) | null>(null);

  // ── IntersectionObserver — start collecting on viewport entry ────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          startCollection();
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (recalcTimerRef.current) clearTimeout(recalcTimerRef.current);
      if (cleanupRef.current) cleanupRef.current();
      if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current);
    };
  }, [containerRef, startCollection]);

  // ── Rate-limiting: record failed attempt (Story 3.5) ─────────────
  const recordFailedAttempt = useCallback(() => {
    // Ignore if already in cooldown
    if (cooldownUntilRef.current > performance.now()) return;

    attemptCountRef.current += 1;

    if (attemptCountRef.current >= MAX_ATTEMPTS) {
      const until = performance.now() + COOLDOWN_MS;
      cooldownUntilRef.current = until;
      setRateLimited(true);
      setCooldownRemaining(Math.ceil(COOLDOWN_MS / 1000));
      trackRateLimited(attemptCountRef.current);

      // Tick countdown every second
      cooldownTimerRef.current = setInterval(() => {
        const remaining = Math.max(0, Math.ceil((cooldownUntilRef.current - performance.now()) / 1000));
        setCooldownRemaining(remaining);

        if (remaining <= 0) {
          // Cooldown expired — reset
          if (cooldownTimerRef.current) clearInterval(cooldownTimerRef.current);
          cooldownTimerRef.current = null;
          cooldownUntilRef.current = 0;
          attemptCountRef.current = 0;
          setRateLimited(false);
        }
      }, 1000);
    }
  }, []);

  // ── Signal snapshot for logging/analytics (Story 5.2) ────────────
  const snapshotCountRef = useRef(0);
  const MAX_SNAPSHOTS = 50;

  const getSignalSnapshot = useCallback(() => {
    if (snapshotCountRef.current >= MAX_SNAPSHOTS) return null;
    snapshotCountRef.current += 1;

    const dwellMs = startedRef.current ? Math.round(performance.now() - mountTimeRef.current) : 0;
    const cadenceStdDev = (() => {
      const ts = eventTimestampsRef.current;
      if (ts.length < 3) return null;
      const gaps = ts.slice(1).map((t, i) => t - ts[i]!);
      const mean = gaps.reduce((a, b) => a + b, 0) / gaps.length;
      const variance = gaps.reduce((s, g) => s + (g - mean) ** 2, 0) / gaps.length;
      return Math.round(Math.sqrt(variance) * 100) / 100;
    })();

    const env = envResultRef.current;

    return {
      score: scoreResult.score,
      signals: { ...signalsRef.current },
      environment: env ? {
        webdriverClean: env.webdriverClean,
        noPhantom: env.noPhantom,
        hasLanguages: env.hasLanguages,
        hasPlugins: env.hasPlugins,
      } : null,
      timing: { dwellMs, cadenceStdDev },
    };
  }, [scoreResult.score]);

  return {
    ...scoreResult,
    rateLimited,
    cooldownRemaining,
    recordFailedAttempt,
    getSignalSnapshot,
  };
}
