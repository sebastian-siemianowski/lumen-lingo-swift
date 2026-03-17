import SwiftUI
import PDFKit

// MARK: - PDF Thumbnail Rail (Story 4)

/// Horizontal thumbnail rail for multi-page PDF navigation.
/// Slides up from bottom, shows page miniatures with tier-highlighted current page.
struct PDFThumbnailRailView: View {
    let document: PDFDocument
    let currentPageIndex: Int
    let tierColors: [Color]
    let onPageTap: (Int) -> Void
    let onDismiss: () -> Void

    @Environment(\.colorScheme) private var colorScheme
    @State private var thumbnails: [Int: UIImage] = [:]

    private var isDark: Bool { colorScheme == .dark }
    private var pageCount: Int { document.pageCount }

    var body: some View {
        VStack(spacing: 0) {
            // Drag handle
            Capsule()
                .fill(isDark ? Color.white.opacity(0.3) : Color.black.opacity(0.2))
                .frame(width: 36, height: 4)
                .padding(.top, 8)
                .padding(.bottom, 6)

            // Thumbnails
            ScrollViewReader { proxy in
                ScrollView(.horizontal, showsIndicators: false) {
                    HStack(spacing: 8) {
                        ForEach(0..<pageCount, id: \.self) { index in
                            thumbnailCell(for: index)
                                .id(index)
                                .onTapGesture {
                                    PDFHapticService.shared.buttonTap()
                                    onPageTap(index)
                                }
                                .accessibilityLabel("Page \(index + 1)")
                                .accessibilityHint("Double tap to jump to this page")
                        }
                    }
                    .padding(.horizontal, 16)
                }
                .onChange(of: currentPageIndex) { _, newValue in
                    withAnimation(.easeInOut(duration: 0.2)) {
                        proxy.scrollTo(newValue, anchor: .center)
                    }
                }
            }
            .padding(.bottom, 10)
        }
        .frame(height: 76)
        .background(
            RoundedRectangle(cornerRadius: 20, style: .continuous)
                .fill(.ultraThinMaterial)
                .overlay(alignment: .top) {
                    // Tier accent line
                    LinearGradient(colors: tierColors, startPoint: .leading, endPoint: .trailing)
                        .frame(height: 1)
                        .clipShape(UnevenRoundedRectangle(topLeadingRadius: 20, topTrailingRadius: 20))
                }
        )
        .gesture(
            DragGesture(minimumDistance: 20)
                .onEnded { value in
                    if value.translation.height > 30 { onDismiss() }
                }
        )
        .onAppear { generateThumbnails() }
    }

    // MARK: - Thumbnail Cell

    private func thumbnailCell(for index: Int) -> some View {
        let isCurrent = index == currentPageIndex
        let thumbWidth: CGFloat = 40
        let thumbHeight: CGFloat = 52 // US Letter aspect ratio

        return ZStack {
            if let img = thumbnails[index] {
                Image(uiImage: img)
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(width: thumbWidth, height: thumbHeight)
            } else {
                RoundedRectangle(cornerRadius: 4)
                    .fill(isDark ? Color.white.opacity(0.06) : Color.black.opacity(0.04))
                    .frame(width: thumbWidth, height: thumbHeight)
            }
        }
        .clipShape(RoundedRectangle(cornerRadius: 4))
        .overlay(
            RoundedRectangle(cornerRadius: 4)
                .strokeBorder(
                    isCurrent
                        ? AnyShapeStyle(LinearGradient(colors: tierColors, startPoint: .topLeading, endPoint: .bottomTrailing))
                        : AnyShapeStyle(isDark ? Color.white.opacity(0.1) : Color.black.opacity(0.08)),
                    lineWidth: isCurrent ? 2 : 0.5
                )
        )
        .scaleEffect(isCurrent ? 1.08 : 1.0)
        .animation(.easeInOut(duration: 0.2), value: isCurrent)
    }

    // MARK: - Thumbnail Generation

    private func generateThumbnails() {
        let doc = document
        let count = pageCount
        Task.detached(priority: .userInitiated) {
            for i in 0..<count {
                autoreleasepool {
                    guard let page = doc.page(at: i) else { return }
                    let thumb = page.thumbnail(of: CGSize(width: 80, height: 104), for: .mediaBox)
                    Task { @MainActor in
                        thumbnails[i] = thumb
                    }
                }
            }
        }
    }
}
