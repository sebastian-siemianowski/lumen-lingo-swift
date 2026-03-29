'use client';

import { useEffect, useRef } from 'react';
import { captureUtmParams } from '@/lib/analytics';

/**
 * Captures UTM parameters from the URL on first render and
 * persists them to sessionStorage for campaign attribution.
 * Zero-UI component — renders nothing.
 */
export function UtmCapture() {
  const captured = useRef(false);

  useEffect(() => {
    if (captured.current) return;
    captured.current = true;
    captureUtmParams();
  }, []);

  return null;
}
