import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check, Info, Trash2, Edit3, ShieldAlert } from 'lucide-react';
import { APP_DETAILS } from '../privacyData';

export default function InteractivePanel() {
  const [copied, setCopied] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [requestType, setRequestType] = useState('deletion');
  const [customDetail, setCustomDetail] = useState('');

  // Generate Email Subject and Body template based on state
  const getSubject = () => {
    const typeLabel =
      requestType === 'deletion'
        ? 'Account Deletion'
        : requestType === 'correction'
        ? 'Data Correction'
        : 'Privacy Query';
    return `[IELTS AI Master Privacy] Request for ${typeLabel}`;
  };

  const getBody = () => {
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const greetingName = userName ? userName : '[Your Name]';
    const emailRef = userEmail ? userEmail : '[Your Registered Email]';

    if (requestType === 'deletion') {
      return `Dear IELTS AI Master Support Team,

I am writing to formally request the complete deletion of my account and all associated personal data from your database (Cloud Firestore and Storage, if applicable).

Please find my account details below:
Registered Name: ${greetingName}
Registered Email: ${emailRef}
App Package Name: ${APP_DETAILS.packageName}

Under current privacy rights, I request the permanent erasure of:
- My registered credentials and authentication identifiers.
- My historic mock results and score matrices (Listening, Reading, Writing, Speaking).
- Any uploaded profile images and speaking audio files.

Please notify me once this deletion request has been successfully processed.

Best regards,
${greetingName}
Submitted on: ${today}`;
    } else if (requestType === 'correction') {
      return `Dear IELTS AI Master Support Team,

I have noticed incorrect information inside my IELTS AI Master profile and would like to request a correction.

Here are my account details:
Registered Name: ${greetingName}
Registered Email: ${emailRef}

Correction details:
${customDetail || '[Please specify what information needs correction, e.g., "Correct spelling of my name to John Doe"]'}

Kindly update this in my profiles as soon as possible and confirm via email.

Best regards,
${greetingName}
Submitted on: ${today}`;
    } else {
      return `Dear IELTS AI Master Support Team,

I am writing to inquire about how my personal data is processed within the IELTS AI Master app.

Here are my details:
Name: ${greetingName}
Email: ${emailRef}

Privacy Question / Concern:
${customDetail || '[Please write your questions here, e.g. "Do my audio responses get shared with third parties beside the AI feedback systems?"]'}

Thank you for your assistance.

Best regards,
${greetingName}
Submitted on: ${today}`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBody());
    window.location.href = `mailto:${APP_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-xl backdrop-blur-xl mb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

      {/* Header and Title */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-widest rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/15 uppercase">
            Interactive Support Tool
          </span>
          <h2 className="text-2xl font-sans font-bold text-white mt-1.5 tracking-tight">
            User Rights & Action Panel
          </h2>
          <p className="text-sm text-slate-300 font-light mt-1">
            Generate copyable template requests or trigger an email query directly for GDPR, CCPA, and COPPA control.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Form Column */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Action Type Picker */}
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              1. Choose Action Request
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRequestType('deletion')}
                className={`py-3 px-2 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all outline-none ${
                    requestType === 'deletion'
                      ? 'bg-teal-500/10 border-teal-500/40 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.1)]'
                      : 'bg-white/5 border-white/10 text-slate-350 hover:text-slate-200 hover:bg-white/10'
                }`}
              >
                <Trash2 className="h-4 w-4" />
                <span>Delete Data</span>
              </button>

              <button
                type="button"
                onClick={() => setRequestType('correction')}
                className={`py-3 px-2 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all outline-none ${
                    requestType === 'correction'
                      ? 'bg-teal-500/10 border-teal-500/40 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.1)]'
                      : 'bg-white/5 border-white/10 text-slate-350 hover:text-slate-200 hover:bg-white/10'
                }`}
              >
                <Edit3 className="h-4 w-4" />
                <span>Correct Data</span>
              </button>

              <button
                type="button"
                onClick={() => setRequestType('inquiry')}
                className={`py-3 px-2 rounded-xl border text-xs font-medium flex flex-col items-center gap-1.5 transition-all outline-none ${
                    requestType === 'inquiry'
                      ? 'bg-teal-500/10 border-teal-500/40 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.1)]'
                      : 'bg-white/5 border-white/10 text-slate-350 hover:text-slate-200 hover:bg-white/10'
                }`}
              >
                <Info className="h-4 w-4" />
                <span>Ask Question</span>
              </button>
            </div>
          </div>

          {/* User Fields */}
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="user_name_input" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                id="user_name_input"
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/40 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="user_email_input" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                Registered Email Address
              </label>
              <input
                id="user_email_input"
                type="email"
                placeholder="registered@example.com"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/40 transition-colors"
              />
            </div>

            {requestType !== 'deletion' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="overflow-hidden"
              >
                <label htmlFor="request_details_input" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Request Details
                </label>
                <textarea
                  id="request_details_input"
                  rows={3}
                  placeholder={
                    requestType === 'correction'
                      ? 'E.g., I registered with the incorrect name "Jon Doe" and need it updated to "John Doe".'
                      : 'E.g., Are my audio recordings encrypted during flight?'
                  }
                  value={customDetail}
                  onChange={(e) => setCustomDetail(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/40 transition-colors resize-none"
                />
              </motion.div>
            )}
          </div>

          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
            <ShieldAlert className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-light">
              Requests are usually handled manually by support within <strong className="text-teal-300">2-4 business days</strong>. No data is stored on this policy website.
            </p>
          </div>
        </div>

        {/* Right Preview Document Column */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
            2. Request Template Plaintext Preview
          </span>

          <div className="relative flex-1 bg-white/5 rounded-2xl border border-white/10 p-5 overflow-hidden">
            <div className="absolute top-2 right-2 flex items-center gap-1.5 animate-pulse-slow">
              <button
                type="button"
                onClick={handleCopy}
                className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 hover:bg-teal-500/20 transition-all duration-300 flex items-center gap-1.5 text-xs font-mono font-medium outline-none"
                title="Copy contents"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-[280px] overflow-y-auto leading-relaxed mt-4 custom-scrollbar">
              {getBody()}
            </pre>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleSendEmail}
              className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-sans font-extrabold text-sm tracking-wide shadow-[0_4px_25px_rgba(20,184,166,0.25)] transition-all flex items-center justify-center gap-2 cursor-pointer border border-teal-400/20"
            >
              <Mail className="h-5 w-5" />
              <span>Launch Email App to Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
