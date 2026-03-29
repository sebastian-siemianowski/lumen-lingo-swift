import fs from 'fs';
import path from 'path';

const newKeys = {
  en: { 'appStoreBadge': { comingSoonTo: 'Coming Soon to the', appStore: 'App Store', launchingSoonOn: 'Launching Soon on the', ariaComingSoon: 'Coming soon to the App Store', ariaLaunchingSoon: 'Launching Soon on the App Store' } },
  es: { 'appStoreBadge': { comingSoonTo: 'Próximamente en la', appStore: 'App Store', launchingSoonOn: 'Próximamente en la', ariaComingSoon: 'Próximamente en la App Store', ariaLaunchingSoon: 'Próximamente en la App Store' } },
  fr: { 'appStoreBadge': { comingSoonTo: "Bientôt sur l'", appStore: 'App Store', launchingSoonOn: "Bientôt disponible sur l'", ariaComingSoon: "Bientôt disponible sur l'App Store", ariaLaunchingSoon: "Bientôt disponible sur l'App Store" } },
  ja: { 'appStoreBadge': { comingSoonTo: 'まもなく', appStore: 'App Store', launchingSoonOn: 'まもなく公開', ariaComingSoon: 'App Storeにまもなく登場', ariaLaunchingSoon: 'App Storeにまもなく登場' } },
  de: { 'appStoreBadge': { comingSoonTo: 'Bald verfügbar im', appStore: 'App Store', launchingSoonOn: 'Demnächst im', ariaComingSoon: 'Bald verfügbar im App Store', ariaLaunchingSoon: 'Demnächst im App Store' } },
  pl: { 'appStoreBadge': { comingSoonTo: 'Wkrótce w', appStore: 'App Store', launchingSoonOn: 'Już wkrótce w', ariaComingSoon: 'Wkrótce w App Store', ariaLaunchingSoon: 'Już wkrótce w App Store' } },
  ar: { 'appStoreBadge': { comingSoonTo: 'قريبًا على', appStore: 'App Store', launchingSoonOn: 'قريبًا على', ariaComingSoon: 'قريبًا على App Store', ariaLaunchingSoon: 'قريبًا على App Store' } },
  zh: { 'appStoreBadge': { comingSoonTo: '即将登陆', appStore: 'App Store', launchingSoonOn: '即将上线', ariaComingSoon: '即将登陆 App Store', ariaLaunchingSoon: '即将上线 App Store' } },
  uk: { 'appStoreBadge': { comingSoonTo: 'Незабаром в', appStore: 'App Store', launchingSoonOn: 'Незабаром в', ariaComingSoon: 'Незабаром в App Store', ariaLaunchingSoon: 'Незабаром в App Store' } },
};

for (const [locale, keys] of Object.entries(newKeys)) {
  const fp = path.join('messages', locale + '.json');
  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
  Object.assign(data.CTA, keys);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n');
  console.log('Updated CTA.appStoreBadge in', locale + '.json');
}
