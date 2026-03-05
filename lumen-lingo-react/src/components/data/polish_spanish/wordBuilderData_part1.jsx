/**
 * POLISH → SPANISH WORD BUILDER - PART 1
 * Categories: 1-5
 * 5 categories, 15 words each = 75 words
 */

import { Apple, Home, Palette, Users, Utensils } from "lucide-react";

export const wordBuilderCategories_part1 = {
  fruits: {
    name: "Owoce",
    description: "Podstawowe owoce do zakupów",
    icon: Apple,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "manzana", hint: "jabłko" },
      { word: "naranja", hint: "pomarańcza" },
      { word: "plátano", hint: "banan" },
      { word: "fresa", hint: "truskawka" },
      { word: "uva", hint: "winogrono" },
      { word: "sandía", hint: "arbuz" },
      { word: "piña", hint: "ananas" },
      { word: "melón", hint: "melon" },
      { word: "pera", hint: "gruszka" },
      { word: "cereza", hint: "wiśnia" },
      { word: "limón", hint: "cytryna" },
      { word: "mango", hint: "mango" },
      { word: "kiwi", hint: "kiwi" },
      { word: "durazno", hint: "brzoskwinia" },
      { word: "ciruela", hint: "śliwka" }
    ]
  },

  vegetables: {
    name: "Warzywa",
    description: "Nazwy warzyw do gotowania",
    icon: Utensils,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "tomate", hint: "pomidor" },
      { word: "lechuga", hint: "sałata" },
      { word: "zanahoria", hint: "marchew" },
      { word: "cebolla", hint: "cebula" },
      { word: "papa", hint: "ziemniak" },
      { word: "pepino", hint: "ogórek" },
      { word: "brócoli", hint: "brokuł" },
      { word: "espinaca", hint: "szpinak" },
      { word: "pimiento", hint: "papryka" },
      { word: "ajo", hint: "czosnek" },
      { word: "maíz", hint: "kukurydza" },
      { word: "calabaza", hint: "dynia" },
      { word: "berenjena", hint: "bakłażan" },
      { word: "apio", hint: "seler" },
      { word: "coliflor", hint: "kalafior" }
    ]
  },

  colors: {
    name: "Kolory",
    description: "Wyrażaj się za pomocą kolorów",
    icon: Palette,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "rojo", hint: "czerwony" },
      { word: "azul", hint: "niebieski" },
      { word: "verde", hint: "zielony" },
      { word: "amarillo", hint: "żółty" },
      { word: "negro", hint: "czarny" },
      { word: "blanco", hint: "biały" },
      { word: "gris", hint: "szary" },
      { word: "marrón", hint: "brązowy" },
      { word: "rosa", hint: "różowy" },
      { word: "naranja", hint: "pomarańczowy" },
      { word: "morado", hint: "fioletowy" },
      { word: "celeste", hint: "jasnoniebieski" },
      { word: "dorado", hint: "złoty" },
      { word: "plateado", hint: "srebrny" },
      { word: "turquesa", hint: "turkusowy" }
    ]
  },

  family_members: {
    name: "Członkowie rodziny",
    description: "Rozmawiaj o członkach rodziny",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "madre", hint: "matka" },
      { word: "padre", hint: "ojciec" },
      { word: "hijo", hint: "syn" },
      { word: "hija", hint: "córka" },
      { word: "hermano", hint: "brat" },
      { word: "hermana", hint: "siostra" },
      { word: "abuelo", hint: "dziadek" },
      { word: "abuela", hint: "babcia" },
      { word: "tío", hint: "wujek" },
      { word: "tía", hint: "ciocia" },
      { word: "primo", hint: "kuzyn" },
      { word: "prima", hint: "kuzynka" },
      { word: "nieto", hint: "wnuk" },
      { word: "nieta", hint: "wnuczka" },
      { word: "sobrino", hint: "siostrzeniec" }
    ]
  },

  home_rooms: {
    name: "Dom i pokoje",
    description: "Słownictwo domowe i przestrzenie",
    icon: Home,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "casa", hint: "dom" },
      { word: "cocina", hint: "kuchnia" },
      { word: "dormitorio", hint: "sypialnia" },
      { word: "baño", hint: "łazienka" },
      { word: "sala", hint: "salon" },
      { word: "comedor", hint: "jadalnia" },
      { word: "jardín", hint: "ogród" },
      { word: "garaje", hint: "garaż" },
      { word: "balcón", hint: "balkon" },
      { word: "escalera", hint: "schody" },
      { word: "techo", hint: "dach" },
      { word: "puerta", hint: "drzwi" },
      { word: "ventana", hint: "okno" },
      { word: "pared", hint: "ściana" },
      { word: "piso", hint: "podłoga" }
    ]
  }
};

export default wordBuilderCategories_part1;