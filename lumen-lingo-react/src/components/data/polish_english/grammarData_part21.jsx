/**
 * POLISH → ENGLISH GRAMMAR - PART 21
 * 3 categories, 15 questions each - Ultimate refinement
 */

import { Gem, Compass, Anchor } from "lucide-react";

export const part21Categories = {
  advanced_prepositions: {
    name: "Przyimki - zaawansowane użycie",
    description: "By mistake, on purpose, in advance, at risk",
    icon: Gem,
    color: "from-indigo-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "prep_adv_1",
        question: "I'm sorry - I deleted your file _____ mistake, not intentionally at all!",
        translation: "(Przepraszam - skasowałem twój plik przez pomyłkę, nie intencjonalnie w ogóle!)",
        options: ["by", "on", "in", "with"],
        correct: "by",
        explanation: "'By mistake' = accidentally, unintentionally! Fixed phrase - zawsze 'by' nie 'on/in'. To apology - explaining że error wasn't deliberate. Przeciwieństwo: 'on purpose' (intentionally). 'By mistake' removes malicious intent - showing fault was accidental, not planned. Important dla apologizing effectively."
      },
      {
        id: "prep_adv_2",
        question: "Did you break the expensive vase _____ purpose or was it really an accident?",
        translation: "(Czy zbiłeś drogi wazon specjalnie czy to był naprawdę wypadek?)",
        options: ["on", "by", "with", "in"],
        correct: "on",
        explanation: "'On purpose' = intentionally, deliberately! Fixed expression - zawsze 'on'. To interrogation - questioning intent. Opposite of 'by accident/mistake'. 'On purpose' suggests malice lub at minimum carelessness. Używane dla establishing whether action was intentional - important dla assigning responsibility."
      },
      {
        id: "prep_adv_3",
        question: "Please book your hotel room _____ advance to ensure availability for dates.",
        translation: "(Proszę zarezerwuj swój pokój hotelowy z wyprzedzeniem żeby zapewnić dostępność na daty)",
        options: ["in", "on", "by", "with"],
        correct: "in",
        explanation: "'In advance' = beforehand, ahead of time! Fixed phrase dla pre-planning. Zawsze 'in' nie inne przyimki. To practical travel advice - early booking prevents disappointment. Hotels fill up więc advance reservations wise. 'In advance' standard dla wszystkich pre-arrangements."
      },
      {
        id: "prep_adv_4",
        question: "Your personal health is _____ risk if you continue smoking heavily every day.",
        translation: "(Twoje osobiste zdrowie jest zagrożone jeśli kontynuujesz ciężkie palenie każdego dnia)",
        options: ["at", "in", "on", "under"],
        correct: "at",
        explanation: "'At risk' = endangered, in danger! Fixed medical/safety phrase - zawsze 'at'. To health warning - current behavior threatening future wellbeing. 'At risk' formal dla identifying vulnerabilities lub dangers. Medical professionals używają for communicating health threats requiring behavior change."
      },
      {
        id: "prep_adv_5",
        question: "The store is _____ sale this entire week with huge discounts on everything!",
        translation: "(Sklep jest na wyprzedaży przez cały ten tydzień z ogromnymi zniżkami na wszystko!)",
        options: ["on", "in", "at", "for"],
        correct: "on",
        explanation: "'On sale' = discounted, reduced price! Shopping phrase - zawsze 'on'. Different od 'for sale' (available to buy). 'On sale' temporary discount period. To marketing announcement - attracting customers z special pricing. 'On sale' creates urgency - limited time opportunity."
      },
      {
        id: "prep_adv_6",
        question: "I knew _____ heart that I had made the right decision for my future.",
        translation: "(Wiedziałem w sercu że podjąłem właściwą decyzję dla mojej przyszłości)",
        options: ["in my", "at my", "by my", "with my"],
        correct: "in my",
        explanation: "'In my heart' = deep internal conviction! Location metaphor - feelings 'in' heart. Zawsze 'in' dla internal certainty. To о profound confidence - not just thinking ale deeply feeling rightness. 'In heart' dla emotional certainty versus 'in mind' dla intellectual certainty."
      },
      {
        id: "prep_adv_7",
        question: "She's _____ charge of the entire marketing department at the large corporation.",
        translation: "(Ona jest odpowiedzialna za cały dział marketingu w dużej korporacji)",
        options: ["in", "on", "at", "under"],
        correct: "in",
        explanation: "'In charge of' = responsible for, leading! Authority phrase - zawsze 'in'. To о leadership role - she manages department. 'In charge' indicates control i responsibility. Professional context dla describing management positions. Shows hierarchy i accountability."
      },
      {
        id: "prep_adv_8",
        question: "The meeting has been postponed _____ further notice from senior management.",
        translation: "(Spotkanie zostało przełożone do dalszego zawiadomienia od wyższego kierownictwa)",
        options: ["until", "till", "by", "for"],
        correct: "until",
        explanation: "'Until further notice' = indefinitely, bez specific new date! Fixed corporate phrase. Meeting delayed bez confirmed reschedule. To frustrating uncertainty - don't know KIEDY będzie. 'Until further notice' leaves things open - watching dla update. Business communication dla indefinite postponements."
      },
      {
        id: "prep_adv_9",
        question: "_____ no circumstances should you share your password with anyone else ever!",
        translation: "(W żadnych okolicznościach nie powinieneś dzielić się swoim hasłem z kimkolwiek innym nigdy!)",
        options: ["Under", "In", "On", "At"],
        correct: "Under",
        explanation: "'Under no circumstances' = absolutely never! Bardzo strong prohibition phrase - zawsze 'under'. To security warning - password sharing is serious risk. 'Under no circumstances' creates absolute rule - no exceptions allowed. Critical dla security protocols."
      },
      {
        id: "prep_adv_10",
        question: "I'm _____ a hurry - can we please discuss this important matter later today?",
        translation: "(Jestem w pośpiechu - czy możemy proszę omówić tę ważną sprawę później dzisiaj?)",
        options: ["in", "on", "at", "with"],
        correct: "in",
        explanation: "'In a hurry' = rushed, pressed for time! State description - zawsze 'in'. To polite deferral - acknowledging importance but needing reschedule. 'In a hurry' explains inability to give proper attention now. Respectful postponement language - not dismissing but requesting better timing."
      },
      {
        id: "prep_adv_11",
        question: "He succeeded _____ sheer determination and hard work, not luck or connections.",
        translation: "(Odniósł sukces przez czystą determinację i ciężką pracę, nie szczęście lub znajomości)",
        options: ["through", "by", "with", "in"],
        correct: "through",
        explanation: "'Through sheer determination' pokazuje method of success! 'Through' dla means/method of achieving. Success attributed purely do personal qualities. To inspirational - emphasizing że hard work beats advantages. 'Through' credits effort jako sole path - rejecting luck explanations."
      },
      {
        id: "prep_adv_12",
        question: "The old building is _____ danger of collapsing and needs urgent repairs immediately.",
        translation: "(Stary budynek jest zagrożony zawaleniem i potrzebuje pilnych napraw natychmiast)",
        options: ["in", "at", "on", "under"],
        correct: "in",
        explanation: "'In danger of' = facing threat, at risk! Warning phrase - zawsze 'in'. To urgent alert - structural failure imminent. 'In danger' stronger niż 'at risk' - more immediate threat. Safety warning language - emphasizing urgency dla prevention action."
      },
      {
        id: "prep_adv_13",
        question: "I did it _____ accident - I swear I didn't mean to cause any problems!",
        translation: "(Zrobiłem to przez przypadek - przysięgam nie miałem zamiaru spowodować żadnych problemów!)",
        options: ["by", "on", "in", "with"],
        correct: "by",
        explanation: "'By accident' = accidentally, unintentionally! Same meaning co 'by mistake' - zawsze 'by'. To defensive apology - asserting lack of intent. Opposite of 'on purpose'. 'By accident' removes blame - wasn't malicious, just unfortunate. Important distinction w explaining errors."
      },
      {
        id: "prep_adv_14",
        question: "We arrived just _____ time to catch the last train home tonight luckily.",
        translation: "(Przybyliśmy właśnie na czas żeby złapać ostatni pociąg do domu dziś wieczorem szczęśliwie)",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "'Just in time' = barely made it, close call! Timing phrase - zawsze 'in'. 'On time' = exactly as scheduled. 'In time' = before too late. To relief - almost missed ale succeeded. 'Just in time' emphasizes narrow margin - lucky timing rescued situation."
      },
      {
        id: "prep_adv_15",
        question: "The house is _____ sale for a very reasonable price in current market conditions.",
        translation: "(Dom jest na sprzedaż za bardzo rozsądną cenę w obecnych warunkach rynkowych)",
        options: ["for", "on", "in", "at"],
        correct: "for",
        explanation: "'For sale' = available to purchase! Real estate phrase - zawsze 'for'. Different od 'on sale' (discounted). 'For sale' shows availability bez implying discount. To seller announcement - property offered на rynku. Standard real estate language dla listing properties."
      }
    ]
  },

  subjunctive_mood: {
    name: "Tryb łączący (subjunctive)",
    description: "I suggest that he go, it's important that she be",
    icon: Compass,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "subj_1",
        question: "I suggest that he _____ a doctor immediately about his persistent health symptoms.",
        translation: "(Sugeruję żeby zobaczył lekarza natychmiast o swoich uporczywych objawach zdrowotnych)",
        options: ["see", "sees", "seeing", "to see"],
        correct: "see",
        explanation: "Po 'suggest/recommend/insist' używaj base form (subjunctive)! 'That he see' nie 'that he sees'. To formal grammar - amerykański subjunctive. Żadne 's' w trzeciej osobie. To о medical urgency - suggesting immediate doctor visit. Subjunctive dla formal suggestions i recommendations."
      },
      {
        id: "subj_2",
        question: "It's essential that everyone _____ on time tomorrow for the important meeting.",
        translation: "(Jest niezbędne żeby wszyscy byli na czas jutro na ważne spotkanie)",
        options: ["be", "is", "are", "being"],
        correct: "be",
        explanation: "Po 'it's essential/important/vital' używaj subjunctive! 'Everyone be' (base form) nie 'everyone is'. To formal requirement statement - attendance punctuality mandatory. Subjunctive after necessity expressions. Very formal - British często używają 'should be' instead. American preference dla pure subjunctive."
      },
      {
        id: "subj_3",
        question: "The doctor recommended that she _____ smoking immediately for health reasons.",
        translation: "(Lekarz zalecił żeby przestała palić natychmiast ze względów zdrowotnych)",
        options: ["stop", "stops", "stopping", "to stop"],
        correct: "stop",
        explanation: "'Recommended that she stop' używa base form! Medical recommendation w subjunctive. Nie 'stops' - żadne conjugation. To health directive - doctor's strong advice. Subjunctive makes recommendation sound bardziej authoritative - not casual suggestion but professional medical guidance."
      },
      {
        id: "subj_4",
        question: "I insist that he _____ me an explanation for his strange behavior yesterday.",
        translation: "(Nalegam żeby dał mi wyjaśnienie dla jego dziwnego zachowania wczoraj)",
        options: ["give", "gives", "giving", "to give"],
        correct: "give",
        explanation: "'Insist that he give' - subjunctive po insistence! Base form 'give' nie 'gives'. To demanding explanation - stronger niż 'ask'. 'Insist' triggers subjunctive showing this is requirement not request. Firm language dla requiring accountability - deserving explanation for puzzling conduct."
      },
      {
        id: "subj_5",
        question: "It's crucial that the report _____ submitted before Friday's strict deadline.",
        translation: "(Jest kluczowe żeby raport został wysłany przed piątkowym ścisłym terminem)",
        options: ["be", "is", "are", "being"],
        correct: "be",
        explanation: "'Crucial that it be submitted' używa subjunctive passive! 'Be submitted' (base form passive) nie 'is submitted'. To о urgent deadline - submission timing critical. Subjunctive emphasizes importance - this isn't optional but essential. Formal business urgency communication."
      },
      {
        id: "subj_6",
        question: "They proposed that the meeting _____ postponed until everyone can attend properly.",
        translation: "(Zaproponowali żeby spotkanie zostało przełożone aż wszyscy mogą uczestniczyć porządnie)",
        options: ["be", "is", "was", "being"],
        correct: "be",
        explanation: "'Proposed that it be postponed' - subjunctive w suggestion! Base form 'be' w passive. To inclusive planning - wanting full participation. Proposal dla rescheduling using subjunctive shows this is formal suggestion requiring consideration. Democratic approach do scheduling."
      },
      {
        id: "subj_7",
        question: "It's necessary that she _____ present at the hearing tomorrow morning early.",
        translation: "(Jest niezbędne żeby była obecna na przesłuchaniu jutro rano wcześnie)",
        options: ["be", "is", "are", "being"],
        correct: "be",
        explanation: "'Necessary that she be present' - subjunctive mandatory! Legal lub official requirement. 'Be' (base) nie 'is'. To о legal obligation - attendance not optional. Subjunctive in formal/legal contexts emphasizes absolute requirement. Missing could have serious consequences."
      },
      {
        id: "subj_8",
        question: "I demand that he _____ immediately for his rude disrespectful behavior!",
        translation: "(Żądam żeby przeprosił natychmiast za jego niegrzeczne nieuprzejme zachowanie!)",
        options: ["apologize", "apologizes", "apologizing", "to apologize"],
        correct: "apologize",
        explanation: "'Demand that he apologize' używa subjunctive! Strong demand triggers base form. Nie 'apologizes' - no conjugation. To angry insistence - requiring apology for offense. 'Demand' creates non-negotiable requirement. Subjunctive makes demand sound authoritative i serious."
      },
      {
        id: "subj_9",
        question: "It's imperative that we _____ action now before the situation gets much worse!",
        translation: "(Jest imperatywne żebyśmy podjęli działanie teraz zanim sytuacja stanie się znacznie gorsza!)",
        options: ["take", "takes", "taking", "to take"],
        correct: "take",
        explanation: "'Imperative that we take' - strongest necessity language! 'Take' (base form) shows urgency. To crisis response - immediate action essential. 'Imperative' even stronger niż 'essential' - indicates emergency level need. Subjunctive emphasizes absolute necessity for immediate response."
      },
      {
        id: "subj_10",
        question: "The rules require that each participant _____ proper identification at entrance.",
        translation: "(Zasady wymagają żeby każdy uczestnik pokazał odpowiednią identyfikację przy wejściu)",
        options: ["show", "shows", "showing", "to show"],
        correct: "show",
        explanation: "'Require that participant show' - regulation subjunctive! Base form 'show' dla mandatory requirements. To security protocol - ID checking compulsory. 'Require' triggers subjunctive dla official rules. Formal regulation language - no flexibility, all must comply."
      },
      {
        id: "subj_11",
        question: "I suggest that we _____ this sensitive matter privately, not in public view.",
        translation: "(Sugeruję żebyśmy omówili tę delikatną sprawę prywatnie, nie publicznie)",
        options: ["discuss", "discusses", "discussing", "to discuss"],
        correct: "discuss",
        explanation: "'Suggest that we discuss' używa subjunctive dla proposals! Base form 'discuss'. To о discretion - sensitive topics need privacy. Suggestion dla handling delicate situations appropriately. Subjunctive makes suggestion sound thoughtful i considered - not casual idea but serious recommendation."
      },
      {
        id: "subj_12",
        question: "It's vital that the medicine _____ stored in a cool dry place away from sunlight.",
        translation: "(Jest kluczowe żeby lekarstwo było przechowywane w chłodnym suchym miejscu z dala od światła słonecznego)",
        options: ["be", "is", "are", "being"],
        correct: "be",
        explanation: "'Vital that it be stored' - subjunctive passive dla critical instructions! Medical storage requirement. 'Be stored' (base passive) maintains medication effectiveness. To pharmaceutical instruction - proper storage essential dla safety. Subjunctive emphasizes life-health importance of correct handling."
      },
      {
        id: "subj_13",
        question: "They requested that he _____ the confidential documents by Friday deadline.",
        translation: "(Poprosili żeby wysłał poufne dokumenty do piątkowego terminu)",
        options: ["submit", "submits", "submitting", "to submit"],
        correct: "submit",
        explanation: "'Requested that he submit' - formal request subjunctive! Base form po 'request'. To business formality - polite але firm requirement. 'Request' softer niż 'demand' але still triggers subjunctive showing seriousness. Professional communication о deliverables."
      },
      {
        id: "subj_14",
        question: "It's important that you _____ aware of all the risks before making this decision.",
        translation: "(Jest ważne żebyś był świadomy wszystkich ryzyk przed podjęciem tej decyzji)",
        options: ["be", "are", "is", "being"],
        correct: "be",
        explanation: "'Important that you be aware' - subjunctive dla awareness! 'Be aware' (base form) nie 'are aware'. To informed consent language - ensuring understanding przed commitment. Subjunctive emphasizes importance of comprehension. Serious matters require full awareness - not casual but critical."
      },
      {
        id: "subj_15",
        question: "The teacher insisted that every student _____ the exam individually without help.",
        translation: "(Nauczyciel nalegał żeby każdy student zdawał egzamin indywidualnie bez pomocy)",
        options: ["take", "takes", "taking", "to take"],
        correct: "take",
        explanation: "'Insisted that student take' - academic integrity subjunctive! Base form dla examination rules. No cheating allowed - individual work required. 'Insist' creates non-negotiable academic standard. Subjunctive makes rule sound absolute - violation has consequences. Educational integrity enforcement."
      }
    ]
  },

  substitution_avoidance: {
    name: "Substytucja i unikanie powtórzeń",
    description: "One, ones, so, do so, that/those",
    icon: Anchor,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "subst_1",
        question: "I like the blue shirt, but I prefer the red _____ because it matches my style.",
        translation: "(Lubię niebieską koszulę, ale wolę czerwoną bo pasuje do mojego stylu)",
        options: ["one", "it", "shirt", "that"],
        correct: "one",
        explanation: "'One' zastępuje policzalny singular noun! 'The red one' = the red shirt (avoiding repetition). Nie możesz powiedzieć 'the red' samo - potrzebujesz 'one'. To shopping comparison - evaluating options. 'One' efficient dla comparing similar items bez redundant noun repetition każdy raz."
      },
      {
        id: "subst_2",
        question: "These shoes are too small. Do you have any bigger _____ in this style?",
        translation: "(Te buty są za małe. Czy macie jakieś większe w tym stylu?)",
        options: ["ones", "it", "shoes", "those"],
        correct: "ones",
        explanation: "'Ones' zastępuje plural noun! 'Bigger ones' = bigger shoes. Mnoga forma 'one'. To retail request - seeking alternative size. 'Ones' avoids saying 'shoes' again - smoother i more natural. Używane constantly w shopping dla comparing multiple items of same category."
      },
      {
        id: "subst_3",
        question: "\"Will it rain?\" - \"I hope _____ - we have outdoor plans for today.\"",
        translation: "(\"Będzie padać?\" - \"Mam nadzieję że nie - mamy plany outdoor na dzisiaj\")",
        options: ["not", "no", "neither", "none"],
        correct: "not",
        explanation: "'I hope not' zastępuje negative clause! Zamiast 'I hope it won't rain' używasz compact 'not'. To efficient response - 'not' carries całe negatywne znaczenie. Podobnie: 'I think not', 'I believe not'. 'Not' jako powerful substitute eliminuje wordiness zachowując clarity."
      },
      {
        id: "subst_4",
        question: "My car is being repaired, so I'll have to use my sister's _____ today.",
        translation: "(Mój samochód jest naprawiany, więc będę musiał użyć samochodu mojej siostry dzisiaj)",
        options: ["one", "it", "car", "that"],
        correct: "one",
        explanation: "'My sister's one' zastępuje 'my sister's car'! Possessive + 'one' avoids repetition. 'One' refers back do previously mentioned noun type (car). To о borrowing - temporary use of someone else's vehicle. Possessive structures używają 'one' dla elegance."
      },
      {
        id: "subst_5",
        question: "\"Did you finish your homework?\" - \"Yes, I did _____ an hour ago already.\"",
        translation: "(\"Skończyłeś pracę domową?\" - \"Tak, zrobiłem godzinę temu już\")",
        options: ["so", "it", "that", "this"],
        correct: "so",
        explanation: "'I did so' zastępuje verb phrase! 'Did so' = finished homework (avoiding repetition of whole phrase). Very formal - casualowo might just say 'Yes, I did'. 'Do so' elegant dla referring back do previously mentioned actions. Formal writing i speech device."
      },
      {
        id: "subst_6",
        question: "I've read this book before, but I'd like to read _____ of his other novels too.",
        translation: "(Czytałem tę książkę wcześniej, ale chciałbym przeczytać inne jego powieści też)",
        options: ["some", "it", "one", "those"],
        correct: "some",
        explanation: "'Some of his other novels' używa 'some' jako pronoun! Refers do undefined quantity z larger group. Nie specific które - just some from collection. To о exploring author's work - having enjoyed one, seeking more. 'Some' dla partial selection from known set."
      },
      {
        id: "subst_7",
        question: "These cookies are delicious! Can I have another _____ please from the plate?",
        translation: "(Te ciasteczka są pyszne! Czy mogę mieć jeszcze jedno proszę z talerza?)",
        options: ["one", "it", "cookie", "that"],
        correct: "one",
        explanation: "'Another one' dla requesting additional item! 'One' zastępuje 'cookie' - already established co requesting. To polite request для seconds - enjoying so much że want more. 'Another one' smooth request without redundant noun. Natural w food contexts."
      },
      {
        id: "subst_8",
        question: "His ideas are interesting, but I don't agree with _____ of them at all honestly.",
        translation: "(Jego pomysły są interesujące, ale nie zgadzam się z żadnym z nich wcale szczerze)",
        options: ["any", "some", "one", "it"],
        correct: "any",
        explanation: "'Not... any of them' = none! 'Any' w negative context = zero. Complete disagreement - rejecting all ideas. To strong opposition - finding no merit w proposals. 'Any' in negatives creates totality - sweeping rejection of entire set."
      },
      {
        id: "subst_9",
        question: "I asked him to help, and he agreed to _____ without any hesitation immediately.",
        translation: "(Poprosiłem go о помогу, i zgodził się natychmiast bez żadnego wahania)",
        options: ["do so", "do it", "do that", "do this"],
        correct: "do so",
        explanation: "'Agreed to do so' = agreed to help! 'Do so' formal substitute dla verb phrase. Very formal - casual speech might just 'agreed to help'. 'Do so' elegant way of avoiding repetition while maintaining formality. Professional communication style - concise yet complete."
      },
      {
        id: "subst_10",
        question: "I don't have a pen. Could you lend me _____ for a moment please?",
        translation: "(Nie mam długopisu. Czy mógłbyś mi pożyczyć jakiś na chwilę proszę?)",
        options: ["one", "it", "pen", "that"],
        correct: "one",
        explanation: "'Lend me one' = lend me a pen (any pen)! 'One' dla indefinite item from category. Nie specific którego - any będzie do. To casual request - borrowing generic item. 'One' perfect dla requesting from general category without specifying which particular item."
      },
      {
        id: "subst_11",
        question: "\"Is she coming to the party?\" - \"I think _____, but I'm not completely certain.\"",
        translation: "(\"Czy ona przychodzi na imprezę?\" - \"Myślę że tak, ale nie jestem całkowicie pewien\")",
        options: ["so", "yes", "it", "that"],
        correct: "so",
        explanation: "'I think so' zastępuje affirmative clause! Zamiast 'I think she is coming' używasz 'so'. Efficient i natural. 'So' carries positive meaning - yes equivalent. Qualified agreement - thinking yes but not certain. 'So' jako elegant substitute dla longer affirmative response."
      },
      {
        id: "subst_12",
        question: "These computers are old. We need to replace them with newer _____ soon.",
        translation: "(Te komputery są stare. Musimy wymienić je na nowsze wkrótce)",
        options: ["ones", "its", "computers", "those"],
        correct: "ones",
        explanation: "'Newer ones' = newer computers! Plural 'ones' dla replacing plural noun. To technology upgrade discussion - old equipment needs replacement. 'Ones' avoids repeating 'computers' while staying clear. Standard business language dla equipment discussions."
      },
      {
        id: "subst_13",
        question: "If you need help, just ask and I'll be happy to _____ immediately.",
        translation: "(Jeśli potrzebujesz pomocy, po prostu zapytaj a chętnie pomogę natychmiast)",
        options: ["do so", "do it", "help", "do that"],
        correct: "do so",
        explanation: "'Happy to do so' = happy to help! 'Do so' formal substitute avoiding verb repetition. Bardzo formal - casual byłoby 'I'll help'. To polite offer - formal language shows respect. 'Do so' maintains профессионализм while avoiding redundancy."
      },
      {
        id: "subst_14",
        question: "I wanted the black jacket, but they only had grey _____ left in my size.",
        translation: "(Chciałem czarną kurtkę, ale mieli tylko szare w moim rozmiarze)",
        options: ["ones", "one", "jackets", "those"],
        correct: "ones",
        explanation: "'Grey ones' dla plural alternatives! Multiple grey jackets available. 'Ones' prevents repeating 'jackets'. To shopping disappointment - preferred color unavailable, settlin for alternative. Retail conversation standardowo używa 'ones' dla discussing available options."
      },
      {
        id: "subst_15",
        question: "She promised to call me back, but she never did _____ despite saying she would.",
        translation: "(Obiecała oddzwonić, ale nigdy tego nie zrobiła pomimo mówiąc że zrobi)",
        options: ["so", "it", "that", "this"],
        correct: "so",
        explanation: "'Never did so' = never called back! 'Did so' formal substitute dla promised action. To о broken promise - commitment not honored. 'Did so' maintains formality while expressing disappointment о unfulfilled assurance. Formal complaint language."
      }
    ]
  }
};

export default part21Categories;