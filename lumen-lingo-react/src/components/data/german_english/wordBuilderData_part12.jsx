/**
 * GERMAN → ENGLISH WORD BUILDER - PART 12
 * Categories: 50-53
 * 4 categories, 15 words each = 60 words
 */

import { Hotel, Bed, Key, Bell } from "lucide-react";

export const wordBuilderCategories_part12 = {
  accommodation: {
    name: "Unterkunft",
    description: "Hotels und Unterkünfte",
    icon: Hotel,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "hotel", hint: "Hotel" },
      { word: "hostel", hint: "Pension" },
      { word: "inn", hint: "Herberge" },
      { word: "room", hint: "Zimmer" },
      { word: "suite", hint: "Suite" },
      { word: "reception", hint: "Rezeption" },
      { word: "reservation", hint: "Reservierung" },
      { word: "guest", hint: "Gast" },
      { word: "check-in", hint: "Anmeldung" },
      { word: "check-out", hint: "Abreise" },
      { word: "key", hint: "Schlüssel" },
      { word: "card", hint: "Karte" },
      { word: "luggage", hint: "Gepäck" },
      { word: "room service", hint: "Zimmerservice" },
      { word: "breakfast included", hint: "Frühstück inklusive" }
    ]
  },

  room_amenities: {
    name: "Zimmerausstattung",
    description: "Hotelzimmer und Annehmlichkeiten",
    icon: Bed,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "bed", hint: "Bett" },
      { word: "pillow", hint: "Kissen" },
      { word: "sheet", hint: "Betttuch" },
      { word: "blanket", hint: "Decke" },
      { word: "wardrobe", hint: "Schrank" },
      { word: "desk", hint: "Schreibtisch" },
      { word: "chair", hint: "Stuhl" },
      { word: "television", hint: "Fernseher" },
      { word: "air conditioning", hint: "Klimaanlage" },
      { word: "heating", hint: "Heizung" },
      { word: "minibar", hint: "Minibar" },
      { word: "safe", hint: "Safe" },
      { word: "balcony", hint: "Balkon" },
      { word: "view", hint: "Aussicht" },
      { word: "wifi", hint: "WLAN" }
    ]
  },

  hotel_services: {
    name: "Hoteldienstleistungen",
    description: "Services und Einrichtungen",
    icon: Key,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    words: [
      { word: "service", hint: "Service" },
      { word: "concierge", hint: "Concierge" },
      { word: "bellboy", hint: "Gepäckträger" },
      { word: "cleaning", hint: "Reinigung" },
      { word: "laundry", hint: "Wäscherei" },
      { word: "parking", hint: "Parkplatz" },
      { word: "gym", hint: "Fitnessstudio" },
      { word: "pool", hint: "Schwimmbad" },
      { word: "spa", hint: "Spa" },
      { word: "sauna", hint: "Sauna" },
      { word: "restaurant", hint: "Restaurant" },
      { word: "bar", hint: "Bar" },
      { word: "conference room", hint: "Konferenzraum" },
      { word: "business center", hint: "Business-Center" },
      { word: "transfer", hint: "Transfer" }
    ]
  },

  reception_desk: {
    name: "Rezeption",
    description: "Empfang und Kundenservice",
    icon: Bell,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "receptionist", hint: "Rezeptionist" },
      { word: "welcome", hint: "Willkommen" },
      { word: "registration", hint: "Anmeldung" },
      { word: "document", hint: "Dokument" },
      { word: "passport", hint: "Reisepass" },
      { word: "identification", hint: "Ausweis" },
      { word: "credit card", hint: "Kreditkarte" },
      { word: "deposit", hint: "Anzahlung" },
      { word: "bill", hint: "Rechnung" },
      { word: "payment", hint: "Zahlung" },
      { word: "information", hint: "Information" },
      { word: "recommendation", hint: "Empfehlung" },
      { word: "complaint", hint: "Beschwerde" },
      { word: "request", hint: "Anfrage" },
      { word: "call", hint: "Anruf" }
    ]
  }
};

export default wordBuilderCategories_part12;