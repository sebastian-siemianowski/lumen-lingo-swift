import React from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { useLanguage } from "../language/LanguageContext";
import { useTranslations } from "../utils/translations";
import useCategoryData from "./useCategoryData";
import CategoryLoadingState from "./CategoryLoadingState";
import CategorySelector from "./CategorySelector";

export default function GrammarCategoriesContainer() {
  const navigate = useNavigate();
  const { sourceLanguage, targetLanguage } = useLanguage();
  const t = useTranslations(sourceLanguage);

  const {
    loading,
    content,
    hideCompleted,
    setHideCompleted,
    getCategoryProgress,
    handleToggleFavorite
  } = useCategoryData('grammar', sourceLanguage, targetLanguage);

  const handleSelectCategory = (categoryKey) => {
    navigate(createPageUrl("Grammar") + `?category=${categoryKey}`);
  };

  if (loading) return <CategoryLoadingState />;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <CategorySelector
        gameType="grammar"
        title={t('choose_grammar_category')}
        onSelectCategory={handleSelectCategory}
        preloadedContent={content}
        onToggleFavorite={handleToggleFavorite}
        getCategoryProgress={getCategoryProgress}
        hideCompleted={hideCompleted}
        onToggleHideCompleted={() => setHideCompleted(!hideCompleted)}
      />
    </motion.div>
  );
}