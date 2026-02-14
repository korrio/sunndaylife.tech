// Team Member Type
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specializations: string[];
  experiences: {
    organization: string;
    role: string;
    scope?: string;
  }[];
  order: number;
}

// Case Study Type
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
  order: number;
  published: boolean;
}

// Service Type
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

// Page Section Type
export interface PageSection {
  id: string;
  type: 'hero' | 'text' | 'stats' | 'services' | 'testimonials' | 'team' | 'case-studies' | 'cta';
  title?: string;
  content: any;
}

// Page Content Type
export interface PageContent {
  id: string;
  title: string;
  subtitle?: string;
  metaDescription: string;
  hero: {
    title: string;
    description: string;
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
}

// Testimonial Type
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  rating?: number;
}
