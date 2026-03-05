/**
 * SPANISH → ENGLISH WORD BUILDER - PART 18
 * Categories: 74-78
 * 5 categories, 15 words each = 75 words
 */

import { Calculator, Tv, Radio, Newspaper, Mail } from "lucide-react";

export const wordBuilderCategories_part18 = {
  math_operations: {
    name: "Operaciones matemáticas",
    description: "Acciones y conceptos matemáticos",
    icon: Calculator,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "add", hint: "sumar" },
      { word: "subtract", hint: "restar" },
      { word: "multiply", hint: "multiplicar" },
      { word: "divide", hint: "dividir" },
      { word: "sum", hint: "suma" },
      { word: "difference", hint: "diferencia" },
      { word: "product", hint: "producto" },
      { word: "quotient", hint: "cociente" },
      { word: "percent", hint: "porcentaje" },
      { word: "fraction", hint: "fracción" },
      { word: "decimal", hint: "decimal" },
      { word: "square root", hint: "raíz cuadrada" },
      { word: "power", hint: "potencia" },
      { word: "equation", hint: "ecuación" },
      { word: "formula", hint: "fórmula" }
    ]
  },

  media_television: {
    name: "Medios y televisión",
    description: "Programas televisivos y medios",
    icon: Tv,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "television", hint: "televisión" },
      { word: "channel", hint: "canal" },
      { word: "program", hint: "programa" },
      { word: "news", hint: "noticias" },
      { word: "documentary", hint: "documental" },
      { word: "talk show", hint: "programa de entrevistas" },
      { word: "game show", hint: "concurso" },
      { word: "commercial", hint: "anuncio" },
      { word: "remote control", hint: "control remoto" },
      { word: "screen", hint: "pantalla" },
      { word: "antenna", hint: "antena" },
      { word: "cable", hint: "cable" },
      { word: "satellite", hint: "satélite" },
      { word: "livestream", hint: "transmisión en vivo" },
      { word: "broadcast", hint: "emisión" }
    ]
  },

  radio_podcast: {
    name: "Radio y podcasts",
    description: "Programas de radio y digitales",
    icon: Radio,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "radio", hint: "radio" },
      { word: "station", hint: "estación" },
      { word: "podcast", hint: "podcast" },
      { word: "audiobook", hint: "audiolibro" },
      { word: "host", hint: "presentador" },
      { word: "broadcast", hint: "emisión" },
      { word: "music", hint: "música" },
      { word: "news", hint: "noticias" },
      { word: "interview", hint: "entrevista" },
      { word: "frequency", hint: "frecuencia" },
      { word: "reception", hint: "recepción" },
      { word: "livestream", hint: "transmisión en vivo" },
      { word: "listener", hint: "oyente" },
      { word: "playlist", hint: "lista de reproducción" },
      { word: "episode", hint: "episodio" }
    ]
  },

  press_newspapers: {
    name: "Prensa y periódicos",
    description: "Medios impresos y periodismo",
    icon: Newspaper,
    color: "from-gray-500 to-slate-600",
    level: "advanced",
    words: [
      { word: "newspaper", hint: "periódico" },
      { word: "magazine", hint: "revista" },
      { word: "article", hint: "artículo" },
      { word: "headline", hint: "titular" },
      { word: "report", hint: "informe" },
      { word: "commentary", hint: "comentario" },
      { word: "interview", hint: "entrevista" },
      { word: "journalist", hint: "periodista" },
      { word: "editor", hint: "editor" },
      { word: "publisher", hint: "editorial" },
      { word: "circulation", hint: "tirada" },
      { word: "subscription", hint: "suscripción" },
      { word: "issue", hint: "edición" },
      { word: "press release", hint: "comunicado de prensa" },
      { word: "column", hint: "columna" }
    ]
  },

  correspondence: {
    name: "Correspondencia",
    description: "Cartas y comunicación escrita",
    icon: Mail,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "letter", hint: "carta" },
      { word: "postcard", hint: "postal" },
      { word: "package", hint: "paquete" },
      { word: "envelope", hint: "sobre" },
      { word: "stamp", hint: "sello" },
      { word: "sender", hint: "remitente" },
      { word: "recipient", hint: "destinatario" },
      { word: "address", hint: "dirección" },
      { word: "zip code", hint: "código postal" },
      { word: "postage", hint: "franqueo" },
      { word: "registered mail", hint: "correo certificado" },
      { word: "airmail", hint: "correo aéreo" },
      { word: "mailbox", hint: "buzón" },
      { word: "mailman", hint: "cartero" },
      { word: "delivery", hint: "entrega" }
    ]
  }
};

export default wordBuilderCategories_part18;