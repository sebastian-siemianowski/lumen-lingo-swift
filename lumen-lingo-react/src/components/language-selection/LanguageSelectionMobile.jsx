import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";
import LanguageSelectionHeader from "./LanguageSelectionHeader";
import SourceLanguagePanel from "./SourceLanguagePanel";
import TargetLanguagePanel from "./TargetLanguagePanel";
import ActionButton from "./ActionButton";
import SelectionPreview from "./SelectionPreview";

export default function LanguageSelectionMobile({ data }) {
  const { darkMode } = useDarkMode();
  const {
    selectedSource,
    selectedTarget,
    saving,
    error,
    sourceLanguages,
    targetLanguages,
    availableTargetLanguages,
    unavailableTargetLanguages,
    hasValidSelection,
    handleSourceChange,
    handleTargetChange,
    handleSave,
    t
  } = data;

  return (
    <div className="lg:hidden relative">
      {/* ═══ LAYER 1: Outermost Foggy Aura - Teal/Cyan ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-6 rounded-[36px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 120% 60% at 50% -15%, rgba(45, 180, 200, 0.22) 0%, transparent 55%),
              radial-gradient(ellipse 50% 120% at -15% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
              radial-gradient(ellipse 50% 120% at 115% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
              radial-gradient(ellipse 100% 50% at 50% 115%, rgba(35, 140, 170, 0.12) 0%, transparent 50%)
            `,
            filter: 'blur(30px)',
          }}
        />
      )}

      {/* ═══ LAYER 2: Mid Foggy Glow - Purple/Violet ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-4 rounded-[28px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 100% 50% at 50% -8%, rgba(120, 80, 200, 0.35) 0%, transparent 60%),
              radial-gradient(ellipse 45% 100% at -8% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
              radial-gradient(ellipse 45% 100% at 108% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
              radial-gradient(ellipse 85% 45% at 50% 108%, rgba(90, 60, 160, 0.2) 0%, transparent 55%)
            `,
            filter: 'blur(20px)',
          }}
        />
      )}

      {/* ═══ LAYER 3: Inner Luminous Edge Glow ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-2 rounded-[20px] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 90% 40% at 50% -3%, rgba(80, 180, 220, 0.4) 0%, rgba(130, 100, 200, 0.25) 40%, transparent 70%),
              radial-gradient(ellipse 35% 90% at -3% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
              radial-gradient(ellipse 35% 90% at 103% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
              radial-gradient(ellipse 80% 35% at 50% 103%, rgba(60, 140, 180, 0.25) 0%, rgba(100, 70, 170, 0.15) 45%, transparent 65%)
            `,
            filter: 'blur(10px)',
          }}
        />
      )}

      {/* ═══ LAYER 4: Crisp Edge Highlight ═══ */}
      {darkMode && (
        <div 
          className="absolute -inset-[1px] rounded-[17px] sm:rounded-[25px] pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(100, 200, 240, 0.5) 0%, 
                rgba(140, 120, 220, 0.3) 15%,
                rgba(100, 80, 180, 0.15) 30%,
                rgba(80, 60, 150, 0.1) 50%,
                rgba(100, 80, 180, 0.15) 70%,
                rgba(140, 120, 220, 0.25) 85%,
                rgba(80, 180, 220, 0.35) 100%
              )
            `,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1.5px',
          }}
        />
      )}

      <div className={`relative rounded-[18px] sm:rounded-[24px] border p-4 sm:p-6 transition-all duration-500 ${
        darkMode
          ? 'border-purple-400/40'
          : 'border-white/15'
      }`}
      style={{
        background: darkMode ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(34px)',
        WebkitBackdropFilter: 'blur(34px)',
        boxShadow: darkMode
          ? '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.04), inset 0 -2px 10px rgba(255, 255, 255, 0.08)'
          : '0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 12px 24px -8px rgba(0, 0, 0, 0.05), inset 0 -2px 6px rgba(255, 255, 255, 0.25)'
      }}
      >
        <LanguageSelectionHeader selectedSource={selectedSource} t={t} isMobile={true} />

        <motion.p
          key={`${selectedSource}-sub-mobile`}
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`text-sm mb-6 text-center drop-shadow-sm transition-colors duration-500 ${
            darkMode ? 'text-purple-200/80' : 'text-white/80 light-mode-modal-subtext'
          }`}
        >
          {t('select_learning_pair')}
        </motion.p>

        <div className="relative mb-8">
          {/* ═══ PANEL LAYER 1: Outermost Foggy Aura - Teal/Cyan ═══ */}
          {darkMode && (
            <div 
              className="absolute -inset-8 sm:-inset-12 rounded-[40px] sm:rounded-[56px] pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 120% 60% at 50% -15%, rgba(45, 180, 200, 0.22) 0%, transparent 55%),
                  radial-gradient(ellipse 50% 120% at -15% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 120% at 115% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
                  radial-gradient(ellipse 100% 50% at 50% 115%, rgba(35, 140, 170, 0.12) 0%, transparent 50%)
                `,
                filter: 'blur(35px)',
              }}
            />
          )}

          {/* ═══ PANEL LAYER 2: Mid Foggy Glow - Purple/Violet ═══ */}
          {darkMode && (
            <div 
              className="absolute -inset-5 sm:-inset-7 rounded-[30px] sm:rounded-[45px] pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 100% 50% at 50% -8%, rgba(120, 80, 200, 0.35) 0%, transparent 60%),
                  radial-gradient(ellipse 45% 100% at -8% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
                  radial-gradient(ellipse 45% 100% at 108% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
                  radial-gradient(ellipse 85% 45% at 50% 108%, rgba(90, 60, 160, 0.2) 0%, transparent 55%)
                `,
                filter: 'blur(24px)',
              }}
            />
          )}

          {/* ═══ PANEL LAYER 3: Inner Luminous Edge Glow ═══ */}
          {darkMode && (
            <div 
              className="absolute -inset-2 sm:-inset-3 rounded-[22px] sm:rounded-[38px] pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 90% 40% at 50% -3%, rgba(80, 180, 220, 0.4) 0%, rgba(130, 100, 200, 0.25) 40%, transparent 70%),
                  radial-gradient(ellipse 35% 90% at -3% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
                  radial-gradient(ellipse 35% 90% at 103% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
                  radial-gradient(ellipse 80% 35% at 50% 103%, rgba(60, 140, 180, 0.25) 0%, rgba(100, 70, 170, 0.15) 45%, transparent 65%)
                `,
                filter: 'blur(12px)',
              }}
            />
          )}

          {/* ═══ PANEL LAYER 4: Crisp Edge Highlight ═══ */}
          {darkMode && (
            <div 
              className="absolute -inset-[1px] rounded-[19px] sm:rounded-[33px] pointer-events-none"
              style={{
                background: `
                  linear-gradient(180deg, 
                    rgba(100, 200, 240, 0.5) 0%, 
                    rgba(140, 120, 220, 0.3) 15%,
                    rgba(100, 80, 180, 0.15) 30%,
                    rgba(80, 60, 150, 0.1) 50%,
                    rgba(100, 80, 180, 0.15) 70%,
                    rgba(140, 120, 220, 0.25) 85%,
                    rgba(80, 180, 220, 0.35) 100%
                  )
                `,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '1.5px',
              }}
            />
          )}

          {/* ═══ BASE FROSTED GLASS MATERIAL ═══ */}
          <div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px]"
            style={{
              background: darkMode 
                ? 'rgba(25, 18, 45, 0.6)'
                : 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          />

          {/* ═══ Subtle color tint overlay - removed for dark mode to match sync panel ═══ */}

          {/* ═══ Inner Top Luminance - removed for dark mode to match sync panel ═══ */}

          {/* ═══ INNER SHADOW ═══ */}
          <div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
            style={{
              boxShadow: darkMode 
                ? 'inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.03)'
                : '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(255, 255, 255, 0.3)',
            }}
          />

          {/* ═══ BORDER ═══ */}
          <div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
            style={{
              border: darkMode 
                ? '1px solid rgba(100, 70, 160, 0.3)'
                : '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />

          {/* Ambient glass reflection */}
          {darkMode && (
            <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 mix-blend-soft-light pointer-events-none rounded-[18px] sm:rounded-[24px]" />
          )}

          {/* Content */}
          <div className="relative rounded-[18px] sm:rounded-[24px] p-3 z-20">
            <SourceLanguagePanel
              selectedSource={selectedSource}
              sourceLanguages={sourceLanguages}
              onSourceChange={handleSourceChange}
              t={t}
              isMobile={true}
            />
          </div>
        </div>

        <div className="relative">
          {/* ═══ PANEL LAYER 1: Outermost Foggy Aura - Teal/Cyan ═══ */}
          {darkMode && (
            <div 
              className="absolute -inset-8 sm:-inset-12 rounded-[40px] sm:rounded-[56px] pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 120% 60% at 50% -15%, rgba(45, 180, 200, 0.22) 0%, transparent 55%),
                  radial-gradient(ellipse 50% 120% at -15% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
                  radial-gradient(ellipse 50% 120% at 115% 50%, rgba(40, 160, 190, 0.18) 0%, transparent 50%),
                  radial-gradient(ellipse 100% 50% at 50% 115%, rgba(35, 140, 170, 0.12) 0%, transparent 50%)
                `,
                filter: 'blur(35px)',
              }}
            />
          )}

          {/* ═══ PANEL LAYER 2: Mid Foggy Glow - Purple/Violet ═══ */}
          {darkMode && (
            <div 
              className="absolute -inset-5 sm:-inset-7 rounded-[30px] sm:rounded-[45px] pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 100% 50% at 50% -8%, rgba(120, 80, 200, 0.35) 0%, transparent 60%),
                  radial-gradient(ellipse 45% 100% at -8% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
                  radial-gradient(ellipse 45% 100% at 108% 50%, rgba(100, 70, 180, 0.28) 0%, transparent 55%),
                  radial-gradient(ellipse 85% 45% at 50% 108%, rgba(90, 60, 160, 0.2) 0%, transparent 55%)
                `,
                filter: 'blur(24px)',
              }}
            />
          )}

          {/* ═══ PANEL LAYER 3: Inner Luminous Edge Glow ═══ */}
          {darkMode && (
            <div 
              className="absolute -inset-2 sm:-inset-3 rounded-[22px] sm:rounded-[38px] pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 90% 40% at 50% -3%, rgba(80, 180, 220, 0.4) 0%, rgba(130, 100, 200, 0.25) 40%, transparent 70%),
                  radial-gradient(ellipse 35% 90% at -3% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
                  radial-gradient(ellipse 35% 90% at 103% 50%, rgba(70, 160, 200, 0.32) 0%, rgba(110, 80, 180, 0.2) 45%, transparent 65%),
                  radial-gradient(ellipse 80% 35% at 50% 103%, rgba(60, 140, 180, 0.25) 0%, rgba(100, 70, 170, 0.15) 45%, transparent 65%)
                `,
                filter: 'blur(12px)',
              }}
            />
          )}

          {/* ═══ PANEL LAYER 4: Crisp Edge Highlight ═══ */}
          {darkMode && (
            <div 
              className="absolute -inset-[1px] rounded-[19px] sm:rounded-[33px] pointer-events-none"
              style={{
                background: `
                  linear-gradient(180deg, 
                    rgba(100, 200, 240, 0.5) 0%, 
                    rgba(140, 120, 220, 0.3) 15%,
                    rgba(100, 80, 180, 0.15) 30%,
                    rgba(80, 60, 150, 0.1) 50%,
                    rgba(100, 80, 180, 0.15) 70%,
                    rgba(140, 120, 220, 0.25) 85%,
                    rgba(80, 180, 220, 0.35) 100%
                  )
                `,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: '1.5px',
              }}
            />
          )}

          {/* ═══ BASE FROSTED GLASS MATERIAL ═══ */}
          <div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px]"
            style={{
              background: darkMode 
                ? 'rgba(25, 18, 45, 0.6)'
                : 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          />

          {/* ═══ Subtle color tint overlay - removed for dark mode to match sync panel ═══ */}

          {/* ═══ Inner Top Luminance - removed for dark mode to match sync panel ═══ */}

          {/* ═══ INNER SHADOW ═══ */}
          <div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
            style={{
              boxShadow: darkMode 
                ? 'inset 0 1px 1px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.03)'
                : '0 8px 20px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(255, 255, 255, 0.3)',
            }}
          />

          {/* ═══ BORDER ═══ */}
          <div 
            className="absolute inset-0 rounded-[18px] sm:rounded-[24px] pointer-events-none"
            style={{
              border: darkMode 
                ? '1px solid rgba(100, 70, 160, 0.3)'
                : '1px solid rgba(255, 255, 255, 0.2)',
            }}
          />

          {/* Ambient glass reflection */}
          {darkMode && (
            <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-transparent to-white/3 mix-blend-soft-light pointer-events-none rounded-[18px] sm:rounded-[24px]" />
          )}

          {/* Content */}
          <div className="relative rounded-[18px] sm:rounded-[24px] p-3 z-20">
            <TargetLanguagePanel
              selectedSource={selectedSource}
              selectedTarget={selectedTarget}
              availableTargetLanguages={availableTargetLanguages}
              unavailableTargetLanguages={unavailableTargetLanguages}
              onTargetChange={handleTargetChange}
              t={t}
              isMobile={true}
            />
          </div>
        </div>

        <div className="mt-8">
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-[18px] sm:rounded-[24px] flex items-center justify-center gap-2 text-sm font-medium ${
                darkMode ? 'bg-red-500/20 text-red-300 border border-red-400/40' : 'bg-red-100 text-red-700 border border-red-300'
              }`}
            >
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </motion.div>
          )}

          <ActionButton
            onClick={handleSave}
            disabled={saving || !hasValidSelection}
            saving={saving}
            hasValidSelection={hasValidSelection}
            selectedSource={selectedSource}
            selectedTarget={selectedTarget}
            t={t}
            isMobile={true}
          />

          <SelectionPreview
            hasValidSelection={hasValidSelection}
            saving={saving}
            selectedSource={selectedSource}
            selectedTarget={selectedTarget}
            sourceLanguages={sourceLanguages}
            targetLanguages={targetLanguages}
            availableTargetLanguages={availableTargetLanguages}
            t={t}
            isMobile={true}
          />
        </div>
      </div>
    </div>
  );
}