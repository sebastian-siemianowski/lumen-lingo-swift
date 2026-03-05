
import { Brain, Clock, BookOpen, Users, MessageCircle, Target, History, TrendingUp, Heart, MapPin, Scale, Command, Award, Zap, Activity, Gift, Globe, Star, Palette, Coffee } from "lucide-react";

// Import from separate part files
import { part1Categories } from './grammarData_part1';
import { part2Categories } from './grammarData_part2';
import { part3Categories } from './grammarData_part3';

/**
 * CHINESE → ENGLISH GRAMMAR - COMPLETE EXPORT
 * Combines all grammar categories from part1, part2, and part3 into a single export.
 */
export const grammarCategories = {
  ...part1Categories,
  ...part2Categories,
  ...part3Categories
};

export default grammarCategories;
