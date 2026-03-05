
/**
 * ENGLISH → SPANISH WORD BUILDER - PART 3
 * Categories: 11-15
 * 5 categories, 15 words each = 75 words
 */

import { Shirt, Utensils, Briefcase, Activity, Globe } from "lucide-react";

export const wordBuilderCategories_part3 = {
  clothing: {
    name: "Clothing",
    description: "Build fashion vocabulary for style",
    icon: Shirt,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "camisa", hint: "shirt" },
      { word: "pantalón", hint: "pants" },
      { word: "vestido", hint: "dress" },
      { word: "falda", hint: "skirt" },
      { word: "zapato", hint: "shoe" },
      { word: "calcetín", hint: "sock" },
      { word: "abrigo", hint: "coat" },
      { word: "chaqueta", hint: "jacket" },
      { word: "sombrero", hint: "hat" },
      { word: "bufanda", hint: "scarf" },
      { word: "guante", hint: "glove" },
      { word: "cinturón", hint: "belt" },
      { word: "corbata", hint: "tie" },
      { word: "suéter", hint: "sweater" },
      { word: "camiseta", hint: "t-shirt" }
    ]
  },

  food_meals: {
    name: "Food & Meals",
    description: "Master meal vocabulary for restaurants",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "desayuno", hint: "breakfast" },
      { word: "almuerzo", hint: "lunch" },
      { word: "cena", hint: "dinner" },
      { word: "pan", hint: "bread" },
      { word: "queso", hint: "cheese" },
      { word: "leche", hint: "milk" },
      { word: "huevo", hint: "egg" },
      { word: "carne", hint: "meat" },
      { word: "pollo", hint: "chicken" },
      { word: "pescado", hint: "fish" },
      { word: "arroz", hint: "rice" },
      { word: "pasta", hint: "pasta" },
      { word: "sopa", hint: "soup" },
      { word: "ensalada", hint: "salad" },
      { word: "postre", hint: "dessert" }
    ]
  },

  professions: {
    name: "Professions",
    description: "Discuss careers and occupations",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "médico", hint: "doctor" },
      { word: "enfermera", hint: "nurse" },
      { word: "maestro", hint: "teacher" },
      { word: "ingeniero", hint: "engineer" },
      { word: "abogado", hint: "lawyer" },
      { word: "policía", hint: "police officer" },
      { word: "bombero", hint: "firefighter" },
      { word: "cocinero", hint: "cook/chef" },
      { word: "artista", hint: "artist" },
      { word: "músico", hint: "musician" },
      { word: "escritor", hint: "writer" },
      { word: "periodista", hint: "journalist" },
      { word: "arquitecto", hint: "architect" },
      { word: "dentista", hint: "dentist" },
      { word: "programador", hint: "programmer" }
    ]
  },

  sports: {
    name: "Sports",
    description: "Talk about athletics and physical activities",
    icon: Activity,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "fútbol", hint: "soccer" },
      { word: "baloncesto", hint: "basketball" },
      { word: "tenis", hint: "tennis" },
      { word: "natación", hint: "swimming" },
      { word: "béisbol", hint: "baseball" },
      { word: "voleibol", hint: "volleyball" },
      { word: "boxeo", hint: "boxing" },
      { word: "ciclismo", hint: "cycling" },
      { word: "atletismo", hint: "athletics" },
      { word: "gimnasia", hint: "gymnastics" },
      { word: "esquí", hint: "skiing" },
      { word: "patinaje", hint: "skating" },
      { word: "golf", hint: "golf" },
      { word: "rugby", hint: "rugby" },
      { word: "escalada", hint: "climbing" }
    ]
  },

  countries: {
    name: "Countries",
    description: "Navigate international conversations with countries",
    icon: Globe,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "España", hint: "Spain" },
      { word: "México", hint: "Mexico" },
      { word: "Argentina", hint: "Argentina" },
      { word: "Colombia", hint: "Colombia" },
      { word: "Chile", hint: "Chile" },
      { word: "Perú", hint: "Peru" },
      { word: "Venezuela", hint: "Venezuela" },
      { word: "Ecuador", hint: "Ecuador" },
      { word: "Francia", hint: "France" },
      { word: "Italia", hint: "Italy" },
      { word: "Alemania", hint: "Germany" },
      { word: "Inglaterra", hint: "England" },
      { word: "China", hint: "China" },
      { word: "Japón", hint: "Japan" },
      { word: "Brasil", hint: "Brazil" }
    ]
  }
};

export default wordBuilderCategories_part3;
