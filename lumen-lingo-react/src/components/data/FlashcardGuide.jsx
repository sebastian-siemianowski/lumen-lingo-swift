
// Flashcard Category Creation Guide

export const FLASHCARD_CREATION_GUIDE = `
# Flashcard Category Creation Guide

This guide explains how to create comprehensive flashcard categories for LumenLingo.

## Structure Overview

Each flashcard category follows this structure:

\`\`\`javascript
export const flashcardsCategories = {
  category_key: {
    name: "Category Name",
    description: "Brief description",
    icon: IconComponent,
    color: "from-color-500 to-color-600",
    level: "beginner" | "intermediate" | "advanced",
    words: [
      {
        id: "unique_id",
        [sourceLanguage]: "Word in source language",
        [targetLanguage]: "Translation in target language",
        difficulty: "easy" | "medium" | "hard",
        example: "Example sentence in TARGET language",
        exampleTranslation: "Example translation in SOURCE language"
      }
    ]
  }
};
\`\`\`

## Field Explanations

<h3>Category Fields</h3>
<ul>
<li><strong>name</strong>: Display name of the category</li>
<li><strong>description</strong>: Short description of what this category covers</li>
<li><strong>icon</strong>: Lucide React icon component</li>
<li><strong>color</strong>: Tailwind gradient colors (e.g., "from-blue-500 to-purple-600")</li>
<li><strong>level</strong>: Difficulty level - "beginner", "intermediate", or "advanced"</li>
</ul>
<h3>Word Fields</h3>
<ul>
<li><strong>id</strong>: Unique identifier (e.g., "cat_word_1")</li>
<li><strong>[sourceLanguage]</strong>: Word/phrase in the user's native language (e.g., "polish", "english")</li>
<li><strong>[targetLanguage]</strong>: Translation in the target language (e.g., "spanish", "english")</li>
<li><strong>difficulty</strong>: Word difficulty - "easy", "medium", or "hard"</li>
<li><strong>example</strong>: Example sentence showing usage IN THE TARGET LANGUAGE</li>
<li><strong>exampleTranslation</strong>: Translation of the example IN THE SOURCE LANGUAGE</li>
</ul>

<h2>Example Implementation</h2>

\`\`\`javascript
import { Home, Utensils, Shirt } from "lucide-react";

export const flashcardsCategories = {
  polish_spanish_basics: {
    name: "Podstawy",
    description: "Essential words and phrases",
    icon: Home,
    color: "from-blue-500 to-cyan-500",
    level: "beginner",
    words: [
      {
        id: "ps_basic_1",
        polish: "Cześć",
        spanish: "Hola",
        difficulty: "easy",
        example: "Hola, ¿cómo estás?",
        exampleTranslation: "Cześć, jak się masz?"
      },
      {
        id: "ps_basic_2",
        polish: "Do widzenia",
        spanish: "Adiós",
        difficulty: "easy",
        example: "Adiós, hasta luego",
        exampleTranslation: "Do widzenia, do zobaczenia"
      },
      {
        id: "ps_basic_3",
        polish: "Proszę",
        spanish: "Por favor",
        difficulty: "easy",
        example: "¿Me puedes ayudar, por favor?",
        exampleTranslation: "Czy możesz mi pomóc, proszę?"
      }
    ]
  },
  
  food_drink: {
    name: "Jedzenie i picie",
    description: "Common food and drink vocabulary",
    icon: Utensils,
    color: "from-orange-500 to-red-500",
    level: "beginner",
    words: [
      {
        id: "ps_food_1",
        polish: "Woda",
        spanish: "Agua",
        difficulty: "easy",
        example: "Quiero un vaso de agua",
        exampleTranslation: "Chcę szklankę wody"
      },
      {
        id: "ps_food_2",
        polish: "Chleb",
        spanish: "Pan",
        difficulty: "easy",
        example: "¿Tienes pan fresco?",
        exampleTranslation: "Czy masz świeży chleb?"
      },
      {
        id: "ps_food_3",
        polish: "Jabłko",
        spanish: "Manzana",
        difficulty: "easy",
        example: "Me gusta comer manzanas",
        exampleTranslation: "Lubię jeść jabłka"
      }
    ]
  }
};
\`\`\`

<h2>Important Guidelines</h2>

<h3>1. Word Count per Category</h3>
<ul>
<li>Each category should have exactly <strong>15 words</strong></li>
<li>Distribution: 6 easy, 6 medium, 3 hard</li>
</ul>
<h3>2. Example Sentences</h3>
<ul>
<li><strong>example</strong>: ALWAYS in the TARGET language (the language being learned)</li>
<li><strong>exampleTranslation</strong>: ALWAYS in the SOURCE language (user's native language)</li>
<li>Examples should be natural, conversational phrases</li>
<li>Keep examples concise but meaningful</li>
</ul>
<h3>3. Language Pair Naming</h3>
<ul>
<li>File naming: \`[sourceLanguage]_[targetLanguage]/flashcardsData.js\`</li>
<li>Example: \`polish_spanish/flashcardsData.js\`</li>
<li>Use lowercase language names</li>
</ul>
<h3>4. Difficulty Distribution</h3>
Within each category of 15 words:
<ul>
<li><strong>6 easy words</strong>: Basic, commonly used words</li>
<li><strong>6 medium words</strong>: Intermediate vocabulary</li>
<li><strong>3 hard words</strong>: Advanced or complex phrases</li>
</ul>
<h3>5. Category Organization</h3>
<ul>
<li>Start with basics (greetings, common phrases)</li>
<li>Progress to thematic categories (food, family, travel)</li>
<li>End with advanced topics (idioms, professional vocabulary)</li>
</ul>
<h3>6. Icon Selection</h3>
Use appropriate Lucide React icons:
<ul>
<li>Home, Heart, Users (for basics/relationships)</li>
<li>Utensils, Coffee (for food/drink)</li>
<li>Plane, Map (for travel)</li>
<li>Briefcase, GraduationCap (for professional/education)</li>
<li>And many more from lucide-react</li>
</ul>

<h2>File Structure</h2>

For a language pair like Polish &rarr; Spanish:

\`\`\`
components/data/polish_spanish/
├── flashcardsData_part1.js    (Categories 1-15)
├── flashcardsData_part2.js    (Categories 16-30)
├── flashcardsData_part3.js    (Categories 31-43)
└── flashcardsData.js          (Main export combining all parts)
\`\`\`

<h3>Main Export File (flashcardsData.js)</h3>
\`\`\`javascript
import { flashcardsCategories_part1 } from './flashcardsData_part1.js';
import { flashcardsCategories_part2 } from './flashcardsData_part2.js';
import { flashcardsCategories_part3 } from './flashcardsData_part3.js';

export const flashcardsCategories = {
  ...flashcardsCategories_part1,
  ...flashcardsCategories_part2,
  ...flashcardsCategories_part3
};
\`\`\`

<h2>Complete Example: English &rarr; Spanish Category</h2>

\`\`\`javascript
import { Coffee } from "lucide-react";

export const flashcardsCategories_part1 = {
  food_drink: {
    name: "Food & Drink",
    description: "Essential food and beverage vocabulary",
    icon: Coffee,
    color: "from-orange-400 to-red-500",
    level: "beginner",
    words: [
      {
        id: "food_1",
        english: "Water",
        spanish: "Agua",
        difficulty: "easy",
        example: "Quiero un vaso de agua, por favor",
        exampleTranslation: "I want a glass of water, please"
      },
      {
        id: "food_2",
        english: "Bread",
        spanish: "Pan",
        difficulty: "easy",
        example: "El pan está muy fresco",
        exampleTranslation: "The bread is very fresh"
      },
      {
        id: "food_3",
        english: "Coffee",
        spanish: "Café",
        difficulty: "easy",
        example: "Me gusta el café con leche",
        exampleTranslation: "I like coffee with milk"
      },
      {
        id: "food_4",
        english: "Apple",
        spanish: "Manzana",
        difficulty: "easy",
        example: "Compré manzanas en el mercado",
        exampleTranslation: "I bought apples at the market"
      },
      {
        id: "food_5",
        english: "Chicken",
        spanish: "Pollo",
        difficulty: "easy",
        example: "El pollo está delicioso",
        exampleTranslation: "The chicken is delicious"
      },
      {
        id: "food_6",
        english: "Rice",
        spanish: "Arroz",
        difficulty: "easy",
        example: "Como arroz todos los días",
        exampleTranslation: "I eat rice every day"
      },
      {
        id: "food_7",
        english: "Vegetables",
        spanish: "Verduras",
        difficulty: "medium",
        example: "Las verduras son muy saludables",
        exampleTranslation: "Vegetables are very healthy"
      },
      {
        id: "food_8",
        english: "Breakfast",
        spanish: "Desayuno",
        difficulty: "medium",
        example: "El desayuno es la comida más importante",
        exampleTranslation: "Breakfast is the most important meal"
      },
      {
        id: "food_9",
        english: "Dinner",
        spanish: "Cena",
        difficulty: "medium",
        example: "¿Qué hay para la cena?",
        exampleTranslation: "What's for dinner?"
      },
      {
        id: "food_10",
        english: "Restaurant",
        spanish: "Restaurante",
        difficulty: "medium",
        example: "Vamos a un restaurante italiano",
        exampleTranslation: "We're going to an Italian restaurant"
      },
      {
        id: "food_11",
        english: "Delicious",
        spanish: "Delicioso",
        difficulty: "medium",
        example: "Esta comida está deliciosa",
        exampleTranslation: "This food is delicious"
      },
      {
        id: "food_12",
        english: "Menu",
        spanish: "Menú",
        difficulty: "medium",
        example: "¿Me trae el menú, por favor?",
        exampleTranslation: "Can you bring me the menu, please?"
      },
      {
        id: "food_13",
        english: "I'm hungry",
        spanish: "Tengo hambre",
        difficulty: "hard",
        example: "Tengo mucha hambre, vamos a comer",
        exampleTranslation: "I'm very hungry, let's eat"
      },
      {
        id: "food_14",
        english: "I'm thirsty",
        spanish: "Tengo sed",
        difficulty: "hard",
        example: "Tengo sed, necesito agua",
        exampleTranslation: "I'm thirsty, I need water"
      },
      {
        id: "food_15",
        english: "Can I have the check?",
        spanish: "¿Me trae la cuenta?",
        difficulty: "hard",
        example: "¿Me trae la cuenta, por favor?",
        exampleTranslation: "Can I have the check, please?"
      }
    ]
  }
};
\`\`\`

<h2>Quality Checklist</h2>

Before submitting flashcard content, verify:

&#9989; Each category has exactly 15 words
&#9989; Difficulty distribution: 6 easy, 6 medium, 3 hard
&#9989; All words have unique IDs
&#9989; Example is in TARGET language
&#9989; ExampleTranslation is in SOURCE language
&#9989; Examples are natural and conversational
&#9989; Translations are accurate
&#9989; Icon is imported and appropriate
&#9989; Color gradient follows Tailwind format
&#9989; Level (beginner/intermediate/advanced) is set
&#9989; File exports properly

<h2>Common Mistakes to Avoid</h2>

❌ <strong>Wrong</strong>: Example in source language
\`\`\`javascript
{
  english: "Hello",
  spanish: "Hola",
  example: "Hello, how are you?",  // WRONG - in English
  exampleTranslation: "Hola, ¿cómo estás?"
}
\`\`\`

&#9989; <strong>Correct</strong>: Example in target language
\`\`\`javascript
{
  english: "Hello",
  spanish: "Hola",
  example: "Hola, ¿cómo estás?",  // CORRECT - in Spanish
  exampleTranslation: "Hello, how are you?"
}
\`\`\`

❌ <strong>Wrong</strong>: Inconsistent difficulty distribution
\`\`\`javascript
words: [
  // 12 easy, 2 medium, 1 hard - WRONG
]
\`\`\`

&#9989; <strong>Correct</strong>: Proper difficulty distribution
\`\`\`javascript
words: [
  // 6 easy, 6 medium, 3 hard - CORRECT
]
\`\`\`

<h2>Testing Your Flashcards</h2>

After creating flashcards:

<ol>
<li>Import them in contentLoader.js</li>
<li>Navigate to the flashcard category selector</li>
<li>Verify all categories appear</li>
<li>Test playing through a category</li>
<li>Check that examples display correctly</li>
<li>Ensure translations are accurate</li>
</ol>

<h2>Need Help?</h2>

<ul>
<li>Check existing flashcard files for reference</li>
<li>Follow the exact structure shown in examples</li>
<li>Test thoroughly before submitting</li>
<li>Keep examples natural and conversational</li>
</ul>
`;

export default FLASHCARD_CREATION_GUIDE;
