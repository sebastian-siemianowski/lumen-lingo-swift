#!/usr/bin/env python3
"""Add Legal/Privacy/Terms translations to French (fr.json)."""
import json, pathlib

MSG = pathlib.Path(__file__).resolve().parent.parent / "messages" / "fr.json"
data = json.loads(MSG.read_text("utf-8"))

data["Legal"] = {
    "tocLabel": "Sur cette page",
    "downloadPdf": "Télécharger en PDF",
    "lastUpdated": "Dernière mise à jour : 22 mars 2026"
}

data["Privacy"] = {
    "meta": {
        "title": "Politique de Confidentialité",
        "description": "Découvrez comment LumenShore traite vos données avec soin. En savoir plus sur notre approche axée sur la confidentialité, le traitement sur l'appareil, la synchronisation iCloud et vos droits au titre du RGPD et du CCPA.",
        "ogTitle": "Politique de Confidentialité — LumenLingo"
    },
    "breadcrumb": "Politique de Confidentialité",
    "hero": {
        "heading": "Politique de Confidentialité",
        "subtitle": "Votre vie privée nous tient profondément à cœur. Voici exactement comment nous traitons vos données — en langage clair, pas en jargon juridique."
    },
    "overview": {
        "heading": "Aperçu",
        "p1": "LumenShore Ltd (\u201cLumenShore\u201d, \u201cnous\u201d ou \u201cnotre\u201d) exploite l'application mobile LumenLingo (\u201cl'Application\u201d). Cette Politique de Confidentialité explique comment nous collectons, utilisons, stockons et protégeons les informations lorsque vous utilisez LumenLingo.",
        "p2": "Nous avons conçu LumenLingo avec une architecture axée sur la confidentialité. Vos données d'apprentissage sont traitées et stockées sur votre appareil et dans votre compte iCloud personnel — pas sur nos serveurs. Nous croyons que vos données vous appartiennent, et qu'elles doivent le rester."
    },
    "informationWeCollect": {
        "heading": "Informations que Nous Collectons",
        "intro": "LumenLingo collecte le minimum de données nécessaires pour offrir une excellente expérience d'apprentissage :",
        "li1": "<b>Données de progression d'apprentissage</b> — niveaux de maîtrise des cartes, scores de pratique, séries, XP et historique des sessions. Ces données sont stockées localement sur votre appareil et synchronisées via iCloud.",
        "li2": "<b>Préférences de l'application</b> — vos paires de langues sélectionnées, préférences de paysages sonores, choix de fonds visuels et sélection de niveau. Stockées sur l'appareil et synchronisées via iCloud.",
        "li3": "<b>Statut d'abonnement</b> — votre niveau de membership, géré entièrement par Apple via l'App Store. Nous recevons un statut d'abonnement d'Apple mais ne traitons aucune information de paiement.",
        "li4": "<b>Analyses anonymes</b> — nous pouvons collecter des métriques d'utilisation agrégées et non identifiables (comme les fonctionnalités les plus populaires) pour améliorer l'application. Aucune donnée personnelle n'est incluse."
    },
    "whatWeDontCollect": {
        "heading": "Ce que Nous ne Collectons Pas",
        "intro": "Nous tenons à être clairs sur ce que nous ne collectons <b>jamais</b> :",
        "li1": "Aucune adresse e-mail, nom ou identifiant personnel (l'application ne nécessite pas de création de compte)",
        "li2": "Aucune donnée de localisation ou coordonnées GPS",
        "li3": "Aucun accès aux contacts, photos ou autres applications de votre appareil",
        "li4": "Aucune information de paiement ou carte bancaire (Apple gère toute la facturation)",
        "li5": "Aucun identifiant publicitaire ou pixel de suivi",
        "li6": "Aucune donnée vendue ou partagée avec des annonceurs tiers — jamais"
    },
    "howWeUse": {
        "heading": "Comment Nous Utilisons vos Informations",
        "intro": "Les données limitées que nous traitons sont utilisées uniquement pour :",
        "li1": "<b>Personnaliser votre apprentissage</b> — la planification de la répétition espacée, l'adaptation de la difficulté et le suivi de progression dépendent de votre historique d'apprentissage.",
        "li2": "<b>Synchroniser votre progression</b> — la synchronisation iCloud assure que vos données vous suivent sur tous vos appareils Apple.",
        "li3": "<b>Gérer votre abonnement</b> — nous vérifions votre niveau de membership pour débloquer les fonctionnalités appropriées.",
        "li4": "<b>Améliorer l'application</b> — les données anonymes agrégées nous aident à comprendre quelles fonctionnalités sont utiles et où concentrer le développement."
    },
    "dataStorage": {
        "heading": "Stockage et Sécurité des Données",
        "intro": "LumenLingo utilise une architecture de confidentialité axée sur l'appareil :",
        "li1": "<b>Stockage sur l'appareil</b> — toutes les données d'apprentissage sont stockées localement avec le framework SwiftData d'Apple, protégées par le chiffrement intégré de votre appareil.",
        "li2": "<b>Synchronisation iCloud</b> — les données se synchronisent entre vos appareils via votre compte iCloud personnel, chiffrées de bout en bout par Apple. Nous n'avons pas accès à vos données iCloud.",
        "li3": "<b>Aucun serveur externe</b> — LumenLingo ne maintient pas de serveurs stockant vos données personnelles. Il n'y a pas de base de données cloud à sécuriser (ou à compromettre).",
        "li4": "<b>Sécurité de l'App Store</b> — la gestion des abonnements est assurée par l'infrastructure sécurisée d'Apple."
    },
    "thirdParty": {
        "heading": "Services Tiers",
        "intro": "LumenLingo s'intègre avec un nombre limité de services tiers :",
        "li1": "<b>Apple App Store</b> — pour la distribution de l'application, la gestion des abonnements et le traitement des paiements. Soumis à la <applePrivacy>Politique de Confidentialité d'Apple</applePrivacy>.",
        "li2": "<b>Apple iCloud</b> — pour la synchronisation des données entre appareils. Soumis aux conditions d'iCloud d'Apple.",
        "li3": "<b>Analyses respectueuses de la vie privée</b> — si nous utilisons des outils d'analyse, nous utilisons des outils sans cookies, conformes au RGPD, qui ne collectent aucune information personnelle identifiable.",
        "noAdNetworks": "Nous n'utilisons pas Google Analytics, le SDK Facebook ni aucun réseau publicitaire."
    },
    "childrensPrivacy": {
        "heading": "Confidentialité des Enfants",
        "p1": "LumenLingo est conçu pour les utilisateurs de tous âges et ne collecte pas sciemment d'informations personnelles auprès d'enfants de moins de 13 ans (ou l'âge applicable dans votre juridiction). L'application ne nécessitant pas de création de compte et stockant les données localement, aucune information personnelle ne nous est transmise par aucun utilisateur, enfants inclus.",
        "p2": "Les parents et tuteurs peuvent gérer ou supprimer l'application et ses données à tout moment via la gestion standard des appareils iOS."
    },
    "dataRetention": {
        "heading": "Conservation et Suppression des Données",
        "intro": "Vos données résidant sur votre appareil et dans votre compte iCloud, vous en avez le contrôle total :",
        "li1": "<b>Réinitialiser la progression</b> — utilisez l'option Réglages → Réinitialiser la progression dans l'application pour effacer toutes les données d'apprentissage.",
        "li2": "<b>Supprimer l'application</b> — la désinstallation de LumenLingo supprime toutes les données stockées localement.",
        "li3": "<b>Données iCloud</b> — vous pouvez gérer le stockage iCloud via Réglages → Identifiant Apple → iCloud → Gérer le stockage sur votre appareil.",
        "li4": "<b>Abonnement</b> — annulez votre abonnement via Réglages → Identifiant Apple → Abonnements. Aucune donnée n'est conservée par nous après l'annulation."
    },
    "yourRights": {
        "heading": "Vos Droits",
        "intro": "Selon votre localisation, vous pouvez disposer de droits supplémentaires concernant vos données :",
        "gdprHeading": "Au titre du RGPD (Espace Économique Européen et Royaume-Uni)",
        "gdprLi1": "Droit d'accès à vos données — vos données sont déjà sur votre appareil et iCloud.",
        "gdprLi2": "Droit de rectification — vous pouvez modifier vos préférences directement dans l'application.",
        "gdprLi3": "Droit à l'effacement — réinitialisez la progression ou supprimez l'application pour supprimer toutes les données.",
        "gdprLi4": "Droit à la portabilité des données — vos données sont stockées dans des formats standards dans iCloud.",
        "gdprLi5": "Droit d'opposition — contactez-nous pour vous désinscrire des analyses anonymes.",
        "ccpaHeading": "Au titre du CCPA (Californie)",
        "ccpaLi1": "Droit de savoir quelles données sont collectées — détaillé ci-dessus ; nous collectons un minimum de données.",
        "ccpaLi2": "Droit de suppression — réinitialisez la progression ou supprimez l'application.",
        "ccpaLi3": "Droit de refus — nous ne vendons d'informations personnelles à personne.",
        "ccpaLi4": "Non-discrimination — vous ne serez pas traité différemment pour avoir exercé vos droits."
    },
    "policyUpdates": {
        "heading": "Mises à Jour de la Politique",
        "p1": "Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps, généralement pour refléter les changements dans les fonctionnalités de l'application ou les exigences légales. Lors de modifications significatives, nous mettrons à jour la date de \u201cDernière mise à jour\u201d en haut de cette page.",
        "p2": "Nous vous encourageons à consulter cette page régulièrement. L'utilisation continue de LumenLingo après les modifications constitue l'acceptation de la politique mise à jour."
    },
    "contactUs": {
        "heading": "Nous Contacter",
        "intro": "Si vous avez des questions sur cette Politique de Confidentialité, vos données ou souhaitez exercer vos droits, n'hésitez pas à nous contacter :",
        "email": "<b>E-mail</b> : <emailLink>hello@lumenshore.com</emailLink>",
        "company": "<b>Société</b> : LumenShore Ltd, Royaume-Uni",
        "responseTime": "Nous répondons généralement sous 48 heures."
    }
}

data["Terms"] = {
    "meta": {
        "title": "Conditions d'Utilisation",
        "description": "Conditions d'Utilisation de LumenLingo. Comprenez vos droits et responsabilités lors de l'utilisation de notre application d'apprentissage des langues — rédigées en langage clair.",
        "ogTitle": "Conditions d'Utilisation — LumenLingo"
    },
    "breadcrumb": "Conditions d'Utilisation",
    "hero": {
        "heading": "Conditions d'Utilisation",
        "subtitle": "Les règles d'utilisation de LumenLingo — rédigées simplement, car les documents juridiques ne devraient pas nécessiter un dictionnaire."
    },
    "introduction": {
        "heading": "Introduction",
        "p1": "Bienvenue sur LumenLingo. Ces Conditions d'Utilisation (\u201cConditions\u201d) régissent votre utilisation de l'application mobile LumenLingo (\u201cl'Application\u201d) exploitée par LumenShore Ltd (\u201cLumenShore\u201d, \u201cnous\u201d ou \u201cnotre\u201d).",
        "p2": "En téléchargeant, installant ou utilisant LumenLingo, vous acceptez d'être lié par ces Conditions. Si vous n'êtes pas d'accord avec une partie de ces Conditions, veuillez ne pas utiliser l'Application."
    },
    "acceptance": {
        "heading": "Acceptation des Conditions",
        "intro": "En accédant à ou en utilisant LumenLingo, vous confirmez que :",
        "li1": "Vous avez au moins 13 ans (ou l'âge minimum requis dans votre juridiction).",
        "li2": "Si vous avez moins de 18 ans, vous avez obtenu le consentement d'un parent ou tuteur légal.",
        "li3": "Vous avez la capacité juridique de conclure un accord contraignant.",
        "li4": "Vous respecterez ces Conditions et toutes les lois applicables."
    },
    "yourAccount": {
        "heading": "Votre Compte",
        "intro": "LumenLingo ne nécessite pas d'inscription de compte traditionnelle. Votre identité dans l'Application est liée à votre identifiant Apple et votre appareil. Vous êtes responsable de :",
        "li1": "Maintenir la sécurité de votre identifiant Apple et l'accès à votre appareil.",
        "li2": "Toute activité effectuée via votre utilisation de l'Application.",
        "li3": "Garder le système d'exploitation de votre appareil à jour pour la meilleure expérience et sécurité."
    },
    "subscriptions": {
        "heading": "Abonnements et Facturation",
        "intro": "LumenLingo propose des niveaux de membership gratuits et premium. Les fonctionnalités premium nécessitent un abonnement payant.",
        "li1": "<b>Facturation</b> — tous les abonnements sont traités et gérés par Apple via l'App Store. Nous ne gérons pas les paiements directement.",
        "li2": "<b>Niveau gratuit</b> — donne accès aux fonctionnalités principales d'apprentissage avec des paires de langues et modes de pratique limités.",
        "li3": "<b>Niveaux premium</b> — débloquent des paires de langues supplémentaires, la pratique illimitée, les paysages sonores, les orbes de respiration et d'autres fonctionnalités premium décrites dans l'Application.",
        "li4": "<b>Renouvellement automatique</b> — les abonnements se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la période de facturation en cours.",
        "li5": "<b>Annulation</b> — vous pouvez annuler votre abonnement à tout moment via les Réglages de votre identifiant Apple → Abonnements. L'annulation prend effet à la fin de votre période de facturation en cours.",
        "li6": "<b>Remboursements</b> — les demandes de remboursement sont traitées par Apple conformément à leurs politiques de remboursement. Contactez le support Apple pour les demandes de remboursement.",
        "li7": "<b>Changements de prix</b> — nous pouvons ajuster les prix d'abonnement. Vous serez prévenu à l'avance et les changements ne s'appliqueront qu'à votre prochaine période de renouvellement."
    },
    "acceptableUse": {
        "heading": "Utilisation Acceptable",
        "intro": "Vous acceptez d'utiliser LumenLingo uniquement à des fins légales et conformément à ces Conditions. Vous ne devez pas :",
        "li1": "Effectuer de l'ingénierie inverse, décompiler ou désassembler toute partie de l'Application.",
        "li2": "Tenter d'accéder, de manipuler ou d'utiliser des zones non publiques de l'Application ou de ses systèmes.",
        "li3": "Copier, modifier, distribuer ou créer des œuvres dérivées basées sur l'Application.",
        "li4": "Utiliser l'Application de manière à endommager, désactiver, surcharger ou altérer sa fonctionnalité.",
        "li5": "Utiliser des scripts automatisés, des bots ou d'autres outils pour interagir avec l'Application.",
        "li6": "Tenter de contourner les restrictions d'abonnement ou de niveau."
    },
    "intellectualProperty": {
        "heading": "Propriété Intellectuelle",
        "p1": "Tout le contenu de LumenLingo — y compris, mais sans s'y limiter, le contenu des cartes, traductions, audio, paysages sonores, designs visuels, effets de shaders, animations, le nom LumenLingo et la marque LumenShore — est la propriété intellectuelle de LumenShore Ltd et est protégé par les lois sur le droit d'auteur, les marques commerciales et autres lois sur la propriété intellectuelle.",
        "p2": "Votre abonnement vous accorde une licence limitée, non exclusive, non transférable et révocable pour utiliser l'Application à des fins personnelles et non commerciales d'apprentissage des langues. Cette licence n'inclut pas le droit de :",
        "li1": "Reproduire, distribuer ou afficher publiquement tout contenu de l'Application.",
        "li2": "Utiliser tout contenu à des fins commerciales ou dans des produits concurrents.",
        "li3": "Supprimer ou modifier tout avis de propriété ou étiquette."
    },
    "userContent": {
        "heading": "Contenu et Données de l'Utilisateur",
        "p1": "Vos données d'apprentissage (progression, préférences, historique de pratique) sont stockées sur votre appareil et dans votre compte iCloud personnel. LumenShore ne revendique pas la propriété de vos données personnelles d'apprentissage.",
        "p2": "Pour plus de détails sur la façon dont nous traitons les données, veuillez consulter notre <privacyLink>Politique de Confidentialité</privacyLink>."
    },
    "disclaimers": {
        "heading": "Avertissements",
        "intro": "LumenLingo est fourni \u201cen l'état\u201d et \u201cselon disponibilité\u201d. Bien que nous visions la précision et la qualité, nous ne donnons aucune garantie, expresse ou implicite, concernant :",
        "li1": "L'exactitude ou l'exhaustivité de tout contenu linguistique ou traduction.",
        "li2": "Le fonctionnement ininterrompu ou sans erreur de l'Application.",
        "li3": "Les résultats que vous pourriez obtenir en utilisant l'Application.",
        "li4": "La disponibilité de fonctionnalités spécifiques à un moment donné.",
        "supplement": "LumenLingo est un outil d'apprentissage complémentaire. Il ne remplace pas l'enseignement professionnel des langues, les services de traduction certifiés ou les cours universitaires."
    },
    "limitationOfLiability": {
        "heading": "Limitation de Responsabilité",
        "intro": "Dans toute la mesure permise par la loi applicable, LumenShore Ltd ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni de toute perte de bénéfices, données ou clientèle résultant de :",
        "li1": "Votre utilisation (ou impossibilité d'utilisation) de l'Application.",
        "li2": "Toute erreur, omission ou inexactitude dans le contenu.",
        "li3": "L'accès non autorisé à votre appareil ou vos données (non causé par notre négligence).",
        "li4": "Toute interruption ou cessation du service.",
        "cap": "Notre responsabilité totale pour toute réclamation découlant de ces Conditions ou de votre utilisation de LumenLingo ne dépassera pas le montant que vous avez payé pour l'Application au cours des 12 mois précédant la réclamation."
    },
    "termination": {
        "heading": "Résiliation",
        "p1": "Vous pouvez cesser d'utiliser LumenLingo à tout moment en supprimant l'Application. Votre abonnement, s'il est actif, doit être annulé séparément via la gestion des abonnements d'Apple.",
        "p2": "Nous nous réservons le droit de suspendre ou de résilier l'accès à l'Application si nous estimons raisonnablement que vous avez enfreint ces Conditions. En cas de résiliation :",
        "li1": "Votre licence d'utilisation de l'Application est immédiatement révoquée.",
        "li2": "Vos données locales restent sur votre appareil jusqu'à ce que vous choisissiez de les supprimer.",
        "li3": "Les abonnements actifs doivent être annulés via Apple.",
        "li4": "Les dispositions qui par leur nature doivent survivre à la résiliation resteront en vigueur."
    },
    "governingLaw": {
        "heading": "Droit Applicable",
        "p1": "Ces Conditions sont régies et interprétées conformément aux lois d'Angleterre et du Pays de Galles, sans tenir compte des principes de conflit de lois.",
        "p2": "Tout litige découlant de ces Conditions sera soumis à la compétence exclusive des tribunaux d'Angleterre et du Pays de Galles. Cependant, cela n'affecte pas vos droits statutaires en tant que consommateur dans votre pays de résidence."
    },
    "changes": {
        "heading": "Modifications de ces Conditions",
        "p1": "Nous pouvons mettre à jour ces Conditions de temps en temps. Lors de modifications significatives, nous mettrons à jour la date de \u201cDernière mise à jour\u201d en haut de la page et pourrons vous notifier via l'Application.",
        "p2": "L'utilisation continue de LumenLingo après la publication des modifications constitue l'acceptation des Conditions révisées. Si vous n'êtes pas d'accord avec les modifications, veuillez cesser d'utiliser l'Application et annuler tout abonnement actif."
    },
    "contactUs": {
        "heading": "Nous Contacter",
        "intro": "Si vous avez des questions sur ces Conditions ou devez signaler un problème, veuillez nous contacter :",
        "email": "<b>E-mail</b> : <emailLink>hello@lumenshore.com</emailLink>",
        "company": "<b>Société</b> : LumenShore Ltd, Royaume-Uni",
        "responseTime": "Nous répondons généralement sous 48 heures."
    }
}

MSG.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", "utf-8")
print("FR: Legal/Privacy/Terms added successfully")
