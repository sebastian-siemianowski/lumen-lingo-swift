import React from "react";
import { motion } from "framer-motion";

export default function MobilePillTabs({ tabs, activeTab, onSelect, darkMode, badges }) {
  const scrollRef = React.useRef(null);
  const tabRefs = React.useRef([]);
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

  const updateShadows = React.useCallback(() => {
    const c = scrollRef.current;
    if (!c) return;
    setScrollShadows({ left: c.scrollLeft > 0, right: c.scrollLeft + c.clientWidth < c.scrollWidth - 1 });
  }, []);

  React.useEffect(() => {
    updateIndicator();
    const onResize = () => updateIndicator();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateIndicator]);

  React.useEffect(() => { updateShadows(); }, [tabs, updateShadows]);

  return (
    <div className="sticky top-2 z-30">
      <style>{` .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none;} .no-scrollbar::-webkit-scrollbar{ display: none; } `}</style>
      <div className="relative">
        {scrollShadows.left && (
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/10 to-transparent dark:from-white/10 rounded-l-xl" />
        )}
        <div
          ref={scrollRef}
          className="relative w-full rounded-full overflow-hidden border overflow-x-auto no-scrollbar"
          onScroll={() => { updateShadows(); updateIndicator(); }}
          style={{
            borderColor: darkMode ? 'rgba(120, 90, 180, 0.3)' : 'rgba(255,255,255,0.35)',
            background: darkMode ? 'rgba(20,14,38,0.6)' : 'rgba(255,255,255,0.3)'
          }}
        >
          <div className="flex w-full px-1 py-1 gap-1">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={el => tabRefs.current[idx] = el}
                onClick={() => onSelect(tab.id)}
                aria-label={tab.label}
                className="flex-1 h-9 rounded-full flex items-center justify-center focus:outline-none transition-colors duration-200"
                style={{
                  color: isActive ? (darkMode ? '#F5F3FF' : '#4C1D95') : (darkMode ? 'rgba(216,180,254,0.85)' : 'rgba(17,24,39,0.85)'),
                  background: isActive
                    ? (darkMode
                        ? 'linear-gradient(180deg, rgba(139,92,246,0.35), rgba(139,92,246,0.2))'
                        : 'linear-gradient(180deg, rgba(139,92,246,0.22), rgba(139,92,246,0.12))')
                    : 'transparent',
                  border: '1px solid ' + (isActive ? (darkMode ? 'rgba(139,92,246,0.45)' : 'rgba(139,92,246,0.35)') : 'transparent'),
                  boxShadow: isActive
                    ? (darkMode
                        ? '0 2px 10px rgba(139,92,246,0.25)'
                        : '0 2px 8px rgba(139,92,246,0.18)')
                    : 'none'
                }}
              >
                <tab.Icon className="w-4 h-4" aria-hidden="true" />
              </button>
            );
          })}
          </div>
          <motion.div
            layout
            className="absolute bottom-0 h-0.5 bg-violet-400/80"
            style={{ left: indicator.left, width: indicator.width }}
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          />
        </div>
      </div>
    </div>
  );
}