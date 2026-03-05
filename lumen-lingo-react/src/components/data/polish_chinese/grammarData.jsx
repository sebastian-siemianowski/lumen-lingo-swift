
/**
 * POLISH → CHINESE GRAMMAR - COMPLETE EXPORT
 * This file combines all parts for the grammar system
 */

import { part1Categories } from './grammarData_part1';
import { part2Categories } from './grammarData_part2';
import { part3Categories } from './grammarData_part3';

export const grammarCategories = {
  ...part1Categories,
  ...part2Categories,
  ...part3Categories
};

export default grammarCategories;
