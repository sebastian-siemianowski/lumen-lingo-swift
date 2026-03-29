// Epic 6 — Add missing About.timeline date keys to all 9 locale files
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MESSAGES_DIR = join(__dirname, '..', 'lumen-lingo-frontend', 'messages');

const dateKeys = {
  en: { sparkDate: 'Late 2025', betaDate: 'Early 2026', launchDate: 'March 2026', growingDate: 'The Road Ahead' },
  es: { sparkDate: 'Finales de 2025', betaDate: 'Principios de 2026', launchDate: 'Marzo 2026', growingDate: 'El Camino por Delante' },
  fr: { sparkDate: 'Fin 2025', betaDate: 'Début 2026', launchDate: 'Mars 2026', growingDate: 'La Suite' },
  ja: { sparkDate: '2025年後半', betaDate: '2026年初頭', launchDate: '2026年3月', growingDate: 'これからの道' },
  de: { sparkDate: 'Ende 2025', betaDate: 'Anfang 2026', launchDate: 'März 2026', growingDate: 'Der Weg nach vorn' },
  pl: { sparkDate: 'Koniec 2025', betaDate: 'Początek 2026', launchDate: 'Marzec 2026', growingDate: 'Droga naprzód' },
  ar: { sparkDate: 'أواخر 2025', betaDate: 'أوائل 2026', launchDate: 'مارس 2026', growingDate: 'الطريق أمامنا' },
  zh: { sparkDate: '2025年末', betaDate: '2026年初', launchDate: '2026年3月', growingDate: '未来之路' },
  uk: { sparkDate: 'Кінець 2025', betaDate: 'Початок 2026', launchDate: 'Березень 2026', growingDate: 'Шлях попереду' },
};

const locales = Object.keys(dateKeys);

for (const locale of locales) {
  const filePath = join(MESSAGES_DIR, `${locale}.json`);
  const json = JSON.parse(readFileSync(filePath, 'utf-8'));

  if (!json.About) {
    console.error(`⚠ ${locale}.json missing About namespace`);
    continue;
  }
  if (!json.About.timeline) {
    console.error(`⚠ ${locale}.json missing About.timeline`);
    continue;
  }

  Object.assign(json.About.timeline, dateKeys[locale]);
  writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
  console.log(`✅ ${locale}.json — About.timeline date keys added`);
}
