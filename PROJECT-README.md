# Sunny Day 365 Website + CMS

A complete, production-ready website for Sunny Day 365 Co., LTD with integrated Content Management System.

## 🚀 Features

### Website (Public)
- **Home Page** - Hero, About, Services, Case Studies, Team, Testimonials, CTA
- **About Page** - Company story, values, process, global experience
- **Services Page** - 4 core services with features and benefits
- **Case Studies Page** - 5 project case studies with filtering
- **Case Study Detail** - Full project details, challenge, solution, results
- **Team Page** - Leadership profiles with experience timeline
- **Contact Page** - Contact form and company information

### CMS (Admin Panel)
- **Dashboard** - Stats overview, recent activity, quick actions
- **Case Studies Admin** - Manage all case studies
- **Team Admin** - Manage team member profiles
- **Media Library** - Upload and manage images
- **Settings** - Site configuration (coming soon)

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Vite | Build tool & dev server |
| React | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router | Navigation |
| Lucide React | Icons |

## 📁 Project Structure

```
sunnyday365-vite/
├── index.html              # Entry HTML
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind with custom colors
├── src/
│   ├── main.tsx           # App entry point
│   ├── App.tsx            # Routes configuration
│   ├── index.css          # Global styles
│   ├── types/
│   │   └── index.ts       # TypeScript types
│   ├── lib/
│   │   └── utils.ts       # Utility functions
│   ├── content/           # Content data (CMS)
│   │   ├── site-settings.json
│   │   ├── team.ts
│   │   ├── case-studies.ts
│   │   ├── services.ts
│   │   └── pages.ts
│   ├── components/
│   │   ├── ui/            # UI primitives
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── CaseStudyCard.tsx
│   │   ├── TeamCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── pages/             # Public pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── CaseStudyDetail.tsx
│   │   ├── Team.tsx
│   │   └── Contact.tsx
│   └── admin/             # CMS Admin
│       ├── components/
│       │   ├── AdminLayout.tsx
│       │   ├── StatCard.tsx
│       │   └── ContentTable.tsx
│       └── pages/
│           ├── Dashboard.tsx
│           ├── CaseStudiesAdmin.tsx
│           ├── TeamAdmin.tsx
│           └── MediaAdmin.tsx
```

## 🎨 Design System

### Colors
- **Primary (Teal)**: `#167f93` - Brand color, CTAs
- **Sunny Gold**: `#f5a623` - Accents, highlights
- **Sunny Light**: `#f8d56b` - Gradients
- **Grayscale**: Full range from white to black

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tight tracking
- **Body**: Regular, comfortable line-height

### Components
- **Buttons**: Primary, Secondary, Outline, Ghost variants
- **Cards**: White background, subtle shadow, rounded corners
- **Badges**: Default, Outline, Sunny variants
- **Sections**: Default, Dark, Gradient, Sunny variants

## 🚀 Getting Started

```bash
# Navigate to project
cd sunnyday365-vite

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:5173
```

## 📦 Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🔗 URLs

| URL | Description |
|-----|-------------|
| `/` | Home page |
| `/about` | About page |
| `/services` | Services page |
| `/case-studies` | Case studies listing |
| `/case-studies/:id` | Case study detail |
| `/team` | Team page |
| `/contact` | Contact page |
| `/admin` | CMS Dashboard |
| `/admin/case-studies` | Manage case studies |
| `/admin/team` | Manage team |
| `/admin/media` | Media library |

## 📝 Content Management

Content is stored in `src/content/` as JSON/TypeScript files:

### Edit Team Members
File: `src/content/team.ts`
```typescript
export const teamMembers: TeamMember[] = [
  {
    id: "phongsaphat-duma",
    name: "Phongsaphat Duma",
    role: "Managing Director",
    // ...
  }
];
```

### Edit Case Studies
File: `src/content/case-studies.ts`
```typescript
export const caseStudies: CaseStudy[] = [
  {
    id: "timor-leste-server-deployment",
    title: "Server Hardware/Software Installation",
    // ...
  }
];
```

### Edit Site Settings
File: `src/content/site-settings.json`
```json
{
  "siteName": "Sunny Day 365",
  "tagline": "Focus on your work...",
  "contactEmail": "contact@sunnydaylife.tech"
}
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build the project
npm run build

# Deploy dist folder
```

### GitHub Pages
1. Build the project
2. Push `dist` folder to `gh-pages` branch

## 🔄 Future Enhancements

1. **GitHub Integration** - Save content changes directly to GitHub
2. **Image Upload** - Connect to Vercel Blob or Cloudinary
3. **Rich Text Editor** - For better content editing
4. **Preview Mode** - Draft content preview
5. **User Authentication** - Secure admin access
6. **Form Handling** - Contact form submission
7. **SEO Optimization** - Meta tags, sitemap
8. **Analytics** - Google Analytics integration

## 📄 License

© 2026 Sunny Day 365 Co., LTD. All rights reserved.
