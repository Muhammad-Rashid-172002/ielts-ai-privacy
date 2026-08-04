import React, { useState } from 'react';
import { 
  ChevronDown, 
  Copy, 
  Check, 
  Share2, 
  Sparkles,
  BookOpen,
  User,
  Target,
  Award,
  Mic,
  PenTool,
  FileText,
  Headphones,
  BarChart3,
  MessageSquare,
  CreditCard,
  ShieldAlert,
  Smartphone,
  AlertTriangle,
  Activity,
  Cookie,
  Flame,
  Globe,
  Zap,
  Server,
  HardDrive,
  Layers,
  Sliders,
  Key,
  Shield,
  CloudRain,
  Clock,
  HeartHandshake,
  Download,
  Trash2,
  RefreshCw,
  Mail,
  Database,
  Cpu,
  Lock,
  UserCheck
} from 'lucide-react';
import { PrivacySectionItem, ThemeMode } from '../types';
import { PALETTE } from '../constants/theme';

interface PrivacySectionCardProps {
  section: PrivacySectionItem;
  searchQuery: string;
  themeMode: ThemeMode;
  onShowToast: (msg: string) => void;
  fontSizeScalar: number;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, User, Target, Award, Mic, PenTool, FileText, Headphones,
  Sparkles, BarChart3, MessageSquare, CreditCard, ShieldAlert, Smartphone,
  AlertTriangle, Activity, Cookie, Flame, Globe, Zap, Server, HardDrive,
  Layers, Sliders, Key, Shield, CloudRain, Clock, HeartHandshake, Download,
  Trash2, RefreshCw, Mail, Database, Cpu, Lock, UserCheck
};

export const PrivacySectionCard: React.FC<PrivacySectionCardProps> = ({
  section,
  searchQuery,
  themeMode,
  onShowToast,
  fontSizeScalar,
}) => {
  const isDark = themeMode === 'dark';
  const [isExpanded, setIsExpanded] = useState<boolean>(section.isImportant || false);
  const [copied, setCopied] = useState<boolean>(false);

  const IconComponent = ICON_MAP[section.iconName] || BookOpen;

  // Highlight matched search text
  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <mark
              key={index}
              className="bg-[#21C8F6]/30 text-[#21C8F6] px-1 py-0.5 rounded font-semibold"
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const handleCopySection = (e: React.MouseEvent) => {
    e.stopPropagation();
    const fullContent = `${section.title}\n${section.shortSummary}\n\n${section.content.join('\n\n')}`;
    navigator.clipboard.writeText(fullContent);
    setCopied(true);
    onShowToast(`Copied "${section.title}" section to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareSection = (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}#${section.id}`;
    if (navigator.share) {
      navigator.share({
        title: `${section.title} - IELTS AI Master Privacy`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      onShowToast(`Link to "${section.title}" copied!`);
    }
  };

  return (
    <div
      id={section.id}
      className={`group relative rounded-3xl border transition-all duration-300 backdrop-blur-xl mb-4 overflow-hidden ${
        isExpanded
          ? isDark
            ? 'bg-slate-900/80 border-[#21C8F6]/40 shadow-xl shadow-[#21C8F6]/5'
            : 'bg-white border-[#6C63FF]/40 shadow-lg shadow-[#6C63FF]/5'
          : isDark
          ? 'bg-slate-900/50 border-white/10 hover:border-white/20 hover:bg-slate-900/70'
          : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
      }`}
    >
      {/* Subtle Glowing Top Gradient Accent Bar */}
      {section.isImportant && (
        <div 
          className="h-1.5 w-full"
          style={{
            background: `linear-gradient(90deg, ${PALETTE.primary}, ${PALETTE.secondary}, ${PALETTE.accent})`,
          }}
        />
      )}

      {/* Card Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4 select-none"
      >
        <div className="flex items-start gap-4 flex-1">
          {/* Section Icon Container */}
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105 ${
              isExpanded
                ? 'bg-gradient-to-br from-[#21C8F6]/20 to-[#6C63FF]/20 border-[#21C8F6]/40 text-[#21C8F6]'
                : isDark
                ? 'bg-white/5 border-white/10 text-slate-300'
                : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          {/* Title & Category info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#21C8F6]">
                {section.category}
              </span>
              {section.badges?.map((badge, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-slate-300 border border-white/10"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h2 
              className="text-lg sm:text-xl font-bold tracking-tight mb-1"
              style={{ fontSize: `${1.125 * fontSizeScalar}rem` }}
            >
              {highlightText(section.title)}
            </h2>

            <p className={`text-xs sm:text-sm font-normal line-clamp-2 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {highlightText(section.shortSummary)}
            </p>
          </div>
        </div>

        {/* Action Controls & Arrow */}
        <div className="flex items-center gap-1.5 shrink-0 pt-1">
          <button
            onClick={handleCopySection}
            className={`p-2 rounded-xl transition-colors border ${
              isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
            }`}
            title="Copy section"
          >
            {copied ? <Check className="w-4 h-4 text-[#18E299]" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            onClick={handleShareSection}
            className={`p-2 rounded-xl transition-colors border ${
              isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
            }`}
            title="Share section link"
          >
            <Share2 className="w-4 h-4 text-[#21C8F6]" />
          </button>

          <div
            className={`p-2 rounded-xl transition-transform duration-300 ${
              isExpanded ? 'rotate-180 text-[#21C8F6]' : 'text-slate-400'
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Expandable Body */}
      {isExpanded && (
        <div className="px-5 pb-6 pt-2 sm:px-6 border-t border-white/10 animate-fadeIn">
          {/* Content Paragraphs */}
          <div className="space-y-3.5 mb-4">
            {section.content.map((para, i) => (
              <p
                key={i}
                className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                style={{ fontSize: `${0.875 * fontSizeScalar}rem` }}
              >
                {highlightText(para)}
              </p>
            ))}
          </div>

          {/* Bullet Points if available */}
          {section.bulletPoints && section.bulletPoints.length > 0 && (
            <div className={`p-4 rounded-2xl border mb-4 ${
              isDark ? 'bg-slate-950/60 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#21C8F6] mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Takeaways</span>
              </h4>
              <ul className="space-y-2">
                {section.bulletPoints.map((bp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18E299] shrink-0 mt-2" />
                    <span>{highlightText(bp)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Card Footer Tag */}
          <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 pt-2 border-t border-white/5">
            <span>Verified for IELTS AI Master Mobile App</span>
            <span className="text-[#21C8F6]">Section ID: #{section.id}</span>
          </div>
        </div>
      )}
    </div>
  );
};
