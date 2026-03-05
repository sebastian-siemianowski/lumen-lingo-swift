/**
 * POLISH → ENGLISH WORD BUILDER - PART 18
 * Categories: 86-90
 * 5 categories, 15 words each = 75 words
 */

import { Wallet, CreditCard, TrendingUp, BadgeDollarSign, Building } from "lucide-react";

export const wordBuilderCategories_part18 = {
  personal_finance: {
    name: "Finanse osobiste",
    description: "Zarządzanie pieniędzmi i budżetem",
    icon: Wallet,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "budget", hint: "budżet" },
      { word: "savings", hint: "oszczędności" },
      { word: "expenses", hint: "wydatki" },
      { word: "income", hint: "dochód" },
      { word: "debt", hint: "dług" },
      { word: "loan", hint: "pożyczka" },
      { word: "interest", hint: "odsetki" },
      { word: "mortgage", hint: "hipoteka" },
      { word: "installment", hint: "rata" },
      { word: "balance", hint: "saldo" },
      { word: "withdrawal", hint: "wypłata" },
      { word: "deposit", hint: "wpłata" },
      { word: "transaction", hint: "transakcja" },
      { word: "statement", hint: "wyciąg" },
      { word: "overdraft", hint: "debet" }
    ]
  },

  banking_payments: {
    name: "Bankowość i płatności",
    description: "Transakcje i metody płatności",
    icon: CreditCard,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "account", hint: "konto" },
      { word: "checking", hint: "konto bieżące" },
      { word: "credit card", hint: "karta kredytowa" },
      { word: "debit card", hint: "karta debetowa" },
      { word: "transfer", hint: "przelew" },
      { word: "payment", hint: "płatność" },
      { word: "cash", hint: "gotówka" },
      { word: "change", hint: "reszta" },
      { word: "currency", hint: "waluta" },
      { word: "exchange rate", hint: "kurs wymiany" },
      { word: "checkbook", hint: "książeczka czekowa" },
      { word: "ATM", hint: "bankomat" },
      { word: "PIN", hint: "kod PIN" },
      { word: "online banking", hint: "bankowość online" },
      { word: "wire transfer", hint: "przelew bankowy" }
    ]
  },

  investments: {
    name: "Inwestycje",
    description: "Inwestowanie i rynek kapitałowy",
    icon: TrendingUp,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    words: [
      { word: "stock", hint: "akcja" },
      { word: "bond", hint: "obligacja" },
      { word: "portfolio", hint: "portfel" },
      { word: "dividend", hint: "dywidenda" },
      { word: "broker", hint: "broker" },
      { word: "trading", hint: "handel" },
      { word: "shares", hint: "udziały" },
      { word: "equity", hint: "kapitał własny" },
      { word: "asset", hint: "aktywa" },
      { word: "liability", hint: "zobowiązanie" },
      { word: "profit", hint: "zysk" },
      { word: "loss", hint: "strata" },
      { word: "return", hint: "zwrot" },
      { word: "risk", hint: "ryzyko" },
      { word: "diversification", hint: "dywersyfikacja" }
    ]
  },

  business_commerce: {
    name: "Biznes i handel",
    description: "Przedsiębiorczość i działalność gospodarcza",
    icon: BadgeDollarSign,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "company", hint: "firma" },
      { word: "corporation", hint: "korporacja" },
      { word: "partnership", hint: "spółka" },
      { word: "entrepreneur", hint: "przedsiębiorca" },
      { word: "startup", hint: "startup" },
      { word: "revenue", hint: "przychód" },
      { word: "turnover", hint: "obrót" },
      { word: "profit margin", hint: "marża zysku" },
      { word: "overhead", hint: "koszty ogólne" },
      { word: "competitor", hint: "konkurent" },
      { word: "market share", hint: "udział w rynku" },
      { word: "franchise", hint: "franczyza" },
      { word: "merger", hint: "fuzja" },
      { word: "acquisition", hint: "przejęcie" },
      { word: "bankruptcy", hint: "bankructwo" }
    ]
  },

  real_estate: {
    name: "Nieruchomości",
    description: "Rynek nieruchomości i mieszkalnictwo",
    icon: Building,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "property", hint: "nieruchomość" },
      { word: "apartment", hint: "mieszkanie" },
      { word: "condominium", hint: "mieszkanie własnościowe" },
      { word: "lease", hint: "dzierżawa" },
      { word: "tenant", hint: "lokator" },
      { word: "landlord", hint: "właściciel" },
      { word: "rent", hint: "czynsz" },
      { word: "mortgage", hint: "kredyt hipoteczny" },
      { word: "deed", hint: "akt własności" },
      { word: "appraisal", hint: "wycena" },
      { word: "listing", hint: "oferta" },
      { word: "realtor", hint: "agent nieruchomości" },
      { word: "down payment", hint: "wkład własny" },
      { word: "closing", hint: "finalizacja transakcji" },
      { word: "foreclosure", hint: "przejęcie nieruchomości" }
    ]
  }
};

export default wordBuilderCategories_part18;