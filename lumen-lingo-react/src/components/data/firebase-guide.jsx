Firebase Integration Guide for LumenLingo

This guide explains how to integrate Firebase Authentication and Firestore Database into LumenLingo to replace the current localStorage-based system with cloud storage and user authentication.

Table of Contents
1. Prerequisites
2. Firebase Setup
3. Installation
4. Authentication Implementation
5. Firestore Database Structure
6. Code Modifications
7. Security Rules
8. Migration Strategy

Prerequisites

A Google account for Firebase
Node.js and npm installed
Access to your app's codebase

Firebase Setup

1. Create a Firebase Project

Go to Firebase Console at console.firebase.google.com
Click Add Project or Create a Project
Enter project name lumenlingo or your preferred name
Enable Google Analytics optional but recommended
Wait for project creation

2. Register Your Web App

In your Firebase project click the Web icon to add a web app
Give it a nickname LumenLingo Web
Check Also set up Firebase Hosting optional
Click Register app
Copy the Firebase configuration you will need this later

Example config:
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "lumenlingo-xxxxx.firebaseapp.com",
  projectId: "lumenlingo-xxxxx",
  storageBucket: "lumenlingo-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

3. Enable Authentication

In Firebase Console go to Authentication then Sign-in method
Enable the following providers:
  Email/Password primary
  Google recommended for easier sign-in
  Anonymous optional for guest users
Configure authorized domains if needed

4. Set Up Firestore Database

Go to Firestore Database in Firebase Console
Click Create database
Choose Production mode we will add security rules later
Select a Cloud Firestore location choose closest to your users
Click Enable

Installation

1. Install Firebase SDK

npm install firebase

2. Create Firebase Configuration File

Create src/firebase/config.js with Firebase initialization code

3. Add Environment Variables

Create or update .env file in your project root:

REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

Important: Add .env to your .gitignore file to keep credentials secure

Authentication Implementation

1. Create Auth Service

Create src/firebase/authService.js with functions:
signUp email password fullName
signIn email password
signInWithGoogle
logOut
onAuthChange callback
getCurrentUser

2. Create Auth Context

Create src/contexts/AuthContext.jsx
Manages authentication state globally
Provides user and loading state

Firestore Database Structure

Recommended Collection Structure:

users collection with userId documents containing:

profile subcollection
  total_xp number
  current_level number
  daily_streak number
  total_active_days number
  last_activity_date timestamp
  favorite_game string
  achievements array
  preferences object
    difficulty string
    sound_enabled boolean
    dark_mode boolean
    breathingOrbsEnabled boolean
    breathingOrbsIntensity number
    breathingOrbsSpeed number

languagePreferences subcollection
  source_language string
  target_language string
  is_active boolean
  is_enabled boolean

gameProgress subcollection
  game_type string
  level string
  score number
  correct_answers number
  total_questions number
  time_spent number
  streak_count number
  source_language string
  target_language string
  created_date timestamp

masteredContent subcollection
  game_type string
  category string
  content_id string
  mastered_count number
  source_language string
  target_language string

favoriteCategories subcollection
  game_type string
  category_key string
  source_language string
  target_language string

Code Modifications

1. Create Firestore Service

Create src/firebase/firestoreService.js with functions for:
getUserProfile
updateUserProfile profileData
getLanguagePreferences
saveLanguagePreference preference
getGameProgress sourceLanguage targetLanguage limitCount
saveGameProgress progressData
getMasteredContent sourceLanguage targetLanguage
saveMasteredContent contentData
clearMasteredContent
getFavoriteCategories sourceLanguage targetLanguage
addFavoriteCategory categoryData
removeFavoriteCategory categoryId
syncAllDataToFirestore localData

2. Update offlineSync.js

Modify components/utils/offlineSync.js to integrate with Firebase:
Import Firebase functions
Update getCurrentUser to use Firebase
Update uploadDataToServer to use Firebase
Update downloadDataFromServer to use Firebase
Keep localStorage as fallback for offline mode

3. Wrap App with Auth Provider

Update your main App.jsx or index.jsx:
Import AuthProvider and wrap your app components

Security Rules

Firestore Security Rules

In Firebase Console go to Firestore Database then Rules and add:

rules_version = 2
service cloud.firestore {
  match /databases/{database}/documents {
    function isAuthenticated() {
      return request.auth != null
    }
    
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId
    }
    
    match /users/{userId}/{document=**} {
      allow read write if isOwner(userId)
    }
    
    match /{document=**} {
      allow read write if false
    }
  }
}

Migration Strategy

Step-by-Step Migration

1. Test in Development First
   Set up Firebase in a development environment
   Test authentication flow
   Test data sync
   Verify security rules

2. Add Authentication UI
   Create login signup pages
   Add Sign in with Google button
   Handle authentication errors gracefully

3. Implement Gradual Migration
   On first login migrate localStorage data to Firebase
   Mark migration as complete in localStorage

4. Keep localStorage as Backup
   Continue saving to localStorage for offline support
   Sync with Firebase when online
   Provides seamless offline online experience

5. Monitor and Debug
   Use Firebase Console to monitor user activity
   Check for sync errors in browser console
   Add error reporting

Additional Recommendations

1. Add Loading States
   Show loading indicators during sync operations
   Handle errors gracefully with user feedback

2. Add Offline Detection
   Auto-sync when connection is restored
   Show offline indicator to users

3. Add Data Validation
   Validate data before saving to Firestore
   Ensure data integrity

4. Implement Conflict Resolution
   Last Write Wins strategy
   Merge data intelligently
   Ask user to choose which data to keep

Testing Checklist

Firebase project created and configured
Authentication works email and Google
User profile data saves to Firestore
Language preferences sync correctly
Game progress saves after each session
Mastered content persists
Favorite categories sync
Offline mode works localStorage fallback
Security rules prevent unauthorized access
Migration from localStorage works
Error handling is in place

Support and Resources

Firebase Documentation firebase.google.com/docs
Firestore Data Modeling firebase.google.com/docs/firestore/data-model
Firebase Authentication Guide firebase.google.com/docs/auth
React Firebase Hooks github.com/CSFrequency/react-firebase-hooks

Troubleshooting

If you encounter issues:
Check Firebase Console for errors
Review browser console for JavaScript errors
Verify security rules allow your operations
Ensure environment variables are set correctly
Test with a fresh user account

Good luck with your Firebase integration