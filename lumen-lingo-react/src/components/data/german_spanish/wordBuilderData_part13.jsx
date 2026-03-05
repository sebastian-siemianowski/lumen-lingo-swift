/**
 * GERMAN → SPANISH WORD BUILDER - PART 13
 * Categories: 55-58
 * 4 categories, 15 words each = 60 words
 */

import { Hotel, Bed, Key, Bell } from "lucide-react";

export const wordBuilderCategories_part13 = {
  accommodation: {
    name: "Unterkunft",
    description: "Hotels und Unterkünfte",
    icon: Hotel,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "hotel", hint: "Hotel" },
      { word: "hostal", hint: "Pension" },
      { word: "albergue", hint: "Herberge" },
      { word: "habitación", hint: "Zimmer" },
      { word: "suite", hint: "Suite" },
      { word: "recepción", hint: "Rezeption" },
      { word: "reserva", hint: "Reservierung" },
      { word: "huésped", hint: "Gast" },
      { word: "check-in", hint: "Anmeldung" },
      { word: "check-out", hint: "Abreise" },
      { word: "llave", hint: "Schlüssel" },
      { word: "tarjeta", hint: "Karte" },
      { word: "equipaje", hint: "Gepäck" },
      { word: "servicio de habitaciones", hint: "Zimmerservice" },
      { word: "desayuno incluido", hint: "Frühstück inklusive" }
    ]
  },

  room_amenities: {
    name: "Zimmerausstattung",
    description: "Hotelzimmer und Annehmlichkeiten",
    icon: Bed,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "cama", hint: "Bett" },
      { word: "almohada", hint: "Kissen" },
      { word: "sábana", hint: "Betttuch" },
      { word: "manta", hint: "Decke" },
      { word: "armario", hint: "Schrank" },
      { word: "escritorio", hint: "Schreibtisch" },
      { word: "silla", hint: "Stuhl" },
      { word: "televisor", hint: "Fernseher" },
      { word: "aire acondicionado", hint: "Klimaanlage" },
      { word: "calefacción", hint: "Heizung" },
      { word: "minibar", hint: "Minibar" },
      { word: "caja fuerte", hint: "Safe" },
      { word: "balcón", hint: "Balkon" },
      { word: "vista", hint: "Aussicht" },
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
      { word: "servicio", hint: "Service" },
      { word: "conserjería", hint: "Concierge" },
      { word: "botones", hint: "Gepäckträger" },
      { word: "limpieza", hint: "Reinigung" },
      { word: "lavandería", hint: "Wäscherei" },
      { word: "aparcamiento", hint: "Parkplatz" },
      { word: "gimnasio", hint: "Fitnessstudio" },
      { word: "piscina", hint: "Schwimmbad" },
      { word: "spa", hint: "Spa" },
      { word: "sauna", hint: "Sauna" },
      { word: "restaurante", hint: "Restaurant" },
      { word: "bar", hint: "Bar" },
      { word: "sala de conferencias", hint: "Konferenzraum" },
      { word: "centro de negocios", hint: "Business-Center" },
      { word: "traslado", hint: "Transfer" }
    ]
  },

  reception_desk: {
    name: "Rezeption",
    description: "Empfang und Kundenservice",
    icon: Bell,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "recepcionista", hint: "Rezeptionist" },
      { word: "bienvenida", hint: "Willkommen" },
      { word: "registro", hint: "Anmeldung" },
      { word: "documento", hint: "Dokument" },
      { word: "pasaporte", hint: "Reisepass" },
      { word: "identificación", hint: "Ausweis" },
      { word: "tarjeta de crédito", hint: "Kreditkarte" },
      { word: "depósito", hint: "Anzahlung" },
      { word: "factura", hint: "Rechnung" },
      { word: "pago", hint: "Zahlung" },
      { word: "información", hint: "Information" },
      { word: "recomendación", hint: "Empfehlung" },
      { word: "queja", hint: "Beschwerde" },
      { word: "solicitud", hint: "Anfrage" },
      { word: "llamada", hint: "Anruf" }
    ]
  }
};

export default wordBuilderCategories_part13;