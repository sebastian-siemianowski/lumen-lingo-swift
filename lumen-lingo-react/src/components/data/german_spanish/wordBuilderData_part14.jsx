/**
 * GERMAN → SPANISH WORD BUILDER - PART 14
 * Categories: 59-62
 * 4 categories, 15 words each = 60 words
 */

import { Utensils, ShoppingCart, CreditCard, Receipt } from "lucide-react";

export const wordBuilderCategories_part14 = {
  restaurant: {
    name: "Restaurant",
    description: "Essen gehen und bestellen",
    icon: Utensils,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "restaurante", hint: "Restaurant" },
      { word: "menú", hint: "Speisekarte" },
      { word: "camarero", hint: "Kellner" },
      { word: "mesa", hint: "Tisch" },
      { word: "reserva", hint: "Reservierung" },
      { word: "plato", hint: "Gericht" },
      { word: "entrada", hint: "Vorspeise" },
      { word: "plato principal", hint: "Hauptgericht" },
      { word: "postre", hint: "Nachtisch" },
      { word: "bebida", hint: "Getränk" },
      { word: "cuenta", hint: "Rechnung" },
      { word: "propina", hint: "Trinkgeld" },
      { word: "delicioso", hint: "lecker" },
      { word: "recomendación", hint: "Empfehlung" },
      { word: "especialidad", hint: "Spezialität" }
    ]
  },

  supermarket: {
    name: "Supermarkt",
    description: "Einkaufen im Supermarkt",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "supermercado", hint: "Supermarkt" },
      { word: "carrito", hint: "Einkaufswagen" },
      { word: "cesta", hint: "Einkaufskorb" },
      { word: "pasillo", hint: "Gang" },
      { word: "estantería", hint: "Regal" },
      { word: "producto", hint: "Produkt" },
      { word: "oferta", hint: "Angebot" },
      { word: "descuento", hint: "Rabatt" },
      { word: "precio", hint: "Preis" },
      { word: "etiqueta", hint: "Etikett" },
      { word: "fresco", hint: "frisch" },
      { word: "congelado", hint: "gefroren" },
      { word: "orgánico", hint: "Bio" },
      { word: "bolsa", hint: "Tüte" },
      { word: "lista de compras", hint: "Einkaufsliste" }
    ]
  },

  payment: {
    name: "Zahlung",
    description: "Bezahlen und Geldtransaktionen",
    icon: CreditCard,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "pago", hint: "Zahlung" },
      { word: "efectivo", hint: "Bargeld" },
      { word: "tarjeta", hint: "Karte" },
      { word: "tarjeta de crédito", hint: "Kreditkarte" },
      { word: "tarjeta de débito", hint: "Debitkarte" },
      { word: "cajero automático", hint: "Geldautomat" },
      { word: "banco", hint: "Bank" },
      { word: "cuenta", hint: "Konto" },
      { word: "transferencia", hint: "Überweisung" },
      { word: "cambio", hint: "Wechselgeld" },
      { word: "moneda", hint: "Münze" },
      { word: "billete", hint: "Geldschein" },
      { word: "comisión", hint: "Gebühr" },
      { word: "tipo de cambio", hint: "Wechselkurs" },
      { word: "PIN", hint: "PIN" }
    ]
  },

  receipts_bills: {
    name: "Belege und Rechnungen",
    description: "Quittungen und Abrechnungen",
    icon: Receipt,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "recibo", hint: "Quittung" },
      { word: "factura", hint: "Rechnung" },
      { word: "ticket", hint: "Beleg" },
      { word: "comprobante", hint: "Nachweis" },
      { word: "total", hint: "Gesamtbetrag" },
      { word: "subtotal", hint: "Zwischensumme" },
      { word: "impuesto", hint: "Steuer" },
      { word: "IVA", hint: "Mehrwertsteuer" },
      { word: "descuento", hint: "Rabatt" },
      { word: "artículo", hint: "Artikel" },
      { word: "cantidad", hint: "Menge" },
      { word: "fecha", hint: "Datum" },
      { word: "número", hint: "Nummer" },
      { word: "copia", hint: "Kopie" },
      { word: "devolución", hint: "Rückgabe" }
    ]
  }
};

export default wordBuilderCategories_part14;