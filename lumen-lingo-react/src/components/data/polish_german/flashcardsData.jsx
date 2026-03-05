
/**
 * POLISH → GERMAN FLASHCARDS - MAIN FILE
 *
 * Native Language: Polish (Polski)
 * Target Language: German (Deutsch)
 *
 * This file combines all flashcard category parts for the polish-german language pair.
 */

import { flashcardsCategories_part1 } from './flashcardsData_part1';
import { flashcardsCategories_part2 } from './flashcardsData_part2';
import { flashcardsCategories_part3 } from './flashcardsData_part3';
import { flashcardsCategories_part4 } from './flashcardsData_part4';
import { flashcardsCategories_part5 } from './flashcardsData_part5';
import { flashcardsCategories_part6 } from './flashcardsData_part6';
import { flashcardsCategories_part7 } from './flashcardsData_part7';

export const flashcardsCategories = {
  ...flashcardsCategories_part1,
  ...flashcardsCategories_part2,
  ...flashcardsCategories_part3,
  ...flashcardsCategories_part4,
  ...flashcardsCategories_part5,
  ...flashcardsCategories_part6,
  ...flashcardsCategories_part7
};
