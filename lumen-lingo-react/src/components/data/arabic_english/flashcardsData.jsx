/**
 * ARABIC → ENGLISH FLASHCARDS
 *
 * Native Language: Arabic (العربية)
 * Target Language: English
 *
 * STRUCTURE:
 * - Each category must have: name, description, icon, difficulty, words
 * - difficulty options: "beginner", "intermediate", "advanced"
 *
 * WORD FORMAT:
 * {
 *   id: "unique_id",
 *   arabic: "الكلمة/العبارة بالعربية",
 *   english: "English translation",
 *   example: "Example in English",
 *   exampleTranslation: "مثال باللغة العربية"
 * }
 */

import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "التحيات",
    description: "تحيات أساسية",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "ae_greet_1", arabic: "مرحباً", english: "Hello", example: "Hello, how are you?", exampleTranslation: "مرحباً، كيف حالك؟" },
      { id: "ae_greet_2", arabic: "صباح الخير", english: "Good morning", example: "Good morning, sir", exampleTranslation: "صباح الخير، يا سيدي" },
      { id: "ae_greet_3", arabic: "مساء الخير", english: "Good evening", example: "Good evening, how are you?", exampleTranslation: "مساء الخير، كيف حالك؟" },
      { id: "ae_greet_4", arabic: "تصبح على خير", english: "Good night", example: "Good night, sleep well", exampleTranslation: "تصبح على خير، نم جيداً" },
      { id: "ae_greet_5", arabic: "وداعاً", english: "Goodbye", example: "Goodbye, see you later", exampleTranslation: "وداعاً، أراك لاحقاً" },
      { id: "ae_greet_6", arabic: "شكراً", english: "Thank you", example: "Thank you for your help", exampleTranslation: "شكراً لمساعدتك" },
      { id: "ae_greet_7", arabic: "من فضلك", english: "Please", example: "Please, help me", exampleTranslation: "من فضلك، ساعدني" },
      { id: "ae_greet_8", arabic: "عفواً", english: "Excuse me", example: "Excuse me, I'm late", exampleTranslation: "عفواً، أنا متأخر" },
      { id: "ae_greet_9", arabic: "نعم", english: "Yes", example: "Yes, I agree", exampleTranslation: "نعم، أنا موافق" },
      { id: "ae_greet_10", arabic: "لا", english: "No", example: "No, I don't want", exampleTranslation: "لا، لا أريد" }
    ]
  },

  family: {
    name: "العائلة",
    description: "أفراد العائلة",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "ae_fam_1", arabic: "أب", english: "Father", example: "My father works a lot", exampleTranslation: "أبي يعمل كثيراً" },
      { id: "ae_fam_2", arabic: "أم", english: "Mother", example: "My mother cooks well", exampleTranslation: "أمي تطبخ جيداً" },
      { id: "ae_fam_3", arabic: "أخ", english: "Brother", example: "My brother studies medicine", exampleTranslation: "أخي يدرس الطب" },
      { id: "ae_fam_4", arabic: "أخت", english: "Sister", example: "My sister is a teacher", exampleTranslation: "أختي معلمة" },
      { id: "ae_fam_5", arabic: "ابن", english: "Son", example: "My son is ten years old", exampleTranslation: "ابني عمره عشر سنوات" },
      { id: "ae_fam_6", arabic: "ابنة", english: "Daughter", example: "My daughter goes to university", exampleTranslation: "ابنتي تذهب إلى الجامعة" },
      { id: "ae_fam_7", arabic: "جد", english: "Grandfather", example: "My grandfather is very wise", exampleTranslation: "جدي حكيم جداً" },
      { id: "ae_fam_8", arabic: "جدة", english: "Grandmother", example: "My grandmother makes cakes", exampleTranslation: "جدتي تصنع الكعك" },
      { id: "ae_fam_9", arabic: "عم", english: "Uncle", example: "My uncle lives in Cairo", exampleTranslation: "عمي يعيش في القاهرة" },
      { id: "ae_fam_10", arabic: "عمة", english: "Aunt", example: "My aunt is very kind", exampleTranslation: "عمتي لطيفة جداً" }
    ]
  },

  numbers: {
    name: "الأرقام",
    description: "أرقام أساسية",
    icon: Hash,
    color: "from-purple-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "ae_num_1", arabic: "واحد", english: "One", example: "I have one brother", exampleTranslation: "عندي أخ واحد" },
      { id: "ae_num_2", arabic: "اثنان", english: "Two", example: "There are two cats", exampleTranslation: "يوجد قطتان" },
      { id: "ae_num_3", arabic: "ثلاثة", english: "Three", example: "It's three o'clock", exampleTranslation: "الساعة الثالثة" },
      { id: "ae_num_4", arabic: "أربعة", english: "Four", example: "Four seasons", exampleTranslation: "أربعة فصول" },
      { id: "ae_num_5", arabic: "خمسة", english: "Five", example: "Five fingers on the hand", exampleTranslation: "خمسة أصابع في اليد" },
      { id: "ae_num_6", arabic: "ستة", english: "Six", example: "My son is six years old", exampleTranslation: "ابني عمره ست سنوات" },
      { id: "ae_num_7", arabic: "سبعة", english: "Seven", example: "Seven days of the week", exampleTranslation: "سبعة أيام في الأسبوع" },
      { id: "ae_num_8", arabic: "ثمانية", english: "Eight", example: "I work eight hours", exampleTranslation: "أعمل ثماني ساعات" },
      { id: "ae_num_9", arabic: "تسعة", english: "Nine", example: "It's nine o'clock in the morning", exampleTranslation: "الساعة التاسعة صباحاً" },
      { id: "ae_num_10", arabic: "عشرة", english: "Ten", example: "Ten euros, please", exampleTranslation: "عشرة يورو، من فضلك" }
    ]
  },

  colors: {
    name: "الألوان",
    description: "ألوان أساسية",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "ae_col_1", arabic: "أحمر", english: "Red", example: "The car is red", exampleTranslation: "السيارة حمراء" },
      { id: "ae_col_2", arabic: "أزرق", english: "Blue", example: "The sky is blue", exampleTranslation: "السماء زرقاء" },
      { id: "ae_col_3", arabic: "أخضر", english: "Green", example: "The grass is green", exampleTranslation: "العشب أخضر" },
      { id: "ae_col_4", arabic: "أصفر", english: "Yellow", example: "The sun is yellow", exampleTranslation: "الشمس صفراء" },
      { id: "ae_col_5", arabic: "أسود", english: "Black", example: "My cat is black", exampleTranslation: "قطتي سوداء" },
      { id: "ae_col_6", arabic: "أبيض", english: "White", example: "The snow is white", exampleTranslation: "الثلج أبيض" },
      { id: "ae_col_7", arabic: "برتقالي", english: "Orange", example: "The orange is orange", exampleTranslation: "البرتقالة برتقالية" },
      { id: "ae_col_8", arabic: "وردي", english: "Pink", example: "The dress is pink", exampleTranslation: "الفستان وردي" },
      { id: "ae_col_9", arabic: "بني", english: "Brown", example: "The bear is brown", exampleTranslation: "الدب بني" },
      { id: "ae_col_10", arabic: "رمادي", english: "Gray", example: "The elephant is gray", exampleTranslation: "الفيل رمادي" }
    ]
  },

  food: {
    name: "الطعام",
    description: "أطعمة أساسية",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "ae_food_1", arabic: "خبز", english: "Bread", example: "The bread is fresh", exampleTranslation: "الخبز طازج" },
      { id: "ae_food_2", arabic: "ماء", english: "Water", example: "A glass of water, please", exampleTranslation: "كأس من الماء، من فضلك" },
      { id: "ae_food_3", arabic: "قهوة", english: "Coffee", example: "I like coffee", exampleTranslation: "أحب القهوة" },
      { id: "ae_food_4", arabic: "حليب", english: "Milk", example: "The milk is fresh", exampleTranslation: "الحليب طازج" },
      { id: "ae_food_5", arabic: "لحم", english: "Meat", example: "The meat is delicious", exampleTranslation: "اللحم لذيذ" },
      { id: "ae_food_6", arabic: "سمك", english: "Fish", example: "Fish is very healthy", exampleTranslation: "السمك صحي جداً" },
      { id: "ae_food_7", arabic: "فاكهة", english: "Fruit", example: "I eat fruit every day", exampleTranslation: "آكل الفاكهة كل يوم" },
      { id: "ae_food_8", arabic: "خضروات", english: "Vegetables", example: "Vegetables are important", exampleTranslation: "الخضروات مهمة" },
      { id: "ae_food_9", arabic: "جبن", english: "Cheese", example: "Arabic cheese is delicious", exampleTranslation: "الجبن العربي لذيذ" },
      { id: "ae_food_10", arabic: "بيض", english: "Egg", example: "I eat eggs for breakfast", exampleTranslation: "آكل البيض على الفطور" }
    ]
  },

  house: {
    name: "المنزل",
    description: "أغراض منزلية",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "ae_house_1", arabic: "بيت", english: "House", example: "My house is big", exampleTranslation: "بيتي كبير" },
      { id: "ae_house_2", arabic: "غرفة", english: "Room", example: "The room is clean", exampleTranslation: "الغرفة نظيفة" },
      { id: "ae_house_3", arabic: "مطبخ", english: "Kitchen", example: "I cook in the kitchen", exampleTranslation: "أطبخ في المطبخ" },
      { id: "ae_house_4", arabic: "حمام", english: "Bathroom", example: "The bathroom is new", exampleTranslation: "الحمام جديد" },
      { id: "ae_house_5", arabic: "غرفة نوم", english: "Bedroom", example: "My bedroom is comfortable", exampleTranslation: "غرفة نومي مريحة" },
      { id: "ae_house_6", arabic: "باب", english: "Door", example: "Close the door", exampleTranslation: "أغلق الباب" },
      { id: "ae_house_7", arabic: "نافذة", english: "Window", example: "Open the window", exampleTranslation: "افتح النافذة" },
      { id: "ae_house_8", arabic: "طاولة", english: "Table", example: "The table is wooden", exampleTranslation: "الطاولة خشبية" },
      { id: "ae_house_9", arabic: "كرسي", english: "Chair", example: "The chair is comfortable", exampleTranslation: "الكرسي مريح" },
      { id: "ae_house_10", arabic: "سرير", english: "Bed", example: "The bed is soft", exampleTranslation: "السرير ناعم" }
    ]
  },

  places: {
    name: "الأماكن",
    description: "مواقع",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "ae_place_1", arabic: "متجر", english: "Store", example: "The store is open", exampleTranslation: "المتجر مفتوح" },
      { id: "ae_place_2", arabic: "مدرسة", english: "School", example: "I go to school", exampleTranslation: "أذهب إلى المدرسة" },
      { id: "ae_place_3", arabic: "مستشفى", english: "Hospital", example: "The hospital is close", exampleTranslation: "المستشفى قريب" },
      { id: "ae_place_4", arabic: "حديقة", english: "Park", example: "Children play in the park", exampleTranslation: "الأطفال يلعبون في الحديقة" },
      { id: "ae_place_5", arabic: "مطعم", english: "Restaurant", example: "We eat at the restaurant", exampleTranslation: "نأكل في المطعم" },
      { id: "ae_place_6", arabic: "فندق", english: "Hotel", example: "The hotel is very big", exampleTranslation: "الفندق كبير جداً" },
      { id: "ae_place_7", arabic: "بنك", english: "Bank", example: "I go to the bank", exampleTranslation: "أذهب إلى البنك" },
      { id: "ae_place_8", arabic: "مطار", english: "Airport", example: "I'm at the airport", exampleTranslation: "أنا في المطار" },
      { id: "ae_place_9", arabic: "محطة قطار", english: "Train station", example: "The train station", exampleTranslation: "محطة القطار" },
      { id: "ae_place_10", arabic: "متحف", english: "Museum", example: "The museum is interesting", exampleTranslation: "المتحف ممتع" }
    ]
  },

  clothing: {
    name: "الملابس",
    description: "ملابس",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "ae_cloth_1", arabic: "قميص", english: "Shirt", example: "I like your shirt", exampleTranslation: "أحب قميصك" },
      { id: "ae_cloth_2", arabic: "بنطال", english: "Pants", example: "I need new pants", exampleTranslation: "أحتاج بنطالاً جديداً" },
      { id: "ae_cloth_3", arabic: "أحذية", english: "Shoes", example: "I bought black shoes", exampleTranslation: "اشتريت أحذية سوداء" },
      { id: "ae_cloth_4", arabic: "فستان", english: "Dress", example: "The dress is beautiful", exampleTranslation: "الفستان جميل" },
      { id: "ae_cloth_5", arabic: "سترة", english: "Jacket", example: "I need a jacket", exampleTranslation: "أحتاج سترة" },
      { id: "ae_cloth_6", arabic: "قبعة", english: "Hat", example: "Put on the hat", exampleTranslation: "ضع القبعة" },
      { id: "ae_cloth_7", arabic: "جوارب", english: "Socks", example: "My socks are clean", exampleTranslation: "جواربي نظيفة" },
      { id: "ae_cloth_8", arabic: "قفازات", english: "Gloves", example: "I wear gloves in winter", exampleTranslation: "أرتدي القفازات في الشتاء" },
      { id: "ae_cloth_9", arabic: "وشاح", english: "Scarf", example: "The scarf is soft", exampleTranslation: "الوشاح ناعم" },
      { id: "ae_cloth_10", arabic: "معطف", english: "Coat", example: "The coat is warm", exampleTranslation: "المعطف دافئ" }
    ]
  },

  work: {
    name: "العمل",
    description: "المهن",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "ae_work_1", arabic: "عمل", english: "Work", example: "I go to work", exampleTranslation: "أذهب إلى العمل" },
      { id: "ae_work_2", arabic: "طبيب", english: "Doctor", example: "He is a doctor", exampleTranslation: "هو طبيب" },
      { id: "ae_work_3", arabic: "معلم", english: "Teacher", example: "My teacher is excellent", exampleTranslation: "معلمي ممتاز" },
      { id: "ae_work_4", arabic: "مهندس", english: "Engineer", example: "I am an engineer", exampleTranslation: "أنا مهندس" },
      { id: "ae_work_5", arabic: "محامي", english: "Lawyer", example: "She is a lawyer", exampleTranslation: "هي محامية" },
      { id: "ae_work_6", arabic: "طباخ", english: "Cook", example: "The cook prepares the meal", exampleTranslation: "الطباخ يحضر الطعام" },
      { id: "ae_work_7", arabic: "نادل", english: "Waiter", example: "The waiter is kind", exampleTranslation: "النادل لطيف" },
      { id: "ae_work_8", arabic: "بائع", english: "Salesperson", example: "The salesperson helps the customer", exampleTranslation: "البائع يساعد الزبون" },
      { id: "ae_work_9", arabic: "شرطي", english: "Police officer", example: "The police officer protects the city", exampleTranslation: "الشرطي يحمي المدينة" },
      { id: "ae_work_10", arabic: "ميكانيكي", english: "Mechanic", example: "The mechanic repairs cars", exampleTranslation: "الميكانيكي يصلح السيارات" }
    ]
  },

  transport: {
    name: "النقل",
    description: "وسائل النقل",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "ae_trans_1", arabic: "سيارة", english: "Car", example: "I have a new car", exampleTranslation: "عندي سيارة جديدة" },
      { id: "ae_trans_2", arabic: "حافلة", english: "Bus", example: "I go by bus", exampleTranslation: "أذهب بالحافلة" },
      { id: "ae_trans_3", arabic: "قطار", english: "Train", example: "The train is fast", exampleTranslation: "القطار سريع" },
      { id: "ae_trans_4", arabic: "طائرة", english: "Airplane", example: "I travel by plane", exampleTranslation: "أسافر بالطائرة" },
      { id: "ae_trans_5", arabic: "دراجة", english: "Bicycle", example: "I ride a bicycle", exampleTranslation: "أركب الدراجة" },
      { id: "ae_trans_6", arabic: "تاكسي", english: "Taxi", example: "I call a taxi", exampleTranslation: "أطلب تاكسي" },
      { id: "ae_trans_7", arabic: "مترو", english: "Metro", example: "I use the metro", exampleTranslation: "أستخدم المترو" },
      { id: "ae_trans_8", arabic: "دراجة نارية", english: "Motorcycle", example: "My motorcycle is red", exampleTranslation: "دراجتي النارية حمراء" },
      { id: "ae_trans_9", arabic: "قارب", english: "Boat", example: "We sail by boat", exampleTranslation: "نبحر بالقارب" },
      { id: "ae_trans_10", arabic: "تذكرة", english: "Ticket", example: "I buy a ticket", exampleTranslation: "أشتري تذكرة" }
    ]
  },

  education: {
    name: "التعليم",
    description: "المدرسة",
    icon: School,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "ae_edu_1", arabic: "طالب", english: "Student", example: "I am a student", exampleTranslation: "أنا طالب" },
      { id: "ae_edu_2", arabic: "معلم", english: "Teacher", example: "The teacher teaches well", exampleTranslation: "المعلم يدرس جيداً" },
      { id: "ae_edu_3", arabic: "كتاب", english: "Book", example: "I read a book", exampleTranslation: "أقرأ كتاباً" },
      { id: "ae_edu_4", arabic: "قلم رصاص", english: "Pencil", example: "Do you have a pencil?", exampleTranslation: "هل عندك قلم رصاص؟" },
      { id: "ae_edu_5", arabic: "دفتر", english: "Notebook", example: "I need a notebook", exampleTranslation: "أحتاج دفتراً" },
      { id: "ae_edu_6", arabic: "امتحان", english: "Exam", example: "The exam is tomorrow", exampleTranslation: "الامتحان غداً" },
      { id: "ae_edu_7", arabic: "واجب منزلي", english: "Homework", example: "I have a lot of homework", exampleTranslation: "عندي واجب منزلي كثير" },
      { id: "ae_edu_8", arabic: "صف", english: "Class", example: "The class starts at nine", exampleTranslation: "الصف يبدأ في التاسعة" },
      { id: "ae_edu_9", arabic: "مكتبة", english: "Library", example: "I study at the library", exampleTranslation: "أدرس في المكتبة" },
      { id: "ae_edu_10", arabic: "حقيبة ظهر", english: "Backpack", example: "My backpack is heavy", exampleTranslation: "حقيبتي ثقيلة" }
    ]
  },

  nature: {
    name: "الطبيعة",
    description: "الطبيعة",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "ae_nature_1", arabic: "شجرة", english: "Tree", example: "The tree is tall", exampleTranslation: "الشجرة عالية" },
      { id: "ae_nature_2", arabic: "زهرة", english: "Flower", example: "The flower is beautiful", exampleTranslation: "الزهرة جميلة" },
      { id: "ae_nature_3", arabic: "جبل", english: "Mountain", example: "The mountain is high", exampleTranslation: "الجبل عالي" },
      { id: "ae_nature_4", arabic: "نهر", english: "River", example: "The river is long", exampleTranslation: "النهر طويل" },
      { id: "ae_nature_5", arabic: "بحر", english: "Sea", example: "The sea is blue", exampleTranslation: "البحر أزرق" },
      { id: "ae_nature_6", arabic: "غابة", english: "Forest", example: "We walk through the forest", exampleTranslation: "نمشي في الغابة" },
      { id: "ae_nature_7", arabic: "بحيرة", english: "Lake", example: "The lake is calm", exampleTranslation: "البحيرة هادئة" },
      { id: "ae_nature_8", arabic: "سماء", english: "Sky", example: "The sky is blue", exampleTranslation: "السماء زرقاء" },
      { id: "ae_nature_9", arabic: "نجمة", english: "Star", example: "The stars shine", exampleTranslation: "النجوم تلمع" },
      { id: "ae_nature_10", arabic: "قمر", english: "Moon", example: "The moon is full", exampleTranslation: "القمر مكتمل" }
    ]
  },

  emotions: {
    name: "المشاعر",
    description: "الأحاسيس",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "ae_emo_1", arabic: "سعيد", english: "Happy", example: "I am happy", exampleTranslation: "أنا سعيد" },
      { id: "ae_emo_2", arabic: "حزين", english: "Sad", example: "He is sad", exampleTranslation: "هو حزين" },
      { id: "ae_emo_3", arabic: "غاضب", english: "Angry", example: "She is angry", exampleTranslation: "هي غاضبة" },
      { id: "ae_emo_4", arabic: "متعب", english: "Tired", example: "I am tired", exampleTranslation: "أنا متعب" },
      { id: "ae_emo_5", arabic: "متحمس", english: "Excited", example: "We are excited", exampleTranslation: "نحن متحمسون" },
      { id: "ae_emo_6", arabic: "عصبي", english: "Nervous", example: "He is nervous", exampleTranslation: "هو عصبي" },
      { id: "ae_emo_7", arabic: "هادئ", english: "Calm", example: "She is calm", exampleTranslation: "هي هادئة" },
      { id: "ae_emo_8", arabic: "مندهش", english: "Surprised", example: "I am surprised", exampleTranslation: "أنا مندهش" },
      { id: "ae_emo_9", arabic: "خائف", english: "Scared", example: "The child is scared", exampleTranslation: "الطفل خائف" },
      { id: "ae_emo_10", arabic: "ملول", english: "Bored", example: "They are bored", exampleTranslation: "هم ملولون" }
    ]
  },

  time: {
    name: "الوقت",
    description: "تعبيرات زمنية",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "ae_time_1", arabic: "اليوم", english: "Today", example: "Today is Monday", exampleTranslation: "اليوم الاثنين" },
      { id: "ae_time_2", arabic: "أمس", english: "Yesterday", example: "Yesterday was Sunday", exampleTranslation: "أمس كان الأحد" },
      { id: "ae_time_3", arabic: "غداً", english: "Tomorrow", example: "Tomorrow is Tuesday", exampleTranslation: "غداً الثلاثاء" },
      { id: "ae_time_4", arabic: "الآن", english: "Now", example: "I'm working now", exampleTranslation: "أعمل الآن" },
      { id: "ae_time_5", arabic: "لاحقاً", english: "Later", example: "I'll do it later", exampleTranslation: "سأفعله لاحقاً" },
      { id: "ae_time_6", arabic: "صباح", english: "Morning", example: "Good morning", exampleTranslation: "صباح الخير" },
      { id: "ae_time_7", arabic: "ظهر", english: "Noon", example: "It's noon", exampleTranslation: "الآن الظهر" },
      { id: "ae_time_8", arabic: "مساء", english: "Evening", example: "Good evening", exampleTranslation: "مساء الخير" },
      { id: "ae_time_9", arabic: "ليل", english: "Night", example: "Good night", exampleTranslation: "تصبح على خير" },
      { id: "ae_time_10", arabic: "أسبوع", english: "Week", example: "Next week", exampleTranslation: "الأسبوع القادم" }
    ]
  },

  weather: {
    name: "الطقس",
    description: "حالة الطقس",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "ae_weather_1", arabic: "شمس", english: "Sun", example: "The sun shines", exampleTranslation: "الشمس تشرق" },
      { id: "ae_weather_2", arabic: "مطر", english: "Rain", example: "It's raining", exampleTranslation: "تمطر" },
      { id: "ae_weather_3", arabic: "ثلج", english: "Snow", example: "It's snowing", exampleTranslation: "تثلج" },
      { id: "ae_weather_4", arabic: "رياح", english: "Wind", example: "It's windy", exampleTranslation: "الجو عاصف" },
      { id: "ae_weather_5", arabic: "سحابة", english: "Cloud", example: "There are clouds in the sky", exampleTranslation: "توجد سحب في السماء" },
      { id: "ae_weather_6", arabic: "عاصفة", english: "Storm", example: "A storm is coming", exampleTranslation: "عاصفة قادمة" },
      { id: "ae_weather_7", arabic: "حار", english: "Hot", example: "It's very hot", exampleTranslation: "الجو حار جداً" },
      { id: "ae_weather_8", arabic: "بارد", english: "Cold", example: "It's cold in winter", exampleTranslation: "الجو بارد في الشتاء" },
      { id: "ae_weather_9", arabic: "برق", english: "Lightning", example: "I saw lightning", exampleTranslation: "رأيت برقاً" },
      { id: "ae_weather_10", arabic: "رعد", english: "Thunder", example: "You can hear thunder", exampleTranslation: "يمكنك سماع الرعد" }
    ]
  },

  body: {
    name: "الجسم",
    description: "أجزاء الجسم",
    icon: Hand,
    color: "from-pink-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "ae_body_1", arabic: "رأس", english: "Head", example: "My head hurts", exampleTranslation: "رأسي يؤلمني" },
      { id: "ae_body_2", arabic: "عين", english: "Eye", example: "I have blue eyes", exampleTranslation: "عيوني زرقاء" },
      { id: "ae_body_3", arabic: "أنف", english: "Nose", example: "My nose is cold", exampleTranslation: "أنفي بارد" },
      { id: "ae_body_4", arabic: "فم", english: "Mouth", example: "Open your mouth", exampleTranslation: "افتح فمك" },
      { id: "ae_body_5", arabic: "أذن", english: "Ear", example: "My ears are big", exampleTranslation: "أذناي كبيرتان" },
      { id: "ae_body_6", arabic: "يد", english: "Hand", example: "Give me your hand", exampleTranslation: "أعطني يدك" },
      { id: "ae_body_7", arabic: "قدم", english: "Foot", example: "My foot hurts", exampleTranslation: "قدمي تؤلمني" },
      { id: "ae_body_8", arabic: "ذراع", english: "Arm", example: "Raise your arm", exampleTranslation: "ارفع ذراعك" },
      { id: "ae_body_9", arabic: "ساق", english: "Leg", example: "My legs are tired", exampleTranslation: "ساقاي متعبتان" },
      { id: "ae_body_10", arabic: "قلب", english: "Heart", example: "My heart beats fast", exampleTranslation: "قلبي ينبض بسرعة" }
    ]
  },

  activities: {
    name: "الأنشطة",
    description: "أنشطة يومية",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "ae_act_1", arabic: "يأكل", english: "Eat", example: "I'm going to eat", exampleTranslation: "سآكل" },
      { id: "ae_act_2", arabic: "يشرب", english: "Drink", example: "I drink water", exampleTranslation: "أشرب الماء" },
      { id: "ae_act_3", arabic: "ينام", english: "Sleep", example: "I need to sleep", exampleTranslation: "يجب أن أنام" },
      { id: "ae_act_4", arabic: "يجري", english: "Run", example: "I run in the morning", exampleTranslation: "أجري في الصباح" },
      { id: "ae_act_5", arabic: "يقرأ", english: "Read", example: "I read a book", exampleTranslation: "أقرأ كتاباً" },
      { id: "ae_act_6", arabic: "يكتب", english: "Write", example: "I write a letter", exampleTranslation: "أكتب رسالة" },
      { id: "ae_act_7", arabic: "يتكلم", english: "Speak", example: "I speak Arabic", exampleTranslation: "أتكلم العربية" },
      { id: "ae_act_8", arabic: "يستمع", english: "Listen", example: "I listen to music", exampleTranslation: "أستمع للموسيقى" },
      { id: "ae_act_9", arabic: "يشاهد", english: "Watch", example: "I watch television", exampleTranslation: "أشاهد التلفزيون" },
      { id: "ae_act_10", arabic: "يفكر", english: "Think", example: "I think of you", exampleTranslation: "أفكر فيك" }
    ]
  },

  learning: {
    name: "التعلم",
    description: "أنشطة التعلم",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "ae_learn_1", arabic: "يتعلم", english: "Learn", example: "I learn Arabic", exampleTranslation: "أتعلم العربية" },
      { id: "ae_learn_2", arabic: "يدرس", english: "Study", example: "I study at university", exampleTranslation: "أدرس في الجامعة" },
      { id: "ae_learn_3", arabic: "يعلم", english: "Teach", example: "I teach English", exampleTranslation: "أعلم الإنجليزية" },
      { id: "ae_learn_4", arabic: "يفهم", english: "Understand", example: "I understand the lesson", exampleTranslation: "أفهم الدرس" },
      { id: "ae_learn_5", arabic: "يمارس", english: "Practice", example: "I practice every day", exampleTranslation: "أمارس كل يوم" },
      { id: "ae_learn_6", arabic: "يكرر", english: "Repeat", example: "Repeat the word", exampleTranslation: "كرر الكلمة" },
      { id: "ae_learn_7", arabic: "يشرح", english: "Explain", example: "The teacher explains well", exampleTranslation: "المعلم يشرح جيداً" },
      { id: "ae_learn_8", arabic: "يسأل", english: "Ask", example: "I ask the teacher", exampleTranslation: "أسأل المعلم" },
      { id: "ae_learn_9", arabic: "يجيب", english: "Answer", example: "I answer the question", exampleTranslation: "أجيب على السؤال" },
      { id: "ae_learn_10", arabic: "يتذكر", english: "Remember", example: "I remember the lesson", exampleTranslation: "أتذكر الدرس" }
    ]
  },

  sports: {
    name: "الرياضة",
    description: "رياضات",
    icon: Dumbbell,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "ae_sport_1", arabic: "كرة القدم", english: "Football", example: "I play football", exampleTranslation: "ألعب كرة القدم" },
      { id: "ae_sport_2", arabic: "كرة السلة", english: "Basketball", example: "I like basketball", exampleTranslation: "أحب كرة السلة" },
      { id: "ae_sport_3", arabic: "تنس", english: "Tennis", example: "I play tennis", exampleTranslation: "ألعب التنس" },
      { id: "ae_sport_4", arabic: "سباحة", english: "Swimming", example: "Swimming is healthy", exampleTranslation: "السباحة صحية" },
      { id: "ae_sport_5", arabic: "جري", english: "Running", example: "I run in the morning", exampleTranslation: "أجري في الصباح" },
      { id: "ae_sport_6", arabic: "ركوب الدراجات", english: "Cycling", example: "I like cycling", exampleTranslation: "أحب ركوب الدراجات" },
      { id: "ae_sport_7", arabic: "صالة رياضية", english: "Gym", example: "I go to the gym", exampleTranslation: "أذهب إلى الصالة الرياضية" },
      { id: "ae_sport_8", arabic: "تدريب", english: "Training", example: "I have training today", exampleTranslation: "عندي تدريب اليوم" },
      { id: "ae_sport_9", arabic: "فريق", english: "Team", example: "I'm on a team", exampleTranslation: "أنا في فريق" },
      { id: "ae_sport_10", arabic: "مدرب", english: "Coach", example: "Our coach is excellent", exampleTranslation: "مدربنا ممتاز" }
    ]
  },

  travel: {
    name: "السفر",
    description: "السياحة",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    words: [
      { id: "ae_travel_1", arabic: "سفر", english: "Travel", example: "I'm going on a trip", exampleTranslation: "أذهب في رحلة" },
      { id: "ae_travel_2", arabic: "حقيبة سفر", english: "Suitcase", example: "My suitcase is heavy", exampleTranslation: "حقيبتي ثقيلة" },
      { id: "ae_travel_3", arabic: "جواز سفر", english: "Passport", example: "I need my passport", exampleTranslation: "أحتاج جواز سفري" },
      { id: "ae_travel_4", arabic: "فندق", english: "Hotel", example: "The hotel is comfortable", exampleTranslation: "الفندق مريح" },
      { id: "ae_travel_5", arabic: "حجز", english: "Reservation", example: "I have a reservation", exampleTranslation: "عندي حجز" },
      { id: "ae_travel_6", arabic: "سائح", english: "Tourist", example: "I am a tourist", exampleTranslation: "أنا سائح" },
      { id: "ae_travel_7", arabic: "إجازة", english: "Vacation", example: "I'm on vacation", exampleTranslation: "أنا في إجازة" },
      { id: "ae_travel_8", arabic: "جولة سياحية", english: "Sightseeing", example: "We're doing sightseeing", exampleTranslation: "نقوم بجولة سياحية" },
      { id: "ae_travel_9", arabic: "مرشد", english: "Guide", example: "The guide is informative", exampleTranslation: "المرشد مفيد" },
      { id: "ae_travel_10", arabic: "تذكار", english: "Souvenir", example: "I'm buying a souvenir", exampleTranslation: "أشتري تذكاراً" }
    ]
  },

  entertainment: {
    name: "الترفيه",
    description: "وقت الفراغ",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "ae_ent_1", arabic: "موسيقى", english: "Music", example: "I listen to music", exampleTranslation: "أستمع للموسيقى" },
      { id: "ae_ent_2", arabic: "فيلم", english: "Movie", example: "I watch a movie", exampleTranslation: "أشاهد فيلماً" },
      { id: "ae_ent_3", arabic: "حفلة موسيقية", english: "Concert", example: "I go to a concert", exampleTranslation: "أذهب إلى حفلة موسيقية" },
      { id: "ae_ent_4", arabic: "مسرح", english: "Theater", example: "I go to the theater", exampleTranslation: "أذهب إلى المسرح" },
      { id: "ae_ent_5", arabic: "رقص", english: "Dance", example: "I like to dance", exampleTranslation: "أحب الرقص" },
      { id: "ae_ent_6", arabic: "غناء", english: "Sing", example: "I like to sing", exampleTranslation: "أحب الغناء" },
      { id: "ae_ent_7", arabic: "جيتار", english: "Guitar", example: "I play guitar", exampleTranslation: "ألعب الجيتار" },
      { id: "ae_ent_8", arabic: "ألعاب", english: "Games", example: "I play video games", exampleTranslation: "ألعب ألعاب الفيديو" },
      { id: "ae_ent_9", arabic: "تصوير", english: "Photography", example: "I'm interested in photography", exampleTranslation: "أهتم بالتصوير" },
      { id: "ae_ent_10", arabic: "قراءة", english: "Reading", example: "Reading is my hobby", exampleTranslation: "القراءة هوايتي" }
    ]
  }
};

export default flashcardsCategories;