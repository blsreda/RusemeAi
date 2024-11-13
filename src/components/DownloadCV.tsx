import React from 'react';
import { Download, FileCheck } from 'lucide-react';

export default function DownloadCV() {
  return (
    <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <FileCheck className="w-8 h-8 text-green-500" />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Get Your Optimized CV Template
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Download our professionally formatted CV template incorporating all the suggested improvements.
            This template is ATS-friendly and follows best practices for job applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.open('https://example.com/optimized-cv-template.pdf')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download Word Template</span>
            </button>
            <button
              onClick={() => window.open('https://example.com/optimized-cv-template.pdf')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Template</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}