import React from 'react';
import { 
  ShieldCheck, 
  Database, 
  Cpu, 
  Lock, 
  UserCheck, 
  BookOpen, 
  ChevronRight,
  ListFilter
} from 'lucide-react';
import { PRIVACY_CATEGORIES } from '../constants/privacyData';
import { ThemeMode } from '../types';

interface TableOfContentsProps {
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  themeMode: ThemeMode;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Overview: <BookOpen className="w-4 h-4" />,
  'Information We Collect': <Database className="w-4 h-4" />,
  'Third-Party Services': <Cpu className="w-4 h-4" />,
  'Data Usage & Protection': <Lock className="w-4 h-4" />,
  'User Rights & Controls': <UserCheck className="w-4 h-4" />,
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  selectedCategoryId,
  onSelectCategory,
  themeMode,
}) => {
  const isDark = themeMode === 'dark';

  return (
    <div className="w-full my-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <ListFilter className="w-3.5 h-3.5 text-[#21C8F6]" />
          <span>Categories & Quick Jump</span>
        </div>
        {selectedCategoryId && (
          <button
            onClick={() => onSelectCategory(null)}
            className="text-xs font-semibold text-[#21C8F6] hover:underline"
          >
            Show All
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {/* All Filter Pill */}
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 border transition-all duration-200 ${
            selectedCategoryId === null
              ? 'bg-[#21C8F6] text-slate-950 border-[#21C8F6] shadow-md shadow-[#21C8F6]/20'
              : isDark
              ? 'bg-slate-900/60 border-white/10 text-slate-300 hover:border-slate-700'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>All Sections</span>
        </button>

        {/* Category Pills */}
        {PRIVACY_CATEGORIES.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          const Icon = CATEGORY_ICONS[cat.title] || <BookOpen className="w-4 h-4" />;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? null : cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 border transition-all duration-200 ${
                isSelected
                  ? 'bg-[#6C63FF] text-white border-[#6C63FF] shadow-md shadow-[#6C63FF]/30'
                  : isDark
                  ? 'bg-slate-900/60 border-white/10 text-slate-300 hover:border-slate-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className={isSelected ? 'text-white' : 'text-[#21C8F6]'}>{Icon}</span>
              <span>{cat.title}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'
              }`}>
                {cat.sectionIds.length}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
