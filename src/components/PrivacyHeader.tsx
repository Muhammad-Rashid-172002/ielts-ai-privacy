import React from 'react';
import { Shield, Sparkles, Lock, ShieldCheck, CheckCircle2, Clock, Building2, Layers } from 'lucide-react';
import { APP_INFO, PALETTE } from '../constants/theme';
import { ThemeMode } from '../types';

interface PrivacyHeaderProps {
  themeMode: ThemeMode;
}

export const PrivacyHeader: React.FC<PrivacyHeaderProps> = ({ themeMode }) => {
  const isDark = themeMode === 'dark';

  return (
    <div className="relative pt-6 pb-8 px-4 sm:px-8 overflow-hidden rounded-3xl border transition-all duration-300">
      {/* Background Gradient Orbs */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(circle, ${PALETTE.primary} 0%, ${PALETTE.secondary} 50%, transparent 100%)`
        }}
      />
      <div 
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ background: PALETTE.accent }}
      />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Animated Premium Privacy Shield Illustration */}
        <div className="relative mb-6 group cursor-pointer">
          {/* Outer Rotating Glowing Ring */}
          <div 
            className="absolute -inset-3 rounded-3xl opacity-75 blur-md transition duration-500 group-hover:opacity-100 animate-pulse"
            style={{
              background: `linear-gradient(45deg, ${PALETTE.primary}, ${PALETTE.secondary}, ${PALETTE.accent})`,
            }}
          />

          {/* Shield Badge Container */}
          <div 
            className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex items-center justify-center border backdrop-blur-2xl transition-transform duration-500 group-hover:scale-105 shadow-2xl ${
              isDark ? 'bg-slate-900/90 border-white/15' : 'bg-white/90 border-slate-200'
            }`}
          >
            {/* Center Shield Icon */}
            <div className="relative">
              <Shield className="w-12 h-12 sm:w-14 sm:h-14 text-[#21C8F6]" />
              <Lock className="w-5 h-5 text-[#18E299] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* AI Sparkle Badge */}
            <div 
              className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 shadow-lg text-slate-950 animate-bounce"
              style={{ background: PALETTE.accent }}
            >
              <Sparkles className="w-3 h-3 text-slate-950" />
              <span>AI Shield</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3">
          <span className="bg-gradient-to-r from-[#21C8F6] via-white to-[#18E299] bg-clip-text text-transparent">
            Privacy Policy
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-6 ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Learn how <strong className="text-[#21C8F6] font-semibold">{APP_INFO.name}</strong> protects your personal information, candidate audio recordings, essays, and respects your privacy.
        </p>

        {/* Metadata Badges Bar */}
        <div className={`w-full grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 sm:p-4 rounded-2xl border backdrop-blur-xl ${
          isDark 
            ? 'bg-slate-900/60 border-white/10 text-slate-300' 
            : 'bg-white/80 border-slate-200 text-slate-700 shadow-sm'
        }`}>
          {/* Last Updated */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-xl bg-white/5">
            <Clock className="w-4 h-4 text-[#21C8F6]" />
            <div>
              <span className="block text-[10px] uppercase text-slate-400 font-bold">Last Updated</span>
              <span className="font-semibold">{APP_INFO.lastUpdated}</span>
            </div>
          </div>

          {/* Version */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-xl bg-white/5">
            <Layers className="w-4 h-4 text-[#6C63FF]" />
            <div>
              <span className="block text-[10px] uppercase text-slate-400 font-bold">Version</span>
              <span className="font-semibold">{APP_INFO.version}</span>
            </div>
          </div>

          {/* Company */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium px-3 py-2 rounded-xl bg-white/5">
            <Building2 className="w-4 h-4 text-[#18E299]" />
            <div>
              <span className="block text-[10px] uppercase text-slate-400 font-bold">Company</span>
              <span className="font-semibold truncate max-w-[150px]">{APP_INFO.company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
