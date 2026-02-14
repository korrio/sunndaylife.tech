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
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    // Find the team member by ID from storage
    const teamMembers = getTeamMembers();
    const found = teamMembers.find(m => m.id === id);
    if (found) {
      setMember(found);
    }
    setLoading(false);
  }, [id]);

  const handleSave = async (data: Partial<TeamMember>) => {
    if (!id) return;
    
    setSaving(true);
    setStatus(null);
    
    const result = await updateTeamMember(id, data);
    
    setSaving(false);
    
    if (result.github === false) {
      setStatus({ 
        message: `Saved locally, but GitHub commit failed: ${result.message}. Please export and commit manually.`,
        type: 'error'
      });
      setTimeout(() => navigate('/admin/team'), 3000);
    } else if (result.github === true) {
      setStatus({ message: 'Saved and committed to GitHub successfully!', type: 'success' });
      setTimeout(() => navigate('/admin/team'), 1500);
    } else {
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

      {status && (
        <div className={`p-4 rounded-lg ${
          status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {status.message}
        </div>
      )}

      {saving && (
        <div className="flex items-center gap-2 text-gray-600">
          <span className="animate-spin">⏳</span>
          <span>Saving...</span>
        </div>
      )}

      <TeamMemberForm member={member} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
