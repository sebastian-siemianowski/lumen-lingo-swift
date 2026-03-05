/**
 * GERMAN → SPANISH WORD BUILDER - PART 15
 * Categories: 63-66
 * 4 categories, 15 words each = 60 words
 */

import { MessageCircle, Phone, Mail, Share2 } from "lucide-react";

export const wordBuilderCategories_part15 = {
  conversation: {
    name: "Konversation",
    description: "Sprechen und Kommunikation",
    icon: MessageCircle,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "hablar", hint: "sprechen" },
      { word: "conversar", hint: "sich unterhalten" },
      { word: "charlar", hint: "plaudern" },
      { word: "decir", hint: "sagen" },
      { word: "contar", hint: "erzählen" },
      { word: "preguntar", hint: "fragen" },
      { word: "responder", hint: "antworten" },
      { word: "explicar", hint: "erklären" },
      { word: "describir", hint: "beschreiben" },
      { word: "comentar", hint: "kommentieren" },
      { word: "opinar", hint: "meinen" },
      { word: "discutir", hint: "diskutieren" },
      { word: "gritar", hint: "schreien" },
      { word: "susurrar", hint: "flüstern" },
      { word: "interrumpir", hint: "unterbrechen" }
    ]
  },

  phone_calls: {
    name: "Telefonate",
    description: "Telefonieren und Anrufe",
    icon: Phone,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "llamada", hint: "Anruf" },
      { word: "teléfono", hint: "Telefon" },
      { word: "llamar", hint: "anrufen" },
      { word: "contestar", hint: "abheben" },
      { word: "colgar", hint: "auflegen" },
      { word: "marcar", hint: "wählen" },
      { word: "número", hint: "Nummer" },
      { word: "tono", hint: "Freizeichen" },
      { word: "ocupado", hint: "besetzt" },
      { word: "buzón de voz", hint: "Mailbox" },
      { word: "mensaje", hint: "Nachricht" },
      { word: "comunicarse", hint: "sich melden" },
      { word: "señal", hint: "Signal" },
      { word: "línea", hint: "Leitung" },
      { word: "esperar", hint: "warten" }
    ]
  },

  correspondence: {
    name: "Briefverkehr",
    description: "Briefe und Post",
    icon: Mail,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "carta", hint: "Brief" },
      { word: "correo", hint: "Post" },
      { word: "sobre", hint: "Umschlag" },
      { word: "sello", hint: "Briefmarke" },
      { word: "dirección", hint: "Adresse" },
      { word: "remitente", hint: "Absender" },
      { word: "destinatario", hint: "Empfänger" },
      { word: "código postal", hint: "Postleitzahl" },
      { word: "paquete", hint: "Paket" },
      { word: "envío", hint: "Versand" },
      { word: "entrega", hint: "Zustellung" },
      { word: "buzón", hint: "Briefkasten" },
      { word: "cartero", hint: "Briefträger" },
      { word: "certificado", hint: "Einschreiben" },
      { word: "urgente", hint: "Eilpost" }
    ]
  },

  social_media: {
    name: "Soziale Medien",
    description: "Online-Netzwerke und Teilen",
    icon: Share2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "redes sociales", hint: "soziale Medien" },
      { word: "publicar", hint: "posten" },
      { word: "compartir", hint: "teilen" },
      { word: "me gusta", hint: "Like" },
      { word: "comentario", hint: "Kommentar" },
      { word: "seguir", hint: "folgen" },
      { word: "seguidor", hint: "Follower" },
      { word: "amigo", hint: "Freund" },
      { word: "perfil", hint: "Profil" },
      { word: "foto", hint: "Foto" },
      { word: "video", hint: "Video" },
      { word: "historia", hint: "Story" },
      { word: "mensaje directo", hint: "Direktnachricht" },
      { word: "etiqueta", hint: "Tag" },
      { word: "viral", hint: "viral" }
    ]
  }
};

export default wordBuilderCategories_part15;