#!/usr/bin/env python3
"""Batch 20 (FINAL): categories 103-105 for german_polish grammar.
exam_strategies, false_friends, revision_mixed
"""
import json

GRAMMAR_FILE = 'LumenLingo/LumenLingo/Resources/Content/german_polish/grammar_german_polish.json'

new_categories = [
    {
        "key": "exam_strategies",
        "name": "Strategie egzaminacyjne (Prüfungsstrategien)",
        "description": "Typowe pułapki gramatyczne na egzaminach z polskiego – ćwiczenia sprawdzające znajomość reguł",
        "icon": "doc.text.magnifyingglass",
        "difficulty": "advanced",
        "items": [
            {
                "id": "gp_exam1",
                "question": "Nie widziałem _____ (Ich habe den Lehrer nicht gesehen – Negation + Akkusativ→Genitiv)",
                "translation": "(Ich habe den Lehrer nicht gesehen.)",
                "options": ["nauczyciela", "nauczyciel", "nauczycielowi", "nauczycielem"],
                "correct": "nauczyciela",
                "explanation": "Prüfungsfalle: Nach Negation wechselt der Akkusativ zum Genitiv. 'Widziałem nauczyciela' (Akk.) → 'Nie widziałem nauczyciela' (Gen.). Im Deutschen bleibt der Kasus bei Negation gleich ('Ich habe den Lehrer nicht gesehen' – Akkusativ bleibt). Diese Genitiv-Verschiebung bei Negation ist einer der häufigsten Fehler bei B1/B2-Prüfungen."
            },
            {
                "id": "gp_exam2",
                "question": "Pojechaliśmy do Krakowa _____ (Wir sind mit dem Zug nach Krakau gefahren)",
                "translation": "(Wir sind mit dem Zug nach Krakau gefahren.)",
                "options": ["pociągiem", "pociąg", "pociągu", "pociągowi"],
                "correct": "pociągiem",
                "explanation": "Instrumentalis für Transportmittel: 'pociągiem' (mit dem Zug), 'samolotem' (mit dem Flugzeug), 'autobusem' (mit dem Bus). Im Deutschen verwendet man 'mit + Dativ', im Polnischen steht das Transportmittel direkt im Instrumentalis ohne Präposition. Prüfungstipp: Kein 'z' vor dem Transportmittel nötig – einfach Instrumentalis."
            },
            {
                "id": "gp_exam3",
                "question": "Maria jest _____ (Maria ist Ärztin – Beruf im Instrumentalis)",
                "translation": "(Maria ist Ärztin.)",
                "options": ["lekarką", "lekarka", "lekarki", "lekarce"],
                "correct": "lekarką",
                "explanation": "Nach 'być' (sein) steht der Beruf im Instrumentalis: 'Maria jest lekarką'. Im Deutschen steht der Beruf im Nominativ ('Maria ist Ärztin'). Typischer Prüfungsfehler: Nominativ statt Instrumentalis nach 'być'. Merke: 'Jest' + Instrumentalis für Berufe, Nationalitäten, Eigenschaften. Ausnahme: 'To jest lekarka' (mit 'to' → Nominativ)."
            },
            {
                "id": "gp_exam4",
                "question": "Chciałbym, żebyś _____ wcześniej (Ich möchte, dass du früher kommst – Konjunktiv)",
                "translation": "(Ich möchte, dass du früher kommst.)",
                "options": ["przyszedł", "przyjść", "przychodzisz", "przyjdziesz"],
                "correct": "przyszedł",
                "explanation": "'Żebyś' verlangt die Vergangenheitsform des Verbs als Konjunktiv: 'żebyś przyszedł' (dass du kämest/kommst). Dies ist keine echte Vergangenheit, sondern der polnische Konjunktiv. Die Endung '-byś' enthält bereits die Personenmarkierung (du). Im Deutschen: Konjunktiv II ('kämest') oder Indikativ nach 'dass'. Prüfungsfalle: Infinitiv oder Präsens statt Konjunktivform."
            },
            {
                "id": "gp_exam5",
                "question": "Widzę _____, który idzie do szkoły (Ich sehe den Jungen, der zur Schule geht)",
                "translation": "(Ich sehe den Jungen, der zur Schule geht.)",
                "options": ["chłopca", "chłopiec", "chłopcu", "chłopcem"],
                "correct": "chłopca",
                "explanation": "Belebte männliche Substantive haben im Akkusativ die gleiche Form wie im Genitiv: 'chłopiec' (Nom.) → 'chłopca' (Akk./Gen.). 'Widzę chłopca' (Ich sehe den Jungen – Akkusativ). Im Deutschen: 'den Jungen' (ebenfalls Akkusativ). Bei belebten Maskulina ist Akk. = Gen., bei unbelebten ist Akk. = Nom. Diese Regel fehlt im Deutschen komplett."
            },
            {
                "id": "gp_exam6",
                "question": "Muszę kupić dwa _____ (Ich muss zwei Brote kaufen – Plural nach 2)",
                "translation": "(Ich muss zwei Brote kaufen.)",
                "options": ["chleby", "chlebów", "chleb", "chlebami"],
                "correct": "chleby",
                "explanation": "Nach Zahlen 2-4 steht der Nominativ Plural: 'dwa chleby'. Nach 5+ steht der Genitiv Plural: 'pięć chlebów'. Im Deutschen: immer Plural nach Zahlen ('zwei Brote'). Die polnische Zahlregel (2-4 = Nom.Pl., 5+ = Gen.Pl.) hat keine Entsprechung im Deutschen und ist ein häufiger Prüfungsstolperstein."
            },
            {
                "id": "gp_exam7",
                "question": "To jest dom, w _____ mieszkałem (Das ist das Haus, in dem ich gewohnt habe)",
                "translation": "(Das ist das Haus, in dem ich gewohnt habe.)",
                "options": ["którym", "który", "którego", "któremu"],
                "correct": "którym",
                "explanation": "Relativpronomen im Lokativ nach 'w': 'w którym' (in welchem/dem). Das Relativpronomen richtet sich nach der Präposition/dem Verb im Relativsatz, NICHT nach dem Bezugswort. 'Mieszkać w' verlangt Lokativ → 'w którym'. Im Deutschen: 'in dem' (Dativ nach 'in'). Prüfungsfalle: Nominativ 'który' statt Lokativ."
            },
            {
                "id": "gp_exam8",
                "question": "Gdybym _____ więcej czasu, pojechałbym do Polski (Wenn ich mehr Zeit hätte, würde ich nach Polen fahren)",
                "translation": "(Wenn ich mehr Zeit hätte, würde ich nach Polen fahren.)",
                "options": ["miał", "mam", "będę miał", "mieć"],
                "correct": "miał",
                "explanation": "Irrealer Konditionalsatz: 'gdybym miał' = 'wenn ich hätte'. 'Gdybym' + Vergangenheitsform = polnischer Konjunktiv II. Die Partikel '-bym' enthält die 1. Person. Im Deutschen: 'wenn ich hätte' (Konjunktiv II). Prüfungstipp: 'gdyby-' + Personenendung + Vergangenheitsform des Verbs, NICHT Präsens oder Infinitiv."
            },
            {
                "id": "gp_exam9",
                "question": "Poszedłem do sklepu, _____ kupić mleko (Ich bin in den Laden gegangen, um Milch zu kaufen)",
                "translation": "(Ich bin in den Laden gegangen, um Milch zu kaufen.)",
                "options": ["żeby", "bo", "że", "kiedy"],
                "correct": "żeby",
                "explanation": "'Żeby' + Infinitiv = 'um...zu' + Infinitiv (Finalsatz). 'Bo' = 'weil' (Kausalsatz), 'że' = 'dass' (Objektsatz), 'kiedy' = 'als/wenn' (Temporalsatz). Deutsche Lerner verwechseln häufig Finalsätze ('um zu') mit Kausalsätzen ('weil'). Merke: Zweck/Ziel = 'żeby', Grund/Ursache = 'bo/ponieważ'."
            },
            {
                "id": "gp_exam10",
                "question": "Nigdy _____ nie powiem (Ich werde es niemandem sagen – doppelte Negation)",
                "translation": "(Ich werde es niemandem sagen.)",
                "options": ["nikomu", "komuś", "ktoś", "nikogo"],
                "correct": "nikomu",
                "explanation": "Doppelte Negation ist im Polnischen OBLIGATORISCH: 'nigdy nikomu nie powiem' (3-fache Negation!). Im Deutschen: 'Ich werde es niemandem sagen' (einfache Negation). 'Nikomu' = Dativ von 'nikt' (niemand), weil 'powiedzieć' + Dativ (jemandem sagen). Prüfungsfalle: Deutsche Lerner vergessen die zweite/dritte Negation."
            },
            {
                "id": "gp_exam11",
                "question": "Interesuje _____ polska muzyka (Mich interessiert polnische Musik – Akkusativ des Erfahrenden)",
                "translation": "(Mich interessiert polnische Musik.)",
                "options": ["mnie", "ja", "mi", "mną"],
                "correct": "mnie",
                "explanation": "'Interesować' nimmt den Erfahrenden im Akkusativ: 'interesuje mnie' (es interessiert mich). 'Mnie' = Akkusativ/Genitiv, 'mi' = Dativ, 'ja' = Nominativ. Im Deutschen: 'mich' (Akkusativ) – gleicher Kasus! Aber Vorsicht: andere Verben mit Erfahrendem nehmen Dativ ('podoba mi się') oder Genitiv ('brakuje mi'). Prüfung: richtige Verbstruktur kennen."
            },
            {
                "id": "gp_exam12",
                "question": "Dzieci _____ w ogrodzie (Die Kinder spielten/spielen im Garten – Aspektpaar)",
                "translation": "(Die Kinder spielen im Garten.)",
                "options": ["bawią się", "zabawiły się", "bawić się", "zabawią się"],
                "correct": "bawią się",
                "explanation": "Imperfektiver Aspekt für andauernde/wiederholte Handlungen: 'bawią się' (spielen gerade/regelmäßig). 'Zabawiły się' = perfektiv, abgeschlossen. 'Zabawią się' = perfektiv Futur. Im Deutschen gibt es keinen grammatischen Aspekt – 'spielen' deckt beides ab. Die Aspektwahl ist der schwierigste Bereich der polnischen Grammatik für Deutsche."
            },
            {
                "id": "gp_exam13",
                "question": "Powiedział, _____ jest chory (Er sagte, dass er krank ist – indirekte Rede)",
                "translation": "(Er sagte, dass er krank ist.)",
                "options": ["że", "żeby", "czy", "bo"],
                "correct": "że",
                "explanation": "'Że' = 'dass' für Aussagesätze in indirekter Rede. 'Żeby' = 'damit/dass' für Aufforderungen. 'Czy' = 'ob' für Ja/Nein-Fragen. 'Bo' = 'weil'. Im Polnischen gibt es KEINEN Konjunktiv I für indirekte Rede (anders als im Deutschen: 'er sei krank'). Der Tempus bleibt unverändert: 'jest' (ist), nicht 'był' (war). Keine Tempusverschiebung!"
            },
            {
                "id": "gp_exam14",
                "question": "Jestem _____ niż mój brat (Ich bin größer als mein Bruder – Komparativ)",
                "translation": "(Ich bin größer als mein Bruder.)",
                "options": ["wyższy", "wysoki", "najwyższy", "wyżej"],
                "correct": "wyższy",
                "explanation": "Komparativ: 'wysoki' → 'wyższy' (größer/höher). 'Najwyższy' = Superlativ (der größte). 'Wyżej' = Adverb (höher). Vergleich mit 'niż' (als) oder 'od' + Genitiv: 'wyższy niż brat' = 'wyższy od brata'. Im Deutschen: 'größer als'. Unregelmäßige Komparativformen (jak: dobry→lepszy, zły→gorszy) sind häufige Prüfungsfragen."
            },
            {
                "id": "gp_exam15",
                "question": "Trzeba _____ się uczyć (Man muss lernen – unpersönliche Konstruktion)",
                "translation": "(Man muss lernen.)",
                "options": ["dużo", "duży", "dużego", "dużym"],
                "correct": "dużo",
                "explanation": "'Trzeba dużo się uczyć' – unpersönliche Notwendigkeit + Adverb der Menge. 'Dużo' = viel (Adverb), 'duży' = groß (Adjektiv), 'dużego' = Genitiv des Adjektivs. 'Trzeba' ist unpersönlich (keine Konjugation!) und verlangt den Infinitiv. Im Deutschen: 'Man muss' (mit Subjekt 'man'). Polnisch hat kein Äquivalent zu 'man' – stattdessen unpersönliche Formen."
            }
        ]
    },
    {
        "key": "false_friends",
        "name": "Falsche Freunde (Fałszywi przyjaciele)",
        "description": "Deutsch-polnische falsche Freunde – Wörter die ähnlich klingen aber verschiedene Bedeutungen haben",
        "icon": "person.2.slash",
        "difficulty": "intermediate",
        "items": [
            {
                "id": "gp_ff1",
                "question": "Polska _____ jest bardzo smaczna (Die polnische Küche ist sehr lecker – 'Küche' als Kochkunst)",
                "translation": "(Die polnische Küche ist sehr lecker.)",
                "options": ["kuchnia", "kucharz", "kuchenka", "kuchenny"],
                "correct": "kuchnia",
                "explanation": "'Kuchnia' = Küche (Raum UND Kochkunst). Im Deutschen: 'Küche' hat die gleiche Doppelbedeutung. ABER: polnisch 'kuchnia' klingt wie 'Kuchen' – ist aber KEIN Kuchen! 'Kuchen' auf Polnisch = 'ciasto' oder 'tort'. Falscher Freund: Deutsche sagen manchmal 'kuchnia' und denken an Gebäck. Merke: kuchnia = Küche, ciasto = Kuchen."
            },
            {
                "id": "gp_ff2",
                "question": "Jutro mamy _____ z historii (Morgen haben wir eine Geschichtsstunde – NICHT Test)",
                "translation": "(Morgen haben wir eine Geschichtsstunde.)",
                "options": ["lekcję", "test", "lekturę", "lekcja"],
                "correct": "lekcję",
                "explanation": "'Lekcja' = Unterrichtsstunde (Akkusativ: 'lekcję'). NICHT 'Lektion' im Sinne von Lehrbuchkapitel (obwohl es das auch bedeuten kann). Im Deutschen: 'Lektion' = eher Lerneinheit/Kapitel. Falscher Freund: 'Lekcja' = Schulstunde, 'lekcja życia' = Lebenslektion. Das polnische Wort ist enger an 'Unterrichtsstunde' gebunden als das deutsche 'Lektion'."
            },
            {
                "id": "gp_ff3",
                "question": "Ten _____ jest bardzo drogi (Dieses Geschäft ist sehr teuer – 'Sklep' vs 'Sklave')",
                "translation": "(Dieses Geschäft ist sehr teuer.)",
                "options": ["sklep", "skład", "sklaf", "sklep"],
                "correct": "sklep",
                "explanation": "'Sklep' = Geschäft/Laden. Klingt entfernt wie 'Sklave' (polnisch: 'niewolnik'), hat aber NICHTS damit zu tun. Etymologie: 'sklep' kommt vom lateinischen 'clipa' (Gewölbe). Deutsch 'Laden' / 'Geschäft'. Ähnlicher falscher Freund: 'magazyn' = Zeitschrift ODER Lager (nicht nur 'Magazin' im TV-Sinne). Bei Einkäufen: 'iść do sklepu' = ins Geschäft gehen."
            },
            {
                "id": "gp_ff4",
                "question": "Mój _____ idzie na emeryturę (Mein Chef geht in Rente – Chef ≠ 'szef'?)",
                "translation": "(Mein Chef geht in Rente.)",
                "options": ["szef", "chef", "naczelnik", "kierownik"],
                "correct": "szef",
                "explanation": "'Szef' = Chef/Boss – hier ist es tatsächlich KEIN falscher Freund! 'Szef' und 'Chef' bedeuten dasselbe. ABER: das polnische 'szef' wird 'schef' ausgesprochen, das deutsche 'Chef' = 'Schef'. Wahrer falscher Freund: 'kucharz' = Koch (nicht 'Kutscher'!). 'Kierownik' = Abteilungsleiter/Manager. 'Naczelnik' = Vorgesetzter (amtlich). Hierarchie: szef > kierownik > pracownik."
            },
            {
                "id": "gp_ff5",
                "question": "Proszę o _____ (Ich bitte um die Rechnung – 'Rechnung' im Restaurant)",
                "translation": "(Die Rechnung, bitte.)",
                "options": ["rachunek", "rechnung", "liczba", "rachunek"],
                "correct": "rachunek",
                "explanation": "'Rachunek' = Rechnung (im Restaurant, für Dienstleistungen). Klingt ähnlich wie 'Rechnung' – und bedeutet hier tatsächlich dasselbe! Aber ACHTUNG: 'rachunek bankowy' = Bankkonto (nicht 'Bankrechnung'). Falscher Freund in anderem Kontext! Deutsch 'Rechnung' vs. polnisch: 'rachunek' (Restaurant), 'faktura' (Firmenrechnung), 'konto' (Konto)."
            },
            {
                "id": "gp_ff6",
                "question": "Mam _____ na dzisiaj (Ich habe heute einen Termin – NICHT 'Termin' auf Polnisch)",
                "translation": "(Ich habe heute einen Termin.)",
                "options": ["spotkanie", "termin", "termin", "wizytę"],
                "correct": "spotkanie",
                "explanation": "WICHTIGER falscher Freund: 'Termin' auf Polnisch = 'termin' bedeutet FRIST/DEADLINE, NICHT Verabredung! Deutsch 'Termin beim Arzt' = polnisch 'wizyta u lekarza'. Deutsch 'Termin/Treffen' = polnisch 'spotkanie'. Deutsch 'Abgabetermin' = polnisch 'termin oddania'. Merke: spotkanie = Treffen/Termin, termin = Frist, wizyta = Besuch/Arzttermin."
            },
            {
                "id": "gp_ff7",
                "question": "Moja _____ lubi czytać książki (Meine Freundin liest gern Bücher)",
                "translation": "(Meine Freundin liest gern Bücher.)",
                "options": ["koleżanka", "freundka", "przyjaciółka", "znajoma"],
                "correct": "koleżanka",
                "explanation": "Polnisch unterscheidet Freundschaftsgrade schärfer als Deutsch: 'koleżanka' = Bekannte/Schulfreundin (locker), 'przyjaciółka' = enge/beste Freundin, 'znajoma' = Bekanntschaft. Deutsch 'Freundin' kann alle drei bedeuten. Falscher Freund: 'Freundin' ≠ immer 'przyjaciółka'. Im Alltag: 'koleżanka z pracy' = Arbeitskollegin, 'przyjaciółka' = wirklich enge Freundin."
            },
            {
                "id": "gp_ff8",
                "question": "On jest _____ (Er ist ein Handwerker – 'Handwerker' ≠ 'Händler')",
                "translation": "(Er ist ein Handwerker.)",
                "options": ["rzemieślnikiem", "handlarzem", "handwerkerem", "robotnikiem"],
                "correct": "rzemieślnikiem",
                "explanation": "'Rzemieślnik' = Handwerker. FALSCHER FREUND: 'handlarz' = Händler (oft mit negativer Konnotation: Schwarzhändler). 'Handlowiec' = Kaufmann (neutral). Deutsch 'Handwerker' ≠ polnisch 'handlarz'! Instrumentalis nach 'być': 'jest rzemieślnikiem'. Ähnliche Falle: 'robotnik' = Arbeiter (nicht Roboter!). 'Robot' auf Polnisch = 'robot'."
            },
            {
                "id": "gp_ff9",
                "question": "Ta _____ jest bardzo ciekawa (Dieses Buch ist sehr interessant – NICHT 'Buchstabe')",
                "translation": "(Dieses Buch ist sehr interessant.)",
                "options": ["książka", "buchstaba", "litera", "księga"],
                "correct": "książka",
                "explanation": "'Książka' = Buch. FALSCHER FREUND: klingt NICHT wie 'Buchstabe', aber deutsche Lerner verwechseln: 'litera' = Buchstabe (NICHT 'Literatur'!). 'Literatur' = 'literatura'. Und 'księga' = großes/offizielles Buch (wie 'Księga Gości' = Gästebuch). Merke: książka = Buch, litera = Buchstabe, literatura = Literatur, księga = Band/Wälzer."
            },
            {
                "id": "gp_ff10",
                "question": "Potrzebuję nowej _____ na zimę (Ich brauche eine neue Jacke für den Winter)",
                "translation": "(Ich brauche eine neue Jacke für den Winter.)",
                "options": ["kurtki", "jacke", "kurtka", "marynarki"],
                "correct": "kurtki",
                "explanation": "'Kurtka' = Jacke/Winterjacke (Genitiv: 'kurtki' nach 'potrzebować'). 'Marynarka' = Blazer/Sakko (NICHT 'Marine'!). Falscher Freund: 'marynarka' sieht aus wie 'Marine', bedeutet aber Blazer. 'Marynarka wojenna' = Marine. 'Potrzebować' + Genitiv: 'potrzebuję kurtki' (ich brauche eine Jacke). Im Deutschen: 'brauchen' + Akkusativ."
            },
            {
                "id": "gp_ff11",
                "question": "Proszę o szklankę _____ (Ich hätte gern ein Glas Saft – 'Saft' ≠ 'Soße')",
                "translation": "(Ein Glas Saft, bitte.)",
                "options": ["soku", "sosu", "szaftu", "soczku"],
                "correct": "soku",
                "explanation": "'Sok' = Saft (Genitiv: 'soku'). FALSCHER FREUND: 'sos' = Soße/Sauce (NICHT Saft!). Deutsche sagen versehentlich 'sos' statt 'sok'. Merke: sok = Saft (Getränk), sos = Soße (zum Essen). 'Sok pomarańczowy' = Orangensaft, 'sos pomidorowy' = Tomatensoße. Genitiv nach Mengenangabe: 'szklanka soku' (ein Glas Saft)."
            },
            {
                "id": "gp_ff12",
                "question": "Mieszkam na _____ piętrze (Ich wohne im zweiten Stock – Stockwerk)",
                "translation": "(Ich wohne im zweiten Stock.)",
                "options": ["drugim", "drugiej", "dwa", "drugi"],
                "correct": "drugim",
                "explanation": "'Piętro' = Stockwerk/Etage (Neutrum). 'Na drugim piętrze' = im zweiten Stock (Lokativ). ACHTUNG: Polnisches 'piętro' = deutsche Etage. Aber: 'parter' = Erdgeschoss (wie französisch 'parterre'). 'Pierwsze piętro' in Polen = '1. OG' in Deutschland. Zählung ist identisch. Lokativ nach 'na': 'na piętrze', Adjektiv stimmt überein: 'drugim' (Lok. Neutr.)."
            },
            {
                "id": "gp_ff13",
                "question": "On jest bardzo _____ (Er ist sehr lustig/witzig – NICHT 'lustig' = 'lusty')",
                "translation": "(Er ist sehr lustig.)",
                "options": ["zabawny", "lustiger", "wesoły", "śmieszny"],
                "correct": "zabawny",
                "explanation": "'Zabawny' = lustig/witzig/amüsant. 'Wesoły' = fröhlich/heiter. 'Śmieszny' = lächerlich/komisch (kann negativ sein!). Im Deutschen hat 'lustig' nur positive Konnotation, 'śmieszny' kann beleidigend wirken ('Du bist lächerlich'). Falscher Freund im Tonfall: 'zabawny' ist sicher positiv, 'śmieszny' ist kontextabhängig. Für Komplimente: 'zabawny' verwenden."
            },
            {
                "id": "gp_ff14",
                "question": "Idę na _____ (Ich gehe auf eine Party/Feier)",
                "translation": "(Ich gehe auf eine Party.)",
                "options": ["imprezę", "partię", "festyn", "zabawę"],
                "correct": "imprezę",
                "explanation": "FALSCHER FREUND: 'partia' = politische Partei (NICHT Party!). 'Impreza' = Party/Feier/Veranstaltung. 'Festyn' = Volksfest. 'Zabawa' = Unterhaltung/Spaß. Deutsche sagen oft 'partia' für 'Party' – das bedeutet aber politische Partei! Akkusativ nach 'na' (Richtung): 'na imprezę'. Auch: 'impreza firmowa' = Firmenfeier."
            },
            {
                "id": "gp_ff15",
                "question": "Muszę kupić _____ do łazienki (Ich muss Handtücher fürs Bad kaufen – 'Handtuch' ≠ 'ręcznik')",
                "translation": "(Ich muss Handtücher fürs Bad kaufen.)",
                "options": ["ręczniki", "handtuchy", "ręczników", "ręcznikami"],
                "correct": "ręczniki",
                "explanation": "'Ręcznik' = Handtuch (Plural: 'ręczniki'). Tatsächlich verwandt mit 'ręka' (Hand) + '-nik' (Suffix = Tuch für die Hand). Akkusativ Plural nach 'kupić': 'kupić ręczniki'. Nicht Genitiv ('ręczników'), weil kein Maß/keine Negation. Ähnliches Muster: 'nożyczki' = Schere (von 'nóż' = Messer). Wortbildung: Körperteil + Suffix = Gegenstand."
            }
        ]
    },
    {
        "key": "revision_mixed",
        "name": "Powtórka ogólna (Gemischte Wiederholung)",
        "description": "Mieszanka najważniejszych zagadnień gramatycznych – test końcowy ze wszystkich kategorii",
        "icon": "arrow.triangle.2.circlepath",
        "difficulty": "advanced",
        "items": [
            {
                "id": "gp_rev1",
                "question": "Chcę _____ herbatę (Ich möchte heißen Tee – Adjektiv + Akkusativ fem.)",
                "translation": "(Ich möchte heißen Tee.)",
                "options": ["gorącą", "gorąca", "gorącego", "gorące"],
                "correct": "gorącą",
                "explanation": "Adjektiv im Akkusativ Femininum: 'gorąca' (Nom.f.) → 'gorącą' (Akk.f.). 'Herbata' ist feminin → Akkusativ: 'herbatę', Adjektiv muss übereinstimmen: 'gorącą herbatę'. Im Deutschen: 'heißen Tee' (Akkusativ mask. – 'Tee' ist Maskulinum). Wiederholung: Adjektivdeklination folgt dem Genus des Substantivs UND dem Kasus des Satzes."
            },
            {
                "id": "gp_rev2",
                "question": "_____ do tego miasta samochodem (Wir sind mit dem Auto in diese Stadt gefahren – Aspekt)",
                "translation": "(Wir sind mit dem Auto in diese Stadt gefahren.)",
                "options": ["Pojechaliśmy", "Jeździliśmy", "Jedziemy", "Pojedziemy"],
                "correct": "Pojechaliśmy",
                "explanation": "Perfektiver Aspekt für einmalige, abgeschlossene Reise: 'pojechaliśmy' (wir sind gefahren – einmal, fertig). 'Jeździliśmy' = imperfektiv: wir fuhren wiederholt/regelmäßig. 'Jedziemy' = Präsens (wir fahren gerade). 'Pojedziemy' = perfektives Futur (wir werden fahren). Wiederholung: Aspektwahl hängt von Einmaligkeit vs. Wiederholung ab."
            },
            {
                "id": "gp_rev3",
                "question": "Dziękuję _____ za pomoc (Ich danke Ihnen für die Hilfe – Höflichkeitsform)",
                "translation": "(Ich danke Ihnen für die Hilfe.)",
                "options": ["Panu", "Pan", "Pana", "Panem"],
                "correct": "Panu",
                "explanation": "'Dziękować' + Dativ: 'dziękuję Panu' (ich danke Ihnen – maskulin). 'Pan' (Nom.) → 'Panu' (Dat.) → 'Pana' (Gen./Akk.) → 'Panem' (Instr.). Höflichkeitsform 'Pan/Pani' = 3. Person (wie 'Sie' im Deutschen, aber mit Kasusflexion!). Wiederholung: Verbvalenz (dziękować + Dat.) + Höflichkeitsform."
            },
            {
                "id": "gp_rev4",
                "question": "Im więcej czytam, _____ więcej rozumiem (Je mehr ich lese, desto mehr verstehe ich)",
                "translation": "(Je mehr ich lese, desto mehr verstehe ich.)",
                "options": ["tym", "to", "ten", "ta"],
                "correct": "tym",
                "explanation": "'Im...tym' = 'je...desto' – proportionaler Vergleich. 'Im więcej czytam, tym więcej rozumiem'. 'Tym' ist Instrumentalis von 'to' (das). Im Deutschen: 'je...desto/umso'. Die Konstruktion ist strukturell identisch, aber 'tym' muss im Instrumentalis stehen. Wiederholung: Vergleichskonstruktionen und Kasusgebrauch in festen Wendungen."
            },
            {
                "id": "gp_rev5",
                "question": "Proszę _____ tutaj (Bitte setzen Sie sich hier hin – Höflicher Imperativ)",
                "translation": "(Bitte setzen Sie sich hier hin.)",
                "options": ["usiąść", "usiądź", "siada", "siedzieć"],
                "correct": "usiąść",
                "explanation": "'Proszę' + Infinitiv = höflicher Imperativ: 'proszę usiąść' (bitte setzen Sie sich). NICHT 'proszę usiądź' (Imperativ nach 'proszę' ist falsch!). 'Siedzieć' = sitzen (Zustand), 'usiąść' = sich setzen (Aktion). Wiederholung: 'proszę' + perfektiver Infinitiv für höfliche Aufforderungen. Im Deutschen: 'Bitte setzen Sie sich' (Imperativ)."
            },
            {
                "id": "gp_rev6",
                "question": "Nie mam _____ (Ich habe kein Geld – Negation + Genitiv)",
                "translation": "(Ich habe kein Geld.)",
                "options": ["pieniędzy", "pieniądze", "pieniądzom", "pieniądzami"],
                "correct": "pieniędzy",
                "explanation": "Negation von 'mieć' (haben): Akkusativ → Genitiv. 'Mam pieniądze' (Akk.) → 'Nie mam pieniędzy' (Gen.). 'Pieniądze' existiert nur im Plural (wie deutsch 'Geld', aber polnisch immer Plural). Genitiv Plural: 'pieniędzy'. Wiederholung: Negationsregel (Akk.→Gen.) + unregelmäßige Pluralformen. Fehler: Akkusativ nach Negation."
            },
            {
                "id": "gp_rev7",
                "question": "Spotkałem się z _____ (Ich habe mich mit Freunden getroffen – Instrumentalis Plural)",
                "translation": "(Ich habe mich mit Freunden getroffen.)",
                "options": ["przyjaciółmi", "przyjaciele", "przyjaciół", "przyjaciołom"],
                "correct": "przyjaciółmi",
                "explanation": "'Z' + Instrumentalis für Begleitung: 'spotkać się z przyjaciółmi'. 'Przyjaciel' (Freund) → Instr.Pl.: 'przyjaciółmi' (unregelmäßig!). 'Przyjaciele' = Nom.Pl., 'przyjaciół' = Gen.Pl., 'przyjaciołom' = Dat.Pl. Wiederholung: Präposition 'z' + Instrumentalis und unregelmäßige Pluralformen maskuliner Substantive."
            },
            {
                "id": "gp_rev8",
                "question": "Wiem, że on _____ do Polski w przyszłym roku (Ich weiß, dass er nächstes Jahr nach Polen fährt)",
                "translation": "(Ich weiß, dass er nächstes Jahr nach Polen fährt.)",
                "options": ["pojedzie", "jeździ", "pojechał", "jechać"],
                "correct": "pojedzie",
                "explanation": "Perfektives Futur: 'pojedzie' (er wird fahren – einmalig, zukünftig). 'Jeździ' = Präsens habituell (er fährt regelmäßig). 'Pojechał' = Perfekt (er ist gefahren). Im Nebensatz nach 'że' bleibt der Indikativ (kein Konjunktiv wie im Deutschen!). Wiederholung: Aspektwahl im Futur + Nebensatzkonstruktion ohne Verbverschiebung."
            },
            {
                "id": "gp_rev9",
                "question": "Ta książka jest _____ ode mnie (Dieses Buch ist älter als ich – Komparativ + 'od')",
                "translation": "(Dieses Buch ist älter als ich.)",
                "options": ["starsza", "starszy", "najstarsze", "stary"],
                "correct": "starsza",
                "explanation": "Komparativ Femininum (książka = fem.): 'stary' → 'starszy' (mask.) → 'starsza' (fem.). Vergleich mit 'od' + Genitiv: 'starsza ode mnie' (älter als ich). 'Ode mnie' = 'od' + 'mnie' mit eingefügtem '-e' zur Ausspracheerleichterung. Im Deutschen: 'älter als ich'. Wiederholung: Komparativanpassung an Genus + Präposition 'od' + Genitiv."
            },
            {
                "id": "gp_rev10",
                "question": "_____ się tego nie spodziewałem (Ehrlich gesagt habe ich das nicht erwartet)",
                "translation": "(Ehrlich gesagt habe ich das nicht erwartet.)",
                "options": ["Szczerze mówiąc", "Szczery mówić", "Szczerość mówiąca", "Szczerze mówiony"],
                "correct": "Szczerze mówiąc",
                "explanation": "'Szczerze mówiąc' = 'ehrlich gesagt' – Adverbialer Partizipialausdruck. 'Mówiąc' = Gerundiv/Adverbialpartizip gleichzeitig (wie sagend). Im Deutschen: 'gesagt' (Partizip II), im Polnischen: 'mówiąc' (Partizip gleichzeitig). Andere Beispiele: 'ogólnie mówiąc' (allgemein gesagt), 'krótko mówiąc' (kurz gesagt). Wiederholung: Partizipialkonstruktionen."
            },
            {
                "id": "gp_rev11",
                "question": "Lubię _____ polskie filmy (Ich schaue gern polnische Filme – Aspekt im Infinitiv)",
                "translation": "(Ich schaue gern polnische Filme.)",
                "options": ["oglądać", "obejrzeć", "oglądam", "obejrzałem"],
                "correct": "oglądać",
                "explanation": "Imperfektiver Infinitiv nach 'lubić': 'lubię oglądać' (ich schaue gern – habituell). 'Obejrzeć' = perfektiv (einen bestimmten Film zu Ende schauen). Nach Verben wie 'lubić', 'umieć', 'potrafić' steht fast immer der imperfektive Infinitiv. Im Deutschen: ein Infinitiv für beides. Wiederholung: Aspektwahl bei Infinitivkonstruktionen."
            },
            {
                "id": "gp_rev12",
                "question": "Kupiłem prezent _____ (Ich habe ein Geschenk für meine Mutter gekauft – Dativ)",
                "translation": "(Ich habe ein Geschenk für meine Mutter gekauft.)",
                "options": ["mamie", "mamy", "mamą", "mama"],
                "correct": "mamie",
                "explanation": "'Kupić komuś' (jemandem kaufen) + Dativ: 'mama' → 'mamie' (Dat.). Im Polnischen: Dativ ohne Präposition. Im Deutschen: 'für meine Mutter' (für + Akkusativ) ODER 'meiner Mutter' (Dativ). Polnisch bevorzugt den reinen Dativ ohne 'dla'. 'Dla mamy' (für Mama, Gen.) ist auch möglich, aber 'mamie' (Dat.) ist natürlicher. Wiederholung: Dativgebrauch."
            },
            {
                "id": "gp_rev13",
                "question": "Chodziliśmy po _____ i oglądaliśmy zabytki (Wir spazierten durch die Stadt und besichtigten Sehenswürdigkeiten)",
                "translation": "(Wir spazierten durch die Stadt.)",
                "options": ["mieście", "miasto", "miasta", "miastem"],
                "correct": "mieście",
                "explanation": "'Chodzić po' + Lokativ = 'in/durch etwas herumlaufen': 'po mieście' (durch die Stadt). 'Miasto' (Nom.) → 'mieście' (Lok.) – Stammwechsel! 'Po' + Lokativ = Bewegung auf einer Fläche/in einem Bereich. Nicht verwechseln mit 'po' + Akkusativ (= um etwas zu holen: 'iść po chleb'). Wiederholung: Präposition 'po' mit verschiedenen Kasus."
            },
            {
                "id": "gp_rev14",
                "question": "Dziecko, _____ widziałeś, jest moim synem (Das Kind, das du gesehen hast, ist mein Sohn)",
                "translation": "(Das Kind, das du gesehen hast, ist mein Sohn.)",
                "options": ["które", "który", "która", "którym"],
                "correct": "które",
                "explanation": "Relativpronomen richtet sich nach Genus des Bezugswortes (dziecko = Neutrum) UND Kasus des Relativsatzes (widzieć + Akk.). 'Który' (mask.) / 'która' (fem.) / 'które' (neutr.). Akkusativ Neutrum = Nominativ: 'które'. Im Deutschen: 'das' (Akk. Neutr.). Wiederholung: Relativpronomen – Genus vom Bezugswort, Kasus vom Verb im Nebensatz."
            },
            {
                "id": "gp_rev15",
                "question": "W Polsce mówi _____ po polsku (In Polen spricht man Polnisch – Unpersönliche Form)",
                "translation": "(In Polen spricht man Polnisch.)",
                "options": ["się", "on", "to", "ja"],
                "correct": "się",
                "explanation": "'Mówi się' = man spricht – unpersönliche Konstruktion mit 'się'. Im Deutschen: 'man' + Verb. Im Polnischen gibt es kein Wort für 'man' – stattdessen Verb + 'się'. 3. Person Singular + 'się' = unpersönliche Aussage. Andere Beispiele: 'mówi się' (man sagt), 'je się' (man isst), 'pracuje się' (man arbeitet). Wiederholung: Unpersönliche Konstruktionen als Alternative zum deutschen 'man'."
            }
        ]
    }
]

with open(GRAMMAR_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

data.extend(new_categories)

with open(GRAMMAR_FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Added {len(new_categories)} categories")
print(f"Total categories: {len(data)}")
print(f"Total items: {sum(len(c['items']) for c in data)}")

from collections import Counter
all_ids = [item['id'] for c in data for item in c['items']]
dupes = {k:v for k,v in Counter(all_ids).items() if v > 1}
if dupes:
    print(f"DUPLICATES FOUND: {dupes}")
else:
    print("No duplicate IDs - all clean!")

# Format validation
issues = []
for ci, c in enumerate(data):
    for ii, item in enumerate(c['items']):
        if '_____' not in item.get('question','') and '___' not in item.get('question',''):
            issues.append(f"Cat {ci+1} ({c['key']}) item {ii+1}: missing _____ in question")
        if len(item.get('options',[])) != 4:
            issues.append(f"Cat {ci+1} ({c['key']}) item {ii+1}: {len(item.get('options',[]))} options (need 4)")
        if item.get('correct','') not in item.get('options',[]):
            issues.append(f"Cat {ci+1} ({c['key']}) item {ii+1}: correct not in options")
        if len(item.get('explanation','')) < 180:
            issues.append(f"Cat {ci+1} ({c['key']}) item {ii+1}: explanation too short ({len(item.get('explanation',''))} chars)")
if issues:
    print(f"\nFORMAT ISSUES ({len(issues)}):")
    for iss in issues:
        print(f"  {iss}")
else:
    print("All format checks passed!")
