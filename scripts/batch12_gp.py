#!/usr/bin/env python3
"""Batch 12: Diminutives & Word Formation (categories 63-67) for german_polish grammar."""
import json

GRAMMAR_FILE = 'LumenLingo/LumenLingo/Resources/Content/german_polish/grammar_german_polish.json'

new_categories = [
    {
        "key": "diminutives",
        "name": "Zdrobnienia (Verkleinerungsformen)",
        "description": "Tworzenie zdrobnień w polskim – bogaty system sufiksów zdrabniających",
        "icon": "arrow.down.right.and.arrow.up.left",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_dim1", "polish": "kot → kotek", "german": "Katze → Kätzchen", "explanation": "Sufiks '-ek' dla rzeczowników męskich – najpowszechniejsza forma zdrobnienia", "difficulty": "beginner"},
            {"id": "gp_dim2", "polish": "pies → piesek", "german": "Hund → Hündchen", "explanation": "'-ek' z wstawnym '-e-' – 'piesek' jest pieszczotliwe i czułe", "difficulty": "beginner"},
            {"id": "gp_dim3", "polish": "dom → domek", "german": "Haus → Häuschen", "explanation": "'Domek' – mały dom; zdrobnienie może oznaczać dosłownie mniejszy lub być czułe", "difficulty": "beginner"},
            {"id": "gp_dim4", "polish": "kawa → kawka", "german": "Kaffee → (Kaffeetässchen)", "explanation": "'-ka' dla rzeczowników żeńskich – 'kawka' = kawusia/mała kawa", "difficulty": "beginner"},
            {"id": "gp_dim5", "polish": "mama → mamusia", "german": "Mama → Mami/Mutti", "explanation": "'-usia' – czuły sufiks zdrabniający; wyraża głębokie uczucie", "difficulty": "beginner"},
            {"id": "gp_dim6", "polish": "tata → tatuś", "german": "Papa → Papi/Vati", "explanation": "'-uś' – czuły sufiks męski; używany przez dzieci", "difficulty": "beginner"},
            {"id": "gp_dim7", "polish": "dziecko → dzieciątko", "german": "Kind → Kindchen", "explanation": "'-ątko' dla rzeczowników nijakich – specjalny sufiks", "difficulty": "intermediate"},
            {"id": "gp_dim8", "polish": "serce → serduszko", "german": "Herz → Herzchen", "explanation": "'-uszko' – czuły sufiks nijaki; 'serduszko' = serduszko/kochanie", "difficulty": "intermediate"},
            {"id": "gp_dim9", "polish": "Daj mi kawałeczek ciasta.", "german": "Gib mir ein Stückchen Kuchen.", "explanation": "Podwójne zdrobnienie: kawałek → kawałeczek; wzmocniona pieszczotliwość", "difficulty": "intermediate"},
            {"id": "gp_dim10", "polish": "Chodź tu, piesku!", "german": "Komm her, Hündchen!", "explanation": "Zdrobnienie w wołaczu – 'piesku!' zmienia formę z '-ek' na '-u'", "difficulty": "intermediate"},
            {"id": "gp_dim11", "polish": "Mała rączka dziecka.", "german": "Die kleine Hand des Kindes.", "explanation": "'Rączka' od 'ręka' – zdrobnienie ze zmianą tematu (ę → ą → ącz)", "difficulty": "intermediate"},
            {"id": "gp_dim12", "polish": "Zjedz jeszcze łyżeczkę zupy.", "german": "Iss noch einen Löffel Suppe.", "explanation": "'Łyżeczka' od 'łyżka' – zdrobnienie = mała łyżeczka (Teelöffel)", "difficulty": "beginner"},
            {"id": "gp_dim13", "polish": "Spokojnej nocy, słoneczko.", "german": "Gute Nacht, Sonnenscheinchen.", "explanation": "'Słoneczko' od 'słońce' – czuły zwrot do bliskiej osoby", "difficulty": "beginner"},
            {"id": "gp_dim14", "polish": "Poczekaj chwileczkę.", "german": "Warte ein Momentchen.", "explanation": "'Chwileczka' od 'chwila' → 'chwilka' → 'chwileczka'; potrójne zdrabnianie!", "difficulty": "intermediate"},
            {"id": "gp_dim15", "polish": "Kupiłam nowe buciki synkowi.", "german": "Ich habe meinem Söhnchen neue Schühchen gekauft.", "explanation": "'Buciki' i 'synkowi' – zdrobnienia w naturalnym kontekście rodzinnym", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "augmentatives",
        "name": "Zgrubienia (Vergrößerungsformen)",
        "description": "Tworzenie zgrubień i form pejoratywnych – odwrotność zdrobnień",
        "icon": "arrow.up.left.and.arrow.down.right",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_aug1", "polish": "dom → domisko", "german": "Haus → riesiges Haus", "explanation": "'-isko' – zgrubienie pejoratywne; 'domisko' = wielki, brzydki dom", "difficulty": "intermediate"},
            {"id": "gp_aug2", "polish": "pies → psisko", "german": "Hund → riesiger Hund", "explanation": "'-isko' od 'pies' – wielki, groźny pies; negatywne konotacje", "difficulty": "intermediate"},
            {"id": "gp_aug3", "polish": "baba → babsko", "german": "Frau → Weibsbild", "explanation": "'-sko' – pejoratywne zgrubienie; obraźliwie o kobiecie", "difficulty": "intermediate"},
            {"id": "gp_aug4", "polish": "nos → nochal", "german": "Nase → Riesennase / Zinken", "explanation": "'-al' – zgrubienie komiczne; 'nochal' = wielki nos", "difficulty": "intermediate"},
            {"id": "gp_aug5", "polish": "chłop → chłopisko", "german": "Mann → Riesenkerl", "explanation": "'Chłopisko' – wielki, silny mężczyzna; może być pozytywne lub negatywne", "difficulty": "intermediate"},
            {"id": "gp_aug6", "polish": "noga → nożysko", "german": "Bein → riesiges Bein", "explanation": "'-ysko' wariant '-isko' – wielka, niezgrabna noga", "difficulty": "intermediate"},
            {"id": "gp_aug7", "polish": "To jest ale kocisko!", "german": "Das ist aber ein Riesenkater!", "explanation": "'Kocisko' od 'kot' – wielki kot; w tym kontekście z podziwem", "difficulty": "intermediate"},
            {"id": "gp_aug8", "polish": "wiatr → wicher / wichura", "german": "Wind → Sturm", "explanation": "Intensyfikacja: wiatr (Wind) → wicher/wichura (Sturm) – nie sufiks, ale osobne słowo", "difficulty": "intermediate"},
            {"id": "gp_aug9", "polish": "Ale masz łapska!", "german": "Was für riesige Pfoten du hast!", "explanation": "'Łapska' od 'łapy' – zgrubienie z '-sko'; wielkie ręce/łapy", "difficulty": "intermediate"},
            {"id": "gp_aug10", "polish": "Jakie wielgachne buciory!", "german": "Was für riesige Treter!", "explanation": "'Wielgachny' – przymiotnik zgrubiały; 'buciory' = wielkie buty", "difficulty": "advanced"},
            {"id": "gp_aug11", "polish": "Stoi tam jakieś straszydło.", "german": "Da steht irgendeine Vogelscheuche.", "explanation": "'-ydło' – sufiks tworzący pejoratywne rzeczowniki od przymiotników", "difficulty": "intermediate"},
            {"id": "gp_aug12", "polish": "Ten dzieciak to prawdziwy urwis.", "german": "Dieses Kind ist ein richtiger Lausbub.", "explanation": "'Dzieciak' od 'dziecko' – potoczne, lekko zgrubiałe; 'urwis' = Lausbub", "difficulty": "beginner"},
            {"id": "gp_aug13", "polish": "Ma ogromny brzuchol.", "german": "Er hat einen riesigen Wanst.", "explanation": "'-ol' – zgrubienie komiczne; 'brzuchol' = wielki brzuch", "difficulty": "intermediate"},
            {"id": "gp_aug14", "polish": "Widzisz to cielsko?", "german": "Siehst du diesen Koloss?", "explanation": "'Cielsko' od 'ciało' – masywne ciało; nieco pogardliwie", "difficulty": "intermediate"},
            {"id": "gp_aug15", "polish": "Ten gagatek próbuje mnie oszukać.", "german": "Dieser Schlitzohr versucht mich zu betrügen.", "explanation": "'Gagatek' – ironiczne zdrobnienie użyte pejoratywnie; gra między zdrobnieniem a ironią", "difficulty": "advanced"}
        ]
    },
    {
        "key": "prefixes_verbs",
        "name": "Przedrostki czasownikowe (Verbale Vorsilben)",
        "description": "Przedrostki zmieniające znaczenie czasowników polskich – odpowiedniki niemieckich trennbare/untrennbare Verben",
        "icon": "textformat.abc.dottedunderline",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_pvb1", "polish": "pisać → napisać", "german": "schreiben → aufschreiben", "explanation": "'Na-' – przedrostek dokonujący; zmienia aspekt z niedokonanego na dokonany", "difficulty": "beginner"},
            {"id": "gp_pvb2", "polish": "pisać → przepisać", "german": "schreiben → abschreiben/umschreiben", "explanation": "'Prze-' – przez/ponownie; 'przepisać' = przepisać/skopiować", "difficulty": "intermediate"},
            {"id": "gp_pvb3", "polish": "pisać → wpisać", "german": "schreiben → einschreiben/eintragen", "explanation": "'W-' – do wewnątrz; 'wpisać' = wpisać/wprowadzić (eintragen)", "difficulty": "intermediate"},
            {"id": "gp_pvb4", "polish": "pisać → wypisać", "german": "schreiben → ausschreiben", "explanation": "'Wy-' – na zewnątrz; 'wypisać' = wypisać/wystawić (ausstellen)", "difficulty": "intermediate"},
            {"id": "gp_pvb5", "polish": "pisać → podpisać", "german": "schreiben → unterschreiben", "explanation": "'Pod-' – pod; 'podpisać' = podpisać (unterschreiben)", "difficulty": "beginner"},
            {"id": "gp_pvb6", "polish": "pisać → dopisać", "german": "schreiben → hinzuschreiben", "explanation": "'Do-' – dodanie; 'dopisać' = dopisać coś (hinzufügen)", "difficulty": "intermediate"},
            {"id": "gp_pvb7", "polish": "pisać → opisać", "german": "schreiben → beschreiben", "explanation": "'O-' – wokół/o; 'opisać' = opisać (beschreiben)", "difficulty": "intermediate"},
            {"id": "gp_pvb8", "polish": "jechać → wyjechać", "german": "fahren → wegfahren/ausfahren", "explanation": "'Wy-' z 'jechać' – wyjechać = wyjechać z jakiegoś miejsca", "difficulty": "beginner"},
            {"id": "gp_pvb9", "polish": "jechać → przyjechać", "german": "fahren → ankommen", "explanation": "'Przy-' – blisko/do; 'przyjechać' = przyjechać (ankommen)", "difficulty": "beginner"},
            {"id": "gp_pvb10", "polish": "jechać → odjechać", "german": "fahren → abfahren", "explanation": "'Od-' – od; 'odjechać' = odjechać (abfahren)", "difficulty": "beginner"},
            {"id": "gp_pvb11", "polish": "jechać → przejechać", "german": "fahren → überfahren/durchfahren", "explanation": "'Prze-' z 'jechać' – przejechać przez coś (durchfahren/überfahren)", "difficulty": "intermediate"},
            {"id": "gp_pvb12", "polish": "robić → zrobić", "german": "machen → fertigmachen", "explanation": "'Z-' – przedrostek dokonujący; najczęstszy do tworzenia aspektu dokonanego", "difficulty": "beginner"},
            {"id": "gp_pvb13", "polish": "robić → przerobić", "german": "machen → umarbeiten", "explanation": "'Prze-' – przerobić = przerobić/przerobic (umarbeiten/überarbeiten)", "difficulty": "intermediate"},
            {"id": "gp_pvb14", "polish": "robić → dorobić", "german": "machen → dazuverdienen", "explanation": "'Do-' – dorobić = dorobić się/zarobić dodatkowo", "difficulty": "intermediate"},
            {"id": "gp_pvb15", "polish": "robić → wyrobić", "german": "machen → herstellen/produzieren", "explanation": "'Wy-' – wyrobić = wyprodukować/wytworzyć (herstellen)", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "word_derivation",
        "name": "Słowotwórstwo (Wortbildung)",
        "description": "Tworzenie nowych słów przez sufiksy, przedrostki i złożenia",
        "icon": "puzzlepiece",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_wder1", "polish": "uczyć → nauczyciel", "german": "lehren → Lehrer", "explanation": "'-ciel' – sufiks tworzący nazwy wykonawców czynności (jak '-er' w niemieckim)", "difficulty": "beginner"},
            {"id": "gp_wder2", "polish": "pisać → pisarz", "german": "schreiben → Schriftsteller", "explanation": "'-arz' – sufiks zawodów; 'pisarz' = osoba, która pisze (Schriftsteller)", "difficulty": "beginner"},
            {"id": "gp_wder3", "polish": "piekarz, lekarz, stolarz", "german": "Bäcker, Arzt, Tischler", "explanation": "'-arz' – produktywny sufiks zawodów męskich", "difficulty": "beginner"},
            {"id": "gp_wder4", "polish": "nauczyciel → nauczycielka", "german": "Lehrer → Lehrerin", "explanation": "'-ka' tworzy formę żeńską – jak '-in' w niemieckim", "difficulty": "beginner"},
            {"id": "gp_wder5", "polish": "lekarz → lekarka", "german": "Arzt → Ärztin", "explanation": "'-ka' od '-arz' – żeńska forma zawodu", "difficulty": "beginner"},
            {"id": "gp_wder6", "polish": "piękny → piękność", "german": "schön → Schönheit", "explanation": "'-ość' od przymiotnika – tworzy rzeczownik abstrakcyjny (jak '-heit/-keit')", "difficulty": "intermediate"},
            {"id": "gp_wder7", "polish": "wolny → wolność", "german": "frei → Freiheit", "explanation": "'-ość' = '-heit'; 'wolność' = 'Freiheit' – rzeczownik abstrakcyjny", "difficulty": "intermediate"},
            {"id": "gp_wder8", "polish": "Polak → polski → po polsku", "german": "Pole → polnisch → auf Polnisch", "explanation": "Derywacja od nazw narodów: rzeczownik → przymiotnik → przysłówek", "difficulty": "intermediate"},
            {"id": "gp_wder9", "polish": "Niemiec → niemiecki → po niemiecku", "german": "Deutscher → deutsch → auf Deutsch", "explanation": "'Niemiec' → 'niemiecki' → 'po niemiecku'; ten sam wzorzec derywacji", "difficulty": "intermediate"},
            {"id": "gp_wder10", "polish": "drzewo → drewniany", "german": "Baum → hölzern / aus Holz", "explanation": "'-any/-iany' – sufiks tworzący przymiotniki materiałowe", "difficulty": "intermediate"},
            {"id": "gp_wder11", "polish": "młody → młodzież", "german": "jung → Jugend", "explanation": "Przymiotnik → rzeczownik zbiorowy; '-ież' to rzadki sufiks", "difficulty": "intermediate"},
            {"id": "gp_wder12", "polish": "bez + robota → bezrobotny", "german": "arbeitslos", "explanation": "'Bez-' + rzeczownik → przymiotnik; 'bezrobotny' = 'arbeitslos'", "difficulty": "intermediate"},
            {"id": "gp_wder13", "polish": "nie + możliwy → niemożliwy", "german": "unmöglich", "explanation": "'Nie-' – przedrostek negujący przymiotniki (jak 'un-' w niemieckim)", "difficulty": "beginner"},
            {"id": "gp_wder14", "polish": "samochód = samo + chód", "german": "Automobil = Auto + mobil", "explanation": "Złożenie: 'samo' (selbst) + 'chód' (Gang) = samochód (Automobil)", "difficulty": "intermediate"},
            {"id": "gp_wder15", "polish": "lodo + łamacz → lodołamacz", "german": "Eisbrecher", "explanation": "Złożenie: 'lód' (Eis) + 'łamacz' (Brecher) = lodołamacz (Eisbrecher)", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "compound_nouns",
        "name": "Rzeczowniki złożone (Zusammengesetzte Substantive)",
        "description": "Tworzenie złożeń w polskim vs mega-złożenia niemieckie – różne strategie",
        "icon": "rectangle.split.2x1",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_comp1", "polish": "samolot", "german": "Flugzeug", "explanation": "'Samo' (selbst) + 'lot' (Flug) = samolot; polski tworzy złożenia, ale rzadziej niż niemiecki", "difficulty": "beginner"},
            {"id": "gp_comp2", "polish": "wieżowiec", "german": "Hochhaus / Wolkenkratzer", "explanation": "'Wieża' (Turm) + '-owiec' (sufiks) = wieżowiec; inny mechanizm niż niemiecki", "difficulty": "intermediate"},
            {"id": "gp_comp3", "polish": "pralka automatyczna", "german": "Waschmaschine", "explanation": "Polski: przymiotnik + rzeczownik zamiast złożenia; 'pralka' od 'prać' (waschen)", "difficulty": "intermediate"},
            {"id": "gp_comp4", "polish": "szczoteczka do zębów", "german": "Zahnbürste", "explanation": "Polski: 'szczoteczka do zębów' (Bürstchen zu Zähnen) vs niemiecki: jedno złożone słowo", "difficulty": "intermediate"},
            {"id": "gp_comp5", "polish": "kartka urodzinowa", "german": "Geburtstagskarte", "explanation": "Polski: rzeczownik + przymiotnik; niemiecki: złożenie trzech elementów", "difficulty": "intermediate"},
            {"id": "gp_comp6", "polish": "samochód osobowy", "german": "Personenkraftwagen (PKW)", "explanation": "Polski: przymiotnik 'osobowy'; niemiecki: trójczłonowe złożenie", "difficulty": "intermediate"},
            {"id": "gp_comp7", "polish": "szpital dziecięcy", "german": "Kinderkrankenhaus", "explanation": "Polski: rzeczownik + przymiotnik; niemiecki: trzyczłonowe złożenie", "difficulty": "intermediate"},
            {"id": "gp_comp8", "polish": "ubezpieczenie od odpowiedzialności cywilnej", "german": "Haftpflichtversicherung", "explanation": "Polski: fraza przyimkowa; niemiecki: jedno złożone słowo – kluczowa różnica!", "difficulty": "advanced"},
            {"id": "gp_comp9", "polish": "parkowiec / parking wielopoziomowy", "german": "Parkhaus", "explanation": "Polski może tworzyć nowe złożenia sufiks. ('parkowiec') lub opisowo", "difficulty": "intermediate"},
            {"id": "gp_comp10", "polish": "zmywarka do naczyń", "german": "Geschirrspülmaschine", "explanation": "'Zmywarka' od 'zmywać' + '-arka' (sufiks urządzeniowy); plus fraza 'do naczyń'", "difficulty": "intermediate"},
            {"id": "gp_comp11", "polish": "bajkopisarz", "german": "Märchenschreiber", "explanation": "'Bajka' + 'pisarz' – rzadsze polskie złożenie; wzorzec: obiekt + wykonawca", "difficulty": "intermediate"},
            {"id": "gp_comp12", "polish": "czarno-biały", "german": "schwarz-weiß", "explanation": "Złożenie przymiotnikowe z łącznikiem – identyczna struktura jak w niemieckim", "difficulty": "beginner"},
            {"id": "gp_comp13", "polish": "północno-wschodni", "german": "nordöstlich", "explanation": "Złożenie kierunkowe z łącznikiem – 'północ' (Nord) + 'wschód' (Ost)", "difficulty": "intermediate"},
            {"id": "gp_comp14", "polish": "cudzoziemiec", "german": "Ausländer", "explanation": "'Cudzo' (fremd) + 'ziemia' (Land) + '-iec' (sufiks) = cudzoziemiec", "difficulty": "intermediate"},
            {"id": "gp_comp15", "polish": "głośnik / kolumna głośnikowa", "german": "Lautsprecher", "explanation": "'Głośnik' od 'głośno' (laut) + '-nik' (sufiks); krótsze niż złożenie", "difficulty": "intermediate"}
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
