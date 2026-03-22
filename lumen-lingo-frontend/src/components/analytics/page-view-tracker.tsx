'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

type TrackablePageView = 'pricing_view';

/**
 * Fire a page-view analytics event once on mount.
 * Drop this anywhere in a server component tree — it's a zero-UI client leaf.
 */
export function PageViewTracker({ event }: { event: TrackablePageView }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackEvent(event);
  }, [event]);

  return null;
}
