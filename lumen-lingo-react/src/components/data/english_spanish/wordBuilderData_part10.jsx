/**
 * ENGLISH → SPANISH WORD BUILDER - PART 10
 * Categories: 56-60
 * 5 categories, 15 words each = 75 words
 */

import { Stethoscope, UtensilsCrossed, Landmark, Mail, Navigation } from "lucide-react";

export const wordBuilderCategories_part10 = {
  medical_terms: {
    name: "Medical Terms",
    description: "Health and medical vocabulary",
    icon: Stethoscope,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "médico", hint: "doctor" },
      { word: "enfermera", hint: "nurse" },
      { word: "paciente", hint: "patient" },
      { word: "medicina", hint: "medicine" },
      { word: "pastilla", hint: "pill" },
      { word: "jarabe", hint: "syrup" },
      { word: "receta", hint: "prescription" },
      { word: "dolor", hint: "pain" },
      { word: "fiebre", hint: "fever" },
      { word: "tos", hint: "cough" },
      { word: "herida", hint: "wound" },
      { word: "vendaje", hint: "bandage" },
      { word: "análisis", hint: "test" },
      { word: "radiografía", hint: "x-ray" },
      { word: "ambulancia", hint: "ambulance" }
    ]
  },

  restaurant_vocab: {
    name: "Restaurant Vocabulary",
    description: "Dining and restaurant essentials",
    icon: UtensilsCrossed,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "menú", hint: "menu" },
      { word: "cuenta", hint: "bill" },
      { word: "propina", hint: "tip" },
      { word: "camarero", hint: "waiter" },
      { word: "reserva", hint: "reservation" },
      { word: "entrada", hint: "appetizer" },
      { word: "principal", hint: "main course" },
      { word: "postre", hint: "dessert" },
      { word: "bebida", hint: "drink" },
      { word: "servilleta", hint: "napkin" },
      { word: "mantel", hint: "tablecloth" },
      { word: "especial", hint: "special" },
      { word: "porción", hint: "portion" },
      { word: "ingrediente", hint: "ingredient" },
      { word: "cocina", hint: "cuisine" }
    ]
  },

  banking_terms: {
    name: "Banking Terms",
    description: "Financial and banking vocabulary",
    icon: Landmark,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { word: "banco", hint: "bank" },
      { word: "cuenta", hint: "account" },
      { word: "tarjeta", hint: "card" },
      { word: "dinero", hint: "money" },
      { word: "efectivo", hint: "cash" },
      { word: "cheque", hint: "check" },
      { word: "préstamo", hint: "loan" },
      { word: "interés", hint: "interest" },
      { word: "saldo", hint: "balance" },
      { word: "depósito", hint: "deposit" },
      { word: "retiro", hint: "withdrawal" },
      { word: "transferencia", hint: "transfer" },
      { word: "cajero", hint: "ATM" },
      { word: "moneda", hint: "currency" },
      { word: "cambio", hint: "exchange" }
    ]
  },

  post_office: {
    name: "Post Office Terms",
    description: "Mail and postal service vocabulary",
    icon: Mail,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "correo", hint: "mail" },
      { word: "carta", hint: "letter" },
      { word: "paquete", hint: "package" },
      { word: "sello", hint: "stamp" },
      { word: "sobre", hint: "envelope" },
      { word: "dirección", hint: "address" },
      { word: "remitente", hint: "sender" },
      { word: "destinatario", hint: "recipient" },
      { word: "código", hint: "postal code" },
      { word: "buzón", hint: "mailbox" },
      { word: "franqueo", hint: "postage" },
      { word: "urgente", hint: "urgent" },
      { word: "certificado", hint: "registered" },
      { word: "entrega", hint: "delivery" },
      { word: "tarjeta", hint: "postcard" }
    ]
  },

  directions: {
    name: "Directions & Navigation",
    description: "Finding your way around town",
    icon: Navigation,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "derecha", hint: "right" },
      { word: "izquierda", hint: "left" },
      { word: "recto", hint: "straight" },
      { word: "norte", hint: "north" },
      { word: "sur", hint: "south" },
      { word: "este", hint: "east" },
      { word: "oeste", hint: "west" },
      { word: "esquina", hint: "corner" },
      { word: "cruce", hint: "intersection" },
      { word: "semáforo", hint: "traffic light" },
      { word: "señal", hint: "sign" },
      { word: "mapa", hint: "map" },
      { word: "distancia", hint: "distance" },
      { word: "cerca", hint: "near" },
      { word: "lejos", hint: "far" }
    ]
  }
};

export default wordBuilderCategories_part10;