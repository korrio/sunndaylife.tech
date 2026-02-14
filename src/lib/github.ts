// GitHub API Integration for auto-committing content changes
// This enables the CMS to automatically save changes back to the GitHub repo

interface GitHubFile {
  path: string;
  content: string;
  message: string;
}

interface GitHubConfig {
  owner: string;
  repo: string;
  token: string;
  branch?: string;
}

// Get GitHub config from settings
function getGitHubConfig(): GitHubConfig | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem('sunnyday_settings');
    if (stored) {
      const settings = JSON.parse(stored);
      if (settings.githubToken && settings.githubOwner && settings.githubRepo) {
        return {
          owner: settings.githubOwner,
          repo: settings.githubRepo,
          token: settings.githubToken,
          branch: settings.githubBranch || 'main'
        };
      }
    }
  } catch (error) {
    console.error('Error loading GitHub config:', error);
  }
  return null;
}

// Base64 encode content for GitHub API
function base64Encode(str: string): string {
  return btoa(unescape(encodeURIComponent(str)));
}

// Get file SHA if it exists (needed for updates)
async function getFileSha(config: GitHubConfig, path: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${path}?ref=${config.branch}`,
      {
        headers: {
          'Authorization': `token ${config.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    if (response.status === 404) {
      return null; // File doesn't exist yet
    }
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.sha;
  } catch (error) {
    console.error('Error getting file SHA:', error);
    return null;
  }
}

// Commit a file to GitHub
export async function commitFile(
  path: string,
  content: string,
  message: string
): Promise<{ success: boolean; message: string; url?: string }> {
  const config = getGitHubConfig();
  
  if (!config) {
    return {
      success: false,
      message: 'GitHub not configured. Please add your GitHub token in Settings.'
    };
  }
  
  try {
    // Get current file SHA (if exists)
    const sha = await getFileSha(config, path);
    
    // Prepare request body
    const body: any = {
      message,
      content: base64Encode(content),
      branch: config.branch
    };
    
    if (sha) {
      body.sha = sha;
    }
    
    // Commit to GitHub
    const response = await fetch(
      `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `token ${config.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      success: true,
      message: `Successfully committed to ${config.branch}`,
      url: data.commit?.html_url
    };
    
  } catch (error: any) {
    console.error('Error committing file:', error);
    return {
      success: false,
      message: error.message || 'Failed to commit to GitHub'
    };
  }
}

// Commit multiple files (batch commit)
export async function commitMultipleFiles(
  files: GitHubFile[]
): Promise<{ success: boolean; message: string; results: { path: string; success: boolean }[] }> {
  const config = getGitHubConfig();
  
  if (!config) {
    return {
      success: false,
      message: 'GitHub not configured',
      results: files.map(f => ({ path: f.path, success: false }))
    };
  }
  
  const results: { path: string; success: boolean }[] = [];
  
  // Commit files sequentially to avoid conflicts
  for (const file of files) {
    const result = await commitFile(file.path, file.content, file.message);
    results.push({
      path: file.path,
      success: result.success
    });
  }
  
  const allSuccess = results.every(r => r.success);
  
  return {
    success: allSuccess,
    message: allSuccess 
      ? `Successfully committed ${results.length} files`
      : `Committed ${results.filter(r => r.success).length}/${results.length} files`,
    results
  };
}

// Test GitHub connection
export async function testGitHubConnection(): Promise<{ success: boolean; message: string }> {
  const config = getGitHubConfig();
  
  if (!config) {
    return {
      success: false,
      message: 'GitHub not configured'
    };
  }
  
  try {
    const response = await fetch(
      `https://api.github.com/repos/${config.owner}/${config.repo}`,
      {
        headers: {
          'Authorization': `token ${config.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      success: true,
      message: `Connected to ${data.full_name}`
    };
    
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Failed to connect to GitHub'
    };
  }
}

// Trigger Vercel redeploy (using deploy hook)
export async function triggerVercelDeploy(): Promise<{ success: boolean; message: string }> {
  if (typeof window === 'undefined') {
    return { success: false, message: 'Cannot trigger deploy from server' };
  }
  
  try {
    const stored = localStorage.getItem('sunnyday_settings');
    if (!stored) {
      return { success: false, message: 'Settings not found' };
    }
    
    const settings = JSON.parse(stored);
    const deployHook = settings.vercelDeployHook;
    
    if (!deployHook) {
      return {
        success: false,
        message: 'Vercel deploy hook not configured'
      };
    }
    
    const response = await fetch(deployHook, {
      method: 'POST'
    });
    
    if (!response.ok) {
      throw new Error(`Deploy hook error: ${response.status}`);
    }
    
    return {
      success: true,
      message: 'Vercel redeploy triggered successfully'
    };
    
  } catch (error: any) {
    return {
      success: false,
      message: error.message || 'Failed to trigger deploy'
    };
  }
}

// Get default content paths
export function getContentPaths() {
  return {
    caseStudies: 'src/content/case-studies.ts',
    team: 'src/content/team.ts',
    pages: 'src/content/pages.ts'
  };
}
