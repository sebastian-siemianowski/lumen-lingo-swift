import { useState, useEffect } from "react";
import { 
  uploadDataToServer, 
  downloadDataFromServer,
  getLastSyncTime,
  hasPendingSync,
  STORAGE_KEYS
} from "../utils/offlineSync";
import { getLocalData } from "../utils/offlineSync";
import { 
  User as UserIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Heart,
  Globe as GlobeIcon,
  Settings as SettingsIcon
} from "lucide-react";

const isTopPair = (source, target) => {
  const TOP_LANGUAGE_PAIRS = [
    { source: "english", target: "spanish" },
    { source: "spanish", target: "english" },
    { source: "polish", target: "english" },
    { source: "polish", target: "spanish" },
    { source: "polish", target: "german" },
    { source: "german", target: "english" },
    { source: "german", target: "spanish" }
  ];
  return TOP_LANGUAGE_PAIRS.some(p => p.source === source && p.target === target);
};

export default function useSyncLogic(t, onReloadProfile) {
  const [syncing, setSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState(null);
  const [pendingChanges, setPendingChanges] = useState(false);
  const [lastSync, setLastSync] = useState(getLastSyncTime());

  useEffect(() => {
    const checkPending = () => {
      setPendingChanges(hasPendingSync());
    };
    
    checkPending();
    window.addEventListener('storage', checkPending);
    window.addEventListener('pendingSyncChanged', checkPending);
    
    return () => {
      window.removeEventListener('storage', checkPending);
      window.removeEventListener('pendingSyncChanged', checkPending);
    };
  }, []);

  const enhanceDetailsWithIcons = (details) => {
    return details.map(detail => {
      if (detail.icon) return detail;

      let icon;
      if (detail.entity === 'Profile') icon = UserIcon;
      else if (detail.entity === 'Mastered' || detail.entity === 'Mastered Words') icon = StarIcon;
      else if (detail.entity === 'Progress' || detail.entity === 'Recent Activity') icon = TrendingUpIcon;
      else if (detail.entity === 'Favorites') icon = Heart;
      else if (detail.entity === 'Language' || detail.entity === 'Learning') icon = GlobeIcon;
      else if (detail.entity === 'Appearance') icon = SettingsIcon;
      else if (detail.entity === 'Beta Languages') icon = GlobeIcon;

      return { ...detail, icon };
    });
  };

  const handleUpload = async () => {
    setSyncing(true);
    setSyncStatus(null);

    try {
      const result = await uploadDataToServer();

      if (result.success) {
        const enhancedDetails = [...result.details];

        // Add appearance info
        const quantumEnabled = localStorage.getItem('quantumFlowEnabled') === 'true';
        const quantumScheme = localStorage.getItem('quantumFlowScheme') || 'dubai';
        const nebulaEnabled = localStorage.getItem('nebulaDriftEnabled') === 'true';
        const nebulaPreset = localStorage.getItem('nebulaDriftPreset') || 'lagoon_nebula';
        const uploadedProfile = getLocalData(STORAGE_KEYS.USER_PROFILE);
        const uploadedPrefs = uploadedProfile?.preferences || {};
        
        const appearanceInfo = [];
        const uploadedDarkMode = uploadedPrefs.dark_mode === true || uploadedPrefs.dark_mode === 'true';
        appearanceInfo.push(uploadedDarkMode ? 'Dark theme' : 'Light theme');
        
        const uploadedOrbsEnabled = uploadedPrefs.breathingOrbsEnabled === 'true';
        if (uploadedOrbsEnabled) {
          const uploadedGradient = uploadedPrefs.breathingOrbsGradient || 'default';
          const gradientName = uploadedGradient.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          appearanceInfo.push(`Orbs (${gradientName})`);
        } else {
          appearanceInfo.push('Orbs disabled');
        }
        
        if (quantumEnabled) {
          const schemeName = quantumScheme.charAt(0).toUpperCase() + quantumScheme.slice(1);
          appearanceInfo.push(`Quantum Flow (${schemeName})`);
        } else {
          appearanceInfo.push('Quantum Flow disabled');
        }
        
        if (nebulaEnabled) {
          const presetNames = {
            'lagoon_nebula': 'Lagoon Nebula',
            'celestial_lagoon': 'Celestial Lagoon',
            'solar_aurora': 'Solar Aurora',
            'spiral_halo': 'Spiral Halo',
            'edge_of_andromeda': 'Edge of Andromeda',
            'starburst_ring': 'Starburst Ring'
          };
          const presetName = presetNames[nebulaPreset] || nebulaPreset;
          appearanceInfo.push(`Nebula Drift (${presetName})`);
        } else {
          appearanceInfo.push('Nebula Drift disabled');
        }
        
        enhancedDetails.push({
          entity: 'Appearance',
          action: 'saved',
          info: appearanceInfo.join(' • '),
          icon: SettingsIcon
        });

        const detailsWithIcons = enhanceDetailsWithIcons(enhancedDetails);

        setSyncStatus({
          type: 'success',
          message: t('successfully_synced_upload'),
          details: null,
          fullDetails: detailsWithIcons,
          timestamp: new Date().toISOString()
        });
        setPendingChanges(false);
        setLastSync(new Date().toISOString());
      } else {
        setSyncStatus({
          type: 'error',
          message: `${t('upload_failed')}: ${result.errors.map(e => e.entity).join(', ')}`,
          fullDetails: result.errors
        });
      }
    } catch (error) {
      setSyncStatus({
        type: 'error',
        message: `${t('upload_failed')}: ${error.message}`
      });
    } finally {
      setSyncing(false);
    }
  };

  const handleDownload = async () => {
    setSyncing(true);
    setSyncStatus(null);

    try {
      const result = await downloadDataFromServer();

      if (result.success) {
        if (onReloadProfile) await onReloadProfile();

        const detailsWithIcons = enhanceDetailsWithIcons(result.details);

        setSyncStatus({
          type: 'success',
          message: t('successfully_synced_download'),
          details: null,
          fullDetails: detailsWithIcons,
          timestamp: new Date().toISOString()
        });
        setPendingChanges(false);
        setLastSync(new Date().toISOString());

        window.dispatchEvent(new Event('animationPreferencesChanged'));
        window.dispatchEvent(new Event('storage'));
        
        setTimeout(() => {
          window.dispatchEvent(new Event('animationPreferencesChanged'));
          window.dispatchEvent(new Event('storage'));
        }, 100);
        
        setTimeout(() => {
          window.dispatchEvent(new Event('animationPreferencesChanged'));
        }, 300);
      } else {
        setSyncStatus({
          type: 'error',
          message: `${t('download_failed')}: ${result.errors.map(e => e.entity).join(', ')}`,
          fullDetails: result.errors
        });
      }
    } catch (error) {
      setSyncStatus({
        type: 'error',
        message: `${t('download_failed')}: ${error.message}`
      });
    } finally {
      setSyncing(false);
    }
  };

  return {
    syncing,
    syncStatus,
    pendingChanges,
    lastSync,
    handleUpload,
    handleDownload,
    setSyncStatus
  };
}