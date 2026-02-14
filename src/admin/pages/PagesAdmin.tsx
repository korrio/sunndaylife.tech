import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { ExternalLink, Download, RotateCcw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPage, exportContentFiles, downloadFile } from '@/lib/storage';

// Define available pages
const pagesConfig = [
  { id: 'home', title: 'Home Page', subtitle: 'Landing page with hero, services, and case studies', path: '/' },
  { id: 'about', title: 'About Us', subtitle: 'Company history, mission, and values', path: '/about' },
  { id: 'services', title: 'Services', subtitle: 'IT services and solutions overview', path: '/services' },
  { id: 'contact', title: 'Contact', subtitle: 'Contact information and form', path: '/contact' }
];

export default function PagesAdmin() {
  const [pages, setPages] = useState(pagesConfig.map(p => ({ ...p, status: 'published' as const, updatedAt: 'Feb 14, 2026' })));

  // Refresh data when component mounts
  useEffect(() => {
    const updatedPages = pagesConfig.map(config => {
      const pageData = getPage(config.id);
      return {
        ...config,
        status: 'published' as const,
        updatedAt: pageData ? 'Modified' : 'Feb 14, 2026'
      };
    });
    setPages(updatedPages);
  }, []);

  const handleExport = () => {
    const files = exportContentFiles();
    const pagesFile = files.find(f => f.filename === 'pages.ts');
    if (pagesFile) {
      downloadFile(pagesFile.content, 'pages.ts');
    }
  };

  const handleRefresh = () => {
    const updatedPages = pagesConfig.map(config => {
      const pageData = getPage(config.id);
      return {
        ...config,
        status: 'published' as const,
        updatedAt: pageData ? 'Modified' : 'Feb 14, 2026'
      };
    });
    setPages(updatedPages);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Pages</h2>
          <p className="text-gray-500">Manage your website pages and content.</p>
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
                  <span className="text-xs text-gray-400">{page.updatedAt}</span>
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

      {/* Persistence Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-1">💡 Data Persistence</h4>
        <p className="text-sm text-blue-700">
          Changes are saved to your browser's localStorage. To make them permanent:
        </p>
        <ol className="text-sm text-blue-700 mt-2 ml-4 list-decimal">
          <li>Edit and save your content</li>
          <li>Click "Export" to download the updated TypeScript file</li>
          <li>Replace the file in <code>src/content/pages.ts</code></li>
          <li>Commit and push to GitHub</li>
        </ol>
      </div>

      {/* Quick Tips */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-medium mb-2">Page Management Tips</h4>
        <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
          <li>Edit page titles and meta descriptions for better SEO</li>
          <li>Update hero sections to reflect current messaging</li>
          <li>Export and commit changes to persist them permanently</li>
        </ul>
      </div>
    </div>
  );
}
