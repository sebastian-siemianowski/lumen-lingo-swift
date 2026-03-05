import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories_part1 = {
  greetings: {
    name: "Begrüßungen",
    description: "Grundlegende Begrüßungen und höfliche Ausdrücke",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "gs_greet_1", german: "Hallo", spanish: "Hola", difficulty: "easy", example: "Hola, ¿cómo estás?", exampleTranslation: "Hallo, wie geht es dir?" },
      { id: "gs_greet_2", german: "Guten Morgen", spanish: "Buenos días", difficulty: "easy", example: "Buenos días, señor", exampleTranslation: "Guten Morgen, Herr" },
      { id: "gs_greet_3", german: "Guten Abend", spanish: "Buenas tardes", difficulty: "easy", example: "Buenas tardes", exampleTranslation: "Guten Abend" },
      { id: "gs_greet_4", german: "Auf Wiedersehen", spanish: "Adiós", difficulty: "easy", example: "Adiós, hasta luego", exampleTranslation: "Auf Wiedersehen, bis später" },
      { id: "gs_greet_5", german: "Bitte", spanish: "Por favor", difficulty: "easy", example: "Por favor, ayúdame", exampleTranslation: "Bitte, hilf mir" },
      { id: "gs_greet_6", german: "Danke", spanish: "Gracias", difficulty: "easy", example: "Gracias por tu ayuda", exampleTranslation: "Danke für deine Hilfe" },
      { id: "gs_greet_7", german: "Ja", spanish: "Sí", difficulty: "medium", example: "Sí, estoy de acuerdo", exampleTranslation: "Ja, ich stimme zu" },
      { id: "gs_greet_8", german: "Nein", spanish: "No", difficulty: "medium", example: "No, gracias", exampleTranslation: "Nein, danke" },
      { id: "gs_greet_9", german: "Entschuldigung", spanish: "Perdón", difficulty: "medium", example: "Perdón, no entiendo", exampleTranslation: "Entschuldigung, ich verstehe nicht" },
      { id: "gs_greet_10", german: "Gern geschehen", spanish: "De nada", difficulty: "medium", example: "De nada, es un placer", exampleTranslation: "Gern geschehen, es ist mir ein Vergnügen" },
      { id: "gs_greet_11", german: "Bis später", spanish: "Hasta luego", difficulty: "medium", example: "Hasta luego, nos vemos mañana", exampleTranslation: "Bis später, wir sehen uns morgen" },
      { id: "gs_greet_12", german: "Gute Nacht", spanish: "Buenas noches", difficulty: "medium", example: "Buenas noches, que duermas bien", exampleTranslation: "Gute Nacht, schlaf gut" },
      { id: "gs_greet_13", german: "Wie geht's?", spanish: "¿Cómo estás?", difficulty: "hard", example: "¿Cómo estás hoy?", exampleTranslation: "Wie geht es dir heute?" },
      { id: "gs_greet_14", german: "Freut mich", spanish: "Encantado", difficulty: "hard", example: "Encantado de conocerte, mi nombre es Juan y trabajo aquí en la ciudad desde hace muchos años", exampleTranslation: "Freut mich dich kennenzulernen, mein Name ist Juan und ich arbeite hier in der Stadt seit vielen Jahren" },
      { id: "gs_greet_15", german: "Willkommen", spanish: "Bienvenido", difficulty: "hard", example: "Bienvenido a nuestra casa, por favor siéntate y ponte cómodo mientras preparo algo de comer para todos nosotros", exampleTranslation: "Willkommen in unserem Haus, bitte setz dich und mach es dir bequem während ich etwas zu essen für uns alle vorbereite" }
    ]
  },

  family: {
    name: "Familie",
    description: "Familienmitglieder und Verwandtschaft",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "gs_fam_1", german: "Vater", spanish: "Padre", difficulty: "easy", example: "Mi padre trabaja mucho todos los días en la oficina del centro de la ciudad", exampleTranslation: "Mein Vater arbeitet jeden Tag viel im Büro im Stadtzentrum" },
      { id: "gs_fam_2", german: "Mutter", spanish: "Madre", difficulty: "easy", example: "Mi madre cocina muy bien y prepara deliciosas comidas para toda la familia cada domingo", exampleTranslation: "Meine Mutter kocht sehr gut und bereitet jeden Sonntag köstliche Mahlzeiten für die ganze Familie zu" },
      { id: "gs_fam_3", german: "Bruder", spanish: "Hermano", difficulty: "easy", example: "Tengo un hermano mayor que estudia medicina en la universidad y quiere ser doctor", exampleTranslation: "Ich habe einen älteren Bruder der Medizin an der Universität studiert und Arzt werden möchte" },
      { id: "gs_fam_4", german: "Schwester", spanish: "Hermana", difficulty: "easy", example: "Mi hermana menor es muy inteligente y siempre saca buenas notas en la escuela", exampleTranslation: "Meine jüngere Schwester ist sehr intelligent und bekommt immer gute Noten in der Schule" },
      { id: "gs_fam_5", german: "Sohn", spanish: "Hijo", difficulty: "easy", example: "Mi hijo tiene cinco años y le encanta jugar al fútbol en el parque con sus amigos", exampleTranslation: "Mein Sohn ist fünf Jahre alt und liebt es im Park mit seinen Freunden Fußball zu spielen" },
      { id: "gs_fam_6", german: "Tochter", spanish: "Hija", difficulty: "easy", example: "Mi hija estudia arte en la universidad y quiere ser pintora profesional en el futuro", exampleTranslation: "Meine Tochter studiert Kunst an der Universität und möchte in Zukunft professionelle Malerin werden" },
      { id: "gs_fam_7", german: "Großvater", spanish: "Abuelo", difficulty: "medium", example: "Mi abuelo tiene ochenta años y cuenta historias fascinantes sobre su juventud cuando era soldado", exampleTranslation: "Mein Großvater ist achtzig Jahre alt und erzählt faszinierende Geschichten über seine Jugend als er Soldat war" },
      { id: "gs_fam_8", german: "Großmutter", spanish: "Abuela", difficulty: "medium", example: "Mi abuela hace los mejores pasteles del mundo y siempre nos recibe con mucho amor", exampleTranslation: "Meine Großmutter macht die besten Kuchen der Welt und empfängt uns immer mit viel Liebe" },
      { id: "gs_fam_9", german: "Onkel", spanish: "Tío", difficulty: "medium", example: "Mi tío vive en otra ciudad pero nos visita frecuentemente durante las vacaciones de verano", exampleTranslation: "Mein Onkel wohnt in einer anderen Stadt aber besucht uns häufig während der Sommerferien" },
      { id: "gs_fam_10", german: "Tante", spanish: "Tía", difficulty: "medium", example: "Mi tía es muy amable y generosa siempre trayendo regalos cuando viene a visitarnos", exampleTranslation: "Meine Tante ist sehr freundlich und großzügig und bringt immer Geschenke mit wenn sie uns besucht" },
      { id: "gs_fam_11", german: "Cousin", spanish: "Primo", difficulty: "medium", example: "Mi primo y yo crecimos juntos y compartimos muchos recuerdos maravillosos de nuestra infancia", exampleTranslation: "Mein Cousin und ich sind zusammen aufgewachsen und teilen viele wunderbare Erinnerungen aus unserer Kindheit" },
      { id: "gs_fam_12", german: "Ehemann", spanish: "Esposo", difficulty: "medium", example: "Mi esposo trabaja como ingeniero y es muy dedicado a su profesión y a nuestra familia", exampleTranslation: "Mein Ehemann arbeitet als Ingenieur und ist sehr seiner Profession und unserer Familie gewidmet" },
      { id: "gs_fam_13", german: "Ehefrau", spanish: "Esposa", difficulty: "hard", example: "Mi esposa es doctora y ayuda a muchas personas todos los días en el hospital trabajando largas horas", exampleTranslation: "Meine Ehefrau ist Ärztin und hilft jeden Tag vielen Menschen im Krankenhaus und arbeitet lange Stunden" },
      { id: "gs_fam_14", german: "Eltern", spanish: "Padres", difficulty: "hard", example: "Mis padres se conocieron en la universidad hace treinta años y desde entonces han estado juntos felizmente", exampleTranslation: "Meine Eltern haben sich vor dreißig Jahren an der Universität kennengelernt und sind seitdem glücklich zusammen" },
      { id: "gs_fam_15", german: "Geschwister", spanish: "Hermanos", difficulty: "hard", example: "Tengo tres hermanos y todos vivimos cerca unos de otros para poder reunirnos frecuentemente en familia", exampleTranslation: "Ich habe drei Geschwister und wir alle wohnen nah beieinander damit wir uns häufig als Familie treffen können" }
    ]
  },

  numbers: {
    name: "Zahlen",
    description: "Grundzahlen und Mengenangaben",
    icon: Hash,
    color: "from-yellow-400 to-orange-500",
    level: "beginner",
    words: [
      { id: "gs_num_1", german: "Eins", spanish: "Uno", difficulty: "easy", example: "Tengo un hermano que vive conmigo en la misma casa desde que éramos niños", exampleTranslation: "Ich habe einen Bruder der mit mir im selben Haus wohnt seit wir Kinder waren" },
      { id: "gs_num_2", german: "Zwei", spanish: "Dos", difficulty: "easy", example: "Hay dos gatos en mi casa y ambos son muy juguetones y cariñosos con toda la familia", exampleTranslation: "Es gibt zwei Katzen in meinem Haus und beide sind sehr verspielt und liebevoll zur ganzen Familie" },
      { id: "gs_num_3", german: "Drei", spanish: "Tres", difficulty: "easy", example: "Compré tres libros interesantes en la librería del centro que quiero leer este mes", exampleTranslation: "Ich habe drei interessante Bücher in der Buchhandlung im Zentrum gekauft die ich diesen Monat lesen möchte" },
      { id: "gs_num_4", german: "Vier", spanish: "Cuatro", difficulty: "easy", example: "Somos cuatro personas en mi familia y todos vivimos juntos en una casa grande", exampleTranslation: "Wir sind vier Personen in meiner Familie und wir alle wohnen zusammen in einem großen Haus" },
      { id: "gs_num_5", german: "Fünf", spanish: "Cinco", difficulty: "easy", example: "Trabajo cinco días a la semana de lunes a viernes en una empresa internacional", exampleTranslation: "Ich arbeite fünf Tage die Woche von Montag bis Freitag in einem internationalen Unternehmen" },
      { id: "gs_num_6", german: "Sechs", spanish: "Seis", difficulty: "easy", example: "He vivido en esta ciudad durante seis meses y ya me siento como en casa aquí", exampleTranslation: "Ich habe sechs Monate in dieser Stadt gewohnt und fühle mich hier schon wie zuhause" },
      { id: "gs_num_7", german: "Sieben", spanish: "Siete", difficulty: "medium", example: "Tengo siete años de experiencia trabajando como ingeniero de software en varias empresas tecnológicas", exampleTranslation: "Ich habe sieben Jahre Erfahrung als Software-Ingenieur in verschiedenen Technologieunternehmen" },
      { id: "gs_num_8", german: "Acht", spanish: "Ocho", difficulty: "medium", example: "Mi jornada laboral es de ocho horas diarias desde las nueve de la mañana hasta las cinco", exampleTranslation: "Mein Arbeitstag dauert acht Stunden täglich von neun Uhr morgens bis fünf Uhr" },
      { id: "gs_num_9", german: "Neun", spanish: "Nueve", difficulty: "medium", example: "En nuestra clase hay nueve estudiantes muy talentosos que siempre participan activamente en las lecciones", exampleTranslation: "In unserer Klasse gibt es neun sehr talentierte Schüler die immer aktiv am Unterricht teilnehmen" },
      { id: "gs_num_10", german: "Zehn", spanish: "Diez", difficulty: "medium", example: "Esta camisa cuesta diez euros y está en oferta especial solo por esta semana", exampleTranslation: "Dieses Hemd kostet zehn Euro und ist nur diese Woche im Sonderangebot" },
      { id: "gs_num_11", german: "Zwanzig", spanish: "Veinte", difficulty: "medium", example: "Tengo veinte años y estudio ingeniería en la universidad técnica de mi ciudad natal", exampleTranslation: "Ich bin zwanzig Jahre alt und studiere Ingenieurwesen an der technischen Universität meiner Heimatstadt" },
      { id: "gs_num_12", german: "Hundert", spanish: "Cien", difficulty: "medium", example: "Este libro tiene más de cien páginas llenas de información interesante y útil para estudiantes", exampleTranslation: "Dieses Buch hat über hundert Seiten voller interessanter und nützlicher Informationen für Studenten" },
      { id: "gs_num_13", german: "Wie viele?", spanish: "¿Cuántos?", difficulty: "hard", example: "¿Cuántos hermanos tienes en tu familia? Yo tengo dos hermanos y una hermana que viven cerca", exampleTranslation: "Wie viele Geschwister hast du in deiner Familie? Ich habe zwei Brüder und eine Schwester die in der Nähe wohnen" },
      { id: "gs_num_14", german: "Viele", spanish: "Muchos", difficulty: "hard", example: "Tengo muchos libros en mi biblioteca personal porque me encanta leer y coleccionar libros interesantes", exampleTranslation: "Ich habe viele Bücher in meiner persönlichen Bibliothek weil ich es liebe zu lesen und interessante Bücher zu sammeln" },
      { id: "gs_num_15", german: "Wenige", spanish: "Pocos", difficulty: "hard", example: "Hay pocos estudiantes en esta clase avanzada porque el material es muy difícil y requiere mucho trabajo", exampleTranslation: "Es gibt wenige Schüler in dieser fortgeschrittenen Klasse weil das Material sehr schwierig ist und viel Arbeit erfordert" }
    ]
  },

  colors: {
    name: "Farben",
    description: "Grundfarben und Farbbezeichnungen",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "gs_col_1", german: "Rot", spanish: "Rojo", difficulty: "easy", example: "El coche deportivo es rojo brillante y llama mucha atención cuando pasa por la calle", exampleTranslation: "Das Sportauto ist leuchtend rot und erregt viel Aufmerksamkeit wenn es die Straße entlangfährt" },
      { id: "gs_col_2", german: "Blau", spanish: "Azul", difficulty: "easy", example: "El cielo está completamente azul hoy sin ninguna nube y hace un día perfecto", exampleTranslation: "Der Himmel ist heute komplett blau ohne jede Wolke und es ist ein perfekter Tag" },
      { id: "gs_col_3", german: "Grün", spanish: "Verde", difficulty: "easy", example: "La hierba del parque es verde y fresca después de la lluvia de anoche", exampleTranslation: "Das Gras im Park ist grün und frisch nach dem Regen gestern Nacht" },
      { id: "gs_col_4", german: "Gelb", spanish: "Amarillo", difficulty: "easy", example: "El sol amarillo brilla intensamente en el cielo creando un día cálido y hermoso", exampleTranslation: "Die gelbe Sonne scheint intensiv am Himmel und erschafft einen warmen und schönen Tag" },
      { id: "gs_col_5", german: "Schwarz", spanish: "Negro", difficulty: "easy", example: "Mi gato es completamente negro con ojos verdes brillantes que resplandecen en la oscuridad", exampleTranslation: "Meine Katze ist komplett schwarz mit leuchtend grünen Augen die in der Dunkelheit glänzen" },
      { id: "gs_col_6", german: "Weiß", spanish: "Blanco", difficulty: "easy", example: "La nieve es blanca y pura cubriendo todo el paisaje durante el invierno frío", exampleTranslation: "Der Schnee ist weiß und rein und bedeckt die ganze Landschaft während des kalten Winters" },
      { id: "gs_col_7", german: "Orange", spanish: "Naranja", difficulty: "medium", example: "La naranja madura tiene un color naranja intenso y un sabor dulce y refrescante", exampleTranslation: "Die reife Orange hat eine intensive orange Farbe und einen süßen und erfrischenden Geschmack" },
      { id: "gs_col_8", german: "Rosa", spanish: "Rosa", difficulty: "medium", example: "La flor rosa en el jardín es hermosa y tiene un aroma delicado que perfuma el aire", exampleTranslation: "Die rosa Blume im Garten ist schön und hat ein zartes Aroma das die Luft parfümiert" },
      { id: "gs_col_9", german: "Braun", spanish: "Marrón", difficulty: "medium", example: "El oso pardo grande y marrón camina lentamente por el bosque buscando comida para el invierno", exampleTranslation: "Der große braune Bär läuft langsam durch den Wald und sucht Nahrung für den Winter" },
      { id: "gs_col_10", german: "Grau", spanish: "Gris", difficulty: "medium", example: "El elefante gris es enorme y majestuoso viviendo en la sabana africana con su manada", exampleTranslation: "Der graue Elefant ist riesig und majestätisch und lebt in der afrikanischen Savanne mit seiner Herde" },
      { id: "gs_col_11", german: "Lila", spanish: "Morado", difficulty: "medium", example: "Mi color favorito es el morado porque me recuerda a las hermosas flores de lavanda", exampleTranslation: "Meine Lieblingsfarbe ist lila weil sie mich an die schönen Lavendelblumen erinnert" },
      { id: "gs_col_12", german: "Gold", spanish: "Dorado", difficulty: "medium", example: "El anillo dorado brillante es un regalo muy especial que recibí de mi abuela", exampleTranslation: "Der glänzende goldene Ring ist ein sehr besonderes Geschenk das ich von meiner Großmutter bekommen habe" },
      { id: "gs_col_13", german: "Welche Farbe?", spanish: "¿Qué color?", difficulty: "hard", example: "¿Qué color prefieres para pintar las paredes de tu habitación? Yo prefiero colores claros y relajantes", exampleTranslation: "Welche Farbe bevorzugst du um die Wände deines Zimmers zu streichen? Ich bevorzuge helle und entspannende Farben" },
      { id: "gs_col_14", german: "Bunt", spanish: "Colorido", difficulty: "hard", example: "El mercado es muy colorido con frutas y verduras de todos los colores del arcoíris", exampleTranslation: "Der Markt ist sehr bunt mit Obst und Gemüse in allen Farben des Regenbogens" },
      { id: "gs_col_15", german: "Dunkel", spanish: "Oscuro", difficulty: "hard", example: "Prefiero ropa de colores oscuros porque es más elegante y combina bien con todo mi guardarropa", exampleTranslation: "Ich bevorzuge Kleidung in dunklen Farben weil sie eleganter ist und gut zu meiner ganzen Garderobe passt" }
    ]
  },

  food: {
    name: "Essen und Trinken",
    description: "Grundnahrungsmittel und Getränke",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "gs_food_1", german: "Brot", spanish: "Pan", difficulty: "easy", example: "El pan fresco recién horneado huele delicioso y es perfecto para el desayuno de la mañana", exampleTranslation: "Das frisch gebackene Brot riecht köstlich und ist perfekt für das Frühstück am Morgen" },
      { id: "gs_food_2", german: "Wasser", spanish: "Agua", difficulty: "easy", example: "Un vaso de agua fría por favor porque tengo mucha sed después de correr en el parque", exampleTranslation: "Ein Glas kaltes Wasser bitte weil ich sehr durstig bin nach dem Laufen im Park" },
      { id: "gs_food_3", german: "Milch", spanish: "Leche", difficulty: "easy", example: "Bebo leche fresca todas las mañanas con mis cereales para empezar el día con energía", exampleTranslation: "Ich trinke jeden Morgen frische Milch mit meinem Müsli um den Tag mit Energie zu beginnen" },
      { id: "gs_food_4", german: "Käse", spanish: "Queso", difficulty: "easy", example: "Me encanta el queso suizo porque tiene un sabor único y delicioso que combina con todo", exampleTranslation: "Ich liebe Schweizer Käse weil er einen einzigartigen und köstlichen Geschmack hat der zu allem passt" },
      { id: "gs_food_5", german: "Fleisch", spanish: "Carne", difficulty: "easy", example: "Como carne asada los domingos cuando toda la familia se reúne para almorzar juntos", exampleTranslation: "Ich esse sonntags gegrilltes Fleisch wenn die ganze Familie sich zum gemeinsamen Mittagessen trifft" },
      { id: "gs_food_6", german: "Fisch", spanish: "Pescado", difficulty: "easy", example: "El pescado fresco del mercado es muy saludable y rico en omega tres para la salud", exampleTranslation: "Der frische Fisch vom Markt ist sehr gesund und reich an Omega drei für die Gesundheit" },
      { id: "gs_food_7", german: "Obst", spanish: "Fruta", difficulty: "medium", example: "La fruta fresca es muy saludable y debemos comer al menos cinco porciones diferentes cada día", exampleTranslation: "Frisches Obst ist sehr gesund und wir sollten mindestens fünf verschiedene Portionen jeden Tag essen" },
      { id: "gs_food_8", german: "Gemüse", spanish: "Verdura", difficulty: "medium", example: "Como verduras frescas todos los días porque son nutritivas y me ayudan a mantenerme saludable", exampleTranslation: "Ich esse jeden Tag frisches Gemüse weil es nahrhaft ist und mir hilft gesund zu bleiben" },
      { id: "gs_food_9", german: "Reis", spanish: "Arroz", difficulty: "medium", example: "El arroz blanco es un acompañamiento perfecto para muchos platos principales en la cocina asiática", exampleTranslation: "Weißer Reis ist eine perfekte Beilage für viele Hauptgerichte in der asiatischen Küche" },
      { id: "gs_food_10", german: "Ei", spanish: "Huevo", difficulty: "medium", example: "Como huevos revueltos en el desayuno porque son deliciosos y me dan mucha energía", exampleTranslation: "Ich esse Rühreier zum Frühstück weil sie köstlich sind und mir viel Energie geben" },
      { id: "gs_food_11", german: "Kaffee", spanish: "Café", difficulty: "medium", example: "Necesito tomar café todas las mañanas para despertarme y empezar el día con energía", exampleTranslation: "Ich muss jeden Morgen Kaffee trinken um aufzuwachen und den Tag mit Energie zu beginnen" },
      { id: "gs_food_12", german: "Tee", spanish: "Té", difficulty: "medium", example: "Prefiero el té verde caliente por las tardes porque me relaja después de un día de trabajo", exampleTranslation: "Ich bevorzuge warmen grünen Tee am Nachmittag weil er mich nach einem Arbeitstag entspannt" },
      { id: "gs_food_13", german: "Ich habe Hunger", spanish: "Tengo hambre", difficulty: "hard", example: "Tengo mucha hambre porque no he comido nada desde esta mañana temprano! Vamos a comer algo ahora!", exampleTranslation: "Ich habe großen Hunger weil ich seit heute früh nichts gegessen habe! Lass uns jetzt etwas essen!" },
      { id: "gs_food_14", german: "Das schmeckt gut", spanish: "Esto sabe bien", difficulty: "hard", example: "Esto sabe muy bien! La comida que preparaste está deliciosa y me encanta! Eres un excelente cocinero!", exampleTranslation: "Das schmeckt sehr gut! Das Essen das du zubereitet hast ist köstlich und ich liebe es! Du bist ein exzellenter Koch!" },
      { id: "gs_food_15", german: "Mahlzeit", spanish: "Comida", difficulty: "hard", example: "La comida más importante del día es el desayuno porque nos da la energía necesaria para todo el día", exampleTranslation: "Die wichtigste Mahlzeit des Tages ist das Frühstück weil es uns die nötige Energie für den ganzen Tag gibt" }
    ]
  },

  house: {
    name: "Haus und Wohnung",
    description: "Haushaltsgegenstände und Räume",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "gs_house_1", german: "Haus", spanish: "Casa", difficulty: "easy", example: "Mi casa es grande y tiene un jardín hermoso donde jugamos con los niños", exampleTranslation: "Mein Haus ist groß und hat einen schönen Garten wo wir mit den Kindern spielen" },
      { id: "gs_house_2", german: "Zimmer", spanish: "Habitación", difficulty: "easy", example: "La habitación está muy limpia y ordenada porque acabo de limpiarla esta mañana", exampleTranslation: "Das Zimmer ist sehr sauber und ordentlich weil ich es heute Morgen gerade gereinigt habe" },
      { id: "gs_house_3", german: "Küche", spanish: "Cocina", difficulty: "easy", example: "Cocino en la cocina moderna que tiene todos los electrodomésticos necesarios para preparar comidas", exampleTranslation: "Ich koche in der modernen Küche die alle notwendigen Geräte hat um Mahlzeiten zuzubereiten" },
      { id: "gs_house_4", german: "Bad", spanish: "Baño", difficulty: "easy", example: "El baño es moderno con una ducha grande y azulejos blancos muy elegantes", exampleTranslation: "Das Bad ist modern mit einer großen Dusche und sehr eleganten weißen Fliesen" },
      { id: "gs_house_5", german: "Tür", spanish: "Puerta", difficulty: "easy", example: "Por favor cierra la puerta cuando salgas para que no entre el frío del exterior", exampleTranslation: "Bitte schließ die Tür wenn du hinausgehst damit die Kälte von draußen nicht hereinkommt" },
      { id: "gs_house_6", german: "Fenster", spanish: "Ventana", difficulty: "easy", example: "Abre la ventana grande para que entre aire fresco y luz natural a la habitación", exampleTranslation: "Öffne das große Fenster damit frische Luft und natürliches Licht in den Raum kommen" },
      { id: "gs_house_7", german: "Tisch", spanish: "Mesa", difficulty: "medium", example: "La mesa del comedor es de madera maciza y puede acomodar a ocho personas cómodamente", exampleTranslation: "Der Esstisch ist aus massivem Holz und kann bequem acht Personen Platz bieten" },
      { id: "gs_house_8", german: "Stuhl", spanish: "Silla", difficulty: "medium", example: "Siéntate en la silla cómoda mientras te traigo algo de beber y comer", exampleTranslation: "Setz dich auf den bequemen Stuhl während ich dir etwas zu trinken und essen bringe" },
      { id: "gs_house_9", german: "Bett", spanish: "Cama", difficulty: "medium", example: "La cama nueva es muy cómoda con un colchón suave que me ayuda a dormir profundamente", exampleTranslation: "Das neue Bett ist sehr bequem mit einer weichen Matratze die mir hilft tief zu schlafen" },
      { id: "gs_house_10", german: "Sofa", spanish: "Sofá", difficulty: "medium", example: "El sofá de cuero marrón en la sala es perfecto para relajarse viendo televisión", exampleTranslation: "Das braune Ledersofa im Wohnzimmer ist perfekt zum Entspannen beim Fernsehen" },
      { id: "gs_house_11", german: "Lampe", spanish: "Lámpara", difficulty: "medium", example: "Necesito encender la lámpara porque está oscureciendo y no puedo leer bien sin luz", exampleTranslation: "Ich muss die Lampe einschalten weil es dunkel wird und ich ohne Licht nicht gut lesen kann" },
      { id: "gs_house_12", german: "Teppich", spanish: "Alfombra", difficulty: "medium", example: "La alfombra persa en el salón es antigua y valiosa heredada de mis abuelos", exampleTranslation: "Der persische Teppich im Wohnzimmer ist alt und wertvoll von meinen Großeltern geerbt" },
      { id: "gs_house_13", german: "Wo ist das Badezimmer?", spanish: "¿Dónde está el baño?", difficulty: "hard", example: "Disculpe, ¿dónde está el baño? Es la primera vez que visito esta casa y no conozco bien", exampleTranslation: "Entschuldigung, wo ist das Badezimmer? Es ist das erste Mal dass ich dieses Haus besuche und ich kenne mich nicht gut aus" },
      { id: "gs_house_14", german: "Mein Zuhause", spanish: "Mi hogar", difficulty: "hard", example: "Mi hogar es donde me siento más cómodo y feliz rodeado de mi familia y mis cosas favoritas", exampleTranslation: "Mein Zuhause ist wo ich mich am wohlsten und glücklichsten fühle umgeben von meiner Familie und meinen Lieblingssachen" },
      { id: "gs_house_15", german: "Aufräumen", spanish: "Limpiar", difficulty: "hard", example: "Necesito limpiar y ordenar toda la casa este fin de semana porque viene mi familia a visitarme", exampleTranslation: "Ich muss dieses Wochenende das ganze Haus putzen und aufräumen weil meine Familie mich besuchen kommt" }
    ]
  },

  places: {
    name: "Orte und Standorte",
    description: "Wichtige Orte in der Stadt",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "gs_place_1", german: "Geschäft", spanish: "Tienda", difficulty: "easy", example: "La tienda de ropa está abierta hasta las ocho de la noche todos los días", exampleTranslation: "Das Bekleidungsgeschäft ist jeden Tag bis acht Uhr abends geöffnet" },
      { id: "gs_place_2", german: "Schule", spanish: "Escuela", difficulty: "easy", example: "Voy a la escuela primaria todas las mañanas para enseñar matemáticas a los niños", exampleTranslation: "Ich gehe jeden Morgen zur Grundschule um Kindern Mathematik beizubringen" },
      { id: "gs_place_3", german: "Krankenhaus", spanish: "Hospital", difficulty: "easy", example: "El hospital moderno es muy grande y tiene los mejores doctores de toda la región", exampleTranslation: "Das moderne Krankenhaus ist sehr groß und hat die besten Ärzte der ganzen Region" },
      { id: "gs_place_4", german: "Park", spanish: "Parque", difficulty: "easy", example: "Me gusta jugar en el parque con mis hijos todos los fines de semana cuando hace buen tiempo", exampleTranslation: "Ich spiele gerne im Park mit meinen Kindern jedes Wochenende wenn das Wetter gut ist" },
      { id: "gs_place_5", german: "Restaurant", spanish: "Restaurante", difficulty: "easy", example: "Comemos en el restaurante italiano que sirve la mejor pasta de toda la ciudad", exampleTranslation: "Wir essen im italienischen Restaurant das die beste Pasta der ganzen Stadt serviert" },
      { id: "gs_place_6", german: "Bank", spanish: "Banco", difficulty: "easy", example: "Voy al banco central cada viernes para depositar mi salario mensual en mi cuenta", exampleTranslation: "Ich gehe jeden Freitag zur Zentralbank um mein monatliches Gehalt auf mein Konto einzuzahlen" },
      { id: "gs_place_7", german: "Hotel", spanish: "Hotel", difficulty: "medium", example: "Me alojo en un hotel de cinco estrellas muy lujoso en el centro de la ciudad", exampleTranslation: "Ich übernachte in einem sehr luxuriösen Fünf-Sterne-Hotel im Stadtzentrum" },
      { id: "gs_place_8", german: "Flughafen", spanish: "Aeropuerto", difficulty: "medium", example: "Estoy esperando en el aeropuerto internacional porque mi vuelo sale en dos horas", exampleTranslation: "Ich warte am internationalen Flughafen weil mein Flug in zwei Stunden abfliegt" },
      { id: "gs_place_9", german: "Strand", spanish: "Playa", difficulty: "medium", example: "Me encanta la playa hermosa con arena blanca y agua cristalina donde paso mis vacaciones", exampleTranslation: "Ich liebe den schönen Strand mit weißem Sand und kristallklarem Wasser wo ich meine Ferien verbringe" },
      { id: "gs_place_10", german: "Stadt", spanish: "Ciudad", difficulty: "medium", example: "La ciudad donde vivo es muy bonita con arquitectura histórica y calles encantadoras", exampleTranslation: "Die Stadt in der ich wohne ist sehr schön mit historischer Architektur und bezaubernden Straßen" },
      { id: "gs_place_11", german: "Supermarkt", spanish: "Supermercado", difficulty: "medium", example: "Voy al supermercado grande cada sábado para comprar alimentos frescos para toda la semana", exampleTranslation: "Ich gehe jeden Samstag zum großen Supermarkt um frische Lebensmittel für die ganze Woche zu kaufen" },
      { id: "gs_place_12", german: "Bibliothek", spanish: "Biblioteca", difficulty: "medium", example: "Estudio en la biblioteca pública todas las tardes porque es tranquila y tiene muchos libros", exampleTranslation: "Ich lerne jeden Nachmittag in der öffentlichen Bibliothek weil sie ruhig ist und viele Bücher hat" },
      { id: "gs_place_13", german: "Wo ist das?", spanish: "¿Dónde está?", difficulty: "hard", example: "Disculpe, ¿dónde está la estación de tren más cercana? Necesito llegar allí urgentemente ahora!", exampleTranslation: "Entschuldigung, wo ist der nächste Bahnhof? Ich muss dringend jetzt dorthin gelangen!" },
      { id: "gs_place_14", german: "In der Nähe", spanish: "Cerca", difficulty: "hard", example: "Vivo muy cerca del centro comercial así que puedo caminar allí en solo cinco minutos!", exampleTranslation: "Ich wohne ganz in der Nähe vom Einkaufszentrum also kann ich in nur fünf Minuten dorthin laufen!" },
      { id: "gs_place_15", german: "Wie komme ich?", spanish: "¿Cómo llego?", difficulty: "hard", example: "¿Cómo llego al museo de arte desde aquí? Es mi primera vez en esta ciudad!", exampleTranslation: "Wie komme ich von hier zum Kunstmuseum? Es ist mein erstes Mal in dieser Stadt!" }
    ]
  },

  clothing: {
    name: "Kleidung und Mode",
    description: "Kleidungsstücke und Accessoires",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "gs_cloth_1", german: "Hemd", spanish: "Camisa", difficulty: "easy", example: "Me gusta mucho tu camisa azul porque combina perfectamente con tus pantalones negros", exampleTranslation: "Ich mag dein blaues Hemd sehr weil es perfekt zu deiner schwarzen Hose passt" },
      { id: "gs_cloth_2", german: "Hose", spanish: "Pantalones", difficulty: "easy", example: "Necesito comprar pantalones nuevos porque los míos están viejos y gastados por el uso", exampleTranslation: "Ich muss neue Hosen kaufen weil meine alt und durch den Gebrauch abgenutzt sind" },
      { id: "gs_cloth_3", german: "Kleid", spanish: "Vestido", difficulty: "easy", example: "El vestido rojo elegante es perfecto para la fiesta de gala de esta noche", exampleTranslation: "Das elegante rote Kleid ist perfekt für die Gala-Party heute Abend" },
      { id: "gs_cloth_4", german: "Schuhe", spanish: "Zapatos", difficulty: "easy", example: "Mis zapatos de cuero son muy cómodos para caminar largas distancias por la ciudad", exampleTranslation: "Meine Lederschuhe sind sehr bequem um lange Strecken durch die Stadt zu laufen" },
      { id: "gs_cloth_5", german: "Jacke", spanish: "Chaqueta", difficulty: "easy", example: "Necesito ponerme una chaqueta abrigada porque hace mucho frío afuera esta mañana", exampleTranslation: "Ich muss eine warme Jacke anziehen weil es heute Morgen draußen sehr kalt ist" },
      { id: "gs_cloth_6", german: "Mantel", spanish: "Abrigo", difficulty: "easy", example: "El abrigo de lana es muy cálido y perfecto para el invierno frío y nevado", exampleTranslation: "Der Wollmantel ist sehr warm und perfekt für den kalten und schneereichen Winter" },
      { id: "gs_cloth_7", german: "Hut", spanish: "Sombrero", difficulty: "medium", example: "Me encanta tu sombrero elegante que te protege del sol fuerte durante el verano", exampleTranslation: "Ich liebe deinen eleganten Hut der dich vor der starken Sonne während des Sommers schützt" },
      { id: "gs_cloth_8", german: "Socken", spanish: "Calcetines", difficulty: "medium", example: "Necesito comprar calcetines gruesos de algodón para mantener mis pies calientes en invierno", exampleTranslation: "Ich muss dicke Baumwollsocken kaufen um meine Füße im Winter warm zu halten" },
      { id: "gs_cloth_9", german: "Handschuhe", spanish: "Guantes", difficulty: "medium", example: "Los guantes negros de cuero son elegantes y me protegen las manos del frío", exampleTranslation: "Die schwarzen Lederhandschuhe sind elegant und schützen meine Hände vor der Kälte" },
      { id: "gs_cloth_10", german: "Krawatte", spanish: "Corbata", difficulty: "medium", example: "Llevo corbata azul formal a la oficina todos los días porque es parte del código de vestimenta", exampleTranslation: "Ich trage jeden Tag eine formelle blaue Krawatte ins Büro weil sie Teil der Kleiderordnung ist" },
      { id: "gs_cloth_11", german: "Rock", spanish: "Falda", difficulty: "medium", example: "La falda larga y elegante es perfecta para ocasiones formales y eventos especiales", exampleTranslation: "Der lange und elegante Rock ist perfekt für formelle Anlässe und besondere Ereignisse" },
      { id: "gs_cloth_12", german: "Pullover", spanish: "Suéter", difficulty: "medium", example: "Mi suéter de lana rojo me mantiene muy abrigado durante los días fríos del invierno", exampleTranslation: "Mein roter Wollpullover hält mich während der kalten Wintertage sehr warm" },
      { id: "gs_cloth_13", german: "Das steht dir gut", spanish: "Te queda bien", difficulty: "hard", example: "Ese vestido te queda muy bien! El color azul resalta tus ojos y la talla es perfecta!", exampleTranslation: "Dieses Kleid steht dir sehr gut! Die blaue Farbe hebt deine Augen hervor und die Größe ist perfekt!" },
      { id: "gs_cloth_14", german: "Einkaufen gehen", spanish: "Ir de compras", difficulty: "hard", example: "Me encanta ir de compras al centro comercial los fines de semana para buscar ropa nueva y moderna!", exampleTranslation: "Ich liebe es am Wochenende ins Einkaufszentrum shoppen zu gehen um nach neuer und moderner Kleidung zu suchen!" },
      { id: "gs_cloth_15", german: "Anprobieren", spanish: "Probarse", difficulty: "hard", example: "Puedes probarte esta chaqueta en el probador para ver si te queda bien antes de comprarla!", exampleTranslation: "Du kannst diese Jacke in der Umkleidekabine anprobieren um zu sehen ob sie dir passt bevor du sie kaufst!" }
    ]
  },

  work: {
    name: "Arbeit und Beruf",
    description: "Berufe und Arbeitsplatz",
    icon: Briefcase,
    color: "from-slate-400 to-gray-500",
    level: "intermediate",
    words: [
      { id: "gs_work_1", german: "Arbeit", spanish: "Trabajo", difficulty: "easy", example: "Voy al trabajo temprano todas las mañanas en transporte público porque vivo lejos", exampleTranslation: "Ich gehe jeden Morgen früh zur Arbeit mit öffentlichen Verkehrsmitteln weil ich weit weg wohne" },
      { id: "gs_work_2", german: "Arzt", spanish: "Médico", difficulty: "easy", example: "Él es médico especialista y trabaja en el hospital más grande de la ciudad", exampleTranslation: "Er ist Facharzt und arbeitet im größten Krankenhaus der Stadt" },
      { id: "gs_work_3", german: "Lehrer", spanish: "Profesor", difficulty: "easy", example: "Soy profesor de matemáticas en una escuela secundaria y me encanta enseñar a los jóvenes", exampleTranslation: "Ich bin Mathematiklehrer an einer weiterführenden Schule und liebe es jungen Menschen zu unterrichten" },
      { id: "gs_work_4", german: "Ingenieur", spanish: "Ingeniero", difficulty: "easy", example: "Mi hermano mayor es ingeniero civil y diseña puentes y edificios importantes en todo el país", exampleTranslation: "Mein älterer Bruder ist Bauingenieur und entwirft wichtige Brücken und Gebäude im ganzen Land" },
      { id: "gs_work_5", german: "Krankenschwester", spanish: "Enfermera", difficulty: "easy", example: "Ella es enfermera dedicada y cuida a los pacientes con mucho cariño y profesionalismo", exampleTranslation: "Sie ist eine engagierte Krankenschwester und kümmert sich mit viel Zuneigung und Professionalität um die Patienten" },
      { id: "gs_work_6", german: "Polizist", spanish: "Policía", difficulty: "easy", example: "El policía valiente trabaja día y noche para mantener segura nuestra comunidad local", exampleTranslation: "Der mutige Polizist arbeitet Tag und Nacht um unsere lokale Gemeinschaft sicher zu halten" },
      { id: "gs_work_7", german: "Koch", spanish: "Cocinero", difficulty: "medium", example: "El cocinero profesional prepara comida exquisita en el restaurante cinco estrellas del hotel", exampleTranslation: "Der professionelle Koch bereitet exquisites Essen im Fünf-Sterne-Restaurant des Hotels zu" },
      { id: "gs_work_8", german: "Anwalt", spanish: "Abogado", difficulty: "medium", example: "Necesito consultar con un abogado experimentado sobre asuntos legales importantes de mi empresa", exampleTranslation: "Ich muss einen erfahrenen Anwalt über wichtige rechtliche Angelegenheiten meines Unternehmens konsultieren" },
      { id: "gs_work_9", german: "Verkäufer", spanish: "Vendedor", difficulty: "medium", example: "Él es vendedor exitoso de automóviles y gana muy bien vendiendo coches de lujo", exampleTranslation: "Er ist ein erfolgreicher Autoverkäufer und verdient sehr gut durch den Verkauf von Luxusautos" },
      { id: "gs_work_10", german: "Kellner", spanish: "Camarero", difficulty: "medium", example: "El camarero amable y servicial nos atiende muy bien en este restaurante elegante", exampleTranslation: "Der freundliche und hilfsbereite Kellner bedient uns sehr gut in diesem eleganten Restaurant" },
      { id: "gs_work_11", german: "Sekretär", spanish: "Secretario", difficulty: "medium", example: "La secretaria eficiente organiza todas las reuniones importantes del director ejecutivo de la compañía", exampleTranslation: "Die effiziente Sekretärin organisiert alle wichtigen Meetings des Geschäftsführers der Firma" },
      { id: "gs_work_12", german: "Buchhalter", spanish: "Contador", difficulty: "medium", example: "El contador experto maneja todas las finanzas de nuestra empresa familiar con mucha precisión", exampleTranslation: "Der erfahrene Buchhalter verwaltet alle Finanzen unseres Familienunternehmens mit großer Genauigkeit" },
      { id: "gs_work_13", german: "Ich arbeite als", spanish: "Trabajo como", difficulty: "hard", example: "Trabajo como arquitecto diseñando edificios modernos y funcionales para clientes de todo el mundo!", exampleTranslation: "Ich arbeite als Architekt und entwerfe moderne und funktionale Gebäude für Kunden aus der ganzen Welt!" },
      { id: "gs_work_14", german: "Mein Beruf", spanish: "Mi profesión", difficulty: "hard", example: "Mi profesión es muy gratificante porque puedo ayudar a las personas todos los días y marcar una diferencia!", exampleTranslation: "Mein Beruf ist sehr erfüllend weil ich jeden Tag Menschen helfen kann und einen Unterschied machen kann!" },
      { id: "gs_work_15", german: "Karriere", spanish: "Carrera", difficulty: "hard", example: "He construido una carrera exitosa en finanzas internacionales trabajando duro durante muchos años dedicados!", exampleTranslation: "Ich habe eine erfolgreiche Karriere im internationalen Finanzwesen aufgebaut durch harte Arbeit über viele engagierte Jahre!" }
    ]
  },

  transportation: {
    name: "Verkehrsmittel",
    description: "Transportmittel und Fortbewegung",
    icon: Car,
    color: "from-cyan-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "gs_trans_1", german: "Auto", spanish: "Coche", difficulty: "easy", example: "Tengo un coche nuevo muy rápido y moderno que compré el mes pasado", exampleTranslation: "Ich habe ein neues sehr schnelles und modernes Auto das ich letzten Monat gekauft habe" },
      { id: "gs_trans_2", german: "Bus", spanish: "Autobús", difficulty: "easy", example: "Voy en autobús al trabajo cada mañana porque es más económico que usar el coche", exampleTranslation: "Ich fahre jeden Morgen mit dem Bus zur Arbeit weil es wirtschaftlicher ist als das Auto zu benutzen" },
      { id: "gs_trans_3", german: "Zug", spanish: "Tren", difficulty: "easy", example: "El tren de alta velocidad es muy rápido y cómodo para viajar entre ciudades grandes", exampleTranslation: "Der Hochgeschwindigkeitszug ist sehr schnell und bequem um zwischen großen Städten zu reisen" },
      { id: "gs_trans_4", german: "Flugzeug", spanish: "Avión", difficulty: "easy", example: "Viajo en avión a España el próximo mes para visitar a mi familia durante las vacaciones", exampleTranslation: "Ich reise nächsten Monat mit dem Flugzeug nach Spanien um meine Familie während der Ferien zu besuchen" },
      { id: "gs_trans_5", german: "Fahrrad", spanish: "Bicicleta", difficulty: "easy", example: "Monto en bicicleta todos los fines de semana por el parque para hacer ejercicio y disfrutar", exampleTranslation: "Ich fahre jedes Wochenende Fahrrad durch den Park um Sport zu treiben und zu genießen" },
      { id: "gs_trans_6", german: "Motorrad", spanish: "Motocicleta", difficulty: "easy", example: "Mi primo tiene una motocicleta deportiva potente y le encanta conducirla por las carreteras", exampleTranslation: "Mein Cousin hat ein leistungsstarkes Sportmotorrad und liebt es auf den Straßen zu fahren" },
      { id: "gs_trans_7", german: "Taxi", spanish: "Taxi", difficulty: "medium", example: "Llamo un taxi amarillo para llegar al aeropuerto a tiempo para mi vuelo internacional", exampleTranslation: "Ich rufe ein gelbes Taxi um rechtzeitig für meinen internationalen Flug zum Flughafen zu kommen" },
      { id: "gs_trans_8", german: "U-Bahn", spanish: "Metro", difficulty: "medium", example: "Uso el metro subterráneo todos los días porque es rápido y evita el tráfico de la ciudad", exampleTranslation: "Ich benutze jeden Tag die U-Bahn weil sie schnell ist und den Stadtverkehr vermeidet" },
      { id: "gs_trans_9", german: "Boot", spanish: "Barco", difficulty: "medium", example: "Viajamos en barco grande por el río disfrutando del hermoso paisaje natural a nuestro alrededor", exampleTranslation: "Wir reisen mit einem großen Boot den Fluss entlang und genießen die schöne natürliche Landschaft um uns herum" },
      { id: "gs_trans_10", german: "Straßenbahn", spanish: "Tranvía", difficulty: "medium", example: "El tranvía histórico pasa por el centro antiguo de la ciudad llevando turistas y residentes", exampleTranslation: "Die historische Straßenbahn fährt durch die Altstadt und befördert Touristen und Einwohner" },
      { id: "gs_trans_11", german: "Hubschrauber", spanish: "Helicóptero", difficulty: "medium", example: "El helicóptero de rescate vuela sobre las montañas buscando personas perdidas que necesitan ayuda urgente", exampleTranslation: "Der Rettungshubschrauber fliegt über die Berge und sucht nach vermissten Personen die dringend Hilfe benötigen" },
      { id: "gs_trans_12", german: "Schiff", spanish: "Barco grande", difficulty: "medium", example: "El barco grande cruza el océano Atlántico transportando pasajeros y mercancías entre continentes", exampleTranslation: "Das große Schiff überquert den Atlantischen Ozean und transportiert Passagiere und Waren zwischen Kontinenten" },
      { id: "gs_trans_13", german: "Wie komme ich dahin?", spanish: "¿Cómo llego allí?", difficulty: "hard", example: "Disculpe, ¿cómo llego allí al museo de arte? Soy nuevo en esta ciudad y no conozco bien!", exampleTranslation: "Entschuldigung, wie komme ich dort zum Kunstmuseum? Ich bin neu in dieser Stadt und kenne mich nicht gut aus!" },
      { id: "gs_trans_14", german: "Verkehr", spanish: "Tráfico", difficulty: "hard", example: "Hay mucho tráfico pesado en las calles principales durante las horas pico de la mañana y tarde!", exampleTranslation: "Es gibt viel schweren Verkehr auf den Hauptstraßen während der Stoßzeiten morgens und abends!" },
      { id: "gs_trans_15", german: "Fahrkarte", spanish: "Billete", difficulty: "hard", example: "Necesito comprar un billete de ida y vuelta para el tren que sale mañana temprano a Madrid!", exampleTranslation: "Ich muss eine Hin- und Rückfahrkarte für den Zug kaufen der morgen früh nach Madrid fährt!" }
    ]
  },

  education: {
    name: "Bildung und Schule",
    description: "Schule, Lernen und Bildungseinrichtungen",
    icon: School,
    color: "from-indigo-500 to-purple-500",
    level: "intermediate",
    words: [
      { id: "gs_edu_1", german: "Schüler", spanish: "Estudiante", difficulty: "easy", example: "Soy estudiante universitario de ingeniería y estudio materias muy difíciles pero interesantes", exampleTranslation: "Ich bin Ingenieurstudent an der Universität und studiere sehr schwierige aber interessante Fächer" },
      { id: "gs_edu_2", german: "Lehrer", spanish: "Profesor", difficulty: "easy", example: "El profesor de historia enseña muy bien y hace las clases entretenidas y educativas", exampleTranslation: "Der Geschichtslehrer unterrichtet sehr gut und macht den Unterricht unterhaltsam und lehrreich" },
      { id: "gs_edu_3", german: "Buch", spanish: "Libro", difficulty: "easy", example: "Leo un libro fascinante sobre la historia antigua de civilizaciones mediterráneas perdidas", exampleTranslation: "Ich lese ein faszinierendes Buch über die antike Geschichte verlorener mediterraner Zivilisationen" },
      { id: "gs_edu_4", german: "Stift", spanish: "Bolígrafo", difficulty: "easy", example: "Necesito un bolígrafo azul para escribir notas importantes durante la conferencia de hoy", exampleTranslation: "Ich brauche einen blauen Stift um wichtige Notizen während der Konferenz heute zu schreiben" },
      { id: "gs_edu_5", german: "Heft", spanish: "Cuaderno", difficulty: "easy", example: "Escribo todas mis ideas creativas en el cuaderno personal que siempre llevo conmigo", exampleTranslation: "Ich schreibe alle meine kreativen Ideen in das persönliche Heft das ich immer bei mir trage" },
      { id: "gs_edu_6", german: "Tafel", spanish: "Pizarra", difficulty: "easy", example: "La pizarra está completamente limpia y lista para la próxima clase de matemáticas avanzadas", exampleTranslation: "Die Tafel ist komplett sauber und bereit für den nächsten fortgeschrittenen Mathematikunterricht" },
      { id: "gs_edu_7", german: "Prüfung", spanish: "Examen", difficulty: "medium", example: "Tengo un examen muy difícil mañana y necesito estudiar toda la noche para aprobar", exampleTranslation: "Ich habe morgen eine sehr schwierige Prüfung und muss die ganze Nacht lernen um zu bestehen" },
      { id: "gs_edu_8", german: "Hausaufgabe", spanish: "Tarea", difficulty: "medium", example: "Hago mi tarea escolar todas las tardes después de regresar de la escuela cansado", exampleTranslation: "Ich mache jeden Nachmittag meine Schulhausaufgaben nachdem ich müde von der Schule zurückgekommen bin" },
      { id: "gs_edu_9", german: "Klasse", spanish: "Clase", difficulty: "medium", example: "Voy a clase de español tres veces por semana para mejorar mi nivel de idioma", exampleTranslation: "Ich gehe dreimal pro Woche zum Spanischunterricht um mein Sprachniveau zu verbessern" },
      { id: "gs_edu_10", german: "Universität", spanish: "Universidad", difficulty: "medium", example: "Estudio medicina en la universidad prestigiosa y quiero especializarme en cardiología en el futuro", exampleTranslation: "Ich studiere Medizin an der renommierten Universität und möchte mich in Zukunft auf Kardiologie spezialisieren" },
      { id: "gs_edu_11", german: "Abschluss", spanish: "Título", difficulty: "medium", example: "Obtuve mi título universitario en economía después de cuatro años intensos de estudio y esfuerzo", exampleTranslation: "Ich habe meinen Universitätsabschluss in Wirtschaftswissenschaften nach vier intensiven Jahren des Studiums und der Anstrengung erhalten" },
      { id: "gs_edu_12", german: "Bibliothek", spanish: "Biblioteca", difficulty: "medium", example: "Paso muchas horas en la biblioteca universitaria estudiando y preparándome para los exámenes finales importantes", exampleTranslation: "Ich verbringe viele Stunden in der Universitätsbibliothek beim Lernen und bei der Vorbereitung auf wichtige Abschlussprüfungen" },
      { id: "gs_edu_13", german: "Ich lerne fleißig", spanish: "Estudio mucho", difficulty: "hard", example: "Estudio mucho todos los días porque quiero sacar excelentes calificaciones y graduarme con honores universitarios!", exampleTranslation: "Ich lerne jeden Tag fleißig weil ich ausgezeichnete Noten bekommen und mit Universitätsauszeichnungen abschließen möchte!" },
      { id: "gs_edu_14", german: "Schulbildung", spanish: "Educación", difficulty: "hard", example: "La educación de calidad es muy importante para el futuro y todos deberían tener acceso a ella!", exampleTranslation: "Qualitativ hochwertige Bildung ist sehr wichtig für die Zukunft und jeder sollte Zugang dazu haben!" },
      { id: "gs_edu_15", german: "Diplom", spanish: "Diploma", difficulty: "hard", example: "Recibí mi diploma de graduación con mucho orgullo después de completar exitosamente todos mis estudios superiores!", exampleTranslation: "Ich habe mein Abschlussdiplom mit großem Stolz erhalten nachdem ich erfolgreich all meine höheren Studien abgeschlossen habe!" }
    ]
  },

  nature: {
    name: "Natur und Umwelt",
    description: "Natürliche Landschaften und Umgebung",
    icon: TreePine,
    color: "from-teal-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "gs_nature_1", german: "Baum", spanish: "Árbol", difficulty: "easy", example: "El árbol viejo y alto en el parque da mucha sombra durante los días calurosos", exampleTranslation: "Der alte und hohe Baum im Park spendet während der heißen Tage viel Schatten" },
      { id: "gs_nature_2", german: "Blume", spanish: "Flor", difficulty: "easy", example: "La flor rosa hermosa tiene un aroma dulce que perfuma todo el jardín maravillosamente", exampleTranslation: "Die schöne rosa Blume hat ein süßes Aroma das den ganzen Garten wunderbar parfümiert" },
      { id: "gs_nature_3", german: "Berg", spanish: "Montaña", difficulty: "easy", example: "La montaña nevada es muy alta y ofrece vistas espectaculares de todo el valle verde", exampleTranslation: "Der schneebedeckte Berg ist sehr hoch und bietet spektakuläre Ausblicke auf das ganze grüne Tal" },
      { id: "gs_nature_4", german: "Fluss", spanish: "Río", difficulty: "easy", example: "El río cristalino es muy largo y fluye suavemente a través del bosque denso", exampleTranslation: "Der kristallklare Fluss ist sehr lang und fließt sanft durch den dichten Wald" },
      { id: "gs_nature_5", german: "See", spanish: "Lago", difficulty: "easy", example: "El lago tranquilo y profundo está rodeado de árboles verdes y montañas majestuosas", exampleTranslation: "Der ruhige und tiefe See ist von grünen Bäumen und majestätischen Bergen umgeben" },
      { id: "gs_nature_6", german: "Wald", spanish: "Bosque", difficulty: "easy", example: "El bosque oscuro y denso es el hogar de muchos animales salvajes y plantas exóticas", exampleTranslation: "Der dunkle und dichte Wald ist die Heimat vieler wilder Tiere und exotischer Pflanzen" },
      { id: "gs_nature_7", german: "Stein", spanish: "Piedra", difficulty: "medium", example: "La piedra grande y dura es perfecta para construir muros resistentes y duraderos", exampleTranslation: "Der große und harte Stein ist perfekt um widerstandsfähige und langlebige Mauern zu bauen" },
      { id: "gs_nature_8", german: "Sand", spanish: "Arena", difficulty: "medium", example: "La arena blanca y suave de la playa es perfecta para caminar descalzo disfrutando", exampleTranslation: "Der weiße und weiche Sand am Strand ist perfekt um barfuß spazieren zu gehen und zu genießen" },
      { id: "gs_nature_9", german: "Meer", spanish: "Mar", difficulty: "medium", example: "Me encanta el mar azul profundo con sus olas grandes y el sonido relajante del agua", exampleTranslation: "Ich liebe das tiefblaue Meer mit seinen großen Wellen und dem entspannenden Klang des Wassers" },
      { id: "gs_nature_10", german: "Himmel", spanish: "Cielo", difficulty: "medium", example: "El cielo nocturno está lleno de estrellas brillantes que iluminan la oscuridad bellamente", exampleTranslation: "Der Nachthimmel ist voller leuchtender Sterne die die Dunkelheit wunderschön erleuchten" },
      { id: "gs_nature_11", german: "Wiese", spanish: "Pradera", difficulty: "medium", example: "La pradera verde y extensa está cubierta de flores silvestres coloridas durante la primavera", exampleTranslation: "Die grüne und weitläufige Wiese ist während des Frühlings mit bunten Wildblumen bedeckt" },
      { id: "gs_nature_12", german: "Insel", spanish: "Isla", difficulty: "medium", example: "La isla tropical paradisíaca está rodeada de agua cristalina y playas de arena blanca", exampleTranslation: "Die paradiesische tropische Insel ist von kristallklarem Wasser und weißen Sandstränden umgeben" },
      { id: "gs_nature_13", german: "Naturschutz", spanish: "Conservación", difficulty: "hard", example: "La conservación de la naturaleza es muy importante para proteger el medio ambiente para futuras generaciones!", exampleTranslation: "Der Naturschutz ist sehr wichtig um die Umwelt für zukünftige Generationen zu schützen!" },
      { id: "gs_nature_14", german: "Wandern", spanish: "Senderismo", difficulty: "hard", example: "Me encanta hacer senderismo en las montañas cada verano disfrutando de la naturaleza pura y el aire fresco!", exampleTranslation: "Ich liebe es jeden Sommer in den Bergen zu wandern und die pure Natur und die frische Luft zu genießen!" },
      { id: "gs_nature_15", german: "Umwelt", spanish: "Medio ambiente", difficulty: "hard", example: "Debemos cuidar el medio ambiente reciclando y reduciendo nuestra huella de carbono para proteger el planeta!", exampleTranslation: "Wir müssen die Umwelt schützen indem wir recyceln und unseren CO2-Fußabdruck reduzieren um den Planeten zu schützen!" }
    ]
  },

  emotions: {
    name: "Gefühle und Emotionen",
    description: "Emotionale Zustände und Stimmungen",
    icon: Heart,
    color: "from-rose-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "gs_emo_1", german: "Glücklich", spanish: "Feliz", difficulty: "easy", example: "Estoy muy feliz hoy porque recibí buenas noticias de mi familia que vive lejos", exampleTranslation: "Ich bin heute sehr glücklich weil ich gute Nachrichten von meiner Familie bekommen habe die weit weg wohnt" },
      { id: "gs_emo_2", german: "Traurig", spanish: "Triste", difficulty: "easy", example: "Él está muy triste porque su mejor amigo se mudó a otra ciudad el mes pasado", exampleTranslation: "Er ist sehr traurig weil sein bester Freund letzten Monat in eine andere Stadt gezogen ist" },
      { id: "gs_emo_3", german: "Wütend", spanish: "Enojado", difficulty: "easy", example: "Estoy enojado porque alguien dañó mi coche en el estacionamiento sin dejar una nota", exampleTranslation: "Ich bin wütend weil jemand mein Auto auf dem Parkplatz beschädigt hat ohne eine Notiz zu hinterlassen" },
      { id: "gs_emo_4", german: "Aufgeregt", spanish: "Emocionado", difficulty: "easy", example: "Estoy muy emocionado por el viaje a España que haré el próximo verano con amigos", exampleTranslation: "Ich bin sehr aufgeregt wegen der Reise nach Spanien die ich nächsten Sommer mit Freunden machen werde" },
      { id: "gs_emo_5", german: "Nervös", spanish: "Nervioso", difficulty: "easy", example: "Me siento nervioso antes de la entrevista importante de trabajo que tengo mañana temprano", exampleTranslation: "Ich fühle mich nervös vor dem wichtigen Vorstellungsgespräch das ich morgen früh habe" },
      { id: "gs_emo_6", german: "Überrascht", spanish: "Sorprendido", difficulty: "easy", example: "Estoy muy sorprendido por la fiesta sorpresa que organizaron mis amigos para mi cumpleaños", exampleTranslation: "Ich bin sehr überrascht von der Überraschungsparty die meine Freunde für meinen Geburtstag organisiert haben" },
      { id: "gs_emo_7", german: "Müde", spanish: "Cansado", difficulty: "medium", example: "Estoy muy cansado después de trabajar doce horas seguidas sin descanso en la oficina", exampleTranslation: "Ich bin sehr müde nach zwölf Stunden Arbeit am Stück ohne Pause im Büro" },
      { id: "gs_emo_8", german: "Hungrig", spanish: "Hambriento", difficulty: "medium", example: "Tengo mucha hambre porque no he comido nada desde el desayuno temprano de esta mañana", exampleTranslation: "Ich habe großen Hunger weil ich seit dem frühen Frühstück heute Morgen nichts gegessen habe" },
      { id: "gs_emo_9", german: "Durstig", spanish: "Sediento", difficulty: "medium", example: "Tengo mucha sed después de correr cinco kilómetros bajo el sol caliente del verano", exampleTranslation: "Ich habe großen Durst nach dem Laufen von fünf Kilometern unter der heißen Sommersonne" },
      { id: "gs_emo_10", german: "Gelangweilt", spanish: "Aburrido", difficulty: "medium", example: "Estoy aburrido en casa porque no tengo nada interesante que hacer este fin de semana", exampleTranslation: "Ich bin zuhause gelangweilt weil ich dieses Wochenende nichts Interessantes zu tun habe" },
      { id: "gs_emo_11", german: "Stolz", spanish: "Orgulloso", difficulty: "medium", example: "Estoy muy orgulloso de mi hija porque se graduó con honores de la universidad este año", exampleTranslation: "Ich bin sehr stolz auf meine Tochter weil sie dieses Jahr mit Auszeichnung von der Universität abgeschlossen hat" },
      { id: "gs_emo_12", german: "Ängstlich", spanish: "Asustado", difficulty: "medium", example: "El niño pequeño está asustado de la oscuridad y duerme con una luz encendida", exampleTranslation: "Der kleine Junge hat Angst vor der Dunkelheit und schläft mit einem Licht an" },
      { id: "gs_emo_13", german: "Wie fühlst du dich?", spanish: "¿Cómo te sientes?", difficulty: "hard", example: "¿Cómo te sientes hoy después de la operación? Espero que estés recuperándote bien y sin dolor!", exampleTranslation: "Wie fühlst du dich heute nach der Operation? Ich hoffe du erholst dich gut und ohne Schmerzen!" },
      { id: "gs_emo_14", german: "Ich bin begeistert", spanish: "Estoy entusiasmado", difficulty: "hard", example: "Estoy muy entusiasmado con mi nuevo trabajo porque es exactamente lo que siempre quise hacer profesionalmente!", exampleTranslation: "Ich bin sehr begeistert von meiner neuen Arbeit weil es genau das ist was ich beruflich immer machen wollte!" },
      { id: "gs_emo_15", german: "Gefühle", spanish: "Sentimientos", difficulty: "hard", example: "Es importante expresar nuestros sentimientos honestamente para mantener relaciones saludables con las personas que amamos!", exampleTranslation: "Es ist wichtig unsere Gefühle ehrlich auszudrücken um gesunde Beziehungen zu den Menschen zu pflegen die wir lieben!" }
    ]
  },

  time: {
    name: "Zeit und Kalender",
    description: "Zeitausdrücke, Tage und Monate",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "gs_time_1", german: "Heute", spanish: "Hoy", difficulty: "easy", example: "Hoy es lunes y tengo mucho trabajo que hacer en la oficina durante todo el día", exampleTranslation: "Heute ist Montag und ich habe viel Arbeit die ich den ganzen Tag im Büro erledigen muss" },
      { id: "gs_time_2", german: "Gestern", spanish: "Ayer", difficulty: "easy", example: "Ayer fue domingo y pasé todo el día relajándome en casa con mi familia", exampleTranslation: "Gestern war Sonntag und ich verbrachte den ganzen Tag entspannt zuhause mit meiner Familie" },
      { id: "gs_time_3", german: "Morgen", spanish: "Mañana", difficulty: "easy", example: "Mañana temprano voy a viajar a Barcelona para una reunión importante de negocios", exampleTranslation: "Morgen früh werde ich nach Barcelona reisen für ein wichtiges Geschäftstreffen" },
      { id: "gs_time_4", german: "Woche", spanish: "Semana", difficulty: "easy", example: "Esta semana estoy muy ocupado con proyectos importantes que debo terminar antes del viernes", exampleTranslation: "Diese Woche bin ich sehr beschäftigt mit wichtigen Projekten die ich vor Freitag beenden muss" },
      { id: "gs_time_5", german: "Monat", spanish: "Mes", difficulty: "easy", example: "Este mes de diciembre hace mucho frío y nieva frecuentemente en nuestra ciudad", exampleTranslation: "Dieser Monat Dezember ist es sehr kalt und es schneit häufig in unserer Stadt" },
      { id: "gs_time_6", german: "Jahr", spanish: "Año", difficulty: "easy", example: "Este año nuevo quiero viajar más y aprender cosas nuevas interesantes y emocionantes", exampleTranslation: "Dieses neue Jahr möchte ich mehr reisen und neue interessante und aufregende Dinge lernen" },
      { id: "gs_time_7", german: "Stunde", spanish: "Hora", difficulty: "medium", example: "Espera una hora más por favor porque todavía no he terminado de preparar la comida", exampleTranslation: "Warte bitte noch eine Stunde weil ich noch nicht fertig bin mit dem Kochen" },
      { id: "gs_time_8", german: "Minute", spanish: "Minuto", difficulty: "medium", example: "Espera solo un minuto por favor mientras termino de escribir este correo electrónico importante", exampleTranslation: "Warte bitte nur eine Minute während ich diese wichtige E-Mail fertig schreibe" },
      { id: "gs_time_9", german: "Tag", spanish: "Día", difficulty: "medium", example: "Que tengas un buen día lleno de alegría y experiencias positivas maravillosas", exampleTranslation: "Hab einen guten Tag voller Freude und wunderbar positiver Erfahrungen" },
      { id: "gs_time_10", german: "Nacht", spanish: "Noche", difficulty: "medium", example: "Buenas noches a todos! Que duerman bien y descansen para mañana tener energía", exampleTranslation: "Gute Nacht an alle! Schlaft gut und ruht euch aus um morgen Energie zu haben" },
      { id: "gs_time_11", german: "Wochenende", spanish: "Fin de semana", difficulty: "medium", example: "Este fin de semana voy a la playa con amigos para relajarnos y disfrutar del sol", exampleTranslation: "Dieses Wochenende fahre ich mit Freunden zum Strand um uns zu entspannen und die Sonne zu genießen" },
      { id: "gs_time_12", german: "Uhrzeit", spanish: "Hora del día", difficulty: "medium", example: "¿Qué hora es ahora? Necesito saber la hora exacta para no llegar tarde a mi cita", exampleTranslation: "Wie spät ist es jetzt? Ich muss die genaue Uhrzeit wissen um nicht zu spät zu meinem Termin zu kommen" },
      { id: "gs_time_13", german: "Wie spät ist es?", spanish: "¿Qué hora es?", difficulty: "hard", example: "Disculpe, ¿qué hora es? Mi reloj se paró y necesito saber la hora para mi reunión!", exampleTranslation: "Entschuldigung, wie spät ist es? Meine Uhr ist stehengeblieben und ich muss die Zeit für mein Meeting wissen!" },
      { id: "gs_time_14", german: "Ich bin spät dran", spanish: "Llego tarde", difficulty: "hard", example: "Lo siento! Llego tarde a la reunión porque había mucho tráfico terrible en la autopista esta mañana!", exampleTranslation: "Es tut mir leid! Ich bin spät dran zum Meeting weil es heute Morgen schrecklich viel Verkehr auf der Autobahn gab!" },
      { id: "gs_time_15", german: "Pünktlich sein", spanish: "Ser puntual", difficulty: "hard", example: "Es muy importante ser puntual para las reuniones profesionales porque muestra respeto por el tiempo de los demás!", exampleTranslation: "Es ist sehr wichtig pünktlich zu beruflichen Meetings zu sein weil es Respekt für die Zeit der anderen zeigt!" }
    ]
  },

  weather: {
    name: "Wetter und Klima",
    description: "Wetterbedingungen und Jahreszeiten",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "gs_weather_1", german: "Sonne", spanish: "Sol", difficulty: "easy", example: "El sol brillante brilla intensamente en el cielo azul creando un día hermoso y cálido", exampleTranslation: "Die strahlende Sonne scheint intensiv am blauen Himmel und schafft einen schönen und warmen Tag" },
      { id: "gs_weather_2", german: "Regen", spanish: "Lluvia", difficulty: "easy", example: "Está lloviendo mucho afuera así que necesito llevar un paraguas grande para no mojarme", exampleTranslation: "Es regnet draußen sehr stark also muss ich einen großen Regenschirm mitnehmen um nicht nass zu werden" },
      { id: "gs_weather_3", german: "Schnee", spanish: "Nieve", difficulty: "easy", example: "Está nevando copiosamente y todo el paisaje se ve blanco y hermoso como postal", exampleTranslation: "Es schneit reichlich und die ganze Landschaft sieht weiß und schön aus wie eine Postkarte" },
      { id: "gs_weather_4", german: "Wind", spanish: "Viento", difficulty: "easy", example: "Hace mucho viento fuerte hoy y los árboles se mueven violentamente de un lado a otro", exampleTranslation: "Es ist heute sehr windig und die Bäume bewegen sich heftig von einer Seite zur anderen" },
      { id: "gs_weather_5", german: "Wolke", spanish: "Nube", difficulty: "easy", example: "Hay muchas nubes grises oscuras en el cielo que parecen anunciar lluvia pronto", exampleTranslation: "Es gibt viele dunkelgraue Wolken am Himmel die bald Regen anzukündigen scheinen" },
      { id: "gs_weather_6", german: "Sturm", spanish: "Tormenta", difficulty: "easy", example: "Hay una tormenta eléctrica muy fuerte con truenos y relámpagos iluminando el cielo nocturno", exampleTranslation: "Es gibt ein sehr starkes Gewitter mit Donner und Blitzen die den Nachthimmel erhellen" },
      { id: "gs_weather_7", german: "Nebel", spanish: "Niebla", difficulty: "medium", example: "Hay mucha niebla densa esta mañana temprano y no puedo ver más allá de diez metros", exampleTranslation: "Es gibt heute früh sehr dichten Nebel und ich kann nicht weiter als zehn Meter sehen" },
      { id: "gs_weather_8", german: "Hitze", spanish: "Calor", difficulty: "medium", example: "Hace mucho calor sofocante en verano y necesito aire acondicionado constantemente funcionando", exampleTranslation: "Es ist im Sommer sehr drückend heiß und ich brauche ständig laufende Klimaanlage" },
      { id: "gs_weather_9", german: "Kälte", spanish: "Frío", difficulty: "medium", example: "Hace un frío intenso afuera y necesito ponerme ropa muy abrigada antes de salir", exampleTranslation: "Es ist draußen intensiv kalt und ich muss sehr warme Kleidung anziehen bevor ich hinausgehe" },
      { id: "gs_weather_10", german: "Wetter", spanish: "Tiempo", difficulty: "medium", example: "El tiempo meteorológico es perfecto hoy para hacer un picnic en el parque con la familia", exampleTranslation: "Das Wetter ist heute perfekt um ein Picknick im Park mit der Familie zu machen" },
      { id: "gs_weather_11", german: "Temperatur", spanish: "Temperatura", difficulty: "medium", example: "La temperatura actual es de treinta grados centígrados y hace demasiado calor para trabajar afuera", exampleTranslation: "Die aktuelle Temperatur beträgt dreißig Grad Celsius und es ist zu heiß um draußen zu arbeiten" },
      { id: "gs_weather_12", german: "Gewitter", spanish: "Tormenta eléctrica", difficulty: "medium", example: "La tormenta eléctrica violenta asustó a todos con sus rayos brillantes y truenos ensordecedores", exampleTranslation: "Das heftige Gewitter erschreckte alle mit seinen leuchtenden Blitzen und ohrenbetäubendem Donner" },
      { id: "gs_weather_13", german: "Wie ist das Wetter?", spanish: "¿Cómo está el tiempo?", difficulty: "hard", example: "¿Cómo está el tiempo allí en Madrid? Aquí en Berlín está lloviendo mucho y hace frío!", exampleTranslation: "Wie ist das Wetter dort in Madrid? Hier in Berlin regnet es sehr und es ist kalt!" },
      { id: "gs_weather_14", german: "Wettervorhersage", spanish: "Pronóstico del tiempo", difficulty: "hard", example: "Según el pronóstico del tiempo va a llover toda la semana así que mejor cancelamos el picnic!", exampleTranslation: "Laut Wettervorhersage wird es die ganze Woche regnen also sagen wir das Picknick besser ab!" },
      { id: "gs_weather_15", german: "Jahreszeit", spanish: "Estación del año", difficulty: "hard", example: "Mi estación del año favorita es la primavera cuando las flores florecen y los días son más largos!", exampleTranslation: "Meine Lieblingsjahreszeit ist der Frühling wenn die Blumen blühen und die Tage länger werden!" }
    ]
  },

  body: {
    name: "Körper und Gesundheit",
    description: "Körperteile und Gesundheitswesen",
    icon: Hand,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "gs_body_1", german: "Kopf", spanish: "Cabeza", difficulty: "easy", example: "Me duele mucho la cabeza y necesito tomar medicina para el dolor de cabeza fuerte", exampleTranslation: "Mein Kopf tut sehr weh und ich muss Medizin gegen die starken Kopfschmerzen nehmen" },
      { id: "gs_body_2", german: "Auge", spanish: "Ojo", difficulty: "easy", example: "Tengo ojos azules claros heredados de mi madre que también tiene ojos hermosos", exampleTranslation: "Ich habe hellblaue Augen die ich von meiner Mutter geerbt habe die auch schöne Augen hat" },
      { id: "gs_body_3", german: "Ohr", spanish: "Oreja", difficulty: "easy", example: "Mis orejas son sensibles al frío y necesito cubrirlas bien durante el invierno", exampleTranslation: "Meine Ohren sind kälteempfindlich und ich muss sie während des Winters gut bedecken" },
      { id: "gs_body_4", german: "Nase", spanish: "Nariz", difficulty: "easy", example: "Mi nariz pequeña es perfecta para mi cara y me gusta mucho como me veo", exampleTranslation: "Meine kleine Nase ist perfekt für mein Gesicht und ich mag sehr wie ich aussehe" },
      { id: "gs_body_5", german: "Mund", spanish: "Boca", difficulty: "easy", example: "Abre la boca grande para que el dentista pueda revisar bien todos tus dientes", exampleTranslation: "Öffne den Mund weit damit der Zahnarzt alle deine Zähne gut untersuchen kann" },
      { id: "gs_body_6", german: "Hand", spanish: "Mano", difficulty: "easy", example: "Dame la mano derecha para ayudarte a levantarte del suelo después de la caída", exampleTranslation: "Gib mir die rechte Hand um dir zu helfen vom Boden aufzustehen nach dem Sturz" },
      { id: "gs_body_7", german: "Fuß", spanish: "Pie", difficulty: "medium", example: "Me duele el pie izquierdo porque caminé demasiado durante la excursión en las montañas", exampleTranslation: "Mein linker Fuß tut weh weil ich während der Bergwanderung zu viel gelaufen bin" },
      { id: "gs_body_8", german: "Arm", spanish: "Brazo", difficulty: "medium", example: "Mi brazo derecho está roto después del accidente y necesito llevarlo enyesado por semanas", exampleTranslation: "Mein rechter Arm ist nach dem Unfall gebrochen und ich muss ihn wochenlang eingegipst tragen" },
      { id: "gs_body_9", german: "Bein", spanish: "Pierna", difficulty: "medium", example: "Mi pierna izquierda es más larga que la derecha causándome problemas al caminar a veces", exampleTranslation: "Mein linkes Bein ist länger als das rechte was mir manchmal Probleme beim Laufen bereitet" },
      { id: "gs_body_10", german: "Herz", spanish: "Corazón", difficulty: "medium", example: "Mi corazón late muy rápido cuando hago ejercicio intenso corriendo en el gimnasio", exampleTranslation: "Mein Herz schlägt sehr schnell wenn ich intensiv Sport treibe und im Fitnessstudio laufe" },
      { id: "gs_body_11", german: "Rücken", spanish: "Espalda", difficulty: "medium", example: "Me duele la espalda baja después de estar sentado muchas horas frente a la computadora", exampleTranslation: "Mein unterer Rücken tut weh nach vielen Stunden Sitzen vor dem Computer" },
      { id: "gs_body_12", german: "Zahn", spanish: "Diente", difficulty: "medium", example: "Necesito ir al dentista porque me duele mucho un diente y creo que tengo caries", exampleTranslation: "Ich muss zum Zahnarzt gehen weil mir ein Zahn sehr wehtut und ich glaube ich habe Karies" },
      { id: "gs_body_13", german: "Mir geht es nicht gut", spanish: "No me siento bien", difficulty: "hard", example: "No me siento nada bien hoy! Creo que tengo fiebre alta y necesito ver a un médico urgentemente!", exampleTranslation: "Mir geht es heute gar nicht gut! Ich glaube ich habe hohes Fieber und muss dringend einen Arzt sehen!" },
      { id: "gs_body_14", german: "Gesund bleiben", spanish: "Mantenerse sano", difficulty: "hard", example: "Es importante mantenerse sano comiendo bien haciendo ejercicio regularmente y durmiendo suficientes horas cada noche!", exampleTranslation: "Es ist wichtig gesund zu bleiben indem man gut isst regelmäßig Sport treibt und jede Nacht ausreichend Stunden schläft!" },
      { id: "gs_body_15", german: "Körper", spanish: "Cuerpo", difficulty: "hard", example: "Debemos cuidar nuestro cuerpo como un templo porque es lo único que tenemos para toda la vida!", exampleTranslation: "Wir müssen unseren Körper wie einen Tempel pflegen weil es das Einzige ist was wir für das ganze Leben haben!" }
    ]
  },

  activities: {
    name: "Tägliche Aktivitäten",
    description: "Alltägliche Handlungen und Tätigkeiten",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "gs_act_1", german: "Essen", spanish: "Comer", difficulty: "easy", example: "Voy a comer algo delicioso en el restaurante italiano que está cerca de mi casa", exampleTranslation: "Ich werde etwas Köstliches im italienischen Restaurant essen das in der Nähe meines Hauses ist" },
      { id: "gs_act_2", german: "Trinken", spanish: "Beber", difficulty: "easy", example: "Bebo mucha agua fresca todos los días para mantenerme hidratado y saludable siempre", exampleTranslation: "Ich trinke jeden Tag viel frisches Wasser um immer hydratisiert und gesund zu bleiben" },
      { id: "gs_act_3", german: "Schlafen", spanish: "Dormir", difficulty: "easy", example: "Necesito dormir ocho horas cada noche para descansar bien y tener energía al día siguiente", exampleTranslation: "Ich muss jede Nacht acht Stunden schlafen um gut auszuruhen und am nächsten Tag Energie zu haben" },
      { id: "gs_act_4", german: "Arbeiten", spanish: "Trabajar", difficulty: "easy", example: "Trabajo diligentemente todos los días de lunes a viernes en una empresa internacional grande", exampleTranslation: "Ich arbeite fleißig jeden Tag von Montag bis Freitag in einem großen internationalen Unternehmen" },
      { id: "gs_act_5", german: "Spielen", spanish: "Jugar", difficulty: "easy", example: "Los niños juegan al fútbol alegremente en el parque todos los fines de semana soleados", exampleTranslation: "Die Kinder spielen jeden sonnigen Wochenende fröhlich Fußball im Park" },
      { id: "gs_act_6", german: "Lesen", spanish: "Leer", difficulty: "easy", example: "Leo un libro interesante sobre historia europea antes de dormir cada noche tranquilamente", exampleTranslation: "Ich lese jeden Abend ruhig ein interessantes Buch über europäische Geschichte vor dem Schlafengehen" },
      { id: "gs_act_7", german: "Schreiben", spanish: "Escribir", difficulty: "medium", example: "Escribo una carta larga a mi mejor amigo que vive en otro país lejano", exampleTranslation: "Ich schreibe einen langen Brief an meinen besten Freund der in einem weit entfernten Land lebt" },
      { id: "gs_act_8", german: "Sprechen", spanish: "Hablar", difficulty: "medium", example: "Hablo español fluidamente porque he practicado mucho durante varios años estudiando intensamente", exampleTranslation: "Ich spreche fließend Spanisch weil ich viele Jahre lang intensiv gelernt und viel geübt habe" },
      { id: "gs_act_9", german: "Hören", spanish: "Escuchar", difficulty: "medium", example: "Escucho música clásica relajante todas las tardes mientras trabajo en proyectos creativos importantes", exampleTranslation: "Ich höre jeden Nachmittag entspannende klassische Musik während ich an wichtigen kreativen Projekten arbeite" },
      { id: "gs_act_10", german: "Sehen", spanish: "Ver", difficulty: "medium", example: "Veo la televisión por las noches para relajarme después de un largo día de trabajo", exampleTranslation: "Ich sehe abends fern um mich nach einem langen Arbeitstag zu entspannen" },
      { id: "gs_act_11", german: "Kochen", spanish: "Cocinar", difficulty: "medium", example: "Me encanta cocinar platos tradicionales alemanes para mi familia los fines de semana especialmente", exampleTranslation: "Ich liebe es besonders am Wochenende traditionelle deutsche Gerichte für meine Familie zu kochen" },
      { id: "gs_act_12", german: "Einkaufen", spanish: "Comprar", difficulty: "medium", example: "Voy a comprar alimentos frescos en el mercado local cada sábado por la mañana temprano", exampleTranslation: "Ich kaufe jeden Samstagmorgen früh frische Lebensmittel auf dem lokalen Markt ein" },
      { id: "gs_act_13", german: "Was machst du?", spanish: "¿Qué haces?", difficulty: "hard", example: "¿Qué haces en tu tiempo libre? Me gusta saber qué actividades disfrutas hacer para conocerte mejor!", exampleTranslation: "Was machst du in deiner Freizeit? Ich möchte gerne wissen welche Aktivitäten du gerne machst um dich besser kennenzulernen!" },
      { id: "gs_act_14", german: "Freizeit", spanish: "Tiempo libre", difficulty: "hard", example: "En mi tiempo libre me gusta leer libros interesantes viajar a nuevos lugares y pasar tiempo con amigos!", exampleTranslation: "In meiner Freizeit lese ich gerne interessante Bücher reise an neue Orte und verbringe Zeit mit Freunden!" },
      { id: "gs_act_15", german: "Entspannen", spanish: "Relajarse", difficulty: "hard", example: "Necesito relajarme completamente después de esta semana estresante llena de trabajo y responsabilidades agotadoras!", exampleTranslation: "Ich muss mich nach dieser stressigen Woche voller Arbeit und erschöpfenden Verantwortlichkeiten komplett entspannen!" }
    ]
  },

  learning: {
    name: "Lernen und Bildung",
    description: "Lernaktivitäten und Wissenserwerb",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-500",
    level: "advanced",
    words: [
      { id: "gs_learn_1", german: "Lernen", spanish: "Aprender", difficulty: "easy", example: "Aprendo español todos los días practicando conversación y estudiando gramática intensamente con dedicación", exampleTranslation: "Ich lerne jeden Tag Spanisch indem ich Konversation übe und intensiv mit Hingabe Grammatik lerne" },
      { id: "gs_learn_2", german: "Studieren", spanish: "Estudiar", difficulty: "easy", example: "Estudio economía internacional en la universidad técnica y me encanta aprender sobre comercio global", exampleTranslation: "Ich studiere internationale Wirtschaft an der technischen Universität und liebe es über globalen Handel zu lernen" },
      { id: "gs_learn_3", german: "Verstehen", spanish: "Entender", difficulty: "easy", example: "Entiendo perfectamente la lección compleja que explicó el profesor con claridad y paciencia", exampleTranslation: "Ich verstehe die komplexe Lektion perfekt die der Professor mit Klarheit und Geduld erklärt hat" },
      { id: "gs_learn_4", german: "Wissen", spanish: "Saber", difficulty: "easy", example: "No sé la respuesta correcta a esta pregunta difícil del examen de matemáticas avanzadas", exampleTranslation: "Ich weiß die richtige Antwort auf diese schwierige Frage der fortgeschrittenen Mathematikprüfung nicht" },
      { id: "gs_learn_5", german: "Frage", spanish: "Pregunta", difficulty: "easy", example: "Tengo una pregunta importante sobre el tema que acabas de explicar en la clase", exampleTranslation: "Ich habe eine wichtige Frage über das Thema das du gerade im Unterricht erklärt hast" },
      { id: "gs_learn_6", german: "Antwort", spanish: "Respuesta", difficulty: "easy", example: "La respuesta al problema matemático es correcta y muestra un razonamiento lógico excelente", exampleTranslation: "Die Antwort auf das mathematische Problem ist richtig und zeigt eine ausgezeichnete logische Argumentation" },
      { id: "gs_learn_7", german: "Übung", spanish: "Práctica", difficulty: "medium", example: "Necesito más práctica constante para mejorar mi nivel de español hablado y escrito", exampleTranslation: "Ich brauche mehr konstante Übung um mein gesprochenes und geschriebenes Spanischniveau zu verbessern" },
      { id: "gs_learn_8", german: "Fehler", spanish: "Error", difficulty: "medium", example: "Cometí un error grave en el examen pero aprendí mucho de esta experiencia valiosa", exampleTranslation: "Ich habe einen schweren Fehler in der Prüfung gemacht aber viel aus dieser wertvollen Erfahrung gelernt" },
      { id: "gs_learn_9", german: "Wort", spanish: "Palabra", difficulty: "medium", example: "Esta palabra nueva es muy difícil de pronunciar correctamente pero sigo practicando con paciencia", exampleTranslation: "Dieses neue Wort ist sehr schwierig richtig auszusprechen aber ich übe weiter mit Geduld" },
      { id: "gs_learn_10", german: "Sprache", spanish: "Idioma", difficulty: "medium", example: "Aprendo un idioma nuevo cada año porque me fascina la lingüística y las culturas diferentes", exampleTranslation: "Ich lerne jedes Jahr eine neue Sprache weil mich Linguistik und verschiedene Kulturen faszinieren" },
      { id: "gs_learn_11", german: "Vokabular", spanish: "Vocabulario", difficulty: "medium", example: "Mi vocabulario en español ha mejorado muchísimo después de estudiar y practicar diariamente durante meses", exampleTranslation: "Mein Vokabular auf Spanisch hat sich enorm verbessert nachdem ich monatelang täglich gelernt und geübt habe" },
      { id: "gs_learn_12", german: "Grammatik", spanish: "Gramática", difficulty: "medium", example: "La gramática española es compleja pero fascinante con muchas reglas interesantes que debo memorizar", exampleTranslation: "Die spanische Grammatik ist komplex aber faszinierend mit vielen interessanten Regeln die ich auswendig lernen muss" },
      { id: "gs_learn_13", german: "Ich verstehe nicht", spanish: "No entiendo", difficulty: "hard", example: "Lo siento pero no entiendo completamente esta explicación complicada! ¿Puedes explicarlo de manera más simple por favor?", exampleTranslation: "Es tut mir leid aber ich verstehe diese komplizierte Erklärung nicht vollständig! Kannst du es bitte einfacher erklären?" },
      { id: "gs_learn_14", german: "Wissensdurst", spanish: "Sed de conocimiento", difficulty: "hard", example: "Tengo una gran sed de conocimiento y siempre estoy buscando aprender cosas nuevas e interesantes cada día!", exampleTranslation: "Ich habe einen großen Wissensdurst und suche jeden Tag immer nach neuen und interessanten Dingen zu lernen!" },
      { id: "gs_learn_15", german: "Bildung ist wichtig", spanish: "La educación es importante", difficulty: "hard", example: "La educación de calidad es extremadamente importante para el desarrollo personal y el éxito profesional en la vida!", exampleTranslation: "Qualitativ hochwertige Bildung ist extrem wichtig für persönliche Entwicklung und beruflichen Erfolg im Leben!" }
    ]
  },

  sports: {
    name: "Sport und Fitness",
    description: "Sportarten und körperliche Aktivitäten",
    icon: Dumbbell,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "gs_sport_1", german: "Fußball", spanish: "Fútbol", difficulty: "easy", example: "Juego al fútbol apasionadamente todos los domingos con mis amigos en el campo deportivo local", exampleTranslation: "Ich spiele jeden Sonntag leidenschaftlich Fußball mit meinen Freunden auf dem lokalen Sportplatz" },
      { id: "gs_sport_2", german: "Basketball", spanish: "Baloncesto", difficulty: "easy", example: "Me gusta mucho el baloncesto porque es un deporte dinámico que requiere habilidad y trabajo en equipo", exampleTranslation: "Ich mag Basketball sehr weil es ein dynamischer Sport ist der Geschicklichkeit und Teamarbeit erfordert" },
      { id: "gs_sport_3", german: "Tennis", spanish: "Tenis", difficulty: "easy", example: "Juego al tenis profesionalmente y entreno varias horas cada día para mejorar mi técnica", exampleTranslation: "Ich spiele professionell Tennis und trainiere mehrere Stunden jeden Tag um meine Technik zu verbessern" },
      { id: "gs_sport_4", german: "Schwimmen", spanish: "Natación", difficulty: "easy", example: "Me encanta la natación porque es un ejercicio completo que trabaja todos los músculos del cuerpo", exampleTranslation: "Ich liebe Schwimmen weil es ein komplettes Training ist das alle Muskeln des Körpers trainiert" },
      { id: "gs_sport_5", german: "Laufen", spanish: "Correr", difficulty: "easy", example: "Corro cinco kilómetros todas las mañanas temprano para mantenerme en forma física excelente", exampleTranslation: "Ich laufe jeden frühen Morgen fünf Kilometer um in ausgezeichneter körperlicher Form zu bleiben" },
      { id: "gs_sport_6", german: "Radfahren", spanish: "Ciclismo", difficulty: "easy", example: "Practico ciclismo de montaña los fines de semana explorando senderos difíciles y paisajes hermosos", exampleTranslation: "Ich betreibe am Wochenende Mountainbiking und erkunde schwierige Pfade und schöne Landschaften" },
      { id: "gs_sport_7", german: "Volleyball", spanish: "Voleibol", difficulty: "medium", example: "Juego al voleibol en la playa durante el verano con amigos disfrutando del sol", exampleTranslation: "Ich spiele im Sommer am Strand Volleyball mit Freunden und genieße die Sonne" },
      { id: "gs_sport_8", german: "Golf", spanish: "Golf", difficulty: "medium", example: "Mi padre juega al golf elegante cada fin de semana en el club exclusivo de la ciudad", exampleTranslation: "Mein Vater spielt jedes Wochenende elegantes Golf im exklusiven Club der Stadt" },
      { id: "gs_sport_9", german: "Boxen", spanish: "Boxeo", difficulty: "medium", example: "El boxeo profesional es un deporte muy duro que requiere resistencia física y mental extraordinaria", exampleTranslation: "Professionelles Boxen ist ein sehr harter Sport der außergewöhnliche körperliche und mentale Ausdauer erfordert" },
      { id: "gs_sport_10", german: "Yoga", spanish: "Yoga", difficulty: "medium", example: "Hago yoga y meditación cada mañana para relajarme y empezar el día con energía positiva", exampleTranslation: "Ich mache jeden Morgen Yoga und Meditation um mich zu entspannen und den Tag mit positiver Energie zu beginnen" },
      { id: "gs_sport_11", german: "Training", spanish: "Entrenamiento", difficulty: "medium", example: "Mi entrenamiento diario en el gimnasio incluye pesas cardio y ejercicios de flexibilidad variados", exampleTranslation: "Mein tägliches Training im Fitnessstudio beinhaltet Gewichte Cardio und verschiedene Flexibilitätsübungen" },
      { id: "gs_sport_12", german: "Wettkampf", spanish: "Competencia", difficulty: "medium", example: "Participaré en la competencia internacional de atletismo que se celebra en Madrid el próximo mes", exampleTranslation: "Ich werde am internationalen Leichtathletikwettbewerb teilnehmen der nächsten Monat in Madrid stattfindet" },
      { id: "gs_sport_13", german: "Ich treibe Sport", spanish: "Hago deporte", difficulty: "hard", example: "Hago deporte regularmente porque es muy importante para mantener una vida saludable y equilibrada siempre!", exampleTranslation: "Ich treibe regelmäßig Sport weil es sehr wichtig ist um immer ein gesundes und ausgewogenes Leben zu führen!" },
      { id: "gs_sport_14", german: "Mannschaft", spanish: "Equipo", difficulty: "hard", example: "Nuestro equipo ganó el campeonato nacional después de entrenar duramente durante todo el año con dedicación total!", exampleTranslation: "Unsere Mannschaft hat die nationale Meisterschaft gewonnen nachdem wir das ganze Jahr mit totaler Hingabe hart trainiert haben!" },
      { id: "gs_sport_15", german: "Fitness", spanish: "Fitness", difficulty: "hard", example: "Mantengo mi nivel de fitness alto haciendo ejercicio intenso seis días a la semana sin excusas ni descanso!", exampleTranslation: "Ich halte mein Fitnessniveau hoch indem ich sechs Tage die Woche intensiv trainiere ohne Ausreden oder Pause!" }
    ]
  },

  travel: {
    name: "Reisen und Tourismus",
    description: "Urlaubsreisen und touristische Aktivitäten",
    icon: Plane,
    color: "from-cyan-400 to-blue-500",
    level: "advanced",
    words: [
      { id: "gs_travel_1", german: "Reise", spanish: "Viaje", difficulty: "easy", example: "Voy de viaje emocionante a España el próximo mes para explorar ciudades históricas hermosas", exampleTranslation: "Ich mache nächsten Monat eine aufregende Reise nach Spanien um schöne historische Städte zu erkunden" },
      { id: "gs_travel_2", german: "Koffer", spanish: "Maleta", difficulty: "easy", example: "Mi maleta grande es muy pesada porque he empacado demasiada ropa para el viaje largo", exampleTranslation: "Mein großer Koffer ist sehr schwer weil ich zu viele Kleider für die lange Reise gepackt habe" },
      { id: "gs_travel_3", german: "Pass", spanish: "Pasaporte", difficulty: "easy", example: "Necesito renovar mi pasaporte urgentemente antes del viaje internacional que tengo planeado para julio", exampleTranslation: "Ich muss meinen Pass dringend erneuern vor der internationalen Reise die ich für Juli geplant habe" },
      { id: "gs_travel_4", german: "Ticket", spanish: "Boleto", difficulty: "easy", example: "Compré un boleto de avión económico para volar a Barcelona el próximo fin de semana", exampleTranslation: "Ich habe ein günstiges Flugticket gekauft um nächstes Wochenende nach Barcelona zu fliegen" },
      { id: "gs_travel_5", german: "Urlaub", spanish: "Vacaciones", difficulty: "easy", example: "Estoy de vacaciones maravillosas en la costa mediterránea disfrutando del sol y la playa", exampleTranslation: "Ich bin in wunderbaren Ferien an der Mittelmeerküste und genieße die Sonne und den Strand" },
      { id: "gs_travel_6", german: "Tourist", spanish: "Turista", difficulty: "easy", example: "Soy turista extranjero visitando Madrid por primera vez y estoy impresionado por la belleza", exampleTranslation: "Ich bin ausländischer Tourist der Madrid zum ersten Mal besucht und bin von der Schönheit beeindruckt" },
      { id: "gs_travel_7", german: "Karte", spanish: "Mapa", difficulty: "medium", example: "Necesito un mapa detallado de la ciudad porque me he perdido y no sé cómo regresar", exampleTranslation: "Ich brauche eine detaillierte Stadtkarte weil ich mich verlaufen habe und nicht weiß wie ich zurückkomme" },
      { id: "gs_travel_8", german: "Sehenswürdigkeit", spanish: "Atracción turística", difficulty: "medium", example: "La atracción turística más famosa de la ciudad es el museo de arte moderno internacional", exampleTranslation: "Die berühmteste Touristenattraktion der Stadt ist das internationale Museum für moderne Kunst" },
      { id: "gs_travel_9", german: "Reservierung", spanish: "Reserva", difficulty: "medium", example: "Hice una reserva anticipada en el mejor hotel de cinco estrellas del centro histórico", exampleTranslation: "Ich habe eine Vorabreservierung im besten Fünf-Sterne-Hotel der Altstadt gemacht" },
      { id: "gs_travel_10", german: "Gepäck", spanish: "Equipaje", difficulty: "medium", example: "Mi equipaje completo está listo y empacado con todo lo necesario para el viaje de dos semanas", exampleTranslation: "Mein komplettes Gepäck ist fertig und mit allem Nötigen für die zweiwöchige Reise gepackt" },
      { id: "gs_travel_11", german: "Reiseführer", spanish: "Guía turístico", difficulty: "medium", example: "El guía turístico experto nos mostró todos los lugares históricos importantes de la ciudad antigua", exampleTranslation: "Der erfahrene Reiseführer zeigte uns alle wichtigen historischen Orte der alten Stadt" },
      { id: "gs_travel_12", german: "Ausflug", spanish: "Excursión", difficulty: "medium", example: "Hicimos una excursión maravillosa a las montañas nevadas disfrutando de paisajes espectaculares naturales", exampleTranslation: "Wir machten einen wunderbaren Ausflug in die schneebedeckten Berge und genossen spektakuläre natürliche Landschaften" },
      { id: "gs_travel_13", german: "Ich reise gern", spanish: "Me gusta viajar", difficulty: "hard", example: "Me encanta viajar por todo el mundo explorando nuevas culturas comidas exóticas y conociendo gente interesante!", exampleTranslation: "Ich liebe es um die ganze Welt zu reisen neue Kulturen zu erkunden exotisches Essen und interessante Menschen kennenzulernen!" },
      { id: "gs_travel_14", german: "Abenteuer", spanish: "Aventura", difficulty: "hard", example: "Busco aventuras emocionantes en cada viaje visitando lugares remotos y haciendo actividades extremas arriesgadas!", exampleTranslation: "Ich suche auf jeder Reise aufregende Abenteuer indem ich abgelegene Orte besuche und riskante Extremaktivitäten mache!" },
      { id: "gs_travel_15", german: "Weltreise", spanish: "Viaje alrededor del mundo", difficulty: "hard", example: "Mi sueño es hacer un viaje completo alrededor del mundo visitando todos los continentes durante un año entero!", exampleTranslation: "Mein Traum ist es eine komplette Weltreise zu machen und alle Kontinente während eines ganzen Jahres zu besuchen!" }
    ]
  },

  entertainment: {
    name: "Unterhaltung und Freizeit",
    description: "Freizeitaktivitäten und Vergnügen",
    icon: Music,
    color: "from-purple-500 to-pink-500",
    level: "advanced",
    words: [
      { id: "gs_ent_1", german: "Musik", spanish: "Música", difficulty: "easy", example: "Escucho música clásica relajante todas las noches antes de dormir para descansar mejor", exampleTranslation: "Ich höre jeden Abend entspannende klassische Musik vor dem Schlafengehen um besser zu ruhen" },
      { id: "gs_ent_2", german: "Film", spanish: "Película", difficulty: "easy", example: "Veo una película interesante de acción en el cine con mis amigos este fin de semana", exampleTranslation: "Ich sehe dieses Wochenende einen interessanten Actionfilm im Kino mit meinen Freunden" },
      { id: "gs_ent_3", german: "Konzert", spanish: "Concierto", difficulty: "easy", example: "Voy a un concierto de rock espectacular el próximo sábado en el estadio grande de la ciudad", exampleTranslation: "Ich gehe nächsten Samstag zu einem spektakulären Rockkonzert im großen Stadion der Stadt" },
      { id: "gs_ent_4", german: "Theater", spanish: "Teatro", difficulty: "easy", example: "Me encanta el teatro clásico y voy a ver obras dramáticas todos los meses regularmente", exampleTranslation: "Ich liebe klassisches Theater und gehe jeden Monat regelmäßig dramatische Stücke ansehen" },
      { id: "gs_ent_5", german: "Tanz", spanish: "Baile", difficulty: "easy", example: "Me gusta bailar salsa latina todos los viernes en la discoteca del centro con energía", exampleTranslation: "Ich tanze gerne jeden Freitag energiegeladen lateinamerikanische Salsa in der Diskothek im Zentrum" },
      { id: "gs_ent_6", german: "Party", spanish: "Fiesta", difficulty: "easy", example: "Hay una fiesta grande y animada este sábado en casa de mi mejor amigo celebrando", exampleTranslation: "Es gibt diesen Samstag eine große und lebhafte Party bei meinem besten Freund zuhause zum Feiern" },
      { id: "gs_ent_7", german: "Spiel", spanish: "Juego", difficulty: "medium", example: "Jugamos un juego de mesa divertido y estratégico todos juntos en familia cada domingo", exampleTranslation: "Wir spielen jeden Sonntag zusammen als Familie ein lustiges und strategisches Brettspiel" },
      { id: "gs_ent_8", german: "Hobby", spanish: "Pasatiempo", difficulty: "medium", example: "Mi pasatiempo favorito es la fotografía artística capturando momentos hermosos de la naturaleza", exampleTranslation: "Mein Lieblingshobby ist künstlerische Fotografie und das Einfangen schöner Momente der Natur" },
      { id: "gs_ent_9", german: "Spaß", spanish: "Diversión", difficulty: "medium", example: "Es muy divertido pasar tiempo con amigos riendo y disfrutando de actividades entretenidas juntos", exampleTranslation: "Es macht sehr viel Spaß Zeit mit Freunden zu verbringen zu lachen und gemeinsam unterhaltsame Aktivitäten zu genießen" },
      { id: "gs_ent_10", german: "Unterhaltung", spanish: "Entretenimiento", difficulty: "medium", example: "Necesito entretenimiento y relajación después de una semana larga y estresante de trabajo intenso", exampleTranslation: "Ich brauche Unterhaltung und Entspannung nach einer langen und stressigen Woche intensiver Arbeit" },
      { id: "gs_ent_11", german: "Kino", spanish: "Cine", difficulty: "medium", example: "Vamos al cine moderno esta noche para ver el estreno de la nueva película de superhéroes", exampleTranslation: "Wir gehen heute Abend ins moderne Kino um die Premiere des neuen Superheldenfilms zu sehen" },
      { id: "gs_ent_12", german: "Restaurant", spanish: "Restaurante", difficulty: "medium", example: "Cenamos en un restaurante elegante francés que sirve comida gourmet exquisita y vinos finos", exampleTranslation: "Wir essen in einem eleganten französischen Restaurant das exquisites Gourmetessen und feine Weine serviert" },
      { id: "gs_ent_13", german: "Lass uns ausgehen", spanish: "Vamos a salir", difficulty: "hard", example: "Vamos a salir esta noche a divertirnos! Conozco un bar nuevo fantástico con música en vivo!", exampleTranslation: "Lass uns heute Abend ausgehen und Spaß haben! Ich kenne eine fantastische neue Bar mit Live-Musik!" },
      { id: "gs_ent_14", german: "Vergnügen", spanish: "Placer", difficulty: "hard", example: "Es un gran placer compartir tiempo de calidad con las personas que amo haciendo cosas divertidas juntos!", exampleTranslation: "Es ist ein großes Vergnügen Qualitätszeit mit den Menschen zu teilen die ich liebe und gemeinsam lustige Dinge zu machen!" },
      { id: "gs_ent_15", german: "Lebensqualität", spanish: "Calidad de vida", difficulty: "hard", example: "Una buena calidad de vida incluye trabajo equilibrado entretenimiento regular y tiempo para relajarse completamente!", exampleTranslation: "Eine gute Lebensqualität beinhaltet ausgewogene Arbeit regelmäßige Unterhaltung und Zeit um sich komplett zu entspannen!" }
    ]
  }
};