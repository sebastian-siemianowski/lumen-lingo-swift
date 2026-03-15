#!/usr/bin/env python3
"""Batch 11: Everyday Communication (categories 58-62) for german_polish grammar."""
import json

GRAMMAR_FILE = 'LumenLingo/LumenLingo/Resources/Content/german_polish/grammar_german_polish.json'

new_categories = [
    {
        "key": "greetings_politeness",
        "name": "Powitania i grzeczność (Begrüßungen und Höflichkeit)",
        "description": "Formy grzecznościowe, powitania i pożegnania – Pan/Pani vs du/Sie",
        "icon": "hand.wave",
        "difficulty": "beginner",
        "items": [
            {"id": "gp_greet1", "polish": "Dzień dobry!", "german": "Guten Tag!", "explanation": "Formalne powitanie dzienne – używane do osób na 'Pan/Pani'", "difficulty": "beginner"},
            {"id": "gp_greet2", "polish": "Dobry wieczór!", "german": "Guten Abend!", "explanation": "Powitanie wieczorne – formalne", "difficulty": "beginner"},
            {"id": "gp_greet3", "polish": "Cześć!", "german": "Hallo! / Tschüss!", "explanation": "'Cześć' – nieformalne powitanie I pożegnanie jednocześnie!", "difficulty": "beginner"},
            {"id": "gp_greet4", "polish": "Do widzenia!", "german": "Auf Wiedersehen!", "explanation": "Formalne pożegnanie – dosłownie 'do zobaczenia'", "difficulty": "beginner"},
            {"id": "gp_greet5", "polish": "Jak się Pan/Pani miewa?", "german": "Wie geht es Ihnen?", "explanation": "Formalne pytanie o samopoczucie – Pan/Pani = 3. osoba (jak 'Sie')", "difficulty": "beginner"},
            {"id": "gp_greet6", "polish": "Proszę bardzo.", "german": "Bitte sehr.", "explanation": "'Proszę' – wielofunkcyjne: proszę/zapraszam/bitte", "difficulty": "beginner"},
            {"id": "gp_greet7", "polish": "Dziękuję bardzo.", "german": "Vielen Dank.", "explanation": "'Dziękuję' – formalna podzięka; 'dzięki' = potoczne 'danke'", "difficulty": "beginner"},
            {"id": "gp_greet8", "polish": "Przepraszam, nie rozumiem.", "german": "Entschuldigung, ich verstehe nicht.", "explanation": "'Przepraszam' = 'Entschuldigung' i 'es tut mir leid' jednocześnie", "difficulty": "beginner"},
            {"id": "gp_greet9", "polish": "Miło mi Pana/Panią poznać.", "german": "Es freut mich, Sie kennenzulernen.", "explanation": "Formalne przedstawienie się – Pana (masc.) / Panią (fem.) w bierniku", "difficulty": "intermediate"},
            {"id": "gp_greet10", "polish": "Czy mogę prosić o pomoc?", "german": "Dürfte ich um Hilfe bitten?", "explanation": "Grzeczna prośba z 'czy mogę' – uprzejma forma pytania", "difficulty": "intermediate"},
            {"id": "gp_greet11", "polish": "Proszę usiąść.", "german": "Bitte setzen Sie sich.", "explanation": "'Proszę' + bezokolicznik – grzeczny rozkaz/zaproszenie", "difficulty": "beginner"},
            {"id": "gp_greet12", "polish": "Nie ma za co.", "german": "Keine Ursache. / Gern geschehen.", "explanation": "Odpowiedź na podziękowanie – dosłownie 'nie ma za co'", "difficulty": "beginner"},
            {"id": "gp_greet13", "polish": "Smacznego!", "german": "Guten Appetit!", "explanation": "'Smacznego' – dopełniacz; życzenie przed jedzeniem", "difficulty": "beginner"},
            {"id": "gp_greet14", "polish": "Na zdrowie!", "german": "Prost! / Gesundheit!", "explanation": "'Na zdrowie' – przy toaście (Prost!) i po kichnięciu (Gesundheit!)", "difficulty": "beginner"},
            {"id": "gp_greet15", "polish": "Czy mógłby Pan powtórzyć?", "german": "Könnten Sie das bitte wiederholen?", "explanation": "'Czy mógłby Pan' – tryb przypuszczający w grzecznej prośbie", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "expressions_of_opinion",
        "name": "Wyrażanie opinii (Meinungsäußerung)",
        "description": "Jak wyrażać opinie, zgadzać się i nie zgadzać po polsku",
        "icon": "bubble.left.and.bubble.right",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_opin1", "polish": "Moim zdaniem to dobry pomysł.", "german": "Meiner Meinung nach ist das eine gute Idee.", "explanation": "'Moim zdaniem' = 'meiner Meinung nach' – narzędnik 'moim' + miejscownik 'zdaniem'", "difficulty": "intermediate"},
            {"id": "gp_opin2", "polish": "Uważam, że masz rację.", "german": "Ich finde, dass du Recht hast.", "explanation": "'Uważam, że' = 'ich finde/denke, dass' – wyrażenie osobistej opinii", "difficulty": "intermediate"},
            {"id": "gp_opin3", "polish": "Zgadzam się z tobą.", "german": "Ich stimme dir zu.", "explanation": "'Zgadzać się z' + narzędnik – 'zustimmen' + Dativ", "difficulty": "beginner"},
            {"id": "gp_opin4", "polish": "Nie zgadzam się.", "german": "Ich bin nicht einverstanden.", "explanation": "'Nie zgadzam się' – przeczenie opinii; prosty szyk", "difficulty": "beginner"},
            {"id": "gp_opin5", "polish": "Wydaje mi się, że to prawda.", "german": "Es scheint mir, dass das wahr ist.", "explanation": "'Wydaje mi się' – ostrożna opinia; celownik 'mi'", "difficulty": "intermediate"},
            {"id": "gp_opin6", "polish": "To zależy od sytuacji.", "german": "Das hängt von der Situation ab.", "explanation": "'Zależeć od' + dopełniacz = 'abhängen von' + Dativ", "difficulty": "intermediate"},
            {"id": "gp_opin7", "polish": "Masz absolutną rację!", "german": "Du hast vollkommen Recht!", "explanation": "'Mieć rację' – idiom; 'racja' w bierniku", "difficulty": "beginner"},
            {"id": "gp_opin8", "polish": "To bez sensu.", "german": "Das ergibt keinen Sinn.", "explanation": "'Bez sensu' – dosłownie 'ohne Sinn'; wyrażenie odrzucenia", "difficulty": "beginner"},
            {"id": "gp_opin9", "polish": "Jestem za tym, żeby pojechać nad morze.", "german": "Ich bin dafür, ans Meer zu fahren.", "explanation": "'Być za' + narzędnik – wyrażenie poparcia; 'dafür sein'", "difficulty": "intermediate"},
            {"id": "gp_opin10", "polish": "Jestem przeciw temu pomysłowi.", "german": "Ich bin gegen diese Idee.", "explanation": "'Być przeciw' + celownik – wyrażenie sprzeciwu; 'dagegen sein'", "difficulty": "intermediate"},
            {"id": "gp_opin11", "polish": "Wolę herbatę od kawy.", "german": "Ich bevorzuge Tee gegenüber Kaffee.", "explanation": "'Woleć A od B' – A w bierniku, B z 'od' + dopełniacz", "difficulty": "intermediate"},
            {"id": "gp_opin12", "polish": "Nie mam nic przeciwko temu.", "german": "Ich habe nichts dagegen.", "explanation": "'Nie mieć nic przeciwko' + celownik – brak sprzeciwu", "difficulty": "intermediate"},
            {"id": "gp_opin13", "polish": "Szczerze mówiąc, nie podoba mi się to.", "german": "Ehrlich gesagt, gefällt mir das nicht.", "explanation": "'Szczerze mówiąc' = 'ehrlich gesagt' – imiesłów przysłówkowy", "difficulty": "intermediate"},
            {"id": "gp_opin14", "polish": "Z jednej strony tak, z drugiej nie.", "german": "Einerseits ja, andererseits nein.", "explanation": "'Z jednej strony...z drugiej' = 'einerseits...andererseits' – ważenie argumentów", "difficulty": "intermediate"},
            {"id": "gp_opin15", "polish": "Właśnie o to mi chodzi!", "german": "Genau das meine ich!", "explanation": "'Chodzić o' – bezosobowy idiom; 'es geht um' (dosłownie: o to mi chodzi)", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "time_frequency",
        "name": "Czas i częstotliwość (Zeit und Häufigkeit)",
        "description": "Wyrażanie czasu, częstotliwości i sekwencji zdarzeń po polsku",
        "icon": "clock.arrow.circlepath",
        "difficulty": "beginner",
        "items": [
            {"id": "gp_tfreq1", "polish": "Zawsze piję kawę rano.", "german": "Ich trinke immer morgens Kaffee.", "explanation": "'Zawsze' = 'immer' – przysłówek częstotliwości na początku lub przed czasownikiem", "difficulty": "beginner"},
            {"id": "gp_tfreq2", "polish": "Nigdy nie jem mięsa.", "german": "Ich esse nie Fleisch.", "explanation": "'Nigdy nie' = 'nie/niemals' – podwójne przeczenie obowiązkowe!", "difficulty": "beginner"},
            {"id": "gp_tfreq3", "polish": "Czasami chodzę do kina.", "german": "Manchmal gehe ich ins Kino.", "explanation": "'Czasami' = 'manchmal' – przysłówek częstotliwości", "difficulty": "beginner"},
            {"id": "gp_tfreq4", "polish": "Często ćwiczę na siłowni.", "german": "Ich trainiere oft im Fitnessstudio.", "explanation": "'Często' = 'oft' – przysłówek wysokiej częstotliwości", "difficulty": "beginner"},
            {"id": "gp_tfreq5", "polish": "Rzadko oglądam telewizję.", "german": "Ich sehe selten fern.", "explanation": "'Rzadko' = 'selten' – przysłówek niskiej częstotliwości", "difficulty": "beginner"},
            {"id": "gp_tfreq6", "polish": "Co tydzień gram w piłkę.", "german": "Jede Woche spiele ich Fußball.", "explanation": "'Co tydzień' = 'jede Woche' – regularny interwał z 'co'", "difficulty": "beginner"},
            {"id": "gp_tfreq7", "polish": "Codziennie uczę się polskiego.", "german": "Ich lerne jeden Tag Polnisch.", "explanation": "'Codziennie' = 'jeden Tag/täglich' – codzienność", "difficulty": "beginner"},
            {"id": "gp_tfreq8", "polish": "Najpierw zjem śniadanie, potem pójdę do pracy.", "german": "Zuerst esse ich Frühstück, dann gehe ich zur Arbeit.", "explanation": "'Najpierw...potem' = 'zuerst...dann' – sekwencja czynności", "difficulty": "beginner"},
            {"id": "gp_tfreq9", "polish": "Właśnie skończyłem pracę.", "german": "Ich habe gerade die Arbeit beendet.", "explanation": "'Właśnie' = 'gerade' – czynność dopiero co zakończona", "difficulty": "beginner"},
            {"id": "gp_tfreq10", "polish": "Zaraz wrócę.", "german": "Ich komme gleich zurück.", "explanation": "'Zaraz' = 'gleich/sofort' – w najbliższej przyszłości", "difficulty": "beginner"},
            {"id": "gp_tfreq11", "polish": "Od czasu do czasu gotujemy razem.", "german": "Ab und zu kochen wir zusammen.", "explanation": "'Od czasu do czasu' = 'ab und zu' – nieregularna częstotliwość", "difficulty": "beginner"},
            {"id": "gp_tfreq12", "polish": "W tym momencie jestem zajęty.", "german": "Im Moment bin ich beschäftigt.", "explanation": "'W tym momencie' = 'im Moment/gerade jetzt' – punkt w czasie", "difficulty": "beginner"},
            {"id": "gp_tfreq13", "polish": "Na co dzień pracuję z domu.", "german": "Alltäglich arbeite ich von zu Hause.", "explanation": "'Na co dzień' = 'alltäglich/im Alltag' – w codziennym życiu", "difficulty": "beginner"},
            {"id": "gp_tfreq14", "polish": "Do tej pory wszystko szło dobrze.", "german": "Bis jetzt lief alles gut.", "explanation": "'Do tej pory' = 'bis jetzt/bisher' – do obecnego momentu", "difficulty": "intermediate"},
            {"id": "gp_tfreq15", "polish": "Odtąd będę punktualny.", "german": "Von nun an werde ich pünktlich sein.", "explanation": "'Odtąd' = 'von nun an/ab jetzt' – od tego momentu w przyszłość", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "emotions_feelings",
        "name": "Emocje i uczucia (Emotionen und Gefühle)",
        "description": "Wyrażanie emocji i stanów uczuciowych w polskim – konstrukcje z celownikiem i narzędnikiem",
        "icon": "heart.circle",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_emot1", "polish": "Cieszę się z twojego sukcesu.", "german": "Ich freue mich über deinen Erfolg.", "explanation": "'Cieszyć się z' + dopełniacz = 'sich freuen über' + Akkusativ", "difficulty": "intermediate"},
            {"id": "gp_emot2", "polish": "Boję się pająków.", "german": "Ich habe Angst vor Spinnen.", "explanation": "'Bać się' + dopełniacz = 'Angst haben vor' + Dativ; czasownik zwrotny", "difficulty": "intermediate"},
            {"id": "gp_emot3", "polish": "Tęsknię za rodziną.", "german": "Ich vermisse meine Familie.", "explanation": "'Tęsknić za' + narzędnik – brak bezpośredniego odpowiednika w niemieckim", "difficulty": "intermediate"},
            {"id": "gp_emot4", "polish": "Jestem wdzięczny za pomoc.", "german": "Ich bin dankbar für die Hilfe.", "explanation": "'Wdzięczny za' + biernik = 'dankbar für' + Akkusativ", "difficulty": "intermediate"},
            {"id": "gp_emot5", "polish": "Martwię się o ciebie.", "german": "Ich mache mir Sorgen um dich.", "explanation": "'Martwić się o' + biernik = 'sich Sorgen machen um' + Akkusativ", "difficulty": "intermediate"},
            {"id": "gp_emot6", "polish": "Jest mi smutno.", "german": "Mir ist traurig. / Ich bin traurig.", "explanation": "'Jest mi' + przymiotnik – bezosobowa konstrukcja z celownikiem", "difficulty": "beginner"},
            {"id": "gp_emot7", "polish": "Jestem zły na siebie.", "german": "Ich bin wütend auf mich selbst.", "explanation": "'Zły na' + biernik = 'wütend/böse auf' + Akkusativ", "difficulty": "intermediate"},
            {"id": "gp_emot8", "polish": "Czuję się samotny.", "german": "Ich fühle mich einsam.", "explanation": "'Czuć się' + przymiotnik = 'sich fühlen' + Adjektiv; czasownik zwrotny", "difficulty": "beginner"},
            {"id": "gp_emot9", "polish": "Jestem dumny z mojego syna.", "german": "Ich bin stolz auf meinen Sohn.", "explanation": "'Dumny z' + dopełniacz = 'stolz auf' + Akkusativ; różne przyimki!", "difficulty": "intermediate"},
            {"id": "gp_emot10", "polish": "Wstyd mi za to zachowanie.", "german": "Ich schäme mich für dieses Verhalten.", "explanation": "'Wstyd mi' – bezosobowe; celownik + za + biernik", "difficulty": "intermediate"},
            {"id": "gp_emot11", "polish": "Denerwuję się przed egzaminem.", "german": "Ich bin vor der Prüfung nervös.", "explanation": "'Denerwować się przed' + narzędnik = 'nervös sein vor' + Dativ", "difficulty": "intermediate"},
            {"id": "gp_emot12", "polish": "Żal mi go.", "german": "Er tut mir leid.", "explanation": "'Żal mi' + dopełniacz osoby – bezosobowe wyrażenie współczucia", "difficulty": "intermediate"},
            {"id": "gp_emot13", "polish": "Podoba mi się ta muzyka.", "german": "Diese Musik gefällt mir.", "explanation": "'Podobać się' + celownik = 'gefallen' + Dativ; identyczna struktura!", "difficulty": "beginner"},
            {"id": "gp_emot14", "polish": "Nie mogę się doczekać wakacji!", "german": "Ich kann die Ferien kaum erwarten!", "explanation": "'Nie móc się doczekać' + dopełniacz – ekscytacja oczekiwaniem", "difficulty": "intermediate"},
            {"id": "gp_emot15", "polish": "Mam dość tej pogody.", "german": "Ich habe genug von diesem Wetter.", "explanation": "'Mieć dość' + dopełniacz = 'genug haben von' + Dativ; frustracja", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "directions_location",
        "name": "Kierunki i lokalizacja (Richtungen und Ortsangaben)",
        "description": "Wyrażanie kierunku, położenia i ruchu – różnica między 'gdzie' a 'dokąd'",
        "icon": "location.circle",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_dir1", "polish": "Idę do sklepu.", "german": "Ich gehe zum Geschäft.", "explanation": "'Do' + dopełniacz – kierunek (wohin); 'zum/zur' w niemieckim", "difficulty": "beginner"},
            {"id": "gp_dir2", "polish": "Jestem w sklepie.", "german": "Ich bin im Geschäft.", "explanation": "'W' + miejscownik – lokalizacja (wo); różny przypadek niż kierunek!", "difficulty": "beginner"},
            {"id": "gp_dir3", "polish": "Wracam ze sklepu.", "german": "Ich komme vom Geschäft zurück.", "explanation": "'Z/ze' + dopełniacz – kierunek od (woher); 'vom/von der'", "difficulty": "beginner"},
            {"id": "gp_dir4", "polish": "Idę na pocztę.", "german": "Ich gehe zur Post.", "explanation": "'Na' + biernik – kierunek do niektórych miejsc (poczta, dworzec, lotnisko)", "difficulty": "intermediate"},
            {"id": "gp_dir5", "polish": "Jestem na poczcie.", "german": "Ich bin auf der Post.", "explanation": "'Na' + miejscownik – lokalizacja na/w; inne miejsca niż 'w'", "difficulty": "intermediate"},
            {"id": "gp_dir6", "polish": "Skręć w prawo.", "german": "Biegen Sie rechts ab.", "explanation": "'Skręcić w prawo/lewo' = 'rechts/links abbiegen'", "difficulty": "beginner"},
            {"id": "gp_dir7", "polish": "Jedź prosto, a potem w lewo.", "german": "Fahren Sie geradeaus und dann links.", "explanation": "'Prosto' = 'geradeaus'; 'a potem' = 'und dann'", "difficulty": "beginner"},
            {"id": "gp_dir8", "polish": "Poczta jest naprzeciwko banku.", "german": "Die Post ist gegenüber der Bank.", "explanation": "'Naprzeciwko' + dopełniacz = 'gegenüber' + Dativ", "difficulty": "intermediate"},
            {"id": "gp_dir9", "polish": "Mieszkam obok parku.", "german": "Ich wohne neben dem Park.", "explanation": "'Obok' + dopełniacz = 'neben' + Dativ (lokalizacja)", "difficulty": "intermediate"},
            {"id": "gp_dir10", "polish": "Szkoła jest między kościołem a biblioteką.", "german": "Die Schule ist zwischen der Kirche und der Bibliothek.", "explanation": "'Między' + narzędnik = 'zwischen' + Dativ; 'a' łączy dwa obiekty", "difficulty": "intermediate"},
            {"id": "gp_dir11", "polish": "Samochód stoi przed domem.", "german": "Das Auto steht vor dem Haus.", "explanation": "'Przed' + narzędnik (lokalizacja) = 'vor' + Dativ", "difficulty": "intermediate"},
            {"id": "gp_dir12", "polish": "Kot schował się za szafą.", "german": "Die Katze hat sich hinter dem Schrank versteckt.", "explanation": "'Za' + narzędnik (lokalizacja) = 'hinter' + Dativ", "difficulty": "intermediate"},
            {"id": "gp_dir13", "polish": "Połóż to na stole.", "german": "Leg das auf den Tisch.", "explanation": "'Na' + miejscownik (lokalizacja) vs. 'na' + biernik (kierunek) – kluczowa różnica", "difficulty": "intermediate"},
            {"id": "gp_dir14", "polish": "Wejdź do środka.", "german": "Komm rein. / Tritt ein.", "explanation": "'Do środka' = 'hinein/herein' – kierunek do wnętrza", "difficulty": "beginner"},
            {"id": "gp_dir15", "polish": "Daleko stąd jest dworzec?", "german": "Ist der Bahnhof weit von hier?", "explanation": "'Daleko stąd' = 'weit von hier'; 'stąd' = 'von hier' (od tego miejsca)", "difficulty": "beginner"}
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
