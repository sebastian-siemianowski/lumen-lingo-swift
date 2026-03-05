/**
 * POLISH → GERMAN WORD BUILDER - PART 12
 * Categories: 49-52
 * 4 categories, 15 words each = 60 words
 */

import { Wallet, TrendingUp, Building, Scale } from "lucide-react";

export const wordBuilderCategories_part12 = {
  money_finance: {
    name: "Pieniądze i finanse",
    description: "Finanse osobiste i transakcje",
    icon: Wallet,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "Geld", hint: "pieniądze" },
      { word: "Münze", hint: "moneta" },
      { word: "Banknote", hint: "banknot" },
      { word: "Euro", hint: "euro" },
      { word: "Bargeld", hint: "gotówka" },
      { word: "Karte", hint: "karta" },
      { word: "Kreditkarte", hint: "karta kredytowa" },
      { word: "Rechnung", hint: "rachunek" },
      { word: "Quittung", hint: "paragon" },
      { word: "Zahlung", hint: "płatność" },
      { word: "Überweisung", hint: "przelew" },
      { word: "Schuld", hint: "dług" },
      { word: "Kredit", hint: "kredyt" },
      { word: "Zinsen", hint: "odsetki" },
      { word: "Wechselgeld", hint: "reszta" }
    ]
  },

  banking: {
    name: "Bankowość",
    description: "Bank i usługi finansowe",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    words: [
      { word: "Bank", hint: "bank" },
      { word: "Konto", hint: "konto" },
      { word: "Sparkonto", hint: "konto oszczędnościowe" },
      { word: "Girokonto", hint: "konto bieżące" },
      { word: "Geldautomat", hint: "bankomat" },
      { word: "Einzahlung", hint: "wpłata" },
      { word: "Abhebung", hint: "wypłata" },
      { word: "Saldo", hint: "saldo" },
      { word: "Kontostand", hint: "stan konta" },
      { word: "Hypothek", hint: "hipoteka" },
      { word: "Investition", hint: "inwestycja" },
      { word: "Aktie", hint: "akcja" },
      { word: "Zinssatz", hint: "stopa procentowa" },
      { word: "Währung", hint: "waluta" },
      { word: "Wechselkurs", hint: "kurs wymiany" }
    ]
  },

  business: {
    name: "Biznes",
    description: "Przedsiębiorstwa i handel",
    icon: Building,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "Geschäft", hint: "biznes" },
      { word: "Firma", hint: "firma" },
      { word: "Unternehmen", hint: "przedsiębiorstwo" },
      { word: "Chef", hint: "szef" },
      { word: "Manager", hint: "menedżer" },
      { word: "Mitarbeiter", hint: "pracownik" },
      { word: "Büro", hint: "biuro" },
      { word: "Vertrag", hint: "umowa" },
      { word: "Kunde", hint: "klient" },
      { word: "Verkauf", hint: "sprzedaż" },
      { word: "Gewinn", hint: "zysk" },
      { word: "Verlust", hint: "strata" },
      { word: "Umsatz", hint: "obrót" },
      { word: "Markt", hint: "rynek" },
      { word: "Konkurrenz", hint: "konkurencja" }
    ]
  },

  law_justice: {
    name: "Prawo i sprawiedliwość",
    description: "System prawny i sądy",
    icon: Scale,
    color: "from-purple-500 to-indigo-600",
    level: "advanced",
    words: [
      { word: "Gesetz", hint: "prawo" },
      { word: "Recht", hint: "prawo" },
      { word: "Gericht", hint: "sąd" },
      { word: "Richter", hint: "sędzia" },
      { word: "Anwalt", hint: "adwokat" },
      { word: "Staatsanwalt", hint: "prokurator" },
      { word: "Angeklagter", hint: "oskarżony" },
      { word: "Zeuge", hint: "świadek" },
      { word: "Urteil", hint: "wyrok" },
      { word: "Prozess", hint: "proces" },
      { word: "Verbrechen", hint: "przestępstwo" },
      { word: "Strafe", hint: "kara" },
      { word: "Gefängnis", hint: "więzienie" },
      { word: "Gerechtigkeit", hint: "sprawiedliwość" },
      { word: "Verteidigung", hint: "obrona" }
    ]
  }
};

export default wordBuilderCategories_part12;