import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Crown, 
  Sparkles, 
  Zap, 
  Check,
  Globe,
  TrendingUp,
  Star,
  ChevronDown,
  ChevronUp,
  Infinity,
  Palette,
  Lock,
  Unlock
} from "lucide-react";
import { useLanguage } from "../components/language/LanguageContext";
import { useDarkMode } from "../components/theme/DarkModeContext";
import { useTranslations } from "../components/utils/translations";

export default function Membership() {
  const { sourceLanguage } = useLanguage();
  const { darkMode } = useDarkMode();
  const t = useTranslations(sourceLanguage);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredTier, setHoveredTier] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const tiers = [
    {
      id: 'free',
      name: 'Starter',
      icon: Globe,
      gradient: 'from-slate-400 to-slate-600',
      accentColor: darkMode ? 'rgba(148, 163, 184, 0.3)' : 'rgba(100, 116, 139, 0.3)',
      price: { monthly: 0, yearly: 0 },
      tagline: 'Begin your journey',
      benefits: [
        { text: '3 language pairs', impact: 'core' },
        { text: 'All game modes', impact: 'core' },
        { text: '30 min/day practice', impact: 'limited' },
        { text: 'Basic analytics', impact: 'limited' }
      ],
      cta: 'Current Plan',
      current: true,
      highlight: false
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: Zap,
      gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
      accentColor: darkMode ? 'rgba(168, 85, 247, 0.4)' : 'rgba(168, 85, 247, 0.35)',
      price: { monthly: 9.99, yearly: 99.99 },
      tagline: 'Master languages faster',
      benefits: [
        { text: '7 language pairs', impact: 'premium' },
        { text: 'Unlimited practice', impact: 'premium' },
        { text: 'Advanced analytics', impact: 'premium' },
        { text: '3 Breathing Orbs', impact: 'delight' },
        { text: 'Offline access', impact: 'premium' }
      ],
      cta: 'Start Pro',
      current: false,
      highlight: false,
      savings: '17%'
    },
    {
      id: 'elite',
      name: 'Elite',
      icon: Sparkles,
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-700',
      accentColor: darkMode ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.4)',
      price: { monthly: 19.99, yearly: 199.99 },
      tagline: 'Unlock your full potential',
      benefits: [
        { text: 'Everything in Pro', impact: 'inherit' },
        { text: '25+ language pairs', impact: 'exclusive' },
        { text: '4 Quantum scenes', impact: 'exclusive' },
        { text: '4 Nebula presets', impact: 'exclusive' },
        { text: 'Early feature access', impact: 'exclusive' }
      ],
      cta: 'Upgrade to Elite',
      current: false,
      highlight: true,
      savings: '17%'
    },
    {
      id: 'royal',
      name: 'Royal',
      icon: Crown,
      gradient: 'from-amber-400 via-orange-500 to-rose-500',
      accentColor: darkMode ? 'rgba(251, 191, 36, 0.4)' : 'rgba(251, 191, 36, 0.35)',
      price: { monthly: 99.99, yearly: 999.99 },
      tagline: 'The ultimate experience',
      benefits: [
        { text: 'Everything in Elite', impact: 'inherit' },
        { text: '6 Breathing Orbs (all)', impact: 'ultimate' },
        { text: 'Rave Mode access', impact: 'ultimate' },
        { text: '6 Quantum scenes', impact: 'ultimate' },
        { text: '6 Nebula presets', impact: 'ultimate' }
      ],
      cta: 'Ascend to Royal',
      current: false,
      highlight: false,
      savings: '17%'
    }
  ];

  const comparisonFeatures = [
    { name: 'Language Pairs', free: '3 core', pro: '7 core', elite: '25+ beta', royal: '25+ beta' },
    { name: 'Practice Time', free: '30 min/day', pro: 'Unlimited', elite: 'Unlimited', royal: 'Unlimited' },
    { name: 'Game Modes', free: 'All 3', pro: 'All 3', elite: 'All 3', royal: 'All 3' },
    { name: 'Progress Tracking', free: 'Basic', pro: 'Advanced', elite: 'Advanced', royal: 'Advanced' },
    { name: 'Breathing Orbs', free: '—', pro: '6 schemes', elite: '6 schemes', royal: '6 schemes' },
    { name: 'Quantum Flow', free: '—', pro: '—', elite: '4 scenes', royal: '6 scenes' },
    { name: 'Nebula Drift', free: '—', pro: '—', elite: '4 presets', royal: '6 presets' },
    { name: 'Animation Controls', free: '—', pro: '—', elite: 'Full', royal: 'Full' },
    { name: 'Offline Mode', free: '—', pro: '✓', elite: '✓', royal: '✓' },
    { name: 'Premium Week/Month', free: '✓', pro: '✓', elite: '✓', royal: '—' }
  ];

  const faqs = [
    { q: t('faq_cancel'), a: t('faq_cancel_answer') },
    { q: t('faq_languages'), a: t('faq_languages_answer') },
    { q: t('faq_switch'), a: t('faq_switch_answer') },
    { q: t('faq_refund'), a: t('faq_refund_answer') }
  ];

  const savingsPercentage = Math.round((1 - (tiers[1].price.yearly / 12) / tiers[1].price.monthly) * 100);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: darkMode
              ? 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        {/* Hero Section - Refined Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-xl"
            style={{
              background: darkMode ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.2)',
              border: darkMode ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid rgba(168, 85, 247, 0.35)',
              color: darkMode ? 'rgba(192, 132, 252, 0.9)' : 'rgba(168, 85, 247, 0.95)'
            }}
          >
            Plans & Pricing
          </motion.div>

          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-7 tracking-tight leading-[1.1]"
            style={{ 
              textShadow: darkMode 
                ? '0 4px 24px rgba(0, 0, 0, 0.6)' 
                : '0 2px 16px rgba(0, 0, 0, 0.25)',
              letterSpacing: '-0.02em'
            }}
          >
            Invest in Your
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
              Language Mastery
            </span>
          </h1>

          <p 
            className="text-base sm:text-lg text-white/75 font-normal max-w-2xl mx-auto leading-relaxed"
            style={{ 
              textShadow: darkMode 
                ? '0 1px 3px rgba(0, 0, 0, 0.5)' 
                : '0 1px 2px rgba(0, 0, 0, 0.2)',
              letterSpacing: '-0.01em'
            }}
          >
            Join thousands who are learning smarter, not harder.
            <br className="hidden sm:block" />
            30-day money-back guarantee · Cancel anytime
          </p>
        </motion.div>

        {/* Billing Toggle - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div 
            className="inline-flex items-center gap-1 p-1.5 rounded-[20px] backdrop-blur-xl border"
            style={{
              background: darkMode 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(255, 255, 255, 0.25)',
              border: darkMode 
                ? '1px solid rgba(168, 85, 247, 0.2)' 
                : '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: darkMode
                ? 'inset 0 1px 2px rgba(255, 255, 255, 0.08), 0 10px 30px rgba(0, 0, 0, 0.25)'
                : 'inset 0 1px 2px rgba(255, 255, 255, 0.4), 0 10px 30px rgba(0, 0, 0, 0.1)'
            }}
          >
            {['monthly', 'yearly'].map((cycle) => (
              <motion.button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`relative px-10 py-3.5 rounded-[16px] font-semibold text-sm transition-all ${
                  billingCycle === cycle
                    ? 'text-white'
                    : darkMode 
                      ? 'text-white/45 hover:text-white/65' 
                      : 'text-white/55 hover:text-white/75'
                }`}
                whileTap={{ scale: 0.97 }}
                style={{ letterSpacing: '-0.01em' }}
              >
                {billingCycle === cycle && (
                  <motion.div
                    layoutId="billingBg"
                    className="absolute inset-0 rounded-[16px]"
                    style={{
                      background: darkMode
                        ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.45) 0%, rgba(139, 92, 246, 0.35) 100%)'
                        : 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.3) 100%)',
                      boxShadow: darkMode 
                        ? '0 4px 20px rgba(168, 85, 247, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                        : '0 4px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2.5">
                  {cycle === 'monthly' ? 'Monthly' : 'Annual'}
                  {cycle === 'yearly' && (
                    <motion.span 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide"
                      style={{
                        background: darkMode ? 'rgba(251, 191, 36, 0.25)' : 'rgba(251, 191, 36, 0.35)',
                        color: darkMode ? '#FCD34D' : '#FFFFFF',
                        boxShadow: '0 2px 8px rgba(251, 191, 36, 0.2)'
                      }}
                    >
                      SAVE {savingsPercentage}%
                    </motion.span>
                  )}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards - World-Class Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 mb-20">
          {tiers.map((tier, index) => {
            const isHovered = hoveredTier === tier.id;
            const isPro = tier.highlight;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
                onHoverStart={() => setHoveredTier(tier.id)}
                onHoverEnd={() => setHoveredTier(null)}
              >
                {/* Main Card Container */}
                <motion.div
                  className="relative h-full"
                  animate={{
                    y: isHovered ? -10 : isPro ? -5 : 0,
                    scale: isHovered ? 1.018 : 1
                  }}
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                >
                  {/* Most Popular Ribbon */}
                  {isPro && (
                    <div className="absolute top-0 right-0 z-20 w-32 h-32 overflow-hidden pointer-events-none">
                      <motion.div
                        className="absolute top-7 -right-11 w-48 py-2.5 text-center"
                        animate={{
                          boxShadow: isHovered
                            ? [
                                '0 4px 20px rgba(251, 191, 36, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                                '0 6px 28px rgba(251, 191, 36, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                                '0 4px 20px rgba(251, 191, 36, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                              ]
                            : '0 4px 12px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                        }}
                        transition={{
                          boxShadow: isHovered ? { duration: 2, repeat: 999, ease: "easeInOut" } : { duration: 0.3 }
                        }}
                        style={{
                          transform: 'rotate(45deg)',
                          background: darkMode
                            ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%)'
                            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%)',
                          backgroundSize: '200% 200%'
                        }}
                      >
                        {/* Shimmer effect on hover */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              className="absolute inset-0"
                              initial={{ x: '-100%', opacity: 0 }}
                              animate={{ 
                                x: '100%', 
                                opacity: [0, 0.6, 0]
                              }}
                              exit={{ opacity: 0 }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: 999,
                                ease: "easeInOut"
                              }}
                              style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
                              }}
                            />
                          )}
                        </AnimatePresence>

                        <span 
                          className="text-white font-black text-[10px] tracking-[0.15em] uppercase flex items-center justify-center gap-1.5 relative z-10"
                          style={{
                            textShadow: '0 1px 3px rgba(0, 0, 0, 0.4), 0 0 10px rgba(251, 191, 36, 0.3)'
                          }}
                        >
                          <motion.div
                            animate={{
                              rotate: isHovered ? [0, 360] : 0,
                              scale: isHovered ? [1, 1.15, 1] : 1
                            }}
                            transition={{
                              rotate: isHovered ? { duration: 2, repeat: 999, ease: "linear" } : { duration: 0.3 },
                              scale: isHovered ? { duration: 1, repeat: 999, ease: "easeInOut" } : { duration: 0.3 }
                            }}
                          >
                            <Star className="w-3 h-3" strokeWidth={3} fill="currentColor" />
                          </motion.div>
                          Most Popular
                        </span>
                      </motion.div>
                    </div>
                  )}

                  {/* Premium Glass Card */}
                  <div
                    className="relative h-full rounded-[28px] overflow-hidden"
                    style={{
                      background: darkMode 
                        ? isPro 
                          ? 'linear-gradient(165deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.10) 100%)'
                          : 'linear-gradient(165deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.07) 100%)'
                        : isPro
                          ? 'linear-gradient(165deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0.45) 100%)'
                          : 'linear-gradient(165deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.35) 100%)',
                      backdropFilter: 'blur(100px)',
                      WebkitBackdropFilter: 'blur(100px)',
                      border: darkMode 
                        ? isPro ? '1.5px solid rgba(255, 255, 255, 0.22)' : '1px solid rgba(255, 255, 255, 0.15)'
                        : isPro ? '1.5px solid rgba(255, 255, 255, 0.6)' : '1px solid rgba(255, 255, 255, 0.45)',
                      boxShadow: darkMode 
                        ? isPro
                          ? `0 30px 90px rgba(0, 0, 0, 0.6), 0 0 60px ${tier.accentColor.replace('0.4', '0.2')}, inset 0 1px 3px rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.1)`
                          : `0 25px 80px rgba(0, 0, 0, 0.45), 0 0 50px ${tier.accentColor.replace('0.4', '0.12')}, inset 0 1px 2px rgba(255, 255, 255, 0.22)`
                        : isPro
                          ? `0 30px 90px rgba(0, 0, 0, 0.22), 0 0 60px ${tier.accentColor.replace('0.4', '0.15')}, inset 0 1px 3px rgba(255, 255, 255, 0.7), inset 0 -1px 2px rgba(0, 0, 0, 0.05)`
                          : `0 25px 80px rgba(0, 0, 0, 0.16), 0 0 50px ${tier.accentColor.replace('0.4', '0.08')}, inset 0 1px 2px rgba(255, 255, 255, 0.55)`
                    }}
                  >
                    {/* Dual Gradient Layers */}
                    <div 
                      className="absolute inset-0 opacity-40"
                      style={{
                        background: `
                          radial-gradient(ellipse 90% 40% at 50% 0%, ${tier.accentColor}, transparent 65%),
                          radial-gradient(circle at 80% 80%, ${tier.accentColor.replace('0.4', '0.25')}, transparent 50%)
                        `
                      }}
                    />

                    {/* Shimmer on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0"
                          initial={{ x: '-100%', opacity: 0 }}
                          animate={{ x: '100%', opacity: [0, 0.6, 0] }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.2, ease: "easeInOut" }}
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Content */}
                    <div className="relative z-10 p-8 flex flex-col h-full">
                      {/* Floating Icon */}
                      <motion.div 
                        className="flex justify-center mb-6"
                        animate={{ 
                          y: isHovered ? [-3, 3, -3] : 0,
                          scale: isHovered ? [1, 1.12, 1] : 1,
                          rotate: isHovered ? [0, -10, 10, -10, 0] : 0
                        }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div 
                          className={`w-[88px] h-[88px] rounded-[24px] flex items-center justify-center bg-gradient-to-br ${tier.gradient} relative`}
                          style={{
                            boxShadow: darkMode
                              ? `0 20px 60px ${tier.accentColor.replace('0.4', '0.55')}, 0 0 40px ${tier.accentColor.replace('0.4', '0.3')}, inset 0 2px 5px rgba(255, 255, 255, 0.45), inset 0 -2px 5px rgba(0, 0, 0, 0.2)`
                              : `0 20px 60px ${tier.accentColor.replace('0.4', '0.45')}, 0 0 40px ${tier.accentColor.replace('0.4', '0.25')}, inset 0 2px 5px rgba(255, 255, 255, 0.5), inset 0 -2px 5px rgba(0, 0, 0, 0.15)`
                          }}
                        >
                          <tier.icon className="w-10 h-10 text-white drop-shadow-2xl" strokeWidth={2.8} />

                          {/* Ripple Effect */}
                          <AnimatePresence>
                            {isHovered && (
                              <>
                                <motion.div
                                  className="absolute inset-0 rounded-3xl border-2"
                                  style={{ borderColor: tier.accentColor.replace('0.4', '0.8') }}
                                  initial={{ scale: 1, opacity: 0.6 }}
                                  animate={{ scale: 1.5, opacity: 0 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 1.2, repeat: 999, ease: "easeOut" }}
                                />
                                <motion.div
                                  className="absolute inset-0 rounded-3xl border-2"
                                  style={{ borderColor: tier.accentColor.replace('0.4', '0.6') }}
                                  initial={{ scale: 1, opacity: 0.6 }}
                                  animate={{ scale: 1.5, opacity: 0 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 1.2, delay: 0.4, repeat: 999, ease: "easeOut" }}
                                />
                              </>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>

                      {/* Tier Name - World-Class Typography */}
                      <motion.h3 
                        className="text-[36px] font-black text-white text-center mb-2 tracking-tight leading-[0.95]"
                        style={{
                          letterSpacing: '-0.04em',
                          textShadow: darkMode 
                            ? `0 3px 18px ${tier.accentColor.replace('0.4', '0.5')}, 0 1px 4px rgba(0, 0, 0, 0.3)` 
                            : `0 2px 12px ${tier.accentColor.replace('0.4', '0.3')}, 0 1px 3px rgba(0, 0, 0, 0.2)`,
                          fontWeight: 900
                        }}
                      >
                        {tier.name}
                      </motion.h3>
                      <p className={`text-[13px] text-center mb-7 font-bold tracking-tight ${
                        darkMode ? 'text-white/80' : 'text-white/90'
                      }`}
                        style={{ 
                          letterSpacing: '0em',
                          lineHeight: '1.4',
                          textShadow: darkMode 
                            ? '0 1px 2px rgba(0, 0, 0, 0.3)' 
                            : '0 1px 1px rgba(0, 0, 0, 0.15)'
                        }}
                      >
                        {tier.tagline}
                      </p>

                      {/* Price Tag - World-Class Clarity */}
                      <motion.div 
                        className="mb-9 relative"
                        animate={{
                          y: isHovered ? -4 : 0
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <div 
                          className="rounded-[22px] px-6 py-7 relative overflow-hidden"
                          style={{
                            background: darkMode 
                              ? isPro
                                ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.04) 100%)'
                                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)'
                              : isPro
                                ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.35) 100%)'
                                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.25) 100%)',
                            border: darkMode 
                              ? isPro ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.08)'
                              : isPro ? '1px solid rgba(255, 255, 255, 0.45)' : '1px solid rgba(255, 255, 255, 0.35)',
                            boxShadow: darkMode 
                              ? isPro
                                ? 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 10px rgba(0, 0, 0, 0.15)'
                                : 'inset 0 1px 0 rgba(255, 255, 255, 0.06)' 
                              : isPro
                                ? 'inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 10px rgba(0, 0, 0, 0.08)'
                                : 'inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          {tier.price[billingCycle] === 0 ? (
                            <div className="text-center">
                              <div className="text-[52px] font-black text-white leading-none tracking-[-0.03em] mb-2">
                                Free
                              </div>
                              <p className={`text-[11px] font-bold tracking-wide ${
                                darkMode ? 'text-white/65' : 'text-white/75'
                              }`}
                                style={{
                                  textShadow: darkMode 
                                    ? '0 1px 2px rgba(0, 0, 0, 0.4)' 
                                    : '0 1px 1px rgba(0, 0, 0, 0.2)'
                                }}
                              >
                                Forever · No credit card
                              </p>
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span className={`text-[24px] font-black ${
                                  darkMode ? 'text-white/55' : 'text-white/60'
                                }`} style={{ letterSpacing: '-0.02em' }}>
                                  $
                                </span>
                                <motion.span 
                                  key={`${tier.id}-${billingCycle}`}
                                  initial={{ opacity: 0, y: 12 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                                  className="text-[56px] font-black text-white leading-none tracking-[-0.04em]"
                                  style={{
                                    textShadow: darkMode
                                      ? '0 2px 8px rgba(0, 0, 0, 0.3)'
                                      : '0 1px 4px rgba(0, 0, 0, 0.15)'
                                  }}
                                >
                                  {billingCycle === 'yearly' 
                                    ? (tier.price.yearly / 12).toFixed(0)
                                    : tier.price[billingCycle].toFixed(0)
                                  }
                                </motion.span>
                                <span className={`text-[16px] font-bold ml-0.5 ${
                                  darkMode ? 'text-white/50' : 'text-white/60'
                                }`} style={{ letterSpacing: '-0.01em' }}>
                                  /mo
                                </span>
                              </div>
                              {billingCycle === 'yearly' ? (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.15 }}
                                  className="space-y-2"
                                >
                                  <p className={`text-[11px] font-bold ${
                                    darkMode ? 'text-white/60' : 'text-white/70'
                                  }`}
                                    style={{
                                      textShadow: darkMode 
                                        ? '0 1px 2px rgba(0, 0, 0, 0.4)' 
                                        : '0 1px 1px rgba(0, 0, 0, 0.2)'
                                    }}
                                  >
                                    ${tier.price.yearly}/year billed annually
                                  </p>
                                  {tier.savings && (
                                    <div 
                                      className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-wider"
                                      style={{
                                        background: darkMode 
                                          ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.25) 100%)'
                                          : 'linear-gradient(135deg, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.35) 100%)',
                                        color: darkMode ? '#6EE7B7' : '#FFFFFF',
                                        border: darkMode ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(16, 185, 129, 0.45)',
                                        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.15)'
                                      }}
                                    >
                                      SAVE ${((tier.price.monthly * 12) - tier.price.yearly).toFixed(0)}/YEAR
                                    </div>
                                  )}
                                </motion.div>
                              ) : (
                                <p className={`text-[11px] font-bold ${
                                  darkMode ? 'text-white/60' : 'text-white/70'
                                }`}
                                  style={{
                                    textShadow: darkMode 
                                      ? '0 1px 2px rgba(0, 0, 0, 0.4)' 
                                      : '0 1px 1px rgba(0, 0, 0, 0.2)'
                                  }}
                                >
                                  Billed monthly · Cancel anytime
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>

                      {/* Benefits - World-Class List with Microanimations */}
                      <div className="flex-1 mb-9">
                        <div className="space-y-3.5">
                          {tier.benefits.map((benefit, idx) => {
                            const impactStyles = {
                              core: { 
                                opacity: 0.68, 
                                icon: darkMode ? 'rgba(203, 213, 225, 0.6)' : 'rgba(148, 163, 184, 0.7)', 
                                iconBg: darkMode ? 'rgba(203, 213, 225, 0.18)' : 'rgba(148, 163, 184, 0.2)',
                                textColor: darkMode ? 'rgba(255, 255, 255, 0.68)' : 'rgba(255, 255, 255, 0.78)'
                              },
                              limited: { 
                                opacity: 0.75, 
                                icon: darkMode ? 'rgba(203, 213, 225, 0.7)' : 'rgba(148, 163, 184, 0.8)', 
                                iconBg: darkMode ? 'rgba(203, 213, 225, 0.22)' : 'rgba(148, 163, 184, 0.25)',
                                textColor: darkMode ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.85)'
                              },
                              premium: { 
                                opacity: 1, 
                                icon: tier.accentColor, 
                                iconBg: tier.accentColor.replace('0.4', '0.22'),
                                textColor: darkMode ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 1)'
                              },
                              exclusive: { 
                                opacity: 1, 
                                icon: tier.accentColor, 
                                iconBg: tier.accentColor.replace('0.4', '0.24'),
                                textColor: darkMode ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 1)'
                              },
                              ultimate: { 
                                opacity: 1, 
                                icon: tier.accentColor, 
                                iconBg: tier.accentColor.replace('0.4', '0.26'),
                                textColor: darkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 1)'
                              },
                              inherit: { 
                                opacity: 0.8, 
                                icon: darkMode ? 'rgba(203, 213, 225, 0.75)' : 'rgba(148, 163, 184, 0.85)', 
                                iconBg: darkMode ? 'rgba(203, 213, 225, 0.25)' : 'rgba(148, 163, 184, 0.28)',
                                textColor: darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.9)'
                              },
                              delight: { 
                                opacity: 0.92, 
                                icon: tier.accentColor, 
                                iconBg: tier.accentColor.replace('0.4', '0.2'),
                                textColor: darkMode ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.98)'
                              }
                            };

                            const style = impactStyles[benefit.impact] || impactStyles.core;
                            const isPremiumFeature = benefit.impact === 'premium' || benefit.impact === 'exclusive' || benefit.impact === 'ultimate' || benefit.impact === 'delight';
                            const [isHovering, setIsHovering] = React.useState(false);

                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: 0.45 + index * 0.07 + idx * 0.035,
                                  type: "spring",
                                  stiffness: 240,
                                  damping: 22
                                }}
                                className="flex items-start gap-3 group/benefit cursor-default"
                                onHoverStart={() => setIsHovering(true)}
                                onHoverEnd={() => setIsHovering(false)}
                                whileHover={{ 
                                  x: 3,
                                  transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                              >
                                <motion.div 
                                  className="w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0 mt-[2px] relative"
                                  style={{
                                    background: `linear-gradient(135deg, ${style.icon}, ${style.icon.replace('0.4', '0.28').replace('0.6', '0.45').replace('0.7', '0.55').replace('0.75', '0.6').replace('0.8', '0.65').replace('0.85', '0.7')})`,
                                    boxShadow: isPremiumFeature
                                      ? darkMode
                                        ? `0 3px 12px ${style.icon.replace('0.4', '0.35')}, 0 0 20px ${style.icon.replace('0.4', '0.15')}, inset 0 1px 1px rgba(255, 255, 255, 0.3)`
                                        : `0 3px 12px ${style.icon.replace('0.4', '0.3')}, 0 0 20px ${style.icon.replace('0.4', '0.12')}, inset 0 1px 1px rgba(255, 255, 255, 0.4)`
                                      : darkMode
                                        ? 'inset 0 1px 1px rgba(255, 255, 255, 0.15)'
                                        : 'inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                                  }}
                                  animate={{
                                    scale: isHovering ? 1.15 : 1,
                                    rotate: isHovering ? [0, -8, 8, 0] : 0,
                                    boxShadow: isHovering && isPremiumFeature
                                      ? darkMode
                                        ? `0 4px 16px ${style.icon.replace('0.4', '0.5')}, 0 0 28px ${style.icon.replace('0.4', '0.22')}, inset 0 1px 1px rgba(255, 255, 255, 0.35)`
                                        : `0 4px 16px ${style.icon.replace('0.4', '0.4')}, 0 0 28px ${style.icon.replace('0.4', '0.18')}, inset 0 1px 1px rgba(255, 255, 255, 0.45)`
                                      : isHovering
                                        ? darkMode
                                          ? '0 2px 8px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
                                          : '0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
                                        : isPremiumFeature
                                          ? darkMode
                                            ? `0 3px 12px ${style.icon.replace('0.4', '0.35')}, 0 0 20px ${style.icon.replace('0.4', '0.15')}, inset 0 1px 1px rgba(255, 255, 255, 0.3)`
                                            : `0 3px 12px ${style.icon.replace('0.4', '0.3')}, 0 0 20px ${style.icon.replace('0.4', '0.12')}, inset 0 1px 1px rgba(255, 255, 255, 0.4)`
                                          : darkMode
                                            ? 'inset 0 1px 1px rgba(255, 255, 255, 0.15)'
                                            : 'inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                                  }}
                                  transition={{ 
                                    type: "spring", 
                                    stiffness: 380, 
                                    damping: 20,
                                    rotate: { duration: 0.4 }
                                  }}
                                >
                                  {/* Animated glow ring for premium features */}
                                  {isPremiumFeature && (
                                    <motion.div 
                                      className="absolute inset-0 rounded-full"
                                      style={{
                                        background: style.iconBg,
                                        filter: 'blur(4px)',
                                        zIndex: -1
                                      }}
                                      animate={{
                                        scale: isHovering ? 1.6 : 1.4,
                                        opacity: isHovering ? 1 : 0.85
                                      }}
                                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                  )}
                                  <motion.div
                                    animate={{
                                      scale: isHovering ? [1, 1.2, 1] : 1
                                    }}
                                    transition={{ 
                                      duration: 0.4,
                                      times: [0, 0.5, 1]
                                    }}
                                  >
                                    <Check 
                                      className="w-[11px] h-[11px] text-white relative z-10" 
                                      strokeWidth={3.8}
                                      style={{
                                        filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2))'
                                      }}
                                    />
                                  </motion.div>
                                </motion.div>
                                <motion.p 
                                  className="text-[14px] font-semibold text-white leading-[1.45]"
                                  style={{ 
                                    color: style.textColor,
                                    letterSpacing: '-0.01em',
                                    textShadow: darkMode 
                                      ? '0 1px 2px rgba(0, 0, 0, 0.35)' 
                                      : '0 1px 1px rgba(0, 0, 0, 0.18)',
                                    fontWeight: isPremiumFeature ? 700 : 600
                                  }}
                                  animate={{
                                    opacity: isHovering ? 1 : style.opacity
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {benefit.text}
                                </motion.p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* CTA Button - World-Class */}
                      <motion.button
                        className={`w-full py-[17px] rounded-[20px] font-bold text-[15px] relative overflow-hidden group/btn ${
                          tier.current ? 'cursor-default' : 'cursor-pointer'
                        }`}
                        style={tier.current ? {
                          background: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.25)',
                          border: darkMode ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.3)',
                          color: darkMode ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.55)',
                          letterSpacing: '-0.005em'
                        } : tier.highlight ? {
                          background: `linear-gradient(135deg, ${tier.gradient.split(' ')[1]}, ${tier.gradient.split(' ')[3]}, ${tier.gradient.split(' ')[5]})`,
                          border: '1.5px solid rgba(255, 255, 255, 0.3)',
                          boxShadow: darkMode
                            ? `0 16px 50px ${tier.accentColor.replace('0.4', '0.5')}, 0 5px 20px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.15)`
                            : `0 16px 50px ${tier.accentColor.replace('0.4', '0.4')}, 0 5px 20px rgba(0, 0, 0, 0.18), inset 0 1px 2px rgba(255, 255, 255, 0.35), inset 0 -1px 2px rgba(0, 0, 0, 0.1)`,
                          color: '#FFFFFF',
                          letterSpacing: '-0.005em',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)'
                        } : {
                          background: darkMode 
                            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 100%)'
                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.35) 100%)',
                          border: darkMode ? '1px solid rgba(255, 255, 255, 0.16)' : '1px solid rgba(255, 255, 255, 0.45)',
                          boxShadow: darkMode
                            ? 'inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 2px 8px rgba(0, 0, 0, 0.15)'
                            : 'inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 2px 8px rgba(0, 0, 0, 0.08)',
                          color: '#FFFFFF',
                          letterSpacing: '-0.005em'
                        }}
                        whileHover={!tier.current ? { 
                          scale: 1.02,
                          y: -4,
                          boxShadow: tier.highlight 
                            ? darkMode
                              ? `0 24px 70px ${tier.accentColor.replace('0.4', '0.7')}, 0 10px 30px rgba(0, 0, 0, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.15)`
                              : `0 24px 70px ${tier.accentColor.replace('0.4', '0.6')}, 0 10px 30px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.45), inset 0 -1px 2px rgba(0, 0, 0, 0.1)`
                            : darkMode
                              ? `inset 0 1px 1px rgba(255, 255, 255, 0.18), 0 8px 28px rgba(0, 0, 0, 0.4), 0 0 40px ${tier.accentColor.replace('0.4', '0.15')}`
                              : `inset 0 1px 1px rgba(255, 255, 255, 0.45), 0 8px 28px rgba(0, 0, 0, 0.2), 0 0 40px ${tier.accentColor.replace('0.4', '0.1')}`
                        } : {}}
                        whileTap={!tier.current ? { scale: 0.97, y: -1 } : {}}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        disabled={tier.current}
                      >
                        {/* Animated gradient background for non-highlight buttons on hover */}
                        {!tier.current && !tier.highlight && (
                          <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              background: `linear-gradient(135deg, ${tier.accentColor.replace('0.4', '0.25')}, ${tier.accentColor.replace('0.4', '0.15')})`
                            }}
                          />
                        )}

                        {/* Shimmer Effect on Hover */}
                        {!tier.current && isHovered && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{ duration: 1, repeat: 999, ease: [0.4, 0, 0.2, 1] }}
                          />
                        )}

                        {/* Glow pulse effect on hover */}
                        <AnimatePresence>
                          {!tier.current && isHovered && (
                            <motion.div
                              className="absolute inset-0 rounded-[20px]"
                              initial={{ opacity: 0 }}
                              animate={{ 
                                opacity: [0, 0.5, 0],
                                scale: [0.95, 1.05, 0.95]
                              }}
                              exit={{ opacity: 0 }}
                              transition={{ 
                                duration: 2, 
                                repeat: 999,
                                ease: "easeInOut"
                              }}
                              style={{
                                background: `radial-gradient(circle at center, ${tier.accentColor.replace('0.4', '0.4')}, transparent 70%)`,
                                filter: 'blur(12px)'
                              }}
                            />
                          )}
                        </AnimatePresence>

                        <span className="relative z-10 flex items-center justify-center gap-2.5 font-semibold tracking-tight">
                          {tier.cta}
                          {!tier.current && (
                            <motion.span
                              className="text-base"
                              animate={isHovered ? { 
                                x: [0, 5, 0],
                                opacity: [1, 0.7, 1]
                              } : { x: 0, opacity: 1 }}
                              transition={isHovered ? { 
                                duration: 1.2, 
                                repeat: 999, 
                                ease: "easeInOut" 
                              } : { duration: 0.3 }}
                            >
                              →
                            </motion.span>
                          )}
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Comparison Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mb-16"
        >
          <motion.button
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl backdrop-blur-xl border font-bold text-white"
            style={{
              background: darkMode 
                ? 'rgba(255, 255, 255, 0.08)' 
                : 'rgba(255, 255, 255, 0.25)',
              border: darkMode 
                ? '1px solid rgba(168, 85, 247, 0.3)' 
                : '1px solid rgba(255, 255, 255, 0.4)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showComparison ? 'Hide' : 'Show'} Detailed Comparison
            <motion.div
              animate={{ rotate: showComparison ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Feature Comparison Table */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-16 overflow-hidden"
            >
              <div 
                className="rounded-3xl p-8 backdrop-blur-xl border overflow-x-auto"
                style={{
                  background: darkMode 
                    ? 'rgba(255, 255, 255, 0.06)' 
                    : 'rgba(255, 255, 255, 0.2)',
                  border: darkMode 
                    ? '1px solid rgba(168, 85, 247, 0.2)' 
                    : '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <h3 className="text-2xl font-black text-white mb-8 text-center">
                  Feature Comparison
                </h3>
                <div className="min-w-[600px]">
                  {/* Header */}
                  <div className="grid grid-cols-5 gap-4 mb-6 pb-4 border-b border-white/10">
                    <div className="font-bold text-white/80 text-sm">Feature</div>
                    <div className="font-bold text-white text-center text-sm">Free</div>
                    <div className="font-bold text-white text-center text-sm">Pro</div>
                    <div className="font-bold text-white text-center text-sm">Elite</div>
                    <div className="font-bold text-white text-center text-sm">Royal</div>
                  </div>
                  {/* Rows */}
                  {comparisonFeatures.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="grid grid-cols-5 gap-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors rounded-lg"
                    >
                      <div className="text-white font-medium text-sm">{feature.name}</div>
                      <div className="text-white/70 text-center text-sm">{feature.free}</div>
                      <div className="text-white/70 text-center text-sm">{feature.pro}</div>
                      <div className="text-white/70 text-center text-sm">{feature.elite}</div>
                      <div className="text-white/70 text-center text-sm">{feature.royal}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-black text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.05 }}
                className="rounded-2xl backdrop-blur-xl border overflow-hidden"
                style={{
                  background: darkMode 
                    ? 'rgba(255, 255, 255, 0.06)' 
                    : 'rgba(255, 255, 255, 0.2)',
                  border: darkMode 
                    ? '1px solid rgba(168, 85, 247, 0.2)' 
                    : '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-white pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white/60" strokeWidth={2.5} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className={`px-6 pb-5 text-sm leading-relaxed ${
                        darkMode ? 'text-white/70' : 'text-white/80'
                      }`}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: darkMode 
                    ? 'rgba(168, 85, 247, 0.2)' 
                    : 'rgba(168, 85, 247, 0.25)'
                }}
              >
                <TrendingUp className={`w-6 h-6 ${
                  darkMode ? 'text-purple-300' : 'text-white'
                }`} strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white">100K+</div>
                <div className={`text-xs font-semibold ${
                  darkMode ? 'text-white/60' : 'text-white/70'
                }`}>
                  Active Learners
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: darkMode 
                    ? 'rgba(251, 191, 36, 0.2)' 
                    : 'rgba(251, 191, 36, 0.25)'
                }}
              >
                <Star className={`w-6 h-6 ${
                  darkMode ? 'text-amber-300' : 'text-white'
                }`} strokeWidth={2.5} fill="currentColor" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white">4.9/5</div>
                <div className={`text-xs font-semibold ${
                  darkMode ? 'text-white/60' : 'text-white/70'
                }`}>
                  Average Rating
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: darkMode 
                    ? 'rgba(16, 185, 129, 0.2)' 
                    : 'rgba(16, 185, 129, 0.25)'
                }}
              >
                <Globe className={`w-6 h-6 ${
                  darkMode ? 'text-emerald-300' : 'text-white'
                }`} strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white">25+</div>
                <div className={`text-xs font-semibold ${
                  darkMode ? 'text-white/60' : 'text-white/70'
                }`}>
                  Language Pairs
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}