
/**
 * ENGLISH → SPANISH WORD BUILDER - PART 6
 * Categories: 36-40
 * 5 categories, 15 words each = 75 words
 */

import { Building2, Plane, ShoppingCart, Users, BookOpen } from "lucide-react";

export const wordBuilderCategories_part6 = {
  city_places: {
    name: "City & Urban Places",
    description: "Buildings and landmarks in cities",
    icon: Building2,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "hospital", hint: "hospital" },
      { word: "biblioteca", hint: "library" },
      { word: "museo", hint: "museum" },
      { word: "teatro", hint: "theater" },
      { word: "estadio", hint: "stadium" },
      { word: "mercado", hint: "market" },
      { word: "parque", hint: "park" },
      { word: "plaza", hint: "square/plaza" },
      { word: "calle", hint: "street" },
      { word: "avenida", hint: "avenue" },
      { word: "puente", hint: "bridge" },
      { word: "estación", hint: "station" },
      { word: "aeropuerto", hint: "airport" },
      { word: "universidad", hint: "university" },
      { word: "ayuntamiento", hint: "city hall" }
    ]
  },

  travel_tourism: {
    name: "Travel & Tourism",
    description: "Essential vocabulary for travelers",
    icon: Plane,
    color: "from-teal-500 to-green-600",
    level: "intermediate",
    words: [
      { word: "viaje", hint: "trip/journey" },
      { word: "turista", hint: "tourist" },
      { word: "equipaje", hint: "luggage" },
      { word: "maleta", hint: "suitcase" },
      { word: "pasaporte", hint: "passport" },
      { word: "vuelo", hint: "flight" },
      { word: "reserva", hint: "reservation" },
      { word: "alojamiento", hint: "accommodation" },
      { word: "excursión", hint: "excursion" },
      { word: "guía", hint: "guide" },
      { word: "mapa", hint: "map" },
      { word: "destino", hint: "destination" },
      { word: "itinerario", hint: "itinerary" },
      { word: "recuerdo", hint: "souvenir" },
      { word: "aventura", hint: "adventure" }
    ]
  },

  shopping_retail: {
    name: "Shopping & Retail",
    description: "Shopping vocabulary for stores and purchases",
    icon: ShoppingCart,
    color: "from-pink-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "tienda", hint: "store/shop" },
      { word: "compra", hint: "purchase" },
      { word: "precio", hint: "price" },
      { word: "descuento", hint: "discount" },
      { word: "oferta", hint: "offer/sale" },
      { word: "caja", hint: "cash register" },
      { word: "recibo", hint: "receipt" },
      { word: "cambio", hint: "change (money)" },
      { word: "talla", hint: "size" },
      { word: "probador", hint: "fitting room" },
      { word: "carrito", hint: "shopping cart" },
      { word: "bolsa", hint: "bag" },
      { word: "vendedor", hint: "salesperson" },
      { word: "cliente", hint: "customer" },
      { word: "tarjeta", hint: "card" }
    ]
  },

  relationships_people: {
    name: "Relationships & People",
    description: "Social connections and relationship vocabulary",
    icon: Users,
    color: "from-rose-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "amigo", hint: "friend" },
      { word: "novio", hint: "boyfriend" },
      { word: "novia", hint: "girlfriend" },
      { word: "esposo", hint: "husband" },
      { word: "esposa", hint: "wife" },
      { word: "compañero", hint: "companion/partner" },
      { word: "vecino", hint: "neighbor" },
      { word: "colega", hint: "colleague" },
      { word: "conocido", hint: "acquaintance" },
      { word: "pareja", hint: "couple/partner" },
      { word: "prometido", hint: "fiancé" },
      { word: "exnovio", hint: "ex-boyfriend" },
      { word: "socio", hint: "business partner" },
      { word: "rival", hint: "rival" },
      { word: "aliado", hint: "ally" }
    ]
  },

  education_learning: {
    name: "Education & Learning",
    description: "Academic vocabulary for students and teachers",
    icon: BookOpen,
    color: "from-indigo-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "lección", hint: "lesson" },
      { word: "tarea", hint: "homework" },
      { word: "examen", hint: "exam" },
      { word: "nota", hint: "grade" },
      { word: "curso", hint: "course" },
      { word: "clase", hint: "class" },
      { word: "profesor", hint: "teacher/professor" },
      { word: "estudiante", hint: "student" },
      { word: "diploma", hint: "diploma" },
      { word: "título", hint: "degree" },
      { word: "beca", hint: "scholarship" },
      { word: "matrícula", hint: "tuition/enrollment" },
      { word: "semestre", hint: "semester" },
      { word: "aprendizaje", hint: "learning" },
      { word: "conocimiento", hint: "knowledge" }
    ]
  }
};

export default wordBuilderCategories_part6;
