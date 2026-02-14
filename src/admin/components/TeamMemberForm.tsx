import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { X, Plus } from 'lucide-react';
import type { TeamMember } from '@/types';

interface TeamMemberFormProps {
  member?: TeamMember;
  onSave: (data: Partial<TeamMember>) => void;
  onCancel: () => void;
}

interface Experience {
  organization: string;
  role: string;
  scope?: string;
}

export function TeamMemberForm({ member, onSave, onCancel }: TeamMemberFormProps) {
  const isEditing = !!member;
  
  const [formData, setFormData] = useState({
    id: member?.id || '',
    name: member?.name || '',
    role: member?.role || '',
    bio: member?.bio || '',
    image: member?.image || '',
    specializations: member?.specializations || [],
    experiences: member?.experiences || [],
  });

  const [newSpec, setNewSpec] = useState('');
  const [newExp, setNewExp] = useState<Experience>({ organization: '', role: '', scope: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addSpecialization = () => {
    if (newSpec.trim() && !formData.specializations.includes(newSpec.trim())) {
      setFormData({ ...formData, specializations: [...formData.specializations, newSpec.trim()] });
      setNewSpec('');
    }
  };

  const removeSpecialization = (specToRemove: string) => {
    setFormData({ ...formData, specializations: formData.specializations.filter(s => s !== specToRemove) });
  };

  const addExperience = () => {
    if (newExp.organization.trim() && newExp.role.trim()) {
      setFormData({ ...formData, experiences: [...formData.experiences, { ...newExp }] });
      setNewExp({ organization: '', role: '', scope: '' });
    }
  };

  const removeExperience = (index: number) => {
    setFormData({ ...formData, experiences: formData.experiences.filter((_, i) => i !== index) });
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
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Phongsaphat Duma"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Job Title *</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g., Managing Director & Client Service"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="id">URL Slug *</Label>
                <Input
                  id="id"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  placeholder="e.g., phongsaphat-duma"
                  required
                  disabled={isEditing}
                />
                <p className="text-xs text-gray-500">
                  Used in the URL: /team/{formData.id || 'example'}
                </p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Biography</h3>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio *</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                placeholder="Professional background and expertise..."
                rows={5}
                required
              />
            </div>
          </div>

          {/* Specializations */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Specializations</h3>
            
            <div className="flex gap-2">
              <Input
                value={newSpec}
                onChange={(e) => setNewSpec(e.target.value)}
                placeholder="Add a specialization (e.g., Service Management)"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSpecialization())}
              />
              <Button type="button" variant="outline" onClick={addSpecialization}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {formData.specializations.map((spec: string) => (
                <Badge key={spec} variant="default" className="gap-1 bg-gray-200 text-gray-800 hover:bg-gray-300">
                  {spec}
                  <button
                    type="button"
                    onClick={() => removeSpecialization(spec)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {formData.specializations.length === 0 && (
                <p className="text-sm text-gray-500 italic">No specializations added yet</p>
              )}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Work Experience</h3>
            
            <div className="grid gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-2">
                <Label className="text-sm">Organization</Label>
                <Input
                  value={newExp.organization}
                  onChange={(e) => setNewExp({ ...newExp, organization: e.target.value })}
                  placeholder="e.g., International Committee of the Red Cross"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Role</Label>
                <Input
                  value={newExp.role}
                  onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                  placeholder="e.g., Service Desk | Service Manager"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Scope (Optional)</Label>
                <Input
                  value={newExp.scope || ''}
                  onChange={(e) => setNewExp({ ...newExp, scope: e.target.value })}
                  placeholder="e.g., APAC"
                />
              </div>
              <Button 
                type="button" 
                variant="outline" 
                onClick={addExperience}
                disabled={!newExp.organization.trim() || !newExp.role.trim()}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </div>

            <div className="space-y-2">
              {formData.experiences.map((exp: { organization: string; role: string; scope?: string }, index: number) => (
                <div key={index} className="flex items-start justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{exp.organization}</p>
                    <p className="text-sm text-gray-600">{exp.role}</p>
                    {exp.scope && <p className="text-xs text-gray-500">{exp.scope}</p>}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              {formData.experiences.length === 0 && (
                <p className="text-sm text-gray-500 italic">No experience added yet</p>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Profile Photo</h3>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image Path</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="/images/team-member.jpg"
              />
              <p className="text-xs text-gray-500">
                Path to the image in the public folder
              </p>
            </div>

            {formData.image && (
              <div className="w-32 h-32 bg-gray-100 rounded-full border flex items-center justify-center">
                <span className="text-xs text-gray-500 text-center px-2">{formData.image}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {isEditing ? 'Save Changes' : 'Create Member'}
        </Button>
      </div>
    </form>
  );
}
