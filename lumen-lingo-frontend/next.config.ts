import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TypeScript is checked separately via `tsc --noEmit`; the SWC-wasm
  // type-checker crashes on darwin-arm64 with Next 16.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
    ];
  },
};

export default nextConfig;
