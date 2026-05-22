import { APP_DETAILS } from '../privacyData';
import { Mail, Shield } from 'lucide-react';

export default function PrivacyFooter() {
  const currentYear = 2026; // Static match to environmental metadata date

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-white/5 backdrop-blur-md rounded-t-3xl overflow-hidden">
      {/* Absolute top grid lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo brand */}
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1 h-6 w-6 rounded bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
              <Shield className="h-3.5 w-3.5 text-teal-400" />
            </div>
            <span className="font-sans font-bold text-sm tracking-wide text-white uppercase">
              {APP_DETAILS.name}
            </span>
          </div>
          
          <p className="text-xs text-slate-300 font-light max-w-sm leading-relaxed">
            Committed to secure, artificial-intelligence powered IELTS training solutions. Helping candidates globally achieve Listening, Reading, Writing, and Speaking success safely.
          </p>
        </div>

        {/* Support contact panel */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-1.5">
            Direct Developer & Support Contact
          </p>
          <a
            href={`mailto:${APP_DETAILS.email}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/30 text-teal-300 hover:text-teal-200 transition-all duration-300 shadow-md text-sm font-medium"
          >
            <Mail className="h-4 w-4" />
            <span>{APP_DETAILS.email}</span>
          </a>
          <span className="text-[10px] text-slate-400 mt-2 font-mono">
            Package: {APP_DETAILS.packageName}
          </span>
        </div>
      </div>

      {/* Under footer */}
      <div className="bg-slate-950/80 py-6 border-t border-white/10 text-center px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-light">
            &copy; {currentYear} {APP_DETAILS.name}. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-400">
            <span>GDPR, CCPA, and Google Play Console Compliant</span>
            <span className="text-slate-500">|</span>
            <span>No Fake Company Address Declared</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
