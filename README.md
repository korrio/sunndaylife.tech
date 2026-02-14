# Sunny Day 365 Website

A modern, fast, and responsive website for Sunny Day 365 Co., LTD - Professional IT Services.

## Tech Stack

- **Vite** - Next Generation Frontend Tooling
- **React** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **React Router** - Navigation

## Features

- ⚡ Lightning fast with Vite
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📝 Content managed via JSON files
- 🔍 SEO optimized
- ♿ Accessible

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

Content is stored in `src/content/` as JSON/TypeScript files:

- `site-settings.json` - Site-wide configuration
- `team.ts` - Team member profiles
- `case-studies.ts` - Project case studies
- `services.ts` - Service offerings
- `pages.ts` - Page content

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # UI primitives
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── CaseStudies.tsx
│   ├── CaseStudyDetail.tsx
│   ├── Team.tsx
│   └── Contact.tsx
├── content/         # Content data
├── types/           # TypeScript types
├── lib/             # Utilities
├── App.tsx
└── main.tsx
```

## Deployment

Build the site for production:

```bash
npm run build
```

The `dist` folder will contain the static files ready for deployment to any static hosting (Vercel, Netlify, GitHub Pages, etc.).

## License

© 2026 Sunny Day 365 Co., LTD. All rights reserved.
