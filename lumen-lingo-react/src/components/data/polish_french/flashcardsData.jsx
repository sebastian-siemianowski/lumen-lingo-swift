/**
 * POLISH → FRENCH FLASHCARDS
 * 
 * Native Language: Polish (Polski)
 * Target Language: French (Français)
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
      { id: "pf_greet_1", polish: "Cześć", french: "Bonjour", example: "Bonjour, comment allez-vous?", exampleTranslation: "Cześć, jak się masz?" },
      { id: "pf_greet_2", polish: "Dzień dobry", french: "Bon matin", example: "Bon matin, monsieur", exampleTranslation: "Dzień dobry, panie" },
      { id: "pf_greet_3", polish: "Dobry wieczór", french: "Bonsoir", example: "Bonsoir, comment ça va?", exampleTranslation: "Dobry wieczór, jak się Pan ma?" },
      { id: "pf_greet_4", polish: "Dobranoc", french: "Bonne nuit", example: "Bonne nuit, dors bien", exampleTranslation: "Dobranoc, śpij dobrze" },
      { id: "pf_greet_5", polish: "Do widzenia", french: "Au revoir", example: "Au revoir, à plus tard", exampleTranslation: "Do widzenia, do zobaczenia" },
      { id: "pf_greet_6", polish: "Dziękuję", french: "Merci", example: "Merci pour ton aide", exampleTranslation: "Dziękuję za pomoc" },
      { id: "pf_greet_7", polish: "Proszę", french: "S'il vous plaît", example: "S'il vous plaît, aidez-moi", exampleTranslation: "Proszę, pomóż mi" },
      { id: "pf_greet_8", polish: "Przepraszam", french: "Excusez-moi", example: "Excusez-moi, je suis en retard", exampleTranslation: "Przepraszam, spóźniłem się" },
      { id: "pf_greet_9", polish: "Tak", french: "Oui", example: "Oui, je suis d'accord", exampleTranslation: "Tak, zgadzam się" },
      { id: "pf_greet_10", polish: "Nie", french: "Non", example: "Non, je ne veux pas", exampleTranslation: "Nie, nie chcę" }
    ]
  },

  family: {
    name: "Rodzina",
    description: "Członkowie rodziny",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "pf_fam_1", polish: "Ojciec", french: "Père", example: "Mon père travaille beaucoup", exampleTranslation: "Mój ojciec pracuje dużo" },
      { id: "pf_fam_2", polish: "Matka", french: "Mère", example: "Ma mère cuisine bien", exampleTranslation: "Moja matka dobrze gotuje" },
      { id: "pf_fam_3", polish: "Brat", french: "Frère", example: "Mon frère étudie la médecine", exampleTranslation: "Mój brat studiuje medycynę" },
      { id: "pf_fam_4", polish: "Siostra", french: "Sœur", example: "Ma sœur est professeure", exampleTranslation: "Moja siostra jest nauczycielką" },
      { id: "pf_fam_5", polish: "Syn", french: "Fils", example: "Mon fils a dix ans", exampleTranslation: "Mój syn ma dziesięć lat" },
      { id: "pf_fam_6", polish: "Córka", french: "Fille", example: "Ma fille va à l'université", exampleTranslation: "Moja córka chodzi na uniwersytet" },
      { id: "pf_fam_7", polish: "Dziadek", french: "Grand-père", example: "Mon grand-père est très sage", exampleTranslation: "Mój dziadek jest bardzo mądry" },
      { id: "pf_fam_8", polish: "Babcia", french: "Grand-mère", example: "Ma grand-mère fait des gâteaux", exampleTranslation: "Moja babcia piecze ciasta" },
      { id: "pf_fam_9", polish: "Wujek", french: "Oncle", example: "Mon oncle habite à Paris", exampleTranslation: "Mój wujek mieszka w Paryżu" },
      { id: "pf_fam_10", polish: "Ciocia", french: "Tante", example: "Ma tante est très gentille", exampleTranslation: "Moja ciocia jest bardzo miła" }
    ]
  },

  numbers: {
    name: "Liczby",
    description: "Podstawowe liczby",
    icon: Hash,
    color: "from-purple-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "pf_num_1", polish: "Jeden", french: "Un", example: "J'ai un frère", exampleTranslation: "Mam jednego brata" },
      { id: "pf_num_2", polish: "Dwa", french: "Deux", example: "Il y a deux chats", exampleTranslation: "Są dwa koty" },
      { id: "pf_num_3", polish: "Trzy", french: "Trois", example: "Il est trois heures", exampleTranslation: "Jest trzecia godzina" },
      { id: "pf_num_4", polish: "Cztery", french: "Quatre", example: "Quatre saisons", exampleTranslation: "Cztery pory roku" },
      { id: "pf_num_5", polish: "Pięć", french: "Cinq", example: "Cinq doigts sur la main", exampleTranslation: "Pięć palców u ręki" },
      { id: "pf_num_6", polish: "Sześć", french: "Six", example: "Mon fils a six ans", exampleTranslation: "Mój syn ma sześć lat" },
      { id: "pf_num_7", polish: "Siedem", french: "Sept", example: "Sept jours de la semaine", exampleTranslation: "Siedem dni tygodnia" },
      { id: "pf_num_8", polish: "Osiem", french: "Huit", example: "Je travaille huit heures", exampleTranslation: "Pracuję osiem godzin" },
      { id: "pf_num_9", polish: "Dziewięć", french: "Neuf", example: "Il est neuf heures du matin", exampleTranslation: "Jest dziewiąta rano" },
      { id: "pf_num_10", polish: "Dziesięć", french: "Dix", example: "Dix euros, s'il vous plaît", exampleTranslation: "Dziesięć euro, proszę" }
    ]
  },

  colors: {
    name: "Kolory",
    description: "Podstawowe kolory",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "pf_col_1", polish: "Czerwony", french: "Rouge", example: "La voiture est rouge", exampleTranslation: "Samochód jest czerwony" },
      { id: "pf_col_2", polish: "Niebieski", french: "Bleu", example: "Le ciel est bleu", exampleTranslation: "Niebo jest niebieskie" },
      { id: "pf_col_3", polish: "Zielony", french: "Vert", example: "L'herbe est verte", exampleTranslation: "Trawa jest zielona" },
      { id: "pf_col_4", polish: "Żółty", french: "Jaune", example: "Le soleil est jaune", exampleTranslation: "Słońce jest żółte" },
      { id: "pf_col_5", polish: "Czarny", french: "Noir", example: "Mon chat est noir", exampleTranslation: "Mój kot jest czarny" },
      { id: "pf_col_6", polish: "Biały", french: "Blanc", example: "La neige est blanche", exampleTranslation: "Śnieg jest biały" },
      { id: "pf_col_7", polish: "Pomarańczowy", french: "Orange", example: "L'orange est orange", exampleTranslation: "Pomarańcza jest pomarańczowa" },
      { id: "pf_col_8", polish: "Różowy", french: "Rose", example: "La robe est rose", exampleTranslation: "Sukienka jest różowa" },
      { id: "pf_col_9", polish: "Brązowy", french: "Marron", example: "L'ours est marron", exampleTranslation: "Niedźwiedź jest brązowy" },
      { id: "pf_col_10", polish: "Szary", french: "Gris", example: "L'éléphant est gris", exampleTranslation: "Słoń jest szary" }
    ]
  },

  food: {
    name: "Jedzenie",
    description: "Podstawowe jedzenie",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "pf_food_1", polish: "Chleb", french: "Pain", example: "Le pain est frais", exampleTranslation: "Chleb jest świeży" },
      { id: "pf_food_2", polish: "Woda", french: "Eau", example: "Un verre d'eau, s'il vous plaît", exampleTranslation: "Szklanka wody, proszę" },
      { id: "pf_food_3", polish: "Kawa", french: "Café", example: "J'aime le café", exampleTranslation: "Lubię kawę" },
      { id: "pf_food_4", polish: "Mleko", french: "Lait", example: "Le lait est frais", exampleTranslation: "Mleko jest świeże" },
      { id: "pf_food_5", polish: "Mięso", french: "Viande", example: "La viande est délicieuse", exampleTranslation: "Mięso jest pyszne" },
      { id: "pf_food_6", polish: "Ryba", french: "Poisson", example: "Le poisson est très sain", exampleTranslation: "Ryba jest bardzo zdrowa" },
      { id: "pf_food_7", polish: "Owoce", french: "Fruit", example: "Je mange des fruits tous les jours", exampleTranslation: "Jem owoce codziennie" },
      { id: "pf_food_8", polish: "Warzywa", french: "Légumes", example: "Les légumes sont importants", exampleTranslation: "Warzywa są ważne" },
      { id: "pf_food_9", polish: "Ser", french: "Fromage", example: "Le fromage français est délicieux", exampleTranslation: "Francuski ser jest pyszny" },
      { id: "pf_food_10", polish: "Jajko", french: "Œuf", example: "Je mange des œufs au petit déjeuner", exampleTranslation: "Jem jajka na śniadanie" }
    ]
  },

  house: {
    name: "Dom",
    description: "Przedmioty domowe",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "pf_house_1", polish: "Dom", french: "Maison", example: "Ma maison est grande", exampleTranslation: "Mój dom jest duży" },
      { id: "pf_house_2", polish: "Pokój", french: "Chambre", example: "La chambre est propre", exampleTranslation: "Pokój jest czysty" },
      { id: "pf_house_3", polish: "Kuchnia", french: "Cuisine", example: "Je cuisine dans la cuisine", exampleTranslation: "Gotuję w kuchni" },
      { id: "pf_house_4", polish: "Łazienka", french: "Salle de bain", example: "La salle de bain est neuve", exampleTranslation: "Łazienka jest nowa" },
      { id: "pf_house_5", polish: "Sypialnia", french: "Chambre à coucher", example: "Ma chambre à coucher est confortable", exampleTranslation: "Moja sypialnia jest wygodna" },
      { id: "pf_house_6", polish: "Drzwi", french: "Porte", example: "Ferme la porte", exampleTranslation: "Zamknij drzwi" },
      { id: "pf_house_7", polish: "Okno", french: "Fenêtre", example: "Ouvre la fenêtre", exampleTranslation: "Otwórz okno" },
      { id: "pf_house_8", polish: "Stół", french: "Table", example: "La table est en bois", exampleTranslation: "Stół jest drewniany" },
      { id: "pf_house_9", polish: "Krzesło", french: "Chaise", example: "La chaise est confortable", exampleTranslation: "Krzesło jest wygodne" },
      { id: "pf_house_10", polish: "Łóżko", french: "Lit", example: "Le lit est doux", exampleTranslation: "Łóżko jest miękkie" }
    ]
  },

  places: {
    name: "Miejsca",
    description: "Lokalizacje",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "pf_place_1", polish: "Sklep", french: "Magasin", example: "Le magasin est ouvert", exampleTranslation: "Sklep jest otwarty" },
      { id: "pf_place_2", polish: "Szkoła", french: "École", example: "Je vais à l'école", exampleTranslation: "Idę do szkoły" },
      { id: "pf_place_3", polish: "Szpital", french: "Hôpital", example: "L'hôpital est proche", exampleTranslation: "Szpital jest blisko" },
      { id: "pf_place_4", polish: "Park", french: "Parc", example: "Les enfants jouent dans le parc", exampleTranslation: "Dzieci bawią się w parku" },
      { id: "pf_place_5", polish: "Restauracja", french: "Restaurant", example: "Nous mangeons au restaurant", exampleTranslation: "Jemy w restauracji" },
      { id: "pf_place_6", polish: "Hotel", french: "Hôtel", example: "L'hôtel est très grand", exampleTranslation: "Hotel jest bardzo duży" },
      { id: "pf_place_7", polish: "Bank", french: "Banque", example: "Je vais à la banque", exampleTranslation: "Idę do banku" },
      { id: "pf_place_8", polish: "Lotnisko", french: "Aéroport", example: "Je suis à l'aéroport", exampleTranslation: "Jestem na lotnisku" },
      { id: "pf_place_9", polish: "Dworzec", french: "Gare", example: "La gare ferroviaire", exampleTranslation: "Dworzec kolejowy" },
      { id: "pf_place_10", polish: "Muzeum", french: "Musée", example: "Le musée est intéressant", exampleTranslation: "Muzeum jest interesujące" }
    ]
  },

  clothing: {
    name: "Ubrania",
    description: "Odzież",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "pf_cloth_1", polish: "Koszula", french: "Chemise", example: "J'aime ta chemise", exampleTranslation: "Podoba mi się twoja koszula" },
      { id: "pf_cloth_2", polish: "Spodnie", french: "Pantalon", example: "J'ai besoin d'un nouveau pantalon", exampleTranslation: "Potrzebuję nowych spodni" },
      { id: "pf_cloth_3", polish: "Buty", french: "Chaussures", example: "J'ai acheté des chaussures noires", exampleTranslation: "Kupiłem czarne buty" },
      { id: "pf_cloth_4", polish: "Sukienka", french: "Robe", example: "La robe est belle", exampleTranslation: "Sukienka jest piękna" },
      { id: "pf_cloth_5", polish: "Kurtka", french: "Veste", example: "J'ai besoin d'une veste", exampleTranslation: "Potrzebuję kurtki" },
      { id: "pf_cloth_6", polish: "Kapelusz", french: "Chapeau", example: "Mets le chapeau", exampleTranslation: "Załóż kapelusz" },
      { id: "pf_cloth_7", polish: "Skarpetki", french: "Chaussettes", example: "Mes chaussettes sont propres", exampleTranslation: "Moje skarpetki są czyste" },
      { id: "pf_cloth_8", polish: "Rękawiczki", french: "Gants", example: "Je porte des gants en hiver", exampleTranslation: "Noszę rękawiczki zimą" },
      { id: "pf_cloth_9", polish: "Szalik", french: "Écharpe", example: "L'écharpe est douce", exampleTranslation: "Szalik jest miękki" },
      { id: "pf_cloth_10", polish: "Płaszcz", french: "Manteau", example: "Le manteau est chaud", exampleTranslation: "Płaszcz jest ciepły" }
    ]
  },

  work: {
    name: "Praca",
    description: "Zawody",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pf_work_1", polish: "Praca", french: "Travail", example: "Je vais au travail", exampleTranslation: "Idę do pracy" },
      { id: "pf_work_2", polish: "Lekarz", french: "Médecin", example: "Il est médecin", exampleTranslation: "On jest lekarzem" },
      { id: "pf_work_3", polish: "Nauczyciel", french: "Professeur", example: "Mon professeur est excellent", exampleTranslation: "Mój nauczyciel jest świetny" },
      { id: "pf_work_4", polish: "Inżynier", french: "Ingénieur", example: "Je suis ingénieur", exampleTranslation: "Jestem inżynierem" },
      { id: "pf_work_5", polish: "Prawnik", french: "Avocat", example: "Elle est avocate", exampleTranslation: "Ona jest prawnikiem" },
      { id: "pf_work_6", polish: "Kucharz", french: "Cuisinier", example: "Le cuisinier prépare le repas", exampleTranslation: "Kucharz przygotowuje jedzenie" },
      { id: "pf_work_7", polish: "Kelner", french: "Serveur", example: "Le serveur est gentil", exampleTranslation: "Kelner jest miły" },
      { id: "pf_work_8", polish: "Sprzedawca", french: "Vendeur", example: "Le vendeur aide le client", exampleTranslation: "Sprzedawca pomaga klientowi" },
      { id: "pf_work_9", polish: "Policjant", french: "Policier", example: "Le policier protège la ville", exampleTranslation: "Policjant chroni miasto" },
      { id: "pf_work_10", polish: "Mechanik", french: "Mécanicien", example: "Le mécanicien répare les voitures", exampleTranslation: "Mechanik naprawia samochody" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Transport",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "pf_trans_1", polish: "Samochód", french: "Voiture", example: "J'ai une nouvelle voiture", exampleTranslation: "Mam nowy samochód" },
      { id: "pf_trans_2", polish: "Autobus", french: "Bus", example: "Je vais en bus", exampleTranslation: "Jadę autobusem" },
      { id: "pf_trans_3", polish: "Pociąg", french: "Train", example: "Le train est rapide", exampleTranslation: "Pociąg jest szybki" },
      { id: "pf_trans_4", polish: "Samolot", french: "Avion", example: "Je voyage en avion", exampleTranslation: "Podróżuję samolotem" },
      { id: "pf_trans_5", polish: "Rower", french: "Vélo", example: "Je fais du vélo", exampleTranslation: "Jeżdżę na rowerze" },
      { id: "pf_trans_6", polish: "Taksówka", french: "Taxi", example: "J'appelle un taxi", exampleTranslation: "Wzywam taksówkę" },
      { id: "pf_trans_7", polish: "Metro", french: "Métro", example: "J'utilise le métro", exampleTranslation: "Korzystam z metra" },
      { id: "pf_trans_8", polish: "Motocykl", french: "Moto", example: "Ma moto est rouge", exampleTranslation: "Mój motocykl jest czerwony" },
      { id: "pf_trans_9", polish: "Łódź", french: "Bateau", example: "Nous naviguons en bateau", exampleTranslation: "Pływamy łodzią" },
      { id: "pf_trans_10", polish: "Bilet", french: "Billet", example: "J'achète un billet", exampleTranslation: "Kupuję bilet" }
    ]
  },

  education: {
    name: "Edukacja",
    description: "Szkoła",
    icon: School,
    color: "from-blue-400 to-indigo-500",
    level: "intermediate",
    words: [
      { id: "pf_edu_1", polish: "Uczeń", french: "Étudiant", example: "Je suis étudiant", exampleTranslation: "Jestem uczniem" },
      { id: "pf_edu_2", polish: "Nauczyciel", french: "Enseignant", example: "L'enseignant enseigne bien", exampleTranslation: "Nauczyciel uczy dobrze" },
      { id: "pf_edu_3", polish: "Książka", french: "Livre", example: "Je lis un livre", exampleTranslation: "Czytam książkę" },
      { id: "pf_edu_4", polish: "Ołówek", french: "Crayon", example: "As-tu un crayon?", exampleTranslation: "Masz ołówek?" },
      { id: "pf_edu_5", polish: "Zeszyt", french: "Cahier", example: "J'ai besoin d'un cahier", exampleTranslation: "Potrzebuję zeszytu" },
      { id: "pf_edu_6", polish: "Egzamin", french: "Examen", example: "L'examen est demain", exampleTranslation: "Egzamin jest jutro" },
      { id: "pf_edu_7", polish: "Praca domowa", french: "Devoirs", example: "J'ai beaucoup de devoirs", exampleTranslation: "Mam dużo pracy domowej" },
      { id: "pf_edu_8", polish: "Lekcja", french: "Cours", example: "Le cours commence à neuf heures", exampleTranslation: "Lekcja zaczyna się o dziewiątej" },
      { id: "pf_edu_9", polish: "Biblioteka", french: "Bibliothèque", example: "J'étudie à la bibliothèque", exampleTranslation: "Uczę się w bibliotece" },
      { id: "pf_edu_10", polish: "Plecak", french: "Sac à dos", example: "Mon sac à dos est lourd", exampleTranslation: "Mój plecak jest ciężki" }
    ]
  },

  nature: {
    name: "Natura",
    description: "Natura",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "pf_nature_1", polish: "Drzewo", french: "Arbre", example: "L'arbre est grand", exampleTranslation: "Drzewo jest wysokie" },
      { id: "pf_nature_2", polish: "Kwiat", french: "Fleur", example: "La fleur est belle", exampleTranslation: "Kwiat jest piękny" },
      { id: "pf_nature_3", polish: "Góra", french: "Montagne", example: "La montagne est haute", exampleTranslation: "Góra jest wysoka" },
      { id: "pf_nature_4", polish: "Rzeka", french: "Rivière", example: "La rivière est longue", exampleTranslation: "Rzeka jest długa" },
      { id: "pf_nature_5", polish: "Morze", french: "Mer", example: "La mer est bleue", exampleTranslation: "Morze jest niebieskie" },
      { id: "pf_nature_6", polish: "Las", french: "Forêt", example: "Nous marchons dans la forêt", exampleTranslation: "Chodzimy po lesie" },
      { id: "pf_nature_7", polish: "Jezioro", french: "Lac", example: "Le lac est calme", exampleTranslation: "Jezioro jest spokojne" },
      { id: "pf_nature_8", polish: "Niebo", french: "Ciel", example: "Le ciel est bleu", exampleTranslation: "Niebo jest niebieskie" },
      { id: "pf_nature_9", polish: "Gwiazda", french: "Étoile", example: "Les étoiles brillent", exampleTranslation: "Gwiazdy świecą" },
      { id: "pf_nature_10", polish: "Księżyc", french: "Lune", example: "La lune est pleine", exampleTranslation: "Księżyc jest w pełni" }
    ]
  },

  emotions: {
    name: "Emocje",
    description: "Uczucia",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "pf_emo_1", polish: "Szczęśliwy", french: "Heureux", example: "Je suis heureux", exampleTranslation: "Jestem szczęśliwy" },
      { id: "pf_emo_2", polish: "Smutny", french: "Triste", example: "Il est triste", exampleTranslation: "On jest smutny" },
      { id: "pf_emo_3", polish: "Zły", french: "En colère", example: "Elle est en colère", exampleTranslation: "Ona jest zła" },
      { id: "pf_emo_4", polish: "Zmęczony", french: "Fatigué", example: "Je suis fatigué", exampleTranslation: "Jestem zmęczony" },
      { id: "pf_emo_5", polish: "Podekscytowany", french: "Excité", example: "Nous sommes excités", exampleTranslation: "Jesteśmy podekscytowani" },
      { id: "pf_emo_6", polish: "Zdenerwowany", french: "Nerveux", example: "Il est nerveux", exampleTranslation: "On jest zdenerwowany" },
      { id: "pf_emo_7", polish: "Spokojny", french: "Calme", example: "Elle est calme", exampleTranslation: "Ona jest spokojna" },
      { id: "pf_emo_8", polish: "Zaskoczony", french: "Surpris", example: "Je suis surpris", exampleTranslation: "Jestem zaskoczony" },
      { id: "pf_emo_9", polish: "Przestraszony", french: "Effrayé", example: "L'enfant est effrayé", exampleTranslation: "Dziecko jest przestraszone" },
      { id: "pf_emo_10", polish: "Znudzony", french: "Ennuyé", example: "Ils sont ennuyés", exampleTranslation: "Są znudzeni" }
    ]
  },

  time: {
    name: "Czas",
    description: "Wyrażenia czasowe",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "pf_time_1", polish: "Dziś", french: "Aujourd'hui", example: "Aujourd'hui c'est lundi", exampleTranslation: "Dziś jest poniedziałek" },
      { id: "pf_time_2", polish: "Wczoraj", french: "Hier", example: "Hier c'était dimanche", exampleTranslation: "Wczoraj była niedziela" },
      { id: "pf_time_3", polish: "Jutro", french: "Demain", example: "Demain c'est mardi", exampleTranslation: "Jutro jest wtorek" },
      { id: "pf_time_4", polish: "Teraz", french: "Maintenant", example: "Je travaille maintenant", exampleTranslation: "Pracuję teraz" },
      { id: "pf_time_5", polish: "Później", french: "Plus tard", example: "Je le ferai plus tard", exampleTranslation: "Zrobię to później" },
      { id: "pf_time_6", polish: "Rano", french: "Matin", example: "Bonjour", exampleTranslation: "Dzień dobry" },
      { id: "pf_time_7", polish: "Południe", french: "Midi", example: "Il est midi", exampleTranslation: "Jest południe" },
      { id: "pf_time_8", polish: "Wieczór", french: "Soir", example: "Bonsoir", exampleTranslation: "Dobry wieczór" },
      { id: "pf_time_9", polish: "Noc", french: "Nuit", example: "Bonne nuit", exampleTranslation: "Dobranoc" },
      { id: "pf_time_10", polish: "Tydzień", french: "Semaine", example: "La semaine prochaine", exampleTranslation: "Następny tydzień" }
    ]
  },

  weather: {
    name: "Pogoda",
    description: "Warunki pogodowe",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "pf_weather_1", polish: "Słońce", french: "Soleil", example: "Le soleil brille", exampleTranslation: "Słońce świeci" },
      { id: "pf_weather_2", polish: "Deszcz", french: "Pluie", example: "Il pleut", exampleTranslation: "Pada deszcz" },
      { id: "pf_weather_3", polish: "Śnieg", french: "Neige", example: "Il neige", exampleTranslation: "Pada śnieg" },
      { id: "pf_weather_4", polish: "Wiatr", french: "Vent", example: "Il y a du vent", exampleTranslation: "Wieje wiatr" },
      { id: "pf_weather_5", polish: "Chmura", french: "Nuage", example: "Il y a des nuages dans le ciel", exampleTranslation: "Na niebie są chmury" },
      { id: "pf_weather_6", polish: "Burza", french: "Tempête", example: "Une tempête arrive", exampleTranslation: "Nadchodzi burza" },
      { id: "pf_weather_7", polish: "Gorąco", french: "Chaud", example: "Il fait très chaud", exampleTranslation: "Jest bardzo gorąco" },
      { id: "pf_weather_8", polish: "Zimno", french: "Froid", example: "Il fait froid en hiver", exampleTranslation: "Zimą jest zimno" },
      { id: "pf_weather_9", polish: "Błyskawica", french: "Éclair", example: "J'ai vu un éclair", exampleTranslation: "Widziałem błyskawicę" },
      { id: "pf_weather_10", polish: "Grzmot", french: "Tonnerre", example: "On entend le tonnerre", exampleTranslation: "Słychać grzmot" }
    ]
  },

  body: {
    name: "Ciało",
    description: "Części ciała",
    icon: Hand,
    color: "from-pink-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "pf_body_1", polish: "Głowa", french: "Tête", example: "J'ai mal à la tête", exampleTranslation: "Boli mnie głowa" },
      { id: "pf_body_2", polish: "Oko", french: "Œil", example: "J'ai les yeux bleus", exampleTranslation: "Mam niebieskie oczy" },
      { id: "pf_body_3", polish: "Nos", french: "Nez", example: "Mon nez est froid", exampleTranslation: "Mój nos jest zimny" },
      { id: "pf_body_4", polish: "Usta", french: "Bouche", example: "Ouvre la bouche", exampleTranslation: "Otwórz usta" },
      { id: "pf_body_5", polish: "Ucho", french: "Oreille", example: "Mes oreilles sont grandes", exampleTranslation: "Moje uszy są duże" },
      { id: "pf_body_6", polish: "Ręka", french: "Main", example: "Donne-moi la main", exampleTranslation: "Daj mi rękę" },
      { id: "pf_body_7", polish: "Stopa", french: "Pied", example: "J'ai mal au pied", exampleTranslation: "Boli mnie stopa" },
      { id: "pf_body_8", polish: "Ramię", french: "Bras", example: "Lève le bras", exampleTranslation: "Podnieś ramię" },
      { id: "pf_body_9", polish: "Noga", french: "Jambe", example: "Mes jambes sont fatiguées", exampleTranslation: "Moje nogi są zmęczone" },
      { id: "pf_body_10", polish: "Serce", french: "Cœur", example: "Mon cœur bat vite", exampleTranslation: "Moje serce bije szybko" }
    ]
  },

  activities: {
    name: "Czynności",
    description: "Codzienne czynności",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "pf_act_1", polish: "Jeść", french: "Manger", example: "Je vais manger", exampleTranslation: "Będę jeść" },
      { id: "pf_act_2", polish: "Pić", french: "Boire", example: "Je bois de l'eau", exampleTranslation: "Piję wodę" },
      { id: "pf_act_3", polish: "Spać", french: "Dormir", example: "Je dois dormir", exampleTranslation: "Muszę spać" },
      { id: "pf_act_4", polish: "Biegać", french: "Courir", example: "Je cours le matin", exampleTranslation: "Biegam rano" },
      { id: "pf_act_5", polish: "Czytać", french: "Lire", example: "Je lis un livre", exampleTranslation: "Czytam książkę" },
      { id: "pf_act_6", polish: "Pisać", french: "Écrire", example: "J'écris une lettre", exampleTranslation: "Piszę list" },
      { id: "pf_act_7", polish: "Mówić", french: "Parler", example: "Je parle français", exampleTranslation: "Mówię po francusku" },
      { id: "pf_act_8", polish: "Słuchać", french: "Écouter", example: "J'écoute de la musique", exampleTranslation: "Słucham muzyki" },
      { id: "pf_act_9", polish: "Patrzeć", french: "Regarder", example: "Je regarde la télévision", exampleTranslation: "Oglądam telewizję" },
      { id: "pf_act_10", polish: "Myśleć", french: "Penser", example: "Je pense à toi", exampleTranslation: "Myślę o tobie" }
    ]
  },

  learning: {
    name: "Nauka",
    description: "Czynności związane z nauką",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "pf_learn_1", polish: "Uczyć się", french: "Apprendre", example: "J'apprends le français", exampleTranslation: "Uczę się francuskiego" },
      { id: "pf_learn_2", polish: "Studiować", french: "Étudier", example: "J'étudie à l'université", exampleTranslation: "Studiuję na uniwersytecie" },
      { id: "pf_learn_3", polish: "Uczyć", french: "Enseigner", example: "J'enseigne l'anglais", exampleTranslation: "Uczę angielskiego" },
      { id: "pf_learn_4", polish: "Rozumieć", french: "Comprendre", example: "Je comprends la leçon", exampleTranslation: "Rozumiem lekcję" },
      { id: "pf_learn_5", polish: "Ćwiczyć", french: "Pratiquer", example: "Je pratique tous les jours", exampleTranslation: "Ćwiczę codziennie" },
      { id: "pf_learn_6", polish: "Powtarzać", french: "Répéter", example: "Répète le mot", exampleTranslation: "Powtórz słowo" },
      { id: "pf_learn_7", polish: "Wyjaśniać", french: "Expliquer", example: "Le professeur explique bien", exampleTranslation: "Nauczyciel dobrze wyjaśnia" },
      { id: "pf_learn_8", polish: "Pytać", french: "Demander", example: "Je demande au professeur", exampleTranslation: "Pytam nauczyciela" },
      { id: "pf_learn_9", polish: "Odpowiadać", french: "Répondre", example: "Je réponds à la question", exampleTranslation: "Odpowiadam na pytanie" },
      { id: "pf_learn_10", polish: "Zapamiętać", french: "Se souvenir", example: "Je me souviens de la leçon", exampleTranslation: "Zapamiętałem lekcję" }
    ]
  },

  sports: {
    name: "Sport",
    description: "Sporty",
    icon: Dumbbell,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "pf_sport_1", polish: "Piłka nożna", french: "Football", example: "Je joue au football", exampleTranslation: "Gram w piłkę nożną" },
      { id: "pf_sport_2", polish: "Koszykówka", french: "Basketball", example: "J'aime le basketball", exampleTranslation: "Lubię koszykówkę" },
      { id: "pf_sport_3", polish: "Tenis", french: "Tennis", example: "Je joue au tennis", exampleTranslation: "Gram w tenisa" },
      { id: "pf_sport_4", polish: "Pływanie", french: "Natation", example: "La natation est saine", exampleTranslation: "Pływanie jest zdrowe" },
      { id: "pf_sport_5", polish: "Bieganie", french: "Course", example: "Je cours le matin", exampleTranslation: "Biegam rano" },
      { id: "pf_sport_6", polish: "Kolarstwo", french: "Cyclisme", example: "J'aime le cyclisme", exampleTranslation: "Lubię kolarstwo" },
      { id: "pf_sport_7", polish: "Siłownia", french: "Salle de sport", example: "Je vais à la salle de sport", exampleTranslation: "Chodzę na siłownię" },
      { id: "pf_sport_8", polish: "Trening", french: "Entraînement", example: "J'ai un entraînement aujourd'hui", exampleTranslation: "Mam dzisiaj trening" },
      { id: "pf_sport_9", polish: "Drużyna", french: "Équipe", example: "Je suis dans une équipe", exampleTranslation: "Jestem w drużynie" },
      { id: "pf_sport_10", polish: "Trener", french: "Entraîneur", example: "Notre entraîneur est excellent", exampleTranslation: "Nasz trener jest świetny" }
    ]
  },

  travel: {
    name: "Podróże",
    description: "Turystyka",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    words: [
      { id: "pf_travel_1", polish: "Podróż", french: "Voyage", example: "Je fais un voyage", exampleTranslation: "Jadę w podróż" },
      { id: "pf_travel_2", polish: "Walizka", french: "Valise", example: "Ma valise est lourde", exampleTranslation: "Moja walizka jest ciężka" },
      { id: "pf_travel_3", polish: "Paszport", french: "Passeport", example: "J'ai besoin de mon passeport", exampleTranslation: "Potrzebuję paszportu" },
      { id: "pf_travel_4", polish: "Hotel", french: "Hôtel", example: "L'hôtel est confortable", exampleTranslation: "Hotel jest wygodny" },
      { id: "pf_travel_5", polish: "Rezerwacja", french: "Réservation", example: "J'ai une réservation", exampleTranslation: "Mam rezerwację" },
      { id: "pf_travel_6", polish: "Turysta", french: "Touriste", example: "Je suis touriste", exampleTranslation: "Jestem turystą" },
      { id: "pf_travel_7", polish: "Wakacje", french: "Vacances", example: "Je suis en vacances", exampleTranslation: "Jestem na wakacjach" },
      { id: "pf_travel_8", polish: "Zwiedzanie", french: "Visite touristique", example: "Nous faisons une visite touristique", exampleTranslation: "Robimy zwiedzanie" },
      { id: "pf_travel_9", polish: "Przewodnik", french: "Guide", example: "Le guide est informatif", exampleTranslation: "Przewodnik jest pouczający" },
      { id: "pf_travel_10", polish: "Pamiątka", french: "Souvenir", example: "J'achète un souvenir", exampleTranslation: "Kupuję pamiątkę" }
    ]
  },

  entertainment: {
    name: "Rozrywka",
    description: "Czas wolny",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "pf_ent_1", polish: "Muzyka", french: "Musique", example: "J'écoute de la musique", exampleTranslation: "Słucham muzyki" },
      { id: "pf_ent_2", polish: "Film", french: "Film", example: "Je regarde un film", exampleTranslation: "Oglądam film" },
      { id: "pf_ent_3", polish: "Koncert", french: "Concert", example: "Je vais à un concert", exampleTranslation: "Idę na koncert" },
      { id: "pf_ent_4", polish: "Teatr", french: "Théâtre", example: "Je vais au théâtre", exampleTranslation: "Idę do teatru" },
      { id: "pf_ent_5", polish: "Tańczyć", french: "Danse", example: "J'aime danser", exampleTranslation: "Lubię tańczyć" },
      { id: "pf_ent_6", polish: "Śpiewać", french: "Chanter", example: "J'aime chanter", exampleTranslation: "Lubię śpiewać" },
      { id: "pf_ent_7", polish: "Gitara", french: "Guitare", example: "Je joue de la guitare", exampleTranslation: "Gram na gitarze" },
      { id: "pf_ent_8", polish: "Gry", french: "Jeux", example: "Je joue à des jeux vidéo", exampleTranslation: "Gram w gry wideo" },
      { id: "pf_ent_9", polish: "Fotografia", french: "Photographie", example: "Je m'intéresse à la photographie", exampleTranslation: "Interesuję się fotografią" },
      { id: "pf_ent_10", polish: "Czytanie", french: "Lecture", example: "La lecture est mon passe-temps", exampleTranslation: "Czytanie jest moim hobby" }
    ]
  }
};

export default flashcardsCategories;