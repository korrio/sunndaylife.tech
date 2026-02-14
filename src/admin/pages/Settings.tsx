import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { Globe, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, X, Plus } from 'lucide-react';

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
}

const initialSettings: SiteSettings = {
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
  }
};

export default function Settings() {
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [newKeyword, setNewKeyword] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    console.log('Saving settings:', settings);
    // TODO: Implement actual save
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
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
          <CardTitle className="flex items-center gap-2">
            Social Links
          </CardTitle>
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
            <p className="text-xs text-gray-500">
              Used as fallback for pages without custom titles
            </p>
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
            <p className="text-xs text-gray-500">
              Recommended: 150-160 characters
            </p>
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
