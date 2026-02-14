import { Button } from '@/components/ui/Button';
import { ContentTable } from '../components/ContentTable';
import { teamMembers } from '@/content/team';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function TeamAdmin() {
  const items = teamMembers.map(member => ({
    id: member.id,
    title: member.name,
    subtitle: member.role,
    status: 'published' as const,
    updatedAt: 'Feb 13, 2026',
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Team Members</h2>
          <p className="text-gray-500">Manage your team profiles.</p>
        </div>
        <Button asChild>
          <Link to="/admin/team/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Member
          </Link>
        </Button>
      </div>

      <ContentTable items={items} basePath="/admin/team" />
    </div>
  );
}
