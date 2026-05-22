import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShieldAlert, Sparkles, Scale, HeartHandshake } from 'lucide-react';
import { PRIVACY_SECTIONS } from './privacyData';
import PrivacyHeader from './components/PrivacyHeader';
import TableOfContents from './components/TableOfContents';
import PrivacyContent from './components/PrivacyContent';
import InteractivePanel from './components/InteractivePanel';
import PrivacyFooter from './components/PrivacyFooter';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSectionId, setActiveSectionId] = useState('introduction');

  // Trigger smooth scroll when Table of Contents links are clicked
  const handleSelectSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navigation or screen headers
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scrollspy to automatically select table of contents section based on active viewport area
  useEffect(() => {
    const handleScroll = () => {
      // If client is filtering, disable scroll spy to prevent jitter
      if (searchQuery.trim() !== '') return;

      const scrollPosition = window.scrollY + 180;
      
      // Find current section in view
      for (let i = PRIVACY_SECTIONS.length - 1; i >= 0; i--) {
        const section = PRIVACY_SECTIONS[i];
        const element = document.getElementById(section.id);
        if (element) {
          if (element.offsetTop <= scrollPosition) {
            setActiveSectionId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [searchQuery]);

  return (
    <div className="min-h-screen text-slate-100 bg-[#020617] font-sans relative overflow-x-hidden">
      {/* Exquisite glowing gradient ambient background representing the Geometric Balance Design theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#043332] to-[#064e3a] opacity-95 pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-slate-900/40 mix-blend-screen filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-950/25 mix-blend-screen filter blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-emerald-950/25 mix-blend-screen filter blur-[150px] pointer-events-none animate-pulse z-0" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-950/30 mix-blend-screen filter blur-[120px] pointer-events-none z-0" />

      {/* Decorative cyber grid background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(20,184,166,0.04)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

      {/* Top sticky search helper bar */}
      <div className="sticky top-0 z-40 w-full bg-[#020617]/70 backdrop-blur-md border-b border-white/10 py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold text-teal-400 tracking-wider uppercase">
              Secure Data Protection Portal
            </span>
          </div>
          
          {/* Quick Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              id="privacy_search_input"
              type="text"
              placeholder="Search disclosures (e.g., AI feedback)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1.5 text-xs bg-white/5 border border-white/10 rounded-full text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/40 transition-all font-light"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-300 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-20 relative z-30">
        {/* Main interactive header */}
        <PrivacyHeader />

        {/* Quick Trust Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="p-2 h-10 w-10 text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-sans font-bold text-white">Advanced AI Safety</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
                Prompt inputs and audio drafts are processed strictly under zero-retention guidelines for instant feedback without unauthorized training.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="p-2 h-10 w-10 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-sans font-bold text-white">Full User Sovereignty</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
                Under CCPA/GDPR parameters, triggers for instantaneous complete user account data purges can be fired directly in-app at any time.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="p-2 h-10 w-10 text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-sans font-bold text-white">Secure Firebase Stack</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
                Identity states and practice results reside inside secured Firestore environments protected by dynamic security rule matrices.
              </p>
            </div>
          </div>
        </div>

        {/* Major Grid System Layout: TOC on left, Content on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Table of Contents Column (Sticky on desktop) */}
          <aside className="lg:col-span-4 sticky lg:top-24 max-h-[calc(100vh-120px)] overflow-visible">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <TableOfContents
                sections={PRIVACY_SECTIONS}
                activeId={activeSectionId}
                onSelectSection={handleSelectSection}
              />

              {/* Sidebar Quick Alert Callout */}
              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-300 leading-relaxed font-light">
                <div className="flex items-start gap-2.5">
                  <ShieldAlert className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5 animate-pulse" />
                  <p>
                    For continuous trust, look for sections flagged with <strong>Key Processor Integration</strong>. They address how AI evaluations utilize external processors under safe endpoints.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Privacy Document Content Column */}
          <main className="lg:col-span-8">
            <PrivacyContent
              sections={PRIVACY_SECTIONS}
              searchQuery={searchQuery}
              activeSectionId={activeSectionId}
            />
          </main>
        </div>

        {/* User Request Generator Panel / Legal Controls */}
        <InteractivePanel />
      </div>

      {/* Main Footer Block */}
      <PrivacyFooter />
    </div>
  );
}
