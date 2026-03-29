// Epic 9 — Add Differentiators.comparison keys to all 9 locale files
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MESSAGES_DIR = join(__dirname, '..', 'lumen-lingo-frontend', 'messages');

const comparisonKeys = {
  en: {
    othersHeader: 'Others',
    lumenHeader: 'LumenLingo',
    others1: 'Rote repetition with plain text cards',
    lumen1: 'Glass-morphic flashcards with immersive visual feedback',
    others2: 'Silent study in a sterile interface',
    lumen2: '12 ambient soundscapes — from Paris cafés to deep space',
    others3: 'One-size-fits-all quizzes',
    lumen3: 'Three distinct modes that adapt to your level',
    others4: 'Utilitarian UI with gamification gimmicks',
    lumen4: 'Handcrafted glass-morphism with cosmic animations',
    others5: 'Streak pressure and guilt-driven notifications',
    lumen5: 'Breathing orbs and visual mindfulness for calm learning',
  },
  es: {
    othersHeader: 'Otros',
    lumenHeader: 'LumenLingo',
    others1: 'Repetición mecánica con tarjetas de texto plano',
    lumen1: 'Tarjetas con efecto cristal y retroalimentación visual inmersiva',
    others2: 'Estudio silencioso en una interfaz estéril',
    lumen2: '12 paisajes sonoros — desde cafés parisinos hasta el espacio profundo',
    others3: 'Cuestionarios genéricos para todos',
    lumen3: 'Tres modos distintos que se adaptan a tu nivel',
    others4: 'UI utilitaria con trucos de gamificación',
    lumen4: 'Glassmorfismo artesanal con animaciones cósmicas',
    others5: 'Presión de rachas y notificaciones basadas en culpa',
    lumen5: 'Orbes de respiración y mindfulness visual para aprender en calma',
  },
  fr: {
    othersHeader: 'Les autres',
    lumenHeader: 'LumenLingo',
    others1: 'Répétition par cœur avec des cartes en texte brut',
    lumen1: 'Flashcards en verre avec retour visuel immersif',
    others2: 'Étude silencieuse dans une interface austère',
    lumen2: '12 ambiances sonores — des cafés parisiens à l\'espace profond',
    others3: 'Quiz identiques pour tous',
    lumen3: 'Trois modes distincts qui s\'adaptent à votre niveau',
    others4: 'UI utilitaire avec gadgets de gamification',
    lumen4: 'Glass-morphisme artisanal avec animations cosmiques',
    others5: 'Pression des séries et notifications culpabilisantes',
    lumen5: 'Orbes de respiration et pleine conscience visuelle pour un apprentissage serein',
  },
  ja: {
    othersHeader: '他のアプリ',
    lumenHeader: 'LumenLingo',
    others1: 'プレーンテキストカードでの機械的な反復',
    lumen1: '没入感のあるビジュアルフィードバック付きグラスモーフィックフラッシュカード',
    others2: '無機質なインターフェースでの静かな学習',
    lumen2: 'パリのカフェから深宇宙まで — 12のアンビエントサウンドスケープ',
    others3: '画一的なクイズ',
    lumen3: 'レベルに合わせて適応する3つの異なるモード',
    others4: 'ゲーミフィケーションの仕掛けを使った実用主義的UI',
    lumen4: 'コズミックアニメーション付きの手作りグラスモーフィズム',
    others5: '連続記録のプレッシャーと罪悪感を煽る通知',
    lumen5: 'ブリージングオーブと穏やかな学習のためのビジュアルマインドフルネス',
  },
  de: {
    othersHeader: 'Andere',
    lumenHeader: 'LumenLingo',
    others1: 'Stumpfes Wiederholen mit Klartext-Karten',
    lumen1: 'Glasmorphe Karteikarten mit immersivem visuellem Feedback',
    others2: 'Stilles Lernen in einer sterilen Oberfläche',
    lumen2: '12 Ambient-Klangwelten — von Pariser Cafés bis in den Weltraum',
    others3: 'Einheitsquiz für alle',
    lumen3: 'Drei verschiedene Modi, die sich an Ihr Niveau anpassen',
    others4: 'Zweckmäßige UI mit Gamification-Spielereien',
    lumen4: 'Handgefertigter Glasmorphismus mit kosmischen Animationen',
    others5: 'Streak-Druck und schuldgetriebene Benachrichtigungen',
    lumen5: 'Atemkugeln und visuelles Achtsamkeit für ruhiges Lernen',
  },
  pl: {
    othersHeader: 'Inne aplikacje',
    lumenHeader: 'LumenLingo',
    others1: 'Mechaniczne powtarzanie z kartami tekstowymi',
    lumen1: 'Szklane fiszki z immersyjną informacją zwrotną',
    others2: 'Cicha nauka w sterylnym interfejsie',
    lumen2: '12 krajobrazów dźwiękowych — od paryskich kawiarni po głęboki kosmos',
    others3: 'Uniwersalne quizy dla wszystkich',
    lumen3: 'Trzy tryby dopasowujące się do Twojego poziomu',
    others4: 'Utylitarny UI ze sztuczkami gamifikacji',
    lumen4: 'Ręcznie wykonany glassmorfizm z kosmicznymi animacjami',
    others5: 'Presja passów i powiadomienia oparte na poczuciu winy',
    lumen5: 'Kule oddechowe i wizualny mindfulness dla spokojnej nauki',
  },
  ar: {
    othersHeader: 'التطبيقات الأخرى',
    lumenHeader: 'LumenLingo',
    others1: 'تكرار آلي ببطاقات نصية بسيطة',
    lumen1: 'بطاقات بتأثير زجاجي مع تغذية بصرية غامرة',
    others2: 'دراسة صامتة في واجهة جافة',
    lumen2: '12 مشهداً صوتياً — من مقاهي باريس إلى الفضاء العميق',
    others3: 'اختبارات موحدة للجميع',
    lumen3: 'ثلاثة أوضاع مميزة تتكيف مع مستواك',
    others4: 'واجهة نفعية بحيل التلعيب',
    lumen4: 'تصميم زجاجي يدوي مع رسوم كونية متحركة',
    others5: 'ضغط السلاسل وإشعارات مبنية على الشعور بالذنب',
    lumen5: 'كرات التنفس واليقظة البصرية للتعلم الهادئ',
  },
  zh: {
    othersHeader: '其他应用',
    lumenHeader: 'LumenLingo',
    others1: '纯文本卡片的机械重复',
    lumen1: '玻璃拟态闪卡，配以沉浸式视觉反馈',
    others2: '在单调界面中安静学习',
    lumen2: '12种环境音景——从巴黎咖啡馆到深空',
    others3: '千篇一律的测验',
    lumen3: '三种不同模式，适应你的水平',
    others4: '功能化界面配以游戏化噱头',
    lumen4: '手工打造的玻璃拟态，配以宇宙动画',
    others5: '连续打卡压力和让人内疚的通知',
    lumen5: '呼吸球和视觉正念，带来平静的学习体验',
  },
  uk: {
    othersHeader: 'Інші додатки',
    lumenHeader: 'LumenLingo',
    others1: 'Механічне повторення з простими текстовими картками',
    lumen1: 'Скляні флешкартки з імерсивним візуальним зворотним зв\'язком',
    others2: 'Тиха навчання у стерильному інтерфейсі',
    lumen2: '12 звукових ландшафтів — від паризьких кав\'ярень до глибокого космосу',
    others3: 'Однакові вікторини для всіх',
    lumen3: 'Три різні режими, що адаптуються до вашого рівня',
    others4: 'Утилітарний UI з трюками гейміфікації',
    lumen4: 'Ручний скломорфізм з космічними анімаціями',
    others5: 'Тиск серій та сповіщення, засновані на почутті провини',
    lumen5: 'Дихальні сфери та візуальна уважність для спокійного навчання',
  },
};

const locales = Object.keys(comparisonKeys);

for (const locale of locales) {
  const filePath = join(MESSAGES_DIR, `${locale}.json`);
  const json = JSON.parse(readFileSync(filePath, 'utf-8'));

  if (!json.Differentiators) json.Differentiators = {};
  if (!json.Differentiators.comparison) json.Differentiators.comparison = {};

  Object.assign(json.Differentiators.comparison, comparisonKeys[locale]);

  writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
  console.log(`✅ ${locale}.json — Differentiators.comparison keys added`);
}
