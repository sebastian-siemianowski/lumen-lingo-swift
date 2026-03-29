import SwiftUI

// MARK: - Social Proof Section (Story 2.6)

/// Trust signals and social proof displayed below tier cards on the paywall.
struct SocialProofSection: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.accessibilityReduceMotion) private var reduceMotion
    @Environment(SubscriptionManager.self) private var subscriptionManager
    @State private var starsRevealed = 0
    @State private var currentTestimonialIndex = 0
    @State private var testimonialOpacity: Double = 1
    @State private var appeared = false

    private var isDark: Bool { colorScheme == .dark }

    /// Learner count from RC metadata or fallback.
    private var learnerCount: String {
        subscriptionManager.offeringMetadata("learner_count") ?? "50,000+"
    }

    /// Star rating from RC metadata or fallback.
    private var starRating: String {
        subscriptionManager.offeringMetadata("star_rating") ?? "4.8"
    }

    private let testimonials: [(quote: String, name: String, flag: String)] = [
        ("This app made Japanese feel approachable for the first time.", "Sofia", "🇪🇸"),
        ("The premium features are genuinely worth it. Best language app I've used.", "James", "🇬🇧"),
        ("I love practising with the breathing orbs. So calming!", "Yuki", "🇯🇵"),
        ("Went from zero to conversational Polish in 3 months.", "Maria", "🇧🇷"),
        ("The offline mode saved me on long flights.", "Chen", "🇨🇳"),
    ]

    var body: some View {
        VStack(spacing: 20) {
            // Star rating
            starRatingView

            // Learner count
            Text("Trusted by \(learnerCount) learners worldwide")
                .font(.subheadline)
                .foregroundStyle(isDark ? .white.opacity(0.6) : .secondary)

            // Testimonial carousel
            testimonialCarousel

            // Trust badges
            trustBadges
        }
        .padding(.horizontal, 20)
        .padding(.vertical, 24)
        .background(
            RoundedRectangle(cornerRadius: 20)
                .fill(isDark ? Color.white.opacity(0.03) : Color.black.opacity(0.02))
        )
        .opacity(appeared ? 1 : 0)
        .offset(y: appeared ? 0 : 20)
        .onAppear {
            if reduceMotion {
                appeared = true
                starsRevealed = 5
            } else {
                withAnimation(.easeOut(duration: 0.5).delay(0.3)) {
                    appeared = true
                }
                animateStars()
            }
            startTestimonialTimer()
        }
        .accessibilityElement(children: .contain)
    }

    // MARK: - Star Rating

    private var starRatingView: some View {
        HStack(spacing: 4) {
            ForEach(0..<5) { index in
                Image(systemName: "star.fill")
                    .font(.system(size: 16))
                    .foregroundStyle(
                        index < starsRevealed
                            ? Color(hex: "#fbbf24")
                            : (isDark ? Color.white.opacity(0.15) : Color.gray.opacity(0.2))
                    )
            }
            Text(starRating)
                .font(.subheadline.bold())
                .foregroundStyle(isDark ? .white.opacity(0.8) : .primary)
            Text("on the App Store")
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
        }
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("\(starRating) out of 5 stars on the App Store")
    }

    // MARK: - Testimonial Carousel

    private var testimonialCarousel: some View {
        let testimonial = testimonials[currentTestimonialIndex]
        return VStack(spacing: 8) {
            Text("\u{201C}\(testimonial.quote)\u{201D}")
                .font(.subheadline)
                .italic()
                .foregroundStyle(isDark ? .white.opacity(0.7) : .primary.opacity(0.8))
                .multilineTextAlignment(.center)
                .lineLimit(3)

            Text("— \(testimonial.name) \(testimonial.flag)")
                .font(.caption)
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
        }
        .frame(minHeight: 80)
        .opacity(testimonialOpacity)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("\(testimonial.quote). By \(testimonial.name)")
    }

    // MARK: - Trust Badges

    private var trustBadges: some View {
        HStack(spacing: 16) {
            trustBadge(icon: "calendar.badge.checkmark", text: "Cancel anytime")
            trustBadge(icon: "lock.shield.fill", text: "Secure via Apple")
            trustBadge(icon: "nosign", text: "No hidden fees")
        }
        .accessibilityElement(children: .contain)
    }

    private func trustBadge(icon: String, text: String) -> some View {
        VStack(spacing: 4) {
            Image(systemName: icon)
                .font(.system(size: 18))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
            Text(text)
                .font(.system(size: 10, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .secondary)
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(text)
    }

    // MARK: - Animations

    private func animateStars() {
        for i in 0..<5 {
            DispatchQueue.main.asyncAfter(deadline: .now() + Double(i) * 0.08 + 0.5) {
                withAnimation(reduceMotion ? .none : .spring(response: 0.3, dampingFraction: 0.6)) {
                    starsRevealed = i + 1
                }
            }
        }
    }

    private func startTestimonialTimer() {
        Timer.scheduledTimer(withTimeInterval: 5.0, repeats: true) { _ in
            withAnimation(reduceMotion ? .none : .easeOut(duration: 0.3)) {
                testimonialOpacity = 0
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + (reduceMotion ? 0.01 : 0.35)) {
                currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.count
                withAnimation(reduceMotion ? .none : .easeIn(duration: 0.3)) {
                    testimonialOpacity = 1
                }
            }
        }
    }
}
