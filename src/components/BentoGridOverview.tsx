import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Database, 
  UserCheck, 
  Flame, 
  Globe, 
  Zap, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  KeyRound
} from 'lucide-react';
import { ThemeMode } from '../types';
import { APP_INFO } from '../constants/theme';

interface BentoGridOverviewProps {
  themeMode: ThemeMode;
  onSelectCategory: (catId: string | null) => void;
  onOpenExportModal: () => void;
  onOpenDeleteModal: () => void;
}

export const BentoGridOverview: React.FC<BentoGridOverviewProps> = ({
  themeMode,
  onSelectCategory,
  onOpenExportModal,
  onOpenDeleteModal,
}) => {
  const isDark = themeMode === 'dark';

  return (
    <div className="w-full my-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#21C8F6] animate-ping" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#21C8F6]">
            Bento Grid Highlights
          </h2>
        </div>
        <span className="status-chip">
          ISO 27001 & SOC 2 Certified
        </span>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Bento Card 1: Main Hero (Span 8) */}
        <div 
          className={`md:col-span-8 p-6 sm:p-8 rounded-3xl border relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border-white/10 shadow-2xl' 
              : 'bg-gradient-to-br from-white via-slate-50 to-sky-50/50 border-slate-200 shadow-lg'
          }`}
        >
          {/* Subtle Glow background */}
          <div className="accent-glow bg-[#21C8F6] w-64 h-64 -top-20 -left-20 opacity-20" />
          
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#21C8F6]/15 text-[#21C8F6] border border-[#21C8F6]/30 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Apple & Google Compliant</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Privacy <span className="gradient-text">Protection</span>
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {APP_INFO.name} leverages industry-standard AES-256 encryption to ensure your speaking recordings, essay submissions, and test analytics remain private.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => onSelectCategory('data-collection')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#21C8F6] to-[#6C63FF] text-white flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Collected Data</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onSelectCategory('third-party')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
              }`}
            >
              Third-Party APIs
            </button>
          </div>
        </div>

        {/* Bento Card 2: AI Data Usage (Span 4) */}
        <div 
          className={`md:col-span-4 p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            isDark ? 'bg-slate-900/70 border-white/10' : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2.5 rounded-xl bg-[#6C63FF]/15 text-[#6C63FF] border border-[#6C63FF]/30">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base">AI Data Usage</h3>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18E299] mt-1.5 shrink-0" />
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  <strong>Gemini 1.5 Pro</strong> real-time Band 9 criteria evaluation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18E299] mt-1.5 shrink-0" />
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  Audio transcription & phonetic pause analysis
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18E299] mt-1.5 shrink-0" />
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                  Adaptive study roadmap based on diagnostic error matrix
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 italic">
            * Models do not store biometric voice IDs or train public Google LLMs.
          </div>
        </div>

        {/* Bento Card 3: Information We Collect Mini-Grid (Span 4) */}
        <div 
          onClick={() => onSelectCategory('data-collection')}
          className={`md:col-span-4 p-5 rounded-3xl border group cursor-pointer transition-all duration-300 ${
            isDark ? 'bg-slate-900/70 border-white/10 hover:border-[#21C8F6]/40' : 'bg-white border-slate-200 hover:border-[#21C8F6]/40 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#21C8F6]" />
              <h4 className="font-bold text-sm">Collected Metrics</h4>
            </div>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#21C8F6]" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className={`p-2 rounded-xl text-[11px] font-semibold text-center border ${
              isDark ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              Account Info
            </div>
            <div className={`p-2 rounded-xl text-[11px] font-semibold text-center border ${
              isDark ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              Test Results
            </div>
            <div className={`p-2 rounded-xl text-[11px] font-semibold text-center border ${
              isDark ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              Audio Clips
            </div>
            <div className={`p-2 rounded-xl text-[11px] font-semibold text-center border ${
              isDark ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              Study Progress
            </div>
          </div>
        </div>

        {/* Bento Card 4: User Rights Actions (Span 4) */}
        <div 
          className={`md:col-span-4 p-5 rounded-3xl border transition-all duration-300 ${
            isDark ? 'bg-slate-900/70 border-white/10' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#18E299]" />
              <h4 className="font-bold text-sm">Candidate Controls</h4>
            </div>
            <span className="text-[10px] font-bold text-[#18E299]">GDPR Article 17</span>
          </div>

          <div className="space-y-2">
            <button
              onClick={onOpenExportModal}
              className={`w-full flex items-center justify-between text-xs p-2.5 rounded-xl border font-semibold transition-all ${
                isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <span>Export My Data</span>
              <span className="text-[#21C8F6] font-mono text-[11px]">JSON / PDF</span>
            </button>

            <button
              onClick={onOpenDeleteModal}
              className={`w-full flex items-center justify-between text-xs p-2.5 rounded-xl border font-semibold transition-all ${
                isDark ? 'bg-rose-950/20 border-rose-500/30 text-rose-300 hover:bg-rose-950/40' : 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100'
              }`}
            >
              <span>Delete Account</span>
              <span className="text-rose-500 font-mono text-[11px]">Permanent</span>
            </button>
          </div>
        </div>

        {/* Bento Card 5: Bank-Grade Security (Span 4) */}
        <div 
          className={`md:col-span-4 p-5 rounded-3xl border flex items-center gap-4 transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-br from-slate-900/80 to-[#18E299]/10 border-[#18E299]/30' 
              : 'bg-gradient-to-br from-white to-emerald-50 border-emerald-200 shadow-sm'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-[#18E299]/20 border border-[#18E299]/40 flex items-center justify-center text-[#18E299] shrink-0">
            <Lock className="w-6 h-6" />
          </div>

          <div>
            <h4 className="font-bold text-sm mb-1">Bank-Grade Security</h4>
            <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              TLS 1.3 transport encryption & AES-256 storage on Google Cloud KMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
