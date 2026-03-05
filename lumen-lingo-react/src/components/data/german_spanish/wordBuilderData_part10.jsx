/**
 * GERMAN → SPANISH WORD BUILDER - PART 10
 * Categories: 41-45
 * 5 categories, 15 words each = 75 words
 */

import { Baby, GraduationCap, Briefcase, Award, Users } from "lucide-react";

export const wordBuilderCategories_part10 = {
  childhood: {
    name: "Kindheit",
    description: "Babys und kleine Kinder",
    icon: Baby,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "bebé", hint: "Baby" },
      { word: "niño", hint: "Kind" },
      { word: "niña", hint: "Mädchen" },
      { word: "infancia", hint: "Kindheit" },
      { word: "juguete", hint: "Spielzeug" },
      { word: "muñeca", hint: "Puppe" },
      { word: "oso de peluche", hint: "Teddybär" },
      { word: "chupete", hint: "Schnuller" },
      { word: "biberón", hint: "Flasche" },
      { word: "pañal", hint: "Windel" },
      { word: "cuna", hint: "Kinderbett" },
      { word: "cochecito", hint: "Kinderwagen" },
      { word: "parque infantil", hint: "Spielplatz" },
      { word: "columpio", hint: "Schaukel" },
      { word: "tobogán", hint: "Rutsche" }
    ]
  },

  education_system: {
    name: "Bildungssystem",
    description: "Schulen und akademische Einrichtungen",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "guardería", hint: "Kindergarten" },
      { word: "preescolar", hint: "Vorschule" },
      { word: "primaria", hint: "Grundschule" },
      { word: "secundaria", hint: "Sekundarstufe" },
      { word: "bachillerato", hint: "Gymnasium" },
      { word: "universidad", hint: "Universität" },
      { word: "facultad", hint: "Fakultät" },
      { word: "carrera", hint: "Studiengang" },
      { word: "licenciatura", hint: "Bachelor" },
      { word: "maestría", hint: "Master" },
      { word: "doctorado", hint: "Doktorat" },
      { word: "beca", hint: "Stipendium" },
      { word: "matrícula", hint: "Einschreibung" },
      { word: "semestre", hint: "Semester" },
      { word: "trimestre", hint: "Trimester" }
    ]
  },

  work_career: {
    name: "Arbeit und Karriere",
    description: "Berufsleben und Arbeitsplatz",
    icon: Briefcase,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "trabajo", hint: "Arbeit" },
      { word: "empleo", hint: "Beschäftigung" },
      { word: "carrera", hint: "Karriere" },
      { word: "oficina", hint: "Büro" },
      { word: "jefe", hint: "Chef" },
      { word: "empleado", hint: "Angestellter" },
      { word: "colega", hint: "Kollege" },
      { word: "sueldo", hint: "Gehalt" },
      { word: "salario", hint: "Lohn" },
      { word: "contrato", hint: "Vertrag" },
      { word: "reunión", hint: "Besprechung" },
      { word: "proyecto", hint: "Projekt" },
      { word: "entrevista", hint: "Vorstellungsgespräch" },
      { word: "currículum", hint: "Lebenslauf" },
      { word: "experiencia", hint: "Erfahrung" }
    ]
  },

  achievements: {
    name: "Erfolge und Auszeichnungen",
    description: "Preise und Anerkennungen",
    icon: Award,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    words: [
      { word: "premio", hint: "Preis" },
      { word: "medalla", hint: "Medaille" },
      { word: "trofeo", hint: "Trophäe" },
      { word: "certificado", hint: "Zertifikat" },
      { word: "diploma", hint: "Diplom" },
      { word: "reconocimiento", hint: "Anerkennung" },
      { word: "logro", hint: "Errungenschaft" },
      { word: "éxito", hint: "Erfolg" },
      { word: "victoria", hint: "Sieg" },
      { word: "campeón", hint: "Champion" },
      { word: "ganador", hint: "Gewinner" },
      { word: "finalista", hint: "Finalist" },
      { word: "competencia", hint: "Wettbewerb" },
      { word: "concurso", hint: "Wettstreit" },
      { word: "honor", hint: "Ehre" }
    ]
  },

  social_groups: {
    name: "Soziale Gruppen",
    description: "Gemeinschaften und Vereine",
    icon: Users,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "grupo", hint: "Gruppe" },
      { word: "equipo", hint: "Team" },
      { word: "club", hint: "Verein" },
      { word: "comunidad", hint: "Gemeinschaft" },
      { word: "asociación", hint: "Verband" },
      { word: "sociedad", hint: "Gesellschaft" },
      { word: "organización", hint: "Organisation" },
      { word: "miembro", hint: "Mitglied" },
      { word: "líder", hint: "Anführer" },
      { word: "presidente", hint: "Präsident" },
      { word: "secretario", hint: "Sekretär" },
      { word: "tesorero", hint: "Schatzmeister" },
      { word: "voluntario", hint: "Freiwilliger" },
      { word: "participante", hint: "Teilnehmer" },
      { word: "asamblea", hint: "Versammlung" }
    ]
  }
};

export default wordBuilderCategories_part10;