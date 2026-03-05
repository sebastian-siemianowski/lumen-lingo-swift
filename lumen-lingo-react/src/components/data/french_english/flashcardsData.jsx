/**
 * FRENCH → ENGLISH FLASHCARDS
 * 
 * Native Language: French (Français)
 * Target Language: English
 */

import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Salutations",
    description: "Salutations de base",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "fe_greet_1", french: "Bonjour", english: "Hello", example: "Hello, how are you?", exampleTranslation: "Bonjour, comment allez-vous?" },
      { id: "fe_greet_2", french: "Bon matin", english: "Good morning", example: "Good morning, sir", exampleTranslation: "Bon matin, monsieur" },
      { id: "fe_greet_3", french: "Bonsoir", english: "Good evening", example: "Good evening, how are you?", exampleTranslation: "Bonsoir, comment ça va?" },
      { id: "fe_greet_4", french: "Bonne nuit", english: "Good night", example: "Good night, sleep well", exampleTranslation: "Bonne nuit, dors bien" },
      { id: "fe_greet_5", french: "Au revoir", english: "Goodbye", example: "Goodbye, see you later", exampleTranslation: "Au revoir, à plus tard" },
      { id: "fe_greet_6", french: "Merci", english: "Thank you", example: "Thank you for your help", exampleTranslation: "Merci pour ton aide" },
      { id: "fe_greet_7", french: "S'il vous plaît", english: "Please", example: "Please, help me", exampleTranslation: "S'il vous plaît, aidez-moi" },
      { id: "fe_greet_8", french: "Excusez-moi", english: "Excuse me", example: "Excuse me, I'm late", exampleTranslation: "Excusez-moi, je suis en retard" },
      { id: "fe_greet_9", french: "Oui", english: "Yes", example: "Yes, I agree", exampleTranslation: "Oui, je suis d'accord" },
      { id: "fe_greet_10", french: "Non", english: "No", example: "No, I don't want", exampleTranslation: "Non, je ne veux pas" }
    ]
  },

  family: {
    name: "Famille",
    description: "Membres de la famille",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "fe_fam_1", french: "Père", english: "Father", example: "My father works a lot", exampleTranslation: "Mon père travaille beaucoup" },
      { id: "fe_fam_2", french: "Mère", english: "Mother", example: "My mother cooks well", exampleTranslation: "Ma mère cuisine bien" },
      { id: "fe_fam_3", french: "Frère", english: "Brother", example: "My brother studies medicine", exampleTranslation: "Mon frère étudie la médecine" },
      { id: "fe_fam_4", french: "Sœur", english: "Sister", example: "My sister is a teacher", exampleTranslation: "Ma sœur est professeure" },
      { id: "fe_fam_5", french: "Fils", english: "Son", example: "My son is ten years old", exampleTranslation: "Mon fils a dix ans" },
      { id: "fe_fam_6", french: "Fille", english: "Daughter", example: "My daughter goes to university", exampleTranslation: "Ma fille va à l'université" },
      { id: "fe_fam_7", french: "Grand-père", english: "Grandfather", example: "My grandfather is very wise", exampleTranslation: "Mon grand-père est très sage" },
      { id: "fe_fam_8", french: "Grand-mère", english: "Grandmother", example: "My grandmother makes cakes", exampleTranslation: "Ma grand-mère fait des gâteaux" },
      { id: "fe_fam_9", french: "Oncle", english: "Uncle", example: "My uncle lives in Paris", exampleTranslation: "Mon oncle habite à Paris" },
      { id: "fe_fam_10", french: "Tante", english: "Aunt", example: "My aunt is very kind", exampleTranslation: "Ma tante est très gentille" }
    ]
  },

  numbers: {
    name: "Nombres",
    description: "Nombres de base",
    icon: Hash,
    color: "from-purple-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "fe_num_1", french: "Un", english: "One", example: "I have one brother", exampleTranslation: "J'ai un frère" },
      { id: "fe_num_2", french: "Deux", english: "Two", example: "There are two cats", exampleTranslation: "Il y a deux chats" },
      { id: "fe_num_3", french: "Trois", english: "Three", example: "It's three o'clock", exampleTranslation: "Il est trois heures" },
      { id: "fe_num_4", french: "Quatre", english: "Four", example: "Four seasons", exampleTranslation: "Quatre saisons" },
      { id: "fe_num_5", french: "Cinq", english: "Five", example: "Five fingers on the hand", exampleTranslation: "Cinq doigts sur la main" },
      { id: "fe_num_6", french: "Six", english: "Six", example: "My son is six years old", exampleTranslation: "Mon fils a six ans" },
      { id: "fe_num_7", french: "Sept", english: "Seven", example: "Seven days of the week", exampleTranslation: "Sept jours de la semaine" },
      { id: "fe_num_8", french: "Huit", english: "Eight", example: "I work eight hours", exampleTranslation: "Je travaille huit heures" },
      { id: "fe_num_9", french: "Neuf", english: "Nine", example: "It's nine o'clock in the morning", exampleTranslation: "Il est neuf heures du matin" },
      { id: "fe_num_10", french: "Dix", english: "Ten", example: "Ten euros, please", exampleTranslation: "Dix euros, s'il vous plaît" }
    ]
  },

  colors: {
    name: "Couleurs",
    description: "Couleurs de base",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "fe_col_1", french: "Rouge", english: "Red", example: "The car is red", exampleTranslation: "La voiture est rouge" },
      { id: "fe_col_2", french: "Bleu", english: "Blue", example: "The sky is blue", exampleTranslation: "Le ciel est bleu" },
      { id: "fe_col_3", french: "Vert", english: "Green", example: "The grass is green", exampleTranslation: "L'herbe est verte" },
      { id: "fe_col_4", french: "Jaune", english: "Yellow", example: "The sun is yellow", exampleTranslation: "Le soleil est jaune" },
      { id: "fe_col_5", french: "Noir", english: "Black", example: "My cat is black", exampleTranslation: "Mon chat est noir" },
      { id: "fe_col_6", french: "Blanc", english: "White", example: "The snow is white", exampleTranslation: "La neige est blanche" },
      { id: "fe_col_7", french: "Orange", english: "Orange", example: "The orange is orange", exampleTranslation: "L'orange est orange" },
      { id: "fe_col_8", french: "Rose", english: "Pink", example: "The dress is pink", exampleTranslation: "La robe est rose" },
      { id: "fe_col_9", french: "Marron", english: "Brown", example: "The bear is brown", exampleTranslation: "L'ours est marron" },
      { id: "fe_col_10", french: "Gris", english: "Gray", example: "The elephant is gray", exampleTranslation: "L'éléphant est gris" }
    ]
  },

  food: {
    name: "Nourriture",
    description: "Aliments de base",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "fe_food_1", french: "Pain", english: "Bread", example: "The bread is fresh", exampleTranslation: "Le pain est frais" },
      { id: "fe_food_2", french: "Eau", english: "Water", example: "A glass of water, please", exampleTranslation: "Un verre d'eau, s'il vous plaît" },
      { id: "fe_food_3", french: "Café", english: "Coffee", example: "I like coffee", exampleTranslation: "J'aime le café" },
      { id: "fe_food_4", french: "Lait", english: "Milk", example: "The milk is fresh", exampleTranslation: "Le lait est frais" },
      { id: "fe_food_5", french: "Viande", english: "Meat", example: "The meat is delicious", exampleTranslation: "La viande est délicieuse" },
      { id: "fe_food_6", french: "Poisson", english: "Fish", example: "Fish is very healthy", exampleTranslation: "Le poisson est très sain" },
      { id: "fe_food_7", french: "Fruit", english: "Fruit", example: "I eat fruit every day", exampleTranslation: "Je mange des fruits tous les jours" },
      { id: "fe_food_8", french: "Légumes", english: "Vegetables", example: "Vegetables are important", exampleTranslation: "Les légumes sont importants" },
      { id: "fe_food_9", french: "Fromage", english: "Cheese", example: "French cheese is delicious", exampleTranslation: "Le fromage français est délicieux" },
      { id: "fe_food_10", french: "Œuf", english: "Egg", example: "I eat eggs for breakfast", exampleTranslation: "Je mange des œufs au petit déjeuner" }
    ]
  },

  house: {
    name: "Maison",
    description: "Articles ménagers",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "fe_house_1", french: "Maison", english: "House", example: "My house is big", exampleTranslation: "Ma maison est grande" },
      { id: "fe_house_2", french: "Chambre", english: "Room", example: "The room is clean", exampleTranslation: "La chambre est propre" },
      { id: "fe_house_3", french: "Cuisine", english: "Kitchen", example: "I cook in the kitchen", exampleTranslation: "Je cuisine dans la cuisine" },
      { id: "fe_house_4", french: "Salle de bain", english: "Bathroom", example: "The bathroom is new", exampleTranslation: "La salle de bain est neuve" },
      { id: "fe_house_5", french: "Chambre à coucher", english: "Bedroom", example: "My bedroom is comfortable", exampleTranslation: "Ma chambre à coucher est confortable" },
      { id: "fe_house_6", french: "Porte", english: "Door", example: "Close the door", exampleTranslation: "Ferme la porte" },
      { id: "fe_house_7", french: "Fenêtre", english: "Window", example: "Open the window", exampleTranslation: "Ouvre la fenêtre" },
      { id: "fe_house_8", french: "Table", english: "Table", example: "The table is wooden", exampleTranslation: "La table est en bois" },
      { id: "fe_house_9", french: "Chaise", english: "Chair", example: "The chair is comfortable", exampleTranslation: "La chaise est confortable" },
      { id: "fe_house_10", french: "Lit", english: "Bed", example: "The bed is soft", exampleTranslation: "Le lit est doux" }
    ]
  },

  places: {
    name: "Lieux",
    description: "Emplacements",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "fe_place_1", french: "Magasin", english: "Store", example: "The store is open", exampleTranslation: "Le magasin est ouvert" },
      { id: "fe_place_2", french: "École", english: "School", example: "I go to school", exampleTranslation: "Je vais à l'école" },
      { id: "fe_place_3", french: "Hôpital", english: "Hospital", example: "The hospital is close", exampleTranslation: "L'hôpital est proche" },
      { id: "fe_place_4", french: "Parc", english: "Park", example: "Children play in the park", exampleTranslation: "Les enfants jouent dans le parc" },
      { id: "fe_place_5", french: "Restaurant", english: "Restaurant", example: "We eat at the restaurant", exampleTranslation: "Nous mangeons au restaurant" },
      { id: "fe_place_6", french: "Hôtel", english: "Hotel", example: "The hotel is very big", exampleTranslation: "L'hôtel est très grand" },
      { id: "fe_place_7", french: "Banque", english: "Bank", example: "I go to the bank", exampleTranslation: "Je vais à la banque" },
      { id: "fe_place_8", french: "Aéroport", english: "Airport", example: "I'm at the airport", exampleTranslation: "Je suis à l'aéroport" },
      { id: "fe_place_9", french: "Gare", english: "Train station", example: "The train station", exampleTranslation: "La gare ferroviaire" },
      { id: "fe_place_10", french: "Musée", english: "Museum", example: "The museum is interesting", exampleTranslation: "Le musée est intéressant" }
    ]
  },

  clothing: {
    name: "Vêtements",
    description: "Vêtements",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "fe_cloth_1", french: "Chemise", english: "Shirt", example: "I like your shirt", exampleTranslation: "J'aime ta chemise" },
      { id: "fe_cloth_2", french: "Pantalon", english: "Pants", example: "I need new pants", exampleTranslation: "J'ai besoin d'un nouveau pantalon" },
      { id: "fe_cloth_3", french: "Chaussures", english: "Shoes", example: "I bought black shoes", exampleTranslation: "J'ai acheté des chaussures noires" },
      { id: "fe_cloth_4", french: "Robe", english: "Dress", example: "The dress is beautiful", exampleTranslation: "La robe est belle" },
      { id: "fe_cloth_5", french: "Veste", english: "Jacket", example: "I need a jacket", exampleTranslation: "J'ai besoin d'une veste" },
      { id: "fe_cloth_6", french: "Chapeau", english: "Hat", example: "Put on the hat", exampleTranslation: "Mets le chapeau" },
      { id: "fe_cloth_7", french: "Chaussettes", english: "Socks", example: "My socks are clean", exampleTranslation: "Mes chaussettes sont propres" },
      { id: "fe_cloth_8", french: "Gants", english: "Gloves", example: "I wear gloves in winter", exampleTranslation: "Je porte des gants en hiver" },
      { id: "fe_cloth_9", french: "Écharpe", english: "Scarf", example: "The scarf is soft", exampleTranslation: "L'écharpe est douce" },
      { id: "fe_cloth_10", french: "Manteau", english: "Coat", example: "The coat is warm", exampleTranslation: "Le manteau est chaud" }
    ]
  },

  work: {
    name: "Travail",
    description: "Professions",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "fe_work_1", french: "Travail", english: "Work", example: "I go to work", exampleTranslation: "Je vais au travail" },
      { id: "fe_work_2", french: "Médecin", english: "Doctor", example: "He is a doctor", exampleTranslation: "Il est médecin" },
      { id: "fe_work_3", french: "Professeur", english: "Teacher", example: "My teacher is excellent", exampleTranslation: "Mon professeur est excellent" },
      { id: "fe_work_4", french: "Ingénieur", english: "Engineer", example: "I am an engineer", exampleTranslation: "Je suis ingénieur" },
      { id: "fe_work_5", french: "Avocat", english: "Lawyer", example: "She is a lawyer", exampleTranslation: "Elle est avocate" },
      { id: "fe_work_6", french: "Cuisinier", english: "Cook", example: "The cook prepares the meal", exampleTranslation: "Le cuisinier prépare le repas" },
      { id: "fe_work_7", french: "Serveur", english: "Waiter", example: "The waiter is kind", exampleTranslation: "Le serveur est gentil" },
      { id: "fe_work_8", french: "Vendeur", english: "Salesperson", example: "The salesperson helps the customer", exampleTranslation: "Le vendeur aide le client" },
      { id: "fe_work_9", french: "Policier", english: "Police officer", example: "The police officer protects the city", exampleTranslation: "Le policier protège la ville" },
      { id: "fe_work_10", french: "Mécanicien", english: "Mechanic", example: "The mechanic repairs cars", exampleTranslation: "Le mécanicien répare les voitures" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Transport",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "fe_trans_1", french: "Voiture", english: "Car", example: "I have a new car", exampleTranslation: "J'ai une nouvelle voiture" },
      { id: "fe_trans_2", french: "Bus", english: "Bus", example: "I go by bus", exampleTranslation: "Je vais en bus" },
      { id: "fe_trans_3", french: "Train", english: "Train", example: "The train is fast", exampleTranslation: "Le train est rapide" },
      { id: "fe_trans_4", french: "Avion", english: "Airplane", example: "I travel by plane", exampleTranslation: "Je voyage en avion" },
      { id: "fe_trans_5", french: "Vélo", english: "Bicycle", example: "I ride a bicycle", exampleTranslation: "Je fais du vélo" },
      { id: "fe_trans_6", french: "Taxi", english: "Taxi", example: "I call a taxi", exampleTranslation: "J'appelle un taxi" },
      { id: "fe_trans_7", french: "Métro", english: "Metro", example: "I use the metro", exampleTranslation: "J'utilise le métro" },
      { id: "fe_trans_8", french: "Moto", english: "Motorcycle", example: "My motorcycle is red", exampleTranslation: "Ma moto est rouge" },
      { id: "fe_trans_9", french: "Bateau", english: "Boat", example: "We sail by boat", exampleTranslation: "Nous naviguons en bateau" },
      { id: "fe_trans_10", french: "Billet", english: "Ticket", example: "I buy a ticket", exampleTranslation: "J'achète un billet" }
    ]
  },

  education: {
    name: "Éducation",
    description: "École",
    icon: School,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "fe_edu_1", french: "Étudiant", english: "Student", example: "I am a student", exampleTranslation: "Je suis étudiant" },
      { id: "fe_edu_2", french: "Enseignant", english: "Teacher", example: "The teacher teaches well", exampleTranslation: "L'enseignant enseigne bien" },
      { id: "fe_edu_3", french: "Livre", english: "Book", example: "I read a book", exampleTranslation: "Je lis un livre" },
      { id: "fe_edu_4", french: "Crayon", english: "Pencil", example: "Do you have a pencil?", exampleTranslation: "As-tu un crayon?" },
      { id: "fe_edu_5", french: "Cahier", english: "Notebook", example: "I need a notebook", exampleTranslation: "J'ai besoin d'un cahier" },
      { id: "fe_edu_6", french: "Examen", english: "Exam", example: "The exam is tomorrow", exampleTranslation: "L'examen est demain" },
      { id: "fe_edu_7", french: "Devoirs", english: "Homework", example: "I have a lot of homework", exampleTranslation: "J'ai beaucoup de devoirs" },
      { id: "fe_edu_8", french: "Cours", english: "Class", example: "The class starts at nine", exampleTranslation: "Le cours commence à neuf heures" },
      { id: "fe_edu_9", french: "Bibliothèque", english: "Library", example: "I study at the library", exampleTranslation: "J'étudie à la bibliothèque" },
      { id: "fe_edu_10", french: "Sac à dos", english: "Backpack", example: "My backpack is heavy", exampleTranslation: "Mon sac à dos est lourd" }
    ]
  },

  nature: {
    name: "Nature",
    description: "Nature",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "fe_nature_1", french: "Arbre", english: "Tree", example: "The tree is tall", exampleTranslation: "L'arbre est grand" },
      { id: "fe_nature_2", french: "Fleur", english: "Flower", example: "The flower is beautiful", exampleTranslation: "La fleur est belle" },
      { id: "fe_nature_3", french: "Montagne", english: "Mountain", example: "The mountain is high", exampleTranslation: "La montagne est haute" },
      { id: "fe_nature_4", french: "Rivière", english: "River", example: "The river is long", exampleTranslation: "La rivière est longue" },
      { id: "fe_nature_5", french: "Mer", english: "Sea", example: "The sea is blue", exampleTranslation: "La mer est bleue" },
      { id: "fe_nature_6", french: "Forêt", english: "Forest", example: "We walk through the forest", exampleTranslation: "Nous marchons dans la forêt" },
      { id: "fe_nature_7", french: "Lac", english: "Lake", example: "The lake is calm", exampleTranslation: "Le lac est calme" },
      { id: "fe_nature_8", french: "Ciel", english: "Sky", example: "The sky is blue", exampleTranslation: "Le ciel est bleu" },
      { id: "fe_nature_9", french: "Étoile", english: "Star", example: "The stars shine", exampleTranslation: "Les étoiles brillent" },
      { id: "fe_nature_10", french: "Lune", english: "Moon", example: "The moon is full", exampleTranslation: "La lune est pleine" }
    ]
  },

  emotions: {
    name: "Émotions",
    description: "Sentiments",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "fe_emo_1", french: "Heureux", english: "Happy", example: "I am happy", exampleTranslation: "Je suis heureux" },
      { id: "fe_emo_2", french: "Triste", english: "Sad", example: "He is sad", exampleTranslation: "Il est triste" },
      { id: "fe_emo_3", french: "En colère", english: "Angry", example: "She is angry", exampleTranslation: "Elle est en colère" },
      { id: "fe_emo_4", french: "Fatigué", english: "Tired", example: "I am tired", exampleTranslation: "Je suis fatigué" },
      { id: "fe_emo_5", french: "Excité", english: "Excited", example: "We are excited", exampleTranslation: "Nous sommes excités" },
      { id: "fe_emo_6", french: "Nerveux", english: "Nervous", example: "He is nervous", exampleTranslation: "Il est nerveux" },
      { id: "fe_emo_7", french: "Calme", english: "Calm", example: "She is calm", exampleTranslation: "Elle est calme" },
      { id: "fe_emo_8", french: "Surpris", english: "Surprised", example: "I am surprised", exampleTranslation: "Je suis surpris" },
      { id: "fe_emo_9", french: "Effrayé", english: "Scared", example: "The child is scared", exampleTranslation: "L'enfant est effrayé" },
      { id: "fe_emo_10", french: "Ennuyé", english: "Bored", example: "They are bored", exampleTranslation: "Ils sont ennuyés" }
    ]
  },

  time: {
    name: "Temps",
    description: "Expressions temporelles",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "fe_time_1", french: "Aujourd'hui", english: "Today", example: "Today is Monday", exampleTranslation: "Aujourd'hui c'est lundi" },
      { id: "fe_time_2", french: "Hier", english: "Yesterday", example: "Yesterday was Sunday", exampleTranslation: "Hier c'était dimanche" },
      { id: "fe_time_3", french: "Demain", english: "Tomorrow", example: "Tomorrow is Tuesday", exampleTranslation: "Demain c'est mardi" },
      { id: "fe_time_4", french: "Maintenant", english: "Now", example: "I'm working now", exampleTranslation: "Je travaille maintenant" },
      { id: "fe_time_5", french: "Plus tard", english: "Later", example: "I'll do it later", exampleTranslation: "Je le ferai plus tard" },
      { id: "fe_time_6", french: "Matin", english: "Morning", example: "Good morning", exampleTranslation: "Bonjour" },
      { id: "fe_time_7", french: "Midi", english: "Noon", example: "It's noon", exampleTranslation: "Il est midi" },
      { id: "fe_time_8", french: "Soir", english: "Evening", example: "Good evening", exampleTranslation: "Bonsoir" },
      { id: "fe_time_9", french: "Nuit", english: "Night", example: "Good night", exampleTranslation: "Bonne nuit" },
      { id: "fe_time_10", french: "Semaine", english: "Week", example: "Next week", exampleTranslation: "La semaine prochaine" }
    ]
  },

  weather: {
    name: "Météo",
    description: "Conditions météorologiques",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "fe_weather_1", french: "Soleil", english: "Sun", example: "The sun shines", exampleTranslation: "Le soleil brille" },
      { id: "fe_weather_2", french: "Pluie", english: "Rain", example: "It's raining", exampleTranslation: "Il pleut" },
      { id: "fe_weather_3", french: "Neige", english: "Snow", example: "It's snowing", exampleTranslation: "Il neige" },
      { id: "fe_weather_4", french: "Vent", english: "Wind", example: "It's windy", exampleTranslation: "Il y a du vent" },
      { id: "fe_weather_5", french: "Nuage", english: "Cloud", example: "There are clouds in the sky", exampleTranslation: "Il y a des nuages dans le ciel" },
      { id: "fe_weather_6", french: "Tempête", english: "Storm", example: "A storm is coming", exampleTranslation: "Une tempête arrive" },
      { id: "fe_weather_7", french: "Chaud", english: "Hot", example: "It's very hot", exampleTranslation: "Il fait très chaud" },
      { id: "fe_weather_8", french: "Froid", english: "Cold", example: "It's cold in winter", exampleTranslation: "Il fait froid en hiver" },
      { id: "fe_weather_9", french: "Éclair", english: "Lightning", example: "I saw lightning", exampleTranslation: "J'ai vu un éclair" },
      { id: "fe_weather_10", french: "Tonnerre", english: "Thunder", example: "You can hear thunder", exampleTranslation: "On entend le tonnerre" }
    ]
  },

  body: {
    name: "Corps",
    description: "Parties du corps",
    icon: Hand,
    color: "from-pink-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "fe_body_1", french: "Tête", english: "Head", example: "My head hurts", exampleTranslation: "J'ai mal à la tête" },
      { id: "fe_body_2", french: "Œil", english: "Eye", example: "I have blue eyes", exampleTranslation: "J'ai les yeux bleus" },
      { id: "fe_body_3", french: "Nez", english: "Nose", example: "My nose is cold", exampleTranslation: "Mon nez est froid" },
      { id: "fe_body_4", french: "Bouche", english: "Mouth", example: "Open your mouth", exampleTranslation: "Ouvre la bouche" },
      { id: "fe_body_5", french: "Oreille", english: "Ear", example: "My ears are big", exampleTranslation: "Mes oreilles sont grandes" },
      { id: "fe_body_6", french: "Main", english: "Hand", example: "Give me your hand", exampleTranslation: "Donne-moi la main" },
      { id: "fe_body_7", french: "Pied", english: "Foot", example: "My foot hurts", exampleTranslation: "J'ai mal au pied" },
      { id: "fe_body_8", french: "Bras", english: "Arm", example: "Raise your arm", exampleTranslation: "Lève le bras" },
      { id: "fe_body_9", french: "Jambe", english: "Leg", example: "My legs are tired", exampleTranslation: "Mes jambes sont fatiguées" },
      { id: "fe_body_10", french: "Cœur", english: "Heart", example: "My heart beats fast", exampleTranslation: "Mon cœur bat vite" }
    ]
  },

  activities: {
    name: "Activités",
    description: "Activités quotidiennes",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "fe_act_1", french: "Manger", english: "Eat", example: "I'm going to eat", exampleTranslation: "Je vais manger" },
      { id: "fe_act_2", french: "Boire", english: "Drink", example: "I drink water", exampleTranslation: "Je bois de l'eau" },
      { id: "fe_act_3", french: "Dormir", english: "Sleep", example: "I need to sleep", exampleTranslation: "Je dois dormir" },
      { id: "fe_act_4", french: "Courir", english: "Run", example: "I run in the morning", exampleTranslation: "Je cours le matin" },
      { id: "fe_act_5", french: "Lire", english: "Read", example: "I read a book", exampleTranslation: "Je lis un livre" },
      { id: "fe_act_6", french: "Écrire", english: "Write", example: "I write a letter", exampleTranslation: "J'écris une lettre" },
      { id: "fe_act_7", french: "Parler", english: "Speak", example: "I speak French", exampleTranslation: "Je parle français" },
      { id: "fe_act_8", french: "Écouter", english: "Listen", example: "I listen to music", exampleTranslation: "J'écoute de la musique" },
      { id: "fe_act_9", french: "Regarder", english: "Watch", example: "I watch television", exampleTranslation: "Je regarde la télévision" },
      { id: "fe_act_10", french: "Penser", english: "Think", example: "I think of you", exampleTranslation: "Je pense à toi" }
    ]
  },

  learning: {
    name: "Apprentissage",
    description: "Activités d'apprentissage",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "fe_learn_1", french: "Apprendre", english: "Learn", example: "I learn French", exampleTranslation: "J'apprends le français" },
      { id: "fe_learn_2", french: "Étudier", english: "Study", example: "I study at university", exampleTranslation: "J'étudie à l'université" },
      { id: "fe_learn_3", french: "Enseigner", english: "Teach", example: "I teach English", exampleTranslation: "J'enseigne l'anglais" },
      { id: "fe_learn_4", french: "Comprendre", english: "Understand", example: "I understand the lesson", exampleTranslation: "Je comprends la leçon" },
      { id: "fe_learn_5", french: "Pratiquer", english: "Practice", example: "I practice every day", exampleTranslation: "Je pratique tous les jours" },
      { id: "fe_learn_6", french: "Répéter", english: "Repeat", example: "Repeat the word", exampleTranslation: "Répète le mot" },
      { id: "fe_learn_7", french: "Expliquer", english: "Explain", example: "The teacher explains well", exampleTranslation: "Le professeur explique bien" },
      { id: "fe_learn_8", french: "Demander", english: "Ask", example: "I ask the teacher", exampleTranslation: "Je demande au professeur" },
      { id: "fe_learn_9", french: "Répondre", english: "Answer", example: "I answer the question", exampleTranslation: "Je réponds à la question" },
      { id: "fe_learn_10", french: "Se souvenir", english: "Remember", example: "I remember the lesson", exampleTranslation: "Je me souviens de la leçon" }
    ]
  },

  sports: {
    name: "Sports",
    description: "Sports",
    icon: Dumbbell,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "fe_sport_1", french: "Football", english: "Football", example: "I play football", exampleTranslation: "Je joue au football" },
      { id: "fe_sport_2", french: "Basketball", english: "Basketball", example: "I like basketball", exampleTranslation: "J'aime le basketball" },
      { id: "fe_sport_3", french: "Tennis", english: "Tennis", example: "I play tennis", exampleTranslation: "Je joue au tennis" },
      { id: "fe_sport_4", french: "Natation", english: "Swimming", example: "Swimming is healthy", exampleTranslation: "La natation est saine" },
      { id: "fe_sport_5", french: "Course", english: "Running", example: "I run in the morning", exampleTranslation: "Je cours le matin" },
      { id: "fe_sport_6", french: "Cyclisme", english: "Cycling", example: "I like cycling", exampleTranslation: "J'aime le cyclisme" },
      { id: "fe_sport_7", french: "Salle de sport", english: "Gym", example: "I go to the gym", exampleTranslation: "Je vais à la salle de sport" },
      { id: "fe_sport_8", french: "Entraînement", english: "Training", example: "I have training today", exampleTranslation: "J'ai un entraînement aujourd'hui" },
      { id: "fe_sport_9", french: "Équipe", english: "Team", example: "I'm on a team", exampleTranslation: "Je suis dans une équipe" },
      { id: "fe_sport_10", french: "Entraîneur", english: "Coach", example: "Our coach is excellent", exampleTranslation: "Notre entraîneur est excellent" }
    ]
  },

  travel: {
    name: "Voyage",
    description: "Tourisme",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    words: [
      { id: "fe_travel_1", french: "Voyage", english: "Travel", example: "I'm going on a trip", exampleTranslation: "Je fais un voyage" },
      { id: "fe_travel_2", french: "Valise", english: "Suitcase", example: "My suitcase is heavy", exampleTranslation: "Ma valise est lourde" },
      { id: "fe_travel_3", french: "Passeport", english: "Passport", example: "I need my passport", exampleTranslation: "J'ai besoin de mon passeport" },
      { id: "fe_travel_4", french: "Hôtel", english: "Hotel", example: "The hotel is comfortable", exampleTranslation: "L'hôtel est confortable" },
      { id: "fe_travel_5", french: "Réservation", english: "Reservation", example: "I have a reservation", exampleTranslation: "J'ai une réservation" },
      { id: "fe_travel_6", french: "Touriste", english: "Tourist", example: "I am a tourist", exampleTranslation: "Je suis touriste" },
      { id: "fe_travel_7", french: "Vacances", english: "Vacation", example: "I'm on vacation", exampleTranslation: "Je suis en vacances" },
      { id: "fe_travel_8", french: "Visite touristique", english: "Sightseeing", example: "We're doing sightseeing", exampleTranslation: "Nous faisons une visite touristique" },
      { id: "fe_travel_9", french: "Guide", english: "Guide", example: "The guide is informative", exampleTranslation: "Le guide est informatif" },
      { id: "fe_travel_10", french: "Souvenir", english: "Souvenir", example: "I'm buying a souvenir", exampleTranslation: "J'achète un souvenir" }
    ]
  },

  entertainment: {
    name: "Divertissement",
    description: "Loisirs",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "fe_ent_1", french: "Musique", english: "Music", example: "I listen to music", exampleTranslation: "J'écoute de la musique" },
      { id: "fe_ent_2", french: "Film", english: "Movie", example: "I watch a movie", exampleTranslation: "Je regarde un film" },
      { id: "fe_ent_3", french: "Concert", english: "Concert", example: "I go to a concert", exampleTranslation: "Je vais à un concert" },
      { id: "fe_ent_4", french: "Théâtre", english: "Theater", example: "I go to the theater", exampleTranslation: "Je vais au théâtre" },
      { id: "fe_ent_5", french: "Danse", english: "Dance", example: "I like to dance", exampleTranslation: "J'aime danser" },
      { id: "fe_ent_6", french: "Chanter", english: "Sing", example: "I like to sing", exampleTranslation: "J'aime chanter" },
      { id: "fe_ent_7", french: "Guitare", english: "Guitar", example: "I play guitar", exampleTranslation: "Je joue de la guitare" },
      { id: "fe_ent_8", french: "Jeux", english: "Games", example: "I play video games", exampleTranslation: "Je joue à des jeux vidéo" },
      { id: "fe_ent_9", french: "Photographie", english: "Photography", example: "I'm interested in photography", exampleTranslation: "Je m'intéresse à la photographie" },
      { id: "fe_ent_10", french: "Lecture", english: "Reading", example: "Reading is my hobby", exampleTranslation: "La lecture est mon passe-temps" }
    ]
  }
};

export default flashcardsCategories;