import SwiftUI

/// A property wrapper that behaves like `@State` (preserving SwiftUI animations)
/// but also persists its value to `UserDefaults`.
///
/// Usage:
/// ```swift
/// @PersistedState("my_key") private var isCollapsed = false
/// ```
///
/// When the value changes (e.g. inside `withAnimation`), the `@State` mutation
/// happens within the animation transaction (so spring/easeInOut animations work),
/// and the value is simultaneously persisted to `UserDefaults`.
@propertyWrapper
struct PersistedState: DynamicProperty {
    @State private var value: Bool
    private let key: String

    init(wrappedValue: Bool, _ key: String) {
        self.key = key
        let stored = UserDefaults.standard.object(forKey: key) as? Bool
        _value = State(initialValue: stored ?? wrappedValue)
    }

    var wrappedValue: Bool {
        get { value }
        nonmutating set {
            value = newValue
            UserDefaults.standard.set(newValue, forKey: key)
        }
    }

    var projectedValue: Binding<Bool> {
        Binding(
            get: { value },
            set: { newValue in
                value = newValue
                UserDefaults.standard.set(newValue, forKey: key)
            }
        )
    }
}
