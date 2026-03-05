/**
 * POLISH → SPANISH WORD BUILDER - PART 12
 * Categories: 66-70
 * 5 categories, 15 words each = 75 words
 */

import { Package, Wrench, Box, Footprints, Eye } from "lucide-react";

export const wordBuilderCategories_part12 = {
  containers: {
    name: "Pojemniki i opakowania",
    description: "Różne pojemniki i typy opakowań",
    icon: Package,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "caja", hint: "pudełko" },
      { word: "bolsa", hint: "torba" },
      { word: "botella", hint: "butelka" },
      { word: "frasco", hint: "słoik" },
      { word: "lata", hint: "puszka" },
      { word: "paquete", hint: "paczka" },
      { word: "envase", hint: "pojemnik" },
      { word: "recipiente", hint: "naczynie" },
      { word: "cubo", hint: "wiadro" },
      { word: "cesta", hint: "koszyk" },
      { word: "bote", hint: "słój" },
      { word: "tubo", hint: "tubka" },
      { word: "sobre", hint: "saszetka" },
      { word: "saco", hint: "worek" },
      { word: "barril", hint: "beczka" }
    ]
  },

  tools: {
    name: "Narzędzia i sprzęt",
    description: "Typowe narzędzia do pracy",
    icon: Wrench,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "martillo", hint: "młotek" },
      { word: "destornillador", hint: "śrubokręt" },
      { word: "llave", hint: "klucz" },
      { word: "alicates", hint: "obcęgi" },
      { word: "sierra", hint: "piła" },
      { word: "taladro", hint: "wiertarka" },
      { word: "clavo", hint: "gwóźdź" },
      { word: "tornillo", hint: "śruba" },
      { word: "cinta", hint: "taśma miernicza" },
      { word: "nivel", hint: "poziomnica" },
      { word: "escalera", hint: "drabina" },
      { word: "cepillo", hint: "pędzel" },
      { word: "rodillo", hint: "wałek" },
      { word: "pala", hint: "łopata" },
      { word: "rastrillo", hint: "grabie" }
    ]
  },

  materials_building: {
    name: "Materiały budowlane",
    description: "Materiały konstrukcyjne i budowlane",
    icon: Box,
    color: "from-brown-500 to-amber-600",
    level: "advanced",
    words: [
      { word: "ladrillo", hint: "cegła" },
      { word: "cemento", hint: "cement" },
      { word: "hormigón", hint: "beton" },
      { word: "arena", hint: "piasek" },
      { word: "grava", hint: "żwir" },
      { word: "yeso", hint: "gips" },
      { word: "pintura", hint: "farba" },
      { word: "barniz", hint: "lakier" },
      { word: "tabla", hint: "deska" },
      { word: "viga", hint: "belka" },
      { word: "teja", hint: "dachówka" },
      { word: "vidrio", hint: "szkło" },
      { word: "tubería", hint: "rura" },
      { word: "cable", hint: "przewód" },
      { word: "aislante", hint: "izolacja" }
    ]
  },

  daily_actions: {
    name: "Codzienne czynności",
    description: "Typowe czynności dnia codziennego",
    icon: Footprints,
    color: "from-green-500 to-teal-600",
    level: "beginner",
    words: [
      { word: "despertar", hint: "budzić się" },
      { word: "levantarse", hint: "wstawać" },
      { word: "ducharse", hint: "brać prysznic" },
      { word: "vestirse", hint: "ubierać się" },
      { word: "desayunar", hint: "jeść śniadanie" },
      { word: "salir", hint: "wychodzić" },
      { word: "llegar", hint: "przybywać" },
      { word: "almorzar", hint: "jeść obiad" },
      { word: "descansar", hint: "odpoczywać" },
      { word: "volver", hint: "wracać" },
      { word: "cenar", hint: "jeść kolację" },
      { word: "relajarse", hint: "relaksować się" },
      { word: "acostarse", hint: "kłaść się spać" },
      { word: "dormir", hint: "spać" },
      { word: "soñar", hint: "śnić" }
    ]
  },

  descriptive_verbs: {
    name: "Czasowniki opisowe",
    description: "Czasowniki opisujące stany i wygląd",
    icon: Eye,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "parecer", hint: "wydawać się" },
      { word: "brillar", hint: "błyszczeć" },
      { word: "cambiar", hint: "zmieniać" },
      { word: "crecer", hint: "rosnąć" },
      { word: "disminuir", hint: "zmniejszać się" },
      { word: "aumentar", hint: "zwiększać się" },
      { word: "mejorar", hint: "poprawiać się" },
      { word: "empeorar", hint: "pogarszać się" },
      { word: "transformar", hint: "przekształcać" },
      { word: "permanecer", hint: "pozostawać" },
      { word: "durar", hint: "trwać" },
      { word: "florecer", hint: "kwitnąć" },
      { word: "marchitar", hint: "więdnąć" },
      { word: "reflejar", hint: "odbijać" },
      { word: "destacar", hint: "wyróżniać się" }
    ]
  }
};

export default wordBuilderCategories_part12;