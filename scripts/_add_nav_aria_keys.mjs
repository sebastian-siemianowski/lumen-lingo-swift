// Epic 10 — Add Nav.mainNav and Nav.homeLink keys to all 9 locale files
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MESSAGES_DIR = join(__dirname, '..', 'lumen-lingo-frontend', 'messages');

const navKeys = {
  en: { mainNav: 'Main navigation', homeLink: 'LumenLingo home' },
  es: { mainNav: 'Navegación principal', homeLink: 'Inicio de LumenLingo' },
  fr: { mainNav: 'Navigation principale', homeLink: 'Accueil LumenLingo' },
  ja: { mainNav: 'メインナビゲーション', homeLink: 'LumenLingoホーム' },
  de: { mainNav: 'Hauptnavigation', homeLink: 'LumenLingo Startseite' },
  pl: { mainNav: 'Nawigacja główna', homeLink: 'Strona główna LumenLingo' },
  ar: { mainNav: 'التنقل الرئيسي', homeLink: 'الصفحة الرئيسية LumenLingo' },
  zh: { mainNav: '主导航', homeLink: 'LumenLingo 首页' },
  uk: { mainNav: 'Головна навігація', homeLink: 'Головна LumenLingo' },
};

for (const [locale, keys] of Object.entries(navKeys)) {
  const filePath = join(MESSAGES_DIR, `${locale}.json`);
  const json = JSON.parse(readFileSync(filePath, 'utf-8'));
  if (!json.Nav) json.Nav = {};
  Object.assign(json.Nav, keys);
  writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
  console.log(`✅ ${locale}.json — Nav aria keys added`);
}
