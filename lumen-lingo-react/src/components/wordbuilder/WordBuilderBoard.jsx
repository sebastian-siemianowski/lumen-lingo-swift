import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Lightbulb, Trash2, Sparkles, Star, Zap, X, Trophy, ArrowRight, Undo2, Sparkle } from "lucide-react";
import _ from "lodash";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import { useDarkMode } from "../theme/DarkModeContext";
import GradientButton from "../shared/GradientButton";
import useAudioFeedback from "../shared/useAudioFeedback";
import WordEvolution from "./WordEvolution";

const WordBuilderBoard = forwardRef(({ targetWord, onCorrectAnswer, onIncorrectAnswer, onSkippedAnswer }, ref) => {
  const [availableLetters, setAvailableLetters] = useState([]);
  const [answerSlots, setAnswerSlots] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [actionHistory, setActionHistory] = useState([]);
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [wasAutoCompleted, setWasAutoCompleted] = useState(false);
  
  // Kinetic tile states
  const [draggedLetter, setDraggedLetter] = useState(null);
  const [hoveredSlotIndex, setHoveredSlotIndex] = useState(null);
  const [slotRipple, setSlotRipple] = useState(null);
  
  // Idle hint state - triggers once after 10s inactivity
  const [showIdleHint, setShowIdleHint] = useState(false);
  const [idleHintShown, setIdleHintShown] = useState(false);
  const idleTimerRef = React.useRef(null);
  
  // Lumen Hint Glyph - glows when user seems stuck
  const [glyphGlowing, setGlyphGlowing] = useState(false);
  const [hintEmitting, setHintEmitting] = useState(false);
  const glyphTimerRef = React.useRef(null);
  const lastActionTimeRef = React.useRef(Date.now());

  // Cognitive Load Detector - soft supportive glow
  const [cognitiveLoad, setCognitiveLoad] = useState(0); // 0-3 intensity levels
  const cognitiveTimerRef = React.useRef(null);
  const incorrectCountRef = React.useRef(0);
  
  // Predictive scaffolding - predicted slot for dragged letter
  const [predictedSlotIndex, setPredictedSlotIndex] = useState(null);
  
  // Lumen Bar - 7-segment cognitive confidence meter
  const [lumenSegments, setLumenSegments] = useState([false, false, false, false, false, false, false]);

  // Dynamic Focus Mode - activated when user taps a slot or is actively placing
  const [focusMode, setFocusMode] = useState(false);
  const focusTimeoutRef = React.useRef(null);

  // Touch gesture tracking
  const touchStartRef = React.useRef({ x: 0, y: 0, target: null, letter: null, slotIndex: null });

  const { sourceLanguage, targetLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const { playTilePick, playTilePlace, playWordCorrect, playStreakBonus, playLetterCorrect, playLetterWrong, playHintSparkle } = useAudioFeedback();
  
  // Track streak for bonus sound
  const streakRef = React.useRef(0);
  const t = useTranslations(sourceLanguage);

  // Check if letter would be correct in a given slot
  const isLetterCorrectForSlot = (letter, slotIndex) => {
    if (!targetWord || !letter) return false;
    return targetWord.word[slotIndex] === letter.char;
  };

  // Predictive scaffolding - calculate which slot a letter is likely meant for
  // Uses pedagogical difficulty: accented chars, repeated chars, position difficulty
  const getPredictedSlotForLetter = (letter) => {
    if (!targetWord || !letter) return null;
    
    const word = targetWord.word;
    const char = letter.char;
    
    // Find all empty slots where this letter could go
    const emptySlots = answerSlots
      .map((slot, idx) => ({ slot, idx }))
      .filter(({ slot }) => slot === null);
    
    if (emptySlots.length === 0) return null;
    
    // Find the correct position for this letter
    const correctPositions = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === char && answerSlots[i] === null) {
        correctPositions.push(i);
      }
    }
    
    if (correctPositions.length === 0) return null;
    
    // Difficulty scoring for each position
    // Higher score = more likely to be mistaken = needs more scaffolding
    const scoredPositions = correctPositions.map(pos => {
      let difficultyScore = 0;
      
      // Accented/special characters are harder (common learner errors)
      const isAccented = /[áéíóúàèìòùâêîôûäëïöüñçøãõ]/i.test(char);
      if (isAccented) difficultyScore += 4;
      
      // Double letters in sequence are very confusing
      if (word[pos - 1] === char || word[pos + 1] === char) difficultyScore += 5;
      
      // Middle positions are harder than start/end (cognitive load)
      const relativePos = pos / (word.length - 1);
      if (relativePos > 0.3 && relativePos < 0.7) difficultyScore += 3;
      else if (relativePos > 0.15 && relativePos < 0.85) difficultyScore += 1;
      
      // Repeated letters elsewhere in word are confusing
      const charCount = word.split('').filter(c => c === char).length;
      if (charCount > 1) difficultyScore += 3;
      if (charCount > 2) difficultyScore += 2; // Even harder with 3+
      
      // Letters that look/sound similar to others nearby (visual confusion)
      const neighbors = [word[pos - 1], word[pos + 1]].filter(Boolean);
      const similarChars = { 
        'a': 'áàâäãå', 'e': 'éèêëę', 'i': 'íìîïı', 'o': 'óòôöõø', 'u': 'úùûü', 
        'n': 'ñń', 'c': 'çć', 's': 'śšß', 'z': 'źżž', 'l': 'łľ', 'y': 'ýÿ'
      };
      const baseLetter = char.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (neighbors.some(n => {
        const baseNeighbor = n.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return baseNeighbor === baseLetter || similarChars[baseLetter]?.includes(n.toLowerCase());
      })) {
        difficultyScore += 2;
      }
      
      // Vowels in vowel clusters are harder
      const vowels = 'aeiouáéíóúàèìòùâêîôûäëïöüãõ';
      if (vowels.includes(char.toLowerCase())) {
        const leftIsVowel = pos > 0 && vowels.includes(word[pos - 1]?.toLowerCase());
        const rightIsVowel = pos < word.length - 1 && vowels.includes(word[pos + 1]?.toLowerCase());
        if (leftIsVowel || rightIsVowel) difficultyScore += 2;
      }
      
      // Consonant clusters are tricky
      const consonants = 'bcdfghjklmnpqrstvwxyzñçß';
      if (consonants.includes(char.toLowerCase())) {
        let clusterSize = 1;
        let i = pos - 1;
        while (i >= 0 && consonants.includes(word[i]?.toLowerCase())) { clusterSize++; i--; }
        i = pos + 1;
        while (i < word.length && consonants.includes(word[i]?.toLowerCase())) { clusterSize++; i++; }
        if (clusterSize >= 3) difficultyScore += 3;
      }
      
      return { pos, difficultyScore };
    });
    
    // Return the position with highest difficulty (needs most scaffolding)
    scoredPositions.sort((a, b) => b.difficultyScore - a.difficultyScore);
    return scoredPositions[0]?.pos ?? correctPositions[0];
  };

  // Trigger magnetic click ripple effect
  const triggerSlotRipple = (slotIndex) => {
    setSlotRipple(slotIndex);
    setTimeout(() => setSlotRipple(null), 600);
  };

  // Activate focus mode with auto-timeout
  const activateFocusMode = () => {
    setFocusMode(true);
    if (focusTimeoutRef.current) {
      clearTimeout(focusTimeoutRef.current);
    }
    // Auto-exit focus mode after 3s of inactivity
    focusTimeoutRef.current = setTimeout(() => {
      setFocusMode(false);
    }, 3000);
  };

  // Cleanup focus timeout
  useEffect(() => {
    return () => {
      if (focusTimeoutRef.current) {
        clearTimeout(focusTimeoutRef.current);
      }
    };
  }, []);

  // Touch gesture handlers for mobile swipes
  const handleTouchStart = (e, letter = null, slotIndex = null) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      target: e.currentTarget,
      letter,
      slotIndex
    };
  };

  const handleTouchEnd = (e, isSlot = false) => {
    const touch = e.changedTouches[0];
    const { x: startX, y: startY, letter, slotIndex } = touchStartRef.current;

    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    // Minimum swipe distance threshold
    const minSwipe = 40;

    // Vertical swipe detection (must be more vertical than horizontal)
    if (absY > minSwipe && absY > absX * 1.5) {
      if (deltaY < 0 && !isSlot && letter) {
        // Swipe UP on letter bank tile → auto-place into next slot
        e.preventDefault();
        handleLetterClick(letter);
      } else if (deltaY > 0 && isSlot && slotIndex !== null) {
        // Swipe DOWN on placed letter → return to bank
        e.preventDefault();
        handleSlotClick(slotIndex);
      }
    }

    // Reset
    touchStartRef.current = { x: 0, y: 0, target: null, letter: null, slotIndex: null };
  };

  // Calculate Lumen Bar segments based on current answer state (7 segments)
  const calculateLumenSegments = (slots) => {
    if (!targetWord || !targetWord.word) return [false, false, false, false, false, false, false];

    const word = targetWord.word;
    const placedLetters = slots.filter(Boolean);
    const placedChars = placedLetters.map(l => l?.char);
    const vowels = 'aeiouáéíóúàèìòùâêîôûäëïöüãõ';
    const accentRegex = /[áéíóúàèìòùâêîôûäëïöüñçøãõ]/i;

    // Count correct positions
    let correctPositions = 0;
    slots.forEach((slot, idx) => {
      if (slot && slot.char === word[idx]) correctPositions++;
    });

    // Segment 1: At least 1 letter placed correctly
    const seg1 = correctPositions >= 1;

    // Segment 2: First OR last letter correct
    const firstCorrect = slots[0]?.char === word[0];
    const lastCorrect = slots[word.length - 1]?.char === word[word.length - 1];
    const seg2 = firstCorrect || lastCorrect;

    // Segment 3: Vowel/consonant pattern matches (>40% vowels in correct type positions)
    let vowelTypeMatches = 0;
    let vowelPositions = 0;
    word.split('').forEach((c, i) => {
      const isTargetVowel = vowels.includes(c.toLowerCase());
      if (isTargetVowel) {
        vowelPositions++;
        if (slots[i] && vowels.includes(slots[i].char.toLowerCase())) {
          vowelTypeMatches++;
        }
      }
    });
    const seg3 = vowelPositions > 0 ? (vowelTypeMatches / vowelPositions) >= 0.4 : correctPositions >= 2;

    // Segment 4: Word skeleton pattern (consonant frame matches >50%)
    let consonantMatches = 0;
    let consonantPositions = 0;
    word.split('').forEach((c, i) => {
      if (!vowels.includes(c.toLowerCase())) {
        consonantPositions++;
        if (slots[i]?.char === c) consonantMatches++;
      }
    });
    const seg4 = consonantPositions > 0 ? (consonantMatches / consonantPositions) >= 0.5 : correctPositions >= 2;

    // Segment 5: Accent/special characters placed correctly
    const targetAccents = word.split('').map((c, i) => ({ char: c, idx: i })).filter(x => accentRegex.test(x.char));
    let seg5 = false;
    if (targetAccents.length > 0) {
      seg5 = targetAccents.some(a => slots[a.idx]?.char === a.char);
    } else {
      // No accents - check middle section correct
      const midIdx = Math.floor(word.length / 2);
      seg5 = slots[midIdx]?.char === word[midIdx];
    }

    // Segment 6: Letter ordering correct (>60% in right positions)
    const seg6 = placedLetters.length > 0 && (correctPositions / word.length) >= 0.6;

    // Segment 7: All letters correct (100% match)
    const seg7 = correctPositions === word.length && placedLetters.length === word.length;

    return [seg1, seg2, seg3, seg4, seg5, seg6, seg7];
  };

  // Update Lumen Bar whenever answer slots change
  useEffect(() => {
    if (isCorrect === null) {
      setLumenSegments(calculateLumenSegments(answerSlots));
    }
  }, [answerSlots, isCorrect, targetWord]);

  useEffect(() => {
    if (!targetWord || !targetWord.word) return;
    
    const letters = targetWord.word.split('').map((char, i) => ({ 
      id: `l-${i}`, 
      char,
      originalIndex: i 
    }));
    setAvailableLetters(_.shuffle(letters));
    setAnswerSlots(Array(targetWord.word.length).fill(null));
    setIsCorrect(null);
    setShowHint(false);
    setHintsUsed(0);
    setActionHistory([]);
    setActiveSlotIndex(0);
    setShowParticles(false);
    setWasAutoCompleted(false);
    setShowIdleHint(false);
    setIdleHintShown(false);
    setGlyphGlowing(false);
    setCognitiveLoad(0);
    incorrectCountRef.current = 0;
    }, [targetWord]);

  useEffect(() => {
    const nextEmpty = answerSlots.findIndex(slot => slot === null);
    setActiveSlotIndex(nextEmpty === -1 ? -1 : nextEmpty);
  }, [answerSlots]);

  // Idle hint timer - triggers once after 10s of no action
  useEffect(() => {
    if (isCorrect !== null || idleHintShown || availableLetters.length === 0) return;
    
    // Reset timer on any slot change
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    
    idleTimerRef.current = setTimeout(() => {
      if (!idleHintShown) {
        setShowIdleHint(true);
        setIdleHintShown(true);
        // Auto-hide after 2s
        setTimeout(() => setShowIdleHint(false), 2000);
      }
    }, 10000);
    
    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [answerSlots, isCorrect, idleHintShown, availableLetters.length]);

  // Lumen Hint Glyph - starts glowing after 6s of inactivity
  useEffect(() => {
    if (isCorrect !== null || availableLetters.length === 0) {
      setGlyphGlowing(false);
      return;
    }

    lastActionTimeRef.current = Date.now();
    setGlyphGlowing(false);

    if (glyphTimerRef.current) {
      clearTimeout(glyphTimerRef.current);
    }

    glyphTimerRef.current = setTimeout(() => {
      setGlyphGlowing(true);
    }, 6000);

    return () => {
      if (glyphTimerRef.current) {
        clearTimeout(glyphTimerRef.current);
      }
    };
  }, [answerSlots, isCorrect, availableLetters.length]);

  // Cognitive Load Detector - 2.8s hesitation triggers supportive glow
  // Only resets when game ends or all letters placed, NOT on regular actions
  useEffect(() => {
    if (isCorrect !== null || availableLetters.length === 0) {
      setCognitiveLoad(0);
      if (cognitiveTimerRef.current) {
        clearTimeout(cognitiveTimerRef.current);
      }
      return;
    }

    // If already glowing, don't reset - let it persist
    if (cognitiveLoad > 0) return;

    if (cognitiveTimerRef.current) {
      clearTimeout(cognitiveTimerRef.current);
    }

    // After 2.8s hesitation, set cognitive load to 1 (triggers the glow)
    cognitiveTimerRef.current = setTimeout(() => {
      setCognitiveLoad(1);
    }, 2800);

    return () => {
      if (cognitiveTimerRef.current) {
        clearTimeout(cognitiveTimerRef.current);
      }
    };
  }, [answerSlots, isCorrect, availableLetters.length, cognitiveLoad]);

  const handleLetterClick = (letter) => {
    if (isCorrect !== null) return;

    const emptySlotIndex = answerSlots.findIndex(slot => slot === null);
    if (emptySlotIndex === -1) return;

    // Activate focus mode
    activateFocusMode();

    // Play tile pick sound
    playTilePick();

    setActionHistory(prev => [...prev, { type: 'add', letter, slotIndex: emptySlotIndex }]);

    const newAnswerSlots = [...answerSlots];
    newAnswerSlots[emptySlotIndex] = letter;
    setAnswerSlots(newAnswerSlots);

    setAvailableLetters(prev => prev.filter(l => l.id !== letter.id));
    
    // Trigger magnetic click ripple
    triggerSlotRipple(emptySlotIndex);
    
    // Check if letter is correct for this slot and play appropriate feedback
    const isCorrectPlacement = targetWord && targetWord.word[emptySlotIndex] === letter.char;
    
    if (isCorrectPlacement) {
      // Correct: soft "tock" sound
      setTimeout(() => playLetterCorrect(), 30);
    } else {
      // Wrong: soft "puff" sound
      setTimeout(() => playLetterWrong(), 30);
    }
  };

  const handleSlotClick = (index) => {
    if (isCorrect !== null) return;

    // Activate focus mode on any slot interaction
    activateFocusMode();

    const letter = answerSlots[index];
    if (!letter) return;

    setActionHistory(prev => [...prev, { type: 'remove', letter, slotIndex: index }]);

    const newAnswerSlots = [...answerSlots];
    newAnswerSlots[index] = null;
    setAnswerSlots(newAnswerSlots);

    setAvailableLetters(prev => [...prev, letter].sort((a, b) => a.originalIndex - b.originalIndex));
  };

  const undoLastAction = () => {
    if (actionHistory.length === 0 || isCorrect !== null) return;

    const lastAction = actionHistory[actionHistory.length - 1];

    if (lastAction.type === 'add') {
      const newAnswerSlots = [...answerSlots];
      newAnswerSlots[lastAction.slotIndex] = null;
      setAnswerSlots(newAnswerSlots);
      setAvailableLetters(prev => [...prev, lastAction.letter].sort((a, b) => a.originalIndex - b.originalIndex));
    } else if (lastAction.type === 'remove') {
      const newAnswerSlots = [...answerSlots];
      newAnswerSlots[lastAction.slotIndex] = lastAction.letter;
      setAnswerSlots(newAnswerSlots);
      setAvailableLetters(prev => prev.filter(l => l.id !== lastAction.letter.id));
    }

    setActionHistory(prev => prev.slice(0, -1));
  };

  const clearAnswer = () => {
    if (isCorrect !== null) return;
    setActionHistory([]);
    setAvailableLetters(prev => [...prev, ...answerSlots.filter(Boolean)].sort((a, b) => a.originalIndex - b.originalIndex));
    setAnswerSlots(Array(targetWord.word.length).fill(null));
    setHintsUsed(0);
    setWasAutoCompleted(false);
  };

  const useHint = () => {
    if (isCorrect !== null || availableLetters.length === 0) return;

    const nextEmptyIndex = answerSlots.findIndex(slot => slot === null);
    if (nextEmptyIndex === -1) return;

    const correctLetter = targetWord.word[nextEmptyIndex];
    const letterToPlace = availableLetters.find(l => l.char === correctLetter);
    
    if (letterToPlace) {
      // Trigger knowledge emission animation
      setHintEmitting(true);
      setTimeout(() => setHintEmitting(false), 400);
      
      // Play whisper sparkle sound
      playHintSparkle();
      
      handleLetterClick(letterToPlace);
      setHintsUsed(prev => prev + 1);
    }
  };

  // NEW: Auto-complete all remaining letters
  const autoComplete = () => {
    if (isCorrect !== null || availableLetters.length === 0) return;
    
    const newAnswerSlots = [...answerSlots];
    const remainingLetters = [...availableLetters];
    
    // Fill all empty slots with correct letters
    for (let i = 0; i < newAnswerSlots.length; i++) {
      if (newAnswerSlots[i] === null) {
        const correctChar = targetWord.word[i];
        const letterToPlace = remainingLetters.find(l => l.char === correctChar);
        if (letterToPlace) {
          newAnswerSlots[i] = letterToPlace;
          const idx = remainingLetters.findIndex(l => l.id === letterToPlace.id);
          if (idx !== -1) {
            remainingLetters.splice(idx, 1);
          }
        }
      }
    }
    
    setAnswerSlots(newAnswerSlots);
    setAvailableLetters(remainingLetters);
    setWasAutoCompleted(true);
  };

  // NEW: Check if answer is complete
  const isComplete = () => {
    return answerSlots.every(slot => slot !== null);
  };

  // NEW: Mark as skipped and move to next
  const markAsSkipped = () => {
    if (isCorrect !== null) return;
    
    // If was auto-completed, treat as wrong answer
    if (wasAutoCompleted) {
      onSkippedAnswer();
    }
  };

  const checkAnswer = () => {
    const userAnswer = answerSlots.map(l => l?.char || '').join('');
    
    // If was auto-completed, it's automatically wrong
    if (wasAutoCompleted) {
      setIsCorrect(false);
      onIncorrectAnswer();
      setTimeout(() => {
        onSkippedAnswer(); // Move to next word
      }, 1500);
      return;
    }
    
    if (userAnswer === targetWord.word) {
      setIsCorrect(true);
      setShowParticles(true);
      
      // Increment streak and play appropriate sound
      streakRef.current += 1;
      if (streakRef.current >= 3) {
        // Play streak bonus for 3+ correct in a row
        playStreakBonus();
      } else {
        // Play regular correct word sound
        playWordCorrect();
      }
      
      setTimeout(() => {
        onCorrectAnswer();
      }, 50);
      
      setTimeout(() => {
        setShowParticles(false);
      }, 1000);
    } else {
      setIsCorrect(false);
      streakRef.current = 0; // Reset streak on wrong answer
      incorrectCountRef.current += 1;
      // 2+ incorrect placements triggers cognitive load
      if (incorrectCountRef.current >= 2) {
        setCognitiveLoad(prev => Math.min(3, prev + 1));
      }
      onIncorrectAnswer();
      setTimeout(() => {
        setIsCorrect(null);
        setAvailableLetters(prev => [...prev, ...answerSlots.filter(Boolean)].sort((a, b) => a.originalIndex - b.originalIndex));
        setAnswerSlots(Array(targetWord.word.length).fill(null));
        setActionHistory([]);
        setHintsUsed(0);
        setWasAutoCompleted(false);
      }, 1500);
    }
  };

  // Expose methods to parent via ref
  useImperativeHandle(ref, () => ({
    checkAnswer,
    undoLastAction,
    clearAnswer,
    useHint,
    autoComplete,
    isComplete,
    markAsSkipped
  }));

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isCorrect !== null) return;

      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        undoLastAction();
        return;
      }

      if (availableLetters.length > 0) {
        const letter = availableLetters.find(l => 
          l.char.toLowerCase() === e.key.toLowerCase()
        );
        if (letter) {
          handleLetterClick(letter);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [availableLetters, isCorrect, actionHistory, answerSlots]);

  if (!targetWord || !targetWord.word) {
    return (
      <div className="text-white text-center">
        {t('loading')}...
      </div>
    );
  }

  const isFilled = answerSlots.every(slot => slot !== null);

  return (
    <motion.div
      key={targetWord?.word}
      initial={{ opacity: 0.3, y: 8, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
      transition={{ 
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.3 },
        filter: { duration: 0.15 },
        y: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      className="rounded-2xl sm:rounded-3xl border p-2 sm:p-6 w-[94vw] sm:w-[90vw] max-w-4xl mx-auto relative overflow-hidden"
      style={{
        background: darkMode 
          ? 'rgba(255, 255, 255, 0.08)' 
          : 'rgba(255, 255, 255, 0.10)',
        border: darkMode 
          ? '1px solid rgba(168, 85, 247, 0.25)' 
          : '1px solid rgba(255, 255, 255, 0.28)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        boxShadow: darkMode 
          ? '0 6px 24px rgba(0, 0, 0, 0.15), inset 0 1px 5px rgba(255, 255, 255, 0.12)'
          : '0 6px 24px rgba(0, 0, 0, 0.10), inset 0 1px 5px rgba(255, 255, 255, 0.18)'
      }}
    >
      {/* Crystal casing inner glow */}
      <div 
        className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
        style={{
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.05)'
        }}
      />
      
      {/* Light Source: Top-left warm highlight */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-1/2 rounded-tl-2xl sm:rounded-tl-3xl pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at 15% 15%, rgba(251, 191, 36, 0.08) 0%, rgba(251, 146, 60, 0.04) 40%, transparent 70%)'
            : 'radial-gradient(ellipse at 15% 15%, rgba(255, 255, 255, 0.25) 0%, rgba(251, 191, 36, 0.08) 40%, transparent 70%)'
        }}
      />
      
      {/* Light Source: Bottom-right cool highlight */}
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-br-2xl sm:rounded-br-3xl pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at 85% 85%, rgba(139, 92, 246, 0.12) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)'
            : 'radial-gradient(ellipse at 85% 85%, rgba(147, 197, 253, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)'
        }}
      />

      {/* Dreamy gradient overlay for dark mode */}
      {darkMode && (
        <div 
          className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(192, 132, 252, 0.1) 100%)'
          }}
        />
      )}

      {/* Typography hierarchy - Balanced weight system (tiles don't overpower buttons) */}
      {/* Animation Cohesion System - Apple glass spring unified timing */}
      <style jsx>{`
        .letter-tile {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-feature-settings: 'ss01' on, 'ss02' on;
          -webkit-font-smoothing: antialiased;
        }
        
        /* Unified transition timing - Flow, not excitement */
        .flow-transition {
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }
        .title-word {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          font-weight: 800;
          letter-spacing: 0.01em;
        }
        .subtext {
          font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          font-weight: 400;
          letter-spacing: 0.02em;
        }
      `}</style>

      {/* Lumen Confetti v2 - Premium Reward Burst */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl z-10">
          {/* Class 1: Core burst particles - soft fade-in */}
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = (i / 14) * Math.PI * 2;
            const radius = 80 + Math.random() * 100;
            const colors = ['#10B981', '#34D399', '#6EE7B7', '#8DFCE5'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = 6 + Math.random() * 5;
            
            return (
              <motion.div
                key={`burst-${i}`}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  width: size,
                  height: size,
                  willChange: 'transform, opacity'
                }}
                initial={{ 
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{ 
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius - 60,
                  scale: [0, 0.5, 1.2, 1, 0],
                  opacity: [0, 0.3, 1, 0.8, 0],
                }}
                transition={{ 
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                  times: [0, 0.1, 0.3, 0.7, 1],
                  delay: i * 0.02
                }}
              >
                <Star 
                  style={{ 
                    color, 
                    filter: `drop-shadow(0 0 ${size * 2}px ${color})` 
                  }}
                  fill={color}
                />
              </motion.div>
            );
          })}
          
          {/* Class 2: Star streaks - diagonal movement */}
          {Array.from({ length: 8 }).map((_, i) => {
            const startX = (Math.random() - 0.5) * 100;
            const startY = (Math.random() - 0.5) * 80;
            const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5; // ~45° diagonal
            const distance = 120 + Math.random() * 80;
            const colors = ['#8DFCE5', '#34D399', '#A7F3D0'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = 4 + Math.random() * 3;
            
            return (
              <motion.div
                key={`streak-${i}`}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  willChange: 'transform, opacity'
                }}
                initial={{ 
                  x: startX,
                  y: startY,
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{ 
                  x: startX + Math.cos(angle) * distance * (i % 2 === 0 ? 1 : -1),
                  y: startY - Math.sin(angle) * distance,
                  opacity: [0, 0.4, 0.9, 0.6, 0],
                  scale: [0.5, 1, 1.2, 0.8, 0],
                }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + i * 0.05
                }}
              >
                <div 
                  className="rounded-full"
                  style={{
                    width: size,
                    height: size * 3,
                    background: `linear-gradient(180deg, ${color} 0%, transparent 100%)`,
                    filter: `blur(1px) drop-shadow(0 0 ${size}px ${color})`,
                    transform: `rotate(${(angle * 180 / Math.PI) * (i % 2 === 0 ? 1 : -1)}deg)`
                  }}
                />
              </motion.div>
            );
          })}
          
          {/* Class 3: Slow drifting particles - linger 3-5s */}
          {Array.from({ length: 4 }).map((_, i) => {
            const startX = (Math.random() - 0.5) * 150;
            const startY = 20 + Math.random() * 60;
            const colors = ['#6EE7B7', '#8DFCE5', '#A7F3D0'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = 8 + Math.random() * 6;
            const duration = 3 + Math.random() * 2; // 3-5 seconds
            
            return (
              <motion.div
                key={`drift-${i}`}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  width: size,
                  height: size,
                  willChange: 'transform, opacity'
                }}
                initial={{ 
                  x: startX,
                  y: startY,
                  opacity: 0,
                  scale: 0,
                  rotate: 0
                }}
                animate={{ 
                  x: [startX, startX + (Math.random() - 0.5) * 40, startX + (Math.random() - 0.5) * 30],
                  y: [startY, startY - 80 - Math.random() * 40, startY - 150 - Math.random() * 50],
                  opacity: [0, 0.2, 0.7, 0.5, 0],
                  scale: [0, 0.8, 1, 0.9, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: duration,
                  ease: "easeOut",
                  times: [0, 0.15, 0.4, 0.7, 1],
                  delay: 0.3 + i * 0.15
                }}
              >
                <Sparkles 
                  style={{ 
                    color, 
                    filter: `drop-shadow(0 0 ${size}px ${color})` 
                  }}
                  fill={color}
                />
              </motion.div>
            );
          })}
          
          {/* Soft central glow - fade-in */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ willChange: 'transform, opacity' }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.3, 0.6, 0.4, 0], scale: [0.6, 1.2, 1.8, 2.2, 2.4] }}
            transition={{ duration: 1.5, ease: "easeOut", times: [0, 0.2, 0.5, 0.8, 1] }}
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-emerald-400/30 to-teal-400/30 blur-3xl"></div>
          </motion.div>
        </div>
      )}

      {/* Wrong Answer - Fiery Sunset Orange */}
      <AnimatePresence>
        {isCorrect === false && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl overflow-hidden z-10"
              style={{ willChange: 'opacity' }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.5) 0%, rgba(249, 115, 22, 0.55) 30%, rgba(234, 88, 12, 0.45) 60%, rgba(253, 186, 116, 0.35) 100%)',
                  willChange: 'opacity'
                }}
                animate={{
                  opacity: [0, 1, 0.9, 0.7, 0]
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl"
                style={{ willChange: 'box-shadow' }}
                animate={{
                  boxShadow: [
                    '0 0 0 0px rgba(249, 115, 22, 0)',
                    '0 0 0 4px rgba(251, 146, 60, 0.6)',
                    '0 0 0 8px rgba(234, 88, 12, 0.4)',
                    '0 0 0 0px rgba(251, 146, 60, 0)',
                  ]
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </motion.div>

            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl z-10">
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 80 + Math.random() * 100;
                const sunsetColors = ['#fb923c', '#f97316', '#ea580c', '#fdba74'];
                const color = sunsetColors[Math.floor(Math.random() * sunsetColors.length)];
                const size = 6 + Math.random() * 8;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: size,
                      height: size,
                      willChange: 'transform, opacity'
                    }}
                    initial={{ 
                      opacity: 0,
                      scale: 0,
                      x: 0,
                      y: 0
                    }}
                    animate={{ 
                      opacity: [0, 1, 0.8, 0],
                      scale: [0, 1.4, 1.1, 0],
                      x: Math.cos(angle) * radius,
                      y: Math.sin(angle) * radius - 60,
                      rotate: Math.random() * 360
                    }}
                    transition={{ 
                      duration: 1,
                      delay: i * 0.02,
                      ease: [0.16, 1, 0.3, 1],
                      times: [0, 0.3, 0.7, 1]
                    }}
                  >
                    {Math.random() > 0.5 ? (
                      <Sparkles
                        style={{
                          color,
                          filter: `drop-shadow(0 0 ${size * 2}px ${color})`
                        }}
                        fill={color}
                      />
                    ) : (
                      <div
                        className="w-full h-full rounded-full"
                        style={{
                          backgroundColor: color,
                          boxShadow: `0 0 ${size * 3}px ${color}`
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div
              className="absolute inset-0 z-[5]"
              style={{ willChange: 'transform' }}
              animate={{
                x: [0, -4, 4, -3, 3, 0]
              }}
              transition={{ duration: 0.4, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Lumen Bar + Hint Orb inline row - TOP (aligned to container edges) */}
      <div className="flex items-center justify-between gap-1.5 sm:gap-3 mb-0.5 sm:mb-2 px-0.5 sm:px-2">
          {/* Spacer for left alignment */}
          <div className="flex-1" />
          
          {/* Lumen Bar - inline compact (centered) */}
          <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full backdrop-blur-md border ${
            darkMode 
              ? 'bg-white/8 border-white/20' 
              : 'bg-white/15 border-white/30'
          }`}
          style={{
            boxShadow: lumenSegments.filter(Boolean).length >= 5
              ? '0 0 16px rgba(197, 246, 199, 0.25)'
              : lumenSegments.filter(Boolean).length >= 3
                ? '0 0 12px rgba(255, 232, 154, 0.2)'
                : 'none'
          }}
          >
            <Zap className={`w-3 h-3 mr-0.5 transition-all duration-500 ${
              lumenSegments.filter(Boolean).length >= 5
                ? 'text-[#C5F6C7] drop-shadow-[0_0_4px_rgba(197,246,199,0.8)]'
                : lumenSegments.filter(Boolean).length >= 3
                  ? 'text-[#FFE89A] drop-shadow-[0_0_4px_rgba(255,232,154,0.8)]'
                  : darkMode ? 'text-white/40' : 'text-white/50'
            }`} />

            {lumenSegments.map((_, idx) => {
              const activeCount = lumenSegments.filter(Boolean).length;
              const isActive = idx < activeCount;
              const getSegmentColor = () => {
                if (!isActive) return null;
                if (activeCount <= 2) return '#FFD2D2';
                if (activeCount <= 4) return '#FFE89A';
                if (activeCount <= 6) return '#C5F6C7';
                return '#A4F4FF';
              };
              const color = getSegmentColor();

              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ scale: isActive ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                >
                  <div 
                    className={`w-3 h-1.5 rounded-full transition-all ${
                      isActive ? '' : darkMode ? 'bg-white/15' : 'bg-white/20'
                    }`}
                    style={isActive ? {
                      background: color,
                      boxShadow: `0 0 6px ${color}99`,
                      transitionDuration: '140ms'
                    } : { transitionDuration: '140ms' }}
                  />
                </motion.div>
              );
            })}

            {lumenSegments.every(Boolean) && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ml-0.5"
              >
                <Sparkles className="w-3 h-3 text-[#A4F4FF] drop-shadow-[0_0_6px_rgba(164,244,255,0.9)]" />
              </motion.div>
            )}
          </div>

          {/* Hint Orb - compact inline with premium positioning */}
          <motion.button
            onClick={useHint}
            disabled={availableLetters.length === 0 || isCorrect !== null}
            className={`relative p-2 rounded-full ${
              availableLetters.length === 0 || isCorrect !== null
                ? 'opacity-30 cursor-not-allowed'
                : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(200, 148, 230, 0.88) 0%, rgba(230, 108, 184, 0.88) 100%)',
              boxShadow: glyphGlowing
                ? '0 0 44px rgba(200, 148, 230, 0.35), inset 0 0 20px rgba(255, 255, 255, 0.15), inset 0 0 1px rgba(255, 255, 255, 0.4)'
                : '0 4px 24px rgba(200, 148, 230, 0.22), inset 0 0 14px rgba(255, 255, 255, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              filter: 'blur(0px)',
              marginLeft: '8px',
              marginTop: '3px',
            }}
            whileHover={{ 
              scale: availableLetters.length > 0 && isCorrect === null ? 1.06 : 1,
              boxShadow: availableLetters.length > 0 && isCorrect === null 
                ? '0 0 54px rgba(200, 148, 230, 0.42), inset 0 0 25px rgba(255, 255, 255, 0.18), inset 0 0 1px rgba(255, 255, 255, 0.5)'
                : undefined,
              transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
            }}
            whileTap={{ 
              scale: availableLetters.length > 0 && isCorrect === null ? 0.96 : 1,
              transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
            }}
            animate={availableLetters.length > 0 && isCorrect === null && !glyphGlowing ? {
              y: [0, -1.5, 0, 1.5, 0]
            } : {}}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            {/* Gentle Insight Bloom */}
            <AnimatePresence>
              {hintEmitting && (
                <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{ inset: '-6px' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: [0, 0.12, 0], scale: [0.9, 1.25, 1.35] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, #FFE6FF 0%, transparent 70%)' }} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* External sparkle */}
            <AnimatePresence>
              {hintEmitting && (
                <motion.div
                  className="absolute pointer-events-none"
                  style={{ top: '-1px', right: '-4px' }}
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 0.4, 0], y: [0, -3, -5], scale: [0.5, 1, 0.8] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Sparkle className="w-1.5 h-1.5" style={{ color: '#FFE6FF', filter: 'drop-shadow(0 0 2px rgba(255, 230, 255, 0.6))' }} strokeWidth={2} fill="#FFE6FF" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              animate={hintEmitting 
                ? { scale: [1, 1.03, 1] }
                : availableLetters.length > 0 
                  ? { scale: glyphGlowing ? [1, 1.04, 1] : 1 }
                  : { scale: 1 }
              }
              transition={hintEmitting 
                ? { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
                : { duration: 4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <Lightbulb 
                className="w-4 h-4 sm:w-5 sm:h-5 relative z-10"
                style={{
                  color: '#FFFFFF',
                  opacity: availableLetters.length === 0 ? 0.6 : 1,
                  filter: availableLetters.length === 0 ? 'none' : 'drop-shadow(0 0 4px rgba(255, 224, 255, 0.5))',
                }}
                strokeWidth={2.5}
              />
            </motion.div>

            {/* Count badge */}
            <AnimatePresence>
              {availableLetters.length > 0 && (
                <motion.span 
                  key={availableLetters.length}
                  className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full text-[9px] font-bold text-white"
                  style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(4px)' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  {availableLetters.length}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          
          {/* Spacer for right alignment */}
          <div className="flex-1" />
        </div>

      {/* Word Evolution Mode - Neuro-linguistic visualization */}
      <WordEvolution 
        targetWord={targetWord}
        answerSlots={answerSlots}
        isCorrect={isCorrect}
        enabled={true}
      />

      {/* Clue heading - aligned with letter grid */}
      <motion.h2 
        key={targetWord.hint}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`text-lg sm:text-3xl md:text-4xl font-black leading-tight text-center uppercase mb-1 sm:mb-3 max-w-[300px] sm:max-w-md mx-auto ${
          !darkMode ? 'light-mode-heading' : ''
        }`}
        style={{
          background: darkMode 
            ? 'linear-gradient(135deg, rgba(129, 230, 217, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(224, 136, 255, 1) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: darkMode ? 'none' : '0 1px 4px rgba(0, 0, 0, 0.12)',
          filter: darkMode 
            ? 'drop-shadow(0 0 8px rgba(129, 230, 217, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.4))'
            : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
        }}
      >
        {targetWord.hint}
      </motion.h2>
      
      {/* Answer Slots - centered fixed-width grid */}
      <div className="mb-1 sm:mb-5 flex justify-center">
        <motion.div 
          className={`relative flex flex-wrap justify-center gap-1 sm:gap-4 p-2 sm:p-8 rounded-xl sm:rounded-2xl border transition-all duration-500 w-[300px] sm:w-auto sm:max-w-xl overflow-visible ${
            darkMode
              ? 'bg-gradient-to-br from-white/5 to-white/10 border-white/20'
              : 'bg-gradient-to-br from-white/10 to-white/20 border-white/30'
          }`}
          animate={{
            scale: isCorrect === true ? [1, 1.02, 1] : focusMode ? 1.04 : 1,
            boxShadow: isCorrect === true
              ? ['0 0 0 0 rgba(16, 185, 129, 0)',
                 '0 0 30px 10px rgba(16, 185, 129, 0.5)',
                 '0 0 0 0 rgba(16, 185, 129, 0)']
              : focusMode
                ? darkMode 
                  ? '0 0 40px 8px rgba(139, 92, 246, 0.25), 0 0 60px 15px rgba(168, 85, 247, 0.15)'
                  : '0 0 40px 8px rgba(255, 255, 255, 0.3), 0 0 60px 15px rgba(168, 85, 247, 0.2)'
                : '0 0 0 0 rgba(0, 0, 0, 0)'
          }}
          transition={{
            duration: isCorrect === true ? 1 : 0.35,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <AnimatePresence>
            {isCorrect === true && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20"
              />
            )}
          </AnimatePresence>
          
          {answerSlots.map((letter, index) => {
            const isActiveSlot = letter === null && index === activeSlotIndex && isCorrect === null && activeSlotIndex !== -1;
            const isHovered = hoveredSlotIndex === index && letter === null;
            const wouldBeCorrect = draggedLetter && isLetterCorrectForSlot(draggedLetter, index);
            const hasRipple = slotRipple === index;
            const hasIdleGlow = showIdleHint && isActiveSlot;
            const isPredictedSlot = predictedSlotIndex === index && letter === null && draggedLetter;
            
            // Slot glow logic colors
            const slotGlowStyle = isHovered && draggedLetter ? {
              boxShadow: wouldBeCorrect 
                ? '0 0 20px rgba(141, 252, 229, 0.4), inset 0 0 15px rgba(141, 252, 229, 0.2)'
                : '0 0 20px rgba(255, 141, 170, 0.4), inset 0 0 15px rgba(255, 141, 170, 0.2)',
              borderColor: wouldBeCorrect ? 'rgba(141, 252, 229, 0.7)' : 'rgba(255, 141, 170, 0.7)'
            } : {};
            
            return (
              <motion.div
                  key={index}
                  onClick={() => handleSlotClick(index)}
                  onTouchStart={(e) => handleTouchStart(e, letter, index)}
                  onTouchEnd={(e) => handleTouchEnd(e, true)}
                  onMouseEnter={() => letter === null && setHoveredSlotIndex(index)}
                  onMouseLeave={() => setHoveredSlotIndex(null)}
                layout
                layoutId={letter ? letter.id : undefined}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                className={`relative group w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl flex items-center justify-center text-base sm:text-3xl cursor-pointer transition-all duration-300 ${
                  letter 
                    ? 'border border-white/35'
                    : isActiveSlot
                    ? 'border border-[rgba(82,189,255,0.55)]'
                    : 'border border-dashed border-white/25'
                }`}
                style={{
                  background: letter 
                    ? 'rgba(255,255,255,0.06)'
                    : isActiveSlot
                    ? 'rgba(82,189,255,0.08)'
                    : 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  boxShadow: letter
                    ? 'inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 6px rgba(0,0,0,0.06)'
                    : isActiveSlot
                    ? '0 0 8px rgba(82, 189, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.08)'
                    : 'inset 0 1px 0 rgba(255,255,255,0.05)',
                  ...slotGlowStyle
                }}
                whileHover={letter ? { 
                  scale: 1.04, 
                  y: -2,
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18), 0 4px 12px rgba(0,0,0,0.1), 0 0 12px rgba(102, 204, 255, 0.15)',
                  transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
                } : {
                  scale: 1.02,
                  y: -1,
                  boxShadow: '0 0 10px rgba(102, 204, 255, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
                  borderColor: 'rgba(102, 204, 255, 0.45)',
                  transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
                }}
                whileTap={letter ? { 
                  scale: 0.97,
                  y: 1,
                  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.18), 0 0 0 2px rgba(102, 204, 255, 0.4)',
                  transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] }
                } : { 
                  scale: 0.98,
                  y: 1,
                  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.15), 0 0 0 2px rgba(102, 204, 255, 0.35)',
                  transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {/* Magnetic click ripple effect */}
                <AnimatePresence>
                  {hasRipple && (
                    <motion.div
                      className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
                      initial={{ scale: 0.5, opacity: 0.8 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{
                        background: 'radial-gradient(circle, rgba(141, 252, 229, 0.5) 0%, transparent 70%)'
                      }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Idle hint glow - one-time gentle pulse */}
                <AnimatePresence>
                  {hasIdleGlow && (
                    <motion.div
                      className="absolute inset-0 rounded-lg sm:rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 0.6, 0.4, 0.6, 0],
                        scale: [1, 1.05, 1.02, 1.05, 1]
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      style={{
                        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                      }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Predictive Slot Glow - Micro-Prediction (neuroscience-based) */}
                {/* Trains via: predictive processing, error correction, pattern anchoring, spatial schema */}
                <AnimatePresence mode="wait">
                  {isPredictedSlot && !isHovered && (
                    <motion.div
                      className="absolute rounded-lg sm:rounded-2xl pointer-events-none"
                      style={{
                        inset: '-9px', // 18px diameter = 9px radius outward
                        filter: 'blur(10px)',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%)',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ 
                        opacity: 0,
                        transition: { duration: 0.08, ease: "easeOut" } // 80ms fade-out on wrong
                      }}
                      transition={{ 
                        duration: 0.14, // 140ms fade-in
                        ease: "easeOut"
                      }}
                    />
                  )}
                </AnimatePresence>
                {isActiveSlot && (
                  <>
                    {/* Standard pulsing glow */}
                    <motion.div
                      className="absolute inset-0 rounded-lg sm:rounded-2xl pointer-events-none"
                      animate={{ 
                        boxShadow: [
                          '0 0 10px rgba(82, 189, 255, 0.4)',
                          '0 0 16px rgba(82, 189, 255, 0.6)',
                          '0 0 10px rgba(82, 189, 255, 0.4)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Directional Halo - slow rotating guide */}
                    <motion.div
                      className="absolute pointer-events-none"
                      style={{
                        inset: '-6px',
                        borderRadius: 'inherit',
                      }}
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div 
                        className="w-full h-full rounded-lg sm:rounded-2xl"
                        style={{
                          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(82, 189, 255, 0.06) 60deg, rgba(141, 252, 229, 0.08) 120deg, transparent 180deg, transparent 360deg)',
                          filter: 'blur(3px)',
                        }}
                      />
                    </motion.div>
                  </>
                )}

                {letter ? (
                                        <>
                                                                  {/* Magnetic pull-in glow */}
                                                                  <motion.div
                                                                    initial={{ scale: 1.5, opacity: 0.8 }}
                                                                    animate={{ scale: 1, opacity: 0 }}
                                                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                                                    className="absolute inset-0 rounded-lg sm:rounded-2xl"
                                                                    style={{
                                                                      background: 'radial-gradient(circle, rgba(141, 252, 229, 0.4) 0%, transparent 70%)'
                                                                    }}
                                                                  />
                                                                  <motion.div
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    className="absolute inset-0 rounded-lg sm:rounded-2xl bg-gradient-to-br from-cyan-400/15 to-blue-500/15"
                                                                  />
                                                                  {/* Bounce-in with magnetic settle: translateY(-3px) → settle */}
                                                                  <motion.span 
                                                                    initial={{ scale: 0, rotate: -4, y: -3 }}
                                                                    animate={{ 
                                                                      scale: [0, 1.02, 0.98, 1], 
                                                                      rotate: [-4, 2, -1, 0],
                                                                      y: [-3, 1, -1, 0]
                                                                    }}
                                                                    transition={{ 
                                                                      duration: 0.28,
                                                                      ease: [0.22, 1, 0.36, 1],
                                                                      times: [0, 0.4, 0.7, 1]
                                                                    }}
                                                                    className="relative leading-none text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] letter-tile"
                                                                  >
                                                                    {letter.char}
                                                                  </motion.span>
                    
                    {/* Magnetic click ripple on drop */}
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0 rounded-lg sm:rounded-2xl"
                      style={{
                        background: 'radial-gradient(circle, rgba(141, 252, 229, 0.5) 0%, rgba(6, 182, 212, 0.3) 40%, transparent 70%)'
                      }}
                    />
                  </>
                ) : (
                  <motion.div
                    className="flex items-center justify-center"
                    animate={{ 
                      opacity: isActiveSlot ? [0.7, 1, 0.7] : 0.4,
                    }}
                    transition={{ duration: isActiveSlot ? 2 : 0, repeat: isActiveSlot ? Infinity : 0, ease: "easeInOut" }}
                  >
                    <motion.div 
                      className={`rounded-full ${isActiveSlot 
                        ? 'w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-[rgba(82,189,255,0.9)] to-[rgba(102,204,255,0.9)]' 
                        : 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30'
                      }`}
                      style={isActiveSlot ? {
                        boxShadow: '0 0 8px rgba(82, 189, 255, 0.6)'
                      } : {}}
                      animate={isActiveSlot ? { 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 6px rgba(82, 189, 255, 0.5)',
                          '0 0 12px rgba(82, 189, 255, 0.8)',
                          '0 0 6px rgba(82, 189, 255, 0.5)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Letter Bank - centered fixed-width grid */}
      <motion.div 
        className="mb-1 sm:mb-4 flex justify-center"
        animate={{
          opacity: focusMode ? 0.88 : 1
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div 
          className={`flex flex-wrap justify-center content-start gap-1 sm:gap-3 p-2 sm:p-6 rounded-xl sm:rounded-2xl border backdrop-blur-sm w-[300px] sm:w-auto sm:max-w-xl transition-all duration-300 overflow-visible ${
            darkMode
              ? 'border-white/10 bg-gradient-to-br from-white/5 to-transparent'
              : 'border-white/20 bg-gradient-to-br from-white/10 to-white/5'
          } ${focusMode ? 'border-opacity-50' : ''}`}
          style={{
            minHeight: window.innerWidth < 640 
              ? '88px'
              : '120px'
          }}
        >
          <AnimatePresence mode="popLayout">
            {availableLetters.map((letter) => {
              const isDragging = draggedLetter?.id === letter.id;
              const wouldBeCorrectInActiveSlot = activeSlotIndex !== -1 && isLetterCorrectForSlot(letter, activeSlotIndex);
              
              return (
                <motion.button
                                        key={letter.id}
                                        onClick={() => handleLetterClick(letter)}
                                        onTouchStart={(e) => handleTouchStart(e, letter, null)}
                                        onTouchEnd={(e) => handleTouchEnd(e, false)}
                                        onMouseDown={() => {
                                          setDraggedLetter(letter);
                                          setPredictedSlotIndex(getPredictedSlotForLetter(letter));
                                        }}
                                        onMouseUp={() => {
                                          setDraggedLetter(null);
                                          setPredictedSlotIndex(null);
                                        }}
                                        onMouseLeave={() => {
                                          if (isDragging) {
                                            setDraggedLetter(null);
                                            setPredictedSlotIndex(null);
                                          }
                                        }}
                                        layout
                                        initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
                                        animate={{ 
                                          opacity: 1, 
                                          scale: isDragging ? 1.02 : 1, 
                                          rotate: isDragging ? 4 : 0, // Tiny 4° tilt when picked
                                          y: isDragging ? -3 : [0, -2, 0, 1, 0], // Breathing: 1-2px vertical oscillation
                                        }}
                                        exit={{ 
                                          opacity: 0, 
                                          scale: 0.3, 
                                          rotate: 180,
                                          transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                        transition={{ 
                                          type: "spring",
                                          stiffness: 400,
                                          damping: 22,
                                          rotate: { duration: 0.1, ease: "easeOut" }, // Quick tilt
                                          scale: { duration: 0.1, ease: "easeOut" }, // Quick scale wobble
                                          y: isDragging 
                                            ? { duration: 0.1, ease: "easeOut" }
                                            : { duration: 5, repeat: Infinity, ease: [0.45, 0.03, 0.65, 0.97], delay: letter.originalIndex * 0.3 }, // 5s breathing loop
                                        }}
                  className="relative w-8 h-8 sm:w-14 sm:h-14 text-white/95 text-base sm:text-3xl rounded-lg sm:rounded-2xl cursor-pointer overflow-hidden group"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                    border: isDragging && wouldBeCorrectInActiveSlot 
                      ? '1px solid rgba(141, 252, 229, 0.5)' 
                      : '1px solid rgba(255, 255, 255, 0.35)',
                    boxShadow: isDragging 
                      ? (wouldBeCorrectInActiveSlot
                        ? '0 6px 16px rgba(0, 0, 0, 0.15), 0 0 16px rgba(141, 252, 229, 0.25), inset 0 1px 0 rgba(255,255,255,0.12)'
                        : '0 6px 16px rgba(0, 0, 0, 0.15), 0 0 12px rgba(255, 141, 170, 0.2), inset 0 1px 0 rgba(255,255,255,0.12)')
                      : 'inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 6px rgba(0,0,0,0.06)',
                  }}

                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    rotate: 0,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 12px rgba(0,0,0,0.1), 0 0 14px rgba(102, 204, 255, 0.12)',
                    transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    y: 1,
                    rotate: 0,
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15), 0 0 0 2px rgba(102, 204, 255, 0.4)',
                    transition: { 
                      duration: 0.12,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }}
                  onTapStart={() => {
                    // Visual tick feedback - border glow pulse
                  }}
                  aria-label={`${t('select_letter')} ${letter.char}`}
                >
                  <motion.span 
                    className={`relative leading-none transition-all duration-200 letter-tile ${
                      darkMode
                        ? 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[0_2px_8px_rgba(6,182,212,0.35)]'
                        : 'drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] group-hover:drop-shadow-[0_2px_6px_rgba(6,182,212,0.3)]'
                    }`}
                    animate={isDragging ? {
                      scale: [1, 1.05, 1],
                      transition: { duration: 0.2 }
                    } : {}}
                  >
                    {letter.char}
                  </motion.span>
                  
                  {/* Kinetic drag glow effect */}
                  <AnimatePresence>
                    {isDragging && (
                      <motion.div
                        className="absolute inset-0 rounded-lg sm:rounded-2xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          background: wouldBeCorrectInActiveSlot
                            ? 'radial-gradient(circle, rgba(141, 252, 229, 0.25) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)'
                        }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </AnimatePresence>
          
          {availableLetters.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`flex items-center justify-center w-full py-4 text-sm font-medium ${
                darkMode ? 'text-white/60' : 'text-white/70'
              }`}
            >
              <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full border ${
                darkMode
                  ? 'bg-white/10 backdrop-blur-md border-white/20'
                  : 'bg-white/15 backdrop-blur-md border-white/25'
              }`}>
                <Star className={`w-5 h-5 ${darkMode ? 'text-cyan-400' : 'text-cyan-300'}`} />
                <span>{t('all_letters_placed')}</span>
              </div>
            </motion.div>
          )}
          </div>
          </motion.div>



      {/* Action Buttons - Desktop (Hierarchy: Check primary, Clear secondary, Previous tertiary) */}
      <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-3">
        {/* Previous - Tertiary: soft, minimal contrast */}
        <motion.button
          onClick={undoLastAction}
          disabled={actionHistory.length === 0 || isCorrect !== null}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white/90 transition-all"
          style={{
            background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.25) 0%, rgba(100, 116, 139, 0.25) 100%)',
            border: '1px solid rgba(148, 163, 184, 0.35)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            opacity: actionHistory.length === 0 || isCorrect !== null ? 0.4 : 0.85,
          }}
          whileHover={actionHistory.length > 0 && isCorrect === null ? {
            background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.32) 0%, rgba(100, 116, 139, 0.32) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 0 12px rgba(148, 163, 184, 0.15)',
            transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
          } : {}}
          whileTap={actionHistory.length > 0 && isCorrect === null ? {
            scale: 0.96,
            y: 2,
            background: 'linear-gradient(135deg, rgba(120, 135, 150, 0.35) 0%, rgba(80, 95, 110, 0.4) 100%)',
            boxShadow: 'inset 0 3px 8px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(0, 0, 0, 0.15)',
            borderColor: 'rgba(100, 116, 139, 0.5)',
            transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
          } : {}}
        >
          <Undo2 className="w-4 h-4" />
          <span>{t('previous')}</span>
        </motion.button>

        {/* Clear - Secondary: warm red glass */}
        <motion.button
          onClick={clearAnswer}
          disabled={isCorrect !== null || answerSlots.every(slot => slot === null)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all"
          style={{
            background: isCorrect !== null || answerSlots.every(slot => slot === null)
              ? 'linear-gradient(135deg, rgba(248, 113, 113, 0.2) 0%, rgba(239, 68, 68, 0.2) 100%)'
              : 'linear-gradient(135deg, rgba(248, 113, 113, 0.4) 0%, rgba(239, 68, 68, 0.4) 100%)',
            border: '1px solid rgba(252, 165, 165, 0.5)',
            boxShadow: isCorrect !== null || answerSlots.every(slot => slot === null)
              ? 'inset 0 1px 0 rgba(255, 255, 255, 0.06)'
              : 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 12px rgba(239, 68, 68, 0.15)',
            opacity: isCorrect !== null || answerSlots.every(slot => slot === null) ? 0.55 : 1,
          }}
          whileHover={isCorrect === null && !answerSlots.every(slot => slot === null) ? {
            y: -1,
            boxShadow: '0 0 20px rgba(248, 113, 113, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
          } : {}}
          whileTap={isCorrect === null && !answerSlots.every(slot => slot === null) ? {
            scale: 0.95,
            y: 3,
            background: 'linear-gradient(135deg, rgba(220, 80, 80, 0.5) 0%, rgba(180, 50, 50, 0.55) 100%)',
            boxShadow: 'inset 0 4px 10px rgba(0, 0, 0, 0.35), inset 0 1px 3px rgba(0, 0, 0, 0.2)',
            borderColor: 'rgba(200, 100, 100, 0.6)',
            transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
          } : {}}
        >
          <Trash2 className="w-4 h-4" />
          <span>{t('clear')}</span>
        </motion.button>

        {/* Check - Primary: vibrant green glass with glow */}
        <motion.div
          animate={isCorrect === false ? {
            x: [0, -7, 7, -5, 5, -3, 3, 0]
          } : {}}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <motion.button
            onClick={checkAnswer}
            disabled={isCorrect !== null || !isFilled}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white transition-all"
            style={{
              background: isFilled && isCorrect === null
                ? 'linear-gradient(135deg, rgba(52, 211, 153, 0.55) 0%, rgba(16, 185, 129, 0.55) 100%)'
                : 'linear-gradient(135deg, rgba(52, 211, 153, 0.3) 0%, rgba(16, 185, 129, 0.3) 100%)',
              border: isFilled && isCorrect === null
                ? '1px solid rgba(110, 231, 183, 0.7)'
                : '1px solid rgba(110, 231, 183, 0.4)',
              boxShadow: isFilled && isCorrect === null
                ? '0 4px 16px rgba(16, 185, 129, 0.25), 0 0 24px rgba(52, 211, 153, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                : 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              opacity: isCorrect !== null ? 0.5 : (!isFilled ? 0.55 : 1),
            }}
            whileHover={isFilled && isCorrect === null ? {
              y: -2,
              filter: 'brightness(1.04)',
              boxShadow: '0 6px 24px rgba(16, 185, 129, 0.35), 0 0 32px rgba(52, 211, 153, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
            } : {}}
            whileTap={isFilled && isCorrect === null ? {
              scale: 0.94,
              y: 3,
              filter: 'brightness(0.92)',
              background: 'linear-gradient(135deg, rgba(34, 180, 130, 0.6) 0%, rgba(10, 150, 100, 0.65) 100%)',
              boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.35), inset 0 2px 4px rgba(0, 0, 0, 0.2)',
              borderColor: 'rgba(80, 200, 160, 0.7)',
              transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
            } : {}}
            animate={isFilled && isCorrect === null ? {
              boxShadow: [
                '0 4px 16px rgba(16, 185, 129, 0.25), 0 0 24px rgba(52, 211, 153, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                '0 4px 20px rgba(16, 185, 129, 0.3), 0 0 28px rgba(52, 211, 153, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                '0 4px 16px rgba(16, 185, 129, 0.25), 0 0 24px rgba(52, 211, 153, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
              ]
            } : {}}
            transition={{
              boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Check className="w-4 h-4" />
            <span>{t('check')}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Bottom Action Bar - Premium Dock with Proper Hierarchy */}
      <div 
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-1.5 px-2 py-2"
        style={{
          background: darkMode 
            ? 'rgba(17, 24, 39, 0.85)' 
            : 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: darkMode 
            ? '1px solid rgba(255, 255, 255, 0.08)' 
            : '1px solid rgba(255, 255, 255, 0.25)'
        }}
      >
        {/* Previous Button - Tertiary: soft, minimal */}
        <motion.button
          onClick={undoLastAction}
          disabled={actionHistory.length === 0 || isCorrect !== null}
          className="flex-[0.8] flex items-center justify-center gap-1 py-2 rounded-lg font-medium text-xs text-white/85 transition-all"
          style={{
            background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.2) 0%, rgba(100, 116, 139, 0.2) 100%)',
            border: '1px solid rgba(148, 163, 184, 0.3)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
            opacity: actionHistory.length === 0 || isCorrect !== null ? 0.35 : 0.8,
          }}
          whileTap={actionHistory.length > 0 && isCorrect === null ? { 
            scale: 0.94,
            y: 2,
            background: 'linear-gradient(135deg, rgba(120, 135, 150, 0.32) 0%, rgba(80, 95, 110, 0.38) 100%)',
            boxShadow: 'inset 0 3px 8px rgba(0, 0, 0, 0.28), inset 0 1px 2px rgba(0, 0, 0, 0.15)',
            transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] }
          } : {}}
        >
          <Undo2 className="w-3.5 h-3.5" />
          <span>{t('previous')}</span>
        </motion.button>

        {/* Clear Button - Secondary: warm red */}
        <motion.button
          onClick={clearAnswer}
          disabled={isCorrect !== null || answerSlots.every(slot => slot === null)}
          className="flex-[0.8] flex items-center justify-center gap-1 py-2 rounded-lg font-semibold text-xs text-white transition-all"
          style={{
            background: isCorrect !== null || answerSlots.every(slot => slot === null)
              ? 'linear-gradient(135deg, rgba(248, 113, 113, 0.18) 0%, rgba(239, 68, 68, 0.18) 100%)'
              : 'linear-gradient(135deg, rgba(248, 113, 113, 0.38) 0%, rgba(239, 68, 68, 0.38) 100%)',
            border: '1px solid rgba(252, 165, 165, 0.45)',
            boxShadow: isCorrect !== null || answerSlots.every(slot => slot === null)
              ? 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
              : 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 3px 10px rgba(239, 68, 68, 0.12)',
            opacity: isCorrect !== null || answerSlots.every(slot => slot === null) ? 0.5 : 1,
          }}
          whileTap={isCorrect === null && !answerSlots.every(slot => slot === null) ? { 
            scale: 0.93,
            y: 3,
            background: 'linear-gradient(135deg, rgba(210, 75, 75, 0.48) 0%, rgba(170, 45, 45, 0.52) 100%)',
            boxShadow: 'inset 0 4px 10px rgba(0, 0, 0, 0.32), inset 0 1px 3px rgba(0, 0, 0, 0.18)',
            transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
          } : {}}
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>{t('clear')}</span>
        </motion.button>

        {/* Check Button - Primary: vibrant green with glow */}
        <motion.button
          onClick={checkAnswer}
          disabled={isCorrect !== null || !isFilled}
          className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg font-bold text-xs text-white transition-all"
          style={{
            background: isFilled && isCorrect === null
              ? 'linear-gradient(135deg, rgba(52, 211, 153, 0.52) 0%, rgba(16, 185, 129, 0.52) 100%)'
              : 'linear-gradient(135deg, rgba(52, 211, 153, 0.25) 0%, rgba(16, 185, 129, 0.25) 100%)',
            border: isFilled && isCorrect === null
              ? '1px solid rgba(110, 231, 183, 0.65)'
              : '1px solid rgba(110, 231, 183, 0.35)',
            boxShadow: isFilled && isCorrect === null 
              ? '0 4px 16px rgba(16, 185, 129, 0.22), 0 0 20px rgba(52, 211, 153, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
              : 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
            opacity: isCorrect !== null ? 0.45 : (!isFilled ? 0.55 : 1),
          }}
          whileTap={isCorrect === null && isFilled ? { 
            scale: 0.92,
            y: 3,
            filter: 'brightness(0.9)',
            background: 'linear-gradient(135deg, rgba(30, 165, 115, 0.58) 0%, rgba(10, 140, 95, 0.62) 100%)',
            boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.35), inset 0 2px 4px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] }
          } : {}}
          animate={isCorrect === false ? {
            x: [0, -5, 5, -3, 3, 0]
          } : {}}
          transition={{ duration: 0.15 }}
        >
          <Check className="w-3.5 h-3.5" />
          <span>{t('check')}</span>
        </motion.button>
      </div>

      {/* Mobile bottom spacing to account for fixed bar */}
      <div className="h-12 sm:hidden" />
    </motion.div>
  );
});

WordBuilderBoard.displayName = 'WordBuilderBoard';

export default WordBuilderBoard;