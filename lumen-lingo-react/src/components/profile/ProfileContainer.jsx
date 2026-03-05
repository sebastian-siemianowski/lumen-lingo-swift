import React from "react";
import { useDarkMode } from "../theme/DarkModeContext";
import ProfileHeader from "./ProfileHeader";
import AccountSettingsTabs from "./AccountSettingsTabs";
import useProfileData from "./useProfileData";
import GlassPanelWrapper from "./GlassPanelWrapper";

export default function ProfileContainer() {
  const { loadProfileData } = useProfileData();
  const { darkMode } = useDarkMode();
  const [isDesktop, setIsDesktop] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 640 : false));
  React.useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <>
      <div className="max-w-[1120px] mx-auto relative mt-2 sm:mt-8 px-2 sm:px-4 pb-4 sm:pb-6">
      {/* Two Glass Panels */}
      <div className="space-y-3 sm:space-y-6">
        <GlassPanelWrapper>
          <ProfileHeader />
        </GlassPanelWrapper>

        <GlassPanelWrapper>
          <AccountSettingsTabs onReloadProfile={loadProfileData} />
        </GlassPanelWrapper>
      </div>
      </div>
    </>
  );
}