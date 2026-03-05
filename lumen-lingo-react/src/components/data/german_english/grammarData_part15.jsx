
/**
 * GERMAN → ENGLISH GRAMMAR - PART 15
 * 4 categories, 15 questions each
 */

import { Minus, Ghost, Mountain, BookOpen } from "lucide-react";

export const part15Categories = {
  negative_questions: {
    name: "Negative Questions",
    description: "Verneinende Fragen - Bildung und Bedeutung verstehen",
    icon: Minus,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "neg_q_1",
        question: "_____ you like pizza? I thought everyone loved it universally always!",
        translation: "Magst du etwa Pizza nicht? Ich dachte, jeder liebt sie immer universell!",
        options: ["Don't", "Do", "Aren't", "Are"],
        correct: "Don't",
        explanation: "NEGATIVE Frage drückt ÜBERRASCHUNG aus: 'Don't you like'. Diese Pizza-Ablehnung ist überraschend, da Pizza weltweit beliebt ist."
      },
      {
        id: "neg_q_2",
        question: "_____ she coming to the wedding ceremony next month with her family?",
        translation: "Kommt sie etwa nicht nächsten Monat mit ihrer Familie zur Hochzeitszeremonie?",
        options: ["Isn't", "Is", "Doesn't", "Does"],
        correct: "Isn't",
        explanation: "Negative Frage: 'Isn't she coming' (kommt sie nicht). Diese Hochzeits-Teilnahme-Erwartung zeigt Überraschung bei möglicher Absage."
      },
      {
        id: "neg_q_3",
        question: "_____ he told you about the important meeting change yesterday already?",
        translation: "Hat er dir gestern nicht schon über die wichtige Meeting-Änderung erzählt?",
        options: ["Hasn't", "Didn't", "Isn't", "Doesn't"],
        correct: "Hasn't",
        explanation: "Present Perfect negativ: 'Hasn't he told'. Diese Information-Erwartung zeigt Überraschung über fehlende Kommunikation."
      },
      {
        id: "neg_q_4",
        question: "_____ it strange that nobody called us back after our email yesterday?",
        translation: "Ist es nicht seltsam, dass niemand uns nach unserer E-Mail gestern zurückrief?",
        options: ["Isn't", "Is", "Doesn't", "Does"],
        correct: "Isn't",
        explanation: "Negative Frage für VERWUNDERUNG: 'Isn't it strange'. Diese Nicht-Rückmeldung nach E-Mail ist ungewöhnlich und besorgniserregend."
      },
      {
        id: "neg_q_5",
        question: "_____ they supposed to arrive an hour ago at the train station already?",
        translation: "Sollten sie nicht schon vor einer Stunde am Bahnhof ankommen?",
        options: ["Weren't", "Wasn't", "Aren't", "Isn't"],
        correct: "Weren't",
        explanation: "Vergangenheit negativ: 'Weren't they supposed'. Diese Verspätung von einer Stunde ist besorgniserregend für Pünktlichkeit."
      },
      {
        id: "neg_q_6",
        question: "_____ you supposed to be at work right now instead of here?",
        translation: "Solltest du nicht jetzt bei der Arbeit sein statt hier?",
        options: ["Aren't", "Isn't", "Don't", "Doesn't"],
        correct: "Aren't",
        explanation: "Negative Frage: 'Aren't you supposed'. Diese Arbeitszeit-Frage zeigt Überraschung über Anwesenheit hier statt Büro."
      },
      {
        id: "neg_q_7",
        question: "_____ we meet before at the conference last year in Berlin, Germany?",
        translation: "Sind wir uns nicht letztes Jahr auf der Konferenz in Berlin, Deutschland begegnet?",
        options: ["Didn't", "Don't", "Haven't", "Weren't"],
        correct: "Didn't",
        explanation: "Vergangenheit negativ: 'Didn't we meet'. Diese Erinnerungs-Frage an Berliner Konferenz-Begegnung sucht Bestätigung."
      },
      {
        id: "neg_q_8",
        question: "_____ it better to call first before visiting someone unannounced at home?",
        translation: "Wäre es nicht besser, erst anzurufen, bevor man jemanden unangekündigt zu Hause besucht?",
        options: ["Isn't", "Wasn't", "Doesn't", "Didn't"],
        correct: "Isn't",
        explanation: "Negative Frage für VORSCHLAG: 'Isn't it better'. Dieser Anruf-vor-Besuch-Vorschlag ist höfliche Etikette-Empfehlung."
      },
      {
        id: "neg_q_9",
        question: "_____ you freezing in this cold weather without a warm jacket on?",
        translation: "Frierst du etwa nicht in diesem kalten Wetter ohne warme Jacke an?",
        options: ["Aren't", "Isn't", "Don't", "Doesn't"],
        correct: "Aren't",
        explanation: "Negative Frage: 'Aren't you freezing'. Diese Kälte-Sorge ohne Jacke zeigt Besorgnis über Unterkühlung."
      },
      {
        id: "neg_q_10",
        question: "_____ anyone else find this explanation confusing and difficult to understand clearly?",
        translation: "Findet nicht noch jemand diese Erklärung verwirrend und schwer klar zu verstehen?",
        options: ["Doesn't", "Don't", "Isn't", "Aren't"],
        correct: "Doesn't",
        explanation: "Negative Frage sucht BESTÄTIGUNG: 'Doesn't anyone else find'. Diese Verständnis-Schwierigkeit sucht Gleichgesinnte."
      },
      {
        id: "neg_q_11",
        question: "_____ you remember me from university days years ago together in class?",
        translation: "Erinnerst du dich etwa nicht an mich von Uni-Tagen vor Jahren zusammen im Unterricht?",
        options: ["Don't", "Didn't", "Aren't", "Haven't"],
        correct: "Don't",
        explanation: "Präsens negativ: 'Don't you remember'. Diese Erinnerungs-Erwartung an gemeinsame Uni-Zeit zeigt Enttäuschung bei Vergessen."
      },
      {
        id: "neg_q_12",
        question: "_____ that the most beautiful sunset you've ever seen in your entire life?",
        translation: "Ist das etwa nicht der schönste Sonnenuntergang, den du je in deinem ganzen Leben gesehen hast?",
        options: ["Isn't", "Wasn't", "Doesn't", "Didn't"],
        correct: "Isn't",
        explanation: "Negative Frage für BETONUNG: 'Isn't that'. Diese Sonnenuntergang-Schönheits-Betonung drückt Bewunderung aus."
      },
      {
        id: "neg_q_13",
        question: "_____ we supposed to bring something for the potluck dinner party tonight?",
        translation: "Sollten wir nicht etwas für die Potluck-Dinnerparty heute Abend mitbringen?",
        options: ["Aren't", "Isn't", "Don't", "Doesn't"],
        correct: "Aren't",
        explanation: "Negative Frage: 'Aren't we supposed'. Diese Mitbring-Pflicht-Frage bei Potluck zeigt Unsicherheit über Erwartungen."
      },
      {
        id: "neg_q_14",
        question: "_____ you tired after working twelve long hours today without any break?",
        translation: "Bist du etwa nicht müde nach zwölf langen Arbeitsstunden heute ohne jede Pause?",
        options: ["Aren't", "Isn't", "Don't", "Doesn't"],
        correct: "Aren't",
        explanation: "Negative Frage: 'Aren't you tired'. Diese Müdigkeits-Erwartung nach zwölf Stunden ist logische Erschöpfungs-Annahme."
      },
      {
        id: "neg_q_15",
        question: "_____ they have enough money to buy that expensive house in the city?",
        translation: "Haben sie etwa nicht genug Geld, um jenes teure Haus in der Stadt zu kaufen?",
        options: ["Don't", "Didn't", "Aren't", "Haven't"],
        correct: "Don't",
        explanation: "Negative Frage: 'Don't they have'. Diese Kauf kraft-Zweifel-Frage zeigt Überraschung bei teurer Haus-Interesse."
      }
    ]
  },

  double_negatives: {
    name: "Avoiding Double Negatives",
    description: "Doppelte Verneinung - richtige negative Strukturen im Englischen",
    icon: Ghost,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "double_neg_1",
        question: "I don't have _____ money with me right now - I left my wallet home.",
        translation: "Ich habe jetzt kein Geld bei mir - ich ließ meine Geldbörse zu Hause.",
        options: ["any", "no", "none", "not any"],
        correct: "any",
        explanation: "Nach NEGATIV Verb: 'don't have ANY' (NICHT 'no'). Doppel-Negativ vermeiden. Diese Geldlosigkeit ohne Geldbörse ist problematisch."
      },
      {
        id: "double_neg_2",
        question: "She didn't say _____ about the surprise party we're planning for tomorrow.",
        translation: "Sie sagte nichts über die Überraschungsparty, die wir für morgen planen.",
        options: ["anything", "nothing", "something", "none"],
        correct: "anything",
        explanation: "Nach Negativ: 'didn't say ANYTHING' (nicht nothing). Diese Geheimhaltung über Überraschungsparty ist wichtig für Erfolg."
      },
      {
        id: "double_neg_3",
        question: "I haven't been _____ interesting recently - just working and sleeping mostly.",
        translation: "Ich war kürzlich nirgendwo interessant - hauptsächlich nur Arbeiten und Schlafen.",
        options: ["anywhere", "nowhere", "somewhere", "everywhere"],
        correct: "anywhere",
        explanation: "Nach Negativ: 'haven't been ANYWHERE' (nicht nowhere). Diese Ereignislosigkeit kürzlich ist monotone Lebensphase."
      },
      {
        id: "double_neg_4",
        question: "There isn't _____ in the fridge - we need to go shopping urgently now!",
        translation: "Es ist nichts im Kühlschrank - wir müssen jetzt dringend einkaufen gehen!",
        options: ["anything", "nothing", "something", "everything"],
        correct: "anything",
        explanation: "Nach 'isn't': 'isn't ANYTHING' (nicht nothing). Dieser leere Kühlschrank erfordert sofortigen Lebensmittel-Einkauf."
      },
      {
        id: "double_neg_5",
        question: "He doesn't know _____ about computers - he's never used one before ever!",
        translation: "Er weiß nichts über Computer - er hat noch nie einen zuvor benutzt!",
        options: ["anything", "nothing", "something", "everything"],
        correct: "anything",
        explanation: "Nach Negativ: 'doesn't know ANYTHING'. Diese Computer-Unerfahrenheit ist in digitaler Zeit ungewöhnlich."
      },
      {
        id: "double_neg_6",
        question: "We didn't go _____ during our vacation - we just relaxed at home peacefully.",
        translation: "Wir gingen während unseres Urlaubs nirgendwohin - wir entspannten nur friedlich zu Hause.",
        options: ["anywhere", "nowhere", "somewhere", "everywhere"],
        correct: "anywhere",
        explanation: "Nach Negativ: 'didn't go ANYWHERE'. Dieser Entspannungs-Urlaub zu Hause ist Erholung ohne Reise-Stress."
      },
      {
        id: "double_neg_7",
        question: "I can't find my keys _____ - I've looked in all the usual places!",
        translation: "Ich kann meine Schlüssel nirgendwo finden - ich habe an allen üblichen Stellen geschaut!",
        options: ["anywhere", "nowhere", "somewhere", "everywhere"],
        correct: "anywhere",
        explanation: "Nach 'can't': 'can't find ANYWHERE'. Diese erfolglose Schlüsselsuche an üblichen Orten ist frustrierende Situation."
      },
      {
        id: "double_neg_8",
        question: "She doesn't want _____ to eat right now - she's not feeling hungry at all.",
        translation: "Sie möchte jetzt nichts essen - sie fühlt sich überhaupt nicht hungrig.",
        options: ["anything", "nothing", "something", "everything"],
        correct: "anything",
        explanation: "Nach Negativ: 'doesn't want ANYTHING'. Dieser fehlende Appetit jetzt zeigt Sättigung oder Unwohlsein."
      },
      {
        id: "double_neg_9",
        question: "They haven't invited _____ to the party - it's only for family members close.",
        translation: "Sie haben niemanden zur Party eingeladen - sie ist nur für enge Familienmitglieder.",
        options: ["anyone", "no one", "someone", "everyone"],
        correct: "anyone",
        explanation: "Nach Negativ: 'haven't invited ANYONE'. Diese exklusive Familien-Party hat begrenzte Gästeliste."
      },
      {
        id: "double_neg_10",
        question: "I didn't buy _____ at the expensive store - everything was too costly for me!",
        translation: "Ich kaufte nichts im teuren Laden - alles war für mich zu kostspielig!",
        options: ["anything", "nothing", "something", "everything"],
        correct: "anything",
        explanation: "Nach Negativ: 'didn't buy ANYTHING'. Diese Nicht-Käufe wegen hoher Preise sind Budget-Schutz."
      },
      {
        id: "double_neg_11",
        question: "We don't need _____ help with this simple easy task - we can manage alone.",
        translation: "Wir brauchen keine Hilfe bei dieser einfachen leichten Aufgabe - wir können es allein schaffen.",
        options: ["any", "no", "some", "none"],
        correct: "any",
        explanation: "Nach Negativ: 'don't need ANY'. Diese Selbstständigkeit bei einfacher Aufgabe zeigt Kompetenz und Unabhängigkeit."
      },
      {
        id: "double_neg_12",
        question: "She hasn't told _____ about her secret plans for the big surprise tomorrow.",
        translation: "Sie hat niemandem über ihre Geheimpläne für die große Überraschung morgen erzählt.",
        options: ["anyone", "no one", "someone", "everyone"],
        correct: "anyone",
        explanation: "Nach Negativ: 'hasn't told ANYONE'. Diese Geheim-Bewahrung für morgen ist wichtig für Überraschungs-Erfolg."
      },
      {
        id: "double_neg_13",
        question: "I don't want _____ to disturb me while I'm studying for exams intensively tonight.",
        translation: "Ich möchte nicht, dass mich heute Abend jemand stört, während ich intensiv für Prüfungen lerne.",
        options: ["anyone", "no one", "someone", "everyone"],
        correct: "anyone",
        explanation: "Nach Negativ: 'don't want ANYONE to disturb'. Diese Lern-Ruhe-Bitte heute ist nötig für konzentrierte Prüfungsvorbereitung."
      },
      {
        id: "double_neg_14",
        question: "There wasn't _____ interesting on TV tonight - all programs were boring completely.",
        translation: "Es war heute Abend nichts Interessantes im Fernsehen - alle Programme waren komplett langweilig.",
        options: ["anything", "nothing", "something", "everything"],
        correct: "anything",
        explanation: "Nach 'wasn't': 'wasn't ANYTHING'. Diese TV-Programm-Langweiligkeit führt zu alternativer Abend-Beschäftigung."
      },
      {
        id: "double_neg_15",
        question: "He doesn't go _____ without his phone - he's addicted to it completely always!",
        translation: "Er geht nirgendwohin ohne sein Handy - er ist immer komplett süchtig danach!",
        options: ["anywhere", "nowhere", "somewhere", "everywhere"],
        correct: "anywhere",
        explanation: "Nach Negativ: 'doesn't go ANYWHERE'. Diese Handy-Abhängigkeit zeigt moderne Technologie-Sucht und ständige Verbindung."
      }
    ]
  },

  noun_verb_adjective_same: {
    name: "Same Word, Different Function",
    description: "Wortarten - gleiches Wort als Verb, Nomen, Adjektiv",
    icon: Mountain,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "word_func_1",
        question: "Please _____ the window - it's getting cold in here with draft coming.",
        translation: "Bitte schließe das Fenster - es wird hier kalt mit hereinkommendem Zug.",
        options: ["close", "closed", "closing", "closely"],
        correct: "close",
        explanation: "VERB 'close' (schließen): Imperativ. Dieses Fenster-Schließen stoppt kalte Luft und verbessert Raum-Temperatur."
      },
      {
        id: "word_func_2",
        question: "The store is very _____ to my house - only five minutes walking distance.",
        translation: "Der Laden ist sehr nah an meinem Haus - nur fünf Minuten Gehentfernung.",
        options: ["close", "closed", "closing", "closely"],
        correct: "close",
        explanation: "ADJEKTIV 'close' (nah): 'very close to'. Diese Laden-Nähe zum Haus ist praktisch für schnelle Einkäufe."
      },
      {
        id: "word_func_3",
        question: "I need to _____ my English skills before the important job interview next week.",
        translation: "Ich muss meine Englischkenntnisse vor dem wichtigen Bewerbungsgespräch nächste Woche verbessern.",
        options: ["improve", "improved", "improving", "improvement"],
        correct: "improve",
        explanation: "VERB 'improve' nach 'need to': Diese Englisch-Verbesserung vor Interview ist wichtige Vorbereitung für Erfolg."
      },
      {
        id: "word_func_4",
        question: "There's been a significant _____ in the weather patterns recently this month.",
        translation: "Es gab kürzlich diesen Monat eine bedeutende Veränderung in den Wettermustern.",
        options: ["change", "changed", "changing", "changer"],
        correct: "change",
        explanation: "NOMEN 'change' (Veränderung): nach 'a'. Diese Wetter-Muster-Veränderung kürzlich ist spürbare klimatische Verschiebung."
      },
      {
        id: "word_func_5",
        question: "Can you _____ me your phone? I need to make an urgent call quickly.",
        translation: "Kannst du mir dein Handy leihen? Ich muss schnell einen dringenden Anruf machen.",
        options: ["lend", "loan", "lending", "lended"],
        correct: "lend",
        explanation: "VERB 'lend' (verleihen): 'lend me'. Diese dringende Handy-Leih-Anfrage ist für wichtigen Anruf nötig."
      },
      {
        id: "word_func_6",
        question: "I took out a bank _____ to buy my first car last year successfully.",
        translation: "Ich nahm letztes Jahr erfolgreich einen Bankkredit auf, um mein erstes Auto zu kaufen.",
        options: ["loan", "lend", "loaning", "lended"],
        correct: "loan",
        explanation: "NOMEN 'loan' (Kredit/Darlehen): 'a loan'. Dieser Bank-Kredit für ersten Autokauf ist wichtige Finanzierungs-Entscheidung."
      },
      {
        id: "word_func_7",
        question: "The water is _____ enough to drink now - you can have some safely.",
        translation: "Das Wasser ist jetzt warm genug zum Trinken - du kannst sicher etwas haben.",
        options: ["warm", "warmed", "warming", "warmly"],
        correct: "warm",
        explanation: "ADJEKTIV 'warm': Diese Wasser-Temperatur-Eignung zum Trinken ist für Komfort und Sicherheit wichtig."
      },
      {
        id: "word_func_8",
        question: "Please _____ up the soup before serving it to the hungry guests tonight.",
        translation: "Bitte wärme die Suppe auf, bevor du sie heute Abend den hungrigen Gästen servierst.",
        options: ["warm", "warmed", "warming", "warmly"],
        correct: "warm",
        explanation: "VERB 'warm up' (aufwärmen): Diese Suppen-Aufwärm-Anweisung ist für angenehme Ess-Temperatur bei Gästen."
      },
      {
        id: "word_func_9",
        question: "She gave me a _____ smile when I entered the crowded room nervously.",
        translation: "Sie gab mir ein warmes Lächeln, als ich nervös den überfüllten Raum betrat.",
        options: ["warm", "warmed", "warming", "warmly"],
        correct: "warm",
        explanation: "ADJEKTIV vor Nomen: 'warm smile'. Dieses freundliche Lächeln bei nervösem Eintreten ist beruhigende Willkommens-Geste."
      },
      {
        id: "word_func_10",
        question: "I can't _____ my keys anywhere in the house - they've completely disappeared!",
        translation: "Ich kann meine Schlüssel nirgendwo im Haus finden - sie sind komplett verschwunden!",
        options: ["find", "found", "finding", "finder"],
        correct: "find",
        explanation: "VERB 'find' nach Modal: Diese Schlüssel-Such-Erfolglosigkeit im ganzen Haus ist mysteriöse frustrierende Situation."
      },
      {
        id: "word_func_11",
        question: "That was a lucky _____ - I found twenty euros on the street today!",
        translation: "Das war ein glücklicher Fund - ich fand heute zwanzig Euro auf der Straße!",
        options: ["find", "found", "finding", "finder"],
        correct: "find",
        explanation: "NOMEN 'find' (Fund): 'a lucky find'. Dieser Geld-Fund auf Straße ist überraschender glücklicher Zufalls-Moment."
      },
      {
        id: "word_func_12",
        question: "The _____ of the mountain is covered with beautiful white snow currently.",
        translation: "Die Spitze des Berges ist momentan mit schönem weißem Schnee bedeckt.",
        options: ["top", "topped", "topping", "topper"],
        correct: "top",
        explanation: "NOMEN 'top' (Spitze): 'the top of'. Diese schneebedeckte Berg-Spitze ist malerischer Winter-Anblick."
      },
      {
        id: "word_func_13",
        question: "He managed to _____ the difficult exam despite not studying much at all.",
        translation: "Er schaffte es, die schwere Prüfung zu bestehen, trotz kaum Lernens überhaupt.",
        options: ["pass", "past", "passing", "passer"],
        correct: "pass",
        explanation: "VERB 'pass' (bestehen): nach 'to'. Dieser Prüfungs-Erfolg trotz wenig Lernens ist erstaunliches Glück."
      },
      {
        id: "word_func_14",
        question: "In the _____, people didn't have smartphones or internet at all anywhere.",
        translation: "In der Vergangenheit hatten Leute überhaupt nirgendwo Smartphones oder Internet.",
        options: ["past", "pass", "passed", "passing"],
        correct: "past",
        explanation: "NOMEN 'past' (Vergangenheit): 'in the past'. Diese technologiefreie Vergangenheit ist für junge Generation unvorstellbar."
      },
      {
        id: "word_func_15",
        question: "We need to _____ this difficult situation together as a united team successfully.",
        translation: "Wir müssen diese schwierige Situation erfolgreich zusammen als vereintes Team bewältigen.",
        options: ["face", "faced", "facing", "facer"],
        correct: "face",
        explanation: "VERB 'face' (bewältigen/gegenüberstehen): Diese Team-Herausforderung zusammen ist effektive Problemlösungs-Strategie."
      }
    ]
  },
  
  suggest_recommend_advise: {
    name: "Suggest, Recommend, Advise",
    description: "Vorschlagen - suggest, recommend, advise korrekt verwenden",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "suggest_1",
        question: "I _____ going to the new Italian restaurant downtown tonight for dinner.",
        translation: "Ich schlage vor, heute Abend zum Abendessen in das neue italienische Restaurant in der Innenstadt zu gehen.",
        options: ["suggest", "recommend", "advise", "all correct"],
        correct: "suggest",
        explanation: "'SUGGEST' + Gerund: 'suggest going'. Dieser Restaurant-Vorschlag ist lockere Idee für gemeinsames Abendessen heute."
      },
      {
        id: "suggest_2",
        question: "The doctor _____ me to rest for a few days after the minor surgery.",
        translation: "Der Arzt riet mir, nach der kleinen Operation ein paar Tage zu ruhen.",
        options: ["advised", "suggested", "recommended", "all correct"],
        correct: "advised",
        explanation: "'ADVISE' + Person + Infinitiv: 'advised me to rest'. Dieser medizinische Ruhe-Rat nach OP ist wichtig für Heilung."
      },
      {
        id: "suggest_3",
        question: "I _____ this book to anyone who enjoys mystery stories and suspense greatly.",
        translation: "Ich empfehle dieses Buch jedem, der Mystery-Geschichten und Spannung sehr genießt.",
        options: ["recommend", "suggest", "advise", "both recommend and suggest"],
        correct: "recommend",
        explanation: "'RECOMMEND' + Nomen + 'to': 'recommend this book to'. Diese Buch-Empfehlung für Mystery-Fans ist persönlicher Lese-Tipp."
      },
      {
        id: "suggest_4",
        question: "She _____ that we should leave earlier to avoid the rush hour traffic.",
        translation: "Sie schlug vor, dass wir früher losfahren sollten, um den Berufsverkehr zu vermeiden.",
        options: ["suggested", "recommended", "advised", "all correct"],
        correct: "all correct",
        explanation: "Alle + 'that' + Subjekt + should: Diese Früh-Aufbruch-Empfehlung ist praktischer Verkehrs-Vermeidungs-Rat."
      },
      {
        id: "suggest_5",
        question: "My lawyer _____ me not to sign the contract without reading it completely carefully.",
        translation: "Mein Anwalt riet mir, den Vertrag nicht zu unterschreiben, ohne ihn komplett sorgfältig zu lesen.",
        options: ["advised", "suggested", "recommended", "told"],
        correct: "advised",
        explanation: "'ADVISE' + Person + not to: 'advised me not to sign'. Dieser rechtliche Rat ist wichtiger Schutz vor übereilten Vertrags-Entscheidungen."
      },
      {
        id: "suggest_6",
        question: "I _____ trying the seafood pasta here - it's absolutely delicious and fresh!",
        translation: "Ich empfehle, hier die Meeresfrüchte-Pasta zu probieren - sie ist absolut lecker und frisch!",
        options: ["recommend", "suggest", "advise", "both recommend and suggest"],
        correct: "both recommend and suggest",
        explanation: "Beide + Gerund möglich: 'recommend/suggest trying'. Diese Pasta-Empfehlung basiert auf persönlicher positiver Geschmacks-Erfahrung."
      },
      {
        id: "suggest_7",
        question: "The teacher _____ that students practice vocabulary daily for best learning results.",
        translation: "Der Lehrer empfiehlt, dass Studenten täglich Vokabeln für beste Lernergebnisse üben.",
        options: ["recommends", "suggests", "advises", "all correct"],
        correct: "all correct",
        explanation: "Alle + 'that' möglich: Diese tägliche Vokabel-Übungs-Empfehlung ist bewährte Sprachlern-Methode."
      },
      {
        id: "suggest_8",
        question: "He _____ me to invest in that company, but I didn't follow his advice.",
        translation: "Er riet mir, in jene Firma zu investieren, aber ich folgte seinem Rat nicht.",
        options: ["advised", "suggested", "recommended", "both advised and recommended"],
        correct: "advised",
        explanation: "'ADVISE' + Person + Infinitiv (ernst): Diese Investitions-Empfehlung wurde ignoriert, vielleicht glücklicherweise oder bedauerlich."
      },
      {
        id: "suggest_9",
        question: "I _____ taking an umbrella with you - the weather forecast predicts rain today.",
        translation: "Ich schlage vor, einen Regenschirm mitzunehmen - die Wettervorhersage sagt heute Regen voraus.",
        options: ["suggest", "recommend", "advise", "both suggest and recommend"],
        correct: "both suggest and recommend",
        explanation: "Beide + Gerund: 'suggest/recommend taking'. Dieser Regenschirm-Vorschlag basiert auf Wetter-Prognose-Information."
      },
      {
        id: "suggest_10",
        question: "My friend _____ a great hotel for our vacation stay in Barcelona next month.",
        translation: "Mein Freund empfahl ein großartiges Hotel für unseren Urlaubs-Aufenthalt nächsten Monat in Barcelona.",
        options: ["recommended", "suggested", "advised", "both recommended and suggested"],
        correct: "recommended",
        explanation: "'RECOMMEND' + Nomen (üblich): 'recommended a hotel'. Diese Barcelona-Hotel-Empfehlung basiert auf Freund-Erfahrung."
      },
      {
        id: "suggest_11",
        question: "She _____ that I talk to my boss about the salary increase request.",
        translation: "Sie schlug vor, dass ich mit meinem Chef über die Gehaltserhöhungs-Anfrage spreche.",
        options: ["suggested", "recommended", "advised", "all correct"],
        correct: "all correct",
        explanation: "Alle + 'that' + Subjekt: Diese Gehalts-Gesprächs-Empfehlung ist mutiger Karriere-Schritt-Vorschlag."
      },
      {
        id: "suggest_12",
        question: "The guidebook strongly _____ visiting the museum early morning to avoid crowds.",
        translation: "Der Reiseführer empfiehlt stark, das Museum früh morgens zu besuchen, um Menschenmassen zu vermeiden.",
        options: ["recommends", "suggests", "advises", "both recommends and suggests"],
        correct: "both recommends and suggests",
        explanation: "Beide + Gerund: 'recommend/suggest visiting'. Dieser Früh-Besuchs-Tipp vermeidet Touristen-Gedränge für ruhigeres Erlebnis."
      },
      {
        id: "suggest_13",
        question: "I _____ you to think carefully before making this important life decision finally.",
        translation: "Ich rate dir, sorgfältig nachzudenken, bevor du endgültig diese wichtige Lebensentscheidung triffst.",
        options: ["advise", "suggest", "recommend", "tell"],
        correct: "advise",
        explanation: "'ADVISE' + Person + Infinitiv (ernst): Dieser Bedenkzeit-Rat vor wichtiger Entscheidung ist weise umsichtige Empfehlung."
      },
      {
        id: "suggest_14",
        question: "They _____ meeting at the café instead of at the noisy office building.",
        translation: "Sie schlugen vor, sich im Café statt im lauten Bürogebäude zu treffen.",
        options: ["suggested", "recommended", "advised", "both suggested and recommended"],
        correct: "both suggested and recommended",
        explanation: "Beide + Gerund: Dieser Café-Treffpunkt-Vorschlag ist angenehmere ruhigere Alternative zum lauten Büro."
      },
      {
        id: "suggest_15",
        question: "The dentist _____ that I should brush my teeth three times daily regularly.",
        translation: "Der Zahnarzt empfahl, dass ich regelmäßig dreimal täglich meine Zähne putzen sollte.",
        options: ["recommended", "suggested", "advised", "all correct"],
        correct: "all correct",
        explanation: "Alle + 'that' + should: Dieser dreimalige Zähneputz-Rat ist zahnmedizinische Standard-Hygiene-Empfehlung."
      }
    ]
  }
};

export default part15Categories;
