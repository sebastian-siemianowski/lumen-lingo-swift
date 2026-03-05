
/**
 * ENGLISH → SPANISH WORD BUILDER - PART 1
 * Categories: 1-5
 * 5 categories, 15 words each = 75 words
 */

import { Apple, Home, Palette, Users, Utensils } from "lucide-react";

export const wordBuilderCategories_part1 = {
  fruits: {
    name: "Fruits",
    description: "Essential fruit vocabulary for shopping",
    icon: Apple,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "manzana", hint: "apple" },
      { word: "naranja", hint: "orange" },
      { word: "plátano", hint: "banana" },
      { word: "fresa", hint: "strawberry" },
      { word: "uva", hint: "grape" },
      { word: "sandía", hint: "watermelon" },
      { word: "piña", hint: "pineapple" },
      { word: "melón", hint: "melon" },
      { word: "pera", hint: "pear" },
      { word: "cereza", hint: "cherry" },
      { word: "limón", hint: "lemon" },
      { word: "mango", hint: "mango" },
      { word: "kiwi", hint: "kiwi" },
      { word: "durazno", hint: "peach" },
      { word: "ciruela", hint: "plum" }
    ]
  },

  vegetables: {
    name: "Vegetables",
    description: "Master vegetable names for cooking",
    icon: Utensils,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "tomate", hint: "tomato" },
      { word: "lechuga", hint: "lettuce" },
      { word: "zanahoria", hint: "carrot" },
      { word: "cebolla", hint: "onion" },
      { word: "papa", hint: "potato" },
      { word: "pepino", hint: "cucumber" },
      { word: "brócoli", hint: "broccoli" },
      { word: "espinaca", hint: "spinach" },
      { word: "pimiento", hint: "pepper" },
      { word: "ajo", hint: "garlic" },
      { word: "maíz", hint: "corn" },
      { word: "calabaza", hint: "pumpkin" },
      { word: "berenjena", hint: "eggplant" },
      { word: "apio", hint: "celery" },
      { word: "coliflor", hint: "cauliflower" }
    ]
  },

  colors: {
    name: "Colors",
    description: "Express yourself with color vocabulary",
    icon: Palette,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "rojo", hint: "red" },
      { word: "azul", hint: "blue" },
      { word: "verde", hint: "green" },
      { word: "amarillo", hint: "yellow" },
      { word: "negro", hint: "black" },
      { word: "blanco", hint: "white" },
      { word: "gris", hint: "gray" },
      { word: "marrón", hint: "brown" },
      { word: "rosa", hint: "pink" },
      { word: "naranja", hint: "orange" },
      { word: "morado", hint: "purple" },
      { word: "celeste", hint: "light blue" },
      { word: "dorado", hint: "golden" },
      { word: "plateado", hint: "silver" },
      { word: "turquesa", hint: "turquoise" }
    ]
  },

  family_members: {
    name: "Family Members",
    description: "Talk about your family members",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "madre", hint: "mother" },
      { word: "padre", hint: "father" },
      { word: "hijo", hint: "son" },
      { word: "hija", hint: "daughter" },
      { word: "hermano", hint: "brother" },
      { word: "hermana", hint: "sister" },
      { word: "abuelo", hint: "grandfather" },
      { word: "abuela", hint: "grandmother" },
      { word: "tío", hint: "uncle" },
      { word: "tía", hint: "aunt" },
      { word: "primo", hint: "cousin (male)" },
      { word: "prima", hint: "cousin (female)" },
      { word: "nieto", hint: "grandson" },
      { word: "nieta", hint: "granddaughter" },
      { word: "sobrino", hint: "nephew" }
    ]
  },

  home_rooms: {
    name: "Home & Rooms",
    description: "Navigate home vocabulary for living spaces",
    icon: Home,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "casa", hint: "house" },
      { word: "cocina", hint: "kitchen" },
      { word: "dormitorio", hint: "bedroom" },
      { word: "baño", hint: "bathroom" },
      { word: "sala", hint: "living room" },
      { word: "comedor", hint: "dining room" },
      { word: "jardín", hint: "garden" },
      { word: "garaje", hint: "garage" },
      { word: "balcón", hint: "balcony" },
      { word: "escalera", hint: "stairs" },
      { word: "techo", hint: "roof" },
      { word: "puerta", hint: "door" },
      { word: "ventana", hint: "window" },
      { word: "pared", hint: "wall" },
      { word: "piso", hint: "floor" }
    ]
  }
};

export default wordBuilderCategories_part1;
