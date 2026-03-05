import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Smooth, delightful collapse/expand using measured height
export default function SmoothCollapse({
  isOpen,
  children,
  durationOpen = 1.5,
  durationClose = 1.0,
  easing = [0.22, 1, 0.36, 1],
  className = "",
  style = {},
}) {
  const contentRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);
  const prevOpenRef = React.useRef(isOpen);
  const isFirstOpen = isOpen && !prevOpenRef.current;
  React.useEffect(() => { prevOpenRef.current = isOpen; }, [isOpen]);

  // Measure content height whenever open state or children change
  const measure = React.useCallback(() => {
    const el = contentRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  React.useEffect(() => {
    measure();
  }, [isOpen, children, measure]);

  // Re-measure on window resize and whenever content's size changes
  React.useEffect(() => {
    // Initial measure
    measure();

    const el = contentRef.current;
    let ro;
    if (el && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => measure());
      ro.observe(el);
    } else {
      // Fallback: measure on next frame
      const id = requestAnimationFrame(measure);
      return () => cancelAnimationFrame(id);
    }

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (ro) ro.disconnect();
    };
  }, [measure]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
          filter: isOpen ? "blur(0px)" : "blur(6px)",
        }}
        transition={{
          height: {
            duration: isOpen ? (isFirstOpen ? durationOpen : 0) : durationClose,
            ease: easing,
          },
          opacity: {
            duration: isOpen ? (isFirstOpen ? Math.max(0.9, durationOpen * 0.85) : 0) : Math.max(0.6, durationClose * 0.7),
            ease: easing,
            delay: isOpen ? (isFirstOpen ? 0.15 : 0) : 0,
          },
          filter: {
            duration: isOpen ? (isFirstOpen ? Math.max(0.8, durationOpen * 0.7) : 0) : Math.max(0.6, durationClose * 0.6),
            ease: easing,
          },
        }}
        transitionEnd={isOpen ? { height: "auto" } : { height: 0 }}
        exit={{ height: 0, opacity: 0, filter: "blur(6px)" }}
        style={{ overflow: isOpen ? "visible" : "hidden", willChange: "height, opacity, filter", ...style }}
        className={className}
      >
        <div ref={contentRef} aria-hidden={!isOpen}>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}