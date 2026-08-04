import React, { useEffect, useRef } from 'react';
import { Search, X, Command, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
  totalCount: number;
  themeMode: ThemeMode;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  resultCount,
  totalCount,
  themeMode,
}) => {
  const isDark = themeMode === 'dark';
  const inputRef = useRef<HTMLInputElement>(null);

  // Global Keyboard listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full my-4">
      <div 
        className={`relative flex items-center rounded-2xl border transition-all duration-300 focus-within:ring-2 focus-within:ring-[#21C8F6] focus-within:border-[#21C8F6] ${
          isDark 
            ? 'bg-slate-900/80 border-white/10 text-white shadow-xl' 
            : 'bg-white border-slate-200 text-slate-900 shadow-md'
        }`}
      >
        <Search className="w-5 h-5 ml-4 text-[#21C8F6] shrink-0" />
        
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search policy (e.g., Speaking recordings, Gemini AI, Delete data...)"
          className={`w-full py-3.5 pl-3 pr-24 text-sm font-medium bg-transparent focus:outline-none placeholder:text-slate-400`}
        />

        <div className="absolute right-3 flex items-center gap-2">
          {searchQuery ? (
            <button
              id="btn-clear-search"
              onClick={() => onSearchChange('')}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className={`hidden sm:flex items-center gap-0.5 px-2 py-1 rounded-md text-[11px] font-semibold border ${
              isDark ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-100 border-slate-300 text-slate-500'
            }`}>
              <Command className="w-3 h-3" />
              <span>K</span>
            </kbd>
          )}

          <span className="text-xs font-bold px-2 py-1 rounded-lg bg-[#21C8F6]/15 text-[#21C8F6] border border-[#21C8F6]/30">
            {resultCount}/{totalCount}
          </span>
        </div>
      </div>
    </div>
  );
};
