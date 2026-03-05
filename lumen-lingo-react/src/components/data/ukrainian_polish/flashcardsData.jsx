import { Hand, Users, UtensilsCrossed, MapPin, Shirt, Home, Briefcase, Car, School, Cloud, TreePine, Dog, Clock, Calendar, Heart, Dumbbell, Activity, BookOpen, Coffee, Landmark } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Вітання",
    description: "Базові вітання",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "up_basics_1", ukrainian: "Привіт", polish: "Cześć", example: "Cześć, jak się masz?", exampleTranslation: "Привіт, як справи?" },
      { id: "up_basics_2", ukrainian: "Дякую", polish: "Dziękuję", example: "Dziękuję za pomoc", exampleTranslation: "Дякую за допомогу" },
      { id: "up_basics_3", ukrainian: "Так", polish: "Tak", example: "Tak, to prawda", exampleTranslation: "Так, це правда" },
      { id: "up_basics_4", ukrainian: "Ні", polish: "Nie", example: "Nie, nie chcę", exampleTranslation: "Ні, не хочу" },
      { id: "up_basics_5", ukrainian: "Будь ласка", polish: "Proszę", example: "Proszę, pomóż mi", exampleTranslation: "Будь ласка, допоможи мені" },
      { id: "up_basics_6", ukrainian: "Вибачте", polish: "Przepraszam", example: "Przepraszam, przykro mi", exampleTranslation: "Вибачте, мені шкода" },
      { id: "up_basics_7", ukrainian: "Добрий день", polish: "Dzień dobry", example: "Dzień dobry, panie", exampleTranslation: "Добрий день, пане" },
      { id: "up_basics_8", ukrainian: "До побачення", polish: "Do widzenia", example: "Do widzenia, do zobaczenia", exampleTranslation: "До побачення, побачимось" },
      { id: "up_basics_9", ukrainian: "Добраніч", polish: "Dobranoc", example: "Dobranoc wszystkim", exampleTranslation: "Добраніч усім" },
      { id: "up_basics_10", ukrainian: "Гарного дня", polish: "Miłego dnia", example: "Miłego dnia", exampleTranslation: "Гарного дня" }
    ]
  },
  
  family: {
    name: "Родина",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Члени родини",
    words: [
      { id: "up_fam_1", ukrainian: "Батько", polish: "Ojciec", example: "Mój ojciec pracuje", exampleTranslation: "Мій батько працює" },
      { id: "up_fam_2", ukrainian: "Мати", polish: "Matka", example: "Moja matka gotuje", exampleTranslation: "Моя мати готує" },
      { id: "up_fam_3", ukrainian: "Брат", polish: "Brat", example: "Mój brat studiuje", exampleTranslation: "Мій брат навчається" },
      { id: "up_fam_4", ukrainian: "Сестра", polish: "Siostra", example: "Moja siostra śpiewa", exampleTranslation: "Моя сестра співає" },
      { id: "up_fam_5", ukrainian: "Син", polish: "Syn", example: "Mój syn gra", exampleTranslation: "Мій син грає" },
      { id: "up_fam_6", ukrainian: "Дочка", polish: "Córka", example: "Moja córka czyta", exampleTranslation: "Моя дочка читає" },
      { id: "up_fam_7", ukrainian: "Дідусь", polish: "Dziadek", example: "Mój dziadek jest stary", exampleTranslation: "Мій дідусь старий" },
      { id: "up_fam_8", ukrainian: "Бабуся", polish: "Babcia", example: "Moja babcia dobrze gotuje", exampleTranslation: "Моя бабуся добре готує" },
      { id: "up_fam_9", ukrainian: "Дядько", polish: "Wujek", example: "Mój wujek mieszka daleko", exampleTranslation: "Мій дядько живе далеко" },
      { id: "up_fam_10", ukrainian: "Тітка", polish: "Ciocia", example: "Moja ciocia jest miła", exampleTranslation: "Моя тітка добра" }
    ]
  },

  food: {
    name: "Їжа",
    description: "Основні продукти",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "up_food_1", ukrainian: "Вода", polish: "Woda", example: "Szklanka wody, proszę", exampleTranslation: "Склянка води, будь ласка" },
      { id: "up_food_2", ukrainian: "Хліб", polish: "Chleb", example: "Świeży chleb", exampleTranslation: "Свіжий хліб" },
      { id: "up_food_3", ukrainian: "Кава", polish: "Kawa", example: "Filiżanka kawy", exampleTranslation: "Чашка кави" },
      { id: "up_food_4", ukrainian: "Чай", polish: "Herbata", example: "Lubię herbatę", exampleTranslation: "Я люблю чай" },
      { id: "up_food_5", ukrainian: "Молоко", polish: "Mleko", example: "Świeże mleko", exampleTranslation: "Свіже молоко" },
      { id: "up_food_6", ukrainian: "Яблуко", polish: "Jabłko", example: "Czerwone jabłko", exampleTranslation: "Червоне яблуко" },
      { id: "up_food_7", ukrainian: "М'ясо", polish: "Mięso", example: "Grillowane mięso", exampleTranslation: "М'ясо на грилі" },
      { id: "up_food_8", ukrainian: "Риба", polish: "Ryba", example: "Świeża ryba", exampleTranslation: "Свіжа риба" },
      { id: "up_food_9", ukrainian: "Сир", polish: "Ser", example: "Polski ser", exampleTranslation: "Польський сир" },
      { id: "up_food_10", ukrainian: "Вино", polish: "Wino", example: "Czerwone wino", exampleTranslation: "Червоне вино" }
    ]
  },

  places: {
    name: "Місця",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    description: "Локації в місті",
    words: [
      { id: "up_place_1", ukrainian: "Магазин", polish: "Sklep", example: "Sklep jest otwarty", exampleTranslation: "Магазин відкритий" },
      { id: "up_place_2", ukrainian: "Школа", polish: "Szkoła", example: "Idę do szkoły", exampleTranslation: "Я йду до школи" },
      { id: "up_place_3", ukrainian: "Лікарня", polish: "Szpital", example: "Szpital jest blisko", exampleTranslation: "Лікарня близько" },
      { id: "up_place_4", ukrainian: "Парк", polish: "Park", example: "Dzieci bawią się w parku", exampleTranslation: "Діти граються в парку" },
      { id: "up_place_5", ukrainian: "Вокзал", polish: "Dworzec", example: "Dworzec kolejowy", exampleTranslation: "Залізничний вокзал" },
      { id: "up_place_6", ukrainian: "Аеропорт", polish: "Lotnisko", example: "Jestem na lotnisku", exampleTranslation: "Я в аеропорту" },
      { id: "up_place_7", ukrainian: "Ресторан", polish: "Restauracja", example: "Jemy w restauracji", exampleTranslation: "Ми їмо в ресторані" },
      { id: "up_place_8", ukrainian: "Готель", polish: "Hotel", example: "Hotel jest duży", exampleTranslation: "Готель великий" },
      { id: "up_place_9", ukrainian: "Банк", polish: "Bank", example: "Idę do banku", exampleTranslation: "Я йду до банку" },
      { id: "up_place_10", ukrainian: "Музей", polish: "Muzeum", example: "Muzeum jest ciekawe", exampleTranslation: "Музей цікавий" }
    ]
  },

  clothing: {
    name: "Одяг",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    description: "Одяг",
    words: [
      { id: "up_cloth_1", ukrainian: "Сорочка", polish: "Koszula", example: "Lubię twoją koszulę", exampleTranslation: "Мені подобається твоя сорочка" },
      { id: "up_cloth_2", ukrainian: "Штани", polish: "Spodnie", example: "Potrzebuję nowych spodni", exampleTranslation: "Мені потрібні нові штани" },
      { id: "up_cloth_3", ukrainian: "Взуття", polish: "Buty", example: "Kupiłem czarne buty", exampleTranslation: "Я купив чорне взуття" },
      { id: "up_cloth_4", ukrainian: "Сукня", polish: "Sukienka", example: "Piękna sukienka", exampleTranslation: "Гарна сукня" },
      { id: "up_cloth_5", ukrainian: "Куртка", polish: "Kurtka", example: "Potrzebuję kurtki", exampleTranslation: "Мені потрібна куртка" },
      { id: "up_cloth_6", ukrainian: "Капелюх", polish: "Kapelusz", example: "Załóż kapelusz", exampleTranslation: "Одягни капелюх" },
      { id: "up_cloth_7", ukrainian: "Шкарпетки", polish: "Skarpetki", example: "Moje skarpetki są czyste", exampleTranslation: "Мої шкарпетки чисті" },
      { id: "up_cloth_8", ukrainian: "Рукавички", polish: "Rękawiczki", example: "Zimą nosisz rękawiczki", exampleTranslation: "Взимку носиш рукавички" },
      { id: "up_cloth_9", ukrainian: "Шарф", polish: "Szalik", example: "Szalik jest miękki", exampleTranslation: "Шарф м'який" },
      { id: "up_cloth_10", ukrainian: "Спідниця", polish: "Spódnica", example: "Spódnica jest ładna", exampleTranslation: "Спідниця гарна" }
    ]
  },

  house: {
    name: "Дім",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    description: "Кімнати та меблі",
    words: [
      { id: "up_house_1", ukrainian: "Дім", polish: "Dom", example: "Mój dom jest duży", exampleTranslation: "Мій дім великий" },
      { id: "up_house_2", ukrainian: "Кімната", polish: "Pokój", example: "Pokój jest czysty", exampleTranslation: "Кімната чиста" },
      { id: "up_house_3", ukrainian: "Кухня", polish: "Kuchnia", example: "Gotuję w kuchni", exampleTranslation: "Я готую на кухні" },
      { id: "up_house_4", ukrainian: "Ванна", polish: "Łazienka", example: "Łazienka jest nowa", exampleTranslation: "Ванна нова" },
      { id: "up_house_5", ukrainian: "Спальня", polish: "Sypialnia", example: "Moja sypialnia jest wygodna", exampleTranslation: "Моя спальня зручна" },
      { id: "up_house_6", ukrainian: "Двері", polish: "Drzwi", example: "Zamknij drzwi", exampleTranslation: "Зачини двері" },
      { id: "up_house_7", ukrainian: "Вікно", polish: "Okno", example: "Otwórz okno", exampleTranslation: "Відкрий вікно" },
      { id: "up_house_8", ukrainian: "Стіл", polish: "Stół", example: "Stół jest drewniany", exampleTranslation: "Стіл дерев'яний" },
      { id: "up_house_9", ukrainian: "Стілець", polish: "Krzesło", example: "Krzesło jest wygodne", exampleTranslation: "Стілець зручний" },
      { id: "up_house_10", ukrainian: "Ліжко", polish: "Łóżko", example: "Łóżko jest miękkie", exampleTranslation: "Ліжко м'яке" }
    ]
  },

  work: {
    name: "Робота",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    description: "Професії",
    words: [
      { id: "up_work_1", ukrainian: "Робота", polish: "Praca", example: "Idę do pracy", exampleTranslation: "Я йду на роботу" },
      { id: "up_work_2", ukrainian: "Лікар", polish: "Lekarz", example: "On jest lekarzem", exampleTranslation: "Він лікар" },
      { id: "up_work_3", ukrainian: "Вчитель", polish: "Nauczyciel", example: "Mój nauczyciel jest świetny", exampleTranslation: "Мій вчитель чудовий" },
      { id: "up_work_4", ukrainian: "Інженер", polish: "Inżynier", example: "Jestem inżynierem", exampleTranslation: "Я інженер" },
      { id: "up_work_5", ukrainian: "Адвокат", polish: "Adwokat", example: "Ona jest adwokatem", exampleTranslation: "Вона адвокат" },
      { id: "up_work_6", ukrainian: "Менеджер", polish: "Menedżer", example: "Pracuję jako menedżer", exampleTranslation: "Я працюю менеджером" },
      { id: "up_work_7", ukrainian: "Офіс", polish: "Biuro", example: "Pracuję w biurze", exampleTranslation: "Я працюю в офісі" },
      { id: "up_work_8", ukrainian: "Зарплата", polish: "Pensja", example: "Moja pensja jest dobra", exampleTranslation: "Моя зарплата добра" },
      { id: "up_work_9", ukrainian: "Начальник", polish: "Szef", example: "Mój szef jest wymagający", exampleTranslation: "Мій начальник вимогливий" },
      { id: "up_work_10", ukrainian: "Колега", polish: "Kolega", example: "To mój kolega z pracy", exampleTranslation: "Це мій колега по роботі" }
    ]
  },

  travel: {
    name: "Транспорт",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Засоби транспорту",
    words: [
      { id: "up_travel_1", ukrainian: "Машина", polish: "Samochód", example: "Mam nowy samochód", exampleTranslation: "У мене нова машина" },
      { id: "up_travel_2", ukrainian: "Автобус", polish: "Autobus", example: "Jadę autobusem", exampleTranslation: "Я їду автобусом" },
      { id: "up_travel_3", ukrainian: "Поїзд", polish: "Pociąg", example: "Pociąg jest szybki", exampleTranslation: "Поїзд швидкий" },
      { id: "up_travel_4", ukrainian: "Літак", polish: "Samolot", example: "Lecę samolotem", exampleTranslation: "Я летю літаком" },
      { id: "up_travel_5", ukrainian: "Велосипед", polish: "Rower", example: "Jadę na rowerze", exampleTranslation: "Я їду на велосипеді" },
      { id: "up_travel_6", ukrainian: "Таксі", polish: "Taksówka", example: "Zamów taksówkę", exampleTranslation: "Замов таксі" },
      { id: "up_travel_7", ukrainian: "Метро", polish: "Metro", example: "Korzystam z metra", exampleTranslation: "Я користуюся метро" },
      { id: "up_travel_8", ukrainian: "Квиток", polish: "Bilet", example: "Kup bilet", exampleTranslation: "Купи квиток" },
      { id: "up_travel_9", ukrainian: "Подорож", polish: "Podróż", example: "Jadę w podróż", exampleTranslation: "Я їду в подорож" },
      { id: "up_travel_10", ukrainian: "Водій", polish: "Kierowca", example: "Kierowca jest ostrożny", exampleTranslation: "Водій обережний" }
    ]
  },

  school: {
    name: "Школа",
    icon: School,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    description: "Освіта",
    words: [
      { id: "up_school_1", ukrainian: "Учень", polish: "Uczeń", example: "Jestem uczniem", exampleTranslation: "Я учень" },
      { id: "up_school_2", ukrainian: "Урок", polish: "Lekcja", example: "Mam lekcję o dziewiątej", exampleTranslation: "У мене урок о дев'ятій" },
      { id: "up_school_3", ukrainian: "Домашнє завдання", polish: "Praca domowa", example: "Mam dużo pracy domowej", exampleTranslation: "У мене багато домашнього завдання" },
      { id: "up_school_4", ukrainian: "Іспит", polish: "Egzamin", example: "Egzamin jest jutro", exampleTranslation: "Іспит завтра" },
      { id: "up_school_5", ukrainian: "Книга", polish: "Książka", example: "Przeczytaj tę książkę", exampleTranslation: "Прочитай цю книгу" },
      { id: "up_school_6", ukrainian: "Зошит", polish: "Zeszyt", example: "Potrzebuję nowego zeszytu", exampleTranslation: "Мені потрібний новий зошит" },
      { id: "up_school_7", ukrainian: "Олівець", polish: "Ołówek", example: "Masz ołówek?", exampleTranslation: "У тебе є олівець?" },
      { id: "up_school_8", ukrainian: "Ручка", polish: "Długopis", example: "Pożycz mi długopis", exampleTranslation: "Позич мені ручку" },
      { id: "up_school_9", ukrainian: "Рюкзак", polish: "Plecak", example: "Mój plecak jest ciężki", exampleTranslation: "Мій рюкзак важкий" },
      { id: "up_school_10", ukrainian: "Бібліотека", polish: "Biblioteka", example: "Studiuję w bibliotece", exampleTranslation: "Я навчаюся в бібліотеці" }
    ]
  },

  weather: {
    name: "Погода",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "intermediate",
    description: "Погодні умови",
    words: [
      { id: "up_weather_1", ukrainian: "Сонце", polish: "Słońce", example: "Słońce świeci", exampleTranslation: "Сонце світить" },
      { id: "up_weather_2", ukrainian: "Дощ", polish: "Deszcz", example: "Pada deszcz", exampleTranslation: "Йде дощ" },
      { id: "up_weather_3", ukrainian: "Сніг", polish: "Śnieg", example: "Pada śnieg", exampleTranslation: "Йде сніг" },
      { id: "up_weather_4", ukrainian: "Вітер", polish: "Wiatr", example: "Jest wietrznie", exampleTranslation: "Вітряно" },
      { id: "up_weather_5", ukrainian: "Хмара", polish: "Chmura", example: "Na niebie są chmury", exampleTranslation: "На небі хмари" },
      { id: "up_weather_6", ukrainian: "Буря", polish: "Burza", example: "Nadchodzi burza", exampleTranslation: "Наближається буря" },
      { id: "up_weather_7", ukrainian: "Жарко", polish: "Gorąco", example: "Jest bardzo gorąco", exampleTranslation: "Дуже жарко" },
      { id: "up_weather_8", ukrainian: "Холодно", polish: "Zimno", example: "Zimą jest zimno", exampleTranslation: "Взимку холодно" },
      { id: "up_weather_9", ukrainian: "Блискавка", polish: "Błyskawica", example: "Widziałem błyskawicę", exampleTranslation: "Я бачив блискавку" },
      { id: "up_weather_10", ukrainian: "Грім", polish: "Grzmot", example: "Słychać grzmot", exampleTranslation: "Чути грім" }
    ]
  },

  nature: {
    name: "Природа",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    description: "Природа",
    words: [
      { id: "up_nature_1", ukrainian: "Дерево", polish: "Drzewo", example: "Drzewo jest wysokie", exampleTranslation: "Дерево високе" },
      { id: "up_nature_2", ukrainian: "Квітка", polish: "Kwiat", example: "Kwiat jest piękny", exampleTranslation: "Квітка гарна" },
      { id: "up_nature_3", ukrainian: "Гора", polish: "Góra", example: "Góra jest wysoka", exampleTranslation: "Гора висока" },
      { id: "up_nature_4", ukrainian: "Річка", polish: "Rzeka", example: "Rzeka jest długa", exampleTranslation: "Річка довга" },
      { id: "up_nature_5", ukrainian: "Море", polish: "Morze", example: "Morze jest niebieskie", exampleTranslation: "Море синє" },
      { id: "up_nature_6", ukrainian: "Ліс", polish: "Las", example: "Spacerujemy po lesie", exampleTranslation: "Ми гуляємо лісом" },
      { id: "up_nature_7", ukrainian: "Озеро", polish: "Jezioro", example: "Jezioro jest spokojne", exampleTranslation: "Озеро спокійне" },
      { id: "up_nature_8", ukrainian: "Небо", polish: "Niebo", example: "Niebo jest błękitne", exampleTranslation: "Небо блакитне" },
      { id: "up_nature_9", ukrainian: "Зірка", polish: "Gwiazda", example: "Gwiazdy świecą", exampleTranslation: "Зірки світять" },
      { id: "up_nature_10", ukrainian: "Місяць", polish: "Księżyc", example: "Księżyc jest pełny", exampleTranslation: "Місяць повний" }
    ]
  },

  animals: {
    name: "Тварини",
    icon: Dog,
    color: "from-amber-400 to-yellow-500",
    level: "intermediate",
    description: "Назви тварин",
    words: [
      { id: "up_animal_1", ukrainian: "Собака", polish: "Pies", example: "Pies jest przyjazny", exampleTranslation: "Собака дружній" },
      { id: "up_animal_2", ukrainian: "Кіт", polish: "Kot", example: "Kot śpi", exampleTranslation: "Кіт спить" },
      { id: "up_animal_3", ukrainian: "Птах", polish: "Ptak", example: "Ptak śpiewa", exampleTranslation: "Птах співає" },
      { id: "up_animal_4", ukrainian: "Риба", polish: "Ryba", example: "Ryba pływa", exampleTranslation: "Риба пливе" },
      { id: "up_animal_5", ukrainian: "Кінь", polish: "Koń", example: "Koń biega szybko", exampleTranslation: "Кінь біжить швидко" },
      { id: "up_animal_6", ukrainian: "Корова", polish: "Krowa", example: "Krowa daje mleko", exampleTranslation: "Корова дає молоко" },
      { id: "up_animal_7", ukrainian: "Свиня", polish: "Świnia", example: "Świnia jest na farmie", exampleTranslation: "Свиня на фермі" },
      { id: "up_animal_8", ukrainian: "Курка", polish: "Kurczak", example: "Kurczak znosi jajka", exampleTranslation: "Курка несе яйця" },
      { id: "up_animal_9", ukrainian: "Кролик", polish: "Królik", example: "Królik skacze", exampleTranslation: "Кролик стрибає" },
      { id: "up_animal_10", ukrainian: "Миша", polish: "Mysz", example: "Mysz jest mała", exampleTranslation: "Миша маленька" }
    ]
  },

  time: {
    name: "Час",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    description: "Часові вирази",
    words: [
      { id: "up_time_1", ukrainian: "Сьогодні", polish: "Dzisiaj", example: "Dzisiaj jest poniedziałek", exampleTranslation: "Сьогодні понеділок" },
      { id: "up_time_2", ukrainian: "Вчора", polish: "Wczoraj", example: "Wczoraj była niedziela", exampleTranslation: "Вчора була неділя" },
      { id: "up_time_3", ukrainian: "Завтра", polish: "Jutro", example: "Jutro jest wtorek", exampleTranslation: "Завтра вівторок" },
      { id: "up_time_4", ukrainian: "Зараз", polish: "Teraz", example: "Pracuję teraz", exampleTranslation: "Я працюю зараз" },
      { id: "up_time_5", ukrainian: "Пізніше", polish: "Później", example: "Zrobię to później", exampleTranslation: "Я зроблю це пізніше" },
      { id: "up_time_6", ukrainian: "Ранок", polish: "Rano", example: "Dzień dobry", exampleTranslation: "Добрий ранок" },
      { id: "up_time_7", ukrainian: "День", polish: "Dzień", example: "Dzień jest długi", exampleTranslation: "День довгий" },
      { id: "up_time_8", ukrainian: "Ніч", polish: "Noc", example: "Dobranoc", exampleTranslation: "Доб раніч" },
      { id: "up_time_9", ukrainian: "Тиждень", polish: "Tydzień", example: "Przyszły tydzień", exampleTranslation: "Наступний тиждень" },
      { id: "up_time_10", ukrainian: "Місяць", polish: "Miesiąc", example: "Ten miesiąc", exampleTranslation: "Цей місяць" }
    ]
  },

  events: {
    name: "Події",
    icon: Calendar,
    color: "from-purple-400 to-indigo-500",
    level: "advanced",
    description: "Свята",
    words: [
      { id: "up_event_1", ukrainian: "День народження", polish: "Urodziny", example: "Dziś mam urodziny", exampleTranslation: "Сьогодні у мене день народження" },
      { id: "up_event_2", ukrainian: "Свято", polish: "Święto", example: "Jest święto", exampleTranslation: "Це свято" },
      { id: "up_event_3", ukrainian: "Вечірка", polish: "Impreza", example: "Idę na imprezę", exampleTranslation: "Я йду на вечірку" },
      { id: "up_event_4", ukrainian: "Подарунок", polish: "Prezent", example: "Kupiłem prezent", exampleTranslation: "Я купив подарунок" },
      { id: "up_event_5", ukrainian: "Весілля", polish: "Wesele", example: "Idę na wesele", exampleTranslation: "Я йду на весілля" },
      { id: "up_event_6", ukrainian: "Концерт", polish: "Koncert", example: "Idę na koncert", exampleTranslation: "Я йду на концерт" },
      { id: "up_event_7", ukrainian: "Фестиваль", polish: "Festiwal", example: "Festiwal jest ciekawy", exampleTranslation: "Фестиваль цікавий" },
      { id: "up_event_8", ukrainian: "Виставка", polish: "Wystawa", example: "Odwiedzam wystawę", exampleTranslation: "Я відвідую виставку" },
      { id: "up_event_9", ukrainian: "Різдво", polish: "Boże Narodzenie", example: "Uwielbiam Boże Narodzenie", exampleTranslation: "Я люблю Різдво" },
      { id: "up_event_10", ukrainian: "Новий рік", polish: "Nowy Rok", example: "Szczęśliwego Nowego Roku", exampleTranslation: "Щасливого Нового року" }
    ]
  },

  emotions: {
    name: "Емоції",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Почуття",
    words: [
      { id: "up_emo_1", ukrainian: "Щасливий", polish: "Szczęśliwy", example: "Jestem szczęśliwy", exampleTranslation: "Я щасливий" },
      { id: "up_emo_2", ukrainian: "Сумний", polish: "Smutny", example: "On jest smutny", exampleTranslation: "Він сумний" },
      { id: "up_emo_3", ukrainian: "Злий", polish: "Zły", example: "Ona jest zła", exampleTranslation: "Вона зла" },
      { id: "up_emo_4", ukrainian: "Втомлений", polish: "Zmęczony", example: "Jestem zmęczony", exampleTranslation: "Я втомлений" },
      { id: "up_emo_5", ukrainian: "Збуджений", polish: "Podekscytowany", example: "Jesteśmy podekscytowani", exampleTranslation: "Ми збуджені" },
      { id: "up_emo_6", ukrainian: "Нервовий", polish: "Zdenerwowany", example: "On jest zdenerwowany", exampleTranslation: "Він нервовий" },
      { id: "up_emo_7", ukrainian: "Спокійний", polish: "Spokojny", example: "Ona jest spokojna", exampleTranslation: "Вона спокійна" },
      { id: "up_emo_8", ukrainian: "Здивований", polish: "Zaskoczony", example: "Jestem zaskoczony", exampleTranslation: "Я здивований" },
      { id: "up_emo_9", ukrainian: "Наляканий", polish: "Przestraszony", example: "Dziecko jest przestraszone", exampleTranslation: "Дитина налякана" },
      { id: "up_emo_10", ukrainian: "Нудний", polish: "Znudzony", example: "Oni są znudzeni", exampleTranslation: "Їм нудно" }
    ]
  },

  sports: {
    name: "Спорт",
    icon: Dumbbell,
    color: "from-lime-400 to-green-500",
    level: "advanced",
    description: "Спортивні дисципліни",
    words: [
      { id: "up_sport_1", ukrainian: "Футбол", polish: "Piłka nożna", example: "Gram w piłkę nożną", exampleTranslation: "Я граю у футбол" },
      { id: "up_sport_2", ukrainian: "Баскетбол", polish: "Koszykówka", example: "Lubię koszykówkę", exampleTranslation: "Я люблю баскетбол" },
      { id: "up_sport_3", ukrainian: "Плавання", polish: "Pływanie", example: "Pływanie jest zdrowe", exampleTranslation: "Плавання корисне" },
      { id: "up_sport_4", ukrainian: "Біг", polish: "Bieganie", example: "Biegam rano", exampleTranslation: "Я бігаю вранці" },
      { id: "up_sport_5", ukrainian: "Теніс", polish: "Tenis", example: "Gram w tenisa", exampleTranslation: "Я граю в теніс" },
      { id: "up_sport_6", ukrainian: "Волейбол", polish: "Siatkówka", example: "Gram w siatkówkę", exampleTranslation: "Я граю у волейбол" },
      { id: "up_sport_7", ukrainian: "Спортзал", polish: "Siłownia", example: "Chodzę na siłownię", exampleTranslation: "Я ходжу до спортзалу" },
      { id: "up_sport_8", ukrainian: "Тренування", polish: "Trening", example: "Mam trening dzisiaj", exampleTranslation: "У мене тренування сьогодні" },
      { id: "up_sport_9", ukrainian: "Матч", polish: "Mecz", example: "Oglądamy mecz", exampleTranslation: "Ми дивимося матч" },
      { id: "up_sport_10", ukrainian: "Команда", polish: "Drużyna", example: "Jestem w drużynie", exampleTranslation: "Я в команді" }
    ]
  },

  health: {
    name: "Здоров'я",
    icon: Activity,
    color: "from-rose-400 to-red-500",
    level: "advanced",
    description: "Медицина",
    words: [
      { id: "up_health_1", ukrainian: "Лікар", polish: "Lekarz", example: "Muszę iść do lekarza", exampleTranslation: "Мені потрібно до лікаря" },
      { id: "up_health_2", ukrainian: "Ліки", polish: "Lekarstwo", example: "Weź swoje lekarstwo", exampleTranslation: "Візьми свої ліки" },
      { id: "up_health_3", ukrainian: "Біль", polish: "Ból", example: "Boli mnie głowa", exampleTranslation: "У мене болить голова" },
      { id: "up_health_4", ukrainian: "Температура", polish: "Gorączka", example: "Mam gorączkę", exampleTranslation: "У мене температура" },
      { id: "up_health_5", ukrainian: "Кашель", polish: "Kaszel", example: "Mam straszny kaszel", exampleTranslation: "У мене страшний кашель" },
      { id: "up_health_6", ukrainian: "Застуда", polish: "Przeziębienie", example: "Jestem przeziębiony", exampleTranslation: "Я застудився" },
      { id: "up_health_7", ukrainian: "Аптека", polish: "Apteka", example: "Idę do apteki", exampleTranslation: "Я йду до аптеки" },
      { id: "up_health_8", ukrainian: "Лікарня", polish: "Szpital", example: "Jest w szpitalu", exampleTranslation: "Він у лікарні" },
      { id: "up_health_9", ukrainian: "Медсестра", polish: "Pielęgniarka", example: "Pielęgniarka jest miła", exampleTranslation: "Медсестра мила" },
      { id: "up_health_10", ukrainian: "Здоров'я", polish: "Zdrowie", example: "Zdrowie jest ważne", exampleTranslation: "Здоров'я важливе" }
    ]
  },

  hobbies: {
    name: "Хобі",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Інтереси",
    words: [
      { id: "up_hobby_1", ukrainian: "Хобі", polish: "Hobby", example: "To moje hobby", exampleTranslation: "Це моє хобі" },
      { id: "up_hobby_2", ukrainian: "Читання", polish: "Czytanie", example: "Czytanie jest moim hobby", exampleTranslation: "Читання моє хобі" },
      { id: "up_hobby_3", ukrainian: "Музика", polish: "Muzyka", example: "Słucham muzyki", exampleTranslation: "Я слухаю музику" },
      { id: "up_hobby_4", ukrainian: "Кіно", polish: "Film", example: "Oglądam filmy", exampleTranslation: "Я дивлюся фільми" },
      { id: "up_hobby_5", ukrainian: "Фотографія", polish: "Fotografia", example: "Interesuję się fotografią", exampleTranslation: "Мене цікавить фотографія" },
      { id: "up_hobby_6", ukrainian: "Малювання", polish: "Malowanie", example: "Maluję w wolnym czasie", exampleTranslation: "Я малюю у вільний час" },
      { id: "up_hobby_7", ukrainian: "Кулінарія", polish: "Gotowanie", example: "Lubię gotować", exampleTranslation: "Я люблю готувати" },
      { id: "up_hobby_8", ukrainian: "Садівництво", polish: "Ogrodnictwo", example: "Ogrodnictwo jest relaksujące", exampleTranslation: "Садівництво розслаблює" },
      { id: "up_hobby_9", ukrainian: "Ігри", polish: "Gry", example: "Gram w gry komputerowe", exampleTranslation: "Я граю в комп'ютерні ігри" },
      { id: "up_hobby_10", ukrainian: "Подорожі", polish: "Podróże", example: "Uwielbiam podróże", exampleTranslation: "Я люблю подорожі" }
    ]
  },

  restaurant: {
    name: "Ресторан",
    icon: Coffee,
    color: "from-orange-400 to-rose-500",
    level: "advanced",
    description: "Їжа в ресторані",
    words: [
      { id: "up_rest_1", ukrainian: "Ресторан", polish: "Restauracja", example: "Jemy w restauracji", exampleTranslation: "Ми їмо в ресторані" },
      { id: "up_rest_2", ukrainian: "Меню", polish: "Menu", example: "Proszę o menu", exampleTranslation: "Меню, будь ласка" },
      { id: "up_rest_3", ukrainian: "Офіціант", polish: "Kelner", example: "Kelner jest miły", exampleTranslation: "Офіціант милий" },
      { id: "up_rest_4", ukrainian: "Замовлення", polish: "Zamówienie", example: "Chcę złożyć zamówienie", exampleTranslation: "Я хочу зробити замовлення" },
      { id: "up_rest_5", ukrainian: "Рахунок", polish: "Rachunek", example: "Proszę o rachunek", exampleTranslation: "Рахунок, будь ласка" },
      { id: "up_rest_6", ukrainian: "Чайові", polish: "Napiwek", example: "Zostawiam napiwek", exampleTranslation: "Я залишаю чайові" },
      { id: "up_rest_7", ukrainian: "Смачний", polish: "Smaczny", example: "To jest smaczne", exampleTranslation: "Це смачно" },
      { id: "up_rest_8", ukrainian: "Голодний", polish: "Głodny", example: "Jestem głodny", exampleTranslation: "Я голодний" },
      { id: "up_rest_9", ukrainian: "Спраглий", polish: "Spragniony", example: "Jestem spragniony", exampleTranslation: "Я спрагний" },
      { id: "up_rest_10", ukrainian: "Столик", polish: "Stolik", example: "Rezerwuję stolik", exampleTranslation: "Я резервую столик" }
    ]
  },

  culture: {
    name: "Культура",
    icon: Landmark,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    description: "Традиції",
    words: [
      { id: "up_cult_1", ukrainian: "Культура", polish: "Kultura", example: "Interesuję się kulturą", exampleTranslation: "Мене цікавить культура" },
      { id: "up_cult_2", ukrainian: "Мистецтво", polish: "Sztuka", example: "Sztuka jest piękna", exampleTranslation: "Мистецтво прекрасне" },
      { id: "up_cult_3", ukrainian: "Театр", polish: "Teatr", example: "Idę do teatru", exampleTranslation: "Я йду до театру" },
      { id: "up_cult_4", ukrainian: "Музей", polish: "Muzeum", example: "Muzeum jest ciekawe", exampleTranslation: "Музей цікавий" },
      { id: "up_cult_5", ukrainian: "Історія", polish: "Historia", example: "Lubię historię", exampleTranslation: "Я люблю історію" },
      { id: "up_cult_6", ukrainian: "Традиція", polish: "Tradycja", example: "To nasza tradycja", exampleTranslation: "Це наша традиція" },
      { id: "up_cult_7", ukrainian: "Пам'ятник", polish: "Pomnik", example: "Odwiedzam pomnik", exampleTranslation: "Я відвідую пам'ятник" },
      { id: "up_cult_8", ukrainian: "Архітектура", polish: "Architektura", example: "Architektura jest piękna", exampleTranslation: "Архітектура прекрасна" },
      { id: "up_cult_9", ukrainian: "Галерея", polish: "Galeria", example: "Idę do galerii", exampleTranslation: "Я йду до галереї" },
      { id: "up_cult_10", ukrainian: "Виставка", polish: "Wystawa", example: "Wystawa jest interesująca", exampleTranslation: "Виставка цікава" }
    ]
  }
};