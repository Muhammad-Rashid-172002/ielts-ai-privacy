import React, { useState } from 'react';
import { AlertTriangle, X, Trash2, ShieldCheck, Check } from 'lucide-react';
import { ThemeMode } from '../types';

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeMode: ThemeMode;
  onShowToast: (msg: string) => void;
}

export const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  isOpen,
  onClose,
  themeMode,
  onShowToast,
}) => {
  const isDark = themeMode === 'dark';
  const [confirmText, setConfirmText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleConfirmDelete = () => {
    if (confirmText.toLowerCase() !== 'delete my account') return;
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      onShowToast('Account deletion request submitted. Check your email for final confirmation link.');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className={`w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden p-6 ${
          isDark ? 'bg-slate-900 border-rose-500/30 text-white' : 'bg-white border-rose-200 text-slate-900'
        }`}
      >
        {/* Warning Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-500">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-2 text-rose-500">
          Delete Candidate Account?
        </h3>

        <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          This action is <strong>irreversible</strong>. Permanently purging your IELTS AI Master account will erase:
        </p>

        <ul className="space-y-1.5 text-xs text-rose-400 font-medium mb-4 pl-2">
          <li>• All Speaking voice recordings and AI transcripts</li>
          <li>• Writing essay evaluations & Band 9 rewrite suggestions</li>
          <li>• Reading, Listening & Vocabulary SRS flashcards progress</li>
          <li>• Active subscription entitlement tokens</li>
        </ul>

        <div className="mb-4">
          <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1.5">
            Type <span className="text-rose-500 font-mono">DELETE MY ACCOUNT</span> to confirm:
          </label>
          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="DELETE MY ACCOUNT"
            className={`w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border focus:outline-none focus:ring-2 focus:ring-rose-500 ${
              isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
            }`}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
              isDark ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
            }`}
          >
            Cancel
          </button>

          <button
            onClick={handleConfirmDelete}
            disabled={confirmText.toLowerCase() !== 'delete my account' || isDeleting}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-all shadow-md ${
              confirmText.toLowerCase() === 'delete my account'
                ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/30'
                : 'bg-rose-950/40 text-rose-400 opacity-50 cursor-not-allowed'
            }`}
          >
            <Trash2 className="w-4 h-4" />
            <span>{isDeleting ? 'Deleting...' : 'Permanent Delete'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
