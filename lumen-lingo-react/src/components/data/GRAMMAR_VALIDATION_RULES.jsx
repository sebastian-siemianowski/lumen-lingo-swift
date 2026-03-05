/**
 * GRAMMAR DATA VALIDATION RULES FOR LUMENLINGO
 * 
 * CRITICAL STRUCTURE - EVERY QUESTION MUST FOLLOW:
 * 
 * {
 *   id: "unique_id",
 *   question: "Target language sentence with blanks",
 *   translation: "(Source language hint)",
 *   options: ["opt1", "opt2", "opt3", "opt4"],
 *   correct: "opt1",
 *   explanation: "Brief explanation. Maximum 2 sentences."
 * }
 * 
 * IMPORTANT RULES:
 * 
 * 1. QUESTION - Must be in TARGET LANGUAGE (the language being learned) with blanks
 * 2. TRANSLATION - Must be in SOURCE LANGUAGE (native language) in parentheses
 * 3. EXPLANATION - Maximum 2 sentences only
 * 4. CORRECT - Must be STRING matching one option exactly (not index number!)
 * 5. Each part file - Maximum 5 categories only
 * 
 * CORRECT EXAMPLE FOR ENGLISH → SPANISH:
 * 
 * {
 *   id: "pres_1",
 *   question: "Yo _____ español.",           // Spanish (target) with blanks
 *   translation: "(I speak Spanish)",        // English (source) hint
 *   options: ["hablo", "hablas", "habla", "hablan"],
 *   correct: "hablo",                        // String not number
 *   explanation: "First person singular uses -o ending. This pattern applies to all regular -ar verbs."  // 2 sentences max
 * }
 * 
 * WRONG EXAMPLES:
 * 
 * ❌ Question in source language:
 * {
 *   question: "I speak Spanish.",            // WRONG - should be in Spanish
 *   translation: "(Yo _____ español)"
 * }
 * 
 * ❌ Explanation too long (more than 2 sentences):
 * {
 *   explanation: "First person uses -o. Spanish embeds subject in verb. Hablo signals first person. This pattern applies across verbs."  // 4 sentences - TOO LONG
 * }
 * 
 * ❌ Using correctAnswer as index:
 * {
 *   correctAnswer: 0  // WRONG - use correct: "hablo"
 * }
 * 
 * ❌ Too many categories in one part file:
 * export const part1Categories = {
 *   category1: {...},
 *   category2: {...},
 *   category3: {...},
 *   category4: {...},
 *   category5: {...},
 *   category6: {...}  // WRONG - max 5 categories per part
 * }
 * 
 * CATEGORY STRUCTURE:
 * 
 * {
 *   name: "Category Name",
 *   description: "Brief description",
 *   icon: IconComponent,              // REQUIRED from lucide-react
 *   color: "from-blue-500 to-cyan-600",  // REQUIRED Tailwind gradient
 *   level: "beginner",                // REQUIRED: beginner|intermediate|advanced
 *   questions: [15 questions]         // REQUIRED: exactly 15
 * }
 * 
 * VALIDATION CHECKLIST:
 * 
 * Category Level:
 * ✅ Has name, description, icon, color, level
 * ✅ Icon imported from lucide-react
 * ✅ Color is valid Tailwind gradient
 * ✅ Level is: beginner, intermediate, or advanced
 * ✅ Has exactly 15 questions
 * ✅ Part file has MAXIMUM 5 categories
 * 
 * Question Level (for EACH question):
 * ✅ Has unique id
 * ✅ Question in TARGET language with blanks
 * ✅ Translation in SOURCE language in parentheses
 * ✅ Has 4 options exactly
 * ✅ Has correct as STRING matching option
 * ✅ Explanation MAXIMUM 2 sentences
 * ✅ No correctAnswer property
 * ✅ Translation uses parentheses
 * 
 * REMEMBER: 
 * - Question = TARGET language (what they're learning)
 * - Translation = SOURCE language (their native language)
 * - Explanation = 2 sentences max
 * - Part files = 5 categories max
 */

export const VALIDATION_RULES = {
  MAX_EXPLANATION_SENTENCES: 2,
  MAX_CATEGORIES_PER_PART: 5,
  QUESTIONS_PER_CATEGORY: 15,
  OPTIONS_PER_QUESTION: 4,
  REQUIRED_QUESTION_PROPS: ['id', 'question', 'translation', 'options', 'correct', 'explanation'],
  REQUIRED_CATEGORY_PROPS: ['name', 'description', 'icon', 'color', 'level', 'questions']
};