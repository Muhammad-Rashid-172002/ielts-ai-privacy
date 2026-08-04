import React, { useEffect } from 'react';
import { ToastMessage } from '../types';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounceIn max-w-sm">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 border border-[#21C8F6]/40 text-white shadow-2xl backdrop-blur-xl">
        <CheckCircle2 className="w-5 h-5 text-[#18E299] shrink-0" />
        <span className="text-xs font-semibold">{toast.message}</span>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white ml-auto"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
