import React, { useState } from 'react';
import { X, Copy, Check, Code2, Folder, FileCode, Sparkles, Terminal } from 'lucide-react';
import { FLUTTER_DART_FILES } from '../constants/flutterDartCode';
import { ThemeMode } from '../types';

interface FlutterCodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeMode: ThemeMode;
  onShowToast: (msg: string) => void;
}

export const FlutterCodeViewerModal: React.FC<FlutterCodeViewerModalProps> = ({
  isOpen,
  onClose,
  themeMode,
  onShowToast,
}) => {
  const isDark = themeMode === 'dark';
  const [activeFileIndex, setActiveFileIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const activeFile = FLUTTER_DART_FILES[activeFileIndex];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    onShowToast(`Copied ${activeFile.filename} to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className={`w-full max-w-5xl h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden ${
          isDark ? 'bg-slate-900 border-white/15 text-white' : 'bg-slate-900 border-slate-700 text-slate-100'
        }`}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#21C8F6]/20 border border-[#21C8F6]/40 flex items-center justify-center text-[#21C8F6]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg">Flutter Production Code</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#18E299]/20 text-[#18E299]">
                  Material 3
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Production-ready Flutter Dart architecture & reusable widgets for IELTS AI Master.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Area: Sidebar + Code Editor View */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Files Explorer Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 p-3 bg-slate-950/30 overflow-y-auto shrink-0">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
              <Folder className="w-3.5 h-3.5 text-[#21C8F6]" />
              <span>Project Structure</span>
            </div>

            <div className="space-y-1">
              {FLUTTER_DART_FILES.map((file, idx) => (
                <button
                  key={file.filename}
                  onClick={() => setActiveFileIndex(idx)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all ${
                    activeFileIndex === idx
                      ? 'bg-[#21C8F6]/20 text-[#21C8F6] font-bold border border-[#21C8F6]/40'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <FileCode className="w-4 h-4 shrink-0 text-[#6C63FF]" />
                    <span className="truncate">{file.filename}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-400 space-y-1.5">
              <span className="font-bold text-slate-300 block">Flutter Package Info:</span>
              <p>• Clean Architecture</p>
              <p>• Zero Hardcoded Colors</p>
              <p>• Material 3 + BackdropFilter</p>
            </div>
          </div>

          {/* Code View Area */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#0A0F1D]">
            {/* Active File Bar */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#18E299]" />
                <span className="font-mono text-[#21C8F6]">{activeFile.path}</span>
              </div>

              <button
                onClick={handleCopyCode}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#21C8F6] text-slate-950 flex items-center gap-1.5 hover:bg-[#21C8F6]/90 transition-all shadow-md"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Code!' : 'Copy Dart Code'}</span>
              </button>
            </div>

            {/* Code Text Content */}
            <div className="flex-1 p-4 overflow-auto font-mono text-xs leading-relaxed text-slate-200 scrollbar-thin">
              <pre>
                <code>{activeFile.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
