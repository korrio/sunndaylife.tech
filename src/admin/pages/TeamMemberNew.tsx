import { useNavigate } from 'react-router-dom';
import { TeamMemberForm } from '../components/TeamMemberForm';
import { addTeamMember } from '@/lib/storage';
import type { TeamMember } from '@/types';
import { useState } from 'react';

export default function TeamMemberNew() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSave = async (data: Partial<TeamMember>) => {
    setSaving(true);
    setStatus(null);
    
    // Ensure all required fields are present
    const newMember: TeamMember = {
      id: data.id || '',
      name: data.name || '',
      role: data.role || '',
      bio: data.bio || '',
      image: data.image || '/images/default.jpg',
      specializations: data.specializations || [],
      experiences: data.experiences || [],
      order: Date.now(),
    };

    const result = await addTeamMember(newMember);
    
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">New Team Member</h2>
        <p className="text-gray-500">Add a new member to your team.</p>
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

      <TeamMemberForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
