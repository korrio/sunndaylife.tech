import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useState, useRef, useCallback } from 'react';
import { Upload, X, Copy, Trash2, Image as ImageIcon, FileText } from 'lucide-react';

interface MediaFile {
  id: string;
  name: string;
  size: string;
  type: 'image' | 'document';
  url: string;
  uploadedAt: Date;
}

// Initial mock media files
const initialMedia: MediaFile[] = [
  { id: '1', name: 'phongsaphat-duma.jpg', size: '72 KB', type: 'image', url: '/images/phongsaphat-duma.jpg', uploadedAt: new Date('2026-02-13') },
  { id: '2', name: 'sawee.jpg', size: '92 KB', type: 'image', url: '/images/sawee.jpg', uploadedAt: new Date('2026-02-13') },
  { id: '3', name: 'sunnyday365-logo.jpg', size: '52 KB', type: 'image', url: '/images/sunnyday365-logo.jpg', uploadedAt: new Date('2026-02-13') },
  { id: '4', name: 'timor-leste.jpg', size: '192 KB', type: 'image', url: '/images/timor-leste.jpg', uploadedAt: new Date('2026-02-13') },
  { id: '5', name: 'debt-collection.jpg', size: '64 KB', type: 'image', url: '/images/debt-collection.jpg', uploadedAt: new Date('2026-02-13') },
  { id: '6', name: 'it-digital.jpg', size: '164 KB', type: 'image', url: '/images/it-digital.jpg', uploadedAt: new Date('2026-02-13') },
];

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export default function MediaAdmin() {
  const [media, setMedia] = useState<MediaFile[]>(initialMedia);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  }, []);

  const handleFiles = (files: File[]) => {
    files.forEach(file => {
      // Check file type
      if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
        alert(`File type not supported: ${file.name}`);
        return;
      }

      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert(`File too large: ${file.name}. Maximum size is 5MB.`);
        return;
      }

      // Create object URL for preview
      const url = URL.createObjectURL(file);
      
      const newFile: MediaFile = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type.startsWith('image/') ? 'image' : 'document',
        url,
        uploadedAt: new Date()
      };

      setMedia(prev => [newFile, ...prev]);
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this file?')) {
      setMedia(prev => prev.filter(m => m.id !== id));
      if (selectedFile?.id === id) {
        setSelectedFile(null);
      }
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Media Library</h2>
          <p className="text-gray-500">Manage images and documents for your website.</p>
        </div>
        <Button onClick={openFileDialog}>
          <Upload className="h-4 w-4 mr-2" />
          Upload File
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,.pdf"
          multiple
          onChange={handleFileInput}
          className="hidden"
        />
      </div>

      {/* Upload Area */}
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
        className={`
          border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer
          ${isDragging 
            ? 'border-black bg-gray-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
        `}
      >
        <Upload className="h-10 w-10 mx-auto text-gray-400 mb-3" />
        <p className="text-sm font-medium text-gray-900">
          {isDragging ? 'Drop files here' : 'Drop files here or click to upload'}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          JPG, PNG, WebP, PDF up to 5MB
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6 text-sm text-gray-500">
        <span>{media.length} files</span>
        <span>•</span>
        <span>{media.filter(m => m.type === 'image').length} images</span>
        <span>•</span>
        <span>{media.filter(m => m.type === 'document').length} documents</span>
      </div>

      {/* Media Grid */}
      {media.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {media.map((file) => (
            <Card 
              key={file.id} 
              className={`overflow-hidden group cursor-pointer transition-all ${
                selectedFile?.id === file.id ? 'ring-2 ring-black' : ''
              }`}
              onClick={() => setSelectedFile(file)}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
                {file.type === 'image' ? (
                  <img 
                    src={file.url} 
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FileText className="h-12 w-12 text-gray-400" />
                )}
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyUrl(file.url);
                    }}
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Copy URL
                  </Button>
                </div>

                {/* Selection indicator */}
                {selectedFile?.id === file.id && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="p-3">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-gray-500">{file.size}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(file.id);
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <ImageIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500">No files uploaded yet</p>
          <p className="text-sm text-gray-400 mt-1">Upload images or documents to get started</p>
        </div>
      )}

      {/* Selected File Details */}
      {selectedFile && (
        <div className="fixed bottom-6 right-6 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-80 z-50">
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-medium">File Details</h4>
            <button 
              onClick={() => setSelectedFile(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Name:</span>
              <span className="font-medium truncate max-w-40">{selectedFile.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Size:</span>
              <span>{selectedFile.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Type:</span>
              <span className="capitalize">{selectedFile.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Uploaded:</span>
              <span>{selectedFile.uploadedAt.toLocaleDateString()}</span>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => handleCopyUrl(selectedFile.url)}
            >
              <Copy className="h-3 w-3 mr-1" />
              Copy URL
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-red-600 hover:text-red-700"
              onClick={() => handleDelete(selectedFile.id)}
            >
              <Trash2 className="h-3 w-3 mr-1" />
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
