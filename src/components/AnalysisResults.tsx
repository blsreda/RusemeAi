import React from 'react';
import FeedbackCard from './FeedbackCard';
import DownloadCV from './DownloadCV';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

interface AnalysisResultsProps {
  fileName: string;
}

export default function AnalysisResults({ fileName }: AnalysisResultsProps) {
  return (
    <div className="w-full max-w-3xl space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Analysis Results</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">{fileName}</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Award, label: 'Overall Score', value: '85%' },
            { icon: BookOpen, label: 'Keywords Match', value: '72%' },
            { icon: Briefcase, label: 'Experience', value: '90%' },
            { icon: GraduationCap, label: 'Education', value: '95%' }
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-center">
              <Icon className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <FeedbackCard
            type="success"
            title="Strong Professional Experience"
            description="Your work experience section is well-structured with quantifiable achievements. Great use of action verbs!"
          />
          <FeedbackCard
            type="warning"
            title="Skills Section Needs Enhancement"
            description="Consider adding more industry-specific technical skills and tools you're proficient in."
          />
          <FeedbackCard
            type="info"
            title="ATS Optimization Tip"
            description="Include more keywords from the job descriptions you're targeting to improve ATS compatibility."
          />
          <FeedbackCard
            type="warning"
            title="Contact Information"
            description="Add your LinkedIn profile and ensure your email is professional."
          />
        </div>
      </div>

      <DownloadCV />
    </div>
  );
}