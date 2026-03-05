/**
 * UKRAINIAN → ENGLISH FLASHCARDS
 * 
 * Native Language: Ukrainian (Українська)
 * Target Language: English
 */

import { BookOpen, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, Heart, Cloud, TreePine, Shirt, Briefcase, Car, GraduationCap, Coffee, Dumbbell, Music, Film, Plane, Palette } from "lucide-react";

export const flashcardsCategories = {
  basics: {
    name: "Основи",
    description: "Базові фрази",
    icon: BookOpen,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "ue_basic_1", ukrainian: "Привіт", english: "Hello", example: "Hello, how are you?", exampleTranslation: "Привіт, як справи?" },
      { id: "ue_basic_2", ukrainian: "Дякую", english: "Thank you", example: "Thank you for your help", exampleTranslation: "Дякую за допомогу" },
      { id: "ue_basic_3", ukrainian: "Будь ласка", english: "Please", example: "Please, help me", exampleTranslation: "Будь ласка, допоможи мені" },
      { id: "ue_basic_4", ukrainian: "Так", english: "Yes", example: "Yes, that's true", exampleTranslation: "Так, це правда" },
      { id: "ue_basic_5", ukrainian: "Ні", english: "No", example: "No, I don't want", exampleTranslation: "Ні, не хочу" },
      { id: "ue_basic_6", ukrainian: "Вибачте", english: "Sorry", example: "Sorry, I'm late", exampleTranslation: "Вибачте, я спізнився" },
      { id: "ue_basic_7", ukrainian: "Добрий день", english: "Good afternoon", example: "Good afternoon, sir", exampleTranslation: "Добрий день, пане" },
      { id: "ue_basic_8", ukrainian: "До побачення", english: "Goodbye", example: "Goodbye, see you later", exampleTranslation: "До побачення, побачимось" },
      { id: "ue_basic_9", ukrainian: "Добраніч", english: "Good night", example: "Good night everyone", exampleTranslation: "Добраніч усім" },
      { id: "ue_basic_10", ukrainian: "Гарного дня", english: "Have a nice day", example: "Have a nice day", exampleTranslation: "Гарного дня" }
    ]
  },

  family: {
    name: "Родина",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Члени родини",
    words: [
      { id: "ue_fam_1", ukrainian: "Батько", english: "Father", example: "My father works", exampleTranslation: "Мій батько працює" },
      { id: "ue_fam_2", ukrainian: "Мати", english: "Mother", example: "My mother cooks", exampleTranslation: "Моя мати готує" },
      { id: "ue_fam_3", ukrainian: "Брат", english: "Brother", example: "My brother studies", exampleTranslation: "Мій брат навчається" },
      { id: "ue_fam_4", ukrainian: "Сестра", english: "Sister", example: "My sister sings", exampleTranslation: "Моя сестра співає" },
      { id: "ue_fam_5", ukrainian: "Син", english: "Son", example: "My son plays", exampleTranslation: "Мій син грає" },
      { id: "ue_fam_6", ukrainian: "Дочка", english: "Daughter", example: "My daughter reads", exampleTranslation: "Моя дочка читає" },
      { id: "ue_fam_7", ukrainian: "Дідусь", english: "Grandfather", example: "My grandfather is old", exampleTranslation: "Мій дідусь старий" },
      { id: "ue_fam_8", ukrainian: "Бабуся", english: "Grandmother", example: "My grandmother cooks well", exampleTranslation: "Моя бабуся добре готує" },
      { id: "ue_fam_9", ukrainian: "Дядько", english: "Uncle", example: "My uncle lives far away", exampleTranslation: "Мій дядько живе далеко" },
      { id: "ue_fam_10", ukrainian: "Тітка", english: "Aunt", example: "My aunt is kind", exampleTranslation: "Моя тітка добра" }
    ]
  },

  house: {
    name: "Дім",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    description: "Предмети в домі",
    words: [
      { id: "ue_house_1", ukrainian: "Дім", english: "House", example: "My house is big", exampleTranslation: "Мій дім великий" },
      { id: "ue_house_2", ukrainian: "Кімната", english: "Room", example: "The room is clean", exampleTranslation: "Кімната чиста" },
      { id: "ue_house_3", ukrainian: "Кухня", english: "Kitchen", example: "I cook in the kitchen", exampleTranslation: "Я готую на кухні" },
      { id: "ue_house_4", ukrainian: "Ванна", english: "Bathroom", example: "The bathroom is new", exampleTranslation: "Ванна нова" },
      { id: "ue_house_5", ukrainian: "Спальня", english: "Bedroom", example: "My bedroom is comfortable", exampleTranslation: "Моя спальня зручна" },
      { id: "ue_house_6", ukrainian: "Двері", english: "Door", example: "Close the door", exampleTranslation: "Зачини двері" },
      { id: "ue_house_7", ukrainian: "Вікно", english: "Window", example: "Open the window", exampleTranslation: "Відкрий вікно" },
      { id: "ue_house_8", ukrainian: "Стіл", english: "Table", example: "The table is wooden", exampleTranslation: "Стіл дерев'яний" },
      { id: "ue_house_9", ukrainian: "Стілець", english: "Chair", example: "The chair is comfortable", exampleTranslation: "Стілець зручний" },
      { id: "ue_house_10", ukrainian: "Ліжко", english: "Bed", example: "The bed is soft", exampleTranslation: "Ліжко м'яке" }
    ]
  },

  food: {
    name: "Їжа",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    description: "Основні продукти",
    words: [
      { id: "ue_food_1", ukrainian: "Вода", english: "Water", example: "A glass of water, please", exampleTranslation: "Склянка води, будь ласка" },
      { id: "ue_food_2", ukrainian: "Хліб", english: "Bread", example: "Fresh bread", exampleTranslation: "Свіжий хліб" },
      { id: "ue_food_3", ukrainian: "Кава", english: "Coffee", example: "A cup of coffee", exampleTranslation: "Чашка кави" },
      { id: "ue_food_4", ukrainian: "Чай", english: "Tea", example: "I like tea", exampleTranslation: "Я люблю чай" },
      { id: "ue_food_5", ukrainian: "Молоко", english: "Milk", example: "Fresh milk", exampleTranslation: "Свіже молоко" },
      { id: "ue_food_6", ukrainian: "Яблуко", english: "Apple", example: "Red apple", exampleTranslation: "Червоне яблуко" },
      { id: "ue_food_7", ukrainian: "М'ясо", english: "Meat", example: "Grilled meat", exampleTranslation: "М'ясо на грилі" },
      { id: "ue_food_8", ukrainian: "Риба", english: "Fish", example: "Fresh fish", exampleTranslation: "Свіжа риба" },
      { id: "ue_food_9", ukrainian: "Сир", english: "Cheese", example: "Ukrainian cheese", exampleTranslation: "Український сир" },
      { id: "ue_food_10", ukrainian: "Вино", english: "Wine", example: "Red wine", exampleTranslation: "Червоне вино" }
    ]
  },

  animals: {
    name: "Тварини",
    icon: Dog,
    color: "from-amber-400 to-yellow-500",
    level: "beginner",
    description: "Назви тварин",
    words: [
      { id: "ue_animal_1", ukrainian: "Собака", english: "Dog", example: "The dog is friendly", exampleTranslation: "Собака дружній" },
      { id: "ue_animal_2", ukrainian: "Кіт", english: "Cat", example: "The cat sleeps", exampleTranslation: "Кіт спить" },
      { id: "ue_animal_3", ukrainian: "Птах", english: "Bird", example: "The bird sings", exampleTranslation: "Птах співає" },
      { id: "ue_animal_4", ukrainian: "Риба", english: "Fish", example: "The fish swims", exampleTranslation: "Риба пливе" },
      { id: "ue_animal_5", ukrainian: "Кінь", english: "Horse", example: "The horse runs fast", exampleTranslation: "Кінь біжить швидко" },
      { id: "ue_animal_6", ukrainian: "Корова", english: "Cow", example: "The cow gives milk", exampleTranslation: "Корова дає молоко" },
      { id: "ue_animal_7", ukrainian: "Свиня", english: "Pig", example: "The pig is on the farm", exampleTranslation: "Свиня на фермі" },
      { id: "ue_animal_8", ukrainian: "Курка", english: "Chicken", example: "The chicken lays eggs", exampleTranslation: "Курка несе яйця" },
      { id: "ue_animal_9", ukrainian: "Кролик", english: "Rabbit", example: "The rabbit jumps", exampleTranslation: "Кролик стрибає" },
      { id: "ue_animal_10", ukrainian: "Миша", english: "Mouse", example: "The mouse is small", exampleTranslation: "Миша маленька" }
    ]
  },

  places: {
    name: "Місця",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    description: "Локації",
    words: [
      { id: "ue_place_1", ukrainian: "Магазин", english: "Store", example: "The store is open", exampleTranslation: "Магазин відкритий" },
      { id: "ue_place_2", ukrainian: "Школа", english: "School", example: "I go to school", exampleTranslation: "Я йду до школи" },
      { id: "ue_place_3", ukrainian: "Лікарня", english: "Hospital", example: "The hospital is close", exampleTranslation: "Лікарня близько" },
      { id: "ue_place_4", ukrainian: "Парк", english: "Park", example: "Children play in the park", exampleTranslation: "Діти граються в парку" },
      { id: "ue_place_5", ukrainian: "Вокзал", english: "Train station", example: "Railway station", exampleTranslation: "Залізничний вокзал" },
      { id: "ue_place_6", ukrainian: "Аеропорт", english: "Airport", example: "I'm at the airport", exampleTranslation: "Я в аеропорту" },
      { id: "ue_place_7", ukrainian: "Ресторан", english: "Restaurant", example: "We eat at a restaurant", exampleTranslation: "Ми їмо в ресторані" },
      { id: "ue_place_8", ukrainian: "Готель", english: "Hotel", example: "The hotel is big", exampleTranslation: "Готель великий" },
      { id: "ue_place_9", ukrainian: "Банк", english: "Bank", example: "I go to the bank", exampleTranslation: "Я йду до банку" },
      { id: "ue_place_10", ukrainian: "Музей", english: "Museum", example: "The museum is interesting", exampleTranslation: "Музей цікавий" }
    ]
  },

  time: {
    name: "Час",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    description: "Часові вирази",
    words: [
      { id: "ue_time_1", ukrainian: "Сьогодні", english: "Today", example: "Today is Monday", exampleTranslation: "Сьогодні понеділок" },
      { id: "ue_time_2", ukrainian: "Вчора", english: "Yesterday", example: "Yesterday was Sunday", exampleTranslation: "Вчора була неділя" },
      { id: "ue_time_3", ukrainian: "Завтра", english: "Tomorrow", example: "Tomorrow is Tuesday", exampleTranslation: "Завтра вівторок" },
      { id: "ue_time_4", ukrainian: "Зараз", english: "Now", example: "I'm working now", exampleTranslation: "Я працюю зараз" },
      { id: "ue_time_5", ukrainian: "Пізніше", english: "Later", example: "I'll do it later", exampleTranslation: "Я зроблю це пізніше" },
      { id: "ue_time_6", ukrainian: "Ранок", english: "Morning", example: "Good morning", exampleTranslation: "Добрий ранок" },
      { id: "ue_time_7", ukrainian: "День", english: "Day", example: "The day is long", exampleTranslation: "День довгий" },
      { id: "ue_time_8", ukrainian: "Ніч", english: "Night", example: "Good night", exampleTranslation: "Добраніч" },
      { id: "ue_time_9", ukrainian: "Тиждень", english: "Week", example: "Next week", exampleTranslation: "Наступний тиждень" },
      { id: "ue_time_10", ukrainian: "Місяць", english: "Month", example: "This month", exampleTranslation: "Цей місяць" }
    ]
  },

  emotions: {
    name: "Емоції",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "beginner",
    description: "Почуття",
    words: [
      { id: "ue_emo_1", ukrainian: "Щасливий", english: "Happy", example: "I am happy", exampleTranslation: "Я щасливий" },
      { id: "ue_emo_2", ukrainian: "Сумний", english: "Sad", example: "He is sad", exampleTranslation: "Він сумний" },
      { id: "ue_emo_3", ukrainian: "Злий", english: "Angry", example: "She is angry", exampleTranslation: "Вона зла" },
      { id: "ue_emo_4", ukrainian: "Втомлений", english: "Tired", example: "I am tired", exampleTranslation: "Я втомлений" },
      { id: "ue_emo_5", ukrainian: "Збуджений", english: "Excited", example: "We are excited", exampleTranslation: "Ми збуджені" },
      { id: "ue_emo_6", ukrainian: "Нервовий", english: "Nervous", example: "He is nervous", exampleTranslation: "Він нервовий" },
      { id: "ue_emo_7", ukrainian: "Спокійний", english: "Calm", example: "She is calm", exampleTranslation: "Вона спокійна" },
      { id: "ue_emo_8", ukrainian: "Здивований", english: "Surprised", example: "I am surprised", exampleTranslation: "Я здивований" },
      { id: "ue_emo_9", ukrainian: "Наляканий", english: "Scared", example: "The child is scared", exampleTranslation: "Дитина налякана" },
      { id: "ue_emo_10", ukrainian: "Нудний", english: "Bored", example: "They are bored", exampleTranslation: "Їм нудно" }
    ]
  },

  weather: {
    name: "Погода",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    description: "Погодні умови",
    words: [
      { id: "ue_weather_1", ukrainian: "Сонце", english: "Sun", example: "The sun shines", exampleTranslation: "Сонце світить" },
      { id: "ue_weather_2", ukrainian: "Дощ", english: "Rain", example: "It's raining", exampleTranslation: "Йде дощ" },
      { id: "ue_weather_3", ukrainian: "Сніг", english: "Snow", example: "It's snowing", exampleTranslation: "Йде сніг" },
      { id: "ue_weather_4", ukrainian: "Вітер", english: "Wind", example: "It's windy", exampleTranslation: "Вітряно" },
      { id: "ue_weather_5", ukrainian: "Хмара", english: "Cloud", example: "There are clouds in the sky", exampleTranslation: "На небі хмари" },
      { id: "ue_weather_6", ukrainian: "Буря", english: "Storm", example: "A storm is coming", exampleTranslation: "Наближається буря" },
      { id: "ue_weather_7", ukrainian: "Жарко", english: "Hot", example: "It's very hot", exampleTranslation: "Дуже жарко" },
      { id: "ue_weather_8", ukrainian: "Холодно", english: "Cold", example: "It's cold in winter", exampleTranslation: "Взимку холодно" },
      { id: "ue_weather_9", ukrainian: "Блискавка", english: "Lightning", example: "I saw lightning", exampleTranslation: "Я бачив блискавку" },
      { id: "ue_weather_10", ukrainian: "Грім", english: "Thunder", example: "You can hear thunder", exampleTranslation: "Чути грім" }
    ]
  },

  nature: {
    name: "Природа",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    description: "Природа",
    words: [
      { id: "ue_nature_1", ukrainian: "Дерево", english: "Tree", example: "The tree is tall", exampleTranslation: "Дерево високе" },
      { id: "ue_nature_2", ukrainian: "Квітка", english: "Flower", example: "The flower is beautiful", exampleTranslation: "Квітка гарна" },
      { id: "ue_nature_3", ukrainian: "Гора", english: "Mountain", example: "The mountain is high", exampleTranslation: "Гора висока" },
      { id: "ue_nature_4", ukrainian: "Річка", english: "River", example: "The river is long", exampleTranslation: "Річка довга" },
      { id: "ue_nature_5", ukrainian: "Море", english: "Sea", example: "The sea is blue", exampleTranslation: "Море синє" },
      { id: "ue_nature_6", ukrainian: "Ліс", english: "Forest", example: "We walk through the forest", exampleTranslation: "Ми гуляємо лісом" },
      { id: "ue_nature_7", ukrainian: "Озеро", english: "Lake", example: "The lake is calm", exampleTranslation: "Озеро спокійне" },
      { id: "ue_nature_8", ukrainian: "Небо", english: "Sky", example: "The sky is blue", exampleTranslation: "Небо блакитне" },
      { id: "ue_nature_9", ukrainian: "Зірка", english: "Star", example: "The stars shine", exampleTranslation: "Зірки світять" },
      { id: "ue_nature_10", ukrainian: "Місяць", english: "Moon", example: "The moon is full", exampleTranslation: "Місяць повний" }
    ]
  },

  clothing: {
    name: "Одяг",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    description: "Одяг",
    words: [
      { id: "ue_cloth_1", ukrainian: "Сорочка", english: "Shirt", example: "I like your shirt", exampleTranslation: "Мені подобається твоя сорочка" },
      { id: "ue_cloth_2", ukrainian: "Штани", english: "Pants", example: "I need new pants", exampleTranslation: "Мені потрібні нові штани" },
      { id: "ue_cloth_3", ukrainian: "Взуття", english: "Shoes", example: "I bought black shoes", exampleTranslation: "Я купив чорне взуття" },
      { id: "ue_cloth_4", ukrainian: "Сукня", english: "Dress", example: "Beautiful dress", exampleTranslation: "Гарна сукня" },
      { id: "ue_cloth_5", ukrainian: "Куртка", english: "Jacket", example: "I need a jacket", exampleTranslation: "Мені потрібна куртка" },
      { id: "ue_cloth_6", ukrainian: "Капелюх", english: "Hat", example: "Put on the hat", exampleTranslation: "Одягни капелюх" },
      { id: "ue_cloth_7", ukrainian: "Шкарпетки", english: "Socks", example: "My socks are clean", exampleTranslation: "Мої шкарпетки чисті" },
      { id: "ue_cloth_8", ukrainian: "Рукавички", english: "Gloves", example: "You wear gloves in winter", exampleTranslation: "Взимку носиш рукавички" },
      { id: "ue_cloth_9", ukrainian: "Шарф", english: "Scarf", example: "The scarf is soft", exampleTranslation: "Шарф м'який" },
      { id: "ue_cloth_10", ukrainian: "Спідниця", english: "Skirt", example: "The skirt is nice", exampleTranslation: "Спідниця гарна" }
    ]
  },

  work: {
    name: "Робота",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    description: "Професії",
    words: [
      { id: "ue_work_1", ukrainian: "Робота", english: "Work", example: "I go to work", exampleTranslation: "Я йду на роботу" },
      { id: "ue_work_2", ukrainian: "Лікар", english: "Doctor", example: "He is a doctor", exampleTranslation: "Він лікар" },
      { id: "ue_work_3", ukrainian: "Вчитель", english: "Teacher", example: "My teacher is great", exampleTranslation: "Мій вчитель чудовий" },
      { id: "ue_work_4", ukrainian: "Інженер", english: "Engineer", example: "I am an engineer", exampleTranslation: "Я інженер" },
      { id: "ue_work_5", ukrainian: "Адвокат", english: "Lawyer", example: "She is a lawyer", exampleTranslation: "Вона адвокат" },
      { id: "ue_work_6", ukrainian: "Менеджер", english: "Manager", example: "I work as a manager", exampleTranslation: "Я працюю менеджером" },
      { id: "ue_work_7", ukrainian: "Офіс", english: "Office", example: "I work in an office", exampleTranslation: "Я працюю в офісі" },
      { id: "ue_work_8", ukrainian: "Зарплата", english: "Salary", example: "My salary is good", exampleTranslation: "Моя зарплата добра" },
      { id: "ue_work_9", ukrainian: "Начальник", english: "Boss", example: "My boss is demanding", exampleTranslation: "Мій начальник вимогливий" },
      { id: "ue_work_10", ukrainian: "Колега", english: "Colleague", example: "This is my colleague from work", exampleTranslation: "Це мій колега по роботі" }
    ]
  },

  transport: {
    name: "Транспорт",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Засоби транспорту",
    words: [
      { id: "ue_trans_1", ukrainian: "Машина", english: "Car", example: "I have a new car", exampleTranslation: "У мене нова машина" },
      { id: "ue_trans_2", ukrainian: "Автобус", english: "Bus", example: "I go by bus", exampleTranslation: "Я їду автобусом" },
      { id: "ue_trans_3", ukrainian: "Поїзд", english: "Train", example: "The train is fast", exampleTranslation: "Поїзд швидкий" },
      { id: "ue_trans_4", ukrainian: "Літак", english: "Airplane", example: "I fly by plane", exampleTranslation: "Я летю літаком" },
      { id: "ue_trans_5", ukrainian: "Велосипед", english: "Bicycle", example: "I ride a bicycle", exampleTranslation: "Я їду на велосипеді" },
      { id: "ue_trans_6", ukrainian: "Таксі", english: "Taxi", example: "Call a taxi", exampleTranslation: "Замов таксі" },
      { id: "ue_trans_7", ukrainian: "Метро", english: "Metro", example: "I use the metro", exampleTranslation: "Я користуюся метро" },
      { id: "ue_trans_8", ukrainian: "Квиток", english: "Ticket", example: "Buy a ticket", exampleTranslation: "Купи квиток" },
      { id: "ue_trans_9", ukrainian: "Подорож", english: "Journey", example: "I'm going on a journey", exampleTranslation: "Я їду в подорож" },
      { id: "ue_trans_10", ukrainian: "Водій", english: "Driver", example: "The driver is careful", exampleTranslation: "Водій обережний" }
    ]
  },

  education: {
    name: "Освіта",
    icon: GraduationCap,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    description: "Освіта",
    words: [
      { id: "ue_edu_1", ukrainian: "Учень", english: "Student", example: "I am a student", exampleTranslation: "Я учень" },
      { id: "ue_edu_2", ukrainian: "Урок", english: "Lesson", example: "I have a lesson at nine", exampleTranslation: "У мене урок о дев'ятій" },
      { id: "ue_edu_3", ukrainian: "Домашнє завдання", english: "Homework", example: "I have a lot of homework", exampleTranslation: "У мене багато домашнього завдання" },
      { id: "ue_edu_4", ukrainian: "Іспит", english: "Exam", example: "The exam is tomorrow", exampleTranslation: "Іспит завтра" },
      { id: "ue_edu_5", ukrainian: "Книга", english: "Book", example: "Read this book", exampleTranslation: "Прочитай цю книгу" },
      { id: "ue_edu_6", ukrainian: "Зошит", english: "Notebook", example: "I need a new notebook", exampleTranslation: "Мені потрібний новий зошит" },
      { id: "ue_edu_7", ukrainian: "Олівець", english: "Pencil", example: "Do you have a pencil?", exampleTranslation: "У тебе є олівець?" },
      { id: "ue_edu_8", ukrainian: "Ручка", english: "Pen", example: "Lend me a pen", exampleTranslation: "Позич мені ручку" },
      { id: "ue_edu_9", ukrainian: "Рюкзак", english: "Backpack", example: "My backpack is heavy", exampleTranslation: "Мій рюкзак важкий" },
      { id: "ue_edu_10", ukrainian: "Бібліотека", english: "Library", example: "I study at the library", exampleTranslation: "Я навчаюся в бібліотеці" }
    ]
  },

  restaurant: {
    name: "Ресторан",
    icon: Coffee,
    color: "from-rose-400 to-pink-500",
    level: "intermediate",
    description: "У ресторані",
    words: [
      { id: "ue_rest_1", ukrainian: "Ресторан", english: "Restaurant", example: "We eat at a restaurant", exampleTranslation: "Ми їмо в ресторані" },
      { id: "ue_rest_2", ukrainian: "Меню", english: "Menu", example: "Menu, please", exampleTranslation: "Меню, будь ласка" },
      { id: "ue_rest_3", ukrainian: "Офіціант", english: "Waiter", example: "The waiter is nice", exampleTranslation: "Офіціант милий" },
      { id: "ue_rest_4", ukrainian: "Замовлення", english: "Order", example: "I want to make an order", exampleTranslation: "Я хочу зробити замовлення" },
      { id: "ue_rest_5", ukrainian: "Рахунок", english: "Bill", example: "The bill, please", exampleTranslation: "Рахунок, будь ласка" },
      { id: "ue_rest_6", ukrainian: "Чайові", english: "Tip", example: "I leave a tip", exampleTranslation: "Я залишаю чайові" },
      { id: "ue_rest_7", ukrainian: "Смачний", english: "Delicious", example: "This is delicious", exampleTranslation: "Це смачно" },
      { id: "ue_rest_8", ukrainian: "Голодний", english: "Hungry", example: "I am hungry", exampleTranslation: "Я голодний" },
      { id: "ue_rest_9", ukrainian: "Спрагний", english: "Thirsty", example: "I am thirsty", exampleTranslation: "Я спрагний" },
      { id: "ue_rest_10", ukrainian: "Столик", english: "Table", example: "I'm reserving a table", exampleTranslation: "Я резервую столик" }
    ]
  },

  sports: {
    name: "Спорт",
    icon: Dumbbell,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    description: "Спортивні дисципліни",
    words: [
      { id: "ue_sport_1", ukrainian: "Футбол", english: "Football", example: "I play football", exampleTranslation: "Я граю у футбол" },
      { id: "ue_sport_2", ukrainian: "Баскетбол", english: "Basketball", example: "I like basketball", exampleTranslation: "Я люблю баскетбол" },
      { id: "ue_sport_3", ukrainian: "Плавання", english: "Swimming", example: "Swimming is healthy", exampleTranslation: "Плавання корисне" },
      { id: "ue_sport_4", ukrainian: "Біг", english: "Running", example: "I run in the morning", exampleTranslation: "Я бігаю вранці" },
      { id: "ue_sport_5", ukrainian: "Теніс", english: "Tennis", example: "I play tennis", exampleTranslation: "Я граю в теніс" },
      { id: "ue_sport_6", ukrainian: "Спортзал", english: "Gym", example: "I go to the gym", exampleTranslation: "Я ходжу до спортзалу" },
      { id: "ue_sport_7", ukrainian: "Тренування", english: "Training", example: "I have training today", exampleTranslation: "У мене тренування сьогодні" },
      { id: "ue_sport_8", ukrainian: "Матч", english: "Match", example: "We watch a match", exampleTranslation: "Ми дивимося матч" },
      { id: "ue_sport_9", ukrainian: "Команда", english: "Team", example: "I'm on a team", exampleTranslation: "Я в команді" },
      { id: "ue_sport_10", ukrainian: "Тренер", english: "Coach", example: "Our coach is great", exampleTranslation: "Наш тренер чудовий" }
    ]
  },

  entertainment: {
    name: "Розваги",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    description: "Хобі",
    words: [
      { id: "ue_ent_1", ukrainian: "Музика", english: "Music", example: "I listen to music", exampleTranslation: "Я слухаю музику" },
      { id: "ue_ent_2", ukrainian: "Кіно", english: "Cinema", example: "I watch movies", exampleTranslation: "Я дивлюся фільми" },
      { id: "ue_ent_3", ukrainian: "Читання", english: "Reading", example: "Reading is my hobby", exampleTranslation: "Читання моє хобі" },
      { id: "ue_ent_4", ukrainian: "Танець", english: "Dance", example: "I love dance", exampleTranslation: "Я люблю танець" },
      { id: "ue_ent_5", ukrainian: "Спів", english: "Singing", example: "I like to sing", exampleTranslation: "Я люблю співати" },
      { id: "ue_ent_6", ukrainian: "Гітара", english: "Guitar", example: "I play guitar", exampleTranslation: "Я граю на гітарі" },
      { id: "ue_ent_7", ukrainian: "Концерт", english: "Concert", example: "I go to a concert", exampleTranslation: "Я йду на концерт" },
      { id: "ue_ent_8", ukrainian: "Театр", english: "Theater", example: "I go to the theater", exampleTranslation: "Я йду до театру" },
      { id: "ue_ent_9", ukrainian: "Ігри", english: "Games", example: "I play computer games", exampleTranslation: "Я граю в комп'ютерні ігри" },
      { id: "ue_ent_10", ukrainian: "Фотографія", english: "Photography", example: "I'm interested in photography", exampleTranslation: "Мене цікавить фотографія" }
    ]
  },

  movies: {
    name: "Кіно і телебачення",
    icon: Film,
    color: "from-purple-400 to-indigo-500",
    level: "advanced",
    description: "Медіа",
    words: [
      { id: "ue_movie_1", ukrainian: "Фільм", english: "Movie", example: "The movie is good", exampleTranslation: "Фільм хороший" },
      { id: "ue_movie_2", ukrainian: "Актор", english: "Actor", example: "He's a great actor", exampleTranslation: "Це чудовий актор" },
      { id: "ue_movie_3", ukrainian: "Режисер", english: "Director", example: "The director is famous", exampleTranslation: "Режисер відомий" },
      { id: "ue_movie_4", ukrainian: "Кінотеатр", english: "Cinema", example: "I go to the cinema", exampleTranslation: "Я йду в кінотеатр" },
      { id: "ue_movie_5", ukrainian: "Серіал", english: "TV series", example: "I watch a TV series", exampleTranslation: "Я дивлюся серіал" },
      { id: "ue_movie_6", ukrainian: "Телебачення", english: "Television", example: "I watch television", exampleTranslation: "Я дивлюся телебачення" },
      { id: "ue_movie_7", ukrainian: "Програма", english: "Program", example: "The program is interesting", exampleTranslation: "Програма цікава" },
      { id: "ue_movie_8", ukrainian: "Екран", english: "Screen", example: "The screen is big", exampleTranslation: "Екран великий" },
      { id: "ue_movie_9", ukrainian: "Квиток", english: "Ticket", example: "I'm buying a ticket", exampleTranslation: "Я купую квиток" },
      { id: "ue_movie_10", ukrainian: "Реклама", english: "Advertisement", example: "The advertisement is long", exampleTranslation: "Реклама довга" }
    ]
  },

  travel: {
    name: "Подорожі",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    description: "Туризм",
    words: [
      { id: "ue_travel_1", ukrainian: "Подорож", english: "Travel", example: "I'm going on a trip", exampleTranslation: "Я їду в подорож" },
      { id: "ue_travel_2", ukrainian: "Валіза", english: "Suitcase", example: "My suitcase is heavy", exampleTranslation: "Моя валіза важка" },
      { id: "ue_travel_3", ukrainian: "Паспорт", english: "Passport", example: "I need my passport", exampleTranslation: "Мені потрібен паспорт" },
      { id: "ue_travel_4", ukrainian: "Готель", english: "Hotel", example: "The hotel is comfortable", exampleTranslation: "Готель комфортний" },
      { id: "ue_travel_5", ukrainian: "Бронювання", english: "Reservation", example: "I have a reservation", exampleTranslation: "У мене є бронювання" },
      { id: "ue_travel_6", ukrainian: "Турист", english: "Tourist", example: "I am a tourist", exampleTranslation: "Я турист" },
      { id: "ue_travel_7", ukrainian: "Відпустка", english: "Vacation", example: "I'm on vacation", exampleTranslation: "Я у відпустці" },
      { id: "ue_travel_8", ukrainian: "Огляд", english: "Sightseeing", example: "We're doing sightseeing", exampleTranslation: "Ми робимо огляд" },
      { id: "ue_travel_9", ukrainian: "Гід", english: "Guide", example: "The guide is informative", exampleTranslation: "Гід інформативний" },
      { id: "ue_travel_10", ukrainian: "Сувенір", english: "Souvenir", example: "I'm buying a souvenir", exampleTranslation: "Я купую сувенір" }
    ]
  },

  colors: {
    name: "Кольори",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    description: "Назви кольорів",
    words: [
      { id: "ue_color_1", ukrainian: "Червоний", english: "Red", example: "The car is red", exampleTranslation: "Машина червона" },
      { id: "ue_color_2", ukrainian: "Синій", english: "Blue", example: "The sky is blue", exampleTranslation: "Небо синє" },
      { id: "ue_color_3", ukrainian: "Зелений", english: "Green", example: "The grass is green", exampleTranslation: "Трава зелена" },
      { id: "ue_color_4", ukrainian: "Жовтий", english: "Yellow", example: "The sun is yellow", exampleTranslation: "Сонце жовте" },
      { id: "ue_color_5", ukrainian: "Білий", english: "White", example: "The snow is white", exampleTranslation: "Сніг білий" },
      { id: "ue_color_6", ukrainian: "Чорний", english: "Black", example: "The night is black", exampleTranslation: "Ніч чорна" },
      { id: "ue_color_7", ukrainian: "Помаранчевий", english: "Orange", example: "The orange is orange", exampleTranslation: "Апельсин помаранчевий" },
      { id: "ue_color_8", ukrainian: "Фіолетовий", english: "Purple", example: "The flower is purple", exampleTranslation: "Квітка фіолетова" },
      { id: "ue_color_9", ukrainian: "Рожевий", english: "Pink", example: "The dress is pink", exampleTranslation: "Сукня рожева" },
      { id: "ue_color_10", ukrainian: "Коричневий", english: "Brown", example: "The bear is brown", exampleTranslation: "Ведмідь коричневий" }
    ]
  }
};

export default flashcardsCategories;