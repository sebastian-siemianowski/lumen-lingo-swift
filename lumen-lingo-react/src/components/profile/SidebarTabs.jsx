import React from "react";
import { motion } from "framer-motion";

export default function SidebarTabs({ tabs, activeTab, onSelect, darkMode, badges }) {
  return (
    <div
      className="rounded-2xl border p-2 sm:p-3"
      style={{
        borderColor: darkMode ? 'rgba(120,90,180,0.35)' : 'rgba(255,255,255,0.25)',
        background: darkMode ? 'rgba(20,14,38,0.55)' : 'rgba(255,255,255,0.18)'
      }}
      role="navigation"
      aria-label="Profile settings navigation"
    >
      <div role="tablist" aria-orientation="vertical" className="flex flex-col gap-1">
        {tabs.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${t.id}-panel`}
              onClick={() => onSelect(t.id)}
              className="relative w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              style={{
                color: isActive ? (darkMode ? '#F5F3FF' : 'white') : (darkMode ? 'rgba(216,180,254,0.75)' : 'rgba(255,255,255,0.9)'),
                background: isActive ? (darkMode ? 'rgba(120,90,180,0.25)' : 'rgba(255,255,255,0.2)') : 'transparent',
                border: '1px solid ' + (isActive ? (darkMode ? 'rgba(120,90,180,0.35)' : 'rgba(255,255,255,0.35)') : 'transparent')
              }}
            >
              <t.Icon className="w-4 h-4" />
              <span className="truncate">{t.label}</span>
              {badges?.[t.id]?.text && (
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    background: darkMode ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.25)',
                    border: '1px solid ' + (darkMode ? 'rgba(139,92,246,0.35)' : 'rgba(255,255,255,0.45)')
                  }}
                >
                  {badges[t.id].text}
                </span>
              )}
              {badges?.[t.id]?.dot && !badges?.[t.id]?.text && (
                <span className="ml-auto w-2 h-2 rounded-full" style={{ background: '#F59E0B', boxShadow: '0 0 8px rgba(245, 158, 11, 0.6)' }} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}