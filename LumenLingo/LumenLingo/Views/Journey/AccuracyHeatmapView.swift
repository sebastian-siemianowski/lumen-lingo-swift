import SwiftUI
import SwiftData

// MARK: - Accuracy Heatmap (Elite+)

/// Grid of game categories colour-coded by accuracy percentage.
/// Gated to Elite tier and above.
///
/// Story 3.1 – Groups 100 % categories into a collapsed "Mastered" card.
/// Story 3.2 – Glassmorphic cells with circular progress rings.
/// Story 3.3 – Adaptive column count based on screen width.
struct AccuracyHeatmapView: View {
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.localization) private var localization
    @Environment(\.horizontalSizeClass) private var sizeClass

    let allProgress: [GameProgressRecord]

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    // MARK: - Data model

    private struct CategoryAccuracy: Identifiable {
        let id: String
        let name: String
        let accuracy: Double
        let sessions: Int
    }

    private var categories: [CategoryAccuracy] {
        let grouped = Dictionary(grouping: allProgress.filter { !$0.categoryKey.isEmpty }) { $0.categoryKey }
        return grouped.compactMap { key, records -> CategoryAccuracy? in
            // Skip entries with non-meaningful keys (e.g. punctuation-only strings like "?")
            guard key.contains(where: \.isLetter) else { return nil }
            let totalCorrect = records.reduce(0) { $0 + $1.correctAnswers }
            let totalQuestions = records.reduce(0) { $0 + $1.totalQuestions }
            let accuracy = totalQuestions > 0 ? Double(totalCorrect) / Double(totalQuestions) * 100 : 0
            let name = key
                .replacingOccurrences(of: "_", with: " ")
                .split(separator: " ")
                .map { $0.prefix(1).uppercased() + $0.dropFirst() }
                .joined(separator: " ")
            return CategoryAccuracy(id: key, name: name, accuracy: accuracy, sessions: records.count)
        }
        .sorted { $0.accuracy > $1.accuracy }
    }

    // Story 3.1 – partition
    private var masteredCategories: [CategoryAccuracy] {
        categories.filter { $0.accuracy >= 100 }
    }
    private var inProgressCategories: [CategoryAccuracy] {
        categories.filter { $0.accuracy < 100 }
    }

    private var averageAccuracy: Double {
        guard !categories.isEmpty else { return 0 }
        return categories.reduce(0) { $0 + $1.accuracy } / Double(categories.count)
    }

    // Story 3.1 – expand/collapse (session-only, resets on relaunch)
    @State private var isMasteredCollapsed = true

    // MARK: - Colors

    private func accuracyColor(_ accuracy: Double) -> Color {
        if accuracy >= 90 { return Color(hex: "#10b981") }
        if accuracy >= 75 { return Color(hex: "#06b6d4") }
        if accuracy >= 60 { return Color(hex: "#f59e0b") }
        if accuracy >= 40 { return Color(hex: "#f97316") }
        return Color(hex: "#ef4444")
    }

    // Story 3.3 – adaptive columns
    private var columnCount: Int {
        sizeClass == .regular ? 4 : 2
    }
    private var gridColumns: [GridItem] {
        Array(repeating: GridItem(.flexible(), spacing: 12), count: columnCount)
    }

    // MARK: - Body

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
                HStack(spacing: 8) {
                    Image(systemName: "square.grid.3x3.fill")
                        .font(.system(size: 16))
                        .foregroundStyle(
                            isDark
                                ? AnyShapeStyle(Color.white.opacity(0.5))
                                : AnyShapeStyle(
                                    LinearGradient(
                                        colors: [Color(hex: "#06b6d4"), Color(hex: "#10b981")],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    )
                                )
                        )
                        .shadow(color: isDark ? .clear : Color(hex: "#06b6d4").opacity(0.20), radius: 3, y: 1)
                    Text(L.accuracyByCategory)
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanInk)
                }

                if categories.isEmpty {
                    Text(L.playSessionsToSeeData)
                        .font(.system(size: 12))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : .caribbeanMist)
                        .frame(maxWidth: .infinity, alignment: .center)
                        .padding(.vertical, 20)
                } else {
                    // Summary stats strip
                    HStack(spacing: 16) {
                        HStack(spacing: 5) {
                            ZStack {
                                Circle()
                                    .stroke(accuracyColor(averageAccuracy).opacity(isDark ? 0.2 : 0.12), lineWidth: 2.5)
                                Circle()
                                    .trim(from: 0, to: averageAccuracy / 100)
                                    .stroke(accuracyColor(averageAccuracy), style: StrokeStyle(lineWidth: 2.5, lineCap: .round))
                                    .rotationEffect(.degrees(-90))
                            }
                            .frame(width: 16, height: 16)
                            .shadow(color: isDark ? .clear : accuracyColor(averageAccuracy).opacity(0.18), radius: 2, y: 1)
                            Text("Avg \(Int(averageAccuracy))%")
                                .font(.system(size: 11, weight: .bold, design: .rounded))
                                .foregroundStyle(isDark ? .white.opacity(0.6) : accuracyColor(averageAccuracy))
                        }
                        HStack(spacing: 4) {
                            Text("\(categories.count)")
                                .font(.system(size: 11, weight: .bold, design: .rounded))
                                .foregroundStyle(isDark ? .white.opacity(0.6) : Color(hex: "#06b6d4"))
                            Text(categories.count == 1 ? "category" : "categories")
                                .font(.system(size: 10))
                                .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist)
                        }
                        if !masteredCategories.isEmpty {
                            HStack(spacing: 4) {
                                Image(systemName: "checkmark.circle.fill")
                                    .font(.system(size: 10))
                                    .foregroundStyle(Color(hex: "#10b981"))
                                Text("\(masteredCategories.count) mastered")
                                    .font(.system(size: 10, weight: .medium))
                                    .foregroundStyle(isDark ? .white.opacity(0.5) : Color(hex: "#10b981"))
                            }
                        }
                        Spacer()
                    }
                    .padding(.bottom, 2)

                    // Story 3.1 – Mastered summary card
                    if !masteredCategories.isEmpty {
                        masteredSummaryCard
                    }

                    // In-progress grid (Story 3.2 cells, Story 3.3 columns)
                    if !inProgressCategories.isEmpty {
                        LazyVGrid(columns: gridColumns, spacing: 12) {
                            ForEach(inProgressCategories) { cat in
                                HeatmapCell(
                                    name: cat.name,
                                    accuracy: cat.accuracy,
                                    sessions: cat.sessions,
                                    isDark: isDark,
                                    accuracyColor: accuracyColor(cat.accuracy)
                                )
                            }
                        }
                    }
                }

                // Legend (Story 3.2 – ring motif)
                legendBar
                    .padding(.top, 4)
            }
        .animation(.spring(duration: 0.3), value: columnCount)
    }

    // MARK: - Story 3.1: Mastered Summary Card

    private var masteredSummaryCard: some View {
        VStack(spacing: 0) {
            // Header — tappable emerald/gold banner
            Button {
                withAnimation(.spring(response: 0.4, dampingFraction: 0.82)) {
                    isMasteredCollapsed.toggle()
                }
            } label: {
                HStack(spacing: 10) {
                    // Trophy with warm radial glow
                    ZStack {
                        Circle()
                            .fill(
                                RadialGradient(
                                    colors: [
                                        Color(hex: "#f59e0b").opacity(isDark ? 0.18 : 0.10),
                                        Color(hex: "#10b981").opacity(isDark ? 0.08 : 0.04),
                                        .clear
                                    ],
                                    center: .center,
                                    startRadius: 0,
                                    endRadius: 20
                                )
                            )
                            .frame(width: 34, height: 34)

                        Image(systemName: "trophy.fill")
                            .font(.system(size: 16))
                            .foregroundStyle(
                                LinearGradient(
                                    colors: [Color(hex: "#f59e0b"), Color(hex: "#f97316")],
                                    startPoint: .top,
                                    endPoint: .bottom
                                )
                            )
                            .shadow(color: Color(hex: "#f59e0b").opacity(isDark ? 0.30 : 0.18), radius: 4, y: 1)
                    }

                    VStack(alignment: .leading, spacing: 2) {
                        if inProgressCategories.isEmpty {
                            Text("Perfect Mastery!")
                                .font(.system(size: 14, weight: .bold, design: .rounded))
                                .foregroundStyle(
                                    isDark ? AnyShapeStyle(Color.white) :
                                    AnyShapeStyle(
                                        LinearGradient(
                                            colors: [Color(hex: "#065f46"), Color(hex: "#92400e")],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                                )
                            Text("You've conquered every category.")
                                .font(.system(size: 11))
                                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanMist)
                        } else {
                            Text("\(masteredCategories.count) " + (masteredCategories.count == 1 ? "Category" : "Categories") + " Mastered")
                                .font(.system(size: 14, weight: .bold, design: .rounded))
                                .foregroundStyle(
                                    isDark ? AnyShapeStyle(Color.white) :
                                    AnyShapeStyle(
                                        LinearGradient(
                                            colors: [Color(hex: "#065f46"), Color(hex: "#92400e")],
                                            startPoint: .leading,
                                            endPoint: .trailing
                                        )
                                    )
                                )
                        }
                    }

                    Spacer()

                    // Pill chevron
                    ZStack {
                        Capsule()
                            .fill(isDark ? Color.white.opacity(0.06) : Color(hex: "#10b981").opacity(0.08))
                            .frame(width: 26, height: 18)
                        Image(systemName: "chevron.right")
                            .font(.system(size: 9, weight: .bold))
                            .foregroundStyle(
                                isMasteredCollapsed
                                    ? AnyShapeStyle(LinearGradient(colors: [Color(hex: "#10b981"), Color(hex: "#f59e0b")], startPoint: .leading, endPoint: .trailing))
                                    : AnyShapeStyle(isDark ? Color.white.opacity(0.3) : Color.caribbeanMist)
                            )
                            .rotationEffect(.degrees(isMasteredCollapsed ? 0 : 90))
                    }
                }
                .padding(.horizontal, 14)
                .padding(.vertical, 11)
            }
            .buttonStyle(.plain)

            // Expanded category rows
            if !isMasteredCollapsed {
                // Luminous emerald/gold divider
                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [
                                .clear,
                                Color(hex: "#10b981").opacity(isDark ? 0.20 : 0.18),
                                Color(hex: "#f59e0b").opacity(isDark ? 0.15 : 0.12),
                                Color(hex: "#10b981").opacity(isDark ? 0.20 : 0.18),
                                .clear
                            ],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(height: 0.5)
                    .padding(.horizontal, 14)

                VStack(spacing: 0) {
                    ForEach(Array(masteredCategories.enumerated()), id: \.element.id) { index, cat in
                        HStack(spacing: 10) {
                            ZStack {
                                Circle()
                                    .stroke(Color(hex: "#10b981").opacity(isDark ? 0.3 : 0.15), lineWidth: 2.5)
                                Circle()
                                    .trim(from: 0, to: 1)
                                    .stroke(Color(hex: "#10b981"), style: StrokeStyle(lineWidth: 2.5, lineCap: .round))
                                    .rotationEffect(.degrees(-90))
                                Image(systemName: "checkmark")
                                    .font(.system(size: 7, weight: .bold))
                                    .foregroundStyle(Color(hex: "#10b981"))
                            }
                            .frame(width: 20, height: 20)
                            .shadow(color: isDark ? .clear : Color(hex: "#10b981").opacity(0.15), radius: 2, y: 1)

                            VStack(alignment: .leading, spacing: 1) {
                                Text(cat.name)
                                    .font(.system(size: 12, weight: .medium))
                                    .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                                Text("\(cat.sessions) " + L.sessions.lowercased())
                                    .font(.system(size: 9))
                                    .foregroundStyle(isDark ? .white.opacity(0.35) : .caribbeanMist)
                            }
                            Spacer()

                            Image(systemName: "star.fill")
                                .font(.system(size: 9))
                                .foregroundStyle(
                                    LinearGradient(
                                        colors: [Color(hex: "#f59e0b"), Color(hex: "#f97316")],
                                        startPoint: .top,
                                        endPoint: .bottom
                                    )
                                )
                                .opacity(0.65)
                        }
                        .padding(.horizontal, 14)
                        .padding(.vertical, 8)

                        if index < masteredCategories.count - 1 {
                            Rectangle()
                                .fill(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.04))
                                .frame(height: 0.5)
                                .padding(.horizontal, 14)
                        }
                    }
                }
                .padding(.top, 4)
                .padding(.bottom, 6)
                .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
        .background {
            if isDark {
                RoundedRectangle(cornerRadius: 20)
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#10b981").opacity(0.15), Color(hex: "#f59e0b").opacity(0.10)],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 20)
                            .strokeBorder(
                                LinearGradient(
                                    colors: [Color(hex: "#10b981").opacity(0.3), Color(hex: "#f59e0b").opacity(0.2)],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                ),
                                lineWidth: 1
                            )
                    )
            } else {
                RoundedRectangle(cornerRadius: 20)
                    .fill(
                        LinearGradient(
                            colors: [Color(hex: "#10b981").opacity(0.10), Color(hex: "#f59e0b").opacity(0.06)],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .overlay(
                        RoundedRectangle(cornerRadius: 20)
                            .strokeBorder(
                                LinearGradient(
                                    colors: [Color(hex: "#10b981").opacity(0.2), Color(hex: "#f59e0b").opacity(0.12)],
                                    startPoint: .leading,
                                    endPoint: .trailing
                                ),
                                lineWidth: 0.5
                            )
                    )
            }
        }
        .padding(.bottom, inProgressCategories.isEmpty ? 0 : 4)
    }

    // MARK: - Story 3.2: Legend with ring motif

    private var legendBar: some View {
        HStack(spacing: 14) {
            legendRing(color: Color(hex: "#10b981"), fill: 0.95, label: "90%+")
            legendRing(color: Color(hex: "#06b6d4"), fill: 0.75, label: "75%+")
            legendRing(color: Color(hex: "#f59e0b"), fill: 0.60, label: "60%+")
            legendRing(color: Color(hex: "#ef4444"), fill: 0.30, label: "<60%")
        }
        .frame(maxWidth: .infinity, alignment: .center)
        .padding(.vertical, 8)
        .padding(.horizontal, 12)
        .background {
            if !isDark {
                RoundedRectangle(cornerRadius: 10)
                    .fill(Color(red: 0.95, green: 0.96, blue: 0.97))
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .strokeBorder(
                                LinearGradient(
                                    colors: [.white.opacity(0.55), .white.opacity(0.20), .white.opacity(0.38)],
                                    startPoint: .top,
                                    endPoint: .bottom
                                ),
                                lineWidth: 0.5
                            )
                    )
            }
        }
    }

    private func legendRing(color: Color, fill: CGFloat, label: String) -> some View {
        HStack(spacing: 5) {
            ZStack {
                Circle()
                    .stroke(color.opacity(isDark ? 0.2 : 0.12), lineWidth: 2.5)
                Circle()
                    .trim(from: 0, to: fill)
                    .stroke(color, style: StrokeStyle(lineWidth: 2.5, lineCap: .round))
                    .rotationEffect(.degrees(-90))
            }
            .frame(width: 16, height: 16)
            .shadow(color: isDark ? .clear : color.opacity(0.18), radius: 2, y: 1)
            Text(label)
                .font(.system(size: 10, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.5) : .caribbeanInk.opacity(0.55))
        }
    }
}

// MARK: - Story 3.2: Glassmorphic Heatmap Cell with Progress Ring

private struct HeatmapCell: View {
    let name: String
    let accuracy: Double
    let sessions: Int
    let isDark: Bool
    let accuracyColor: Color

    @State private var ringProgress: CGFloat = 0

    var body: some View {
        VStack(spacing: 6) {
            // Circular progress ring + percentage
            ZStack {
                // Track ring — recessed groove
                Circle()
                    .stroke(accuracyColor.opacity(isDark ? 0.15 : 0.12), lineWidth: 5)
                // Light-mode inner shadow on ring track
                if !isDark {
                    Circle()
                        .stroke(
                            LinearGradient(
                                colors: [Color.black.opacity(0.06), Color.clear, Color.white.opacity(0.20)],
                                startPoint: .top,
                                endPoint: .bottom
                            ),
                            lineWidth: 5
                        )
                }
                // Active fill ring
                Circle()
                    .trim(from: 0, to: ringProgress)
                    .stroke(
                        LinearGradient(
                            colors: isDark
                                ? [accuracyColor, accuracyColor]
                                : [accuracyColor, accuracyColor.opacity(0.75)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        ),
                        style: StrokeStyle(lineWidth: 5, lineCap: .round)
                    )
                    .rotationEffect(.degrees(-90))
                    .shadow(color: isDark ? .clear : accuracyColor.opacity(0.35), radius: 3, y: 1)
                // Top highlight reflection on ring
                if !isDark {
                    Circle()
                        .trim(from: 0, to: min(ringProgress, 0.25))
                        .stroke(
                            Color.white.opacity(0.30),
                            style: StrokeStyle(lineWidth: 2, lineCap: .round)
                        )
                        .rotationEffect(.degrees(-90))
                }

                Text("\(Int(accuracy))%")
                    .font(.system(size: 17, weight: .bold, design: .rounded))
                    .foregroundStyle(accuracyColor)
                    .shadow(color: isDark ? .clear : accuracyColor.opacity(0.18), radius: 2, y: 1)
            }
            .frame(width: 58, height: 58)

            // Category name
            Text(name)
                .font(.system(size: 11, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                .lineLimit(2)
                .minimumScaleFactor(0.7)
                .multilineTextAlignment(.center)
                .frame(height: 28)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 12)
        .padding(.horizontal, 8)
        .background {
            if isDark {
                RoundedRectangle(cornerRadius: 20)
                    .fill(.ultraThinMaterial)
                    .opacity(0.6)
            } else {
                RoundedRectangle(cornerRadius: 20)
                    .fill(accuracyColor.opacity(0.08))
            }
        }
        .clipShape(RoundedRectangle(cornerRadius: 20))
        .overlay(
            RoundedRectangle(cornerRadius: 20)
                .strokeBorder(
                    isDark
                        ? AnyShapeStyle(accuracyColor.opacity(0.2))
                        : AnyShapeStyle(
                            LinearGradient(
                                colors: [accuracyColor.opacity(0.18), accuracyColor.opacity(0.06), accuracyColor.opacity(0.12)],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        ),
                    lineWidth: isDark ? 1 : 0.5
                )
        )
        .overlay(alignment: .topTrailing) {
            // Session count badge
            Text("\(sessions)×")
                .font(.system(size: 9, weight: .bold, design: .rounded))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanInk.opacity(0.45))
                .padding(.horizontal, 6)
                .padding(.vertical, 2.5)
                .background {
                    if isDark {
                        Capsule().fill(.white.opacity(0.08))
                    } else {
                        Capsule()
                            .fill(Color(red: 0.94, green: 0.95, blue: 0.97))
                            .overlay(
                                Capsule()
                                    .strokeBorder(Color.white.opacity(0.45), lineWidth: 0.5)
                            )
                            .shadow(color: Color.black.opacity(0.04), radius: 1, y: 0.5)
                    }
                }
                .padding(6)
        }
        .shadow(color: accuracyColor.opacity(accuracy >= 90 ? 0.25 : 0), radius: 8, y: 4)
        .onAppear {
            withAnimation(.easeOut(duration: 0.8).delay(0.1)) {
                ringProgress = CGFloat(accuracy) / 100
            }
        }
    }
}
