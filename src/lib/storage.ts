import type { CaseStudy } from '@/types';
import type { TeamMember } from '@/types';
import type { PageContent } from '@/types';
import { caseStudies as defaultCaseStudies } from '@/content/case-studies';
import { teamMembers as defaultTeamMembers } from '@/content/team';
import { homePage as defaultHomePage } from '@/content/pages';

const STORAGE_KEYS = {
  CASE_STUDIES: 'sunnyday_case_studies',
  TEAM_MEMBERS: 'sunnyday_team_members',
  PAGES: 'sunnyday_pages',
  MEDIA: 'sunnyday_media',
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

// Case Studies
export function getCaseStudies(): CaseStudy[] {
  return getStoredData(STORAGE_KEYS.CASE_STUDIES, defaultCaseStudies);
}

export function saveCaseStudies(caseStudies: CaseStudy[]): void {
  saveData(STORAGE_KEYS.CASE_STUDIES, caseStudies);
}

export function addCaseStudy(caseStudy: CaseStudy): void {
  const caseStudies = getCaseStudies();
  caseStudies.push(caseStudy);
  saveCaseStudies(caseStudies);
}

export function updateCaseStudy(id: string, updates: Partial<CaseStudy>): void {
  const caseStudies = getCaseStudies();
  const index = caseStudies.findIndex(cs => cs.id === id);
  if (index !== -1) {
    caseStudies[index] = { ...caseStudies[index], ...updates };
    saveCaseStudies(caseStudies);
  }
}

export function deleteCaseStudy(id: string): void {
  const caseStudies = getCaseStudies();
  const filtered = caseStudies.filter(cs => cs.id !== id);
  saveCaseStudies(filtered);
}

// Team Members
export function getTeamMembers(): TeamMember[] {
  return getStoredData(STORAGE_KEYS.TEAM_MEMBERS, defaultTeamMembers);
}

export function saveTeamMembers(teamMembers: TeamMember[]): void {
  saveData(STORAGE_KEYS.TEAM_MEMBERS, teamMembers);
}

export function addTeamMember(member: TeamMember): void {
  const teamMembers = getTeamMembers();
  teamMembers.push(member);
  saveTeamMembers(teamMembers);
}

export function updateTeamMember(id: string, updates: Partial<TeamMember>): void {
  const teamMembers = getTeamMembers();
  const index = teamMembers.findIndex(m => m.id === id);
  if (index !== -1) {
    teamMembers[index] = { ...teamMembers[index], ...updates };
    saveTeamMembers(teamMembers);
  }
}

export function deleteTeamMember(id: string): void {
  const teamMembers = getTeamMembers();
  const filtered = teamMembers.filter(m => m.id !== id);
  saveTeamMembers(filtered);
}

// Pages
export function getPage(id: string): PageContent | null {
  const pages = getStoredData<Record<string, PageContent>>(STORAGE_KEYS.PAGES, {
    home: defaultHomePage
  });
  return pages[id] || null;
}

export function savePage(id: string, page: PageContent): void {
  const pages = getStoredData<Record<string, PageContent>>(STORAGE_KEYS.PAGES, {
    home: defaultHomePage
  });
  pages[id] = page;
  saveData(STORAGE_KEYS.PAGES, pages);
}

// Export functionality - generates TypeScript content files
export function exportContentFiles(): { filename: string; content: string }[] {
  const caseStudies = getCaseStudies();
  const teamMembers = getTeamMembers();
  const pages = getStoredData<Record<string, PageContent>>(STORAGE_KEYS.PAGES, {
    home: defaultHomePage
  });

  const files = [];

  // Export case-studies.ts
  files.push({
    filename: 'case-studies.ts',
    content: `import type { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = ${JSON.stringify(caseStudies, null, 2)};
`
  });

  // Export team.ts
  files.push({
    filename: 'team.ts',
    content: `import type { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = ${JSON.stringify(teamMembers, null, 2)};
`
  });

  // Export pages.ts (home page)
  if (pages.home) {
    files.push({
      filename: 'pages.ts',
      content: `import type { PageContent } from '@/types';

export const homePage: PageContent = ${JSON.stringify(pages.home, null, 2)};
`
    });
  }

  return files;
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
