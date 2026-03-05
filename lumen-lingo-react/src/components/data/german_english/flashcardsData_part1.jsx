import {
  ShoppingCart,
  Utensils,
  Phone,
  Heart,
  Stethoscope,
  Banknote,
  Plane,
  BookOpen,
  Dumbbell,
  Building2,
  Monitor,
  PaintBucket,
  CalendarDays,
  PartyPopper,
  Clock,
  Smile
} from "lucide-react";

export const flashcardsCategories_part1 = {
  shopping_retail: {
    name: "Einkaufen",
    description: "Einkaufen und Einzelhandel",
    icon: ShoppingCart,
    color: "from-emerald-500 to-teal-600",
    level: "beginner",
    words: [
      { id: "ge_shop_1", german: "Einkaufen", english: "Shopping", difficulty: "easy", example: "I love going shopping on weekends with my friends and family", exampleTranslation: "Ich gehe am Wochenende gerne mit Freunden und Familie einkaufen" },
      { id: "ge_shop_2", german: "Supermarkt", english: "Supermarket", difficulty: "easy", example: "The supermarket is open from early morning until late evening every day", exampleTranslation: "Der Supermarkt ist täglich von früh morgens bis spät abends geöffnet" },
      { id: "ge_shop_3", german: "Preis", english: "Price", difficulty: "easy", example: "What is the price of this beautiful item here in your store?", exampleTranslation: "Was ist der Preis für diesen schönen Artikel hier in Ihrem Geschäft?" },
      { id: "ge_shop_4", german: "Teuer", english: "Expensive", difficulty: "easy", example: "This designer jacket is too expensive for my budget right now", exampleTranslation: "Diese Designerjacke ist zu teuer für mein Budget im Moment" },
      { id: "ge_shop_5", german: "Billig", english: "Cheap", difficulty: "easy", example: "I found really cheap vegetables at the local farmers market yesterday", exampleTranslation: "Ich habe gestern wirklich billiges Gemüse auf dem örtlichen Bauernmarkt gefunden" },
      { id: "ge_shop_6", german: "Kasse", english: "Checkout", difficulty: "easy", example: "Please wait in line at the checkout counter to pay for your items", exampleTranslation: "Bitte warten Sie in der Schlange an der Kasse um Ihre Artikel zu bezahlen" },
      { id: "ge_shop_7", german: "Rabatt", english: "Discount", difficulty: "medium", example: "The store is offering a twenty percent discount on all summer clothing today", exampleTranslation: "Das Geschäft bietet heute zwanzig Prozent Rabatt auf alle Sommerkleidung" },
      { id: "ge_shop_8", german: "Einkaufswagen", english: "Shopping cart", difficulty: "medium", example: "I need to get a shopping cart because I have many groceries to buy", exampleTranslation: "Ich brauche einen Einkaufswagen weil ich viele Lebensmittel kaufen muss" },
      { id: "ge_shop_9", german: "Umkleidekabine", english: "Fitting room", difficulty: "medium", example: "Excuse me, where is the fitting room so I can try on these clothes?", exampleTranslation: "Entschuldigung, wo ist die Umkleidekabine damit ich diese Kleidung anprobieren kann?" },
      { id: "ge_shop_10", german: "Quittung", english: "Receipt", difficulty: "medium", example: "Always keep your receipt in case you need to return or exchange the product", exampleTranslation: "Bewahren Sie immer Ihre Quittung auf falls Sie das Produkt zurückgeben oder umtauschen müssen" },
      { id: "ge_shop_11", german: "Verkauf", english: "Sale", difficulty: "medium", example: "There is a huge sale happening this weekend with amazing discounts on everything", exampleTranslation: "Dieses Wochenende findet ein großer Verkauf mit fantastischen Rabatten auf alles statt" },
      { id: "ge_shop_12", german: "Tasche", english: "Bag", difficulty: "medium", example: "Do you need a plastic bag or did you bring your own reusable bag?", exampleTranslation: "Brauchen Sie eine Plastiktüte oder haben Sie Ihre eigene wiederverwendbare Tasche mitgebracht?" },
      { id: "ge_shop_13", german: "Kann ich das anprobieren?", english: "Can I try this on?", difficulty: "hard", example: "Excuse me, can I try this dress on in the fitting room please?", exampleTranslation: "Entschuldigung, kann ich dieses Kleid bitte in der Umkleidekabine anprobieren?" },
      { id: "ge_shop_14", german: "Gibt es das in einer anderen Größe?", english: "Do you have this in another size?", difficulty: "hard", example: "I really like this shirt but do you have this in a larger size available?", exampleTranslation: "Ich mag dieses Hemd wirklich aber gibt es das in einer größeren Größe?" },
      { id: "ge_shop_15", german: "Ich suche nach", english: "I'm looking for", difficulty: "hard", example: "Hello, I'm looking for comfortable running shoes for my morning exercises every day", exampleTranslation: "Hallo, ich suche nach bequemen Laufschuhen für meine morgendlichen Übungen jeden Tag" }
    ]
  },

  cooking_kitchen: {
    name: "Kochen und Küche",
    description: "Kochen und Küchenutensilien",
    icon: Utensils,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "ge_cook_1", german: "Kochen", english: "To cook", difficulty: "easy", example: "I love to cook delicious Italian pasta dishes for my family on Sunday evenings", exampleTranslation: "Ich koche am Sonntagabend gerne köstliche italienische Nudelgerichte für meine Familie" },
      { id: "ge_cook_2", german: "Rezept", english: "Recipe", difficulty: "easy", example: "This recipe for chocolate cake is very easy to follow with simple instructions", exampleTranslation: "Dieses Rezept für Schokoladenkuchen ist sehr einfach zu befolgen mit einfachen Anweisungen" },
      { id: "ge_cook_3", german: "Zutaten", english: "Ingredients", difficulty: "easy", example: "Make sure you have all the necessary ingredients before you start cooking anything", exampleTranslation: "Stellen Sie sicher dass Sie alle notwendigen Zutaten haben bevor Sie mit dem Kochen beginnen" },
      { id: "ge_cook_4", german: "Topf", english: "Pot", difficulty: "easy", example: "Put the vegetables in a large pot with boiling water and salt", exampleTranslation: "Geben Sie das Gemüse in einen großen Topf mit kochendem Wasser und Salz" },
      { id: "ge_cook_5", german: "Pfanne", english: "Pan", difficulty: "easy", example: "Heat the frying pan with oil before adding the eggs for breakfast", exampleTranslation: "Erhitzen Sie die Pfanne mit Öl bevor Sie die Eier zum Frühstück hinzufügen" },
      { id: "ge_cook_6", german: "Messer", english: "Knife", difficulty: "easy", example: "Use a sharp knife to cut the fresh vegetables carefully and safely", exampleTranslation: "Benutzen Sie ein scharfes Messer um das frische Gemüse vorsichtig und sicher zu schneiden" },
      { id: "ge_cook_7", german: "Schneiden", english: "To cut", difficulty: "medium", example: "Please cut the onions into small pieces before adding them to the soup", exampleTranslation: "Bitte schneiden Sie die Zwiebeln in kleine Stücke bevor Sie sie zur Suppe hinzufügen" },
      { id: "ge_cook_8", german: "Backen", english: "To bake", difficulty: "medium", example: "I want to bake a fresh apple pie for dessert this weekend afternoon", exampleTranslation: "Ich möchte an diesem Wochenendnachmittag einen frischen Apfelkuchen zum Nachtisch backen" },
      { id: "ge_cook_9", german: "Braten", english: "To fry", difficulty: "medium", example: "You should fry the chicken until it turns golden brown and crispy", exampleTranslation: "Sie sollten das Hähnchen braten bis es goldbraun und knusprig wird" },
      { id: "ge_cook_10", german: "Würzen", english: "To season", difficulty: "medium", example: "Don't forget to season the meat with salt pepper and your favorite spices", exampleTranslation: "Vergessen Sie nicht das Fleisch mit Salz Pfeffer und Ihren Lieblingsgewürzen zu würzen" },
      { id: "ge_cook_11", german: "Ofen", english: "Oven", difficulty: "medium", example: "Preheat the oven to one hundred eighty degrees before baking the cookies", exampleTranslation: "Heizen Sie den Ofen auf hundertachtzig Grad vor bevor Sie die Kekse backen" },
      { id: "ge_cook_12", german: "Kühlschrank", english: "Refrigerator", difficulty: "medium", example: "Please put the milk back in the refrigerator to keep it fresh and cold", exampleTranslation: "Bitte stellen Sie die Milch zurück in den Kühlschrank um sie frisch und kalt zu halten" },
      { id: "ge_cook_13", german: "Wie lange muss das kochen?", english: "How long does this need to cook?", difficulty: "hard", example: "Excuse me, how long does this pasta need to cook in boiling water?", exampleTranslation: "Entschuldigung, wie lange muss diese Pasta in kochendem Wasser kochen?" },
      { id: "ge_cook_14", german: "Das schmeckt fantastisch", english: "This tastes fantastic", difficulty: "hard", example: "Wow, this homemade lasagna tastes absolutely fantastic! What's your secret ingredient?", exampleTranslation: "Wow, diese hausgemachte Lasagne schmeckt absolut fantastisch! Was ist Ihre Geheimzutat?" },
      { id: "ge_cook_15", german: "Können Sie mir das Rezept geben?", english: "Can you give me the recipe?", difficulty: "hard", example: "This dessert is so delicious! Can you please give me the recipe so I can make it?", exampleTranslation: "Dieses Dessert ist so lecker! Können Sie mir bitte das Rezept geben damit ich es machen kann?" }
    ]
  },

  telecommunications: {
    name: "Telekommunikation",
    description: "Telefon und moderne Kommunikation",
    icon: Phone,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "ge_tel_1", german: "Telefon", english: "Telephone", difficulty: "easy", example: "My new smartphone has many useful features like camera internet and various applications", exampleTranslation: "Mein neues Smartphone hat viele nützliche Funktionen wie Kamera Internet und verschiedene Anwendungen" },
      { id: "ge_tel_2", german: "Anruf", english: "Phone call", difficulty: "easy", example: "I received an important phone call from my boss during the family meeting yesterday", exampleTranslation: "Ich erhielt gestern während des Familientreffens einen wichtigen Anruf von meinem Chef" },
      { id: "ge_tel_3", german: "Nachricht", english: "Message", difficulty: "easy", example: "I sent you a text message an hour ago but you still haven't responded yet", exampleTranslation: "Ich schickte dir vor einer Stunde eine Textnachricht aber du hast noch nicht geantwortet" },
      { id: "ge_tel_4", german: "Anrufen", english: "To call", difficulty: "easy", example: "I will call my mother tonight to tell her the important news about my job", exampleTranslation: "Ich werde heute Abend meine Mutter anrufen um ihr die wichtigen Neuigkeiten über meine Arbeit zu erzählen" },
      { id: "ge_tel_5", german: "Auflegen", english: "To hang up", difficulty: "easy", example: "I hung up the phone quickly because it was an annoying unsolicited sales call", exampleTranslation: "Ich legte schnell auf weil es ein lästiger unerwünschter Werbeanruf war" },
      { id: "ge_tel_6", german: "Mailbox", english: "Voicemail", difficulty: "easy", example: "I left a message on your voicemail explaining the urgent situation in detail", exampleTranslation: "Ich hinterließ eine Nachricht auf Ihrer Mailbox und erklärte die dringende Situation ausführlich" },
      { id: "ge_tel_7", german: "Videoanruf", english: "Video call", difficulty: "medium", example: "We have weekly video calls with family members living in another country abroad", exampleTranslation: "Wir haben wöchentliche Videoanrufe mit Familienmitgliedern die in einem anderen Land im Ausland leben" },
      { id: "ge_tel_8", german: "Rufnummer", english: "Phone number", difficulty: "medium", example: "Give me your new phone number so I can add you to my contacts easily", exampleTranslation: "Gib mir deine neue Rufnummer damit ich dich leicht zu meinen Kontakten hinzufügen kann" },
      { id: "ge_tel_9", german: "Besetzt", english: "Busy", difficulty: "medium", example: "The line is constantly busy because many people are trying to call customer service", exampleTranslation: "Die Leitung ist ständig besetzt weil viele Leute versuchen den Kundenservice anzurufen" },
      { id: "ge_tel_10", german: "Empfang", english: "Reception", difficulty: "medium", example: "I don't have good mobile phone reception in this remote mountainous area without towers", exampleTranslation: "Ich habe keinen guten Handyempfang in dieser abgelegenen bergigen Gegend ohne Türme" },
      { id: "ge_tel_11", german: "Roaming", english: "Roaming", difficulty: "medium", example: "International roaming charges can be very expensive when traveling abroad without a plan", exampleTranslation: "Internationale Roaming-Gebühren können sehr teuer sein wenn man ohne Plan ins Ausland reist" },
      { id: "ge_tel_12", german: "Klingeln", english: "To ring", difficulty: "medium", example: "My phone is ringing constantly with work calls even during my well-deserved vacation", exampleTranslation: "Mein Telefon klingelt ständig mit Arbeitsanrufen sogar während meines wohlverdienten Urlaubs" },
      { id: "ge_tel_13", german: "Kannst du mich hören?", english: "Can you hear me?", difficulty: "hard", example: "Can you hear me well? There is a lot of background noise and the connection seems weak!", exampleTranslation: "Kannst du mich gut hören? Es gibt viel Hintergrundgeräusche und die Verbindung scheint schwach!" },
      { id: "ge_tel_14", german: "Verbindung unterbrochen", english: "Call dropped", difficulty: "hard", example: "The important call dropped in the middle of our crucial conversation! I need to call back immediately!", exampleTranslation: "Der wichtige Anruf wurde mitten in unserem entscheidenden Gespräch unterbrochen! Ich muss sofort zurückrufen!" },
      { id: "ge_tel_15", german: "Erreichbarkeit", english: "Availability", difficulty: "hard", example: "My phone availability is limited during meetings but I always check messages afterwards to respond quickly!", exampleTranslation: "Meine telefonische Erreichbarkeit ist während Meetings begrenzt aber ich checke danach immer Nachrichten um schnell zu antworten!" }
    ]
  },

  relationships_love: {
    name: "Beziehungen und Liebe",
    description: "Romantische Beziehungen und Partnerschaft",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "ge_love_1", german: "Liebe", english: "Love", difficulty: "easy", example: "True love is patient kind and grows stronger with each passing year together", exampleTranslation: "Wahre Liebe ist geduldig freundlich und wird mit jedem gemeinsamen Jahr stärker" },
      { id: "ge_love_2", german: "Freund", english: "Boyfriend", difficulty: "easy", example: "My boyfriend surprised me with beautiful flowers and a romantic dinner last night", exampleTranslation: "Mein Freund überraschte mich letzte Nacht mit schönen Blumen und einem romantischen Abendessen" },
      { id: "ge_love_3", german: "Freundin", english: "Girlfriend", difficulty: "easy", example: "I'm going to the cinema with my girlfriend to watch the new romantic comedy movie", exampleTranslation: "Ich gehe mit meiner Freundin ins Kino um den neuen romantischen Komödienfilm zu sehen" },
      { id: "ge_love_4", german: "Ehemann", english: "Husband", difficulty: "easy", example: "My husband always helps me with household chores and taking care of our children", exampleTranslation: "Mein Ehemann hilft mir immer bei der Hausarbeit und bei der Betreuung unserer Kinder" },
      { id: "ge_love_5", german: "Ehefrau", english: "Wife", difficulty: "easy", example: "My wife is my best friend and the most important person in my entire life", exampleTranslation: "Meine Ehefrau ist meine beste Freundin und die wichtigste Person in meinem ganzen Leben" },
      { id: "ge_love_6", german: "Verlobte", english: "Fiancée", difficulty: "easy", example: "I proposed to my beautiful fiancée last month during our vacation in Paris France", exampleTranslation: "Ich habe meiner schönen Verlobten letzten Monat während unseres Urlaubs in Paris Frankreich einen Antrag gemacht" },
      { id: "ge_love_7", german: "Hochzeit", english: "Wedding", difficulty: "medium", example: "Our wedding ceremony will take place next summer in a beautiful garden with close friends", exampleTranslation: "Unsere Hochzeitszeremonie findet nächsten Sommer in einem schönen Garten mit engen Freunden statt" },
      { id: "ge_love_8", german: "Romantisch", english: "Romantic", difficulty: "medium", example: "He planned a very romantic surprise dinner with candles flowers and soft music", exampleTranslation: "Er plante ein sehr romantisches Überraschungsessen mit Kerzen Blumen und sanfter Musik" },
      { id: "ge_love_9", german: "Vertrauen", english: "Trust", difficulty: "medium", example: "Trust is the foundation of any healthy relationship built over time with honesty", exampleTranslation: "Vertrauen ist die Grundlage jeder gesunden Beziehung die im Laufe der Zeit mit Ehrlichkeit aufgebaut wird" },
      { id: "ge_love_10", german: "Eifersucht", english: "Jealousy", difficulty: "medium", example: "Jealousy can destroy good relationships if you don't communicate openly with your partner", exampleTranslation: "Eifersucht kann gute Beziehungen zerstören wenn man nicht offen mit seinem Partner kommuniziert" },
      { id: "ge_love_11", german: "Trennung", english: "Breakup", difficulty: "medium", example: "The breakup was difficult but we both agreed it was the best decision for us", exampleTranslation: "Die Trennung war schwierig aber wir waren uns beide einig dass es die beste Entscheidung für uns war" },
      { id: "ge_love_12", german: "Flitterwochen", english: "Honeymoon", difficulty: "medium", example: "We are planning our romantic honeymoon vacation to tropical islands in the Caribbean sea", exampleTranslation: "Wir planen unsere romantischen Flitterwochen auf tropischen Inseln in der Karibik" },
      { id: "ge_love_13", german: "Ich liebe dich", english: "I love you", difficulty: "hard", example: "I love you more than anything in this world and I want to spend my life with you!", exampleTranslation: "Ich liebe dich mehr als alles auf dieser Welt und ich möchte mein Leben mit dir verbringen!" },
      { id: "ge_love_14", german: "Willst du mich heiraten?", english: "Will you marry me?", difficulty: "hard", example: "Will you marry me and make me the happiest person alive? I promise to love you forever!", exampleTranslation: "Willst du mich heiraten und mich zum glücklichsten Menschen machen? Ich verspreche dich für immer zu lieben!" },
      { id: "ge_love_15", german: "Seelenverwandte", english: "Soulmate", difficulty: "hard", example: "I truly believe you are my soulmate the one person meant for me in this entire universe!", exampleTranslation: "Ich glaube wirklich du bist meine Seelenverwandte die eine Person die für mich in diesem ganzen Universum bestimmt ist!" }
    ]
  },

  health_medical: {
    name: "Gesundheit und Medizin",
    description: "Medizinische Begriffe und Gesundheit",
    icon: Stethoscope,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "ge_med_1", german: "Arzt", english: "Doctor", difficulty: "easy", example: "I need to see a doctor because I have been feeling sick for several days now", exampleTranslation: "Ich muss einen Arzt aufsuchen weil ich mich seit mehreren Tagen krank fühle" },
      { id: "ge_med_2", german: "Krankenhaus", english: "Hospital", difficulty: "easy", example: "The modern hospital has advanced medical equipment and experienced specialized doctors treating patients", exampleTranslation: "Das moderne Krankenhaus hat fortschrittliche medizinische Ausrüstung und erfahrene Fachärzte die Patienten behandeln" },
      { id: "ge_med_3", german: "Medikament", english: "Medicine", difficulty: "easy", example: "Take this medicine three times a day after meals with a glass of water", exampleTranslation: "Nehmen Sie dieses Medikament dreimal täglich nach den Mahlzeiten mit einem Glas Wasser ein" },
      { id: "ge_med_4", german: "Schmerzen", english: "Pain", difficulty: "easy", example: "I have terrible pain in my back and I cannot move or walk properly anymore", exampleTranslation: "Ich habe schreckliche Schmerzen im Rücken und kann mich nicht mehr richtig bewegen oder gehen" },
      { id: "ge_med_5", german: "Fieber", english: "Fever", difficulty: "easy", example: "The child has a high fever and needs to rest in bed drinking lots of fluids", exampleTranslation: "Das Kind hat hohes Fieber und muss im Bett ruhen und viel Flüssigkeit trinken" },
      { id: "ge_med_6", german: "Erkältung", english: "Cold", difficulty: "easy", example: "I caught a bad cold and now I have a runny nose cough and sore throat", exampleTranslation: "Ich habe mir eine schlimme Erkältung eingefangen und habe jetzt eine laufende Nase Husten und Halsschmerzen" },
      { id: "ge_med_7", german: "Apotheke", english: "Pharmacy", difficulty: "medium", example: "You can buy pain relief medication at any pharmacy without needing a doctor's prescription", exampleTranslation: "Sie können schmerzlindernde Medikamente in jeder Apotheke ohne ärztliche Verschreibung kaufen" },
      { id: "ge_med_8", german: "Rezept", english: "Prescription", difficulty: "medium", example: "The doctor wrote me a prescription for antibiotics to treat my bacterial infection properly", exampleTranslation: "Der Arzt schrieb mir ein Rezept für Antibiotika um meine bakterielle Infektion richtig zu behandeln" },
      { id: "ge_med_9", german: "Behandlung", english: "Treatment", difficulty: "medium", example: "The medical treatment for this chronic disease requires daily medication and regular monthly checkups", exampleTranslation: "Die medizinische Behandlung für diese chronische Krankheit erfordert tägliche Medikamente und regelmäßige monatliche Untersuchungen" },
      { id: "ge_med_10", german: "Untersuchung", english: "Examination", difficulty: "medium", example: "I have a medical examination scheduled for tomorrow morning at nine o'clock sharp", exampleTranslation: "Ich habe morgen früh um Punkt neun Uhr eine ärztliche Untersuchung geplant" },
      { id: "ge_med_11", german: "Notfall", english: "Emergency", difficulty: "medium", example: "In case of a medical emergency dial the emergency number immediately for help", exampleTranslation: "Im Falle eines medizinischen Notfalls wählen Sie sofort die Notrufnummer um Hilfe zu erhalten" },
      { id: "ge_med_12", german: "Gesund", english: "Healthy", difficulty: "medium", example: "Eating healthy food and exercising regularly helps you stay healthy and strong throughout life", exampleTranslation: "Gesundes Essen und regelmäßige Bewegung helfen Ihnen ein Leben lang gesund und stark zu bleiben" },
      { id: "ge_med_13", german: "Mir ist schlecht", english: "I feel sick", difficulty: "hard", example: "I feel really sick and dizzy! I think the food was spoiled and I need to see a doctor!", exampleTranslation: "Mir ist wirklich schlecht und schwindlig! Ich glaube das Essen war verdorben und ich muss einen Arzt aufsuchen!" },
      { id: "ge_med_14", german: "Ich brauche einen Arzt", english: "I need a doctor", difficulty: "hard", example: "I urgently need a doctor! I have worrying symptoms that are getting rapidly worse and need immediate attention!", exampleTranslation: "Ich brauche dringend einen Arzt! Ich habe besorgniserregende Symptome die sich schnell verschlimmern und brauche sofortige Hilfe!" },
      { id: "ge_med_15", german: "Krankenversicherung", english: "Health insurance", difficulty: "hard", example: "Make sure you have valid health insurance coverage before traveling to foreign countries for medical emergencies!", exampleTranslation: "Stellen Sie sicher dass Sie eine gültige Krankenversicherung haben bevor Sie für medizinische Notfälle ins Ausland reisen!" }
    ]
  },

  money_banking: {
    name: "Geld und Banking",
    description: "Finanzen und Bankgeschäfte",
    icon: Banknote,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "ge_bank_1", german: "Geld", english: "Money", difficulty: "easy", example: "I need to save more money for my future plans and important life goals", exampleTranslation: "Ich muss mehr Geld für meine Zukunftspläne und wichtigen Lebensziele sparen" },
      { id: "ge_bank_2", german: "Bank", english: "Bank", difficulty: "easy", example: "I go to the bank every week to deposit my paycheck into my checking account", exampleTranslation: "Ich gehe jede Woche zur Bank um meinen Gehaltsscheck auf mein Girokonto einzuzahlen" },
      { id: "ge_bank_3", german: "Konto", english: "Account", difficulty: "easy", example: "I opened a new savings account at the bank to save money for future expenses", exampleTranslation: "Ich eröffnete ein neues Sparkonto bei der Bank um Geld für zukünftige Ausgaben zu sparen" },
      { id: "ge_bank_4", german: "Geldautomat", english: "ATM", difficulty: "easy", example: "I withdraw cash from the ATM machine using my bank card whenever I need money quickly", exampleTranslation: "Ich hebe Geld am Geldautomaten mit meiner Bankkarte ab wann immer ich schnell Geld brauche" },
      { id: "ge_bank_5", german: "Kreditkarte", english: "Credit card", difficulty: "easy", example: "I use my credit card for large online purchases because it offers protection and rewards points", exampleTranslation: "Ich benutze meine Kreditkarte für große Online-Einkäufe weil sie Schutz und Prämienpunkte bietet" },
      { id: "ge_bank_6", german: "Bargeld", english: "Cash", difficulty: "easy", example: "Do you prefer to pay with cash or would you rather use your credit card instead?", exampleTranslation: "Zahlen Sie lieber mit Bargeld oder möchten Sie stattdessen Ihre Kreditkarte verwenden?" },
      { id: "ge_bank_7", german: "Überweisung", english: "Transfer", difficulty: "medium", example: "I made a bank transfer to pay my rent to the landlord on the first of the month", exampleTranslation: "Ich habe eine Banküberweisung gemacht um meine Miete am Ersten des Monats an den Vermieter zu zahlen" },
      { id: "ge_bank_8", german: "Zinsen", english: "Interest", difficulty: "medium", example: "The interest rates on savings accounts are very low but the money is safe and protected", exampleTranslation: "Die Zinsen auf Sparkonten sind sehr niedrig aber das Geld ist sicher und geschützt" },
      { id: "ge_bank_9", german: "Schulden", english: "Debt", difficulty: "medium", example: "I'm trying to pay off all my debts as quickly as possible to be financially free", exampleTranslation: "Ich versuche alle meine Schulden so schnell wie möglich abzubezahlen um finanziell frei zu sein" },
      { id: "ge_bank_10", german: "Sparen", english: "To save", difficulty: "medium", example: "It's important to save at least twenty percent of your monthly income for emergencies", exampleTranslation: "Es ist wichtig mindestens zwanzig Prozent Ihres monatlichen Einkommens für Notfälle zu sparen" },
      { id: "ge_bank_11", german: "Wechselkurs", english: "Exchange rate", difficulty: "medium", example: "Check the current exchange rate before exchanging your money to get the best deal possible", exampleTranslation: "Überprüfen Sie den aktuellen Wechselkurs bevor Sie Ihr Geld umtauschen um das bestmögliche Angebot zu erhalten" },
      { id: "ge_bank_12", german: "Gebühr", english: "Fee", difficulty: "medium", example: "This bank charges high monthly fees for maintaining a basic checking account unfortunately", exampleTranslation: "Diese Bank erhebt leider hohe monatliche Gebühren für die Führung eines einfachen Girokontos" },
      { id: "ge_bank_13", german: "Ich möchte Geld abheben", english: "I want to withdraw money", difficulty: "hard", example: "Excuse me, I want to withdraw five hundred dollars from my checking account right now please!", exampleTranslation: "Entschuldigung, ich möchte bitte jetzt sofort fünfhundert Dollar von meinem Girokonto abheben!" },
      { id: "ge_bank_14", german: "Kontostand", english: "Account balance", difficulty: "hard", example: "I check my account balance frequently using the mobile banking app to track my spending habits!", exampleTranslation: "Ich überprüfe häufig meinen Kontostand mit der mobilen Banking-App um meine Ausgabegewohnheiten zu verfolgen!" },
      { id: "ge_bank_15", german: "Finanzielle Sicherheit", english: "Financial security", difficulty: "hard", example: "Financial security comes from smart budgeting saving regularly and making wise investment decisions over time!", exampleTranslation: "Finanzielle Sicherheit kommt von kluger Budgetierung regelmäßigem Sparen und weisen Investitionsentscheidungen im Laufe der Zeit!" }
    ]
  },

  travel_tourism: {
    name: "Reisen und Tourismus",
    description: "Reisen und touristische Aktivitäten",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "ge_travel_1", german: "Reise", english: "Trip", difficulty: "easy", example: "I'm planning an exciting trip to Europe to visit several different countries this summer", exampleTranslation: "Ich plane diesen Sommer eine aufregende Reise nach Europa um mehrere verschiedene Länder zu besuchen" },
      { id: "ge_travel_2", german: "Flughafen", english: "Airport", difficulty: "easy", example: "We need to arrive at the airport at least two hours before our international flight departs", exampleTranslation: "Wir müssen mindestens zwei Stunden vor Abflug unseres internationalen Fluges am Flughafen ankommen" },
      { id: "ge_travel_3", german: "Hotel", english: "Hotel", difficulty: "easy", example: "I booked a nice hotel room with an amazing ocean view for our romantic vacation", exampleTranslation: "Ich buchte ein schönes Hotelzimmer mit fantastischem Meerblick für unseren romantischen Urlaub" },
      { id: "ge_travel_4", german: "Koffer", english: "Suitcase", difficulty: "easy", example: "I packed my suitcase with clothes shoes and everything I need for the two week trip", exampleTranslation: "Ich packte meinen Koffer mit Kleidung Schuhen und allem was ich für die zweiwöchige Reise brauche" },
      { id: "ge_travel_5", german: "Reisepass", english: "Passport", difficulty: "easy", example: "Don't forget your passport when traveling internationally or you won't be allowed to board", exampleTranslation: "Vergessen Sie nicht Ihren Reisepass wenn Sie international reisen sonst dürfen Sie nicht einsteigen" },
      { id: "ge_travel_6", german: "Ticket", english: "Ticket", difficulty: "easy", example: "I purchased plane tickets online and received the electronic confirmation by email immediately", exampleTranslation: "Ich kaufte Flugtickets online und erhielt sofort die elektronische Bestätigung per E-Mail" },
      { id: "ge_travel_7", german: "Sehenswürdigkeiten", english: "Sights", difficulty: "medium", example: "We visited all the famous sights and historical monuments during our city tour yesterday", exampleTranslation: "Wir besuchten gestern während unserer Stadttour alle berühmten Sehenswürdigkeiten und historischen Denkmäler" },
      { id: "ge_travel_8", german: "Reiseführer", english: "Tour guide", difficulty: "medium", example: "Our knowledgeable tour guide explained the fascinating history of the ancient castle in great detail", exampleTranslation: "Unser sachkundiger Reiseführer erklärte sehr ausführlich die faszinierende Geschichte des alten Schlosses" },
      { id: "ge_travel_9", german: "Ausflug", english: "Excursion", difficulty: "medium", example: "We went on an organized excursion to the beautiful mountains and enjoyed breathtaking scenic views", exampleTranslation: "Wir machten einen organisierten Ausflug in die schönen Berge und genossen atemberaubende malerische Aussichten" },
      { id: "ge_travel_10", german: "Stadtplan", english: "City map", difficulty: "medium", example: "I always carry a detailed city map when exploring new places to avoid getting lost", exampleTranslation: "Ich trage immer einen detaillierten Stadtplan bei mir wenn ich neue Orte erkunde um mich nicht zu verlaufen" },
      { id: "ge_travel_11", german: "Gepäck", english: "Luggage", difficulty: "medium", example: "Make sure all your luggage is properly labeled with your name and contact information clearly", exampleTranslation: "Stellen Sie sicher dass Ihr gesamtes Gepäck ordnungsgemäß mit Ihrem Namen und Kontaktinformationen beschriftet ist" },
      { id: "ge_travel_12", german: "Buchung", english: "Booking", difficulty: "medium", example: "I made a hotel booking online for three nights including breakfast for two people", exampleTranslation: "Ich machte online eine Hotelbuchung für drei Nächte inklusive Frühstück für zwei Personen" },
      { id: "ge_travel_13", german: "Wo ist der Bahnhof?", english: "Where is the train station?", difficulty: "hard", example: "Excuse me, where is the nearest train station? I need to catch the next train to Berlin!", exampleTranslation: "Entschuldigung, wo ist der nächste Bahnhof? Ich muss den nächsten Zug nach Berlin erwischen!" },
      { id: "ge_travel_14", german: "Ich habe mich verlaufen", english: "I'm lost", difficulty: "hard", example: "I'm completely lost! Can you please help me find my way back to the main square?", exampleTranslation: "Ich habe mich völlig verlaufen! Können Sie mir bitte helfen den Weg zurück zum Hauptplatz zu finden?" },
      { id: "ge_travel_15", german: "Fremdenverkehrsbüro", english: "Tourist information office", difficulty: "hard", example: "The tourist information office provides free maps brochures and helpful advice about local attractions and events!", exampleTranslation: "Das Fremdenverkehrsbüro bietet kostenlose Karten Broschüren und hilfreiche Ratschläge zu lokalen Sehenswürdigkeiten und Veranstaltungen!" }
    ]
  },

  literature_reading: {
    name: "Literatur und Lesen",
    description: "Bücher und literarisches Schaffen",
    icon: BookOpen,
    color: "from-purple-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "ge_lit_1", german: "Buch", english: "Book", difficulty: "easy", example: "I read interesting books every night before sleeping to relax with fascinating captivating stories", exampleTranslation: "Ich lese jeden Abend vor dem Schlafengehen interessante Bücher um mich mit faszinierenden fesselnden Geschichten zu entspannen" },
      { id: "ge_lit_2", german: "Roman", english: "Novel", difficulty: "easy", example: "This historical novel transports readers to past eras with detailed vivid descriptions of life", exampleTranslation: "Dieser historische Roman transportiert Leser mit detaillierten lebendigen Beschreibungen des Lebens in vergangene Epochen" },
      { id: "ge_lit_3", german: "Autor", english: "Author", difficulty: "easy", example: "The famous author wrote more than twenty bestselling novels translated into fifty languages worldwide", exampleTranslation: "Der berühmte Autor schrieb mehr als zwanzig Bestseller-Romane übersetzt in fünfzig Sprachen weltweit" },
      { id: "ge_lit_4", german: "Kapitel", english: "Chapter", difficulty: "easy", example: "This exciting chapter ends with incredible suspense leaving me eager to read the next one", exampleTranslation: "Dieses spannende Kapitel endet mit unglaublicher Spannung und macht mich begierig darauf das nächste zu lesen" },
      { id: "ge_lit_5", german: "Geschichte", english: "Story", difficulty: "easy", example: "My grandmother used to tell me wonderful bedtime stories when I was a young child", exampleTranslation: "Meine Großmutter erzählte mir wundervolle Gutenachtgeschichten als ich ein kleines Kind war" },
      { id: "ge_lit_6", german: "Gedicht", english: "Poem", difficulty: "easy", example: "Romantic poems express deep feelings of love using beautiful metaphors and musical rhythm beautifully", exampleTranslation: "Romantische Gedichte drücken tiefe Gefühle der Liebe schön mit wunderschönen Metaphern und musikalischem Rhythmus aus" },
      { id: "ge_lit_7", german: "Bibliothek", english: "Library", difficulty: "medium", example: "I spend hours at the public library reading books and studying in the quiet peaceful environment", exampleTranslation: "Ich verbringe Stunden in der öffentlichen Bibliothek beim Lesen von Büchern und Lernen in der ruhigen friedlichen Umgebung" },
      { id: "ge_lit_8", german: "Buchladen", english: "Bookstore", difficulty: "medium", example: "I love browsing through the local independent bookstore discovering new titles and hidden literary treasures", exampleTranslation: "Ich liebe es durch den örtlichen unabhängigen Buchladen zu stöbern und neue Titel und verborgene literarische Schätze zu entdecken" },
      { id: "ge_lit_9", german: "Handlung", english: "Plot", difficulty: "medium", example: "The plot of this mystery novel is complex and intriguing with unexpected twists that constantly surprise", exampleTranslation: "Die Handlung dieses Kriminalromans ist komplex und fesselnd mit unerwarteten Wendungen die ständig überraschen" },
      { id: "ge_lit_10", german: "Hauptfigur", english: "Main character", difficulty: "medium", example: "The main character of the story faces difficult challenges that transform him and make him grow", exampleTranslation: "Die Hauptfigur der Geschichte steht schwierigen Herausforderungen gegenüber die ihn verwandeln und wachsen lassen" },
      { id: "ge_lit_11", german: "Verlag", english: "Publisher", difficulty: "medium", example: "The prestigious publisher publishes works by recognized authors and promising emerging new literary talents", exampleTranslation: "Der renommierte Verlag veröffentlicht Werke anerkannter Autoren und vielversprechender aufstrebender neuer literarischer Talente" },
      { id: "ge_lit_12", german: "Lesezeichen", english: "Bookmark", difficulty: "medium", example: "I use a beautiful bookmark to remember where I stopped reading without folding the pages", exampleTranslation: "Ich benutze ein schönes Lesezeichen um mich daran zu erinnern wo ich aufgehört habe zu lesen ohne die Seiten zu knicken" },
      { id: "ge_lit_13", german: "Was liest du gerade?", english: "What are you reading?", difficulty: "hard", example: "What interesting book are you currently reading? I would love a recommendation for something good to read!", exampleTranslation: "Welches interessante Buch liest du gerade? Ich würde mich über eine Empfehlung für etwas Gutes zum Lesen freuen!" },
      { id: "ge_lit_14", german: "Ich kann es nicht aus der Hand legen", english: "I can't put it down", difficulty: "hard", example: "This thriller is so captivating and suspenseful that I can't put it down until I finish it!", exampleTranslation: "Dieser Thriller ist so fesselnd und spannend dass ich ihn nicht aus der Hand legen kann bis ich ihn beende!" },
      { id: "ge_lit_15", german: "Literarische Bildung", english: "Literary education", difficulty: "hard", example: "A broad literary education enriches the mind expanding vocabulary perspectives and understanding of the human world!", exampleTranslation: "Eine breite literarische Bildung bereichert den Geist erweitert Vokabular Perspektiven und Verständnis der menschlichen Welt!" }
    ]
  },

  sports_fitness: {
    name: "Sport und Fitness",
    description: "Sportaktivitäten und körperliche Fitness",
    icon: Dumbbell,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { id: "ge_sport_1", german: "Sport", english: "Sport", difficulty: "easy", example: "Playing sports regularly is excellent for your physical health and mental wellbeing overall", exampleTranslation: "Regelmäßig Sport zu treiben ist ausgezeichnet für Ihre körperliche Gesundheit und Ihr allgemeines geistiges Wohlbefinden" },
      { id: "ge_sport_2", german: "Fußball", english: "Football", difficulty: "easy", example: "Football is the most popular sport in the world played by millions of passionate fans", exampleTranslation: "Fußball ist die beliebteste Sportart der Welt gespielt von Millionen leidenschaftlicher Fans" },
      { id: "ge_sport_3", german: "Laufen", english: "Running", difficulty: "easy", example: "I go running in the park every morning for thirty minutes to stay healthy and fit", exampleTranslation: "Ich gehe jeden Morgen dreißig Minuten im Park laufen um gesund und fit zu bleiben" },
      { id: "ge_sport_4", german: "Schwimmen", english: "Swimming", difficulty: "easy", example: "Swimming is a great full-body workout that improves cardiovascular health and builds muscle strength", exampleTranslation: "Schwimmen ist ein großartiges Ganzkörpertraining das die kardiovaskuläre Gesundheit verbessert und Muskelkraft aufbaut" },
      { id: "ge_sport_5", german: "Fitnessstudio", english: "Gym", difficulty: "easy", example: "I go to the gym three times a week to exercise lift weights and stay in good shape", exampleTranslation: "Ich gehe dreimal pro Woche ins Fitnessstudio um zu trainieren Gewichte zu heben und in guter Form zu bleiben" },
      { id: "ge_sport_6", german: "Training", english: "Training", difficulty: "easy", example: "Consistent training and dedication are essential if you want to achieve your fitness goals successfully", exampleTranslation: "Konsequentes Training und Hingabe sind unerlässlich wenn Sie Ihre Fitnessziele erfolgreich erreichen möchten" },
      { id: "ge_sport_7", german: "Mannschaft", english: "Team", difficulty: "medium", example: "Our team won the championship by playing exceptionally well together throughout the entire season", exampleTranslation: "Unsere Mannschaft gewann die Meisterschaft indem sie die ganze Saison über außergewöhnlich gut zusammenspielte" },
      { id: "ge_sport_8", german: "Spieler", english: "Player", difficulty: "medium", example: "The talented player trains daily for many hours perfecting his technical sports skills constantly", exampleTranslation: "Der talentierte Spieler trainiert täglich viele Stunden um seine technischen sportlichen Fähigkeiten ständig zu perfektionieren" },
      { id: "ge_sport_9", german: "Wettkampf", english: "Competition", difficulty: "medium", example: "The international sports competition brings athletes from all over the world competing for medals", exampleTranslation: "Der internationale Sportwettkampf bringt Athleten aus der ganzen Welt zusammen die um Medaillen konkurrieren" },
      { id: "ge_sport_10", german: "Sieg", english: "Victory", difficulty: "medium", example: "The national team's victory was celebrated with joy by millions of enthusiastic passionate fans", exampleTranslation: "Der Sieg der Nationalmannschaft wurde von Millionen enthusiastischer leidenschaftlicher Fans mit Freude gefeiert" },
      { id: "ge_sport_11", german: "Niederlage", english: "Defeat", difficulty: "medium", example: "I learned more from my defeats than from my victories by reflecting on mistakes and improving", exampleTranslation: "Ich lernte mehr aus meinen Niederlagen als aus meinen Siegen durch Reflexion über Fehler und Verbesserung" },
      { id: "ge_sport_12", german: "Aufwärmen", english: "Warm up", difficulty: "medium", example: "Always warm up properly before intense exercise to prevent injuries and prepare your muscles safely", exampleTranslation: "Wärmen Sie sich vor intensivem Training immer richtig auf um Verletzungen vorzubeugen und Ihre Muskeln sicher vorzubereiten" },
      { id: "ge_sport_13", german: "Ich bin außer Atem", english: "I'm out of breath", difficulty: "hard", example: "I'm completely out of breath after running five kilometers! I need to rest and drink water now!", exampleTranslation: "Ich bin völlig außer Atem nach fünf Kilometern Laufen! Ich muss mich jetzt ausruhen und Wasser trinken!" },
      { id: "ge_sport_14", german: "Muskelkater", english: "Muscle soreness", difficulty: "hard", example: "I have terrible muscle soreness today because I exercised too hard at the gym yesterday evening!", exampleTranslation: "Ich habe heute schrecklichen Muskelkater weil ich gestern Abend im Fitnessstudio zu hart trainiert habe!" },
      { id: "ge_sport_15", german: "Körperliche Fitness", english: "Physical fitness", difficulty: "hard", example: "Maintaining good physical fitness requires regular exercise balanced nutrition and adequate rest every single day!", exampleTranslation: "Gute körperliche Fitness aufrechtzuerhalten erfordert jeden einzelnen Tag regelmäßige Bewegung ausgewogene Ernährung und ausreichend Ruhe!" }
    ]
  },

  technology_computers: {
    name: "Technologie und Computer",
    description: "Computertechnologie und digitale Welt",
    icon: Monitor,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "ge_tech_1", german: "Computer", english: "Computer", difficulty: "easy", example: "I use my powerful computer every day for work studies and entertainment purposes", exampleTranslation: "Ich benutze meinen leistungsstarken Computer jeden Tag für Arbeit Studium und Unterhaltungszwecke" },
      { id: "ge_tech_2", german: "Internet", english: "Internet", difficulty: "easy", example: "The internet has revolutionized how we communicate work and access information globally nowadays", exampleTranslation: "Das Internet hat revolutioniert wie wir heutzutage global kommunizieren arbeiten und auf Informationen zugreifen" },
      { id: "ge_tech_3", german: "E-Mail", english: "Email", difficulty: "easy", example: "Please send me an email with all the important documents attached as PDF files", exampleTranslation: "Bitte senden Sie mir eine E-Mail mit allen wichtigen Dokumenten als PDF-Dateien angehängt" },
      { id: "ge_tech_4", german: "Webseite", english: "Website", difficulty: "easy", example: "Our company website provides detailed information about all our products and services offered", exampleTranslation: "Unsere Firmenwebseite bietet detaillierte Informationen über alle unsere angebotenen Produkte und Dienstleistungen" },
      { id: "ge_tech_5", german: "Passwort", english: "Password", difficulty: "easy", example: "Create a strong secure password with letters numbers and special characters for better security", exampleTranslation: "Erstellen Sie ein starkes sicheres Passwort mit Buchstaben Zahlen und Sonderzeichen für bessere Sicherheit" },
      { id: "ge_tech_6", german: "Datei", english: "File", difficulty: "easy", example: "I need to save this important file on my computer before the power goes out suddenly", exampleTranslation: "Ich muss diese wichtige Datei auf meinem Computer speichern bevor der Strom plötzlich ausfällt" },
      { id: "ge_tech_7", german: "Herunterladen", english: "To download", difficulty: "medium", example: "You can download the free application from the official store on your mobile phone easily", exampleTranslation: "Sie können die kostenlose Anwendung einfach aus dem offiziellen Store auf Ihr Mobiltelefon herunterladen" },
      { id: "ge_tech_8", german: "Hochladen", english: "To upload", difficulty: "medium", example: "I need to upload these important photos to the cloud storage for safe backup purposes", exampleTranslation: "Ich muss diese wichtigen Fotos für sichere Backup-Zwecke in den Cloud-Speicher hochladen" },
      { id: "ge_tech_9", german: "Software", english: "Software", difficulty: "medium", example: "The latest software update includes important security improvements and exciting new features for users", exampleTranslation: "Das neueste Software-Update enthält wichtige Sicherheitsverbesserungen und aufregende neue Funktionen für Benutzer" },
      { id: "ge_tech_10", german: "Tastatur", english: "Keyboard", difficulty: "medium", example: "I prefer using a mechanical keyboard because it's more comfortable for typing long texts", exampleTranslation: "Ich bevorzuge die Verwendung einer mechanischen Tastatur weil sie bequemer zum Tippen langer Texte ist" },
      { id: "ge_tech_11", german: "Bildschirm", english: "Screen", difficulty: "medium", example: "The high resolution screen displays sharp images with vibrant colors and incredible fine details", exampleTranslation: "Der hochauflösende Bildschirm zeigt scharfe Bilder mit lebendigen Farben und unglaublich feinen Details" },
      { id: "ge_tech_12", german: "Speicher", english: "Storage", difficulty: "medium", example: "I need more storage space to save all my photos videos and important work documents", exampleTranslation: "Ich brauche mehr Speicherplatz um all meine Fotos Videos und wichtigen Arbeitsdokumente zu speichern" },
      { id: "ge_tech_13", german: "Der Computer stürzt ab", english: "The computer crashes", difficulty: "hard", example: "The computer crashes constantly! I think it has a virus or a serious hardware problem!", exampleTranslation: "Der Computer stürzt ständig ab! Ich glaube er hat einen Virus oder ein ernsthaftes Hardwareproblem!" },
      { id: "ge_tech_14", german: "Ich habe mein Passwort vergessen", english: "I forgot my password", difficulty: "hard", example: "I forgot my password! Can you help me reset it so I can access my account again?", exampleTranslation: "Ich habe mein Passwort vergessen! Können Sie mir helfen es zurückzusetzen damit ich wieder auf mein Konto zugreifen kann?" },
      { id: "ge_tech_15", german: "Digitale Kompetenz", english: "Digital literacy", difficulty: "hard", example: "Modern digital literacy includes technical skills online security and responsible ethical use of technology effectively!", exampleTranslation: "Moderne digitale Kompetenz umfasst technische Fähigkeiten Online-Sicherheit und verantwortungsvollen ethischen Einsatz von Technologie effektiv!" }
    ]
  },

  hobbies_leisure: {
    name: "Hobbys und Freizeit",
    description: "Freizeitbeschäftigungen und Hobbys",
    icon: PaintBucket,
    color: "from-fuchsia-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "ge_hobby_1", german: "Hobby", english: "Hobby", difficulty: "easy", example: "My favorite hobby is photography capturing special beautiful moments and natural scenic landscapes", exampleTranslation: "Mein Lieblingshobby ist Fotografie beim Einfangen besonderer schöner Momente und natürlicher malerischer Landschaften" },
      { id: "ge_hobby_2", german: "Freizeit", english: "Free time", difficulty: "easy", example: "I enjoy spending my free time reading books watching movies and relaxing with friends", exampleTranslation: "Ich genieße es meine Freizeit mit Bücherlesen Filme schauen und Entspannen mit Freunden zu verbringen" },
      { id: "ge_hobby_3", german: "Malen", english: "To paint", difficulty: "easy", example: "I paint beautiful oil paintings on Sundays expressing my emotions and personal artistic creativity freely", exampleTranslation: "Ich male sonntags schöne Ölgemälde und drücke frei meine Emotionen und persönliche künstlerische Kreativität aus" },
      { id: "ge_hobby_4", german: "Zeichnen", english: "To draw", difficulty: "easy", example: "I draw realistic portraits with pencil practicing shading and proportion techniques constantly to improve", exampleTranslation: "Ich zeichne realistische Porträts mit Bleistift und übe ständig Schattierungs- und Proportionstechniken um mich zu verbessern" },
      { id: "ge_hobby_5", german: "Fotografie", english: "Photography", difficulty: "easy", example: "Professional photography requires good equipment technical knowledge and artistic vision to capture perfect moments", exampleTranslation: "Professionelle Fotografie erfordert gute Ausrüstung technisches Wissen und künstlerische Vision um perfekte Momente einzufangen" },
      { id: "ge_hobby_6", german: "Musik hören", english: "Listening to music", difficulty: "easy", example: "I love listening to relaxing classical music while working on important complex projects at home", exampleTranslation: "Ich höre gerne entspannende klassische Musik während ich zuhause an wichtigen komplexen Projekten arbeite" },
      { id: "ge_hobby_7", german: "Basteln", english: "Crafting", difficulty: "medium", example: "I enjoy doing creative crafts with my children on weekends making fun entertaining projects together", exampleTranslation: "Ich bastle am Wochenende gerne kreativ mit meinen Kindern und mache zusammen unterhaltsame Projekte" },
      { id: "ge_hobby_8", german: "Sammeln", english: "Collecting", difficulty: "medium", example: "I collect rare vintage stamps from all over the world organizing them carefully in special albums", exampleTranslation: "Ich sammle seltene alte Briefmarken aus der ganzen Welt und organisiere sie sorgfältig in speziellen Alben" },
      { id: "ge_hobby_9", german: "Gartenarbeit", english: "Gardening", difficulty: "medium", example: "Gardening is relaxing and therapeutic helping me connect with nature while growing beautiful colorful flowers", exampleTranslation: "Gartenarbeit ist entspannend und therapeutisch und hilft mir mich mit der Natur zu verbinden während ich schöne bunte Blumen züchte" },
      { id: "ge_hobby_10", german: "Wandern", english: "Hiking", difficulty: "medium", example: "We go hiking in the mountains every summer enjoying fresh air exercise and spectacular scenic views", exampleTranslation: "Wir gehen jeden Sommer in den Bergen wandern und genießen frische Luft Bewegung und spektakuläre malerische Aussichten" },
      { id: "ge_hobby_11", german: "Stricken", english: "Knitting", difficulty: "medium", example: "I knit warm scarves and sweaters during winter giving them to beloved family members at Christmas", exampleTranslation: "Ich stricke im Winter warme Schals und Pullover und verschenke sie zu Weihnachten an geliebte Familienmitglieder" },
      { id: "ge_hobby_12", german: "Angeln", english: "Fishing", difficulty: "medium", example: "My grandfather loves going fishing early in the morning at the peaceful quiet lake nearby", exampleTranslation: "Mein Großvater geht früh morgens gerne am friedlichen ruhigen See in der Nähe angeln" },
      { id: "ge_hobby_13", german: "Was machst du in deiner Freizeit?", english: "What do you do in your free time?", difficulty: "hard", example: "What do you like to do in your free time as a hobby? Tell me about your favorite activities!", exampleTranslation: "Was machst du gerne in deiner Freizeit als Hobby? Erzähl mir von deinen Lieblingsaktivitäten!" },
      { id: "ge_hobby_14", german: "Kreatives Schaffen", english: "Creative creation", difficulty: "hard", example: "Personal creative creation allows you to express emotions ideas and see the world from unique perspectives!", exampleTranslation: "Persönliches kreatives Schaffen erlaubt dir Emotionen Ideen auszudrücken und die Welt aus einzigartigen Perspektiven zu sehen!" },
      { id: "ge_hobby_15", german: "Entspannung", english: "Relaxation", difficulty: "hard", example: "Relaxation and downtime are essential for mental health helping to reduce stress and recharge your energy levels!", exampleTranslation: "Entspannung und Auszeit sind essentiell für die psychische Gesundheit und helfen Stress abzubauen und Energieniveaus aufzuladen!" }
    ]
  },

  business_office: {
    name: "Geschäft und Büro",
    description: "Geschäftswelt und Büroumgebung",
    icon: Building2,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "ge_biz_1", german: "Firma", english: "Company", difficulty: "easy", example: "Our international company has offices in twenty different countries employing thousands of qualified professionals", exampleTranslation: "Unsere internationale Firma hat Büros in zwanzig verschiedenen Ländern und beschäftigt Tausende qualifizierte Fachleute" },
      { id: "ge_biz_2", german: "Büro", english: "Office", difficulty: "easy", example: "I work in a modern comfortable office with large windows and lots of natural sunlight", exampleTranslation: "Ich arbeite in einem modernen komfortablen Büro mit großen Fenstern und viel natürlichem Sonnenlicht" },
      { id: "ge_biz_3", german: "Chef", english: "Boss", difficulty: "easy", example: "My boss is very demanding but also fair and always recognizes good work and effort", exampleTranslation: "Mein Chef ist sehr anspruchsvoll aber auch fair und erkennt immer gute Arbeit und Mühe an" },
      { id: "ge_biz_4", german: "Kollege", english: "Colleague", difficulty: "easy", example: "My work colleagues are friendly professional and always willing to help with difficult projects together", exampleTranslation: "Meine Arbeitskollegen sind freundlich professionell und immer bereit bei schwierigen Projekten zusammen zu helfen" },
      { id: "ge_biz_5", german: "Besprechung", english: "Meeting", difficulty: "easy", example: "We have an important team meeting scheduled for tomorrow morning to discuss the new project", exampleTranslation: "Wir haben morgen früh eine wichtige Teambesprechung geplant um das neue Projekt zu besprechen" },
      { id: "ge_biz_6", german: "Vertrag", english: "Contract", difficulty: "easy", example: "Please read the employment contract carefully before signing it to understand all terms and conditions", exampleTranslation: "Bitte lesen Sie den Arbeitsvertrag sorgfältig durch bevor Sie ihn unterschreiben um alle Bedingungen zu verstehen" },
      { id: "ge_biz_7", german: "Projekt", english: "Project", difficulty: "medium", example: "Our team is working on an exciting new project that will launch next quarter in spring", exampleTranslation: "Unser Team arbeitet an einem aufregenden neuen Projekt das nächstes Quartal im Frühling starten wird" },
      { id: "ge_biz_8", german: "Termin", english: "Appointment", difficulty: "medium", example: "I have an important business appointment with the client at three o'clock this afternoon downtown", exampleTranslation: "Ich habe heute Nachmittag um drei Uhr in der Innenstadt einen wichtigen Geschäftstermin mit dem Kunden" },
      { id: "ge_biz_9", german: "Geschäftsreise", english: "Business trip", difficulty: "medium", example: "I'm going on a business trip to London next week to meet with international clients", exampleTranslation: "Ich gehe nächste Woche auf Geschäftsreise nach London um mich mit internationalen Kunden zu treffen" },
      { id: "ge_biz_10", german: "Präsentation", english: "Presentation", difficulty: "medium", example: "I need to prepare a professional presentation with slides graphs and data for tomorrow's meeting", exampleTranslation: "Ich muss eine professionelle Präsentation mit Folien Grafiken und Daten für die morgige Besprechung vorbereiten" },
      { id: "ge_biz_11", german: "Umsatz", english: "Revenue", difficulty: "medium", example: "The company's annual revenue exceeded ten million euros this successful fiscal year impressively", exampleTranslation: "Der jährliche Umsatz der Firma überstieg dieses erfolgreiche Geschäftsjahr beeindruckend zehn Millionen Euro" },
      { id: "ge_biz_12", german: "Gewinn", english: "Profit", difficulty: "medium", example: "The company's profits increased significantly thanks to innovative marketing strategies and cost reductions", exampleTranslation: "Die Gewinne der Firma stiegen dank innovativer Marketingstrategien und Kostensenkungen erheblich" },
      { id: "ge_biz_13", german: "Können wir einen Termin vereinbaren?", english: "Can we schedule an appointment?", difficulty: "hard", example: "Can we schedule an appointment for next week to discuss the important business proposal in detail?", exampleTranslation: "Können wir für nächste Woche einen Termin vereinbaren um den wichtigen Geschäftsvorschlag ausführlich zu besprechen?" },
      { id: "ge_biz_14", german: "Berufliche Entwicklung", english: "Professional development", difficulty: "hard", example: "Continuous professional development is essential for career advancement in today's competitive business world!", exampleTranslation: "Kontinuierliche berufliche Entwicklung ist essentiell für den Karriereaufstieg in der heutigen wettbewerbsintensiven Geschäftswelt!" },
      { id: "ge_biz_15", german: "Geschäftserfolg", english: "Business success", difficulty: "hard", example: "Business success requires hard work dedication innovation and the ability to adapt to changing market conditions!", exampleTranslation: "Geschäftserfolg erfordert harte Arbeit Hingabe Innovation und die Fähigkeit sich an verändernde Marktbedingungen anzupassen!" }
    ]
  },

  emotions_feelings: {
    name: "Emotionen und Gefühle",
    description: "Emotionale Zustände und Gefühlsausdrücke",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "ge_emot_1", german: "Glücklich", english: "Happy", difficulty: "easy", example: "I am extremely happy when I spend quality time with my beloved family and close friends", exampleTranslation: "Ich bin äußerst glücklich wenn ich Qualitätszeit mit meiner geliebten Familie und engen Freunden verbringe" },
      { id: "ge_emot_2", german: "Traurig", english: "Sad", difficulty: "easy", example: "She feels very sad because her best friend moved away to another city far away", exampleTranslation: "Sie fühlt sich sehr traurig weil ihre beste Freundin weit weg in eine andere Stadt gezogen ist" },
      { id: "ge_emot_3", german: "Wütend", english: "Angry", difficulty: "easy", example: "He gets angry when people don't listen to him or ignore his important opinions completely", exampleTranslation: "Er wird wütend wenn Leute ihm nicht zuhören oder seine wichtigen Meinungen völlig ignorieren" },
      { id: "ge_emot_4", german: "Aufgeregt", english: "Excited", difficulty: "easy", example: "The children are very excited about the upcoming family vacation to the beach this summer", exampleTranslation: "Die Kinder sind sehr aufgeregt über den bevorstehenden Familienurlaub am Strand diesen Sommer" },
      { id: "ge_emot_5", german: "Nervös", english: "Nervous", difficulty: "easy", example: "I always feel nervous before important job interviews and public speaking presentations in front of crowds", exampleTranslation: "Ich fühle mich immer nervös vor wichtigen Vorstellungsgesprächen und öffentlichen Reden vor Menschenmengen" },
      { id: "ge_emot_6", german: "Überrascht", english: "Surprised", difficulty: "easy", example: "I was completely surprised when my friends threw me an unexpected birthday party last weekend", exampleTranslation: "Ich war völlig überrascht als meine Freunde mir letztes Wochenende eine unerwartete Geburtstagsparty gaben" },
      { id: "ge_emot_7", german: "Enttäuscht", english: "Disappointed", difficulty: "medium", example: "I was disappointed when the concert was cancelled at the last minute due to technical problems", exampleTranslation: "Ich war enttäuscht als das Konzert wegen technischer Probleme in letzter Minute abgesagt wurde" },
      { id: "ge_emot_8", german: "Stolz", english: "Proud", difficulty: "medium", example: "I am so proud of my daughter for graduating from university with excellent honors and high grades", exampleTranslation: "Ich bin so stolz auf meine Tochter dass sie die Universität mit ausgezeichneten Ehren und hohen Noten abgeschlossen hat" },
      { id: "ge_emot_9", german: "Erleichtert", english: "Relieved", difficulty: "medium", example: "I felt enormously relieved when I received the medical test results confirming everything was perfectly fine", exampleTranslation: "Ich fühlte mich enorm erleichtert als ich die medizinischen Testergebnisse erhielt die bestätigten dass alles perfekt in Ordnung war" },
      { id: "ge_emot_10", german: "Verwirrt", english: "Confused", difficulty: "medium", example: "I'm confused about the complicated instructions! Can you please explain them more clearly and simply?", exampleTranslation: "Ich bin verwirrt über die komplizierten Anweisungen! Können Sie sie bitte klarer und einfacher erklären?" },
      { id: "ge_emot_11", german: "Einsam", english: "Lonely", difficulty: "medium", example: "Living alone in a new city can make you feel lonely until you make new friends", exampleTranslation: "Allein in einer neuen Stadt zu leben kann einen einsam machen bis man neue Freunde findet" },
      { id: "ge_emot_12", german: "Zufrieden", english: "Content", difficulty: "medium", example: "I feel content and satisfied with my life achievements accomplishments and current personal circumstances", exampleTranslation: "Ich fühle mich zufrieden mit meinen Lebenserfolgen Errungenschaften und aktuellen persönlichen Umständen" },
      { id: "ge_emot_13", german: "Ich bin überwältigt", english: "I'm overwhelmed", difficulty: "hard", example: "I'm completely overwhelmed with all these responsibilities! I urgently need help organizing my life better!", exampleTranslation: "Ich bin völlig überwältigt von all diesen Verantwortlichkeiten! Ich brauche dringend Hilfe mein Leben besser zu organisieren!" },
      { id: "ge_emot_14", german: "Emotionale Intelligenz", english: "Emotional intelligence", difficulty: "hard", example: "High emotional intelligence helps you understand your own emotions and relate empathetically to others effectively!", exampleTranslation: "Hohe emotionale Intelligenz hilft dir deine eigenen Emotionen zu verstehen und dich effektiv empathisch auf andere zu beziehen!" },
      { id: "ge_emot_15", german: "Gefühlsausbruch", english: "Emotional outburst", difficulty: "hard", example: "An emotional outburst during stress is normal but learning to control emotions is important for relationships!", exampleTranslation: "Ein Gefühlsausbruch bei Stress ist normal aber zu lernen Emotionen zu kontrollieren ist wichtig für Beziehungen!" }
    ]
  },

  seasons_calendar: {
    name: "Jahreszeiten und Kalender",
    description: "Jahreszeiten und Zeitangaben",
    icon: CalendarDays,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "ge_season_1", german: "Frühling", english: "Spring", difficulty: "easy", example: "Spring is my favorite season when flowers bloom and nature awakens from cold winter sleep", exampleTranslation: "Frühling ist meine Lieblingsjahreszeit wenn Blumen blühen und die Natur aus dem kalten Winterschlaf erwacht" },
      { id: "ge_season_2", german: "Sommer", english: "Summer", difficulty: "easy", example: "In summer the weather is hot and sunny perfect for swimming at the beach", exampleTranslation: "Im Sommer ist das Wetter heiß und sonnig perfekt zum Schwimmen am Strand" },
      { id: "ge_season_3", german: "Herbst", english: "Autumn", difficulty: "easy", example: "Autumn brings beautiful colorful leaves falling from trees and cooler comfortable temperatures outside", exampleTranslation: "Herbst bringt wunderschöne bunte Blätter die von Bäumen fallen und kühlere angenehme Temperaturen draußen" },
      { id: "ge_season_4", german: "Winter", english: "Winter", difficulty: "easy", example: "Winter is cold with snow and ice but also magical with holidays and cozy evenings", exampleTranslation: "Winter ist kalt mit Schnee und Eis aber auch magisch mit Feiertagen und gemütlichen Abenden" },
      { id: "ge_season_5", german: "Monat", english: "Month", difficulty: "easy", example: "There are twelve months in a year starting with January and ending with December", exampleTranslation: "Es gibt zwölf Monate in einem Jahr beginnend mit Januar und endend mit Dezember" },
      { id: "ge_season_6", german: "Woche", english: "Week", difficulty: "easy", example: "A week has seven days from Monday through Sunday including work days and weekend", exampleTranslation: "Eine Woche hat sieben Tage von Montag bis Sonntag einschließlich Arbeitstagen und Wochenende" },
      { id: "ge_season_7", german: "Wochenende", english: "Weekend", difficulty: "medium", example: "I love the weekend because I can relax sleep late and spend time with family", exampleTranslation: "Ich liebe das Wochenende weil ich entspannen lange schlafen und Zeit mit der Familie verbringen kann" },
      { id: "ge_season_8", german: "Feiertag", english: "Holiday", difficulty: "medium", example: "Christmas is an important holiday celebrated by millions of people around the world with family", exampleTranslation: "Weihnachten ist ein wichtiger Feiertag der von Millionen Menschen auf der ganzen Welt mit der Familie gefeiert wird" },
      { id: "ge_season_9", german: "Jahreszeit", english: "Season", difficulty: "medium", example: "Each season has its own unique beauty charm and special activities that people enjoy throughout the year", exampleTranslation: "Jede Jahreszeit hat ihre eigene einzigartige Schönheit ihren Charme und besondere Aktivitäten die Menschen das ganze Jahr über genießen" },
      { id: "ge_season_10", german: "Kalender", english: "Calendar", difficulty: "medium", example: "I check my calendar every morning to see what appointments and meetings I have scheduled today", exampleTranslation: "Ich überprüfe jeden Morgen meinen Kalender um zu sehen welche Termine und Besprechungen ich heute geplant habe" },
      { id: "ge_season_11", german: "Datum", english: "Date", difficulty: "medium", example: "What is today's date? I need to know to fill out this important official document form", exampleTranslation: "Was ist das heutige Datum? Ich muss es wissen um dieses wichtige offizielle Dokumentformular auszufüllen" },
      { id: "ge_season_12", german: "Geburtstag", english: "Birthday", difficulty: "medium", example: "My birthday is on May fifteenth and I always celebrate with close friends and beloved family", exampleTranslation: "Mein Geburtstag ist am fünfzehnten Mai und ich feiere immer mit engen Freunden und geliebter Familie" },
      { id: "ge_season_13", german: "Welche Jahreszeit magst du am liebsten?", english: "Which season do you like best?", difficulty: "hard", example: "Which season do you like best and why? I personally love autumn because of the beautiful colors!", exampleTranslation: "Welche Jahreszeit magst du am liebsten und warum? Ich persönlich liebe den Herbst wegen der wunderschönen Farben!" },
      { id: "ge_season_14", german: "Zeitumstellung", english: "Daylight saving time", difficulty: "hard", example: "Don't forget about daylight saving time this weekend! We need to set our clocks forward one hour!", exampleTranslation: "Vergiss nicht die Zeitumstellung dieses Wochenende! Wir müssen unsere Uhren eine Stunde vorstellen!" },
      { id: "ge_season_15", german: "Jahresplanung", english: "Annual planning", difficulty: "hard", example: "Good annual planning at the beginning of the year helps you achieve your personal and professional goals successfully!", exampleTranslation: "Gute Jahresplanung zu Beginn des Jahres hilft dir deine persönlichen und beruflichen Ziele erfolgreich zu erreichen!" }
    ]
  },

  social_events: {
    name: "Soziale Veranstaltungen",
    description: "Feiern und gesellschaftliche Ereignisse",
    icon: PartyPopper,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "ge_event_1", german: "Party", english: "Party", difficulty: "easy", example: "We are organizing a surprise birthday party for our friend with decorations cake and music", exampleTranslation: "Wir organisieren eine Überraschungsgeburtstagsparty für unseren Freund mit Dekorationen Kuchen und Musik" },
      { id: "ge_event_2", german: "Einladung", english: "Invitation", difficulty: "easy", example: "I received a wedding invitation from my cousin who is getting married next month in June", exampleTranslation: "Ich erhielt eine Hochzeitseinladung von meinem Cousin der nächsten Monat im Juni heiratet" },
      { id: "ge_event_3", german: "Gast", english: "Guest", difficulty: "easy", example: "We are expecting fifty guests at our anniversary celebration party this coming Saturday evening", exampleTranslation: "Wir erwarten fünfzig Gäste bei unserer Jubiläumsfeier an diesem kommenden Samstagabend" },
      { id: "ge_event_4", german: "Gastgeber", english: "Host", difficulty: "easy", example: "As the host of the dinner party I need to prepare food drinks and entertainment", exampleTranslation: "Als Gastgeber der Dinnerparty muss ich Essen Getränke und Unterhaltung vorbereiten" },
      { id: "ge_event_5", german: "Feier", english: "Celebration", difficulty: "easy", example: "We had a wonderful celebration for my parents' golden wedding anniversary with the whole family", exampleTranslation: "Wir hatten eine wundervolle Feier für die goldene Hochzeit meiner Eltern mit der ganzen Familie" },
      { id: "ge_event_6", german: "Geschenk", english: "Gift", difficulty: "easy", example: "I need to buy a nice thoughtful gift for my sister's birthday celebration next weekend", exampleTranslation: "Ich muss ein schönes durchdachtes Geschenk für die Geburtstagsfeier meiner Schwester nächstes Wochenende kaufen" },
      { id: "ge_event_7", german: "Dekoration", english: "Decoration", difficulty: "medium", example: "We spent hours putting up beautiful decorations with balloons flowers and colorful lights everywhere", exampleTranslation: "Wir verbrachten Stunden damit schöne Dekorationen mit Luftballons Blumen und bunten Lichtern überall aufzustellen" },
      { id: "ge_event_8", german: "Empfang", english: "Reception", difficulty: "medium", example: "The wedding reception was held in an elegant hotel ballroom with dinner dancing and speeches", exampleTranslation: "Der Hochzeitsempfang fand in einem eleganten Hotelsaal mit Abendessen Tanzen und Reden statt" },
      { id: "ge_event_9", german: "Toast", english: "Toast", difficulty: "medium", example: "The best man gave an emotional touching toast at the wedding praising the happy couple", exampleTranslation: "Der Trauzeuge hielt einen emotionalen berührenden Toast bei der Hochzeit und lobte das glückliche Paar" },
      { id: "ge_event_10", german: "Tanz", english: "Dance", difficulty: "medium", example: "Everyone enjoyed dancing to live music at the party celebration until late into the night", exampleTranslation: "Alle genossen es bis spät in die Nacht bei der Party zu Live-Musik zu tanzen" },
      { id: "ge_event_11", german: "Einladungskarte", english: "Invitation card", difficulty: "medium", example: "We designed beautiful custom invitation cards with elegant calligraphy and sent them to all guests", exampleTranslation: "Wir gestalteten schöne individuelle Einladungskarten mit eleganter Kalligrafie und schickten sie an alle Gäste" },
      { id: "ge_event_12", german: "Jubiläum", english: "Anniversary", difficulty: "medium", example: "We celebrate our wedding anniversary every year with a romantic dinner at our favorite restaurant", exampleTranslation: "Wir feiern jeden Jahr unseren Hochzeitstag mit einem romantischen Abendessen in unserem Lieblingsrestaurant" },
      { id: "ge_event_13", german: "Vielen Dank für die Einladung", english: "Thank you for the invitation", difficulty: "hard", example: "Thank you so much for the kind invitation! I would be delighted to attend your special celebration!", exampleTranslation: "Vielen Dank für die freundliche Einladung! Ich würde mich freuen an Ihrer besonderen Feier teilzunehmen!" },
      { id: "ge_event_14", german: "Das war eine tolle Party", english: "That was a great party", difficulty: "hard", example: "That was such a great party! Thank you for inviting me and for being such wonderful hosts!", exampleTranslation: "Das war so eine tolle Party! Danke dass ihr mich eingeladen habt und so wundervolle Gastgeber wart!" },
      { id: "ge_event_15", german: "Geselliges Beisammensein", english: "Social gathering", difficulty: "hard", example: "Regular social gatherings with friends and family strengthen bonds and create lasting cherished memories together!", exampleTranslation: "Regelmäßige gesellige Beisammensein mit Freunden und Familie stärken Bindungen und schaffen zusammen dauerhafte geschätzte Erinnerungen!" }
    ]
  },

  daily_routine: {
    name: "Tagesablauf",
    description: "Tägliche Routinen und Aktivitäten",
    icon: Clock,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "ge_routine_1", german: "Aufwachen", english: "To wake up", difficulty: "easy", example: "I usually wake up early at six o'clock in the morning when the alarm clock rings", exampleTranslation: "Ich wache normalerweise früh um sechs Uhr morgens auf wenn der Wecker klingelt" },
      { id: "ge_routine_2", german: "Aufstehen", english: "To get up", difficulty: "easy", example: "I get up immediately after waking and start my morning routine with a refreshing shower", exampleTranslation: "Ich stehe sofort nach dem Aufwachen auf und beginne meine Morgenroutine mit einer erfrischenden Dusche" },
      { id: "ge_routine_3", german: "Duschen", english: "To shower", difficulty: "easy", example: "I take a hot relaxing shower every morning to wake up and feel fresh energized", exampleTranslation: "Ich nehme jeden Morgen eine heiße entspannende Dusche um aufzuwachen und mich frisch und energiegeladen zu fühlen" },
      { id: "ge_routine_4", german: "Frühstücken", english: "To have breakfast", difficulty: "easy", example: "I always have a healthy nutritious breakfast with fruit yogurt and whole grain cereals", exampleTranslation: "Ich frühstücke immer gesund und nahrhaft mit Obst Joghurt und Vollkorngetreide" },
      { id: "ge_routine_5", german: "Zur Arbeit gehen", english: "To go to work", difficulty: "easy", example: "I go to work by subway every weekday morning arriving at the office by eight thirty", exampleTranslation: "Ich gehe jeden Wochentag morgen mit der U-Bahn zur Arbeit und komme um halb neun im Büro an" },
      { id: "ge_routine_6", german: "Mittagspause", english: "Lunch break", difficulty: "easy", example: "I take my lunch break at noon eating a healthy meal and resting for thirty minutes", exampleTranslation: "Ich mache meine Mittagspause um zwölf Uhr esse eine gesunde Mahlzeit und ruhe mich dreißig Minuten aus" },
      { id: "ge_routine_7", german: "Feierabend", english: "End of work", difficulty: "medium", example: "After work I like to relax at home watching television or reading an interesting engaging book", exampleTranslation: "Nach Feierabend entspanne ich mich gerne zuhause schaue Fernsehen oder lese ein interessantes fesselndes Buch" },
      { id: "ge_routine_8", german: "Abendessen", english: "Dinner", difficulty: "medium", example: "We have dinner together as a family every evening at seven o'clock discussing our day", exampleTranslation: "Wir essen jeden Abend um sieben Uhr gemeinsam als Familie zu Abend und besprechen unseren Tag" },
      { id: "ge_routine_9", german: "Hausarbeit", english: "Housework", difficulty: "medium", example: "I do housework on weekends including cleaning laundry and organizing the entire home thoroughly", exampleTranslation: "Ich mache am Wochenende Hausarbeit einschließlich Putzen Wäsche waschen und das ganze Haus gründlich organisieren" },
      { id: "ge_routine_10", german: "Zähneputzen", english: "To brush teeth", difficulty: "medium", example: "Remember to brush your teeth twice daily for at least two full minutes each time", exampleTranslation: "Denken Sie daran zweimal täglich mindestens zwei volle Minuten lang Ihre Zähne zu putzen" },
      { id: "ge_routine_11", german: "Schlafen gehen", english: "To go to bed", difficulty: "medium", example: "I go to bed early around ten o'clock to get enough sleep for work tomorrow", exampleTranslation: "Ich gehe früh gegen zehn Uhr schlafen gehen um genug Schlaf für die Arbeit morgen zu bekommen" },
      { id: "ge_routine_12", german: "Wecker", english: "Alarm clock", difficulty: "medium", example: "I set my alarm clock for six in the morning so I don't oversleep and arrive late", exampleTranslation: "Ich stelle meinen Wecker auf sechs Uhr morgens damit ich nicht verschlafe und zu spät ankomme" },
      { id: "ge_routine_13", german: "Ich bin ein Frühaufsteher", english: "I'm an early bird", difficulty: "hard", example: "I'm definitely an early bird! I wake up naturally at five in the morning full of energy!", exampleTranslation: "Ich bin definitiv ein Frühaufsteher! Ich wache morgens um fünf Uhr voller Energie natürlich auf!" },
      { id: "ge_routine_14", german: "Tägliche Gewohnheiten", english: "Daily habits", difficulty: "hard", example: "Developing positive daily habits is crucial for long-term success health and personal happiness in life!", exampleTranslation: "Positive tägliche Gewohnheiten zu entwickeln ist entscheidend für langfristigen Erfolg Gesundheit und persönliches Glück im Leben!" },
      { id: "ge_routine_15", german: "Work-Life-Balance", english: "Work-life balance", difficulty: "hard", example: "Maintaining a healthy work-life balance is essential for overall wellbeing preventing burnout and enjoying life!", exampleTranslation: "Eine gesunde Work-Life-Balance aufrechtzuerhalten ist essentiell für allgemeines Wohlbefinden um Burnout zu verhindern und das Leben zu genießen!" }
    ]
  },

  personality_traits: {
    name: "Persönlichkeitsmerkmale",
    description: "Charaktereigenschaften und Persönlichkeit",
    icon: Smile,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { id: "ge_pers_1", german: "Freundlich", english: "Friendly", difficulty: "easy", example: "My neighbor is very friendly always greeting everyone with a warm genuine smile", exampleTranslation: "Mein Nachbar ist sehr freundlich und grüßt jeden immer mit einem warmen echten Lächeln" },
      { id: "ge_pers_2", german: "Ehrlich", english: "Honest", difficulty: "easy", example: "An honest sincere person always tells the truth even when it's difficult or uncomfortable", exampleTranslation: "Eine ehrliche aufrichtige Person sagt immer die Wahrheit selbst wenn es schwierig oder unangenehm ist" },
      { id: "ge_pers_3", german: "Geduldig", english: "Patient", difficulty: "easy", example: "You need to be patient and tolerant when teaching young children because they learn slowly", exampleTranslation: "Man muss geduldig und tolerant sein wenn man kleine Kinder unterrichtet weil sie langsam lernen" },
      { id: "ge_pers_4", german: "Fleißig", english: "Hardworking", difficulty: "easy", example: "My sister is very hardworking and dedicated studying long hours to achieve her academic goals", exampleTranslation: "Meine Schwester ist sehr fleißig und engagiert und lernt lange Stunden um ihre akademischen Ziele zu erreichen" },
      { id: "ge_pers_5", german: "Großzügig", english: "Generous", difficulty: "easy", example: "He is a generous person who always helps others by donating time money and resources", exampleTranslation: "Er ist eine großzügige Person die anderen immer hilft indem sie Zeit Geld und Ressourcen spendet" },
      { id: "ge_pers_6", german: "Kreativ", english: "Creative", difficulty: "easy", example: "Creative innovative artists see the world differently finding inspiration in unexpected everyday ordinary places", exampleTranslation: "Kreative innovative Künstler sehen die Welt anders und finden Inspiration an unerwarteten alltäglichen gewöhnlichen Orten" },
      { id: "ge_pers_7", german: "Optimistisch", english: "Optimistic", difficulty: "medium", example: "Optimistic positive people face challenges with a cheerful attitude seeing opportunities in problems always", exampleTranslation: "Optimistische positive Menschen stellen sich Herausforderungen immer mit fröhlicher Einstellung und sehen Chancen in Problemen" },
      { id: "ge_pers_8", german: "Schüchtern", english: "Shy", difficulty: "medium", example: "I was very shy and reserved in school but over the years gained confidence speaking publicly", exampleTranslation: "Ich war in der Schule sehr schüchtern und zurückhaltend gewann aber über die Jahre Selbstvertrauen beim öffentlichen Sprechen" },
      { id: "ge_pers_9", german: "Mutig", english: "Brave", difficulty: "medium", example: "Being brave doesn't mean having no fear but facing your fears with firm determination and courage", exampleTranslation: "Mutig zu sein bedeutet nicht keine Angst zu haben sondern sich seinen Ängsten mit fester Entschlossenheit und Mut zu stellen" },
      { id: "ge_pers_10", german: "Zuverlässig", english: "Reliable", difficulty: "medium", example: "A reliable friend keeps promises and is always there when you truly need them most", exampleTranslation: "Ein zuverlässiger Freund hält Versprechen und ist immer da wenn man sie am meisten wirklich braucht" },
      { id: "ge_pers_11", german: "Stur", english: "Stubborn", difficulty: "medium", example: "My grandfather is stubborn and headstrong never changing his mind no matter how logically you argue", exampleTranslation: "Mein Großvater ist stur und eigensinnig und ändert nie seine Meinung egal wie logisch man argumentiert" },
      { id: "ge_pers_12", german: "Humorvoll", english: "Humorous", difficulty: "medium", example: "My uncle is very humorous and funny always telling jokes and making the whole family laugh", exampleTranslation: "Mein Onkel ist sehr humorvoll und witzig erzählt immer Witze und bringt die ganze Familie zum Lachen" },
      { id: "ge_pers_13", german: "Wie würdest du dich beschreiben?", english: "How would you describe yourself?", difficulty: "hard", example: "How would you describe yourself as a person? Tell me about your personality values and what makes you unique!", exampleTranslation: "Wie würdest du dich als Person beschreiben? Erzähl mir über deine Persönlichkeit Werte und was dich einzigartig macht!" },
      { id: "ge_pers_14", german: "Charakterstärke", english: "Strength of character", difficulty: "hard", example: "Strength of character shows itself in difficult moments when you maintain your principles and fundamental values!", exampleTranslation: "Charakterstärke zeigt sich in schwierigen Momenten wenn man seine Prinzipien und fundamentalen Werte beibehält!" },
      { id: "ge_pers_15", german: "Persönlichkeitsentwicklung", english: "Personal development", difficulty: "hard", example: "Continuous personal development requires honest self-reflection openness to change and willingness to constantly improve yourself!", exampleTranslation: "Kontinuierliche Persönlichkeitsentwicklung erfordert ehrliche Selbstreflexion Offenheit für Veränderung und die Bereitschaft sich ständig zu verbessern!" }
    ]
  }
};