/**
 * Privacy utilities for handling sensitive user data
 */

/**
 * Formats a full name to show only the first letter of the surname
 * Examples:
 * - "John Doe" -> "John D."
 * - "Maria Garcia Lopez" -> "Maria G."
 * - "John" -> "John"
 * 
 * @param {string} fullName - The full name to format
 * @returns {string} The formatted name with abbreviated surname
 */
export function formatNameWithInitial(fullName) {
  if (!fullName || typeof fullName !== 'string') {
    return '';
  }

  const trimmedName = fullName.trim();
  
  // If no spaces, return as is (single name)
  if (!trimmedName.includes(' ')) {
    return trimmedName;
  }

  // Split into parts
  const parts = trimmedName.split(/\s+/);
  
  // If only one part somehow, return it
  if (parts.length === 1) {
    return parts[0];
  }

  // First name(s) - everything except the last part
  const firstNames = parts.slice(0, -1).join(' ');
  
  // Last name - get first letter
  const lastNameInitial = parts[parts.length - 1].charAt(0).toUpperCase();
  
  return `${firstNames} ${lastNameInitial}.`;
}

/**
 * Stores user's full name in privacy-preserving format (first letter of surname only)
 * This should be used when saving user data to reduce risk in case of data breach
 * 
 * @param {string} fullName - The full name to process
 * @returns {string} The privacy-preserving formatted name
 */
export function getPrivacyPreservingName(fullName) {
  return formatNameWithInitial(fullName);
}