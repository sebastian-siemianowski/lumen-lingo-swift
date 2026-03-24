#!/usr/bin/env python3
"""Story 14.5 — Comprehensive Liability Caps & Exclusions.
Enhances existing disclaimers/limitationOfLiability + adds new sub-sections:
- tieredLiabilityCaps (14.5.1)
- damageExclusions (14.5.2)  
- jurisdictionNotes (14.5.3)
- warrantyDisclaimer (14.5.4 - enhances existing disclaimers)
- educationalAccuracy (14.5.5 - extends educationalDisclaimer)
- userReliance (14.5.6)
- thirdPartyServices (14.5.7)
- serviceAvailability (14.5.8)
"""

import json, os

BASE = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages"

TRANSLATIONS = {
    "en": {
        "tieredLiabilityCaps": {
            "heading": "Liability Caps",
            "freeP1": "If you use the Service on a free tier, LumenShore's total aggregate liability to you for all claims arising from or related to the Service shall not exceed ten pounds sterling (£10).",
            "paidP1": "If you use the Service on a paid subscription, LumenShore's total aggregate liability to you shall not exceed the total amount you have actually paid to LumenShore in the twelve (12) months immediately preceding the event giving rise to the claim.",
            "iapNote": "For purchases made through the Apple App Store, the amounts paid to LumenShore means the net revenue received by LumenShore after Apple's commission."
        },
        "damageExclusions": {
            "heading": "Exclusion of Consequential Damages",
            "p1": "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LUMENSHORE BE LIABLE FOR ANY: LOSS OF DATA, LOST PROFITS, LOST REVENUE, LOST SAVINGS, LOSS OF GOODWILL, BUSINESS INTERRUPTION, COST OF SUBSTITUTE SERVICES, INCIDENTAL DAMAGES, CONSEQUENTIAL DAMAGES, SPECIAL DAMAGES, EXEMPLARY DAMAGES, OR PUNITIVE DAMAGES.",
            "p2": "This exclusion applies even if LumenShore has been advised of the possibility of such damages, and even if a limited remedy set forth herein fails of its essential purpose."
        },
        "warrantyDisclaimer": {
            "heading": "Warranty Disclaimer",
            "p1": "THE SERVICE IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, COMPLETENESS, RELIABILITY, AVAILABILITY, TIMELINESS, OR SECURITY.",
            "p2": "We do not warrant that the Service will be uninterrupted, error-free, virus-free, or that defects will be corrected.",
            "ukCarveout": "Nothing in these Terms affects your statutory rights under the Consumer Rights Act 2015 (UK) or equivalent consumer protection legislation in your jurisdiction."
        },
        "userReliance": {
            "heading": "No Liability for User Reliance",
            "p1": "LumenShore is not liable for any decisions made or actions taken by users in reliance on the content provided through the Service.",
            "p2": "Users are solely responsible for verifying the accuracy of any translation or linguistic information before relying on it for any purpose."
        },
        "thirdPartyServices": {
            "heading": "Third-Party Services",
            "p1": "LumenShore is not liable for the acts or omissions of third-party services, including Apple, Vercel, Sentry, or any payment processor.",
            "p2": "Apple is the merchant of record for all iOS in-app purchases. Billing disputes related to App Store purchases should be directed to Apple."
        },
        "serviceAvailability": {
            "heading": "Service Availability",
            "p1": "We do not guarantee any specific level of uptime or availability for the Service.",
            "p2": "We may perform scheduled or unscheduled maintenance with or without prior notice. The Service may experience interruptions due to third-party providers, network issues, or events beyond our control.",
            "p3": "No service level agreement (SLA) applies unless separately agreed in writing."
        }
    },
    "es": {
        "tieredLiabilityCaps": {
            "heading": "Limites de responsabilidad",
            "freeP1": "Si utiliza el Servicio en un nivel gratuito, la responsabilidad total acumulada de LumenShore hacia usted por todas las reclamaciones relacionadas con el Servicio no excedera de diez libras esterlinas (£10).",
            "paidP1": "Si utiliza el Servicio con una suscripcion de pago, la responsabilidad total acumulada de LumenShore hacia usted no excedera el monto total que haya pagado a LumenShore en los doce (12) meses inmediatamente anteriores al evento que dio origen a la reclamacion.",
            "iapNote": "Para compras realizadas a traves de la App Store de Apple, los montos pagados a LumenShore significan los ingresos netos recibidos por LumenShore despues de la comision de Apple."
        },
        "damageExclusions": {
            "heading": "Exclusion de danos consecuentes",
            "p1": "EN LA MAXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, EN NINGUN CASO LUMENSHORE SERA RESPONSABLE POR: PERDIDA DE DATOS, LUCRO CESANTE, PERDIDA DE INGRESOS, PERDIDA DE AHORROS, PERDIDA DE FONDO DE COMERCIO, INTERRUPCION DEL NEGOCIO, COSTO DE SERVICIOS SUSTITUTOS, DANOS INCIDENTALES, DANOS CONSECUENTES, DANOS ESPECIALES, DANOS EJEMPLARES O PUNITIVOS.",
            "p2": "Esta exclusion se aplica incluso si LumenShore ha sido informado de la posibilidad de dichos danos, e incluso si un recurso limitado establecido en el presente no cumple su proposito esencial."
        },
        "warrantyDisclaimer": {
            "heading": "Descargo de garantia",
            "p1": "EL SERVICIO SE PROPORCIONA \"TAL CUAL\" Y \"SEGUN DISPONIBILIDAD\" SIN GARANTIAS DE NINGUN TIPO, YA SEAN EXPRESAS O IMPLICITAS, INCLUYENDO PERO NO LIMITANDOSE A GARANTIAS IMPLICITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPOSITO PARTICULAR, NO INFRACCION, EXACTITUD, INTEGRIDAD, FIABILIDAD, DISPONIBILIDAD, OPORTUNIDAD O SEGURIDAD.",
            "p2": "No garantizamos que el Servicio sera ininterrumpido, libre de errores, libre de virus, ni que los defectos seran corregidos.",
            "ukCarveout": "Nada en estos Terminos afecta sus derechos legales en virtud de la Ley de Derechos del Consumidor de 2015 (Reino Unido) o la legislacion de proteccion al consumidor equivalente en su jurisdiccion."
        },
        "userReliance": {
            "heading": "Sin responsabilidad por dependencia del usuario",
            "p1": "LumenShore no es responsable de las decisiones tomadas o las acciones realizadas por los usuarios basandose en el contenido proporcionado a traves del Servicio.",
            "p2": "Los usuarios son los unicos responsables de verificar la exactitud de cualquier traduccion o informacion linguistica antes de confiar en ella para cualquier proposito."
        },
        "thirdPartyServices": {
            "heading": "Servicios de terceros",
            "p1": "LumenShore no es responsable de los actos u omisiones de servicios de terceros, incluyendo Apple, Vercel, Sentry o cualquier procesador de pagos.",
            "p2": "Apple es el comerciante registrado para todas las compras dentro de la aplicacion de iOS. Las disputas de facturacion relacionadas con compras en la App Store deben dirigirse a Apple."
        },
        "serviceAvailability": {
            "heading": "Disponibilidad del servicio",
            "p1": "No garantizamos ningun nivel especifico de tiempo de actividad o disponibilidad del Servicio.",
            "p2": "Podemos realizar mantenimiento programado o no programado con o sin aviso previo. El Servicio puede experimentar interrupciones debido a proveedores externos, problemas de red o eventos fuera de nuestro control.",
            "p3": "No se aplica ningun acuerdo de nivel de servicio (SLA) a menos que se acuerde por separado por escrito."
        }
    },
    "fr": {
        "tieredLiabilityCaps": {
            "heading": "Plafonds de responsabilite",
            "freeP1": "Si vous utilisez le Service au niveau gratuit, la responsabilite totale cumulee de LumenShore envers vous pour toutes les reclamations ne depassera pas dix livres sterling (10 £).",
            "paidP1": "Si vous utilisez le Service avec un abonnement payant, la responsabilite totale cumulee de LumenShore envers vous ne depassera pas le montant total que vous avez effectivement paye a LumenShore au cours des douze (12) mois precedant l'evenement a l'origine de la reclamation.",
            "iapNote": "Pour les achats effectues via l'App Store d'Apple, les montants payes a LumenShore s'entendent des revenus nets recus par LumenShore apres la commission d'Apple."
        },
        "damageExclusions": {
            "heading": "Exclusion des dommages indirects",
            "p1": "DANS TOUTE LA MESURE PERMISE PAR LA LOI APPLICABLE, EN AUCUN CAS LUMENSHORE NE SERA RESPONSABLE DE : PERTE DE DONNEES, MANQUE A GAGNER, PERTE DE REVENUS, PERTE D'ECONOMIES, PERTE DE CLIENTELE, INTERRUPTION D'ACTIVITE, COUT DE SERVICES DE REMPLACEMENT, DOMMAGES ACCESSOIRES, INDIRECTS, SPECIAUX, EXEMPLAIRES OU PUNITIFS.",
            "p2": "Cette exclusion s'applique meme si LumenShore a ete informe de la possibilite de tels dommages, et meme si un recours limite prevu aux presentes n'atteint pas son objectif essentiel."
        },
        "warrantyDisclaimer": {
            "heading": "Exclusion de garantie",
            "p1": "LE SERVICE EST FOURNI « EN L'ETAT » ET « SELON DISPONIBILITE » SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS MAIS SANS S'Y LIMITER LES GARANTIES IMPLICITES DE QUALITE MARCHANDE, D'ADEQUATION A UN USAGE PARTICULIER, DE NON-CONTREFACON, D'EXACTITUDE, D'EXHAUSTIVITE, DE FIABILITE, DE DISPONIBILITE OU DE SECURITE.",
            "p2": "Nous ne garantissons pas que le Service sera ininterrompu, exempt d'erreurs, exempt de virus, ni que les defauts seront corriges.",
            "ukCarveout": "Rien dans les presentes Conditions n'affecte vos droits legaux en vertu de la loi sur les droits des consommateurs de 2015 (Royaume-Uni) ou de la legislation equivalente en matiere de protection des consommateurs dans votre juridiction."
        },
        "userReliance": {
            "heading": "Aucune responsabilite pour la confiance de l'utilisateur",
            "p1": "LumenShore n'est pas responsable des decisions prises ou des actions entreprises par les utilisateurs en se fiant au contenu fourni par le Service.",
            "p2": "Les utilisateurs sont seuls responsables de la verification de l'exactitude de toute traduction ou information linguistique avant de s'y fier a quelque fin que ce soit."
        },
        "thirdPartyServices": {
            "heading": "Services tiers",
            "p1": "LumenShore n'est pas responsable des actes ou omissions de services tiers, y compris Apple, Vercel, Sentry ou tout processeur de paiement.",
            "p2": "Apple est le commercant officiel pour tous les achats integres iOS. Les litiges de facturation lies aux achats sur l'App Store doivent etre adresses a Apple."
        },
        "serviceAvailability": {
            "heading": "Disponibilite du service",
            "p1": "Nous ne garantissons aucun niveau specifique de disponibilite du Service.",
            "p2": "Nous pouvons effectuer des maintenances programmees ou non programmees avec ou sans preavis. Le Service peut connaitre des interruptions dues a des prestataires tiers, des problemes de reseau ou des evenements echappant a notre controle.",
            "p3": "Aucun accord de niveau de service (SLA) ne s'applique sauf accord ecrit separe."
        }
    },
    "de": {
        "tieredLiabilityCaps": {
            "heading": "Haftungsobergrenzen",
            "freeP1": "Wenn Sie den Dienst im kostenlosen Tarif nutzen, uebersteigt die gesamte kumulierte Haftung von LumenShore gegenueber Ihnen fuer alle Ansprueche zehn Pfund Sterling (10 £) nicht.",
            "paidP1": "Wenn Sie den Dienst mit einem kostenpflichtigen Abonnement nutzen, uebersteigt die gesamte kumulierte Haftung von LumenShore den Gesamtbetrag nicht, den Sie in den zwoelf (12) Monaten unmittelbar vor dem Haftungsereignis tatsaechlich an LumenShore gezahlt haben.",
            "iapNote": "Fuer Kaeufe ueber den Apple App Store beziehen sich die an LumenShore gezahlten Betraege auf die von LumenShore nach Abzug der Apple-Provision erhaltenen Nettoumsaetze."
        },
        "damageExclusions": {
            "heading": "Ausschluss von Folgeschaeden",
            "p1": "IM GESETZLICH ZULAESSIGEN RAHMEN HAFTET LUMENSHORE IN KEINEM FALL FUER: DATENVERLUST, ENTGANGENEN GEWINN, ENTGANGENE EINNAHMEN, ENTGANGENE ERSPARNISSE, VERLUST VON GESCHAEFTSWERT, BETRIEBSUNTERBRECHUNG, KOSTEN FUER ERSATZLEISTUNGEN, BEILAEFIGE SCHAEDEN, FOLGESCHAEDEN, BESONDERE SCHAEDEN, STRAFSCHAEDEN ODER POENALSCHAEDEN.",
            "p2": "Dieser Ausschluss gilt auch dann, wenn LumenShore auf die Moeglichkeit solcher Schaeden hingewiesen wurde, und selbst wenn ein beschraenkter Rechtsbehelf seinen wesentlichen Zweck verfehlt."
        },
        "warrantyDisclaimer": {
            "heading": "Garantieausschluss",
            "p1": "DER DIENST WIRD WIE BESEHEN UND WIE VERFUEGBAR OHNE GEWAEHRLEISTUNGEN JEGLICHER ART BEREITGESTELLT, WEDER AUSDRUECKLICH NOCH STILLSCHWEIGEND, EINSCHLIESSLICH ABER NICHT BESCHRAENKT AUF STILLSCHWEIGENDE GEWAEHRLEISTUNGEN DER MARKTGAENGIGKEIT, EIGNUNG FUER EINEN BESTIMMTEN ZWECK, NICHTVERLETZUNG, GENAUIGKEIT, VOLLSTAENDIGKEIT, ZUVERLAESSIGKEIT, VERFUEGBARKEIT ODER SICHERHEIT.",
            "p2": "Wir gewaehrleisten nicht, dass der Dienst unterbrechungsfrei, fehlerfrei, virenfrei sein wird oder dass Maengel behoben werden.",
            "ukCarveout": "Nichts in diesen Bedingungen beeintraechtigt Ihre gesetzlichen Rechte nach dem Consumer Rights Act 2015 (Vereinigtes Koenigreich) oder vergleichbarer Verbraucherschutzgesetzgebung in Ihrer Rechtsordnung."
        },
        "userReliance": {
            "heading": "Keine Haftung fuer Nutzervertrauen",
            "p1": "LumenShore haftet nicht fuer Entscheidungen oder Handlungen von Nutzern, die auf dem ueber den Dienst bereitgestellten Inhalt beruhen.",
            "p2": "Nutzer sind allein dafuer verantwortlich, die Richtigkeit von Uebersetzungen oder sprachlichen Informationen zu ueberpruefen, bevor sie sich darauf verlassen."
        },
        "thirdPartyServices": {
            "heading": "Drittanbieter-Dienste",
            "p1": "LumenShore haftet nicht fuer Handlungen oder Unterlassungen von Drittanbieter-Diensten, einschliesslich Apple, Vercel, Sentry oder eines Zahlungsdienstleisters.",
            "p2": "Apple ist der eingetragene Haendler fuer alle iOS-In-App-Kaeufe. Rechnungsstreitigkeiten im Zusammenhang mit App-Store-Kaeufen sind an Apple zu richten."
        },
        "serviceAvailability": {
            "heading": "Dienstverfuegbarkeit",
            "p1": "Wir garantieren kein bestimmtes Mass an Verfuegbarkeit des Dienstes.",
            "p2": "Wir koennen geplante oder ungeplante Wartungsarbeiten mit oder ohne Vorankuendigung durchfuehren. Der Dienst kann aufgrund von Drittanbietern, Netzwerkproblemen oder hoeherer Gewalt unterbrochen werden.",
            "p3": "Es gilt kein Service-Level-Agreement (SLA), sofern nicht gesondert schriftlich vereinbart."
        }
    },
    "ja": {
        "tieredLiabilityCaps": {
            "heading": "責任上限",
            "freeP1": "無料プランでサービスを利用する場合、サービスに起因するすべての請求に対するLumenShoreの累積責任総額は10ポンド（£10）を超えないものとします。",
            "paidP1": "有料サブスクリプションでサービスを利用する場合、LumenShoreの累積責任総額は、請求の原因となった事象の直前12ヶ月間にお客様がLumenShoreに実際に支払った金額を超えないものとします。",
            "iapNote": "Apple App Store経由の購入の場合、LumenShoreに支払われた金額とは、Appleの手数料控除後にLumenShoreが受領した純収益を意味します。"
        },
        "damageExclusions": {
            "heading": "間接損害の排除",
            "p1": "適用法により許容される最大限の範囲で、LUMENSHOREは以下のいかなる責任も負いません：データの損失、逸失利益、収益の損失、貯蓄の損失、信用の喪失、事業の中断、代替サービスの費用、付随的損害、間接損害、特別損害、懲罰的損害。",
            "p2": "この排除は、LumenShoreがそのような損害の可能性を通知されていた場合、および本規約に定める限定的な救済がその本質的な目的を達成できない場合にも適用されます。"
        },
        "warrantyDisclaimer": {
            "heading": "保証の免責",
            "p1": "本サービスは、商品性、特定目的への適合性、非侵害、正確性、完全性、信頼性、可用性、適時性、セキュリティの暗黙の保証を含むがこれに限定されない、明示または黙示を問わず、いかなる種類の保証もなく「現状のまま」「利用可能な限り」で提供されます。",
            "p2": "本サービスが中断なく、エラーなく、ウイルスなく動作すること、または欠陥が修正されることを保証しません。",
            "ukCarveout": "本規約のいかなる内容も、2015年消費者権利法（英国）またはお客様の管轄区域における同等の消費者保護法に基づくお客様の法的権利に影響を及ぼすものではありません。"
        },
        "userReliance": {
            "heading": "ユーザーの依存に対する免責",
            "p1": "LumenShoreは、本サービスを通じて提供されるコンテンツに依拠してユーザーが行った決定や行動について責任を負いません。",
            "p2": "ユーザーは、いかなる目的であれ翻訳や言語情報の正確性を自ら確認する責任を負います。"
        },
        "thirdPartyServices": {
            "heading": "第三者サービス",
            "p1": "LumenShoreは、Apple、Vercel、Sentry、またはその他の決済処理業者を含む第三者サービスの行為または不作為について責任を負いません。",
            "p2": "AppleはすべてのiOSアプリ内課金の販売者です。App Storeでの購入に関する請求上の紛争はAppleにお問い合わせください。"
        },
        "serviceAvailability": {
            "heading": "サービスの可用性",
            "p1": "本サービスの特定の稼働率や可用性は保証しません。",
            "p2": "予告の有無にかかわらず、定期または臨時のメンテナンスを実施する場合があります。第三者プロバイダー、ネットワークの問題、または当社の管理を超えた事象により中断が発生する場合があります。",
            "p3": "書面で別途合意がない限り、サービスレベル契約（SLA）は適用されません。"
        }
    },
    "pt": {
        "tieredLiabilityCaps": {
            "heading": "Limites de responsabilidade",
            "freeP1": "Se voce utilizar o Servico no nivel gratuito, a responsabilidade total acumulada da LumenShore perante voce por todas as reclamacoes nao excedera dez libras esterlinas (£10).",
            "paidP1": "Se voce utilizar o Servico com uma assinatura paga, a responsabilidade total acumulada da LumenShore nao excedera o valor total que voce efetivamente pagou a LumenShore nos doze (12) meses imediatamente anteriores ao evento que gerou a reclamacao.",
            "iapNote": "Para compras feitas pela App Store da Apple, os valores pagos a LumenShore significam a receita liquida recebida pela LumenShore apos a comissao da Apple."
        },
        "damageExclusions": {
            "heading": "Exclusao de danos consequenciais",
            "p1": "NA MAXIMA MEDIDA PERMITIDA PELA LEI APLICAVEL, EM NENHUM CASO A LUMENSHORE SERA RESPONSAVEL POR: PERDA DE DADOS, LUCROS CESSANTES, PERDA DE RECEITA, PERDA DE POUPANCAS, PERDA DE CLIENTELA, INTERRUPCAO DE NEGOCIOS, CUSTO DE SERVICOS SUBSTITUTOS, DANOS INCIDENTAIS, CONSEQUENCIAIS, ESPECIAIS, EXEMPLARES OU PUNITIVOS.",
            "p2": "Esta exclusao se aplica mesmo que a LumenShore tenha sido informada da possibilidade de tais danos, e mesmo que um recurso limitado aqui estabelecido nao cumpra seu proposito essencial."
        },
        "warrantyDisclaimer": {
            "heading": "Isenção de garantia",
            "p1": "O SERVICO E FORNECIDO \"COMO ESTA\" E \"CONFORME DISPONIVEL\" SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLICITAS, INCLUINDO, MAS NAO SE LIMITANDO A, GARANTIAS IMPLICITAS DE COMERCIALIZACAO, ADEQUACAO A UM FIM ESPECIFICO, NAO VIOLACAO, PRECISAO, COMPLETUDE, CONFIABILIDADE, DISPONIBILIDADE OU SEGURANCA.",
            "p2": "Nao garantimos que o Servico sera ininterrupto, livre de erros, livre de virus, ou que defeitos serao corrigidos.",
            "ukCarveout": "Nada nestes Termos afeta seus direitos legais nos termos da Lei dos Direitos do Consumidor de 2015 (Reino Unido) ou legislacao equivalente de protecao ao consumidor em sua jurisdicao."
        },
        "userReliance": {
            "heading": "Sem responsabilidade por confianca do usuario",
            "p1": "A LumenShore nao e responsavel por decisoes tomadas ou acoes realizadas por usuarios com base no conteudo fornecido atraves do Servico.",
            "p2": "Os usuarios sao os unicos responsaveis por verificar a precisao de qualquer traducao ou informacao linguistica antes de confiar nela para qualquer finalidade."
        },
        "thirdPartyServices": {
            "heading": "Servicos de terceiros",
            "p1": "A LumenShore nao e responsavel por atos ou omissoes de servicos de terceiros, incluindo Apple, Vercel, Sentry ou qualquer processador de pagamentos.",
            "p2": "A Apple e o comerciante registrado para todas as compras dentro do aplicativo iOS. Disputas de cobranca relacionadas a compras na App Store devem ser direcionadas a Apple."
        },
        "serviceAvailability": {
            "heading": "Disponibilidade do servico",
            "p1": "Nao garantimos nenhum nivel especifico de tempo de atividade ou disponibilidade do Servico.",
            "p2": "Podemos realizar manutencao programada ou nao programada com ou sem aviso previo. O Servico pode sofrer interrupcoes devido a provedores terceiros, problemas de rede ou eventos alem do nosso controle.",
            "p3": "Nenhum acordo de nivel de servico (SLA) se aplica a menos que acordado separadamente por escrito."
        }
    },
    "pl": {
        "tieredLiabilityCaps": {
            "heading": "Limity odpowiedzialnosci",
            "freeP1": "Jezeli korzystasz z Uslugi w ramach darmowego planu, laczna skumulowana odpowiedzialnosc LumenShore wobec Ciebie za wszystkie roszczenia nie przekroczy dziesieciu funtow szterlingow (10 £).",
            "paidP1": "Jezeli korzystasz z Uslugi w ramach platnej subskrypcji, laczna skumulowana odpowiedzialnosc LumenShore nie przekroczy calkowitej kwoty faktycznie zaplaconej przez Ciebie na rzecz LumenShore w ciagu dwunastu (12) miesiecy bezposrednio poprzedzajacych zdarzenie stanowiace podstawe roszczenia.",
            "iapNote": "W przypadku zakupow dokonanych za posrednictwem Apple App Store kwoty zaplacone LumenShore oznaczaja przychod netto otrzymany przez LumenShore po odliczeniu prowizji Apple."
        },
        "damageExclusions": {
            "heading": "Wylaczenie szkod pochodnych",
            "p1": "W NAJSZERSZYM ZAKRESIE DOZWOLONYM PRZEZ OBOWIAZUJACE PRAWO, LUMENSHORE W ZADNYM WYPADKU NIE PONOSI ODPOWIEDZIALNOSCI ZA: UTRATE DANYCH, UTRACONE ZYSKI, UTRACONE PRZYCHODY, UTRACONE OSZCZEDNOSCI, UTRATE REPUTACJI, PRZERWY W DZIALALNOSCI, KOSZTY USLUG ZASTEPCZYCH, SZKODY UBOCZNE, NASTEPNE, SZCZEGOLNE, PRZYKLADOWE LUB KARNE.",
            "p2": "To wylaczenie obowiazuje nawet jesli LumenShore zostal poinformowany o mozliwosci takich szkod i nawet jesli ograniczony srodek zaradczy przewidziany w niniejszym dokumencie nie spelnia swojego zasadniczego celu."
        },
        "warrantyDisclaimer": {
            "heading": "Wylaczenie gwarancji",
            "p1": "USLUGA JEST SWIADCZONA "W STANIE, W JAKIM JEST" I "W MIARE DOSTEPNOSCI" BEZ JAKICHKOLWIEK GWARANCJI, WYRAZNYCH LUB DOROZUMIANYCH, W TYM M.IN. DOROZUMIANYCH GWARANCJI PRZYDATNOSCI HANDLOWEJ, PRZYDATNOSCI DO OKRESLONEGO CELU, NIENARUSZALNOSCI, DOKLADNOSCI, KOMPLETNOSCI, NIEZAWODNOSCI, DOSTEPNOSCI LUB BEZPIECZENSTWA.",
            "p2": "Nie gwarantujemy, ze Usluga bedzie dzialac bez przerw, bedzie wolna od bledow, wirusow lub ze wady zostana naprawione.",
            "ukCarveout": "Nic w niniejszych Warunkach nie wplywa na Twoje prawa ustawowe wynikajace z ustawy o prawach konsumenta z 2015 r. (Wielka Brytania) lub rownowaznego ustawodawstwa dotyczacego ochrony konsumentow w Twojej jurysdykcji."
        },
        "userReliance": {
            "heading": "Brak odpowiedzialnosci za poleganie uzytkownika",
            "p1": "LumenShore nie ponosi odpowiedzialnosci za decyzje podejmowane lub dzialania podejmowane przez uzytkownikow na podstawie tresci dostarczanych za posrednictwem Uslugi.",
            "p2": "Uzytkownicy sa wylacznie odpowiedzialni za weryfikacje dokladnosci tlumaczen lub informacji jezykowych przed poleganiem na nich w jakimkolwiek celu."
        },
        "thirdPartyServices": {
            "heading": "Uslugi podmiotow trzecich",
            "p1": "LumenShore nie ponosi odpowiedzialnosci za dzialania lub zaniechania uslug podmiotow trzecich, w tym Apple, Vercel, Sentry lub jakiegokolwiek podmiotu przetwarzajacego platnosci.",
            "p2": "Apple jest zarejestrowanym sprzedawca dla wszystkich zakupow w aplikacji iOS. Spory dotyczace rozliczen zwiazanych z zakupami w App Store nalezy kierowac do Apple."
        },
        "serviceAvailability": {
            "heading": "Dostepnosc uslugi",
            "p1": "Nie gwarantujemy zadnego konkretnego poziomu czasu dzialania lub dostepnosci Uslugi.",
            "p2": "Mozemy przeprowadzac planowane lub nieplanowane prace konserwacyjne z uprzednim powiadomieniem lub bez niego. Usluga moze doswiadczac przerw z powodu dostawcow zewnetrznych, problemow sieciowych lub zdarzen pozostajacych poza nasza kontrola.",
            "p3": "Umowa o poziomie uslug (SLA) nie obowiazuje, chyba ze zostanie oddzielnie uzgodniona na pismie."
        }
    },
    "ar": {
        "tieredLiabilityCaps": {
            "heading": "حدود المسؤولية",
            "freeP1": "إذا كنت تستخدم الخدمة في الطبقة المجانية، فإن إجمالي المسؤولية التراكمية لـ LumenShore تجاهك عن جميع المطالبات لن يتجاوز عشرة جنيهات إسترلينية (10 جنيه إسترليني).",
            "paidP1": "إذا كنت تستخدم الخدمة باشتراك مدفوع، فإن إجمالي المسؤولية التراكمية لـ LumenShore تجاهك لن يتجاوز المبلغ الإجمالي الذي دفعته فعليًا لـ LumenShore في الاثني عشر (12) شهرًا السابقة مباشرة للحدث الذي أدى إلى المطالبة.",
            "iapNote": "بالنسبة للمشتريات التي تتم عبر متجر تطبيقات Apple، تعني المبالغ المدفوعة لـ LumenShore صافي الإيرادات التي تلقتها LumenShore بعد عمولة Apple."
        },
        "damageExclusions": {
            "heading": "استبعاد الأضرار التبعية",
            "p1": "إلى أقصى حد يسمح به القانون المعمول به، لن تكون LUMENSHORE مسؤولة بأي حال عن: فقدان البيانات، أو الأرباح الضائعة، أو الإيرادات المفقودة، أو المدخرات المفقودة، أو فقدان الود التجاري، أو انقطاع الأعمال، أو تكلفة الخدمات البديلة، أو الأضرار العرضية، أو التبعية، أو الخاصة، أو النموذجية، أو العقابية.",
            "p2": "ينطبق هذا الاستبعاد حتى لو تم إخطار LumenShore بإمكانية حدوث مثل هذه الأضرار، وحتى لو فشل أي تعويض محدود منصوص عليه في تحقيق غرضه الأساسي."
        },
        "warrantyDisclaimer": {
            "heading": "إخلاء المسؤولية عن الضمان",
            "p1": "يتم تقديم الخدمة \"كما هي\" و\"حسب التوفر\" دون ضمانات من أي نوع، سواء كانت صريحة أو ضمنية، بما في ذلك على سبيل المثال لا الحصر الضمانات الضمنية للرواج التجاري والملاءمة لغرض معين وعدم الانتهاك والدقة والاكتمال والموثوقية والتوفر والأمان.",
            "p2": "لا نضمن أن الخدمة ستكون متواصلة أو خالية من الأخطاء أو الفيروسات، أو أن العيوب سيتم تصحيحها.",
            "ukCarveout": "لا شيء في هذه الشروط يؤثر على حقوقك القانونية بموجب قانون حقوق المستهلك لعام 2015 (المملكة المتحدة) أو تشريعات حماية المستهلك المعادلة في ولايتك القضائية."
        },
        "userReliance": {
            "heading": "عدم المسؤولية عن اعتماد المستخدم",
            "p1": "لا تتحمل LumenShore المسؤولية عن أي قرارات يتخذها أو إجراءات يقوم بها المستخدمون اعتمادًا على المحتوى المقدم عبر الخدمة.",
            "p2": "يتحمل المستخدمون وحدهم مسؤولية التحقق من دقة أي ترجمة أو معلومات لغوية قبل الاعتماد عليها لأي غرض."
        },
        "thirdPartyServices": {
            "heading": "خدمات الأطراف الثالثة",
            "p1": "لا تتحمل LumenShore المسؤولية عن أفعال أو إغفالات خدمات الأطراف الثالثة، بما في ذلك Apple وVercel وSentry أو أي معالج مدفوعات.",
            "p2": "Apple هي التاجر المسجل لجميع مشتريات iOS داخل التطبيق. يجب توجيه نزاعات الفوترة المتعلقة بمشتريات App Store إلى Apple."
        },
        "serviceAvailability": {
            "heading": "توفر الخدمة",
            "p1": "لا نضمن أي مستوى محدد من وقت التشغيل أو توفر الخدمة.",
            "p2": "قد نجري صيانة مجدولة أو غير مجدولة مع أو بدون إشعار مسبق. قد تتعرض الخدمة لانقطاعات بسبب مزودي خدمات خارجيين أو مشاكل في الشبكة أو أحداث خارجة عن سيطرتنا.",
            "p3": "لا تنطبق أي اتفاقية مستوى خدمة (SLA) ما لم يتم الاتفاق عليها بشكل منفصل كتابيًا."
        }
    },
    "zh": {
        "tieredLiabilityCaps": {
            "heading": "责任上限",
            "freeP1": "如果您使用免费版本的服务，LumenShore对您所有索赔的累计总责任不超过十英镑（£10）。",
            "paidP1": "如果您使用付费订阅服务，LumenShore的累计总责任不超过您在索赔事件发生前十二（12）个月内实际支付给LumenShore的总金额。",
            "iapNote": "对于通过Apple App Store进行的购买，支付给LumenShore的金额是指LumenShore在扣除Apple佣金后收到的净收入。"
        },
        "damageExclusions": {
            "heading": "间接损害排除",
            "p1": "在适用法律允许的最大范围内，LUMENSHORE在任何情况下均不对以下事项承担责任：数据丢失、利润损失、收入损失、储蓄损失、商誉损失、业务中断、替代服务成本、附带损害、间接损害、特殊损害、惩戒性损害或惩罚性损害。",
            "p2": "即使LumenShore已被告知可能发生此类损害，且即使本条款规定的有限补救措施未能实现其基本目的，此排除仍然适用。"
        },
        "warrantyDisclaimer": {
            "heading": "免责声明",
            "p1": "本服务按「现状」和「可用状态」提供，不附带任何明示或暗示的保证，包括但不限于适销性、特定用途适用性、不侵权、准确性、完整性、可靠性、可用性或安全性的暗示保证。",
            "p2": "我们不保证服务将不间断、无错误、无病毒运行，或缺陷将被纠正。",
            "ukCarveout": "本条款中的任何内容均不影响您依据《2015年消费者权利法》（英国）或您所在司法管辖区同等消费者保护立法享有的法定权利。"
        },
        "userReliance": {
            "heading": "不对用户信赖承担责任",
            "p1": "LumenShore不对用户依赖通过服务提供的内容所做出的决定或采取的行动承担责任。",
            "p2": "用户有责任在出于任何目的依赖翻译或语言信息之前，自行验证其准确性。"
        },
        "thirdPartyServices": {
            "heading": "第三方服务",
            "p1": "LumenShore不对第三方服务（包括Apple、Vercel、Sentry或任何支付处理商）的行为或遗漏承担责任。",
            "p2": "Apple是所有iOS应用内购买的注册商户。与App Store购买相关的计费争议应直接向Apple提出。"
        },
        "serviceAvailability": {
            "heading": "服务可用性",
            "p1": "我们不保证服务的任何特定正常运行时间或可用性水平。",
            "p2": "我们可能会在有或没有事先通知的情况下进行计划内或计划外维护。服务可能会因第三方提供商、网络问题或超出我们控制范围的事件而中断。",
            "p3": "除非另行书面约定，否则不适用任何服务级别协议（SLA）。"
        }
    },
    "uk": {
        "tieredLiabilityCaps": {
            "heading": "Ліміти відповідальності",
            "freeP1": "Якщо ви використовуєте Сервіс на безкоштовному рівні, загальна сукупна відповідальність LumenShore перед вами за всі претензії не перевищує десяти фунтів стерлінгів (£10).",
            "paidP1": "Якщо ви використовуєте Сервіс за платною підпискою, загальна сукупна відповідальність LumenShore не перевищує загальної суми, яку ви фактично сплатили LumenShore за дванадцять (12) місяців, що безпосередньо передують події, яка стала підставою для претензії.",
            "iapNote": "Для покупок, здійснених через Apple App Store, суми, сплачені LumenShore, означають чистий дохід, отриманий LumenShore після комісії Apple."
        },
        "damageExclusions": {
            "heading": "Виключення непрямих збитків",
            "p1": "В МАКСИМАЛЬНІЙ МІРІ, ДОЗВОЛЕНІЙ ЧИННИМ ЗАКОНОДАВСТВОМ, LUMENSHORE НІ ЗА ЯКИХ ОБСТАВИН НЕ НЕСЕ ВІДПОВІДАЛЬНОСТІ ЗА: ВТРАТУ ДАНИХ, УПУЩЕНИЙ ПРИБУТОК, ВТРАТУ ДОХОДУ, ВТРАТУ ЗАОЩАДЖЕНЬ, ВТРАТУ ДІЛОВОЇ РЕПУТАЦІЇ, ПЕРЕРИВАННЯ БІЗНЕСУ, ВИТРАТИ НА ЗАМІННІ ПОСЛУГИ, ПОБІЧНІ, НЕПРЯМІ, ОСОБЛИВІ, ПОКАЗОВІ АБО ШТРАФНІ ЗБИТКИ.",
            "p2": "Це виключення застосовується, навіть якщо LumenShore було повідомлено про можливість таких збитків, і навіть якщо обмежений засіб правового захисту не досягає своєї основної мети."
        },
        "warrantyDisclaimer": {
            "heading": "Відмова від гарантій",
            "p1": "СЕРВІС НАДАЄТЬСЯ «ЯК Є» ТА «ЗА НАЯВНОСТІ» БЕЗ БУДЬ-ЯКИХ ГАРАНТІЙ, ЯВНИХ АБО НЕЯВНИХ, ВКЛЮЧАЮЧИ, АЛЕ НЕ ОБМЕЖУЮЧИСЬ, НЕЯВНИМИ ГАРАНТІЯМИ ТОВАРНОЇ ПРИДАТНОСТІ, ПРИДАТНОСТІ ДЛЯ КОНКРЕТНОЇ МЕТИ, НЕПОРУШЕННЯ ПРАВ, ТОЧНОСТІ, ПОВНОТИ, НАДІЙНОСТІ, ДОСТУПНОСТІ АБО БЕЗПЕКИ.",
            "p2": "Ми не гарантуємо, що Сервіс працюватиме безперебійно, без помилок, без вірусів або що дефекти будуть виправлені.",
            "ukCarveout": "Ніщо в цих Умовах не впливає на ваші законні права відповідно до Закону про права споживачів 2015 року (Сполучене Королівство) або еквівалентного законодавства про захист прав споживачів у вашій юрисдикції."
        },
        "userReliance": {
            "heading": "Відсутність відповідальності за довіру користувача",
            "p1": "LumenShore не несе відповідальності за рішення, прийняті або дії, вчинені користувачами на основі контенту, наданого через Сервіс.",
            "p2": "Користувачі несуть виключну відповідальність за перевірку точності будь-якого перекладу або мовної інформації перед тим, як покладатися на неї для будь-якої мети."
        },
        "thirdPartyServices": {
            "heading": "Послуги третіх сторін",
            "p1": "LumenShore не несе відповідальності за дії або бездіяльність послуг третіх сторін, включаючи Apple, Vercel, Sentry або будь-якого платіжного процесора.",
            "p2": "Apple є зареєстрованим продавцем для всіх покупок в додатку iOS. Суперечки щодо рахунків, пов'язані з покупками в App Store, слід спрямовувати до Apple."
        },
        "serviceAvailability": {
            "heading": "Доступність сервісу",
            "p1": "Ми не гарантуємо жодного конкретного рівня безвідмовності або доступності Сервісу.",
            "p2": "Ми можемо проводити планове або позапланове технічне обслуговування з попереднім повідомленням або без нього. Сервіс може зазнавати перебоїв через сторонніх постачальників, мережеві проблеми або події, що перебувають поза нашим контролем.",
            "p3": "Угода про рівень обслуговування (SLA) не застосовується, якщо не узгоджена окремо в письмовій формі."
        }
    }
}

for locale, data in TRANSLATIONS.items():
    path = os.path.join(BASE, f"{locale}.json")
    with open(path, "r", encoding="utf-8") as f:
        content = json.load(f)
    for key, val in data.items():
        content["Terms"][key] = val
    with open(path, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Updated {locale}.json with 14.5 sections")

print("Done — Story 14.5 translations added to all 10 locales.")
