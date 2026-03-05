import { useState, useEffect } from "react";
import { getLocalData, getCurrentUser, STORAGE_KEYS } from '../utils/offlineSync';

export default function useProgressData() {
  const [userProfile, setUserProfile] = useState(null);
  const [gameStats, setGameStats] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    const loadData = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (!mounted) return;
        
        setUser(currentUser);

        const localProfile = getLocalData(STORAGE_KEYS.USER_PROFILE);
        const localProgress = getLocalData(STORAGE_KEYS.GAME_PROGRESS) || [];

        if (!mounted) return;
        
        setUserProfile(localProfile);
        setGameStats(localProgress);
      } catch (error) {
        console.error("Error loading progress:", error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };
    
    loadData();
    
    return () => {
      mounted = false;
    };
  }, []);



  const calculateLevel = (xp) => Math.floor((xp || 0) / 100) + 1;
  const getXpForNextLevel = (currentXp) => (Math.floor((currentXp || 0) / 100) + 1) * 100;
  const getCurrentLevelXp = (currentXp) => (currentXp || 0) % 100;

  const getGameTypeStats = () => {
    if (!gameStats || gameStats.length === 0) return {};
    
    const stats = {};
    gameStats.forEach(game => {
      if (!game || !game.game_type) return;
      
      if (!stats[game.game_type]) {
        stats[game.game_type] = {
          played: 0,
          totalScore: 0,
          bestScore: 0,
          accuracy: 0
        };
      }
      stats[game.game_type].played++;
      stats[game.game_type].totalScore += game.score || 0;
      stats[game.game_type].bestScore = Math.max(stats[game.game_type].bestScore, game.score || 0);
      
      const total = game.total_questions || 1;
      const correct = game.correct_answers || 0;
      stats[game.game_type].accuracy += (correct / total) * 100;
    });

    Object.keys(stats).forEach(key => {
      if (stats[key].played > 0) {
        stats[key].avgScore = Math.round(stats[key].totalScore / stats[key].played);
        stats[key].accuracy = Math.round(stats[key].accuracy / stats[key].played);
      }
    });

    return stats;
  };

  const currentLevel = calculateLevel(userProfile?.total_xp);
  const nextLevelXp = getXpForNextLevel(userProfile?.total_xp);
  const currentLevelProgress = getCurrentLevelXp(userProfile?.total_xp);
  const gameTypeStats = getGameTypeStats();

  return {
    isLoading,
    userProfile,
    gameStats,
    currentLevel,
    nextLevelXp,
    currentLevelProgress,
    gameTypeStats
  };
}