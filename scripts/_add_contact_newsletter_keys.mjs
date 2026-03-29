// Epic 7 — Add Contact.form + Newsletter missing keys to all 9 locale files
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MESSAGES_DIR = join(__dirname, '..', 'lumen-lingo-frontend', 'messages');

const contactForm = {
  en: {
    success: "Message sent! We'll reply to your email.",
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    messageLabel: 'Message',
    messagePlaceholder: 'How can we help?',
    maxChars: 'Max 2000 characters',
    submit: 'Send Message',
  },
  es: {
    success: '¡Mensaje enviado! Responderemos a tu email.',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Email',
    emailPlaceholder: 'tu@email.com',
    messageLabel: 'Mensaje',
    messagePlaceholder: '¿En qué podemos ayudarte?',
    maxChars: 'Máximo 2000 caracteres',
    submit: 'Enviar mensaje',
  },
  fr: {
    success: 'Message envoyé ! Nous répondrons à votre email.',
    nameLabel: 'Nom',
    namePlaceholder: 'Votre nom',
    emailLabel: 'Email',
    emailPlaceholder: 'votre@email.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Comment pouvons-nous vous aider ?',
    maxChars: '2000 caractères maximum',
    submit: 'Envoyer le message',
  },
  ja: {
    success: 'メッセージを送信しました！メールにてご返信いたします。',
    nameLabel: '名前',
    namePlaceholder: 'お名前',
    emailLabel: 'メール',
    emailPlaceholder: 'your@email.com',
    messageLabel: 'メッセージ',
    messagePlaceholder: 'どのようにお手伝いできますか？',
    maxChars: '最大2000文字',
    submit: 'メッセージを送信',
  },
  de: {
    success: 'Nachricht gesendet! Wir antworten auf Ihre E-Mail.',
    nameLabel: 'Name',
    namePlaceholder: 'Ihr Name',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'ihre@email.de',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Wie können wir helfen?',
    maxChars: 'Maximal 2000 Zeichen',
    submit: 'Nachricht senden',
  },
  pl: {
    success: 'Wiadomość wysłana! Odpowiemy na Twój email.',
    nameLabel: 'Imię',
    namePlaceholder: 'Twoje imię',
    emailLabel: 'Email',
    emailPlaceholder: 'twoj@email.pl',
    messageLabel: 'Wiadomość',
    messagePlaceholder: 'W czym możemy pomóc?',
    maxChars: 'Maksymalnie 2000 znaków',
    submit: 'Wyślij wiadomość',
  },
  ar: {
    success: 'تم إرسال الرسالة! سنرد على بريدك الإلكتروني.',
    nameLabel: 'الاسم',
    namePlaceholder: 'اسمك',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'your@email.com',
    messageLabel: 'الرسالة',
    messagePlaceholder: 'كيف يمكننا مساعدتك؟',
    maxChars: 'الحد الأقصى 2000 حرف',
    submit: 'إرسال الرسالة',
  },
  zh: {
    success: '消息已发送！我们将回复您的邮件。',
    nameLabel: '姓名',
    namePlaceholder: '您的姓名',
    emailLabel: '邮箱',
    emailPlaceholder: 'your@email.com',
    messageLabel: '消息',
    messagePlaceholder: '我们能帮您什么？',
    maxChars: '最多2000个字符',
    submit: '发送消息',
  },
  uk: {
    success: 'Повідомлення надіслано! Ми відповімо на ваш email.',
    nameLabel: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    messageLabel: 'Повідомлення',
    messagePlaceholder: 'Чим ми можемо допомогти?',
    maxChars: 'Максимум 2000 символів',
    submit: 'Надіслати повідомлення',
  },
};

const newsletterExtra = {
  en: {
    preparing: "We're preparing something special.",
    followSocial: 'Follow us on social media for updates.',
    errorAge: 'Please confirm you meet the age requirement.',
    tryAgain: 'Try again',
    ageConfirm: 'I confirm I am at least {age} years old (or have parental consent if under 18).',
    successTitle: 'Welcome to the community!',
    successSubtitle: 'Check your inbox for a warm welcome.',
  },
  es: {
    preparing: 'Estamos preparando algo especial.',
    followSocial: 'Síguenos en redes sociales para novedades.',
    errorAge: 'Por favor, confirma que cumples con el requisito de edad.',
    tryAgain: 'Intentar de nuevo',
    ageConfirm: 'Confirmo que tengo al menos {age} años (o cuento con consentimiento parental si soy menor de 18).',
    successTitle: '¡Bienvenido a la comunidad!',
    successSubtitle: 'Revisa tu bandeja de entrada.',
  },
  fr: {
    preparing: 'Nous préparons quelque chose de spécial.',
    followSocial: 'Suivez-nous sur les réseaux sociaux pour les nouveautés.',
    errorAge: "Veuillez confirmer que vous remplissez la condition d'âge.",
    tryAgain: 'Réessayer',
    ageConfirm: "Je confirme avoir au moins {age} ans (ou avoir le consentement parental si j'ai moins de 18 ans).",
    successTitle: 'Bienvenue dans la communauté !',
    successSubtitle: 'Vérifiez votre boîte de réception.',
  },
  ja: {
    preparing: '特別な準備を進めています。',
    followSocial: '最新情報はSNSでフォローしてください。',
    errorAge: '年齢要件を確認してください。',
    tryAgain: 'もう一度試す',
    ageConfirm: '{age}歳以上であること（18歳未満の場合は保護者の同意があること）を確認します。',
    successTitle: 'コミュニティへようこそ！',
    successSubtitle: '受信トレイをご確認ください。',
  },
  de: {
    preparing: 'Wir bereiten etwas Besonderes vor.',
    followSocial: 'Folgen Sie uns in den sozialen Medien für Updates.',
    errorAge: 'Bitte bestätigen Sie, dass Sie die Altersanforderung erfüllen.',
    tryAgain: 'Erneut versuchen',
    ageConfirm: 'Ich bestätige, dass ich mindestens {age} Jahre alt bin (oder die elterliche Zustimmung habe, wenn ich unter 18 bin).',
    successTitle: 'Willkommen in der Community!',
    successSubtitle: 'Schauen Sie in Ihren Posteingang.',
  },
  pl: {
    preparing: 'Przygotowujemy coś specjalnego.',
    followSocial: 'Śledź nas w mediach społecznościowych.',
    errorAge: 'Proszę potwierdzić, że spełniasz wymóg wiekowy.',
    tryAgain: 'Spróbuj ponownie',
    ageConfirm: 'Potwierdzam, że mam co najmniej {age} lat (lub posiadam zgodę rodzica, jeśli mam mniej niż 18 lat).',
    successTitle: 'Witaj w społeczności!',
    successSubtitle: 'Sprawdź swoją skrzynkę odbiorczą.',
  },
  ar: {
    preparing: 'نحن نحضّر شيئاً مميزاً.',
    followSocial: 'تابعنا على وسائل التواصل الاجتماعي للحصول على التحديثات.',
    errorAge: 'يرجى تأكيد استيفائك لمتطلبات العمر.',
    tryAgain: 'حاول مرة أخرى',
    ageConfirm: 'أؤكد أن عمري {age} سنة على الأقل (أو لدي موافقة الوالدين إذا كنت أقل من 18 عاماً).',
    successTitle: 'مرحباً بك في المجتمع!',
    successSubtitle: 'تحقق من بريدك الوارد.',
  },
  zh: {
    preparing: '我们正在准备一些特别的东西。',
    followSocial: '关注我们的社交媒体获取最新动态。',
    errorAge: '请确认您满足年龄要求。',
    tryAgain: '重试',
    ageConfirm: '我确认我至少{age}岁（或如未满18岁已获得家长同意）。',
    successTitle: '欢迎加入社区！',
    successSubtitle: '请查看您的收件箱。',
  },
  uk: {
    preparing: 'Ми готуємо щось особливе.',
    followSocial: 'Слідкуйте за нами у соціальних мережах.',
    errorAge: 'Будь ласка, підтвердіть, що ви відповідаєте віковим вимогам.',
    tryAgain: 'Спробувати знову',
    ageConfirm: 'Я підтверджую, що мені принаймні {age} років (або маю згоду батьків, якщо мені менше 18).',
    successTitle: 'Ласкаво просимо до спільноти!',
    successSubtitle: 'Перевірте свою поштову скриньку.',
  },
};

const locales = Object.keys(contactForm);

for (const locale of locales) {
  const filePath = join(MESSAGES_DIR, `${locale}.json`);
  const json = JSON.parse(readFileSync(filePath, 'utf-8'));

  // Contact.form
  if (!json.Contact) json.Contact = {};
  json.Contact.form = contactForm[locale];

  // Newsletter extra keys
  if (!json.Newsletter) json.Newsletter = {};
  Object.assign(json.Newsletter, newsletterExtra[locale]);

  writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
  console.log(`✅ ${locale}.json — Contact.form + Newsletter keys added`);
}
