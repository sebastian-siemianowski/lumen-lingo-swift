import AchievementBanner from "../components/dashboard/AchievementBanner";
import DashboardLanguageSelector from "../components/dashboard/DashboardLanguageSelector";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import GamesSection from "../components/dashboard/GamesSection";
import RecentActivity from "../components/dashboard/RecentActivity";
import DashboardFogOverlay from "../components/dashboard/DashboardFogOverlay";
import DashboardStyles from "../components/dashboard/DashboardStyles";
import ScrollIndicator from "../components/dashboard/ScrollIndicator";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-4 sm:p-6 relative overflow-hidden">
      <DashboardStyles />
      <DashboardFogOverlay />
      <ScrollIndicator />

      <div className="max-w-7xl mx-auto relative z-10">
        <DashboardLanguageSelector />
        <DashboardHeader />
        <GamesSection />
        <RecentActivity />
      </div>
    </div>
  );
}