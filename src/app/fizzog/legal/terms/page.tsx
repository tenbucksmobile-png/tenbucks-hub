import BackButton from "@/components/BackButton";

const sections = [
  {
    title: "1. INTRODUCTION & LEGAL AGREEMENT",
    body: `Welcome to Fizzog® ("the App").

Fizzog® is a proprietary mobile application owned, operated, and controlled by Ten Bucks (Pty) Ltd ("Ten Bucks", "we", "us", "our"), a private company duly incorporated and registered in the Republic of South Africa.

These Terms & Conditions, Privacy Statement, and Usage Policy ("Agreement") govern your access to and use of the App. By downloading, registering, or using Fizzog®, you confirm that you have read, understood, and agreed to be legally bound by this Agreement.

If you do not agree, you must not use the App.`,
  },
  {
    title: "2. PURPOSE OF THE PLATFORM",
    body: `Fizzog® is a visual talent presentation and discovery platform, designed to:

• Allow individuals ("Candidates") to present themselves via a short-form visual profile and a 45-second video
• Allow Employers to search, view, shortlist, and request CVs
• Prevent direct contact between Candidates and Employers unless explicitly authorized by the Candidate through the App process

Fizzog® is not a recruitment agency, a labour broker, or an employment placement service.

Ten Bucks (Pty) Ltd does not participate in hiring decisions, negotiations, or employment outcomes.`,
  },
  {
    title: "3. USER CATEGORIES",
    body: `3.1 Candidates — Individuals who create profiles to present themselves for career or employment opportunities.

3.2 Employers — Registered businesses, recruiters, or authorized representatives seeking talent.

Each user may register only in one category.`,
  },
  {
    title: "4. ELIGIBILITY & REGISTRATION",
    body: `By registering, you confirm that:

• You are 18 years or older
• You have legal capacity to contract
• All information submitted is accurate and lawful
• You are acting in your personal capacity (Candidate) or with authority (Employer)

Ten Bucks reserves the right to verify, suspend, or terminate accounts that breach these requirements.`,
  },
  {
    title: "5. PROFILE CONTENT & VIDEO USAGE",
    body: `5.1 Candidate Profiles may include limited biographical and professional information, a 45-second prerecorded video, and skills, experience indicators, and non-identifying descriptors.

No personal contact details (email, phone number, physical address, social media handles) are displayed to Employers.

5.2 Video Content Rules — By uploading a video, the Candidate confirms they own the rights to the content, grants Ten Bucks a non-exclusive, royalty-free license to host, stream, and display the video within the App, and acknowledges videos are visible only to registered Employers.

Ten Bucks may remove content that is offensive, misleading, unlawful, discriminatory, or inconsistent with the App's purpose.`,
  },
  {
    title: "6. CV REQUEST MECHANISM (CONTROLLED DISCLOSURE)",
    body: `• Employers may request a Candidate's CV
• CVs are shared only with Candidate consent
• Contact details contained within CVs are shared at the Candidate's discretion

Ten Bucks acts solely as a facilitator of consent-based disclosure and is not responsible for post-disclosure engagement.`,
  },
  {
    title: "7. PROTECTION OF PERSONAL INFORMATION (POPIA)",
    body: `Ten Bucks (Pty) Ltd is a Responsible Party as defined under the Protection of Personal Information Act, 4 of 2013 (POPIA).

7.1 Lawful Processing — Personal Information is processed lawfully, minimally, and transparently for platform functionality, candidate discovery, CV request facilitation, legal compliance, and security and fraud prevention.

7.2 Consent — By using Fizzog®, you provide explicit, informed consent to the processing of your Personal Information as described herein.

7.3 Data Security — We implement reasonable technical and organizational safeguards to protect data against loss, unauthorized access, or misuse.

7.4 Data Retention — Information is retained only for as long as your account remains active or as required by law or legitimate business purposes. Users may request deletion, subject to legal retention obligations.

7.5 User Rights — In terms of POPIA, you may request access to your personal data, correction or deletion, and withdrawal of consent (subject to functional limitations).`,
  },
  {
    title: "8. CONFIDENTIALITY & RESTRICTIONS",
    body: `Employers agree that:

• Candidate data is confidential
• Information may not be copied, sold, scraped, or reused outside recruitment evaluation
• Videos and profiles may not be recorded, redistributed, or shared externally

Any breach may result in immediate termination and legal action.`,
  },
  {
    title: "9. ADVERTISING & COMMUNICATIONS",
    body: `Any advertising or promotional messaging within Fizzog® complies with South African advertising and consumer protection laws and may be opted out of where legally required.

Fizzog® does not endorse Employers or Candidates.`,
  },
  {
    title: "10. INTELLECTUAL PROPERTY",
    body: `All rights in the Fizzog® name, logo, interface, design, code, and branding, and all platform technology and content (excluding user-generated content) are owned exclusively by Ten Bucks (Pty) Ltd.

Unauthorized use constitutes infringement.`,
  },
  {
    title: "11. DISCLAIMERS & LIMITATION OF LIABILITY",
    body: `Fizzog® is provided "as is".

Ten Bucks does not guarantee employment, interviews, or outcomes; is not liable for misrepresentation by users; and is not party to employment contracts or disputes.

Use of the App is at your own risk.`,
  },
  {
    title: "12. TERMINATION",
    body: `Ten Bucks may suspend or terminate access where this Agreement is breached, unlawful conduct occurs, or platform integrity is threatened.

Users may delete their accounts at any time.`,
  },
  {
    title: "13. GOVERNING LAW & JURISDICTION",
    body: `This Agreement is governed by the laws of the Republic of South Africa.

All disputes shall fall under South African courts.`,
  },
  {
    title: "14. COMPANY & CONTACT DETAILS",
    body: `Ten Bucks (Pty) Ltd
Republic of South Africa
support@tenbucks-mobile.co.za`,
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />

      <div className="mt-8 mb-10 text-center">
        <p className="text-[#f5a623] font-bold text-sm tracking-widest uppercase mb-2">Fizzog®</p>
        <h1 className="text-3xl font-bold mb-2">Terms of Usage</h1>
        <p className="text-white/40 text-sm">
          Terms &amp; Conditions · Privacy Statement · Usage Policy
        </p>
        <p className="text-white/30 text-xs mt-1">
          Owner &amp; Operator: Ten Bucks (Pty) Ltd · Republic of South Africa
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title} className="border-b border-white/5 pb-8 last:border-0">
            <h2 className="text-[#f5a623] font-bold text-sm mb-3">{s.title}</h2>
            <p className="text-white/55 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 rounded-2xl border border-white/10 bg-white/5 text-center">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Ten Bucks (Pty) Ltd · Republic of South Africa
          <br />
          <a href="mailto:support@tenbucks-mobile.co.za" className="text-[#f5a623] hover:underline">
            support@tenbucks-mobile.co.za
          </a>
        </p>
      </div>
    </div>
  );
}
