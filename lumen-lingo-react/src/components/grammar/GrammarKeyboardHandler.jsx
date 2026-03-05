import { useEffect } from "react";

export default function GrammarKeyboardHandler({ 
  grammarQuestionRef, 
  currentQuestion, 
  setCurrentQuestion,
  setHasAnswered,
  setIsAnswerCorrect,
  showComplete, 
  isLoading, 
  questionsLength 
}) {
  useEffect(() => {
    if (showComplete || isLoading || questionsLength === 0) {
      return;
    }

    const handleKeyDown = (e) => {
      if (showComplete || isLoading || questionsLength === 0) {
        return;
      }

      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        if (grammarQuestionRef.current) {
          if (grammarQuestionRef.current.isAnswered()) {
            grammarQuestionRef.current.triggerNext();
          } else {
            grammarQuestionRef.current.showCorrectAnswer();
          }
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        if (currentQuestion > 0) {
          setCurrentQuestion(prev => prev - 1);
          setHasAnswered(false);
          setIsAnswerCorrect(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentQuestion, showComplete, isLoading, questionsLength, grammarQuestionRef, setCurrentQuestion, setHasAnswered, setIsAnswerCorrect]);

  return null;
}