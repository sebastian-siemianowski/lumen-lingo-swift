/**
 * SPANISH → ENGLISH WORD BUILDER - PART 8
 * Categories: 32-35
 * 4 categories, 15 words each = 60 words
 */

import { Smartphone, Wifi, Database, Dumbbell } from "lucide-react";

export const wordBuilderCategories_part8 = {
  mobile_devices: {
    name: "Dispositivos móviles",
    description: "Teléfonos inteligentes y tabletas",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "phone", hint: "teléfono" },
      { word: "smartphone", hint: "teléfono inteligente" },
      { word: "tablet", hint: "tableta" },
      { word: "screen", hint: "pantalla" },
      { word: "battery", hint: "batería" },
      { word: "charger", hint: "cargador" },
      { word: "headphones", hint: "auriculares" },
      { word: "camera", hint: "cámara" },
      { word: "app", hint: "aplicación" },
      { word: "message", hint: "mensaje" },
      { word: "call", hint: "llamada" },
      { word: "bluetooth", hint: "bluetooth" },
      { word: "touchscreen", hint: "pantalla táctil" },
      { word: "ringtone", hint: "tono de llamada" },
      { word: "notification", hint: "notificación" }
    ]
  },

  internet: {
    name: "Internet y red",
    description: "Mundo online y conexiones",
    icon: Wifi,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "internet", hint: "internet" },
      { word: "website", hint: "sitio web" },
      { word: "browser", hint: "navegador" },
      { word: "email", hint: "correo electrónico" },
      { word: "download", hint: "descargar" },
      { word: "upload", hint: "subir" },
      { word: "wifi", hint: "wifi" },
      { word: "network", hint: "red" },
      { word: "router", hint: "enrutador" },
      { word: "password", hint: "contraseña" },
      { word: "username", hint: "nombre de usuario" },
      { word: "login", hint: "inicio de sesión" },
      { word: "link", hint: "enlace" },
      { word: "search engine", hint: "buscador" },
      { word: "online", hint: "en línea" }
    ]
  },

  data_storage: {
    name: "Almacenamiento de datos",
    description: "Memoria y dispositivos de información",
    icon: Database,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "data", hint: "datos" },
      { word: "storage", hint: "almacenamiento" },
      { word: "hard drive", hint: "disco duro" },
      { word: "flash drive", hint: "memoria USB" },
      { word: "cloud", hint: "nube" },
      { word: "backup", hint: "copia de seguridad" },
      { word: "archive", hint: "archivo" },
      { word: "compression", hint: "compresión" },
      { word: "encryption", hint: "encriptación" },
      { word: "capacity", hint: "capacidad" },
      { word: "gigabyte", hint: "gigabyte" },
      { word: "terabyte", hint: "terabyte" },
      { word: "server", hint: "servidor" },
      { word: "database", hint: "base de datos" },
      { word: "recovery", hint: "recuperación" }
    ]
  },

  sports_fitness: {
    name: "Deportes y fitness",
    description: "Actividad física y ejercicios",
    icon: Dumbbell,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "sport", hint: "deporte" },
      { word: "soccer", hint: "fútbol" },
      { word: "basketball", hint: "baloncesto" },
      { word: "tennis", hint: "tenis" },
      { word: "swimming", hint: "natación" },
      { word: "running", hint: "correr" },
      { word: "training", hint: "entrenamiento" },
      { word: "fitness", hint: "fitness" },
      { word: "gymnastics", hint: "gimnasia" },
      { word: "yoga", hint: "yoga" },
      { word: "stadium", hint: "estadio" },
      { word: "team", hint: "equipo" },
      { word: "player", hint: "jugador" },
      { word: "competition", hint: "competición" },
      { word: "medal", hint: "medalla" }
    ]
  }
};

export default wordBuilderCategories_part8;