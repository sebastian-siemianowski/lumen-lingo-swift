'use client';

import { type ReactNode, useRef, useEffect, useState, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface ParallaxLayerProps {
  children: ReactNode;
  /** Parallax speed: -0.1 (opposite) to 0.1 (with scroll). Default 0.05. */
  speed?: number;
  className?: string;
}

export function ParallaxLayer({ children, speed = 0.05, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const currentY = useRef(0);
  const targetY = useRef(0);
  const rafId = useRef(0);

  // Clamp speed to safe range
  const clampedSpeed = Math.max(-0.1, Math.min(0.1, speed));

  // Detect touch device — halve intensity
  const isTouchRef = useRef(false);
  useEffect(() => {
    isTouchRef.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  // Intersection observer — only calculate when visible
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '50px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  // rAF loop with lerp
  const tick = useCallback(() => {
    if (!ref.current || !isVisible) return;
    const rect = ref.current.getBoundingClientRect();
    const viewportH = window.innerHeight;
    // Normalise: 0 when element enters bottom, 1 when it leaves top
    const progress = 1 - (rect.top + rect.height) / (viewportH + rect.height);
    const effectiveSpeed = isTouchRef.current ? clampedSpeed * 0.5 : clampedSpeed;
    targetY.current = (progress - 0.5) * effectiveSpeed * viewportH;
    // Lerp for smooth interpolation
    currentY.current += (targetY.current - currentY.current) * 0.1;
    ref.current.style.transform = `translateY(${currentY.current.toFixed(2)}px)`;
    rafId.current = requestAnimationFrame(tick);
  }, [isVisible, clampedSpeed]);

  useEffect(() => {
    if (prefersReduced || !isVisible) return;
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [prefersReduced, isVisible, tick]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
