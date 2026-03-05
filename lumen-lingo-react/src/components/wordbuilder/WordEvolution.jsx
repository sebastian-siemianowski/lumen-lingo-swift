import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "../theme/DarkModeContext";

// Word Evolution Mode - Neuro-linguistic visualization
// Stage 1: Shadow - silhouette placeholders
// Stage 2: Skeleton - consonant structure appears
// Stage 3: Pulse - correct placements cause word-wide pulse
// Stage 4: Crystallization - final reveal with flowing highlight

export default function WordEvolution({ 
  targetWord, 
  answerSlots, 
  isCorrect,
  enabled = true 
}) {
  const { darkMode } = useDarkMode();
  const [stage, setStage] = useState(1);
  const [pulseActive, setPulseActive] = useState(false);
  const [crystallizing, setCrystallizing] = useState(false);
  const [lastCorrectCount, setLastCorrectCount] = useState(0);

  const word = targetWord?.word || "";
  const consonants = "bcdfghjklmnpqrstvwxyzñçß";
  
  // Calculate how many letters are correctly placed
  const correctCount = answerSlots.reduce((count, slot, idx) => {
    return count + (slot?.char === word[idx] ? 1 : 0);
  }, 0);
  
  const filledCount = answerSlots.filter(Boolean).length;
  const progressRatio = word.length > 0 ? correctCount / word.length : 0;

  // Evolve through stages based on progress
  useEffect(() => {
    if (!enabled || !word) return;
    
    if (isCorrect === true) {
      setStage(4);
      setCrystallizing(true);
    } else if (progressRatio >= 0.6) {
      setStage(3);
    } else if (filledCount >= 2 || progressRatio >= 0.3) {
      setStage(2);
    } else {
      setStage(1);
    }
  }, [progressRatio, filledCount, isCorrect, enabled, word]);

  // Trigger pulse when a new correct letter is placed
  useEffect(() => {
    if (correctCount > lastCorrectCount && stage >= 2) {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 600);
    }
    setLastCorrectCount(correctCount);
  }, [correctCount, stage]);

  if (!enabled || !word) return null;

  return (
    <div className="flex justify-center mb-3 sm:mb-4">
      <div className={`relative px-4 py-2 rounded-xl backdrop-blur-sm border ${
        darkMode 
          ? 'bg-white/5 border-white/10' 
          : 'bg-white/10 border-white/20'
      }`}>
        {/* Stage indicator */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[1, 2, 3, 4].map((s) => (
            <motion.div
              key={s}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                s <= stage
                  ? s === 4 
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400'
                    : 'bg-white/60'
                  : 'bg-white/20'
              }`}
              animate={s === stage ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Evolution display */}
        <div className="flex items-center justify-center gap-0.5 sm:gap-1 relative">
          {/* Global pulse overlay */}
          <AnimatePresence>
            {pulseActive && (
              <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: [0, 0.6, 0], scale: [0.95, 1.05, 1.1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  background: darkMode
                    ? 'radial-gradient(ellipse, rgba(141, 252, 229, 0.3) 0%, transparent 70%)'
                    : 'radial-gradient(ellipse, rgba(52, 211, 153, 0.25) 0%, transparent 70%)'
                }}
              />
            )}
          </AnimatePresence>

          {/* Crystallization sweep */}
          <AnimatePresence>
            {crystallizing && (
              <motion.div
                className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-y-0 w-8"
                  initial={{ left: '-20%' }}
                  animate={{ left: '120%' }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(141,252,229,0.4), transparent)'
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {word.split('').map((char, idx) => {
            const isConsonant = consonants.includes(char.toLowerCase());
            const isPlacedCorrectly = answerSlots[idx]?.char === char;
            const isPlaced = answerSlots[idx] !== null;
            
            // Determine visibility based on stage
            let opacity = 0;
            let blur = 0;
            let showChar = false;
            
            if (stage === 1) {
              // Shadow - just silhouettes
              opacity = 0.15;
              blur = 4;
              showChar = true;
            } else if (stage === 2) {
              // Skeleton - consonants more visible
              if (isConsonant) {
                opacity = isPlacedCorrectly ? 0.7 : 0.35;
                blur = isPlacedCorrectly ? 0 : 2;
              } else {
                opacity = isPlacedCorrectly ? 0.5 : 0.15;
                blur = isPlacedCorrectly ? 0 : 3;
              }
              showChar = true;
            } else if (stage === 3) {
              // Pulse - all visible, correct ones glow
              opacity = isPlacedCorrectly ? 1 : (isPlaced ? 0.4 : 0.25);
              blur = isPlacedCorrectly ? 0 : 1;
              showChar = true;
            } else if (stage === 4) {
              // Crystallization - full reveal
              opacity = 1;
              blur = 0;
              showChar = true;
            }

            return (
              <motion.div
                key={idx}
                className="relative"
                initial={false}
                animate={{
                  scale: isPlacedCorrectly && pulseActive ? [1, 1.15, 1] : 1
                }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
              >
                <motion.span
                  className={`inline-block w-5 h-6 sm:w-7 sm:h-8 text-center text-sm sm:text-lg font-black uppercase`}
                  style={{
                    color: stage === 4 && isPlacedCorrectly 
                      ? '#FFFFFF' 
                      : '#FFFFFF'
                  }}
                  initial={false}
                  animate={{
                    opacity: stage === 4 ? 1 : opacity,
                    filter: `blur(${blur}px)`,
                    textShadow: stage === 4 && isPlacedCorrectly
                      ? '0 0 20px rgba(164, 244, 255, 1), 0 0 40px rgba(141, 252, 229, 0.8), 0 2px 4px rgba(0,0,0,0.3)'
                      : isPlacedCorrectly && stage >= 3
                        ? '0 0 12px rgba(141, 252, 229, 0.8)'
                        : 'none'
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {showChar ? char : ''}
                </motion.span>

                {/* Crystalline highlight on final stage */}
                {stage === 4 && isPlacedCorrectly && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: [0, 1, 0.7], y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <div 
                      className="absolute inset-x-0 bottom-0 h-0.5 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(141, 252, 229, 0.8), transparent)'
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>


      </div>
    </div>
  );
}