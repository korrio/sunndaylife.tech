import { Button } from '@/components/ui/Button';
import { ContentTable } from '../components/ContentTable';
import { Link } from 'react-router-dom';
import { Plus, Download, RotateCcw, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getTeamMembers, exportContentFiles, downloadFile, deleteTeamMember } from '@/lib/storage';

export default function TeamAdmin() {
  const [teamMembers, setTeamMembers] = useState(getTeamMembers());
  const [githubStatus, setGithubStatus] = useState<{ configured: boolean; owner?: string; repo?: string } | null>(null);

  // Check GitHub config on mount
  useEffect(() => {
    const stored = localStorage.getItem('sunnyday_settings');
    if (stored) {
      const settings = JSON.parse(stored);
      setGithubStatus({
        configured: !!(settings.githubToken && settings.githubOwner && settings.githubRepo),
        owner: settings.githubOwner,
        repo: settings.githubRepo
      });
    } else {
      setGithubStatus({ configured: false });
    }
  }, []);

  // Refresh data when component mounts
  useEffect(() => {
    setTeamMembers(getTeamMembers());
  }, []);

  const items = teamMembers.map(member => ({
    id: member.id,
    title: member.name,
    subtitle: member.role,
    status: 'published' as const,
    updatedAt: 'Feb 14, 2026',
  }));

  const handleExport = () => {
    const files = exportContentFiles();
    const teamFile = files.find(f => f.filename === 'team.ts');
    if (teamFile) {
      downloadFile(teamFile.content, 'team.ts');
    }
  };

  const handleRefresh = () => {
    setTeamMembers(getTeamMembers());
  };

  const handleDelete = async (id: string) => {
    await deleteTeamMember(id);
    setTeamMembers(getTeamMembers());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Team Members</h2>
          <p className="text-gray-500">Manage your team profiles.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleRefresh}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button asChild>
            <Link to="/admin/team/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Member
            </Link>
          </Button>
        </div>
      </div>

      {/* GitHub Status */}
      {githubStatus && (
        <div className={`flex items-center gap-2 p-3 rounded-lg ${
          githubStatus.configured 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          <Github className="h-4 w-4" />
          <span className="text-sm">
            {githubStatus.configured 
              ? `Auto-commit enabled: ${githubStatus.owner}/${githubStatus.repo}` 
              : 'GitHub auto-commit not configured. Changes will be saved locally only.'}
          </span>
          {!githubStatus.configured && (
            <Button variant="outline" size="sm" className="ml-auto" asChild>
              <Link to="/admin/settings">Configure</Link>
            </Button>
          )}
        </div>
      )}

      <ContentTable items={items} basePath="/admin/team" onDelete={handleDelete} />

      {/* Info Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {githubStatus?.configured ? (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">🚀 Auto-Commit Enabled</h4>
            <p className="text-sm text-blue-700">
              Changes are automatically committed to GitHub. Vercel will rebuild the site 
              with the new content.
            </p>
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">💡 Manual Export</h4>
            <p className="text-sm text-blue-700">
              Configure GitHub in Settings for auto-commit, or click "Export" to download 
              TypeScript files and commit them manually.
            </p>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium mb-2">📊 Stats</h4>
          <p className="text-sm text-gray-600">
            {teamMembers.length} team members
          </p>
        </div>
      </div>
    </div>
  );
}
