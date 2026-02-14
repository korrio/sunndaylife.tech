import type { CaseStudy } from '@/types';
import type { TeamMember } from '@/types';
import type { PageContent } from '@/types';
import { caseStudies as defaultCaseStudies } from '@/content/case-studies';
import { teamMembers as defaultTeamMembers } from '@/content/team';
import { homePage as defaultHomePage } from '@/content/pages';
import { commitFile } from './github';

const STORAGE_KEYS = {
  CASE_STUDIES: 'sunnyday_case_studies',
  TEAM_MEMBERS: 'sunnyday_team_members',
  PAGES: 'sunnyday_pages',
  MEDIA: 'sunnyday_media',
};

// Content file paths (for GitHub commits)
const CONTENT_PATHS = {
  caseStudies: 'src/content/case-studies.ts',
  team: 'src/content/team.ts',
  pages: 'src/content/pages.ts'
};

// Generic get function with fallback to default
function getStoredData<T>(key: string, defaultData: T): T {
  if (typeof window === 'undefined') return defaultData;
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error(`Error loading ${key}:`, error);
  }
  return defaultData;
}

// Generic save function
function saveData<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key}:`, error);
  }
}

// Generate TypeScript content file
function generateCaseStudiesFile(caseStudies: CaseStudy[]): string {
  return `import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = ${JSON.stringify(caseStudies, null, 2)};
`;
}

function generateTeamFile(teamMembers: TeamMember[]): string {
  return `import type { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = ${JSON.stringify(teamMembers, null, 2)};
`;
}

function generatePagesFile(pages: Record<string, PageContent>): string {
  const homePage = pages.home || defaultHomePage;
  return `import type { PageContent, Testimonial } from '@/types';

export const homePage: PageContent = ${JSON.stringify(homePage, null, 2)};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Sunny Day 365 transformed our IT infrastructure completely. Their expertise in international deployments saved us months of work.",
    author: "Kaylynn Westervelt",
    role: "Operations Director",
    company: "Global Logistics Co.",
    rating: 5
  },
  {
    id: "2",
    quote: "Professional, responsive, and incredibly knowledgeable. They helped us scale from startup to enterprise seamlessly.",
    author: "Sophia Jackson",
    role: "CEO",
    company: "TechStart Inc.",
    rating: 5
  },
  {
    id: "3",
    quote: "The ISO certification process was daunting, but Sunny Day made it straightforward. Certified in just 6 months!",
    author: "William Harris",
    role: "Compliance Officer",
    company: "SecureData Ltd.",
    rating: 5
  },
  {
    id: "4",
    quote: "Their interim IT service during our transition was a lifesaver. Zero downtime, full professionalism.",
    author: "Mia Lee",
    role: "Managing Partner",
    company: "Lawson & Associates",
    rating: 5
  }
];
`;
}

// Check if GitHub auto-commit is enabled
function isGitHubConfigured(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const stored = localStorage.getItem('sunnyday_settings');
    if (stored) {
      const settings = JSON.parse(stored);
      return !!(settings.githubToken && settings.githubOwner && settings.githubRepo);
    }
  } catch (error) {
    console.error('Error checking GitHub config:', error);
  }
  return false;
}

// Case Studies
export function getCaseStudies(): CaseStudy[] {
  return getStoredData(STORAGE_KEYS.CASE_STUDIES, defaultCaseStudies);
}

export function saveCaseStudies(caseStudies: CaseStudy[]): void {
  saveData(STORAGE_KEYS.CASE_STUDIES, caseStudies);
}

export async function addCaseStudy(caseStudy: CaseStudy): Promise<{ local: boolean; github?: boolean; message?: string }> {
  const caseStudies = getCaseStudies();
  caseStudies.push(caseStudy);
  saveCaseStudies(caseStudies);
  
  // Auto-commit to GitHub if configured
  if (isGitHubConfigured()) {
    const content = generateCaseStudiesFile(caseStudies);
    const result = await commitFile(
      CONTENT_PATHS.caseStudies,
      content,
      `feat: Add case study "${caseStudy.title}"`
    );
    return { local: true, github: result.success, message: result.message };
  }
  
  return { local: true };
}

export async function updateCaseStudy(id: string, updates: Partial<CaseStudy>): Promise<{ local: boolean; github?: boolean; message?: string }> {
  const caseStudies = getCaseStudies();
  const index = caseStudies.findIndex(cs => cs.id === id);
  if (index !== -1) {
    caseStudies[index] = { ...caseStudies[index], ...updates };
    saveCaseStudies(caseStudies);
    
    // Auto-commit to GitHub if configured
    if (isGitHubConfigured()) {
      const content = generateCaseStudiesFile(caseStudies);
      const result = await commitFile(
        CONTENT_PATHS.caseStudies,
        content,
        `feat: Update case study "${caseStudies[index].title}"`
      );
      return { local: true, github: result.success, message: result.message };
    }
  }
  
  return { local: true };
}

export async function deleteCaseStudy(id: string): Promise<{ local: boolean; github?: boolean; message?: string }> {
  const caseStudies = getCaseStudies();
  const filtered = caseStudies.filter(cs => cs.id !== id);
  saveCaseStudies(filtered);
  
  // Auto-commit to GitHub if configured
  if (isGitHubConfigured()) {
    const content = generateCaseStudiesFile(filtered);
    const result = await commitFile(
      CONTENT_PATHS.caseStudies,
      content,
      `feat: Delete case study "${id}"`
    );
    return { local: true, github: result.success, message: result.message };
  }
  
  return { local: true };
}

// Team Members
export function getTeamMembers(): TeamMember[] {
  return getStoredData(STORAGE_KEYS.TEAM_MEMBERS, defaultTeamMembers);
}

export function saveTeamMembers(teamMembers: TeamMember[]): void {
  saveData(STORAGE_KEYS.TEAM_MEMBERS, teamMembers);
}

export async function addTeamMember(member: TeamMember): Promise<{ local: boolean; github?: boolean; message?: string }> {
  const teamMembers = getTeamMembers();
  teamMembers.push(member);
  saveTeamMembers(teamMembers);
  
  // Auto-commit to GitHub if configured
  if (isGitHubConfigured()) {
    const content = generateTeamFile(teamMembers);
    const result = await commitFile(
      CONTENT_PATHS.team,
      content,
      `feat: Add team member "${member.name}"`
    );
    return { local: true, github: result.success, message: result.message };
  }
  
  return { local: true };
}

export async function updateTeamMember(id: string, updates: Partial<TeamMember>): Promise<{ local: boolean; github?: boolean; message?: string }> {
  const teamMembers = getTeamMembers();
  const index = teamMembers.findIndex(m => m.id === id);
  if (index !== -1) {
    teamMembers[index] = { ...teamMembers[index], ...updates };
    saveTeamMembers(teamMembers);
    
    // Auto-commit to GitHub if configured
    if (isGitHubConfigured()) {
      const content = generateTeamFile(teamMembers);
      const result = await commitFile(
        CONTENT_PATHS.team,
        content,
        `feat: Update team member "${teamMembers[index].name}"`
      );
      return { local: true, github: result.success, message: result.message };
    }
  }
  
  return { local: true };
}

export async function deleteTeamMember(id: string): Promise<{ local: boolean; github?: boolean; message?: string }> {
  const teamMembers = getTeamMembers();
  const filtered = teamMembers.filter(m => m.id !== id);
  saveTeamMembers(filtered);
  
  // Auto-commit to GitHub if configured
  if (isGitHubConfigured()) {
    const content = generateTeamFile(filtered);
    const result = await commitFile(
      CONTENT_PATHS.team,
      content,
      `feat: Delete team member "${id}"`
    );
    return { local: true, github: result.success, message: result.message };
  }
  
  return { local: true };
}

// Pages
export function getPage(id: string): PageContent | null {
  const pages = getStoredData<Record<string, PageContent>>(STORAGE_KEYS.PAGES, {
    home: defaultHomePage
  });
  return pages[id] || null;
}

export async function savePage(id: string, page: PageContent): Promise<{ local: boolean; github?: boolean; message?: string }> {
  const pages = getStoredData<Record<string, PageContent>>(STORAGE_KEYS.PAGES, {
    home: defaultHomePage
  });
  pages[id] = page;
  saveData(STORAGE_KEYS.PAGES, pages);
  
  // Auto-commit to GitHub if configured
  if (isGitHubConfigured()) {
    const content = generatePagesFile(pages);
    const result = await commitFile(
      CONTENT_PATHS.pages,
      content,
      `feat: Update page "${page.title}"`
    );
    return { local: true, github: result.success, message: result.message };
  }
  
  return { local: true };
}

// Export functionality - generates TypeScript content files
export function exportContentFiles(): { filename: string; content: string }[] {
  const caseStudies = getCaseStudies();
  const teamMembers = getTeamMembers();
  const pages = getStoredData<Record<string, PageContent>>(STORAGE_KEYS.PAGES, {
    home: defaultHomePage
  });

  return [
    { filename: 'case-studies.ts', content: generateCaseStudiesFile(caseStudies) },
    { filename: 'team.ts', content: generateTeamFile(teamMembers) },
    { filename: 'pages.ts', content: generatePagesFile(pages) }
  ];
}

// Download file helper
export function downloadFile(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/typescript' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Reset to defaults
export function resetToDefaults(): void {
  localStorage.removeItem(STORAGE_KEYS.CASE_STUDIES);
  localStorage.removeItem(STORAGE_KEYS.TEAM_MEMBERS);
  localStorage.removeItem(STORAGE_KEYS.PAGES);
  localStorage.removeItem(STORAGE_KEYS.MEDIA);
}
