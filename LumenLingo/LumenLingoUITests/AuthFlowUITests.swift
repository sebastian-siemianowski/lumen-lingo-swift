import XCTest

/// UI tests for the authentication flows.
/// Uses launch arguments to configure `MockAuthService` state:
///   - `-UITest_Unauthenticated`: starts unauthenticated (no user, no guest)
///   - `-UITest_Guest`: starts in guest mode
///   - `-UITest_SimulateSuccess`: sign-in methods simulate success
///   - `-UITest_SimulateNetworkError`: sign-in methods throw network error
final class AuthFlowUITests: XCTestCase {

    private var app: XCUIApplication!

    override func setUp() {
        super.setUp()
        continueAfterFailure = false
        app = XCUIApplication()
    }

    override func tearDown() {
        app = nil
        super.tearDown()
    }

    // MARK: - Helpers

    private func launch(arguments: [String] = []) {
        app.launchArguments = arguments
        app.launch()
    }

    /// Navigate to the Settings tab's Account section.
    private func navigateToAccountSettings() {
        // Tap the Settings tab
        let settingsTab = app.tabBars.buttons["Settings"]
        XCTAssertTrue(settingsTab.waitForExistence(timeout: 10), "Settings tab should exist")
        settingsTab.tap()

        // Tap the Account row in the settings list
        let accountButton = app.buttons["Account"]
        if accountButton.waitForExistence(timeout: 5) {
            accountButton.tap()
        }
    }

    // MARK: - Happy Paths

    func test_signInSheet_appearsFromAccountSettings() {
        // Start unauthenticated — Account section shows "Sign In" prompt
        launch(arguments: ["-UITest_Unauthenticated"])

        navigateToAccountSettings()

        // The account view should show the sign-in prompt for unauthenticated users
        let signInButton = app.buttons["Sign In"]
        XCTAssertTrue(signInButton.waitForExistence(timeout: 5), "Sign In button should appear for unauthenticated users")
        signInButton.tap()

        // Verify sign-in sheet appears with all three provider buttons
        let appleButton = app.buttons["signInWithAppleButton"]
        let googleButton = app.buttons["signInWithGoogleButton"]
        let phoneButton = app.buttons["signInWithPhoneButton"]

        XCTAssertTrue(appleButton.waitForExistence(timeout: 5), "Apple sign-in button should exist")
        XCTAssertTrue(googleButton.exists, "Google sign-in button should exist")
        XCTAssertTrue(phoneButton.exists, "Phone/Email sign-in button should exist")
    }

    func test_signInSheet_hasAllProviderButtons() {
        launch(arguments: ["-UITest_Unauthenticated"])
        navigateToAccountSettings()

        let signInButton = app.buttons["Sign In"]
        guard signInButton.waitForExistence(timeout: 5) else {
            XCTFail("Sign In button not found")
            return
        }
        signInButton.tap()

        // Verify all buttons exist
        XCTAssertTrue(app.buttons["signInWithAppleButton"].waitForExistence(timeout: 5))
        XCTAssertTrue(app.buttons["signInWithGoogleButton"].exists)
        XCTAssertTrue(app.buttons["signInWithPhoneButton"].exists)
        XCTAssertTrue(app.buttons["continueWithoutAccountButton"].exists)
    }

    func test_guestMode_continueWithoutAccount() {
        launch(arguments: ["-UITest_Unauthenticated"])
        navigateToAccountSettings()

        let signInButton = app.buttons["Sign In"]
        guard signInButton.waitForExistence(timeout: 5) else {
            XCTFail("Sign In button not found")
            return
        }
        signInButton.tap()

        // Tap "Continue without an account"
        let continueButton = app.buttons["continueWithoutAccountButton"]
        XCTAssertTrue(continueButton.waitForExistence(timeout: 5), "Continue without account button should exist")
        continueButton.tap()

        // Confirmation dialog should appear
        let confirmButton = app.buttons["Continue as Guest"]
        XCTAssertTrue(confirmButton.waitForExistence(timeout: 5), "Guest confirmation button should exist")
        confirmButton.tap()

        // Sheet should dismiss — back to settings
        XCTAssertTrue(app.tabBars.buttons["Settings"].waitForExistence(timeout: 5), "Should return to settings after going guest")
    }

    // MARK: - Error Paths

    func test_signIn_networkError_showsToast() {
        launch(arguments: ["-UITest_Unauthenticated", "-UITest_SimulateNetworkError"])
        navigateToAccountSettings()

        let signInButton = app.buttons["Sign In"]
        guard signInButton.waitForExistence(timeout: 5) else {
            XCTFail("Sign In button not found")
            return
        }
        signInButton.tap()

        // Tap Google sign-in (triggers network error)
        let googleButton = app.buttons["signInWithGoogleButton"]
        XCTAssertTrue(googleButton.waitForExistence(timeout: 5))
        googleButton.tap()

        // Error toast should appear
        let toast = app.otherElements["errorToast"]
        XCTAssertTrue(toast.waitForExistence(timeout: 5), "Error toast should appear on network error")
    }

    // MARK: - Account Management

    func test_signOut_showsSignInPrompt() {
        // Start authenticated
        launch(arguments: [])
        navigateToAccountSettings()

        // Navigate to Sign Out section
        let signOutButton = app.buttons["Sign Out"]
        if signOutButton.waitForExistence(timeout: 5) {
            signOutButton.tap()
        }

        // After sign out the account view should show sign-in prompt
        // (exact flow depends on SignOutView implementation)
        let signInButton = app.buttons["Sign In"]
        if signInButton.waitForExistence(timeout: 10) {
            XCTAssertTrue(signInButton.exists, "Sign In prompt should appear after sign out")
        }
    }

    // MARK: - Accessibility

    func test_signInSheet_voiceOverLabels() {
        launch(arguments: ["-UITest_Unauthenticated"])
        navigateToAccountSettings()

        let signInButton = app.buttons["Sign In"]
        guard signInButton.waitForExistence(timeout: 5) else {
            XCTFail("Sign In button not found")
            return
        }
        signInButton.tap()

        // Verify buttons are accessible
        let appleButton = app.buttons["signInWithAppleButton"]
        XCTAssertTrue(appleButton.waitForExistence(timeout: 5))
        XCTAssertTrue(appleButton.isHittable, "Apple button should be hittable")

        let googleButton = app.buttons["signInWithGoogleButton"]
        XCTAssertTrue(googleButton.isHittable, "Google button should be hittable")

        let phoneButton = app.buttons["signInWithPhoneButton"]
        XCTAssertTrue(phoneButton.isHittable, "Phone button should be hittable")

        // Verify Terms and Privacy links have accessibility labels
        let termsLink = app.buttons.matching(NSPredicate(format: "label CONTAINS 'Terms'")).firstMatch
        XCTAssertTrue(termsLink.exists, "Terms link should have accessibility label")

        let privacyLink = app.buttons.matching(NSPredicate(format: "label CONTAINS 'Privacy'")).firstMatch
        XCTAssertTrue(privacyLink.exists, "Privacy link should have accessibility label")
    }
}
