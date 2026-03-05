/**
 * GERMAN → SPANISH WORD BUILDER - PART 3
 * Categories: 10-14
 * 5 categories, 15 words each = 75 words
 */

import { Zap, Mountain, TreePine, Flower, Apple } from "lucide-react";

export const wordBuilderCategories_part3 = {
  storms: {
    name: "Stürme und Winde",
    description: "Stürmische Phänomene und heftiges Wetter",
    icon: Zap,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "tormenta", hint: "Sturm" },
      { word: "relámpago", hint: "Blitz" },
      { word: "trueno", hint: "Donner" },
      { word: "huracán", hint: "Hurrikan" },
      { word: "tornado", hint: "Tornado" },
      { word: "ciclón", hint: "Zyklon" },
      { word: "tempestad", hint: "Unwetter" },
      { word: "rayo", hint: "Blitzschlag" },
      { word: "tormentoso", hint: "stürmisch" },
      { word: "ráfaga de viento", hint: "Windstoß" },
      { word: "aguacero", hint: "Platzregen" },
      { word: "granizada", hint: "Hagelsturm" },
      { word: "electricidad", hint: "Elektrizität" },
      { word: "peligroso", hint: "gefährlich" },
      { word: "destello", hint: "Blitz" }
    ]
  },

  mountains_nature: {
    name: "Berge und Natur",
    description: "Bergiges Gelände und Landschaften",
    icon: Mountain,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "montaña", hint: "Berg" },
      { word: "pico", hint: "Gipfel" },
      { word: "valle", hint: "Tal" },
      { word: "roca", hint: "Felsen" },
      { word: "acantilado", hint: "Klippe" },
      { word: "ladera", hint: "Hang" },
      { word: "cañón", hint: "Schlucht" },
      { word: "colina", hint: "Hügel" },
      { word: "senderismo", hint: "Wandern" },
      { word: "escalada", hint: "Klettern" },
      { word: "altitud", hint: "Höhe" },
      { word: "vista", hint: "Aussicht" },
      { word: "sendero", hint: "Pfad" },
      { word: "cresta", hint: "Kamm" },
      { word: "meseta", hint: "Hochebene" }
    ]
  },

  forest_trees: {
    name: "Wald und Bäume",
    description: "Wälder und Baumpflanzen",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "bosque", hint: "Wald" },
      { word: "árbol", hint: "Baum" },
      { word: "roble", hint: "Eiche" },
      { word: "pino", hint: "Kiefer" },
      { word: "abedul", hint: "Birke" },
      { word: "abeto", hint: "Tanne" },
      { word: "pícea", hint: "Fichte" },
      { word: "haya", hint: "Buche" },
      { word: "hoja", hint: "Blatt" },
      { word: "rama", hint: "Ast" },
      { word: "raíz", hint: "Wurzel" },
      { word: "tronco", hint: "Stamm" },
      { word: "corteza", hint: "Rinde" },
      { word: "musgo", hint: "Moos" },
      { word: "hongo", hint: "Pilz" }
    ]
  },

  flowers_plants: {
    name: "Blumen und Pflanzen",
    description: "Zierpflanzen und Blumen",
    icon: Flower,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "flor", hint: "Blume" },
      { word: "rosa", hint: "Rose" },
      { word: "tulipán", hint: "Tulpe" },
      { word: "girasol", hint: "Sonnenblume" },
      { word: "clavel", hint: "Nelke" },
      { word: "lirio", hint: "Lilie" },
      { word: "orquídea", hint: "Orchidee" },
      { word: "margarita", hint: "Gänseblümchen" },
      { word: "violeta", hint: "Veilchen" },
      { word: "lavanda", hint: "Lavendel" },
      { word: "flor", hint: "Blüte" },
      { word: "pétalo", hint: "Blütenblatt" },
      { word: "tallo", hint: "Stängel" },
      { word: "ramo", hint: "Strauß" },
      { word: "jardín", hint: "Garten" }
    ]
  },

  fruits: {
    name: "Früchte",
    description: "Frische und saftige Früchte",
    icon: Apple,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "manzana", hint: "Apfel" },
      { word: "pera", hint: "Birne" },
      { word: "plátano", hint: "Banane" },
      { word: "naranja", hint: "Orange" },
      { word: "limón", hint: "Zitrone" },
      { word: "fresa", hint: "Erdbeere" },
      { word: "cereza", hint: "Kirsche" },
      { word: "uva", hint: "Traube" },
      { word: "melocotón", hint: "Pfirsich" },
      { word: "ciruela", hint: "Pflaume" },
      { word: "melón", hint: "Melone" },
      { word: "sandía", hint: "Wassermelone" },
      { word: "piña", hint: "Ananas" },
      { word: "mango", hint: "Mango" },
      { word: "kiwi", hint: "Kiwi" }
    ]
  }
};

export default wordBuilderCategories_part3;