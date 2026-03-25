FIREBASE INTEGRATION GUIDE FOR LUMENLINGO
==========================================

PROJECT CONTEXT: PROTOTYPE PHASE - NO EXISTING USERS
====================================================

This is a COMPLETE migration guide from Base44 to Firebase for a prototype
application with NO existing users. This allows for a clean migration without
complex data preservation requirements.

PRODUCT VISION: Transform LumenLingo from a web prototype into a commercial
iOS/iPad application with Firebase backend, offline-first architecture, and
in-app subscriptions.

TABLE OF CONTENTS
-----------------
1.  Prerequisites & Setup
2.  Firebase Project Configuration
3.  Migration User Stories (Step-by-Step)
4.  Authentication Implementation
5.  Firestore Database Structure
6.  Offline-First Architecture
7.  Security Rules
8.  Migration from Base44 Code
9.  Expo & React Native Setup
10. iOS/iPad Commercial Release
11. In-App Subscriptions (RevenueCat)
12. Testing & Quality Assurance
13. Deployment Checklist
14. Troubleshooting Guide

==========================================
PART 1: PREREQUISITES & SETUP
==========================================

REQUIRED ACCOUNTS:
------------------
✓ Google account (Firebase)
✓ Apple Developer Account ($99/year) - for iOS distribution
✓ RevenueCat account (free tier available) - for subscriptions
✓ Expo account (free tier available)

REQUIRED SOFTWARE:
------------------
✓ Node.js 18+ and npm
✓ Git for version control
✓ VS Code or preferred IDE
✓ Xcode (Mac only, for iOS development)
✓ Expo CLI: npm install -g expo-cli

ESTIMATED TIMELINE:
------------------
- Firebase Migration: 3-4 days
- Expo/React Native Setup: 2-3 days
- iOS-specific features: 2-3 days
- Subscription integration: 2-3 days
- Testing & polish: 3-5 days
TOTAL: 12-18 days for complete migration

==========================================
PART 2: FIREBASE PROJECT CONFIGURATION
==========================================

STEP 1: CREATE FIREBASE PROJECT
--------------------------------

1. Go to https://console.firebase.google.com/
2. Click "Create a project"
3. Name: "lumenlingo-production"
4. Enable Google Analytics: YES (recommended)
5. Analytics location: Choose your region
6. Wait for project creation (2-3 minutes)

STEP 2: REGISTER WEB APP
-------------------------

1. Click Web icon (</>) to add web app
2. App nickname: "LumenLingo Web"
3. Setup Firebase Hosting: YES
4. Click "Register app"
5. Copy configuration - SAVE THIS:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "lumenlingo-production.firebaseapp.com",
  projectId: "lumenlingo-production",
  storageBucket: "lumenlingo-production.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123..."
};
```

STEP 3: ENABLE AUTHENTICATION
------------------------------

1. Go to Authentication > Sign-in method
2. Enable Email/Password
   - Email/Password: ENABLE
   - Email link (passwordless): OPTIONAL
3. Enable Google Sign-In
   - Click Google provider
   - Enable
   - Public-facing name: "LumenLingo"
   - Support email: your-email@example.com
4. Configure authorized domains:
   - localhost (development)
   - your-domain.com (production)
   - your-app.firebaseapp.com (default)

STEP 4: CREATE FIRESTORE DATABASE
----------------------------------

1. Go to Firestore Database
2. Click "Create database"
3. Location: Choose closest to users (e.g., us-east1)
4. Start in PRODUCTION mode (we'll add rules later)
5. Click "Enable"
6. Wait 2-3 minutes for provisioning

STEP 5: ENABLE FIREBASE STORAGE (OPTIONAL)
-------------------------------------------

If you plan to store user-generated content:
1. Go to Storage
2. Click "Get started"
3. Start in production mode
4. Use same location as Firestore
5. Click "Done"

==========================================
PART 3: MIGRATION USER STORIES
==========================================

STORY 1: PROJECT SETUP & FIREBASE INSTALLATION
-----------------------------------------------
Objective: Install Firebase SDK and create configuration files

Tasks:
□ Install Firebase: npm install firebase
□ Create src/firebase/ directory
□ Create src/firebase/config.js with Firebase configuration
□ Add .env file with Firebase credentials
□ Add .env to .gitignore
□ Test Firebase initialization

Time estimate: 2 hours

Acceptance criteria:
- Firebase SDK installed without errors
- Configuration file created and working
- Environment variables properly set
- No credentials in source control

---

STORY 2: AUTHENTICATION SERVICE IMPLEMENTATION
----------------------------------------------
Objective: Create complete authentication service with Firebase

Tasks:
□ Create src/firebase/authService.js
□ Implement signUp(email, password, fullName)
□ Implement signIn(email, password)
□ Implement signInWithGoogle()
□ Implement logOut()
□ Implement onAuthChange(callback)
□ Implement getCurrentUser()
□ Implement updateProfile(data)
□ Add error handling for all methods
□ Test each authentication method

Time estimate: 4 hours

Acceptance criteria:
- All auth methods work correctly
- Error handling provides clear messages
- User profile updates persist
- Auth state changes trigger callbacks

---

STORY 3: AUTH CONTEXT & GLOBAL STATE
------------------------------------
Objective: Create React context for authentication state management

Tasks:
□ Create src/contexts/AuthContext.jsx
□ Implement AuthProvider component
□ Implement useAuth() custom hook
□ Add loading states during auth operations
□ Handle auth persistence across page reloads
□ Test context updates on auth changes

Time estimate: 3 hours

Acceptance criteria:
- Auth state accessible throughout app
- Loading states prevent UI flickering
- Auth persists on page reload
- Context updates trigger re-renders

---

STORY 4: FIRESTORE SERVICE IMPLEMENTATION
-----------------------------------------
Objective: Create complete Firestore service for data operations

Tasks:
□ Create src/firebase/firestoreService.js
□ Implement getUserProfile(userId)
□ Implement updateUserProfile(userId, data)
□ Implement getLanguagePreferences(userId)
□ Implement saveLanguagePreference(userId, preference)
□ Implement getGameProgress(userId, filters)
□ Implement saveGameProgress(userId, progress)
□ Implement getMasteredContent(userId, filters)
□ Implement saveMasteredContent(userId, content)
□ Implement getFavoriteCategories(userId)
□ Implement toggleFavoriteCategory(userId, category)
□ Add batch operations for bulk updates
□ Add proper error handling and retries

Time estimate: 6 hours

Acceptance criteria:
- All CRUD operations work correctly
- Batch operations improve performance
- Errors are caught and handled gracefully
- Data structure matches design

---

STORY 5: OFFLINE SYNC REPLACEMENT
----------------------------------
Objective: Replace Base44 in offlineSync.js with Firebase

Tasks:
□ Open components/utils/offlineSync.js
□ Remove all Base44 imports
□ Import Firebase services
□ Replace getCurrentUser() with Firebase version
□ Replace uploadDataToServer() with Firebase batch writes
□ Replace downloadDataFromServer() with Firebase queries
□ Keep localStorage as offline cache
□ Implement sync conflict resolution
□ Add online/offline detection
□ Test sync in offline mode
□ Test sync when coming back online

Time estimate: 5 hours

Acceptance criteria:
- No Base44 dependencies remain
- Upload syncs local data to Firestore
- Download fetches latest from Firestore
- Offline mode works with localStorage
- Conflicts resolve correctly (last-write-wins)

---

STORY 6: SECURITY RULES CONFIGURATION
-------------------------------------
Objective: Implement Firestore security rules to protect user data

Tasks:
□ Open Firestore > Rules in Firebase Console
□ Write rules for users collection
□ Write rules for subcollections
□ Test rules with Firebase Emulator
□ Deploy rules to production
□ Verify users can only access their data

Time estimate: 2 hours

Acceptance criteria:
- Users can only read/write their own data
- Anonymous users cannot access any data
- Rules are well-documented
- Rules pass security testing

---

STORY 7: PROFILE PAGE FIREBASE INTEGRATION
------------------------------------------
Objective: Update Profile page to use Firebase instead of Base44

Tasks:
□ Open pages/Profile.jsx
□ Replace base44 imports with Firebase
□ Update sync functions to use Firebase
□ Test upload/download functionality
□ Test offline mode persistence
□ Update UI feedback messages

Time estimate: 3 hours

Acceptance criteria:
- Profile loads data from Firestore
- Sync buttons work correctly
- Offline indicator shows correctly
- All profile features functional

---

STORY 8: DASHBOARD FIREBASE INTEGRATION
---------------------------------------
Objective: Update Dashboard to load data from Firebase

Tasks:
□ Open pages/Dashboard.jsx
□ Replace Base44 getCurrentUser with Firebase
□ Load user profile from Firestore
□ Load game progress from Firestore
□ Update recent activity display
□ Test all dashboard features

Time estimate: 3 hours

Acceptance criteria:
- Dashboard loads user data correctly
- Recent activity shows latest games
- Stats calculate correctly
- No Base44 dependencies remain

---

STORY 9: GAME PAGES FIREBASE INTEGRATION
----------------------------------------
Objective: Update all game pages to save progress to Firebase

Tasks:
□ Update pages/FlashCards.jsx to use Firebase
□ Update pages/Grammar.jsx to use Firebase
□ Update pages/WordBuilder.jsx to use Firebase
□ Update category pages to use Firebase
□ Test game completion saves to Firestore
□ Test mastered content persists

Time estimate: 4 hours

Acceptance criteria:
- Game progress saves to Firestore
- Mastered content syncs correctly
- XP and level updates work
- All games functional with Firebase

---

STORY 10: LANGUAGE CONTEXT FIREBASE INTEGRATION
-----------------------------------------------
Objective: Update language preferences to sync with Firebase

Tasks:
□ Open components/language/LanguageContext.jsx
□ Update to load preferences from Firestore
□ Save preference changes to Firestore
□ Keep localStorage for offline access
□ Test language switching

Time estimate: 2 hours

Acceptance criteria:
- Language preferences load from Firestore
- Changes sync to Firebase immediately
- Offline mode uses localStorage
- Language switching is instant

---

STORY 11: REMOVE BASE44 DEPENDENCIES
------------------------------------
Objective: Clean up all Base44 code and dependencies

Tasks:
□ Search codebase for "base44"
□ Remove all base44 imports
□ Remove base44 from package.json
□ Remove api/base44Client.js file
□ Update all affected files
□ Run full test suite
□ Fix any breaking changes

Time estimate: 3 hours

Acceptance criteria:
- No "base44" references in code
- App runs without Base44 installed
- All features work with Firebase
- Build succeeds without errors

---

STORY 12: FIREBASE AUTHENTICATION UI
------------------------------------
Objective: Create beautiful login/signup pages

Tasks:
□ Create pages/Login.jsx
□ Create pages/Signup.jsx
□ Design login form with email/password
□ Add "Sign in with Google" button
□ Add password reset functionality
□ Add form validation
□ Add loading states
□ Style for both dark/light modes
□ Add error messages
□ Test all flows

Time estimate: 6 hours

Acceptance criteria:
- Beautiful, branded login page
- Signup with email or Google works
- Password reset sends email
- Form validation prevents errors
- Loading states provide feedback
- Works on mobile and desktop

---

STORY 13: PROTECTED ROUTES & AUTH GUARDS
----------------------------------------
Objective: Protect app routes requiring authentication

Tasks:
□ Create ProtectedRoute component
□ Wrap game routes with ProtectedRoute
□ Redirect to login if not authenticated
□ Preserve intended destination
□ Redirect to dashboard after login
□ Test navigation flows

Time estimate: 2 hours

Acceptance criteria:
- Unauthenticated users redirected to login
- After login, users go to intended page
- Dashboard accessible after auth
- No infinite redirect loops

==========================================
PART 4: AUTHENTICATION IMPLEMENTATION
==========================================

FILE: src/firebase/config.js
-----------------------------

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

// Initialize Firestore with offline persistence
export const db = getFirestore(app);
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Offline persistence failed: Multiple tabs open');
  } else if (err.code === 'unimplemented') {
    console.warn('Offline persistence not available in this browser');
  }
});

export default app;
```

FILE: src/firebase/authService.js
----------------------------------

```javascript
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword
} from 'firebase/auth';
import { auth } from './config';

// Sign up with email and password
export const signUp = async (email, password, fullName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: fullName });
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: getErrorMessage(error) };
  }
};

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: getErrorMessage(error) };
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  
  try {
    const result = await signInWithPopup(auth, provider);
    return { user: result.user, error: null };
  } catch (error) {
    return { user: null, error: getErrorMessage(error) };
  }
};

// Log out
export const logOut = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};

// Password reset
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { error: null };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};

// Update user profile
export const updateUserProfile = async (data) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error('No user logged in');
    
    await updateProfile(user, data);
    return { error: null };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
};

// Listen to auth state changes
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Get current user
export const getCurrentUser = () => {
  return auth.currentUser;
};

// Helper: User-friendly error messages
const getErrorMessage = (error) => {
  const errorMessages = {
    'auth/email-already-in-use': 'This email is already registered.',
    'auth/invalid-email': 'Invalid email address.',
    'auth/operation-not-allowed': 'Operation not allowed.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/too-many-requests': 'Too many failed attempts. Try again later.',
    'auth/network-request-failed': 'Network error. Check your connection.',
    'auth/popup-closed-by-user': 'Sign in cancelled.',
  };
  
  return errorMessages[error.code] || error.message || 'An error occurred';
};
```

FILE: src/contexts/AuthContext.jsx
-----------------------------------

```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthChange } from '../firebase/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
```

==========================================
PART 5: FIRESTORE DATABASE STRUCTURE
==========================================

OPTIMAL STRUCTURE FOR LUMENLINGO:
----------------------------------

```
users (collection)
└── {userId} (document)
    ├── email: string
    ├── displayName: string
    ├── photoURL: string (optional)
    ├── createdAt: timestamp
    ├── lastLogin: timestamp
    │
    ├── profile (subcollection)
    │   └── main (document)
    │       ├── total_xp: number
    │       ├── current_level: number
    │       ├── daily_streak: number
    │       ├── total_active_days: number
    │       ├── last_activity_date: timestamp
    │       ├── favorite_game: string
    │       ├── achievements: array<string>
    │       └── preferences: object
    │           ├── difficulty: string
    │           ├── sound_enabled: boolean
    │           ├── dark_mode: boolean
    │           ├── breathingOrbsEnabled: boolean
    │           ├── breathingOrbsIntensity: number
    │           └── breathingOrbsSpeed: number
    │
    ├── languagePreferences (subcollection)
    │   └── {preferenceId} (document)
    │       ├── source_language: string
    │       ├── target_language: string
    │       ├── is_active: boolean
    │       ├── is_enabled: boolean
    │       └── updatedAt: timestamp
    │
    ├── gameProgress (subcollection)
    │   └── {progressId} (document)
    │       ├── game_type: string [flashcards|grammar|word_builder]
    │       ├── level: string
    │       ├── score: number
    │       ├── correct_answers: number
    │       ├── total_questions: number
    │       ├── time_spent: number
    │       ├── streak_count: number
    │       ├── source_language: string
    │       ├── target_language: string
    │       └── created_date: timestamp
    │
    ├── masteredContent (subcollection)
    │   └── {contentId} (document)
    │       ├── game_type: string
    │       ├── category: string
    │       ├── content_id: string
    │       ├── mastered_count: number
    │       ├── source_language: string
    │       ├── target_language: string
    │       └── lastPracticed: timestamp
    │
    └── favoriteCategories (subcollection)
        └── {categoryId} (document)
            ├── game_type: string
            ├── category_key: string
            ├── source_language: string
            ├── target_language: string
            └── addedAt: timestamp
```

FILE: src/firebase/firestoreService.js
---------------------------------------

```javascript
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  writeBatch
} from 'firebase/firestore';
import { db } from './config';

// User Profile Operations
export const getUserProfile = async (userId) => {
  try {
    const profileRef = doc(db, 'users', userId, 'profile', 'main');
    const profileSnap = await getDoc(profileRef);
    
    if (profileSnap.exists()) {
      return { data: profileSnap.data(), error: null };
    }
    
    // Create default profile if doesn't exist
    const defaultProfile = {
      total_xp: 0,
      current_level: 1,
      daily_streak: 0,
      total_active_days: 0,
      last_activity_date: null,
      favorite_game: null,
      achievements: [],
      preferences: {
        difficulty: 'beginner',
        sound_enabled: true,
        dark_mode: false,
        breathingOrbsEnabled: true,
        breathingOrbsIntensity: 1.0,
        breathingOrbsSpeed: 1.0
      }
    };
    
    await setDoc(profileRef, defaultProfile);
    return { data: defaultProfile, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const updateUserProfile = async (userId, profileData) => {
  try {
    const profileRef = doc(db, 'users', userId, 'profile', 'main');
    await updateDoc(profileRef, {
      ...profileData,
      updatedAt: serverTimestamp()
    });
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Language Preferences Operations
export const getLanguagePreferences = async (userId) => {
  try {
    const prefsRef = collection(db, 'users', userId, 'languagePreferences');
    const prefsSnap = await getDocs(prefsRef);
    
    const preferences = [];
    prefsSnap.forEach((doc) => {
      preferences.push({ id: doc.id, ...doc.data() });
    });
    
    return { data: preferences, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const saveLanguagePreference = async (userId, preference) => {
  try {
    const prefId = `${preference.source_language}_${preference.target_language}`;
    const prefRef = doc(db, 'users', userId, 'languagePreferences', prefId);
    
    await setDoc(prefRef, {
      ...preference,
      updatedAt: serverTimestamp()
    }, { merge: true });
    
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Game Progress Operations
export const getGameProgress = async (userId, filters = {}) => {
  try {
    let q = collection(db, 'users', userId, 'gameProgress');
    
    if (filters.source_language && filters.target_language) {
      q = query(
        q,
        where('source_language', '==', filters.source_language),
        where('target_language', '==', filters.target_language),
        orderBy('created_date', 'desc'),
        limit(filters.limit || 50)
      );
    } else {
      q = query(q, orderBy('created_date', 'desc'), limit(filters.limit || 50));
    }
    
    const progressSnap = await getDocs(q);
    const progress = [];
    
    progressSnap.forEach((doc) => {
      progress.push({ id: doc.id, ...doc.data() });
    });
    
    return { data: progress, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const saveGameProgress = async (userId, progressData) => {
  try {
    const progressRef = doc(collection(db, 'users', userId, 'gameProgress'));
    await setDoc(progressRef, {
      ...progressData,
      created_date: serverTimestamp()
    });
    
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Mastered Content Operations
export const getMasteredContent = async (userId, filters = {}) => {
  try {
    let q = collection(db, 'users', userId, 'masteredContent');
    
    if (filters.source_language && filters.target_language) {
      q = query(
        q,
        where('source_language', '==', filters.source_language),
        where('target_language', '==', filters.target_language)
      );
    }
    
    const contentSnap = await getDocs(q);
    const content = [];
    
    contentSnap.forEach((doc) => {
      content.push({ id: doc.id, ...doc.data() });
    });
    
    return { data: content, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const saveMasteredContent = async (userId, contentData) => {
  try {
    const contentId = `${contentData.game_type}_${contentData.category}_${contentData.content_id}`;
    const contentRef = doc(db, 'users', userId, 'masteredContent', contentId);
    
    const contentSnap = await getDoc(contentRef);
    
    if (contentSnap.exists()) {
      await updateDoc(contentRef, {
        mastered_count: (contentSnap.data().mastered_count || 0) + 1,
        lastPracticed: serverTimestamp()
      });
    } else {
      await setDoc(contentRef, {
        ...contentData,
        mastered_count: 1,
        lastPracticed: serverTimestamp()
      });
    }
    
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Favorite Categories Operations
export const getFavoriteCategories = async (userId, filters = {}) => {
  try {
    let q = collection(db, 'users', userId, 'favoriteCategories');
    
    if (filters.source_language && filters.target_language) {
      q = query(
        q,
        where('source_language', '==', filters.source_language),
        where('target_language', '==', filters.target_language)
      );
    }
    
    const favSnap = await getDocs(q);
    const favorites = [];
    
    favSnap.forEach((doc) => {
      favorites.push({ id: doc.id, ...doc.data() });
    });
    
    return { data: favorites, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const addFavoriteCategory = async (userId, categoryData) => {
  try {
    const catId = `${categoryData.game_type}_${categoryData.category_key}_${categoryData.source_language}_${categoryData.target_language}`;
    const catRef = doc(db, 'users', userId, 'favoriteCategories', catId);
    
    await setDoc(catRef, {
      ...categoryData,
      addedAt: serverTimestamp()
    });
    
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

export const removeFavoriteCategory = async (userId, categoryId) => {
  try {
    const catRef = doc(db, 'users', userId, 'favoriteCategories', categoryId);
    await deleteDoc(catRef);
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Batch Upload - Sync all local data to Firestore
export const syncAllDataToFirestore = async (userId, localData) => {
  const batch = writeBatch(db);
  
  try {
    // Upload profile
    if (localData.profile) {
      const profileRef = doc(db, 'users', userId, 'profile', 'main');
      batch.set(profileRef, localData.profile, { merge: true });
    }
    
    // Upload language preferences
    if (localData.languagePreference) {
      const prefId = `${localData.languagePreference.source_language}_${localData.languagePreference.target_language}`;
      const prefRef = doc(db, 'users', userId, 'languagePreferences', prefId);
      batch.set(prefRef, localData.languagePreference, { merge: true });
    }
    
    // Upload game progress (last 50)
    if (localData.gameProgress && localData.gameProgress.length > 0) {
      localData.gameProgress.slice(0, 50).forEach((progress) => {
        const progressRef = doc(collection(db, 'users', userId, 'gameProgress'));
        batch.set(progressRef, progress);
      });
    }
    
    // Upload mastered content
    if (localData.masteredContent && localData.masteredContent.length > 0) {
      localData.masteredContent.forEach((content) => {
        const contentId = `${content.game_type}_${content.category}_${content.content_id}`;
        const contentRef = doc(db, 'users', userId, 'masteredContent', contentId);
        batch.set(contentRef, content, { merge: true });
      });
    }
    
    // Upload favorite categories
    if (localData.favoriteCategories && localData.favoriteCategories.length > 0) {
      localData.favoriteCategories.forEach((cat) => {
        const catId = `${cat.game_type}_${cat.category_key}_${cat.source_language}_${cat.target_language}`;
        const catRef = doc(db, 'users', userId, 'favoriteCategories', catId);
        batch.set(catRef, cat, { merge: true });
      });
    }
    
    await batch.commit();
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

==========================================
PART 6: OFFLINE-FIRST ARCHITECTURE
==========================================

STRATEGY: DUAL-LAYER DATA PERSISTENCE
--------------------------------------

Layer 1: FIRESTORE (Cloud, Primary Source of Truth)
- All data syncs to Firestore when online
- Real-time sync across devices
- Firestore has built-in offline support
- Automatic retry on reconnection

Layer 2: LOCALSTORAGE (Offline Cache)
- Fast, immediate access
- Works completely offline
- Syncs to Firestore when online
- Fallback when Firestore unavailable

IMPLEMENTATION PATTERN:
-----------------------

1. READ: Try Firestore first, fallback to localStorage
2. WRITE: Save to localStorage immediately, sync to Firestore async
3. CONFLICT: Last-write-wins (timestamp-based)
4. SYNC: Auto-sync on reconnection, manual sync button

UPDATED: components/utils/offlineSync.js
-----------------------------------------

```javascript
// NEW VERSION - Firebase + LocalStorage

import { getCurrentUser as getFirebaseUser } from '../../firebase/authService';
import {
  getUserProfile,
  updateUserProfile,
  getLanguagePreferences,
  saveLanguagePreference,
  getGameProgress,
  saveGameProgress,
  getMasteredContent,
  saveMasteredContent,
  getFavoriteCategories,
  addFavoriteCategory,
  removeFavoriteCategory,
  syncAllDataToFirestore
} from '../../firebase/firestoreService';

// Storage keys remain the same
export const STORAGE_KEYS = {
  USER_PROFILE: 'lumenlingo_user_profile',
  GAME_PROGRESS: 'lumenlingo_game_progress',
  LANGUAGE_PREFERENCE: 'lumenlingo_language_preference',
  MASTERED_CONTENT: 'lumenlingo_mastered_content',
  FAVORITE_CATEGORIES: 'lumenlingo_favorite_categories',
  LAST_SYNC: 'lumenlingo_last_sync',
  PENDING_SYNC: 'lumenlingo_pending_sync',
};

// Get current user (Firebase)
export const getCurrentUser = async () => {
  const user = getFirebaseUser();
  if (!user) return null;
  
  return {
    id: user.uid,
    email: user.email,
    full_name: user.displayName || user.email,
    role: 'user' // Default role
  };
};

// LocalStorage helpers (unchanged)
export const getLocalData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return null;
  }
};

export const setLocalData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(STORAGE_KEYS.PENDING_SYNC, 'true');
  } catch (error) {
    console.error(`Error writing ${key} to localStorage:`, error);
  }
};

// Initialize localStorage with defaults
export const initializeLocalStorage = () => {
  const defaults = {
    [STORAGE_KEYS.USER_PROFILE]: {
      total_xp: 0,
      current_level: 1,
      daily_streak: 0,
      total_active_days: 0,
      last_activity_date: null,
      favorite_game: null,
      achievements: [],
      preferences: {
        difficulty: 'beginner',
        sound_enabled: true,
        dark_mode: false,
        breathingOrbsEnabled: true,
        breathingOrbsIntensity: 1.0,
        breathingOrbsSpeed: 1.0
      }
    },
    [STORAGE_KEYS.GAME_PROGRESS]: [],
    [STORAGE_KEYS.MASTERED_CONTENT]: [],
    [STORAGE_KEYS.FAVORITE_CATEGORIES]: [],
    [STORAGE_KEYS.LANGUAGE_PREFERENCE]: {
      source_language: 'english',
      target_language: 'spanish',
      is_active: true,
      is_enabled: true
    }
  };

  Object.entries(defaults).forEach(([key, defaultValue]) => {
    if (!localStorage.getItem(key)) {
      setLocalData(key, defaultValue);
    }
  });
};

// Check if sync is pending
export const hasPendingSync = () => {
  return localStorage.getItem(STORAGE_KEYS.PENDING_SYNC) === 'true';
};

// Get last sync time
export const getLastSyncTime = () => {
  return localStorage.getItem(STORAGE_KEYS.LAST_SYNC);
};

// Upload data to Firestore
export const uploadDataToServer = async () => {
  const user = await getCurrentUser();
  if (!user) {
    return { success: false, error: 'Not authenticated' };
  }

  const localData = {
    profile: getLocalData(STORAGE_KEYS.USER_PROFILE),
    languagePreference: getLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE),
    gameProgress: getLocalData(STORAGE_KEYS.GAME_PROGRESS),
    masteredContent: getLocalData(STORAGE_KEYS.MASTERED_CONTENT),
    favoriteCategories: getLocalData(STORAGE_KEYS.FAVORITE_CATEGORIES)
  };

  const result = await syncAllDataToFirestore(user.id, localData);

  if (result.success) {
    localStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
    localStorage.setItem(STORAGE_KEYS.PENDING_SYNC, 'false');
    return {
      success: true,
      uploaded: ['profile', 'languagePreference', 'gameProgress', 'masteredContent', 'favoriteCategories']
    };
  }

  return { success: false, error: result.error };
};

// Download data from Firestore
export const downloadDataFromServer = async () => {
  const user = await getCurrentUser();
  if (!user) {
    return { success: false, error: 'Not authenticated' };
  }

  try {
    // Download profile
    const profileResult = await getUserProfile(user.id);
    if (profileResult.data) {
      setLocalData(STORAGE_KEYS.USER_PROFILE, profileResult.data);
    }

    // Download language preferences
    const langResult = await getLanguagePreferences(user.id);
    if (langResult.data && langResult.data.length > 0) {
      const activePref = langResult.data.find(p => p.is_active) || langResult.data[0];
      setLocalData(STORAGE_KEYS.LANGUAGE_PREFERENCE, activePref);
    }

    // Download game progress
    const progressResult = await getGameProgress(user.id, { limit: 100 });
    if (progressResult.data) {
      setLocalData(STORAGE_KEYS.GAME_PROGRESS, progressResult.data);
    }

    // Download mastered content
    const masteredResult = await getMasteredContent(user.id);
    if (masteredResult.data) {
      setLocalData(STORAGE_KEYS.MASTERED_CONTENT, masteredResult.data);
    }

    // Download favorite categories
    const favResult = await getFavoriteCategories(user.id);
    if (favResult.data) {
      setLocalData(STORAGE_KEYS.FAVORITE_CATEGORIES, favResult.data);
    }

    localStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
    localStorage.setItem(STORAGE_KEYS.PENDING_SYNC, 'false');

    return {
      success: true,
      downloaded: ['profile', 'languagePreference', 'gameProgress', 'masteredContent', 'favoriteCategories']
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Auto-sync on network reconnection
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    if (hasPendingSync()) {
      uploadDataToServer();
    }
  });
}
```

==========================================
PART 7: SECURITY RULES
==========================================

FIRESTORE SECURITY RULES
-------------------------

In Firebase Console: Firestore Database > Rules

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    function isValidTimestamp(field) {
      return request.resource.data[field] is timestamp;
    }
    
    // Users collection
    match /users/{userId} {
      // Only owner can read/write their user document
      allow read, write: if isOwner(userId);
      
      // Profile subcollection
      match /profile/{profileId} {
        allow read, write: if isOwner(userId);
      }
      
      // Language preferences subcollection
      match /languagePreferences/{prefId} {
        allow read, write: if isOwner(userId);
      }
      
      // Game progress subcollection
      match /gameProgress/{progressId} {
        allow read: if isOwner(userId);
        allow create: if isOwner(userId) && 
                      request.resource.data.game_type is string &&
                      request.resource.data.score is number;
        allow update, delete: if false; // Progress is append-only
      }
      
      // Mastered content subcollection
      match /masteredContent/{contentId} {
        allow read, write: if isOwner(userId);
      }
      
      // Favorite categories subcollection
      match /favoriteCategories/{categoryId} {
        allow read, write: if isOwner(userId);
      }
    }
    
    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

DEPLOY RULES:
-------------
1. Copy rules above
2. Paste in Firebase Console > Firestore Database > Rules
3. Click "Publish"
4. Test with Firebase Emulator Suite (optional but recommended)

==========================================
PART 8: EXPO & REACT NATIVE SETUP
==========================================

WHY EXPO?
---------
- ✓ Simplifies iOS/Android development
- ✓ Over-the-air updates (no App Store delays)
- ✓ Built-in components for native features
- ✓ Easy TestFlight distribution
- ✓ Managed workflow (no Xcode required initially)

STEP 1: INITIALIZE EXPO PROJECT
--------------------------------

```bash
# Install Expo CLI globally
npm install -g expo-cli

# Create new Expo project
expo init LumenLingoMobile

# Choose template: "blank (TypeScript)" or "blank"
cd LumenLingoMobile

# Install dependencies
npm install firebase
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

STEP 2: PROJECT STRUCTURE
--------------------------

```
LumenLingoMobile/
├── app.json                    # Expo config
├── App.tsx                     # Main entry point
├── src/
│   ├── firebase/
│   │   ├── config.ts           # Firebase setup
│   │   ├── authService.ts      # Auth methods
│   │   └── firestoreService.ts # Database methods
│   ├── contexts/
│   │   ├── AuthContext.tsx     # Auth state
│   │   └── LanguageContext.tsx # Language state
│   ├── screens/
│   │   ├── DashboardScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── FlashCardsScreen.tsx
│   │   ├── GrammarScreen.tsx
│   │   └── WordBuilderScreen.tsx
│   ├── components/
│   │   ├── games/
│   │   ├── ui/
│   │   └── shared/
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── utils/
│   │   ├── offlineSync.ts
│   │   └── translations.ts
│   └── types/
│       └── index.ts
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
└── package.json
```

STEP 3: APP.JSON CONFIGURATION
-------------------------------

```json
{
  "expo": {
    "name": "LumenLingo",
    "slug": "lumenlingo",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#7C3AED"
    },
    "updates": {
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/[your-project-id]"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.lumenshore.lumenlingo",
      "buildNumber": "1.0.0",
      "infoPlist": {
        "NSFaceIDUsageDescription": "We use Face ID to secure your learning progress.",
        "NSCameraUsageDescription": "We need camera access for AR features (future)."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#7C3AED"
      },
      "package": "com.lumenshore.lumenlingo",
      "versionCode": 1
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "[your-project-id]"
      }
    },
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ]
    ]
  }
}
```

STEP 4: FIREBASE CONFIG FOR REACT NATIVE
-----------------------------------------

FILE: src/firebase/config.ts
```typescript
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore with offline persistence
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true, // Required for Expo
  cacheSizeBytes: 50 * 1024 * 1024 // 50MB cache
});

export default app;
```

STEP 5: NAVIGATION SETUP
-------------------------

```bash
npm install @react-navigation/native @react-navigation/native-stack
expo install react-native-screens react-native-safe-area-context
```

FILE: src/navigation/AppNavigator.tsx
```typescript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FlashCardsScreen from '../screens/FlashCardsScreen';
import GrammarScreen from '../screens/GrammarScreen';
import WordBuilderScreen from '../screens/WordBuilderScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return null; // Or loading screen
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="FlashCards" component={FlashCardsScreen} />
            <Stack.Screen name="Grammar" component={GrammarScreen} />
            <Stack.Screen name="WordBuilder" component={WordBuilderScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

STEP 6: CONVERT WEB COMPONENTS TO REACT NATIVE
-----------------------------------------------

Key differences:
- `<div>` → `<View>`
- `<p>`, `<span>` → `<Text>`
- `<button>` → `<TouchableOpacity>` or `<Pressable>`
- `className` → `style={styles.container}`
- CSS → StyleSheet.create()
- framer-motion → react-native-reanimated
- localStorage → AsyncStorage

Example conversion:

WEB VERSION:
```jsx
<div className="bg-white p-4 rounded-xl">
  <h2 className="text-xl font-bold">Hello</h2>
  <button onClick={handleClick}>Click me</button>
</div>
```

REACT NATIVE VERSION:
```tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

<View style={styles.container}>
  <Text style={styles.title}>Hello</Text>
  <TouchableOpacity style={styles.button} onPress={handleClick}>
    <Text style={styles.buttonText}>Click me</Text>
  </TouchableOpacity>
</View>

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#7C3AED',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
```

STEP 7: BUILD FOR IOS
----------------------

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS Build
eas build:configure

# Build for iOS
eas build --platform ios --profile development

# For TestFlight distribution
eas build --platform ios --profile production
```

==========================================
PART 9: iOS/iPad COMMERCIAL RELEASE
==========================================

APPLE DEVELOPER ACCOUNT SETUP
------------------------------

1. Enroll in Apple Developer Program
   - Go to https://developer.apple.com/programs/
   - Cost: $99/year
   - Processing time: 24-48 hours

2. Create App ID
   - Go to Certificates, Identifiers & Profiles
   - Create new identifier
   - Bundle ID: com.lumenshore.lumenlingo
   - Enable capabilities:
     * In-App Purchase
     * Push Notifications
     * iCloud (for sync)

3. Create App Store Connect Record
   - Go to https://appstoreconnect.apple.com/
   - Click "My Apps" → "+" → "New App"
   - Platform: iOS
   - Name: LumenLingo
   - Primary Language: English
   - Bundle ID: com.lumenshore.lumenlingo
   - SKU: LUMENLINGO001

4. App Store Listing Information
   - App Name: LumenLingo - Language Learning
   - Subtitle: Master Languages Through Games
   - Description: 500-word description highlighting:
     * Gamified learning
     * Offline support
     * Multiple language pairs
     * Progress tracking
   - Keywords: language learning, flashcards, grammar, education
   - Support URL: https://lumenlingo.com/support
   - Marketing URL: https://lumenlingo.com
   - Privacy Policy URL: https://lumenlingo.com/privacy

5. App Store Screenshots (Required)
   - iPhone 6.7" (iPhone 14 Pro Max): 1290 x 2796 pixels
   - iPhone 6.5" (iPhone 11 Pro Max): 1242 x 2688 pixels
   - iPad Pro (2nd gen) 12.9": 2048 x 2732 pixels
   - Need 3-5 screenshots per device
   - Use tools: Screenshot Studio, App Store Screenshot Builder

6. App Review Information
   - First Name, Last Name, Phone, Email
   - Demo account credentials (if login required)
   - Notes: Explain key features, how to use app

IPAD-SPECIFIC OPTIMIZATIONS
----------------------------

1. Support Multiple Orientations
```typescript
// app.json
{
  "ios": {
    "requireFullScreen": false,
    "supportsTablet": true
  }
}
```

2. Use Split View and Slide Over
```typescript
// Optimize layouts for iPad sizes
import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const styles = StyleSheet.create({
  container: {
    width: isTablet ? '70%' : '100%',
    maxWidth: isTablet ? 800 : undefined,
  }
});
```

3. Add iPad-specific UI
- Larger fonts and touch targets
- Multi-column layouts
- Sidebar navigation
- Keyboard shortcuts

TESTFLIGHT DISTRIBUTION
------------------------

1. Upload Build via EAS
```bash
eas build --platform ios --profile production
eas submit --platform ios
```

2. Configure TestFlight
- Go to App Store Connect → TestFlight
- Add internal testers (up to 100)
- Add external testers (up to 10,000)
- Set up test information
- Submit for Beta App Review (24-48 hours)

3. Gather Feedback
- Use TestFlight feedback form
- Monitor crash reports
- Iterate based on tester feedback

APP STORE SUBMISSION CHECKLIST
-------------------------------

□ App built and uploaded via EAS
□ All screenshots uploaded (iPhone + iPad)
□ App icon (1024x1024) uploaded
□ Privacy policy page live
□ Support page live
□ Age rating completed
□ Export compliance answered
□ Pricing and availability set
□ In-app purchases configured (see Part 10)
□ Review information provided
□ Submit for review

TYPICAL REVIEW TIMELINE:
- 24-48 hours for initial review
- 1-7 days average approval time
- Rejections: Fix and resubmit within 24 hours

==========================================
PART 10: IN-APP SUBSCRIPTIONS (REVENUCAT)
==========================================

WHY REVENUCAT?
--------------
✓ Handles complex subscription logic
✓ Works with iOS, Android, and web
✓ Server-side receipt validation
✓ Analytics and insights
✓ Cross-platform purchase restoration
✓ Free tier: Up to $10k monthly revenue

SUBSCRIPTION TIERS (RECOMMENDED)
---------------------------------

FREE TIER:
- 3 lessons per day
- Basic flashcards
- Limited language pairs

PREMIUM MONTHLY ($9.99/month):
- Unlimited lessons
- All language pairs
- Offline mode
- Progress sync across devices
- Ad-free experience

PREMIUM YEARLY ($79.99/year - Save 33%):
- All Premium Monthly features
- Best value
- Priority support

LIFETIME ($149.99 one-time):
- All features forever
- No recurring payments

STEP 1: CREATE REVENUCAT ACCOUNT
---------------------------------

1. Go to https://www.revenuecat.com/
2. Sign up (free)
3. Create new project: "LumenLingo"
4. Note your API keys:
   - Public SDK Key (iOS)
   - Public SDK Key (Android)

STEP 2: CONFIGURE APP STORE CONNECT
------------------------------------

1. Go to App Store Connect → My Apps → LumenLingo
2. Click "In-App Purchases"
3. Create new subscription group: "LumenLingo Premium"
4. Create subscriptions:

SUBSCRIPTION 1: Monthly
- Product ID: lumenlingo_premium_monthly
- Reference Name: Premium Monthly
- Price: $9.99/month
- Duration: 1 month
- Localization: Add for each country

SUBSCRIPTION 2: Yearly
- Product ID: lumenlingo_premium_yearly
- Reference Name: Premium Yearly
- Price: $79.99/year
- Duration: 1 year
- Free trial: 7 days (recommended)

SUBSCRIPTION 3: Lifetime
- Product ID: lumenlingo_lifetime
- Reference Name: Lifetime Access
- Type: Non-Consumable
- Price: $149.99

STEP 3: INSTALL REVENUCAT SDK
------------------------------

```bash
# Install RevenueCat SDK
expo install react-native-purchases

# For bare workflow
npm install react-native-purchases
```

STEP 4: INITIALIZE REVENUCAT
-----------------------------

FILE: src/services/purchases.ts
```typescript
import Purchases, { PurchasesOffering } from 'react-native-purchases';
import { Platform } from 'react-native';

const REVENUCAT_API_KEY_IOS = 'your_ios_api_key';
const REVENUCAT_API_KEY_ANDROID = 'your_android_api_key';

export const initializePurchases = async (userId: string) => {
  try {
    await Purchases.configure({
      apiKey: Platform.OS === 'ios' ? REVENUCAT_API_KEY_IOS : REVENUCAT_API_KEY_ANDROID,
      appUserID: userId,
    });
    
    // Set user attributes
    await Purchases.setAttributes({
      'signup_date': new Date().toISOString(),
    });
    
    console.log('Purchases initialized');
  } catch (error) {
    console.error('Error initializing purchases:', error);
  }
};

export const getOfferings = async (): Promise<PurchasesOffering | null> => {
  try {
    const offerings = await Purchases.getOfferings();
    if (offerings.current !== null) {
      return offerings.current;
    }
    return null;
  } catch (error) {
    console.error('Error getting offerings:', error);
    return null;
  }
};

export const purchasePackage = async (packageToBuy: any) => {
  try {
    const { customerInfo } = await Purchases.purchasePackage(packageToBuy);
    return { success: true, customerInfo };
  } catch (error: any) {
    if (!error.userCancelled) {
      console.error('Error purchasing package:', error);
      return { success: false, error };
    }
    return { success: false, cancelled: true };
  }
};

export const restorePurchases = async () => {
  try {
    const { customerInfo } = await Purchases.restorePurchases();
    return { success: true, customerInfo };
  } catch (error) {
    console.error('Error restoring purchases:', error);
    return { success: false, error };
  }
};

export const checkSubscriptionStatus = async () => {
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    const isPremium = typeof customerInfo.entitlements.active['premium'] !== 'undefined';
    return { isPremium, customerInfo };
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return { isPremium: false, error };
  }
};
```

STEP 5: CREATE PAYWALL SCREEN
------------------------------

FILE: src/screens/PaywallScreen.tsx
```typescript
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { PurchasesPackage } from 'react-native-purchases';
import { getOfferings, purchasePackage, restorePurchases } from '../services/purchases';

export default function PaywallScreen({ navigation }: any) {
  const [offerings, setOfferings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    loadOfferings();
  }, []);

  const loadOfferings = async () => {
    const offerings = await getOfferings();
    setOfferings(offerings);
    setLoading(false);
  };

  const handlePurchase = async (pkg: PurchasesPackage) => {
    setPurchasing(true);
    const result = await purchasePackage(pkg);
    setPurchasing(false);

    if (result.success) {
      // Navigate to dashboard
      navigation.navigate('Dashboard');
    } else if (!result.cancelled) {
      alert('Purchase failed. Please try again.');
    }
  };

  const handleRestore = async () => {
    setPurchasing(true);
    const result = await restorePurchases();
    setPurchasing(false);

    if (result.success && result.customerInfo?.entitlements.active['premium']) {
      alert('Purchases restored successfully!');
      navigation.navigate('Dashboard');
    } else {
      alert('No purchases to restore.');
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#7C3AED" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Unlock Premium</Text>
        <Text style={styles.subtitle}>
          Get unlimited access to all language learning features
        </Text>
      </View>

      <View style={styles.features}>
        <FeatureItem text="Unlimited lessons and exercises" />
        <FeatureItem text="All language pairs available" />
        <FeatureItem text="Offline mode & sync across devices" />
        <FeatureItem text="Ad-free experience" />
        <FeatureItem text="Priority customer support" />
      </View>

      {offerings?.availablePackages.map((pkg: PurchasesPackage) => (
        <TouchableOpacity
          key={pkg.identifier}
          style={[
            styles.packageButton,
            pkg.identifier === 'yearly' && styles.bestValue
          ]}
          onPress={() => handlePurchase(pkg)}
          disabled={purchasing}
        >
          {pkg.identifier === 'yearly' && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>BEST VALUE</Text>
            </View>
          )}
          <Text style={styles.packageTitle}>{pkg.product.title}</Text>
          <Text style={styles.packagePrice}>
            {pkg.product.priceString}
            {pkg.packageType === 'ANNUAL' && (
              <Text style={styles.savings}> • Save 33%</Text>
            )}
          </Text>
          <Text style={styles.packageDescription}>
            {pkg.product.description}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.restoreButton}
        onPress={handleRestore}
        disabled={purchasing}
      >
        <Text style={styles.restoreText}>Restore Purchases</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>
        Subscriptions auto-renew unless cancelled 24 hours before the end of the period.
        {'\n\n'}
        <Text style={styles.link}>Terms of Service</Text> • <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </ScrollView>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <View style={styles.featureItem}>
      <Text style={styles.checkmark}>✓</Text>
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  features: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkmark: {
    fontSize: 24,
    color: '#10B981',
    marginRight: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#374151',
  },
  packageButton: {
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  bestValue: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  badge: {
    position: 'absolute',
    top: -12,
    right: 20,
    backgroundColor: '#F59E0B',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  packageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  packagePrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7C3AED',
    marginBottom: 8,
  },
  savings: {
    fontSize: 16,
    color: '#10B981',
  },
  packageDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  restoreButton: {
    marginHorizontal: 24,
    marginVertical: 16,
    padding: 16,
    alignItems: 'center',
  },
  restoreText: {
    fontSize: 16,
    color: '#7C3AED',
    fontWeight: '600',
  },
  terms: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    paddingHorizontal: 24,
    paddingBottom: 32,
    lineHeight: 18,
  },
  link: {
    color: '#7C3AED',
    textDecorationLine: 'underline',
  },
});
```

STEP 6: PREMIUM FEATURE GATING
-------------------------------

FILE: src/hooks/useSubscription.ts
```typescript
import { useState, useEffect } from 'react';
import { checkSubscriptionStatus } from '../services/purchases';

export function useSubscription() {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    const result = await checkSubscriptionStatus();
    setIsPremium(result.isPremium);
    setLoading(false);
  };

  return { isPremium, loading, refreshStatus: checkStatus };
}
```

Usage in components:
```typescript
import { useSubscription } from '../hooks/useSubscription';

function FlashCardsScreen() {
  const { isPremium, loading } = useSubscription();

  if (loading) return <LoadingScreen />;

  if (!isPremium && dailyLimitReached) {
    return (
      <View>
        <Text>Daily limit reached!</Text>
        <Button
          title="Upgrade to Premium"
          onPress={() => navigation.navigate('Paywall')}
        />
      </View>
    );
  }

  return <FlashCardsGame />;
}
```

STEP 7: REVENUCAT DASHBOARD SETUP
----------------------------------

1. Connect to App Store Connect
   - Go to RevenueCat dashboard
   - Project Settings → Integrations
   - Connect App Store
   - Upload .p8 key from App Store Connect

2. Configure Entitlements
   - Create entitlement: "premium"
   - Attach products:
     * lumenlingo_premium_monthly
     * lumenlingo_premium_yearly
     * lumenlingo_lifetime

3. Set up Webhooks (optional)
   - Webhook URL: https://your-backend.com/revenucat-webhook
   - Events: subscription_renewed, cancellation, refund
   - Use for analytics and backend logic

ANALYTICS & MONITORING
-----------------------

RevenueCat provides:
- Monthly Recurring Revenue (MRR)
- Annual Recurring Revenue (ARR)
- Churn rate
- Subscription cohorts
- Conversion rates
- Trial conversions

Additional tools:
- Firebase Analytics: User behavior
- Mixpanel: Funnel analysis
- App Store Connect: Sales and trends

==========================================
PART 11: TESTING CHECKLIST
==========================================

FIREBASE TESTING
----------------
□ Authentication signup works
□ Authentication login works
□ Google sign-in works
□ Password reset works
□ User profile saves to Firestore
□ Language preferences persist
□ Game progress saves correctly
□ Mastered content syncs
□ Favorite categories save/load
□ Security rules prevent unauthorized access
□ Offline persistence works
□ Data syncs when online
□ Multiple devices sync correctly

MOBILE APP TESTING (iOS/iPad)
------------------------------
□ App installs successfully
□ Splash screen displays correctly
□ Login/signup flow works
□ Dashboard loads user data
□ All games functional on iPhone
□ All games functional on iPad
□ Landscape orientation works (iPad)
□ Split view works (iPad)
□ Touch targets adequate size
□ Animations smooth (60fps)
□ Offline mode works
□ Background/foreground transitions
□ Memory usage acceptable
□ Battery drain acceptable
□ Network error handling

SUBSCRIPTION TESTING
--------------------
□ Paywall displays correctly
□ Monthly subscription purchase works
□ Yearly subscription purchase works
□ Lifetime purchase works
□ 7-day free trial works
□ Purchase restoration works
□ Premium features unlock correctly
□ Free tier limitations enforced
□ Subscription status persists
□ Cross-device subscription sync
□ Cancellation flow works
□ Refund handling works

APP STORE REVIEW PREP
----------------------
□ All screenshots uploaded
□ App preview video (optional)
□ Privacy policy accessible
□ Terms of service accessible
□ Support email responsive
□ Demo account works
□ No crashes during review
□ All features demonstrated
□ Age rating appropriate
□ Content rating accurate

==========================================
PART 12: DEPLOYMENT STEPS
==========================================

WEB DEPLOYMENT (Firebase Hosting)
----------------------------------

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize hosting
firebase init hosting

# Build production
npm run build

# Deploy
firebase deploy --only hosting
```

IOS DEPLOYMENT (EAS + TestFlight)
----------------------------------

```bash
# Build production version
eas build --platform ios --profile production

# Wait for build to complete (15-30 minutes)

# Submit to TestFlight
eas submit --platform ios --latest

# Wait for processing (1-2 hours)

# Distribute via TestFlight
# Go to App Store Connect → TestFlight
# Add testers and groups
```

APP STORE SUBMISSION
--------------------

1. Complete App Store Connect listing
2. Upload final build via EAS
3. Submit for review
4. Monitor review status
5. Respond to feedback if rejected
6. Release manually or automatically

VERSIONING STRATEGY
-------------------

Semantic Versioning: MAJOR.MINOR.PATCH
- Example: 1.0.0

1.x.x - Major features, breaking changes
x.1.x - New features, no breaking changes
x.x.1 - Bug fixes, minor improvements

Timeline:
- 1.0.0: Initial release
- 1.1.0: Add new language pairs
- 1.2.0: Add pronunciation game
- 2.0.0: Major UI redesign

==========================================
PART 13: TROUBLESHOOTING GUIDE
==========================================

COMMON FIREBASE ISSUES
-----------------------

Issue: "Permission denied" errors
Solution:
- Check Firestore security rules
- Verify user is authenticated
- Ensure userId matches auth.uid

Issue: Offline persistence not working
Solution:
- Enable persistence in config
- Check browser/app supports IndexedDB
- Verify not multiple tabs open

Issue: Slow Firestore queries
Solution:
- Add composite indexes
- Limit query results
- Use pagination
- Cache frequently accessed data

COMMON EXPO/REACT NATIVE ISSUES
--------------------------------

Issue: Build fails on EAS
Solution:
- Check app.json configuration
- Verify all dependencies compatible
- Clear cache: eas build --clear-cache
- Check EAS build logs

Issue: Firebase not working on device
Solution:
- Use experimentalForceLongPolling
- Check network permissions
- Verify API keys in .env
- Test on real device, not just simulator

Issue: App crashes on iOS
Solution:
- Check crash logs in Xcode
- Test on multiple iOS versions
- Use Sentry for crash reporting
- Verify memory usage

COMMON SUBSCRIPTION ISSUES
---------------------------

Issue: Purchases not unlocking features
Solution:
- Check RevenueCat webhook delivery
- Verify entitlement configuration
- Test with sandbox purchases
- Check user ID matches

Issue: Restore purchases not working
Solution:
- Verify same Apple ID used
- Check receipt validation
- Ensure internet connection
- Wait 5-10 seconds for sync

==========================================
PART 14: RESOURCES & NEXT STEPS
==========================================

OFFICIAL DOCUMENTATION
----------------------
- Firebase: https://firebase.google.com/docs
- Expo: https://docs.expo.dev/
- React Native: https://reactnative.dev/docs/getting-started
- RevenueCat: https://docs.revenuecat.com/
- Apple Developer: https://developer.apple.com/documentation/

LEARNING RESOURCES
------------------
- Firebase YouTube Channel
- Expo YouTube Channel
- React Native School
- RevenueCat Academy

COMMUNITY SUPPORT
-----------------
- Stack Overflow (firebase, react-native, expo tags)
- Reddit: r/reactnative, r/Firebase
- Discord: React Native, Expo
- GitHub Discussions

NEXT STEPS AFTER LAUNCH
------------------------

Week 1-2: Monitor & Fix
- Watch crash reports
- Fix critical bugs
- Respond to user feedback
- Monitor analytics

Month 1: Iterate
- Analyze user behavior
- Improve onboarding
- A/B test paywall
- Optimize performance

Month 2-3: Growth
- App Store Optimization (ASO)
- Social media marketing
- Content marketing
- Referral program

Month 4+: Scale
- Add Android version
- Expand language pairs
- Add social features
- Build community

==========================================
ESTIMATED TOTAL TIMELINE
==========================================

Phase 1: Firebase Migration (3-4 days)
- Setup, auth, database, offline sync

Phase 2: Expo Setup (2-3 days)
- Initialize project, navigation, convert components

Phase 3: iOS/iPad Polish (2-3 days)
- iPad layouts, testing, optimization

Phase 4: Subscriptions (2-3 days)
- RevenueCat setup, paywall, feature gating

Phase 5: Testing & QA (3-5 days)
- Comprehensive testing, bug fixes, polish

Phase 6: Submission & Review (3-7 days)
- App Store assets, submission, review process

TOTAL: 15-25 days from start to App Store approval

==========================================
CONCLUSION
==========================================

This guide provides a complete roadmap for transforming LumenLingo from
a Base44 prototype into a commercial Firebase-powered iOS/iPad application
with in-app subscriptions.

Key Success Factors:
✓ Clean Firebase migration with offline support
✓ Beautiful, native iOS/iPad experience
✓ Frictionless subscription flow
✓ Thorough testing before launch
✓ Fast iteration based on user feedback

Remember: Launch is just the beginning. The real work is continuous
improvement based on user feedback and data-driven decisions.

Good luck with your launch! 🚀

==========================================
Last Updated: 2024
Version: 3.0.0 - Complete Migration Guide
Author: Base44 AI Assistant
==========================================