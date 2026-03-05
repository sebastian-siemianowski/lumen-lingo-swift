import React from "react";
import { motion } from "framer-motion";
import useLanguageSelection from "./useLanguageSelection";
import LanguageSelectionStyles from "./LanguageSelectionStyles";
import LanguageSelectionDesktop from "./LanguageSelectionDesktop";
import LanguageSelectionMobile from "./LanguageSelectionMobile";

export default function LanguageSelectionContainer() {
  const data = useLanguageSelection();

  return (
    <div className="min-h-screen p-3 pt-6 sm:p-6 lg:pt-12 lg:pb-2 flex items-start justify-center overflow-hidden">
      <LanguageSelectionStyles />

      <motion.div
        initial={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl mx-auto"
      >
        <LanguageSelectionDesktop data={data} />
        <LanguageSelectionMobile data={data} />
      </motion.div>
    </div>
  );
}