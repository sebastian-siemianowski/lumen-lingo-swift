import type { Metadata } from 'next';
import { OfflineContent } from './offline-content';

export const metadata: Metadata = {
  title: "You're Offline",
  robots: { index: false },
};

export default function OfflinePage() {
  return <OfflineContent />;
}
