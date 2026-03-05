/**
 * ENGLISH → SPANISH GRAMMAR - PART 11
 * 5 categories, 15 questions each
 */

import { Binary, Droplet, Sandwich, ShoppingCart, Phone } from "lucide-react";

export const part11Categories = {
  gender_agreement: {
    name: "Gender Agreement",
    description: "Master masculine and feminine forms",
    icon: Binary,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    questions: [
      {
        id: "gen_1",
        question: "El libro es _____.",
        translation: "(The book is interesting)",
        options: ["interesante", "interesanto", "interesanta", "interesantes"],
        correct: "interesante",
        explanation: "Adjectives ending in -e don't change for gender. 'Interesante' for both."
      },
      {
        id: "gen_2",
        question: "La casa es _____.",
        translation: "(The house is big)",
        options: ["grande", "granda", "grando", "grandes"],
        correct: "grande",
        explanation: "Adjectives ending in -e are invariable for gender. 'Grande' for all."
      },
      {
        id: "gen_3",
        question: "El gato es _____.",
        translation: "(The cat is black)",
        options: ["negro", "negra", "negros", "negras"],
        correct: "negro",
        explanation: "Adjectives ending in -o change to -a for feminine. Masculine uses -o."
      },
      {
        id: "gen_4",
        question: "La puerta está _____.",
        translation: "(The door is open)",
        options: ["abierta", "abierto", "abiertas", "abiertos"],
        correct: "abierta",
        explanation: "Past participles as adjectives agree in gender. 'Abierta' for feminine."
      },
      {
        id: "gen_5",
        question: "Los libros son _____.",
        translation: "(The books are new)",
        options: ["nuevos", "nuevo", "nueva", "nuevas"],
        correct: "nuevos",
        explanation: "Plural masculine adjectives end in -os. 'Nuevos' agrees with 'libros'."
      },
      {
        id: "gen_6",
        question: "Las flores son _____.",
        translation: "(The flowers are beautiful)",
        options: ["bonitas", "bonito", "bonita", "bonitos"],
        correct: "bonitas",
        explanation: "Plural feminine adjectives end in -as. 'Bonitas' for 'flores'."
      },
      {
        id: "gen_7",
        question: "El hombre es _____.",
        translation: "(The man is German)",
        options: ["alemán", "alemana", "alemanes", "alemanas"],
        correct: "alemán",
        explanation: "Nationality adjectives ending in consonant add -a for feminine. Masculine keeps original."
      },
      {
        id: "gen_8",
        question: "La mujer es _____.",
        translation: "(The woman is Spanish)",
        options: ["española", "español", "españoles", "españolas"],
        correct: "española",
        explanation: "Nationalities ending in consonant add -a. 'Español' → 'española'."
      },
      {
        id: "gen_9",
        question: "Los estudiantes son _____.",
        translation: "(The students are hardworking)",
        options: ["trabajadores", "trabajador", "trabajadora", "trabajadoras"],
        correct: "trabajadores",
        explanation: "Adjectives ending in -or add -a for feminine, -es for plural masculine."
      },
      {
        id: "gen_10",
        question: "Las chicas son _____.",
        translation: "(The girls are young)",
        options: ["jóvenes", "joven", "jóven", "jovenes"],
        correct: "jóvenes",
        explanation: "Adjectives ending in consonant add -es for plural. 'Joven' → 'jóvenes'."
      },
      {
        id: "gen_11",
        question: "El problema es _____.",
        translation: "(The problem is difficult)",
        options: ["difícil", "difícila", "difícilo", "difíciles"],
        correct: "difícil",
        explanation: "Adjectives ending in -l don't change for gender. 'Difícil' for both."
      },
      {
        id: "gen_12",
        question: "La mesa es _____.",
        translation: "(The table is brown)",
        options: ["marrón", "marrona", "marrones", "marronas"],
        correct: "marrón",
        explanation: "Color 'marrón' doesn't change for gender. Invariable adjective."
      },
      {
        id: "gen_13",
        question: "El coche es _____.",
        translation: "(The car is fast)",
        options: ["rápido", "rápida", "rápidos", "rápidas"],
        correct: "rápido",
        explanation: "Regular -o adjective for masculine singular. 'Rápido' matches 'coche'."
      },
      {
        id: "gen_14",
        question: "Las ventanas están _____.",
        translation: "(The windows are closed)",
        options: ["cerradas", "cerrado", "cerrada", "cerrados"],
        correct: "cerradas",
        explanation: "Past participle agrees: plural feminine. 'Cerradas' for 'ventanas'."
      },
      {
        id: "gen_15",
        question: "El agua está _____.",
        translation: "(The water is cold)",
        options: ["fría", "frío", "frías", "fríos"],
        correct: "fría",
        explanation: "'Agua' is feminine despite using 'el'. Adjective uses feminine 'fría'."
      }
    ]
  },

  weather_climate: {
    name: "Weather and Climate",
    description: "Describe weather conditions",
    icon: Droplet,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    questions: [
      {
        id: "wea_1",
        question: "_____ sol hoy.",
        translation: "(It's sunny today)",
        options: ["Hace", "Hay", "Es", "Está"],
        correct: "Hace",
        explanation: "'Hacer' for weather. 'Hace sol' is standard for sunny."
      },
      {
        id: "wea_2",
        question: "_____ mucho frío.",
        translation: "(It's very cold)",
        options: ["Hace", "Hay", "Es", "Está"],
        correct: "Hace",
        explanation: "'Hacer frío' for cold weather. Use hacer for temperature."
      },
      {
        id: "wea_3",
        question: "_____ lloviendo.",
        translation: "(It's raining)",
        options: ["Está", "Es", "Hace", "Hay"],
        correct: "Está",
        explanation: "'Estar' + gerund for ongoing weather. 'Está lloviendo' for rain in progress."
      },
      {
        id: "wea_4",
        question: "_____ viento fuerte.",
        translation: "(It's very windy)",
        options: ["Hace", "Hay", "Es", "Está"],
        correct: "Hace",
        explanation: "'Hacer viento' for wind. Add adjective like 'fuerte' for intensity."
      },
      {
        id: "wea_5",
        question: "_____ nublado.",
        translation: "(It's cloudy)",
        options: ["Está", "Es", "Hace", "Hay"],
        correct: "Está",
        explanation: "'Estar' + adjective for weather conditions. 'Está nublado' for cloudy."
      },
      {
        id: "wea_6",
        question: "_____ niebla esta mañana.",
        translation: "(There's fog this morning)",
        options: ["Hay", "Hace", "Es", "Está"],
        correct: "Hay",
        explanation: "'Haber' for fog. 'Hay niebla' standard expression."
      },
      {
        id: "wea_7",
        question: "_____ un día hermoso.",
        translation: "(It's a beautiful day)",
        options: ["Es", "Está", "Hace", "Hay"],
        correct: "Es",
        explanation: "'Ser' + noun phrase. 'Es un día' when describing day as noun."
      },
      {
        id: "wea_8",
        question: "_____ calor en verano.",
        translation: "(It's hot in summer)",
        options: ["Hace", "Hay", "Es", "Está"],
        correct: "Hace",
        explanation: "'Hacer calor' for hot weather. Opposite of 'hacer frío'."
      },
      {
        id: "wea_9",
        question: "_____ tormenta.",
        translation: "(There's a storm)",
        options: ["Hay", "Hace", "Es", "Está"],
        correct: "Hay",
        explanation: "'Haber' for storms and weather events. 'Hay tormenta'."
      },
      {
        id: "wea_10",
        question: "_____ buen tiempo.",
        translation: "(The weather is nice)",
        options: ["Hace", "Hay", "Es", "Está"],
        correct: "Hace",
        explanation: "'Hacer buen tiempo' for nice weather. Opposite is 'mal tiempo'."
      },
      {
        id: "wea_11",
        question: "_____ nevando en las montañas.",
        translation: "(It's snowing in the mountains)",
        options: ["Está", "Es", "Hace", "Hay"],
        correct: "Está",
        explanation: "'Estar' + gerund for ongoing snow. 'Está nevando'."
      },
      {
        id: "wea_12",
        question: "_____ mucha humedad.",
        translation: "(It's very humid)",
        options: ["Hay", "Hace", "Es", "Está"],
        correct: "Hay",
        explanation: "'Haber' for humidity. 'Hay humedad' standard expression."
      },
      {
        id: "wea_13",
        question: "_____ fresco por la noche.",
        translation: "(It's cool at night)",
        options: ["Hace", "Hay", "Es", "Está"],
        correct: "Hace",
        explanation: "'Hacer fresco' for cool temperature. Between hot and cold."
      },
      {
        id: "wea_14",
        question: "El cielo _____ despejado.",
        translation: "(The sky is clear)",
        options: ["está", "es", "hace", "hay"],
        correct: "está",
        explanation: "'Estar' + adjective for sky condition. 'Despejado' means clear."
      },
      {
        id: "wea_15",
        question: "_____ un clima tropical.",
        translation: "(It has a tropical climate)",
        options: ["Tiene", "Hace", "Hay", "Es"],
        correct: "Tiene",
        explanation: "Use 'tener' for having a climate. 'Tener un clima' for describing regions."
      }
    ]
  },

  at_restaurant: {
    name: "At the Restaurant",
    description: "Order food and interact in restaurants",
    icon: Sandwich,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    questions: [
      {
        id: "rest_1",
        question: "¿Me _____ el menú?",
        translation: "(Can you bring me the menu?)",
        options: ["trae", "traes", "da", "das"],
        correct: "trae",
        explanation: "'Traer' (bring) in informal command form. 'Trae' is tú command."
      },
      {
        id: "rest_2",
        question: "_____ una mesa para dos.",
        translation: "(I want a table for two)",
        options: ["Quiero", "Querría", "Me gustaría", "Necesito"],
        correct: "Quiero",
        explanation: "'Querer' is direct way to request. 'Quiero una mesa' is standard."
      },
      {
        id: "rest_3",
        question: "¿Qué _____ recomienda?",
        translation: "(What do you recommend? - formal)",
        options: ["me", "le", "te", "se"],
        correct: "me",
        explanation: "'Qué me recomienda' asks for recommendation. 'Me' for to me."
      },
      {
        id: "rest_4",
        question: "_____ de beber agua.",
        translation: "(I want to drink water)",
        options: ["Quiero", "Quisiera", "Me gustaría", "Para"],
        correct: "Quiero",
        explanation: "'Querer' + de + infinitive for ordering drinks. Direct request."
      },
      {
        id: "rest_5",
        question: "_____ el pollo, por favor.",
        translation: "(I'll have the chicken, please)",
        options: ["Para mí", "Yo quiero", "Me gusta", "Tengo"],
        correct: "Para mí",
        explanation: "'Para mí' when ordering. Standard restaurant phrase."
      },
      {
        id: "rest_6",
        question: "La cuenta, _____.",
        translation: "(The check, please)",
        options: ["por favor", "gracias", "ahora", "aquí"],
        correct: "por favor",
        explanation: "'La cuenta, por favor' to request bill. Essential phrase."
      },
      {
        id: "rest_7",
        question: "¿Está _____ el pescado?",
        translation: "(Is the fish fresh?)",
        options: ["fresco", "rico", "bueno", "sabroso"],
        correct: "fresco",
        explanation: "'Fresco' means fresh. Important question for seafood."
      },
      {
        id: "rest_8",
        question: "_____ alérgico al maní.",
        translation: "(I'm allergic to peanuts)",
        options: ["Soy", "Estoy", "Tengo", "Hay"],
        correct: "Soy",
        explanation: "'Ser alérgico' for allergies. Permanent condition uses ser."
      },
      {
        id: "rest_9",
        question: "¿Tienen menú _____?",
        translation: "(Do you have a vegetarian menu?)",
        options: ["vegetariano", "vegetal", "de vegetales", "sin carne"],
        correct: "vegetariano",
        explanation: "'Menú vegetariano' standard term. Adjective agrees with menu."
      },
      {
        id: "rest_10",
        question: "Está muy _____.",
        translation: "(It's very salty)",
        options: ["salado", "salada", "con sal", "de sal"],
        correct: "salado",
        explanation: "'Salado' means salty. Agrees with understood masculine food item."
      },
      {
        id: "rest_11",
        question: "Sin _____, por favor.",
        translation: "(Without ice, please)",
        options: ["hielo", "sal", "azúcar", "limón"],
        correct: "hielo",
        explanation: "'Sin hielo' common drink request. Without ice."
      },
      {
        id: "rest_12",
        question: "¿_____ tarjeta?",
        translation: "(Do you accept cards?)",
        options: ["Aceptan", "Tienen", "Usan", "Pagan"],
        correct: "Aceptan",
        explanation: "'¿Aceptan tarjeta?' asks about credit cards. Standard question."
      },
      {
        id: "rest_13",
        question: "La comida está _____.",
        translation: "(The food is delicious)",
        options: ["riquísima", "muy rica", "deliciosa", "buenísima"],
        correct: "riquísima",
        explanation: "Superlative '-ísima' shows extreme. 'Rica' → 'riquísima' (very delicious)."
      },
      {
        id: "rest_14",
        question: "¿Me puede _____ más pan?",
        translation: "(Can you bring me more bread?)",
        options: ["traer", "dar", "poner", "servir"],
        correct: "traer",
        explanation: "'¿Me puede traer?' polite request. Can you bring me."
      },
      {
        id: "rest_15",
        question: "Está _____ picante para mí.",
        translation: "(It's too spicy for me)",
        options: ["demasiado", "muy", "mucho", "bastante"],
        correct: "demasiado",
        explanation: "'Demasiado' means too much/too. Excessive amount."
      }
    ]
  },

  shopping_phrases: {
    name: "Shopping Expressions",
    description: "Buy things and ask about prices",
    icon: ShoppingCart,
    color: "from-green-500 to-teal-600",
    level: "beginner",
    questions: [
      {
        id: "shop_1",
        question: "¿_____ cuesta esto?",
        translation: "(How much does this cost?)",
        options: ["Cuánto", "Qué", "Cuál", "Cómo"],
        correct: "Cuánto",
        explanation: "'¿Cuánto cuesta?' standard price question. Essential shopping phrase."
      },
      {
        id: "shop_2",
        question: "_____ llevarlo.",
        translation: "(I'll take it)",
        options: ["Me lo llevo", "Lo llevo", "Lo compro", "Me llevo"],
        correct: "Me lo llevo",
        explanation: "'Me lo llevo' means I'll take it. Reflexive + object pronoun."
      },
      {
        id: "shop_3",
        question: "¿Tiene esto en _____?",
        translation: "(Do you have this in blue?)",
        options: ["azul", "el azul", "la azul", "azules"],
        correct: "azul",
        explanation: "Colors as adjectives don't need article. 'En azul' (in blue)."
      },
      {
        id: "shop_4",
        question: "Es muy _____.",
        translation: "(It's very expensive)",
        options: ["caro", "cara", "caros", "caras"],
        correct: "caro",
        explanation: "'Caro' (expensive) agrees with item. Assume masculine for 'esto'."
      },
      {
        id: "shop_5",
        question: "¿Tiene una talla _____?",
        translation: "(Do you have a smaller size?)",
        options: ["más pequeña", "pequeña", "menor", "chica"],
        correct: "más pequeña",
        explanation: "'Talla más pequeña' for smaller size. Comparative form."
      },
      {
        id: "shop_6",
        question: "¿Puedo _____ esto?",
        translation: "(Can I try this on?)",
        options: ["probarme", "probar", "usar", "ver"],
        correct: "probarme",
        explanation: "'Probarse' (try on) is reflexive. 'Puedo probarme' standard question."
      },
      {
        id: "shop_7",
        question: "¿Hacen _____?",
        translation: "(Do you give discounts?)",
        options: ["descuentos", "rebajas", "ofertas", "precios"],
        correct: "descuentos",
        explanation: "'Hacer descuentos' means give discounts. 'Descuento' is discount."
      },
      {
        id: "shop_8",
        question: "Pago en _____.",
        translation: "(I'll pay in cash)",
        options: ["efectivo", "dinero", "monedas", "billetes"],
        correct: "efectivo",
        explanation: "'En efectivo' means in cash. Standard payment term."
      },
      {
        id: "shop_9",
        question: "¿Dónde está el _____?",
        translation: "(Where is the fitting room?)",
        options: ["probador", "vestidor", "cambiador", "baño"],
        correct: "probador",
        explanation: "'Probador' means fitting room. Where you try on clothes."
      },
      {
        id: "shop_10",
        question: "Está en _____.",
        translation: "(It's on sale)",
        options: ["oferta", "descuento", "rebaja", "promoción"],
        correct: "oferta",
        explanation: "'Estar en oferta' means on sale. Special price."
      },
      {
        id: "shop_11",
        question: "¿Aceptan _____?",
        translation: "(Do you accept credit cards?)",
        options: ["tarjetas", "tarjeta", "crédito", "pago"],
        correct: "tarjetas",
        explanation: "'¿Aceptan tarjetas?' asks about cards. Plural for any cards."
      },
      {
        id: "shop_12",
        question: "Necesito el _____.",
        translation: "(I need the receipt)",
        options: ["recibo", "ticket", "comprobante", "factura"],
        correct: "recibo",
        explanation: "'Recibo' is receipt. 'Ticket' also used but 'recibo' more formal."
      },
      {
        id: "shop_13",
        question: "¿Cuál es su talla de _____?",
        translation: "(What's your shoe size?)",
        options: ["zapato", "pie", "calzado", "número"],
        correct: "zapato",
        explanation: "'Talla de zapato' for shoe size. Specific size question."
      },
      {
        id: "shop_14",
        question: "¿Puedo _____ esto?",
        translation: "(Can I exchange this?)",
        options: ["cambiar", "devolver", "regresar", "volver"],
        correct: "cambiar",
        explanation: "'Cambiar' means exchange/change. 'Devolver' means return."
      },
      {
        id: "shop_15",
        question: "Está _____.",
        translation: "(It's too tight)",
        options: ["muy apretado", "pequeño", "estrecho", "ajustado"],
        correct: "muy apretado",
        explanation: "'Muy apretado' for too tight clothing. Doesn't fit well."
      }
    ]
  },

  telephone_conversation: {
    name: "Phone Conversations",
    description: "Make and receive calls",
    icon: Phone,
    color: "from-violet-500 to-purple-600",
    level: "beginner",
    questions: [
      {
        id: "tel_1",
        question: "_____?",
        translation: "(Hello? - answering phone in Spain)",
        options: ["¿Diga?", "¿Hola?", "¿Bueno?", "¿Aló?"],
        correct: "¿Diga?",
        explanation: "'¿Diga?' common in Spain for answering. Regional variations exist."
      },
      {
        id: "tel_2",
        question: "¿Está _____?",
        translation: "(Is Carlos there?)",
        options: ["Carlos", "el Carlos", "a Carlos", "de Carlos"],
        correct: "Carlos",
        explanation: "'¿Está + name?' to ask for someone. No article with names."
      },
      {
        id: "tel_3",
        question: "¿De _____ de quién?",
        translation: "(Who's calling?)",
        options: ["parte", "nombre", "lado", "persona"],
        correct: "parte",
        explanation: "'¿De parte de quién?' polite way to ask caller. Standard phrase."
      },
      {
        id: "tel_4",
        question: "Un momento, _____.",
        translation: "(One moment, please)",
        options: ["por favor", "espere", "ahora", "ya"],
        correct: "por favor",
        explanation: "'Un momento, por favor' when putting on hold. Polite pause."
      },
      {
        id: "tel_5",
        question: "Se _____.",
        translation: "(You have the wrong number)",
        options: ["equivocó", "confundió", "erró", "falló"],
        correct: "equivocó",
        explanation: "'Se equivocó' means wrong number. Polite way to inform."
      },
      {
        id: "tel_6",
        question: "¿Puedo dejar un _____?",
        translation: "(Can I leave a message?)",
        options: ["mensaje", "recado", "aviso", "nota"],
        correct: "mensaje",
        explanation: "'Dejar un mensaje' standard for leaving message. 'Recado' also common."
      },
      {
        id: "tel_7",
        question: "Te _____ luego.",
        translation: "(I'll call you later)",
        options: ["llamo", "llamaré", "llamaba", "he llamado"],
        correct: "llamo",
        explanation: "Present for near future. 'Te llamo' more natural than future tense."
      },
      {
        id: "tel_8",
        question: "La línea está _____.",
        translation: "(The line is busy)",
        options: ["ocupada", "libre", "cortada", "mala"],
        correct: "ocupada",
        explanation: "'Ocupada' means busy line. Can't get through."
      },
      {
        id: "tel_9",
        question: "Se _____ la llamada.",
        translation: "(The call got cut off)",
        options: ["cortó", "terminó", "acabó", "perdió"],
        correct: "cortó",
        explanation: "'Cortarse' for disconnected call. 'Se cortó' is standard."
      },
      {
        id: "tel_10",
        question: "No te _____ bien.",
        translation: "(I can't hear you well)",
        options: ["oigo", "escucho", "oyes", "escuchas"],
        correct: "oigo",
        explanation: "'No te oigo' for can't hear on phone. 'Oír' for hearing."
      },
      {
        id: "tel_11",
        question: "¿Puedo hablar _____ Juan?",
        translation: "(Can I speak with Juan?)",
        options: ["con", "a", "de", "para"],
        correct: "con",
        explanation: "'Hablar con' means speak with. Standard preposition."
      },
      {
        id: "tel_12",
        question: "Ahora _____ paso.",
        translation: "(I'll put him on now)",
        options: ["te lo", "se lo", "me lo", "le lo"],
        correct: "te lo",
        explanation: "'Te lo paso' means I'll pass him to you. Phone idiom."
      },
      {
        id: "tel_13",
        question: "Llamé pero no _____.",
        translation: "(I called but you didn't answer)",
        options: ["contestaste", "respondiste", "cogiste", "tomaste"],
        correct: "contestaste",
        explanation: "'Contestar' (answer) phone is standard. Most common verb."
      },
      {
        id: "tel_14",
        question: "Déjame tu _____.",
        translation: "(Leave me your number)",
        options: ["número", "teléfono", "celular", "móvil"],
        correct: "número",
        explanation: "'Número (de teléfono)' standard. Phone number request."
      },
      {
        id: "tel_15",
        question: "Te devuelvo la _____ más tarde.",
        translation: "(I'll call you back later)",
        options: ["llamada", "llama", "teléfono", "voz"],
        correct: "llamada",
        explanation: "'Devolver la llamada' means return call. Call back idiom."
      }
    ]
  }
};

export default part11Categories;