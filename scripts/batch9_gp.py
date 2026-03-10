#!/usr/bin/env python3
"""Batch 9: Word Order & Syntax (categories 48-52) for german_polish grammar."""
import json

GRAMMAR_FILE = 'LumenLingo/LumenLingo/Resources/Content/german_polish/grammar_german_polish.json'

new_categories = [
    {
        "key": "word_order_basic",
        "name": "Szyk zdania (Wortstellung)",
        "description": "Podstawowy szyk wyrazów w zdaniach polskich – w porównaniu z niemiecką strukturą SVO/V2",
        "icon": "text.alignleft",
        "difficulty": "beginner",
        "items": [
            {"id": "gp_wob1", "polish": "Ja czytam książkę.", "german": "Ich lese ein Buch.", "explanation": "Podstawowy szyk SVO – podmiot + orzeczenie + dopełnienie, jak w niemieckim", "difficulty": "beginner"},
            {"id": "gp_wob2", "polish": "Książkę czytam ja.", "german": "Das Buch lese ich.", "explanation": "Dopełnienie na początku dla emfazy – polski pozwala na swobodny szyk", "difficulty": "beginner"},
            {"id": "gp_wob3", "polish": "Wczoraj byłem w kinie.", "german": "Gestern war ich im Kino.", "explanation": "Okolicznik czasu na początku – czasownik nie musi być na drugiej pozycji jak w niemieckim", "difficulty": "beginner"},
            {"id": "gp_wob4", "polish": "W parku bawią się dzieci.", "german": "Im Park spielen die Kinder.", "explanation": "Okolicznik miejsca na początku – podmiot może stać po czasowniku", "difficulty": "beginner"},
            {"id": "gp_wob5", "polish": "To jest mój brat.", "german": "Das ist mein Bruder.", "explanation": "Zdanie wskazujące z 'to' – identyczna struktura jak niemiecki 'Das ist...'", "difficulty": "beginner"},
            {"id": "gp_wob6", "polish": "Jan lubi kawę, ale Maria woli herbatę.", "german": "Jan mag Kaffee, aber Maria bevorzugt Tee.", "explanation": "Zdanie złożone współrzędnie – 'ale' łączy dwa zdania (jak 'aber')", "difficulty": "beginner"},
            {"id": "gp_wob7", "polish": "Dzisiaj pada deszcz.", "german": "Heute regnet es.", "explanation": "Okolicznik czasu + orzeczenie + podmiot; w polskim brak odpowiednika 'es'", "difficulty": "beginner"},
            {"id": "gp_wob8", "polish": "Czy lubisz polską kuchnię?", "german": "Magst du die polnische Küche?", "explanation": "Pytanie z 'czy' (partykuła pytajna) – w niemieckim inwersja podmiot-czasownik", "difficulty": "beginner"},
            {"id": "gp_wob9", "polish": "Kto to zrobił?", "german": "Wer hat das gemacht?", "explanation": "Pytanie z zaimkiem pytajnym 'kto' – podobna pozycja jak niemieckie 'Wer'", "difficulty": "beginner"},
            {"id": "gp_wob10", "polish": "Bardzo lubię tę piosenkę.", "german": "Ich mag dieses Lied sehr.", "explanation": "Przysłówek 'bardzo' przed czasownikiem – w niemieckim 'sehr' często na końcu", "difficulty": "beginner"},
            {"id": "gp_wob11", "polish": "Nie rozumiem tego.", "german": "Ich verstehe das nicht.", "explanation": "Negacja 'nie' przed czasownikiem – w niemieckim 'nicht' po dopełnieniu", "difficulty": "beginner"},
            {"id": "gp_wob12", "polish": "Jemu to dałem.", "german": "Ihm habe ich das gegeben.", "explanation": "Celownik na początku dla emfazy – swobodny szyk polski", "difficulty": "intermediate"},
            {"id": "gp_wob13", "polish": "On i ona mieszkają w Warszawie.", "german": "Er und sie wohnen in Warschau.", "explanation": "Podmiot złożony – identyczna struktura z niemieckim", "difficulty": "beginner"},
            {"id": "gp_wob14", "polish": "Rano piję kawę, a wieczorem herbatę.", "german": "Morgens trinke ich Kaffee und abends Tee.", "explanation": "Elipsa – pominięcie powtarzającego się czasownika w drugiej części", "difficulty": "intermediate"},
            {"id": "gp_wob15", "polish": "Szybko biegnie ten chłopiec.", "german": "Schnell läuft dieser Junge.", "explanation": "Przysłówek na początku z podmiotem na końcu – emfatyczny szyk", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "negation",
        "name": "Przeczenie (Verneinung)",
        "description": "Tworzenie przeczeń w języku polskim – podwójne przeczenie i formy zaprzeczone",
        "icon": "xmark.circle",
        "difficulty": "beginner",
        "items": [
            {"id": "gp_neg1", "polish": "Nie lubię kawy.", "german": "Ich mag keinen Kaffee.", "explanation": "'Nie' przed czasownikiem – podstawowe przeczenie (jak 'nicht' ale zawsze przed orzeczeniem)", "difficulty": "beginner"},
            {"id": "gp_neg2", "polish": "Nigdy nie byłem w Polsce.", "german": "Ich war noch nie in Polen.", "explanation": "Podwójne przeczenie: 'nigdy' + 'nie' – w polskim obowiązkowe (w niemieckim błąd!)", "difficulty": "beginner"},
            {"id": "gp_neg3", "polish": "Nikt nie przyszedł.", "german": "Niemand ist gekommen.", "explanation": "Podwójne przeczenie: 'nikt' (niemand) + 'nie' – konieczne w polskim", "difficulty": "beginner"},
            {"id": "gp_neg4", "polish": "Nic nie wiem.", "german": "Ich weiß nichts.", "explanation": "'Nic' (nichts) + 'nie' – podwójne przeczenie; w niemieckim tylko 'nichts'", "difficulty": "beginner"},
            {"id": "gp_neg5", "polish": "Nigdzie nie chodzę.", "german": "Ich gehe nirgendwohin.", "explanation": "'Nigdzie' (nirgendwo) + 'nie' – przeczenie miejsca z podwójną negacją", "difficulty": "beginner"},
            {"id": "gp_neg6", "polish": "To nie jest prawda.", "german": "Das ist nicht wahr.", "explanation": "'Nie' przed 'jest' – przeczenie z czasownikiem 'być'", "difficulty": "beginner"},
            {"id": "gp_neg7", "polish": "Nie mam czasu.", "german": "Ich habe keine Zeit.", "explanation": "'Nie mam' – przeczenie posiadania; dopełniacz po przeczeniu (czasu, nie czas)", "difficulty": "intermediate"},
            {"id": "gp_neg8", "polish": "Nie znam nikogo tutaj.", "german": "Ich kenne hier niemanden.", "explanation": "'Nie' + 'nikogo' – podwójne przeczenie z dopełniaczem osoby", "difficulty": "intermediate"},
            {"id": "gp_neg9", "polish": "Nigdy nikogo nie oszukałem.", "german": "Ich habe noch nie jemanden betrogen.", "explanation": "Potrójne przeczenie: nigdy + nikogo + nie – w polskim naturalne, w niemieckim niemożliwe", "difficulty": "intermediate"},
            {"id": "gp_neg10", "polish": "Nie chcę ani kawy, ani herbaty.", "german": "Ich möchte weder Kaffee noch Tee.", "explanation": "'Ani...ani' = 'weder...noch' – podwójne zaprzeczenie z 'nie'", "difficulty": "intermediate"},
            {"id": "gp_neg11", "polish": "Wcale nie jestem zmęczony.", "german": "Ich bin überhaupt nicht müde.", "explanation": "'Wcale nie' = 'überhaupt nicht' – wzmocnione przeczenie", "difficulty": "intermediate"},
            {"id": "gp_neg12", "polish": "Jeszcze nie skończyłem.", "german": "Ich bin noch nicht fertig.", "explanation": "'Jeszcze nie' = 'noch nicht' – przeczenie z aspektem czasowym", "difficulty": "beginner"},
            {"id": "gp_neg13", "polish": "Już nie mieszkam w Berlinie.", "german": "Ich wohne nicht mehr in Berlin.", "explanation": "'Już nie' = 'nicht mehr' – koniec stanu/czynności", "difficulty": "beginner"},
            {"id": "gp_neg14", "polish": "Nie tylko mówi, ale też pisze po polsku.", "german": "Er spricht nicht nur, sondern schreibt auch Polnisch.", "explanation": "'Nie tylko...ale też' = 'nicht nur...sondern auch' – częściowe przeczenie", "difficulty": "intermediate"},
            {"id": "gp_neg15", "polish": "Żaden student nie zdał egzaminu.", "german": "Kein Student hat die Prüfung bestanden.", "explanation": "'Żaden' (kein) + 'nie' – podwójne przeczenie z przymiotnikiem przeczącym", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "questions",
        "name": "Pytania (Fragesätze)",
        "description": "Tworzenie pytań w języku polskim – pytania zamknięte i otwarte",
        "icon": "questionmark.circle",
        "difficulty": "beginner",
        "items": [
            {"id": "gp_quest1", "polish": "Czy mówisz po polsku?", "german": "Sprichst du Polnisch?", "explanation": "'Czy' – partykuła pytajna dla pytań tak/nie; w niemieckim inwersja", "difficulty": "beginner"},
            {"id": "gp_quest2", "polish": "Co robisz?", "german": "Was machst du?", "explanation": "'Co' = 'was' – zaimek pytajny dla rzeczy", "difficulty": "beginner"},
            {"id": "gp_quest3", "polish": "Gdzie mieszkasz?", "german": "Wo wohnst du?", "explanation": "'Gdzie' = 'wo' – pytanie o miejsce", "difficulty": "beginner"},
            {"id": "gp_quest4", "polish": "Kiedy przyjeżdżasz?", "german": "Wann kommst du?", "explanation": "'Kiedy' = 'wann' – pytanie o czas", "difficulty": "beginner"},
            {"id": "gp_quest5", "polish": "Dlaczego się spóźniłeś?", "german": "Warum hast du dich verspätet?", "explanation": "'Dlaczego' = 'warum' – pytanie o przyczynę", "difficulty": "beginner"},
            {"id": "gp_quest6", "polish": "Jak się nazywasz?", "german": "Wie heißt du?", "explanation": "'Jak' = 'wie' – pytanie o sposób; 'nazywać się' = 'heißen'", "difficulty": "beginner"},
            {"id": "gp_quest7", "polish": "Kto to jest?", "german": "Wer ist das?", "explanation": "'Kto' = 'wer' – pytanie o osobę (mianownik)", "difficulty": "beginner"},
            {"id": "gp_quest8", "polish": "Ile masz lat?", "german": "Wie alt bist du?", "explanation": "'Ile' = 'wie viele' – tutaj 'ile masz lat?' (dosłownie: ile masz lat?)", "difficulty": "beginner"},
            {"id": "gp_quest9", "polish": "Który autobus jedzie do centrum?", "german": "Welcher Bus fährt ins Zentrum?", "explanation": "'Który' = 'welcher' – zaimek pytajny wyboru, odmienia się jak przymiotnik", "difficulty": "intermediate"},
            {"id": "gp_quest10", "polish": "Czyj to jest samochód?", "german": "Wessen Auto ist das?", "explanation": "'Czyj' = 'wessen' – pytanie o przynależność, odmienia się przez rodzaje", "difficulty": "intermediate"},
            {"id": "gp_quest11", "polish": "Dokąd jedziesz?", "german": "Wohin fährst du?", "explanation": "'Dokąd' = 'wohin' – pytanie o kierunek ruchu", "difficulty": "beginner"},
            {"id": "gp_quest12", "polish": "Skąd pochodzisz?", "german": "Woher kommst du?", "explanation": "'Skąd' = 'woher' – pytanie o pochodzenie/źródło", "difficulty": "beginner"},
            {"id": "gp_quest13", "polish": "Po co to kupiłeś?", "german": "Wozu hast du das gekauft?", "explanation": "'Po co' = 'wozu' – pytanie o cel", "difficulty": "intermediate"},
            {"id": "gp_quest14", "polish": "Jak często ćwiczysz?", "german": "Wie oft übst du?", "explanation": "'Jak często' = 'wie oft' – pytanie o częstotliwość", "difficulty": "beginner"},
            {"id": "gp_quest15", "polish": "Prawda, że to jest piękne?", "german": "Es ist schön, nicht wahr?", "explanation": "'Prawda?' – pytanie potwierdzające (tag question), odpowiednik 'nicht wahr?'", "difficulty": "intermediate"}
        ]
    },
    {
        "key": "subordinate_clauses",
        "name": "Zdania podrzędne (Nebensätze)",
        "description": "Budowanie zdań podrzędnych w polskim – bez przesunięcia czasownika na koniec jak w niemieckim",
        "icon": "arrow.turn.down.right",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_sub1", "polish": "Wiem, że on mówi po polsku.", "german": "Ich weiß, dass er Polnisch spricht.", "explanation": "'Że' = 'dass' – spójnik zdania dopełnieniowego; w polskim czasownik NIE idzie na koniec", "difficulty": "intermediate"},
            {"id": "gp_sub2", "polish": "Myślę, że to dobry pomysł.", "german": "Ich denke, dass das eine gute Idee ist.", "explanation": "Zdanie z 'że' – szyk wyrazów pozostaje normalny (SVO), nie jak w niemieckim", "difficulty": "intermediate"},
            {"id": "gp_sub3", "polish": "Kiedy przyjdę do domu, zadzwonię.", "german": "Wenn ich nach Hause komme, rufe ich an.", "explanation": "'Kiedy' = 'wenn' (czasowe) – zdanie okolicznikowe czasu", "difficulty": "intermediate"},
            {"id": "gp_sub4", "polish": "Jeśli będzie ładna pogoda, pójdziemy na spacer.", "german": "Wenn das Wetter schön ist, gehen wir spazieren.", "explanation": "'Jeśli' = 'wenn/falls' (warunkowe) – zdanie warunkowe", "difficulty": "intermediate"},
            {"id": "gp_sub5", "polish": "Ponieważ padał deszcz, zostaliśmy w domu.", "german": "Weil es geregnet hat, sind wir zu Hause geblieben.", "explanation": "'Ponieważ' = 'weil' – zdanie przyczynowe", "difficulty": "intermediate"},
            {"id": "gp_sub6", "polish": "Chociaż jest zmęczony, nadal pracuje.", "german": "Obwohl er müde ist, arbeitet er weiter.", "explanation": "'Chociaż' = 'obwohl' – zdanie przyzwalające", "difficulty": "intermediate"},
            {"id": "gp_sub7", "polish": "Mężczyzna, który tam stoi, jest moim ojcem.", "german": "Der Mann, der dort steht, ist mein Vater.", "explanation": "'Który' = 'der/welcher' – zaimek względny; odmienia się przez przypadki", "difficulty": "intermediate"},
            {"id": "gp_sub8", "polish": "Kobieta, którą widziałeś, jest lekarką.", "german": "Die Frau, die du gesehen hast, ist Ärztin.", "explanation": "'Którą' – biernik żeński zaimka względnego (die w Akk.)", "difficulty": "intermediate"},
            {"id": "gp_sub9", "polish": "Zanim wyjdziesz, zamknij okno.", "german": "Bevor du gehst, schließ das Fenster.", "explanation": "'Zanim' = 'bevor' – zdanie czasowe (przed czynnością)", "difficulty": "intermediate"},
            {"id": "gp_sub10", "polish": "Odkąd tu mieszkam, nauczyłem się polskiego.", "german": "Seit ich hier wohne, habe ich Polnisch gelernt.", "explanation": "'Odkąd' = 'seit/seitdem' – zdanie czasowe (od momentu)", "difficulty": "intermediate"},
            {"id": "gp_sub11", "polish": "Żeby zdać egzamin, musisz dużo się uczyć.", "german": "Um die Prüfung zu bestehen, musst du viel lernen.", "explanation": "'Żeby' = 'um...zu' – zdanie celowe; w polskim bez bezokolicznika", "difficulty": "intermediate"},
            {"id": "gp_sub12", "polish": "Tak bardzo się cieszę, że aż płaczę.", "german": "Ich freue mich so sehr, dass ich sogar weine.", "explanation": "'Że aż' – zdanie skutkowe wyrażające intensywność", "difficulty": "advanced"},
            {"id": "gp_sub13", "polish": "Im więcej czytam, tym więcej rozumiem.", "german": "Je mehr ich lese, desto mehr verstehe ich.", "explanation": "'Im...tym' = 'je...desto' – zdanie porównawcze stopniowe", "difficulty": "advanced"},
            {"id": "gp_sub14", "polish": "Nie wiem, czy on przyjdzie.", "german": "Ich weiß nicht, ob er kommt.", "explanation": "'Czy' = 'ob' – zdanie pytajne zależne (pytanie pośrednie)", "difficulty": "intermediate"},
            {"id": "gp_sub15", "polish": "Powiedział, żebym przyszedł wcześniej.", "german": "Er sagte, ich solle früher kommen.", "explanation": "'Żebym' = 'dass ich...soll' – zdanie żądające z trybem łącznym", "difficulty": "advanced"}
        ]
    },
    {
        "key": "conjunctions",
        "name": "Spójniki (Konjunktionen)",
        "description": "Spójniki współrzędne i podrzędne w języku polskim",
        "icon": "link",
        "difficulty": "intermediate",
        "items": [
            {"id": "gp_conj1", "polish": "Lubię kawę i herbatę.", "german": "Ich mag Kaffee und Tee.", "explanation": "'I' = 'und' – spójnik łączny, najczęściej używany", "difficulty": "beginner"},
            {"id": "gp_conj2", "polish": "Chcę iść, ale nie mogę.", "german": "Ich will gehen, aber ich kann nicht.", "explanation": "'Ale' = 'aber' – spójnik przeciwstawny", "difficulty": "beginner"},
            {"id": "gp_conj3", "polish": "Zostanę w domu lub pójdę na spacer.", "german": "Ich bleibe zu Hause oder gehe spazieren.", "explanation": "'Lub' = 'oder' – spójnik rozłączny (bardziej formalny niż 'albo')", "difficulty": "beginner"},
            {"id": "gp_conj4", "polish": "Jest mądry, a przy tym skromny.", "german": "Er ist klug und dabei bescheiden.", "explanation": "'A' – spójnik łączno-przeciwstawny; subtelniejszy niż 'i' i 'ale'", "difficulty": "intermediate"},
            {"id": "gp_conj5", "polish": "Albo ty, albo ja.", "german": "Entweder du oder ich.", "explanation": "'Albo...albo' = 'entweder...oder' – spójnik rozłączny podwójny", "difficulty": "beginner"},
            {"id": "gp_conj6", "polish": "Ani nie czytam, ani nie piszę.", "german": "Ich lese weder noch schreibe ich.", "explanation": "'Ani...ani' = 'weder...noch' – podwójna negacja (z 'nie'!)", "difficulty": "intermediate"},
            {"id": "gp_conj7", "polish": "Więc co robimy?", "german": "Also was machen wir?", "explanation": "'Więc' = 'also' – spójnik wynikowy", "difficulty": "beginner"},
            {"id": "gp_conj8", "polish": "Dlatego nie przyszedłem.", "german": "Deshalb bin ich nicht gekommen.", "explanation": "'Dlatego' = 'deshalb/darum' – spójnik przyczynowo-wynikowy", "difficulty": "intermediate"},
            {"id": "gp_conj9", "polish": "Jednak się nie zgodził.", "german": "Er hat jedoch nicht zugestimmt.", "explanation": "'Jednak' = 'jedoch/dennoch' – spójnik przeciwstawny z naciskiem", "difficulty": "intermediate"},
            {"id": "gp_conj10", "polish": "Zarówno Jan, jak i Maria przyszli.", "german": "Sowohl Jan als auch Maria sind gekommen.", "explanation": "'Zarówno...jak i' = 'sowohl...als auch' – spójnik łączny dwuczłonowy", "difficulty": "intermediate"},
            {"id": "gp_conj11", "polish": "Mimo że padało, wyszliśmy.", "german": "Obwohl es geregnet hat, sind wir rausgegangen.", "explanation": "'Mimo że' = 'obwohl/trotzdem dass' – spójnik przyzwalający", "difficulty": "intermediate"},
            {"id": "gp_conj12", "polish": "Dopóki żyję, będę walczyć.", "german": "Solange ich lebe, werde ich kämpfen.", "explanation": "'Dopóki' = 'solange' – spójnik czasowy (czas trwania)", "difficulty": "intermediate"},
            {"id": "gp_conj13", "polish": "Skoro tak mówisz, wierzę ci.", "german": "Da du das sagst, glaube ich dir.", "explanation": "'Skoro' = 'da' (przyczynowe) – spójnik przyczynowy (znany fakt)", "difficulty": "intermediate"},
            {"id": "gp_conj14", "polish": "Podczas gdy on pracuje, ona odpoczywa.", "german": "Während er arbeitet, ruht sie sich aus.", "explanation": "'Podczas gdy' = 'während' – spójnik czasowy/przeciwstawny", "difficulty": "intermediate"},
            {"id": "gp_conj15", "polish": "Bo jestem zmęczony.", "german": "Weil ich müde bin.", "explanation": "'Bo' = 'weil' (potoczne) – spójnik przyczynowy; mniej formalny niż 'ponieważ'", "difficulty": "beginner"}
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

# Validate no duplicate IDs
from collections import Counter
all_ids = [item['id'] for c in data for item in c['items']]
dupes = {k:v for k,v in Counter(all_ids).items() if v > 1}
if dupes:
    print(f"DUPLICATES FOUND: {dupes}")
else:
    print("No duplicate IDs - all clean!")
