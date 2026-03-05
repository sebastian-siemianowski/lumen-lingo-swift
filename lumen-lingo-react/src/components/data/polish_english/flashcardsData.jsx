
/**
 * POLISH → ENGLISH FLASHCARDS - MAIN FILE
 *
 * Native Language: Polish (Polski)
 * Target Language: English
 *
 * This file combines all flashcard categories from parts 1-9.
 * Total: 108 categories with 15 words each = 1,620 flashcards.
 */

import { part1Categories as flashcardsCategories_part1 } from './flashcardsData_part1';
import { part2Categories as flashcardsCategories_part2 } from './flashcardsData_part2';
import { flashcardsCategories_part3 } from './flashcardsData_part3';
import { flashcardsCategories_part4 } from './flashcardsData_part4';
import { flashcardsCategories_part5 } from './flashcardsData_part5';
import { flashcardsCategories_part6 } from './flashcardsData_part6';
import { flashcardsCategories_part7 } from './flashcardsData_part7';
import { flashcardsCategories_part8 } from './flashcardsData_part8';
import { flashcardsCategories_part9 } from './flashcardsData_part9';

// Combine all parts into single export
export const flashcardsCategories = {
  ...flashcardsCategories_part1,
  ...flashcardsCategories_part2,
  ...flashcardsCategories_part3,
  ...flashcardsCategories_part4,
  ...flashcardsCategories_part5,
  ...flashcardsCategories_part6,
  ...flashcardsCategories_part7,
  ...flashcardsCategories_part8,
  ...flashcardsCategories_part9
};

export default flashcardsCategories;
