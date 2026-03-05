import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Greetings",
    description: "Basic greetings",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "ea_greet_1", english: "Hello", arabic: "مرحباً", example: "مرحباً، كيف حالك؟", exampleTranslation: "Hello, how are you?" },
      { id: "ea_greet_2", english: "Good morning", arabic: "صباح الخير", example: "صباح الخير، يا سيدي", exampleTranslation: "Good morning, sir" },
      { id: "ea_greet_3", english: "Good evening", arabic: "مساء الخير", example: "مساء الخير، كيف حالك؟", exampleTranslation: "Good evening, how are you?" },
      { id: "ea_greet_4", english: "Good night", arabic: "تصبح على خير", example: "تصبح على خير، نم جيداً", exampleTranslation: "Good night, sleep well" },
      { id: "ea_greet_5", english: "Goodbye", arabic: "وداعاً", example: "وداعاً، أراك لاحقاً", exampleTranslation: "Goodbye, see you later" },
      { id: "ea_greet_6", english: "Thank you", arabic: "شكراً", example: "شكراً لمساعدتك", exampleTranslation: "Thank you for your help" },
      { id: "ea_greet_7", english: "Please", arabic: "من فضلك", example: "من فضلك، ساعدني", exampleTranslation: "Please, help me" },
      { id: "ea_greet_8", english: "Excuse me", arabic: "عفواً", example: "عفواً، أنا متأخر", exampleTranslation: "Excuse me, I'm late" },
      { id: "ea_greet_9", english: "Yes", arabic: "نعم", example: "نعم، أنا موافق", exampleTranslation: "Yes, I agree" },
      { id: "ea_greet_10", english: "No", arabic: "لا", example: "لا، لا أريد", exampleTranslation: "No, I don't want" }
    ]
  },

  family: {
    name: "Family",
    description: "Family members",
    icon: Users,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "ea_fam_1", english: "Father", arabic: "أب", example: "أبي يعمل كثيراً", exampleTranslation: "My father works a lot" },
      { id: "ea_fam_2", english: "Mother", arabic: "أم", example: "أمي تطبخ جيداً", exampleTranslation: "My mother cooks well" },
      { id: "ea_fam_3", english: "Brother", arabic: "أخ", example: "أخي يدرس الطب", exampleTranslation: "My brother studies medicine" },
      { id: "ea_fam_4", english: "Sister", arabic: "أخت", example: "أختي معلمة", exampleTranslation: "My sister is a teacher" },
      { id: "ea_fam_5", english: "Son", arabic: "ابن", example: "ابني عمره عشر سنوات", exampleTranslation: "My son is ten years old" },
      { id: "ea_fam_6", english: "Daughter", arabic: "ابنة", example: "ابنتي تذهب إلى الجامعة", exampleTranslation: "My daughter goes to university" },
      { id: "ea_fam_7", english: "Grandfather", arabic: "جد", example: "جدي حكيم جداً", exampleTranslation: "My grandfather is very wise" },
      { id: "ea_fam_8", english: "Grandmother", arabic: "جدة", example: "جدتي تصنع الكعك", exampleTranslation: "My grandmother makes cakes" },
      { id: "ea_fam_9", english: "Uncle", arabic: "عم", example: "عمي يعيش في القاهرة", exampleTranslation: "My uncle lives in Cairo" },
      { id: "ea_fam_10", english: "Aunt", arabic: "عمة", example: "عمتي لطيفة جداً", exampleTranslation: "My aunt is very kind" }
    ]
  },

  numbers: {
    name: "Numbers",
    description: "Basic numbers",
    icon: Hash,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "ea_num_1", english: "One", arabic: "واحد", example: "عندي أخ واحد", exampleTranslation: "I have one brother" },
      { id: "ea_num_2", english: "Two", arabic: "اثنان", example: "يوجد قطتان", exampleTranslation: "There are two cats" },
      { id: "ea_num_3", english: "Three", arabic: "ثلاثة", example: "الساعة الثالثة", exampleTranslation: "It's three o'clock" },
      { id: "ea_num_4", english: "Four", arabic: "أربعة", example: "أربعة فصول", exampleTranslation: "Four seasons" },
      { id: "ea_num_5", english: "Five", arabic: "خمسة", example: "خمسة أصابع في اليد", exampleTranslation: "Five fingers on the hand" },
      { id: "ea_num_6", english: "Six", arabic: "ستة", example: "ابني عمره ست سنوات", exampleTranslation: "My son is six years old" },
      { id: "ea_num_7", english: "Seven", arabic: "سبعة", example: "سبعة أيام في الأسبوع", exampleTranslation: "Seven days of the week" },
      { id: "ea_num_8", english: "Eight", arabic: "ثمانية", example: "أعمل ثماني ساعات", exampleTranslation: "I work eight hours" },
      { id: "ea_num_9", english: "Nine", arabic: "تسعة", example: "الساعة التاسعة صباحاً", exampleTranslation: "It's nine o'clock in the morning" },
      { id: "ea_num_10", english: "Ten", arabic: "عشرة", example: "عشرة يورو، من فضلك", exampleTranslation: "Ten euros, please" }
    ]
  },

  colors: {
    name: "Colors",
    description: "Basic colors",
    icon: Palette,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "ea_col_1", english: "Red", arabic: "أحمر", example: "السيارة حمراء", exampleTranslation: "The car is red" },
      { id: "ea_col_2", english: "Blue", arabic: "أزرق", example: "السماء زرقاء", exampleTranslation: "The sky is blue" },
      { id: "ea_col_3", english: "Green", arabic: "أخضر", example: "العشب أخضر", exampleTranslation: "The grass is green" },
      { id: "ea_col_4", english: "Yellow", arabic: "أصفر", example: "الشمس صفراء", exampleTranslation: "The sun is yellow" },
      { id: "ea_col_5", english: "Black", arabic: "أسود", example: "قطتي سوداء", exampleTranslation: "My cat is black" },
      { id: "ea_col_6", english: "White", arabic: "أبيض", example: "الثلج أبيض", exampleTranslation: "The snow is white" },
      { id: "ea_col_7", english: "Orange", arabic: "برتقالي", example: "البرتقالة برتقالية", exampleTranslation: "The orange is orange" },
      { id: "ea_col_8", english: "Pink", arabic: "وردي", example: "الفستان وردي", exampleTranslation: "The dress is pink" },
      { id: "ea_col_9", english: "Brown", arabic: "بني", example: "الدب بني", exampleTranslation: "The bear is brown" },
      { id: "ea_col_10", english: "Gray", arabic: "رمادي", example: "الفيل رمادي", exampleTranslation: "The elephant is gray" }
    ]
  },

  food: {
    name: "Food",
    description: "Basic foods",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-red-500",
    level: "beginner",
    words: [
      { id: "ea_food_1", english: "Bread", arabic: "خبز", example: "الخبز طازج", exampleTranslation: "The bread is fresh" },
      { id: "ea_food_2", english: "Water", arabic: "ماء", example: "كأس من الماء، من فضلك", exampleTranslation: "A glass of water, please" },
      { id: "ea_food_3", english: "Coffee", arabic: "قهوة", example: "أحب القهوة", exampleTranslation: "I like coffee" },
      { id: "ea_food_4", english: "Milk", arabic: "حليب", example: "الحليب طازج", exampleTranslation: "The milk is fresh" },
      { id: "ea_food_5", english: "Meat", arabic: "لحم", example: "اللحم لذيذ", exampleTranslation: "The meat is delicious" },
      { id: "ea_food_6", english: "Fish", arabic: "سمك", example: "السمك صحي جداً", exampleTranslation: "Fish is very healthy" },
      { id: "ea_food_7", english: "Fruit", arabic: "فاكهة", example: "آكل الفاكهة كل يوم", exampleTranslation: "I eat fruit every day" },
      { id: "ea_food_8", english: "Vegetables", arabic: "خضروات", example: "الخضروات مهمة", exampleTranslation: "Vegetables are important" },
      { id: "ea_food_9", english: "Cheese", arabic: "جبن", example: "الجبن العربي لذيذ", exampleTranslation: "Arabic cheese is delicious" },
      { id: "ea_food_10", english: "Egg", arabic: "بيض", example: "آكل البيض على الفطور", exampleTranslation: "I eat eggs for breakfast" }
    ]
  },

  house: {
    name: "House",
    description: "Household items",
    icon: Home,
    color: "from-yellow-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "ea_house_1", english: "House", arabic: "بيت", example: "بيتي كبير", exampleTranslation: "My house is big" },
      { id: "ea_house_2", english: "Room", arabic: "غرفة", example: "الغرفة نظيفة", exampleTranslation: "The room is clean" },
      { id: "ea_house_3", english: "Kitchen", arabic: "مطبخ", example: "أطبخ في المطبخ", exampleTranslation: "I cook in the kitchen" },
      { id: "ea_house_4", english: "Bathroom", arabic: "حمام", example: "الحمام جديد", exampleTranslation: "The bathroom is new" },
      { id: "ea_house_5", english: "Bedroom", arabic: "غرفة نوم", example: "غرفة نومي مريحة", exampleTranslation: "My bedroom is comfortable" },
      { id: "ea_house_6", english: "Door", arabic: "باب", example: "أغلق الباب", exampleTranslation: "Close the door" },
      { id: "ea_house_7", english: "Window", arabic: "نافذة", example: "افتح النافذة", exampleTranslation: "Open the window" },
      { id: "ea_house_8", english: "Table", arabic: "طاولة", example: "الطاولة خشبية", exampleTranslation: "The table is wooden" },
      { id: "ea_house_9", english: "Chair", arabic: "كرسي", example: "الكرسي مريح", exampleTranslation: "The chair is comfortable" },
      { id: "ea_house_10", english: "Bed", arabic: "سرير", example: "السرير ناعم", exampleTranslation: "The bed is soft" }
    ]
  },

  places: {
    name: "Places",
    description: "Locations",
    icon: MapPin,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "ea_place_1", english: "Store", arabic: "متجر", example: "المتجر مفتوح", exampleTranslation: "The store is open" },
      { id: "ea_place_2", english: "School", arabic: "مدرسة", example: "أذهب إلى المدرسة", exampleTranslation: "I go to school" },
      { id: "ea_place_3", english: "Hospital", arabic: "مستشفى", example: "المستشفى قريب", exampleTranslation: "The hospital is close" },
      { id: "ea_place_4", english: "Park", arabic: "حديقة", example: "الأطفال يلعبون في الحديقة", exampleTranslation: "Children play in the park" },
      { id: "ea_place_5", english: "Restaurant", arabic: "مطعم", example: "نأكل في المطعم", exampleTranslation: "We eat at the restaurant" },
      { id: "ea_place_6", english: "Hotel", arabic: "فندق", example: "الفندق كبير جداً", exampleTranslation: "The hotel is very big" },
      { id: "ea_place_7", english: "Bank", arabic: "بنك", example: "أذهب إلى البنك", exampleTranslation: "I go to the bank" },
      { id: "ea_place_8", english: "Airport", arabic: "مطار", example: "أنا في المطار", exampleTranslation: "I'm at the airport" },
      { id: "ea_place_9", english: "Train station", arabic: "محطة قطار", example: "محطة القطار", exampleTranslation: "The train station" },
      { id: "ea_place_10", english: "Museum", arabic: "متحف", example: "المتحف ممتع", exampleTranslation: "The museum is interesting" }
    ]
  },

  clothing: {
    name: "Clothing",
    description: "Clothes",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "ea_cloth_1", english: "Shirt", arabic: "قميص", example: "أحب قميصك", exampleTranslation: "I like your shirt" },
      { id: "ea_cloth_2", english: "Pants", arabic: "بنطال", example: "أحتاج بنطالاً جديداً", exampleTranslation: "I need new pants" },
      { id: "ea_cloth_3", english: "Shoes", arabic: "أحذية", example: "اشتريت أحذية سوداء", exampleTranslation: "I bought black shoes" },
      { id: "ea_cloth_4", english: "Dress", arabic: "فستان", example: "الفستان جميل", exampleTranslation: "The dress is beautiful" },
      { id: "ea_cloth_5", english: "Jacket", arabic: "سترة", example: "أحتاج سترة", exampleTranslation: "I need a jacket" },
      { id: "ea_cloth_6", english: "Hat", arabic: "قبعة", example: "ضع القبعة", exampleTranslation: "Put on the hat" },
      { id: "ea_cloth_7", english: "Socks", arabic: "جوارب", example: "جواربي نظيفة", exampleTranslation: "My socks are clean" },
      { id: "ea_cloth_8", english: "Gloves", arabic: "قفازات", example: "أرتدي القفازات في الشتاء", exampleTranslation: "I wear gloves in winter" },
      { id: "ea_cloth_9", english: "Scarf", arabic: "وشاح", example: "الوشاح ناعم", exampleTranslation: "The scarf is soft" },
      { id: "ea_cloth_10", english: "Coat", arabic: "معطف", example: "المعطف دافئ", exampleTranslation: "The coat is warm" }
    ]
  },

  work: {
    name: "Work",
    description: "Professions",
    icon: Briefcase,
    color: "from-indigo-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "ea_work_1", english: "Work", arabic: "عمل", example: "أذهب إلى العمل", exampleTranslation: "I go to work" },
      { id: "ea_work_2", english: "Doctor", arabic: "طبيب", example: "هو طبيب", exampleTranslation: "He is a doctor" },
      { id: "ea_work_3", english: "Teacher", arabic: "معلم", example: "معلمي ممتاز", exampleTranslation: "My teacher is excellent" },
      { id: "ea_work_4", english: "Engineer", arabic: "مهندس", example: "أنا مهندس", exampleTranslation: "I am an engineer" },
      { id: "ea_work_5", english: "Lawyer", arabic: "محامي", example: "هي محامية", exampleTranslation: "She is a lawyer" },
      { id: "ea_work_6", english: "Cook", arabic: "طباخ", example: "الطباخ يحضر الطعام", exampleTranslation: "The cook prepares the meal" },
      { id: "ea_work_7", english: "Waiter", arabic: "نادل", example: "النادل لطيف", exampleTranslation: "The waiter is kind" },
      { id: "ea_work_8", english: "Salesperson", arabic: "بائع", example: "البائع يساعد الزبون", exampleTranslation: "The salesperson helps the customer" },
      { id: "ea_work_9", english: "Police officer", arabic: "شرطي", example: "الشرطي يحمي المدينة", exampleTranslation: "The police officer protects the city" },
      { id: "ea_work_10", english: "Mechanic", arabic: "ميكانيكي", example: "الميكانيكي يصلح السيارات", exampleTranslation: "The mechanic repairs cars" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Transportation",
    icon: Car,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "ea_trans_1", english: "Car", arabic: "سيارة", example: "عندي سيارة جديدة", exampleTranslation: "I have a new car" },
      { id: "ea_trans_2", english: "Bus", arabic: "حافلة", example: "أذهب بالحافلة", exampleTranslation: "I go by bus" },
      { id: "ea_trans_3", english: "Train", arabic: "قطار", example: "القطار سريع", exampleTranslation: "The train is fast" },
      { id: "ea_trans_4", english: "Airplane", arabic: "طائرة", example: "أسافر بالطائرة", exampleTranslation: "I travel by plane" },
      { id: "ea_trans_5", english: "Bicycle", arabic: "دراجة", example: "أركب الدراجة", exampleTranslation: "I ride a bicycle" },
      { id: "ea_trans_6", english: "Taxi", arabic: "تاكسي", example: "أطلب تاكسي", exampleTranslation: "I call a taxi" },
      { id: "ea_trans_7", english: "Metro", arabic: "مترو", example: "أستخدم المترو", exampleTranslation: "I use the metro" },
      { id: "ea_trans_8", english: "Motorcycle", arabic: "دراجة نارية", example: "دراجتي النارية حمراء", exampleTranslation: "My motorcycle is red" },
      { id: "ea_trans_9", english: "Boat", arabic: "قارب", example: "نبحر بالقارب", exampleTranslation: "We sail by boat" },
      { id: "ea_trans_10", english: "Ticket", arabic: "تذكرة", example: "أشتري تذكرة", exampleTranslation: "I buy a ticket" }
    ]
  },

  education: {
    name: "Education",
    description: "School",
    icon: School,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "ea_edu_1", english: "Student", arabic: "طالب", example: "أنا طالب", exampleTranslation: "I am a student" },
      { id: "ea_edu_2", english: "Teacher", arabic: "معلم", example: "المعلم يدرس جيداً", exampleTranslation: "The teacher teaches well" },
      { id: "ea_edu_3", english: "Book", arabic: "كتاب", example: "أقرأ كتاباً", exampleTranslation: "I read a book" },
      { id: "ea_edu_4", english: "Pencil", arabic: "قلم رصاص", example: "هل عندك قلم رصاص؟", exampleTranslation: "Do you have a pencil?" },
      { id: "ea_edu_5", english: "Notebook", arabic: "دفتر", example: "أحتاج دفتراً", exampleTranslation: "I need a notebook" },
      { id: "ea_edu_6", english: "Exam", arabic: "امتحان", example: "الامتحان غداً", exampleTranslation: "The exam is tomorrow" },
      { id: "ea_edu_7", english: "Homework", arabic: "واجب منزلي", example: "عندي واجب منزلي كثير", exampleTranslation: "I have a lot of homework" },
      { id: "ea_edu_8", english: "Class", arabic: "صف", example: "الصف يبدأ في التاسعة", exampleTranslation: "The class starts at nine" },
      { id: "ea_edu_9", english: "Library", arabic: "مكتبة", example: "أدرس في المكتبة", exampleTranslation: "I study at the library" },
      { id: "ea_edu_10", english: "Backpack", arabic: "حقيبة ظهر", example: "حقيبتي ثقيلة", exampleTranslation: "My backpack is heavy" }
    ]
  },

  nature: {
    name: "Nature",
    description: "Nature",
    icon: TreePine,
    color: "from-green-400 to-lime-500",
    level: "intermediate",
    words: [
      { id: "ea_nature_1", english: "Tree", arabic: "شجرة", example: "الشجرة عالية", exampleTranslation: "The tree is tall" },
      { id: "ea_nature_2", english: "Flower", arabic: "زهرة", example: "الزهرة جميلة", exampleTranslation: "The flower is beautiful" },
      { id: "ea_nature_3", english: "Mountain", arabic: "جبل", example: "الجبل عالي", exampleTranslation: "The mountain is high" },
      { id: "ea_nature_4", english: "River", arabic: "نهر", example: "النهر طويل", exampleTranslation: "The river is long" },
      { id: "ea_nature_5", english: "Sea", arabic: "بحر", example: "البحر أزرق", exampleTranslation: "The sea is blue" },
      { id: "ea_nature_6", english: "Forest", arabic: "غابة", example: "نمشي في الغابة", exampleTranslation: "We walk through the forest" },
      { id: "ea_nature_7", english: "Lake", arabic: "بحيرة", example: "البحيرة هادئة", exampleTranslation: "The lake is calm" },
      { id: "ea_nature_8", english: "Sky", arabic: "سماء", example: "السماء زرقاء", exampleTranslation: "The sky is blue" },
      { id: "ea_nature_9", english: "Star", arabic: "نجمة", example: "النجوم تلمع", exampleTranslation: "The stars shine" },
      { id: "ea_nature_10", english: "Moon", arabic: "قمر", example: "القمر مكتمل", exampleTranslation: "The moon is full" }
    ]
  },

  emotions: {
    name: "Emotions",
    description: "Feelings",
    icon: Heart,
    color: "from-yellow-400 to-amber-500",
    level: "intermediate",
    words: [
      { id: "ea_emo_1", english: "Happy", arabic: "سعيد", example: "أنا سعيد", exampleTranslation: "I am happy" },
      { id: "ea_emo_2", english: "Sad", arabic: "حزين", example: "هو حزين", exampleTranslation: "He is sad" },
      { id: "ea_emo_3", english: "Angry", arabic: "غاضب", example: "هي غاضبة", exampleTranslation: "She is angry" },
      { id: "ea_emo_4", english: "Tired", arabic: "متعب", example: "أنا متعب", exampleTranslation: "I am tired" },
      { id: "ea_emo_5", english: "Excited", arabic: "متحمس", example: "نحن متحمسون", exampleTranslation: "We are excited" },
      { id: "ea_emo_6", english: "Nervous", arabic: "عصبي", example: "هو عصبي", exampleTranslation: "He is nervous" },
      { id: "ea_emo_7", english: "Calm", arabic: "هادئ", example: "هي هادئة", exampleTranslation: "She is calm" },
      { id: "ea_emo_8", english: "Surprised", arabic: "مندهش", example: "أنا مندهش", exampleTranslation: "I am surprised" },
      { id: "ea_emo_9", english: "Scared", arabic: "خائف", example: "الطفل خائف", exampleTranslation: "The child is scared" },
      { id: "ea_emo_10", english: "Bored", arabic: "ملول", example: "هم ملولون", exampleTranslation: "They are bored" }
    ]
  },

  time: {
    name: "Time",
    description: "Time expressions",
    icon: Clock,
    color: "from-purple-400 to-fuchsia-500",
    level: "beginner",
    words: [
      { id: "ea_time_1", english: "Today", arabic: "اليوم", example: "اليوم الاثنين", exampleTranslation: "Today is Monday" },
      { id: "ea_time_2", english: "Yesterday", arabic: "أمس", example: "أمس كان الأحد", exampleTranslation: "Yesterday was Sunday" },
      { id: "ea_time_3", english: "Tomorrow", arabic: "غداً", example: "غداً الثلاثاء", exampleTranslation: "Tomorrow is Tuesday" },
      { id: "ea_time_4", english: "Now", arabic: "الآن", example: "أعمل الآن", exampleTranslation: "I'm working now" },
      { id: "ea_time_5", english: "Later", arabic: "لاحقاً", example: "سأفعله لاحقاً", exampleTranslation: "I'll do it later" },
      { id: "ea_time_6", english: "Morning", arabic: "صباح", example: "صباح الخير", exampleTranslation: "Good morning" },
      { id: "ea_time_7", english: "Noon", arabic: "ظهر", example: "الآن الظهر", exampleTranslation: "It's noon" },
      { id: "ea_time_8", english: "Evening", arabic: "مساء", example: "مساء الخير", exampleTranslation: "Good evening" },
      { id: "ea_time_9", english: "Night", arabic: "ليل", example: "تصبح على خير", exampleTranslation: "Good night" },
      { id: "ea_time_10", english: "Week", arabic: "أسبوع", example: "الأسبوع القادم", exampleTranslation: "Next week" }
    ]
  },

  weather: {
    name: "Weather",
    description: "Weather conditions",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "ea_weather_1", english: "Sun", arabic: "شمس", example: "الشمس تشرق", exampleTranslation: "The sun shines" },
      { id: "ea_weather_2", english: "Rain", arabic: "مطر", example: "تمطر", exampleTranslation: "It's raining" },
      { id: "ea_weather_3", english: "Snow", arabic: "ثلج", example: "تثلج", exampleTranslation: "It's snowing" },
      { id: "ea_weather_4", english: "Wind", arabic: "رياح", example: "الجو عاصف", exampleTranslation: "It's windy" },
      { id: "ea_weather_5", english: "Cloud", arabic: "سحابة", example: "توجد سحب في السماء", exampleTranslation: "There are clouds in the sky" },
      { id: "ea_weather_6", english: "Storm", arabic: "عاصفة", example: "عاصفة قادمة", exampleTranslation: "A storm is coming" },
      { id: "ea_weather_7", english: "Hot", arabic: "حار", example: "الجو حار جداً", exampleTranslation: "It's very hot" },
      { id: "ea_weather_8", english: "Cold", arabic: "بارد", example: "الجو بارد في الشتاء", exampleTranslation: "It's cold in winter" },
      { id: "ea_weather_9", english: "Lightning", arabic: "برق", example: "رأيت برقاً", exampleTranslation: "I saw lightning" },
      { id: "ea_weather_10", english: "Thunder", arabic: "رعد", example: "يمكنك سماع الرعد", exampleTranslation: "You can hear thunder" }
    ]
  },

  body: {
    name: "Body",
    description: "Body parts",
    icon: Hand,
    color: "from-rose-400 to-pink-500",
    level: "intermediate",
    words: [
      { id: "ea_body_1", english: "Head", arabic: "رأس", example: "رأسي يؤلمني", exampleTranslation: "My head hurts" },
      { id: "ea_body_2", english: "Eye", arabic: "عين", example: "عيوني زرقاء", exampleTranslation: "I have blue eyes" },
      { id: "ea_body_3", english: "Nose", arabic: "أنف", example: "أنفي بارد", exampleTranslation: "My nose is cold" },
      { id: "ea_body_4", english: "Mouth", arabic: "فم", example: "افتح فمك", exampleTranslation: "Open your mouth" },
      { id: "ea_body_5", english: "Ear", arabic: "أذن", example: "أذناي كبيرتان", exampleTranslation: "My ears are big" },
      { id: "ea_body_6", english: "Hand", arabic: "يد", example: "أعطني يدك", exampleTranslation: "Give me your hand" },
      { id: "ea_body_7", english: "Foot", arabic: "قدم", example: "قدمي تؤلمني", exampleTranslation: "My foot hurts" },
      { id: "ea_body_8", english: "Arm", arabic: "ذراع", example: "ارفع ذراعك", exampleTranslation: "Raise your arm" },
      { id: "ea_body_9", english: "Leg", arabic: "ساق", example: "ساقاي متعبتان", exampleTranslation: "My legs are tired" },
      { id: "ea_body_10", english: "Heart", arabic: "قلب", example: "قلبي ينبض بسرعة", exampleTranslation: "My heart beats fast" }
    ]
  },

  activities: {
    name: "Activities",
    description: "Daily activities",
    icon: Lightbulb,
    color: "from-amber-300 to-yellow-500",
    level: "intermediate",
    words: [
      { id: "ea_act_1", english: "Eat", arabic: "يأكل", example: "سآكل", exampleTranslation: "I'm going to eat" },
      { id: "ea_act_2", english: "Drink", arabic: "يشرب", example: "أشرب الماء", exampleTranslation: "I drink water" },
      { id: "ea_act_3", english: "Sleep", arabic: "ينام", example: "يجب أن أنام", exampleTranslation: "I need to sleep" },
      { id: "ea_act_4", english: "Run", arabic: "يجري", example: "أجري في الصباح", exampleTranslation: "I run in the morning" },
      { id: "ea_act_5", english: "Read", arabic: "يقرأ", example: "أقرأ كتاباً", exampleTranslation: "I read a book" },
      { id: "ea_act_6", english: "Write", arabic: "يكتب", example: "أكتب رسالة", exampleTranslation: "I write a letter" },
      { id: "ea_act_7", english: "Speak", arabic: "يتكلم", example: "أتكلم العربية", exampleTranslation: "I speak Arabic" },
      { id: "ea_act_8", english: "Listen", arabic: "يستمع", example: "أستمع للموسيقى", exampleTranslation: "I listen to music" },
      { id: "ea_act_9", english: "Watch", arabic: "يشاهد", example: "أشاهد التلفزيون", exampleTranslation: "I watch television" },
      { id: "ea_act_10", english: "Think", arabic: "يفكر", example: "أفكر فيك", exampleTranslation: "I think of you" }
    ]
  },

  learning: {
    name: "Learning",
    description: "Learning activities",
    icon: BookOpen,
    color: "from-blue-500 to-purple-600",
    level: "advanced",
    words: [
      { id: "ea_learn_1", english: "Learn", arabic: "يتعلم", example: "أتعلم العربية", exampleTranslation: "I learn Arabic" },
      { id: "ea_learn_2", english: "Study", arabic: "يدرس", example: "أدرس في الجامعة", exampleTranslation: "I study at university" },
      { id: "ea_learn_3", english: "Teach", arabic: "يعلم", example: "أعلم الإنجليزية", exampleTranslation: "I teach English" },
      { id: "ea_learn_4", english: "Understand", arabic: "يفهم", example: "أفهم الدرس", exampleTranslation: "I understand the lesson" },
      { id: "ea_learn_5", english: "Practice", arabic: "يمارس", example: "أمارس كل يوم", exampleTranslation: "I practice every day" },
      { id: "ea_learn_6", english: "Repeat", arabic: "يكرر", example: "كرر الكلمة", exampleTranslation: "Repeat the word" },
      { id: "ea_learn_7", english: "Explain", arabic: "يشرح", example: "المعلم يشرح جيداً", exampleTranslation: "The teacher explains well" },
      { id: "ea_learn_8", english: "Ask", arabic: "يسأل", example: "أسأل المعلم", exampleTranslation: "I ask the teacher" },
      { id: "ea_learn_9", english: "Answer", arabic: "يجيب", example: "أجيب على السؤال", exampleTranslation: "I answer the question" },
      { id: "ea_learn_10", english: "Remember", arabic: "يتذكر", example: "أتذكر الدرس", exampleTranslation: "I remember the lesson" }
    ]
  },

  sports: {
    name: "Sports",
    description: "Sports",
    icon: Dumbbell,
    color: "from-blue-400 to-cyan-500",
    level: "intermediate",
    words: [
      { id: "ea_sport_1", english: "Football", arabic: "كرة القدم", example: "ألعب كرة القدم", exampleTranslation: "I play football" },
      { id: "ea_sport_2", english: "Basketball", arabic: "كرة السلة", example: "أحب كرة السلة", exampleTranslation: "I like basketball" },
      { id: "ea_sport_3", english: "Tennis", arabic: "تنس", example: "ألعب التنس", exampleTranslation: "I play tennis" },
      { id: "ea_sport_4", english: "Swimming", arabic: "سباحة", example: "السباحة صحية", exampleTranslation: "Swimming is healthy" },
      { id: "ea_sport_5", english: "Running", arabic: "جري", example: "أجري في الصباح", exampleTranslation: "I run in the morning" },
      { id: "ea_sport_6", english: "Cycling", arabic: "ركوب الدراجات", example: "أحب ركوب الدراجات", exampleTranslation: "I like cycling" },
      { id: "ea_sport_7", english: "Gym", arabic: "صالة رياضية", example: "أذهب إلى الصالة الرياضية", exampleTranslation: "I go to the gym" },
      { id: "ea_sport_8", english: "Training", arabic: "تدريب", example: "عندي تدريب اليوم", exampleTranslation: "I have training today" },
      { id: "ea_sport_9", english: "Team", arabic: "فريق", example: "أنا في فريق", exampleTranslation: "I'm on a team" },
      { id: "ea_sport_10", english: "Coach", arabic: "مدرب", example: "مدربنا ممتاز", exampleTranslation: "Our coach is excellent" }
    ]
  },

  travel: {
    name: "Travel",
    description: "Tourism",
    icon: Plane,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    words: [
      { id: "ea_travel_1", english: "Travel", arabic: "سفر", example: "أذهب في رحلة", exampleTranslation: "I'm going on a trip" },
      { id: "ea_travel_2", english: "Suitcase", arabic: "حقيبة سفر", example: "حقيبتي ثقيلة", exampleTranslation: "My suitcase is heavy" },
      { id: "ea_travel_3", english: "Passport", arabic: "جواز سفر", example: "أحتاج جواز سفري", exampleTranslation: "I need my passport" },
      { id: "ea_travel_4", english: "Hotel", arabic: "فندق", example: "الفندق مريح", exampleTranslation: "The hotel is comfortable" },
      { id: "ea_travel_5", english: "Reservation", arabic: "حجز", example: "عندي حجز", exampleTranslation: "I have a reservation" },
      { id: "ea_travel_6", english: "Tourist", arabic: "سائح", example: "أنا سائح", exampleTranslation: "I am a tourist" },
      { id: "ea_travel_7", english: "Vacation", arabic: "إجازة", example: "أنا في إجازة", exampleTranslation: "I'm on vacation" },
      { id: "ea_travel_8", english: "Sightseeing", arabic: "جولة سياحية", example: "نقوم بجولة سياحية", exampleTranslation: "We're doing sightseeing" },
      { id: "ea_travel_9", english: "Guide", arabic: "مرشد", example: "المرشد مفيد", exampleTranslation: "The guide is informative" },
      { id: "ea_travel_10", english: "Souvenir", arabic: "تذكار", example: "أشتري تذكاراً", exampleTranslation: "I'm buying a souvenir" }
    ]
  },

  entertainment: {
    name: "Entertainment",
    description: "Leisure",
    icon: Music,
    color: "from-pink-500 to-red-600",
    level: "advanced",
    words: [
      { id: "ea_ent_1", english: "Music", arabic: "موسيقى", example: "أستمع للموسيقى", exampleTranslation: "I listen to music" },
      { id: "ea_ent_2", english: "Movie", arabic: "فيلم", example: "أشاهد فيلماً", exampleTranslation: "I watch a movie" },
      { id: "ea_ent_3", english: "Concert", arabic: "حفلة موسيقية", example: "أذهب إلى حفلة موسيقية", exampleTranslation: "I go to a concert" },
      { id: "ea_ent_4", english: "Theater", arabic: "مسرح", example: "أذهب إلى المسرح", exampleTranslation: "I go to the theater" },
      { id: "ea_ent_5", english: "Dance", arabic: "رقص", example: "أحب الرقص", exampleTranslation: "I like to dance" },
      { id: "ea_ent_6", english: "Sing", arabic: "غناء", example: "أحب الغناء", exampleTranslation: "I like to sing" },
      { id: "ea_ent_7", english: "Guitar", arabic: "جيتار", example: "ألعب الجيتار", exampleTranslation: "I play guitar" },
      { id: "ea_ent_8", english: "Games", arabic: "ألعاب", example: "ألعب ألعاب الفيديو", exampleTranslation: "I play video games" },
      { id: "ea_ent_9", english: "Photography", arabic: "تصوير", example: "أهتم بالتصوير", exampleTranslation: "I'm interested in photography" },
      { id: "ea_ent_10", english: "Reading", arabic: "قراءة", example: "القراءة هوايتي", exampleTranslation: "Reading is my hobby" }
    ]
  }
};

export default flashcardsCategories;