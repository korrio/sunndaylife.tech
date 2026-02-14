import { useNavigate } from 'react-router-dom';
import { TeamMemberForm } from '../components/TeamMemberForm';

export default function TeamMemberNew() {
  const navigate = useNavigate();

  const handleSave = (data: Partial<import('@/types').TeamMember>) => {
    console.log('Creating team member:', data);
    
    // TODO: Implement actual save logic
    alert('Team member created! (Demo mode - changes not persisted)');
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
