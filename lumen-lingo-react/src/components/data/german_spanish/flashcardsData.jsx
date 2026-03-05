
/**
 * GERMAN → SPANISH FLASHCARDS
 * 
 * Native Language: German (Deutsch)
 * Target Language: Spanish (Español)
 */

import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";
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

export default flashcardsCategories;
