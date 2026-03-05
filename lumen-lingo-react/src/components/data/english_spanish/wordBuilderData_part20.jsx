/**
 * ENGLISH → SPANISH WORD BUILDER - PART 20
 * Categories: 106-110
 * 5 categories, 15 words each = 75 words
 */

import { Shirt, Briefcase, CloudRain, Moon, Landmark } from "lucide-react";

export const wordBuilderCategories_part20 = {
  textiles_fabrics: {
    name: "Textiles & Fabrics",
    description: "Fabric types and textile vocabulary",
    icon: Shirt,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "tela", hint: "fabric" },
      { word: "algodón", hint: "cotton" },
      { word: "seda", hint: "silk" },
      { word: "lana", hint: "wool" },
      { word: "lino", hint: "linen" },
      { word: "poliéster", hint: "polyester" },
      { word: "terciopelo", hint: "velvet" },
      { word: "denim", hint: "denim" },
      { word: "cuero", hint: "leather" },
      { word: "encaje", hint: "lace" },
      { word: "bordado", hint: "embroidery" },
      { word: "estampado", hint: "print" },
      { word: "textura", hint: "texture" },
      { word: "hilo", hint: "thread" },
      { word: "costura", hint: "seam" }
    ]
  },

  occupations_careers: {
    name: "Occupations & Careers",
    description: "Professional jobs and career paths",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "científico", hint: "scientist" },
      { word: "investigador", hint: "researcher" },
      { word: "diseñador", hint: "designer" },
      { word: "contador", hint: "accountant" },
      { word: "traductor", hint: "translator" },
      { word: "fotógrafo", hint: "photographer" },
      { word: "piloto", hint: "pilot" },
      { word: "veterinario", hint: "veterinarian" },
      { word: "farmacéutico", hint: "pharmacist" },
      { word: "electricista", hint: "electrician" },
      { word: "plomero", hint: "plumber" },
      { word: "carpintero", hint: "carpenter" },
      { word: "mecánico", hint: "mechanic" },
      { word: "chef", hint: "chef" },
      { word: "consultor", hint: "consultant" }
    ]
  },

  natural_disasters: {
    name: "Natural Disasters",
    description: "Natural disasters and emergencies",
    icon: CloudRain,
    color: "from-gray-500 to-slate-600",
    level: "advanced",
    words: [
      { word: "desastre", hint: "disaster" },
      { word: "terremoto", hint: "earthquake" },
      { word: "huracán", hint: "hurricane" },
      { word: "tornado", hint: "tornado" },
      { word: "tsunami", hint: "tsunami" },
      { word: "inundación", hint: "flood" },
      { word: "sequía", hint: "drought" },
      { word: "incendio", hint: "fire" },
      { word: "avalancha", hint: "avalanche" },
      { word: "erupción", hint: "eruption" },
      { word: "deslizamiento", hint: "landslide" },
      { word: "tifón", hint: "typhoon" },
      { word: "temblor", hint: "tremor" },
      { word: "emergencia", hint: "emergency" },
      { word: "evacuación", hint: "evacuation" }
    ]
  },

  astronomy_objects: {
    name: "Astronomy Objects",
    description: "Celestial bodies and space objects",
    icon: Moon,
    color: "from-indigo-500 to-violet-600",
    level: "intermediate",
    words: [
      { word: "nebulosa", hint: "nebula" },
      { word: "meteoro", hint: "meteor" },
      { word: "meteorito", hint: "meteorite" },
      { word: "agujero", hint: "black hole" },
      { word: "supernova", hint: "supernova" },
      { word: "eclipse", hint: "eclipse" },
      { word: "radiación", hint: "radiation" },
      { word: "gravedad", hint: "gravity" },
      { word: "vacío", hint: "vacuum" },
      { word: "rotación", hint: "rotation" },
      { word: "traslación", hint: "revolution" },
      { word: "equinoccio", hint: "equinox" },
      { word: "solsticio", hint: "solstice" },
      { word: "cráter", hint: "crater" },
      { word: "cosmos", hint: "cosmos" }
    ]
  },

  government_politics: {
    name: "Government & Politics",
    description: "Political and governmental vocabulary",
    icon: Landmark,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "gobierno", hint: "government" },
      { word: "política", hint: "politics" },
      { word: "presidente", hint: "president" },
      { word: "ministro", hint: "minister" },
      { word: "senador", hint: "senator" },
      { word: "diputado", hint: "deputy" },
      { word: "elección", hint: "election" },
      { word: "voto", hint: "vote" },
      { word: "democracia", hint: "democracy" },
      { word: "congreso", hint: "congress" },
      { word: "parlamento", hint: "parliament" },
      { word: "constitución", hint: "constitution" },
      { word: "ciudadano", hint: "citizen" },
      { word: "partido", hint: "party" },
      { word: "campaña", hint: "campaign" }
    ]
  }
};

export default wordBuilderCategories_part20;