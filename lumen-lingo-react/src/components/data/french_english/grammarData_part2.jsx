/**
 * FRENCH → ENGLISH GRAMMAR - PART 2 (REFINED - NO EXCLAMATIONS)
 * Past Simple & Future Simple
 */

import { History, TrendingUp } from "lucide-react";

export const part2Categories = {
  past_simple: {
    name: "Past Simple",
    description: "Le passé simple en anglais",
    level: "intermediate",
    icon: History,
    color: "from-amber-400 to-orange-500",
    questions: [
      { 
        id: "fe_past1", 
        question: "I _____ to Paris last year.", 
        translation: "(Je suis allé à Paris l'année dernière)", 
        options: ["went", "go", "gone", "going"], 
        correct: "went", 
        explanation: "Bienvenue au Past Simple anglais - beaucoup plus simple que le passé composé français. Un seul mot suffit : 'went' (forme irrégulière de 'go'). Pas besoin d'auxiliaire comme 'avoir' ou 'être'. Le Past Simple exprime des actions complètes dans le passé. 'Last year' (l'année dernière) est votre marqueur temporel. En français on dirait 'je suis allé' (auxiliaire + participe), en anglais juste 'I went'. Cette simplicité est rafraîchissante." 
      },
      { 
        id: "fe_past2", 
        question: "She _____ a book yesterday.", 
        translation: "(Elle a lu un livre hier)", 
        options: ["read", "reads", "reading", "readed"], 
        correct: "read", 
        explanation: "'Read' au passé s'écrit pareil mais se prononce différemment (red, comme la couleur). C'est un verbe irrégulier. 'She read a book yesterday' = elle a lu un livre hier. Notez qu'en anglais, PAS de différence entre 'she read' (elle lisait) et 'she read' (elle a lu) - le contexte indique. Le Past Simple pour une action ponctuelle hier. Simple et efficace." 
      },
      { 
        id: "fe_past3", 
        question: "They _____ football last weekend.", 
        translation: "(Ils ont joué au football le weekend dernier)", 
        options: ["played", "play", "playing", "plaied"], 
        correct: "played", 
        explanation: "Les verbes réguliers prennent simplement -ED au passé. 'Play' devient 'played'. C'est votre pattern de base : verbe + ED. Prononcé 'play-d'. Pas de conjugaison - même forme pour I/you/he/she/it/we/they. 'Last weekend' (le weekend dernier) situe l'action. En français 'ils ont joué' (auxiliaire + participe), en anglais juste 'they played'. Une seule forme à apprendre." 
      },
      { 
        id: "fe_past4", 
        question: "He _____ coffee this morning.", 
        translation: "(Il a bu du café ce matin)", 
        options: ["drank", "drink", "drunk", "drinking"], 
        correct: "drank", 
        explanation: "'Drink' est irrégulier : drink (présent) vers drank (passé) vers drunk (participe passé). Au Past Simple, utilisez 'drank'. 'He drank coffee this morning' = il a bu du café ce matin. Les verbes irréguliers doivent être mémorisés, mais ils sont si fréquents qu'ils deviennent automatiques. 'This morning' (ce matin) crée le contexte passé." 
      },
      { 
        id: "fe_past5", 
        question: "We _____ at home all day.", 
        translation: "(Nous sommes restés à la maison toute la journée)", 
        options: ["stayed", "stay", "staying", "staied"], 
        correct: "stayed", 
        explanation: "Verbe régulier : stay + ED = stayed. 'We stayed at home all day' = nous sommes restés à la maison toute la journée. Même avec des verbes de mouvement, l'anglais n'a qu'une forme - pas d'auxiliaire 'être'. C'est uniforme et simple. 'All day' (toute la journée) indique la durée. Le -ED est votre ami pour les verbes réguliers." 
      },
      { 
        id: "fe_past6", 
        question: "You _____ a great meal.", 
        translation: "(Tu as cuisiné un excellent repas)", 
        options: ["cooked", "cook", "cooking", "cookked"], 
        correct: "cooked", 
        explanation: "Cook + ED = cooked (prononcé 'cookt'). 'You cooked a great meal' = tu as cuisiné un excellent repas. Les verbes se terminant en -k prennent juste -ED. La prononciation du -ED varie : après les sons sourds (k, p, s, etc.) il sonne comme 'T'. C'est une règle phonétique naturelle. Cuisiner est un art - 'you cooked' capture cette création passée." 
      },
      { 
        id: "fe_past7", 
        question: "She _____ to the store.", 
        translation: "(Elle est allée au magasin)", 
        options: ["went", "go", "gone", "going"], 
        correct: "went", 
        explanation: "'Go' est très irrégulier : go vers went vers gone. Au Past Simple : 'went'. 'She went to the store' = elle est allée au magasin. En français on utilise 'être' (elle est allée), en anglais juste le verbe seul. Cette uniformité simplifie énormément. 'Went' est un des verbes les plus utilisés - le mémoriser ouvre des portes linguistiques." 
      },
      { 
        id: "fe_past8", 
        question: "I _____ my keys.", 
        translation: "(J'ai perdu mes clés)", 
        options: ["lost", "lose", "losed", "losing"], 
        correct: "lost", 
        explanation: "'Lose' est irrégulier : lose vers lost vers lost. 'I lost my keys' = j'ai perdu mes clés. Expérience universelle frustrante. Le Past Simple pour exprimer cette perte ponctuelle. Pas d'auxiliaire nécessaire - juste 'lost'. Cette simplicité permet de s'exprimer rapidement, surtout dans des situations stressantes." 
      },
      { 
        id: "fe_past9", 
        question: "They _____ the film.", 
        translation: "(Ils ont regardé le film)", 
        options: ["watched", "watch", "watching", "watchhed"], 
        correct: "watched", 
        explanation: "Watch + ED = watched. 'They watched the film' = ils ont regardé le film. Les verbes en -ch prennent simplement -ED. Le cinéma est un plaisir partagé. Le Past Simple pour décrire l'expérience complète. 'Watched' se prononce 'wotch-t' - le -ED après ch sonne comme T. Cette prononciation est naturelle et fluide." 
      },
      { 
        id: "fe_past10", 
        question: "We _____ about the news.", 
        translation: "(Nous avons parlé des nouvelles)", 
        options: ["talked", "talk", "talking", "talkked"], 
        correct: "talked", 
        explanation: "Talk + ED = talked. 'We talked about the news' = nous avons parlé des nouvelles. Les conversations passées se racontent au Past Simple. 'About' (de, au sujet de) introduit le sujet. En français 'nous avons parlé', en anglais juste 'we talked'. Cette économie de structure facilite la communication naturelle." 
      },
      { 
        id: "fe_past11", 
        question: "He _____ very tired.", 
        translation: "(Il était très fatigué)", 
        options: ["was", "were", "is", "be"], 
        correct: "was", 
        explanation: "'Be' au passé se divise : was (pour I/he/she/it) et were (pour you/we/they). 'He was tired' = il était fatigué. Le verbe 'be' est le seul qui garde des formes différentes selon la personne au passé. Cette distinction entre was/were est unique. La fatigue est un état - le Past Simple capture ces états passés simplement." 
      },
      { 
        id: "fe_past12", 
        question: "You _____ at the party.", 
        translation: "(Tu étais à la fête)", 
        options: ["were", "was", "is", "be"], 
        correct: "were", 
        explanation: "Pour 'you' au passé, utilisez 'were'. 'You were at the party' = tu étais à la fête. Même au singulier, 'you' prend 'were' (pas 'was'). C'est une particularité de l'anglais. La fête est finie, mais le souvenir reste. Le Past Simple pour ces états et présences passés." 
      },
      { 
        id: "fe_past13", 
        question: "I _____ a letter.", 
        translation: "(J'ai écrit une lettre)", 
        options: ["wrote", "write", "writing", "writed"], 
        correct: "wrote", 
        explanation: "'Write' est irrégulier : write vers wrote vers written. Au Past Simple : 'wrote'. 'I wrote a letter' = j'ai écrit une lettre. Écrire des lettres devient rare à l'ère numérique, mais reste un geste personnel. Le Past Simple capture cet acte d'écriture accompli. 'Wrote' est simple et définitif." 
      },
      { 
        id: "fe_past14", 
        question: "She _____ happy.", 
        translation: "(Elle était heureuse)", 
        options: ["was", "were", "is", "be"], 
        correct: "was", 
        explanation: "He/she/it au passé = 'was'. 'She was happy' = elle était heureuse. Le bonheur est un état - le Past Simple pour ces états émotionnels passés. En français 'elle était' (imparfait), en anglais 'she was' (Past Simple). L'anglais ne distingue pas imparfait et passé composé comme le français - le contexte fait tout." 
      },
      { 
        id: "fe_past15", 
        question: "They _____ late.", 
        translation: "(Ils sont arrivés en retard)", 
        options: ["arrived", "arrive", "arriving", "arrivved"], 
        correct: "arrived", 
        explanation: "Arrive + D = arrived (quand le verbe finit en -e, on ajoute juste -D). 'They arrived late' = ils sont arrivés en retard. Arriver en retard est une expérience universelle. Le Past Simple pour ces événements ponctuels. 'Late' (en retard) ajoute le contexte. La simplicité du -D final facilite la conjugaison." 
      }
    ]
  },

  future_simple: {
    name: "Future Simple",
    description: "Le futur simple en anglais",
    level: "intermediate",
    icon: TrendingUp,
    color: "from-green-400 to-emerald-500",
    questions: [
      { 
        id: "fe_fut1", 
        question: "I _____ tomorrow.", 
        translation: "(Je voyagerai demain)", 
        options: ["will travel", "travel", "traveled", "am traveling"], 
        correct: "will travel", 
        explanation: "Le futur anglais est d'une simplicité magnifique : WILL + verbe de base. 'I will travel' = je voyagerai. Pas de conjugaison - même structure pour toutes les personnes. 'Will' exprime volonté, prédiction, promesse. 'Tomorrow' (demain) situe dans le futur. En français on conjugue le verbe (voyagerai), en anglais on ajoute juste 'will'. Cette uniformité est libératrice." 
      },
      { 
        id: "fe_fut2", 
        question: "She _____ French.", 
        translation: "(Elle parlera français)", 
        options: ["will speak", "speaks", "spoke", "speaking"], 
        correct: "will speak", 
        explanation: "Will + verbe de base. 'She will speak French' = elle parlera français. Pas de 'will speaks' - le verbe reste à l'infinitif sans 'to'. Cette structure reste identique pour toutes les personnes. Apprendre le français est un voyage - 'will speak' exprime cette promesse future. La simplicité du futur anglais facilite les prédictions et plans." 
      },
      { 
        id: "fe_fut3", 
        question: "They _____ at 8 PM.", 
        translation: "(Ils arriveront à 20h)", 
        options: ["will arrive", "arrive", "arrived", "arriving"], 
        correct: "will arrive", 
        explanation: "Will + arrive. 'They will arrive at 8 PM' = ils arriveront à 20h. Les horaires précis se combinent naturellement avec 'will'. Cette structure exprime plans et promesses. 'At 8 PM' (à 20h) donne la précision temporelle. En français on conjugue (arriveront), en anglais on utilise l'auxiliaire 'will'. Simple et efficace." 
      },
      { 
        id: "fe_fut4", 
        question: "He _____ the exam.", 
        translation: "(Il passera l'examen)", 
        options: ["will take", "takes", "took", "taking"], 
        correct: "will take", 
        explanation: "Will + take. 'He will take the exam' = il passera l'examen. 'Take an exam' est l'expression idiomatique (pas 'pass'). Passer un examen crée du stress et de l'anticipation - 'will take' capture ce moment futur. La structure simple permet de se concentrer sur le contenu plutôt que la grammaire." 
      },
      { 
        id: "fe_fut5", 
        question: "We _____ together.", 
        translation: "(Nous travaillerons ensemble)", 
        options: ["will work", "work", "worked", "working"], 
        correct: "will work", 
        explanation: "Will + work. 'We will work together' = nous travaillerons ensemble. 'Together' (ensemble) ajoute la dimension collaborative. Le futur exprime intention et plan. En français 'nous travaillerons' (conjugaison complexe), en anglais 'we will work' (structure simple). Cette uniformité est précieuse." 
      },
      { 
        id: "fe_fut6", 
        question: "You _____ better soon.", 
        translation: "(Tu te sentiras mieux bientôt)", 
        options: ["will feel", "feel", "felt", "feeling"], 
        correct: "will feel", 
        explanation: "Will + feel. 'You will feel better soon' = tu te sentiras mieux bientôt. C'est un message d'espoir et de réconfort. 'Soon' (bientôt) suggère un futur proche. Le verbe 'feel' (sentir) pour les états physiques et émotionnels. 'Will feel' crée de l'optimisme - le futur sera meilleur." 
      },
      { 
        id: "fe_fut7", 
        question: "I _____ a doctor.", 
        translation: "(Je serai médecin)", 
        options: ["will be", "am", "was", "being"], 
        correct: "will be", 
        explanation: "Will + be. 'I will be a doctor' = je serai médecin. Même 'be' (le plus irrégulier des verbes) suit la règle simple : will + forme de base. Devenir médecin est une aspiration noble. Le futur exprime ambitions et rêves. 'Will be' pour les professions futures, identités, états." 
      },
      { 
        id: "fe_fut8", 
        question: "She _____ the book.", 
        translation: "(Elle lira le livre)", 
        options: ["will read", "reads", "read", "reading"], 
        correct: "will read", 
        explanation: "Will + read. 'She will read the book' = elle lira le livre. La lecture est un plaisir à venir. Le futur pour les plans et intentions. 'Will read' est simple et clair - pas de conjugaison complexe. Cette structure permet de parler naturellement de projets futurs." 
      },
      { 
        id: "fe_fut9", 
        question: "They _____ the truth.", 
        translation: "(Ils sauront la vérité)", 
        options: ["will know", "know", "knew", "knowing"], 
        correct: "will know", 
        explanation: "Will + know. 'They will know the truth' = ils sauront la vérité. Connaître la vérité implique découverte future. Le futur crée anticipation. 'Will know' pour les connaissances à venir, les révélations. En français 'ils sauront' (conjugaison), en anglais 'they will know' (auxiliaire + base)." 
      },
      { 
        id: "fe_fut10", 
        question: "We _____ happy.", 
        translation: "(Nous serons heureux)", 
        options: ["will be", "are", "were", "being"], 
        correct: "will be", 
        explanation: "Will + be. 'We will be happy' = nous serons heureux. Le bonheur futur est une belle perspective. 'Will be' pour les états émotionnels à venir. Cette structure simple exprime espoir et optimisme. En français 'nous serons' (conjugaison), en anglais 'we will be' (auxiliaire + be)." 
      },
      { 
        id: "fe_fut11", 
        question: "You _____ this weekend.", 
        translation: "(Tu viendras ce weekend)", 
        options: ["will come", "come", "came", "coming"], 
        correct: "will come", 
        explanation: "Will + come. 'You will come this weekend' = tu viendras ce weekend. Invitation et plan. 'This weekend' (ce weekend) situe le moment. Venir implique mouvement vers le locuteur. 'Will come' exprime l'attente et la promesse de présence." 
      },
      { 
        id: "fe_fut12", 
        question: "He _____ the door.", 
        translation: "(Il ouvrira la porte)", 
        options: ["will open", "opens", "opened", "opening"], 
        correct: "will open", 
        explanation: "Will + open. 'He will open the door' = il ouvrira la porte. Action future simple. Ouvrir une porte est à la fois littéral et métaphorique - ouvrir des possibilités. 'Will open' pour ces actions futures. La structure reste uniformément simple." 
      },
      { 
        id: "fe_fut13", 
        question: "I _____ my homework.", 
        translation: "(Je ferai mes devoirs)", 
        options: ["will do", "do", "did", "doing"], 
        correct: "will do", 
        explanation: "Will + do. 'I will do my homework' = je ferai mes devoirs. Promesse ou plan. Les devoirs sont une responsabilité - 'will do' montre l'intention. 'Do homework' est l'expression fixe. La structure simple facilite ces engagements quotidiens." 
      },
      { 
        id: "fe_fut14", 
        question: "She _____ to France.", 
        translation: "(Elle ira en France)", 
        options: ["will go", "goes", "went", "going"], 
        correct: "will go", 
        explanation: "Will + go. 'She will go to France' = elle ira en France. Projet de voyage. La France comme destination évoque culture, beauté, découverte. 'Will go' exprime ce projet futur. En français 'elle ira' (irrégulier), en anglais 'she will go' (régulier)." 
      },
      { 
        id: "fe_fut15", 
        question: "They _____ us tomorrow.", 
        translation: "(Ils nous appelleront demain)", 
        options: ["will call", "call", "called", "calling"], 
        correct: "will call", 
        explanation: "Will + call. 'They will call us tomorrow' = ils nous appelleront demain. Communication future. 'Tomorrow' (demain) donne le moment. Les appels téléphoniques connectent les gens. 'Will call' pour ces connexions futures. La structure simple permet de se concentrer sur la relation plutôt que la grammaire." 
      }
    ]
  }
};