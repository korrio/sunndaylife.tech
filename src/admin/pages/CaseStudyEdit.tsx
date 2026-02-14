import { useNavigate, useParams } from 'react-router-dom';
import { CaseStudyForm } from '../components/CaseStudyForm';
import { getCaseStudies, updateCaseStudy } from '@/lib/storage';
import { useEffect, useState } from 'react';
import type { CaseStudy } from '@/types';

export default function CaseStudyEdit() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    // Find the case study by ID from storage
    const caseStudies = getCaseStudies();
    const found = caseStudies.find(cs => cs.id === id);
    if (found) {
      setCaseStudy(found);
    }
    setLoading(false);
  }, [id]);

  const handleSave = async (data: Partial<CaseStudy>) => {
    if (!id) return;
    
    setSaving(true);
    setStatus(null);
    
    const result = await updateCaseStudy(id, data);
    
    setSaving(false);
    
    if (result.github === false) {
      setStatus({ 
        message: `Saved locally, but GitHub commit failed: ${result.message}. Please export and commit manually.`,
        type: 'error'
      });
      setTimeout(() => navigate('/admin/case-studies'), 3000);
    } else if (result.github === true) {
      setStatus({ message: 'Saved and committed to GitHub successfully!', type: 'success' });
      setTimeout(() => navigate('/admin/case-studies'), 1500);
    } else {
      navigate('/admin/case-studies');
    }
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

      <CaseStudyForm caseStudy={caseStudy} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
