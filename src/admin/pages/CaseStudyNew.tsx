import { useNavigate } from 'react-router-dom';
import { CaseStudyForm } from '../components/CaseStudyForm';

export default function CaseStudyNew() {
  const navigate = useNavigate();

  const handleSave = (data: Partial<import('@/types').CaseStudy>) => {
    // In a real app, this would save to a database or API
    // For now, we'll just log and navigate back
    console.log('Creating case study:', data);
    
    // TODO: Implement actual save logic
    // For now, show an alert that this is a demo
    alert('Case study created! (Demo mode - changes not persisted)');
    navigate('/admin/case-studies');
  };

  const handleCancel = () => {
    navigate('/admin/case-studies');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">New Case Study</h2>
        <p className="text-gray-500">Add a new case study to your portfolio.</p>
      </div>

      <CaseStudyForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
