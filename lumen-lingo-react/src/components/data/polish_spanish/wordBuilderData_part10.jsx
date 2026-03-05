/**
 * POLISH → SPANISH WORD BUILDER - PART 10
 * Categories: 56-60
 * 5 categories, 15 words each = 75 words
 */

import { Stethoscope, UtensilsCrossed, Landmark, Mail, Navigation } from "lucide-react";

export const wordBuilderCategories_part10 = {
  medical_terms: {
    name: "Terminy medyczne",
    description: "Słownictwo zdrowotne i medyczne",
    icon: Stethoscope,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "médico", hint: "lekarz" },
      { word: "enfermera", hint: "pielęgniarka" },
      { word: "paciente", hint: "pacjent" },
      { word: "medicina", hint: "lekarstwo" },
      { word: "pastilla", hint: "tabletka" },
      { word: "jarabe", hint: "syrop" },
      { word: "receta", hint: "recepta" },
      { word: "dolor", hint: "ból" },
      { word: "fiebre", hint: "gorączka" },
      { word: "tos", hint: "kaszel" },
      { word: "herida", hint: "rana" },
      { word: "vendaje", hint: "opatrunek" },
      { word: "análisis", hint: "badanie" },
      { word: "radiografía", hint: "rentgen" },
      { word: "ambulancia", hint: "karetka" }
    ]
  },

  restaurant_vocab: {
    name: "Słownictwo restauracyjne",
    description: "Jedzenie i podstawy restauracji",
    icon: UtensilsCrossed,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "menú", hint: "menu" },
      { word: "cuenta", hint: "rachunek" },
      { word: "propina", hint: "napiwek" },
      { word: "camarero", hint: "kelner" },
      { word: "reserva", hint: "rezerwacja" },
      { word: "entrada", hint: "przystawka" },
      { word: "principal", hint: "danie główne" },
      { word: "postre", hint: "deser" },
      { word: "bebida", hint: "napój" },
      { word: "servilleta", hint: "serwetka" },
      { word: "mantel", hint: "obrus" },
      { word: "especial", hint: "specjalność" },
      { word: "porción", hint: "porcja" },
      { word: "ingrediente", hint: "składnik" },
      { word: "cocina", hint: "kuchnia" }
    ]
  },

  banking_terms: {
    name: "Terminy bankowe",
    description: "Słownictwo finansowe i bankowe",
    icon: Landmark,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { word: "banco", hint: "bank" },
      { word: "cuenta", hint: "konto" },
      { word: "tarjeta", hint: "karta" },
      { word: "dinero", hint: "pieniądze" },
      { word: "efectivo", hint: "gotówka" },
      { word: "cheque", hint: "czek" },
      { word: "préstamo", hint: "pożyczka" },
      { word: "interés", hint: "odsetki" },
      { word: "saldo", hint: "saldo" },
      { word: "depósito", hint: "wpłata" },
      { word: "retiro", hint: "wypłata" },
      { word: "transferencia", hint: "przelew" },
      { word: "cajero", hint: "bankomat" },
      { word: "moneda", hint: "waluta" },
      { word: "cambio", hint: "wymiana" }
    ]
  },

  post_office: {
    name: "Poczta",
    description: "Terminy dotyczące poczty i przesyłek",
    icon: Mail,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "correo", hint: "poczta" },
      { word: "carta", hint: "list" },
      { word: "paquete", hint: "paczka" },
      { word: "sello", hint: "znaczek" },
      { word: "sobre", hint: "koperta" },
      { word: "dirección", hint: "adres" },
      { word: "remitente", hint: "nadawca" },
      { word: "destinatario", hint: "odbiorca" },
      { word: "código", hint: "kod pocztowy" },
      { word: "buzón", hint: "skrzynka pocztowa" },
      { word: "franqueo", hint: "opłata pocztowa" },
      { word: "urgente", hint: "pilne" },
      { word: "certificado", hint: "polecony" },
      { word: "entrega", hint: "dostawa" },
      { word: "tarjeta", hint: "pocztówka" }
    ]
  },

  directions: {
    name: "Kierunki i nawigacja",
    description: "Znajdowanie drogi po mieście",
    icon: Navigation,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "derecha", hint: "prawo" },
      { word: "izquierda", hint: "lewo" },
      { word: "recto", hint: "prosto" },
      { word: "norte", hint: "północ" },
      { word: "sur", hint: "południe" },
      { word: "este", hint: "wschód" },
      { word: "oeste", hint: "zachód" },
      { word: "esquina", hint: "róg" },
      { word: "cruce", hint: "skrzyżowanie" },
      { word: "semáforo", hint: "sygnalizacja świetlna" },
      { word: "señal", hint: "znak" },
      { word: "mapa", hint: "mapa" },
      { word: "distancia", hint: "odległość" },
      { word: "cerca", hint: "blisko" },
      { word: "lejos", hint: "daleko" }
    ]
  }
};

export default wordBuilderCategories_part10;