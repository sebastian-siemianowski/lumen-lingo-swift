'use client';

import { getFeatureFlag, type FeatureFlagName } from '@/lib/feature-flags';

/**
 * Client-component hook to read a feature flag.
 * Returns a stable boolean — no re-renders, no subscriptions.
 */
export function useFeatureFlag(name: FeatureFlagName): boolean {
  return getFeatureFlag(name);
}
