// Gradient schemes for breathing orbs
export function getGradientSchemes(darkMode, animationIntensity) {
  return {
    default: {
      desktop: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(99, 102, 241, ${1.0 * animationIntensity}) 0%, rgba(99, 102, 241, ${0.70 * animationIntensity}) 30%, rgba(99, 102, 241, ${0.36 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(255, 127, 80, ${0.68 * animationIntensity}) 0%, rgba(255, 154, 118, ${0.45 * animationIntensity}) 30%, rgba(255, 178, 153, ${0.22 * animationIntensity}) 50%, transparent 70%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(236, 72, 153, ${1.0 * animationIntensity}) 0%, rgba(236, 72, 153, ${0.64 * animationIntensity}) 30%, rgba(236, 72, 153, ${0.32 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(255, 105, 180, ${0.72 * animationIntensity}) 0%, rgba(255, 130, 200, ${0.48 * animationIntensity}) 30%, rgba(255, 160, 220, ${0.24 * animationIntensity}) 50%, transparent 70%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(251, 191, 36, ${0.90 * animationIntensity}) 0%, rgba(251, 191, 36, ${0.56 * animationIntensity}) 30%, rgba(251, 191, 36, ${0.28 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(255, 193, 7, ${0.75 * animationIntensity}) 0%, rgba(255, 214, 64, ${0.50 * animationIntensity}) 30%, rgba(255, 235, 120, ${0.25 * animationIntensity}) 50%, transparent 70%)`,
        orb4: darkMode
          ? `radial-gradient(circle, rgba(20, 184, 166, ${1.0 * animationIntensity}) 0%, rgba(20, 184, 166, ${0.68 * animationIntensity}) 30%, rgba(20, 184, 166, ${0.34 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(64, 224, 208, ${0.70 * animationIntensity}) 0%, rgba(102, 235, 221, ${0.46 * animationIntensity}) 30%, rgba(140, 245, 234, ${0.23 * animationIntensity}) 50%, transparent 70%)`,
        orb5: darkMode
          ? `radial-gradient(circle, rgba(168, 85, 247, ${1.0 * animationIntensity}) 0%, rgba(168, 85, 247, ${0.76 * animationIntensity}) 30%, rgba(168, 85, 247, ${0.38 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(186, 104, 255, ${0.74 * animationIntensity}) 0%, rgba(203, 140, 255, ${0.49 * animationIntensity}) 30%, rgba(220, 176, 255, ${0.24 * animationIntensity}) 50%, transparent 70%)`
      },
      mobile: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(139, 92, 246, ${1.0 * animationIntensity}) 0%, rgba(139, 92, 246, ${1.0 * animationIntensity}) 25%, rgba(139, 92, 246, ${0.56 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(255, 77, 120, ${0.88 * animationIntensity}) 0%, rgba(255, 107, 145, ${0.60 * animationIntensity}) 25%, rgba(255, 137, 170, ${0.32 * animationIntensity}) 45%, transparent 65%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(236, 72, 153, ${1.0 * animationIntensity}) 0%, rgba(236, 72, 153, ${1.0 * animationIntensity}) 25%, rgba(236, 72, 153, ${0.50 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(255, 152, 0, ${0.90 * animationIntensity}) 0%, rgba(255, 178, 51, ${0.62 * animationIntensity}) 25%, rgba(255, 204, 102, ${0.34 * animationIntensity}) 45%, transparent 65%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(192, 132, 252, ${1.0 * animationIntensity}) 0%, rgba(192, 132, 252, ${1.0 * animationIntensity}) 25%, rgba(192, 132, 252, ${0.52 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(147, 112, 219, ${0.86 * animationIntensity}) 0%, rgba(171, 140, 230, ${0.58 * animationIntensity}) 25%, rgba(195, 168, 241, ${0.30 * animationIntensity}) 45%, transparent 65%)`
      }
    },
    ocean: {
      desktop: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(59, 130, 246, ${1.0 * animationIntensity}) 0%, rgba(59, 130, 246, ${0.70 * animationIntensity}) 30%, rgba(59, 130, 246, ${0.36 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(14, 165, 233, ${0.68 * animationIntensity}) 0%, rgba(56, 189, 248, ${0.45 * animationIntensity}) 30%, rgba(96, 165, 250, ${0.22 * animationIntensity}) 50%, transparent 70%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(6, 182, 212, ${1.0 * animationIntensity}) 0%, rgba(6, 182, 212, ${0.64 * animationIntensity}) 30%, rgba(6, 182, 212, ${0.32 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(6, 182, 212, ${0.72 * animationIntensity}) 0%, rgba(34, 211, 238, ${0.48 * animationIntensity}) 30%, rgba(103, 232, 249, ${0.24 * animationIntensity}) 50%, transparent 70%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(20, 184, 166, ${0.90 * animationIntensity}) 0%, rgba(20, 184, 166, ${0.56 * animationIntensity}) 30%, rgba(20, 184, 166, ${0.28 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(20, 184, 166, ${0.75 * animationIntensity}) 0%, rgba(45, 212, 191, ${0.50 * animationIntensity}) 30%, rgba(94, 234, 212, ${0.25 * animationIntensity}) 50%, transparent 70%)`,
        orb4: darkMode
          ? `radial-gradient(circle, rgba(14, 165, 233, ${1.0 * animationIntensity}) 0%, rgba(14, 165, 233, ${0.68 * animationIntensity}) 30%, rgba(14, 165, 233, ${0.34 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(56, 189, 248, ${0.70 * animationIntensity}) 0%, rgba(125, 211, 252, ${0.46 * animationIntensity}) 30%, rgba(186, 230, 253, ${0.23 * animationIntensity}) 50%, transparent 70%)`,
        orb5: darkMode
          ? `radial-gradient(circle, rgba(59, 130, 246, ${1.0 * animationIntensity}) 0%, rgba(59, 130, 246, ${0.76 * animationIntensity}) 30%, rgba(59, 130, 246, ${0.38 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(96, 165, 250, ${0.74 * animationIntensity}) 0%, rgba(147, 197, 253, ${0.49 * animationIntensity}) 30%, rgba(191, 219, 254, ${0.24 * animationIntensity}) 50%, transparent 70%)`
      },
      mobile: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(59, 130, 246, ${1.0 * animationIntensity}) 0%, rgba(59, 130, 246, ${1.0 * animationIntensity}) 25%, rgba(59, 130, 246, ${0.56 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(14, 165, 233, ${0.88 * animationIntensity}) 0%, rgba(56, 189, 248, ${0.60 * animationIntensity}) 25%, rgba(125, 211, 252, ${0.32 * animationIntensity}) 45%, transparent 65%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(6, 182, 212, ${1.0 * animationIntensity}) 0%, rgba(6, 182, 212, ${1.0 * animationIntensity}) 25%, rgba(6, 182, 212, ${0.50 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(6, 182, 212, ${0.90 * animationIntensity}) 0%, rgba(34, 211, 238, ${0.62 * animationIntensity}) 25%, rgba(103, 232, 249, ${0.34 * animationIntensity}) 45%, transparent 65%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(20, 184, 166, ${1.0 * animationIntensity}) 0%, rgba(20, 184, 166, ${1.0 * animationIntensity}) 25%, rgba(20, 184, 166, ${0.52 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(20, 184, 166, ${0.86 * animationIntensity}) 0%, rgba(45, 212, 191, ${0.58 * animationIntensity}) 25%, rgba(94, 234, 212, ${0.30 * animationIntensity}) 45%, transparent 65%)`
      }
    },
    sunset: {
      desktop: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(245, 158, 11, ${1.0 * animationIntensity}) 0%, rgba(245, 158, 11, ${0.70 * animationIntensity}) 30%, rgba(245, 158, 11, ${0.36 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(245, 158, 11, ${0.68 * animationIntensity}) 0%, rgba(251, 191, 36, ${0.45 * animationIntensity}) 30%, rgba(253, 224, 71, ${0.22 * animationIntensity}) 50%, transparent 70%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(239, 68, 68, ${1.0 * animationIntensity}) 0%, rgba(239, 68, 68, ${0.64 * animationIntensity}) 30%, rgba(239, 68, 68, ${0.32 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(249, 115, 22, ${0.72 * animationIntensity}) 0%, rgba(251, 146, 60, ${0.48 * animationIntensity}) 30%, rgba(253, 186, 116, ${0.24 * animationIntensity}) 50%, transparent 70%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(236, 72, 153, ${0.90 * animationIntensity}) 0%, rgba(236, 72, 153, ${0.56 * animationIntensity}) 30%, rgba(236, 72, 153, ${0.28 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(239, 68, 68, ${0.75 * animationIntensity}) 0%, rgba(248, 113, 113, ${0.50 * animationIntensity}) 30%, rgba(252, 165, 165, ${0.25 * animationIntensity}) 50%, transparent 70%)`,
        orb4: darkMode
          ? `radial-gradient(circle, rgba(251, 146, 60, ${1.0 * animationIntensity}) 0%, rgba(251, 146, 60, ${0.68 * animationIntensity}) 30%, rgba(251, 146, 60, ${0.34 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(251, 146, 60, ${0.70 * animationIntensity}) 0%, rgba(251, 191, 36, ${0.46 * animationIntensity}) 30%, rgba(252, 211, 77, ${0.23 * animationIntensity}) 50%, transparent 70%)`,
        orb5: darkMode
          ? `radial-gradient(circle, rgba(249, 115, 22, ${1.0 * animationIntensity}) 0%, rgba(249, 115, 22, ${0.76 * animationIntensity}) 30%, rgba(249, 115, 22, ${0.38 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(234, 88, 12, ${0.74 * animationIntensity}) 0%, rgba(249, 115, 22, ${0.49 * animationIntensity}) 30%, rgba(251, 146, 60, ${0.24 * animationIntensity}) 50%, transparent 70%)`
      },
      mobile: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(245, 158, 11, ${1.0 * animationIntensity}) 0%, rgba(245, 158, 11, ${1.0 * animationIntensity}) 25%, rgba(245, 158, 11, ${0.56 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(245, 158, 11, ${0.88 * animationIntensity}) 0%, rgba(251, 191, 36, ${0.60 * animationIntensity}) 25%, rgba(253, 224, 71, ${0.32 * animationIntensity}) 45%, transparent 65%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(239, 68, 68, ${1.0 * animationIntensity}) 0%, rgba(239, 68, 68, ${1.0 * animationIntensity}) 25%, rgba(239, 68, 68, ${0.50 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(249, 115, 22, ${0.90 * animationIntensity}) 0%, rgba(251, 146, 60, ${0.62 * animationIntensity}) 25%, rgba(253, 186, 116, ${0.34 * animationIntensity}) 45%, transparent 65%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(236, 72, 153, ${1.0 * animationIntensity}) 0%, rgba(236, 72, 153, ${1.0 * animationIntensity}) 25%, rgba(236, 72, 153, ${0.52 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(239, 68, 68, ${0.86 * animationIntensity}) 0%, rgba(248, 113, 113, ${0.58 * animationIntensity}) 25%, rgba(252, 165, 165, ${0.30 * animationIntensity}) 45%, transparent 65%)`
      }
    },
    forest: {
      desktop: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(5, 150, 105, ${1.0 * animationIntensity}) 0%, rgba(16, 185, 129, ${0.70 * animationIntensity}) 30%, rgba(52, 211, 153, ${0.36 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(16, 185, 129, ${0.68 * animationIntensity}) 0%, rgba(52, 211, 153, ${0.45 * animationIntensity}) 30%, rgba(110, 231, 183, ${0.22 * animationIntensity}) 50%, transparent 70%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(6, 182, 212, ${1.0 * animationIntensity}) 0%, rgba(34, 211, 238, ${0.64 * animationIntensity}) 30%, rgba(103, 232, 249, ${0.32 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(20, 184, 166, ${0.72 * animationIntensity}) 0%, rgba(45, 212, 191, ${0.48 * animationIntensity}) 30%, rgba(94, 234, 212, ${0.24 * animationIntensity}) 50%, transparent 70%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(180, 220, 60, ${0.90 * animationIntensity}) 0%, rgba(195, 230, 85, ${0.56 * animationIntensity}) 30%, rgba(210, 240, 110, ${0.28 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(195, 230, 85, ${0.75 * animationIntensity}) 0%, rgba(210, 240, 110, ${0.50 * animationIntensity}) 30%, rgba(225, 250, 140, ${0.25 * animationIntensity}) 50%, transparent 70%)`,
        orb4: darkMode
          ? `radial-gradient(circle, rgba(16, 185, 129, ${1.0 * animationIntensity}) 0%, rgba(52, 211, 153, ${0.68 * animationIntensity}) 30%, rgba(110, 231, 183, ${0.34 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(52, 211, 153, ${0.70 * animationIntensity}) 0%, rgba(110, 231, 183, ${0.46 * animationIntensity}) 30%, rgba(167, 243, 208, ${0.23 * animationIntensity}) 50%, transparent 70%)`,
        orb5: darkMode
          ? `radial-gradient(circle, rgba(6, 182, 212, ${1.0 * animationIntensity}) 0%, rgba(34, 211, 238, ${0.76 * animationIntensity}) 30%, rgba(103, 232, 249, ${0.38 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(20, 184, 166, ${0.74 * animationIntensity}) 0%, rgba(45, 212, 191, ${0.49 * animationIntensity}) 30%, rgba(94, 234, 212, ${0.24 * animationIntensity}) 50%, transparent 70%)`
      },
      mobile: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(5, 150, 105, ${1.0 * animationIntensity}) 0%, rgba(16, 185, 129, ${1.0 * animationIntensity}) 25%, rgba(52, 211, 153, ${0.56 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(16, 185, 129, ${0.88 * animationIntensity}) 0%, rgba(52, 211, 153, ${0.60 * animationIntensity}) 25%, rgba(110, 231, 183, ${0.32 * animationIntensity}) 45%, transparent 65%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(6, 182, 212, ${1.0 * animationIntensity}) 0%, rgba(34, 211, 238, ${1.0 * animationIntensity}) 25%, rgba(103, 232, 249, ${0.50 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(20, 184, 166, ${0.90 * animationIntensity}) 0%, rgba(45, 212, 191, ${0.62 * animationIntensity}) 25%, rgba(94, 234, 212, ${0.34 * animationIntensity}) 45%, transparent 65%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(180, 220, 60, ${1.0 * animationIntensity}) 0%, rgba(195, 230, 85, ${1.0 * animationIntensity}) 25%, rgba(210, 240, 110, ${0.52 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(195, 230, 85, ${0.86 * animationIntensity}) 0%, rgba(210, 240, 110, ${0.58 * animationIntensity}) 25%, rgba(225, 250, 140, ${0.30 * animationIntensity}) 45%, transparent 65%)`
      }
    },
    aurora: {
      desktop: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(139, 92, 246, ${1.0 * animationIntensity}) 0%, rgba(139, 92, 246, ${0.70 * animationIntensity}) 30%, rgba(139, 92, 246, ${0.36 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(167, 139, 250, ${0.68 * animationIntensity}) 0%, rgba(167, 139, 250, ${0.45 * animationIntensity}) 30%, rgba(167, 139, 250, ${0.22 * animationIntensity}) 50%, transparent 70%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(59, 130, 246, ${1.0 * animationIntensity}) 0%, rgba(59, 130, 246, ${0.64 * animationIntensity}) 30%, rgba(59, 130, 246, ${0.32 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(96, 165, 250, ${0.72 * animationIntensity}) 0%, rgba(96, 165, 250, ${0.48 * animationIntensity}) 30%, rgba(96, 165, 250, ${0.24 * animationIntensity}) 50%, transparent 70%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(6, 182, 212, ${0.90 * animationIntensity}) 0%, rgba(6, 182, 212, ${0.56 * animationIntensity}) 30%, rgba(6, 182, 212, ${0.28 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(34, 211, 238, ${0.75 * animationIntensity}) 0%, rgba(34, 211, 238, ${0.50 * animationIntensity}) 30%, rgba(34, 211, 238, ${0.25 * animationIntensity}) 50%, transparent 70%)`,
        orb4: darkMode
          ? `radial-gradient(circle, rgba(99, 102, 241, ${1.0 * animationIntensity}) 0%, rgba(99, 102, 241, ${0.68 * animationIntensity}) 30%, rgba(99, 102, 241, ${0.34 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(129, 140, 248, ${0.70 * animationIntensity}) 0%, rgba(129, 140, 248, ${0.46 * animationIntensity}) 30%, rgba(129, 140, 248, ${0.23 * animationIntensity}) 50%, transparent 70%)`,
        orb5: darkMode
          ? `radial-gradient(circle, rgba(168, 85, 247, ${1.0 * animationIntensity}) 0%, rgba(168, 85, 247, ${0.76 * animationIntensity}) 30%, rgba(168, 85, 247, ${0.38 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(192, 132, 252, ${0.74 * animationIntensity}) 0%, rgba(192, 132, 252, ${0.49 * animationIntensity}) 30%, rgba(192, 132, 252, ${0.24 * animationIntensity}) 50%, transparent 70%)`
      },
      mobile: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(139, 92, 246, ${1.0 * animationIntensity}) 0%, rgba(139, 92, 246, ${1.0 * animationIntensity}) 25%, rgba(139, 92, 246, ${0.56 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(167, 139, 250, ${0.88 * animationIntensity}) 0%, rgba(167, 139, 250, ${0.60 * animationIntensity}) 25%, rgba(167, 139, 250, ${0.32 * animationIntensity}) 45%, transparent 65%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(59, 130, 246, ${1.0 * animationIntensity}) 0%, rgba(59, 130, 246, ${1.0 * animationIntensity}) 25%, rgba(59, 130, 246, ${0.50 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(96, 165, 250, ${0.90 * animationIntensity}) 0%, rgba(96, 165, 250, ${0.62 * animationIntensity}) 25%, rgba(96, 165, 250, ${0.34 * animationIntensity}) 45%, transparent 65%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(6, 182, 212, ${1.0 * animationIntensity}) 0%, rgba(6, 182, 212, ${1.0 * animationIntensity}) 25%, rgba(6, 182, 212, ${0.52 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(34, 211, 238, ${0.86 * animationIntensity}) 0%, rgba(34, 211, 238, ${0.58 * animationIntensity}) 25%, rgba(34, 211, 238, ${0.30 * animationIntensity}) 45%, transparent 65%)`
      }
    },
    miami: {
      desktop: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(236, 72, 153, ${1.0 * animationIntensity}) 0%, rgba(236, 72, 153, ${0.76 * animationIntensity}) 30%, rgba(236, 72, 153, ${0.38 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(244, 114, 182, ${0.72 * animationIntensity}) 0%, rgba(244, 114, 182, ${0.48 * animationIntensity}) 30%, rgba(244, 114, 182, ${0.24 * animationIntensity}) 50%, transparent 70%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(192, 38, 211, ${1.0 * animationIntensity}) 0%, rgba(192, 38, 211, ${0.72 * animationIntensity}) 30%, rgba(192, 38, 211, ${0.36 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(217, 70, 239, ${0.75 * animationIntensity}) 0%, rgba(217, 70, 239, ${0.50 * animationIntensity}) 30%, rgba(217, 70, 239, ${0.25 * animationIntensity}) 50%, transparent 70%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(59, 130, 246, ${1.0 * animationIntensity}) 0%, rgba(59, 130, 246, ${0.68 * animationIntensity}) 30%, rgba(59, 130, 246, ${0.34 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(96, 165, 250, ${0.78 * animationIntensity}) 0%, rgba(96, 165, 250, ${0.52 * animationIntensity}) 30%, rgba(96, 165, 250, ${0.26 * animationIntensity}) 50%, transparent 70%)`,
        orb4: darkMode
          ? `radial-gradient(circle, rgba(217, 70, 239, ${1.0 * animationIntensity}) 0%, rgba(217, 70, 239, ${0.66 * animationIntensity}) 30%, rgba(217, 70, 239, ${0.32 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(232, 121, 249, ${0.70 * animationIntensity}) 0%, rgba(232, 121, 249, ${0.46 * animationIntensity}) 30%, rgba(232, 121, 249, ${0.23 * animationIntensity}) 50%, transparent 70%)`,
        orb5: darkMode
          ? `radial-gradient(circle, rgba(168, 85, 247, ${1.0 * animationIntensity}) 0%, rgba(168, 85, 247, ${0.70 * animationIntensity}) 30%, rgba(168, 85, 247, ${0.36 * animationIntensity}) 50%, transparent 70%)`
          : `radial-gradient(circle, rgba(192, 132, 252, ${0.74 * animationIntensity}) 0%, rgba(192, 132, 252, ${0.49 * animationIntensity}) 30%, rgba(192, 132, 252, ${0.24 * animationIntensity}) 50%, transparent 70%)`
      },
      mobile: {
        orb1: darkMode
          ? `radial-gradient(circle, rgba(236, 72, 153, ${1.0 * animationIntensity}) 0%, rgba(236, 72, 153, ${1.0 * animationIntensity}) 25%, rgba(236, 72, 153, ${0.58 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(244, 114, 182, ${0.90 * animationIntensity}) 0%, rgba(244, 114, 182, ${0.62 * animationIntensity}) 25%, rgba(244, 114, 182, ${0.34 * animationIntensity}) 45%, transparent 65%)`,
        orb2: darkMode
          ? `radial-gradient(circle, rgba(192, 38, 211, ${1.0 * animationIntensity}) 0%, rgba(192, 38, 211, ${1.0 * animationIntensity}) 25%, rgba(192, 38, 211, ${0.56 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(217, 70, 239, ${0.92 * animationIntensity}) 0%, rgba(217, 70, 239, ${0.64 * animationIntensity}) 25%, rgba(217, 70, 239, ${0.36 * animationIntensity}) 45%, transparent 65%)`,
        orb3: darkMode
          ? `radial-gradient(circle, rgba(59, 130, 246, ${1.0 * animationIntensity}) 0%, rgba(59, 130, 246, ${1.0 * animationIntensity}) 25%, rgba(59, 130, 246, ${0.54 * animationIntensity}) 45%, transparent 65%)`
          : `radial-gradient(circle, rgba(96, 165, 250, ${0.88 * animationIntensity}) 0%, rgba(96, 165, 250, ${0.60 * animationIntensity}) 25%, rgba(96, 165, 250, ${0.32 * animationIntensity}) 45%, transparent 65%)`
      }
    }
  };
}

// Hue rotation ranges for rave mode
export function getHueRotationRanges() {
  return {
    default: { orb1: [0, 30, 60, 30, 0], orb2: [0, -45, -90, -45, 0], orb3: [0, 90, 180, 90, 0], orb4: [0, 60, 120, 60, 0], orb5: [0, -60, -120, -60, 0] },
    ocean: { orb1: [0, 25, 50, 25, 0], orb2: [0, -30, -60, -30, 0], orb3: [0, 35, 70, 35, 0], orb4: [0, 40, 80, 40, 0], orb5: [0, -45, -90, -45, 0] },
    sunset: { orb1: [0, -8, -16, -8, 0], orb2: [0, 10, 20, 10, 0], orb3: [0, -12, -24, -12, 0], orb4: [0, 8, 16, 8, 0], orb5: [0, -10, -20, -10, 0] },
    forest: { orb1: [0, 35, 70, 35, 0], orb2: [0, 40, 80, 40, 0], orb3: [0, 50, 100, 50, 0], orb4: [0, 45, 90, 45, 0], orb5: [0, -50, -100, -50, 0] },
    aurora: { orb1: [0, -40, -80, -40, 0], orb2: [0, 50, 100, 50, 0], orb3: [0, -35, -70, -35, 0], orb4: [0, 45, 90, 45, 0], orb5: [0, -55, -110, -55, 0] },
    miami: { orb1: [0, -30, -60, -30, 0], orb2: [0, 35, 70, 35, 0], orb3: [0, -40, -80, -40, 0], orb4: [0, 40, 80, 40, 0], orb5: [0, -45, -90, -45, 0] }
  };
}