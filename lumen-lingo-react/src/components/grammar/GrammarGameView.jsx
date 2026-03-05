import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { Brain } from "lucide-react";
import GrammarQuestion from "./GrammarQuestion";
import GameComplete from "../shared/GameComplete";
import ExerciseHeader from "../shared/ExerciseHeader";
import GrammarKeyboardHandler from "./GrammarKeyboardHandler";
import { getCategoryDisplayName } from "./categoryUtils";
import { useTranslations } from "../utils/translations";
import { useLanguage } from "../language/LanguageContext";

export default function GrammarGameView({
  currentQuestion,
  setCurrentQuestion,
  score,
  questions,
  hasAnswered,
  isAnswerCorrect,
  correct,
  wrong,
  showComplete,
  currentStreak,
  continuousMode,
  performanceMood,
  categoryKey,
  handleAnswer,
  handleCorrectAnswer,
  handleAnswerSelected,
  resetGame,
  toggleContinuousMode,
  skipToEnd,
  setHasAnswered,
  setIsAnswerCorrect
}) {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);
  const navigate = useNavigate();
  const grammarQuestionRef = useRef(null);

  const progressPercentage = questions.length > 0 
    ? ((currentQuestion + 1) / questions.length) * 100 
    : 0;

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">No questions found for this category</div>
      </div>
    );
  }

  if (showComplete) {
    return (
      <GameComplete
        score={score}
        correct={correct}
        wrong={wrong}
        total={questions.length}
        gameType={t('grammar_challenge')}
        category={getCategoryDisplayName(categoryKey)}
        onPlayAgain={resetGame}
      />
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col p-2 sm:p-6 relative overflow-hidden">
      <GrammarKeyboardHandler
        grammarQuestionRef={grammarQuestionRef}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        setHasAnswered={setHasAnswered}
        setIsAnswerCorrect={setIsAnswerCorrect}
        showComplete={showComplete}
        isLoading={false}
        questionsLength={questions.length}
      />

      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        <ExerciseHeader
          icon={Brain}
          title={t('grammar_challenge')}
          categoryName={getCategoryDisplayName(categoryKey)}
          gradient="from-purple-500 to-pink-400"
          backPath="GrammarCategories"
          currentIndex={currentQuestion}
          totalCount={questions.length}
          score={score}
          onReset={resetGame}
          storageKey="grammarHeaderCollapsed"
          defaultCollapsed={true}
          showProgress={true}
          progressPercentage={progressPercentage}
          correct={correct}
          wrong={wrong}
          currentStreak={currentStreak}
          showContinuousMode={true}
          continuousMode={continuousMode}
          onToggleContinuousMode={toggleContinuousMode}
          onSkipToEnd={skipToEnd}
        />

        <div className="flex-1 flex items-start justify-center pt-2 sm:pt-4">
          <AnimatePresence mode="wait" initial={false}>
            {currentQuestionData && (
              <GrammarQuestion
                ref={grammarQuestionRef}
                key={currentQuestionData.id || currentQuestion}
                question={currentQuestionData}
                onAnswer={handleAnswer}
                onCorrectAnswer={handleCorrectAnswer}
                onAnswerSelected={handleAnswerSelected}
                performanceMood={performanceMood}
                hasAnswered={hasAnswered}
                isAnswerCorrect={isAnswerCorrect}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}