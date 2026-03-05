/**
 * POLISH → SPANISH WORD BUILDER - PART 4
 * Categories: 16-30
 * 15 categories, 15 words each = 225 words
 */

import { Clock, Calendar, Star, Coffee, Mountain, Building, Phone, Gift, Music, Camera, Zap, Droplets, Snowflake, Heart } from "lucide-react";

export const wordBuilderCategories_part4 = {
  time_expressions: {
    name: "Wyrażenia czasowe",
    description: "Opanuj słownictwo związane z czasem",
    icon: Clock,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "hora", hint: "godzina" },
      { word: "minuto", hint: "minuta" },
      { word: "segundo", hint: "sekunda" },
      { word: "mañana", hint: "ranek" },
      { word: "tarde", hint: "popołudnie" },
      { word: "noche", hint: "noc" },
      { word: "hoy", hint: "dziś" },
      { word: "ayer", hint: "wczoraj" },
      { word: "mañana", hint: "jutro" },
      { word: "semana", hint: "tydzień" },
      { word: "mes", hint: "miesiąc" },
      { word: "año", hint: "rok" },
      { word: "ahora", hint: "teraz" },
      { word: "después", hint: "potem" },
      { word: "antes", hint: "przed" }
    ]
  },

  days_months: {
    name: "Dni i miesiące",
    description: "Poruszaj się po kalendarzach i datach",
    icon: Calendar,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "lunes", hint: "poniedziałek" },
      { word: "martes", hint: "wtorek" },
      { word: "miércoles", hint: "środa" },
      { word: "jueves", hint: "czwartek" },
      { word: "viernes", hint: "piątek" },
      { word: "sábado", hint: "sobota" },
      { word: "domingo", hint: "niedziela" },
      { word: "enero", hint: "styczeń" },
      { word: "febrero", hint: "luty" },
      { word: "marzo", hint: "marzec" },
      { word: "abril", hint: "kwiecień" },
      { word: "mayo", hint: "maj" },
      { word: "junio", hint: "czerwiec" },
      { word: "julio", hint: "lipiec" },
      { word: "agosto", hint: "sierpień" }
    ]
  },

  numbers: {
    name: "Liczby",
    description: "Licz i określaj ilości",
    icon: Star,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "uno", hint: "jeden" },
      { word: "dos", hint: "dwa" },
      { word: "tres", hint: "trzy" },
      { word: "cuatro", hint: "cztery" },
      { word: "cinco", hint: "pięć" },
      { word: "seis", hint: "sześć" },
      { word: "siete", hint: "siedem" },
      { word: "ocho", hint: "osiem" },
      { word: "nueve", hint: "dziewięć" },
      { word: "diez", hint: "dziesięć" },
      { word: "veinte", hint: "dwadzieścia" },
      { word: "treinta", hint: "trzydzieści" },
      { word: "cien", hint: "sto" },
      { word: "mil", hint: "tysiąc" },
      { word: "millón", hint: "milion" }
    ]
  },

  drinks: {
    name: "Napoje",
    description: "Zamawiaj z pewnością siebie",
    icon: Coffee,
    color: "from-amber-500 to-brown-600",
    level: "beginner",
    words: [
      { word: "agua", hint: "woda" },
      { word: "café", hint: "kawa" },
      { word: "té", hint: "herbata" },
      { word: "jugo", hint: "sok" },
      { word: "refresco", hint: "napój gazowany" },
      { word: "vino", hint: "wino" },
      { word: "cerveza", hint: "piwo" },
      { word: "leche", hint: "mleko" },
      { word: "chocolate", hint: "gorąca czekolada" },
      { word: "batido", hint: "koktajl" },
      { word: "limonada", hint: "lemoniada" },
      { word: "naranjada", hint: "orangeada" },
      { word: "licuado", hint: "shake" },
      { word: "cóctel", hint: "koktajl" },
      { word: "sangría", hint: "sangria" }
    ]
  },

  nature: {
    name: "Natura",
    description: "Doceniaj świat naturalny",
    icon: Mountain,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "montaña", hint: "góra" },
      { word: "río", hint: "rzeka" },
      { word: "lago", hint: "jezioro" },
      { word: "mar", hint: "morze" },
      { word: "océano", hint: "ocean" },
      { word: "playa", hint: "plaża" },
      { word: "bosque", hint: "las" },
      { word: "árbol", hint: "drzewo" },
      { word: "flor", hint: "kwiat" },
      { word: "hierba", hint: "trawa" },
      { word: "piedra", hint: "kamień" },
      { word: "arena", hint: "piasek" },
      { word: "estrella", hint: "gwiazda" },
      { word: "luna", hint: "księżyc" },
      { word: "sol", hint: "słońce" }
    ]
  },

  city_places: {
    name: "Miejsca w mieście",
    description: "Poruszaj się po środowisku miejskim",
    icon: Building,
    color: "from-slate-500 to-gray-600",
    level: "beginner",
    words: [
      { word: "hospital", hint: "szpital" },
      { word: "escuela", hint: "szkoła" },
      { word: "banco", hint: "bank" },
      { word: "tienda", hint: "sklep" },
      { word: "restaurante", hint: "restauracja" },
      { word: "hotel", hint: "hotel" },
      { word: "museo", hint: "muzeum" },
      { word: "biblioteca", hint: "biblioteka" },
      { word: "parque", hint: "park" },
      { word: "cine", hint: "kino" },
      { word: "teatro", hint: "teatr" },
      { word: "iglesia", hint: "kościół" },
      { word: "plaza", hint: "plac" },
      { word: "calle", hint: "ulica" },
      { word: "mercado", hint: "targ" }
    ]
  },

  technology: {
    name: "Technologia",
    description: "Pozostań połączony z nowoczesną technologią",
    icon: Phone,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "teléfono", hint: "telefon" },
      { word: "computadora", hint: "komputer" },
      { word: "internet", hint: "internet" },
      { word: "correo", hint: "email" },
      { word: "mensaje", hint: "wiadomość" },
      { word: "aplicación", hint: "aplikacja" },
      { word: "pantalla", hint: "ekran" },
      { word: "teclado", hint: "klawiatura" },
      { word: "ratón", hint: "mysz" },
      { word: "impresora", hint: "drukarka" },
      { word: "cámara", hint: "kamera" },
      { word: "tableta", hint: "tablet" },
      { word: "altavoz", hint: "głośnik" },
      { word: "auricular", hint: "słuchawka" },
      { word: "archivo", hint: "plik" }
    ]
  },

  celebrations: {
    name: "Święta",
    description: "Dołącz do uroczystości",
    icon: Gift,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "fiesta", hint: "impreza" },
      { word: "cumpleaños", hint: "urodziny" },
      { word: "boda", hint: "wesele" },
      { word: "regalo", hint: "prezent" },
      { word: "pastel", hint: "ciasto" },
      { word: "decoración", hint: "dekoracja" },
      { word: "invitación", hint: "zaproszenie" },
      { word: "celebración", hint: "uroczystość" },
      { word: "aniversario", hint: "rocznica" },
      { word: "navidad", hint: "Boże Narodzenie" },
      { word: "añonuevo", hint: "Nowy Rok" },
      { word: "graduación", hint: "ukończenie" },
      { word: "sorpresa", hint: "niespodzianka" },
      { word: "brindis", hint: "toast" },
      { word: "confeti", hint: "konfetti" }
    ]
  },

  music_instruments: {
    name: "Muzyka i instrumenty",
    description: "Wyrażaj muzyczną pasję",
    icon: Music,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "guitarra", hint: "gitara" },
      { word: "piano", hint: "pianino" },
      { word: "violín", hint: "skrzypce" },
      { word: "batería", hint: "perkusja" },
      { word: "flauta", hint: "flet" },
      { word: "trompeta", hint: "trąbka" },
      { word: "saxofón", hint: "saksofon" },
      { word: "canción", hint: "piosenka" },
      { word: "música", hint: "muzyka" },
      { word: "melodía", hint: "melodia" },
      { word: "ritmo", hint: "rytm" },
      { word: "concierto", hint: "koncert" },
      { word: "banda", hint: "zespół" },
      { word: "cantante", hint: "piosenkarz" },
      { word: "compositor", hint: "kompozytor" }
    ]
  },

  hobbies: {
    name: "Hobby",
    description: "Dziel się swoimi zainteresowaniami",
    icon: Camera,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "lectura", hint: "czytanie" },
      { word: "pintura", hint: "malowanie" },
      { word: "fotografía", hint: "fotografia" },
      { word: "cocina", hint: "gotowanie" },
      { word: "jardinería", hint: "ogrodnictwo" },
      { word: "costura", hint: "szycie" },
      { word: "tejido", hint: "dziewiarstwo" },
      { word: "colección", hint: "kolekcjonowanie" },
      { word: "pesca", hint: "wędkarstwo" },
      { word: "camping", hint: "kemping" },
      { word: "senderismo", hint: "wędrówki" },
      { word: "baile", hint: "taniec" },
      { word: "yoga", hint: "joga" },
      { word: "ajedrez", hint: "szachy" },
      { word: "videojuego", hint: "gra wideo" }
    ]
  },

  adjectives_basic: {
    name: "Podstawowe przymiotniki",
    description: "Opisuj świat przymiotnikami",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "grande", hint: "duży" },
      { word: "pequeño", hint: "mały" },
      { word: "alto", hint: "wysoki" },
      { word: "bajo", hint: "niski" },
      { word: "nuevo", hint: "nowy" },
      { word: "viejo", hint: "stary" },
      { word: "bueno", hint: "dobry" },
      { word: "malo", hint: "zły" },
      { word: "feliz", hint: "szczęśliwy" },
      { word: "triste", hint: "smutny" },
      { word: "rápido", hint: "szybki" },
      { word: "lento", hint: "wolny" },
      { word: "fácil", hint: "łatwy" },
      { word: "difícil", hint: "trudny" },
      { word: "hermoso", hint: "piękny" }
    ]
  },

  action_verbs: {
    name: "Czasowniki czynności",
    description: "Wyrażaj działania podstawowymi czasownikami",
    icon: Zap,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "hablar", hint: "mówić" },
      { word: "comer", hint: "jeść" },
      { word: "beber", hint: "pić" },
      { word: "dormir", hint: "spać" },
      { word: "caminar", hint: "chodzić" },
      { word: "correr", hint: "biegać" },
      { word: "escribir", hint: "pisać" },
      { word: "leer", hint: "czytać" },
      { word: "ver", hint: "widzieć" },
      { word: "oír", hint: "słyszeć" },
      { word: "pensar", hint: "myśleć" },
      { word: "sentir", hint: "czuć" },
      { word: "vivir", hint: "żyć" },
      { word: "trabajar", hint: "pracować" },
      { word: "estudiar", hint: "studiować" }
    ]
  },

  emotions_feelings: {
    name: "Emocje",
    description: "Wyrażaj uczucia słownictwem emocjonalnym",
    icon: Heart,
    color: "from-pink-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "amor", hint: "miłość" },
      { word: "alegría", hint: "radość" },
      { word: "tristeza", hint: "smutek" },
      { word: "enojo", hint: "gniew" },
      { word: "miedo", hint: "strach" },
      { word: "sorpresa", hint: "zaskoczenie" },
      { word: "preocupación", hint: "zmartwienie" },
      { word: "vergüenza", hint: "wstyd" },
      { word: "orgullo", hint: "duma" },
      { word: "celos", hint: "zazdrość" },
      { word: "ansiedad", hint: "lęk" },
      { word: "esperanza", hint: "nadzieja" },
      { word: "gratitud", hint: "wdzięczność" },
      { word: "frustración", hint: "frustracja" },
      { word: "paz", hint: "spokój" }
    ]
  },

  seasons_weather: {
    name: "Pory roku i pogoda",
    description: "Rozmawiaj o zmianach sezonowych",
    icon: Snowflake,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "primavera", hint: "wiosna" },
      { word: "verano", hint: "lato" },
      { word: "otoño", hint: "jesień" },
      { word: "invierno", hint: "zima" },
      { word: "soleado", hint: "słoneczny" },
      { word: "nublado", hint: "pochmurny" },
      { word: "lluvioso", hint: "deszczowy" },
      { word: "ventoso", hint: "wietrzny" },
      { word: "nevado", hint: "śnieżny" },
      { word: "húmedo", hint: "wilgotny" },
      { word: "seco", hint: "suchy" },
      { word: "cálido", hint: "ciepły" },
      { word: "fresco", hint: "świeży" },
      { word: "helado", hint: "mroźny" },
      { word: "tormentoso", hint: "burzowy" }
    ]
  },

  materials: {
    name: "Materiały",
    description: "Identyfikuj obiekty i ich skład",
    icon: Droplets,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "madera", hint: "drewno" },
      { word: "metal", hint: "metal" },
      { word: "plástico", hint: "plastik" },
      { word: "vidrio", hint: "szkło" },
      { word: "papel", hint: "papier" },
      { word: "tela", hint: "materiał" },
      { word: "cuero", hint: "skóra" },
      { word: "algodón", hint: "bawełna" },
      { word: "lana", hint: "wełna" },
      { word: "seda", hint: "jedwab" },
      { word: "oro", hint: "złoto" },
      { word: "plata", hint: "srebro" },
      { word: "piedra", hint: "kamień" },
      { word: "cemento", hint: "cement" },
      { word: "ladrillo", hint: "cegła" }
    ]
  }
};

export default wordBuilderCategories_part4;