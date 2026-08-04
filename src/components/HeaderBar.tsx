import React from 'react';
import { 
  Shield, 
  Moon, 
  Sun, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Code2, 
  FileDown, 
  Eye, 
  Sparkles 
} from 'lucide-react';
import { ThemeMode, DeviceFrameMode, AccessibilitySettings } from '../types';
import { APP_INFO, PALETTE } from '../constants/theme';

interface HeaderBarProps {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
  deviceFrame: DeviceFrameMode;
  onSetDeviceFrame: (frame: DeviceFrameMode) => void;
  onOpenFlutterCode: () => void;
  onOpenAccessibility: () => void;
  onDownloadPDF: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  themeMode,
  onToggleTheme,
  deviceFrame,
  onSetDeviceFrame,
  onOpenFlutterCode,
  onOpenAccessibility,
  onDownloadPDF,
}) => {
  const isDark = themeMode === 'dark';

  return (
    <header 
      className={`sticky top-0 z-40 backdrop-blur-xl transition-colors duration-300 border-b ${
        isDark 
          ? 'bg-[#08111F]/85 border-white/10 text-white' 
          : 'bg-white/85 border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${PALETTE.primary}, ${PALETTE.secondary})`,
                boxShadow: `0 4px 14px ${PALETTE.primary}40`,
              }}
            >
              <Shield className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#18E299] rounded-full border-2 border-[#08111F]" title="GDPR & ISO 27001 Verified" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-[#21C8F6] via-[#6C63FF] to-[#18E299] bg-clip-text text-transparent">
                {APP_INFO.name}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#21C8F6]/15 text-[#21C8F6] border border-[#21C8F6]/30">
                Flutter App
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">
              Official Privacy Policy & Architecture
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Device Frame Switcher */}
          <div className={`hidden md:flex items-center p-1 rounded-xl border ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              id="device-frame-mobile"
              onClick={() => onSetDeviceFrame('mobile')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                deviceFrame === 'mobile'
                  ? 'bg-[#21C8F6] text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Mobile Device Frame View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
            <button
              id="device-frame-tablet"
              onClick={() => onSetDeviceFrame('tablet')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                deviceFrame === 'tablet'
                  ? 'bg-[#21C8F6] text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Tablet Device Frame View"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              id="device-frame-desktop"
              onClick={() => onSetDeviceFrame('desktop')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                deviceFrame === 'desktop'
                  ? 'bg-[#21C8F6] text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Full Width Web View"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Full</span>
            </button>
          </div>

          {/* View Flutter Dart Code Button */}
          <button
            id="btn-flutter-code"
            onClick={onOpenFlutterCode}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              isDark 
                ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200 hover:border-[#21C8F6]/50' 
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#21C8F6]" />
            <span className="hidden sm:inline">Flutter Code</span>
          </button>

          {/* Accessibility Settings Toggle */}
          <button
            id="btn-accessibility"
            onClick={onOpenAccessibility}
            className={`p-2 rounded-xl text-xs border transition-all ${
              isDark 
                ? 'bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-slate-300' 
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
            }`}
            title="Accessibility Toolbar"
          >
            <Eye className="w-4 h-4 text-[#18E299]" />
          </button>

          {/* Theme Mode Toggle */}
          <button
            id="btn-theme-toggle"
            onClick={onToggleTheme}
            className={`p-2 rounded-xl border transition-all ${
              isDark 
                ? 'bg-slate-800/80 hover:bg-slate-700 border-slate-700 text-amber-400' 
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
            }`}
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* PDF Download Button */}
          <button
            id="btn-pdf-download"
            onClick={onDownloadPDF}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-950 flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${PALETTE.primary}, ${PALETTE.accent})`,
            }}
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
