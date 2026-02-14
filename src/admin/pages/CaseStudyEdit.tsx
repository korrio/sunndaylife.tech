import { useNavigate, useParams } from 'react-router-dom';
import { CaseStudyForm } from '../components/CaseStudyForm';
import { caseStudies } from '@/content/case-studies';
import { useEffect, useState } from 'react';

export default function CaseStudyEdit() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<typeof caseStudies[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the case study by ID
    const found = caseStudies.find(cs => cs.id === id);
    if (found) {
      setCaseStudy(found);
    }
    setLoading(false);
  }, [id]);

  const handleSave = (data: Partial<import('@/types').CaseStudy>) => {
    console.log('Updating case study:', data);
    
    // TODO: Implement actual save logic
    alert('Case study updated! (Demo mode - changes not persisted)');
    navigate('/admin/case-studies');
  };

  const handleCancel = () => {
    navigate('/admin/case-studies');
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-96 bg-gray-100 rounded animate-pulse" />
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Case Study Not Found</h2>
        <p className="text-gray-500">The case study you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/admin/case-studies')}
          className="text-black underline"
        >
          Back to Case Studies
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Edit Case Study</h2>
        <p className="text-gray-500">Update the case study details.</p>
      </div>

      <CaseStudyForm caseStudy={caseStudy} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
