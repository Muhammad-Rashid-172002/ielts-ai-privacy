import React from 'react';
import { Shield, Lock, CheckCircle2, Award, Heart } from 'lucide-react';
import { APP_INFO, PALETTE } from '../constants/theme';
import { ThemeMode } from '../types';

interface PrivacyFooterProps {
  themeMode: ThemeMode;
}

export const PrivacyFooter: React.FC<PrivacyFooterProps> = ({ themeMode }) => {
  const isDark = themeMode === 'dark';

  return (
    <footer className={`mt-12 pt-10 pb-12 border-t transition-colors duration-300 ${
      isDark ? 'border-white/10 bg-slate-950/80' : 'border-slate-200 bg-slate-100/80'
    }`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Logo Badge */}
        <div className="flex flex-col items-center justify-center gap-3 mb-6">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-white shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${PALETTE.primary}, ${PALETTE.secondary})`,
              boxShadow: `0 8px 24px ${PALETTE.primary}35`,
            }}
          >
            <Shield className="w-8 h-8 text-white animate-pulse" />
          </div>

          <h3 className="text-xl font-black tracking-tight bg-gradient-to-r from-[#21C8F6] via-white to-[#18E299] bg-clip-text text-transparent">
            {APP_INFO.name}
          </h3>
          <p className="text-xs text-slate-400 max-w-md">
            AI-Powered Speaking, Writing, Reading & Listening IELTS Preparation for Higher Education & Immigration Success.
          </p>
        </div>

        {/* Security Seals Grid */}
       <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap mb-8">
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
    <Lock className="w-4 h-4 text-[#18E299]" />
    <span>Secure Data Transmission</span>
  </div>

  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
    <Shield className="w-4 h-4 text-[#21C8F6]" />
    <span>Access-Controlled Services</span>
  </div>

  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
    <CheckCircle2 className="w-4 h-4 text-[#6C63FF]" />
    <span>Account & Data Controls</span>
  </div>

  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
    <Award className="w-4 h-4 text-amber-400" />
    <span>Privacy-Focused Design</span>
  </div>
</div>

        {/* Legal & Meta Information */}
        <div className="space-y-1.5 text-xs text-slate-400 border-t border-white/5 pt-6">
          <p className="font-semibold text-slate-300">
            Copyright © 2026 {APP_INFO.company} All Rights Reserved.
          </p>
          <p>
            Version {APP_INFO.version} • Build {APP_INFO.build} • Mobile & Web Platforms
          </p>
          <p className="text-[11px] text-slate-500 pt-2">
            IELTS® is a registered trademark of the University of Cambridge ESOL, the British Council, and IDP Education Australia. IELTS AI Master is an independent learning solution and is not affiliated with or endorsed by Cambridge ESOL or British Council.
          </p>
        </div>
      </div>
    </footer>
  );
};
