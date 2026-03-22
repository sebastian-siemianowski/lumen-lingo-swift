import '@testing-library/jest-dom/vitest';

// Polyfill IntersectionObserver for framer-motion whileInView
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.IntersectionObserver =
  globalThis.IntersectionObserver ?? (MockIntersectionObserver as unknown as typeof IntersectionObserver);
