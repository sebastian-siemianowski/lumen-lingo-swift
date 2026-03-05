import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Collapse - Ultra-high performance collapsible
 * Uses pure CSS transitions + GPU layers to avoid jank
 * Pauses sibling animations during transition via CSS class on body
 */
export default function Collapse({
  isOpen,
  children,
  className = "",
  noAnimation = false
}) {
  const shouldReduceMotion = useReducedMotion();
  const [height, setHeight] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  // Disable resize animation path (used for desktop tabs)
  if (noAnimation) {
    return (
      <div className={className} style={{ overflow: 'visible', borderRadius: 'inherit' }}>
        <div ref={contentRef} style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
          {children}
        </div>
      </div>
    );
  }

  // Measure content
  const measure = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useLayoutEffect(() => {
    measure();
    if (typeof ResizeObserver !== 'undefined' && contentRef.current) {
      const ro = new ResizeObserver(measure);
      ro.observe(contentRef.current);
      return () => ro.disconnect();
    }
  }, [measure]);

  // Handle animation state - pause background animations during collapse
  useEffect(() => {
    if (shouldReduceMotion) return;
    
    setIsAnimating(true);
    document.body.classList.add('collapse-animating');
    
    // Dispatch custom event for canvas animations to listen to
    window.dispatchEvent(new CustomEvent('collapsePause', { detail: { paused: true } }));
    
    const timer = setTimeout(() => {
      setIsAnimating(false);
      document.body.classList.remove('collapse-animating');
      window.dispatchEvent(new CustomEvent('collapsePause', { detail: { paused: false } }));
    }, 400);
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('collapse-animating');
      window.dispatchEvent(new CustomEvent('collapsePause', { detail: { paused: false } }));
    };
  }, [isOpen, shouldReduceMotion]);

  // Re-measure on open
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(measure);
    }
  }, [isOpen, measure]);

  const duration = shouldReduceMotion ? '0s' : '0.35s';

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        height: isOpen ? height : 0,
        overflow: 'hidden',
        transition: `height ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        contain: 'strict',
        willChange: isAnimating ? 'height' : 'auto',
        pointerEvents: isOpen ? 'auto' : 'none',
        borderRadius: 'inherit'
      }}
    >
      <div 
        ref={contentRef}
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </div>
    </div>
  );
}