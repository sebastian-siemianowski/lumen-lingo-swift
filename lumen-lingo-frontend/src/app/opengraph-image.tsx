import { ImageResponse } from 'next/og';

export const alt = 'LumenLingo — Master Languages Through Immersive Experiences';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1025 40%, #0d1b2a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Decorative gradient orb */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: 48, fontWeight: 700, color: 'white' }}>L</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: 'white',
            margin: '0 0 12px 0',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          LumenLingo
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.7)',
            margin: 0,
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          Master Languages Through Immersive Experiences
        </p>

        {/* Feature pills */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '32px',
          }}
        >
          {['Flashcards', 'Soundscapes', '9 Languages', 'Adaptive Practice'].map(
            (label) => (
              <div
                key={label}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: 16,
                }}
              >
                {label}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
