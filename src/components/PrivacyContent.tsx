import { PrivacySection } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import DynamicIcon from './DynamicIcon';
import { Check, Info } from 'lucide-react';

interface PrivacyContentProps {
  sections: PrivacySection[];
  searchQuery: string;
  activeSectionId: string;
}

export default function PrivacyContent({ sections, searchQuery, activeSectionId }: PrivacyContentProps) {
  // Filter sections by search query if any
  const filteredSections = sections.filter((section) => {
    const query = searchQuery.toLowerCase();
    const titleMatch = section.title.toLowerCase().includes(query);
    const contentMatch = section.content.toLowerCase().includes(query);
    const bulletMatch = section.bullets?.some(
      (b) => b.text.toLowerCase().includes(query) || b.subtext?.toLowerCase().includes(query)
    );
    return titleMatch || contentMatch || bulletMatch;
  });

  // Helper to highlight matched text (safe simple replacement)
  const renderHighlightedText = (text: string, search: string) => {
    if (!search.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark key={i} className="bg-teal-500/30 text-teal-200 px-0.5 rounded">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <AnimatePresence mode="popLayout">
        {filteredSections.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-white/5 bg-slate-900/20 text-slate-400 backdrop-blur-md"
          >
            <div className="p-3 bg-slate-800/50 rounded-full text-slate-500 border border-white/5 mb-4">
              <Info className="h-6 w-6" />
            </div>
            <p className="font-semibold text-slate-200">No matching disclosure found</p>
            <p className="text-sm text-slate-500 mt-1 max-w-sm">
              We couldn't find any results matching "{searchQuery}". Please check your spelling or search for broader keywords like "AI", "Firebase", or "Rights".
            </p>
          </motion.div>
        ) : (
          filteredSections.map((section) => {
            const isHighlighted = section.highlight;
            const isScrolledTo = activeSectionId === section.id;

            return (
              <motion.section
                id={section.id}
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-2xl p-6 md:p-8 border backdrop-blur-lg scroll-mt-24 transition-all duration-300 ${
                  isScrolledTo 
                    ? 'shadow-[0_0_30px_rgba(20,184,166,0.15)] ring-1 ring-teal-500/40 border-teal-500/40 bg-white/10' 
                    : isHighlighted
                    ? 'border-teal-500/20 bg-gradient-to-tr from-white/5 to-teal-950/20 shadow-lg'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                {/* Special alert indicator for important API notices like Firebase/AI Processing */}
                {isHighlighted && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] uppercase tracking-wider font-semibold text-teal-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                    Key Processor Integration
                  </div>
                )}

                {/* Section header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`p-2.5 rounded-xl border ${
                    isHighlighted 
                      ? 'bg-teal-500/10 text-teal-400 border-teal-500/30 shadow-[0_0_15px_rgba(20,184,166,0.2)]' 
                      : 'bg-white/5 text-slate-200 border-white/10'
                  }`}>
                    <DynamicIcon name={section.iconName} className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight">
                    {renderHighlightedText(section.title, searchQuery)}
                  </h2>
                </div>

                {/* Section explanatory content */}
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light mb-6">
                  {renderHighlightedText(section.content, searchQuery)}
                </p>

                {/* Specific items listing/grid under clauses */}
                {section.bullets && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.bullets.map((bullet, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="flex-shrink-0 mt-0.5 p-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-sans font-semibold text-slate-200">
                              {renderHighlightedText(bullet.text, searchQuery)}
                            </h4>
                            {bullet.subtext && (
                              <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
                                {renderHighlightedText(bullet.subtext, searchQuery)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
}
