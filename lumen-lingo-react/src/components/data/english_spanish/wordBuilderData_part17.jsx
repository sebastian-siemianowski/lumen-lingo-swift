/**
 * ENGLISH → SPANISH WORD BUILDER - PART 17
 * Categories: 91-95
 * 5 categories, 15 words each = 75 words
 */

import { HeartPulse, Microwave, Recycle, Church, Scale } from "lucide-react";

export const wordBuilderCategories_part17 = {
  medical_conditions: {
    name: "Medical Conditions",
    description: "Common health conditions and symptoms",
    icon: HeartPulse,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "enfermedad", hint: "disease" },
      { word: "síntoma", hint: "symptom" },
      { word: "alergia", hint: "allergy" },
      { word: "infección", hint: "infection" },
      { word: "inflamación", hint: "inflammation" },
      { word: "fractura", hint: "fracture" },
      { word: "gripe", hint: "flu" },
      { word: "resfriado", hint: "cold" },
      { word: "diabetes", hint: "diabetes" },
      { word: "asma", hint: "asthma" },
      { word: "lesión", hint: "injury" },
      { word: "mareo", hint: "dizziness" },
      { word: "náusea", hint: "nausea" },
      { word: "fatiga", hint: "fatigue" },
      { word: "cicatriz", hint: "scar" }
    ]
  },

  kitchen_appliances: {
    name: "Kitchen Appliances",
    description: "Modern kitchen appliances and gadgets",
    icon: Microwave,
    color: "from-orange-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "nevera", hint: "refrigerator" },
      { word: "horno", hint: "oven" },
      { word: "microondas", hint: "microwave" },
      { word: "tostadora", hint: "toaster" },
      { word: "batidora", hint: "blender" },
      { word: "licuadora", hint: "mixer" },
      { word: "cafetera", hint: "coffee maker" },
      { word: "lavavajillas", hint: "dishwasher" },
      { word: "congelador", hint: "freezer" },
      { word: "procesador", hint: "food processor" },
      { word: "freidora", hint: "fryer" },
      { word: "exprimidor", hint: "juicer" },
      { word: "arrocera", hint: "rice cooker" },
      { word: "vaporera", hint: "steamer" },
      { word: "sandwichera", hint: "sandwich maker" }
    ]
  },

  environmental_issues: {
    name: "Environmental Issues",
    description: "Environmental problems and solutions",
    icon: Recycle,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    words: [
      { word: "contaminación", hint: "pollution" },
      { word: "reciclaje", hint: "recycling" },
      { word: "deforestación", hint: "deforestation" },
      { word: "calentamiento", hint: "warming" },
      { word: "sostenibilidad", hint: "sustainability" },
      { word: "biodiversidad", hint: "biodiversity" },
      { word: "emisión", hint: "emission" },
      { word: "renovable", hint: "renewable" },
      { word: "conservación", hint: "conservation" },
      { word: "ecosistema", hint: "ecosystem" },
      { word: "extinción", hint: "extinction" },
      { word: "desecho", hint: "waste" },
      { word: "compostaje", hint: "composting" },
      { word: "ozono", hint: "ozone" },
      { word: "residuo", hint: "residue" }
    ]
  },

  religions_beliefs: {
    name: "Religions & Beliefs",
    description: "Religious terms and spiritual concepts",
    icon: Church,
    color: "from-purple-500 to-violet-600",
    level: "intermediate",
    words: [
      { word: "religión", hint: "religion" },
      { word: "fe", hint: "faith" },
      { word: "creencia", hint: "belief" },
      { word: "iglesia", hint: "church" },
      { word: "templo", hint: "temple" },
      { word: "mezquita", hint: "mosque" },
      { word: "sinagoga", hint: "synagogue" },
      { word: "oración", hint: "prayer" },
      { word: "dios", hint: "god" },
      { word: "sagrado", hint: "sacred" },
      { word: "ritual", hint: "ritual" },
      { word: "bendición", hint: "blessing" },
      { word: "alma", hint: "soul" },
      { word: "espíritu", hint: "spirit" },
      { word: "sermón", hint: "sermon" }
    ]
  },

  legal_terms: {
    name: "Legal Terms",
    description: "Basic legal and justice vocabulary",
    icon: Scale,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "ley", hint: "law" },
      { word: "derecho", hint: "right" },
      { word: "justicia", hint: "justice" },
      { word: "tribunal", hint: "court" },
      { word: "juez", hint: "judge" },
      { word: "abogado", hint: "lawyer" },
      { word: "contrato", hint: "contract" },
      { word: "demanda", hint: "lawsuit" },
      { word: "testigo", hint: "witness" },
      { word: "veredicto", hint: "verdict" },
      { word: "culpable", hint: "guilty" },
      { word: "inocente", hint: "innocent" },
      { word: "sentencia", hint: "sentence" },
      { word: "evidencia", hint: "evidence" },
      { word: "apelación", hint: "appeal" }
    ]
  }
};

export default wordBuilderCategories_part17;