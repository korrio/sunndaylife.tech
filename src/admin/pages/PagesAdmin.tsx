import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { homePage } from '@/content/pages';

// Define available pages
const pages = [
  {
    id: 'home',
    title: 'Home Page',
    subtitle: homePage.metaDescription.slice(0, 60) + '...',
    status: 'published' as const,
    updatedAt: 'Feb 13, 2026',
    path: '/'
  },
  {
    id: 'about',
    title: 'About Us',
    subtitle: 'Company history, mission, and values',
    status: 'published' as const,
    updatedAt: 'Feb 13, 2026',
    path: '/about'
  },
  {
    id: 'services',
    title: 'Services',
    subtitle: 'IT services and solutions overview',
    status: 'published' as const,
    updatedAt: 'Feb 13, 2026',
    path: '/services'
  },
  {
    id: 'contact',
    title: 'Contact',
    subtitle: 'Contact information and form',
    status: 'published' as const,
    updatedAt: 'Feb 13, 2026',
    path: '/contact'
  }
];

export default function PagesAdmin() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Pages</h2>
          <p className="text-gray-500">Manage your website pages and content.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link to="/" target="_blank">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Site
            </Link>
          </Button>
        </div>
      </div>

      {/* Pages Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {pages.map((page) => (
          <div 
            key={page.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{page.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{page.subtitle}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {page.status}
                  </span>
                  <span className="text-xs text-gray-400">Updated {page.updatedAt}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to={page.path} target="_blank">
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to={`/admin/pages/${page.id}/edit`}>Edit</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="bg-gray-50 rounded-lg p-6 mt-8">
        <h4 className="font-medium mb-2">Page Management Tips</h4>
        <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
          <li>Edit page titles and meta descriptions for better SEO</li>
          <li>Update hero sections to reflect current messaging</li>
          <li>Changes are saved immediately but require site rebuild to deploy</li>
        </ul>
      </div>
    </div>
  );
}
