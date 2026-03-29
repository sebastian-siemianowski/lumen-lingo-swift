// Epic 8 — Add Download.showcase screen content keys to all 9 locale files
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MESSAGES_DIR = join(__dirname, '..', 'lumen-lingo-frontend', 'messages');

const screenKeys = {
  en: {
    flashcardFrom: '🇯🇵 Japanese',
    flashcardTo: '🇬🇧 English',
    flashcardProgress: 'Card {current} of {total}',
    practiceCategory: 'MULTIPLE CHOICE',
    practiceQuestion: 'What does "merci" mean?',
    practiceOpt1: 'Goodbye',
    practiceOpt2: 'Thank you',
    practiceOpt3: 'Hello',
    practiceOpt4: 'Please',
    practiceProgress: '{percent}% complete',
    soundscapeNowPlaying: 'NOW PLAYING',
    soundscapeTrack: '✦ Deep Space Drift',
    soundscapeGenre: 'Atmospheric · Cosmic ambient',
  },
  es: {
    flashcardFrom: '🇯🇵 Japonés',
    flashcardTo: '🇬🇧 Inglés',
    flashcardProgress: 'Tarjeta {current} de {total}',
    practiceCategory: 'OPCIÓN MÚLTIPLE',
    practiceQuestion: '¿Qué significa "merci"?',
    practiceOpt1: 'Adiós',
    practiceOpt2: 'Gracias',
    practiceOpt3: 'Hola',
    practiceOpt4: 'Por favor',
    practiceProgress: '{percent}% completado',
    soundscapeNowPlaying: 'REPRODUCIENDO',
    soundscapeTrack: '✦ Deriva Espacial',
    soundscapeGenre: 'Atmosférico · Ambiente cósmico',
  },
  fr: {
    flashcardFrom: '🇯🇵 Japonais',
    flashcardTo: '🇬🇧 Anglais',
    flashcardProgress: 'Carte {current} sur {total}',
    practiceCategory: 'CHOIX MULTIPLE',
    practiceQuestion: 'Que signifie « merci » ?',
    practiceOpt1: 'Au revoir',
    practiceOpt2: 'Merci',
    practiceOpt3: 'Bonjour',
    practiceOpt4: "S'il vous plaît",
    practiceProgress: '{percent}% terminé',
    soundscapeNowPlaying: 'EN LECTURE',
    soundscapeTrack: '✦ Dérive Spatiale',
    soundscapeGenre: 'Atmosphérique · Ambiance cosmique',
  },
  ja: {
    flashcardFrom: '🇯🇵 日本語',
    flashcardTo: '🇬🇧 英語',
    flashcardProgress: 'カード {current} / {total}',
    practiceCategory: '多肢選択',
    practiceQuestion: '「merci」の意味は？',
    practiceOpt1: 'さようなら',
    practiceOpt2: 'ありがとう',
    practiceOpt3: 'こんにちは',
    practiceOpt4: 'お願いします',
    practiceProgress: '{percent}% 完了',
    soundscapeNowPlaying: '再生中',
    soundscapeTrack: '✦ ディープスペースドリフト',
    soundscapeGenre: 'アトモスフェリック · コズミックアンビエント',
  },
  de: {
    flashcardFrom: '🇯🇵 Japanisch',
    flashcardTo: '🇬🇧 Englisch',
    flashcardProgress: 'Karte {current} von {total}',
    practiceCategory: 'MULTIPLE CHOICE',
    practiceQuestion: 'Was bedeutet „merci"?',
    practiceOpt1: 'Auf Wiedersehen',
    practiceOpt2: 'Danke',
    practiceOpt3: 'Hallo',
    practiceOpt4: 'Bitte',
    practiceProgress: '{percent}% abgeschlossen',
    soundscapeNowPlaying: 'WIRD GESPIELT',
    soundscapeTrack: '✦ Deep Space Drift',
    soundscapeGenre: 'Atmosphärisch · Kosmisches Ambiente',
  },
  pl: {
    flashcardFrom: '🇯🇵 Japoński',
    flashcardTo: '🇬🇧 Angielski',
    flashcardProgress: 'Karta {current} z {total}',
    practiceCategory: 'WIELOKROTNY WYBÓR',
    practiceQuestion: 'Co oznacza „merci"?',
    practiceOpt1: 'Do widzenia',
    practiceOpt2: 'Dziękuję',
    practiceOpt3: 'Cześć',
    practiceOpt4: 'Proszę',
    practiceProgress: '{percent}% ukończono',
    soundscapeNowPlaying: 'ODTWARZANE',
    soundscapeTrack: '✦ Deep Space Drift',
    soundscapeGenre: 'Atmosferyczny · Kosmiczny ambient',
  },
  ar: {
    flashcardFrom: '🇯🇵 يابانية',
    flashcardTo: '🇬🇧 إنجليزية',
    flashcardProgress: 'بطاقة {current} من {total}',
    practiceCategory: 'اختيار من متعدد',
    practiceQuestion: 'ماذا تعني "merci"؟',
    practiceOpt1: 'وداعاً',
    practiceOpt2: 'شكراً',
    practiceOpt3: 'مرحباً',
    practiceOpt4: 'من فضلك',
    practiceProgress: '{percent}% مكتمل',
    soundscapeNowPlaying: 'يتم التشغيل',
    soundscapeTrack: '✦ انجراف الفضاء العميق',
    soundscapeGenre: 'جوي · أجواء كونية',
  },
  zh: {
    flashcardFrom: '🇯🇵 日语',
    flashcardTo: '🇬🇧 英语',
    flashcardProgress: '卡片 {current} / {total}',
    practiceCategory: '多项选择',
    practiceQuestion: '"merci"是什么意思？',
    practiceOpt1: '再见',
    practiceOpt2: '谢谢',
    practiceOpt3: '你好',
    practiceOpt4: '请',
    practiceProgress: '{percent}% 完成',
    soundscapeNowPlaying: '正在播放',
    soundscapeTrack: '✦ 深空漂流',
    soundscapeGenre: '氛围 · 宇宙环境音',
  },
  uk: {
    flashcardFrom: '🇯🇵 Японська',
    flashcardTo: '🇬🇧 Англійська',
    flashcardProgress: 'Картка {current} з {total}',
    practiceCategory: 'МНОЖИННИЙ ВИБІР',
    practiceQuestion: 'Що означає «merci»?',
    practiceOpt1: 'До побачення',
    practiceOpt2: 'Дякую',
    practiceOpt3: 'Привіт',
    practiceOpt4: 'Будь ласка',
    practiceProgress: '{percent}% завершено',
    soundscapeNowPlaying: 'ЗАРАЗ ГРАЄ',
    soundscapeTrack: '✦ Deep Space Drift',
    soundscapeGenre: 'Атмосферний · Космічний ембієнт',
  },
};

const locales = Object.keys(screenKeys);

for (const locale of locales) {
  const filePath = join(MESSAGES_DIR, `${locale}.json`);
  const json = JSON.parse(readFileSync(filePath, 'utf-8'));

  if (!json.Download) json.Download = {};
  if (!json.Download.showcase) json.Download.showcase = {};

  Object.assign(json.Download.showcase, screenKeys[locale]);

  writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
  console.log(`✅ ${locale}.json — Download.showcase screen keys added`);
}
