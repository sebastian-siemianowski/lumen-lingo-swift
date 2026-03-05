import React, { useEffect, useRef } from "react";

export default function AmbientAudioPlayer() {
  const audioContextRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodesRef = useRef([]);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const checkAmbientEnabled = () => {
      try {
        const masterEnabled = localStorage.getItem('audioFeedbackEnabled');
        const ambientEnabled = localStorage.getItem('ambientSoundsEnabled');
        
        const shouldPlay = (masterEnabled === null || masterEnabled === 'true') && 
                          (ambientEnabled === 'true');
        
        if (shouldPlay && !isPlayingRef.current) {
          startAmbientAudio();
        } else if (!shouldPlay && isPlayingRef.current) {
          stopAmbientAudio();
        }
      } catch (error) {
        console.error('Error checking ambient audio settings:', error);
      }
    };

    const startAmbientAudio = () => {
      if (isPlayingRef.current) return;
      
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const bufferSize = 4096;
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        const noiseNode = ctx.createScriptProcessor(bufferSize, 1, 1);
        noiseNode.onaudioprocess = (e) => {
          const output = e.outputBuffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            output[i] *= 0.11; // (roughly) compensate for gain
            b6 = white * 0.115926;
          }
        };

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 3);

        noiseNode.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillatorsRef.current.push(noiseNode);
        gainNodesRef.current.push(gainNode);

        isPlayingRef.current = true;
      } catch (error) {
        console.error('Error starting ambient audio:', error);
      }
    };

    const stopAmbientAudio = () => {
      if (!isPlayingRef.current) return;
      
      try {
        const ctx = audioContextRef.current;
        if (!ctx) return;

        // Fade out gracefully
        gainNodesRef.current.forEach(gain => {
          gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
        });

        // Stop oscillators after fade
        setTimeout(() => {
          oscillatorsRef.current.forEach(node => {
            node.disconnect();
          });
          oscillatorsRef.current = [];
          gainNodesRef.current = [];
        }, 2100);

        isPlayingRef.current = false;
      } catch (error) {
        console.error('Error stopping ambient audio:', error);
      }
    };

    // Check on mount
    checkAmbientEnabled();

    // Listen for changes
    window.addEventListener('soundSettingsChanged', checkAmbientEnabled);
    window.addEventListener('storage', checkAmbientEnabled);

    // User interaction to resume audio context (browsers require user gesture)
    const resumeAudioContext = () => {
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
    };
    
    document.addEventListener('click', resumeAudioContext, { once: true });
    document.addEventListener('touchstart', resumeAudioContext, { once: true });

    return () => {
      window.removeEventListener('soundSettingsChanged', checkAmbientEnabled);
      window.removeEventListener('storage', checkAmbientEnabled);
      document.removeEventListener('click', resumeAudioContext);
      document.removeEventListener('touchstart', resumeAudioContext);
      stopAmbientAudio();
      
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return null; // This component doesn't render anything
}