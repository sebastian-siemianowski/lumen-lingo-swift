import { useRef, useEffect, useCallback } from "react";

/**
 * Hook to detect when animations should be paused during collapse transitions
 * Returns a ref that indicates whether animation should be paused
 */
export default function useAnimationPause() {
  const isPausedRef = useRef(false);

  useEffect(() => {
    const checkPause = () => {
      isPausedRef.current = document.body.classList.contains('collapse-animating');
    };
    
    // Initial check
    checkPause();
    
    // Watch for class changes on body
    const observer = new MutationObserver(checkPause);
    observer.observe(document.body, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);

  return isPausedRef;
}