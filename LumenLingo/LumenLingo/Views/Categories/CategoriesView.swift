import SwiftUI
import SwiftData

// MARK: - Categories View

/// Generic category browser for all three game types with favorites,
/// progress tracking, search, and glassmorphic card grid.
struct CategoriesView: View {
    let gameType: GameType

    @Environment(\.modelContext) private var modelContext
    @Environment(\.colorScheme) private var colorScheme
    @Environment(\.dismiss) private var dismiss
    @Environment(ContentLoader.self) private var contentLoader
    @Environment(TierManager.self) private var tierManager
    @Environment(\.localization) private var localization

    private var L: AppStrings { localization.strings }
    private var isDark: Bool { colorScheme == .dark }

    @Binding var navigationPath: NavigationPath

    @Query private var languagePrefs: [LanguagePreference]
    @Query private var favorites: [FavoriteCategory]
    @Query private var masteredContent: [MasteredContent]

    @State private var categories: [CategoryDisplayItem] = []
    @State private var isLoading: Bool = true
    @State private var searchText: String = ""
    @State private var showCompletedFilter: Bool = false
    @State private var showFavoritesOnly: Bool = false
    @State private var isGridView: Bool = true
    @State private var currentPage: Int = 0
    @State private var emptyPulse: Bool = false
    @State private var pressedCardId: String? = nil
    @State private var lockedCategoryTapped: CategoryDisplayItem? = nil

    // Story 6.2.2 — rotating placeholder suggestions
    @State private var placeholderIndex: Int = 0
    @State private var isSearchFocused: Bool = false
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    private var placeholderSuggestions: [String] {
        [L.searchCategories, "Try 'food'...", "Find 'travel'..."]
    }

    // Frozen empty-state content — updated only when transitioning INTO empty
    @State private var frozenEmptyIcon: String = "tray"
    @State private var frozenEmptyTitle: String = "No Categories"
    @State private var frozenEmptySubtitle: String = ""
    @State private var frozenShowClearButton: Bool = false

    /// Pre-computed set of favorite category IDs for O(1) lookups.
    private var favoriteIds: Set<String> {
        let gameTypeRaw = gameType.rawValue
        return Set(favorites.filter { $0.gameType == gameTypeRaw }.map { $0.categoryKey })
    }

    private var filteredCategories: [CategoryDisplayItem] {
        let favIds = favoriteIds
        var items = categories

        // Favorites-only filter
        if showFavoritesOnly {
            items = items.filter { favIds.contains($0.id) }
        }

        // Search filter
        if !searchText.isEmpty {
            let query = searchText.lowercased()
            items = items.filter {
                $0.name.lowercased().contains(query) ||
                $0.description.lowercased().contains(query)
            }
        }

        // Hide completed filter
        if showCompletedFilter {
            items = items.filter { $0.progress.percentage < 100.0 }
        }

        // Sort: favorites first, then by order
        items.sort { a, b in
            let aFav = favIds.contains(a.id)
            let bFav = favIds.contains(b.id)
            if aFav != bFav { return aFav }
            return a.order < b.order
        }

        return items
    }

    /// Items per page: 6 for grid (2 columns × 3 rows), 4 for list.
    private var itemsPerPage: Int { isGridView ? 6 : 4 }

    private var totalPages: Int {
        max(1, Int(ceil(Double(filteredCategories.count) / Double(itemsPerPage))))
    }

    private var paginatedCategories: [CategoryDisplayItem] {
        let start = currentPage * itemsPerPage
        guard start < filteredCategories.count else { return [] }
        let end = min(start + itemsPerPage, filteredCategories.count)
        return Array(filteredCategories[start..<end])
    }

    private var paginationAccentColors: [Color] {
        switch gameType {
        case .flashCards: [Color(hex: "#667eea"), Color(hex: "#06b6d4")]
        case .grammar: [Color(hex: "#f093fb"), Color(hex: "#f5576c")]
        case .wordBuilder: [Color(hex: "#fbbf24"), Color(hex: "#f97316")]
        }
    }

    var body: some View {
        let isEmpty = !isLoading && filteredCategories.isEmpty
        let hasContent = !isLoading && !filteredCategories.isEmpty

        ZStack(alignment: .bottom) {
            VStack(spacing: 0) {
                // Header
                categoryHeader

                ZStack {
                    // Loading
                    if isLoading {
                        ProgressView()
                            .scaleEffect(1.5)
                            .tint(.white)
                            .transition(.blurReplace)
                    }

                    // Empty state — always in tree, driven by opacity
                    emptyState
                        .opacity(isEmpty ? 1 : 0)
                        .scaleEffect(isEmpty ? 1 : 0.92)
                        .blur(radius: isEmpty ? 0 : 6)
                        .allowsHitTesting(isEmpty)

                    // Content grid
                    ScrollView {
                        categoryGrid
                            .padding(.horizontal, 16)
                            .padding(.top, 12)
                            .padding(.bottom, 130)
                    }
                    .opacity(hasContent ? 1 : 0)
                    .blur(radius: hasContent ? 0 : 4)
                    .allowsHitTesting(hasContent)
                }
                .frame(maxHeight: .infinity)
                .animation(.smooth(duration: 0.45), value: isEmpty)
            }

            // Floating liquid glass pagination panel
            LiquidGlassPagination(
                currentPage: currentPage,
                totalPages: totalPages,
                accentColors: paginationAccentColors
            ) { newPage in
                withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                    currentPage = newPage
                }
            }
            .padding(.bottom, 16)
            .opacity(hasContent ? 1 : 0)
            .offset(y: hasContent ? 0 : 20)
            .animation(.smooth(duration: 0.35), value: hasContent)
        }
        .cosmicBackground()
        .navigationBarBackButtonHidden()
        .toolbar(.hidden, for: .navigationBar)
        .toolbar(.hidden, for: .tabBar)
        .onAppear { loadCategories() }
        .onChange(of: searchText) { _, _ in
            withAnimation { currentPage = 0 }
            freezeEmptyContentIfNeeded()
        }
        .onChange(of: showCompletedFilter) { _, _ in
            withAnimation(.smooth(duration: 0.3)) { currentPage = 0 }
            freezeEmptyContentIfNeeded()
        }
        .onChange(of: showFavoritesOnly) { _, _ in
            withAnimation(.smooth(duration: 0.3)) { currentPage = 0 }
            freezeEmptyContentIfNeeded()
        }
        .onChange(of: isGridView) { _, _ in
            withAnimation(.smooth(duration: 0.3)) { currentPage = 0 }
        }
        .simultaneousGesture(
            DragGesture(minimumDistance: 40, coordinateSpace: .local)
                .onEnded { value in
                    let horizontal = value.translation.width
                    let vertical = abs(value.translation.height)
                    // Only paginate on predominantly horizontal swipes
                    guard abs(horizontal) > vertical * 1.5 else { return }
                    if horizontal < -40, currentPage < totalPages - 1 {
                        withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                            currentPage += 1
                        }
                        HapticsService.shared.tabSwitch()
                        AudioService.shared.playPageChange()
                    } else if horizontal > 40, currentPage > 0 {
                        withAnimation(.spring(response: 0.35, dampingFraction: 0.8)) {
                            currentPage -= 1
                        }
                        HapticsService.shared.tabSwitch()
                        AudioService.shared.playPageChange()
                    }
                }
        )
        .alert(
            lockedCategoryTapped.map { "Unlock \($0.name)" } ?? "",
            isPresented: Binding(
                get: { lockedCategoryTapped != nil },
                set: { if !$0 { lockedCategoryTapped = nil } }
            )
        ) {
            Button("OK", role: .cancel) { }
        } message: {
            if let item = lockedCategoryTapped {
                let tier = TierManager.minimumTierForDifficulty(item.difficulty, gameType: gameType)
                Text("Upgrade to \(tier.displayName) to access \(item.difficulty.displayName.lowercased())-level \(gameType.displayName) categories.")
            }
        }
    }

    // MARK: - Header

    /// Game-specific gradient for the category header title
    private var categoryTitleGradient: LinearGradient {
        let cs = GameCardColorScheme.forType(gameType)
        return LinearGradient(colors: [cs.primary, cs.secondary], startPoint: .leading, endPoint: .trailing)
    }

    private var categoryHeader: some View {
        VStack(spacing: 12) {
            HStack {
                Button { HapticsService.shared.navTransition(); dismiss() } label: {
                    HStack(spacing: 6) {
                        Image(systemName: "chevron.left")
                        Text(L.back)
                    }
                    .font(.subheadline.weight(.medium))
                    .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
                    // Light mode: frost pill behind back button
                    .padding(.horizontal, isDark ? 0 : 10)
                    .padding(.vertical, isDark ? 0 : 6)
                    .background {
                        if !isDark {
                            Capsule()
                                .fill(.ultraThinMaterial)
                                .overlay(
                                    Capsule()
                                        .fill(Color.white.opacity(0.50))
                                )
                                .overlay(
                                    Capsule()
                                        .strokeBorder(Color.white.opacity(0.55), lineWidth: 0.5)
                                )
                                .shadow(color: Color(red: 0.55, green: 0.50, blue: 0.68).opacity(0.08), radius: 4, y: 2)
                        }
                    }
                }
                .buttonStyle(LumenPressStyle(weight: .soft))

                Spacer()

                Text(gameType.displayName)
                    .font(.title3.bold())
                    .foregroundStyle(categoryTitleGradient)

                Spacer()

                // Grid/List toggle — frost pill in light mode
                Button {
                    HapticsService.shared.toggleSwitch()
                    withAnimation(.spring(response: 0.3)) {
                        isGridView.toggle()
                    }
                } label: {
                    Image(systemName: isGridView ? "square.grid.2x2.fill" : "list.bullet")
                        .font(.body)
                        .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
                        .frame(width: isDark ? nil : 34, height: isDark ? nil : 34)
                        .background {
                            if !isDark {
                                Circle()
                                    .fill(.ultraThinMaterial)
                                    .overlay(
                                        Circle()
                                            .fill(Color.white.opacity(0.50))
                                    )
                                    .overlay(
                                        Circle()
                                            .strokeBorder(Color.white.opacity(0.55), lineWidth: 0.5)
                                    )
                                    .shadow(color: Color(red: 0.55, green: 0.50, blue: 0.68).opacity(0.08), radius: 4, y: 2)
                            }
                        }
                }
                .buttonStyle(LumenPressStyle(weight: .soft))
            }

            // Search bar — frost trough in light mode
            HStack(spacing: 10) {
                Image(systemName: "magnifyingglass")
                    .foregroundStyle(
                        isDark
                            ? AnyShapeStyle(Color.white.opacity(0.4))
                            : (isSearchFocused
                                ? AnyShapeStyle(categoryTitleGradient)
                                : AnyShapeStyle(Color.caribbeanMist))
                    )

                TextField(placeholderSuggestions[placeholderIndex], text: $searchText)
                    .font(.subheadline)
                    .foregroundStyle(isDark ? .white : .caribbeanInk)
                    .autocorrectionDisabled()
                    .onChange(of: searchText) { _, newValue in
                        isSearchFocused = !newValue.isEmpty
                    }

                if !searchText.isEmpty {
                    Button {
                        searchText = ""
                        isSearchFocused = false
                    } label: {
                        Image(systemName: "xmark.circle.fill")
                            .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft))
                }

                // Filter: favorites only
                Button {
                    HapticsService.shared.toggleSwitch()
                    withAnimation(.smooth(duration: 0.35)) {
                        showFavoritesOnly.toggle()
                    }
                } label: {
                    Image(systemName: showFavoritesOnly ? "heart.fill" : "heart")
                        .font(.subheadline)
                        .foregroundStyle(
                            showFavoritesOnly
                                ? (isDark ? .pink : .white)
                                : (isDark ? .white.opacity(0.4) : .caribbeanMist)
                        )
                        .contentTransition(.symbolEffect(.replace))
                        .padding(6)
                        .background(
                            Group {
                                if showFavoritesOnly && !isDark {
                                    Capsule()
                                        .fill(
                                            LinearGradient(
                                                colors: [Color(hex: "FB7185"), Color(hex: "F472B6")],
                                                startPoint: .leading,
                                                endPoint: .trailing
                                            )
                                        )
                                        .shadow(color: Color(hex: "FB7185").opacity(0.25), radius: 6)
                                }
                            }
                        )
                }
                .buttonStyle(LumenPressStyle(weight: .soft, accentColor: .pink))
                .scaleEffect(showFavoritesOnly && !isDark ? 1.02 : 1.0)
                .animation(.spring(response: 0.25, dampingFraction: 0.7), value: showFavoritesOnly)

                // Filter completed toggle
                Button {
                    HapticsService.shared.toggleSwitch()
                    withAnimation(.smooth(duration: 0.35)) {
                        showCompletedFilter.toggle()
                    }
                } label: {
                    Image(systemName: showCompletedFilter ? "eye.slash.fill" : "eye.fill")
                        .font(.subheadline)
                        .foregroundStyle(
                            showCompletedFilter
                                ? (isDark ? .yellow : .white)
                                : (isDark ? .white.opacity(0.4) : .caribbeanMist)
                        )
                        .contentTransition(.symbolEffect(.replace))
                        .padding(6)
                        .background(
                            Group {
                                if showCompletedFilter && !isDark {
                                    Capsule()
                                        .fill(
                                            LinearGradient(
                                                colors: [Color(hex: "F59E0B"), Color(hex: "FB923C")],
                                                startPoint: .leading,
                                                endPoint: .trailing
                                            )
                                        )
                                        .shadow(color: Color(hex: "F59E0B").opacity(0.25), radius: 6)
                                }
                            }
                        )
                }
                .buttonStyle(LumenPressStyle(weight: .soft, accentColor: .yellow))
                .scaleEffect(showCompletedFilter && !isDark ? 1.02 : 1.0)
                .animation(.spring(response: 0.25, dampingFraction: 0.7), value: showCompletedFilter)
            }
            .padding(12)
            .background(
                Group {
                    if isDark {
                        // Dark mode: unchanged
                        RoundedRectangle(cornerRadius: 14)
                            .fill(.white.opacity(0.06))
                            .overlay(
                                RoundedRectangle(cornerRadius: 14)
                                    .strokeBorder(.white.opacity(0.06), lineWidth: 0.5)
                            )
                    } else {
                        // Light mode: frost trough — recessed glass channel
                        ZStack {
                            // Recessed frost base
                            RoundedRectangle(cornerRadius: 14)
                                .fill(Color(red: 0.92, green: 0.94, blue: 0.97))

                            // Inner shadow for depth (top-dark, bottom-light)
                            RoundedRectangle(cornerRadius: 14)
                                .fill(
                                    LinearGradient(
                                        colors: [
                                            Color(red: 0.78, green: 0.80, blue: 0.86).opacity(0.30),
                                            Color.clear,
                                            Color.white.opacity(0.20)
                                        ],
                                        startPoint: .top,
                                        endPoint: .bottom
                                    )
                                )

                            // Glass rim border
                            RoundedRectangle(cornerRadius: 14)
                                .strokeBorder(
                                    LinearGradient(
                                        colors: [
                                            Color.white.opacity(0.70),
                                            Color.white.opacity(0.35),
                                            Color.white.opacity(0.50)
                                        ],
                                        startPoint: .top,
                                        endPoint: .bottom
                                    ),
                                    lineWidth: 0.75
                                )

                            // White surface highlight — top 40%
                            VStack(spacing: 0) {
                                Rectangle()
                                    .fill(
                                        LinearGradient(
                                            colors: [
                                                Color.white.opacity(0.50),
                                                Color.white.opacity(0.15),
                                                Color.clear
                                            ],
                                            startPoint: .top,
                                            endPoint: .bottom
                                        )
                                    )
                                    .frame(height: 22)
                                Spacer(minLength: 0)
                            }
                            .clipShape(RoundedRectangle(cornerRadius: 14))

                            // Focus glow ring
                            if isSearchFocused {
                                RoundedRectangle(cornerRadius: 14)
                                    .strokeBorder(
                                        categoryTitleGradient,
                                        lineWidth: 1.0
                                    )
                                    .opacity(0.35)
                            }
                        }
                        .shadow(
                            color: isSearchFocused
                                ? GameCardColorScheme.forType(gameType).primary.opacity(0.12)
                                : Color(red: 0.55, green: 0.50, blue: 0.68).opacity(0.06),
                            radius: isSearchFocused ? 8 : 4,
                            y: 2
                        )
                    }
                }
            )
            .animation(.easeInOut(duration: 0.2), value: isSearchFocused)
            .onAppear {
                guard !reduceMotion else { return }
                // Rotate placeholder suggestions every 3 seconds
                Timer.scheduledTimer(withTimeInterval: 3.0, repeats: true) { _ in
                    if searchText.isEmpty {
                        withAnimation(.easeInOut(duration: 0.3)) {
                            placeholderIndex = (placeholderIndex + 1) % placeholderSuggestions.count
                        }
                    }
                }
            }
        }
        .padding(.horizontal, 16)
        .padding(.vertical, 12)
        // Light mode: frost container panel wrapping entire header (matches GameHeader)
        .background {
            if isDark {
                EmptyView()
            } else {
                ZStack {
                    // Frost material base
                    RoundedRectangle(cornerRadius: 20)
                        .fill(.thinMaterial)
                    // Clean white wash
                    RoundedRectangle(cornerRadius: 20)
                        .fill(Color.white.opacity(0.25))
                }
                // Glass border with diagonal luminance
                .overlay(
                    RoundedRectangle(cornerRadius: 20)
                        .strokeBorder(
                            LinearGradient(
                                colors: [
                                    Color.white.opacity(0.70),
                                    Color.white.opacity(0.40),
                                    Color.white.opacity(0.60)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            ),
                            lineWidth: 0.75
                        )
                )
                // Frost shadow — cool lavender-grey
                .shadow(
                    color: Color(red: 0.55, green: 0.50, blue: 0.68).opacity(0.10),
                    radius: 6,
                    y: 3
                )
            }
        }
        .padding(.horizontal, isDark ? 16 : 4)
        .padding(.top, 8)
        .padding(.bottom, 4)
    }

    // MARK: - Category Grid

    /// Stable identity for tracking which items are visible, driving add/remove animation.
    private var filteredIds: [String] { paginatedCategories.map { $0.id } }

    private var categoryGrid: some View {
        let columns = isGridView
            ? [GridItem(.flexible(), spacing: 14), GridItem(.flexible(), spacing: 14)]
            : [GridItem(.flexible())]

        return LazyVGrid(columns: columns, spacing: 18) {
            ForEach(Array(paginatedCategories.enumerated()), id: \.element.id) { index, category in
                categoryCard(category)
                    .transition(
                        .asymmetric(
                            insertion: .opacity.combined(with: .scale(scale: 0.92)).combined(with: .offset(y: 12)),
                            removal: .opacity.combined(with: .scale(scale: 0.94))
                        )
                    )
            }
        }
        .animation(.smooth(duration: 0.4), value: filteredIds)
        .animation(
            .spring(response: 0.4, dampingFraction: 0.78),
            value: currentPage
        )
    }

    private func categoryCard(_ item: CategoryDisplayItem) -> some View {
        let colors = categoryGradient(item)
        let fav = isFavorite(item.id)
        let pct = item.progress.percentage
        let completed = pct >= 100.0
        let accentColor = colors.first ?? .white
        let locked = !tierManager.isCategoryAccessible(item.difficulty, gameType: gameType)
        let requiredTier = TierManager.minimumTierForDifficulty(item.difficulty, gameType: gameType)

        return ZStack(alignment: .topTrailing) {
            // Main card button — covers entire area, reliable tap in LazyVGrid
            Button {
                if locked {
                    lockedCategoryTapped = item
                    HapticsService.shared.warning()
                    return
                }
                // Phase 1: Seamless handoff — keep card visually pressed
                // after system isPressed goes false
                pressedCardId = item.id

                // Haptic + sound — soft, premium feel
                HapticsService.shared.buttonPress()
                AudioService.shared.playCategoryTap()

                // Phase 2: Bouncy spring-back after held 140ms
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.14) {
                    withAnimation(.spring(response: 0.35, dampingFraction: 0.55)) {
                        pressedCardId = nil
                    }
                }

                // Phase 3: Navigate after full bounce plays
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.48) {
                    navigateToGame(categoryId: item.id)
                }
            } label: {
                ZStack {
                    VStack(alignment: .leading, spacing: isGridView ? 6 : 10) {
                        // Top row: icon (heart is overlaid separately)
                        HStack(alignment: .top, spacing: 8) {
                            LiquidGlassIconContainer(
                                systemName: categoryIcon(item),
                                gradient: locked ? [.gray.opacity(0.5)] : colors,
                                size: isGridView ? 34 : 44
                            )
                            Spacer()
                            // Invisible spacer matching overlay size to preserve layout
                            Color.clear.frame(width: isGridView ? 72 : 44, height: 32)
                        }

                        // Category name
                        Text(item.name)
                            .font(isGridView ? .system(size: 13, weight: .bold) : .system(size: 16, weight: .bold))
                            .foregroundStyle(locked
                                ? (isDark ? .white.opacity(0.4) : .caribbeanPlum.opacity(0.5))
                                : (isDark ? .white : .caribbeanInk))
                            .lineLimit(isGridView ? 2 : 2)
                            .minimumScaleFactor(0.8)

                        // Description
                        Text(item.description)
                            .font(isGridView ? .system(size: 11) : .system(size: 13))
                            .foregroundStyle(isDark ? .white.opacity(locked ? 0.25 : 0.55) : .caribbeanPlum.opacity(locked ? 0.35 : 1))
                            .lineLimit(isGridView ? 2 : 3)
                            .frame(maxWidth: .infinity, alignment: .leading)

                        Spacer(minLength: 0)

                        // Bottom row: difficulty + progress / lock info
                        HStack(alignment: .center, spacing: 8) {
                            difficultyBadge(item.difficulty, locked: locked)

                            Spacer()

                            if locked {
                                // Tier upgrade pill
                                tierUpgradePill(tier: requiredTier)
                            } else if !isGridView {
                                VStack(alignment: .trailing, spacing: 3) {
                                    LiquidProgressBar(
                                        progress: pct,
                                        height: 5,
                                        gradient: progressGradient
                                    )
                                    .frame(width: 120)

                                    progressLabel(pct: pct, mastered: item.progress.mastered, total: item.progress.total, completed: completed)
                                }
                            }
                        }
                    }
                    .padding(isGridView ? 12 : 14)
                    .frame(height: isGridView ? 200 : nil)
                    .background(
                        PremiumTransparentCardBackground(
                            cornerRadius: 22,
                            accentColor: locked ? .gray.opacity(0.3) : (colors.first ?? .blue)
                        )
                    )
                    .clipShape(RoundedRectangle(cornerRadius: 22))

                    // Lock overlay for gated categories
                    if locked {
                        RoundedRectangle(cornerRadius: 22)
                            .fill(isDark ? .black.opacity(0.35) : .white.opacity(0.25))
                            .overlay(alignment: .center) {
                                Image(systemName: "lock.fill")
                                    .font(.system(size: isGridView ? 28 : 22, weight: .light))
                                    .foregroundStyle(
                                        LinearGradient(
                                            colors: requiredTier.gradientColors,
                                            startPoint: .topLeading,
                                            endPoint: .bottomTrailing
                                        )
                                    )
                                    .shadow(color: requiredTier.accentColor.opacity(0.4), radius: 8)
                            }
                            .allowsHitTesting(false)
                    }
                }
            }
            .buttonStyle(LumenCategoryCardStyle(
                accentColor: locked ? .gray : accentColor,
                isExternallyPressed: pressedCardId == item.id
            ))

            // Top-right overlay: progress + heart (hidden when locked)
            if !locked {
                HStack(spacing: 6) {
                    if isGridView {
                        circularProgress(pct: pct, completed: completed, colors: colors)
                    }

                    // Heart / favorite button
                    Button {
                        let wasFavorite = favoriteIds.contains(item.id)
                        withAnimation(.spring(response: 0.35, dampingFraction: 0.5)) {
                            HapticsService.shared.favoriteToggle()
                            toggleFavorite(item.id)
                        }
                        if wasFavorite {
                            AudioService.shared.playFavoriteRemove()
                        } else {
                            AudioService.shared.playFavoriteAdd()
                        }
                    } label: {
                        Image(systemName: fav ? "heart.fill" : "heart")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(fav ? .pink : (isDark ? .white.opacity(0.35) : .caribbeanMist))
                            .scaleEffect(fav ? 1.15 : 1.0)
                            .frame(width: 30, height: 30)
                            .contentShape(Circle())
                    }
                    .buttonStyle(LumenPressStyle(weight: .soft, accentColor: .pink))
                }
                .padding(.top, 8)
                .padding(.trailing, 8)
            }
        }
        .accessibilityLabel("\(item.name), \(item.difficulty.rawValue), \(locked ? "locked" : "\(Int(pct))% \(L.complete.lowercased())")")
        .accessibilityHint(locked ? "Requires \(requiredTier.displayName) tier" : L.doubleTapToStart)
    }

    // MARK: - Circular Progress (Grid Cards)

    private func circularProgress(pct: Double, completed: Bool, colors: [Color]) -> some View {
        let effectiveColors = completed
            ? [isDark ? Color.green : Color(hex: "#059669"), isDark ? Color.green : Color(hex: "#059669")]
            : colors
        return ZStack {
            // Track ring (Story 6.2.1 — category accent tint for light mode)
            Circle()
                .stroke(
                    isDark
                        ? .white.opacity(0.08)
                        : (colors.first ?? Color(hex: "#C494FC")).opacity(0.12),
                    lineWidth: 3
                )
            // Progress arc
            Circle()
                .trim(from: 0, to: min(pct / 100.0, 1.0))
                .stroke(
                    LinearGradient(colors: effectiveColors, startPoint: .topLeading, endPoint: .bottomTrailing),
                    style: StrokeStyle(lineWidth: 3, lineCap: .round)
                )
                .rotationEffect(.degrees(-90))
            // Percentage label
            Text("\(Int(pct))")
                .font(.system(size: 9, weight: .bold, design: .rounded))
                .foregroundStyle(isDark ? .white.opacity(0.7) : .caribbeanPlum)
        }
        .frame(width: 30, height: 30)
    }

    // MARK: - Progress Label (List Cards)

    private func progressLabel(pct: Double, mastered: Int, total: Int, completed: Bool) -> some View {
        let completedGreen: Color = isDark ? .green : Color(hex: "#059669")
        return Group {
            if completed && !isDark {
                // Light mode completed: solid emerald pill with white text
                HStack(spacing: 4) {
                    Image(systemName: "checkmark.seal.fill")
                        .font(.system(size: 9))
                    Text(L.complete)
                        .font(.caption2.bold())
                }
                .foregroundStyle(.white)
                .padding(.horizontal, 8)
                .padding(.vertical, 3)
                .background(
                    Capsule().fill(completedGreen)
                        .overlay(Capsule().strokeBorder(.white.opacity(0.25), lineWidth: 0.5))
                )
                .shadow(color: completedGreen.opacity(0.35), radius: 4, x: 0, y: 2)
            } else if completed {
                // Dark mode completed
                HStack(spacing: 4) {
                    Image(systemName: "checkmark.seal.fill")
                        .font(.system(size: 9))
                    Text(L.complete)
                        .font(.caption2.bold())
                }
                .foregroundStyle(completedGreen)
            } else {
                // In-progress
                HStack(spacing: 4) {
                    Text("\(mastered)/\(total)")
                        .font(.caption2)
                        .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanMist)
                    Text("·")
                        .foregroundStyle(isDark ? .white.opacity(0.25) : .caribbeanMist)
                    Text("\(Int(pct))%")
                        .font(.caption2.bold())
                }
                .foregroundStyle(isDark ? .white.opacity(0.6) : .caribbeanPlum)
            }
        }
    }

    private func difficultyBadge(_ difficulty: Difficulty, locked: Bool = false) -> some View {
        let gradient = locked ? [Color.gray.opacity(0.5), Color.gray.opacity(0.3)] : difficulty.gradientColors
        return HStack(spacing: 4) {
            // Difficulty icon
            Image(systemName: difficulty.icon)
                .font(.system(size: 9, weight: .bold))

            Text(difficulty.rawValue.capitalized)
                .font(.system(size: 10, weight: .bold, design: .rounded))
                .lineLimit(1)
                .fixedSize(horizontal: true, vertical: false)

            // Star cluster
            HStack(spacing: 2) {
                ForEach(0..<difficulty.starCount, id: \.self) { _ in
                    Image(systemName: "star.fill")
                        .font(.system(size: 6))
                }
            }
        }
        .foregroundStyle(.white)
        .fixedSize()
        .padding(.horizontal, 12)
        .padding(.vertical, 5)
        .background(
            Capsule()
                .fill(
                    LinearGradient(
                        colors: gradient,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .overlay(
                    // Inner glow highlight — top-to-bottom white wash
                    Capsule()
                        .fill(
                            LinearGradient(
                                colors: [.white.opacity(0.30), .clear],
                                startPoint: .top,
                                endPoint: .bottom
                            )
                        )
                )
                .overlay(
                    // Crisp border stroke
                    Capsule()
                        .strokeBorder(.white.opacity(0.25), lineWidth: 0.75)
                )
        )
        .shadow(color: locked ? .clear : difficulty.pillShadowColor.opacity(0.40), radius: 8, x: 0, y: 3)
    }

    // MARK: - Tier Upgrade Pill

    private func tierUpgradePill(tier: MembershipTier) -> some View {
        HStack(spacing: 4) {
            Image(systemName: tier.iconName)
                .font(.system(size: 9, weight: .bold))
            Text(tier.displayName)
                .font(.system(size: 10, weight: .bold, design: .rounded))
                .lineLimit(1)
        }
        .foregroundStyle(.white)
        .padding(.horizontal, 10)
        .padding(.vertical, 5)
        .background(
            Capsule()
                .fill(
                    LinearGradient(
                        colors: tier.gradientColors,
                        startPoint: .leading,
                        endPoint: .trailing
                    )
                )
                .overlay(
                    Capsule()
                        .strokeBorder(.white.opacity(0.25), lineWidth: 0.75)
                )
        )
        .shadow(color: tier.accentColor.opacity(0.35), radius: 6, x: 0, y: 2)
    }

    // MARK: - Empty State

    private var emptyState: some View {
        VStack(spacing: 20) {
            // Animated icon
            ZStack {
                Circle()
                    .fill(
                        RadialGradient(
                            colors: [paginationAccentColors[0].opacity(0.12), .clear],
                            center: .center,
                            startRadius: 0,
                            endRadius: 50
                        )
                    )
                    .frame(width: 100, height: 100)
                    .scaleEffect(emptyPulse ? 1.15 : 0.95)

                Image(systemName: frozenEmptyIcon)
                    .font(.system(size: 38, weight: .light))
                    .foregroundStyle(
                        LinearGradient(
                            colors: paginationAccentColors,
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .contentTransition(.symbolEffect(.replace))
                    .offset(y: emptyPulse ? -2 : 2)
            }

            VStack(spacing: 8) {
                Text(frozenEmptyTitle)
                    .font(.title3.bold())
                    .foregroundStyle(isDark ? .white.opacity(0.75) : .caribbeanInk)
                    .contentTransition(.interpolate)

                Text(frozenEmptySubtitle)
                    .font(.subheadline)
                    .foregroundStyle(isDark ? .white.opacity(0.4) : .caribbeanPlum)
                    .multilineTextAlignment(.center)
                    .frame(maxWidth: 260)
                    .contentTransition(.interpolate)
            }

            // Action hint
            if frozenShowClearButton {
                Button {
                    withAnimation(.smooth(duration: 0.35)) {
                        showFavoritesOnly = false
                        showCompletedFilter = false
                    }
                } label: {
                    Label(L.clearFilters, systemImage: "xmark.circle")
                        .font(.subheadline.weight(.medium))
                        .foregroundStyle(paginationAccentColors[0])
                        .padding(.horizontal, 16)
                        .padding(.vertical, 8)
                        .background(
                            Capsule()
                                .fill(paginationAccentColors[0].opacity(0.1))
                                .overlay(Capsule().strokeBorder(paginationAccentColors[0].opacity(0.15), lineWidth: 0.5))
                        )
                }
                .buttonStyle(LumenPressStyle(weight: .medium))
                .transition(.opacity.combined(with: .scale(scale: 0.9)))
            }
        }
        .onAppear {
            withAnimation(.easeInOut(duration: 2.5).repeatForever(autoreverses: true)) {
                emptyPulse = true
            }
        }
    }

    /// Snapshot the empty-state content BEFORE the animation runs
    /// so it stays stable during the fade-out/fade-in transition.
    private func freezeEmptyContentIfNeeded() {
        let willBeEmpty = filteredCategories.isEmpty
        guard willBeEmpty else { return }

        frozenEmptyIcon = emptyIconForCurrentFilters
        frozenEmptyTitle = emptyTitleForCurrentFilters
        frozenEmptySubtitle = emptySubtitleForCurrentFilters
        frozenShowClearButton = showFavoritesOnly || showCompletedFilter
    }

    private var emptyIconForCurrentFilters: String {
        if showFavoritesOnly { return "heart.slash" }
        if showCompletedFilter { return "checkmark.circle" }
        if !searchText.isEmpty { return "magnifyingglass" }
        return "tray"
    }

    private var emptyTitleForCurrentFilters: String {
        if showFavoritesOnly { return L.noFavouritesYet }
        if showCompletedFilter { return L.allComplete }
        if !searchText.isEmpty { return L.noResults }
        return L.noCategories
    }

    private var emptySubtitleForCurrentFilters: String {
        if showFavoritesOnly { return L.tapHeartToSave }
        if showCompletedFilter { return L.youveFinishedEverything }
        if !searchText.isEmpty { return L.tryDifferentSearch }
        return L.categoriesWillAppear
    }

    // MARK: - Logic

    private func loadCategories() {
        let langPref = languagePrefs.first
        let source = langPref?.sourceLanguage ?? SupportedLanguage.english.rawValue
        let target = langPref?.targetLanguage ?? SupportedLanguage.spanish.rawValue
        let progressService = ProgressService(modelContext: modelContext)

        Task {
            switch gameType {
            case .flashCards:
                let cats = await contentLoader.loadFlashcardCategories(source: source, target: target)
                let limit = tierManager.flashcardLimit
                categories = cats.enumerated().map { index, cat in
                    let effectiveCount = min(cat.items.count, limit)
                    let progress = progressService.categoryProgress(
                        gameType: .flashCards, category: cat.id, totalItems: effectiveCount, source: source, target: target
                    )
                    return CategoryDisplayItem(
                        id: cat.id,
                        name: cat.name,
                        description: cat.description,
                        icon: cat.icon,
                        difficulty: cat.difficulty,
                        itemCount: effectiveCount,
                        progress: progress,
                        order: index
                    )
                }
            case .grammar:
                let cats = await contentLoader.loadGrammarCategories(source: source, target: target)
                categories = cats.enumerated().map { index, cat in
                    let progress = progressService.categoryProgress(
                        gameType: .grammar, category: cat.id, totalItems: cat.items.count, source: source, target: target
                    )
                    return CategoryDisplayItem(
                        id: cat.id,
                        name: cat.name,
                        description: cat.description,
                        icon: cat.icon,
                        difficulty: cat.difficulty,
                        itemCount: cat.items.count,
                        progress: progress,
                        order: index
                    )
                }
            case .wordBuilder:
                let cats = await contentLoader.loadWordBuilderCategories(source: source, target: target)
                categories = cats.enumerated().map { index, cat in
                    let progress = progressService.categoryProgress(
                        gameType: .wordBuilder, category: cat.id, totalItems: cat.items.count, source: source, target: target
                    )
                    return CategoryDisplayItem(
                        id: cat.id,
                        name: cat.name,
                        description: cat.description,
                        icon: cat.icon,
                        difficulty: cat.difficulty,
                        itemCount: cat.items.count,
                        progress: progress,
                        order: index
                    )
                }
            }
            isLoading = false
        }
    }

    private func navigateToGame(categoryId: String) {
        switch gameType {
        case .flashCards:
            navigationPath.append(AppRoute.flashcardsGame(categoryId: categoryId))
        case .grammar:
            navigationPath.append(AppRoute.grammarGame(categoryId: categoryId))
        case .wordBuilder:
            navigationPath.append(AppRoute.wordBuilderGame(categoryId: categoryId))
        }
    }

    private func isFavorite(_ categoryId: String) -> Bool {
        favoriteIds.contains(categoryId)
    }

    private func toggleFavorite(_ categoryId: String) {
        let progressService = ProgressService(modelContext: modelContext)
        let langPref = languagePrefs.first
        progressService.toggleFavorite(
            gameType: gameType,
            categoryKey: categoryId,
            source: langPref?.sourceLanguage ?? "english",
            target: langPref?.targetLanguage ?? "spanish"
        )
    }

    private func categoryGradient(_ item: CategoryDisplayItem) -> [Color] {
        // Story 6.2.1 — category-specific accent color variation in light mode
        // Each difficulty level gets a different accent to create visual variety in the grid
        if !isDark {
            switch item.difficulty {
            case .beginner:
                switch gameType {
                case .flashCards: return [Color(hex: "0EA5E9"), Color(hex: "06B6D4")]
                case .grammar: return [Color(hex: "F472B6"), Color(hex: "FB7185")]
                case .wordBuilder: return [Color(hex: "F59E0B"), Color(hex: "FB923C")]
                }
            case .intermediate:
                switch gameType {
                case .flashCards: return [Color(hex: "667eea"), Color(hex: "8b5cf6")]
                case .grammar: return [Color(hex: "f093fb"), Color(hex: "C494FC")]
                case .wordBuilder: return [Color(hex: "fbbf24"), Color(hex: "f97316")]
                }
            case .advanced:
                switch gameType {
                case .flashCards: return [Color(hex: "06B6D4"), Color(hex: "14B8A6")]
                case .grammar: return [Color(hex: "f5576c"), Color(hex: "e11d48")]
                case .wordBuilder: return [Color(hex: "ea580c"), Color(hex: "dc2626")]
                }
            }
        }
        // Dark mode — unchanged original game-type gradients
        switch gameType {
        case .flashCards: return [Color(hex: "#667eea"), Color(hex: "#06b6d4")]
        case .grammar: return [Color(hex: "#f093fb"), Color(hex: "#f5576c")]
        case .wordBuilder: return [Color(hex: "#fbbf24"), Color(hex: "#f97316")]
        }
    }

    private var progressGradient: [Color] {
        switch gameType {
        case .flashCards: [Color(hex: "#667eea"), Color(hex: "#06b6d4"), Color(hex: "#0d9488")]
        case .grammar: [Color(hex: "#f093fb"), Color(hex: "#f5576c"), Color(hex: "#e11d48")]
        case .wordBuilder: [Color(hex: "#fbbf24"), Color(hex: "#f59e0b"), Color(hex: "#ea580c")]
        }
    }

    private func categoryIcon(_ item: CategoryDisplayItem) -> String {
        SFSymbolMapping.icon(for: item.icon)
    }

}

// MARK: - Difficulty Helpers

extension Difficulty {
    var icon: String {
        switch self {
        case .beginner: "leaf.fill"
        case .intermediate: "flame.fill"
        case .advanced: "medal.fill"
        }
    }

    var starCount: Int {
        switch self {
        case .beginner: 1
        case .intermediate: 2
        case .advanced: 3
        }
    }
}
