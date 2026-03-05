/**
 * UKRAINIAN → POLISH WORD BUILDER
 * 
 * Native Language: Ukrainian (Українська)
 * Target Language: Polish (Polski)
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Початковий",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Прості польські слова",
    words: [
      { id: "up_word_1", word: "cześć", hint: "Привітання", polish: "Cześć" },
      { id: "up_word_2", word: "dom", hint: "Будинок", polish: "Dom" },
      { id: "up_word_3", word: "miłość", hint: "Любов", polish: "Miłość" },
      { id: "up_word_4", word: "woda", hint: "Вода", polish: "Woda" },
      { id: "up_word_5", word: "kot", hint: "Кіт", polish: "Kot" },
      { id: "up_word_6", word: "pies", hint: "Собака", polish: "Pies" },
      { id: "up_word_7", word: "tak", hint: "Так", polish: "Tak" },
      { id: "up_word_8", word: "nie", hint: "Ні", polish: "Nie" },
      { id: "up_word_9", word: "dzień", hint: "День", polish: "Dzień" },
      { id: "up_word_10", word: "noc", hint: "Ніч", polish: "Noc" }
    ]
  },

  colors: {
    name: "Кольори",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Назви кольорів",
    words: [
      { id: "up_color_1", word: "czerwony", hint: "Червоний", polish: "Czerwony" },
      { id: "up_color_2", word: "niebieski", hint: "Синій", polish: "Niebieski" },
      { id: "up_color_3", word: "zielony", hint: "Зелений", polish: "Zielony" },
      { id: "up_color_4", word: "żółty", hint: "Жовтий", polish: "Żółty" },
      { id: "up_color_5", word: "czarny", hint: "Чорний", polish: "Czarny" },
      { id: "up_color_6", word: "biały", hint: "Білий", polish: "Biały" },
      { id: "up_color_7", word: "fioletowy", hint: "Фіолетовий", polish: "Fioletowy" },
      { id: "up_color_8", word: "pomarańczowy", hint: "Помаранчевий", polish: "Pomarańczowy" },
      { id: "up_color_9", word: "różowy", hint: "Рожевий", polish: "Różowy" },
      { id: "up_color_10", word: "szary", hint: "Сірий", polish: "Szary" }
    ]
  },

  family: {
    name: "Сім'я",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Члени сім'ї",
    words: [
      { id: "up_family_1", word: "mama", hint: "Мама", polish: "Mama" },
      { id: "up_family_2", word: "tata", hint: "Тато", polish: "Tata" },
      { id: "up_family_3", word: "brat", hint: "Брат", polish: "Brat" },
      { id: "up_family_4", word: "siostra", hint: "Сестра", polish: "Siostra" },
      { id: "up_family_5", word: "syn", hint: "Син", polish: "Syn" },
      { id: "up_family_6", word: "córka", hint: "Донька", polish: "Córka" },
      { id: "up_family_7", word: "babcia", hint: "Бабуся", polish: "Babcia" },
      { id: "up_family_8", word: "dziadek", hint: "Дідусь", polish: "Dziadek" },
      { id: "up_family_9", word: "wujek", hint: "Дядько", polish: "Wujek" },
      { id: "up_family_10", word: "ciocia", hint: "Тітка", polish: "Ciocia" }
    ]
  },

  house: {
    name: "Дім",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Домашні предмети",
    words: [
      { id: "up_house_1", word: "pokój", hint: "Кімната", polish: "Pokój" },
      { id: "up_house_2", word: "łóżko", hint: "Ліжко", polish: "Łóżko" },
      { id: "up_house_3", word: "stół", hint: "Стіл", polish: "Stół" },
      { id: "up_house_4", word: "krzesło", hint: "Стілець", polish: "Krzesło" },
      { id: "up_house_5", word: "okno", hint: "Вікно", polish: "Okno" },
      { id: "up_house_6", word: "drzwi", hint: "Двері", polish: "Drzwi" },
      { id: "up_house_7", word: "kuchnia", hint: "Кухня", polish: "Kuchnia" },
      { id: "up_house_8", word: "łazienka", hint: "Ванна кімната", polish: "Łazienka" },
      { id: "up_house_9", word: "salon", hint: "Вітальня", polish: "Salon" },
      { id: "up_house_10", word: "balkon", hint: "Балкон", polish: "Balkon" }
    ]
  },

  food: {
    name: "Їжа",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Популярна їжа",
    words: [
      { id: "up_food_1", word: "chleb", hint: "Хліб", polish: "Chleb" },
      { id: "up_food_2", word: "ser", hint: "Сир", polish: "Ser" },
      { id: "up_food_3", word: "mięso", hint: "М'ясо", polish: "Mięso" },
      { id: "up_food_4", word: "ryba", hint: "Риба", polish: "Ryba" },
      { id: "up_food_5", word: "owoce", hint: "Фрукти", polish: "Owoce" },
      { id: "up_food_6", word: "warzywa", hint: "Овочі", polish: "Warzywa" },
      { id: "up_food_7", word: "kawa", hint: "Кава", polish: "Kawa" },
      { id: "up_food_8", word: "herbata", hint: "Чай", polish: "Herbata" },
      { id: "up_food_9", word: "mleko", hint: "Молоко", polish: "Mleko" },
      { id: "up_food_10", word: "jajko", hint: "Яйце", polish: "Jajko" }
    ]
  },

  animals: {
    name: "Тварини",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Назви тварин",
    words: [
      { id: "up_animals_1", word: "koń", hint: "Кінь", polish: "Koń" },
      { id: "up_animals_2", word: "krowa", hint: "Корова", polish: "Krowa" },
      { id: "up_animals_3", word: "świnia", hint: "Свиня", polish: "Świnia" },
      { id: "up_animals_4", word: "kurczak", hint: "Курка", polish: "Kurczak" },
      { id: "up_animals_5", word: "ptak", hint: "Птах", polish: "Ptak" },
      { id: "up_animals_6", word: "mysz", hint: "Миша", polish: "Mysz" },
      { id: "up_animals_7", word: "wąż", hint: "Змія", polish: "Wąż" },
      { id: "up_animals_8", word: "lew", hint: "Лев", polish: "Lew" },
      { id: "up_animals_9", word: "słoń", hint: "Слон", polish: "Słoń" },
      { id: "up_animals_10", word: "żaba", hint: "Жаба", polish: "Żaba" }
    ]
  },

  places: {
    name: "Місця",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Локації",
    words: [
      { id: "up_places_1", word: "sklep", hint: "Магазин", polish: "Sklep" },
      { id: "up_places_2", word: "szkoła", hint: "Школа", polish: "Szkoła" },
      { id: "up_places_3", word: "praca", hint: "Робота", polish: "Praca" },
      { id: "up_places_4", word: "miasto", hint: "Місто", polish: "Miasto" },
      { id: "up_places_5", word: "wieś", hint: "Село", polish: "Wieś" },
      { id: "up_places_6", word: "park", hint: "Парк", polish: "Park" },
      { id: "up_places_7", word: "ulica", hint: "Вулиця", polish: "Ulica" },
      { id: "up_places_8", word: "lotnisko", hint: "Аеропорт", polish: "Lotnisko" },
      { id: "up_places_9", word: "dworzec", hint: "Вокзал", polish: "Dworzec" },
      { id: "up_places_10", word: "most", hint: "Міст", polish: "Most" }
    ]
  },

  time: {
    name: "Час",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Слова про час",
    words: [
      { id: "up_time_1", word: "godzina", hint: "Година", polish: "Godzina" },
      { id: "up_time_2", word: "minuta", hint: "Хвилина", polish: "Minuta" },
      { id: "up_time_3", word: "sekunda", hint: "Секунда", polish: "Sekunda" },
      { id: "up_time_4", word: "dzień", hint: "День", polish: "Dzień" },
      { id: "up_time_5", word: "tydzień", hint: "Тиждень", polish: "Tydzień" },
      { id: "up_time_6", word: "miesiąc", hint: "Місяць", polish: "Miesiąc" },
      { id: "up_time_7", word: "rok", hint: "Рік", polish: "Rok" },
      { id: "up_time_8", word: "wczoraj", hint: "Вчора", polish: "Wczoraj" },
      { id: "up_time_9", word: "dzisiaj", hint: "Сьогодні", polish: "Dzisiaj" },
      { id: "up_time_10", word: "jutro", hint: "Завтра", polish: "Jutro" }
    ]
  },

  nature: {
    name: "Природа",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Природа",
    words: [
      { id: "up_nature_1", word: "drzewo", hint: "Дерево", polish: "Drzewo" },
      { id: "up_nature_2", word: "kwiat", hint: "Квітка", polish: "Kwiat" },
      { id: "up_nature_3", word: "słońce", hint: "Сонце", polish: "Słońce" },
      { id: "up_nature_4", word: "księżyc", hint: "Місяць", polish: "Księżyc" },
      { id: "up_nature_5", word: "gwiazda", hint: "Зірка", polish: "Gwiazda" },
      { id: "up_nature_6", word: "rzeka", hint: "Річка", polish: "Rzeka" },
      { id: "up_nature_7", word: "jezioro", hint: "Озеро", polish: "Jezioro" },
      { id: "up_nature_8", word: "góra", hint: "Гора", polish: "Góra" },
      { id: "up_nature_9", word: "las", hint: "Ліс", polish: "Las" },
      { id: "up_nature_10", word: "morze", hint: "Море", polish: "Morze" }
    ]
  },

  emotions: {
    name: "Емоції",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Почуття",
    words: [
      { id: "up_emotions_1", word: "radość", hint: "Радість", polish: "Radość" },
      { id: "up_emotions_2", word: "smutek", hint: "Смуток", polish: "Smutek" },
      { id: "up_emotions_3", word: "strach", hint: "Страх", polish: "Strach" },
      { id: "up_emotions_4", word: "złość", hint: "Злість", polish: "Złość" },
      { id: "up_emotions_5", word: "miłość", hint: "Любов", polish: "Miłość" },
      { id: "up_emotions_6", word: "spokój", hint: "Спокій", polish: "Spokój" },
      { id: "up_emotions_7", word: "szczęście", hint: "Щастя", polish: "Szczęście" },
      { id: "up_emotions_8", word: "nadzieja", hint: "Надія", polish: "Nadzieja" },
      { id: "up_emotions_9", word: "gniew", hint: "Гнів", polish: "Gniew" },
      { id: "up_emotions_10", word: "duma", hint: "Гордість", polish: "Duma" }
    ]
  }
};

export default wordBuilderCategories;