import '@testing-library/jest-dom/vitest';

// Polyfill IntersectionObserver for framer-motion whileInView
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver =
  globalThis.IntersectionObserver ?? (MockIntersectionObserver as unknown as typeof IntersectionObserver);

// Polyfill window.matchMedia for useReducedMotion / useMediaQuery hooks
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}
