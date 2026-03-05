import { useEffect } from "react";

export default function WordBuilderKeyboardHandler({ 
  wordBuilderRef, 
  currentWordIndex, 
  setCurrentWordIndex,
  gameComplete, 
  wordsLength 
}) {
  useEffect(() => {
    if (gameComplete || wordsLength === 0) {
      return;
    }

    const handleKeyDown = (e) => {
      if (gameComplete || wordsLength === 0) {
        return;
      }

      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        return;
      }

      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        if (currentWordIndex >= wordsLength - 1) {
          return;
        }
        if (wordBuilderRef.current) {
          const isComplete = wordBuilderRef.current.isComplete();
          if (isComplete) {
            wordBuilderRef.current.markAsSkipped();
          } else {
            wordBuilderRef.current.autoComplete();
          }
        }
      }
      else if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        if (wordBuilderRef.current) {
          wordBuilderRef.current.checkAnswer();
        }
      }
      else if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        e.stopPropagation();
        if (wordBuilderRef.current) {
          wordBuilderRef.current.undoLastAction();
        }
      }
      else if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        if (wordBuilderRef.current) {
          wordBuilderRef.current.clearAnswer();
        }
      }
      else if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        e.stopPropagation();
        if (wordBuilderRef.current) {
          wordBuilderRef.current.useHint();
        }
      }
      else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        if (currentWordIndex > 0) {
          setCurrentWordIndex(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentWordIndex, gameComplete, wordsLength, wordBuilderRef, setCurrentWordIndex]);

  return null;
}