/**
 * POLISH → UKRAINIAN GRAMMAR - WORLD-CLASS WARM EDITION
 * 
 * Native Language: Polish (Polski)
 * Target Language: Ukrainian (Українська)
 * 
 * STRUCTURE:
 * - Each category must have: name, description, icon, color, difficulty, questions
 * - Explanations in POLISH
 * 
 * QUESTION FORMAT:
 * {
 *   id: "unique_id",
 *   question: "Pytanie українською (wskazówka po polsku)",
 *   options: ["opcja1", "opcja2", "opcja3", "opcja4"],
 *   correctAnswer: "poprawna_odpowiedź",
 *   explanation: "Wyjaśnienie PO POLSKU"
 * }
 * 
 * WSKAZÓWKI:
 * - Porównuj do polskiego - to pomaga!
 * - Skup się na różnicach między językami
 * - Wyjaśniaj przypadki, które są różne niż w polskim
 */

import { Brain, Clock, BookOpen, Palette, History, TrendingUp, Smile, Heart, MapPin, MessageCircle, Scale, Users, Command, Globe, Star, Target, Award, Zap, Activity, Gift, Hash } from "lucide-react";

/**
 * POLISH → UKRAINIAN GRAMMAR - COMPLETE EXPORT
 */

// These imports assume the grammar data has been refactored into separate files.
// For the purpose of this implementation, these files are assumed to exist and export
// the respective category objects.
import { part1Categories } from './grammarData_part1';
import { part2Categories } from './grammarData_part2';
import { part3Categories } from './grammarData_part3';

export const grammarCategories = {
  ...part1Categories,
  ...part2Categories,
  ...part3Categories
};

export default grammarCategories;