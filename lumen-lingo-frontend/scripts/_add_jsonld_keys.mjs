import fs from 'fs';
import path from 'path';

const newKeys = {
  en: { jsonLdDescription: 'Premium language learning app with immersive flashcards, adaptive practice, ambient soundscapes, and more. 9 languages, 25+ language pairs.' },
  es: { jsonLdDescription: 'Aplicación premium de aprendizaje de idiomas con tarjetas inmersivas, práctica adaptativa, paisajes sonoros ambientales y más. 9 idiomas, más de 25 combinaciones.' },
  fr: { jsonLdDescription: "Application premium d'apprentissage des langues avec flashcards immersives, pratique adaptative, ambiances sonores et plus encore. 9 langues, 25+ combinaisons." },
  ja: { jsonLdDescription: '没入型フラッシュカード、適応型練習、アンビエントサウンドスケープなどを備えたプレミアム語学学習アプリ。9言語、25以上の言語ペア。' },
  de: { jsonLdDescription: 'Premium-Sprachlern-App mit immersiven Lernkarten, adaptivem Training, Klangwelten und mehr. 9 Sprachen, über 25 Sprachpaare.' },
  pl: { jsonLdDescription: 'Aplikacja premium do nauki języków z immersyjnymi fiszkami, adaptacyjnymi ćwiczeniami, pejzażami dźwiękowymi i więcej. 9 języków, ponad 25 par językowych.' },
  ar: { jsonLdDescription: 'تطبيق تعلم لغات متميز مع بطاقات تعليمية غامرة، وتدريب تكيفي، ومقاطع صوتية محيطية، والمزيد. 9 لغات، أكثر من 25 زوج لغوي.' },
  zh: { jsonLdDescription: '高级语言学习应用，提供沉浸式闪卡、自适应练习、环境音景等功能。9种语言，25+语言组合。' },
  uk: { jsonLdDescription: 'Преміум-застосунок для вивчення мов з іммерсивними картками, адаптивними вправами, звуковими ландшафтами та іншим. 9 мов, 25+ мовних пар.' },
};

for (const [locale, keys] of Object.entries(newKeys)) {
  const fp = path.join('messages', locale + '.json');
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
  Object.assign(data.Metadata, keys);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n');
  console.log('Updated Metadata in', locale + '.json');
}
