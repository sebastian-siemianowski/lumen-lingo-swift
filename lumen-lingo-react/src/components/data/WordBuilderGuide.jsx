
// Word Builder Data Creation Guide

export const WORDBUILDER_CREATION_GUIDE = `
# Word Builder Data Creation Guide

This guide explains how to create Word Builder content for LumenLingo.

## What is Word Builder?

Word Builder is a letter-placement game where users construct words letter-by-letter from a pool of available letters.

## ACTUAL STRUCTURE

\`\`\`javascript
export const wordBuilderCategories = {
  category_key: {
    name: "Category Name",        // In SOURCE language
    icon: IconComponent,           // From lucide-react
    color: "from-color-500 to-color-600",
    level: "beginner | intermediate | advanced",
    description: "Brief description",  // In SOURCE language
    words: [                       // Array of 10+ words
      {
        id: "unique_id",
        word: "targetLanguageWord",  // The actual word in TARGET language
        hint: "Translation hint"     // Translation in SOURCE language
      }
    ]
  }
};
\`\`\`

## Field Explanations

<h3>Category Fields</h3>
<ul>
<li><strong>name</strong>: Display name in SOURCE language</li>
<li><strong>icon</strong>: Lucide React icon component</li>
<li><strong>color</strong>: Tailwind gradient (e.g., "from-blue-500 to-cyan-600")</li>
<li><strong>level</strong>: "beginner" | "intermediate" | "advanced"</li>
<li><strong>description</strong>: Brief explanation in SOURCE language</li>
<li><strong>words</strong>: Array of word objects (typically 10-15 words)</li>
</ul>

<h3>Word Object Fields</h3>
<ul>
<li><strong>id</strong>: Unique identifier (e.g., "beg1", "col1", "es_food_1")</li>
<li><strong>word</strong>: The actual word in TARGET language (lowercase)</li>
<li><strong>hint</strong>: Translation/meaning in SOURCE language</li>
</ul>

## Complete Example: English → Spanish

\`\`\`javascript
import { UtensilsCrossed, Dog, Home } from "lucide-react";

export const wordBuilderCategories = {
  food: {
    name: "Food",                // English (source)
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Common foods",
    words: [
      { id: "food1", word: "pan", hint: "Bread" },
      { id: "food2", word: "leche", hint: "Milk" },
      { id: "food3", word: "manzana", hint: "Apple" },
      { id: "food4", word: "queso", hint: "Cheese" },
      { id: "food5", word: "carne", hint: "Meat" },
      { id: "food6", word: "pescado", hint: "Fish" },
      { id: "food7", word: "arroz", hint: "Rice" },
      { id: "food8", word: "pollo", hint: "Chicken" },
      { id: "food9", word: "huevo", hint: "Egg" },
      { id: "food10", word: "pasta", hint: "Pasta" }
    ]
  },

  animals: {
    name: "Animals",             // English (source)
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Animal names",
    words: [
      { id: "ani1", word: "perro", hint: "Dog" },
      { id: "ani2", word: "gato", hint: "Cat" },
      { id: "ani3", word: "pajaro", hint: "Bird" },
      { id: "ani4", word: "pez", hint: "Fish" },
      { id: "ani5", word: "caballo", hint: "Horse" },
      { id: "ani6", word: "vaca", hint: "Cow" },
      { id: "ani7", word: "cerdo", hint: "Pig" },
      { id: "ani8", word: "oveja", hint: "Sheep" },
      { id: "ani9", word: "leon", hint: "Lion" },
      { id: "ani10", word: "tigre", hint: "Tiger" }
    ]
  },

  house: {
    name: "House Items",         // English (source)
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Common household items",
    words: [
      { id: "home1", word: "mesa", hint: "Table" },
      { id: "home2", word: "silla", hint: "Chair" },
      { id: "home3", word: "cama", hint: "Bed" },
      { id: "home4", word: "puerta", hint: "Door" },
      { id: "home5", word: "ventana", hint: "Window" },
      { id: "home6", word: "cocina", hint: "Kitchen" },
      { id: "home7", word: "sofa", hint: "Sofa" },
      { id: "home8", word: "lampara", hint: "Lamp" },
      { id: "home9", word: "espejo", hint: "Mirror" },
      { id: "home10", word: "alfombra", hint: "Carpet" }
    ]
  }
};

export default wordBuilderCategories;
\`\`\`

## Important Guidelines

<h3>1. Word Count</h3>
<ul>
<li>Typically 10-15 words per category</li>
<li>All words should be in TARGET language (lowercase)</li>
<li>Hints should be in SOURCE language</li>
</ul>

<h3>2. Hint Quality</h3>
<ul>
<li>Keep hints concise - usually 1-3 words</li>
<li>Provide direct translation or meaning</li>
<li>Can include brief context if helpful</li>
<li>Examples: "Dog", "To speak", "Grandmother", "Expensive"</li>
</ul>

<h3>3. Word Selection</h3>

<strong>Beginner Level</strong>:
<ul>
<li>3-6 letters typically</li>
<li>High frequency words</li>
<li>Simple spelling patterns</li>
<li>Concrete concepts (hola, casa, gato)</li>
</ul>

<strong>Intermediate Level</strong>:
<ul>
<li>5-9 letters typically</li>
<li>Common practical vocabulary</li>
<li>Everyday situations (cocina, manzana, perro)</li>
</ul>

<strong>Advanced Level</strong>:
<ul>
<li>7-12+ letters</li>
<li>Specialized or complex words</li>
<li>Abstract concepts (emocionado, vacaciones, aeropuerto)</li>
</ul>

<h3>4. Language in Fields</h3>
<ul>
<li><strong>name</strong>: SOURCE language (e.g., "Food" for English→Spanish)</li>
<li><strong>description</strong>: SOURCE language (e.g., "Common foods")</li>
<li><strong>word</strong>: TARGET language (e.g., "pan" for Spanish)</li>
<li><strong>hint</strong>: SOURCE language (e.g., "Bread" for English)</li>
</ul>

## Example: German → English

\`\`\`javascript
import { Home, UtensilsCrossed } from "lucide-react";

export const wordBuilderCategories = {
  house: {
    name: "Haus und Wohnen",      // German (source)
    icon: Home,
    color: "from-blue-400 to-indigo-500",
    level: "beginner",
    description: "Grundlegende Wohnvokabeln",
    words: [
      { id: "ge_home_1", word: "house", hint: "Haus" },
      { id: "ge_home_2", word: "room", hint: "Zimmer" },
      { id: "ge_home_3", word: "kitchen", hint: "Küche" },
      { id: "ge_home_4", word: "bedroom", hint: "Schlafzimmer" },
      { id: "ge_home_5", word: "bathroom", hint: "Badezimmer" },
      { id: "ge_home_6", word: "door", hint: "Tür" },
      { id: "ge_home_7", word: "window", hint: "Fenster" },
      { id: "ge_home_8", word: "table", hint: "Tisch" },
      { id: "ge_home_9", word: "chair", hint: "Stuhl" },
      { id: "ge_home_10", word: "bed", hint: "Bett" }
    ]
  },

  food: {
    name: "Essen und Trinken",    // German (source)
    icon: UtensilsCrossed,
    color: "from-orange-400 to-red-500",
    level: "beginner",
    description: "Grundlegende Lebensmittel",
    words: [
      { id: "ge_food_1", word: "bread", hint: "Brot" },
      { id: "ge_food_2", word: "water", hint: "Wasser" },
      { id: "ge_food_3", word: "milk", hint: "Milch" },
      { id: "ge_food_4", word: "coffee", hint: "Kaffee" },
      { id: "ge_food_5", word: "cheese", hint: "Käse" },
      { id: "ge_food_6", word: "apple", hint: "Apfel" },
      { id: "ge_food_7", word: "meat", hint: "Fleisch" },
      { id: "ge_food_8", word: "fish", hint: "Fisch" },
      { id: "ge_food_9", word: "chicken", hint: "Hähnchen" },
      { id: "ge_food_10", word: "egg", hint: "Ei" }
    ]
  }
};
\`\`\`

## Icon Selection

Common icons from lucide-react:
<ul>
<li><strong>Food</strong>: UtensilsCrossed, Coffee, Apple, ChefHat</li>
<li><strong>Home</strong>: Home, Bed, Sofa, Door</li>
<li><strong>Travel</strong>: Plane, Train, Car, Globe, MapPin</li>
<li><strong>Nature</strong>: TreePine, Flower, Sun, Cloud, Leaf</li>
<li><strong>Animals</strong>: Dog, Cat, Bird, Fish</li>
<li><strong>People</strong>: Users, User, Heart, Smile</li>
<li><strong>Time</strong>: Clock, Calendar, Watch</li>
<li><strong>Education</strong>: BookOpen, GraduationCap, Pencil</li>
<li><strong>Work</strong>: Briefcase, Building, Monitor</li>
<li><strong>Sports</strong>: Dumbbell, Activity, Trophy</li>
</ul>

<strong>CRITICAL</strong>: Only use icons that exist in lucide-react!

## Color Palette

Use varied gradients:
<ul>
<li>"from-blue-400 to-cyan-500" - Water, Sky</li>
<li>"from-green-400 to-emerald-500" - Nature, Food</li>
<li>"from-purple-400 to-pink-500" - Creative, Colors</li>
<li>"from-orange-400 to-amber-500" - Warm topics</li>
<li>"from-red-400 to-rose-500" - Emotions, Body</li>
<li>"from-yellow-400 to-orange-500" - Animals, Energy</li>
<li>"from-indigo-400 to-purple-500" - Time, Learning</li>
<li>"from-gray-400 to-slate-500" - Professional</li>
</ul>

## Quality Checklist

<h3>Structure</h3>
&#9744; All icons imported from lucide-react
&#9744; Category keys are unique
&#9744; Export statement at end

<h3>Categories</h3>
&#9744; name in SOURCE language
&#9744; description in SOURCE language
&#9744; Valid level (beginner/intermediate/advanced)
&#9744; Appropriate icon selected
&#9744; Color gradient uses valid Tailwind classes

<h3>Words</h3>
&#9744; All IDs unique
&#9744; word field in TARGET language (lowercase)
&#9744; hint field in SOURCE language
&#9744; 10-15 words per category
&#9744; Words appropriate for difficulty level

<h2>Common Mistakes</h2>

❌ <strong>Wrong language in word field</strong>:
\`\`\`javascript
// English→Spanish
{ word: "bread", hint: "Pan" }  // WRONG - backwards!
\`\`\`

&#9989; <strong>Correct</strong>:
\`\`\`javascript
// English→Spanish
{ word: "pan", hint: "Bread" }  // CORRECT
\`\`\`

❌ <strong>Wrong language in name/description</strong>:
\`\`\`javascript
// English→Spanish
name: "Comida"  // WRONG - should be English
\`\`\`

&#9989; <strong>Correct</strong>:
\`\`\`javascript
// English→Spanish
name: "Food"    // CORRECT - English source
\`\`\`

❌ <strong>Uppercase words</strong>:
\`\`\`javascript
{ word: "Pan", hint: "Bread" }  // WRONG - should be lowercase
\`\`\`

&#9989; <strong>Correct</strong>:
\`\`\`javascript
{ word: "pan", hint: "Bread" }  // CORRECT - lowercase
\`\`\`

## Testing

After creating:
<ol>
<li>Import in contentLoader.js</li>
<li>Navigate to Word Builder</li>
<li>Select your language pair</li>
<li>Test each category</li>
<li>Verify words build correctly</li>
<li>Check hints display properly</li>
</ol>
`;

export default WORDBUILDER_CREATION_GUIDE;
