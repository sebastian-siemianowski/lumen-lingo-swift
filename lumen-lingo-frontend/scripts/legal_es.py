#!/usr/bin/env python3
"""Add Legal/Privacy/Terms translations to Spanish (es.json)."""
import json, pathlib

MSG = pathlib.Path(__file__).resolve().parent.parent / "messages" / "es.json"
data = json.loads(MSG.read_text("utf-8"))

data["Legal"] = {
    "tocLabel": "En esta página",
    "downloadPdf": "Descargar como PDF",
    "lastUpdated": "Última actualización: 22 de marzo de 2026"
}

data["Privacy"] = {
    "meta": {
        "title": "Política de Privacidad",
        "description": "Descubre cómo LumenShore gestiona tus datos con cuidado. Conoce nuestro enfoque de privacidad, procesamiento en el dispositivo, sincronización con iCloud y tus derechos bajo el RGPD y la CCPA.",
        "ogTitle": "Política de Privacidad — LumenLingo"
    },
    "breadcrumb": "Política de Privacidad",
    "hero": {
        "heading": "Política de Privacidad",
        "subtitle": "Tu privacidad nos importa profundamente. Aquí te explicamos exactamente cómo manejamos tus datos — en lenguaje sencillo, no en jerga legal."
    },
    "overview": {
        "heading": "Resumen",
        "p1": "LumenShore Ltd (\u201cLumenShore\u201d, \u201cnosotros\u201d o \u201cnuestro\u201d) opera la aplicación móvil LumenLingo (\u201cla Aplicación\u201d). Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos la información cuando utilizas LumenLingo.",
        "p2": "Construimos LumenLingo con una arquitectura de privacidad desde el diseño. Tus datos de aprendizaje se procesan y almacenan en tu dispositivo y en tu cuenta personal de iCloud — no en nuestros servidores. Creemos que tus datos son tuyos, y así deben permanecer."
    },
    "informationWeCollect": {
        "heading": "Información que Recopilamos",
        "intro": "LumenLingo recopila los datos mínimos necesarios para ofrecer una gran experiencia de aprendizaje:",
        "li1": "<b>Datos de progreso de aprendizaje</b> — niveles de dominio de tarjetas, puntuaciones de práctica, rachas, XP e historial de sesiones. Estos datos se almacenan localmente en tu dispositivo y se sincronizan mediante iCloud.",
        "li2": "<b>Preferencias de la aplicación</b> — tus pares de idiomas seleccionados, preferencias de paisajes sonoros, fondos visuales y selección de nivel. Se almacenan en el dispositivo y se sincronizan mediante iCloud.",
        "li3": "<b>Estado de suscripción</b> — tu nivel de membresía, gestionado íntegramente por Apple a través de la App Store. Recibimos un estado de suscripción de Apple pero no procesamos información de pago.",
        "li4": "<b>Analítica anónima</b> — podemos recopilar métricas de uso agregadas y no identificables (como qué funciones son más populares) para mejorar la aplicación. No se incluyen datos personales."
    },
    "whatWeDontCollect": {
        "heading": "Lo que No Recopilamos",
        "intro": "Queremos ser claros sobre lo que <b>nunca</b> recopilamos:",
        "li1": "Sin direcciones de correo electrónico, nombres ni identificadores personales (la aplicación no requiere registro de cuenta)",
        "li2": "Sin datos de ubicación ni coordenadas GPS",
        "li3": "Sin acceso a contactos, fotos u otras aplicaciones de tu dispositivo",
        "li4": "Sin información de pago ni tarjetas de crédito (Apple gestiona toda la facturación)",
        "li5": "Sin identificadores publicitarios ni píxeles de seguimiento",
        "li6": "Sin datos vendidos ni compartidos con anunciantes de terceros — nunca"
    },
    "howWeUse": {
        "heading": "Cómo Utilizamos tu Información",
        "intro": "Los datos limitados que manejamos se utilizan únicamente para:",
        "li1": "<b>Personalizar tu aprendizaje</b> — la programación de repetición espaciada, la adaptación de dificultad y el seguimiento de progreso dependen de tu historial de aprendizaje.",
        "li2": "<b>Sincronizar tu progreso</b> — la sincronización con iCloud asegura que tus datos te acompañen en todos tus dispositivos Apple.",
        "li3": "<b>Gestionar tu suscripción</b> — verificamos tu nivel de membresía para desbloquear las funciones correspondientes.",
        "li4": "<b>Mejorar la aplicación</b> — los datos anónimos y agregados nos ayudan a entender qué funciones son valiosas y dónde centrar el desarrollo."
    },
    "dataStorage": {
        "heading": "Almacenamiento y Seguridad de Datos",
        "intro": "LumenLingo utiliza una arquitectura de privacidad desde el dispositivo:",
        "li1": "<b>Almacenamiento en el dispositivo</b> — todos los datos de aprendizaje se almacenan localmente usando el framework SwiftData de Apple, protegidos por el cifrado integrado de tu dispositivo.",
        "li2": "<b>Sincronización con iCloud</b> — los datos se sincronizan entre tus dispositivos mediante tu cuenta personal de iCloud, cifrados de extremo a extremo por Apple. No tenemos acceso a tus datos de iCloud.",
        "li3": "<b>Sin servidores externos</b> — LumenLingo no mantiene servidores que almacenen tus datos personales. No hay base de datos en la nube que proteger (o vulnerar).",
        "li4": "<b>Seguridad de la App Store</b> — la gestión de suscripciones es manejada por la infraestructura segura de Apple."
    },
    "thirdParty": {
        "heading": "Servicios de Terceros",
        "intro": "LumenLingo se integra con un número limitado de servicios de terceros:",
        "li1": "<b>Apple App Store</b> — para distribución de la aplicación, gestión de suscripciones y procesamiento de pagos. Sujeto a la <applePrivacy>Política de Privacidad de Apple</applePrivacy>.",
        "li2": "<b>Apple iCloud</b> — para la sincronización de datos entre dispositivos. Sujeto a los términos de iCloud de Apple.",
        "li3": "<b>Analítica respetuosa con la privacidad</b> — si usamos analítica, utilizamos herramientas sin cookies y conformes con el RGPD que no recopilan información personal identificable.",
        "noAdNetworks": "No utilizamos Google Analytics, Facebook SDK ni ninguna red publicitaria."
    },
    "childrensPrivacy": {
        "heading": "Privacidad Infantil",
        "p1": "LumenLingo está diseñado para usuarios de todas las edades y no recopila deliberadamente información personal de menores de 13 años (o la edad aplicable en tu jurisdicción). Dado que la aplicación no requiere registro de cuenta y almacena los datos localmente, no se nos transmite información personal de ningún usuario, incluidos los menores.",
        "p2": "Los padres y tutores pueden gestionar o eliminar la aplicación y sus datos en cualquier momento a través de la gestión estándar de dispositivos iOS."
    },
    "dataRetention": {
        "heading": "Retención y Eliminación de Datos",
        "intro": "Dado que tus datos residen en tu dispositivo y en tu cuenta de iCloud, tienes control total sobre ellos:",
        "li1": "<b>Restablecer progreso</b> — usa la opción Ajustes → Restablecer Progreso en la aplicación para borrar todos los datos de aprendizaje.",
        "li2": "<b>Eliminar la aplicación</b> — desinstalar LumenLingo elimina todos los datos almacenados localmente.",
        "li3": "<b>Datos de iCloud</b> — puedes gestionar el almacenamiento de iCloud a través de Ajustes → Apple ID → iCloud → Gestionar Almacenamiento en tu dispositivo.",
        "li4": "<b>Suscripción</b> — cancela tu suscripción a través de Ajustes → Apple ID → Suscripciones. No retenemos datos después de la cancelación."
    },
    "yourRights": {
        "heading": "Tus Derechos",
        "intro": "Dependiendo de tu ubicación, puedes tener derechos adicionales respecto a tus datos:",
        "gdprHeading": "Bajo el RGPD (Espacio Económico Europeo y Reino Unido)",
        "gdprLi1": "Derecho de acceso a tus datos — tus datos ya están en tu dispositivo e iCloud.",
        "gdprLi2": "Derecho de rectificación — puedes editar tus preferencias directamente en la aplicación.",
        "gdprLi3": "Derecho de supresión — restablece el progreso o elimina la aplicación para borrar todos los datos.",
        "gdprLi4": "Derecho a la portabilidad de datos — tus datos se almacenan en formatos estándar en iCloud.",
        "gdprLi5": "Derecho de oposición — contáctanos para excluirte de la analítica anónima.",
        "ccpaHeading": "Bajo la CCPA (California)",
        "ccpaLi1": "Derecho a saber qué datos se recopilan — detallado arriba; recopilamos datos mínimos.",
        "ccpaLi2": "Derecho de eliminación — restablece el progreso o elimina la aplicación.",
        "ccpaLi3": "Derecho de exclusión — no vendemos información personal a nadie.",
        "ccpaLi4": "No discriminación — no serás tratado de forma diferente por ejercer tus derechos."
    },
    "policyUpdates": {
        "heading": "Actualizaciones de la Política",
        "p1": "Podemos actualizar esta Política de Privacidad ocasionalmente, generalmente para reflejar cambios en las funciones de la aplicación o requisitos legales. Cuando realicemos cambios significativos, actualizaremos la fecha de \u201cÚltima actualización\u201d en la parte superior de esta página.",
        "p2": "Te animamos a revisar esta página periódicamente. El uso continuado de LumenLingo después de los cambios constituye la aceptación de la política actualizada."
    },
    "contactUs": {
        "heading": "Contacto",
        "intro": "Si tienes preguntas sobre esta Política de Privacidad, tus datos o deseas ejercer tus derechos, no dudes en contactarnos:",
        "email": "<b>Correo electrónico</b>: <emailLink>support@lumenlingo.com</emailLink>",
        "company": "<b>Empresa</b>: LumenShore Ltd, Reino Unido",
        "responseTime": "Normalmente respondemos en un plazo de 48 horas."
    }
}

data["Terms"] = {
    "meta": {
        "title": "Términos de Servicio",
        "description": "Términos de Servicio de LumenLingo. Conoce tus derechos y responsabilidades al usar nuestra aplicación de aprendizaje de idiomas — escrito en lenguaje sencillo.",
        "ogTitle": "Términos de Servicio — LumenLingo"
    },
    "breadcrumb": "Términos de Servicio",
    "hero": {
        "heading": "Términos de Servicio",
        "subtitle": "Las reglas de uso de LumenLingo — escritas de forma simple, porque los documentos legales no deberían necesitar un diccionario."
    },
    "introduction": {
        "heading": "Introducción",
        "p1": "Bienvenido a LumenLingo. Estos Términos de Servicio (\u201cTérminos\u201d) rigen el uso de la aplicación móvil LumenLingo (\u201cla Aplicación\u201d) operada por LumenShore Ltd (\u201cLumenShore\u201d, \u201cnosotros\u201d o \u201cnuestro\u201d).",
        "p2": "Al descargar, instalar o usar LumenLingo, aceptas quedar vinculado por estos Términos. Si no estás de acuerdo con alguna parte de estos Términos, por favor no uses la Aplicación."
    },
    "acceptance": {
        "heading": "Aceptación de los Términos",
        "intro": "Al acceder o usar LumenLingo, confirmas que:",
        "li1": "Tienes al menos 13 años (o la edad mínima requerida en tu jurisdicción).",
        "li2": "Si eres menor de 18 años, has obtenido el consentimiento de un padre o tutor legal.",
        "li3": "Tienes la capacidad legal para celebrar un acuerdo vinculante.",
        "li4": "Cumplirás con estos Términos y todas las leyes aplicables."
    },
    "yourAccount": {
        "heading": "Tu Cuenta",
        "intro": "LumenLingo no requiere registro de cuenta tradicional. Tu identidad dentro de la Aplicación está vinculada a tu Apple ID y dispositivo. Eres responsable de:",
        "li1": "Mantener la seguridad de tu Apple ID y el acceso a tu dispositivo.",
        "li2": "Toda la actividad que ocurra a través de tu uso de la Aplicación.",
        "li3": "Mantener actualizado el sistema operativo de tu dispositivo para la mejor experiencia y seguridad."
    },
    "subscriptions": {
        "heading": "Suscripciones y Facturación",
        "intro": "LumenLingo ofrece niveles de membresía gratuitos y premium. Las funciones premium requieren una suscripción de pago.",
        "li1": "<b>Facturación</b> — todas las suscripciones son procesadas y gestionadas por Apple a través de la App Store. No manejamos pagos directamente.",
        "li2": "<b>Nivel gratuito</b> — proporciona acceso a las funciones principales de aprendizaje con pares de idiomas y modos de práctica limitados.",
        "li3": "<b>Niveles premium</b> — desbloquean pares de idiomas adicionales, práctica ilimitada, paisajes sonoros, orbes de respiración y otras funciones premium descritas en la Aplicación.",
        "li4": "<b>Renovación automática</b> — las suscripciones se renuevan automáticamente a menos que se cancelen al menos 24 horas antes del final del período de facturación actual.",
        "li5": "<b>Cancelación</b> — puedes cancelar tu suscripción en cualquier momento a través de Ajustes de tu Apple ID → Suscripciones. La cancelación surte efecto al final de tu período de facturación actual.",
        "li6": "<b>Reembolsos</b> — las solicitudes de reembolso se gestionan a través de Apple de acuerdo con sus políticas. Contacta con el Soporte de Apple para consultas de reembolso.",
        "li7": "<b>Cambios de precio</b> — podemos ajustar los precios de suscripción. Se te notificará con antelación y los cambios se aplicarán solo a tu próximo período de renovación."
    },
    "acceptableUse": {
        "heading": "Uso Aceptable",
        "intro": "Aceptas usar LumenLingo solo para fines legales y de acuerdo con estos Términos. No debes:",
        "li1": "Realizar ingeniería inversa, descompilar o desensamblar ninguna parte de la Aplicación.",
        "li2": "Intentar acceder, manipular o usar áreas no públicas de la Aplicación o sus sistemas.",
        "li3": "Copiar, modificar, distribuir o crear obras derivadas basadas en la Aplicación.",
        "li4": "Usar la Aplicación de cualquier forma que pueda dañar, deshabilitar, sobrecargar o perjudicar su funcionalidad.",
        "li5": "Usar scripts automatizados, bots u otras herramientas para interactuar con la Aplicación.",
        "li6": "Intentar eludir las restricciones de suscripción o nivel."
    },
    "intellectualProperty": {
        "heading": "Propiedad Intelectual",
        "p1": "Todo el contenido de LumenLingo — incluyendo, entre otros, contenido de tarjetas, traducciones, audio, paisajes sonoros, diseños visuales, efectos de shaders, animaciones, el nombre LumenLingo y la marca LumenShore — es propiedad intelectual de LumenShore Ltd y está protegido por leyes de derechos de autor, marcas comerciales y otras leyes de propiedad intelectual.",
        "p2": "Tu suscripción te otorga una licencia limitada, no exclusiva, intransferible y revocable para usar la Aplicación con fines personales y no comerciales de aprendizaje de idiomas. Esta licencia no incluye el derecho a:",
        "li1": "Reproducir, distribuir o mostrar públicamente cualquier contenido de la Aplicación.",
        "li2": "Usar cualquier contenido con fines comerciales o en productos competidores.",
        "li3": "Eliminar o alterar avisos de propiedad o etiquetas."
    },
    "userContent": {
        "heading": "Contenido y Datos del Usuario",
        "p1": "Tus datos de aprendizaje (progreso, preferencias, historial de práctica) se almacenan en tu dispositivo y en tu cuenta personal de iCloud. LumenShore no reclama la propiedad de tus datos personales de aprendizaje.",
        "p2": "Para más detalles sobre cómo manejamos los datos, consulta nuestra <privacyLink>Política de Privacidad</privacyLink>."
    },
    "disclaimers": {
        "heading": "Exenciones de Responsabilidad",
        "intro": "LumenLingo se proporciona \u201ctal cual\u201d y \u201csegún disponibilidad\u201d. Aunque nos esforzamos por la precisión y la calidad, no ofrecemos garantías, expresas o implícitas, respecto a:",
        "li1": "La exactitud o integridad de cualquier contenido lingüístico o traducciones.",
        "li2": "El funcionamiento ininterrumpido o sin errores de la Aplicación.",
        "li3": "Los resultados que puedas obtener del uso de la Aplicación.",
        "li4": "La disponibilidad de funciones específicas en un momento determinado.",
        "supplement": "LumenLingo es una herramienta de aprendizaje complementaria. No sustituye la instrucción profesional de idiomas, servicios de traducción certificados ni cursos académicos."
    },
    "limitationOfLiability": {
        "heading": "Limitación de Responsabilidad",
        "intro": "En la medida máxima permitida por la ley aplicable, LumenShore Ltd no será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, ni de pérdida de beneficios, datos o fondo de comercio derivados de:",
        "li1": "Tu uso (o imposibilidad de uso) de la Aplicación.",
        "li2": "Errores, omisiones o inexactitudes en el contenido.",
        "li3": "Acceso no autorizado a tu dispositivo o datos (no causado por nuestra negligencia).",
        "li4": "Cualquier interrupción o cese del servicio.",
        "cap": "Nuestra responsabilidad total por cualquier reclamación derivada de estos Términos o tu uso de LumenLingo no excederá la cantidad que pagaste por la Aplicación en los 12 meses anteriores a la reclamación."
    },
    "termination": {
        "heading": "Terminación",
        "p1": "Puedes dejar de usar LumenLingo en cualquier momento eliminando la Aplicación. Tu suscripción, si está activa, debe cancelarse por separado a través de la gestión de suscripciones de Apple.",
        "p2": "Nos reservamos el derecho de suspender o cancelar el acceso a la Aplicación si consideramos razonablemente que has violado estos Términos. En caso de terminación:",
        "li1": "Tu licencia para usar la Aplicación queda inmediatamente revocada.",
        "li2": "Tus datos locales permanecen en tu dispositivo hasta que decidas eliminarlos.",
        "li3": "Las suscripciones activas deben cancelarse a través de Apple.",
        "li4": "Las disposiciones que por su naturaleza deban sobrevivir a la terminación permanecerán en vigor."
    },
    "governingLaw": {
        "heading": "Ley Aplicable",
        "p1": "Estos Términos se rigen e interpretan de acuerdo con las leyes de Inglaterra y Gales, sin considerar los principios de conflicto de leyes.",
        "p2": "Cualquier disputa derivada de estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de Inglaterra y Gales. Sin embargo, esto no afecta tus derechos legales como consumidor en tu país de residencia."
    },
    "changes": {
        "heading": "Cambios en estos Términos",
        "p1": "Podemos actualizar estos Términos ocasionalmente. Cuando realicemos cambios significativos, actualizaremos la fecha de \u201cÚltima actualización\u201d en la parte superior y podremos notificarte a través de la Aplicación.",
        "p2": "El uso continuado de LumenLingo después de la publicación de los cambios constituye la aceptación de los Términos revisados. Si no estás de acuerdo con los cambios, deja de usar la Aplicación y cancela cualquier suscripción activa."
    },
    "contactUs": {
        "heading": "Contacto",
        "intro": "Si tienes preguntas sobre estos Términos o necesitas informar de un problema, contáctanos:",
        "email": "<b>Correo electrónico</b>: <emailLink>support@lumenlingo.com</emailLink>",
        "company": "<b>Empresa</b>: LumenShore Ltd, Reino Unido",
        "responseTime": "Normalmente respondemos en un plazo de 48 horas."
    }
}

MSG.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("ES: Legal/Privacy/Terms added successfully")
