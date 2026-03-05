/**
 * SPANISH → ENGLISH WORD BUILDER - PART 11
 * Categories: 45-48
 * 4 categories, 15 words each = 60 words
 */

import { Thermometer, Wallet, TrendingUp, Building } from "lucide-react";

export const wordBuilderCategories_part11 = {
  health_conditions: {
    name: "Condiciones de salud",
    description: "Enfermedades y dolencias",
    icon: Thermometer,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "fever", hint: "fiebre" },
      { word: "cough", hint: "tos" },
      { word: "cold", hint: "resfriado" },
      { word: "flu", hint: "gripe" },
      { word: "headache", hint: "dolor de cabeza" },
      { word: "stomachache", hint: "dolor de estómago" },
      { word: "toothache", hint: "dolor de muelas" },
      { word: "backache", hint: "dolor de espalda" },
      { word: "nausea", hint: "náuseas" },
      { word: "dizziness", hint: "mareo" },
      { word: "fatigue", hint: "fatiga" },
      { word: "allergy", hint: "alergia" },
      { word: "asthma", hint: "asma" },
      { word: "diabetes", hint: "diabetes" },
      { word: "infection", hint: "infección" }
    ]
  },

  money_finance: {
    name: "Dinero y finanzas",
    description: "Finanzas personales y transacciones",
    icon: Wallet,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "money", hint: "dinero" },
      { word: "coin", hint: "moneda" },
      { word: "bill", hint: "billete" },
      { word: "euro", hint: "euro" },
      { word: "cash", hint: "efectivo" },
      { word: "card", hint: "tarjeta" },
      { word: "credit card", hint: "tarjeta de crédito" },
      { word: "invoice", hint: "factura" },
      { word: "receipt", hint: "recibo" },
      { word: "payment", hint: "pago" },
      { word: "transfer", hint: "transferencia" },
      { word: "debt", hint: "deuda" },
      { word: "loan", hint: "préstamo" },
      { word: "interest", hint: "interés" },
      { word: "change", hint: "cambio" }
    ]
  },

  banking: {
    name: "Banca",
    description: "Banco y servicios financieros",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    words: [
      { word: "bank", hint: "banco" },
      { word: "account", hint: "cuenta" },
      { word: "savings", hint: "ahorros" },
      { word: "checking", hint: "cuenta corriente" },
      { word: "atm", hint: "cajero automático" },
      { word: "deposit", hint: "depósito" },
      { word: "withdrawal", hint: "retiro" },
      { word: "balance", hint: "saldo" },
      { word: "statement", hint: "extracto" },
      { word: "mortgage", hint: "hipoteca" },
      { word: "investment", hint: "inversión" },
      { word: "stock", hint: "acción" },
      { word: "rate", hint: "tasa" },
      { word: "currency", hint: "moneda" },
      { word: "exchange", hint: "cambio" }
    ]
  },

  business: {
    name: "Negocios",
    description: "Empresas y comercio",
    icon: Building,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "business", hint: "negocio" },
      { word: "company", hint: "empresa" },
      { word: "enterprise", hint: "compañía" },
      { word: "boss", hint: "jefe" },
      { word: "manager", hint: "gerente" },
      { word: "employee", hint: "empleado" },
      { word: "office", hint: "oficina" },
      { word: "contract", hint: "contrato" },
      { word: "client", hint: "cliente" },
      { word: "sale", hint: "venta" },
      { word: "profit", hint: "ganancia" },
      { word: "loss", hint: "pérdida" },
      { word: "revenue", hint: "ingresos" },
      { word: "market", hint: "mercado" },
      { word: "competition", hint: "competencia" }
    ]
  }
};

export default wordBuilderCategories_part11;