import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Star } from "lucide-react";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";

export default function FavoriteToast({ message, isAdding }) {
  const { sourceLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className={`relative backdrop-blur-2xl rounded-2xl px-6 py-4 shadow-2xl border-2 ${
        isAdding 
          ? 'bg-gradient-to-r from-pink-500/90 to-rose-500/90 border-pink-300' 
          : 'bg-white/90 border-gray-300'
      }`}>
        {isAdding && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl opacity-30"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        
        <div className="relative flex items-center gap-3">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isAdding 
                ? 'bg-white/20' 
                : 'bg-gradient-to-br from-pink-400 to-rose-500'
            }`}
          >
            {isAdding ? (
              <Heart className="w-5 h-5 text-white fill-white" />
            ) : (
              <Heart className="w-5 h-5 text-white" />
            )}
          </motion.div>
          
          <div>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`font-bold text-base ${isAdding ? 'text-white' : 'text-gray-800'}`}
            >
              {message}
            </motion.p>
          </div>
          
          {isAdding && (
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
            >
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}