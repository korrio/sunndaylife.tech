import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ContentItem {
  id: string;
  title: string;
  subtitle?: string;
  status: 'published' | 'draft';
  updatedAt: string;
}

interface ContentTableProps {
  items: ContentItem[];
  basePath: string;
}

export function ContentTable({ items, basePath }: ContentTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left font-medium text-gray-500">Title</th>
            <th className="px-6 py-3 text-left font-medium text-gray-500">Status</th>
            <th className="px-6 py-3 text-left font-medium text-gray-500">Last Updated</th>
            <th className="px-6 py-3 text-right font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
              <td className="px-6 py-4">
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  {item.subtitle && (
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  )}
                </div>
              </td>
              <td className="px-6 py-4">
                <Badge variant={item.status === 'published' ? 'default' : 'outline'}>
                  {item.status}
                </Badge>
              </td>
              <td className="px-6 py-4 text-gray-500">{item.updatedAt}</td>
              <td className="px-6 py-4 text-right">
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`${basePath}/${item.id}/edit`}>Edit</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
