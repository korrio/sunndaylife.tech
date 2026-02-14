import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useState } from 'react';

// Mock media files
const initialMedia = [
  { id: '1', name: 'phongsaphat-duma.jpg', size: '72 KB', type: 'image' },
  { id: '2', name: 'sawee.jpg', size: '92 KB', type: 'image' },
  { id: '3', name: 'sunnyday365-logo.jpg', size: '52 KB', type: 'image' },
  { id: '4', name: 'timor-leste.jpg', size: '192 KB', type: 'image' },
  { id: '5', name: 'debt-collection.jpg', size: '64 KB', type: 'image' },
  { id: '6', name: 'it-digital.jpg', size: '164 KB', type: 'image' },
];

export default function MediaAdmin() {
  const [media] = useState(initialMedia);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Media Library</h2>
          <p className="text-gray-500">Manage images for your website.</p>
        </div>
        <Button>Upload File</Button>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer">
        <p className="text-sm font-medium text-gray-900">Drop files here or click to upload</p>
        <p className="text-xs text-gray-500 mt-1">JPG, PNG, WebP up to 5MB</p>
      </div>

      {/* Media Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {media.map((file) => (
          <Card key={file.id} className="overflow-hidden group">
            <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
              <span className="text-gray-400 text-sm">{file.name}</span>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button variant="secondary" size="sm">Copy URL</Button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-gray-500">{file.size}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
