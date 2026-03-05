/**
 * SPANISH → ENGLISH WORD BUILDER - PART 22
 * Categories: 92-95
 * 4 categories, 15 words each = 60 words
 */

import { Fish, Umbrella, Package, CreditCard } from "lucide-react";

export const wordBuilderCategories_part22 = {
  fishing: {
    name: "Pesca",
    description: "Pescar y equipo necesario",
    icon: Fish,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "fishing rod", hint: "caña de pescar" },
      { word: "hook", hint: "anzuelo" },
      { word: "bait", hint: "cebo" },
      { word: "worm", hint: "lombriz" },
      { word: "net", hint: "red" },
      { word: "landing net", hint: "salabre" },
      { word: "bucket", hint: "cubo" },
      { word: "line", hint: "sedal" },
      { word: "reel", hint: "carrete" },
      { word: "float", hint: "flotador" },
      { word: "sinker", hint: "plomo" },
      { word: "catch", hint: "captura" },
      { word: "fishing license", hint: "licencia de pesca" },
      { word: "fisherman", hint: "pescador" },
      { word: "tackle box", hint: "caja de aparejos" }
    ]
  },

  beach_equipment: {
    name: "Equipo de playa",
    description: "Accesorios para la playa",
    icon: Umbrella,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "beach umbrella", hint: "sombrilla" },
      { word: "beach chair", hint: "silla de playa" },
      { word: "beach towel", hint: "toalla de playa" },
      { word: "swimsuit", hint: "traje de baño" },
      { word: "bikini", hint: "bikini" },
      { word: "swim trunks", hint: "traje de baño" },
      { word: "sunscreen", hint: "protector solar" },
      { word: "sunglasses", hint: "gafas de sol" },
      { word: "beach bag", hint: "bolsa de playa" },
      { word: "cooler", hint: "nevera" },
      { word: "beach ball", hint: "pelota de playa" },
      { word: "swim ring", hint: "flotador" },
      { word: "air mattress", hint: "colchoneta inflable" },
      { word: "snorkel", hint: "tubo de buceo" },
      { word: "diving goggles", hint: "gafas de buceo" }
    ]
  },

  packaging: {
    name: "Embalaje",
    description: "Tipos de envases de productos",
    icon: Package,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "packaging", hint: "embalaje" },
      { word: "cardboard", hint: "cartón" },
      { word: "box", hint: "caja" },
      { word: "crate", hint: "cajón" },
      { word: "can", hint: "lata" },
      { word: "bottle", hint: "botella" },
      { word: "jar", hint: "frasco" },
      { word: "bag", hint: "bolsa" },
      { word: "sack", hint: "saco" },
      { word: "foil", hint: "papel de aluminio" },
      { word: "plastic", hint: "plástico" },
      { word: "carton", hint: "envase de cartón" },
      { word: "paper", hint: "papel" },
      { word: "label", hint: "etiqueta" },
      { word: "seal", hint: "cierre" }
    ]
  },

  payment_methods: {
    name: "Métodos de pago",
    description: "Formas de realizar transacciones",
    icon: CreditCard,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "cash", hint: "efectivo" },
      { word: "credit card", hint: "tarjeta de crédito" },
      { word: "debit card", hint: "tarjeta de débito" },
      { word: "bank card", hint: "tarjeta bancaria" },
      { word: "transfer", hint: "transferencia" },
      { word: "direct debit", hint: "débito automático" },
      { word: "online banking", hint: "banca en línea" },
      { word: "invoice", hint: "factura" },
      { word: "installment", hint: "pago a plazos" },
      { word: "prepayment", hint: "pago anticipado" },
      { word: "cash on delivery", hint: "contra reembolso" },
      { word: "check", hint: "cheque" },
      { word: "charge", hint: "cargo" },
      { word: "payment", hint: "pago" },
      { word: "contactless", hint: "sin contacto" }
    ]
  }
};

export default wordBuilderCategories_part22;