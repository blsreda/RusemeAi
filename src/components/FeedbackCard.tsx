import React from 'react';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

interface FeedbackCardProps {
  type: 'success' | 'warning' | 'info';
  title: string;
  description: string;
}

export default function FeedbackCard({ type, title, description }: FeedbackCardProps) {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    warning: <AlertCircle className="w-5 h-5 text-yellow-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />
  };

  const backgrounds = {
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  };

  return (
    <div className={`p-4 rounded-lg border ${backgrounds[type]} transition-all duration-200 hover:shadow-md`}>
      <div className="flex items-start gap-3">
        {icons[type]}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}