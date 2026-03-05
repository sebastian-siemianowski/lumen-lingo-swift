/**
 * SPANISH → ENGLISH WORD BUILDER - PART 24
 * Categories: 99-103
 * 5 categories, 15 words each = 75 words
 */

import { Tent, Backpack, Compass, Scale, Ruler } from "lucide-react";

export const wordBuilderCategories_part24 = {
  camping: {
    name: "Acampada",
    description: "Acampar y vida al aire libre",
    icon: Tent,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "tent", hint: "tienda de campaña" },
      { word: "campsite", hint: "campamento" },
      { word: "camper", hint: "caravana" },
      { word: "motorhome", hint: "autocaravana" },
      { word: "sleeping bag", hint: "saco de dormir" },
      { word: "sleeping mat", hint: "esterilla" },
      { word: "camping stove", hint: "hornillo" },
      { word: "gas canister", hint: "bombona de gas" },
      { word: "camping chair", hint: "silla plegable" },
      { word: "camping table", hint: "mesa plegable" },
      { word: "flashlight", hint: "linterna" },
      { word: "lantern", hint: "farol" },
      { word: "tent pegs", hint: "estacas" },
      { word: "tent poles", hint: "varillas" },
      { word: "campfire", hint: "fogata" }
    ]
  },

  backpacking: {
    name: "Mochilero",
    description: "Equipo y accesorios de viaje",
    icon: Backpack,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "backpack", hint: "mochila" },
      { word: "hiking backpack", hint: "mochila de senderismo" },
      { word: "trekking backpack", hint: "mochila de trekking" },
      { word: "hiking boots", hint: "botas de montaña" },
      { word: "trekking poles", hint: "bastones" },
      { word: "water bottle", hint: "botella de agua" },
      { word: "thermos", hint: "termo" },
      { word: "provisions", hint: "provisiones" },
      { word: "energy bar", hint: "barrita energética" },
      { word: "first aid kit", hint: "botiquín" },
      { word: "rain gear", hint: "ropa impermeable" },
      { word: "windbreaker", hint: "cortavientos" },
      { word: "functional clothing", hint: "ropa técnica" },
      { word: "sunscreen", hint: "protector solar" },
      { word: "insect repellent", hint: "repelente de insectos" }
    ]
  },

  orientation: {
    name: "Orientación en terreno",
    description: "Navegación y encontrar caminos",
    icon: Compass,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "compass", hint: "brújula" },
      { word: "map", hint: "mapa" },
      { word: "hiking map", hint: "mapa de senderismo" },
      { word: "gps", hint: "GPS" },
      { word: "navigation", hint: "navegación" },
      { word: "coordinates", hint: "coordenadas" },
      { word: "altimeter", hint: "altímetro" },
      { word: "scale", hint: "escala" },
      { word: "legend", hint: "leyenda" },
      { word: "marking", hint: "marcaje" },
      { word: "trail sign", hint: "señal de sendero" },
      { word: "orientation", hint: "orientación" },
      { word: "direction", hint: "dirección" },
      { word: "location", hint: "ubicación" },
      { word: "destination", hint: "destino" }
    ]
  },

  weights_measures: {
    name: "Pesos y medidas",
    description: "Unidades de masa y peso",
    icon: Scale,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "weight", hint: "peso" },
      { word: "kilogram", hint: "kilogramo" },
      { word: "gram", hint: "gramo" },
      { word: "ton", hint: "tonelada" },
      { word: "pound", hint: "libra" },
      { word: "ounce", hint: "onza" },
      { word: "weigh", hint: "pesar" },
      { word: "scale", hint: "balanza" },
      { word: "kitchen scale", hint: "báscula de cocina" },
      { word: "bathroom scale", hint: "báscula de baño" },
      { word: "heavy", hint: "pesado" },
      { word: "light", hint: "ligero" },
      { word: "mass", hint: "masa" },
      { word: "volume", hint: "volumen" },
      { word: "density", hint: "densidad" }
    ]
  },

  length_distance: {
    name: "Longitud y distancia",
    description: "Medidas de largo y distancia",
    icon: Ruler,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "length", hint: "longitud" },
      { word: "meter", hint: "metro" },
      { word: "centimeter", hint: "centímetro" },
      { word: "millimeter", hint: "milímetro" },
      { word: "kilometer", hint: "kilómetro" },
      { word: "distance", hint: "distancia" },
      { word: "width", hint: "anchura" },
      { word: "height", hint: "altura" },
      { word: "depth", hint: "profundidad" },
      { word: "diameter", hint: "diámetro" },
      { word: "radius", hint: "radio" },
      { word: "perimeter", hint: "perímetro" },
      { word: "measure", hint: "medir" },
      { word: "measuring tape", hint: "cinta métrica" },
      { word: "ruler", hint: "regla" }
    ]
  }
};

export default wordBuilderCategories_part24;