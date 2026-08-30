import React from 'react';
import { 
  Headphones, 
  Mail, 
  Globe, 
  FileText, 
  Trash2, 
  FileDown, 
  ExternalLink,
  ShieldCheck,
  Download
} from 'lucide-react';
import { APP_INFO, PALETTE } from '../constants/theme';
import { ThemeMode } from '../types';

interface QuickActionsProps {
  themeMode: ThemeMode;
  onOpenDeleteModal: () => void;
  onOpenExportModal: () => void;
  onDownloadPDF: () => void;
  onShowToast: (msg: string) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  themeMode,
  onOpenDeleteModal,
  onOpenExportModal,
  onDownloadPDF,
  onShowToast,
}) => {
  const isDark = themeMode === 'dark';

  const actions = [
{
  id: 'support',
  title: 'Contact Support',
  description: 'Get help with privacy and data requests',
  icon: Headphones,
  color: PALETTE.primary,
  action: () => {
    onShowToast('Opening email support...');
    window.location.href =
      'mailto:support@korvenzatech.com?subject=IELTS%20AI%20Master%20Privacy%20Support';
  },
},
    {
      id: 'email',
      title: 'Email Us',
      description: APP_INFO.supportEmail,
      icon: Mail,
      color: PALETTE.secondary,
      action: () => {
        window.location.href = `mailto:${APP_INFO.supportEmail}?subject=Privacy%20Inquiry%20-%20IELTS%20AI%20Master`;
      },
    },
    {
      id: 'website',
      title: 'Visit Website',
      description: 'Official product information & blogs',
      icon: Globe,
      color: PALETTE.accent,
      action: () => {
        window.open(APP_INFO.websiteUrl, '_blank');
      },
    },
 {
  id: 'terms',
  title: 'Terms of Service',
  description: 'Terms of use & candidate obligations',
  icon: FileText,
  color: '#3B82F6',
  action: () => {
    onShowToast('Opening IELTS AI Master Terms of Service...');
    window.open(
      'https://ielts-ai-master-terms.vercel.app/terms',
      '_blank',
      'noopener,noreferrer'
    );
  },
},
    {
      id: 'export-data',
      title: 'Export My Data',
      description: 'Download full ZIP/JSON archive',
      icon: Download,
      color: '#A855F7',
      action: onOpenExportModal,
    },
    {
      id: 'pdf',
      title: 'Download PDF Policy',
      description: 'Official printable PDF document',
      icon: FileDown,
      color: '#EC4899',
      action: onDownloadPDF,
    },
    {
      id: 'delete-account',
      title: 'Delete Account',
      description: 'Permanently purge candidate profile',
      icon: Trash2,
      color: PALETTE.error,
      isDanger: true,
      action: onOpenDeleteModal,
    },
  ];

  return (
    <div className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="w-5 h-5 text-[#21C8F6]" />
        <h2 className="text-xl font-bold tracking-tight">Quick Privacy Actions</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.id}
              onClick={act.action}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-start gap-3.5 group hover:-translate-y-0.5 ${
                act.isDanger
                  ? isDark
                    ? 'bg-rose-950/20 border-rose-500/30 hover:border-rose-500/60'
                    : 'bg-rose-50 border-rose-200 hover:border-rose-300'
                  : isDark
                  ? 'bg-slate-900/60 border-white/10 hover:border-[#21C8F6]/40 hover:bg-slate-900/90'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${act.color}18`,
                  borderColor: `${act.color}40`,
                  color: act.color,
                }}
              >
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-sm truncate">{act.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                </div>
                <p className={`text-xs truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {act.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
