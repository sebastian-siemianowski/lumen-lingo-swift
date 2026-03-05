/**
 * POLISH → ARABIC FLASHCARDS
 * 
 * Native Language: Polish (Polski)
 * Target Language: Arabic (العربية)
 */

import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Powitania",
    description: "Podstawowe powitania",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "pa_greet_1", polish: "Cześć", arabic: "مرحباً", example: "مرحباً، كيف حالك؟", exampleTranslation: "Cześć, jak się masz?" },
      { id: "pa_greet_2", polish: "Dzień dobry (rano)", arabic: "صباح الخير", example: "صباح الخير، سيدي", exampleTranslation: "Dzień dobry, panie" },
      { id: "pa_greet_3", polish: "Dobry wieczór", arabic: "مساء الخير", example: "مساء الخير، كيف حالك؟", exampleTranslation: "Dobry wieczór, jak się masz?" },
      { id: "pa_greet_4", polish: "Dobranoc", arabic: "تصبح على خير", example: "تصبح على خير، نم جيداً", exampleTranslation: "Dobranoc, śpij dobrze" },
      { id: "pa_greet_5", polish: "Do widzenia", arabic: "مع السلامة", example: "مع السلامة، أراك لاحقاً", exampleTranslation: "Do widzenia, do zobaczenia" },
      { id: "pa_greet_6", polish: "Dziękuję", arabic: "شكراً", example: "شكراً لمساعدتك", exampleTranslation: "Dziękuję za pomoc" },
      { id: "pa_greet_7", polish: "Proszę", arabic: "من فضلك", example: "من فضلك، ساعدني", exampleTranslation: "Proszę, pomóż mi" },
      { id: "pa_greet_8", polish: "Przepraszam", arabic: "آسف", example: "آسف، أنا متأخر", exampleTranslation: "Przepraszam, spóźniłem się" },
      { id: "pa_greet_9", polish: "Tak", arabic: "نعم", example: "نعم، أنا موافق", exampleTranslation: "Tak, zgadzam się" },
      { id: "pa_greet_10", polish: "Nie", arabic: "لا", example: "لا، لا أريد", exampleTranslation: "Nie, nie chcę" }
    ]
  },

  family: {
    name: "Rodzina",
    description: "Członkowie rodziny",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "pa_fam_1", polish: "Ojciec", arabic: "أب", example: "أبي يعمل كثيراً", exampleTranslation: "Mój ojciec dużo pracuje" },
      { id: "pa_fam_2", polish: "Matka", arabic: "أم", example: "أمي تطبخ جيداً", exampleTranslation: "Moja matka dobrze gotuje" },
      { id: "pa_fam_3", polish: "Brat", arabic: "أخ", example: "أخي يدرس الطب", exampleTranslation: "Mój brat studiuje medycynę" },
      { id: "pa_fam_4", polish: "Siostra", arabic: "أخت", example: "أختي معلمة", exampleTranslation: "Moja siostra jest nauczycielką" },
      { id: "pa_fam_5", polish: "Syn", arabic: "ابن", example: "ابني عمره عشر سنوات", exampleTranslation: "Mój syn ma dziesięć lat" },
      { id: "pa_fam_6", polish: "Córka", arabic: "ابنة", example: "ابنتي تذهب إلى الجامعة", exampleTranslation: "Moja córka chodzi na uniwersytet" },
      { id: "pa_fam_7", polish: "Dziadek", arabic: "جد", example: "جدي حكيم جداً", exampleTranslation: "Mój dziadek jest bardzo mądry" },
      { id: "pa_fam_8", polish: "Babcia", arabic: "جدة", example: "جدتي تصنع الكعك", exampleTranslation: "Moja babcia robi ciasta" },
      { id: "pa_fam_9", polish: "Wujek", arabic: "عم", example: "عمي يعيش في القاهرة", exampleTranslation: "Mój wujek mieszka w Kairze" },
      { id: "pa_fam_10", polish: "Ciocia", arabic: "عمة", example: "عمتي لطيفة جداً", exampleTranslation: "Moja ciocia jest bardzo miła" }
    ]
  },

  numbers: {
    name: "Liczby",
    description: "Podstawowe liczby",
    icon: Hash,
    color: "from-purple-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "pa_num_1", polish: "Jeden", arabic: "واحد", example: "لدي أخ واحد", exampleTranslation: "Mam jednego brata" },
      { id: "pa_num_2", polish: "Dwa", arabic: "اثنان", example: "هناك قطتان", exampleTranslation: "Są dwa koty" },
      { id: "pa_num_3", polish: "Trzy", arabic: "ثلاثة", example: "الساعة الثالثة", exampleTranslation: "Jest trzecia" },
      { id: "pa_num_4", polish: "Cztery", arabic: "أربعة", example: "أربعة فصول", exampleTranslation: "Cztery pory roku" },
      { id: "pa_num_5", polish: "Pięć", arabic: "خمسة", example: "خمسة أصابع في اليد", exampleTranslation: "Pięć palców na ręce" },
      { id: "pa_num_6", polish: "Sześć", arabic: "ستة", example: "ابني عمره ست سنوات", exampleTranslation: "Mój syn ma sześć lat" },
      { id: "pa_num_7", polish: "Siedem", arabic: "سبعة", example: "سبعة أيام في الأسبوع", exampleTranslation: "Siedem dni tygodnia" },
      { id: "pa_num_8", polish: "Osiem", arabic: "ثمانية", example: "أعمل ثماني ساعات", exampleTranslation: "Pracuję osiem godzin" },
      { id: "pa_num_9", polish: "Dziewięć", arabic: "تسعة", example: "الساعة التاسعة صباحاً", exampleTranslation: "Dziewiąta rano" },
      { id: "pa_num_10", polish: "Dziesięć", arabic: "عشرة", example: "عشرة يورو، من فضلك", exampleTranslation: "Dziesięć euro, proszę" }
    ]
  },

  colors: {
    name: "Kolory",
    description: "Podstawowe kolory",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "pa_col_1", polish: "Czerwony", arabic: "أحمر", example: "السيارة حمراء", exampleTranslation: "Samochód jest czerwony" },
      { id: "pa_col_2", polish: "Niebieski", arabic: "أزرق", example: "السماء زرقاء", exampleTranslation: "Niebo jest niebieskie" },
      { id: "pa_col_3", polish: "Zielony", arabic: "أخضر", example: "العشب أخضر", exampleTranslation: "Trawa jest zielona" },
      { id: "pa_col_4", polish: "Żółty", arabic: "أصفر", example: "الشمس صفراء", exampleTranslation: "Słońce jest żółte" },
      { id: "pa_col_5", polish: "Czarny", arabic: "أسود", example: "قطتي سوداء", exampleTranslation: "Mój kot jest czarny" },
      { id: "pa_col_6", polish: "Biały", arabic: "أبيض", example: "الثلج أبيض", exampleTranslation: "Śnieg jest biały" },
      { id: "pa_col_7", polish: "Pomarańczowy", arabic: "برتقالي", example: "البرتقالة برتقالية", exampleTranslation: "Pomarańcza jest pomarańczowa" },
      { id: "pa_col_8", polish: "Różowy", arabic: "وردي", example: "الفستان وردي", exampleTranslation: "Sukienka jest różowa" },
      { id: "pa_col_9", polish: "Brązowy", arabic: "بني", example: "الدب بني", exampleTranslation: "Niedźwiedź jest brązowy" },
      { id: "pa_col_10", polish: "Szary", arabic: "رمادي", example: "الفيل رمادي", exampleTranslation: "Słoń jest szary" }
    ]
  },

  food: {
    name: "Jedzenie",
    description: "Podstawowe jedzenie",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "pa_food_1", polish: "Chleb", arabic: "خبز", example: "الخبز طازج", exampleTranslation: "Chleb jest świeży" },
      { id: "pa_food_2", polish: "Woda", arabic: "ماء", example: "كوب ماء، من فضلك", exampleTranslation: "Szklankę wody, proszę" },
      { id: "pa_food_3", polish: "Kawa", arabic: "قهوة", example: "أحب القهوة", exampleTranslation: "Lubię kawę" },
      { id: "pa_food_4", polish: "Mleko", arabic: "حليب", example: "الحليب طازج", exampleTranslation: "Mleko jest świeże" },
      { id: "pa_food_5", polish: "Mięso", arabic: "لحم", example: "اللحم لذيذ", exampleTranslation: "Mięso jest pyszne" },
      { id: "pa_food_6", polish: "Ryba", arabic: "سمك", example: "السمك صحي جداً", exampleTranslation: "Ryba jest bardzo zdrowa" },
      { id: "pa_food_7", polish: "Owoce", arabic: "فواكه", example: "آكل الفواكه كل يوم", exampleTranslation: "Jem owoce codziennie" },
      { id: "pa_food_8", polish: "Warzywa", arabic: "خضروات", example: "الخضروات مهمة", exampleTranslation: "Warzywa są ważne" },
      { id: "pa_food_9", polish: "Ser", arabic: "جبن", example: "الجبن العربي لذيذ", exampleTranslation: "Arabski ser jest pyszny" },
      { id: "pa_food_10", polish: "Jajko", arabic: "بيضة", example: "آكل البيض في الإفطار", exampleTranslation: "Jem jajka na śniadanie" }
    ]
  },

  house: {
    name: "Dom",
    description: "Przedmioty domowe",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "pa_house_1", polish: "Dom", arabic: "بيت", example: "بيتي كبير", exampleTranslation: "Mój dom jest duży" },
      { id: "pa_house_2", polish: "Pokój", arabic: "غرفة", example: "الغرفة نظيفة", exampleTranslation: "Pokój jest czysty" },
      { id: "pa_house_3", polish: "Kuchnia", arabic: "مطبخ", example: "أطبخ في المطبخ", exampleTranslation: "Gotuję w kuchni" },
      { id: "pa_house_4", polish: "Łazienka", arabic: "حمام", example: "الحمام جديد", exampleTranslation: "Łazienka jest nowa" },
      { id: "pa_house_5", polish: "Sypialnia", arabic: "غرفة نوم", example: "غرفة نومي مريحة", exampleTranslation: "Moja sypialnia jest wygodna" },
      { id: "pa_house_6", polish: "Drzwi", arabic: "باب", example: "أغلق الباب", exampleTranslation: "Zamknij drzwi" },
      { id: "pa_house_7", polish: "Okno", arabic: "نافذة", example: "افتح النافذة", exampleTranslation: "Otwórz okno" },
      { id: "pa_house_8", polish: "Stół", arabic: "طاولة", example: "الطاولة خشبية", exampleTranslation: "Stół jest drewniany" },
      { id: "pa_house_9", polish: "Krzesło", arabic: "كرسي", example: "الكرسي مريح", exampleTranslation: "Krzesło jest wygodne" },
      { id: "pa_house_10", polish: "Łóżko", arabic: "سرير", example: "السرير ناعم", exampleTranslation: "Łóżko jest miękkie" }
    ]
  },

  places: {
    name: "Miejsca",
    description: "Lokalizacje",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "pa_place_1", polish: "Sklep", arabic: "متجر", example: "المتجر مفتوح", exampleTranslation: "Sklep jest otwarty" },
      { id: "pa_place_2", polish: "Szkoła", arabic: "مدرسة", example: "أذهب إلى المدرسة", exampleTranslation: "Idę do szkoły" },
      { id: "pa_place_3", polish: "Szpital", arabic: "مستشفى", example: "المستشفى قريب", exampleTranslation: "Szpital jest blisko" },
      { id: "pa_place_4", polish: "Park", arabic: "حديقة", example: "الأطفال يلعبون في الحديقة", exampleTranslation: "Dzieci bawią się w parku" },
      { id: "pa_place_5", polish: "Restauracja", arabic: "مطعم", example: "نأكل في المطعم", exampleTranslation: "Jemy w restauracji" },
      { id: "pa_place_6", polish: "Hotel", arabic: "فندق", example: "الفندق كبير جداً", exampleTranslation: "Hotel jest bardzo duży" },
      { id: "pa_place_7", polish: "Bank", arabic: "بنك", example: "أذهب إلى البنك", exampleTranslation: "Idę do banku" },
      { id: "pa_place_8", polish: "Lotnisko", arabic: "مطار", example: "أنا في المطار", exampleTranslation: "Jestem na lotnisku" },
      { id: "pa_place_9", polish: "Dworzec kolejowy", arabic: "محطة قطار", example: "محطة القطار", exampleTranslation: "Dworzec kolejowy" },
      { id: "pa_place_10", polish: "Muzeum", arabic: "متحف", example: "المتحف مثير للاهتمام", exampleTranslation: "Muzeum jest interesujące" }
    ]
  },

  clothing: {
    name: "Ubrania",
    description: "Odzież",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "pa_cloth_1", polish: "Koszula", arabic: "قميص", example: "أحب قميصك", exampleTranslation: "Lubię twoją koszulę" },
      { id: "pa_cloth_2", polish: "Spodnie", arabic: "بنطلون", example: "أحتاج بنطلون جديد", exampleTranslation: "Potrzebuję nowych spodni" },
      { id: "pa_cloth_3", polish: "Buty", arabic: "حذاء", example: "اشتريت حذاء أسود", exampleTranslation: "Kupiłem czarne buty" },
      { id: "pa_cloth_4", polish: "Sukienka", arabic: "فستان", example: "الفستان جميل", exampleTranslation: "Sukienka jest piękna" },
      { id: "pa_cloth_5", polish: "Kurtka", arabic: "سترة", example: "أحتاج إلى سترة", exampleTranslation: "Potrzebuję kurtki" },
      { id: "pa_cloth_6", polish: "Kapelusz", arabic: "قبعة", example: "ضع القبعة", exampleTranslation: "Włóż kapelusz" },
      { id: "pa_cloth_7", polish: "Skarpetki", arabic: "جوارب", example: "جواربي نظيفة", exampleTranslation: "Moje skarpetki są czyste" },
      { id: "pa_cloth_8", polish: "Rękawiczki", arabic: "قفازات", example: "ألبس القفازات في الشتاء", exampleTranslation: "Noszę rękawiczki zimą" },
      { id: "pa_cloth_9", polish: "Szalik", arabic: "وشاح", example: "الوشاح ناعم", exampleTranslation: "Szalik jest miękki" },
      { id: "pa_cloth_10", polish: "Płaszcz", arabic: "معطف", example: "المعطف دافئ", exampleTranslation: "Płaszcz jest ciepły" }
    ]
  },

  work: {
    name: "Praca",
    description: "Zawody",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pa_work_1", polish: "Praca", arabic: "عمل", example: "أذهب إلى العمل", exampleTranslation: "Idę do pracy" },
      { id: "pa_work_2", polish: "Lekarz", arabic: "طبيب", example: "هو طبيب", exampleTranslation: "On jest lekarzem" },
      { id: "pa_work_3", polish: "Nauczyciel", arabic: "معلم", example: "معلمي ممتاز", exampleTranslation: "Mój nauczyciel jest doskonały" },
      { id: "pa_work_4", polish: "Inżynier", arabic: "مهندس", example: "أنا مهندس", exampleTranslation: "Jestem inżynierem" },
      { id: "pa_work_5", polish: "Prawnik", arabic: "محامي", example: "هي محامية", exampleTranslation: "Ona jest prawnikiem" },
      { id: "pa_work_6", polish: "Kucharz", arabic: "طباخ", example: "الطباخ يحضر الطعام", exampleTranslation: "Kucharz przygotowuje posiłek" },
      { id: "pa_work_7", polish: "Kelner", arabic: "نادل", example: "النادل لطيف", exampleTranslation: "Kelner jest miły" },
      { id: "pa_work_8", polish: "Sprzedawca", arabic: "بائع", example: "البائع يساعد الزبون", exampleTranslation: "Sprzedawca pomaga klientowi" },
      { id: "pa_work_9", polish: "Policjant", arabic: "شرطي", example: "الشرطي يحمي المدينة", exampleTranslation: "Policjant chroni miasto" },
      { id: "pa_work_10", polish: "Mechanik", arabic: "ميكانيكي", example: "الميكانيكي يصلح السيارات", exampleTranslation: "Mechanik naprawia samochody" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Środki transportu",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "pa_trans_1", polish: "Samochód", arabic: "سيارة", example: "لدي سيارة جديدة", exampleTranslation: "Mam nowy samochód" },
      { id: "pa_trans_2", polish: "Autobus", arabic: "حافلة", example: "أذهب بالحافلة", exampleTranslation: "Jadę autobusem" },
      { id: "pa_trans_3", polish: "Pociąg", arabic: "قطار", example: "القطار سريع", exampleTranslation: "Pociąg jest szybki" },
      { id: "pa_trans_4", polish: "Samolot", arabic: "طائرة", example: "أسافر بالطائرة", exampleTranslation: "Podróżuję samolotem" },
      { id: "pa_trans_5", polish: "Rower", arabic: "دراجة", example: "أركب الدراجة", exampleTranslation: "Jeżdżę na rowerze" },
      { id: "pa_trans_6", polish: "Taksówka", arabic: "تاكسي", example: "أنادي تاكسي", exampleTranslation: "Wzywam taksówkę" },
      { id: "pa_trans_7", polish: "Metro", arabic: "مترو", example: "أستخدم المترو", exampleTranslation: "Korzystam z metra" },
      { id: "pa_trans_8", polish: "Motocykl", arabic: "دراجة نارية", example: "دراجتي النارية حمراء", exampleTranslation: "Mój motocykl jest czerwony" },
      { id: "pa_trans_9", polish: "Łódź", arabic: "قارب", example: "نبحر بالقارب", exampleTranslation: "Płyniemy łodzią" },
      { id: "pa_trans_10", polish: "Bilet", arabic: "تذكرة", example: "أشتري تذكرة", exampleTranslation: "Kupuję bilet" }
    ]
  },

  education: {
    name: "Edukacja",
    description: "Szkoła",
    icon: School,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pa_edu_1", polish: "Uczeń", arabic: "طالب", example: "أنا طالب", exampleTranslation: "Jestem uczniem" },
      { id: "pa_edu_2", polish: "Nauczyciel", arabic: "معلم", example: "المعلم يعلم جيداً", exampleTranslation: "Nauczyciel dobrze uczy" },
      { id: "pa_edu_3", polish: "Książka", arabic: "كتاب", example: "أقرأ كتاباً", exampleTranslation: "Czytam książkę" },
      { id: "pa_edu_4", polish: "Ołówek", arabic: "قلم رصاص", example: "هل لديك قلم رصاص؟", exampleTranslation: "Czy masz ołówek?" },
      { id: "pa_edu_5", polish: "Zeszyt", arabic: "دفتر", example: "أحتاج إلى دفتر", exampleTranslation: "Potrzebuję zeszytu" },
      { id: "pa_edu_6", polish: "Egzamin", arabic: "امتحان", example: "الامتحان غداً", exampleTranslation: "Egzamin jest jutro" },
      { id: "pa_edu_7", polish: "Praca domowa", arabic: "واجب منزلي", example: "لدي واجب منزلي كثير", exampleTranslation: "Mam dużo pracy domowej" },
      { id: "pa_edu_8", polish: "Lekcja", arabic: "درس", example: "الدرس يبدأ في التاسعة", exampleTranslation: "Lekcja zaczyna się o dziewiątej" },
      { id: "pa_edu_9", polish: "Biblioteka", arabic: "مكتبة", example: "أدرس في المكتبة", exampleTranslation: "Uczę się w bibliotece" },
      { id: "pa_edu_10", polish: "Plecak", arabic: "حقيبة ظهر", example: "حقيبة ظهري ثقيلة", exampleTranslation: "Mój plecak jest ciężki" }
    ]
  },

  nature: {
    name: "Natura",
    description: "Przyroda",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "pa_nature_1", polish: "Drzewo", arabic: "شجرة", example: "الشجرة طويلة", exampleTranslation: "Drzewo jest wysokie" },
      { id: "pa_nature_2", polish: "Kwiat", arabic: "زهرة", example: "الزهرة جميلة", exampleTranslation: "Kwiat jest piękny" },
      { id: "pa_nature_3", polish: "Góra", arabic: "جبل", example: "الجبل عالٍ", exampleTranslation: "Góra jest wysoka" },
      { id: "pa_nature_4", polish: "Rzeka", arabic: "نهر", example: "النهر طويل", exampleTranslation: "Rzeka jest długa" },
      { id: "pa_nature_5", polish: "Morze", arabic: "بحر", example: "البحر أزرق", exampleTranslation: "Morze jest niebieskie" },
      { id: "pa_nature_6", polish: "Las", arabic: "غابة", example: "نمشي عبر الغابة", exampleTranslation: "Przechodzimy przez las" },
      { id: "pa_nature_7", polish: "Jezioro", arabic: "بحيرة", example: "البحيرة هادئة", exampleTranslation: "Jezioro jest spokojne" },
      { id: "pa_nature_8", polish: "Niebo", arabic: "سماء", example: "السماء زرقاء", exampleTranslation: "Niebo jest niebieskie" },
      { id: "pa_nature_9", polish: "Gwiazda", arabic: "نجمة", example: "النجوم تلمع", exampleTranslation: "Gwiazdy świecą" },
      { id: "pa_nature_10", polish: "Księżyc", arabic: "قمر", example: "القمر مكتمل", exampleTranslation: "Księżyc jest w pełni" }
    ]
  },

  emotions: {
    name: "Emocje",
    description: "Uczucia",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "pa_emo_1", polish: "Szczęśliwy", arabic: "سعيد", example: "أنا سعيد", exampleTranslation: "Jestem szczęśliwy" },
      { id: "pa_emo_2", polish: "Smutny", arabic: "حزين", example: "هو حزين", exampleTranslation: "On jest smutny" },
      { id: "pa_emo_3", polish: "Zły", arabic: "غاضب", example: "هي غاضبة", exampleTranslation: "Ona jest zła" },
      { id: "pa_emo_4", polish: "Zmęczony", arabic: "متعب", example: "أنا متعب", exampleTranslation: "Jestem zmęczony" },
      { id: "pa_emo_5", polish: "Podekscytowany", arabic: "متحمس", example: "نحن متحمسون", exampleTranslation: "Jesteśmy podekscytowani" },
      { id: "pa_emo_6", polish: "Zdenerwowany", arabic: "متوتر", example: "هو متوتر", exampleTranslation: "On jest zdenerwowany" },
      { id: "pa_emo_7", polish: "Spokojny", arabic: "هادئ", example: "هي هادئة", exampleTranslation: "Ona jest spokojna" },
      { id: "pa_emo_8", polish: "Zaskoczony", arabic: "مندهش", example: "أنا مندهش", exampleTranslation: "Jestem zaskoczony" },
      { id: "pa_emo_9", polish: "Przestraszony", arabic: "خائف", example: "الطفل خائف", exampleTranslation: "Dziecko jest przestraszone" },
      { id: "pa_emo_10", polish: "Znudzony", arabic: "ملل", example: "هم ملل", exampleTranslation: "Oni są znudzeni" }
    ]
  },

  time: {
    name: "Czas",
    description: "Wyrażenia czasowe",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "pa_time_1", polish: "Dzisiaj", arabic: "اليوم", example: "اليوم الاثنين", exampleTranslation: "Dzisiaj jest poniedziałek" },
      { id: "pa_time_2", polish: "Wczoraj", arabic: "أمس", example: "أمس كان الأحد", exampleTranslation: "Wczoraj była niedziela" },
      { id: "pa_time_3", polish: "Jutro", arabic: "غداً", example: "غداً الثلاثاء", exampleTranslation: "Jutro jest wtorek" },
      { id: "pa_time_4", polish: "Teraz", arabic: "الآن", example: "أنا أعمل الآن", exampleTranslation: "Teraz pracuję" },
      { id: "pa_time_5", polish: "Później", arabic: "لاحقاً", example: "سأفعل ذلك لاحقاً", exampleTranslation: "Zrobię to później" },
      { id: "pa_time_6", polish: "Rano", arabic: "صباح", example: "صباح الخير", exampleTranslation: "Dzień dobry" },
      { id: "pa_time_7", polish: "Południe", arabic: "ظهر", example: "إنه الظهر", exampleTranslation: "Jest południe" },
      { id: "pa_time_8", polish: "Wieczór", arabic: "مساء", example: "مساء الخير", exampleTranslation: "Dobry wieczór" },
      { id: "pa_time_9", polish: "Noc", arabic: "ليل", example: "تصبح على خير", exampleTranslation: "Dobranoc" },
      { id: "pa_time_10", polish: "Tydzień", arabic: "أسبوع", example: "الأسبوع القادم", exampleTranslation: "Następny tydzień" }
    ]
  },

  weather: {
    name: "Pogoda",
    description: "Warunki pogodowe",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "pa_weather_1", polish: "Słońce", arabic: "شمس", example: "الشمس تشرق", exampleTranslation: "Słońce świeci" },
      { id: "pa_weather_2", polish: "Deszcz", arabic: "مطر", example: "إنها تمطر", exampleTranslation: "Pada deszcz" },
      { id: "pa_weather_3", polish: "Śnieg", arabic: "ثلج", example: "إنها تثلج", exampleTranslation: "Pada śnieg" },
      { id: "pa_weather_4", polish: "Wiatr", arabic: "ريح", example: "الريح تهب", exampleTranslation: "Wieje wiatr" },
      { id: "pa_weather_5", polish: "Chmura", arabic: "سحابة", example: "هناك سحب في السماء", exampleTranslation: "Na niebie są chmury" },
      { id: "pa_weather_6", polish: "Burza", arabic: "عاصفة", example: "عاصفة قادمة", exampleTranslation: "Nadchodzi burza" },
      { id: "pa_weather_7", polish: "Gorąco", arabic: "حار", example: "الجو حار جداً", exampleTranslation: "Jest bardzo gorąco" },
      { id: "pa_weather_8", polish: "Zimno", arabic: "بارد", example: "الشتاء بارد", exampleTranslation: "Zimą jest zimno" },
      { id: "pa_weather_9", polish: "Błyskawica", arabic: "برق", example: "رأيت البرق", exampleTranslation: "Widziałem błyskawicę" },
      { id: "pa_weather_10", polish: "Grzmot", arabic: "رعد", example: "يمكنك سماع الرعد", exampleTranslation: "Słyszysz grzmot" }
    ]
  },

  body: {
    name: "Ciało",
    description: "Części ciała",
    icon: Hand,
    color: "from-pink-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "pa_body_1", polish: "Głowa", arabic: "رأس", example: "رأسي يؤلمني", exampleTranslation: "Boli mnie głowa" },
      { id: "pa_body_2", polish: "Oko", arabic: "عين", example: "لدي عيون زرقاء", exampleTranslation: "Mam niebieskie oczy" },
      { id: "pa_body_3", polish: "Nos", arabic: "أنف", example: "أنفي بارد", exampleTranslation: "Mój nos jest zimny" },
      { id: "pa_body_4", polish: "Usta", arabic: "فم", example: "افتح فمك", exampleTranslation: "Otwórz usta" },
      { id: "pa_body_5", polish: "Ucho", arabic: "أذن", example: "أذناي كبيرتان", exampleTranslation: "Moje uszy są duże" },
      { id: "pa_body_6", polish: "Ręka", arabic: "يد", example: "أعطني يدك", exampleTranslation: "Daj mi rękę" },
      { id: "pa_body_7", polish: "Stopa", arabic: "قدم", example: "قدمي تؤلمني", exampleTranslation: "Boli mnie stopa" },
      { id: "pa_body_8", polish: "Ramię", arabic: "ذراع", example: "ارفع ذراعك", exampleTranslation: "Podnieś ramię" },
      { id: "pa_body_9", polish: "Noga", arabic: "ساق", example: "ساقاي متعبتان", exampleTranslation: "Moje nogi są zmęczone" },
      { id: "pa_body_10", polish: "Serce", arabic: "قلب", example: "قلبي ينبض بسرعة", exampleTranslation: "Moje serce bije szybko" }
    ]
  },

  activities: {
    name: "Aktywności",
    description: "Codzienne czynności",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "pa_act_1", polish: "Jeść", arabic: "أكل", example: "سأكل", exampleTranslation: "Będę jeść" },
      { id: "pa_act_2", polish: "Pić", arabic: "شرب", example: "أشرب الماء", exampleTranslation: "Piję wodę" },
      { id: "pa_act_3", polish: "Spać", arabic: "نوم", example: "أحتاج إلى النوم", exampleTranslation: "Muszę spać" },
      { id: "pa_act_4", polish: "Biegać", arabic: "ركض", example: "أركض في الصباح", exampleTranslation: "Biegam rano" },
      { id: "pa_act_5", polish: "Czytać", arabic: "قراءة", example: "أقرأ كتاباً", exampleTranslation: "Czytam książkę" },
      { id: "pa_act_6", polish: "Pisać", arabic: "كتابة", example: "أكتب رسالة", exampleTranslation: "Piszę list" },
      { id: "pa_act_7", polish: "Mówić", arabic: "تحدث", example: "أتحدث العربية", exampleTranslation: "Mówię po arabsku" },
      { id: "pa_act_8", polish: "Słuchać", arabic: "استماع", example: "أستمع إلى الموسيقى", exampleTranslation: "Słucham muzyki" },
      { id: "pa_act_9", polish: "Oglądać", arabic: "مشاهدة", example: "أشاهد التلفاز", exampleTranslation: "Oglądam telewizję" },
      { id: "pa_act_10", polish: "Myśleć", arabic: "تفكير", example: "أفكر فيك", exampleTranslation: "Myślę o tobie" }
    ]
  },

  learning: {
    name: "Nauka",
    description: "Działania edukacyjne",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "pa_learn_1", polish: "Uczyć się", arabic: "تعلم", example: "أتعلم العربية", exampleTranslation: "Uczę się arabskiego" },
      { id: "pa_learn_2", polish: "Studiować", arabic: "دراسة", example: "أدرس في الجامعة", exampleTranslation: "Studiuję na uniwersytecie" },
      { id: "pa_learn_3", polish: "Uczyć", arabic: "تدريس", example: "أدرس الإنجليزية", exampleTranslation: "Uczę angielskiego" },
      { id: "pa_learn_4", polish: "Rozumieć", arabic: "فهم", example: "أفهم الدرس", exampleTranslation: "Rozumiem tę lekcję" },
      { id: "pa_learn_5", polish: "Ćwiczyć", arabic: "ممارسة", example: "أمارس كل يوم", exampleTranslation: "Ćwiczę codziennie" },
      { id: "pa_learn_6", polish: "Powtarzać", arabic: "تكرار", example: "كرر الكلمة", exampleTranslation: "Powtórz to słowo" },
      { id: "pa_learn_7", polish: "Wyjaśniać", arabic: "شرح", example: "المعلم يشرح جيداً", exampleTranslation: "Nauczyciel dobrze wyjaśnia" },
      { id: "pa_learn_8", polish: "Pytać", arabic: "سؤال", example: "أسأل المعلم", exampleTranslation: "Pytam nauczyciela" },
      { id: "pa_learn_9", polish: "Odpowiadać", arabic: "إجابة", example: "أجيب على السؤال", exampleTranslation: "Odpowiadam na pytanie" },
      { id: "pa_learn_10", polish: "Pamiętać", arabic: "تذكر", example: "أتذكر الدرس", exampleTranslation: "Pamiętam tę lekcję" }
    ]
  },

  sports: {
    name: "Sport",
    description: "Sporty",
    icon: Dumbbell,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pa_sport_1", polish: "Piłka nożna", arabic: "كرة القدم", example: "ألعب كرة القدم", exampleTranslation: "Gram w piłkę nożną" },
      { id: "pa_sport_2", polish: "Koszykówka", arabic: "كرة السلة", example: "أحب كرة السلة", exampleTranslation: "Lubię koszykówkę" },
      { id: "pa_sport_3", polish: "Tenis", arabic: "تنس", example: "ألعب التنس", exampleTranslation: "Gram w tenisa" },
      { id: "pa_sport_4", polish: "Pływanie", arabic: "سباحة", example: "السباحة صحية", exampleTranslation: "Pływanie jest zdrowe" },
      { id: "pa_sport_5", polish: "Bieganie", arabic: "ركض", example: "أركض في الصباح", exampleTranslation: "Biegam rano" },
      { id: "pa_sport_6", polish: "Jazda na rowerze", arabic: "ركوب الدراجة", example: "أحب ركوب الدراجة", exampleTranslation: "Lubię jeździć na rowerze" },
      { id: "pa_sport_7", polish: "Siłownia", arabic: "صالة رياضية", example: "أذهب إلى الصالة الرياضية", exampleTranslation: "Chodzę na siłownię" },
      { id: "pa_sport_8", polish: "Trening", arabic: "تدريب", example: "لدي تدريب اليوم", exampleTranslation: "Dziś mam trening" },
      { id: "pa_sport_9", polish: "Drużyna", arabic: "فريق", example: "أنا في فريق", exampleTranslation: "Jestem w drużynie" },
      { id: "pa_sport_10", polish: "Trener", arabic: "مدرب", example: "مدربنا ممتاز", exampleTranslation: "Nasz trener jest doskonały" }
    ]
  },

  travel: {
    name: "Podróże",
    description: "Turystyka",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    words: [
      { id: "pa_travel_1", polish: "Podróż", arabic: "سفر", example: "أذهب في رحلة", exampleTranslation: "Jadę w podróż" },
      { id: "pa_travel_2", polish: "Walizka", arabic: "حقيبة سفر", example: "حقيبة سفري ثقيلة", exampleTranslation: "Moja walizka jest ciężka" },
      { id: "pa_travel_3", polish: "Paszport", arabic: "جواز سفر", example: "أحتاج إلى جواز سفري", exampleTranslation: "Potrzebuję paszportu" },
      { id: "pa_travel_4", polish: "Hotel", arabic: "فندق", example: "الفندق مريح", exampleTranslation: "Hotel jest wygodny" },
      { id: "pa_travel_5", polish: "Rezerwacja", arabic: "حجز", example: "لدي حجز", exampleTranslation: "Mam rezerwację" },
      { id: "pa_travel_6", polish: "Turysta", arabic: "سائح", example: "أنا سائح", exampleTranslation: "Jestem turystą" },
      { id: "pa_travel_7", polish: "Wakacje", arabic: "إجازة", example: "أنا في إجازة", exampleTranslation: "Jestem na wakacjach" },
      { id: "pa_travel_8", polish: "Zwiedzanie", arabic: "جولة سياحية", example: "نحن في جولة سياحية", exampleTranslation: "Zwiedzamy" },
      { id: "pa_travel_9", polish: "Przewodnik", arabic: "مرشد", example: "المرشد مفيد", exampleTranslation: "Przewodnik jest pomocny" },
      { id: "pa_travel_10", polish: "Pamiątka", arabic: "تذكار", example: "أشتري تذكاراً", exampleTranslation: "Kupuję pamiątkę" }
    ]
  },

  entertainment: {
    name: "Rozrywka",
    description: "Czas wolny",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "pa_ent_1", polish: "Muzyka", arabic: "موسيقى", example: "أستمع إلى الموسيقى", exampleTranslation: "Słucham muzyki" },
      { id: "pa_ent_2", polish: "Film", arabic: "فيلم", example: "أشاهد فيلماً", exampleTranslation: "Oglądam film" },
      { id: "pa_ent_3", polish: "Koncert", arabic: "حفلة موسيقية", example: "أذهب إلى حفلة موسيقية", exampleTranslation: "Idę na koncert" },
      { id: "pa_ent_4", polish: "Teatr", arabic: "مسرح", example: "أذهب إلى المسرح", exampleTranslation: "Idę do teatru" },
      { id: "pa_ent_5", polish: "Taniec", arabic: "رقص", example: "أحب الرقص", exampleTranslation: "Lubię tańczyć" },
      { id: "pa_ent_6", polish: "Śpiewać", arabic: "غناء", example: "أحب الغناء", exampleTranslation: "Lubię śpiewać" },
      { id: "pa_ent_7", polish: "Gitara", arabic: "غيتار", example: "ألعب الغيتار", exampleTranslation: "Gram na gitarze" },
      { id: "pa_ent_8", polish: "Gry", arabic: "ألعاب", example: "ألعب ألعاب الفيديو", exampleTranslation: "Gram w gry wideo" },
      { id: "pa_ent_9", polish: "Fotografia", arabic: "تصوير", example: "أنا مهتم بالتصوير", exampleTranslation: "Interesuję się fotografią" },
      { id: "pa_ent_10", polish: "Czytanie", arabic: "قراءة", example: "القراءة هوايتي", exampleTranslation: "Czytanie to moje hobby" }
    ]
  }
};

export default flashcardsCategories;