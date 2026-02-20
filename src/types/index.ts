// Team Member Type
export interface TeamMember {
  id: string;
  name: string;
  nameTh?: string;
  role: string;
  roleTh?: string;
  bio: string;
  bioTh?: string;
  image: string;
  specializations: string[];
  specializationsTh?: string[];
  experiences: {
    organization: string;
    organizationTh?: string;
    role: string;
    roleTh?: string;
    scope?: string;
  }[];
  order: number;
}

// Case Study Type
export interface CaseStudy {
  id: string;
  title: string;
  titleTh?: string;
  subtitle: string;
  subtitleTh?: string;
  description: string;
  descriptionTh?: string;
  challenge: string;
  challengeTh?: string;
  solution: string;
  solutionTh?: string;
  results: string[];
  resultsTh?: string[];
  image: string;
  tags: string[];
  tagsTh?: string[];
  order: number;
  published: boolean;
}

// Service Type
export interface Service {
  id: string;
  title: string;
  titleTh?: string;
  description: string;
  descriptionTh?: string;
  icon: string;
  features?: string[];
  featuresTh?: string[];
  image?: string;
}

// Page Section Type
export interface PageSection {
  id: string;
  type: 'hero' | 'text' | 'stats' | 'services' | 'testimonials' | 'team' | 'case-studies' | 'cta';
  title?: string;
  titleTh?: string;
  content: any;
}

// Page Content Type
export interface PageContent {
  id: string;
  title: string;
  titleTh?: string;
  subtitle?: string;
  subtitleTh?: string;
  metaDescription: string;
  metaDescriptionTh?: string;
  hero: {
    title: string;
    titleTh?: string;
    description: string;
    descriptionTh?: string;
    image?: string;
  };
  sections: PageSection[];
  updatedAt: string;
}

// Site Settings Type
export interface SiteSettings {
  siteName: string;
  tagline: string;
  contactEmail: string;
  contactPhone?: string;
  address: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  seo: {
    title: string;
    description: string;
  };
  // GitHub Integration
  githubToken?: string;
  githubOwner?: string;
  githubRepo?: string;
  githubBranch?: string;
  // Vercel Integration
  vercelDeployHook?: string;
}

// Testimonial Type
export interface Testimonial {
  id: string;
  quote: string;
  quoteTh?: string;
  author: string;
  role?: string;
  roleTh?: string;
  company?: string;
  rating?: number;
}

// News Item Type
export interface NewsItem {
  id: string;
  title: string;
  titleTh: string;
  excerpt: string;
  excerptTh: string;
  content: string;
  contentTh: string;
  image: string;
  category: string;
  categoryTh: string;
  date: string;
  featured: boolean;
}

// Language Type
export type Language = 'en' | 'th';

// Bilingual Content Helper Type
export interface BilingualContent {
  en: string;
  th: string;
}
