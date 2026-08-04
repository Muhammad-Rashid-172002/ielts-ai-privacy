import React from 'react';
import { Eye, Type, Contrast, Sparkles, X, Activity } from 'lucide-react';
import { AccessibilitySettings, ThemeMode } from '../types';

interface AccessibilityToolbarProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  onChangeSettings: (newSettings: AccessibilitySettings) => void;
  themeMode: ThemeMode;
}

export const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({
  isOpen,
  onClose,
  settings,
  onChangeSettings,
  themeMode,
}) => {
  const isDark = themeMode === 'dark';

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-8 z-50 w-80 p-4 rounded-3xl border shadow-2xl backdrop-blur-2xl animate-fadeIn transition-all duration-300 bg-slate-900/95 border-white/15 text-white">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#18E299]" />
          <h4 className="font-bold text-sm">Accessibility Options</h4>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4 text-xs">
        {/* Font Size Scalar Slider */}
        <div>
          <div className="flex items-center justify-between mb-1.5 font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Type className="w-3.5 h-3.5 text-[#21C8F6]" />
              <span>Font Scale</span>
            </span>
            <span className="font-mono text-[#21C8F6] font-bold">
              {Math.round(settings.fontSizeScalar * 100)}%
            </span>
          </div>

          <input
            type="range"
            min="1.0"
            max="1.4"
            step="0.05"
            value={settings.fontSizeScalar}
            onChange={(e) =>
              onChangeSettings({ ...settings, fontSizeScalar: parseFloat(e.target.value) })
            }
            className="w-full accent-[#21C8F6] bg-slate-800 h-1.5 rounded-lg cursor-pointer"
          />
        </div>

        {/* High Contrast Toggle */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-2">
            <Contrast className="w-4 h-4 text-[#6C63FF]" />
            <span>High Contrast</span>
          </div>

          <button
            onClick={() => onChangeSettings({ ...settings, highContrast: !settings.highContrast })}
            className={`w-10 h-5 rounded-full transition-colors relative p-0.5 ${
              settings.highContrast ? 'bg-[#18E299]' : 'bg-slate-700'
            }`}
          >
            <div className={`w-4 h-4 rounded-full bg-slate-950 transition-transform ${
              settings.highContrast ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* Reduced Motion Toggle */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-amber-400" />
            <span>Reduced Motion</span>
          </div>

          <button
            onClick={() => onChangeSettings({ ...settings, reducedMotion: !settings.reducedMotion })}
            className={`w-10 h-5 rounded-full transition-colors relative p-0.5 ${
              settings.reducedMotion ? 'bg-[#18E299]' : 'bg-slate-700'
            }`}
          >
            <div className={`w-4 h-4 rounded-full bg-slate-950 transition-transform ${
              settings.reducedMotion ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </button>
        </div>
      </div>
    </div>
  );
};
