'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  /** Delay in seconds before counting begins (after entering viewport). */
  delay?: number;
}

export function CountUp({
  target,
  duration = 2,
  suffix = '',
  prefix = '',
  className,
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = useReducedMotion();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (!isInView) return;
    if (delay > 0) {
      const timer = setTimeout(() => motionValue.set(target), delay * 1000);
      return () => clearTimeout(timer);
    }
    motionValue.set(target);
  }, [isInView, motionValue, target, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix]);

  if (prefersReduced) {
    return (
      <span ref={ref} className={className}>
        {prefix}{target}{suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
