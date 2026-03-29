#!/usr/bin/env python3
"""Story 21.1 — Privacy translations Part 4/5.

Sections: dataRetention, yourRights, policyUpdates, contactUs.
"""
import json, os, sys

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

def load_json(locale):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(locale, data):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

def set_nested(d, keys, value):
    for key in keys[:-1]:
        d = d.setdefault(key, {})
    d[keys[-1]] = value

def get_nested(d, keys):
    for key in keys:
        if isinstance(d, dict) and key in d:
            d = d[key]
        else:
            return None
    return d

T = {}

# ── dataRetention ─────────────────────────────────────────────────────────────
T["dataRetention.heading"] = {
    "pl": "Przechowywanie i usuwanie danych",
    "de": "Datenaufbewahrung und Löschung",
    "es": "Retención y eliminación de datos",
    "fr": "Conservation et suppression des données",
    "ja": "データの保持と削除",
    "zh": "数据保留与删除",
    "ar": "الاحتفاظ بالبيانات وحذفها",
    "uk": "Зберігання та видалення даних",
}
T["dataRetention.intro"] = {
    "pl": "Przechowujemy Twoje dane tylko tak długo, jak jest to konieczne:",
    "de": "Wir bewahren Ihre Daten nur so lange auf, wie es nötig ist:",
    "es": "Solo conservamos sus datos durante el tiempo necesario:",
    "fr": "Nous ne conservons vos données que le temps nécessaire :",
    "ja": "当社はデータを必要な期間のみ保持します：",
    "zh": "我们仅在必要期限内保留您的数据：",
    "ar": "نحتفظ ببياناتك فقط طالما كان ذلك ضروريًا:",
    "uk": "Ми зберігаємо ваші дані лише стільки, скільки необхідно:",
}
T["dataRetention.websiteHeading"] = {
    "pl": "Dane strony internetowej",
    "de": "Website-Daten",
    "es": "Datos del sitio web",
    "fr": "Données du site web",
    "ja": "ウェブサイトデータ",
    "zh": "网站数据",
    "ar": "بيانات الموقع الإلكتروني",
    "uk": "Дані веб-сайту",
}
T["dataRetention.websiteLi1"] = {
    "pl": "<b>E-maile z newslettera/listy oczekujących</b> — przechowywane do momentu rezygnacji z subskrypcji plus do 30 dni na przetworzenie usunięcia.",
    "de": "<b>Newsletter-/Wartelisten-E-Mails</b> — aufbewahrt bis zur Abmeldung, zuzüglich bis zu 30 Tage für die Verarbeitung der Löschung.",
    "es": "<b>Correos electrónicos del boletín/lista de espera</b> — conservados hasta que cancele la suscripción, más hasta 30 días para procesar la eliminación.",
    "fr": "<b>E-mails newsletter/liste d'attente</b> — conservés jusqu'à votre désinscription, plus jusqu'à 30 jours pour traiter la suppression.",
    "ja": "<b>ニュースレター/ウェイトリストのメール</b> — 配信停止まで保持され、削除の処理に最大30日かかります。",
    "zh": "<b>新闻通讯/等待名单邮件</b> — 保留至您取消订阅，另加最多30天的处理时间。",
    "ar": "<b>رسائل البريد الإلكتروني للنشرة الإخبارية/قائمة الانتظار</b> — يتم الاحتفاظ بها حتى إلغاء الاشتراك، بالإضافة إلى ما يصل إلى 30 يومًا لمعالجة الإزالة.",
    "uk": "<b>Електронні листи розсилки/списку очікування</b> — зберігаються до відписки плюс до 30 днів для обробки видалення.",
}
T["dataRetention.websiteLi2"] = {
    "pl": "<b>Logi błędów Sentry</b> — przechowywane przez Sentry przez 90 dni, następnie automatycznie usuwane.",
    "de": "<b>Sentry-Fehlerprotokolle</b> — von Sentry 90 Tage aufbewahrt, danach automatisch gelöscht.",
    "es": "<b>Registros de errores de Sentry</b> — conservados por Sentry durante 90 días y luego eliminados automáticamente.",
    "fr": "<b>Journaux d'erreurs Sentry</b> — conservés par Sentry pendant 90 jours, puis automatiquement supprimés.",
    "ja": "<b>Sentryエラーログ</b> — Sentryにより90日間保持された後、自動的に削除されます。",
    "zh": "<b>Sentry错误日志</b> — 由Sentry保留90天后自动删除。",
    "ar": "<b>سجلات أخطاء Sentry</b> — يحتفظ بها Sentry لمدة 90 يومًا، ثم تُحذف تلقائيًا.",
    "uk": "<b>Журнали помилок Sentry</b> — зберігаються Sentry протягом 90 днів, потім автоматично видаляються.",
}
T["dataRetention.websiteLi3"] = {
    "pl": "<b>Nagrania sesji Sentry</b> — przechowywane przez Sentry przez 90 dni, następnie automatycznie usuwane.",
    "de": "<b>Sentry-Sitzungsaufzeichnungen</b> — von Sentry 90 Tage aufbewahrt, danach automatisch gelöscht.",
    "es": "<b>Reproducciones de sesiones de Sentry</b> — conservadas por Sentry durante 90 días y luego eliminadas automáticamente.",
    "fr": "<b>Enregistrements de session Sentry</b> — conservés par Sentry pendant 90 jours, puis automatiquement supprimés.",
    "ja": "<b>Sentryセッションリプレイ</b> — Sentryにより90日間保持された後、自動的に削除されます。",
    "zh": "<b>Sentry会话回放</b> — 由Sentry保留90天后自动删除。",
    "ar": "<b>إعادات تشغيل جلسات Sentry</b> — يحتفظ بها Sentry لمدة 90 يومًا، ثم تُحذف تلقائيًا.",
    "uk": "<b>Записи сесій Sentry</b> — зберігаються Sentry протягом 90 днів, потім автоматично видаляються.",
}
T["dataRetention.appHeading"] = {
    "pl": "Dane aplikacji iOS",
    "de": "iOS-App-Daten",
    "es": "Datos de la aplicación iOS",
    "fr": "Données de l'application iOS",
    "ja": "iOSアプリのデータ",
    "zh": "iOS应用数据",
    "ar": "بيانات تطبيق iOS",
    "uk": "Дані додатку iOS",
}
T["dataRetention.appLi1"] = {
    "pl": "<b>Usuwanie konta</b> — użyj opcji w aplikacji Ustawienia → Wyloguj się → Usuń konto, aby trwale usunąć wszystkie dane edukacyjne, postępy, preferencje i dane synchronizacji iCloud. Tej operacji nie można cofnąć.",
    "de": "<b>Konto löschen</b> — verwenden Sie die In-App-Option Einstellungen → Abmelden → Konto löschen, um alle Lerndaten, Fortschritte, Einstellungen und iCloud-Synchronisierungsdaten dauerhaft zu löschen. Diese Aktion kann nicht rückgängig gemacht werden.",
    "es": "<b>Eliminar cuenta</b> — utilice la opción dentro de la aplicación Ajustes → Cerrar sesión → Eliminar cuenta para borrar permanentemente todos los datos de aprendizaje, progreso, preferencias y datos de sincronización de iCloud. Esta acción no se puede deshacer.",
    "fr": "<b>Supprimer le compte</b> — utilisez l'option dans l'application Paramètres → Déconnexion → Supprimer le compte pour effacer définitivement toutes les données d'apprentissage, la progression, les préférences et les données de synchronisation iCloud. Cette action est irréversible.",
    "ja": "<b>アカウント削除</b> — アプリ内の設定 → サインアウト → アカウント削除を使用して、すべての学習データ、進捗、設定、iCloud同期データを完全に消去できます。この操作は元に戻せません。",
    "zh": "<b>删除账户</b> — 使用应用内选项设置 → 退出登录 → 删除账户，永久清除所有学习数据、进度、偏好设置和iCloud同步数据。此操作不可撤销。",
    "ar": "<b>حذف الحساب</b> — استخدم الخيار داخل التطبيق الإعدادات → تسجيل الخروج → حذف الحساب لمسح جميع بيانات التعلم والتقدم والتفضيلات وبيانات مزامنة iCloud نهائيًا. لا يمكن التراجع عن هذا الإجراء.",
    "uk": "<b>Видалення облікового запису</b> — скористайтеся опцією в додатку Налаштування → Вийти → Видалити обліковий запис, щоб назавжди стерти всі навчальні дані, прогрес, налаштування та дані синхронізації iCloud. Цю дію неможливо скасувати.",
}
T["dataRetention.appLi2"] = {
    "pl": "<b>Usunięcie aplikacji</b> — odinstalowanie LumenLingo usuwa wszystkie dane przechowywane lokalnie.",
    "de": "<b>App löschen</b> — die Deinstallation von LumenLingo entfernt alle lokal gespeicherten Daten.",
    "es": "<b>Eliminar la aplicación</b> — desinstalar LumenLingo elimina todos los datos almacenados localmente.",
    "fr": "<b>Supprimer l'application</b> — la désinstallation de LumenLingo supprime toutes les données stockées localement.",
    "ja": "<b>アプリの削除</b> — LumenLingoをアンインストールすると、ローカルに保存されたすべてのデータが削除されます。",
    "zh": "<b>删除应用</b> — 卸载LumenLingo将删除所有本地存储的数据。",
    "ar": "<b>حذف التطبيق</b> — إلغاء تثبيت LumenLingo يزيل جميع البيانات المخزنة محليًا.",
    "uk": "<b>Видалення додатку</b> — видалення LumenLingo видаляє всі локально збережені дані.",
}
T["dataRetention.appLi3"] = {
    "pl": "<b>Dane iCloud</b> — możesz zarządzać pamięcią iCloud w Ustawieniach urządzenia → Apple ID → iCloud → Zarządzaj pamięcią.",
    "de": "<b>iCloud-Daten</b> — Sie können den iCloud-Speicher über die Geräteeinstellungen → Apple-ID → iCloud → Speicher verwalten.",
    "es": "<b>Datos de iCloud</b> — puede gestionar el almacenamiento de iCloud a través de Ajustes del dispositivo → Apple ID → iCloud → Gestionar almacenamiento.",
    "fr": "<b>Données iCloud</b> — vous pouvez gérer le stockage iCloud via les Réglages de l'appareil → Identifiant Apple → iCloud → Gérer le stockage.",
    "ja": "<b>iCloudデータ</b> — デバイスの設定 → Apple ID → iCloud → ストレージを管理からiCloudストレージを管理できます。",
    "zh": "<b>iCloud数据</b> — 您可以通过设备设置 → Apple ID → iCloud → 管理储存空间来管理iCloud存储。",
    "ar": "<b>بيانات iCloud</b> — يمكنك إدارة تخزين iCloud من خلال إعدادات الجهاز → Apple ID → iCloud → إدارة التخزين.",
    "uk": "<b>Дані iCloud</b> — ви можете керувати сховищем iCloud через Налаштування пристрою → Apple ID → iCloud → Керувати сховищем.",
}
T["dataRetention.appLi4"] = {
    "pl": "<b>Subskrypcja</b> — anuluj subskrypcję w Ustawieniach → Apple ID → Subskrypcje. Po anulowaniu nie przechowujemy żadnych danych.",
    "de": "<b>Abonnement</b> — kündigen Sie Ihr Abonnement über Einstellungen → Apple-ID → Abonnements. Nach der Kündigung werden keine Daten von uns aufbewahrt.",
    "es": "<b>Suscripción</b> — cancele su suscripción a través de Ajustes → Apple ID → Suscripciones. No se conservan datos por nuestra parte después de la cancelación.",
    "fr": "<b>Abonnement</b> — annulez votre abonnement via Réglages → Identifiant Apple → Abonnements. Aucune donnée n'est conservée par nos soins après l'annulation.",
    "ja": "<b>サブスクリプション</b> — 設定 → Apple ID → サブスクリプションからサブスクリプションをキャンセルできます。キャンセル後、当社にデータは保持されません。",
    "zh": "<b>订阅</b> — 通过设置 → Apple ID → 订阅取消您的订阅。取消后我们不保留任何数据。",
    "ar": "<b>الاشتراك</b> — قم بإلغاء اشتراكك عبر الإعدادات → Apple ID → الاشتراكات. لا يتم الاحتفاظ بأي بيانات من قبلنا بعد الإلغاء.",
    "uk": "<b>Підписка</b> — скасуйте підписку через Налаштування → Apple ID → Підписки. Після скасування жодні дані нами не зберігаються.",
}

# ── yourRights ────────────────────────────────────────────────────────────────
T["yourRights.heading"] = {
    "pl": "Twoje prawa",
    "de": "Ihre Rechte",
    "es": "Sus derechos",
    "fr": "Vos droits",
    "ja": "お客様の権利",
    "zh": "您的权利",
    "ar": "حقوقك",
    "uk": "Ваші права",
}
T["yourRights.intro"] = {
    "pl": "W zależności od Twojej lokalizacji mogą Ci przysługiwać dodatkowe prawa dotyczące Twoich danych:",
    "de": "Abhängig von Ihrem Standort haben Sie möglicherweise zusätzliche Rechte bezüglich Ihrer Daten:",
    "es": "Dependiendo de su ubicación, puede tener derechos adicionales con respecto a sus datos:",
    "fr": "Selon votre localisation, vous pouvez disposer de droits supplémentaires concernant vos données :",
    "ja": "お住まいの地域によっては、データに関する追加の権利をお持ちの場合があります：",
    "zh": "根据您的位置，您可能拥有关于您数据的额外权利：",
    "ar": "بناءً على موقعك، قد يكون لديك حقوق إضافية بشأن بياناتك:",
    "uk": "Залежно від вашого місцезнаходження, ви можете мати додаткові права щодо ваших даних:",
}
T["yourRights.gdprHeading"] = {
    "pl": "Prawa wynikające z RODO (Europejski Obszar Gospodarczy i Wielka Brytania)",
    "de": "Nach der DSGVO (Europäischer Wirtschaftsraum & Vereinigtes Königreich)",
    "es": "Según el RGPD (Espacio Económico Europeo y Reino Unido)",
    "fr": "En vertu du RGPD (Espace économique européen et Royaume-Uni)",
    "ja": "GDPRに基づく権利（欧州経済領域および英国）",
    "zh": "根据GDPR（欧洲经济区和英国）",
    "ar": "بموجب GDPR (المنطقة الاقتصادية الأوروبية والمملكة المتحدة)",
    "uk": "За GDPR (Європейська економічна зона та Великобританія)",
}
T["yourRights.gdprLi1"] = {
    "pl": "Prawo dostępu do danych — dane aplikacji znajdują się na Twoim urządzeniu i w iCloud; w przypadku danych strony internetowej skontaktuj się z nami.",
    "de": "Recht auf Zugang zu Ihren Daten — App-Daten befinden sich auf Ihrem Gerät und in iCloud; für Website-Daten kontaktieren Sie uns.",
    "es": "Derecho a acceder a sus datos — los datos de la aplicación están en su dispositivo e iCloud; para datos del sitio web, contáctenos.",
    "fr": "Droit d'accéder à vos données — les données de l'application sont sur votre appareil et iCloud ; pour les données du site web, contactez-nous.",
    "ja": "データへのアクセス権 — アプリデータはお客様のデバイスとiCloudにあります。ウェブサイトデータについてはお問い合わせください。",
    "zh": "访问数据的权利 — 应用数据在您的设备和iCloud上；如需网站数据，请联系我们。",
    "ar": "حق الوصول إلى بياناتك — بيانات التطبيق موجودة على جهازك و iCloud؛ لبيانات الموقع الإلكتروني، اتصل بنا.",
    "uk": "Право доступу до ваших даних — дані додатку знаходяться на вашому пристрої та в iCloud; для даних веб-сайту зв'яжіться з нами.",
}
T["yourRights.gdprLi2"] = {
    "pl": "Prawo do sprostowania — edytuj preferencje aplikacji bezpośrednio; w przypadku danych strony internetowej skontaktuj się z nami.",
    "de": "Recht auf Berichtigung — bearbeiten Sie App-Einstellungen direkt; für Website-Daten kontaktieren Sie uns.",
    "es": "Derecho de rectificación — edite las preferencias de la aplicación directamente; para datos del sitio web, contáctenos.",
    "fr": "Droit de rectification — modifiez directement les préférences de l'application ; pour les données du site web, contactez-nous.",
    "ja": "訂正権 — アプリの設定は直接編集できます。ウェブサイトデータについてはお問い合わせください。",
    "zh": "更正权 — 直接编辑应用偏好设置；如需更正网站数据，请联系我们。",
    "ar": "حق التصحيح — قم بتعديل تفضيلات التطبيق مباشرة؛ لبيانات الموقع الإلكتروني، اتصل بنا.",
    "uk": "Право на виправлення — редагуйте налаштування додатку безпосередньо; для даних веб-сайту зв'яжіться з нами.",
}
T["yourRights.gdprLi3"] = {
    "pl": "Prawo do usunięcia — skorzystaj z funkcji usuwania konta w aplikacji, usuń aplikację lub skontaktuj się z nami, aby usunąć Twój adres e-mail z naszych list.",
    "de": "Recht auf Löschung — verwenden Sie die In-App-Funktion zum Löschen des Kontos, löschen Sie die App oder kontaktieren Sie uns, um Ihre E-Mail-Adresse aus unseren Listen zu entfernen.",
    "es": "Derecho de supresión — utilice la función de eliminación de cuenta dentro de la aplicación, elimine la aplicación o contáctenos para eliminar su correo electrónico de nuestras listas.",
    "fr": "Droit à l'effacement — utilisez la fonction de suppression de compte dans l'application, supprimez l'application ou contactez-nous pour retirer votre e-mail de nos listes.",
    "ja": "消去権 — アプリ内のアカウント削除機能を使用するか、アプリを削除するか、メールアドレスをリストから削除するようお問い合わせください。",
    "zh": "删除权 — 使用应用内的删除账户功能、删除应用，或联系我们将您的邮箱从列表中移除。",
    "ar": "حق المحو — استخدم ميزة حذف الحساب داخل التطبيق، أو احذف التطبيق، أو اتصل بنا لإزالة بريدك الإلكتروني من قوائمنا.",
    "uk": "Право на видалення — скористайтеся функцією видалення облікового запису в додатку, видаліть додаток або зв'яжіться з нами для видалення вашої електронної адреси з наших списків.",
}
T["yourRights.gdprLi5"] = {
    "pl": "Prawo do sprzeciwu — skontaktuj się z nami, aby zrezygnować z anonimowej analityki lub sprzeciwić się przetwarzaniu opartemu na prawnie uzasadnionym interesie.",
    "de": "Widerspruchsrecht — kontaktieren Sie uns, um der anonymen Analytik zu widersprechen oder der Verarbeitung auf Grundlage berechtigter Interessen zu widersprechen.",
    "es": "Derecho de oposición — contáctenos para rechazar los análisis anónimos o para oponerse al tratamiento basado en interés legítimo.",
    "fr": "Droit d'opposition — contactez-nous pour refuser les analyses anonymes ou pour vous opposer au traitement fondé sur l'intérêt légitime.",
    "ja": "異議申立権 — 匿名分析のオプトアウトまたは正当な利益に基づく処理への異議申立てについてはお問い合わせください。",
    "zh": "反对权 — 联系我们以退出匿名分析或反对基于合法利益的处理。",
    "ar": "حق الاعتراض — اتصل بنا للانسحاب من التحليلات المجهولة أو للاعتراض على المعالجة بناءً على المصلحة المشروعة.",
    "uk": "Право на заперечення — зв'яжіться з нами, щоб відмовитися від анонімної аналітики або заперечити проти обробки на основі законного інтересу.",
}
T["yourRights.gdprLi6"] = {
    "pl": "Prawo do ograniczenia przetwarzania — skontaktuj się z nami, aby poprosić o ograniczenie sposobu przetwarzania Twoich danych.",
    "de": "Recht auf Einschränkung der Verarbeitung — kontaktieren Sie uns, um eine Einschränkung der Verarbeitung Ihrer Daten zu verlangen.",
    "es": "Derecho a la limitación del tratamiento — contáctenos para solicitar que limitemos la forma en que procesamos sus datos.",
    "fr": "Droit à la limitation du traitement — contactez-nous pour demander la limitation du traitement de vos données.",
    "ja": "処理制限権 — データの処理方法の制限をリクエストするにはお問い合わせください。",
    "zh": "限制处理权 — 联系我们以请求限制我们处理您数据的方式。",
    "ar": "حق تقييد المعالجة — اتصل بنا لطلب تقييد كيفية معالجتنا لبياناتك.",
    "uk": "Право на обмеження обробки — зв'яжіться з нами, щоб попросити обмежити спосіб обробки ваших даних.",
}

# ── policyUpdates ─────────────────────────────────────────────────────────────
T["policyUpdates.heading"] = {
    "pl": "Aktualizacje polityki",
    "de": "Richtlinienaktualisierungen",
    "es": "Actualizaciones de la política",
    "fr": "Mises à jour de la politique",
    "ja": "ポリシーの更新",
    "zh": "政策更新",
    "ar": "تحديثات السياسة",
    "uk": "Оновлення політики",
}
T["policyUpdates.p1"] = {
    "pl": "Możemy od czasu do czasu aktualizować niniejszą Politykę prywatności, zazwyczaj w celu odzwierciedlenia zmian w naszych usługach lub wymogach prawnych. W przypadku istotnych zmian zaktualizujemy datę \u201EOstatnia aktualizacja\u201D i numer wersji na górze tej strony.",
    "de": "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren, typischerweise um Änderungen in unseren Diensten oder rechtlichen Anforderungen widerzuspiegeln. Bei wesentlichen Änderungen aktualisieren wir das Datum \u201EZuletzt aktualisiert\u201D und die Versionsnummer oben auf dieser Seite.",
    "es": "Podemos actualizar esta Política de privacidad de vez en cuando, normalmente para reflejar cambios en nuestros servicios o requisitos legales. Cuando realicemos cambios significativos, actualizaremos la fecha de «Última actualización» y el número de versión en la parte superior de esta página.",
    "fr": "Nous pouvons mettre à jour cette Politique de confidentialité de temps en temps, généralement pour refléter des changements dans nos services ou des exigences légales. En cas de modifications importantes, nous mettrons à jour la date de « Dernière mise à jour » et le numéro de version en haut de cette page.",
    "ja": "本プライバシーポリシーは、通常サービスや法的要件の変更を反映するために、随時更新される場合があります。重要な変更があった場合は、このページ上部の「最終更新日」とバージョン番号を更新します。",
    "zh": "我们可能会不时更新本隐私政策，通常是为了反映我们服务或法律要求的变更。当我们进行重大更改时，我们将更新本页顶部的\u201C最后更新\u201D日期和版本号。",
    "ar": "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر، عادةً لعكس التغييرات في خدماتنا أو المتطلبات القانونية. عند إجراء تغييرات جوهرية، سنقوم بتحديث تاريخ «آخر تحديث» ورقم الإصدار في أعلى هذه الصفحة.",
    "uk": "Ми можемо час від часу оновлювати цю Політику конфіденційності, зазвичай для відображення змін у наших послугах або правових вимогах. При внесенні суттєвих змін ми оновимо дату «Останнє оновлення» та номер версії у верхній частині цієї сторінки.",
}
T["policyUpdates.p2"] = {
    "pl": "Zachęcamy do okresowego przeglądania tej strony. Dalsze korzystanie z LumenLingo po wprowadzeniu zmian oznacza akceptację zaktualizowanej polityki.",
    "de": "Wir empfehlen Ihnen, diese Seite regelmäßig zu überprüfen. Die fortgesetzte Nutzung von LumenLingo nach Änderungen gilt als Akzeptanz der aktualisierten Richtlinie.",
    "es": "Le recomendamos que revise esta página periódicamente. El uso continuado de LumenLingo después de los cambios constituye la aceptación de la política actualizada.",
    "fr": "Nous vous encourageons à consulter régulièrement cette page. L'utilisation continue de LumenLingo après les modifications vaut acceptation de la politique mise à jour.",
    "ja": "このページを定期的に確認されることをお勧めします。変更後のLumenLingoの継続使用は、更新されたポリシーの承認を意味します。",
    "zh": "我们鼓励您定期查看本页面。在更改后继续使用LumenLingo即表示接受更新后的政策。",
    "ar": "نشجعك على مراجعة هذه الصفحة بشكل دوري. استمرارك في استخدام LumenLingo بعد التغييرات يعني قبول السياسة المحدثة.",
    "uk": "Рекомендуємо періодично переглядати цю сторінку. Продовження використання LumenLingo після внесення змін означає прийняття оновленої політики.",
}
T["policyUpdates.versionHistory"] = {
    "pl": "Historia wersji",
    "de": "Versionshistorie",
    "es": "Historial de versiones",
    "fr": "Historique des versions",
    "ja": "バージョン履歴",
    "zh": "版本历史",
    "ar": "سجل الإصدارات",
    "uk": "Історія версій",
}
T["policyUpdates.v2"] = {
    "pl": "<b>v2.0</b> (23 marca 2026) — Rozszerzenie polityki o zbieranie danych na stronie lumenlingo.com, ujawnienie nagrań sesji Sentry, ujawnienie Vercel Analytics, podstawy prawne przetwarzania, sekcja dotycząca przepływu danych oraz szczegóły buforowania Service Worker.",
    "de": "<b>v2.0</b> (23. März 2026) — Erweiterung der Richtlinie um die Datenerfassung auf lumenlingo.com, Sentry Session Replay, Vercel Analytics, Rechtsgrundlagen, Datenfluss-Abschnitt und Service-Worker-Caching-Details.",
    "es": "<b>v2.0</b> (23 de marzo de 2026) — Ampliación de la política para incluir la recopilación de datos del sitio web lumenlingo.com, divulgación de reproducción de sesiones de Sentry, divulgación de Vercel Analytics, base legal para el tratamiento, sección de flujo de datos y detalles de caché del Service Worker.",
    "fr": "<b>v2.0</b> (23 mars 2026) — Extension de la politique pour couvrir la collecte de données du site lumenlingo.com, divulgation de Sentry Session Replay, divulgation de Vercel Analytics, base juridique du traitement, section flux de données et détails de mise en cache du Service Worker.",
    "ja": "<b>v2.0</b>（2026年3月23日） — lumenlingo.comウェブサイトのデータ収集、Sentryセッションリプレイの開示、Vercel Analyticsの開示、処理の法的根拠、データフローセクション、Service Workerのキャッシュ詳細をカバーするようにポリシーを拡張。",
    "zh": "<b>v2.0</b>（2026年3月23日） — 扩展政策以涵盖lumenlingo.com网站数据收集、Sentry会话回放披露、Vercel Analytics披露、处理的法律依据、数据流部分和Service Worker缓存详情。",
    "ar": "<b>v2.0</b> (23 مارس 2026) — توسيع السياسة لتشمل جمع بيانات موقع lumenlingo.com، والإفصاح عن إعادة تشغيل جلسات Sentry، والإفصاح عن Vercel Analytics، والأساس القانوني للمعالجة، وقسم تدفق البيانات وتفاصيل التخزين المؤقت لـ Service Worker.",
    "uk": "<b>v2.0</b> (23 березня 2026) — Розширення політики для охоплення збору даних на сайті lumenlingo.com, розкриття запису сесій Sentry, розкриття Vercel Analytics, правової основи обробки, розділу про потоки даних та деталей кешування Service Worker.",
}
T["policyUpdates.v1"] = {
    "pl": "<b>v1.0</b> (22 marca 2026) — Pierwsza polityka prywatności obejmująca aplikację LumenLingo na iOS.",
    "de": "<b>v1.0</b> (22. März 2026) — Erste Datenschutzrichtlinie für die LumenLingo iOS-App.",
    "es": "<b>v1.0</b> (22 de marzo de 2026) — Política de privacidad inicial que cubre la aplicación LumenLingo para iOS.",
    "fr": "<b>v1.0</b> (22 mars 2026) — Politique de confidentialité initiale couvrant l'application LumenLingo iOS.",
    "ja": "<b>v1.0</b>（2026年3月22日） — LumenLingo iOSアプリを対象とした初期プライバシーポリシー。",
    "zh": "<b>v1.0</b>（2026年3月22日） — 涵盖LumenLingo iOS应用的初始隐私政策。",
    "ar": "<b>v1.0</b> (22 مارس 2026) — سياسة الخصوصية الأولية التي تغطي تطبيق LumenLingo لنظام iOS.",
    "uk": "<b>v1.0</b> (22 березня 2026) — Початкова політика конфіденційності для додатку LumenLingo iOS.",
}

# ── contactUs ─────────────────────────────────────────────────────────────────
T["contactUs.heading"] = {
    "pl": "Kontakt",
    "de": "Kontakt",
    "es": "Contacto",
    "fr": "Nous contacter",
    "ja": "お問い合わせ",
    "zh": "联系我们",
    "ar": "اتصل بنا",
    "uk": "Зв'яжіться з нами",
}
T["contactUs.intro"] = {
    "pl": "Jeśli masz pytania dotyczące niniejszej Polityki prywatności, Twoich danych lub chcesz skorzystać ze swoich praw, prosimy o kontakt:",
    "de": "Wenn Sie Fragen zu dieser Datenschutzrichtlinie, Ihren Daten haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns bitte:",
    "es": "Si tiene preguntas sobre esta Política de privacidad, sus datos o desea ejercer sus derechos, contáctenos:",
    "fr": "Si vous avez des questions sur cette Politique de confidentialité, vos données ou si vous souhaitez exercer vos droits, veuillez nous contacter :",
    "ja": "本プライバシーポリシー、お客様のデータについてご質問がある場合、または権利を行使されたい場合は、以下にご連絡ください：",
    "zh": "如果您对本隐私政策、您的数据有任何疑问，或想行使您的权利，请联系我们：",
    "ar": "إذا كانت لديك أسئلة حول سياسة الخصوصية هذه أو بياناتك أو تريد ممارسة حقوقك، يرجى التواصل معنا:",
    "uk": "Якщо у вас є запитання щодо цієї Політики конфіденційності, ваших даних або ви хочете скористатися своїми правами, зверніться до нас:",
}
T["contactUs.email"] = {
    "pl": "<b>E-mail</b>: <emailLink>legal@lumenlingo.com</emailLink>",
    "de": "<b>E-Mail</b>: <emailLink>legal@lumenlingo.com</emailLink>",
    "es": "<b>Correo electrónico</b>: <emailLink>legal@lumenlingo.com</emailLink>",
    "fr": "<b>E-mail</b> : <emailLink>legal@lumenlingo.com</emailLink>",
    "ja": "<b>メール</b>：<emailLink>legal@lumenlingo.com</emailLink>",
    "zh": "<b>电子邮件</b>：<emailLink>legal@lumenlingo.com</emailLink>",
    "ar": "<b>البريد الإلكتروني</b>: <emailLink>legal@lumenlingo.com</emailLink>",
    "uk": "<b>Електронна пошта</b>: <emailLink>legal@lumenlingo.com</emailLink>",
}
T["contactUs.company"] = {
    "pl": "<b>Firma</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, Anglia, LE4 9HA",
    "de": "<b>Unternehmen</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA",
    "es": "<b>Empresa</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, Inglaterra, LE4 9HA",
    "fr": "<b>Entreprise</b> : Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, Angleterre, LE4 9HA",
    "ja": "<b>会社</b>：Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA",
    "zh": "<b>公司</b>：Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA",
    "ar": "<b>الشركة</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA",
    "uk": "<b>Компанія</b>: Lumenshore Limited, Windsor House, Troon Way Business Centre, Humberstone Lane, Leicester, England, LE4 9HA",
}
T["contactUs.companyNumber"] = {
    "pl": "<b>Numer firmy</b>: 09607326 (Anglia i Walia)",
    "de": "<b>Firmennummer</b>: 09607326 (England und Wales)",
    "es": "<b>Número de empresa</b>: 09607326 (Inglaterra y Gales)",
    "fr": "<b>Numéro d'entreprise</b> : 09607326 (Angleterre et Pays de Galles)",
    "ja": "<b>会社番号</b>：09607326（イングランドおよびウェールズ）",
    "zh": "<b>公司编号</b>：09607326（英格兰和威尔士）",
    "ar": "<b>رقم الشركة</b>: 09607326 (إنجلترا وويلز)",
    "uk": "<b>Номер компанії</b>: 09607326 (Англія та Уельс)",
}
T["contactUs.vatNumber"] = {
    "pl": "<b>Numer VAT</b>: GB 270411929",
    "de": "<b>USt-IdNr.</b>: GB 270411929",
    "es": "<b>Número de IVA</b>: GB 270411929",
    "fr": "<b>Numéro de TVA</b> : GB 270411929",
    "ja": "<b>VAT番号</b>：GB 270411929",
    "zh": "<b>增值税号</b>：GB 270411929",
    "ar": "<b>رقم ضريبة القيمة المضافة</b>: GB 270411929",
    "uk": "<b>Номер ПДВ</b>: GB 270411929",
}
T["contactUs.responseTime"] = {
    "pl": "Zazwyczaj odpowiadamy w ciągu 48 godzin, a na formalne wnioski dotyczące praw do danych w ciągu 30 dni.",
    "de": "Wir antworten normalerweise innerhalb von 48 Stunden und innerhalb von 30 Tagen bei formellen Datenschutzanfragen.",
    "es": "Normalmente respondemos en un plazo de 48 horas y en un plazo de 30 días para solicitudes formales de derechos sobre los datos.",
    "fr": "Nous répondons généralement dans les 48 heures et dans les 30 jours pour les demandes formelles de droits sur les données.",
    "ja": "通常48時間以内に回答し、正式なデータ権利リクエストには30日以内に対応します。",
    "zh": "我们通常在48小时内回复，正式数据权利请求在30天内处理。",
    "ar": "نستجيب عادةً في غضون 48 ساعة وفي غضون 30 يومًا لطلبات حقوق البيانات الرسمية.",
    "uk": "Зазвичай ми відповідаємо протягом 48 годин та протягом 30 днів на офіційні запити щодо прав на дані.",
}

def apply_translations():
    en_data = load_json("en")
    stats = {}
    for locale in LOCALES:
        data = load_json(locale)
        changes = 0
        for dotkey, locale_translations in T.items():
            if locale not in locale_translations:
                continue
            keys = dotkey.split(".")
            en_val = get_nested(en_data.get("Privacy", {}), keys)
            current_val = get_nested(data.get("Privacy", {}), keys)
            if en_val is not None and current_val == en_val:
                set_nested(data["Privacy"], keys, locale_translations[locale])
                changes += 1
        if changes > 0:
            save_json(locale, data)
        stats[locale] = changes
        print(f"  {locale}: {changes} keys translated")
    return stats

if __name__ == "__main__":
    print("Story 21.1 — Privacy Policy Translation (Part 4/5)")
    print("Sections: dataRetention, yourRights, policyUpdates, contactUs")
    print("=" * 70)
    apply_translations()
    print("\nPart 4 complete.")
