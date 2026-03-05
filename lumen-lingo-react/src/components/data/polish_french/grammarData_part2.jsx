
/**
 * POLISH → FRENCH GRAMMAR - PART 2 (REFINED - NO EXCLAMATIONS)
 * Past Tense & Pronouns
 */

import { History, Users } from "lucide-react";

export const part2Categories = {
  passe_compose: {
    name: "Passé Composé",
    description: "Czas przeszły złożony",
    level: "intermediate",
    icon: History,
    color: "from-amber-400 to-orange-500",
    questions: [
      { 
        id: "pf_pc1", 
        question: "J'_____ mangé.", 
        translation: "(Zjadłem)", 
        options: ["ai", "suis", "a", "es"], 
        correct: "ai", 
        explanation: "Passé Composé to francuski czas przeszły złożony - składa się z dwóch części, jak polski czas przeszły dokonany. Większość czasowników używa 'avoir' (mieć) jako pomocnika. 'J'ai mangé' = zjadłem. Strukturę można porównać do angielskiego 'have eaten'. 'Ai' to forma 'avoir' dla 'je'. Imiesłów 'mangé' pochodzi od 'manger'. To elegancka konstrukcja, która łączy przeszłość z teraźniejszością." 
      },
      { 
        id: "pf_pc2", 
        question: "Tu _____ allé.", 
        translation: "(Poszedłeś)", 
        options: ["es", "as", "suis", "est"], 
        correct: "es", 
        explanation: "Czasowniki ruchu używają 'être' (być) zamiast 'avoir'. 'Tu es allé' = poszedłeś. To jak w polskim - czasem używamy 'być' z imiesłowem (jestem poszedł). Lista czasowników z 'être' to około 16 najczęstszych czasowników ruchu: aller, venir, partir, arriver, entrer, sortir, etc. Warto je zapamiętać - tworzą logiczną rodzinę." 
      },
      { 
        id: "pf_pc3", 
        question: "Elle _____ venue.", 
        translation: "(Ona przyszła)", 
        options: ["est", "a", "es", "suis"], 
        correct: "est", 
        explanation: "'Venir' (przychodzić) używa 'être'. 'Elle est venue' = ona przyszła. Zauważ dodatkowe -e na końcu 'venue' - imiesłowy z 'être' zgadzają się z podmiotem w rodzaju i liczbie. To jak w polskim przymiotniki. Elle (ona) = żeński, więc +e. Ils (oni) = mnogi, więc +s. Ta zgoda jest piękną szczegółowością francuskiego." 
      },
      { 
        id: "pf_pc4", 
        question: "Nous _____ parlé.", 
        translation: "(Rozmawialiśmy)", 
        options: ["avons", "sommes", "ont", "sont"], 
        correct: "avons", 
        explanation: "'Parler' używa 'avoir'. 'Nous avons parlé' = rozmawialiśmy. 'Avons' to forma 'avoir' dla 'nous'. Rozmowa to wymiana idei, serca komunikacji. Czasowniki mentalne i akcji zazwyczaj biorą 'avoir'. To logiczne - 'mieć' implikuje kontrolę nad akcją. Français est une langue de précision." 
      },
      { 
        id: "pf_pc5", 
        question: "Vous _____ fini.", 
        translation: "(Skończyliście)", 
        options: ["avez", "êtes", "ont", "sont"], 
        correct: "avez", 
        explanation: "'Finir' (kończyć) używa 'avoir'. 'Vous avez fini' = skończyliście. Czasowniki na -ir często mają imiesłów na -i. 'Fini' brzmi definitywnie - zakończone, kompletne. To słowo używane jest też jako przymiotnik w 'c'est fini' (to koniec). Kończyć to ważny czasownik - oznacza zamknięcie rozdziału." 
      },
      { 
        id: "pf_pc6", 
        question: "Ils _____ partis.", 
        translation: "(Oni wyjechali)", 
        options: ["sont", "ont", "sommes", "avons"], 
        correct: "sont", 
        explanation: "'Partir' (wyjeżdżać) używa 'être'. 'Ils sont partis' = oni wyjechali. Mnogi męski dodaje -s do imiesłowu: parti → partis. Wyjazd to ruch, zmiana miejsca - naturalne dla 'être'. Czasowniki ruchu i zmiany stanu preferują 'être'. To poetycka logika - 'być' dla stanów, 'mieć' dla akcji." 
      },
      { 
        id: "pf_pc7", 
        question: "J'_____ resté.", 
        translation: "(Zostałem)", 
        options: ["suis", "ai", "es", "est"], 
        correct: "suis", 
        explanation: "'Rester' (zostawać) używa 'être'. 'Je suis resté' = zostałem. Choć nie ma ruchu, 'rester' jest stanem bycia gdzieś - stąd 'être'. To niuans francuski - nawet brak ruchu jest stanem. 'Resté' bez końcówki dla męskiego 'je'. Zostawanie to też rodzaj wyboru, decyzji." 
      },
      { 
        id: "pf_pc8", 
        question: "Tu _____ vu le film.", 
        translation: "(Zobaczyłeś film)", 
        options: ["as", "es", "a", "suis"], 
        correct: "as", 
        explanation: "'Voir' (widzieć) używa 'avoir'. 'Tu as vu le film' = zobaczyłeś film. 'Vu' to nieregularny imiesłów od 'voir'. Czasowniki percepcji (voir, entendre) używają 'avoir' - doświadczenia zmysłowe jako posiadanie. Oglądanie filmu to uniwersalne doświadczenie kulturowe." 
      },
      { 
        id: "pf_pc9", 
        question: "Elle _____ écrit.", 
        translation: "(Ona napisała)", 
        options: ["a", "est", "as", "suis"], 
        correct: "a", 
        explanation: "'Écrire' (pisać) używa 'avoir'. 'Elle a écrit' = ona napisała. 'Écrit' to imiesłów nieregularny. Pisanie to tworzenie, akcja umysłu i ręki. 'Avoir' dla wszystkich czasowników twórczych. Pióro jest potężniejsze niż miecz - 'écrire' to potężny czasownik." 
      },
      { 
        id: "pf_pc10", 
        question: "Nous _____ arrivés.", 
        translation: "(Przybyliśmy)", 
        options: ["sommes", "avons", "sont", "ont"], 
        correct: "sommes", 
        explanation: "'Arriver' (przybywać) używa 'être'. 'Nous sommes arrivés' = przybyliśmy. Mnogi dodaje -s: arrivé → arrivés. Przybycie to zmiana stanu - byłeś tam, teraz jesteś tu. 'Être' dla tych transformacji. Przybywanie niesie ze sobą nowe możliwości, nowe początki." 
      },
      { 
        id: "pf_pc11", 
        question: "Vous _____ compris.", 
        translation: "(Zrozumieliście)", 
        options: ["avez", "êtes", "ont", "sont"], 
        correct: "avez", 
        explanation: "'Comprendre' (rozumieć) używa 'avoir'. 'Vous avez compris' = zrozumieliście. Zrozumienie to mentalne 'posiadanie' wiedzy - stąd 'avoir'. 'Compris' to uczucie triumfu - światło w tunelu. Rozumienie języka to proces piękny i satysfakcjonujący." 
      },
      { 
        id: "pf_pc12", 
        question: "Ils _____ pris le train.", 
        translation: "(Oni wzięli pociąg)", 
        options: ["ont", "sont", "avons", "sommes"], 
        correct: "ont", 
        explanation: "'Prendre' (brać) używa 'avoir'. 'Ils ont pris le train' = oni wzięli pociąg. 'Pris' to nieregularny imiesłów. Branie pociągu to pospolite, ale ważne doświadczenie podróży. Transport łączy ludzi, miejsca, kultury. 'Prendre' jest wszechstronny - używany w setkach wyrażeń." 
      },
      { 
        id: "pf_pc13", 
        question: "J'_____ né en Pologne.", 
        translation: "(Urodziłem się w Polsce)", 
        options: ["suis", "ai", "es", "est"], 
        correct: "suis", 
        explanation: "'Naître' (rodzić się) używa 'être'. 'Je suis né en Pologne' = urodziłem się w Polsce. Narodziny to ostateczna zmiana stanu - z niebytu do bycia. Stąd 'être'. To piękna filozofia ukryta w gramatyce. Miejsce urodzenia to część tożsamości, korzeni." 
      },
      { 
        id: "pf_pc14", 
        question: "Tu _____ fait tes devoirs.", 
        translation: "(Zrobiłeś zadania)", 
        options: ["as", "es", "a", "suis"], 
        correct: "as", 
        explanation: "'Faire' (robić) używa 'avoir'. 'Tu as fait tes devoirs' = zrobiłeś zadania. 'Fait' to imiesłów od 'faire' - jeden z najczęstszych czasowników. Robienie zadań to obowiązek, ale też droga do wiedzy. 'Faire' jest jak 'robić' w polskim - uniwersalny i wszechstronny." 
      },
      { 
        id: "pf_pc15", 
        question: "Elle _____ morte.", 
        translation: "(Ona umarła)", 
        options: ["est", "a", "es", "suis"], 
        correct: "est", 
        explanation: "'Mourir' (umierać) używa 'être'. 'Elle est morte' = ona umarła. Dodatkowe -e dla żeńskiego: mort → morte. Śmierć to ostateczna zmiana stanu - koniec bycia. 'Être' jest głęboko właściwe. To delikatny temat, ale ważny czasownik. Życie i śmierć to część egzystencji." 
      }
    ]
  },

  pronouns: {
    name: "Pronoms personnels",
    description: "Zaimki osobowe",
    level: "intermediate",
    icon: Users,
    color: "from-green-400 to-emerald-500",
    questions: [
      { 
        id: "pf_pr1", 
        question: "_____ parle français.", 
        translation: "(Ja mówię po francusku)", 
        options: ["Je", "Tu", "Il", "Nous"], 
        correct: "Je", 
        explanation: "'Je' to zaimek pierwszej osoby - 'ja'. W zdaniu 'Je parle français', 'je' jest podmiotem. Przed samogłoskami 'je' zmienia się w j': j'habite, j'aime. Ta elizja sprawia, że francuski płynie melodyjnie. Zaimki podmiotowe są podstawą każdego zdania - fundamentem konstrukcji językowej." 
      },
      { 
        id: "pf_pr2", 
        question: "_____ aimes le chocolat.", 
        translation: "(Ty lubisz czekoladę)", 
        options: ["Tu", "Je", "Il", "Vous"], 
        correct: "Tu", 
        explanation: "'Tu' to forma nieformalna dla 'ty'. Używana z rodziną, przyjaciółmi, dziećmi, zwierzętami. 'Tu aimes le chocolat' = ty lubisz czekoladę. Wybór między 'tu' i 'vous' niesie ze sobą ważne znaczenie społeczne. 'Tu' tworzy bliskość, ciepło, zaufanie. To piękna subtelność języka." 
      },
      { 
        id: "pf_pr3", 
        question: "_____ est content.", 
        translation: "(On jest zadowolony)", 
        options: ["Il", "Je", "Tu", "Nous"], 
        correct: "Il", 
        explanation: "'Il' to 'on' (męski). 'Il est content' = on jest zadowolony. Używane dla osób męskich i rzeczy męskich. Francuski przypisuje rodzaj wszystkiemu - stołom, książkom, pomysłom. 'Il' reprezentuje cały świat męskich rzeczowników. To część logiki językowej." 
      },
      { 
        id: "pf_pr4", 
        question: "_____ habite à Paris.", 
        translation: "(Ona mieszka w Paryżu)", 
        options: ["Elle", "Il", "Nous", "Vous"], 
        correct: "Elle", 
        explanation: "'Elle' to 'ona' (żeński). 'Elle habite à Paris' = ona mieszka w Paryżu. Dla osób żeńskich i rzeczy żeńskich. Paryż jako miejsce zamieszkania brzmi romantycznie. 'Elle' ma miękkość w brzmieniu - langue et mélodie. Każdy zaimek ma swoją muzyczność." 
      },
      { 
        id: "pf_pr5", 
        question: "_____ mangeons ensemble.", 
        translation: "(My jemy razem)", 
        options: ["Nous", "Je", "Vous", "Ils"], 
        correct: "Nous", 
        explanation: "'Nous' to 'my' - pierwsza osoba mnoga. 'Nous mangeons ensemble' = my jemy razem. Wspólne posiłki to ważny element kultury francuskiej. 'Nous' tworzy wspólnotę, łączy ludzi. Jest w tym sile i przynależności. Jedzenie razem buduje więzi." 
      },
      { 
        id: "pf_pr6", 
        question: "_____ êtes gentils.", 
        translation: "(Wy jesteście mili)", 
        options: ["Vous", "Nous", "Ils", "Tu"], 
        correct: "Vous", 
        explanation: "'Vous' może być 'wy' (mnogi) lub grzecznościowe 'Pan/Pani'. 'Vous êtes gentils' = wy jesteście mili. 'Vous' jako forma szacunku jest bardzo francuska. Tworzy dystans społeczny, ale też szacunek. Przejście z 'vous' do 'tu' (tutoiement) to ważny moment w relacji." 
      },
      { 
        id: "pf_pr7", 
        question: "_____ parlent français.", 
        translation: "(Oni mówią po francusku)", 
        options: ["Ils", "Elles", "Nous", "Vous"], 
        correct: "Ils", 
        explanation: "'Ils' to 'oni' - trzecia osoba mnoga męska lub mieszana. 'Ils parlent français' = oni mówią po francusku. Jeśli grupa ma choć jednego mężczyznę, używamy 'ils'. To gramatyczna zasada, choć współcześnie dyskutowana. 'Ils' dominuje liczebnie w użyciu." 
      },
      { 
        id: "pf_pr8", 
        question: "_____ sont belles.", 
        translation: "(One są piękne)", 
        options: ["Elles", "Ils", "Nous", "Vous"], 
        correct: "Elles", 
        explanation: "'Elles' to 'one' - trzecia osoba mnoga wyłącznie żeńska. 'Elles sont belles' = one są piękne. Używane tylko gdy wszystkie osoby/rzeczy są żeńskie. 'Elles' ma płynność i elegancję w brzmieniu. Piękno jest wszędzie - w językach, w słowach, w dźwiękach." 
      },
      { 
        id: "pf_pr9", 
        question: "_____ adore la musique.", 
        translation: "(Ja uwielbiam muzykę)", 
        options: ["J'", "Tu", "Il", "Nous"], 
        correct: "J'", 
        explanation: "'J'' to skrócone 'je' przed samogłoskami. 'J'adore la musique' = ja uwielbiam muzykę. Muzyka jest uniwersalnym językiem. Ta elizja (j' zamiast je) pokazuje elegancję francuskiego - unikanie awkwardnych dźwięków. Płynność wymowy jest priorytetem." 
      },
      { 
        id: "pf_pr10", 
        question: "_____ on y va.", 
        translation: "(Więc idziemy)", 
        options: ["Alors", "Je", "Tu", "Il"], 
        correct: "Alors", 
        explanation: "To pytanie o słowo łączące, nie zaimek - 'alors' (więc, zatem). 'Alors on y va' = więc idziemy. 'On' jest specjalnym zaimkiem - nieformalnym 'my'. Bardzo częsty w mowie. 'On y va' to typowe wyrażenie codzienne - propozycja działania. Francuskość w pigułce." 
      },
      { 
        id: "pf_pr11", 
        question: "_____ travailles beaucoup.", 
        translation: "(Ty pracujesz dużo)", 
        options: ["Tu", "Vous", "Il", "Je"], 
        correct: "Tu", 
        explanation: "'Tu travailles beaucoup' = ty pracujesz dużo. 'Tu' dla bliskich osób. Praca jest ważna, ale równowaga też. 'Beaucoup' (dużo) to słowo częste - intensyfikator. Francuski ceni umiar, ale też docenia ciężką pracę. L'équilibre est important." 
      },
      { 
        id: "pf_pr12", 
        question: "_____ comprend bien.", 
        translation: "(On dobrze rozumie)", 
        options: ["Il", "Je", "Tu", "Nous"], 
        correct: "Il", 
        explanation: "'Il comprend bien' = on dobrze rozumie. 'Il' dla osoby męskiej lub rzeczy. Rozumienie to fundament komunikacji. 'Bien' (dobrze) dodaje pozytywnej nuty. Dobra komunikacja tworzy mosty między ludźmi i kulturami." 
      },
      { 
        id: "pf_pr13", 
        question: "_____ chantons une chanson.", 
        translation: "(Śpiewamy piosenkę)", 
        options: ["Nous", "Vous", "Ils", "Je"], 
        correct: "Nous", 
        explanation: "'Nous chantons une chanson' = śpiewamy piosenkę. Śpiewanie łączy ludzi - radość wspólnego wyrazu. 'Chanson' to piękne słowo - muzyka i słowa razem. Francuskie chanson to gatunek muzyczny z długą tradycją. Kultura w każdym słowie." 
      },
      { 
        id: "pf_pr14", 
        question: "_____ lisez un livre.", 
        translation: "(Czytacie książkę)", 
        options: ["Vous", "Nous", "Ils", "Tu"], 
        correct: "Vous", 
        explanation: "'Vous lisez un livre' = czytacie książkę. Czytanie otwiera światy - wyobraźni, wiedzy, empatii. 'Vous' może być mnogi lub grzecznościowy. Książki są uniwersalnym skarbem. Literatura francuska jest bogata - od Molière do Camus." 
      },
      { 
        id: "pf_pr15", 
        question: "_____ attendent le bus.", 
        translation: "(Czekają na autobus)", 
        options: ["Ils", "Il", "Nous", "Vous"], 
        correct: "Ils", 
        explanation: "'Ils attendent le bus' = czekają na autobus. Czekanie to część życia - moment refleksji, cierpliwości. Transport publiczny łączy społeczeństwo. 'Attendre' (czekać) to czasownik codzienności. Proste chwile mają swoją poetyczność." 
      }
    ]
  }
};
