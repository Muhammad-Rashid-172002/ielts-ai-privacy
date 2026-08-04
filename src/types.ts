export type ThemeMode = 'dark' | 'light';

export type DeviceFrameMode = 'mobile' | 'tablet' | 'desktop';

export interface PrivacySectionItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortSummary: string;
  content: string[];
  bulletPoints?: string[];
  badges?: string[];
  lastModified?: string;
  isImportant?: boolean;
}

export interface PrivacyCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  sectionIds: string[];
}

export interface AccessibilitySettings {
  fontSizeScalar: number; // 1.0 to 1.4
  highContrast: boolean;
  reducedMotion: boolean;
}

export interface ToastMessage {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}
