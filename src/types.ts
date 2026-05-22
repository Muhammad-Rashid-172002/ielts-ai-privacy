export interface PrivacySection {
  id: string;
  title: string;
  iconName: string; // The Lucide icon key to display
  content: string;
  bullets?: { text: string; subtext?: string }[];
  highlight?: boolean;
}

export interface AppInfo {
  name: string;
  packageName: string;
  email: string;
  platforms: string[];
  lastUpdated: string;
  purpose: string;
}

export interface InteractiveCheckOption {
  id: string;
  question: string;
  description: string;
}
