import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LumenLingo — Master Languages Through Immersive Experiences',
    short_name: 'LumenLingo',
    description:
      'Premium language learning app with immersive flashcards, adaptive practice, ambient soundscapes, and more.',
    start_url: '/',
    display: 'browser',
    background_color: '#0a0a0f',
    theme_color: '#8b5cf6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
