import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2, Sparkles, LogOut, Palette, Cloud } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import { hasPendingSync } from "../utils/offlineSync";

import SoundSettings from "./SoundSettings";
import BetaLanguagesSection from "./BetaLanguagesSection";
import SignOutSection from "./SignOutSection";
import ThemeSettings from "./ThemeSettings";
import SyncStatus from "./SyncStatus";
import SidebarTabs from "./SidebarTabs";
import MobilePillTabs from "./MobilePillTabs";

export default function AccountSettingsTabs({ onReloadProfile }) {
  const { darkMode } = useDarkMode();
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  // Desktop detection (sm breakpoint)
  const [isDesktop, setIsDesktop] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  React.useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const [activeTab, setActiveTab] = React.useState(() => {
    try {
      const saved = localStorage.getItem('profile_active_tab');
      return ['appearance','sound','beta','sync','signout'].includes(saved) ? saved : 'appearance';
    } catch { return 'appearance'; }
  });
  React.useEffect(() => {
    try { localStorage.setItem('profile_active_tab', activeTab); } catch {}
  }, [activeTab]);

  const pendingChanges = hasPendingSync();
  const badges = React.useMemo(() => ({
    beta: { text: 'Beta' },
    sync: pendingChanges ? { dot: true } : undefined,
  }), [pendingChanges]);


  const prevTabRef = React.useRef('appearance');
  const [swipeDir, setSwipeDir] = React.useState(1); // 1 -> forward, -1 -> backward

  const tabs = React.useMemo(() => ([
    { id: 'appearance', label: t('appearance'), Icon: Palette, title: t('appearance_title') },
    { id: 'sound', label: t('sound'), Icon: Volume2, title: t('sound_title') },
    { id: 'beta', label: t('beta'), Icon: Sparkles, title: t('beta_title') },
    { id: 'sync', label: t('sync'), Icon: Cloud, title: t('sync_title') },
    { id: 'signout', label: t('signout'), Icon: LogOut, title: t('signout_title') },
  ]), [t]);

  const currentTab = React.useMemo(() => tabs.find(t => t.id === activeTab) || tabs[0], [tabs, activeTab]);

  const tabRefs = React.useRef([]);
  const scrollRef = React.useRef(null);
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0 });
  const [scrollShadows, setScrollShadows] = React.useState({ left: false, right: false });

  const updateIndicator = React.useCallback(() => {
    const idx = tabs.findIndex(t => t.id === activeTab);
    const el = tabRefs.current[idx];
    const container = scrollRef.current;
    if (!el || !container) return;
    const rect = el.getBoundingClientRect();
    const crect = container.getBoundingClientRect();
    setIndicator({ left: rect.left - crect.left + container.scrollLeft, width: rect.width });
  }, [activeTab, tabs]);

  React.useEffect(() => {
    updateIndicator();
    const onResize = () => updateIndicator();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateIndicator]);

  const updateShadows = React.useCallback(() => {
    const c = scrollRef.current;
    if (!c) return;
    setScrollShadows({
      left: c.scrollLeft > 0,
      right: c.scrollLeft + c.clientWidth < c.scrollWidth - 1
    });
  }, []);
  React.useEffect(() => { updateShadows(); }, [tabs, isDesktop, updateShadows]);

  const handleKeyDown = (e, idx) => {
    if (!isDesktop) return;
    let nextIdx = idx;
    if (e.key === 'ArrowRight') nextIdx = (idx + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') nextIdx = 0;
    else if (e.key === 'End') nextIdx = tabs.length - 1;
    else return;
    e.preventDefault();
    const nextId = tabs[nextIdx].id;
    setActiveTab(nextId);
    tabRefs.current[nextIdx]?.focus();
  };

  const order = React.useMemo(() => ['appearance', 'sound', 'beta', 'sync', 'signout'], []);

  const handleSelect = (next) => {
    const prevIdx = order.indexOf(activeTab);
    const nextIdx = order.indexOf(next);
    setSwipeDir(nextIdx >= prevIdx ? 1 : -1);
    prevTabRef.current = activeTab;
    setActiveTab(next);
  };

  return (
    <div className="mt-4">
      <style>{` .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none;} .no-scrollbar::-webkit-scrollbar{ display: none; } `}</style>
      {!isDesktop && (
        <MobilePillTabs
          tabs={tabs}
          activeTab={activeTab}
          onSelect={handleSelect}
          darkMode={darkMode}
          badges={badges}
        />
      )}

      <div className="mt-4">
        <div
          className="relative rounded-2xl sm:rounded-3xl border overflow-hidden group"
          style={{
            borderColor: darkMode ? 'rgba(120,90,180,0.35)' : 'rgba(255,255,255,0.25)',
            background: darkMode ? 'rgba(14,10,28,0.55)' : 'rgba(255,255,255,0.18)'
          }}
        >


          {/* Desktop panel header */}
          {isDesktop && (
            <div
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b"
              style={{
                borderColor: darkMode ? 'rgba(120,90,180,0.25)' : 'rgba(255,255,255,0.25)',
                background: darkMode ? 'linear-gradient(180deg, rgba(139,92,246,0.10), rgba(20,14,38,0.35))' : 'linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.12))'
              }}
            >
              {currentTab?.Icon && <currentTab.Icon className="w-4 h-4" style={{ color: darkMode ? '#E9D5FF' : 'white' }} />}
              <div className="flex items-baseline gap-2 min-w-0">
                <span className="text-sm sm:text-base font-semibold truncate" style={{ color: darkMode ? '#F5F3FF' : 'white' }}>{t(currentTab?.label)}</span>
                <span className="hidden sm:inline text-xs opacity-70 truncate" style={{ color: darkMode ? '#D8B4FE' : 'white' }}>{t(currentTab?.title)}</span>
              </div>
            </div>
          )}

          {/* Panel body with internal scroll on desktop */}
          <div
            className={isDesktop ? 'px-4 py-4 sm:px-6 sm:py-6' : ''}
            style={{}}
          >
            <div className={isDesktop ? 'grid grid-cols-[220px_1fr] gap-4' : ''}>
              {isDesktop && (
                <SidebarTabs
                  tabs={tabs}
                  activeTab={activeTab}
                  onSelect={handleSelect}
                  darkMode={darkMode}
                  badges={badges}
                />
              )}
              <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                id={`${activeTab}-panel`}
                role="tabpanel"
                aria-labelledby={`${activeTab}-tab`}
                initial={{ opacity: 0, filter: 'blur(10px)', x: swipeDir > 0 ? 20 : -20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                exit={{ opacity: 0, filter: 'blur(8px)', x: swipeDir > 0 ? -15 : 15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'opacity, filter, transform', position: 'relative', overflow: 'hidden' }}
              >


                {activeTab === 'appearance' && (
                  <ThemeSettings />
                )}
                {activeTab === 'sound' && (
                  <SoundSettings />
                )}
                {activeTab === 'beta' && (
                  <BetaLanguagesSection />
                )}
                {activeTab === 'sync' && (
                  <SyncStatus onReloadProfile={onReloadProfile} />
                )}
                {activeTab === 'signout' && (
                  <SignOutSection />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}