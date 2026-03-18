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
        let grouped = Dictionary(grouping: allProgress) { $0.categoryKey }
        return grouped.map { key, records in
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
        Array(repeating: GridItem(.flexible(), spacing: 10), count: columnCount)
    }

    // MARK: - Body

    var body: some View {
        GlassPanelWrapper {
            VStack(alignment: .leading, spacing: 12) {
                Text(L.accuracyByCategory)
                    .font(.system(size: 11))
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)

                if categories.isEmpty {
                    Text(L.playSessionsToSeeData)
                        .font(.system(size: 12))
                        .foregroundStyle(isDark ? .white.opacity(0.3) : .caribbeanMist)
                        .frame(maxWidth: .infinity, alignment: .center)
                        .padding(.vertical, 20)
                } else {
                    // Story 3.1 – Mastered summary card
                    if !masteredCategories.isEmpty {
                        masteredSummaryCard
                    }

                    // In-progress grid (Story 3.2 cells, Story 3.3 columns)
                    if !inProgressCategories.isEmpty {
                        LazyVGrid(columns: gridColumns, spacing: 10) {
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
        }
        .animation(.spring(duration: 0.3), value: columnCount)
    }

    // MARK: - Story 3.1: Mastered Summary Card

    private var masteredSummaryCard: some View {
        CollapsibleSection(
            style: .standard,
            colors: CollapsibleSectionTheme.masteredSummary.gradientColors,
            isCollapsed: $isMasteredCollapsed,
            cornerRadius: 14,
            header: {
                HStack(spacing: 10) {
                    Text("🏆")
                        .font(.system(size: 22))

                    VStack(alignment: .leading, spacing: 2) {
                        if inProgressCategories.isEmpty {
                            // ALL mastered – celebratory
                            Text("Perfect Mastery!")
                                .font(.system(size: 14, weight: .bold, design: .rounded))
                                .foregroundStyle(isDark ? .white : .caribbeanInk)
                            Text("You've conquered every category.")
                                .font(.system(size: 11))
                                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanMist)
                        } else {
                            Text("\(masteredCategories.count) " + (masteredCategories.count == 1 ? "Category" : "Categories") + " Mastered")
                                .font(.system(size: 14, weight: .bold, design: .rounded))
                                .foregroundStyle(isDark ? .white : .caribbeanInk)
                        }
                    }

                    Spacer()

                    Image(systemName: "chevron.right")
                        .font(.system(size: 10, weight: .bold))
                        .foregroundStyle(
                            isMasteredCollapsed
                                ? AnyShapeStyle(LinearGradient(colors: [Color(hex: "#10b981"), Color(hex: "#f59e0b")], startPoint: .leading, endPoint: .trailing))
                                : AnyShapeStyle(isDark ? Color.white.opacity(0.3) : Color.caribbeanMist)
                        )
                        .rotationEffect(.degrees(isMasteredCollapsed ? 0 : 90))
                        .animation(.spring(response: 0.35, dampingFraction: 0.8), value: isMasteredCollapsed)
                }
                .padding(12)
                .background(
                    RoundedRectangle(cornerRadius: 14)
                        .fill(
                            LinearGradient(
                                colors: isDark
                                    ? [Color(hex: "#10b981").opacity(0.15), Color(hex: "#f59e0b").opacity(0.10)]
                                    : [Color(hex: "#10b981").opacity(0.10), Color(hex: "#f59e0b").opacity(0.06)],
                                startPoint: .leading,
                                endPoint: .trailing
                            )
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 14)
                                .strokeBorder(
                                    LinearGradient(
                                        colors: [Color(hex: "#10b981").opacity(0.3), Color(hex: "#f59e0b").opacity(0.2)],
                                        startPoint: .leading,
                                        endPoint: .trailing
                                    ),
                                    lineWidth: 1
                                )
                        )
                )
            },
            content: {
                VStack(spacing: 0) {
                    ForEach(masteredCategories) { cat in
                        HStack(spacing: 8) {
                            Circle()
                                .fill(Color(hex: "#10b981"))
                                .frame(width: 6, height: 6)
                            Text(cat.name)
                                .font(.system(size: 12, weight: .medium))
                                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                            Spacer()
                            Text("\(cat.sessions) " + L.sessions.lowercased())
                                .font(.system(size: 10))
                                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                        }
                        .padding(.horizontal, 14)
                        .padding(.vertical, 6)
                    }
                }
                .padding(.top, 4)
            }
        )
        .padding(.bottom, inProgressCategories.isEmpty ? 0 : 4)
    }

    // MARK: - Story 3.2: Legend with ring motif

    private var legendBar: some View {
        HStack(spacing: 10) {
            legendRing(color: Color(hex: "#10b981"), fill: 0.95, label: "90%+")
            legendRing(color: Color(hex: "#06b6d4"), fill: 0.75, label: "75%+")
            legendRing(color: Color(hex: "#f59e0b"), fill: 0.60, label: "60%+")
            legendRing(color: Color(hex: "#ef4444"), fill: 0.30, label: "<60%")
        }
        .frame(maxWidth: .infinity, alignment: .center)
    }

    private func legendRing(color: Color, fill: CGFloat, label: String) -> some View {
        VStack(spacing: 2) {
            ZStack {
                Circle()
                    .stroke(color.opacity(0.2), lineWidth: 2)
                    .frame(width: 14, height: 14)
                Circle()
                    .trim(from: 0, to: fill)
                    .stroke(color, style: StrokeStyle(lineWidth: 2, lineCap: .round))
                    .frame(width: 14, height: 14)
                    .rotationEffect(.degrees(-90))
            }
            Text(label)
                .font(.system(size: 8))
                .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
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
                Circle()
                    .stroke(accuracyColor.opacity(0.15), lineWidth: 4)
                Circle()
                    .trim(from: 0, to: ringProgress)
                    .stroke(
                        accuracyColor,
                        style: StrokeStyle(lineWidth: 4, lineCap: .round)
                    )
                    .rotationEffect(.degrees(-90))

                Text("\(Int(accuracy))%")
                    .font(.system(size: 15, weight: .bold, design: .rounded))
                    .foregroundStyle(accuracyColor)
            }
            .frame(width: 52, height: 52)

            // Category name
            Text(name)
                .font(.system(size: 10, weight: .medium))
                .foregroundStyle(isDark ? .white.opacity(0.8) : .caribbeanInk)
                .lineLimit(2)
                .minimumScaleFactor(0.7)
                .multilineTextAlignment(.center)
                .frame(height: 26)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 10)
        .padding(.horizontal, 6)
        .background(
            RoundedRectangle(cornerRadius: 16)
                .fill(.ultraThinMaterial)
                .opacity(isDark ? 0.6 : 1.0)
        )
        .overlay(
            RoundedRectangle(cornerRadius: 16)
                .fill(accuracyColor.opacity(isDark ? 0.08 : 0.05))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 16)
                .strokeBorder(accuracyColor.opacity(isDark ? 0.2 : 0.15), lineWidth: 1)
        )
        .overlay(alignment: .topTrailing) {
            // Session count badge
            Text("×\(sessions)")
                .font(.system(size: 9, weight: .semibold, design: .rounded))
                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanMist)
                .padding(.horizontal, 5)
                .padding(.vertical, 2)
                .background(
                    Capsule()
                        .fill(isDark ? .white.opacity(0.08) : .black.opacity(0.04))
                )
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
