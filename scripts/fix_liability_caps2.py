#!/usr/bin/env python3
"""Fix remaining liability caps using full replacement strings."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

# Full corrected cap strings per locale where still broken
FIXES = {
    "pl": {
        "Terms.limitationOfLiability.cap": "Całkowita (łączna) odpowiedzialność Lumenshore z tytułu wszelkich roszczeń wynikających z niniejszego Regulaminu lub korzystania z LumenLingo nie przekracza: (a) dla użytkowników bezpłatnych — dziesięć funtów szterlingów (£10); (b) dla płatnych subskrybentów — całkowitej kwoty opłat subskrypcyjnych faktycznie uiszczonych przez Ciebie w ciągu dwunastu (12) miesięcy bezpośrednio poprzedzających zdarzenie będące podstawą roszczenia.",
        "Eula.liability.cap": "Łączna odpowiedzialność Lumenshore za wszystkie roszczenia wynikające z niniejszej EULA lub korzystania z Aplikacji nie przekroczy: (a) dla użytkowników poziomu Free — dziesięciu funtów szterlingów (£10); (b) dla płatnych subskrybentów — łącznych opłat subskrypcyjnych uiszczonych przez Ciebie w ciągu dwunastu (12) miesięcy poprzedzających roszczenie.",
    },
    "de": {
        "Terms.limitationOfLiability.cap": "Die Gesamthaftung von Lumenshore für alle Ansprüche aus diesen Nutzungsbedingungen oder Ihrer Nutzung von LumenLingo ist beschränkt auf: (a) für Nutzer des kostenlosen Tarifs — zehn Pfund Sterling (£10); (b) für zahlende Abonnenten — die gesamten Abonnementgebühren, die Sie in den zwölf (12) Monaten unmittelbar vor dem den Anspruch begründenden Ereignis tatsächlich gezahlt haben.",
        "Eula.liability.cap": "Die Gesamthaftung von Lumenshore für alle Ansprüche aus oder im Zusammenhang mit dieser EULA oder Ihrer Nutzung der App ist beschränkt auf: (a) für Nutzer des kostenlosen Tarifs — zehn Pfund Sterling (£10); (b) für zahlende Abonnenten — die gesamten Abonnementgebühren, die Sie in den zwölf (12) Monaten vor dem Anspruch gezahlt haben.",
    },
    "es": {
        "Terms.limitationOfLiability.cap": "La responsabilidad total acumulada de Lumenshore por todas las reclamaciones derivadas de estos Términos o de su uso de LumenLingo no excederá: (a) para los usuarios del nivel gratuito — diez libras esterlinas (£10); (b) para los suscriptores de pago — el total de las tarifas de suscripción efectivamente pagadas por usted en los doce (12) meses inmediatamente anteriores al evento que dio origen a la reclamación.",
        "Eula.liability.cap": "La responsabilidad total acumulada de Lumenshore por todas las reclamaciones derivadas de o relacionadas con este EULA o su uso de la Aplicación no excederá: (a) para los usuarios del nivel gratuito — diez libras esterlinas (£10); (b) para los suscriptores de pago — el total de las tarifas de suscripción pagadas por usted en los doce (12) meses anteriores a la reclamación.",
    },
    "fr": {
        "Terms.limitationOfLiability.cap": "La responsabilité totale cumulée de Lumenshore pour toutes les réclamations découlant des présentes Conditions ou de votre utilisation de LumenLingo ne dépassera pas : (a) pour les utilisateurs de la formule gratuite — dix livres sterling (£10) ; (b) pour les abonnés payants — le montant total des frais d'abonnement effectivement payés par vous au cours des douze (12) mois précédant immédiatement l'événement à l'origine de la réclamation.",
        "Eula.liability.cap": "La responsabilité totale cumulée de Lumenshore pour l'ensemble des réclamations découlant du présent CLUF ou de votre utilisation de l'Application ne dépassera pas : (a) pour les utilisateurs de la formule gratuite — dix livres sterling (£10) ; (b) pour les abonnés payants — le montant total des frais d'abonnement payés par vous au cours des douze (12) mois précédant la réclamation.",
    },
    "ja": {
        "Eula.liability.cap": "本EULAまたはアプリの使用に起因または関連するすべての請求に対するLumenshoreの総責任額は次を超えないものとします：(a) Freeティアユーザーの場合 — 10英ポンド（£10）；(b) 有料サブスクリプションユーザーの場合 — 請求の原因となった事象の直前12か月間にお客様が実際に支払ったサブスクリプション料金の合計額。",
    },
    "uk": {
        "Terms.limitationOfLiability.cap": "Сукупна відповідальність Lumenshore за всіма вимогами, що виникають з цих Умов або використання вами LumenLingo, не перевищує: (a) для користувачів безкоштовного рівня — десять фунтів стерлінгів (£10); (b) для платних підписників — загальну суму підписних платежів, фактично сплачених вами протягом дванадцяти (12) місяців, що безпосередньо передують події, яка стала підставою вимоги.",
        "Eula.liability.cap": "Загальна сукупна відповідальність Lumenshore за всі претензії, що виникають з цієї EULA або використання вами Застосунку, не перевищує: (a) для користувачів рівня Free — десять фунтів стерлінгів (£10); (b) для платних підписників — загальну суму підписних платежів, сплачених вами протягом дванадцяти (12) місяців, що передують претензії.",
    },
}

applied = 0
for loc, fixes in FIXES.items():
    path = ROOT / f"{loc}.json"
    data = load_json(path)
    for key_path_str, new_val in fixes.items():
        parts = key_path_str.split(".")
        obj = data
        for p in parts[:-1]:
            obj = obj[p]
        obj[parts[-1]] = new_val
        print(f"  [{loc}] Fixed {key_path_str}")
        applied += 1
    save_json(path, data)

print(f"\nTotal changes: {applied}")
