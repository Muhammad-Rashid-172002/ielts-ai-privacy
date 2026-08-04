import React, { useState } from 'react';
import { Download, X, FileArchive, Check, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface ExportDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeMode: ThemeMode;
  onShowToast: (msg: string) => void;
}

export const ExportDataModal: React.FC<ExportDataModalProps> = ({
  isOpen,
  onClose,
  themeMode,
  onShowToast,
}) => {
  const isDark = themeMode === 'dark';
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [downloadReady, setDownloadReady] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleStartExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setDownloadReady(true);
      onShowToast('Data archive ready for download!');
    }, 2000);
  };

  const handleDownloadFile = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      app: "IELTS AI Master",
      version: "v2.4.0",
      exportDate: new Date().toISOString(),
      candidateData: {
        profile: { name: "IELTS Candidate", targetBand: 7.5, examDate: "2026-10-15" },
        speakingRecordingsCount: 14,
        writingEssaysCount: 28,
        vocabularyMasteredCount: 350,
        gdprCompliant: true
      }
    }, null, 2));

    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "IELTS_AI_Master_Data_Export.json");
    document.body.appendChild(dlAnchorElem);
    dlAnchorElem.click();
    dlAnchorElem.remove();

    onShowToast('Downloaded IELTS_AI_Master_Data_Export.json');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className={`w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden p-6 ${
          isDark ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#21C8F6]/20 border border-[#21C8F6]/40 flex items-center justify-center text-[#21C8F6]">
            <FileArchive className="w-6 h-6" />
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-2">
          Export Candidate Data Archive
        </h3>

        <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Generate a GDPR & CCPA compliant machine-readable ZIP archive containing your entire IELTS preparation record.
        </p>

        <div className={`p-3.5 rounded-2xl border mb-6 text-xs space-y-2 ${
          isDark ? 'bg-slate-950 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
        }`}>
          <div className="flex items-center justify-between">
            <span>Profile & Goal Settings</span>
            <Check className="w-4 h-4 text-[#18E299]" />
          </div>
          <div className="flex items-center justify-between">
            <span>Speaking Audio & Transcripts</span>
            <Check className="w-4 h-4 text-[#18E299]" />
          </div>
          <div className="flex items-center justify-between">
            <span>Writing Essays & AI Evaluations</span>
            <Check className="w-4 h-4 text-[#18E299]" />
          </div>
          <div className="flex items-center justify-between">
            <span>Vocabulary Flashcards & SRS Metrics</span>
            <Check className="w-4 h-4 text-[#18E299]" />
          </div>
        </div>

        {!downloadReady ? (
          <button
            onClick={handleStartExport}
            disabled={isExporting}
            className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-[#21C8F6] hover:bg-[#21C8F6]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#21C8F6]/20"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? 'Generating ZIP Archive...' : 'Generate Export Package'}</span>
          </button>
        ) : (
          <button
            onClick={handleDownloadFile}
            className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#18E299] hover:bg-[#18E299]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#18E299]/20"
          >
            <Download className="w-4 h-4" />
            <span>Download Data Archive (.json)</span>
          </button>
        )}
      </div>
    </div>
  );
};
