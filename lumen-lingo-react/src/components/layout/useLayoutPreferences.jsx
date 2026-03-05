import { useState, useEffect } from "react";

// Legacy preset mapping
const LEGACY_PRESET_MAPPING = {
  'nebula_01': 'lagoon_nebula',
  'nebula_02': 'celestial_lagoon',
  'nebula_03': 'solar_aurora',
  'galaxy_01': 'spiral_halo',
  'galaxy_02': 'edge_of_andromeda',
  'galaxy_03': 'starburst_ring'
};

function getStorageValue(key, defaultValue, parser = (v) => v) {
  try {
    const saved = localStorage.getItem(key);
    if (saved === null) return defaultValue;
    return parser(saved);
  } catch {
    return defaultValue;
  }
}

export function useLayoutPreferences() {
  // Animation preferences
  const [animationEnabled, setAnimationEnabled] = useState(() => 
    getStorageValue('breathingOrbsEnabled', true, v => v === 'true')
  );
  const [animationIntensity, setAnimationIntensity] = useState(() => 
    getStorageValue('breathingOrbsIntensity', 1.0, parseFloat)
  );
  const [animationSpeed, setAnimationSpeed] = useState(() => 
    getStorageValue('breathingOrbsSpeed', 1.0, parseFloat)
  );
  const [gradientScheme, setGradientScheme] = useState(() => 
    getStorageValue('breathingOrbsGradient', 'default')
  );
  const [raveMode, setRaveMode] = useState(() => 
    getStorageValue('breathingOrbsRaveMode', false, v => v === 'true')
  );

  // Quantum Flow preferences
  const [quantumEnabled, setQuantumEnabled] = useState(() => 
    getStorageValue('quantumFlowEnabled', false, v => v === 'true')
  );
  const [quantumScheme, setQuantumScheme] = useState(() => 
    getStorageValue('quantumFlowScheme', 'dubai')
  );
  const [quantumIntensity, setQuantumIntensity] = useState(() => 
    getStorageValue('quantumFlowIntensity', 1.0, parseFloat)
  );
  const [quantumSpeed, setQuantumSpeed] = useState(() => 
    getStorageValue('quantumFlowSpeed', 1.0, parseFloat)
  );

  // Nebula Drift preferences
  const [nebulaEnabled, setNebulaEnabled] = useState(() => 
    getStorageValue('nebulaDriftEnabled', false, v => v === 'true')
  );
  const [nebulaPreset, setNebulaPreset] = useState(() => {
    const saved = getStorageValue('nebulaDriftPreset', 'lagoon_nebula');
    return LEGACY_PRESET_MAPPING[saved] || saved;
  });
  const [nebulaIntensity, setNebulaIntensity] = useState(() => 
    getStorageValue('nebulaDriftIntensity', 1.0, parseFloat)
  );
  const [nebulaSpeed, setNebulaSpeed] = useState(() => 
    getStorageValue('nebulaDriftSpeed', 1.0, parseFloat)
  );

  // Cosmic preview mode
  const [cosmicPreviewMode, setCosmicPreviewMode] = useState(() => 
    getStorageValue('cosmicPreviewMode', false, v => v === 'true')
  );

  // Listen for preference changes
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        // Breathing Orbs
        const enabled = localStorage.getItem('breathingOrbsEnabled');
        const intensity = localStorage.getItem('breathingOrbsIntensity');
        const speed = localStorage.getItem('breathingOrbsSpeed');
        const gradient = localStorage.getItem('breathingOrbsGradient');
        const rave = localStorage.getItem('breathingOrbsRaveMode');
        
        if (enabled !== null) setAnimationEnabled(enabled === 'true');
        if (intensity !== null) setAnimationIntensity(parseFloat(intensity));
        if (speed !== null) setAnimationSpeed(parseFloat(speed));
        if (gradient !== null) setGradientScheme(gradient);
        if (rave !== null) setRaveMode(rave === 'true');
        
        // Quantum Flow
        const quantum = localStorage.getItem('quantumFlowEnabled');
        if (quantum !== null) {
          requestAnimationFrame(() => setQuantumEnabled(quantum === 'true'));
        }
        const quantumSchm = localStorage.getItem('quantumFlowScheme');
        if (quantumSchm !== null) setQuantumScheme(quantumSchm);
        const quantumInt = localStorage.getItem('quantumFlowIntensity');
        if (quantumInt !== null) setQuantumIntensity(parseFloat(quantumInt));
        const quantumSpd = localStorage.getItem('quantumFlowSpeed');
        if (quantumSpd !== null) setQuantumSpeed(parseFloat(quantumSpd));

        // Nebula Drift
        const nebula = localStorage.getItem('nebulaDriftEnabled');
        if (nebula !== null) {
          requestAnimationFrame(() => setNebulaEnabled(nebula === 'true'));
        }
        const nebulaPresetSaved = localStorage.getItem('nebulaDriftPreset');
        if (nebulaPresetSaved !== null) {
          const actualPreset = LEGACY_PRESET_MAPPING[nebulaPresetSaved] || nebulaPresetSaved;
          setNebulaPreset(actualPreset);
        }
        const nebulaInt = localStorage.getItem('nebulaDriftIntensity');
        if (nebulaInt !== null) setNebulaIntensity(parseFloat(nebulaInt));
        const nebulaSpd = localStorage.getItem('nebulaDriftSpeed');
        if (nebulaSpd !== null) setNebulaSpeed(parseFloat(nebulaSpd));

        // Cosmic preview mode
        const previewMode = localStorage.getItem('cosmicPreviewMode');
        setCosmicPreviewMode(previewMode === 'true');
      } catch (error) {
        console.error('Error reading animation preferences:', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('animationPreferencesChanged', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('animationPreferencesChanged', handleStorageChange);
    };
  }, []);

  return {
    // Breathing Orbs
    animationEnabled,
    animationIntensity,
    animationSpeed,
    gradientScheme,
    raveMode,
    
    // Quantum Flow
    quantumEnabled,
    quantumScheme,
    quantumIntensity,
    quantumSpeed,
    
    // Nebula Drift
    nebulaEnabled,
    nebulaPreset,
    setNebulaPreset,
    nebulaIntensity,
    nebulaSpeed,
    
    // Cosmic Preview
    cosmicPreviewMode,
    setCosmicPreviewMode
  };
}