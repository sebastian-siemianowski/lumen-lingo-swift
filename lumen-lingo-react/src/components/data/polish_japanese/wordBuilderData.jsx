
/**
 * POLISH → JAPANESE WORD BUILDER
 * Polski → 日本語
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Początkujący",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Proste słowa japońskie",
    words: [
      { id: "pj_word_1", word: "こんにちは", hint: "Cześć", japanese: "こんにちは" },
      { id: "pj_word_2", word: "いえ", hint: "Dom", japanese: "いえ" },
      { id: "pj_word_3", word: "あい", hint: "Miłość", japanese: "あい" },
      { id: "pj_word_4", word: "みず", hint: "Woda", japanese: "みず" },
      { id: "pj_word_5", word: "ねこ", hint: "Kot", japanese: "ねこ" },
      { id: "pj_word_6", word: "いぬ", hint: "Pies", japanese: "いぬ" },
      { id: "pj_word_7", word: "ほん", hint: "Książka", japanese: "ほん" },
      { id: "pj_word_8", word: "たいよう", hint: "Słońce", japanese: "たいよう" },
      { id: "pj_word_9", word: "つき", hint: "Księżyc", japanese: "つき" },
      { id: "pj_word_10", word: "ほし", hint: "Gwiazda", japanese: "ほし" }
    ]
  },

  colors: {
    name: "Kolory",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Nazwy kolorów",
    words: [
      { id: "pj_col_1", word: "あか", hint: "Czerwony", japanese: "あか" },
      { id: "pj_col_2", word: "あお", hint: "Niebieski", japanese: "あお" },
      { id: "pj_col_3", word: "みどり", hint: "Zielony", japanese: "みどり" },
      { id: "pj_col_4", word: "きいろ", hint: "Żółty", japanese: "きいろ" },
      { id: "pj_col_5", word: "しろ", hint: "Biały", japanese: "しろ" },
      { id: "pj_col_6", word: "くろ", hint: "Czarny", japanese: "くろ" },
      { id: "pj_col_7", word: "オレンジ", hint: "Pomarańczowy", japanese: "オレンジ" },
      { id: "pj_col_8", word: "むらさき", hint: "Fioletowy", japanese: "むらさき" },
      { id: "pj_col_9", word: "ピンク", hint: "Różowy", japanese: "ピンク" },
      { id: "pj_col_10", word: "ちゃいろ", hint: "Brązowy", japanese: "ちゃいろ" }
    ]
  },

  family: {
    name: "Rodzina",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Członkowie rodziny",
    words: [
      { id: "pj_fam_1", word: "ちち", hint: "Ojciec", japanese: "ちち" },
      { id: "pj_fam_2", word: "はは", hint: "Matka", japanese: "はは" },
      { id: "pj_fam_3", word: "あに", hint: "Brat", japanese: "あに" },
      { id: "pj_fam_4", word: "あね", hint: "Siostra", japanese: "あね" },
      { id: "pj_fam_5", word: "むすこ", hint: "Syn", japanese: "むすこ" },
      { id: "pj_fam_6", word: "むすめ", hint: "Córka", japanese: "むすめ" },
      { id: "pj_fam_7", word: "おじ", hint: "Wujek", japanese: "おじ" },
      { id: "pj_fam_8", word: "おば", hint: "Ciocia", japanese: "おば" },
      { id: "pj_fam_9", word: "いとこ", hint: "Kuzyn", japanese: "いとこ" },
      { id: "pj_fam_10", word: "かぞく", hint: "Rodzina", japanese: "かぞく" }
    ]
  },

  house: {
    name: "Dom",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Przedmioty domowe",
    words: [
      { id: "pj_house_1", word: "テーブル", hint: "Stół", japanese: "テーブル" },
      { id: "pj_house_2", word: "いす", hint: "Krzesło", japanese: "いす" },
      { id: "pj_house_3", word: "ベッド", hint: "Łóżko", japanese: "ベッド" },
      { id: "pj_house_4", word: "ドア", hint: "Drzwi", japanese: "ドア" },
      { id: "pj_house_5", word: "まど", hint: "Okno", japanese: "まど" },
      { id: "pj_house_6", word: "だいどころ", hint: "Kuchnia", japanese: "だいどころ" },
      { id: "pj_house_7", word: "しんしつ", hint: "Sypialnia", japanese: "しんしつ" },
      { id: "pj_house_8", word: "おふろ", hint: "Łazienka", japanese: "おふろ" },
      { id: "pj_house_9", word: "にわ", hint: "Ogród", japanese: "にわ" },
      { id: "pj_house_10", word: "やね", hint: "Dach", japanese: "やね" }
    ]
  },

  food: {
    name: "Jedzenie",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Popularne jedzenie",
    words: [
      { id: "pj_food_1", word: "パン", hint: "Chleb", japanese: "パン" },
      { id: "pj_food_2", word: "ぎゅうにゅう", hint: "Mleko", japanese: "ぎゅうにゅう" },
      { id: "pj_food_3", word: "りんご", hint: "Jabłko", japanese: "りんご" },
      { id: "pj_food_4", word: "チーズ", hint: "Ser", japanese: "チーズ" },
      { id: "pj_food_5", word: "にく", hint: "Mięso", japanese: "にく" },
      { id: "pj_food_6", word: "さかな", hint: "Ryba", japanese: "さかな" },
      { id: "pj_food_7", word: "たまご", hint: "Jajko", japanese: "たまご" },
      { id: "pj_food_8", word: "ごはん", hint: "Ryż", japanese: "ごはん" },
      { id: "pj_food_9", word: "やさい", hint: "Warzywo", japanese: "やさい" },
      { id: "pj_food_10", word: "くだもの", hint: "Owoc", japanese: "くだもの" }
    ]
  },

  animals: {
    name: "Zwierzęta",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Nazwy zwierząt",
    words: [
      { id: "pj_ani_1", word: "うま", hint: "Koń", japanese: "うま" },
      { id: "pj_ani_2", word: "うし", hint: "Krowa", japanese: "うし" },
      { id: "pj_ani_3", word: "ぶた", hint: "Świnia", japanese: "ぶた" },
      { id: "pj_ani_4", word: "にわとり", hint: "Kurczak", japanese: "にわとり" },
      { id: "pj_ani_5", word: "とり", hint: "Ptak", japanese: "とり" },
      { id: "pj_ani_6", word: "ねずみ", hint: "Mysz", japanese: "ねずみ" },
      { id: "pj_ani_7", word: "へび", hint: "Wąż", japanese: "へび" },
      { id: "pj_ani_8", word: "ライオン", hint: "Lew", japanese: "ライオン" },
      { id: "pj_ani_9", word: "トラ", hint: "Tygrys", japanese: "トラ" },
      { id: "pj_ani_10", word: "ぞう", hint: "Słoń", japanese: "ぞう" }
    ]
  },

  places: {
    name: "Miejsca",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Lokalizacje",
    words: [
      { id: "pj_place_1", word: "まち", hint: "Miasto", japanese: "まち" },
      { id: "pj_place_2", word: "ビーチ", hint: "Plaża", japanese: "ビーチ" },
      { id: "pj_place_3", word: "こうえん", hint: "Park", japanese: "こうえん" },
      { id: "pj_place_4", word: "がっこう", hint: "Szkoła", japanese: "がっこう" },
      { id: "pj_place_5", word: "びょういん", hint: "Szpital", japanese: "びょういん" },
      { id: "pj_place_6", word: "みせ", hint: "Sklep", japanese: "みせ" },
      { id: "pj_place_7", word: "どおり", hint: "Ulica", japanese: "どおり" },
      { id: "pj_place_8", word: "くうこう", hint: "Lotnisko", japanese: "くうこう" },
      { id: "pj_place_9", word: "はし", hint: "Most", japanese: "はし" },
      { id: "pj_place_10", word: "やま", hint: "Góra", japanese: "やま" }
    ]
  },

  time: {
    name: "Czas",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Słowa związane z czasem",
    words: [
      { id: "pj_time_1", word: "あさ", hint: "Ranek", japanese: "あさ" },
      { id: "pj_time_2", word: "ばん", hint: "Wieczór", japanese: "ばん" },
      { id: "pj_time_3", word: "あした", hint: "Jutro", japanese: "あした" },
      { id: "pj_time_4", word: "きのう", hint: "Wczoraj", japanese: "きのう" },
      { id: "pj_time_5", word: "とし", hint: "Rok", japanese: "とし" },
      { id: "pj_time_6", word: "つき", hint: "Miesiąc", japanese: "つき" },
      { id: "pj_time_7", word: "しゅう", hint: "Tydzień", japanese: "しゅう" },
      { id: "pj_time_8", word: "じかん", hint: "Godzina", japanese: "じかん" },
      { id: "pj_time_9", word: "ふん", hint: "Minuta", japanese: "ふん" },
      { id: "pj_time_10", word: "びょう", hint: "Sekunda", japanese: "びょう" }
    ]
  },

  nature: {
    name: "Natura",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Natura",
    words: [
      { id: "pj_nat_1", word: "き", hint: "Drzewo", japanese: "き" },
      { id: "pj_nat_2", word: "はな", hint: "Kwiat", japanese: "はな" },
      { id: "pj_nat_3", word: "やま", hint: "Góra", japanese: "やま" },
      { id: "pj_nat_4", word: "かわ", hint: "Rzeka", japanese: "かわ" },
      { id: "pj_nat_5", word: "もり", hint: "Las", japanese: "もり" },
      { id: "pj_nat_6", word: "みずうみ", hint: "Jezioro", japanese: "みずうみ" },
      { id: "pj_nat_7", word: "うみ", hint: "Morze", japanese: "うみ" },
      { id: "pj_nat_8", word: "さばく", hint: "Pustynia", japanese: "さばく" },
      { id: "pj_nat_9", word: "しま", hint: "Wyspa", japanese: "しま" },
      { id: "pj_nat_10", word: "そら", hint: "Niebo", japanese: "そら" }
    ]
  },

  emotions: {
    name: "Emocje",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Uczucia",
    words: [
      { id: "pj_emo_1", word: "しあわせ", hint: "Szczęśliwy", japanese: "しあわせ" },
      { id: "pj_emo_2", word: "かなしい", hint: "Smutny", japanese: "かなしい" },
      { id: "pj_emo_3", word: "おこる", hint: "Zły", japanese: "おこる" },
      { id: "pj_emo_4", word: "つかれた", hint: "Zmęczony", japanese: "つかれた" },
      { id: "pj_emo_5", word: "きんちょう", hint: "Zdenerwowany", japanese: "きんちょう" },
      { id: "pj_emo_6", word: "おだやか", hint: "Spokojny", japanese: "おだやか" },
      { id: "pj_emo_7", word: "こわい", hint: "Przestraszony", japanese: "こわい" },
      { id: "pj_emo_8", word: "ほこり", hint: "Dumny", japanese: "ほこり" },
      { id: "pj_emo_9", word: "きぼう", hint: "Pełen nadziei", japanese: "きぼう" },
      { id: "pj_emo_10", word: "よろこび", hint: "Radosny", japanese: "よろこび" }
    ]
  }
};

export default wordBuilderCategories;
