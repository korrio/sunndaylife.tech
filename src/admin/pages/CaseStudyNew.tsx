import { useNavigate } from 'react-router-dom';
import { CaseStudyForm } from '../components/CaseStudyForm';
import { addCaseStudy } from '@/lib/storage';
import type { CaseStudy } from '@/types';
import { useState } from 'react';

export default function CaseStudyNew() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSave = async (data: Partial<CaseStudy>) => {
    setSaving(true);
    setStatus(null);
    
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

    const result = await addCaseStudy(newCaseStudy);
    
    setSaving(false);
    
    if (result.github === false) {
      // GitHub commit failed but local save succeeded
      setStatus({ 
        message: `Saved locally, but GitHub commit failed: ${result.message}. Please export and commit manually.`,
        type: 'error'
      });
      setTimeout(() => navigate('/admin/case-studies'), 3000);
    } else if (result.github === true) {
      // Both succeeded
      setStatus({ message: 'Saved and committed to GitHub successfully!', type: 'success' });
      setTimeout(() => navigate('/admin/case-studies'), 1500);
    } else {
      // Local only (GitHub not configured)
      navigate('/admin/case-studies');
    }
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

      <CaseStudyForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
