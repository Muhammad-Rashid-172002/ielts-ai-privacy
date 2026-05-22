import { PrivacySection, AppInfo } from './types';

export const APP_DETAILS: AppInfo = {
  name: "IELTS AI Master",
  packageName: "com.rashidapps.ieltsaimaster",
  email: "muhammadrashid172002@gmail.com",
  platforms: ["Android", "iOS"],
  lastUpdated: "May 22, 2026",
  purpose: "AI-powered preparation app for IELTS Listening, Reading, Writing, Speaking, mock tests, progress analytics, and AI band score feedback."
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    iconName: "ShieldCheck",
    content: "Welcome to IELTS AI Master. We respect your privacy and are committed to protecting any personal data you share with us. This Privacy Policy describes how we collect, use, process, and secure your personal information when you use our mobile application on both Android and iOS devices. By using IELTS AI Master, you agree to the terms outline in this policy. If you do not agree, please do not use the application.",
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    iconName: "Database",
    content: "To provide a highly personalized, AI-driven preparation experience, we may collect various types of information from you. This includes:",
    bullets: [
      {
        text: "Account Information",
        subtext: "We collect your name, email address, and optionally a phone number when you create an account to secure your profile across different physical devices."
      },
      {
        text: "Profile Image",
        subtext: "If you optionally upload an avatar or profile image, we collect and store it to personalize your experience in the dashboard."
      },
      {
        text: "IELTS Practice Results",
        subtext: "We record results of your practice sets (Listening, Reading, Writing, Speaking) to monitor progress and provide feedback logs."
      },
      {
        text: "Writing & Speaking Responses",
        subtext: "To give helpful evaluation, we retrieve, process, and temporarily store your typed essays and voice/audio speaking recordings."
      },
      {
        text: "Progress Analytics",
        subtext: "We record metrics about your study habits, band score trends over time, and engagement levels to tailor dynamic mocks and analytics dashboards."
      }
    ]
  },
  {
    id: "data-usage",
    title: "3. How We Use Data",
    iconName: "Activity",
    content: "The gathered information is processed under secure pipelines to serve the primary educational objectives of IELTS AI Master. We utilize your data for:",
    bullets: [
      {
        text: "Account & Cross-Device Syncing",
        subtext: "To create your personalized profile, maintain active states, and synchronize your practice history seamlessly across Android and iOS."
      },
      {
        text: "Personalized Progress Visuals",
        subtext: "To render progress tracking graphs, historic tests metrics, and detail subject-specific strengths and weaknesses."
      },
      {
        text: "AI Feedback & Score Calculations",
        subtext: "To run sophisticated deep language and audio evaluations on your writing/speaking files, scoring your performance into standard IELTS Bands (0 - 9)."
      },
      {
        text: "Continuous Systems Maintenance",
        subtext: "To find system bugs, analyze crash trends, monitor bandwidth usage, and constantly refine our custom AI grading matrices."
      }
    ]
  },
  {
    id: "firebase-services",
    title: "4. Firebase Services",
    iconName: "Flame",
    content: "To maintain the highest levels of cloud scalability, security, and instantaneous synchronization, we leverage Google Firebase services. These include:",
    bullets: [
      {
        text: "Firebase Authentication",
        subtext: "Safeguards user identities with encrypted tokens and handles secure email/password and passwordless logins."
      },
      {
        text: "Cloud Firestore",
        subtext: "Serves as our highly structured, secure, real-time database to persist IELTS results, textual responses, and user analytics profile data."
      },
      {
        text: "Firebase Storage",
        subtext: "Saves uploaded profile avatar images and, if required, the recorded audio files of your mock speaking examinations safely in encrypted storage buckets."
      }
    ],
    highlight: true
  },
  {
    id: "ai-processing",
    title: "5. AI Processing Notice",
    iconName: "Cpu",
    content: "Our app is powered by state-of-the-art Artificial Intelligence to analyze your language performance. Please take note of the following processing activities:",
    bullets: [
      {
        text: "Automated Feedback Generators",
        subtext: "Your typed essays and audio responses are transmitted to server-side AI language evaluation models strictly to examine grammar, cohesion, sentence variety, and pronunciation."
      },
      {
        text: "Band Score Forecasting",
        subtext: "These models parse responses to generate automated IELTS band score estimations and write actionable lists of suggestions."
      },
      {
        text: "Anonymized Improvement",
        subtext: "Inputs are passed securely through enterprise APIs, adhering to strict data zero-retention or non-training clauses where possible, maintaining content security."
      }
    ],
    highlight: true
  },
  {
    id: "data-security",
    title: "6. Data Security",
    iconName: "Lock",
    content: "We prioritize user trust and deploy robust measures to insulate your data from unauthorized access, modification, or disclosure. All sensitive communication utilizes HTTPS with secure TLS protocols, database rule sets restricts collection paths to owner accounts, and internal keys are guarded in secure server variables. While we employ top industry measures, no electronic system guarantees 100% absolute security.",
  },
  {
    id: "children-privacy",
    title: "7. Children’s Privacy",
    iconName: "Users",
    content: "IELTS AI Master does not knowingly collect or solicit personal details from anyone under the age of 13. If you are under 13, please do not attempt to register or transmit personal indicators. If we discover in our records that we have inadvertently collected credentials from a child under 13, we will purge those files immediately from our servers. Parents who believe a child has provided details are invited to write to our support email to request immediate deletion.",
  },
  {
    id: "user-rights",
    title: "8. User Rights & Controls",
    iconName: "FileText",
    content: "We believe in giving you complete sovereignty over your learning footprint. As an IELTS AI Master user, you hold powerful options:",
    bullets: [
      {
        text: "Right and Access to Rectification",
        subtext: "You can update profile details, edit your screen name, or replace your upload avatars directly in the settings view of the app."
      },
      {
        text: "Right to Data Portability",
        subtext: "You can view your summarized mock metrics and band reports at any time inside the interactive progress tab."
      },
      {
        text: "Right to Complete Erasure",
        subtext: "You can fully request deletion of your account and all associated test responses, transcript logs, and analytics metrics at any hour. This can be instantly triggered in-app or via an email request."
      }
    ]
  },
  {
    id: "contact-info",
    title: "9. Contact Information",
    iconName: "Mail",
    content: "If you have questions, feedback, compliance remarks, or if you wish to initiate a rapid global account and data deletion inquiry, please reach out to us directly through the official channels:",
    bullets: [
      {
        text: "Developer & Support Email",
        subtext: "muhammadrashid172002@gmail.com"
      },
      {
        text: "Application ID",
        subtext: "com.rashidapps.ieltsaimaster"
      }
    ]
  },
  {
    id: "policy-updates",
    title: "10. Policy Updates & Notifications",
    iconName: "CalendarDays",
    content: "We reserves the right to refine or alter this Privacy Policy as our services and features mature. If we execute critical adjustments that alter user information processing habits, we will alert you either via an in-app banners notification, push notifications, or by revising the 'Last Updated' date at the top of this document. We encourage users to verify this page periodically to maintain active awareness of how your data is treated.",
  }
];
