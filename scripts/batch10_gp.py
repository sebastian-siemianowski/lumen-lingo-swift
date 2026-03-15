#!/usr/bin/env python3
"""Batch 10: Complex Structures (categories 53-57) for german_polish grammar."""
import json

GRAMMAR_FILE = 'LumenLingo/LumenLingo/Resources/Content/german_polish/grammar_german_polish.json'

new_categories = [
    {
        "key": "passive_voice",
        "name": "Strona bierna (Passiv)",
        "description": "Tworzenie strony biernej w polskim – z użyciem form zwrotnych i imiesłowów",
        "icon": "arrow.uturn.left",
        "difficulty": "advanced",
        "items": [
            {"id": "gp_pass1", "polish": "Książka została napisana.", "german": "Das Buch wurde geschrieben.", "explanation": "Strona bierna z 'zostać' + imiesłów – odpowiednik niemieckiego Vorgangspassiv", "difficulty": "intermediate"},
            {"id": "gp_pass2", "polish": "Dom jest budowany.", "german": "Das Haus wird gebaut.", "explanation": "Strona bierna z 'być' + imiesłów – czynność w trakcie", "difficulty": "intermediate"},
            {"id": "gp_pass3", "polish": "Drzwi zostały otwarte.", "german": "Die Tür wurde geöffnet.", "explanation": "'Zostały otwarte' – bierna dokonana; imiesłów odmienia się przez rodzaje!", "difficulty": "intermediate"},
            {"id": "gp_pass4", "polish": "Obiad jest gotowany przez mamę.", "german": "Das Mittagessen wird von Mama gekocht.", "explanation": "'Przez' + biernik = wykonawca czynności (jak 'von' + Dativ w niemieckim)", "difficulty": "intermediate"},
            {"id": "gp_pass5", "polish": "Tu mówi się po polsku.", "german": "Hier spricht man Polnisch.", "explanation": "Forma bezosobowa z 'się' – najpowszechniejszy odpowiednik 'man + Verb'", "difficulty": "beginner"},
            {"id": "gp_pass6", "polish": "Mówiono, że to prawda.", "german": "Man sagte, dass es wahr sei.", "explanation": "Forma bezosobowa czasu przeszłego z '-no/-to' – unikalna dla polskiego", "difficulty": "advanced"},
            {"id": "gp_pass7", "polish": "Zrobiono wszystko.", "german": "Man hat alles gemacht.", "explanation": "'-no/-to' – bezosobowa forma przeszła; brak odpowiednika w niemieckim", "difficulty": "advanced"},
            {"id": "gp_pass8", "polish": "Ciastko zostało zjedzone przez dzieci.", "german": "Der Kuchen wurde von den Kindern gegessen.", "explanation": "Pełna strona bierna z wykonawcą – rzadka w polskim, częstsza w niemieckim", "difficulty": "intermediate"},
            {"id": "gp_pass9", "polish": "Ten film jest oglądany na całym świecie.", "german": "Dieser Film wird weltweit angesehen.", "explanation": "Bierna niedokonana – czynność powtarzająca się/trwająca", "difficulty": "intermediate"},
            {"id": "gp_pass10", "polish": "Paczka została wysłana wczoraj.", "german": "Das Paket wurde gestern geschickt.", "explanation": "Bierna dokonana – jednorazowe zdarzenie w przeszłości", "difficulty": "intermediate"},
            {"id": "gp_pass11", "polish": "Tutaj nie wolno palić.", "german": "Hier darf nicht geraucht werden.", "explanation": "'Nie wolno' + bezokolicznik – bezosobowy zakaz (zamiast biernej)", "difficulty": "intermediate"},
            {"id": "gp_pass12", "polish": "Trzeba to zrobić.", "german": "Das muss gemacht werden.", "explanation": "'Trzeba' – bezosobowa konieczność; prostszy odpowiednik biernej z 'müssen'", "difficulty": "intermediate"},
            {"id": "gp_pass13", "polish": "Wszystkie bilety zostały sprzedane.", "german": "Alle Tickets wurden verkauft.", "explanation": "Bierna w liczbie mnogiej – imiesłów odmienia się przez liczbę", "difficulty": "intermediate"},
            {"id": "gp_pass14", "polish": "List był pisany godzinę.", "german": "Der Brief wurde eine Stunde lang geschrieben.", "explanation": "Bierna niedokonana z 'być' – podkreśla trwanie czynności", "difficulty": "advanced"},
            {"id": "gp_pass15", "polish": "Wybudowano nowy most.", "german": "Eine neue Brücke wurde gebaut.", "explanation": "'-no/-to' – preferowana w polskim zamiast pełnej biernej; bardziej naturalna", "difficulty": "advanced"}
        ]
    },
    {
        "key": "reported_speech",
        "name": "Mowa zależna (Indirekte Rede)",
        "description": "Przekazywanie wypowiedzi w mowie zależnej – bez Konjunktiv jak w niemieckim",
        "icon": "quote.bubble",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_rep1", "polish": "Powiedział, że jest chory.", "german": "Er sagte, dass er krank sei.", "explanation": "Mowa zależna z 'że' – w polskim bez trybu łącznego (Konjunktiv)", "difficulty": "intermediate"},
            {"id": "gp_rep2", "polish": "Zapytała, czy lubię kawę.", "german": "Sie fragte, ob ich Kaffee mag.", "explanation": "Pytanie w mowie zależnej z 'czy' = 'ob'", "difficulty": "intermediate"},
            {"id": "gp_rep3", "polish": "Powiedzieli, że przyjdą jutro.", "german": "Sie sagten, dass sie morgen kommen werden.", "explanation": "Czas w mowie zależnej zachowany – w polskim nie ma przesunięcia czasów!", "difficulty": "intermediate"},
            {"id": "gp_rep4", "polish": "Mama powiedziała, żebym posprzątał pokój.", "german": "Mama sagte, ich solle mein Zimmer aufräumen.", "explanation": "'Żebym' – zdanie żądające w mowie zależnej; końcówka '-bym' = osoba", "difficulty": "advanced"},
            {"id": "gp_rep5", "polish": "Nauczyciel kazał nam napisać wypracowanie.", "german": "Der Lehrer hat uns aufgetragen, einen Aufsatz zu schreiben.", "explanation": "'Kazać' + celownik + bezokolicznik – polecenie w mowie zależnej", "difficulty": "intermediate"},
            {"id": "gp_rep6", "polish": "Twierdził, że nie widział wypadku.", "german": "Er behauptete, dass er den Unfall nicht gesehen habe.", "explanation": "'Twierdził, że' – mowa zależna z dystansem; bez Konjunktiv", "difficulty": "intermediate"},
            {"id": "gp_rep7", "polish": "Zapytał, gdzie mieszkam.", "german": "Er fragte, wo ich wohne.", "explanation": "Pytanie z zaimkiem pytajnym w mowie zależnej – szyk jak w zdaniu oznajmującym", "difficulty": "intermediate"},
            {"id": "gp_rep8", "polish": "Obiecała, że zadzwoni wieczorem.", "german": "Sie versprach, dass sie am Abend anrufen werde.", "explanation": "Obietnica w mowie zależnej – zachowany czas przyszły", "difficulty": "intermediate"},
            {"id": "gp_rep9", "polish": "Prosił, żebyśmy mu pomogli.", "german": "Er bat darum, dass wir ihm helfen.", "explanation": "'Żebyśmy' – prośba w mowie zależnej; '-byśmy' = 1. os. l.mn.", "difficulty": "advanced"},
            {"id": "gp_rep10", "polish": "Powiedział mi, że jest szczęśliwy.", "german": "Er hat mir gesagt, dass er glücklich ist.", "explanation": "'Powiedzieć komuś' (celownik) – przekazanie informacji osobie", "difficulty": "intermediate"},
            {"id": "gp_rep11", "polish": "Stwierdził, że to niemożliwe.", "german": "Er stellte fest, dass das unmöglich sei.", "explanation": "'Stwierdzić, że' – formalne stwierdzenie w mowie zależnej", "difficulty": "intermediate"},
            {"id": "gp_rep12", "polish": "Ostrzegł nas, żebyśmy byli ostrożni.", "german": "Er warnte uns, dass wir vorsichtig sein sollten.", "explanation": "'Żebyśmy byli' – ostrzeżenie z trybem łącznym w mowie zależnej", "difficulty": "advanced"},
            {"id": "gp_rep13", "polish": "Odpowiedział, że nie wie.", "german": "Er antwortete, dass er es nicht wisse.", "explanation": "'Odpowiedzieć, że' – odpowiedź w mowie zależnej", "difficulty": "intermediate"},
            {"id": "gp_rep14", "polish": "Według niego to był dobry pomysł.", "german": "Seiner Meinung nach war das eine gute Idee.", "explanation": "'Według' + dopełniacz – podanie źródła opinii bez mowy zależnej", "difficulty": "intermediate"},
            {"id": "gp_rep15", "polish": "Podobno jutro będzie padać.", "german": "Angeblich soll es morgen regnen.", "explanation": "'Podobno' – przysłówek modyfikujący = informacja z drugiej ręki", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "conditional_sentences",
        "name": "Zdania warunkowe (Konditionalsätze)",
        "description": "Trzy typy zdań warunkowych w polskim – realne, potencjalne i nierealne",
        "icon": "arrow.triangle.branch",
        "difficulty": "advanced",
        "items": [
            {"id": "gp_conds1", "polish": "Jeśli będzie ładnie, pójdziemy na spacer.", "german": "Wenn es schön wird, gehen wir spazieren.", "explanation": "Warunek realny (typ I) – 'jeśli' + czas przyszły", "difficulty": "intermediate"},
            {"id": "gp_conds2", "polish": "Gdybym miał czas, pojechałbym do Polski.", "german": "Wenn ich Zeit hätte, würde ich nach Polen fahren.", "explanation": "Warunek potencjalny (typ II) – 'gdybym' + tryb przypuszczający", "difficulty": "advanced"},
            {"id": "gp_conds3", "polish": "Gdybym był bogaty, kupiłbym dom.", "german": "Wenn ich reich wäre, würde ich ein Haus kaufen.", "explanation": "Konjunktiv II = polski tryb przypuszczający z 'gdyby'", "difficulty": "advanced"},
            {"id": "gp_conds4", "polish": "Gdybyś wcześniej przyszedł, spotkałbyś ją.", "german": "Wenn du früher gekommen wärst, hättest du sie getroffen.", "explanation": "Warunek nierealny (typ III przeszły) – 'gdybyś przyszedł' + 'spotkałbyś'", "difficulty": "advanced"},
            {"id": "gp_conds5", "polish": "Jeśli chcesz, mogę ci pomóc.", "german": "Wenn du willst, kann ich dir helfen.", "explanation": "Warunek realny teraźniejszy – 'jeśli' + czas teraźniejszy", "difficulty": "beginner"},
            {"id": "gp_conds6", "polish": "Gdyby nie deszcz, wyszlibyśmy.", "german": "Wenn es nicht regnen würde, würden wir rausgehen.", "explanation": "'Gdyby nie' = 'wenn nicht' – warunek z negacją", "difficulty": "advanced"},
            {"id": "gp_conds7", "polish": "Pod warunkiem, że zdasz egzamin, dostaniesz nagrodę.", "german": "Unter der Bedingung, dass du die Prüfung bestehst, bekommst du eine Belohnung.", "explanation": "'Pod warunkiem, że' = 'unter der Bedingung, dass' – formalny warunek", "difficulty": "advanced"},
            {"id": "gp_conds8", "polish": "O ile dobrze pamiętam, spotkanie jest o trzeciej.", "german": "Soweit ich mich erinnere, ist das Treffen um drei.", "explanation": "'O ile' = 'soweit/sofern' – warunek ograniczający", "difficulty": "advanced"},
            {"id": "gp_conds9", "polish": "Chyba że zmienisz zdanie.", "german": "Es sei denn, du änderst deine Meinung.", "explanation": "'Chyba że' = 'es sei denn' – warunek wykluczający (wyjątek)", "difficulty": "advanced"},
            {"id": "gp_conds10", "polish": "W razie gdyby padało, weź parasol.", "german": "Falls es regnen sollte, nimm einen Regenschirm.", "explanation": "'W razie gdyby' = 'falls' – warunek na wypadek", "difficulty": "intermediate"},
            {"id": "gp_conds11", "polish": "Gdybym to wiedział, powiedziałbym ci.", "german": "Wenn ich das gewusst hätte, hätte ich es dir gesagt.", "explanation": "Nierealny warunek przeszły – żal z powodu niezrealizowanej sytuacji", "difficulty": "advanced"},
            {"id": "gp_conds12", "polish": "Nawet gdyby prosił, nie pomogłabym mu.", "german": "Selbst wenn er bitten würde, würde ich ihm nicht helfen.", "explanation": "'Nawet gdyby' = 'selbst wenn' – warunek z emfazą", "difficulty": "advanced"},
            {"id": "gp_conds13", "polish": "Jak będziesz grzeczny, dostaniesz lody.", "german": "Wenn du brav bist, bekommst du Eis.", "explanation": "'Jak' = potoczne 'jeśli/wenn' – warunek w mowie codziennej", "difficulty": "beginner"},
            {"id": "gp_conds14", "polish": "Byleby tylko nie padało.", "german": "Wenn es nur nicht regnen würde.", "explanation": "'Byleby' – wyrażenie życzenia/warunku; 'solange nur/wenn nur'", "difficulty": "advanced"},
            {"id": "gp_conds15", "polish": "Gdyby tak można było cofnąć czas!", "german": "Wenn man doch die Zeit zurückdrehen könnte!", "explanation": "Życzenie nierealne – 'gdyby tak' = 'wenn doch nur'; wyrażenie tęsknoty", "difficulty": "advanced"}
        ]
    },
    {
        "key": "impersonal_constructions",
        "name": "Konstrukcje bezosobowe (Unpersönliche Konstruktionen)",
        "description": "Zdania bezosobowe w polskim – bez 'es' jako podmiot pozorny",
        "icon": "person.slash",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_impers1", "polish": "Trzeba się uczyć.", "german": "Man muss lernen.", "explanation": "'Trzeba' – bezosobowa konieczność; brak odpowiednika 'man' ani 'es'", "difficulty": "intermediate"},
            {"id": "gp_impers2", "polish": "Można tu palić?", "german": "Darf man hier rauchen?", "explanation": "'Można' – bezosobowe pozwolenie/możliwość; odpowiednik 'man darf/kann'", "difficulty": "beginner"},
            {"id": "gp_impers3", "polish": "Nie wolno tu parkować.", "german": "Hier darf man nicht parken.", "explanation": "'Nie wolno' – bezosobowy zakaz; 'es ist nicht erlaubt'", "difficulty": "beginner"},
            {"id": "gp_impers4", "polish": "Warto to zobaczyć.", "german": "Es lohnt sich, das zu sehen.", "explanation": "'Warto' – bezosobowa wartość; 'es ist wert/lohnenswert'", "difficulty": "intermediate"},
            {"id": "gp_impers5", "polish": "Jest mi zimno.", "german": "Mir ist kalt.", "explanation": "'Jest mi' + przymiotnik – odczucie fizyczne z celownikiem (jak 'mir ist')", "difficulty": "beginner"},
            {"id": "gp_impers6", "polish": "Boli mnie głowa.", "german": "Mir tut der Kopf weh.", "explanation": "'Boli mnie' – ból z biernikiem doświadczającego; bezosobowy charakter", "difficulty": "beginner"},
            {"id": "gp_impers7", "polish": "Nudzi mi się.", "german": "Mir ist langweilig.", "explanation": "'Nudzi mi się' – bezosobowe odczucie nudy z celownikiem", "difficulty": "intermediate"},
            {"id": "gp_impers8", "polish": "Chce mi się pić.", "german": "Ich habe Durst. / Mir ist nach Trinken.", "explanation": "'Chce mi się' + bezokolicznik – bezosobowe pragnienie; 'mi' w celowniku", "difficulty": "intermediate"},
            {"id": "gp_impers9", "polish": "Wydaje mi się, że to prawda.", "german": "Es scheint mir, dass das wahr ist.", "explanation": "'Wydaje mi się' = 'es scheint mir' – bezosobowa opinia", "difficulty": "intermediate"},
            {"id": "gp_impers10", "polish": "Należy to przemyśleć.", "german": "Man sollte darüber nachdenken.", "explanation": "'Należy' – bezosobowa powinność; formalniejsze niż 'trzeba'", "difficulty": "intermediate"},
            {"id": "gp_impers11", "polish": "Zrobiło się ciemno.", "german": "Es wurde dunkel.", "explanation": "'Zrobiło się' – bezosobowa zmiana stanu; 'es wurde'", "difficulty": "intermediate"},
            {"id": "gp_impers12", "polish": "Da się to zrobić.", "german": "Das lässt sich machen.", "explanation": "'Da się' = 'es lässt sich' – bezosobowa możliwość wykonania", "difficulty": "intermediate"},
            {"id": "gp_impers13", "polish": "Nie da się tego naprawić.", "german": "Das lässt sich nicht reparieren.", "explanation": "'Nie da się' – bezosobowa niemożliwość; dopełniacz po negacji", "difficulty": "intermediate"},
            {"id": "gp_impers14", "polish": "Przydałoby się trochę odpocząć.", "german": "Es wäre gut, sich etwas auszuruhen.", "explanation": "'Przydałoby się' – warunkowa przydatność; tryb przypuszczający", "difficulty": "advanced"},
            {"id": "gp_impers15", "polish": "Śmierdzi tu czymś.", "german": "Hier stinkt es nach etwas.", "explanation": "Bezosobowe odczucie zmysłowe – podmiot domyślny; narzędnik 'czymś'", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "verbal_nouns",
        "name": "Rzeczowniki odczasownikowe (Verbalsubstantive)",
        "description": "Tworzenie rzeczowników z czasowników – odpowiedniki niemieckiego '-ung' i Nominalisierung",
        "icon": "textformat.abc",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_vnom1", "polish": "Czytanie to moje hobby.", "german": "Lesen ist mein Hobby.", "explanation": "'Czytanie' od 'czytać' – rzeczownik odczasownikowy z końcówką '-anie/-enie'", "difficulty": "beginner"},
            {"id": "gp_vnom2", "polish": "Pisanie wypracowań jest trudne.", "german": "Aufsätze zu schreiben ist schwer.", "explanation": "'Pisanie' – gerundium polskie; często odpowiada niemieckiemu bezokolicznikowi", "difficulty": "intermediate"},
            {"id": "gp_vnom3", "polish": "Uczenie się języków rozwija umysł.", "german": "Sprachen zu lernen entwickelt den Geist.", "explanation": "'Uczenie się' – rzeczownik od czasownika zwrotnego; zachowuje 'się'", "difficulty": "intermediate"},
            {"id": "gp_vnom4", "polish": "Gotowanie sprawia mi przyjemność.", "german": "Kochen macht mir Freude.", "explanation": "'Gotowanie' = 'das Kochen' – w niemieckim nominalizacja z rodzajnikiem", "difficulty": "beginner"},
            {"id": "gp_vnom5", "polish": "Palenie jest zabronione.", "german": "Rauchen ist verboten.", "explanation": "'Palenie' = 'das Rauchen' – rzeczownik odczasownikowy w funkcji podmiotu", "difficulty": "beginner"},
            {"id": "gp_vnom6", "polish": "Mieszkanie w Warszawie jest drogie.", "german": "Das Wohnen in Warschau ist teuer.", "explanation": "'Mieszkanie' – może oznaczać czynność (Wohnen) lub lokal (Wohnung)!", "difficulty": "intermediate"},
            {"id": "gp_vnom7", "polish": "Budowanie domu trwa długo.", "german": "Ein Haus zu bauen dauert lange.", "explanation": "'Budowanie' + dopełniacz – konstrukcja z dopełniaczem dopełnienia bliższego", "difficulty": "intermediate"},
            {"id": "gp_vnom8", "polish": "Sprzątanie zajęło mi trzy godziny.", "german": "Das Aufräumen hat mich drei Stunden gekostet.", "explanation": "'Sprzątanie' jako podmiot – odmiana jak zwykły rzeczownik", "difficulty": "intermediate"},
            {"id": "gp_vnom9", "polish": "Bez zastanowienia podjął decyzję.", "german": "Ohne Überlegung hat er eine Entscheidung getroffen.", "explanation": "'Zastanowienie' od 'zastanowić się' – z przyimkiem 'bez' + dopełniacz", "difficulty": "intermediate"},
            {"id": "gp_vnom10", "polish": "Po przeczytaniu książki oddałem ją.", "german": "Nach dem Lesen des Buches habe ich es zurückgegeben.", "explanation": "'Po przeczytaniu' – po + miejscownik gerundium; sekwencja czynności", "difficulty": "intermediate"},
            {"id": "gp_vnom11", "polish": "Przed wyjściem sprawdź pogodę.", "german": "Vor dem Weggehen prüfe das Wetter.", "explanation": "'Przed wyjściem' – przed + narzędnik gerundium; czynność poprzedzająca", "difficulty": "intermediate"},
            {"id": "gp_vnom12", "polish": "Oczekiwanie na wynik było stresujące.", "german": "Das Warten auf das Ergebnis war stressig.", "explanation": "'Oczekiwanie na' – rzeczownik odczasownikowy zachowuje rekcję czasownika", "difficulty": "intermediate"},
            {"id": "gp_vnom13", "polish": "Zachowanie uczniów było wzorowe.", "german": "Das Verhalten der Schüler war vorbildlich.", "explanation": "'Zachowanie' = 'das Verhalten' – rzeczownik odczasownikowy z odcieniem wynikowym", "difficulty": "intermediate"},
            {"id": "gp_vnom14", "polish": "Odkrycie nowego leku zajęło lata.", "german": "Die Entdeckung eines neuen Medikaments dauerte Jahre.", "explanation": "'Odkrycie' od 'odkryć' – końcówka '-cie' dla czasowników dokonanych", "difficulty": "intermediate"},
            {"id": "gp_vnom15", "polish": "Podczas spacerowania słuchałem muzyki.", "german": "Während des Spazierens habe ich Musik gehört.", "explanation": "'Podczas spacerowania' – podczas + dopełniacz gerundium; czynności równoczesne", "difficulty": "intermediate"}
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
