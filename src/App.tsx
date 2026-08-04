import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  HeaderBar 
} from './components/HeaderBar';
import { PrivacyHeader } from './components/PrivacyHeader';
import { BentoGridOverview } from './components/BentoGridOverview';
import { SearchBar } from './components/SearchBar';
import { TableOfContents } from './components/TableOfContents';
import { PrivacySectionCard } from './components/PrivacySectionCard';
import { QuickActions } from './components/QuickActions';
import { PrivacyFooter } from './components/PrivacyFooter';
import { FlutterCodeViewerModal } from './components/FlutterCodeViewerModal';
import { DeleteAccountModal } from './components/DeleteAccountModal';
import { ExportDataModal } from './components/ExportDataModal';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { Toast } from './components/Toast';

import { PRIVACY_SECTIONS, PRIVACY_CATEGORIES } from './constants/privacyData';
import { PALETTE } from './constants/theme';
import { ThemeMode, DeviceFrameMode, AccessibilitySettings, ToastMessage } from './types';
import { Maximize2, Minimize2, Printer, Share2, Sparkles } from 'lucide-react';

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [deviceFrame, setDeviceFrame] = useState<DeviceFrameMode>('desktop');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const [flutterCodeOpen, setFlutterCodeOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [exportModalOpen, setExportModalOpen] = useState<boolean>(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState<boolean>(false);
  
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    fontSizeScalar: 1.0,
    highContrast: false,
    reducedMotion: false,
  });

  const isDark = themeMode === 'dark';

  const showToast = (message: string) => {
    setToast({ id: Date.now().toString(), message });
  };

  // Filter privacy policy sections by search query and category
  const filteredSections = useMemo(() => {
    return PRIVACY_SECTIONS.filter((section) => {
      // Category match check
      if (selectedCategoryId) {
        const categoryObj = PRIVACY_CATEGORIES.find((c) => c.id === selectedCategoryId);
        if (categoryObj && !categoryObj.sectionIds.includes(section.id)) {
          return false;
        }
      }

      // Search query match check
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchTitle = section.title.toLowerCase().includes(q);
      const matchSummary = section.shortSummary.toLowerCase().includes(q);
      const matchContent = section.content.some((c) => c.toLowerCase().includes(q));
      const matchBullets = section.bulletPoints?.some((b) => b.toLowerCase().includes(q));

      return matchTitle || matchSummary || matchContent || matchBullets;
    });
  }, [searchQuery, selectedCategoryId]);

  const handleDownloadPDF = () => {
    // Launch celebratory confetti effect for PDF generation
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#21C8F6', '#6C63FF', '#18E299', '#FFB020'],
    });

    showToast('Generating official IELTS AI Master Privacy Policy PDF...');
    setTimeout(() => {
      window.print();
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className={`min-h-screen font-sans transition-colors duration-300 relative ${
        accessibility.highContrast 
          ? 'bg-black text-white' 
          : isDark 
          ? 'bg-[#08111F] text-[#F1F5F9]' 
          : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >
      {/* Top Header Bar */}
      <HeaderBar
        themeMode={themeMode}
        onToggleTheme={() => setThemeMode(isDark ? 'light' : 'dark')}
        deviceFrame={deviceFrame}
        onSetDeviceFrame={setDeviceFrame}
        onOpenFlutterCode={() => setFlutterCodeOpen(true)}
        onOpenAccessibility={() => setAccessibilityOpen(!accessibilityOpen)}
        onDownloadPDF={handleDownloadPDF}
      />

      {/* Main Content Showcase container depending on Device Frame */}
      <main className="py-6 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          {/* Device Frame View Container */}
          <div
            className={`w-full transition-all duration-500 ${
              deviceFrame === 'mobile'
                ? 'max-w-sm rounded-[44px] border-[12px] border-slate-900 shadow-2xl overflow-hidden bg-[#08111F] my-4 ring-1 ring-slate-800'
                : deviceFrame === 'tablet'
                ? 'max-w-2xl rounded-[36px] border-[14px] border-slate-900 shadow-2xl overflow-hidden bg-[#08111F] my-4 ring-1 ring-slate-800'
                : 'max-w-4xl'
            }`}
          >
            {/* Dynamic Island bar for mobile frame simulation */}
            {deviceFrame === 'mobile' && (
              <div className="w-full bg-slate-950 py-2.5 flex items-center justify-center relative select-none">
                <div className="w-24 h-4 bg-black rounded-full border border-slate-800 flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-[#18E299]" />
                </div>
              </div>
            )}

            {/* Privacy Policy Main Content Wrapper */}
            <div className="p-2 sm:p-4">
              {/* Header Component */}
              <PrivacyHeader themeMode={themeMode} />

              {/* Bento Grid Visual Overview */}
              <BentoGridOverview 
                themeMode={themeMode}
                onSelectCategory={setSelectedCategoryId}
                onOpenExportModal={() => setExportModalOpen(true)}
                onOpenDeleteModal={() => setDeleteModalOpen(true)}
              />

              {/* Search Bar */}
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                resultCount={filteredSections.length}
                totalCount={PRIVACY_SECTIONS.length}
                themeMode={themeMode}
              />

              {/* Table of Contents / Category Selector */}
              <TableOfContents
                selectedCategoryId={selectedCategoryId}
                onSelectCategory={setSelectedCategoryId}
                themeMode={themeMode}
              />

              {/* Auxiliary Utility Toolbar (Print, Clear Filters) */}
              <div className="flex items-center justify-between my-3 text-xs px-1">
                <span className="font-semibold text-slate-400">
                  Showing {filteredSections.length} of {PRIVACY_SECTIONS.length} Privacy Sections
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1 font-semibold text-[#21C8F6] hover:underline"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print</span>
                  </button>
                </div>
              </div>

              {/* Privacy Policy Sections Cards List */}
              <div className="space-y-4">
                {filteredSections.length > 0 ? (
                  filteredSections.map((section) => (
                    <PrivacySectionCard
                      key={section.id}
                      section={section}
                      searchQuery={searchQuery}
                      themeMode={themeMode}
                      onShowToast={showToast}
                      fontSizeScalar={accessibility.fontSizeScalar}
                    />
                  ))
                ) : (
                  <div className={`p-8 rounded-3xl text-center border ${
                    isDark ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <p className="text-base font-bold text-slate-300 mb-2">
                      No Privacy Sections Found matching "{searchQuery}"
                    </p>
                    <p className="text-xs text-slate-500 mb-4">
                      Try searching for keywords like "Speaking", "Gemini", "Firebase", or "Delete".
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategoryId(null);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-[#21C8F6] text-slate-950"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Quick Actions Grid */}
              <QuickActions
                themeMode={themeMode}
                onOpenDeleteModal={() => setDeleteModalOpen(true)}
                onOpenExportModal={() => setExportModalOpen(true)}
                onDownloadPDF={handleDownloadPDF}
                onShowToast={showToast}
              />

              {/* Privacy Footer */}
              <PrivacyFooter themeMode={themeMode} />
            </div>
          </div>
        </div>
      </main>

      {/* Flutter Source Code Inspector Modal */}
      <FlutterCodeViewerModal
        isOpen={flutterCodeOpen}
        onClose={() => setFlutterCodeOpen(false)}
        themeMode={themeMode}
        onShowToast={showToast}
      />

      {/* Delete Account Modal */}
      <DeleteAccountModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        themeMode={themeMode}
        onShowToast={showToast}
      />

      {/* Export Data Archive Modal */}
      <ExportDataModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        themeMode={themeMode}
        onShowToast={showToast}
      />

      {/* Accessibility Floating Toolbar */}
      <AccessibilityToolbar
        isOpen={accessibilityOpen}
        onClose={() => setAccessibilityOpen(false)}
        settings={accessibility}
        onChangeSettings={setAccessibility}
        themeMode={themeMode}
      />

      {/* Global Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
