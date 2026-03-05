import {
  Phone,
  Stethoscope,
  Sparkles,
  Armchair,
  Ruler,
  CreditCard,
  Camera,
  BookMarked,
  Music,
  Smile,
  PaintBucket,
  PartyPopper,
  HeartHandshake,
  PlaneTakeoff,
  Monitor
} from "lucide-react";

export const flashcardsCategories_part6 = {
  telecommunications: {
    name: "Telekommunikation",
    description: "Telefon und moderne Kommunikation",
    icon: Phone,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "gs_tel_1", german: "Telefon", spanish: "Teléfono", difficulty: "easy", example: "El teléfono inteligente moderno tiene muchas funciones útiles como cámara internet y aplicaciones", exampleTranslation: "Das moderne Smartphone hat viele nützliche Funktionen wie Kamera Internet und Apps" },
      { id: "gs_tel_2", german: "Anruf", spanish: "Llamada", difficulty: "easy", example: "Recibí una llamada importante de mi jefe durante la reunión familiar del domingo pasado", exampleTranslation: "Ich erhielt einen wichtigen Anruf von meinem Chef während des Familientreffens letzten Sonntag" },
      { id: "gs_tel_3", german: "Nachricht", spanish: "Mensaje", difficulty: "easy", example: "Te envié un mensaje de texto hace una hora pero todavía no has respondido nada", exampleTranslation: "Ich schickte dir vor einer Stunde eine Textnachricht aber du hast noch nichts geantwortet" },
      { id: "gs_tel_4", german: "Anrufen", spanish: "Llamar", difficulty: "easy", example: "Voy a llamar a mi madre esta noche para contarle las noticias importantes sobre mi trabajo", exampleTranslation: "Ich werde heute Abend meine Mutter anrufen um ihr die wichtigen Neuigkeiten über meine Arbeit zu erzählen" },
      { id: "gs_tel_5", german: "Auflegen", spanish: "Colgar", difficulty: "easy", example: "Colgué el teléfono rápidamente porque era una llamada de publicidad molesta no solicitada", exampleTranslation: "Ich legte schnell auf weil es ein lästiger unerwünschter Werbeanruf war" },
      { id: "gs_tel_6", german: "Mailbox", spanish: "Buzón de voz", difficulty: "easy", example: "Dejé un mensaje en tu buzón de voz explicando detalladamente la situación urgente del proyecto", exampleTranslation: "Ich hinterließ eine Nachricht auf deiner Mailbox und erklärte ausführlich die dringende Projektsituation" },
      { id: "gs_tel_7", german: "Videoanruf", spanish: "Videollamada", difficulty: "medium", example: "Hacemos videollamadas semanales con la familia que vive en otro país manteniendo contacto cercano", exampleTranslation: "Wir machen wöchentliche Videoanrufe mit der Familie die in einem anderen Land lebt und halten engen Kontakt" },
      { id: "gs_tel_8", german: "Rufnummer", spanish: "Número de teléfono", difficulty: "medium", example: "Dame tu número de teléfono nuevo para agregarte a mis contactos y poder llamarte fácilmente", exampleTranslation: "Gib mir deine neue Telefonnummer um dich zu meinen Kontakten hinzuzufügen und dich leicht anrufen zu können" },
      { id: "gs_tel_9", german: "Besetzt", spanish: "Ocupado", difficulty: "medium", example: "La línea está ocupada constantemente porque muchas personas intentan llamar al servicio de atención al cliente", exampleTranslation: "Die Leitung ist ständig besetzt weil viele Leute versuchen den Kundenservice anzurufen" },
      { id: "gs_tel_10", german: "Empfang", spanish: "Señal", difficulty: "medium", example: "No tengo buena señal de teléfono móvil en esta área montañosa remota sin torres", exampleTranslation: "Ich habe keinen guten Handyempfang in dieser abgelegenen bergigen Gegend ohne Türme" },
      { id: "gs_tel_11", german: "Roaming", spanish: "Itinerancia", difficulty: "medium", example: "Los cargos de itinerancia internacional pueden ser muy caros cuando viajas al extranjero sin plan", exampleTranslation: "Internationale Roaming-Gebühren können sehr teuer sein wenn du ohne Plan ins Ausland reist" },
      { id: "gs_tel_12", german: "Klingeln", spanish: "Sonar", difficulty: "medium", example: "Mi teléfono está sonando constantemente con llamadas de trabajo incluso durante las vacaciones merecidas", exampleTranslation: "Mein Telefon klingelt ständig mit Arbeitsanrufen sogar während des verdienten Urlaubs" },
      { id: "gs_tel_13", german: "Kannst du mich hören?", spanish: "¿Me escuchas?", difficulty: "hard", example: "¿Me escuchas bien? Hay mucho ruido de fondo y la conexión parece débil e inestable!", exampleTranslation: "Kannst du mich gut hören? Es gibt viel Hintergrundgeräusche und die Verbindung scheint schwach und instabil!" },
      { id: "gs_tel_14", german: "Verbindung unterbrochen", spanish: "Se cortó la llamada", difficulty: "hard", example: "Se cortó la llamada importante en medio de la conversación crucial! Tengo que volver a marcar inmediatamente!", exampleTranslation: "Der wichtige Anruf wurde mitten im entscheidenden Gespräch unterbrochen! Ich muss sofort zurückrufen!" },
      { id: "gs_tel_15", german: "Erreichbarkeit", spanish: "Disponibilidad", difficulty: "hard", example: "Mi disponibilidad telefónica es limitada durante reuniones pero siempre reviso mensajes después para responder rápido!", exampleTranslation: "Meine telefonische Erreichbarkeit ist während Meetings begrenzt aber ich checke Nachrichten danach immer um schnell zu antworten!" }
    ]
  },

  medical_hospital: {
    name: "Krankenhaus und Medizin",
    description: "Medizinische Einrichtungen und Behandlungen",
    icon: Stethoscope,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "gs_hosp_1", german: "Krankenhaus", spanish: "Hospital", difficulty: "easy", example: "El hospital moderno tiene equipos médicos avanzados y doctores especializados experimentados atendiendo pacientes", exampleTranslation: "Das moderne Krankenhaus hat fortschrittliche medizinische Ausrüstung und erfahrene Fachärzte die Patienten behandeln" },
      { id: "gs_hosp_2", german: "Arzt", spanish: "Médico", difficulty: "easy", example: "El médico especialista revisó mis exámenes cuidadosamente y explicó el diagnóstico con paciencia profesional", exampleTranslation: "Der Facharzt überprüfte meine Untersuchungen sorgfältig und erklärte die Diagnose mit professioneller Geduld" },
      { id: "gs_hosp_3", german: "Krankenschwester", spanish: "Enfermera", difficulty: "easy", example: "La enfermera dedicada cuida a los pacientes con compasión tomando signos vitales regularmente", exampleTranslation: "Die engagierte Krankenschwester pflegt die Patienten mit Mitgefühl und nimmt regelmäßig Vitalzeichen" },
      { id: "gs_hosp_4", german: "Patient", spanish: "Paciente", difficulty: "easy", example: "El paciente está recuperándose bien después de la cirugía complicada realizada por cirujanos expertos", exampleTranslation: "Der Patient erholt sich gut nach der komplizierten Operation die von erfahrenen Chirurgen durchgeführt wurde" },
      { id: "gs_hosp_5", german: "Behandlung", spanish: "Tratamiento", difficulty: "easy", example: "El tratamiento médico para esta enfermedad crónica requiere medicamentos diarios y chequeos mensuales regulares", exampleTranslation: "Die medizinische Behandlung für diese chronische Krankheit erfordert tägliche Medikamente und regelmäßige monatliche Untersuchungen" },
      { id: "gs_hosp_6", german: "Diagnose", spanish: "Diagnóstico", difficulty: "easy", example: "El diagnóstico temprano de enfermedades graves puede salvar vidas permitiendo tratamiento oportuno efectivo", exampleTranslation: "Die frühe Diagnose schwerer Krankheiten kann Leben retten indem sie rechtzeitige effektive Behandlung ermöglicht" },
      { id: "gs_hosp_7", german: "Röntgen", spanish: "Radiografía", difficulty: "medium", example: "Me hicieron una radiografía del pecho para descartar neumonía y otros problemas respiratorios graves", exampleTranslation: "Sie machten ein Röntgenbild meiner Brust um Lungenentzündung und andere ernsthafte Atemprobleme auszuschließen" },
      { id: "gs_hosp_8", german: "Bluttest", spanish: "Análisis de sangre", difficulty: "medium", example: "El análisis de sangre completo detecta problemas de salud midiendo niveles de vitaminas y minerales", exampleTranslation: "Der komplette Bluttest erkennt Gesundheitsprobleme indem er Vitamin- und Mineralienwerte misst" },
      { id: "gs_hosp_9", german: "Notaufnahme", spanish: "Urgencias", difficulty: "medium", example: "Fui a urgencias del hospital porque tenía dolor intenso en el abdomen que no desaparecía", exampleTranslation: "Ich ging zur Notaufnahme des Krankenhauses weil ich intensive Bauchschmerzen hatte die nicht verschwanden" },
      { id: "gs_hosp_10", german: "Intensivstation", spanish: "Cuidados intensivos", difficulty: "medium", example: "El paciente grave está en cuidados intensivos bajo monitoreo constante las veinticuatro horas diarias", exampleTranslation: "Der schwerkranke Patient ist auf der Intensivstation unter ständiger Überwachung vierundzwanzig Stunden täglich" },
      { id: "gs_hosp_11", german: "Chirurg", spanish: "Cirujano", difficulty: "medium", example: "El cirujano cardiovascular experimentado realizó una operación de corazón abierto exitosa salvando la vida", exampleTranslation: "Der erfahrene Herzchirurg führte eine erfolgreiche Herzoperation durch und rettete das Leben" },
      { id: "gs_hosp_12", german: "Entlassung", spanish: "Alta médica", difficulty: "medium", example: "Recibí el alta médica después de cinco días hospitalizados recuperándome satisfactoriamente de la intervención quirúrgica", exampleTranslation: "Ich erhielt die Entlassung nach fünf Tagen Krankenhausaufenthalt während ich mich zufriedenstellend von der Operation erholte" },
      { id: "gs_hosp_13", german: "Ich brauche einen Arzt", spanish: "Necesito un médico", difficulty: "hard", example: "Necesito urgentemente un médico! Tengo síntomas preocupantes que empeoran rápidamente y necesito atención inmediata!", exampleTranslation: "Ich brauche dringend einen Arzt! Ich habe besorgniserregende Symptome die sich schnell verschlimmern und brauche sofortige Versorgung!" },
      { id: "gs_hosp_14", german: "Krankenakte", spanish: "Historial médico", difficulty: "hard", example: "El historial médico completo del paciente es esencial para proporcionar el mejor tratamiento personalizado posible!", exampleTranslation: "Die vollständige Krankenakte des Patienten ist essentiell um die bestmögliche personalisierte Behandlung zu bieten!" },
      { id: "gs_hosp_15", german: "Gesundheitssystem", spanish: "Sistema de salud", difficulty: "hard", example: "El sistema de salud público debe garantizar acceso equitativo a atención médica de calidad para todos!", exampleTranslation: "Das öffentliche Gesundheitssystem muss gleichberechtigten Zugang zu qualitativ hochwertiger medizinischer Versorgung für alle garantieren!" }
    ]
  },

  beauty_cosmetics: {
    name: "Schönheit und Kosmetik",
    description: "Schönheitspflege und kosmetische Produkte",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "gs_beauty_1", german: "Schönheit", spanish: "Belleza", difficulty: "easy", example: "La belleza natural es importante pero la confianza interior es lo que realmente te hace brillar", exampleTranslation: "Natürliche Schönheit ist wichtig aber inneres Selbstvertrauen ist das was dich wirklich strahlen lässt" },
      { id: "gs_beauty_2", german: "Kosmetik", spanish: "Cosmética", difficulty: "easy", example: "Los productos de cosmética naturales orgánicos son mejores para la piel sensible sin químicos dañinos", exampleTranslation: "Natürliche organische Kosmetikprodukte sind besser für empfindliche Haut ohne schädliche Chemikalien" },
      { id: "gs_beauty_3", german: "Lippenstift", spanish: "Lápiz labial", difficulty: "easy", example: "El lápiz labial rojo clásico nunca pasa de moda y es perfecto para ocasiones elegantes", exampleTranslation: "Der klassische rote Lippenstift kommt nie aus der Mode und ist perfekt für elegante Anlässe" },
      { id: "gs_beauty_4", german: "Mascara", spanish: "Rímel", difficulty: "easy", example: "El rímel waterproof resistente al agua hace que las pestañas se vean más largas y voluminosas", exampleTranslation: "Die wasserfeste Mascara lässt die Wimpern länger und voluminöser aussehen" },
      { id: "gs_beauty_5", german: "Gesichtscreme", spanish: "Crema facial", difficulty: "easy", example: "Aplico crema facial hidratante todas las noches antes de dormir para mantener la piel suave", exampleTranslation: "Ich trage jeden Abend vor dem Schlafengehen feuchtigkeitsspendende Gesichtscreme auf um die Haut weich zu halten" },
      { id: "gs_beauty_6", german: "Sonnenschutz", spanish: "Protector solar", difficulty: "easy", example: "El protector solar con factor cincuenta protege la piel de los dañinos rayos ultravioleta del sol", exampleTranslation: "Sonnenschutz mit Faktor fünfzig schützt die Haut vor schädlichen UV-Strahlen der Sonne" },
      { id: "gs_beauty_7", german: "Hautpflege", spanish: "Cuidado de la piel", difficulty: "medium", example: "El cuidado de la piel diario incluye limpieza tonificación hidratación y protección solar contra el envejecimiento", exampleTranslation: "Tägliche Hautpflege beinhaltet Reinigung Tonisierung Befeuchtung und Sonnenschutz gegen Alterung" },
      { id: "gs_beauty_8", german: "Nagellack", spanish: "Esmalte de uñas", difficulty: "medium", example: "Me pinto las uñas con esmalte rosa brillante cada semana para mantener una apariencia cuidada", exampleTranslation: "Ich lackiere meine Nägel jede Woche mit glänzendem rosa Nagellack um ein gepflegtes Aussehen zu bewahren" },
      { id: "gs_beauty_9", german: "Friseur", spanish: "Peluquero", difficulty: "medium", example: "El peluquero profesional cortó mi cabello perfectamente siguiendo exactamente el estilo que pedí", exampleTranslation: "Der professionelle Friseur schnitt mein Haar perfekt und folgte genau dem Stil den ich wollte" },
      { id: "gs_beauty_10", german: "Salon", spanish: "Salón de belleza", difficulty: "medium", example: "Voy al salón de belleza mensualmente para tratamientos faciales masajes y cuidado profesional completo", exampleTranslation: "Ich gehe monatlich zum Schönheitssalon für Gesichtsbehandlungen Massagen und komplette professionelle Pflege" },
      { id: "gs_beauty_11", german: "Haarschnitt", spanish: "Corte de pelo", difficulty: "medium", example: "Necesito un corte de pelo urgente porque mi cabello está demasiado largo y despeinado", exampleTranslation: "Ich brauche dringend einen Haarschnitt weil mein Haar zu lang und ungepflegt ist" },
      { id: "gs_beauty_12", german: "Maniküre", spanish: "Manicura", difficulty: "medium", example: "Me hago manicura profesional cada dos semanas manteniendo mis uñas bonitas limpias y bien arregladas", exampleTranslation: "Ich lasse mir alle zwei Wochen eine professionelle Maniküre machen und halte meine Nägel schön sauber und gut gepflegt" },
      { id: "gs_beauty_13", german: "Du siehst toll aus", spanish: "Te ves hermosa", difficulty: "hard", example: "¡Te ves absolutamente hermosa hoy! Ese maquillaje y peinado te quedan perfectos realzando tu belleza natural!", exampleTranslation: "Du siehst heute absolut toll aus! Dieses Make-up und die Frisur stehen dir perfekt und heben deine natürliche Schönheit hervor!" },
      { id: "gs_beauty_14", german: "Schönheitsbehandlung", spanish: "Tratamiento de belleza", difficulty: "hard", example: "Los tratamientos de belleza facial profesionales rejuvenecen la piel mejorando textura tono y apariencia general!", exampleTranslation: "Professionelle Gesichtsschönheitsbehandlungen verjüngen die Haut und verbessern Textur Ton und allgemeines Aussehen!" },
      { id: "gs_beauty_15", german: "Natürliche Schönheit", spanish: "Belleza natural", difficulty: "hard", example: "La belleza natural auténtica viene de dentro irradiando confianza salud y felicidad genuina verdadera!", exampleTranslation: "Authentische natürliche Schönheit kommt von innen und strahlt Selbstvertrauen Gesundheit und echtes wahres Glück aus!" }
    ]
  },

  furniture_interior: {
    name: "Möbel und Einrichtung",
    description: "Wohnungsmöbel und Inneneinrichtung",
    icon: Armchair,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "gs_furn_1", german: "Möbel", spanish: "Muebles", difficulty: "easy", example: "Compramos muebles nuevos modernos para la sala incluyendo sofá mesa y estanterías elegantes", exampleTranslation: "Wir kauften neue moderne Möbel fürs Wohnzimmer einschließlich Sofa Tisch und elegante Regale" },
      { id: "gs_furn_2", german: "Sofa", spanish: "Sofá", difficulty: "easy", example: "El sofá grande cómodo de cuero es perfecto para relajarse viendo televisión con la familia", exampleTranslation: "Das große bequeme Ledersofa ist perfekt zum Entspannen beim Fernsehen mit der Familie" },
      { id: "gs_furn_3", german: "Sessel", spanish: "Sillón", difficulty: "easy", example: "Mi sillón favorito reclinable es el lugar perfecto para leer libros y tomar café tranquilamente", exampleTranslation: "Mein liebster verstellbarer Sessel ist der perfekte Ort um ruhig Bücher zu lesen und Kaffee zu trinken" },
      { id: "gs_furn_4", german: "Tisch", spanish: "Mesa", difficulty: "easy", example: "La mesa de comedor de madera maciza puede acomodar ocho personas cómodamente para cenas familiares", exampleTranslation: "Der Esstisch aus Massivholz kann bequem acht Personen für Familienessen unterbringen" },
      { id: "gs_furn_5", german: "Stuhl", spanish: "Silla", difficulty: "easy", example: "Estas sillas de diseño moderno son bonitas pero no muy cómodas para sentarse largas horas", exampleTranslation: "Diese Stühle mit modernem Design sind hübsch aber nicht sehr bequem um lange Stunden zu sitzen" },
      { id: "gs_furn_6", german: "Regal", spanish: "Estantería", difficulty: "easy", example: "La estantería alta de madera está llena de libros ordenados alfabéticamente por autor y tema", exampleTranslation: "Das hohe Holzregal ist voll mit Büchern alphabetisch nach Autor und Thema sortiert" },
      { id: "gs_furn_7", german: "Schrank", spanish: "Armario", difficulty: "medium", example: "El armario empotrado grande tiene mucho espacio para toda mi ropa zapatos y accesorios", exampleTranslation: "Der große Einbauschrank hat viel Platz für all meine Kleidung Schuhe und Accessoires" },
      { id: "gs_furn_8", german: "Kommode", spanish: "Cómoda", difficulty: "medium", example: "La cómoda antigua de madera tiene cajones espaciosos para guardar ropa interior y calcetines ordenadamente", exampleTranslation: "Die alte Holzkommode hat geräumige Schubladen um Unterwäsche und Socken ordentlich aufzubewahren" },
      { id: "gs_furn_9", german: "Vorhänge", spanish: "Cortinas", difficulty: "medium", example: "Las cortinas gruesas oscuras bloquean la luz solar permitiéndome dormir profundamente durante el día", exampleTranslation: "Die dicken dunklen Vorhänge blockieren das Sonnenlicht und erlauben mir tagsüber tief zu schlafen" },
      { id: "gs_furn_10", german: "Teppich", spanish: "Alfombra", difficulty: "medium", example: "La alfombra persa colorida grande decora la sala añadiendo calidez estilo y comodidad bajo los pies", exampleTranslation: "Der große bunte persische Teppich dekoriert das Wohnzimmer und fügt Wärme Stil und Komfort unter den Füßen hinzu" },
      { id: "gs_furn_11", german: "Lampe", spanish: "Lámpara", difficulty: "medium", example: "La lámpara de pie moderna proporciona iluminación ambiental suave creando atmósfera acogedora relajante", exampleTranslation: "Die moderne Stehlampe bietet sanfte Umgebungsbeleuchtung und schafft eine gemütliche entspannende Atmosphäre" },
      { id: "gs_furn_12", german: "Spiegel", spanish: "Espejo", difficulty: "medium", example: "El espejo grande de pared refleja luz natural haciendo que la habitación pequeña parezca más espaciosa", exampleTranslation: "Der große Wandspiegel reflektiert natürliches Licht und lässt den kleinen Raum geräumiger erscheinen" },
      { id: "gs_furn_13", german: "Wo kann ich kaufen?", spanish: "¿Dónde puedo comprar?", difficulty: "hard", example: "¿Dónde puedo comprar muebles de buena calidad a precios razonables? Necesito amueblar mi apartamento nuevo!", exampleTranslation: "Wo kann ich qualitativ gute Möbel zu vernünftigen Preisen kaufen? Ich muss meine neue Wohnung einrichten!" },
      { id: "gs_furn_14", german: "Einrichtungsstil", spanish: "Estilo de decoración", difficulty: "hard", example: "Mi estilo de decoración preferido es minimalista moderno con colores neutros y líneas limpias simples!", exampleTranslation: "Mein bevorzugter Einrichtungsstil ist minimalistisch modern mit neutralen Farben und sauberen einfachen Linien!" },
      { id: "gs_furn_15", german: "Wohnkomfort", spanish: "Comodidad del hogar", difficulty: "hard", example: "La comodidad del hogar es fundamental para el bienestar creando un espacio acogedor donde relajarse completamente!", exampleTranslation: "Wohnkomfort ist fundamental fürs Wohlbefinden und schafft einen gemütlichen Raum wo man sich komplett entspannen kann!" }
    ]
  },

  measurements_quantities: {
    name: "Maße und Mengen",
    description: "Messeinheiten und Mengenangaben",
    icon: Ruler,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "gs_meas_1", german: "Meter", spanish: "Metro", difficulty: "easy", example: "La habitación mide cinco metros de largo por cuatro de ancho con techos altos", exampleTranslation: "Das Zimmer misst fünf Meter Länge mal vier Breite mit hohen Decken" },
      { id: "gs_meas_2", german: "Zentimeter", spanish: "Centímetro", difficulty: "easy", example: "Necesito exactamente treinta centímetros de tela para hacer el dobladillo del vestido correctamente", exampleTranslation: "Ich brauche genau dreißig Zentimeter Stoff um den Saum des Kleides korrekt zu machen" },
      { id: "gs_meas_3", german: "Kilogramm", spanish: "Kilogramo", difficulty: "easy", example: "Compré dos kilogramos de manzanas frescas rojas en el mercado local de frutas", exampleTranslation: "Ich kaufte zwei Kilogramm frische rote Äpfel auf dem lokalen Obstmarkt" },
      { id: "gs_meas_4", german: "Gramm", spanish: "Gramo", difficulty: "easy", example: "La receta requiere doscientos gramos de harina y cien gramos de azúcar para el pastel", exampleTranslation: "Das Rezept erfordert zweihundert Gramm Mehl und hundert Gramm Zucker für den Kuchen" },
      { id: "gs_meas_5", german: "Liter", spanish: "Litro", difficulty: "easy", example: "Bebo al menos dos litros de agua mineral diariamente para mantenerme bien hidratado saludable", exampleTranslation: "Ich trinke täglich mindestens zwei Liter Mineralwasser um gut hydriert und gesund zu bleiben" },
      { id: "gs_meas_6", german: "Stück", spanish: "Pieza", difficulty: "easy", example: "Necesito cinco piezas de madera de dos metros cada una para construir los estantes", exampleTranslation: "Ich brauche fünf Stück Holz von je zwei Metern um die Regale zu bauen" },
      { id: "gs_meas_7", german: "Dutzend", spanish: "Docena", difficulty: "medium", example: "Compré una docena de huevos frescos orgánicos de granja para hacer tortillas y pasteles", exampleTranslation: "Ich kaufte ein Dutzend frische Bio-Eier vom Bauernhof um Omeletts und Kuchen zu machen" },
      { id: "gs_meas_8", german: "Paar", spanish: "Par", difficulty: "medium", example: "Necesito comprar un par de zapatos nuevos cómodos porque los viejos están muy gastados", exampleTranslation: "Ich muss ein Paar neue bequeme Schuhe kaufen weil die alten sehr abgenutzt sind" },
      { id: "gs_meas_9", german: "Temperatur", spanish: "Temperatura", difficulty: "medium", example: "La temperatura del horno debe estar a ciento ochenta grados para hornear el pastel perfectamente", exampleTranslation: "Die Ofentemperatur muss bei hundertachtzig Grad sein um den Kuchen perfekt zu backen" },
      { id: "gs_meas_10", german: "Gewicht", spanish: "Peso", difficulty: "medium", example: "El peso del paquete es de cinco kilos y cuesta mucho enviarlo internacionalmente", exampleTranslation: "Das Gewicht des Pakets ist fünf Kilo und es kostet viel es international zu versenden" },
      { id: "gs_meas_11", german: "Höhe", spanish: "Altura", difficulty: "medium", example: "La altura del edificio nuevo es de cincuenta metros con quince pisos residenciales modernos", exampleTranslation: "Die Höhe des neuen Gebäudes ist fünfzig Meter mit fünfzehn modernen Wohnetagen" },
      { id: "gs_meas_12", german: "Breite", spanish: "Anchura", difficulty: "medium", example: "La anchura de la puerta es insuficiente para pasar los muebles grandes necesitamos otra entrada", exampleTranslation: "Die Breite der Tür ist unzureichend um die großen Möbel durchzubringen wir brauchen einen anderen Eingang" },
      { id: "gs_meas_13", german: "Wie viel wiegt es?", spanish: "¿Cuánto pesa?", difficulty: "hard", example: "Disculpe, ¿cuánto pesa este paquete exactamente? Necesito saber para calcular el costo de envío internacional!", exampleTranslation: "Entschuldigung, wie viel wiegt dieses Paket genau? Ich muss es wissen um die internationalen Versandkosten zu berechnen!" },
      { id: "gs_meas_14", german: "Maßeinheiten", spanish: "Unidades de medida", difficulty: "hard", example: "Las unidades de medida métricas son más fáciles de usar que el sistema imperial americano!", exampleTranslation: "Metrische Maßeinheiten sind einfacher zu benutzen als das amerikanische imperiale System!" },
      { id: "gs_meas_15", german: "Genauigkeit", spanish: "Precisión", difficulty: "hard", example: "La precisión en las mediciones es crucial en construcción carpintería y cocina profesional para resultados perfectos!", exampleTranslation: "Genauigkeit beim Messen ist entscheidend im Bauwesen Tischlerei und professionellem Kochen für perfekte Ergebnisse!" }
    ]
  },

  banking_operations: {
    name: "Bankgeschäfte",
    description: "Bankdienstleistungen und Finanztransaktionen",
    icon: CreditCard,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "gs_bank2_1", german: "Bank", spanish: "Banco", difficulty: "easy", example: "Voy al banco cada semana para depositar mi cheque de pago en mi cuenta corriente", exampleTranslation: "Ich gehe jede Woche zur Bank um meinen Gehaltsscheck auf mein Girokonto einzuzahlen" },
      { id: "gs_bank2_2", german: "Geldautomat", spanish: "Cajero automático", difficulty: "easy", example: "Saco dinero del cajero automático usando mi tarjeta bancaria cuando necesito efectivo rápido", exampleTranslation: "Ich hebe Geld am Geldautomaten mit meiner Bankkarte ab wenn ich schnell Bargeld brauche" },
      { id: "gs_bank2_3", german: "Einzahlung", spanish: "Depósito", difficulty: "easy", example: "Hice un depósito de mil euros en mi cuenta de ahorros para el futuro", exampleTranslation: "Ich machte eine Einzahlung von tausend Euro auf mein Sparkonto für die Zukunft" },
      { id: "gs_bank2_4", german: "Abhebung", spanish: "Retiro", difficulty: "easy", example: "El retiro máximo diario del cajero automático es de quinientos euros por razones de seguridad", exampleTranslation: "Die tägliche maximale Abhebung am Geldautomaten ist fünfhundert Euro aus Sicherheitsgründen" },
      { id: "gs_bank2_5", german: "Kontostand", spanish: "Saldo", difficulty: "easy", example: "Reviso el saldo de mi cuenta bancaria frecuentemente usando la aplicación móvil del banco", exampleTranslation: "Ich überprüfe häufig meinen Bankkonto-Stand mit der mobilen Bank-App" },
      { id: "gs_bank2_6", german: "Kreditkarte", spanish: "Tarjeta de crédito", difficulty: "easy", example: "Uso mi tarjeta de crédito para compras grandes online porque ofrece protección y puntos", exampleTranslation: "Ich benutze meine Kreditkarte für große Online-Einkäufe weil sie Schutz und Punkte bietet" },
      { id: "gs_bank2_7", german: "Lastschrift", spanish: "Débito automático", difficulty: "medium", example: "Configuré débito automático para pagar facturas mensuales de servicios sin preocuparme de fechas", exampleTranslation: "Ich richtete Lastschrift ein um monatliche Rechnungen für Dienstleistungen zu bezahlen ohne mir Sorgen über Termine zu machen" },
      { id: "gs_bank2_8", german: "Zinsen", spanish: "Intereses", difficulty: "medium", example: "Los intereses de mi cuenta de ahorros son bajos pero el dinero está seguro protegido", exampleTranslation: "Die Zinsen meines Sparkontos sind niedrig aber das Geld ist sicher geschützt" },
      { id: "gs_bank2_9", german: "Darlehen", spanish: "Préstamo", difficulty: "medium", example: "Solicité un préstamo personal al banco para renovar completamente mi casa antigua deteriorada", exampleTranslation: "Ich beantragte einen Privatkredit bei der Bank um mein altes verfallenes Haus komplett zu renovieren" },
      { id: "gs_bank2_10", german: "Hypothek", spanish: "Hipoteca", difficulty: "medium", example: "Estamos pagando la hipoteca de nuestra casa durante treinta años con cuotas mensuales fijas", exampleTranslation: "Wir zahlen die Hypothek für unser Haus dreißig Jahre lang mit festen monatlichen Raten ab" },
      { id: "gs_bank2_11", german: "Kontoauszug", spanish: "Estado de cuenta", difficulty: "medium", example: "Recibo el estado de cuenta mensual por correo electrónico mostrando todas mis transacciones bancarias", exampleTranslation: "Ich erhalte den monatlichen Kontoauszug per E-Mail der alle meine Banktransaktionen zeigt" },
      { id: "gs_bank2_12", german: "Wechselkurs", spanish: "Tipo de cambio", difficulty: "medium", example: "El tipo de cambio entre euro y dólar fluctúa diariamente afectando transacciones internacionales", exampleTranslation: "Der Wechselkurs zwischen Euro und Dollar schwankt täglich und beeinflusst internationale Transaktionen" },
      { id: "gs_bank2_13", german: "Ich möchte überweisen", spanish: "Quiero transferir", difficulty: "hard", example: "Quiero transferir dinero a otra cuenta bancaria! ¿Qué información necesito proporcionar para completar la transacción?", exampleTranslation: "Ich möchte Geld auf ein anderes Bankkonto überweisen! Welche Informationen muss ich angeben um die Transaktion abzuschließen?" },
      { id: "gs_bank2_14", german: "Girokonto", spanish: "Cuenta corriente", difficulty: "hard", example: "Mi cuenta corriente no tiene comisiones mensuales y ofrece servicios bancarios digitales completos modernos!", exampleTranslation: "Mein Girokonto hat keine monatlichen Gebühren und bietet komplette moderne digitale Bankdienstleistungen!" },
      { id: "gs_bank2_15", german: "Finanzberatung", spanish: "Asesoría financiera", difficulty: "hard", example: "La asesoría financiera profesional te ayuda a tomar decisiones inteligentes de inversión planificando tu futuro económico!", exampleTranslation: "Professionelle Finanzberatung hilft dir intelligente Investitionsentscheidungen zu treffen und deine wirtschaftliche Zukunft zu planen!" }
    ]
  },

  photography_arts: {
    name: "Fotografie und bildende Kunst",
    description: "Fotografische Kunst und visuelle Medien",
    icon: Camera,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "gs_photo_1", german: "Kamera", spanish: "Cámara", difficulty: "easy", example: "Mi cámara digital profesional toma fotos de alta resolución perfectas para imprimir en gran formato", exampleTranslation: "Meine professionelle Digitalkamera macht hochauflösende Fotos perfekt zum Drucken in großem Format" },
      { id: "gs_photo_2", german: "Foto", spanish: "Foto", difficulty: "easy", example: "Tomé fotos hermosas del atardecer sobre el mar capturando colores vibrantes espectaculares naturales", exampleTranslation: "Ich machte schöne Fotos vom Sonnenuntergang über dem Meer und fing spektakuläre natürliche lebendige Farben ein" },
      { id: "gs_photo_3", german: "Objektiv", spanish: "Lente", difficulty: "easy", example: "El lente gran angular es perfecto para fotografiar paisajes amplios y arquitectura impresionante", exampleTranslation: "Das Weitwinkelobjektiv ist perfekt zum Fotografieren weiter Landschaften und beeindruckender Architektur" },
      { id: "gs_photo_4", german: "Blitz", spanish: "Flash", difficulty: "easy", example: "Uso el flash externo potente cuando fotografío en interiores oscuros sin luz natural suficiente", exampleTranslation: "Ich benutze den leistungsstarken externen Blitz wenn ich in dunklen Innenräumen ohne ausreichend natürliches Licht fotografiere" },
      { id: "gs_photo_5", german: "Belichtung", spanish: "Exposición", difficulty: "easy", example: "La exposición correcta es crucial para obtener fotografías bien iluminadas sin áreas oscuras ni quemadas", exampleTranslation: "Die korrekte Belichtung ist entscheidend um gut beleuchtete Fotos ohne dunkle oder überbelichtete Bereiche zu bekommen" },
      { id: "gs_photo_6", german: "Fokus", spanish: "Enfoque", difficulty: "easy", example: "Ajusta el enfoque manualmente para asegurar que el sujeto principal esté nítido y claro", exampleTranslation: "Stelle den Fokus manuell ein um sicherzustellen dass das Hauptmotiv scharf und klar ist" },
      { id: "gs_photo_7", german: "Porträt", spanish: "Retrato", difficulty: "medium", example: "El retrato fotográfico profesional captura la personalidad única y esencia de la persona fotografiada", exampleTranslation: "Das professionelle fotografische Porträt fängt die einzigartige Persönlichkeit und Essenz der fotografierten Person ein" },
      { id: "gs_photo_8", german: "Landschaft", spanish: "Paisaje", difficulty: "medium", example: "La fotografía de paisaje requiere paciencia esperando la luz perfecta y condiciones atmosféricas ideales", exampleTranslation: "Landschaftsfotografie erfordert Geduld beim Warten auf perfektes Licht und ideale atmosphärische Bedingungen" },
      { id: "gs_photo_9", german: "Bearbeiten", spanish: "Editar", difficulty: "medium", example: "Edito mis fotos usando software profesional ajustando colores brillo contraste y saturación cuidadosamente", exampleTranslation: "Ich bearbeite meine Fotos mit professioneller Software und passe sorgfältig Farben Helligkeit Kontrast und Sättigung an" },
      { id: "gs_photo_10", german: "Filter", spanish: "Filtro", difficulty: "medium", example: "Los filtros fotográficos digitales pueden mejorar dramáticamente el ambiente y estética de las imágenes", exampleTranslation: "Digitale Fotofilter können die Stimmung und Ästhetik der Bilder dramatisch verbessern" },
      { id: "gs_photo_11", german: "Ausstellung", spanish: "Exposición fotográfica", difficulty: "medium", example: "La exposición fotográfica en la galería muestra obras impresionantes de artistas contemporáneos talentosos emergentes", exampleTranslation: "Die Fotoausstellung in der Galerie zeigt beeindruckende Werke talentierter aufstrebender zeitgenössischer Künstler" },
      { id: "gs_photo_12", german: "Stativ", spanish: "Trípode", difficulty: "medium", example: "Uso un trípode estable para fotografías de larga exposición nocturnas evitando movimientos y desenfoque", exampleTranslation: "Ich benutze ein stabiles Stativ für nächtliche Langzeitbelichtungsfotografien um Bewegungen und Unschärfe zu vermeiden" },
      { id: "gs_photo_13", german: "Nimm ein Foto", spanish: "Toma una foto", difficulty: "hard", example: "Por favor toma una foto nuestra frente a este monumento histórico! Quiero recordar este momento especial!", exampleTranslation: "Bitte nimm ein Foto von uns vor diesem historischen Monument! Ich möchte mich an diesen besonderen Moment erinnern!" },
      { id: "gs_photo_14", german: "Bildkomposition", spanish: "Composición fotográfica", difficulty: "hard", example: "La composición fotográfica profesional usa reglas como tercios líneas guía y equilibrio creando imágenes impactantes!", exampleTranslation: "Professionelle Bildkomposition nutzt Regeln wie Drittel Führungslinien und Balance um eindrucksvolle Bilder zu schaffen!" },
      { id: "gs_photo_15", german: "Fotojournalismus", spanish: "Fotoperiodismo", difficulty: "hard", example: "El fotoperiodismo documenta eventos importantes de la historia capturando momentos decisivos que cambian el mundo!", exampleTranslation: "Fotojournalismus dokumentiert wichtige Ereignisse der Geschichte und fängt entscheidende Momente ein die die Welt verändern!" }
    ]
  },

  reading_literature: {
    name: "Lesen und Literatur",
    description: "Bücher und literarisches Schaffen",
    icon: BookMarked,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    words: [
      { id: "gs_read_1", german: "Lesen", spanish: "Leer", difficulty: "easy", example: "Leo libros interesantes cada noche antes de dormir relajándome con historias fascinantes cautivadoras", exampleTranslation: "Ich lese jeden Abend vor dem Schlafengehen interessante Bücher und entspanne mich mit fesselnden faszinierenden Geschichten" },
      { id: "gs_read_2", german: "Buch", spanish: "Libro", difficulty: "easy", example: "Este libro de aventuras emocionante tiene una trama complicada con personajes memorables bien desarrollados", exampleTranslation: "Dieses spannende Abenteuerbuch hat eine komplizierte Handlung mit einprägsamen gut entwickelten Charakteren" },
      { id: "gs_read_3", german: "Roman", spanish: "Novela", difficulty: "easy", example: "La novela histórica transporta a los lectores a épocas pasadas con descripciones detalladas vívidas", exampleTranslation: "Der historische Roman transportiert Leser in vergangene Epochen mit detaillierten lebendigen Beschreibungen" },
      { id: "gs_read_4", german: "Gedicht", spanish: "Poema", difficulty: "easy", example: "Los poemas románticos expresan sentimientos profundos del amor usando metáforas hermosas y ritmo musical", exampleTranslation: "Romantische Gedichte drücken tiefe Gefühle der Liebe mit schönen Metaphern und musikalischem Rhythmus aus" },
      { id: "gs_read_5", german: "Autor", spanish: "Autor", difficulty: "easy", example: "El autor famoso escribió más de veinte novelas bestsellers traducidas a cincuenta idiomas mundialmente", exampleTranslation: "Der berühmte Autor schrieb mehr als zwanzig Bestseller-Romane übersetzt in fünfzig Sprachen weltweit" },
      { id: "gs_read_6", german: "Kapitel", spanish: "Capítulo", difficulty: "easy", example: "Este capítulo emocionante termina con un suspenso increíble dejándome ansioso por leer el siguiente", exampleTranslation: "Dieses spannende Kapitel endet mit unglaublicher Spannung und lässt mich begierig darauf das nächste zu lesen" },
      { id: "gs_read_7", german: "Handlung", spanish: "Argumento", difficulty: "medium", example: "El argumento de la novela es complejo intrigante con giros inesperados que sorprenden constantemente", exampleTranslation: "Die Handlung des Romans ist komplex und fesselnd mit unerwarteten Wendungen die ständig überraschen" },
      { id: "gs_read_8", german: "Protagonist", spanish: "Protagonista", difficulty: "medium", example: "El protagonista de la historia enfrenta desafíos difíciles que lo transforman y lo hacen crecer", exampleTranslation: "Der Protagonist der Geschichte steht schwierigen Herausforderungen gegenüber die ihn verwandeln und wachsen lassen" },
      { id: "gs_read_9", german: "Verlag", spanish: "Editorial", difficulty: "medium", example: "La editorial prestigiosa publica obras de autores reconocidos y nuevos talentos literarios emergentes prometedores", exampleTranslation: "Der renommierte Verlag veröffentlicht Werke anerkannter Autoren und neuer vielversprechender aufstrebender literarischer Talente" },
      { id: "gs_read_10", german: "Lesezeichen", spanish: "Marcador de página", difficulty: "medium", example: "Uso un marcador de página bonito para recordar donde dejé de leer sin doblar páginas", exampleTranslation: "Ich benutze ein hübsches Lesezeichen um mich zu erinnern wo ich aufgehört habe zu lesen ohne Seiten zu knicken" },
      { id: "gs_read_11", german: "Rezension", spanish: "Reseña", difficulty: "medium", example: "Escribí una reseña positiva del libro recomendándolo a otros lectores apasionados de literatura buena", exampleTranslation: "Ich schrieb eine positive Rezension des Buches und empfahl es anderen leidenschaftlichen Lesern guter Literatur" },
      { id: "gs_read_12", german: "Buchladen", spanish: "Librería", difficulty: "medium", example: "Paso horas en la librería independiente local explorando estantes llenos de tesoros literarios únicos", exampleTranslation: "Ich verbringe Stunden im lokalen unabhängigen Buchladen und erkunde Regale voll einzigartiger literarischer Schätze" },
      { id: "gs_read_13", german: "Was liest du?", spanish: "¿Qué estás leyendo?", difficulty: "hard", example: "¿Qué libro interesante estás leyendo actualmente? Me encantaría una recomendación de algo bueno para leer!", exampleTranslation: "Welches interessante Buch liest du gerade? Ich würde mich über eine Empfehlung für etwas Gutes zum Lesen freuen!" },
      { id: "gs_read_14", german: "Leseverständnis", spanish: "Comprensión lectora", difficulty: "hard", example: "La comprensión lectora profunda requiere concentración atención al detalle y pensamiento crítico analítico constante!", exampleTranslation: "Tiefes Leseverständnis erfordert Konzentration Aufmerksamkeit fürs Detail und ständiges kritisches analytisches Denken!" },
      { id: "gs_read_15", german: "Literarische Bildung", spanish: "Cultura literaria", difficulty: "hard", example: "La cultura literaria amplia enriquece la mente expandiendo vocabulario perspectivas y comprensión del mundo humano!", exampleTranslation: "Umfassende literarische Bildung bereichert den Geist erweitert Vokabular Perspektiven und Verständnis der menschlichen Welt!" }
    ]
  },

  music_genres: {
    name: "Musikgenres und Konzerte",
    description: "Musikstile und Live-Veranstaltungen",
    icon: Music,
    color: "from-fuchsia-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "gs_genre_1", german: "Musik", spanish: "Música", difficulty: "easy", example: "La música clásica relajante me ayuda a concentrarme mientras trabajo en proyectos importantes complejos", exampleTranslation: "Entspannende klassische Musik hilft mir mich zu konzentrieren während ich an wichtigen komplexen Projekten arbeite" },
      { id: "gs_genre_2", german: "Rock", spanish: "Rock", difficulty: "easy", example: "El rock clásico de los años setenta tiene guitarras eléctricas potentes y letras significativas profundas", exampleTranslation: "Klassischer Rock der Siebziger hat kraftvolle E-Gitarren und bedeutungsvolle tiefe Texte" },
      { id: "gs_genre_3", german: "Jazz", spanish: "Jazz", difficulty: "easy", example: "El jazz improvisado tiene ritmos complejos sincopados y requiere músicos extremadamente talentosos técnicamente", exampleTranslation: "Improvisierter Jazz hat komplexe synkopierte Rhythmen und erfordert extrem technisch talentierte Musiker" },
      { id: "gs_genre_4", german: "Pop", spanish: "Pop", difficulty: "easy", example: "La música pop moderna actual es pegajosa comercial y domina las listas de éxitos internacionales", exampleTranslation: "Moderne aktuelle Popmusik ist eingängig kommerziell und dominiert die internationalen Hitlisten" },
      { id: "gs_genre_5", german: "Klassik", spanish: "Clásica", difficulty: "easy", example: "La música clásica de compositores como Mozart y Beethoven es atemporal y emocionalmente profunda", exampleTranslation: "Klassische Musik von Komponisten wie Mozart und Beethoven ist zeitlos und emotional tiefgründig" },
      { id: "gs_genre_6", german: "Hip-Hop", spanish: "Hip-hop", difficulty: "easy", example: "El hip-hop urbano moderno combina rap letras poéticas y ritmos electrónicos potentes innovadores", exampleTranslation: "Moderner urbaner Hip-Hop kombiniert Rap poetische Texte und kraftvolle innovative elektronische Rhythmen" },
      { id: "gs_genre_7", german: "Konzert", spanish: "Concierto", difficulty: "medium", example: "Fui a un concierto de rock en vivo espectacular con miles de fanáticos entusiastas gritando", exampleTranslation: "Ich ging zu einem spektakulären Live-Rockkonzert mit Tausenden enthusiastischen schreienden Fans" },
      { id: "gs_genre_8", german: "Festival", spanish: "Festival", difficulty: "medium", example: "El festival de música al aire libre dura tres días con docenas de bandas tocando en múltiples escenarios", exampleTranslation: "Das Open-Air-Musikfestival dauert drei Tage mit Dutzenden Bands die auf mehreren Bühnen spielen" },
      { id: "gs_genre_9", german: "Bühne", spanish: "Escenario", difficulty: "medium", example: "Los músicos subieron al escenario iluminado y comenzaron a tocar ante miles de espectadores emocionados", exampleTranslation: "Die Musiker stiegen auf die beleuchtete Bühne und begannen vor Tausenden aufgeregten Zuschauern zu spielen" },
      { id: "gs_genre_10", german: "Publikum", spanish: "Público", difficulty: "medium", example: "El público entusiasta aplaudió de pie durante diez minutos después de la actuación magistral emotiva", exampleTranslation: "Das enthusiastische Publikum applaudierte stehend zehn Minuten lang nach der meisterhaften emotionalen Aufführung" },
      { id: "gs_genre_11", german: "Eintrittskarte", spanish: "Entrada", difficulty: "medium", example: "Las entradas para el concierto del grupo famoso se agotaron en minutos después de salir a la venta", exampleTranslation: "Die Tickets für das Konzert der berühmten Band waren Minuten nach Verkaufsstart ausverkauft" },
      { id: "gs_genre_12", german: "Zugabe", spanish: "Bis", difficulty: "medium", example: "El público gritó pidiendo bis y la banda volvió al escenario tocando dos canciones más", exampleTranslation: "Das Publikum schrie nach einer Zugabe und die Band kehrte zur Bühne zurück und spielte zwei weitere Lieder" },
      { id: "gs_genre_13", german: "Was für Musik magst du?", spanish: "¿Qué música te gusta?", difficulty: "hard", example: "¿Qué tipo de música te gusta escuchar? A mí me encanta el jazz suave relajante para las tardes!", exampleTranslation: "Was für Musik magst du hören? Ich liebe sanften entspannenden Jazz für die Abende!" },
      { id: "gs_genre_14", german: "Musikgeschmack", spanish: "Gusto musical", difficulty: "hard", example: "Mi gusto musical es muy variado ecléctico disfrutando desde clásica hasta rock electrónica y world music!", exampleTranslation: "Mein Musikgeschmack ist sehr vielfältig und eklektisch und ich genieße von Klassik bis Rock Elektronik und Weltmusik!" },
      { id: "gs_genre_15", german: "Live-Musik", spanish: "Música en vivo", difficulty: "hard", example: "La música en vivo tiene una energía especial única que no se puede replicar en grabaciones de estudio!", exampleTranslation: "Live-Musik hat eine besondere einzigartige Energie die nicht in Studioaufnahmen repliziert werden kann!" }
    ]
  },

  personality_character: {
    name: "Persönlichkeit und Charakter",
    description: "Charaktereigenschaften und Persönlichkeitsmerkmale",
    icon: Smile,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { id: "gs_pers_1", german: "Freundlich", spanish: "Amable", difficulty: "easy", example: "Mi vecino es muy amable siempre saludando con sonrisa cálida y ofreciendo ayuda generosa", exampleTranslation: "Mein Nachbar ist sehr freundlich grüßt immer mit warmem Lächeln und bietet großzügige Hilfe an" },
      { id: "gs_pers_2", german: "Geduldig", spanish: "Paciente", difficulty: "easy", example: "Necesitas ser paciente tolerante cuando enseñas a niños pequeños porque aprenden a su propio ritmo", exampleTranslation: "Du musst geduldig und tolerant sein wenn du kleine Kinder unterrichtest weil sie in ihrem eigenen Tempo lernen" },
      { id: "gs_pers_3", german: "Ehrlich", spanish: "Honesto", difficulty: "easy", example: "Una persona honesta sincera siempre dice la verdad incluso cuando es difícil o incómodo", exampleTranslation: "Eine ehrliche aufrichtige Person sagt immer die Wahrheit selbst wenn es schwierig oder unangenehm ist" },
      { id: "gs_pers_4", german: "Fleißig", spanish: "Trabajador", difficulty: "easy", example: "Mi hermana es muy trabajadora dedicada estudiando largas horas para lograr sus metas académicas", exampleTranslation: "Meine Schwester ist sehr fleißig und engagiert und lernt lange Stunden um ihre akademischen Ziele zu erreichen" },
      { id: "gs_pers_5", german: "Großzügig", spanish: "Generoso", difficulty: "easy", example: "Es una persona generosa que siempre ayuda a otros donando tiempo dinero y recursos", exampleTranslation: "Er ist eine großzügige Person die anderen immer hilft indem sie Zeit Geld und Ressourcen spendet" },
      { id: "gs_pers_6", german: "Kreativ", spanish: "Creativo", difficulty: "easy", example: "Los artistas creativos innovadores ven el mundo diferente encontrando inspiración en lugares inesperados cotidianos", exampleTranslation: "Kreative innovative Künstler sehen die Welt anders und finden Inspiration an unerwarteten alltäglichen Orten" },
      { id: "gs_pers_7", german: "Optimistisch", spanish: "Optimista", difficulty: "medium", example: "Las personas optimistas positivas enfrentan desafíos con actitud alegre viendo oportunidades en problemas", exampleTranslation: "Optimistische positive Menschen stellen sich Herausforderungen mit fröhlicher Einstellung und sehen Chancen in Problemen" },
      { id: "gs_pers_8", german: "Schüchtern", spanish: "Tímido", difficulty: "medium", example: "Era muy tímido reservado en la escuela pero con los años gané confianza hablando públicamente", exampleTranslation: "Ich war sehr schüchtern und zurückhaltend in der Schule aber über die Jahre gewann ich Selbstvertrauen beim öffentlichen Sprechen" },
      { id: "gs_pers_9", german: "Mutig", spanish: "Valiente", difficulty: "medium", example: "Ser valiente no significa no tener miedo sino enfrentar tus miedos con determinación firme", exampleTranslation: "Mutig zu sein bedeutet nicht keine Angst zu haben sondern deinen Ängsten mit fester Entschlossenheit zu begegnen" },
      { id: "gs_pers_10", german: "Zuverlässig", spanish: "Confiable", difficulty: "medium", example: "Un amigo confiable cumple sus promesas y siempre está presente cuando lo necesitas verdaderamente", exampleTranslation: "Ein zuverlässiger Freund hält seine Versprechen und ist immer da wenn du ihn wirklich brauchst" },
      { id: "gs_pers_11", german: "Stur", spanish: "Terco", difficulty: "medium", example: "Mi abuelo es terco obstinado y nunca cambia de opinión sin importar cuánto argumentes lógicamente", exampleTranslation: "Mein Großvater ist stur und eigensinnig und ändert nie seine Meinung egal wie logisch du argumentierst" },
      { id: "gs_pers_12", german: "Humorvoll", spanish: "Gracioso", difficulty: "medium", example: "Mi tío es muy gracioso divertido siempre contando chistes y haciendo reír a toda la familia", exampleTranslation: "Mein Onkel ist sehr humorvoll und witzig erzählt immer Witze und bringt die ganze Familie zum Lachen" },
      { id: "gs_pers_13", german: "Wie bist du?", spanish: "¿Cómo eres?", difficulty: "hard", example: "¿Cómo eres tú como persona? Cuéntame sobre tu personalidad tus valores y lo que te hace único!", exampleTranslation: "Wie bist du als Person? Erzähl mir über deine Persönlichkeit deine Werte und was dich einzigartig macht!" },
      { id: "gs_pers_14", german: "Charakterstärke", spanish: "Fortaleza de carácter", difficulty: "hard", example: "La fortaleza de carácter se muestra en momentos difíciles cuando mantienes tus principios valores fundamentales!", exampleTranslation: "Charakterstärke zeigt sich in schwierigen Momenten wenn du deine Prinzipien und fundamentalen Werte beibehältst!" },
      { id: "gs_pers_15", german: "Persönlichkeitsentwicklung", spanish: "Desarrollo personal", difficulty: "hard", example: "El desarrollo personal continuo requiere autoreflexión honesta apertura al cambio y voluntad de mejorar constantemente!", exampleTranslation: "Kontinuierliche Persönlichkeitsentwicklung erfordert ehrliche Selbstreflexion Offenheit für Veränderung und den Willen sich ständig zu verbessern!" }
    ]
  },

  colors_descriptions: {
    name: "Farben und Beschreibungen",
    description: "Farben und beschreibende Adjektive",
    icon: PaintBucket,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "gs_col_1", german: "Hell", spanish: "Claro", difficulty: "easy", example: "Prefiero colores claros suaves como beige crema y blanco para decorar mi dormitorio tranquilo", exampleTranslation: "Ich bevorzuge helle sanfte Farben wie Beige Creme und Weiß um mein ruhiges Schlafzimmer zu dekorieren" },
      { id: "gs_col_2", german: "Dunkel", spanish: "Oscuro", difficulty: "easy", example: "Los colores oscuros profundos como negro azul marino y gris dan elegancia sofisticada al salón", exampleTranslation: "Dunkle tiefe Farben wie Schwarz Marineblau und Grau verleihen dem Wohnzimmer sophistische Eleganz" },
      { id: "gs_col_3", german: "Bunt", spanish: "Colorido", difficulty: "easy", example: "El mercado mexicano tradicional es muy colorido vibrante con frutas flores y artesanías brillantes", exampleTranslation: "Der traditionelle mexikanische Markt ist sehr bunt und lebendig mit Früchten Blumen und leuchtenden Handwerksartikeln" },
      { id: "gs_col_4", german: "Rosa", spanish: "Rosa", difficulty: "easy", example: "El vestido rosa pálido delicado es perfecto para bodas románticas y celebraciones primaverales elegantes", exampleTranslation: "Das zarte blassrosa Kleid ist perfekt für romantische Hochzeiten und elegante Frühlingsfeiern" },
      { id: "gs_col_5", german: "Lila", spanish: "Morado", difficulty: "easy", example: "El color morado púrpura profundo representa realeza elegancia y tiene un aspecto majestuoso único", exampleTranslation: "Die tiefe purpurne lila Farbe repräsentiert Königtum Eleganz und hat ein einzigartiges majestätisches Aussehen" },
      { id: "gs_col_6", german: "Orange", spanish: "Naranja", difficulty: "easy", example: "El naranja brillante vibrante es un color cálido energético que llama la atención inmediatamente", exampleTranslation: "Das leuchtende lebendige Orange ist eine warme energetische Farbe die sofort Aufmerksamkeit erregt" },
      { id: "gs_col_7", german: "Türkis", spanish: "Turquesa", difficulty: "medium", example: "El agua turquesa cristalina del mar Caribe es increíblemente hermosa y atrae turistas mundialmente", exampleTranslation: "Das kristallklare türkisfarbene Wasser der Karibik ist unglaublich schön und zieht Touristen weltweit an" },
      { id: "gs_col_8", german: "Golden", spanish: "Dorado", difficulty: "medium", example: "El atardecer dorado sobre las montañas crea una escena mágica inolvidable que fotografío siempre", exampleTranslation: "Der goldene Sonnenuntergang über den Bergen schafft eine magische unvergessliche Szene die ich immer fotografiere" },
      { id: "gs_col_9", german: "Silber", spanish: "Plateado", difficulty: "medium", example: "La joyería plateada elegante combina perfectamente con cualquier outfit formal o casual moderno", exampleTranslation: "Eleganter Silberschmuck passt perfekt zu jedem formellen oder casual modernen Outfit" },
      { id: "gs_col_10", german: "Beige", spanish: "Beige", difficulty: "medium", example: "El beige neutro es un color versátil que combina bien con otros tonos creando armonía", exampleTranslation: "Neutrales Beige ist eine vielseitige Farbe die gut mit anderen Tönen kombiniert und Harmonie schafft" },
      { id: "gs_col_11", german: "Pastellfarben", spanish: "Colores pastel", difficulty: "medium", example: "Los colores pastel suaves delicados son perfectos para decoración infantil creando ambiente tranquilo dulce", exampleTranslation: "Sanfte zarte Pastellfarben sind perfekt für Kinderdekoration und schaffen eine ruhige süße Atmosphäre" },
      { id: "gs_col_12", german: "Schattierung", spanish: "Tonalidad", difficulty: "medium", example: "La tonalidad correcta del azul es importante para que las paredes del dormitorio sean relajantes", exampleTranslation: "Die richtige Blauschattierung ist wichtig damit die Schlafzimmerwände entspannend sind" },
      { id: "gs_col_13", german: "Welche Farbe magst du?", spanish: "¿Qué color te gusta?", difficulty: "hard", example: "¿Qué color prefieres para decorar tu casa? A mí me encantan los tonos tierra cálidos naturales!", exampleTranslation: "Welche Farbe bevorzugst du um dein Haus zu dekorieren? Ich liebe warme natürliche Erdtöne!" },
      { id: "gs_col_14", german: "Farbpsychologie", spanish: "Psicología del color", difficulty: "hard", example: "La psicología del color estudia cómo diferentes tonos afectan emociones estados de ánimo y comportamiento humano!", exampleTranslation: "Farbpsychologie studiert wie verschiedene Töne Emotionen Stimmungen und menschliches Verhalten beeinflussen!" },
      { id: "gs_col_15", german: "Farbkombination", spanish: "Combinación de colores", difficulty: "hard", example: "La combinación de colores complementarios armoniosa crea diseños visuales atractivos equilibrados que agradan al ojo!", exampleTranslation: "Harmonische Farbkombination komplementärer Farben schafft attraktive ausgewogene visuelle Designs die dem Auge gefallen!" }
    ]
  },

  festivals_traditions: {
    name: "Feste und Traditionen",
    description: "Kulturelle Feste und traditionelle Bräuche",
    icon: PartyPopper,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "gs_fest_1", german: "Weihnachten", spanish: "Navidad", difficulty: "easy", example: "La Navidad es mi época favorita del año con familia reunida regalos y comida deliciosa", exampleTranslation: "Weihnachten ist meine Lieblings-Jahreszeit mit versammelter Familie Geschenken und köstlichem Essen" },
      { id: "gs_fest_2", german: "Ostern", spanish: "Pascua", difficulty: "easy", example: "En Pascua los niños buscan huevos de chocolate escondidos en el jardín con gran entusiasmo", exampleTranslation: "An Ostern suchen Kinder mit großer Begeisterung nach im Garten versteckten Schokoladeneiern" },
      { id: "gs_fest_3", german: "Neujahr", spanish: "Año Nuevo", difficulty: "easy", example: "Celebramos el Año Nuevo con fuegos artificiales champán y abrazos a medianoche exacta", exampleTranslation: "Wir feiern Neujahr mit Feuerwerk Champagner und Umarmungen um genau Mitternacht" },
      { id: "gs_fest_4", german: "Geburtstag", spanish: "Cumpleaños", difficulty: "easy", example: "Mi cumpleaños es el quince de mayo y siempre celebro con amigos cercanos y familia", exampleTranslation: "Mein Geburtstag ist am fünfzehnten Mai und ich feiere immer mit engen Freunden und Familie" },
      { id: "gs_fest_5", german: "Hochzeit", spanish: "Boda", difficulty: "easy", example: "La boda elegante fue en una iglesia histórica hermosa seguida de recepción con cena y baile", exampleTranslation: "Die elegante Hochzeit war in einer schönen historischen Kirche gefolgt von einem Empfang mit Abendessen und Tanz" },
      { id: "gs_fest_6", german: "Tradition", spanish: "Tradición", difficulty: "easy", example: "Las tradiciones familiares culturales nos conectan con nuestras raíces y fortalecen vínculos generacionales", exampleTranslation: "Kulturelle Familientraditionen verbinden uns mit unseren Wurzeln und stärken generationsübergreifende Bindungen" },
      { id: "gs_fest_7", german: "Brauch", spanish: "Costumbre", difficulty: "medium", example: "Es costumbre local que todos se saluden con besos en las mejillas al encontrarse", exampleTranslation: "Es ist lokaler Brauch dass alle sich beim Treffen mit Küssen auf die Wangen begrüßen" },
      { id: "gs_fest_8", german: "Fest", spanish: "Fiesta tradicional", difficulty: "medium", example: "La fiesta tradicional del pueblo incluye música folclórica bailes regionales y comida típica auténtica", exampleTranslation: "Das traditionelle Dorffest beinhaltet Volksmusik regionale Tänze und authentisches typisches Essen" },
      { id: "gs_fest_9", german: "Volksfest", spanish: "Feria popular", difficulty: "medium", example: "La feria popular anual tiene atracciones juegos puestos de comida y entretenimiento para todas las edades", exampleTranslation: "Das jährliche Volksfest hat Attraktionen Spiele Essensstände und Unterhaltung für alle Altersgruppen" },
      { id: "gs_fest_10", german: "Prozession", spanish: "Procesión", difficulty: "medium", example: "La procesión religiosa tradicional recorre las calles principales del pueblo durante la Semana Santa", exampleTranslation: "Die traditionelle religiöse Prozession läuft während der Karwoche durch die Hauptstraßen des Dorfes" },
      { id: "gs_fest_11", german: "Karneval", spanish: "Carnaval", difficulty: "medium", example: "El carnaval brasileño famoso tiene desfiles coloridos con disfraces elaborados música y baile incansable", exampleTranslation: "Der berühmte brasilianische Karneval hat bunte Paraden mit aufwendigen Kostümen Musik und unermüdlichem Tanz" },
      { id: "gs_fest_12", german: "Silvester", spanish: "Nochevieja", difficulty: "medium", example: "En Nochevieja comemos doce uvas a medianoche una por cada campanada para buena suerte", exampleTranslation: "An Silvester essen wir um Mitternacht zwölf Trauben eine bei jedem Glockenschlag für Glück" },
      { id: "gs_fest_13", german: "Frohes Fest", spanish: "Felices fiestas", difficulty: "hard", example: "¡Felices fiestas a todos! Que disfruten de momentos especiales con seres queridos durante estas celebraciones!", exampleTranslation: "Frohes Fest an alle! Genießt besondere Momente mit geliebten Menschen während dieser Feiern!" },
      { id: "gs_fest_14", german: "Kulturelles Erbe", spanish: "Herencia cultural", difficulty: "hard", example: "Nuestra herencia cultural rica se preserva a través de festividades tradiciones y celebraciones que pasan generaciones!", exampleTranslation: "Unser reiches kulturelles Erbe wird durch Feste Traditionen und Feiern bewahrt die über Generationen weitergegeben werden!" },
      { id: "gs_fest_15", german: "Festtagsstimmung", spanish: "Espíritu festivo", difficulty: "hard", example: "El espíritu festivo alegre llena las calles durante las celebraciones con música risas y alegría contagiosa!", exampleTranslation: "Fröhliche Festtagsstimmung füllt die Straßen während der Feiern mit Musik Lachen und ansteckender Freude!" }
    ]
  },

  pets_care: {
    name: "Haustiere und Tierpflege",
    description: "Haustierhaltung und Tierpflege",
    icon: HeartHandshake,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { id: "gs_pet_1", german: "Haustier", spanish: "Mascota", difficulty: "easy", example: "Mi mascota favorita es mi perro golden retriever que es leal cariñoso y muy inteligente", exampleTranslation: "Mein Lieblingshaustier ist mein Golden Retriever Hund der loyal liebevoll und sehr intelligent ist" },
      { id: "gs_pet_2", german: "Füttern", spanish: "Alimentar", difficulty: "easy", example: "Alimento a mi gato dos veces al día con comida balanceada nutritiva de alta calidad", exampleTranslation: "Ich füttere meine Katze zweimal täglich mit ausgewogenem nahrhaftem hochwertigem Futter" },
      { id: "gs_pet_3", german: "Gassi gehen", spanish: "Pasear al perro", difficulty: "easy", example: "Paseo a mi perro tres veces diariamente por el parque haciendo ejercicio juntos saludablemente", exampleTranslation: "Ich gehe dreimal täglich mit meinem Hund im Park spazieren und mache gesund zusammen Bewegung" },
      { id: "gs_pet_4", german: "Leine", spanish: "Correa", difficulty: "easy", example: "Siempre uso correa cuando paseo al perro en áreas públicas por seguridad y regulaciones", exampleTranslation: "Ich benutze immer eine Leine wenn ich mit dem Hund in öffentlichen Bereichen spazieren gehe aus Sicherheit und wegen Vorschriften" },
      { id: "gs_pet_5", german: "Tierarzt", spanish: "Veterinario", difficulty: "easy", example: "Llevo a mi gato al veterinario regularmente para chequeos vacunas y mantenerlo sano fuerte", exampleTranslation: "Ich bringe meine Katze regelmäßig zum Tierarzt für Untersuchungen Impfungen und um sie gesund und stark zu halten" },
      { id: "gs_pet_6", german: "Impfung", spanish: "Vacuna", difficulty: "easy", example: "Las vacunas anuales son obligatorias para proteger a las mascotas de enfermedades graves contagiosas", exampleTranslation: "Jährliche Impfungen sind obligatorisch um Haustiere vor ernsthaften ansteckenden Krankheiten zu schützen" },
      { id: "gs_pet_7", german: "Spielzeug", spanish: "Juguete", difficulty: "medium", example: "Compré juguetes interactivos nuevos para mi perro que lo mantienen entretenido y mentalmente estimulado", exampleTranslation: "Ich kaufte neue interaktive Spielzeuge für meinen Hund die ihn unterhalten und geistig stimuliert halten" },
      { id: "gs_pet_8", german: "Käfig", spanish: "Jaula", difficulty: "medium", example: "La jaula espaciosa del pájaro debe limpiarse semanalmente y tener perchas juguetes y comida fresca", exampleTranslation: "Der geräumige Vogelkäfig muss wöchentlich gereinigt werden und Sitzstangen Spielzeug und frisches Futter haben" },
      { id: "gs_pet_9", german: "Pfote", spanish: "Pata", difficulty: "medium", example: "Mi perro se lastimó la pata corriendo en el parque y necesita descansar varios días", exampleTranslation: "Mein Hund verletzte sich die Pfote beim Laufen im Park und muss mehrere Tage ruhen" },
      { id: "gs_pet_10", german: "Schnurren", spanish: "Ronronear", difficulty: "medium", example: "El gato ronronea felizmente cuando lo acaricio suavemente mostrando satisfacción y comodidad completa", exampleTranslation: "Die Katze schnurrt glücklich wenn ich sie sanft streichle und zeigt Zufriedenheit und kompletten Komfort" },
      { id: "gs_pet_11", german: "Tierheim", spanish: "Refugio de animales", difficulty: "medium", example: "Adopté a mi perro del refugio de animales local dándole un hogar amoroso permanente", exampleTranslation: "Ich adoptierte meinen Hund aus dem lokalen Tierheim und gab ihm ein liebendes dauerhaftes Zuhause" },
      { id: "gs_pet_12", german: "Erziehung", spanish: "Adiestramiento", difficulty: "medium", example: "El adiestramiento de cachorros requiere paciencia consistencia y refuerzo positivo para buenos resultados", exampleTranslation: "Die Erziehung von Welpen erfordert Geduld Beständigkeit und positive Verstärkung für gute Ergebnisse" },
      { id: "gs_pet_13", german: "Mein Hund ist krank", spanish: "Mi perro está enfermo", difficulty: "hard", example: "Mi perro está muy enfermo! No come nada y está muy débil! Necesito llevarlo al veterinario urgente!", exampleTranslation: "Mein Hund ist sehr krank! Er isst gar nichts und ist sehr schwach! Ich muss ihn dringend zum Tierarzt bringen!" },
      { id: "gs_pet_14", german: "Verantwortung", spanish: "Responsabilidad", difficulty: "hard", example: "Tener mascotas implica gran responsabilidad incluyendo cuidado diario alimentación ejercicio y atención veterinaria regular!", exampleTranslation: "Haustiere zu haben bedeutet große Verantwortung einschließlich täglicher Pflege Fütterung Bewegung und regelmäßiger tierärztlicher Versorgung!" },
      { id: "gs_pet_15", german: "Tierschutz", spanish: "Protección animal", difficulty: "hard", example: "La protección animal es fundamental garantizando bienestar trato ético y derechos básicos para todos los animales!", exampleTranslation: "Tierschutz ist fundamental und garantiert Wohlergehen ethische Behandlung und grundlegende Rechte für alle Tiere!" }
    ]
  },

  vacation_tourism: {
    name: "Urlaub und Tourismus",
    description: "Reisen und touristische Aktivitäten",
    icon: PlaneTakeoff,
    color: "from-sky-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "gs_tour_1", german: "Urlaub", spanish: "Vacaciones", difficulty: "easy", example: "Mis vacaciones de verano en la playa fueron relajantes disfrutando sol mar y descanso completo", exampleTranslation: "Meine Sommerferien am Strand waren entspannend beim Genießen von Sonne Meer und kompletter Erholung" },
      { id: "gs_tour_2", german: "Tourist", spanish: "Turista", difficulty: "easy", example: "Los turistas extranjeros visitan monumentos históricos tomando fotografías y comprando souvenirs tradicionales típicos", exampleTranslation: "Ausländische Touristen besuchen historische Denkmäler machen Fotos und kaufen traditionelle typische Souvenirs" },
      { id: "gs_tour_3", german: "Reiseführer", spanish: "Guía turístico", difficulty: "easy", example: "El guía turístico experto explicó la historia fascinante del castillo medieval con detalles interesantes", exampleTranslation: "Der erfahrene Reiseführer erklärte die faszinierende Geschichte der mittelalterlichen Burg mit interessanten Details" },
      { id: "gs_tour_4", german: "Sehenswürdigkeit", spanish: "Atracción turística", difficulty: "easy", example: "La torre Eiffel es la atracción turística más visitada de París recibiendo millones de visitantes", exampleTranslation: "Der Eiffelturm ist die meistbesuchte Sehenswürdigkeit von Paris und empfängt Millionen Besucher" },
      { id: "gs_tour_5", german: "Reisebüro", spanish: "Agencia de viajes", difficulty: "easy", example: "La agencia de viajes organizó todo el itinerario completo incluyendo vuelos hoteles y excursiones", exampleTranslation: "Das Reisebüro organisierte die gesamte komplette Reiseroute einschließlich Flüge Hotels und Ausflüge" },
      { id: "gs_tour_6", german: "Souvenirs", spanish: "Recuerdos", difficulty: "easy", example: "Compro recuerdos típicos artesanales en cada país que visito para recordar las experiencias vividas", exampleTranslation: "Ich kaufe in jedem Land das ich besuche typische handgefertigte Souvenirs um mich an die erlebten Erfahrungen zu erinnern" },
      { id: "gs_tour_7", german: "Stadtführung", spanish: "Tour de ciudad", difficulty: "medium", example: "El tour de ciudad guiado en autobús nos mostró todos los lugares históricos importantes emblemáticos", exampleTranslation: "Die geführte Stadtrundfahrt im Bus zeigte uns alle wichtigen emblematischen historischen Orte" },
      { id: "gs_tour_8", german: "Fremdenführer", spanish: "Guía de viaje", difficulty: "medium", example: "La guía de viaje impresa tiene mapas detallados recomendaciones de restaurantes y información cultural útil", exampleTranslation: "Der gedruckte Fremdenführer hat detaillierte Karten Restaurantempfehlungen und nützliche kulturelle Informationen" },
      { id: "gs_tour_9", german: "Ausflug", spanish: "Excursión", difficulty: "medium", example: "Hicimos una excursión organizada a las ruinas mayas aprendiendo sobre civilizaciones antiguas fascinantes", exampleTranslation: "Wir machten einen organisierten Ausflug zu den Maya-Ruinen und lernten über faszinierende alte Zivilisationen" },
      { id: "gs_tour_10", german: "Kreuzfahrt", spanish: "Crucero", difficulty: "medium", example: "El crucero por el Mediterráneo visita cinco países diferentes en diez días con todo incluido", exampleTranslation: "Die Mittelmeerkreuzfahrt besucht in zehn Tagen fünf verschiedene Länder mit Vollpension" },
      { id: "gs_tour_11", german: "Reisepass", spanish: "Pasaporte", difficulty: "medium", example: "Verifica que tu pasaporte esté vigente válido antes de viajar internacionalmente evitando problemas fronterizos", exampleTranslation: "Überprüfe dass dein Reisepass gültig ist bevor du international reist um Grenzprobleme zu vermeiden" },
      { id: "gs_tour_12", german: "Visum", spanish: "Visa", difficulty: "medium", example: "Necesito solicitar una visa de turista para visitar Estados Unidos presentando documentos requeridos", exampleTranslation: "Ich muss ein Touristenvisum beantragen um die USA zu besuchen und die erforderlichen Dokumente einreichen" },
      { id: "gs_tour_13", german: "Wo ist die Touristeninformation?", spanish: "¿Dónde está la oficina de turismo?", difficulty: "hard", example: "Disculpe, ¿dónde está la oficina de turismo más cercana? Necesito mapas e información sobre atracciones locales!", exampleTranslation: "Entschuldigung, wo ist die nächste Touristeninformation? Ich brauche Karten und Informationen über lokale Attraktionen!" },
      { id: "gs_tour_14", german: "Tourismusindustrie", spanish: "Industria turística", difficulty: "hard", example: "La industria turística es vital para la economía local generando empleos e ingresos significativos para comunidades!", exampleTranslation: "Die Tourismusindustrie ist vital für die lokale Wirtschaft und generiert bedeutende Arbeitsplätze und Einkommen für Gemeinden!" },
      { id: "gs_tour_15", german: "Nachhaltiger Tourismus", spanish: "Turismo sostenible", difficulty: "hard", example: "El turismo sostenible responsable respeta culturas locales protege medio ambiente y beneficia comunidades anfitrionas!", exampleTranslation: "Nachhaltiger verantwortungsvoller Tourismus respektiert lokale Kulturen schützt die Umwelt und begünstigt Gastgebergemeinden!" }
    ]
  },

  computer_internet: {
    name: "Computer und Internet",
    description: "Computertechnologie und Internetnutzung",
    icon: Monitor,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "gs_comp_1", german: "Laptop", spanish: "Portátil", difficulty: "easy", example: "Mi portátil nuevo ligero es perfecto para trabajar viajando con batería que dura todo el día", exampleTranslation: "Mein neuer leichter Laptop ist perfekt zum Arbeiten auf Reisen mit Akku der den ganzen Tag hält" },
      { id: "gs_comp_2", german: "Maus", spanish: "Ratón", difficulty: "easy", example: "El ratón inalámbrico es más cómodo que el táctil para trabajar largas horas sin cables", exampleTranslation: "Die kabellose Maus ist bequemer als das Touchpad zum Arbeiten lange Stunden ohne Kabel" },
      { id: "gs_comp_3", german: "Dateien", spanish: "Archivos", difficulty: "easy", example: "Organizo mis archivos digitales en carpetas por proyecto fecha y tipo para encontrarlos fácilmente", exampleTranslation: "Ich organisiere meine digitalen Dateien in Ordnern nach Projekt Datum und Typ um sie leicht zu finden" },
      { id: "gs_comp_4", german: "Ordner", spanish: "Carpeta", difficulty: "easy", example: "Creé una carpeta nueva en el escritorio para guardar todos los documentos del proyecto importante", exampleTranslation: "Ich erstellte einen neuen Ordner auf dem Desktop um alle Dokumente des wichtigen Projekts zu speichern" },
      { id: "gs_comp_5", german: "Löschen", spanish: "Eliminar", difficulty: "easy", example: "Debes eliminar archivos innecesarios regularmente para liberar espacio de almacenamiento en el disco duro", exampleTranslation: "Du musst regelmäßig unnötige Dateien löschen um Speicherplatz auf der Festplatte freizugeben" },
      { id: "gs_comp_6", german: "Kopieren", spanish: "Copiar", difficulty: "easy", example: "Puedes copiar y pegar texto fácilmente usando atajos de teclado rápidos Control C y V", exampleTranslation: "Du kannst Text leicht kopieren und einfügen mit schnellen Tastaturkürzeln Strg C und V" },
      { id: "gs_comp_7", german: "Einfügen", spanish: "Pegar", difficulty: "medium", example: "Después de copiar el texto pégalo en el documento nuevo usando el atajo de teclado", exampleTranslation: "Nach dem Kopieren des Textes füge ihn in das neue Dokument mit dem Tastaturkürzel ein" },
      { id: "gs_comp_8", german: "Browser", spanish: "Navegador", difficulty: "medium", example: "Uso un navegador web rápido con bloqueador de anuncios para navegar internet eficientemente sin distracciones", exampleTranslation: "Ich benutze einen schnellen Webbrowser mit Werbeblocker um effizient ohne Ablenkungen im Internet zu surfen" },
      { id: "gs_comp_9", german: "Suchmaschine", spanish: "Motor de búsqueda", difficulty: "medium", example: "Los motores de búsqueda modernos encuentran información relevante en segundos indexando billones de páginas", exampleTranslation: "Moderne Suchmaschinen finden relevante Informationen in Sekunden indem sie Billionen Seiten indexieren" },
      { id: "gs_comp_10", german: "Lesezeichen", spanish: "Marcador web", difficulty: "medium", example: "Guardo marcadores de sitios web útiles interesantes para acceder rápidamente sin recordar direcciones complicadas", exampleTranslation: "Ich speichere Lesezeichen nützlicher interessanter Websites um schnell zuzugreifen ohne komplizierte Adressen zu merken" },
      { id: "gs_comp_11", german: "Aktualisierung", spanish: "Actualización", difficulty: "medium", example: "Las actualizaciones automáticas de software mejoran seguridad corrigen errores y añaden nuevas funciones", exampleTranslation: "Automatische Software-Aktualisierungen verbessern Sicherheit korrigieren Fehler und fügen neue Funktionen hinzu" },
      { id: "gs_comp_12", german: "Installation", spanish: "Instalación", difficulty: "medium", example: "La instalación del programa nuevo es fácil siguiendo instrucciones paso a paso en la pantalla", exampleTranslation: "Die Installation des neuen Programms ist einfach indem man den Schritt-für-Schritt-Anweisungen auf dem Bildschirm folgt" },
      { id: "gs_comp_13", german: "Der Computer stürzt ab", spanish: "La computadora se cuelga", difficulty: "hard", example: "La computadora se cuelga constantemente! Creo que tiene un virus o problema grave de hardware!", exampleTranslation: "Der Computer stürzt ständig ab! Ich glaube er hat einen Virus oder ein ernsthaftes Hardwareproblem!" },
      { id: "gs_comp_14", german: "Datensicherung", spanish: "Respaldo de datos", difficulty: "hard", example: "El respaldo de datos regular es esencial para proteger información importante de pérdidas accidentales desastres!", exampleTranslation: "Regelmäßige Datensicherung ist essentiell um wichtige Informationen vor versehentlichem Verlust und Katastrophen zu schützen!" },
      { id: "gs_comp_15", german: "Digitale Kompetenz", spanish: "Competencia digital", difficulty: "hard", example: "La competencia digital moderna incluye habilidades técnicas seguridad online y uso responsable ético de tecnología!", exampleTranslation: "Moderne digitale Kompetenz beinhaltet technische Fähigkeiten Online-Sicherheit und verantwortungsvolle ethische Technologienutzung!" }
    ]
  }
};