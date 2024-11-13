import React from 'react';
import FileUpload from './components/FileUpload';
import AnalysisResults from './components/AnalysisResults';
import Navbar from './components/Navbar';
import { useTheme } from './hooks/useTheme';

function App() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Resume Analysis Made Simple
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Upload your resume and get instant, AI-powered feedback to help you land your dream job.
            Our advanced analysis will help you optimize your CV for ATS systems and hiring managers.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {!selectedFile ? (
            <FileUpload onFileSelect={setSelectedFile} />
          ) : (
            <AnalysisResults fileName={selectedFile.name} />
          )}

          {selectedFile && (
            <button
              onClick={() => setSelectedFile(null)}
              className="px-6 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              Analyze Another Resume
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;