import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Instant scroll to top - no delay, no smooth behavior for faster navigation
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}