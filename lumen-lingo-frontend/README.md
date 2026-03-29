# LumenLingo — Premium Marketing Website

The official marketing website for [LumenLingo](https://lumenlingo.com), a premium iOS language learning app by **LumenShore**.

## Tech Stack

| Layer       | Technology                 |
| ----------- | -------------------------- |
| Framework   | Next.js 16 (App Router)    |
| UI          | React 19, Tailwind CSS 4   |
| Language    | TypeScript 5 (strict mode) |
| Hosting     | Vercel                     |
| Animation   | Framer Motion              |
| Blog        | MDX (local)                |
| Analytics   | Vercel Analytics, Plausible|

## Getting Started

### Prerequisites

- Node.js 22 LTS (see `.nvmrc`)
- npm 10+

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Format code
npx prettier --write .
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & layouts
│   ├── layout.tsx          # Root layout (fonts, metadata, analytics)
│   ├── page.tsx            # Homepage
│   ├── pricing/            # Pricing page
│   ├── features/           # Features page
│   ├── blog/               # Blog index & MDX articles
│   ├── about/              # About LumenShore
│   ├── contact/            # FAQ & Contact
│   ├── privacy/            # Privacy policy
│   └── terms/              # Terms of service
├── components/
│   ├── ui/                 # Primitives: Button, Card, Badge, etc.
│   ├── layout/             # Header, Footer, Container, Section
│   ├── home/               # Homepage sections
│   ├── pricing/            # Pricing tier cards
│   ├── features/           # Feature showcase components
│   └── blog/               # Blog components
├── lib/
│   ├── motion.ts           # Framer Motion animation variants
│   └── utils.ts            # Utility functions (cn, etc.)
└── content/
    └── blog/               # MDX blog posts
```

## Design System

- **Dark-first**: Deep charcoal base with luminous violet & cyan accents
- **Glass morphism**: Frosted glass cards with subtle border luminescence
- **Typography**: Inter (body) + Cabinet Grotesk (display headings)
- **Spatial rhythm**: 8 px base grid, 120–160 px vertical section spacing
- **Motion**: Spring-based Framer Motion; respects `prefers-reduced-motion`
- **Accessibility**: WCAG 2.1 AA minimum

## Environment Variables

| Variable                     | Description              |
| ---------------------------- | ------------------------ |
| `NEXT_PUBLIC_SITE_URL`       | Production site URL      |
| `NEXT_PUBLIC_ANALYTICS_ID`   | Plausible analytics ID   |

## Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start development server           |
| `npm run build` | Production build                   |
| `npm run start` | Start production server            |
| `npm run lint`  | Run ESLint                         |

## License

Proprietary — LumenShore. All rights reserved.
