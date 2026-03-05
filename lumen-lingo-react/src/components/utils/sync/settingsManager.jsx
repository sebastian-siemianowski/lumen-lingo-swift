import { getFromStorage } from "./storageUtils";

export const getSettings = () => {
  const s = {};
  try {
    const orbsEnabledRaw = getFromStorage('breathingOrbsEnabled');
    s.breathingOrbsEnabled = orbsEnabledRaw !== null ? orbsEnabledRaw : 'true';
    s.breathingOrbsIntensity = getFromStorage('breathingOrbsIntensity') || '1.0';
    s.breathingOrbsSpeed = getFromStorage('breathingOrbsSpeed') || '1.0';
    s.breathingOrbsGradient = getFromStorage('breathingOrbsGradient') || 'default';
    s.breathingOrbsRaveMode = getFromStorage('breathingOrbsRaveMode') || 'false';
    
    s.quantumFlowEnabled = getFromStorage('quantumFlowEnabled') || 'false';
    s.quantumFlowScheme = getFromStorage('quantumFlowScheme') || 'dubai';
    s.quantumFlowIntensity = getFromStorage('quantumFlowIntensity') || '1.0';
    s.quantumFlowSpeed = getFromStorage('quantumFlowSpeed') || '1.0';
    
    s.nebulaDriftEnabled = getFromStorage('nebulaDriftEnabled') || 'false';
    s.nebulaDriftPreset = getFromStorage('nebulaDriftPreset') || 'lagoon_nebula';
    s.nebulaDriftIntensity = getFromStorage('nebulaDriftIntensity') || '1.0';
    s.nebulaDriftSpeed = getFromStorage('nebulaDriftSpeed') || '1.0';
    
    s.soundEnabled = getFromStorage('lumenlingo_sound_enabled') || 'true';
    s.soundVolume = getFromStorage('lumenlingo_sound_volume') || '0.5';
    
    const darkModeStr = getFromStorage('lumenlingo_dark_mode') || 'false';
    s.dark_mode = darkModeStr === 'true';
    
    s.enabled_pairs = getFromStorage('lumenlingo_enabled_pairs') || '[]';
    s.cosmicPreviewMode = getFromStorage('cosmicPreviewMode') || 'false';
  } catch (error) {
    console.error('Error reading settings:', error);
  }
  return s;
};

export const applySettings = (s) => {
  if (!s) return;
  
  console.log('🔧 Applying settings from cloud:', s);
  
  try {
    Object.entries(s).forEach(([key, val]) => {
      let strVal;
      if (key === 'breathingOrbsEnabled' || key === 'quantumFlowEnabled' || key === 'nebulaDriftEnabled') {
        strVal = (val === true || val === 'true') ? 'true' : 'false';
      } else {
        strVal = String(val);
      }
      
      if (key.startsWith('breathingOrbs') || key.startsWith('quantumFlow') || key.startsWith('nebulaDrift')) {
        localStorage.setItem(key, strVal);
        localStorage.setItem(`preview_${key}`, strVal);
      } else if (key === 'soundEnabled' || key === 'soundVolume') {
        const fullKey = `lumenlingo_${key.replace(/([A-Z])/g, '_$1').toLowerCase()}`;
        localStorage.setItem(fullKey, strVal);
        localStorage.setItem(`preview_${fullKey}`, strVal);
      } else if (key === 'dark_mode') {
        const boolVal = val === true || val === 'true';
        const finalVal = boolVal ? 'true' : 'false';
        localStorage.setItem('lumenlingo_dark_mode', finalVal);
        localStorage.setItem('preview_lumenlingo_dark_mode', finalVal);
      } else if (key === 'enabled_pairs') {
        const finalVal = typeof val === 'string' ? val : JSON.stringify(val);
        localStorage.setItem('lumenlingo_enabled_pairs', finalVal);
        localStorage.setItem('preview_lumenlingo_enabled_pairs', finalVal);
      } else if (key === 'cosmicPreviewMode') {
        localStorage.setItem('cosmicPreviewMode', strVal);
        localStorage.setItem('preview_cosmicPreviewMode', strVal);
      }
    });
    
    window.dispatchEvent(new Event('animationPreferencesChanged'));
    window.dispatchEvent(new Event('storage'));
    
    setTimeout(() => {
      window.dispatchEvent(new Event('animationPreferencesChanged'));
    }, 100);
  } catch (error) {
    console.error('Error applying settings:', error);
  }
};