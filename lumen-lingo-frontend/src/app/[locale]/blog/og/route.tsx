import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'LumenLingo Blog';
  const category = searchParams.get('category') ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '60px',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #1a1028 100%)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Top decorative gradient blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '200px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '100px',
            right: '100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* Logo area */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            left: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 700,
              color: 'white',
            }}
          >
            L
          </div>
          <span
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.8)',
              letterSpacing: '-0.02em',
            }}
          >
            LumenLingo
          </span>
        </div>

        {/* Category badge */}
        {category && (
          <div
            style={{
              display: 'flex',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(139, 92, 246, 0.15)',
                color: '#8b5cf6',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h1
          style={{
            fontSize: title.length > 60 ? '44px' : '56px',
            fontWeight: 800,
            lineHeight: 1.15,
            color: 'white',
            letterSpacing: '-0.03em',
            maxWidth: '900px',
          }}
        >
          {title}
        </h1>

        {/* Bottom branding line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '32px',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            lumenlingo.com/blog
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
