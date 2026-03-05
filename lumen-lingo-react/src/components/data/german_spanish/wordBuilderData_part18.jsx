/**
 * GERMAN → SPANISH WORD BUILDER - PART 18
 * Categories: 76-80
 * 5 categories, 15 words each = 75 words
 */

import { Sparkles, Bath, Droplet, Smile, Eye } from "lucide-react";

export const wordBuilderCategories_part18 = {
  beauty_cosmetics: {
    name: "Schönheit und Kosmetik",
    description: "Kosmetikprodukte und Schönheitspflege",
    icon: Sparkles,
    color: "from-pink-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "maquillaje", hint: "Make-up" },
      { word: "lápiz labial", hint: "Lippenstift" },
      { word: "rímel", hint: "Wimperntusche" },
      { word: "sombra de ojos", hint: "Lidschatten" },
      { word: "base", hint: "Foundation" },
      { word: "colorete", hint: "Rouge" },
      { word: "perfume", hint: "Parfüm" },
      { word: "esmalte de uñas", hint: "Nagellack" },
      { word: "crema", hint: "Creme" },
      { word: "loción", hint: "Lotion" },
      { word: "máscara", hint: "Maske" },
      { word: "exfoliante", hint: "Peeling" },
      { word: "sérum", hint: "Serum" },
      { word: "desmaquillante", hint: "Make-up-Entferner" },
      { word: "pincel", hint: "Pinsel" }
    ]
  },

  hygiene: {
    name: "Hygiene",
    description: "Persönliche Pflege und Sauberkeit",
    icon: Bath,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "jabón", hint: "Seife" },
      { word: "champú", hint: "Shampoo" },
      { word: "acondicionador", hint: "Spülung" },
      { word: "pasta de dientes", hint: "Zahnpasta" },
      { word: "cepillo de dientes", hint: "Zahnbürste" },
      { word: "hilo dental", hint: "Zahnseide" },
      { word: "desodorante", hint: "Deodorant" },
      { word: "toalla", hint: "Handtuch" },
      { word: "esponja", hint: "Schwamm" },
      { word: "papel higiénico", hint: "Toilettenpapier" },
      { word: "peine", hint: "Kamm" },
      { word: "cepillo", hint: "Bürste" },
      { word: "afeitadora", hint: "Rasierer" },
      { word: "cortaúñas", hint: "Nagelschere" },
      { word: "ducha", hint: "Dusche" }
    ]
  },

  skincare: {
    name: "Hautpflege",
    description: "Produkte für gesunde Haut",
    icon: Droplet,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "piel", hint: "Haut" },
      { word: "limpieza", hint: "Reinigung" },
      { word: "hidratación", hint: "Feuchtigkeitspflege" },
      { word: "protección solar", hint: "Sonnenschutz" },
      { word: "antiarrugas", hint: "Anti-Falten" },
      { word: "tónico", hint: "Toner" },
      { word: "emulsión", hint: "Emulsion" },
      { word: "gel", hint: "Gel" },
      { word: "aceite", hint: "Öl" },
      { word: "contorno de ojos", hint: "Augencreme" },
      { word: "nutritivo", hint: "nährend" },
      { word: "calmante", hint: "beruhigend" },
      { word: "rejuvenecedor", hint: "verjüngend" },
      { word: "poros", hint: "Poren" },
      { word: "cutis", hint: "Teint" }
    ]
  },

  dental_care: {
    name: "Zahnpflege",
    description: "Mundgesundheit und Zahnhygiene",
    icon: Smile,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "diente", hint: "Zahn" },
      { word: "muela", hint: "Backenzahn" },
      { word: "encía", hint: "Zahnfleisch" },
      { word: "caries", hint: "Karies" },
      { word: "dentista", hint: "Zahnarzt" },
      { word: "ortodoncia", hint: "Kieferorthopädie" },
      { word: "brackets", hint: "Zahnspange" },
      { word: "limpieza dental", hint: "Zahnreinigung" },
      { word: "empaste", hint: "Füllung" },
      { word: "corona", hint: "Krone" },
      { word: "enjuague bucal", hint: "Mundspülung" },
      { word: "blanqueamiento", hint: "Bleaching" },
      { word: "placa", hint: "Zahnbelag" },
      { word: "aliento", hint: "Atem" },
      { word: "sonrisa", hint: "Lächeln" }
    ]
  },

  vision_eyewear: {
    name: "Sehen und Brillen",
    description: "Augen und Sehhilfen",
    icon: Eye,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "ojo", hint: "Auge" },
      { word: "vista", hint: "Sicht" },
      { word: "visión", hint: "Sehvermögen" },
      { word: "gafas", hint: "Brille" },
      { word: "lentes", hint: "Linsen" },
      { word: "lentes de contacto", hint: "Kontaktlinsen" },
      { word: "montura", hint: "Fassung" },
      { word: "graduación", hint: "Sehstärke" },
      { word: "miopía", hint: "Kurzsichtigkeit" },
      { word: "hipermetropía", hint: "Weitsichtigkeit" },
      { word: "astigmatismo", hint: "Astigmatismus" },
      { word: "optometrista", hint: "Optiker" },
      { word: "examen de vista", hint: "Sehtest" },
      { word: "cristal", hint: "Glas" },
      { word: "estuche", hint: "Etui" }
    ]
  }
};

export default wordBuilderCategories_part18;