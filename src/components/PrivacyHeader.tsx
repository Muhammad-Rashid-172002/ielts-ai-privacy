import { motion } from 'motion/react';
import { Smartphone, MailOpen, Activity } from 'lucide-react';
import { APP_DETAILS } from '../privacyData';

export default function PrivacyHeader() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-xl mb-10">
      {/* Background glow points */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Logo representation - Glorious CSS glowing AI logo based on Geometric Balance Design */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-teal-500 border border-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.5)]"
          >
            {/* Logo visuals */}
            <div className="relative flex flex-col items-center">
              <span className="font-sans text-xs font-black tracking-tighter text-black">IELTS</span>
              <span className="font-mono text-lg font-black tracking-tight text-slate-950 leading-none">AI</span>
            </div>
          </motion.div>

          {/* Titles & Description */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 shadow-sm">
                Official Document
              </span>
              <span className="px-3 py-1 text-xs font-sans font-medium rounded-full bg-white/5 text-slate-300 border border-white/10">
                Package: {APP_DETAILS.packageName}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mt-3 bg-gradient-to-r from-white via-teal-100 to-emerald-200 bg-clip-text text-transparent">
              {APP_DETAILS.name}
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base mt-2 max-w-2xl font-light">
              Privacy Policy & Data Protection Agreement for mobile prep platforms. Built for complete accountability, compliant security standards, and comprehensive transparency.
            </p>
          </div>
        </div>

        {/* Badges / Platform Container */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 min-w-[240px]">
          {/* Calendar Box */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="p-2 h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <MailOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-teal-400">Last Updated</p>
              <p className="text-sm font-sans font-semibold text-slate-100">{APP_DETAILS.lastUpdated}</p>
            </div>
          </div>

          {/* Systems Box */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="p-2 h-9 w-9 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center border border-teal-500/20">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Supported Platforms</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                {APP_DETAILS.platforms.map((platform) => (
                  <span key={platform} className="text-xs font-sans font-medium text-slate-200 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Purpose Callout */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start gap-4 md:items-center justify-between text-slate-300 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-teal-400 animate-pulse" />
          <span className="text-teal-400 font-medium tracking-wide uppercase text-xs">Core Service Purpose:</span>
          <span className="text-slate-100 italic font-mono font-normal">{APP_DETAILS.purpose}</span>
        </div>
      </div>
    </div>
  );
}
