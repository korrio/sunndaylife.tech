import { Button } from '@/components/ui/Button';
import { ContentTable } from '../components/ContentTable';
import { caseStudies } from '@/content/case-studies';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function CaseStudiesAdmin() {
  const items = caseStudies.map(cs => ({
    id: cs.id,
    title: cs.title,
    subtitle: cs.subtitle,
    status: cs.published ? 'published' as const : 'draft' as const,
    updatedAt: 'Feb 13, 2026',
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Case Studies</h2>
          <p className="text-gray-500">Manage your portfolio of client projects.</p>
        </div>
        <Button asChild>
          <Link to="/admin/case-studies/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Case Study
          </Link>
        </Button>
      </div>

      <ContentTable items={items} basePath="/admin/case-studies" />
    </div>
  );
}
