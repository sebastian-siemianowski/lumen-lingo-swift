/**
 * UKRAINIAN → ENGLISH WORD BUILDER
 * Українська → English
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Початковий",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Прості англійські слова",
    words: [
      { id: "ue_word_1", word: "hello", hint: "Привіт", english: "Hello" },
      { id: "ue_word_2", word: "house", hint: "Будинок", english: "House" },
      { id: "ue_word_3", word: "love", hint: "Любов", english: "Love" },
      { id: "ue_word_4", word: "water", hint: "Вода", english: "Water" },
      { id: "ue_word_5", word: "cat", hint: "Кіт", english: "Cat" },
      { id: "ue_word_6", word: "dog", hint: "Собака", english: "Dog" },
      { id: "ue_word_7", word: "book", hint: "Книга", english: "Book" },
      { id: "ue_word_8", word: "sun", hint: "Сонце", english: "Sun" },
      { id: "ue_word_9", word: "moon", hint: "Місяць", english: "Moon" },
      { id: "ue_word_10", word: "star", hint: "Зірка", english: "Star" }
    ]
  },

  colors: {
    name: "Кольори",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Назви кольорів",
    words: [
      { id: "ue_col_1", word: "red", hint: "Червоний", english: "Red" },
      { id: "ue_col_2", word: "blue", hint: "Синій", english: "Blue" },
      { id: "ue_col_3", word: "green", hint: "Зелений", english: "Green" },
      { id: "ue_col_4", word: "yellow", hint: "Жовтий", english: "Yellow" },
      { id: "ue_col_5", word: "white", hint: "Білий", english: "White" },
      { id: "ue_col_6", word: "black", hint: "Чорний", english: "Black" },
      { id: "ue_col_7", word: "orange", hint: "Помаранчевий", english: "Orange" },
      { id: "ue_col_8", word: "purple", hint: "Фіолетовий", english: "Purple" },
      { id: "ue_col_9", word: "pink", hint: "Рожевий", english: "Pink" },
      { id: "ue_col_10", word: "brown", hint: "Коричневий", english: "Brown" }
    ]
  },

  family: {
    name: "Сім'я",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Члени сім'ї",
    words: [
      { id: "ue_fam_1", word: "father", hint: "Батько", english: "Father" },
      { id: "ue_fam_2", word: "mother", hint: "Мати", english: "Mother" },
      { id: "ue_fam_3", word: "brother", hint: "Брат", english: "Brother" },
      { id: "ue_fam_4", word: "sister", hint: "Сестра", english: "Sister" },
      { id: "ue_fam_5", word: "son", hint: "Син", english: "Son" },
      { id: "ue_fam_6", word: "daughter", hint: "Донька", english: "Daughter" },
      { id: "ue_fam_7", word: "uncle", hint: "Дядько", english: "Uncle" },
      { id: "ue_fam_8", word: "aunt", hint: "Тітка", english: "Aunt" },
      { id: "ue_fam_9", word: "cousin", hint: "Двоюрідний брат/сестра", english: "Cousin" },
      { id: "ue_fam_10", word: "family", hint: "Сім'я", english: "Family" }
    ]
  },

  house: {
    name: "Дім",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Домашні предмети",
    words: [
      { id: "ue_house_1", word: "table", hint: "Стіл", english: "Table" },
      { id: "ue_house_2", word: "chair", hint: "Стілець", english: "Chair" },
      { id: "ue_house_3", word: "bed", hint: "Ліжко", english: "Bed" },
      { id: "ue_house_4", word: "door", hint: "Двері", english: "Door" },
      { id: "ue_house_5", word: "window", hint: "Вікно", english: "Window" },
      { id: "ue_house_6", word: "kitchen", hint: "Кухня", english: "Kitchen" },
      { id: "ue_house_7", word: "bedroom", hint: "Спальня", english: "Bedroom" },
      { id: "ue_house_8", word: "bathroom", hint: "Ванна кімната", english: "Bathroom" },
      { id: "ue_house_9", word: "garden", hint: "Сад", english: "Garden" },
      { id: "ue_house_10", word: "roof", hint: "Дах", english: "Roof" }
    ]
  },

  food: {
    name: "Їжа",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Популярна їжа",
    words: [
      { id: "ue_food_1", word: "bread", hint: "Хліб", english: "Bread" },
      { id: "ue_food_2", word: "milk", hint: "Молоко", english: "Milk" },
      { id: "ue_food_3", word: "apple", hint: "Яблуко", english: "Apple" },
      { id: "ue_food_4", word: "cheese", hint: "Сир", english: "Cheese" },
      { id: "ue_food_5", word: "meat", hint: "М'ясо", english: "Meat" },
      { id: "ue_food_6", word: "fish", hint: "Риба", english: "Fish" },
      { id: "ue_food_7", word: "egg", hint: "Яйце", english: "Egg" },
      { id: "ue_food_8", word: "rice", hint: "Рис", english: "Rice" },
      { id: "ue_food_9", word: "vegetable", hint: "Овоч", english: "Vegetable" },
      { id: "ue_food_10", word: "fruit", hint: "Фрукт", english: "Fruit" }
    ]
  },

  animals: {
    name: "Тварини",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Назви тварин",
    words: [
      { id: "ue_ani_1", word: "horse", hint: "Кінь", english: "Horse" },
      { id: "ue_ani_2", word: "cow", hint: "Корова", english: "Cow" },
      { id: "ue_ani_3", word: "pig", hint: "Свиня", english: "Pig" },
      { id: "ue_ani_4", word: "chicken", hint: "Курка", english: "Chicken" },
      { id: "ue_ani_5", word: "bird", hint: "Птах", english: "Bird" },
      { id: "ue_ani_6", word: "mouse", hint: "Миша", english: "Mouse" },
      { id: "ue_ani_7", word: "snake", hint: "Змія", english: "Snake" },
      { id: "ue_ani_8", word: "lion", hint: "Лев", english: "Lion" },
      { id: "ue_ani_9", word: "tiger", hint: "Тигр", english: "Tiger" },
      { id: "ue_ani_10", word: "elephant", hint: "Слон", english: "Elephant" }
    ]
  },

  places: {
    name: "Місця",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Локації",
    words: [
      { id: "ue_place_1", word: "city", hint: "Місто", english: "City" },
      { id: "ue_place_2", word: "beach", hint: "Пляж", english: "Beach" },
      { id: "ue_place_3", word: "park", hint: "Парк", english: "Park" },
      { id: "ue_place_4", word: "school", hint: "Школа", english: "School" },
      { id: "ue_place_5", word: "hospital", hint: "Лікарня", english: "Hospital" },
      { id: "ue_place_6", word: "store", hint: "Магазин", english: "Store" },
      { id: "ue_place_7", word: "street", hint: "Вулиця", english: "Street" },
      { id: "ue_place_8", word: "airport", hint: "Аеропорт", english: "Airport" },
      { id: "ue_place_9", word: "bridge", hint: "Міст", english: "Bridge" },
      { id: "ue_place_10", word: "mountain", hint: "Гора", english: "Mountain" }
    ]
  },

  time: {
    name: "Час",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Слова про час",
    words: [
      { id: "ue_time_1", word: "morning", hint: "Ранок", english: "Morning" },
      { id: "ue_time_2", word: "evening", hint: "Вечір", english: "Evening" },
      { id: "ue_time_3", word: "tomorrow", hint: "Завтра", english: "Tomorrow" },
      { id: "ue_time_4", word: "yesterday", hint: "Вчора", english: "Yesterday" },
      { id: "ue_time_5", word: "year", hint: "Рік", english: "Year" },
      { id: "ue_time_6", word: "month", hint: "Місяць", english: "Month" },
      { id: "ue_time_7", word: "week", hint: "Тиждень", english: "Week" },
      { id: "ue_time_8", word: "hour", hint: "Година", english: "Hour" },
      { id: "ue_time_9", word: "minute", hint: "Хвилина", english: "Minute" },
      { id: "ue_time_10", word: "second", hint: "Секунда", english: "Second" }
    ]
  },

  nature: {
    name: "Природа",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Природа",
    words: [
      { id: "ue_nat_1", word: "tree", hint: "Дерево", english: "Tree" },
      { id: "ue_nat_2", word: "flower", hint: "Квітка", english: "Flower" },
      { id: "ue_nat_3", word: "mountain", hint: "Гора", english: "Mountain" },
      { id: "ue_nat_4", word: "river", hint: "Річка", english: "River" },
      { id: "ue_nat_5", word: "forest", hint: "Ліс", english: "Forest" },
      { id: "ue_nat_6", word: "lake", hint: "Озеро", english: "Lake" },
      { id: "ue_nat_7", word: "sea", hint: "Море", english: "Sea" },
      { id: "ue_nat_8", word: "desert", hint: "Пустеля", english: "Desert" },
      { id: "ue_nat_9", word: "island", hint: "Острів", english: "Island" },
      { id: "ue_nat_10", word: "sky", hint: "Небо", english: "Sky" }
    ]
  },

  emotions: {
    name: "Емоції",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Почуття",
    words: [
      { id: "ue_emo_1", word: "happy", hint: "Щасливий", english: "Happy" },
      { id: "ue_emo_2", word: "sad", hint: "Сумний", english: "Sad" },
      { id: "ue_emo_3", word: "angry", hint: "Злий", english: "Angry" },
      { id: "ue_emo_4", word: "tired", hint: "Втомлений", english: "Tired" },
      { id: "ue_emo_5", word: "nervous", hint: "Нервовий", english: "Nervous" },
      { id: "ue_emo_6", word: "calm", hint: "Спокійний", english: "Calm" },
      { id: "ue_emo_7", word: "afraid", hint: "Наляканий", english: "Afraid" },
      { id: "ue_emo_8", word: "proud", hint: "Гордий", english: "Proud" },
      { id: "ue_emo_9", word: "hopeful", hint: "Сповнений надії", english: "Hopeful" },
      { id: "ue_emo_10", word: "joyful", hint: "Радісний", english: "Joyful" }
    ]
  }
};

export default wordBuilderCategories;