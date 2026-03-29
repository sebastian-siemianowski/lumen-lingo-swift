import fs from 'fs';
import path from 'path';

const newKeys = {
  en: { launchingSoon: 'Launching Soon', freeToStart: 'Free to start. No credit card required.', starRating: '5 star rating', appStoreRating: '4.9 on the App Store', madeByLovers: 'Built by language lovers, for language lovers' },
  es: { launchingSoon: 'Próximamente', freeToStart: 'Gratis para empezar. Sin tarjeta de crédito.', starRating: 'Calificación de 5 estrellas', appStoreRating: '4.9 en la App Store', madeByLovers: 'Hecho por amantes de los idiomas, para amantes de los idiomas' },
  fr: { launchingSoon: 'Bientôt disponible', freeToStart: 'Gratuit pour commencer. Aucune carte bancaire requise.', starRating: 'Note de 5 étoiles', appStoreRating: "4.9 sur l'App Store", madeByLovers: 'Créé par des passionnés de langues, pour des passionnés' },
  ja: { launchingSoon: 'まもなく登場', freeToStart: '無料で始められます。クレジットカード不要。', starRating: '5つ星の評価', appStoreRating: 'App Storeで4.9', madeByLovers: '語学好きが語学好きのために作りました' },
  de: { launchingSoon: 'Demnächst verfügbar', freeToStart: 'Kostenlos starten. Keine Kreditkarte erforderlich.', starRating: '5-Sterne-Bewertung', appStoreRating: '4,9 im App Store', madeByLovers: 'Von Sprachbegeisterten für Sprachbegeisterte' },
  pl: { launchingSoon: 'Już wkrótce', freeToStart: 'Zacznij za darmo. Bez karty kredytowej.', starRating: 'Ocena 5 gwiazdek', appStoreRating: '4,9 w App Store', madeByLovers: 'Stworzone przez miłośników języków, dla miłośników języków' },
  ar: { launchingSoon: 'قريبًا', freeToStart: 'ابدأ مجانًا. لا حاجة لبطاقة ائتمان.', starRating: 'تقييم 5 نجوم', appStoreRating: '4.9 على App Store', madeByLovers: 'صُنع بواسطة عشاق اللغات، لعشاق اللغات' },
  zh: { launchingSoon: '即将推出', freeToStart: '免费开始，无需信用卡。', starRating: '5星好评', appStoreRating: 'App Store 4.9分', madeByLovers: '由语言爱好者打造，为语言爱好者服务' },
  uk: { launchingSoon: 'Незабаром', freeToStart: 'Починайте безкоштовно. Без кредитної картки.', starRating: 'Оцінка 5 зірок', appStoreRating: '4,9 в App Store', madeByLovers: 'Створено любителями мов для любителів мов' },
};

for (const [locale, keys] of Object.entries(newKeys)) {
  const fp = path.join('messages', locale + '.json');
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
  Object.assign(data.CTA, keys);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n');
  console.log('Updated CTA in', locale + '.json');
}
