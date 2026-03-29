import fs from 'fs';
import path from 'path';

const newKeys = {
  en: {
    hero: { badge: 'The LumenLingo Journal', heading: 'Tips, Guides & Insights', description: 'Explore the science of language learning, practical study tips, and the latest from the LumenLingo team. Written for learners who want to go deeper.' },
    categories: { all: 'All', languageTips: 'Language Tips', appUpdates: 'App Updates', learningScience: 'Learning Science', culture: 'Culture', guides: 'Guides' },
    card: { featured: 'Featured', read: 'Read' },
    pagination: { ariaLabel: 'Blog pagination', previous: 'Previous', next: 'Next' },
    callout: { info: 'Did You Know?', tip: 'Pro Tip', warning: 'Important', science: 'The Science', check: 'Key Finding', videoUnavailable: 'Video unavailable' },
    share: { shareOnTwitter: 'Share on Twitter', shareOnFacebook: 'Share on Facebook', shareOnLinkedIn: 'Share on LinkedIn', copyLink: 'Copy Link', copied: 'Copied!' },
  },
  es: {
    hero: { badge: 'El Diario de LumenLingo', heading: 'Consejos, Guías e Ideas', description: 'Explora la ciencia del aprendizaje de idiomas, consejos prácticos de estudio y lo último del equipo LumenLingo. Escrito para quienes quieren profundizar.' },
    categories: { all: 'Todos', languageTips: 'Consejos de Idiomas', appUpdates: 'Novedades', learningScience: 'Ciencia del Aprendizaje', culture: 'Cultura', guides: 'Guías' },
    card: { featured: 'Destacado', read: 'Leer' },
    pagination: { ariaLabel: 'Paginación del blog', previous: 'Anterior', next: 'Siguiente' },
    callout: { info: '¿Sabías que?', tip: 'Consejo Pro', warning: 'Importante', science: 'La Ciencia', check: 'Hallazgo Clave', videoUnavailable: 'Vídeo no disponible' },
    share: { shareOnTwitter: 'Compartir en Twitter', shareOnFacebook: 'Compartir en Facebook', shareOnLinkedIn: 'Compartir en LinkedIn', copyLink: 'Copiar enlace', copied: '¡Copiado!' },
  },
  fr: {
    hero: { badge: 'Le Journal LumenLingo', heading: 'Conseils, Guides et Perspectives', description: "Explorez la science de l'apprentissage des langues, des conseils pratiques et les dernières nouvelles de l'équipe LumenLingo." },
    categories: { all: 'Tous', languageTips: 'Astuces Langues', appUpdates: "Mises à Jour", learningScience: "Science de l'Apprentissage", culture: 'Culture', guides: 'Guides' },
    card: { featured: 'À la Une', read: 'Lire' },
    pagination: { ariaLabel: 'Pagination du blog', previous: 'Précédent', next: 'Suivant' },
    callout: { info: 'Le Saviez-Vous ?', tip: 'Astuce Pro', warning: 'Important', science: 'La Science', check: 'Découverte Clé', videoUnavailable: 'Vidéo indisponible' },
    share: { shareOnTwitter: 'Partager sur Twitter', shareOnFacebook: 'Partager sur Facebook', shareOnLinkedIn: 'Partager sur LinkedIn', copyLink: 'Copier le lien', copied: 'Copié !' },
  },
  ja: {
    hero: { badge: 'LumenLingoジャーナル', heading: 'ヒント、ガイド、インサイト', description: '言語学習の科学、実践的な学習のヒント、LumenLingoチームの最新情報をお届けします。' },
    categories: { all: 'すべて', languageTips: '言語のヒント', appUpdates: 'アプリ更新', learningScience: '学習科学', culture: '文化', guides: 'ガイド' },
    card: { featured: '注目', read: '読む' },
    pagination: { ariaLabel: 'ブログのページネーション', previous: '前へ', next: '次へ' },
    callout: { info: 'ご存知ですか？', tip: 'プロのヒント', warning: '重要', science: '科学', check: '重要な発見', videoUnavailable: '動画を再生できません' },
    share: { shareOnTwitter: 'Twitterで共有', shareOnFacebook: 'Facebookで共有', shareOnLinkedIn: 'LinkedInで共有', copyLink: 'リンクをコピー', copied: 'コピーしました！' },
  },
  de: {
    hero: { badge: 'Das LumenLingo Journal', heading: 'Tipps, Guides & Einblicke', description: 'Entdecken Sie die Wissenschaft des Sprachenlernens, praktische Lerntipps und Neuigkeiten vom LumenLingo-Team.' },
    categories: { all: 'Alle', languageTips: 'Sprachtipps', appUpdates: 'App-Updates', learningScience: 'Lernwissenschaft', culture: 'Kultur', guides: 'Guides' },
    card: { featured: 'Empfohlen', read: 'Lesen' },
    pagination: { ariaLabel: 'Blog-Seitennavigation', previous: 'Zurück', next: 'Weiter' },
    callout: { info: 'Wussten Sie?', tip: 'Profi-Tipp', warning: 'Wichtig', science: 'Die Wissenschaft', check: 'Kernaussage', videoUnavailable: 'Video nicht verfügbar' },
    share: { shareOnTwitter: 'Auf Twitter teilen', shareOnFacebook: 'Auf Facebook teilen', shareOnLinkedIn: 'Auf LinkedIn teilen', copyLink: 'Link kopieren', copied: 'Kopiert!' },
  },
  pl: {
    hero: { badge: 'Dziennik LumenLingo', heading: 'Porady, Przewodniki i Spostrzeżenia', description: 'Odkryj naukę o nauce języków, praktyczne wskazówki i najnowsze wiadomości od zespołu LumenLingo.' },
    categories: { all: 'Wszystkie', languageTips: 'Porady Językowe', appUpdates: 'Aktualizacje', learningScience: 'Nauka o Uczeniu', culture: 'Kultura', guides: 'Przewodniki' },
    card: { featured: 'Wyróżnione', read: 'Czytaj' },
    pagination: { ariaLabel: 'Paginacja bloga', previous: 'Poprzednia', next: 'Następna' },
    callout: { info: 'Czy wiesz?', tip: 'Porada Pro', warning: 'Ważne', science: 'Nauka', check: 'Kluczowe Odkrycie', videoUnavailable: 'Wideo niedostępne' },
    share: { shareOnTwitter: 'Udostępnij na Twitterze', shareOnFacebook: 'Udostępnij na Facebooku', shareOnLinkedIn: 'Udostępnij na LinkedIn', copyLink: 'Kopiuj link', copied: 'Skopiowano!' },
  },
  ar: {
    hero: { badge: 'مجلة LumenLingo', heading: 'نصائح وأدلة ورؤى', description: 'استكشف علم تعلم اللغات، ونصائح الدراسة العملية، وآخر أخبار فريق LumenLingo.' },
    categories: { all: 'الكل', languageTips: 'نصائح لغوية', appUpdates: 'تحديثات التطبيق', learningScience: 'علم التعلم', culture: 'ثقافة', guides: 'أدلة' },
    card: { featured: 'مميز', read: 'اقرأ' },
    pagination: { ariaLabel: 'تصفح المدونة', previous: 'السابق', next: 'التالي' },
    callout: { info: 'هل تعلم؟', tip: 'نصيحة احترافية', warning: 'مهم', science: 'العلم', check: 'اكتشاف رئيسي', videoUnavailable: 'الفيديو غير متاح' },
    share: { shareOnTwitter: 'مشاركة على تويتر', shareOnFacebook: 'مشاركة على فيسبوك', shareOnLinkedIn: 'مشاركة على لينكد إن', copyLink: 'نسخ الرابط', copied: 'تم النسخ!' },
  },
  zh: {
    hero: { badge: 'LumenLingo 日志', heading: '技巧、指南与洞察', description: '探索语言学习的科学、实用学习技巧以及 LumenLingo 团队的最新动态。' },
    categories: { all: '全部', languageTips: '语言技巧', appUpdates: '应用更新', learningScience: '学习科学', culture: '文化', guides: '指南' },
    card: { featured: '精选', read: '阅读' },
    pagination: { ariaLabel: '博客分页', previous: '上一页', next: '下一页' },
    callout: { info: '你知道吗？', tip: '专业提示', warning: '重要', science: '科学', check: '关键发现', videoUnavailable: '视频不可用' },
    share: { shareOnTwitter: '分享到 Twitter', shareOnFacebook: '分享到 Facebook', shareOnLinkedIn: '分享到 LinkedIn', copyLink: '复制链接', copied: '已复制！' },
  },
  uk: {
    hero: { badge: 'Журнал LumenLingo', heading: 'Поради, Гайди та Інсайти', description: 'Досліджуйте науку вивчення мов, практичні поради та новини від команди LumenLingo.' },
    categories: { all: 'Усі', languageTips: 'Мовні Поради', appUpdates: 'Оновлення', learningScience: 'Наука Навчання', culture: 'Культура', guides: 'Гайди' },
    card: { featured: 'Обране', read: 'Читати' },
    pagination: { ariaLabel: 'Пагінація блогу', previous: 'Попередня', next: 'Наступна' },
    callout: { info: 'Чи знаєте ви?', tip: 'Порада Про', warning: 'Важливо', science: 'Наука', check: 'Ключове Відкриття', videoUnavailable: 'Відео недоступне' },
    share: { shareOnTwitter: 'Поділитися в Twitter', shareOnFacebook: 'Поділитися в Facebook', shareOnLinkedIn: 'Поділитися в LinkedIn', copyLink: 'Копіювати посилання', copied: 'Скопійовано!' },
  },
};

for (const [locale, keys] of Object.entries(newKeys)) {
  const fp = path.join('messages', locale + '.json');
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
  Object.assign(data.Blog, keys);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n');
  console.log('Updated Blog in', locale + '.json');
}
