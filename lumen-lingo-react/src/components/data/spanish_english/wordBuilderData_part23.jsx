/**
 * SPANISH → ENGLISH WORD BUILDER - PART 23
 * Categories: 96-98
 * 3 categories, 15 words each = 45 words
 */

import { Tag, TrendingDown, Mountain } from "lucide-react";

export const wordBuilderCategories_part23 = {
  discounts_sales: {
    name: "Descuentos y rebajas",
    description: "Promociones y reducción de precios",
    icon: Tag,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "discount", hint: "descuento" },
      { word: "offer", hint: "oferta" },
      { word: "special offer", hint: "oferta especial" },
      { word: "sale", hint: "rebaja" },
      { word: "clearance", hint: "liquidación" },
      { word: "percent", hint: "por ciento" },
      { word: "reduced", hint: "reducido" },
      { word: "promotion", hint: "promoción" },
      { word: "voucher", hint: "vale" },
      { word: "coupon", hint: "cupón" },
      { word: "bonus points", hint: "puntos de bonificación" },
      { word: "loyalty program", hint: "programa de lealtad" },
      { word: "markdown", hint: "rebaja" },
      { word: "price cut", hint: "reducción de precio" },
      { word: "bargain", hint: "ganga" }
    ]
  },

  price_value: {
    name: "Precio y valor",
    description: "Términos relacionados con precio",
    icon: TrendingDown,
    color: "from-purple-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "price", hint: "precio" },
      { word: "cost", hint: "costo" },
      { word: "value", hint: "valor" },
      { word: "expensive", hint: "caro" },
      { word: "cheap", hint: "barato" },
      { word: "affordable", hint: "asequible" },
      { word: "free", hint: "gratis" },
      { word: "complimentary", hint: "de cortesía" },
      { word: "tax", hint: "impuesto" },
      { word: "gross price", hint: "precio bruto" },
      { word: "net price", hint: "precio neto" },
      { word: "total price", hint: "precio total" },
      { word: "unit price", hint: "precio unitario" },
      { word: "fixed price", hint: "precio fijo" },
      { word: "estimate", hint: "presupuesto" }
    ]
  },

  hiking_mountains: {
    name: "Senderismo y montañas",
    description: "Turismo de montaña y trekking",
    icon: Mountain,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "hiking", hint: "senderismo" },
      { word: "trail", hint: "sendero" },
      { word: "climbing", hint: "escalada" },
      { word: "summit", hint: "cumbre" },
      { word: "descent", hint: "descenso" },
      { word: "ascent", hint: "ascenso" },
      { word: "switchback", hint: "zigzag" },
      { word: "guide", hint: "guía de montaña" },
      { word: "viewpoint", hint: "mirador" },
      { word: "mountain hut", hint: "refugio" },
      { word: "rope", hint: "cuerda" },
      { word: "carabiner", hint: "mosquetón" },
      { word: "helmet", hint: "casco" },
      { word: "backpack", hint: "mochila" },
      { word: "hiking boots", hint: "botas de montaña" }
    ]
  }
};

export default wordBuilderCategories_part23;