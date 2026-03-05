/**
 * POLISH → GERMAN WORD BUILDER - PART 28
 * Categories: 112-115
 * 4 categories, 15 words each = 60 words
 */

import { Car, Fuel, ParkingCircle, MapPin } from "lucide-react";

export const wordBuilderCategories_part28 = {
  car_parts: {
    name: "Części samochodu",
    description: "Elementy pojazdu i mechanika",
    icon: Car,
    color: "from-gray-500 to-slate-600",
    level: "advanced",
    words: [
      { word: "Motor", hint: "silnik" },
      { word: "Rad", hint: "koło" },
      { word: "Reifen", hint: "opona" },
      { word: "Bremse", hint: "hamulec" },
      { word: "Lenkrad", hint: "kierownica" },
      { word: "Gaspedal", hint: "pedał gazu" },
      { word: "Kupplung", hint: "sprzęgło" },
      { word: "Getriebe", hint: "skrzynia biegów" },
      { word: "Scheinwerfer", hint: "reflektor" },
      { word: "Rücklicht", hint: "światło tylne" },
      { word: "Blinker", hint: "kierunkowskaz" },
      { word: "Scheibenwischer", hint: "wycieraczka" },
      { word: "Windschutzscheibe", hint: "przednia szyba" },
      { word: "Stoßstange", hint: "zderzak" },
      { word: "Auspuff", hint: "rura wydechowa" }
    ]
  },

  gas_station: {
    name: "Stacja benzynowa",
    description: "Tankowanie i obsługa pojazdu",
    icon: Fuel,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "Tankstelle", hint: "stacja benzynowa" },
      { word: "tanken", hint: "tankować" },
      { word: "Benzin", hint: "benzyna" },
      { word: "Diesel", hint: "olej napędowy" },
      { word: "Zapfsäule", hint: "dystrybutor" },
      { word: "Zapfhahn", hint: "pistolet do tankowania" },
      { word: "Tank", hint: "zbiornik" },
      { word: "volltanken", hint: "zatankować do pełna" },
      { word: "Liter", hint: "litr" },
      { word: "Öl", hint: "olej" },
      { word: "Ölwechsel", hint: "wymiana oleju" },
      { word: "Luftdruck", hint: "ciśnienie w oponach" },
      { word: "Reifendruck", hint: "ciśnienie w kołach" },
      { word: "Autowäsche", hint: "myjnia samochodowa" },
      { word: "Kassenautomat", hint: "automat płatniczy" }
    ]
  },

  parking: {
    name: "Parkowanie",
    description: "Miejsca parkingowe i zasady",
    icon: ParkingCircle,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "parken", hint: "parkować" },
      { word: "Parkplatz", hint: "miejsce parkingowe" },
      { word: "Tiefgarage", hint: "parking podziemny" },
      { word: "Parkhaus", hint: "parking wielopoziomowy" },
      { word: "Parkuhr", hint: "parkometr" },
      { word: "Parkschein", hint: "bilet parkingowy" },
      { word: "Parkverbot", hint: "zakaz parkowania" },
      { word: "Halteverbot", hint: "zakaz zatrzymywania" },
      { word: "Behindertenparkplatz", hint: "miejsce dla niepełnosprawnych" },
      { word: "Frauenparkplatz", hint: "miejsce dla kobiet" },
      { word: "Parkgebühr", hint: "opłata parkingowa" },
      { word: "Schranke", hint: "szlaban" },
      { word: "Einfahrt", hint: "wjazd" },
      { word: "Ausfahrt", hint: "wyjazd" },
      { word: "rückwärts", hint: "tyłem" }
    ]
  },

  road_signs: {
    name: "Znaki drogowe",
    description: "Oznaczenia i przepisy ruchu",
    icon: MapPin,
    color: "from-red-500 to-pink-600",
    level: "advanced",
    words: [
      { word: "Verkehrsschild", hint: "znak drogowy" },
      { word: "Stoppschild", hint: "znak stop" },
      { word: "Vorfahrt", hint: "pierwszeństwo przejazdu" },
      { word: "Einbahnstraße", hint: "droga jednokierunkowa" },
      { word: "Sackgasse", hint: "ślepa uliczka" },
      { word: "Umleitung", hint: "objazd" },
      { word: "Baustelle", hint: "roboty drogowe" },
      { word: "Geschwindigkeitsbegrenzung", hint: "ograniczenie prędkości" },
      { word: "Überholverbot", hint: "zakaz wyprzedzania" },
      { word: "Fußgängerzone", hint: "strefa dla pieszych" },
      { word: "Zebrastreifen", hint: "przejście dla pieszych" },
      { word: "Kreisverkehr", hint: "rondo" },
      { word: "Autobahn", hint: "autostrada" },
      { word: "Landstraße", hint: "droga krajowa" },
      { word: "Ortsschild", hint: "znak miejscowości" }
    ]
  }
};

export default wordBuilderCategories_part28;