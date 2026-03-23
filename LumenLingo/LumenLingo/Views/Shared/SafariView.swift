import SafariServices
import SwiftUI

/// Wraps `SFSafariViewController` so legal documents open as an in-app browser sheet
/// rather than bouncing the user out to Safari.
struct SafariView: UIViewControllerRepresentable {
    let url: URL

    func makeUIViewController(context: Context) -> SFSafariViewController {
        let config = SFSafariViewController.Configuration()
        config.entersReaderIfAvailable = false
        config.barCollapsingEnabled = true

        let vc = SFSafariViewController(url: url, configuration: config)
        vc.preferredBarTintColor = .systemBackground
        vc.preferredControlTintColor = .tintColor
        return vc
    }

    func updateUIViewController(_ uiViewController: SFSafariViewController, context: Context) {}
}
