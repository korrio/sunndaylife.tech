import { Button } from '@/components/ui/Button';
import { ContentTable } from '../components/ContentTable';
import { Link } from 'react-router-dom';
import { Plus, Download, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getCaseStudies, exportContentFiles, downloadFile, deleteCaseStudy } from '@/lib/storage';

export default function CaseStudiesAdmin() {
  const [caseStudies, setCaseStudies] = useState(getCaseStudies());

  // Refresh data when component mounts
  useEffect(() => {
    setCaseStudies(getCaseStudies());
  }, []);

  const items = caseStudies.map(cs => ({
    id: cs.id,
    title: cs.title,
    subtitle: cs.subtitle,
    status: cs.published ? 'published' as const : 'draft' as const,
    updatedAt: 'Feb 14, 2026',
  }));

  const handleExport = () => {
    const files = exportContentFiles();
    const caseStudiesFile = files.find(f => f.filename === 'case-studies.ts');
    if (caseStudiesFile) {
      downloadFile(caseStudiesFile.content, 'case-studies.ts');
    }
  };

  const handleRefresh = () => {
    setCaseStudies(getCaseStudies());
  };

  const handleDelete = (id: string) => {
    deleteCaseStudy(id);
    setCaseStudies(getCaseStudies());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Case Studies</h2>
          <p className="text-gray-500">Manage your portfolio of client projects.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleRefresh}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button asChild>
            <Link to="/admin/case-studies/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Case Study
            </Link>
          </Button>
        </div>
      </div>

      <ContentTable items={items} basePath="/admin/case-studies" onDelete={handleDelete} />

      {/* Persistence Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-1">💡 Data Persistence</h4>
        <p className="text-sm text-blue-700">
          Changes are saved to your browser's localStorage. To make them permanent:
        </p>
        <ol className="text-sm text-blue-700 mt-2 ml-4 list-decimal">
          <li>Edit and save your content</li>
          <li>Click "Export" to download the updated TypeScript file</li>
          <li>Replace the file in <code>src/content/case-studies.ts</code></li>
          <li>Commit and push to GitHub</li>
        </ol>
      </div>
    </div>
  );
}
