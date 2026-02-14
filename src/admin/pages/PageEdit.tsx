import { useNavigate, useParams } from 'react-router-dom';
import { PageForm } from '../components/PageForm';
import { getPage, savePage } from '@/lib/storage';
import { homePage as defaultHomePage } from '@/content/pages';
import { useEffect, useState } from 'react';
import type { PageContent } from '@/types';

// Get page data from storage or defaults
const getPageById = (id: string): PageContent | null => {
  const stored = getPage(id);
  if (stored) return stored;
  
  // Return defaults if not in storage
  switch (id) {
    case 'home':
      return defaultHomePage;
    case 'about':
      return {
        id: 'about',
        title: 'About Us - Sunny Day 365',
        metaDescription: 'Learn about Sunny Day 365, our mission, values, and the team behind our professional IT services.',
        hero: {
          title: 'About Sunny Day 365',
          description: 'Your trusted partner in professional IT solutions'
        },
        sections: [],
        updatedAt: new Date().toISOString()
      };
    case 'services':
      return {
        id: 'services',
        title: 'Our Services - Sunny Day 365',
        metaDescription: 'Comprehensive IT services including Virtual IT Department, Debt Collection IT, Compliance, and Overseas Projects.',
        hero: {
          title: 'Our Services',
          description: 'Tailored IT solutions for your business needs'
        },
        sections: [],
        updatedAt: new Date().toISOString()
      };
    case 'contact':
      return {
        id: 'contact',
        title: 'Contact Us - Sunny Day 365',
        metaDescription: 'Get in touch with Sunny Day 365 for professional IT services and solutions.',
        hero: {
          title: 'Contact Us',
          description: 'We\'d love to hear from you'
        },
        sections: [],
        updatedAt: new Date().toISOString()
      };
    default:
      return null;
  }
};

export default function PageEdit() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [page, setPage] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const found = getPageById(id);
      if (found) {
        setPage(found);
      }
    }
    setLoading(false);
  }, [id]);

  const handleSave = (data: Partial<PageContent>) => {
    if (id && page) {
      const updatedPage: PageContent = {
        ...page,
        ...data,
        updatedAt: new Date().toISOString()
      };
      savePage(id, updatedPage);
      navigate('/admin/pages');
    }
  };

  const handleCancel = () => {
    navigate('/admin/pages');
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-96 bg-gray-100 rounded animate-pulse" />
      </div>
    );
  }

  if (!page) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Page Not Found</h2>
        <p className="text-gray-500">The page you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/admin/pages')}
          className="text-black underline"
        >
          Back to Pages
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Edit Page</h2>
        <p className="text-gray-500">Update the {page.title} content and settings.</p>
      </div>

      <PageForm page={page} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
