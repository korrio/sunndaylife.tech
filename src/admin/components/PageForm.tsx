import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import type { PageContent } from '@/types';

interface PageFormProps {
  page?: PageContent;
  onSave: (data: Partial<PageContent>) => void;
  onCancel: () => void;
}

export function PageForm({ page, onSave, onCancel }: PageFormProps) {
  const isEditing = !!page;
  
  const [formData, setFormData] = useState({
    id: page?.id || '',
    title: page?.title || '',
    metaDescription: page?.metaDescription || '',
    hero: {
      title: page?.hero?.title || '',
      description: page?.hero?.description || '',
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Page Information</h3>
            
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Page Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Sunny Day 365 - Professional IT Services"
                  required
                />
                <p className="text-xs text-gray-500">
                  This appears in the browser tab and search results
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="id">Page ID</Label>
                <Input
                  id="id"
                  value={formData.id}
                  disabled
                  className="bg-gray-50"
                />
                <p className="text-xs text-gray-500">
                  Internal identifier for this page
                </p>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">SEO Settings</h3>
            
            <div className="space-y-2">
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Textarea
                id="metaDescription"
                value={formData.metaDescription}
                onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                placeholder="Brief description for search engines..."
                rows={3}
              />
              <p className="text-xs text-gray-500">
                Recommended: 150-160 characters for optimal search display
              </p>
              <p className="text-xs text-gray-400 text-right">
                {formData.metaDescription.length} characters
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Hero Section</h3>
            
            <div className="space-y-2">
              <Label htmlFor="heroTitle">Hero Title *</Label>
              <Input
                id="heroTitle"
                value={formData.hero.title}
                onChange={(e) => setFormData({ ...formData, hero: { ...formData.hero, title: e.target.value } })}
                placeholder="Main headline for the page"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="heroDescription">Hero Description</Label>
              <Textarea
                id="heroDescription"
                value={formData.hero.description}
                onChange={(e) => setFormData({ ...formData, hero: { ...formData.hero, description: e.target.value } })}
                placeholder="Supporting text below the headline"
                rows={3}
              />
            </div>
          </div>

          {/* Page Sections (Read-only info) */}
          {isEditing && page?.sections && (
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-medium">Page Sections</h3>
              <p className="text-sm text-gray-500">
                This page has {page.sections.length} sections. Section editing will be available in a future update.
              </p>
              <div className="space-y-2">
                {page.sections.map((section, index) => (
                  <div key={section.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-gray-400">#{index + 1}</span>
                      <span className="text-sm font-medium">{section.title}</span>
                      <span className="text-xs text-gray-400 capitalize">({section.type})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {isEditing ? 'Save Changes' : 'Create Page'}
        </Button>
      </div>
    </form>
  );
}
