/**
 * POLISH → SPANISH WORD BUILDER - PART 16
 * Categories: 83-86
 * 4 categories, 15 words each = 60 words
 */

import { Clock, Smile, Coins, Waves } from "lucide-react";

export const wordBuilderCategories_part16 = {
  time_periods: {
    name: "Okresy czasu",
    description: "Okresy i podziały czasu",
    icon: Clock,
    color: "from-orange-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "instante", hint: "chwila" },
      { word: "momento", hint: "moment" },
      { word: "período", hint: "okres" },
      { word: "época", hint: "epoka" },
      { word: "siglo", hint: "wiek" },
      { word: "década", hint: "dekada" },
      { word: "trimestre", hint: "kwartał" },
      { word: "bimestre", hint: "dwumiesięczny okres" },
      { word: "quincena", hint: "dwa tygodnie" },
      { word: "madrugada", hint: "świt" },
      { word: "amanecer", hint: "wschód słońca" },
      { word: "mediodía", hint: "południe" },
      { word: "atardecer", hint: "zachód słońca" },
      { word: "anochecer", hint: "zmierzch" },
      { word: "medianoche", hint: "północ" }
    ]
  },

  facial_expressions: {
    name: "Wyrazy twarzy",
    description: "Wyrazy i gesty twarzy",
    icon: Smile,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "sonrisa", hint: "uśmiech" },
      { word: "risa", hint: "śmiech" },
      { word: "mueca", hint: "grymas" },
      { word: "ceño", hint: "zmarszczenie brwi" },
      { word: "guiño", hint: "mrugnięcie" },
      { word: "mirada", hint: "spojrzenie" },
      { word: "parpadeo", hint: "mruganie" },
      { word: "bostezo", hint: "ziewanie" },
      { word: "suspiro", hint: "westchnienie" },
      { word: "lágrima", hint: "łza" },
      { word: "gesto", hint: "gest" },
      { word: "expresión", hint: "wyraz" },
      { word: "rostro", hint: "twarz" },
      { word: "semblante", hint: "oblicze" },
      { word: "ademán", hint: "postawa" }
    ]
  },

  money_finance: {
    name: "Pieniądze i finanse",
    description: "Terminologia finansowa i monetarna",
    icon: Coins,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "moneda", hint: "moneta" },
      { word: "billete", hint: "banknot" },
      { word: "efectivo", hint: "gotówka" },
      { word: "tarjeta", hint: "karta" },
      { word: "crédito", hint: "kredyt" },
      { word: "débito", hint: "debet" },
      { word: "ahorro", hint: "oszczędności" },
      { word: "deuda", hint: "dług" },
      { word: "préstamo", hint: "pożyczka" },
      { word: "interés", hint: "odsetki" },
      { word: "inversión", hint: "inwestycja" },
      { word: "ganancia", hint: "zysk" },
      { word: "pérdida", hint: "strata" },
      { word: "impuesto", hint: "podatek" },
      { word: "presupuesto", hint: "budżet" }
    ]
  },

  water_related: {
    name: "Woda i płyny",
    description: "Zbiorniki wodne i formy płynów",
    icon: Waves,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "agua", hint: "woda" },
      { word: "líquido", hint: "płyn" },
      { word: "gota", hint: "kropla" },
      { word: "charco", hint: "kałuża" },
      { word: "manantial", hint: "źródło" },
      { word: "fuente", hint: "fontanna" },
      { word: "arroyo", hint: "strumień" },
      { word: "riachuelo", hint: "potok" },
      { word: "corriente", hint: "prąd" },
      { word: "ola", hint: "fala" },
      { word: "marea", hint: "przypływ" },
      { word: "espuma", hint: "piana" },
      { word: "vapor", hint: "para" },
      { word: "hielo", hint: "lód" },
      { word: "escarcha", hint: "szron" }
    ]
  }
};

export default wordBuilderCategories_part16;