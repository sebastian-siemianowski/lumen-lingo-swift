/**
 * POLISH → ENGLISH GRAMMAR - PART 17
 * 3 categories, 15 questions each - Master integration
 */

import { Layers, Award, Sparkles } from "lucide-react";

export const part17Categories = {
  mixed_tenses_context: {
    name: "Czasy mieszane w kontekście",
    description: "Używanie różnych czasów razem",
    icon: Layers,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "mix_t_1",
        question: "I _____ this book since last month and I'm still only halfway through it.",
        translation: "(Czytam tę książkę od zeszłego miesiąca i wciąż jestem tylko w połowie)",
        options: ["have been reading", "am reading", "read", "was reading"],
        correct: "have been reading",
        explanation: "Present perfect continuous dla akcji zaczynającej w przeszłości trwającej do teraz! 'Since last month' wskazuje punkt startu. 'Have been reading' pokazuje że książka wciąż w toku - nie finished. To o slow reading pace - zajmuje długi czas, może książka jest difficult lub masz mało czasu daily."
      },
      {
        id: "mix_t_2",
        question: "When I _____ younger, I used to play football every weekend with my friends.",
        translation: "(Kiedy byłem młodszy, grywałem w piłkę każdy weekend z przyjaciółmi)",
        options: ["was", "have been", "am", "had been"],
        correct: "was",
        explanation: "'When I was younger' używa past simple dla life stage! 'Was' opisuje period życia. 'Used to play' potem opisuje habit w tym okresie. Kombinacja: past simple dla okresu + 'used to' dla nawyków w tym okresie. To classic childhood memory structure - setting + repeated activities."
      },
      {
        id: "mix_t_3",
        question: "By the time you _____ this message, I will already be on the plane flying.",
        translation: "(Zanim przeczytasz tę wiadomość, będę już w samolocie lecąc)",
        options: ["read", "will read", "have read", "are reading"],
        correct: "read",
        explanation: "Po 'by the time' używaj present simple dla przyszłości! Nie 'will read' - time clauses nie używają 'will'. 'By the time you read' (present) 'I will be' (future). To paradoksalne ale standardowe - przyszłe time clauses używają present forms. Message showing timing overlap między your action i my departure."
      },
      {
        id: "mix_t_4",
        question: "She _____ in London for five years now and loves living in this vibrant city.",
        translation: "(Mieszka w Londynie od pięciu lat i kocha mieszkać w tym tętniącym życiem mieście)",
        options: ["has been living", "is living", "lives", "lived"],
        correct: "has been living",
        explanation: "'Has been living for five years' dla trwającego zamieszkania! 'For five years' + present perfect continuous pokazuje że started w przeszłości i continues. Second part 'loves' używa present simple dla obecnego stanu. To o established residence - wystarczająco długo żeby mieć strong opinion o miejscu."
      },
      {
        id: "mix_t_5",
        question: "I _____ my homework when suddenly the power went out in the whole building.",
        translation: "(Robiłem moją pracę domową kiedy nagle prąd wyłączył się w całym budynku)",
        options: ["was doing", "did", "have been doing", "had done"],
        correct: "was doing",
        explanation: "Past continuous dla interrupted action! 'Was doing' (ongoing) when power went out (sudden interruption). 'When' z past simple dla interrupting event. To classic interruption pattern: was + -ing WHEN + past simple. Background activity disrupted przez unexpected event."
      },
      {
        id: "mix_t_6",
        question: "If I _____ known about the traffic jam, I would have left earlier this morning.",
        translation: "(Gdybym wiedział o korku, wyszedłbym wcześniej dziś rano)",
        options: ["had", "have", "has", "would have"],
        correct: "had",
        explanation: "Third conditional używa past perfect w 'if' clause! 'If I had known' (nierealność) 'would have left' (niezrealizowane action). To żal - NIE wiedziałeś więc NIE wyszedłeś wcześnie. Result: spóźniłeś się. Past perfect dla niemożliwej przeszłości - nie możesz zmienić co się stało."
      },
      {
        id: "mix_t_7",
        question: "After I _____ my degree, I'm planning to travel around Europe for months.",
        translation: "(Po skończeniu mojego stopnia, planuję podróżować po Europie przez miesiące)",
        options: ["finish", "will finish", "have finished", "finished"],
        correct: "finish",
        explanation: "Po 'after' używaj present simple dla przyszłości! Nie 'will finish' - time clauses avoid 'will'. 'After I finish' (present) 'I'm planning' (future plan). To pokazuje sequence - ukończenie (first) enables travel (second). Future time clauses use present tenses - dziwna zasada ale consistent."
      },
      {
        id: "mix_t_8",
        question: "They _____ married for twenty years next month - let's organize anniversary party!",
        translation: "(Będą małżeństwem dwadzieścia lat w przyszłym miesiącu - zorganizujmy imprezę rocznicową!)",
        options: ["will have been", "are", "have been", "will be"],
        correct: "will have been",
        explanation: "Future perfect dla milestone w przyszłości! 'Will have been married' = do przyszłego miesiąca accumulated twenty years. 'Next month' jest punkt odniesienia w przyszłości. To celebruje achievement - długość relationship reaching significant anniversary. Future perfect counts accumulated time do przyszłej daty."
      },
      {
        id: "mix_t_9",
        question: "_____ you ever been to Paris? I'm going there next summer for vacation.",
        translation: "(Czy byłeś kiedykolwiek w Paryżu? Jadę tam przyszłego lata na wakacje)",
        options: ["Have", "Did", "Had", "Will"],
        correct: "Have",
        explanation: "'Have you ever been' pyta o życiowe doświadczenie! Present perfect dla 'ever' questions. Second sentence 'I'm going' używa present continuous dla przyszłego planu. Mieszanka czasów: perfect dla doświadczenia, continuous dla zaplanowanej przyszłości. Two different time frames, two different tenses appropriately."
      },
      {
        id: "mix_t_10",
        question: "While we _____ dinner, someone knocked on the door unexpectedly late.",
        translation: "(Podczas gdy jedliśmy kolację, ktoś zapukał do drzwi niespodziewanie późno)",
        options: ["were having", "had", "have", "are having"],
        correct: "were having",
        explanation: "Past continuous dla background + past simple dla interruption! 'Were having dinner' (ongoing) when knocked (sudden event). Classic interruption pattern. To o unexpected visitor podczas family time - timing był inconvenient (late, during meal). Two actions, different aspects: ongoing vs. point."
      },
      {
        id: "mix_t_11",
        question: "She _____ three languages fluently by the time she graduates from university.",
        translation: "(Będzie mówić w trzech językach płynnie zanim ukończy uniwersytet)",
        options: ["will speak", "speaks", "has spoken", "is speaking"],
        correct: "will speak",
        explanation: "Future simple dla ability przed przyszłym punktem! 'Will speak' (future capability) 'by the time she graduates' (future reference point). Time clause 'graduates' używa present mimo że przyszłość. To projection of achievement - studying languages now, fluency będzie do graduation. Future accomplishment tied to educational milestone."
      },
      {
        id: "mix_t_12",
        question: "I _____ for you for over an hour when you finally arrived late!",
        translation: "(Czekałem na ciebie ponad godzinę kiedy w końcu przybyłeś spóźniony!)",
        options: ["had been waiting", "was waiting", "have been waiting", "waited"],
        correct: "had been waiting",
        explanation: "Past perfect continuous dla długiej akcji przed innym przeszłym eventem! Czekanie (extended duration) BEFORE arrival (later past moment). 'Had been waiting' + 'when you arrived' pokazuje frustrating długość wait przed relief of arrival. Duration accumulated before resolution."
      },
      {
        id: "mix_t_13",
        question: "This time tomorrow, I _____ on a beach in Hawaii enjoying the sunshine!",
        translation: "(O tej porze jutro będę leżał na plaży na Hawajach ciesząc się słońcem!)",
        options: ["will be lying", "am lying", "lie", "have been lying"],
        correct: "will be lying",
        explanation: "Future continuous dla wyobrażanej przyszłej sceny! 'Will be lying' = w środku akcji o określonym przyszłym czasie. 'This time tomorrow' wskazuje exact moment w przyszłości. To excited anticipation - visualizing yourself w paradise scenario. Future continuous creates vivid mental image przyszłej sytuacji."
      },
      {
        id: "mix_t_14",
        question: "_____ I have finished this report, I'll send it to you immediately via email.",
        translation: "(Jak tylko skończę ten raport, wyślę go do ciebie natychmiast emailem)",
        options: ["Once", "While", "During", "Until"],
        correct: "Once",
        explanation: "'Once' znaczy 'as soon as' - natychmiastowa kolejność! 'Once I finish' (present dla przyszłości) 'I'll send' (future action). 'Once' podkreśla że second action happens IMMEDIATELY po first. To promise of prompt delivery - no delay między completion i sending. Sequence will be instant."
      },
      {
        id: "mix_t_15",
        question: "He _____ football professionally for ten years before retiring from sport last year.",
        translation: "(Grał w piłkę profesjonalnie przez dziesięć lat zanim przeszedł na emeryturę ze sportu w zeszłym roku)",
        options: ["had played", "played", "has played", "was playing"],
        correct: "had played",
        explanation: "Past perfect dla periodu przed innym przeszłym eventem! Granie przez 10 lat (extended past) BEFORE retirement (later past point). 'Had played... before retiring' pokazuje career duration before endpoint. To career summary - accumulated experience przed major life transition (retirement)."
      }
    ]
  },

  advanced_modal_meanings: {
    name: "Modalne - zaawansowane znaczenia",
    description: "Must have, can't have, should have been",
    icon: Award,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "adv_mod_1",
        question: "She _____ left already - her coat and bag are gone from the office.",
        translation: "(Ona musiała już wyjść - jej płaszcz i torebka zniknęły z biura)",
        options: ["must have", "must", "has to have", "should have"],
        correct: "must have",
        explanation: "'Must have + past participle' dla przeszłej dedukcji z dowodem! Widzisz brakujące rzeczy (evidence) więc deduujesz że wyszła. 'Must have left' = jesteś bardzo pewien bazując na visible signs. To logical conclusion from observation - nie widziałeś jej wyjścia ale dowody są oczywiste."
      },
      {
        id: "adv_mod_2",
        question: "He _____ been at the party - I was there all night and never saw him once.",
        translation: "(Nie mógł być na imprezie - byłem tam całą noc i nigdy go nie widziałem)",
        options: ["can't have", "must have", "might have", "should have"],
        correct: "can't have",
        explanation: "'Can't have + past participle' dla pewnej negatywnej dedukcji! Byłeś tam całą noc (personal witness) więc WIESZ że nie był. 'Can't have been' = impossible że był. To confident rejection bazowana na firsthand experience - twoja obecność przez cały czas makes his presence impossible."
      },
      {
        id: "adv_mod_3",
        question: "You _____ told me about the meeting earlier! Now I'm unprepared completely.",
        translation: "(Powinieneś był powiedzieć mi o spotkaniu wcześniej! Teraz jestem całkowicie nieprzygotowany)",
        options: ["should have", "must have", "could have", "would have"],
        correct: "should have",
        explanation: "'Should have + past participle' dla krytyki przeszłego braku akcji! Nie powiedziałeś (failure) i to było twoją odpowiedzialnością. 'Should have told' = to była twoja powinność but you didn't. To narzekanie - jesteś unprepared z powodu ich failure to inform. Mild blame dla missed responsibility."
      },
      {
        id: "adv_mod_4",
        question: "They _____ arrived by now - the train was scheduled for an hour ago.",
        translation: "(Powinni byli już przyjechać - pociąg był zaplanowany na godzinę temu)",
        options: ["should have", "must have", "would have", "could have"],
        correct: "should have",
        explanation: "'Should have arrived by now' dla oczekiwanego ale missing event! Czas minął (hour ago) więc arrival był expected. Brak pojawienia się jest concerning. To anxiety lub annoyance - where are they? Timeline suggests powinni być już here ale aren't. Creates worry lub frustration."
      },
      {
        id: "adv_mod_5",
        question: "She _____ been studying - she knew all the answers perfectly on exam.",
        translation: "(Musiała się uczyć - znała wszystkie odpowiedzi perfekcyjnie na egzaminie)",
        options: ["must have", "should have", "could have", "might have"],
        correct: "must have",
        explanation: "'Must have been studying' dla dedukcji z rezultatu! Perfect answers (evidence) więc logical conclusion = studied hard. 'Must have' wyraża certainty bazowaną na outcome. To reverse engineering - widzisz excellent result więc deduujesz must preparation that produced it. Evidence-based confidence w przeszłej akcji."
      },
      {
        id: "adv_mod_6",
        question: "You _____ taken an umbrella - now you're completely soaked from the rain!",
        translation: "(Powinieneś był wziąć parasol - teraz jesteś całkowicie przemoczony od deszczu!)",
        options: ["should have", "must have", "would have", "could have"],
        correct: "should have",
        explanation: "'Should have taken' dla missed precaution! Nie wziąłeś parasola (mistake) i teraz mokry (consequence). 'I told you so' moment - przewidywalna konsekwencja ignorowania rady. To gentle scolding - outcome był avoidable gdybyś listened lub prepared better."
      },
      {
        id: "adv_mod_7",
        question: "He _____ been lying about his qualifications - nobody can be that experienced so young!",
        translation: "(Musiał kłamać o swoich kwalifikacjach - nikt nie może być tak doświadczony tak młody!)",
        options: ["must have", "should have", "could have", "might have"],
        correct: "must have",
        explanation: "'Must have been lying' dla strong suspicion! Jego claims don't match his age (logical impossibility) więc must be false. 'Must have' dla conclusions based on impossibility - numbers don't add up. To skepticism - detecting inconsistency w czyjeś story przez logical analysis."
      },
      {
        id: "adv_mod_8",
        question: "They _____ won the lottery - they bought a mansion and three expensive cars!",
        translation: "(Musieli wygrać na loterii - kupili willę i trzy drogie samochody!)",
        options: ["must have", "should have", "could have", "would have"],
        correct: "must have",
        explanation: "'Must have won' dla explaining sudden wealth! Massive purchases (visible evidence) można explain tylko przez lottery lub similar windfall. 'Must have' wyraża logical deduction from circumstances. To speculation about source of dramatic lifestyle change - seeking explanation dla unexpected prosperity."
      },
      {
        id: "adv_mod_9",
        question: "You _____ seen the look on his face when he heard the surprising news!",
        translation: "(Powinieneś był zobaczyć wyraz jego twarzy kiedy usłyszał zaskakującą wiadomość!)",
        options: ["should have", "must have", "could have", "would have"],
        correct: "should have",
        explanation: "'Should have seen' dla żalu o missed moment! Reakcja była priceless (wartościowe doświadczenie) ale przegapiłeś (unfortunate absence). To nie krityka - to regret że nie doświadczyłeś czegoś memorable. Sharing excitement o moment poprzez expressing wish że byli present."
      },
      {
        id: "adv_mod_10",
        question: "She _____ been working out regularly - she looks much fitter than before!",
        translation: "(Musiała regularnie ćwiczyć - wygląda znacznie w lepszej formie niż wcześniej!)",
        options: ["must have", "should have", "would have", "could have"],
        correct: "must have",
        explanation: "'Must have been working out' dla dedukcji z physical changes! Visible improvement (evidence) leads to conclusion about training. 'Must have' wyraża confidence że exercise happened bazując na observable results. To compliment - her transformation reveals dedicated effort over time."
      },
      {
        id: "adv_mod_11",
        question: "I _____ called you yesterday but I lost your phone number unfortunately.",
        translation: "(Mógłbym był zadzwonić do ciebie wczoraj ale zgubiłem twój numer telefonu niestety)",
        options: ["could have", "should have", "must have", "would have"],
        correct: "could have",
        explanation: "'Could have called' dla missed possibility! Była opcja (possibility existed) ale nie happened z powodu obstacle (lost number). 'Could have' o opportunities które didn't materialize due to circumstances. To wyjaśnia czemu contact didn't happen - intention była tam but means were lacking."
      },
      {
        id: "adv_mod_12",
        question: "He _____ forgotten about our meeting - he's usually very reliable and punctual.",
        translation: "(Mógł zapomnieć o naszym spotkaniu - zazwyczaj jest bardzo niezawodny i punktualny)",
        options: ["might have", "must have", "should have", "would have"],
        correct: "might have",
        explanation: "'Might have forgotten' dla możliwego wyjaśnienia! Nie przyszedł (fact) więc spekulujesz reason. 'Might have' = możliwa ale nie pewna explanation. To charitable interpretation - zamiast assuming rudeness, oferujesz benefit of doubt że był honest mistake given his normal reliability."
      },
      {
        id: "adv_mod_13",
        question: "They _____ been more careful with their money - now they're in debt.",
        translation: "(Powinni byli być bardziej ostrożni ze swoimi pieniędzmi - teraz są w długach)",
        options: ["should have", "must have", "could have", "would have"],
        correct: "should have",
        explanation: "'Should have been careful' dla financial regret! Careless spending (past mistakes) led to debt (current problem). 'Should have' wyraża że proper behavior w przeszłości would prevented obecny mess. To lesson learned too late - hindsight criticism o money management."
      },
      {
        id: "adv_mod_14",
        question: "You _____ been sleeping during the lecture - you missed all the important information!",
        translation: "(Musiałeś spać podczas wykładu - przegapiłeś całą ważną informację!)",
        options: ["must have", "should have", "could have", "might have"],
        correct: "must have",
        explanation: "'Must have been sleeping' dla accusatory deduction! Missed everything (evidence) więc conclusion = spałeś. 'Must have' wyraża irritated certainty - no other explanation dla complete ignorance. To scolding - inattention (sleep) caused you to miss crucial content. Evidence makes excuse impossible."
      },
      {
        id: "adv_mod_15",
        question: "I _____ gone to the party, but I was too tired after working all day.",
        translation: "(Mógłbym był pójść na imprezę, ale byłem zbyt zmęczony po pracy przez cały dzień)",
        options: ["could have", "should have", "must have", "would have"],
        correct: "could have",
        explanation: "'Could have gone' dla declined opportunity! Possibility existed (invitation received) ale chose not to przez exhaustion. 'Could have' o options które były available but not taken. To wyjaśnia absence - nie brak invitation ale personal decision bazowana on condition (tiredness)."
      }
    ]
  },

  participle_clauses: {
    name: "Klauzule participialne",
    description: "Walking home, Having finished, Being tired...",
    icon: Sparkles,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "part_cl_1",
        question: "_____ home from work, I saw a beautiful sunset over the city skyline.",
        translation: "(Idąc do domu z pracy, zobaczyłem piękny zachód słońca nad sylwetką miasta)",
        options: ["Walking", "Walked", "While walked", "When walked"],
        correct: "Walking",
        explanation: "Present participle dla simultaneous actions! 'Walking home' zastępuje 'while I was walking home' - krótsze i bardziej elegant. Obie akcje tej samej osoby happening razem. To literacki device dla varying sentence structure - zamiast zawsze używać 'when/while' używasz participial phrases dla sophistication."
      },
      {
        id: "part_cl_2",
        question: "_____ tired after the long journey, we went straight to bed without eating.",
        translation: "(Będąc zmęczeni po długiej podróży, poszliśmy prosto do łóżka bez jedzenia)",
        options: ["Being", "Been", "While being", "Having been"],
        correct: "Being",
        explanation: "'Being tired' wyjaśnia reason przez participle! Zastępuje 'because we were tired' - bardziej concise. 'Being' + adjective opisuje stan causing action. To efficient writing - participial phrase packs reasoning into opening, avoiding separate clause. Main action (went to bed) gets emphasis."
      },
      {
        id: "part_cl_3",
        question: "_____ finished my homework, I finally had time to relax and watch TV.",
        translation: "(Skończywszy moją pracę domową, w końcu miałem czas żeby się zrelaksować i oglądać TV)",
        options: ["Having finished", "Finishing", "Finished", "When finished"],
        correct: "Having finished",
        explanation: "'Having + past participle' dla completed action przed inną! 'Having finished' pokazuje że praca domowa was DONE before relaxation started. Perfect participle dla sequence - first action fully completed, then second begins. To o earning relaxation - completion of responsibility enables guilt-free leisure."
      },
      {
        id: "part_cl_4",
        question: "_____ in Poland all my life, I know the language and culture very well.",
        translation: "(Mieszkając w Polsce całe moje życie, znam język i kulturę bardzo dobrze)",
        options: ["Having lived", "Living", "Lived", "While living"],
        correct: "Having lived",
        explanation: "'Having lived' dla lifetime experience as basis! Experience accumulated (całe życie mieszkania) DLATEGO deep knowledge (current state). Perfect participle pokazuje że experience started w przeszłości i continues providing foundation. To o life experience creating expertise."
      },
      {
        id: "part_cl_5",
        question: "_____ what to say, I just stood there silently in awkward silence.",
        translation: "(Nie wiedząc co powiedzieć, po prostu stałem tam cicho w niezręcznej ciszy)",
        options: ["Not knowing", "Don't knowing", "Didn't knowing", "Not knew"],
        correct: "Not knowing",
        explanation: "Negatywny participle: 'not' + -ing! 'Not knowing' wyjaśnia reason dla ciszy. Zastępuje 'because I didn't know' - bardziej literary. To relatable awkward moment - mental blankness causing physical stillness. Participle efficiently combines reason (confusion) z result (silence)."
      },
      {
        id: "part_cl_6",
        question: "The letter _____ by my secretary will be sent out tomorrow morning.",
        translation: "(List napisany przez moją sekretarkę zostanie wysłany jutro rano)",
        options: ["written", "writing", "wrote", "having written"],
        correct: "written",
        explanation: "Past participle jako adjective phrase! 'Written by secretary' modyfikuje 'letter' w passive sense. Zastępuje relative clause 'which was written by'. To skraca opis - participial phrase jako efficient modifier. Używane dla specifications - kto lub co created/produced item."
      },
      {
        id: "part_cl_7",
        question: "_____ carefully before answering, she gave a thoughtful and wise response.",
        translation: "(Myśląc uważnie przed odpowiedzią, dała przemyślaną i mądrą odpowiedź)",
        options: ["Thinking", "Thought", "Having thought", "Think"],
        correct: "Thinking",
        explanation: "'Thinking carefully' dla deliberation process! Present participle pokazuje że thinking i answering były close together temporally. Nie długa gap - quick but careful consideration before speaking. To o thoughtful communication - brief pause dla organizing thoughts creates better responses."
      },
      {
        id: "part_cl_8",
        question: "_____ no other choice available, we decided to accept their offer reluctantly.",
        translation: "(Nie mając innego wyboru dostępnego, zdecydowaliśmy się przyjąć ich ofertę niechętnie)",
        options: ["Having", "Have", "Had", "Has"],
        correct: "Having",
        explanation: "'Having no choice' wyjaśnia forced decision! Brak alternatyw (constraint) forced acceptance (reluctant action). Perfect participle dla completed assessment situation before decision. To o being cornered - would prefer różne options but none exist więc must accept."
      },
      {
        id: "part_cl_9",
        question: "The students _____ for the exam looked nervous and stressed in hallway.",
        translation: "(Studenci czekający na egzamin wyglądali nerwowo i zestresowani w korytarzu)",
        options: ["waiting", "waited", "wait", "having waited"],
        correct: "waiting",
        explanation: "Present participle jako adjective! 'Students waiting' = studenci którzy czekają. Zastępuje relative clause 'who are waiting' - bardziej concise. To scene description - painting picture of pre-exam tension. Participle efficiently adds action to noun creating vivid image."
      },
      {
        id: "part_cl_10",
        question: "_____ lived in London for years, she knows all the best restaurants and cafes.",
        translation: "(Mieszkając w Londynie przez lata, zna wszystkie najlepsze restauracje i kawiarnie)",
        options: ["Having", "Living", "Lived", "While living"],
        correct: "Having",
        explanation: "'Having lived for years' dla accumulated experience! Long residence (foundation) THEREFORE local knowledge (expertise). Perfect participle pokazuje że experience jest complete i stała się basis dla current knowledge. To o becoming local expert through extended time w miejscu."
      },
      {
        id: "part_cl_11",
        question: "_____ born in a small village, he values simple life and nature greatly.",
        translation: "(Urodzony w małej wiosce, ceni proste życie i naturę bardzo)",
        options: ["Having been", "Being", "Born", "Was"],
        correct: "Having been",
        explanation: "'Having been born' dla życiowego backgroundu shaping values! Childhood environment (formative experience) shaped current priorities (lasting impact). Perfect participle dla life origin affecting personality. To o how upbringing influences what you value - rural roots creating appreciation dla simplicity."
      },
      {
        id: "part_cl_12",
        question: "_____ at the map carefully, we realized we had been going the wrong way.",
        translation: "(Patrząc na mapę uważnie, zdaliśmy sobie sprawę że jechaliśmy w złym kierunku)",
        options: ["Looking", "Looked", "Having looked", "Look"],
        correct: "Looking",
        explanation: "'Looking at the map' dla discovery action! Spojrzenie na mapę (investigation) revealed error (unwelcome realization). Present participle dla action leading to discovery. To frustrujący moment - map checking exposed navigational mistake. Action of looking brought unwanted truth."
      },
      {
        id: "part_cl_13",
        question: "_____ in many countries worldwide, he speaks five languages fluently and naturally.",
        translation: "(Mieszkając w wielu krajach na świecie, mówi w pięciu językach płynnie i naturalnie)",
        options: ["Having lived", "Living", "Lived", "While lived"],
        correct: "Having lived",
        explanation: "'Having lived in many countries' dla accumulated multicultural experience! International exposure (life experience) created multilingual ability (impressive skill). Perfect participle dla completed experiences w multiple locations contributing to current capabilities. To o how diverse living develops language skills naturally."
      },
      {
        id: "part_cl_14",
        question: "_____ her best, she still couldn't solve the extremely difficult math problem.",
        translation: "(Próbując jak najlepiej, wciąż nie mogła rozwiązać ekstremalnie trudnego problemu matematycznego)",
        options: ["Trying", "Tried", "Having tried", "Try"],
        correct: "Trying",
        explanation: "'Trying her best' dla effort pomimo failure! Maximum effort (attempt) YET couldn't solve (disappointing outcome). Present participle pokazuje że trying i failing były simultaneous - nawet podczas best effort, solution eluded. To o limits - sometimes maximum isn't enough dla extreme challenges."
      },
      {
        id: "part_cl_15",
        question: "_____ the news on TV yesterday, I learned about the recent political developments.",
        translation: "(Oglądając wiadomości w TV wczoraj, dowiedziałem się o ostatnich wydarzeniach politycznych)",
        options: ["Watching", "Watched", "Having watched", "While watched"],
        correct: "Watching",
        explanation: "'Watching the news' dla information source! TV watching (activity) provided learning (outcome). Present participle dla media consumption jako education method. To o staying informed - news watching serves practical purpose of knowledge acquisition o current events. Combines entertainment z education."
      }
    ]
  }
};

export default part17Categories;