
import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Greetings",
    description: "Basic greetings",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "ef_greet_1", english: "Hello", french: "Bonjour", example: "Bonjour, comment allez-vous?", exampleTranslation: "Hello, how are you?" },
      { id: "ef_greet_2", english: "Good morning", french: "Bon matin", example: "Bon matin, monsieur", exampleTranslation: "Good morning, sir" },
      { id: "ef_greet_3", english: "Good evening", french: "Bonsoir", example: "Bonsoir, comment ça va?", exampleTranslation: "Good evening, how are you?" },
      { id: "ef_greet_4", english: "Good night", french: "Bonne nuit", example: "Bonne nuit, dors bien", exampleTranslation: "Good night, sleep well" },
      { id: "ef_greet_5", english: "Goodbye", french: "Au revoir", example: "Au revoir, à plus tard", exampleTranslation: "Goodbye, see you later" },
      { id: "ef_greet_6", english: "Thank you", french: "Merci", example: "Merci pour ton aide", exampleTranslation: "Thank you for your help" },
      { id: "ef_greet_7", english: "Please", french: "S'il vous plaît", example: "S'il vous plaît, aidez-moi", exampleTranslation: "Please, help me" },
      { id: "ef_greet_8", english: "Excuse me", french: "Excusez-moi", example: "Excusez-moi, je suis en retard", exampleTranslation: "Excuse me, I'm late" },
      { id: "ef_greet_9", english: "Yes", french: "Oui", example: "Oui, je suis d'accord", exampleTranslation: "Yes, I agree" },
      { id: "ef_greet_10", english: "No", french: "Non", example: "Non, je ne veux pas", exampleTranslation: "No, I don't want" }
    ]
  },

  family: {
    name: "Family",
    description: "Family members",
    icon: Users,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "ef_fam_1", english: "Father", french: "Père", example: "Mon père travaille beaucoup", exampleTranslation: "My father works a lot" },
      { id: "ef_fam_2", english: "Mother", french: "Mère", example: "Ma mère cuisine bien", exampleTranslation: "My mother cooks well" },
      { id: "ef_fam_3", english: "Brother", french: "Frère", example: "Mon frère étudie la médecine", exampleTranslation: "My brother studies medicine" },
      { id: "ef_fam_4", english: "Sister", french: "Sœur", example: "Ma sœur est professeure", exampleTranslation: "My sister is a teacher" },
      { id: "ef_fam_5", english: "Son", french: "Fils", example: "Mon fils a dix ans", exampleTranslation: "My son is ten years old" },
      { id: "ef_fam_6", english: "Daughter", french: "Fille", example: "Ma fille va à l'université", exampleTranslation: "My daughter goes to university" },
      { id: "ef_fam_7", english: "Grandfather", french: "Grand-père", example: "Mon grand-père est très sage", exampleTranslation: "My grandfather is very wise" },
      { id: "ef_fam_8", english: "Grandmother", french: "Grand-mère", example: "Ma grand-mère fait des gâteaux", exampleTranslation: "My grandmother makes cakes" },
      { id: "ef_fam_9", english: "Uncle", french: "Oncle", example: "Mon oncle habite à Paris", exampleTranslation: "My uncle lives in Paris" },
      { id: "ef_fam_10", english: "Aunt", french: "Tante", example: "Ma tante est très gentille", exampleTranslation: "My aunt is very kind" }
    ]
  },

  numbers: {
    name: "Numbers",
    description: "Basic numbers",
    icon: Hash,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "ef_num_1", english: "One", french: "Un", example: "J'ai un frère", exampleTranslation: "I have one brother" },
      { id: "ef_num_2", english: "Two", french: "Deux", example: "Il y a deux chats", exampleTranslation: "There are two cats" },
      { id: "ef_num_3", english: "Three", french: "Trois", example: "Il est trois heures", exampleTranslation: "It's three o'clock" },
      { id: "ef_num_4", english: "Four", french: "Quatre", example: "Quatre saisons", exampleTranslation: "Four seasons" },
      { id: "ef_num_5", english: "Five", french: "Cinq", example: "Cinq doigts sur la main", exampleTranslation: "Five fingers on the hand" },
      { id: "ef_num_6", english: "Six", french: "Six", example: "Mon fils a six ans", exampleTranslation: "My son is six years old" },
      { id: "ef_num_7", english: "Seven", french: "Sept", example: "Sept jours de la semaine", exampleTranslation: "Seven days of the week" },
      { id: "ef_num_8", english: "Eight", french: "Huit", example: "Je travaille huit heures", exampleTranslation: "I work eight hours" },
      { id: "ef_num_9", english: "Nine", french: "Neuf", example: "Il est neuf heures du matin", exampleTranslation: "It's nine o'clock in the morning" },
      { id: "ef_num_10", english: "Ten", french: "Dix", example: "Dix euros, s'il vous plaît", exampleTranslation: "Ten euros, please" }
    ]
  },

  colors: {
    name: "Colors",
    description: "Basic colors",
    icon: Palette,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "ef_col_1", english: "Red", french: "Rouge", example: "La voiture est rouge", exampleTranslation: "The car is red" },
      { id: "ef_col_2", english: "Blue", french: "Bleu", example: "Le ciel est bleu", exampleTranslation: "The sky is blue" },
      { id: "ef_col_3", english: "Green", french: "Vert", example: "L'herbe est verte", exampleTranslation: "The grass is green" },
      { id: "ef_col_4", english: "Yellow", french: "Jaune", example: "Le soleil est jaune", exampleTranslation: "The sun is yellow" },
      { id: "ef_col_5", english: "Black", french: "Noir", example: "Mon chat est noir", exampleTranslation: "My cat is black" },
      { id: "ef_col_6", english: "White", french: "Blanc", example: "La neige est blanche", exampleTranslation: "The snow is white" },
      { id: "ef_col_7", english: "Orange", french: "Orange", example: "L'orange est orange", exampleTranslation: "The orange is orange" },
      { id: "ef_col_8", english: "Pink", french: "Rose", example: "La robe est rose", exampleTranslation: "The dress is pink" },
      { id: "ef_col_9", english: "Brown", french: "Marron", example: "L'ours est marron", exampleTranslation: "The bear is brown" },
      { id: "ef_col_10", english: "Gray", french: "Gris", example: "L'éléphant est gris", exampleTranslation: "The elephant is gray" }
    ]
  },

  food: {
    name: "Food",
    description: "Basic foods",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-red-500",
    level: "beginner",
    words: [
      { id: "ef_food_1", english: "Bread", french: "Pain", example: "Le pain est frais", exampleTranslation: "The bread is fresh" },
      { id: "ef_food_2", english: "Water", french: "Eau", example: "Un verre d'eau, s'il vous plaît", exampleTranslation: "A glass of water, please" },
      { id: "ef_food_3", english: "Coffee", french: "Café", example: "J'aime le café", exampleTranslation: "I like coffee" },
      { id: "ef_food_4", english: "Milk", french: "Lait", example: "Le lait est frais", exampleTranslation: "The milk is fresh" },
      { id: "ef_food_5", english: "Meat", french: "Viande", example: "La viande est délicieuse", exampleTranslation: "The meat is delicious" },
      { id: "ef_food_6", english: "Fish", french: "Poisson", example: "Le poisson est très sain", exampleTranslation: "Fish is very healthy" },
      { id: "ef_food_7", english: "Fruit", french: "Fruit", example: "Je mange des fruits tous les jours", exampleTranslation: "I eat fruit every day" },
      { id: "ef_food_8", english: "Vegetables", french: "Légumes", example: "Les légumes sont importants", exampleTranslation: "Vegetables are important" },
      { id: "ef_food_9", french: "Cheese", english: "Fromage", example: "Le fromage français est délicieux", exampleTranslation: "French cheese is delicious" },
      { id: "ef_food_10", french: "Egg", english: "Œuf", example: "Je mange des œufs au petit déjeuner", exampleTranslation: "I eat eggs for breakfast" }
    ]
  },

  house: {
    name: "House",
    description: "Household items",
    icon: Home,
    color: "from-yellow-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "ef_house_1", english: "House", french: "Maison", example: "Ma maison est grande", exampleTranslation: "My house is big" },
      { id: "ef_house_2", english: "Room", french: "Chambre", example: "La chambre est propre", exampleTranslation: "The room is clean" },
      { id: "ef_house_3", english: "Kitchen", french: "Cuisine", example: "Je cuisine dans la cuisine", exampleTranslation: "I cook in the kitchen" },
      { id: "ef_house_4", english: "Bathroom", french: "Salle de bain", example: "La salle de bain est neuve", exampleTranslation: "The bathroom is new" },
      { id: "ef_house_5", english: "Bedroom", french: "Chambre à coucher", example: "Ma chambre à coucher est confortable", exampleTranslation: "My bedroom is comfortable" },
      { id: "ef_house_6", english: "Door", french: "Porte", example: "Ferme la porte", exampleTranslation: "Close the door" },
      { id: "ef_house_7", english: "Window", french: "Fenêtre", example: "Ouvre la fenêtre", exampleTranslation: "Open the window" },
      { id: "ef_house_8", english: "Table", french: "Table", example: "La table est en bois", exampleTranslation: "The table is wooden" },
      { id: "ef_house_9", english: "Chair", french: "Chaise", example: "La chaise est confortable", exampleTranslation: "The chair is comfortable" },
      { id: "ef_house_10", english: "Bed", french: "Lit", example: "Le lit est doux", exampleTranslation: "The bed is soft" }
    ]
  },

  places: {
    name: "Places",
    description: "Locations",
    icon: MapPin,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "ef_place_1", english: "Store", french: "Magasin", example: "Le magasin est ouvert", exampleTranslation: "The store is open" },
      { id: "ef_place_2", english: "School", french: "École", example: "Je vais à l'école", exampleTranslation: "I go to school" },
      { id: "ef_place_3", english: "Hospital", french: "Hôpital", example: "L'hôpital est proche", exampleTranslation: "The hospital is close" },
      { id: "ef_place_4", english: "Park", french: "Parc", example: "Les enfants jouent dans le parc", exampleTranslation: "Children play in the park" },
      { id: "ef_place_5", english: "Restaurant", french: "Restaurant", example: "Nous mangeons au restaurant", exampleTranslation: "We eat at the restaurant" },
      { id: "ef_place_6", english: "Hotel", french: "Hôtel", example: "L'hôtel est très grand", exampleTranslation: "The hotel is very big" },
      { id: "ef_place_7", english: "Bank", french: "Banque", example: "Je vais à la banque", exampleTranslation: "I go to the bank" },
      { id: "ef_place_8", english: "Airport", french: "Aéroport", example: "Je suis à l'aéroport", exampleTranslation: "I'm at the airport" },
      { id: "ef_place_9", english: "Train station", french: "Gare", example: "La gare ferroviaire", exampleTranslation: "The train station" },
      { id: "ef_place_10", english: "Museum", french: "Musée", example: "Le musée est intéressant", exampleTranslation: "The museum is interesting" }
    ]
  },

  clothing: {
    name: "Clothing",
    description: "Clothes",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "ef_cloth_1", english: "Shirt", french: "Chemise", example: "J'aime ta chemise", exampleTranslation: "I like your shirt" },
      { id: "ef_cloth_2", english: "Pants", french: "Pantalon", example: "J'ai besoin d'un nouveau pantalon", exampleTranslation: "I need new pants" },
      { id: "ef_cloth_3", english: "Shoes", french: "Chaussures", example: "J'ai acheté des chaussures noires", exampleTranslation: "I bought black shoes" },
      { id: "ef_cloth_4", english: "Dress", french: "Robe", example: "La robe est belle", exampleTranslation: "The dress is beautiful" },
      { id: "ef_cloth_5", english: "Jacket", french: "Veste", example: "J'ai besoin d'une veste", exampleTranslation: "I need a jacket" },
      { id: "ef_cloth_6", english: "Hat", french: "Chapeau", example: "Mets le chapeau", exampleTranslation: "Put on the hat" },
      { id: "ef_cloth_7", english: "Socks", french: "Chaussettes", example: "Mes chaussettes sont propres", exampleTranslation: "My socks are clean" },
      { id: "ef_cloth_8", french: "Gloves", english: "Gants", example: "Je porte des gants en hiver", exampleTranslation: "I wear gloves in winter" },
      { id: "ef_cloth_9", french: "Scarf", english: "Écharpe", example: "L'écharpe est douce", exampleTranslation: "The scarf is soft" },
      { id: "ef_cloth_10", french: "Coat", english: "Manteau", example: "Le manteau est chaud", exampleTranslation: "The coat is warm" }
    ]
  },

  work: {
    name: "Work",
    description: "Professions",
    icon: Briefcase,
    color: "from-indigo-400 to-purple-500",
    level: "intermediate",
    words: [
      { id: "ef_work_1", english: "Work", french: "Travail", example: "Je vais au travail", exampleTranslation: "I go to work" },
      { id: "ef_work_2", english: "Doctor", french: "Médecin", example: "Il est médecin", exampleTranslation: "He is a doctor" },
      { id: "ef_work_3", english: "Teacher", french: "Professeur", example: "Mon professeur est excellent", exampleTranslation: "My teacher is excellent" },
      { id: "ef_work_4", english: "Engineer", french: "Ingénieur", example: "Je suis ingénieur", exampleTranslation: "I am an engineer" },
      { id: "ef_work_5", english: "Lawyer", french: "Avocat", example: "Elle est avocate", exampleTranslation: "She is a lawyer" },
      { id: "ef_work_6", french: "Cook", english: "Cuisinier", example: "Le cuisinier prépare le repas", exampleTranslation: "The cook prepares the meal" },
      { id: "ef_work_7", french: "Waiter", english: "Serveur", example: "Le serveur est gentil", exampleTranslation: "The waiter is kind" },
      { id: "ef_work_8", french: "Salesperson", english: "Vendeur", example: "Le vendeur aide le client", exampleTranslation: "The salesperson helps the customer" },
      { id: "ef_work_9", french: "Police officer", english: "Policier", example: "Le policier protège la ville", exampleTranslation: "The police officer protects the city" },
      { id: "ef_work_10", french: "Mechanic", english: "Mécanicien", example: "Le mécanicien répare les voitures", exampleTranslation: "The mechanic repairs cars" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Transportation",
    icon: Car,
    color: "from-cyan-400 to-blue-500", // Re-used color from original 'travel' category
    level: "intermediate",
    words: [
      { id: "ef_trans_1", english: "Car", french: "Voiture", example: "J'ai une nouvelle voiture", exampleTranslation: "I have a new car" },
      { id: "ef_trans_2", english: "Bus", french: "Bus", example: "Je vais en bus", exampleTranslation: "I go by bus" },
      { id: "ef_trans_3", english: "Train", french: "Train", example: "Le train est rapide", exampleTranslation: "The train is fast" },
      { id: "ef_trans_4", english: "Airplane", french: "Avion", example: "Je voyage en avion", exampleTranslation: "I travel by plane" },
      { id: "ef_trans_5", english: "Bicycle", french: "Vélo", example: "Je fais du vélo", exampleTranslation: "I ride a bicycle" },
      { id: "ef_trans_6", french: "Taxi", english: "Taxi", example: "J'appelle un taxi", exampleTranslation: "I call a taxi" },
      { id: "ef_trans_7", french: "Metro", english: "Métro", example: "J'utilise le métro", exampleTranslation: "I use the metro" },
      { id: "ef_trans_8", french: "Motorcycle", english: "Moto", example: "Ma moto est rouge", exampleTranslation: "My motorcycle is red" },
      { id: "ef_trans_9", french: "Boat", english: "Bateau", example: "Nous naviguons en bateau", exampleTranslation: "We sail by boat" },
      { id: "ef_trans_10", french: "Ticket", english: "Billet", example: "J'achète un billet", exampleTranslation: "I buy a ticket" }
    ]
  },

  education: {
    name: "Education",
    description: "School",
    icon: School,
    color: "from-green-400 to-teal-500", // Re-used color from original 'school' category
    level: "intermediate",
    words: [
      { id: "ef_edu_1", english: "Student", french: "Étudiant", example: "Je suis étudiant", exampleTranslation: "I am a student" },
      { id: "ef_edu_2", english: "Teacher", french: "Enseignant", example: "L'enseignant enseigne bien", exampleTranslation: "The teacher teaches well" },
      { id: "ef_edu_3", english: "Book", french: "Livre", example: "Je lis un livre", exampleTranslation: "I read a book" },
      { id: "ef_edu_4", english: "Pencil", french: "Crayon", example: "As-tu un crayon?", exampleTranslation: "Do you have a pencil?" },
      { id: "ef_edu_5", english: "Notebook", french: "Cahier", example: "J'ai besoin d'un cahier", exampleTranslation: "I need a notebook" },
      { id: "ef_edu_6", french: "Exam", english: "Examen", example: "L'examen est demain", exampleTranslation: "The exam is tomorrow" },
      { id: "ef_edu_7", french: "Homework", english: "Devoirs", example: "J'ai beaucoup de devoirs", exampleTranslation: "I have a lot of homework" },
      { id: "ef_edu_8", french: "Class", english: "Cours", example: "Le cours commence à neuf heures", exampleTranslation: "The class starts at nine" },
      { id: "ef_edu_9", french: "Library", english: "Bibliothèque", example: "J'étudie à la bibliothèque", exampleTranslation: "I study at the library" },
      { id: "ef_edu_10", french: "Backpack", english: "Sac à dos", example: "Mon sac à dos est lourd", exampleTranslation: "My backpack is heavy" }
    ]
  },

  nature: {
    name: "Nature",
    description: "Nature",
    icon: TreePine,
    color: "from-green-400 to-lime-500",
    level: "intermediate",
    words: [
      { id: "ef_nature_1", english: "Tree", french: "Arbre", example: "L'arbre est grand", exampleTranslation: "The tree is tall" },
      { id: "ef_nature_2", english: "Flower", french: "Fleur", example: "La fleur est belle", exampleTranslation: "The flower is beautiful" },
      { id: "ef_nature_3", english: "Mountain", french: "Montagne", example: "La montagne est haute", exampleTranslation: "The mountain is high" },
      { id: "ef_nature_4", english: "River", french: "Rivière", example: "La rivière est longue", exampleTranslation: "The river is long" },
      { id: "ef_nature_5", english: "Sea", french: "Mer", example: "La mer est bleue", exampleTranslation: "The sea is blue" },
      { id: "ef_nature_6", french: "Forest", english: "Forêt", example: "Nous marchons dans la forêt", exampleTranslation: "We walk through the forest" },
      { id: "ef_nature_7", french: "Lake", english: "Lac", example: "Le lac est calme", exampleTranslation: "The lake is calm" },
      { id: "ef_nature_8", french: "Sky", english: "Ciel", example: "Le ciel est bleu", exampleTranslation: "The sky is blue" },
      { id: "ef_nature_9", french: "Star", english: "Étoile", example: "Les étoiles brillent", exampleTranslation: "The stars shine" },
      { id: "ef_nature_10", french: "Moon", english: "Lune", example: "La lune est pleine", exampleTranslation: "The moon is full" }
    ]
  },

  emotions: {
    name: "Emotions",
    description: "Feelings",
    icon: Heart,
    color: "from-yellow-400 to-amber-500", // Re-used color from original 'feelings' category
    level: "intermediate",
    words: [
      { id: "ef_emo_1", english: "Happy", french: "Heureux", example: "Je suis heureux", exampleTranslation: "I am happy" },
      { id: "ef_emo_2", english: "Sad", french: "Triste", example: "Il est triste", exampleTranslation: "He is sad" },
      { id: "ef_emo_3", english: "Angry", french: "En colère", example: "Elle est en colère", exampleTranslation: "She is angry" },
      { id: "ef_emo_4", english: "Tired", french: "Fatigué", example: "Je suis fatigué", exampleTranslation: "I am tired" },
      { id: "ef_emo_5", english: "Excited", french: "Excité", example: "Nous sommes excités", exampleTranslation: "We are excited" },
      { id: "ef_emo_6", french: "Nervous", english: "Nerveux", example: "Il est nerveux", exampleTranslation: "He is nervous" },
      { id: "ef_emo_7", french: "Calm", english: "Calme", example: "Elle est calme", exampleTranslation: "She is calm" },
      { id: "ef_emo_8", french: "Surprised", english: "Surpris", example: "Je suis surpris", exampleTranslation: "I am surprised" },
      { id: "ef_emo_9", french: "Scared", english: "Effrayé", example: "L'enfant est effrayé", exampleTranslation: "The child is scared" },
      { id: "ef_emo_10", french: "Bored", english: "Ennuyé", example: "Ils sont ennuyés", exampleTranslation: "They are bored" }
    ]
  },

  time: {
    name: "Time",
    description: "Time expressions",
    icon: Clock,
    color: "from-purple-400 to-fuchsia-500",
    level: "beginner",
    words: [
      { id: "ef_time_1", english: "Today", french: "Aujourd'hui", example: "Aujourd'hui c'est lundi", exampleTranslation: "Today is Monday" },
      { id: "ef_time_2", english: "Yesterday", french: "Hier", example: "Hier c'était dimanche", exampleTranslation: "Yesterday was Sunday" },
      { id: "ef_time_3", english: "Tomorrow", french: "Demain", example: "Demain c'est mardi", exampleTranslation: "Tomorrow is Tuesday" },
      { id: "ef_time_4", english: "Now", french: "Maintenant", example: "Je travaille maintenant", exampleTranslation: "I'm working now" },
      { id: "ef_time_5", english: "Later", french: "Plus tard", example: "Je le ferai plus tard", exampleTranslation: "I'll do it later" },
      { id: "ef_time_6", english: "Morning", french: "Matin", example: "Bonjour", exampleTranslation: "Good morning" },
      { id: "ef_time_7", english: "Noon", french: "Midi", example: "Il est midi", exampleTranslation: "It's noon" },
      { id: "ef_time_8", english: "Evening", french: "Soir", example: "Bonsoir", exampleTranslation: "Good evening" },
      { id: "ef_time_9", french: "Night", english: "Nuit", example: "Bonne nuit", exampleTranslation: "Good night" },
      { id: "ef_time_10", french: "Week", english: "Semaine", example: "La semaine prochaine", exampleTranslation: "Next week" }
    ]
  },

  weather: {
    name: "Weather",
    description: "Weather conditions",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "ef_weather_1", english: "Sun", french: "Soleil", example: "Le soleil brille", exampleTranslation: "The sun shines" },
      { id: "ef_weather_2", english: "Rain", french: "Pluie", example: "Il pleut", exampleTranslation: "It's raining" },
      { id: "ef_weather_3", english: "Snow", french: "Neige", example: "Il neige", exampleTranslation: "It's snowing" },
      { id: "ef_weather_4", english: "Wind", french: "Vent", example: "Il y a du vent", exampleTranslation: "It's windy" },
      { id: "ef_weather_5", english: "Cloud", french: "Nuage", example: "Il y a des nuages dans le ciel", exampleTranslation: "There are clouds in the sky" },
      { id: "ef_weather_6", french: "Storm", english: "Tempête", example: "Une tempête arrive", exampleTranslation: "A storm is coming" },
      { id: "ef_weather_7", french: "Hot", english: "Chaud", example: "Il fait très chaud", exampleTranslation: "It's very hot" },
      { id: "ef_weather_8", french: "Cold", english: "Froid", example: "Il fait froid en hiver", exampleTranslation: "It's cold in winter" },
      { id: "ef_weather_9", french: "Lightning", english: "Éclair", example: "J'ai vu un éclair", exampleTranslation: "I saw lightning" },
      { id: "ef_weather_10", french: "Thunder", english: "Tonnerre", example: "On entend le tonnerre", exampleTranslation: "You can hear thunder" }
    ]
  },

  body: {
    name: "Body",
    description: "Body parts",
    icon: Hand,
    color: "from-rose-400 to-pink-500", // Re-used color from original 'body_parts' category
    level: "intermediate",
    words: [
      { id: "ef_body_1", english: "Head", french: "Tête", example: "J'ai mal à la tête", exampleTranslation: "My head hurts" },
      { id: "ef_body_2", english: "Eye", french: "Œil", example: "J'ai les yeux bleus", exampleTranslation: "I have blue eyes" },
      { id: "ef_body_3", english: "Nose", french: "Nez", example: "Mon nez est froid", exampleTranslation: "My nose is cold" },
      { id: "ef_body_4", english: "Mouth", french: "Bouche", example: "Ouvre la bouche", exampleTranslation: "Open your mouth" },
      { id: "ef_body_5", english: "Ear", french: "Oreille", example: "Mes oreilles sont grandes", exampleTranslation: "My ears are big" },
      { id: "ef_body_6", english: "Hand", french: "Main", example: "Donne-moi la main", exampleTranslation: "Give me your hand" },
      { id: "ef_body_7", english: "Foot", french: "Pied", example: "J'ai mal au pied", exampleTranslation: "My foot hurts" },
      { id: "ef_body_8", french: "Arm", english: "Bras", example: "Lève le bras", exampleTranslation: "Raise your arm" },
      { id: "ef_body_9", french: "Leg", english: "Jambe", example: "Mes jambes sont fatiguées", exampleTranslation: "My legs are tired" },
      { id: "ef_body_10", french: "Heart", english: "Cœur", example: "Mon cœur bat vite", exampleTranslation: "My heart beats fast" }
    ]
  },

  activities: {
    name: "Activities",
    description: "Daily activities",
    icon: Lightbulb,
    color: "from-amber-300 to-yellow-500", // New distinct color
    level: "intermediate",
    words: [
      { id: "ef_act_1", english: "Eat", french: "Manger", example: "Je vais manger", exampleTranslation: "I'm going to eat" },
      { id: "ef_act_2", english: "Drink", french: "Boire", example: "Je bois de l'eau", exampleTranslation: "I drink water" },
      { id: "ef_act_3", english: "Sleep", french: "Dormir", example: "Je dois dormir", exampleTranslation: "I need to sleep" },
      { id: "ef_act_4", english: "Run", french: "Courir", example: "Je cours le matin", exampleTranslation: "I run in the morning" },
      { id: "ef_act_5", english: "Read", french: "Lire", example: "Je lis un livre", exampleTranslation: "I read a book" },
      { id: "ef_act_6", french: "Write", english: "Écrire", example: "J'écris une lettre", exampleTranslation: "I write a letter" },
      { id: "ef_act_7", french: "Speak", english: "Parler", example: "Je parle français", exampleTranslation: "I speak French" },
      { id: "ef_act_8", french: "Listen", english: "Écouter", example: "J'écoute de la musique", exampleTranslation: "I listen to music" },
      { id: "ef_act_9", french: "Watch", english: "Regarder", example: "Je regarde la télévision", exampleTranslation: "I watch television" },
      { id: "ef_act_10", french: "Think", english: "Penser", example: "Je pense à toi", exampleTranslation: "I think of you" }
    ]
  },

  learning: {
    name: "Learning",
    description: "Learning activities",
    icon: BookOpen,
    color: "from-blue-500 to-purple-600", // New distinct color
    level: "advanced",
    words: [
      { id: "ef_learn_1", english: "Learn", french: "Apprendre", example: "J'apprends le français", exampleTranslation: "I learn French" },
      { id: "ef_learn_2", english: "Study", french: "Étudier", example: "J'étudie à l'université", exampleTranslation: "I study at university" },
      { id: "ef_learn_3", english: "Teach", french: "Enseigner", example: "J'enseigne l'anglais", exampleTranslation: "I teach English" },
      { id: "ef_learn_4", english: "Understand", french: "Comprendre", example: "Je comprends la leçon", exampleTranslation: "I understand the lesson" },
      { id: "ef_learn_5", french: "Practice", english: "Pratiquer", example: "Je pratique tous les jours", exampleTranslation: "I practice every day" },
      { id: "ef_learn_6", french: "Repeat", english: "Répéter", example: "Répète le mot", exampleTranslation: "Repeat the word" },
      { id: "ef_learn_7", french: "Explain", english: "Expliquer", example: "Le professeur explique bien", exampleTranslation: "The teacher explains well" },
      { id: "ef_learn_8", french: "Ask", english: "Demander", example: "Je demande au professeur", exampleTranslation: "I ask the teacher" },
      { id: "ef_learn_9", french: "Answer", english: "Répondre", example: "Je réponds à la question", exampleTranslation: "I answer the question" },
      { id: "ef_learn_10", french: "Remember", english: "Se souvenir", example: "Je me souviens de la leçon", exampleTranslation: "I remember the lesson" }
    ]
  },

  sports: {
    name: "Sports",
    description: "Sports",
    icon: Dumbbell,
    color: "from-blue-400 to-cyan-500",
    level: "intermediate",
    words: [
      { id: "ef_sport_1", english: "Football", french: "Football", example: "Je joue au football", exampleTranslation: "I play football" },
      { id: "ef_sport_2", english: "Basketball", french: "Basketball", example: "J'aime le basketball", exampleTranslation: "I like basketball" },
      { id: "ef_sport_3", english: "Tennis", french: "Tennis", example: "Je joue au tennis", exampleTranslation: "I play tennis" },
      { id: "ef_sport_4", english: "Swimming", french: "Natation", example: "La natation est saine", exampleTranslation: "Swimming is healthy" },
      { id: "ef_sport_5", english: "Running", french: "Course", example: "Je cours le matin", exampleTranslation: "I run in the morning" },
      { id: "ef_sport_6", french: "Cycling", english: "Cyclisme", example: "J'aime le cyclisme", exampleTranslation: "I like cycling" },
      { id: "ef_sport_7", french: "Gym", english: "Salle de sport", example: "Je vais à la salle de sport", exampleTranslation: "I go to the gym" },
      { id: "ef_sport_8", french: "Training", english: "Entraînement", example: "J'ai un entraînement aujourd'hui", exampleTranslation: "I have training today" },
      { id: "ef_sport_9", french: "Team", english: "Équipe", example: "Je suis dans une équipe", exampleTranslation: "I'm on a team" },
      { id: "ef_sport_10", french: "Coach", english: "Entraîneur", example: "Notre entraîneur est excellent", exampleTranslation: "Our coach is excellent" }
    ]
  },

  travel: {
    name: "Travel",
    description: "Tourism",
    icon: Plane,
    color: "from-purple-500 to-pink-600", // New distinct color
    level: "advanced",
    words: [
      { id: "ef_travel_1", english: "Travel", french: "Voyage", example: "Je fais un voyage", exampleTranslation: "I'm going on a trip" },
      { id: "ef_travel_2", english: "Suitcase", french: "Valise", example: "Ma valise est lourde", exampleTranslation: "My suitcase is heavy" },
      { id: "ef_travel_3", english: "Passport", french: "Passeport", example: "J'ai besoin de mon passeport", exampleTranslation: "I need my passport" },
      { id: "ef_travel_4", english: "Hotel", french: "Hôtel", example: "L'hôtel est confortable", exampleTranslation: "The hotel is comfortable" },
      { id: "ef_travel_5", french: "Reservation", english: "Réservation", example: "J'ai une réservation", exampleTranslation: "I have a reservation" },
      { id: "ef_travel_6", french: "Tourist", english: "Touriste", example: "Je suis touriste", exampleTranslation: "I am a tourist" },
      { id: "ef_travel_7", french: "Vacation", english: "Vacances", example: "Je suis en vacances", exampleTranslation: "I'm on vacation" },
      { id: "ef_travel_8", french: "Sightseeing", english: "Visite touristique", example: "Nous faisons une visite touristique", exampleTranslation: "We're doing sightseeing" },
      { id: "ef_travel_9", french: "Guide", english: "Guide", example: "Le guide est informatif", exampleTranslation: "The guide is informative" },
      { id: "ef_travel_10", french: "Souvenir", english: "Souvenir", example: "J'achète un souvenir", exampleTranslation: "I'm buying a souvenir" }
    ]
  },

  entertainment: {
    name: "Entertainment",
    description: "Leisure",
    icon: Music,
    color: "from-pink-500 to-red-600", // New distinct color
    level: "advanced",
    words: [
      { id: "ef_ent_1", english: "Music", french: "Musique", example: "J'écoute de la musique", exampleTranslation: "I listen to music" },
      { id: "ef_ent_2", english: "Movie", french: "Film", example: "Je regarde un film", exampleTranslation: "I watch a movie" },
      { id: "ef_ent_3", english: "Concert", french: "Concert", example: "Je vais à un concert", exampleTranslation: "I go to a concert" },
      { id: "ef_ent_4", english: "Theater", french: "Théâtre", example: "Je vais au théâtre", exampleTranslation: "I go to the theater" },
      { id: "ef_ent_5", english: "Dance", french: "Danse", example: "J'aime danser", exampleTranslation: "I like to dance" },
      { id: "ef_ent_6", french: "Sing", english: "Chanter", example: "J'aime chanter", exampleTranslation: "I like to sing" },
      { id: "ef_ent_7", french: "Guitar", english: "Guitare", example: "Je joue de la guitare", exampleTranslation: "I play guitar" },
      { id: "ef_ent_8", french: "Games", english: "Jeux", example: "Je joue à des jeux vidéo", exampleTranslation: "I play video games" },
      { id: "ef_ent_9", french: "Photography", english: "Photographie", example: "Je m'intéresse à la photographie", exampleTranslation: "I'm interested in photography" },
      { id: "ef_ent_10", french: "Reading", english: "Lecture", example: "La lecture est mon passe-temps", exampleTranslation: "Reading is my hobby" }
    ]
  }
};

export default flashcardsCategories;
