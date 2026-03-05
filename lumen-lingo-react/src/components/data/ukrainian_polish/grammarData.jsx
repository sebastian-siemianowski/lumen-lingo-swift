/**
 * UKRAINIAN → POLISH GRAMMAR - MAIN FILE
 * Combines all parts for backward compatibility
 */

import { part1Categories } from './grammarData_part1';
import { part2Categories } from './grammarData_part2';
import { part3Categories } from './grammarData_part3';

// Combine all categories into one export
export const grammarCategories = {
  ...part1Categories,
  ...part2Categories,
  ...part3Categories
};