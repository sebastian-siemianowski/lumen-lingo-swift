import React from "react";
import AmbientAudioPlayer from "../profile/AmbientAudioPlayer";

// Central place to mount all app-wide sound controllers
export default function SoundManager() {
  return (
    <>
      <AmbientAudioPlayer />
    </>
  );
}