import { PrivacySectionItem, PrivacyCategory } from '../types';

export const PRIVACY_CATEGORIES: PrivacyCategory[] = [
  {
    id: 'overview',
    title: 'Overview',
    iconName: 'ShieldCheck',
    description: 'General introduction and core privacy values of IELTS AI Master.',
    sectionIds: ['introduction'],
  },
  {
    id: 'data-collection',
    title: 'Information We Collect',
    iconName: 'Database',
    description: 'Detailed scope of student data, audio recordings, essays, and learning progress.',
    sectionIds: [
      'account-info',
      'profile-info',
      'diagnostic-results',
      'speaking-recordings',
      'writing-responses',
      'reading-progress',
      'listening-progress',
      'vocabulary-progress',
      'study-analytics',
      'ai-chat-history',
      'payment-info',
      'subscription-info',
      'device-info',
      'crash-reports',
      'firebase-analytics',
      'cookies',
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Services',
    iconName: 'Cpu',
    description: 'Integrations with Google Sign-In, Firebase infrastructure, and Gemini AI models.',
    sectionIds: [
      'service-firebase',
      'service-google-auth',
      'service-gemini-ai',
      'service-cloud-functions',
      'service-firebase-storage',
      'service-firestore',
    ],
  },
  {
    id: 'data-protection',
    title: 'Data Usage & Protection',
    iconName: 'Lock',
    description: 'How we process, store, encrypt, backup, and restrict access to your learning metrics.',
    sectionIds: [
      'data-usage',
      'encryption',
      'authentication',
      'data-backup',
      'data-retention',
      'childrens-privacy',
    ],
  },
  {
    id: 'user-rights',
    title: 'User Rights & Controls',
    iconName: 'UserCheck',
    description: 'Your rights to export, modify, or permanently delete your account data.',
    sectionIds: [
      'export-data',
      'delete-account',
      'update-info',
      'contact-us',
    ],
  },
];

export const PRIVACY_SECTIONS: PrivacySectionItem[] = [
  // 1. Overview
  {
    id: 'introduction',
    title: 'Introduction',
    category: 'Overview',
    iconName: 'BookOpen',
    shortSummary: 'Welcome to IELTS AI Master. We are committed to protecting your personal data and privacy.',
    isImportant: true,
    badges: ['Core Policy', 'ISO 27001'],
    content: [
      'At IELTS AI Master ("we", "our", or "us"), operated by IELTS AI Master Technologies Ltd., your privacy is paramount. This Privacy Policy explains how we collect, process, store, and safeguard your personal information when you use our mobile and web applications.',
      'Our primary objective is to empower candidates worldwide with AI-driven IELTS preparation tools (Speaking feedback, Writing evaluations, Reading speed tools, and Listening drills) while maintaining Apple and Google enterprise-grade data protection standards.',
      'By using IELTS AI Master, you agree to the practices described in this policy. If you have any concerns regarding how your data is handled, please reach out to our Data Protection Officer.'
    ],
    bulletPoints: [
      'Transparent AI processing without selling personal data',
      'End-to-end encryption for audio recordings and essay submissions',
      'Complete user control over data export and instant account erasure'
    ]
  },

  // 2. Information We Collect
  {
    id: 'account-info',
    title: 'Account Information',
    category: 'Information We Collect',
    iconName: 'User',
    shortSummary: 'Identity credentials used to personalize your sync state and authenticate your account.',
    badges: ['Essential', 'Auth Token'],
    content: [
      'When you sign up or log in to IELTS AI Master, we collect basic identity details required to establish your candidate profile.',
      'This includes your full name, email address, profile picture URL (if using Google or Apple Sign-In), unique account identifier (UID), and authentication tokens.'
    ],
    bulletPoints: [
      'Full Name and Verified Email Address',
      'Encrypted Firebase Auth UID',
      'Preferred Language & Timezone Region'
    ]
  },
  {
    id: 'profile-info',
    title: 'Profile Information',
    category: 'Information We Collect',
    iconName: 'Target',
    shortSummary: 'Target IELTS Band Scores, exam target date, and study preferences.',
    badges: ['Personalized AI'],
    content: [
      'To provide tailored AI coaching and customized daily study recommendations, we store your learning preferences.',
      'This includes your target Overall Band Score (e.g., Band 7.5+), target module scores (Speaking, Writing, Reading, Listening), target exam date, preferred English accent focus (British, American, Australian), and current preparation phase.'
    ],
    bulletPoints: [
      'Target Band Score goals (Overall & Per Module)',
      'Scheduled IELTS Exam Date & countdown status',
      'Accent preferences for AI Listening & Speaking practice'
    ]
  },
  {
    id: 'diagnostic-results',
    title: 'Diagnostic Test Results',
    category: 'Information We Collect',
    iconName: 'Award',
    shortSummary: 'Initial proficiency assessment scores used to calibrate your custom study roadmap.',
    badges: ['AI Assessment'],
    content: [
      'When you first launch IELTS AI Master, you may complete an AI-powered Diagnostic Test across all 4 modules.',
      'We record your diagnostic scores, estimated band range, error patterns, and foundational strengths to build your dynamic study schedule.'
    ],
    bulletPoints: [
      'Module baseline band estimates (4.0 - 9.0)',
      'Grammar and vocabulary weakness matrix',
      'Initial baseline completion timestamp'
    ]
  },
  {
    id: 'speaking-recordings',
    title: 'Speaking Recordings',
    category: 'Information We Collect',
    iconName: 'Mic',
    shortSummary: 'Audio clips recorded during Part 1, Part 2, and Part 3 Speaking simulations.',
    isImportant: true,
    badges: ['Audio Processing', 'Gemini AI'],
    content: [
      'When you practice IELTS Speaking with our AI Examiner, your voice responses are temporarily recorded via your device microphone.',
      'Audio recordings are securely uploaded to Firebase Storage and processed by Gemini AI to evaluate Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, and Pronunciation.',
      'Audio files are retained strictly for your personal review and transcript history unless deleted by you.'
    ],
    bulletPoints: [
      'High-clarity compressed AAC/M4A audio recordings',
      'Automated phonetic transcription & pause analysis',
      'Pronunciation confidence scores per word'
    ]
  },
  {
    id: 'writing-responses',
    title: 'Writing Responses',
    category: 'Information We Collect',
    iconName: 'PenTool',
    shortSummary: 'Essays, Task 1 reports, handwriting scans, and detailed AI feedback reports.',
    isImportant: true,
    badges: ['Essay Scoring', 'AI Review'],
    content: [
      'Every IELTS Writing Task 1 (Academic/General) and Task 2 essay submitted is stored to provide automated Band 9 criteria feedback.',
      'We collect the full text, word count, completion time, structural paragraph analysis, vocabulary corrections, and band score evaluation breakdowns.'
    ],
    bulletPoints: [
      'Typed text submissions and optional OCR handwritten essay images',
      'Task Achievement/Response and Coherence & Cohesion metrics',
      'AI structural suggestions and corrected vocabulary rewrites'
    ]
  },
  {
    id: 'reading-progress',
    title: 'Reading Progress',
    category: 'Information We Collect',
    iconName: 'FileText',
    shortSummary: 'Passage speed, question accuracy, passage highlights, and keyword annotations.',
    badges: ['Module Progress'],
    content: [
      'We track your performance across IELTS Academic & General Reading passages.',
      'Metrics include passage reading duration, correct vs. incorrect answer selections, True/False/Not Given accuracy rates, and saved vocabulary annotations.'
    ],
    bulletPoints: [
      'Reading speed (words per minute)',
      'Question type mastery (Matching Headings, Multiple Choice, Summary Completion)',
      'Passage highlight coordinates and custom notes'
    ]
  },
  {
    id: 'listening-progress',
    title: 'Listening Progress',
    category: 'Information We Collect',
    iconName: 'Headphones',
    shortSummary: 'Audio playback rates, transcript synchronization scores, and section completion rates.',
    badges: ['Audio Analytics'],
    content: [
      'As you complete Sections 1 to 4 of IELTS Listening tests, we log playback interactions, audio speeds chosen, section completion rates, and answer accuracy.',
      'This data helps identify accent-specific comprehension bottlenecks (e.g., difficulty with rapid Australian dialogues).'
    ],
    bulletPoints: [
      'Section 1-4 drill accuracy rates',
      'Distractor identification frequency',
      'Spelling mistake rate in form completion tasks'
    ]
  },
  {
    id: 'vocabulary-progress',
    title: 'Vocabulary Progress',
    category: 'Information We Collect',
    iconName: 'Sparkles',
    shortSummary: 'Spaced repetition flashcards (SRS), word mastery status, and collocations saved.',
    badges: ['SRS Algorithm'],
    content: [
      'Our Spaced Repetition System (SRS) tracks your mastery of Band 7-9 academic vocabulary, topic-specific idiomatic phrases, and collocations.',
      'We store flashcard review intervals, memory retention strength, and words marked as "Mastered" or "Review Needed".'
    ],
    bulletPoints: [
      'Anki-style review difficulty ratings (Easy, Good, Hard, Again)',
      'Topic buckets (Environment, Technology, Education, Health)',
      'Custom vocabulary deck collections created by user'
    ]
  },
  {
    id: 'study-analytics',
    title: 'Study Analytics',
    category: 'Information We Collect',
    iconName: 'BarChart3',
    shortSummary: 'Daily practice streak, time spent per module, and study heatmaps.',
    badges: ['Analytics'],
    content: [
      'To keep you motivated, we aggregate high-level usage statistics such as your active daily streak, total hours practiced, weekly activity distribution, and estimated overall Band Score progress curve.'
    ],
    bulletPoints: [
      'Daily practice streak counter & streak repair logs',
      'Weekly focus heatmaps across Speaking, Writing, Reading, Listening',
      'AI projected test readiness index'
    ]
  },
  {
    id: 'ai-chat-history',
    title: 'AI Chat History',
    category: 'Information We Collect',
    iconName: 'MessageSquare',
    shortSummary: 'Conversational logs with your personalized IELTS AI Tutor.',
    badges: ['AI Conversation'],
    content: [
      'Interaction logs between you and your AI IELTS Tutor (such as asking for grammar explanations, topic ideas for Task 2, or sample Speaking answers) are preserved in your local and cloud account history.'
    ],
    bulletPoints: [
      'Question prompts and AI tutor responses',
      'Saved grammar tips and custom feedback bookmarks',
      'Option to clear individual chat threads at any time'
    ]
  },
  {
    id: 'payment-info',
    title: 'Payment Information',
    category: 'Information We Collect',
    iconName: 'CreditCard',
    shortSummary: 'Encrypted transaction receipts processed by Apple App Store and Google Play Store.',
    badges: ['PCI-DSS Compliant'],
    content: [
      'IELTS AI Master DOES NOT store or have access to raw credit card numbers, CVVs, or bank account credentials.',
      'All payments are securely handled directly by Apple App Store In-App Purchases or Google Play Billing. We only receive purchase receipt tokens, transaction IDs, and entitlement validation responses.'
    ],
    bulletPoints: [
      'App Store / Google Play anonymous transaction IDs',
      'Purchase timestamp and currency tier',
      'Zero raw payment card details retained on our servers'
    ]
  },
  {
    id: 'subscription-info',
    title: 'Subscription Information',
    category: 'Information We Collect',
    iconName: 'ShieldAlert',
    shortSummary: 'Active membership status (Pro Monthly / Annual / Lifetime) and tier limits.',
    badges: ['Entitlement Token'],
    content: [
      'We maintain your active subscription tier status to grant access to unlimited AI Speaking evaluations, unlimited essay grading, and offline practice downloads.',
      'Includes subscription start date, expiration date, auto-renewal state, and grace period status.'
    ]
  },
  {
    id: 'device-info',
    title: 'Device Information',
    category: 'Information We Collect',
    iconName: 'Smartphone',
    shortSummary: 'Operating system version, device model, screen resolution, and locale.',
    badges: ['Telemetry'],
    content: [
      'We automatically log hardware and operating system parameters to optimize responsive rendering, dynamic font scaling, and audio codec compatibility.',
      'Collected details: Device model (e.g., iPhone 15 Pro, Samsung Galaxy S24), OS version (iOS 17.5 / Android 14), screen density, and app build release identifier.'
    ]
  },
  {
    id: 'crash-reports',
    title: 'Crash Reports',
    category: 'Information We Collect',
    iconName: 'AlertTriangle',
    shortSummary: 'Anonymized stack traces generated via Sentry and Firebase Crashlytics.',
    badges: ['Stability'],
    content: [
      'If the application encounters an unexpected error or crash, an anonymized diagnostic report is generated via Firebase Crashlytics.',
      'Reports contain stack traces, memory consumption at the time of crash, and state transitions. No audio recordings or essay texts are included in crash logs.'
    ]
  },
  {
    id: 'firebase-analytics',
    title: 'Firebase Analytics',
    category: 'Information We Collect',
    iconName: 'Activity',
    shortSummary: 'Aggregated, privacy-focused usage analytics to improve app features.',
    badges: ['Anonymized'],
    content: [
      'We use Google Firebase Analytics to measure general feature adoption (e.g., percentage of users taking mock tests vs. daily vocabulary review).',
      'All metrics are anonymized and aggregated into statistical cohorts. You may opt out of non-essential analytics in App Settings.'
    ]
  },
  {
    id: 'cookies',
    title: 'Cookies & Web Storage',
    category: 'Information We Collect',
    iconName: 'Cookie',
    shortSummary: 'Essential local tokens and web session storage for preferences.',
    badges: ['Local Storage'],
    content: [
      'On web and web-view components, we use local storage and secure HTTP-only session cookies to retain active auth tokens, dark/light theme preferences, and offline draft states.',
      'We do not use tracking cookies for third-party advertising retargeting.'
    ]
  },

  // 3. Third-party Services
  {
    id: 'service-firebase',
    title: 'Firebase Infrastructure',
    category: 'Third-Party Services',
    iconName: 'Flame',
    shortSummary: 'Google Cloud backend infrastructure supporting secure database & authentication.',
    isImportant: true,
    badges: ['Google Cloud', 'SOC 2'],
    content: [
      'IELTS AI Master relies on Google Firebase for backend infrastructure, authentication, real-time database sync, and encrypted storage.',
      'Firebase adheres to ISO 27001, SOC 1/2/3, and GDPR compliance standards. Data is hosted in secure, multi-region Google Cloud data centers with 99.99% uptime guarantees.'
    ],
    bulletPoints: [
      'Firebase Authentication (Secure token encryption)',
      'Firestore Cloud Database (Multi-region replication)',
      'Firebase Cloud Messaging (Daily practice notifications)'
    ]
  },
  {
    id: 'service-google-auth',
    title: 'Google Sign-In',
    category: 'Third-Party Services',
    iconName: 'Globe',
    shortSummary: 'OAuth 2.0 single sign-on integration for frictionless login.',
    badges: ['OAuth 2.0'],
    content: [
      'When you choose "Sign in with Google", Google shares your verified name, primary email address, profile photo URL, and language preference with us.',
      'We never request access to your Google Drive, Gmail inbox, Google Calendar, or other personal Google Workspace data.'
    ]
  },
  {
    id: 'service-gemini-ai',
    title: 'Gemini AI Engine',
    category: 'Third-Party Services',
    iconName: 'Zap',
    shortSummary: 'Enterprise Gemini 1.5 Pro & Flash APIs for real-time IELTS evaluation.',
    isImportant: true,
    badges: ['Google GenAI', 'No Model Training'],
    content: [
      'Our AI Speaking Examiner and Writing Evaluator leverage Google Gemini enterprise API endpoints.',
      'CRITICAL COMMITMENT: Data sent to Gemini APIs through our enterprise tier IS NOT USED TO TRAIN public Google AI models. Your audio transcripts and essay submissions remain confidential and isolated.'
    ],
    bulletPoints: [
      'Sub-second latency score calculation',
      'Zero training on candidate personal submissions',
      'Strict TLS 1.3 encrypted API transport'
    ]
  },
  {
    id: 'service-cloud-functions',
    title: 'Cloud Functions',
    category: 'Third-Party Services',
    iconName: 'Server',
    shortSummary: 'Serverless backend logic for scoring calculations and validation.',
    badges: ['Serverless'],
    content: [
      'Complex Band Score calculations, transcript processing, and vocabulary frequency lookups execute within isolated serverless Node.js Cloud Functions hosted on Google Cloud Run.'
    ]
  },
  {
    id: 'service-firebase-storage',
    title: 'Firebase Storage',
    category: 'Third-Party Services',
    iconName: 'HardDrive',
    shortSummary: 'AES-256 encrypted storage for audio files and essay image uploads.',
    badges: ['AES-256 Encrypted'],
    content: [
      'Audio practice files and essay image uploads are stored in dedicated Firebase Storage buckets with strict Security Rules. Access is restricted exclusively to your authenticated user account.'
    ]
  },
  {
    id: 'service-firestore',
    title: 'Firestore Database',
    category: 'Third-Party Services',
    iconName: 'Layers',
    shortSummary: 'Real-time document database storing test history and SRS cards.',
    badges: ['Real-time Sync'],
    content: [
      'Your candidate profile, mock test history, score breakdowns, and flashcard queues are synchronized seamlessly across your mobile devices via Google Cloud Firestore.'
    ]
  },

  // 4. Data Usage & Protection
  {
    id: 'data-usage',
    title: 'Data Usage Policy',
    category: 'Data Usage & Protection',
    iconName: 'Sliders',
    shortSummary: 'How we process data exclusively for scoring, progress tracking, and app delivery.',
    isImportant: true,
    badges: ['Zero Data Selling'],
    content: [
      'We use your data solely for functional educational purposes:',
      '1. Calculating precise IELTS Band Scores (0-9) according to official public scoring descriptors.',
      '2. Providing customized error analysis, grammar fixes, and vocabulary suggestions.',
      '3. Maintaining your daily streak and progress history across devices.',
      '4. Sending opted-in reminder notifications for scheduled practice sessions.',
      'WE DO NOT SELL, RENT, OR MONETIZE YOUR PERSONAL DATA TO THIRD-PARTY ADVERTISERS.'
    ]
  },
  {
    id: 'encryption',
    title: 'Encryption Standards',
    category: 'Data Usage & Protection',
    iconName: 'Key',
    shortSummary: 'TLS 1.3 encryption in transit and AES-256 bit encryption at rest.',
    badges: ['AES-256', 'TLS 1.3'],
    content: [
      'All communications between the IELTS AI Master app and our cloud services are protected by Transport Layer Security (TLS 1.3) with HTTPS.',
      'Database records and stored audio files are encrypted at rest using industry-standard AES-256 encryption keys managed via Google Cloud KMS.'
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication & Security',
    category: 'Data Usage & Protection',
    iconName: 'Shield',
    shortSummary: 'Biometric unlock integration and secure OAuth 2.0 authentication.',
    badges: ['Biometrics', 'MFA'],
    content: [
      'You can secure access to your IELTS AI Master app using your device biometric features (Face ID / Touch ID / Android Biometric Prompt).',
      'All auth tokens are stored securely in iOS Keychain / Android Keystore.'
    ]
  },
  {
    id: 'data-backup',
    title: 'Data Backup & Redundancy',
    category: 'Data Usage & Protection',
    iconName: 'CloudRain',
    shortSummary: 'Automated daily cloud backups to ensure zero loss of candidate progress.',
    badges: ['Multi-Region'],
    content: [
      'We perform automated daily snapshot backups across geographically redundant data centers. In the event of device loss or damage, logging back in instantly restores your entire score history and flashcard progress.'
    ]
  },
  {
    id: 'data-retention',
    title: 'Data Retention Policy',
    category: 'Data Usage & Protection',
    iconName: 'Clock',
    shortSummary: 'Retention timelines for practice logs, audio files, and inactive accounts.',
    badges: ['Auto Clean'],
    content: [
      'We retain your study progress as long as your account remains active.',
      'Temporary audio clips for speaking tests are automatically archived after 180 days unless you explicitly pin them to your favorites.',
      'If an account remains inactive for 24 consecutive months, we send a notification before anonymizing non-essential diagnostic logs.'
    ]
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    category: 'Data Usage & Protection',
    iconName: 'HeartHandshake',
    shortSummary: 'Compliance with COPPA, GDPR-K, and age verification standards.',
    badges: ['COPPA', 'GDPR-K'],
    content: [
      'IELTS AI Master is designed for students preparing for higher education or immigration, typically aged 13 and older.',
      'We do not knowingly collect personal information from children under the age of 13 without verifiable parental or guardian consent. If we learn that a user under 13 has provided personal data without consent, we will promptly delete the account.'
    ]
  },

  // 5. User Rights & Controls
  {
    id: 'export-data',
    title: 'Export My Data',
    category: 'User Rights & Controls',
    iconName: 'Download',
    shortSummary: 'Download a complete JSON / PDF archive of all your tests and speaking recordings.',
    isImportant: true,
    badges: ['Data Portability'],
    content: [
      'Under GDPR and CCPA, you have the right to request a complete machine-readable copy of your personal data.',
      'In the app settings or right here on this screen, click "Export My Data" to generate a downloadable package containing your profile metrics, essay history, score transcripts, and vocabulary lists.'
    ]
  },
  {
    id: 'delete-account',
    title: 'Delete My Account',
    category: 'User Rights & Controls',
    iconName: 'Trash2',
    shortSummary: 'Permanently remove your candidate profile, scores, essays, and audio files.',
    isImportant: true,
    badges: ['Right to be Forgotten', 'Permanent'],
    content: [
      'You hold full ownership of your data. If you decide to stop using IELTS AI Master, you can trigger permanent account deletion in App Settings or via the Quick Action below.',
      'Upon confirmation, all account credentials, audio recordings, written essays, test analytics, and subscription tokens will be permanently purged within 7 business days.'
    ]
  },
  {
    id: 'update-info',
    title: 'Update Information',
    category: 'User Rights & Controls',
    iconName: 'RefreshCw',
    shortSummary: 'Correct or update your target scores, email address, and study schedule.',
    badges: ['Self-Service'],
    content: [
      'You can edit your personal details, target band score goals, email address, and notification frequencies directly within the Profile screen inside the application.'
    ]
  },
  {
    id: 'contact-us',
    title: 'Contact Us & Privacy Questions',
    category: 'User Rights & Controls',
    iconName: 'Mail',
    shortSummary: 'Reach out to our Data Protection Officer for any privacy inquiries.',
    badges: ['24/7 Support'],
    content: [
      'If you have questions, feedback, or formal data protection requests regarding this Privacy Policy, our dedicated team is here to assist.',
      'Email: muhammadrashid172002@gmail.com',
      'Company: Nexora Technologies.',
      'Address: Islamabad, Pakistan'
    ]
  }
];
