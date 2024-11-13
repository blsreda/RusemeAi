import React, { useCallback } from 'react';
import { Upload, FileWarning } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-full max-w-2xl p-8 border-2 border-dashed border-blue-300 dark:border-blue-500 rounded-xl bg-blue-50 dark:bg-gray-800/50 hover:bg-blue-100 dark:hover:bg-gray-800/80 transition-colors duration-200 cursor-pointer"
    >
      <div className="flex flex-col items-center gap-4">
        <Upload className="w-12 h-12 text-blue-500 dark:text-blue-400" />
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Drag and drop your resume here
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            or click to select a file (PDF only)
          </p>
        </div>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
        >
          Select File
        </label>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
          <FileWarning className="w-4 h-4" />
          <span>Maximum file size: 5MB</span>
        </div>
      </div>
    </div>
  );
}