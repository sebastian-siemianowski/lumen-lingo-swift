/**
 * POLISH → GERMAN WORD BUILDER - PART 25
 * Categories: 100-103
 * 4 categories, 15 words each = 60 words
 */

import { Package, CreditCard, Tag, TrendingDown } from "lucide-react";

export const wordBuilderCategories_part25 = {
  packaging: {
    name: "Opakowania",
    description: "Rodzaje opakowań produktów",
    icon: Package,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "Verpackung", hint: "opakowanie" },
      { word: "Karton", hint: "karton" },
      { word: "Schachtel", hint: "pudełko" },
      { word: "Kiste", hint: "skrzynia" },
      { word: "Dose", hint: "puszka" },
      { word: "Flasche", hint: "butelka" },
      { word: "Glas", hint: "słoik" },
      { word: "Tüte", hint: "torebka" },
      { word: "Beutel", hint: "worek" },
      { word: "Folie", hint: "folia" },
      { word: "Plastik", hint: "plastik" },
      { word: "Pappe", hint: "tektura" },
      { word: "Papier", hint: "papier" },
      { word: "Etikett", hint: "etykieta" },
      { word: "Verschluss", hint: "zamknięcie" }
    ]
  },

  payment_methods: {
    name: "Metody płatności",
    description: "Sposoby dokonywania transakcji",
    icon: CreditCard,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "Bargeld", hint: "gotówka" },
      { word: "Kreditkarte", hint: "karta kredytowa" },
      { word: "Bankkarte", hint: "karta bankowa" },
      { word: "EC-Karte", hint: "karta płatnicza" },
      { word: "Überweisung", hint: "przelew" },
      { word: "Lastschrift", hint: "polecenie zapłaty" },
      { word: "PayPal", hint: "PayPal" },
      { word: "Online-Banking", hint: "bankowość internetowa" },
      { word: "Rechnung", hint: "faktura" },
      { word: "Ratenzahlung", hint: "płatność ratalna" },
      { word: "Vorauskasse", hint: "przedpłata" },
      { word: "Nachnahme", hint: "za pobraniem" },
      { word: "Scheck", hint: "czek" },
      { word: "Abbuchung", hint: "potrącenie" },
      { word: "Zahlung", hint: "płatność" }
    ]
  },

  discounts_sales: {
    name: "Zniżki i wyprzedaże",
    description: "Promocje i obniżki cen",
    icon: Tag,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "Rabatt", hint: "rabat" },
      { word: "Angebot", hint: "oferta" },
      { word: "Sonderangebot", hint: "oferta specjalna" },
      { word: "Ausverkauf", hint: "wyprzedaż" },
      { word: "Schlussverkauf", hint: "ostateczna wyprzedaż" },
      { word: "Prozent", hint: "procent" },
      { word: "Reduziert", hint: "obniżony" },
      { word: "Aktion", hint: "akcja" },
      { word: "Gutschein", hint: "kupon" },
      { word: "Coupon", hint: "talon" },
      { word: "Bonuspunkte", hint: "punkty bonusowe" },
      { word: "Treueprogramm", hint: "program lojalnościowy" },
      { word: "Nachlass", hint: "zniżka" },
      { word: "Preisnachlass", hint: "obniżka ceny" },
      { word: "Schnäppchen", hint: "okazja" }
    ]
  },

  price_value: {
    name: "Cena i wartość",
    description: "Określenia dotyczące ceny",
    icon: TrendingDown,
    color: "from-purple-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "Preis", hint: "cena" },
      { word: "Kosten", hint: "koszty" },
      { word: "Wert", hint: "wartość" },
      { word: "teuer", hint: "drogi" },
      { word: "billig", hint: "tani" },
      { word: "günstig", hint: "korzystny" },
      { word: "kostenlos", hint: "bezpłatny" },
      { word: "gratis", hint: "gratis" },
      { word: "umsonst", hint: "za darmo" },
      { word: "Mehrwertsteuer", hint: "podatek VAT" },
      { word: "Bruttopreis", hint: "cena brutto" },
      { word: "Nettopreis", hint: "cena netto" },
      { word: "Gesamtpreis", hint: "cena całkowita" },
      { word: "Stückpreis", hint: "cena jednostkowa" },
      { word: "Festpreis", hint: "cena stała" }
    ]
  }
};

export default wordBuilderCategories_part25;