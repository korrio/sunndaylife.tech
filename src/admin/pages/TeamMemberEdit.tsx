import { useNavigate, useParams } from 'react-router-dom';
import { TeamMemberForm } from '../components/TeamMemberForm';
import { getTeamMembers, updateTeamMember } from '@/lib/storage';
import { useEffect, useState } from 'react';
import type { TeamMember } from '@/types';

export default function TeamMemberEdit() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the team member by ID from storage
    const teamMembers = getTeamMembers();
    const found = teamMembers.find(m => m.id === id);
    if (found) {
      setMember(found);
    }
    setLoading(false);
  }, [id]);

  const handleSave = (data: Partial<TeamMember>) => {
    if (id) {
      updateTeamMember(id, data);
      navigate('/admin/team');
    }
  };

  const handleCancel = () => {
    navigate('/admin/team');
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-96 bg-gray-100 rounded animate-pulse" />
      </div>
    );
  }

  if (!member) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Team Member Not Found</h2>
        <p className="text-gray-500">The team member you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/admin/team')}
          className="text-black underline"
        >
          Back to Team
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Edit Team Member</h2>
        <p className="text-gray-500">Update the team member profile.</p>
      </div>

      <TeamMemberForm member={member} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
