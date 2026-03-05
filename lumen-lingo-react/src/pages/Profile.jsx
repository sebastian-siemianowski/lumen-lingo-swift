import React from "react";
import ProfileStyles from "../components/profile/ProfileStyles";
import LoadingState from "../components/profile/LoadingState";
import ProfileContainer from "../components/profile/ProfileContainer";
import useProfileData from "../components/profile/useProfileData";

export default function ProfilePage() {
  const { isLoading } = useProfileData();

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen p-3 sm:p-6 relative">
      <ProfileStyles />
      <ProfileContainer />
    </div>
  );
}