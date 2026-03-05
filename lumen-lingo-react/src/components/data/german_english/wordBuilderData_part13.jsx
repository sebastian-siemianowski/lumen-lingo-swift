/**
 * GERMAN → ENGLISH WORD BUILDER - PART 13
 * Categories: 54-58
 * 5 categories, 15 words each = 75 words
 */

import { ShoppingCart, CreditCard, Receipt, MessageCircle, Phone } from "lucide-react";

export const wordBuilderCategories_part13 = {
  supermarket: {
    name: "Supermarkt",
    description: "Einkaufen im Supermarkt",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "supermarket", hint: "Supermarkt" },
      { word: "cart", hint: "Einkaufswagen" },
      { word: "basket", hint: "Einkaufskorb" },
      { word: "aisle", hint: "Gang" },
      { word: "shelf", hint: "Regal" },
      { word: "product", hint: "Produkt" },
      { word: "offer", hint: "Angebot" },
      { word: "discount", hint: "Rabatt" },
      { word: "price", hint: "Preis" },
      { word: "label", hint: "Etikett" },
      { word: "fresh", hint: "frisch" },
      { word: "frozen", hint: "gefroren" },
      { word: "organic", hint: "Bio" },
      { word: "bag", hint: "Tüte" },
      { word: "shopping list", hint: "Einkaufsliste" }
    ]
  },

  payment: {
    name: "Zahlung",
    description: "Bezahlen und Geldtransaktionen",
    icon: CreditCard,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "payment", hint: "Zahlung" },
      { word: "cash", hint: "Bargeld" },
      { word: "card", hint: "Karte" },
      { word: "credit card", hint: "Kreditkarte" },
      { word: "debit card", hint: "Debitkarte" },
      { word: "ATM", hint: "Geldautomat" },
      { word: "bank", hint: "Bank" },
      { word: "account", hint: "Konto" },
      { word: "transfer", hint: "Überweisung" },
      { word: "change", hint: "Wechselgeld" },
      { word: "coin", hint: "Münze" },
      { word: "bill", hint: "Geldschein" },
      { word: "fee", hint: "Gebühr" },
      { word: "exchange rate", hint: "Wechselkurs" },
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
      { word: "receipt", hint: "Quittung" },
      { word: "invoice", hint: "Rechnung" },
      { word: "ticket", hint: "Beleg" },
      { word: "proof", hint: "Nachweis" },
      { word: "total", hint: "Gesamtbetrag" },
      { word: "subtotal", hint: "Zwischensumme" },
      { word: "tax", hint: "Steuer" },
      { word: "VAT", hint: "Mehrwertsteuer" },
      { word: "discount", hint: "Rabatt" },
      { word: "item", hint: "Artikel" },
      { word: "quantity", hint: "Menge" },
      { word: "date", hint: "Datum" },
      { word: "number", hint: "Nummer" },
      { word: "copy", hint: "Kopie" },
      { word: "return", hint: "Rückgabe" }
    ]
  },

  conversation: {
    name: "Konversation",
    description: "Sprechen und Kommunikation",
    icon: MessageCircle,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "speak", hint: "sprechen" },
      { word: "talk", hint: "sich unterhalten" },
      { word: "chat", hint: "plaudern" },
      { word: "say", hint: "sagen" },
      { word: "tell", hint: "erzählen" },
      { word: "ask", hint: "fragen" },
      { word: "answer", hint: "antworten" },
      { word: "explain", hint: "erklären" },
      { word: "describe", hint: "beschreiben" },
      { word: "comment", hint: "kommentieren" },
      { word: "opinion", hint: "meinen" },
      { word: "discuss", hint: "diskutieren" },
      { word: "shout", hint: "schreien" },
      { word: "whisper", hint: "flüstern" },
      { word: "interrupt", hint: "unterbrechen" }
    ]
  },

  phone_calls: {
    name: "Telefonate",
    description: "Telefonieren und Anrufe",
    icon: Phone,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "call", hint: "Anruf" },
      { word: "phone", hint: "Telefon" },
      { word: "dial", hint: "wählen" },
      { word: "answer", hint: "abheben" },
      { word: "hang up", hint: "auflegen" },
      { word: "number", hint: "Nummer" },
      { word: "tone", hint: "Freizeichen" },
      { word: "busy", hint: "besetzt" },
      { word: "voicemail", hint: "Mailbox" },
      { word: "message", hint: "Nachricht" },
      { word: "contact", hint: "sich melden" },
      { word: "signal", hint: "Signal" },
      { word: "line", hint: "Leitung" },
      { word: "wait", hint: "warten" },
      { word: "ring", hint: "klingeln" }
    ]
  }
};

export default wordBuilderCategories_part13;