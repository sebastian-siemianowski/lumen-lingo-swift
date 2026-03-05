/**
 * POLISH → SPANISH WORD BUILDER - MAIN FILE
 * 
 * Native Language: Polish
 * Target Language: Spanish
 * 
 * This file combines all word builder categories from parts 1-20.
 * Total: 100 categories with 15 words each = 1500 words.
 */

import { wordBuilderCategories_part1 } from './wordBuilderData_part1';
import { wordBuilderCategories_part2 } from './wordBuilderData_part2';
import { wordBuilderCategories_part3 } from './wordBuilderData_part3';
import { wordBuilderCategories_part4 } from './wordBuilderData_part4';
import { wordBuilderCategories_part5 } from './wordBuilderData_part5';
import { wordBuilderCategories_part6 } from './wordBuilderData_part6';
import { wordBuilderCategories_part7 } from './wordBuilderData_part7';
import { wordBuilderCategories_part8 } from './wordBuilderData_part8';
import { wordBuilderCategories_part9 } from './wordBuilderData_part9';
import { wordBuilderCategories_part10 } from './wordBuilderData_part10';
import { wordBuilderCategories_part11 } from './wordBuilderData_part11';
import { wordBuilderCategories_part12 } from './wordBuilderData_part12';
import { wordBuilderCategories_part13 } from './wordBuilderData_part13';
import { wordBuilderCategories_part14 } from './wordBuilderData_part14';
import { wordBuilderCategories_part15 } from './wordBuilderData_part15';
import { wordBuilderCategories_part16 } from './wordBuilderData_part16';
import { wordBuilderCategories_part17 } from './wordBuilderData_part17';
import { wordBuilderCategories_part18 } from './wordBuilderData_part18';
import { wordBuilderCategories_part19 } from './wordBuilderData_part19';
import { wordBuilderCategories_part20 } from './wordBuilderData_part20';

// Combine all parts into single export
export const wordBuilderCategories = {
  ...wordBuilderCategories_part1,
  ...wordBuilderCategories_part2,
  ...wordBuilderCategories_part3,
  ...wordBuilderCategories_part4,
  ...wordBuilderCategories_part5,
  ...wordBuilderCategories_part6,
  ...wordBuilderCategories_part7,
  ...wordBuilderCategories_part8,
  ...wordBuilderCategories_part9,
  ...wordBuilderCategories_part10,
  ...wordBuilderCategories_part11,
  ...wordBuilderCategories_part12,
  ...wordBuilderCategories_part13,
  ...wordBuilderCategories_part14,
  ...wordBuilderCategories_part15,
  ...wordBuilderCategories_part16,
  ...wordBuilderCategories_part17,
  ...wordBuilderCategories_part18,
  ...wordBuilderCategories_part19,
  ...wordBuilderCategories_part20
};

export default wordBuilderCategories;