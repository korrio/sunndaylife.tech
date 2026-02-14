import { useNavigate } from 'react-router-dom';
import { TeamMemberForm } from '../components/TeamMemberForm';
import { addTeamMember } from '@/lib/storage';
import type { TeamMember } from '@/types';

export default function TeamMemberNew() {
  const navigate = useNavigate();

  const handleSave = (data: Partial<TeamMember>) => {
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

    addTeamMember(newMember);
    navigate('/admin/team');
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

      <TeamMemberForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
