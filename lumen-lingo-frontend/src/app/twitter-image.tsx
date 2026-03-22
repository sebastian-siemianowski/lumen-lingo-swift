import { ImageResponse } from 'next/og';

export const alt = 'LumenLingo — Master Languages Through Immersive Experiences';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
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
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: 'white',
            margin: '0 0 12px 0',
            textAlign: 'center',
          }}
        >
          LumenLingo
        </h1>
        <p
          style={{
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.7)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Master Languages Through Immersive Experiences
        </p>
      </div>
    ),
    { ...size },
  );
}
