import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { X, Plus } from 'lucide-react';
import type { CaseStudy } from '@/types';

interface CaseStudyFormProps {
  caseStudy?: CaseStudy;
  onSave: (data: Partial<CaseStudy>) => void;
  onCancel: () => void;
}

export function CaseStudyForm({ caseStudy, onSave, onCancel }: CaseStudyFormProps) {
  const isEditing = !!caseStudy;
  
  const [formData, setFormData] = useState({
    id: caseStudy?.id || '',
    title: caseStudy?.title || '',
    subtitle: caseStudy?.subtitle || '',
    description: caseStudy?.description || '',
    challenge: caseStudy?.challenge || '',
    solution: caseStudy?.solution || '',
    results: caseStudy?.results || [],
    image: caseStudy?.image || '',
    tags: caseStudy?.tags || [],
    published: caseStudy?.published ?? true,
  });

  const [newTag, setNewTag] = useState('');
  const [newResult, setNewResult] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, newTag.trim()] });
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tagToRemove) });
  };

  const addResult = () => {
    if (newResult.trim()) {
      setFormData({ ...formData, results: [...formData.results, newResult.trim()] });
      setNewResult('');
    }
  };

  const removeResult = (index: number) => {
    setFormData({ ...formData, results: formData.results.filter((_, i) => i !== index) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Information</h3>
            
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Server Hardware Installation"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Brief description of the project"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="id">URL Slug *</Label>
                <Input
                  id="id"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  placeholder="e.g., server-installation-timor"
                  required
                  disabled={isEditing}
                />
                <p className="text-xs text-gray-500">
                  Used in the URL: /case-studies/{formData.id || 'example'}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Content</h3>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Overview of the project..."
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenge">Challenge *</Label>
              <Textarea
                id="challenge"
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                placeholder="What challenges did the client face?"
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution">Solution *</Label>
              <Textarea
                id="solution"
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                placeholder="How did you solve the problem?"
                rows={4}
                required
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Results</h3>
            
            <div className="flex gap-2">
              <Input
                value={newResult}
                onChange={(e) => setNewResult(e.target.value)}
                placeholder="Add a result (e.g., 50% cost reduction)"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addResult())}
              />
              <Button type="button" variant="outline" onClick={addResult}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.results.map((result: string, index: number) => (
                <Badge key={index} variant="default" className="gap-1 bg-gray-200 text-gray-800 hover:bg-gray-300">
                  {result}
                  <button
                    type="button"
                    onClick={() => removeResult(index)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {formData.results.length === 0 && (
                <p className="text-sm text-gray-500 italic">No results added yet</p>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Tags</h3>
            
            <div className="flex gap-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag (e.g., Infrastructure)"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button type="button" variant="outline" onClick={addTag}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="gap-1">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {formData.tags.length === 0 && (
                <p className="text-sm text-gray-500 italic">No tags added yet</p>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Featured Image</h3>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image Path</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="/images/case-study.jpg"
              />
              <p className="text-xs text-gray-500">
                Path to the image in the public folder
              </p>
            </div>

            {formData.image && (
              <div className="w-48 h-32 bg-gray-100 rounded border flex items-center justify-center">
                <span className="text-sm text-gray-500">{formData.image}</span>
              </div>
            )}
          </div>

          {/* Status */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Status</h3>
            
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  checked={formData.published}
                  onChange={() => setFormData({ ...formData, published: true })}
                  className="w-4 h-4"
                />
                <span>Published</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  checked={!formData.published}
                  onChange={() => setFormData({ ...formData, published: false })}
                  className="w-4 h-4"
                />
                <span>Draft</span>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {isEditing ? 'Save Changes' : 'Create Case Study'}
        </Button>
      </div>
    </form>
  );
}
