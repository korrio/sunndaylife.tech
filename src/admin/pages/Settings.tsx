import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { 
  Globe, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, 
  X, Plus, Github, Check, AlertCircle, Rocket 
} from 'lucide-react';
import { testGitHubConnection, triggerVercelDeploy } from '@/lib/github';

interface SiteSettings {
  siteName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  // GitHub Integration
  githubToken: string;
  githubOwner: string;
  githubRepo: string;
  githubBranch: string;
  // Vercel Integration
  vercelDeployHook: string;
}

const defaultSettings: SiteSettings = {
  siteName: 'Sunny Day 365',
  tagline: 'Professional IT & Smart Solutions',
  contactEmail: 'contact@sunnydaylife.tech',
  contactPhone: '+66 2 123 4567',
  address: 'Bangkok, Thailand',
  socialLinks: {
    facebook: '',
    instagram: '',
    linkedin: 'https://linkedin.com/company/sunnyday365'
  },
  seo: {
    title: 'Sunny Day 365 - Professional IT Services',
    description: 'Professional IT & Smart Solutions with more than 10 years of experience in international organizations.',
    keywords: ['IT Services', 'Thailand', 'Virtual IT Department', 'ISO Compliance']
  },
  githubToken: '',
  githubOwner: 'korrio',
  githubRepo: 'sunndaylife.tech',
  githubBranch: 'main',
  vercelDeployHook: ''
};

export default function Settings() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [newKeyword, setNewKeyword] = useState('');
  const [saved, setSaved] = useState(false);
  const [githubStatus, setGithubStatus] = useState<{ testing: boolean; success?: boolean; message?: string } | null>(null);
  const [deployStatus, setDeployStatus] = useState<{ deploying: boolean; success?: boolean; message?: string } | null>(null);

  // Load settings from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('sunnyday_settings');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setSettings({ ...defaultSettings, ...parsed });
        } catch (e) {
          console.error('Error parsing settings:', e);
        }
      }
    }
  }, []);

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sunnyday_settings', JSON.stringify(settings));
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const testGitHub = async () => {
    setGithubStatus({ testing: true });
    const result = await testGitHubConnection();
    setGithubStatus({ testing: false, ...result });
  };

  const triggerDeploy = async () => {
    setDeployStatus({ deploying: true });
    const result = await triggerVercelDeploy();
    setDeployStatus({ deploying: false, ...result });
  };

  const addKeyword = () => {
    if (newKeyword.trim() && !settings.seo.keywords.includes(newKeyword.trim())) {
      setSettings({
        ...settings,
        seo: {
          ...settings.seo,
          keywords: [...settings.seo.keywords, newKeyword.trim()]
        }
      });
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setSettings({
      ...settings,
      seo: {
        ...settings.seo,
        keywords: settings.seo.keywords.filter(k => k !== keyword)
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Settings</h2>
          <p className="text-gray-500">Manage your website settings and configuration.</p>
        </div>
        {saved && (
          <Badge variant="default" className="bg-green-100 text-green-800">
            Saved successfully
          </Badge>
        )}
      </div>

      {/* Site Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Site Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={settings.contactEmail}
                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number
              </Label>
              <Input
                id="phone"
                value={settings.contactPhone}
                onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Address
            </Label>
            <Textarea
              id="address"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card>
        <CardHeader>
          <CardTitle>Social Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="facebook" className="flex items-center gap-2">
              <Facebook className="h-4 w-4" />
              Facebook
            </Label>
            <Input
              id="facebook"
              placeholder="https://facebook.com/yourpage"
              value={settings.socialLinks.facebook}
              onChange={(e) => setSettings({
                ...settings,
                socialLinks: { ...settings.socialLinks, facebook: e.target.value }
              })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instagram" className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              Instagram
            </Label>
            <Input
              id="instagram"
              placeholder="https://instagram.com/yourhandle"
              value={settings.socialLinks.instagram}
              onChange={(e) => setSettings({
                ...settings,
                socialLinks: { ...settings.socialLinks, instagram: e.target.value }
              })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Label>
            <Input
              id="linkedin"
              placeholder="https://linkedin.com/company/yourcompany"
              value={settings.socialLinks.linkedin}
              onChange={(e) => setSettings({
                ...settings,
                socialLinks: { ...settings.socialLinks, linkedin: e.target.value }
              })}
            />
          </div>
        </CardContent>
      </Card>

      {/* GitHub Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            GitHub Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-700">
              <strong>Auto-Commit Feature:</strong> When enabled, content changes will automatically 
              be committed to your GitHub repository. You'll need a 
              <a 
                href="https://github.com/settings/tokens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                Personal Access Token
              </a>
              with <code>repo</code> scope.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="githubToken">GitHub Personal Access Token</Label>
            <Input
              id="githubToken"
              type="password"
              placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
              value={settings.githubToken}
              onChange={(e) => setSettings({ ...settings, githubToken: e.target.value })}
            />
            <p className="text-xs text-gray-500">
              Token with repo scope. Never share this token!
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="githubOwner">Repository Owner</Label>
              <Input
                id="githubOwner"
                placeholder="yourusername"
                value={settings.githubOwner}
                onChange={(e) => setSettings({ ...settings, githubOwner: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="githubRepo">Repository Name</Label>
              <Input
                id="githubRepo"
                placeholder="my-website"
                value={settings.githubRepo}
                onChange={(e) => setSettings({ ...settings, githubRepo: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="githubBranch">Branch</Label>
              <Input
                id="githubBranch"
                placeholder="main"
                value={settings.githubBranch}
                onChange={(e) => setSettings({ ...settings, githubBranch: e.target.value })}
              />
            </div>
          </div>

          {githubStatus && (
            <div className={`flex items-center gap-2 p-3 rounded-lg ${
              githubStatus.testing 
                ? 'bg-gray-100' 
                : githubStatus.success 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
            }`}>
              {githubStatus.testing ? (
                <span className="animate-spin">⏳</span>
              ) : githubStatus.success ? (
                <Check className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <span className="text-sm">{githubStatus.message}</span>
            </div>
          )}

          <Button 
            variant="outline" 
            onClick={testGitHub}
            disabled={!settings.githubToken || !settings.githubOwner || !settings.githubRepo}
          >
            Test GitHub Connection
          </Button>
        </CardContent>
      </Card>

      {/* Vercel Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Vercel Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-700">
              <strong>Deploy Hook:</strong> Optional. Add a 
              <a 
                href="https://vercel.com/docs/concepts/git/deploy-hooks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline mx-1"
              >
                Vercel Deploy Hook
              </a>
              URL to manually trigger redeploys from the admin panel.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vercelDeployHook">Deploy Hook URL</Label>
            <Input
              id="vercelDeployHook"
              type="password"
              placeholder="https://api.vercel.com/v1/integrations/deploy/..."
              value={settings.vercelDeployHook}
              onChange={(e) => setSettings({ ...settings, vercelDeployHook: e.target.value })}
            />
          </div>

          {deployStatus && (
            <div className={`flex items-center gap-2 p-3 rounded-lg ${
              deployStatus.deploying 
                ? 'bg-gray-100' 
                : deployStatus.success 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
            }`}>
              {deployStatus.deploying ? (
                <span className="animate-spin">⏳</span>
              ) : deployStatus.success ? (
                <Check className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <span className="text-sm">{deployStatus.message}</span>
            </div>
          )}

          <Button 
            variant="outline" 
            onClick={triggerDeploy}
            disabled={!settings.vercelDeployHook}
          >
            <Rocket className="h-4 w-4 mr-2" />
            Trigger Vercel Redeploy
          </Button>
        </CardContent>
      </Card>

      {/* SEO Settings */}
      <Card>
        <CardHeader>
          <CardTitle>SEO Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="seoTitle">Default Page Title</Label>
            <Input
              id="seoTitle"
              value={settings.seo.title}
              onChange={(e) => setSettings({
                ...settings,
                seo: { ...settings.seo, title: e.target.value }
              })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="seoDescription">Default Meta Description</Label>
            <Textarea
              id="seoDescription"
              value={settings.seo.description}
              onChange={(e) => setSettings({
                ...settings,
                seo: { ...settings.seo, description: e.target.value }
              })}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>SEO Keywords</Label>
            <div className="flex gap-2">
              <Input
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                placeholder="Add a keyword"
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
              />
              <Button type="button" variant="outline" onClick={addKeyword}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {settings.seo.keywords.map((keyword) => (
                <Badge key={keyword} variant="outline" className="gap-1">
                  {keyword}
                  <button
                    type="button"
                    onClick={() => removeKeyword(keyword)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} size="lg">
          Save Settings
        </Button>
      </div>
    </div>
  );
}
