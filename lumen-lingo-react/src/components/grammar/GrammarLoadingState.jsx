import React from "react";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { useDarkMode } from "../theme/DarkModeContext";

export default function GrammarLoadingState() {
  const { darkMode } = useDarkMode();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
          darkMode
            ? 'bg-gradient-to-br from-purple-500/40 to-fuchsia-600/40'
            : 'bg-gradient-to-br from-purple-400 to-fuchsia-500'
        }`}
      >
        <Brain className="w-8 h-8 text-white" strokeWidth={2.5} />
      </motion.div>
    </div>
  );
}