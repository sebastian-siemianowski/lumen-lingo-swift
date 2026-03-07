import SwiftUI
import SwiftData
import Foundation

// MARK: - FlashCards Game View

/// Interactive flashcard game with 3D card flip animation,
/// "Got It" / "Still Learning" self-assessment, and glassmorphic design.
struct FlashCardsView: View {
    let categoryId: String

    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss
    @Environment(AudioService.self) private var audioService
    @Environment(HapticsService.self) private var hapticsService
    @Environment(ContentLoader.self) private var contentLoader

    @Binding var hideTabBar: Bool

    @Query private var profiles: [UserProfile]
    @Query private var languagePrefs: [LanguagePreference]

    @State private var words: [FlashcardWord] = []
    @State private var currentIndex: Int = 0
    @State private var isFlipped: Bool = false
    @State private var score: Int = 0
    @State private var correctCount: Int = 0
    @State private var wrongCount: Int = 0
    @State private var streak: Int = 0
    @State private var isGameComplete: Bool = false
    @State private var showButtons: Bool = false
    @State private var cardTransitionId: UUID = UUID()
    @State private var isLoading: Bool = true
    @State private var categoryName: String = ""
    @State private var successAura: Bool = false
    @State private var wrongFlash: Bool = false

    // Animated floating icon states
    @State private var frontGlowPhase: CGFloat = 0
    @State private var frontGlowPhase2: CGFloat = 0
    @State private var sparkleRotation: Double = 0
    @State private var sparkleScale: CGFloat = 1.0
    @State private var sparkleOpacity: Double = 0.55
    @State private var bulbScale: CGFloat = 1.0
    @State private var bulbOpacity: Double = 0.5
    @State private var cloudOffset: CGFloat = 0
    @State private var cloudOpacity: Double = 0.4
    @State private var moonOffset: CGFloat = 0
    @State private var moonOpacity: Double = 0.45
    @State private var moonRotation: Double = 0
    @State private var windOffset: CGFloat = 0
    @State private var windOpacity: Double = 0.35
    // Back side animated states
    @State private var backGlowPhase: CGFloat = 0
    @State private var backGlowPhase2: CGFloat = 0
    @State private var starRotation: Double = 0
    @State private var starScale: CGFloat = 1.0
    @State private var starOpacity: Double = 0.6
    @State private var heartScale: CGFloat = 1.0
    @State private var heartOpacity: Double = 0.55
    @State private var flowerRotation: Double = 0
    @State private var flowerScale: CGFloat = 1.0
    @State private var flowerOffset: CGFloat = 0
    @State private var flowerOpacity: Double = 0.6
    @State private var backSparkleRotation: Double = 0
    @State private var backSparkleScale: CGFloat = 1.0
    @State private var backSparkleOffset: CGFloat = 0
    @State private var backSparkleOpacity: Double = 0.55
    @State private var boltScale: CGFloat = 1.0
    @State private var boltRotation: Double = 0
    @State private var boltOpacity: Double = 0.55

    private var currentWord: FlashcardWord? {
        guard currentIndex < words.count else { return nil }
        return words[currentIndex]
    }

    private var progress: Double {
        guard !words.isEmpty else { return 0 }
        return Double(currentIndex) / Double(words.count)
    }

    var body: some View {
        ZStack {
            if isLoading {
                loadingView
            } else if isGameComplete {
                gameCompleteView
            } else if let word = currentWord {
                gameplayView(word: word)
            } else {
                emptyStateView
            }
        }
        .cosmicBackground()
        .navigationBarBackButtonHidden()
        .toolbar(.hidden, for: .navigationBar)
        .onAppear {
            hideTabBar = true
            loadContent()
        }
        .onDisappear {
            hideTabBar = false
        }
    }

    // MARK: - Loading

    private var loadingView: some View {
        VStack(spacing: 20) {
            ProgressView()
                .scaleEffect(1.5)
                .tint(.white)
            Text("Loading cards...")
                .font(.headline)
                .foregroundStyle(.white.opacity(0.7))
        }
    }

    // MARK: - Gameplay

    private func gameplayView(word: FlashcardWord) -> some View {
        ZStack {
            VStack(spacing: 0) {
                // Exercise header
                exerciseHeader

                Spacer()

                // Flashcard
                flashcard(word: word)
                    .id(cardTransitionId)
                    .transition(.asymmetric(
                        insertion: .scale(scale: 0.9).combined(with: .opacity),
                        removal: .scale(scale: 0.95).combined(with: .opacity)
                    ))
                    .animation(.spring(response: 0.5, dampingFraction: 0.8), value: cardTransitionId)

                // Action buttons (appear after flip)
                if showButtons {
                    actionButtons
                        .transition(.move(edge: .bottom).combined(with: .opacity))
                }

                Spacer()
            }
            .padding(.horizontal, 20)

            // Success aura overlay
            if successAura {
                successAuraOverlay
                    .transition(.opacity)
                    .allowsHitTesting(false)
            }

            // Wrong flash overlay
            if wrongFlash {
                wrongFlashOverlay
                    .transition(.opacity)
                    .allowsHitTesting(false)
            }
        }
    }

    // MARK: - Success Aura Overlay

    private var successAuraOverlay: some View {
        ZStack {
            // Outer radial green/gold glow
            RadialGradient(
                colors: [
                    .green.opacity(0.25),
                    Color(hex: "#22c55e").opacity(0.12),
                    .yellow.opacity(0.06),
                    .clear
                ],
                center: .center,
                startRadius: 40,
                endRadius: UIScreen.main.bounds.width * 0.7
            )
            .ignoresSafeArea()

            // Inner golden ring
            Circle()
                .strokeBorder(
                    AngularGradient(
                        colors: [.green, .yellow, .green.opacity(0.5), .yellow, .green],
                        center: .center
                    ),
                    lineWidth: 3
                )
                .frame(width: 260, height: 260)
                .opacity(0.4)
                .scaleEffect(successAura ? 1.3 : 0.5)

            // Sparkle particles
            ForEach(0..<8, id: \.self) { i in
                Circle()
                    .fill(.yellow)
                    .frame(width: 4, height: 4)
                    .offset(y: -130)
                    .rotationEffect(.degrees(Double(i) * 45))
                    .opacity(successAura ? 0 : 0.8)
                    .scaleEffect(successAura ? 2 : 0.5)
            }
        }
    }

    // MARK: - Wrong Flash Overlay

    private var wrongFlashOverlay: some View {
        RoundedRectangle(cornerRadius: 28)
            .fill(.red.opacity(0.08))
            .overlay(
                RoundedRectangle(cornerRadius: 28)
                    .strokeBorder(.red.opacity(0.2), lineWidth: 2)
            )
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .padding(20)
            .ignoresSafeArea()
    }

    // MARK: - Exercise Header

    private var exerciseHeader: some View {
        VStack(spacing: 12) {
            HStack {
                Button {
                    dismiss()
                } label: {
                    HStack(spacing: 6) {
                        Image(systemName: "chevron.left")
                        Text("Back")
                    }
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.7))
                }

                Spacer()

                Text(categoryName)
                    .font(.subheadline.bold())
                    .foregroundStyle(.white)

                Spacer()

                // Score badge
                HStack(spacing: 4) {
                    Image(systemName: "bolt.fill")
                        .foregroundStyle(.yellow)
                    Text("\(score)")
                        .font(.subheadline.bold())
                        .foregroundStyle(.white)
                }
                .padding(.horizontal, 10)
                .padding(.vertical, 5)
                .background(Capsule().fill(.white.opacity(0.1)))
            }

            // Progress bar
            AnimatedProgressBar(
                progress: progress * 100,
                height: 4,
                gradient: [Color(hex: "#667eea"), Color(hex: "#06b6d4"), Color(hex: "#0d9488")]
            )

            // Stats badges
            HStack(spacing: 16) {
                statPill(icon: "checkmark", value: "\(correctCount)", color: .green)
                statPill(icon: "xmark", value: "\(wrongCount)", color: .orange)
                if streak > 0 {
                    statPill(icon: "flame.fill", value: "\(streak)", color: .yellow)
                }
                Spacer()
                Text("\(currentIndex + 1)/\(words.count)")
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.5))
            }
        }
        .padding(.top, 8)
    }

    private func statPill(icon: String, value: String, color: Color) -> some View {
        HStack(spacing: 3) {
            Image(systemName: icon)
                .font(.system(size: 10, weight: .bold))
                .foregroundStyle(color)
            Text(value)
                .font(.caption2.bold())
                .foregroundStyle(.white.opacity(0.8))
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 3)
        .background(Capsule().fill(color.opacity(0.15)))
    }

    // MARK: - Flashcard

    @State private var floatPhase: CGFloat = 0
    @State private var rippleScale: CGFloat = 0
    @State private var showRipple: Bool = false

    private func flashcard(word: FlashcardWord) -> some View {
        ZStack {
            // Ripple effect on flip
            if showRipple {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [
                                Color(hex: "#c084fc").opacity(0.4),
                                Color(hex: "#8b5cf6").opacity(0.2),
                                .clear
                            ],
                            center: .center,
                            startRadius: 0,
                            endRadius: 175
                        )
                    )
                    .scaleEffect(rippleScale)
                    .opacity(1 - rippleScale)
                    .blur(radius: 35 * (1 - rippleScale))
                    .allowsHitTesting(false)
            }

            if !isFlipped {
                cardFront(word: word)
                    .rotation3DEffect(.degrees(0), axis: (x: 0, y: 1, z: 0))
            } else {
                cardBack(word: word)
                    .rotation3DEffect(.degrees(0), axis: (x: 0, y: 1, z: 0))
            }
        }
        .frame(maxWidth: 500, minHeight: 340)
        // Subtle floating animation (React: y: [0, -3, 0])
        .offset(y: Foundation.sin(Double(floatPhase)) * 3)
        .onTapGesture {
            flipCard()
        }
        .rotation3DEffect(
            .degrees(isFlipped ? 180 : 0),
            axis: (x: 0, y: 1, z: 0),
            perspective: 0.4
        )
        .animation(.spring(response: 0.7, dampingFraction: 0.75), value: isFlipped)
        .onAppear {
            withAnimation(.easeInOut(duration: 4).repeatForever(autoreverses: true)) {
                floatPhase = .pi * 2
            }
        }
    }

    private func cardFront(word: FlashcardWord) -> some View {
        ZStack {
            // Chromatic edge glows — living glass (4-direction inset shadows from React)
            RoundedRectangle(cornerRadius: 32)
                .fill(.clear)
                .shadow(color: Color(hex: "#8b5cf6").opacity(0.12), radius: 8, x: 0, y: 1)
                .shadow(color: Color(hex: "#a855f7").opacity(0.10), radius: 8, x: 0, y: -1)
                .shadow(color: Color(hex: "#6366f1").opacity(0.10), radius: 8, x: 1, y: 0)
                .shadow(color: Color(hex: "#c084fc").opacity(0.08), radius: 8, x: -1, y: 0)
                .allowsHitTesting(false)

            // Animated breathing radial glow — top-left indigo
            Circle()
                .fill(Color(hex: "#6366f1").opacity(0.08))
                .frame(width: 200, height: 200)
                .blur(radius: 60)
                .offset(x: -80, y: -60)
                .opacity(0.4 + frontGlowPhase * 0.2)
                .clipShape(RoundedRectangle(cornerRadius: 32))
                .allowsHitTesting(false)

            // Animated breathing radial glow — bottom-right purple
            Circle()
                .fill(Color(hex: "#a855f7").opacity(0.07))
                .frame(width: 200, height: 200)
                .blur(radius: 60)
                .offset(x: 80, y: 60)
                .opacity(0.3 + frontGlowPhase2 * 0.25)
                .clipShape(RoundedRectangle(cornerRadius: 32))
                .allowsHitTesting(false)

            // Floating decorative icons
            // Top-left: Sparkles — rotating continuously with golden glow
            Image(systemName: "sparkles")
                .font(.system(size: 24, weight: .medium))
                .foregroundStyle(Color(hex: "#fde047").opacity(0.85))
                .shadow(color: Color(hex: "#fbbf24").opacity(0.7), radius: 12)
                .shadow(color: Color(hex: "#fde047").opacity(0.5), radius: 24)
                .shadow(color: Color(hex: "#fb923c").opacity(0.3), radius: 36)
                .rotationEffect(.degrees(sparkleRotation))
                .scaleEffect(sparkleScale)
                .opacity(sparkleOpacity)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .padding(.top, 28)
                .padding(.leading, 28)
                .allowsHitTesting(false)

            // Bottom-right: Lightbulb — breathing with golden glow
            Image(systemName: "lightbulb.fill")
                .font(.system(size: 22, weight: .medium))
                .foregroundStyle(Color(hex: "#fde68a").opacity(0.85))
                .shadow(color: Color(hex: "#fde047").opacity(0.5), radius: 10)
                .shadow(color: Color(hex: "#fbbf24").opacity(0.3), radius: 20)
                .scaleEffect(bulbScale)
                .opacity(bulbOpacity)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .bottomTrailing)
                .padding(.bottom, 28)
                .padding(.trailing, 28)
                .allowsHitTesting(false)

            // Dark mode only: Cloud, Moon, Wind floating icons
            if colorScheme == .dark {
                // Top-right: Cloud with purple glow
                Image(systemName: "cloud.fill")
                    .font(.system(size: 28, weight: .light))
                    .foregroundStyle(.white.opacity(0.8))
                    .shadow(color: Color(hex: "#8b5cf6").opacity(0.6), radius: 12)
                    .shadow(color: Color(hex: "#a855f7").opacity(0.4), radius: 24)
                    .offset(y: cloudOffset)
                    .opacity(cloudOpacity)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topTrailing)
                    .padding(.top, 40)
                    .padding(.trailing, 48)
                    .allowsHitTesting(false)

                // Bottom-left: Moon with purple glow
                Image(systemName: "moon.fill")
                    .font(.system(size: 24, weight: .medium))
                    .foregroundStyle(.white.opacity(0.85))
                    .shadow(color: Color(hex: "#c084fc").opacity(0.7), radius: 14)
                    .shadow(color: Color(hex: "#a855f7").opacity(0.5), radius: 28)
                    .shadow(color: Color(hex: "#8b5cf6").opacity(0.3), radius: 42)
                    .offset(y: moonOffset)
                    .rotationEffect(.degrees(moonRotation))
                    .opacity(moonOpacity)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .bottomLeading)
                    .padding(.bottom, 48)
                    .padding(.leading, 40)
                    .allowsHitTesting(false)

                // Mid-left: Wind with purple glow
                Image(systemName: "wind")
                    .font(.system(size: 22, weight: .light))
                    .foregroundStyle(.white.opacity(0.8))
                    .shadow(color: Color(hex: "#8b5cf6").opacity(0.5), radius: 14)
                    .shadow(color: Color(hex: "#a855f7").opacity(0.3), radius: 28)
                    .offset(x: windOffset)
                    .opacity(windOpacity)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .leading)
                    .padding(.leading, 32)
                    .allowsHitTesting(false)
            }

            VStack(spacing: 20) {
                Spacer()

                // Main word
                Text(word.front)
                    .font(.system(size: dynamicFontSize(for: word.front), weight: .bold))
                    .foregroundStyle(.white)
                    .multilineTextAlignment(.center)
                    .shadow(color: .black.opacity(0.8), radius: 4, y: 2)
                    .shadow(color: Color(hex: "#667eea").opacity(0.4), radius: 15)
                    .shadow(color: Color(hex: "#8b5cf6").opacity(0.4), radius: 12)

                // Example translation
                if let example = word.exampleTranslation, !example.isEmpty {
                    Text(example)
                        .font(.subheadline)
                        .foregroundStyle(.white.opacity(0.55))
                        .italic()
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 20)
                        .shadow(color: .black.opacity(0.6), radius: 10)
                        .shadow(color: Color(hex: "#8b5cf6").opacity(0.3), radius: 20)
                }

                Spacer()

                // Tap prompt with breathing animation
                HStack(spacing: 6) {
                    Image(systemName: "arrow.counterclockwise")
                        .shadow(color: .white.opacity(0.4), radius: 4)
                    Text("Tap to see meaning")
                }
                .font(.caption)
                .foregroundStyle(.white.opacity(0.4))
                .padding(.bottom, 16)
            }
            .padding(24)
        }
        .frame(maxWidth: .infinity, minHeight: 340)
        .background(
            ZStack {
                RoundedRectangle(cornerRadius: 32)
                    .fill(.ultraThinMaterial)

                RoundedRectangle(cornerRadius: 32)
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#1e1e28").opacity(0.65), Color(hex: "#14141e").opacity(0.55)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )

                // Glass refraction line at top (from React)
                VStack {
                    Rectangle()
                        .fill(.white.opacity(0.12))
                        .frame(height: 0.5)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 32))

                // Inner highlight border
                RoundedRectangle(cornerRadius: 32)
                    .strokeBorder(.white.opacity(0.12), lineWidth: 1)

                // Inset top highlight glow
                VStack {
                    RoundedRectangle(cornerRadius: 32)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.20), .clear],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )
                        .frame(height: 3)
                        .blur(radius: 1.5)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 32))
            }
        )
        .shadow(color: Color(hex: "#a855f7").opacity(0.08), radius: 30)
        .shadow(color: Color(hex: "#667eea").opacity(0.12), radius: 30, y: 10)
        .onAppear { startFrontAnimations() }
    }

    private func cardBack(word: FlashcardWord) -> some View {
        ZStack {
            // Chromatic edge glows — answer side (4-direction: emerald + amber)
            RoundedRectangle(cornerRadius: 32)
                .fill(.clear)
                .shadow(color: Color(hex: "#34d399").opacity(0.12), radius: 8, x: 0, y: 1)
                .shadow(color: Color(hex: "#fb923c").opacity(0.10), radius: 8, x: 0, y: -1)
                .shadow(color: Color(hex: "#10b981").opacity(0.10), radius: 8, x: 1, y: 0)
                .shadow(color: Color(hex: "#fde047").opacity(0.08), radius: 8, x: -1, y: 0)
                .allowsHitTesting(false)

            // Animated breathing radial glow — top-left emerald
            Circle()
                .fill(Color(hex: "#10b981").opacity(0.12))
                .frame(width: 200, height: 200)
                .blur(radius: 60)
                .offset(x: -60, y: -50)
                .opacity(0.5 + backGlowPhase * 0.3)
                .clipShape(RoundedRectangle(cornerRadius: 32))
                .allowsHitTesting(false)

            // Animated breathing radial glow — bottom-right amber
            Circle()
                .fill(Color(hex: "#f59e0b").opacity(0.06))
                .frame(width: 200, height: 200)
                .blur(radius: 60)
                .offset(x: 60, y: 50)
                .opacity(0.4 + backGlowPhase2 * 0.3)
                .clipShape(RoundedRectangle(cornerRadius: 32))
                .allowsHitTesting(false)

            // Top-left: Star — rotating continuously with emerald glow
            Image(systemName: "star.fill")
                .font(.system(size: 20, weight: .medium))
                .foregroundStyle(.white.opacity(0.9))
                .shadow(color: Color(hex: "#34d399").opacity(0.6), radius: 12)
                .shadow(color: Color(hex: "#10b981").opacity(0.4), radius: 24)
                .rotationEffect(.degrees(starRotation))
                .scaleEffect(starScale)
                .opacity(starOpacity)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .padding(.top, 28)
                .padding(.leading, 28)
                .allowsHitTesting(false)

            // Bottom-right: Heart — breathing with amber glow
            Image(systemName: "heart.fill")
                .font(.system(size: 18, weight: .medium))
                .foregroundStyle(Color(hex: "#fde68a").opacity(0.85))
                .shadow(color: Color(hex: "#f59e0b").opacity(0.5), radius: 10)
                .shadow(color: Color(hex: "#fbbf24").opacity(0.3), radius: 20)
                .scaleEffect(heartScale)
                .opacity(heartOpacity)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .bottomTrailing)
                .padding(.bottom, 28)
                .padding(.trailing, 28)
                .allowsHitTesting(false)

            // Dark mode only: Flower, Sparkles, Bolt
            if colorScheme == .dark {
                // Top-right: Leaf/Flower with emerald glow
                Image(systemName: "leaf.fill")
                    .font(.system(size: 26, weight: .medium))
                    .foregroundStyle(.white.opacity(0.9))
                    .shadow(color: Color(hex: "#10b981").opacity(0.6), radius: 15)
                    .shadow(color: Color(hex: "#34d399").opacity(0.4), radius: 30)
                    .rotationEffect(.degrees(flowerRotation))
                    .scaleEffect(flowerScale)
                    .offset(y: flowerOffset)
                    .opacity(flowerOpacity)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topTrailing)
                    .padding(.top, 48)
                    .padding(.trailing, 40)
                    .allowsHitTesting(false)

                // Bottom-left: Sparkles with emerald glow
                Image(systemName: "sparkles")
                    .font(.system(size: 22, weight: .medium))
                    .foregroundStyle(.white.opacity(0.85))
                    .shadow(color: Color(hex: "#34d399").opacity(0.5), radius: 12)
                    .shadow(color: Color(hex: "#a7f3d0").opacity(0.35), radius: 24)
                    .rotationEffect(.degrees(backSparkleRotation))
                    .scaleEffect(backSparkleScale)
                    .offset(y: backSparkleOffset)
                    .opacity(backSparkleOpacity)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .bottomLeading)
                    .padding(.bottom, 40)
                    .padding(.leading, 48)
                    .allowsHitTesting(false)

                // Mid-right: Bolt with amber glow
                Image(systemName: "bolt.fill")
                    .font(.system(size: 20, weight: .medium))
                    .foregroundStyle(Color(hex: "#fde68a"))
                    .shadow(color: Color(hex: "#f59e0b").opacity(0.5), radius: 10)
                    .shadow(color: Color(hex: "#fbbf24").opacity(0.35), radius: 20)
                    .scaleEffect(boltScale)
                    .rotationEffect(.degrees(boltRotation))
                    .opacity(boltOpacity)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .trailing)
                    .padding(.trailing, 32)
                    .allowsHitTesting(false)
            }

            VStack(spacing: 16) {
                Spacer()

                // Target word (answer) — dramatic reveal
                Text(word.back)
                    .font(.system(size: dynamicFontSize(for: word.back), weight: .bold))
                    .foregroundStyle(.white)
                    .multilineTextAlignment(.center)
                    .shadow(color: .black.opacity(0.8), radius: 4, y: 2)
                    .shadow(color: Color(hex: "#34d399").opacity(0.4), radius: 12)
                    .shadow(color: Color(hex: "#10b981").opacity(0.4), radius: 15)

                // Emerald divider
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [.clear, Color(hex: "#34d399").opacity(0.5), .clear],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: 96, height: 2)
                    .shadow(color: Color(hex: "#34d399").opacity(0.3), radius: 20)

                // Example sentence
                if let example = word.example, !example.isEmpty {
                    Text("\"\(example)\"")
                        .font(.subheadline.weight(.medium))
                        .foregroundStyle(.white.opacity(0.95))
                        .italic()
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 20)
                        .shadow(color: .black.opacity(0.6), radius: 10)
                        .shadow(color: Color(hex: "#34d399").opacity(0.25), radius: 20)
                }

                // Translation
                if let translation = word.exampleTranslation, !translation.isEmpty {
                    Text("(\(translation))")
                        .font(.caption.weight(.medium))
                        .foregroundStyle(.white.opacity(0.80))
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 20)
                        .shadow(color: .black.opacity(0.5), radius: 8)
                }

                Spacer()

                // Word pair footer
                HStack(spacing: 8) {
                    Text(word.front)
                        .font(.caption.weight(.medium))
                        .foregroundStyle(.white.opacity(0.85))
                    Image(systemName: "arrow.right")
                        .font(.caption2)
                        .foregroundStyle(.white.opacity(0.5))
                    Text(word.back)
                        .font(.caption.bold())
                        .foregroundStyle(Color(hex: "#34d399").opacity(0.9))
                }
                .shadow(color: .black.opacity(0.5), radius: 8)
                .padding(.bottom, 12)
            }
            .padding(24)
        }
        .frame(maxWidth: .infinity, minHeight: 340)
        .background(
            ZStack {
                RoundedRectangle(cornerRadius: 32)
                    .fill(.ultraThinMaterial)

                // Stronger emerald glass tint (React: rgba(6, 78, 59, 0.65))
                RoundedRectangle(cornerRadius: 32)
                    .fill(
                        LinearGradient(
                            colors: [
                                Color(red: 6/255, green: 78/255, blue: 59/255).opacity(0.65),
                                Color(red: 2/255, green: 44/255, blue: 34/255).opacity(0.55)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )

                // Glass refraction line at top
                VStack {
                    Rectangle()
                        .fill(.white.opacity(0.12))
                        .frame(height: 0.5)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 32))

                // Inner highlight border — emerald tint
                RoundedRectangle(cornerRadius: 32)
                    .strokeBorder(
                        LinearGradient(
                            colors: [
                                Color(hex: "#34d399").opacity(0.25),
                                .white.opacity(0.12)
                            ],
                            startPoint: .top,
                            endPoint: .bottom
                        ),
                        lineWidth: 1
                    )

                // Inset top highlight
                VStack {
                    RoundedRectangle(cornerRadius: 32)
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.20), .clear],
                                startPoint: .top,
                                endPoint: .center
                            )
                        )
                        .frame(height: 3)
                        .blur(radius: 1.5)
                    Spacer()
                }
                .clipShape(RoundedRectangle(cornerRadius: 32))
            }
        )
        .shadow(color: Color(hex: "#34d399").opacity(0.10), radius: 30)
        .shadow(color: Color(hex: "#10b981").opacity(0.12), radius: 30, y: 10)
        .rotation3DEffect(.degrees(180), axis: (x: 0, y: 1, z: 0))
        .onAppear { startBackAnimations() }
    }

    // MARK: - Action Buttons

    private var actionButtons: some View {
        HStack(spacing: 16) {
            // Still Learning
            Button {
                handleAnswer(correct: false)
            } label: {
                HStack(spacing: 10) {
                    Image(systemName: "arrow.counterclockwise")
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundStyle(.orange)
                        .frame(width: 36, height: 36)
                        .background(
                            Circle()
                                .fill(.orange.opacity(0.15))
                                .overlay(
                                    Circle()
                                        .strokeBorder(.orange.opacity(0.2), lineWidth: 1)
                                )
                        )

                    Text("Still Learning")
                        .font(.subheadline.bold())
                        .foregroundStyle(.white)
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 14)
                .frame(maxWidth: .infinity)
                .background(
                    GlassCardBackground(
                        cornerRadius: 28,
                        borderColor: .orange,
                        borderOpacity: 0.2,
                        tintColor: .orange
                    )
                )
                .clipShape(RoundedRectangle(cornerRadius: 28))
            }
            .buttonStyle(ScaleButtonStyle())

            // Got It
            Button {
                handleAnswer(correct: true)
            } label: {
                HStack(spacing: 10) {
                    Image(systemName: "checkmark")
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundStyle(.green)
                        .frame(width: 36, height: 36)
                        .background(
                            Circle()
                                .fill(.green.opacity(0.15))
                                .overlay(
                                    Circle()
                                        .strokeBorder(.green.opacity(0.2), lineWidth: 1)
                                )
                        )

                    Text("Got It")
                        .font(.subheadline.bold())
                        .foregroundStyle(.white)
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 14)
                .frame(maxWidth: .infinity)
                .background(
                    GlassCardBackground(
                        cornerRadius: 28,
                        borderColor: .green,
                        borderOpacity: 0.2,
                        tintColor: .green
                    )
                )
                .clipShape(RoundedRectangle(cornerRadius: 28))
            }
            .buttonStyle(ScaleButtonStyle())
        }
        .padding(.top, 20)
    }

    // MARK: - Game Complete

    private var gameCompleteView: some View {
        GameCompleteView(
            score: score,
            correctAnswers: correctCount,
            wrongAnswers: wrongCount,
            totalQuestions: words.count,
            gameType: .flashCards,
            categoryName: categoryName,
            onPlayAgain: { resetGame() },
            onDismiss: { dismiss() }
        )
    }

    // MARK: - Empty State

    private var emptyStateView: some View {
        VStack(spacing: 16) {
            Image(systemName: "tray")
                .font(.system(size: 48))
                .foregroundStyle(.white.opacity(0.4))
            Text("No cards available")
                .font(.headline)
                .foregroundStyle(.white.opacity(0.7))
            Button("Go Back") { dismiss() }
                .buttonStyle(.bordered)
                .tint(.white)
        }
    }

    // MARK: - Logic

    private func loadContent() {
        let langPref = languagePrefs.first
        let source = langPref?.sourceLanguage ?? SupportedLanguage.english.rawValue
        let target = langPref?.targetLanguage ?? SupportedLanguage.spanish.rawValue

        Task {
            let categories = await contentLoader.loadFlashcardCategories(source: source, target: target)
            if let category = categories.first(where: { $0.id == categoryId }) {
                self.words = category.items
                self.categoryName = category.name
            }
            isLoading = false
        }
    }

    private func flipCard() {
        guard !isFlipped else { return }
        withAnimation {
            isFlipped = true
        }
        audioService.playPlink()
        hapticsService.lightImpact()

        // Trigger ripple
        showRipple = true
        withAnimation(.easeOut(duration: 0.38)) {
            rippleScale = 1.0
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
            showRipple = false
            rippleScale = 0
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            withAnimation(.spring(response: 0.4)) {
                showButtons = true
            }
        }
    }

    private func handleAnswer(correct: Bool) {
        if correct {
            correctCount += 1
            score += 10
            streak += 1
            audioService.playWarmPulse()
            hapticsService.success()

            // Trigger success aura
            withAnimation(.easeOut(duration: 0.3)) {
                successAura = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.8) {
                withAnimation(.easeIn(duration: 0.3)) {
                    successAura = false
                }
            }

            // Mark mastered
            if let word = currentWord {
                let progressService = ProgressService(modelContext: modelContext)
                let langPref = languagePrefs.first
                progressService.markContentMastered(
                    gameType: .flashCards,
                    category: categoryId,
                    contentID: word.id,
                    source: langPref?.sourceLanguage ?? "english",
                    target: langPref?.targetLanguage ?? "spanish"
                )
            }
        } else {
            wrongCount += 1
            streak = 0
            audioService.playSoftNudge()
            hapticsService.warning()

            // Trigger wrong flash
            withAnimation(.easeOut(duration: 0.15)) {
                wrongFlash = true
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                withAnimation(.easeIn(duration: 0.2)) {
                    wrongFlash = false
                }
            }
        }

        // Advance after delay
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.1) {
            advanceCard()
        }
    }

    private func advanceCard() {
        withAnimation(.spring(response: 0.5)) {
            showButtons = false
            isFlipped = false
        }

        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
            if currentIndex + 1 >= words.count {
                completeGame()
            } else {
                withAnimation {
                    currentIndex += 1
                    cardTransitionId = UUID()
                }
            }
        }
    }

    private func completeGame() {
        // Save progress
        let progressService = ProgressService(modelContext: modelContext)
        let result = GameSessionResult(
            gameType: .flashCards,
            categoryId: categoryId,
            categoryName: categoryName,
            score: score,
            correctAnswers: correctCount,
            totalQuestions: words.count,
            timeSpent: 0
        )
        progressService.recordGameSession(result)

        audioService.playCelebration()
        hapticsService.success()

        withAnimation(.spring(response: 0.6)) {
            isGameComplete = true
        }
    }

    private func resetGame() {
        currentIndex = 0
        score = 0
        correctCount = 0
        wrongCount = 0
        streak = 0
        isFlipped = false
        showButtons = false
        isGameComplete = false
        cardTransitionId = UUID()
    }

    private func dynamicFontSize(for text: String) -> CGFloat {
        let length = text.count
        if length <= 3 { return 56 }
        if length <= 6 { return 44 }
        if length <= 10 { return 36 }
        if length <= 15 { return 30 }
        if length <= 20 { return 26 }
        return 22
    }

    // MARK: - Floating Icon Animations

    private func startFrontAnimations() {
        // Breathing radial glow — top-left (7s cycle)
        withAnimation(.easeInOut(duration: 7).repeatForever(autoreverses: true)) {
            frontGlowPhase = 1.0
        }
        // Breathing radial glow — bottom-right (8s cycle, delayed)
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            withAnimation(.easeInOut(duration: 8).repeatForever(autoreverses: true)) {
                frontGlowPhase2 = 1.0
            }
        }
        // Sparkles: continuous rotation (20s)
        withAnimation(.linear(duration: 20).repeatForever(autoreverses: false)) {
            sparkleRotation = 360
        }
        // Sparkles: pulsing scale + opacity (12s)
        withAnimation(.easeInOut(duration: 12).repeatForever(autoreverses: true)) {
            sparkleScale = 1.08
            sparkleOpacity = 0.75
        }
        // Lightbulb: breathing scale + opacity (10s)
        withAnimation(.easeInOut(duration: 10).repeatForever(autoreverses: true)) {
            bulbScale = 1.08
            bulbOpacity = 0.75
        }
        // Cloud: floating y (15s)
        withAnimation(.easeInOut(duration: 15).repeatForever(autoreverses: true)) {
            cloudOffset = -6
            cloudOpacity = 0.6
        }
        // Moon: floating y + gentle rotation (18s)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            withAnimation(.easeInOut(duration: 18).repeatForever(autoreverses: true)) {
                moonOffset = -4
                moonOpacity = 0.65
                moonRotation = 5
            }
        }
        // Wind: floating x (16s)
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            withAnimation(.easeInOut(duration: 16).repeatForever(autoreverses: true)) {
                windOffset = 8
                windOpacity = 0.55
            }
        }
    }

    private func startBackAnimations() {
        // Breathing radial glow — top-left emerald (6s)
        withAnimation(.easeInOut(duration: 6).repeatForever(autoreverses: true)) {
            backGlowPhase = 1.0
        }
        // Breathing radial glow — bottom-right amber (7s, delayed)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
            withAnimation(.easeInOut(duration: 7).repeatForever(autoreverses: true)) {
                backGlowPhase2 = 1.0
            }
        }
        // Star: continuous rotation (8s) + pulsing scale (3s)
        withAnimation(.linear(duration: 8).repeatForever(autoreverses: false)) {
            starRotation = 360
        }
        withAnimation(.easeInOut(duration: 3).repeatForever(autoreverses: true)) {
            starScale = 1.2
            starOpacity = 0.85
        }
        // Heart: breathing scale (2.5s)
        withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
            heartScale = 1.25
            heartOpacity = 0.8
        }
        // Flower/Leaf: rotating + floating (5s)
        withAnimation(.easeInOut(duration: 5).repeatForever(autoreverses: true)) {
            flowerRotation = 15
            flowerScale = 1.15
            flowerOffset = -6
            flowerOpacity = 0.85
        }
        // Back sparkles: rotating + floating (4.5s, delayed)
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            withAnimation(.easeInOut(duration: 4.5).repeatForever(autoreverses: true)) {
                backSparkleRotation = -18
                backSparkleScale = 1.2
                backSparkleOffset = -5
                backSparkleOpacity = 0.8
            }
        }
        // Bolt: pulsing scale + rotation (4s)
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            withAnimation(.easeInOut(duration: 4).repeatForever(autoreverses: true)) {
                boltScale = 1.15
                boltRotation = 12
                boltOpacity = 0.8
            }
        }
    }
}

// MARK: - Game Complete View (Shared)

/// Shared completion screen used by all three game types.
/// Shows performance tier, animated stats, and action buttons.
struct GameCompleteView: View {
    let score: Int
    let correctAnswers: Int
    let wrongAnswers: Int
    let totalQuestions: Int
    let gameType: GameType
    let categoryName: String
    let onPlayAgain: () -> Void
    let onDismiss: () -> Void

    @Environment(\.colorScheme) private var colorScheme

    private var accuracy: Double {
        guard totalQuestions > 0 else { return 0 }
        return Double(correctAnswers) / Double(totalQuestions) * 100
    }

    private var performanceTier: PerformanceTier {
        if accuracy >= 90 { return .excellent }
        if accuracy >= 75 { return .great }
        if accuracy >= 60 { return .good }
        return .keepGoing
    }

    var body: some View {
        ScrollView {
            VStack(spacing: 28) {
                Spacer(minLength: 40)

                // Trophy / performance icon
                ZStack {
                    Circle()
                        .fill(performanceTier.color.opacity(0.15))
                        .frame(width: 100, height: 100)
                        .shadow(color: performanceTier.color.opacity(0.4), radius: 30)

                    // Pulsing outer glow
                    Circle()
                        .fill(performanceTier.color.opacity(0.08))
                        .frame(width: 120, height: 120)
                        .blur(radius: 15)

                    Image(systemName: performanceTier.icon)
                        .font(.system(size: 44))
                        .foregroundStyle(performanceTier.color)
                        .shadow(color: performanceTier.color.opacity(0.5), radius: 10)
                        .symbolEffect(.bounce, options: .repeating.speed(0.2))
                }

                // Title
                Text(performanceTier.title)
                    .font(.largeTitle.bold())
                    .foregroundStyle(.white)

                Text(performanceTier.subtitle)
                    .font(.subheadline)
                    .foregroundStyle(.white.opacity(0.7))
                    .multilineTextAlignment(.center)

                // Stats grid
                LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 16) {
                    completeStat(title: "Score", value: "\(score)", icon: "bolt.fill", color: .yellow)
                    completeStat(title: "Accuracy", value: "\(Int(accuracy))%", icon: "target", color: performanceTier.color)
                    completeStat(title: "Correct", value: "\(correctAnswers)", icon: "checkmark.circle.fill", color: .green)
                    completeStat(title: "Wrong", value: "\(wrongAnswers)", icon: "xmark.circle.fill", color: .orange)
                }
                .padding(.horizontal, 20)

                // Action buttons
                VStack(spacing: 12) {
                    Button {
                        onPlayAgain()
                    } label: {
                        HStack {
                            Image(systemName: "arrow.counterclockwise")
                            Text("Play Again")
                        }
                        .font(.headline)
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 16)
                        .background(
                            RoundedRectangle(cornerRadius: 20)
                                .fill(
                                    LinearGradient(
                                        colors: [Color(hex: "#667eea"), Color(hex: "#764ba2")],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    )
                                )
                        )
                        .shadow(color: Color(hex: "#667eea").opacity(0.4), radius: 15)
                    }
                    .buttonStyle(ScaleButtonStyle())

                    Button {
                        onDismiss()
                    } label: {
                        HStack {
                            Image(systemName: "house.fill")
                            Text("Dashboard")
                        }
                        .font(.headline)
                        .foregroundStyle(.white.opacity(0.7))
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 16)
                        .background(
                            GlassCardBackground(
                                cornerRadius: 20,
                                borderColor: .white,
                                borderOpacity: 0.1
                            )
                        )
                        .clipShape(RoundedRectangle(cornerRadius: 20))
                    }
                    .buttonStyle(ScaleButtonStyle())
                }
                .padding(.horizontal, 20)

                Spacer(minLength: 60)
            }
        }
    }

    private func completeStat(title: String, value: String, icon: String, color: Color) -> some View {
        VStack(spacing: 8) {
            Image(systemName: icon)
                .font(.title2)
                .foregroundStyle(color)
                .shadow(color: color.opacity(0.4), radius: 8)

            Text(value)
                .font(.title.bold())
                .foregroundStyle(.white)

            Text(title)
                .font(.caption)
                .foregroundStyle(.white.opacity(0.6))
        }
        .frame(maxWidth: .infinity)
        .padding(16)
        .background(
            GlassCardBackground(
                cornerRadius: 18,
                borderColor: color,
                borderOpacity: 0.15,
                tintColor: color
            )
        )
        .clipShape(RoundedRectangle(cornerRadius: 18))
    }
}

// MARK: - Performance Tier

private enum PerformanceTier {
    case excellent, great, good, keepGoing

    var title: String {
        switch self {
        case .excellent: "Excellent!"
        case .great: "Great Job!"
        case .good: "Good Work!"
        case .keepGoing: "Keep Going!"
        }
    }

    var subtitle: String {
        switch self {
        case .excellent: "Outstanding performance! You're a natural!"
        case .great: "Impressive work! Keep up the momentum!"
        case .good: "Solid effort! Practice makes perfect!"
        case .keepGoing: "Every session makes you better. Don't give up!"
        }
    }

    var icon: String {
        switch self {
        case .excellent: "trophy.fill"
        case .great: "star.fill"
        case .good: "hand.thumbsup.fill"
        case .keepGoing: "heart.fill"
        }
    }

    var color: Color {
        switch self {
        case .excellent: .yellow
        case .great: .green
        case .good: .cyan
        case .keepGoing: .orange
        }
    }
}
