import React from 'react';
import { FileText, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">ResumeAI</span>
          </div>
          
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}