import { PrivacySection } from '../types';
import { motion } from 'motion/react';
import DynamicIcon from './DynamicIcon';

interface TableOfContentsProps {
  sections: PrivacySection[];
  activeId: string;
  onSelectSection: (id: string) => void;
}

export default function TableOfContents({ sections, activeId, onSelectSection }: TableOfContentsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
          Table of Contents
        </h3>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/10">
          {sections.length} Sections
        </span>
      </div>

      <nav className="flex flex-col gap-1 w-full max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className={`relative flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-300 border text-sm group ${
                isActive
                  ? 'bg-gradient-to-r from-teal-500/15 to-emerald-500/5 text-white border-teal-500/30 font-semibold shadow-[shadow_0_4px_20px_rgba(20,184,166,0.1)]'
                  : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/5 hover:border-white/5'
              }`}
            >
              {/* Highlight background strip on active */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-teal-400 to-emerald-400 rounded-r-md"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Section icon */}
              <div
                className={`flex-shrink-0 p-1.5 rounded-lg transition-colors duration-300 ${
                  isActive
                    ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                    : 'bg-white/5 text-slate-400 group-hover:text-slate-300 border border-white/10'
                }`}
              >
                <DynamicIcon name={section.iconName} className="h-4 w-4" />
              </div>

              {/* Title */}
              <span className="truncate flex-1 py-0.5 pointer-events-none">
                {section.title.split('. ')[1] || section.title}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
