
/**
 * GERMAN → POLISH WORD BUILDER
 * 
 * Native Language: German (Deutsch)
 * Target Language: Polish (Polski)
 * 
 * STRUCTURE:
 * - Each category must have: name, icon, color, level, description, words
 * - level options: "beginner", "intermediate", "advanced"
 * - color format: "from-[color]-400 to-[color]-500" (Tailwind gradient)
 * 
 * WORD FORMAT:
 * {
 *   id: "unique_id",
 *   word: "polish_word" (lowercase, the word to build),
 *   hint: "Hinweis auf Deutsch",
 *   polish: "Polskie słowo" (for reference)
 * }
 * 
 * HINWEISE:
 * - Beginnen Sie mit kürzeren Wörtern (3-5 Buchstaben) für Anfänger
 * - Gehen Sie zu längeren Wörtern (6-10 Buchstaben) für Fortgeschrittene über
 * - Wählen Sie praktische und häufig verwendete Wörter
 * - Berücksichtigen Sie typische Fehler, die Deutsche beim Polnischlernen machen
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Anfänger",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Einfache polnische Wörter",
    words: [
      { id: "gp_word_1", word: "cześć", hint: "Hallo", polish: "Cześć" },
      { id: "gp_word_2", word: "dom", hint: "Haus", polish: "Dom" },
      { id: "gp_word_3", word: "miłość", hint: "Liebe", polish: "Miłość" },
      { id: "gp_word_4", word: "woda", hint: "Wasser", polish: "Woda" },
      { id: "gp_word_5", word: "kot", hint: "Katze", polish: "Kot" },
      { id: "gp_word_6", word: "pies", hint: "Hund", polish: "Pies" },
      { id: "gp_word_7", word: "książka", hint: "Buch", polish: "Książka" },
      { id: "gp_word_8", word: "słońce", hint: "Sonne", polish: "Słońce" },
      { id: "gp_word_9", word: "księżyc", hint: "Mond", polish: "Księżyc" },
      { id: "gp_word_10", word: "gwiazda", hint: "Stern", polish: "Gwiazda" }
    ]
  },

  colors: {
    name: "Farben",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Farbnamen",
    words: [
      { id: "gp_col_1", word: "czerwony", hint: "Rot", polish: "Czerwony" },
      { id: "gp_col_2", word: "niebieski", hint: "Blau", polish: "Niebieski" },
      { id: "gp_col_3", word: "zielony", hint: "Grün", polish: "Zielony" },
      { id: "gp_col_4", word: "żółty", hint: "Gelb", polish: "Żółty" },
      { id: "gp_col_5", word: "biały", hint: "Weiß", polish: "Biały" },
      { id: "gp_col_6", word: "czarny", hint: "Schwarz", polish: "Czarny" },
      { id: "gp_col_7", word: "pomarańczowy", hint: "Orange", polish: "Pomarańczowy" },
      { id: "gp_col_8", word: "fioletowy", hint: "Lila", polish: "Fioletowy" },
      { id: "gp_col_9", word: "różowy", hint: "Rosa", polish: "Różowy" },
      { id: "gp_col_10", word: "brązowy", hint: "Braun", polish: "Brązowy" }
    ]
  },

  family: {
    name: "Familie",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Familienmitglieder",
    words: [
      { id: "gp_fam_1", word: "ojciec", hint: "Vater", polish: "Ojciec" },
      { id: "gp_fam_2", word: "matka", hint: "Mutter", polish: "Matka" },
      { id: "gp_fam_3", word: "brat", hint: "Bruder", polish: "Brat" },
      { id: "gp_fam_4", word: "siostra", hint: "Schwester", polish: "Siostra" },
      { id: "gp_fam_5", word: "syn", hint: "Sohn", polish: "Syn" },
      { id: "gp_fam_6", word: "córka", hint: "Tochter", polish: "Córka" },
      { id: "gp_fam_7", word: "wujek", hint: "Onkel", polish: "Wujek" },
      { id: "gp_fam_8", word: "ciocia", hint: "Tante", polish: "Ciocia" },
      { id: "gp_fam_9", word: "kuzyn", hint: "Cousin", polish: "Kuzyn" },
      { id: "gp_fam_10", word: "rodzina", hint: "Familie", polish: "Rodzina" }
    ]
  },

  house: {
    name: "Haus",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Haushaltsgegenstände",
    words: [
      { id: "gp_house_1", word: "stół", hint: "Tisch", polish: "Stół" },
      { id: "gp_house_2", word: "krzesło", hint: "Stuhl", polish: "Krzesło" },
      { id: "gp_house_3", word: "łóżko", hint: "Bett", polish: "Łóżko" },
      { id: "gp_house_4", word: "drzwi", hint: "Tür", polish: "Drzwi" },
      { id: "gp_house_5", word: "okno", hint: "Fenster", polish: "Okno" },
      { id: "gp_house_6", word: "kuchnia", hint: "Küche", polish: "Kuchnia" },
      { id: "gp_house_7", word: "sypialnia", hint: "Schlafzimmer", polish: "Sypialnia" },
      { id: "gp_house_8", word: "łazienka", hint: "Badezimmer", polish: "Łazienka" },
      { id: "gp_house_9", word: "ogród", hint: "Garten", polish: "Ogród" },
      { id: "gp_house_10", word: "dach", hint: "Dach", polish: "Dach" }
    ]
  },

  food: {
    name: "Essen",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Beliebte Lebensmittel",
    words: [
      { id: "gp_food_1", word: "chleb", hint: "Brot", polish: "Chleb" },
      { id: "gp_food_2", word: "mleko", hint: "Milch", polish: "Mleko" },
      { id: "gp_food_3", word: "jabłko", hint: "Apfel", polish: "Jabłko" },
      { id: "gp_food_4", word: "ser", hint: "Käse", polish: "Ser" },
      { id: "gp_food_5", word: "mięso", hint: "Fleisch", polish: "Mięso" },
      { id: "gp_food_6", word: "ryba", hint: "Fisch", polish: "Ryba" },
      { id: "gp_food_7", word: "jajko", hint: "Ei", polish: "Jajko" },
      { id: "gp_food_8", word: "ryż", hint: "Reis", polish: "Ryż" },
      { id: "gp_food_9", word: "warzywo", hint: "Gemüse", polish: "Warzywo" },
      { id: "gp_food_10", word: "owoc", hint: "Obst", polish: "Owoc" }
    ]
  },

  animals: {
    name: "Tiere",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Tiernamen",
    words: [
      { id: "gp_ani_1", word: "koń", hint: "Pferd", polish: "Koń" },
      { id: "gp_ani_2", word: "krowa", hint: "Kuh", polish: "Krowa" },
      { id: "gp_ani_3", word: "świnia", hint: "Schwein", polish: "Świnia" },
      { id: "gp_ani_4", word: "kurczak", hint: "Huhn", polish: "Kurczak" },
      { id: "gp_ani_5", word: "ptak", hint: "Vogel", polish: "Ptak" },
      { id: "gp_ani_6", word: "mysz", hint: "Maus", polish: "Mysz" },
      { id: "gp_ani_7", word: "wąż", hint: "Schlange", polish: "Wąż" },
      { id: "gp_ani_8", word: "lew", hint: "Löwe", polish: "Lew" },
      { id: "gp_ani_9", word: "tygrys", hint: "Tiger", polish: "Tygrys" },
      { id: "gp_ani_10", word: "słoń", hint: "Elefant", polish: "Słoń" }
    ]
  },

  places: {
    name: "Orte",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Orte",
    words: [
      { id: "gp_place_1", word: "miasto", hint: "Stadt", polish: "Miasto" },
      { id: "gp_place_2", word: "plaża", hint: "Strand", polish: "Plaża" },
      { id: "gp_place_3", word: "park", hint: "Park", polish: "Park" },
      { id: "gp_place_4", word: "szkoła", hint: "Schule", polish: "Szkoła" },
      { id: "gp_place_5", word: "szpital", hint: "Krankenhaus", polish: "Szpital" },
      { id: "gp_place_6", word: "sklep", hint: "Geschäft", polish: "Sklep" },
      { id: "gp_place_7", word: "ulica", hint: "Straße", polish: "Ulica" },
      { id: "gp_place_8", word: "lotnisko", hint: "Flughafen", polish: "Lotnisko" },
      { id: "gp_place_9", word: "most", hint: "Brücke", polish: "Most" },
      { id: "gp_place_10", word: "góra", hint: "Berg", polish: "Góra" }
    ]
  },

  time: {
    name: "Zeit",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Zeitwörter",
    words: [
      { id: "gp_time_1", word: "ranek", hint: "Morgen", polish: "Ranek" },
      { id: "gp_time_2", word: "wieczór", hint: "Abend", polish: "Wieczór" },
      { id: "gp_time_3", word: "jutro", hint: "Morgen", polish: "Jutro" },
      { id: "gp_time_4", word: "wczoraj", hint: "Gestern", polish: "Wczoraj" },
      { id: "gp_time_5", word: "rok", hint: "Jahr", polish: "Rok" },
      { id: "gp_time_6", word: "miesiąc", hint: "Monat", polish: "Miesiąc" },
      { id: "gp_time_7", word: "tydzień", hint: "Woche", polish: "Tydzień" },
      { id: "gp_time_8", word: "godzina", hint: "Stunde", polish: "Godzina" },
      { id: "gp_time_9", word: "minuta", hint: "Minute", polish: "Minuta" },
      { id: "gp_time_10", word: "sekunda", hint: "Sekunde", polish: "Sekunda" }
    ]
  },

  nature: {
    name: "Natur",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Natur",
    words: [
      { id: "gp_nat_1", word: "drzewo", hint: "Baum", polish: "Drzewo" },
      { id: "gp_nat_2", word: "kwiat", hint: "Blume", polish: "Kwiat" },
      { id: "gp_nat_3", word: "góra", hint: "Berg", polish: "Góra" },
      { id: "gp_nat_4", word: "rzeka", hint: "Fluss", polish: "Rzeka" },
      { id: "gp_nat_5", word: "las", hint: "Wald", polish: "Las" },
      { id: "gp_nat_6", word: "jezioro", hint: "See", polish: "Jezioro" },
      { id: "gp_nat_7", word: "morze", hint: "Meer", polish: "Morze" },
      { id: "gp_nat_8", word: "pustynia", hint: "Wüste", polish: "Pustynia" },
      { id: "gp_nat_9", word: "wyspa", hint: "Insel", polish: "Wyspa" },
      { id: "gp_nat_10", word: "niebo", hint: "Himmel", polish: "Niebo" }
    ]
  },

  emotions: {
    name: "Emotionen",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Gefühle",
    words: [
      { id: "gp_emo_1", word: "szczęśliwy", hint: "Glücklich", polish: "Szczęśliwy" },
      { id: "gp_emo_2", word: "smutny", hint: "Traurig", polish: "Smutny" },
      { id: "gp_emo_3", word: "zły", hint: "Wütend", polish: "Zły" },
      { id: "gp_emo_4", word: "zmęczony", hint: "Müde", polish: "Zmęczony" },
      { id: "gp_emo_5", word: "zdenerwowany", hint: "Nervös", polish: "Zdenerwowany" },
      { id: "gp_emo_6", word: "spokojny", hint: "Ruhig", polish: "Spokojny" },
      { id: "gp_emo_7", word: "przestraszony", hint: "Ängstlich", polish: "Przestraszony" },
      { id: "gp_emo_8", word: "dumny", hint: "Stolz", polish: "Dumny" },
      { id: "gp_emo_9", word: "pełen nadziei", hint: "Hoffnungsvoll", polish: "Pełen nadziei" },
      { id: "gp_emo_10", word: "radosny", hint: "Freudig", polish: "Radosny" }
    ]
  }
};

export default wordBuilderCategories;
