import { useNavigate } from 'react-router-dom';
import { CaseStudyForm } from '../components/CaseStudyForm';
import { addCaseStudy } from '@/lib/storage';
import type { CaseStudy } from '@/types';

export default function CaseStudyNew() {
  const navigate = useNavigate();

  const handleSave = (data: Partial<CaseStudy>) => {
    // Ensure all required fields are present
    const newCaseStudy: CaseStudy = {
      id: data.id || '',
      title: data.title || '',
      subtitle: data.subtitle || '',
      description: data.description || '',
      challenge: data.challenge || '',
      solution: data.solution || '',
      results: data.results || [],
      image: data.image || '/images/default.jpg',
      tags: data.tags || [],
      order: Date.now(),
      published: data.published ?? true,
    };

    addCaseStudy(newCaseStudy);
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
