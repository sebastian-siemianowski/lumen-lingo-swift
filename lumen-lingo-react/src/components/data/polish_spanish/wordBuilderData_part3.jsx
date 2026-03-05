/**
 * POLISH → SPANISH WORD BUILDER - PART 3
 * Categories: 11-15
 * 5 categories, 15 words each = 75 words
 */

import { Shirt, Utensils, Briefcase, Activity, Globe } from "lucide-react";

export const wordBuilderCategories_part3 = {
  clothing: {
    name: "Ubrania",
    description: "Słownictwo modowe dla stylu",
    icon: Shirt,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "camisa", hint: "koszula" },
      { word: "pantalón", hint: "spodnie" },
      { word: "vestido", hint: "sukienka" },
      { word: "falda", hint: "spódnica" },
      { word: "zapato", hint: "but" },
      { word: "calcetín", hint: "skarpetka" },
      { word: "abrigo", hint: "płaszcz" },
      { word: "chaqueta", hint: "kurtka" },
      { word: "sombrero", hint: "kapelusz" },
      { word: "bufanda", hint: "szalik" },
      { word: "guante", hint: "rękawiczka" },
      { word: "cinturón", hint: "pasek" },
      { word: "corbata", hint: "krawat" },
      { word: "suéter", hint: "sweter" },
      { word: "camiseta", hint: "koszulka" }
    ]
  },

  food_meals: {
    name: "Jedzenie i posiłki",
    description: "Słownictwo posiłków dla restauracji",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "desayuno", hint: "śniadanie" },
      { word: "almuerzo", hint: "obiad" },
      { word: "cena", hint: "kolacja" },
      { word: "pan", hint: "chleb" },
      { word: "queso", hint: "ser" },
      { word: "leche", hint: "mleko" },
      { word: "huevo", hint: "jajko" },
      { word: "carne", hint: "mięso" },
      { word: "pollo", hint: "kurczak" },
      { word: "pescado", hint: "ryba" },
      { word: "arroz", hint: "ryż" },
      { word: "pasta", hint: "makaron" },
      { word: "sopa", hint: "zupa" },
      { word: "ensalada", hint: "sałatka" },
      { word: "postre", hint: "deser" }
    ]
  },

  professions: {
    name: "Zawody",
    description: "Omawiaj kariery i zajęcia",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "médico", hint: "lekarz" },
      { word: "enfermera", hint: "pielęgniarka" },
      { word: "maestro", hint: "nauczyciel" },
      { word: "ingeniero", hint: "inżynier" },
      { word: "abogado", hint: "prawnik" },
      { word: "policía", hint: "policjant" },
      { word: "bombero", hint: "strażak" },
      { word: "cocinero", hint: "kucharz" },
      { word: "artista", hint: "artysta" },
      { word: "músico", hint: "muzyk" },
      { word: "escritor", hint: "pisarz" },
      { word: "periodista", hint: "dziennikarz" },
      { word: "arquitecto", hint: "architekt" },
      { word: "dentista", hint: "dentysta" },
      { word: "programador", hint: "programista" }
    ]
  },

  sports: {
    name: "Sport",
    description: "Rozmawiaj o sporcie i aktywności",
    icon: Activity,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "fútbol", hint: "piłka nożna" },
      { word: "baloncesto", hint: "koszykówka" },
      { word: "tenis", hint: "tenis" },
      { word: "natación", hint: "pływanie" },
      { word: "béisbol", hint: "baseball" },
      { word: "voleibol", hint: "siatkówka" },
      { word: "boxeo", hint: "boks" },
      { word: "ciclismo", hint: "kolarstwo" },
      { word: "atletismo", hint: "lekkoatletyka" },
      { word: "gimnasia", hint: "gimnastyka" },
      { word: "esquí", hint: "narciarstwo" },
      { word: "patinaje", hint: "łyżwiarstwo" },
      { word: "golf", hint: "golf" },
      { word: "rugby", hint: "rugby" },
      { word: "escalada", hint: "wspinaczka" }
    ]
  },

  countries: {
    name: "Kraje",
    description: "Nawiguj w międzynarodowych rozmowach",
    icon: Globe,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "España", hint: "Hiszpania" },
      { word: "México", hint: "Meksyk" },
      { word: "Argentina", hint: "Argentyna" },
      { word: "Colombia", hint: "Kolumbia" },
      { word: "Chile", hint: "Chile" },
      { word: "Perú", hint: "Peru" },
      { word: "Venezuela", hint: "Wenezuela" },
      { word: "Ecuador", hint: "Ekwador" },
      { word: "Francia", hint: "Francja" },
      { word: "Italia", hint: "Włochy" },
      { word: "Alemania", hint: "Niemcy" },
      { word: "Inglaterra", hint: "Anglia" },
      { word: "China", hint: "Chiny" },
      { word: "Japón", hint: "Japonia" },
      { word: "Brasil", hint: "Brazylia" }
    ]
  }
};

export default wordBuilderCategories_part3;