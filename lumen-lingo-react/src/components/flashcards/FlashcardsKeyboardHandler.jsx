import { useEffect } from "react";

export default function FlashcardsKeyboardHandler({ 
  flashCardRef, 
  currentCard, 
  setCurrentCard, 
  gameComplete, 
  loading, 
  flashcardsLength 
}) {
  useEffect(() => {
    if (gameComplete || loading || flashcardsLength === 0) {
      return;
    }

    const handleKeyDown = (e) => {
      if (gameComplete || loading || flashcardsLength === 0) {
        return;
      }

      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        if (flashCardRef.current && flashCardRef.current.isFlipped()) {
          flashCardRef.current.markAsStillLearning();
        } else if (flashCardRef.current) {
          flashCardRef.current.flipCard();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        if (currentCard > 0) {
          setCurrentCard(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentCard, gameComplete, loading, flashcardsLength, flashCardRef, setCurrentCard]);

  return null;
}