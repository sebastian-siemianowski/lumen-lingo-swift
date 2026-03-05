
import { part1Categories } from './grammarData_part1';
import { part2Categories } from './grammarData_part2';
import { part3Categories } from './grammarData_part3';

/**
 * FRENCH → ENGLISH GRAMMAR - COMPLETE EXPORT
 */
export const grammarCategories = {
  ...part1Categories,
  ...part2Categories,
  ...part3Categories
};

export default grammarCategories;
