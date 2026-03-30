import BackButton from "@/components/BackButton";

const sections = [
  {
    title: "1. INFORMATION WE COLLECT",
    content: [
      {
        subtitle: "1.1 Personal Information",
        body: "Users may voluntarily provide: full name, email address, professional profile information, profile photograph, curriculum vitae (CV) documents, video (Professional Pitch), and skills and qualifications.",
      },
      {
        subtitle: "1.2 Account Information",
        body: "We collect data required to maintain user accounts including login credentials, profile preferences, and activity related to platform usage.",
      },
      {
        subtitle: "1.3 Device and Technical Data",
        body: "To maintain platform reliability, we may collect device type and operating system, application version, IP address, and crash logs and performance analytics.",
      },
    ],
  },
  {
    title: "2. PURPOSE OF DATA PROCESSING",
    body: "Personal information is processed to: create and maintain user accounts; enable employers to review candidate profiles; enable employers to download CV documents; operate and improve the platform; process digital purchases; display advertising; and maintain platform security.",
  },
  {
    title: "3. CANDIDATE PROFILE INFORMATION",
    body: "Candidates voluntarily upload professional information intended for viewing by potential employers. Employers may be able to view candidate profiles and download CV documents. Users are advised not to include unnecessary sensitive personal information.",
  },
  {
    title: "4. ARTIFICIAL INTELLIGENCE IMAGE PROCESSING CONSENT",
    body: "The App may provide a Professional Photo Enhancement feature. If a user elects to use this feature, uploaded images may be processed through artificial intelligence technology, image data may be transmitted to external processing services, and the enhanced image will be returned to the user. By selecting this feature, users expressly consent to the temporary processing of image data for enhancement purposes.",
  },
  {
    title: "5. ADVERTISING AND ANALYTICS DISCLOSURE",
    body: "The App may display advertisements using technologies such as Google AdMob. Advertising providers may collect limited device information for advertisement delivery, campaign measurement, and advertising optimization. Advertising content does not constitute endorsement by TenBucks Mobile. Users may manage advertising preferences via device settings.",
  },
  {
    title: "6. THIRD-PARTY SERVICES AND APIs",
    body: "The App may integrate third-party services to support functionality, including cloud storage services, analytics tools, image processing technologies, and advertising platforms (e.g. Supabase). These providers may process data only to the extent required to deliver their services.",
  },
  {
    title: "7. DATA STORAGE AND SECURITY",
    body: "We implement reasonable safeguards including encrypted communication protocols, controlled system access, and platform monitoring and security procedures. However, no digital system can guarantee absolute protection against unauthorized access.",
  },
  {
    title: "8. DATA RETENTION",
    body: "Personal information will be retained only as long as necessary to operate the App, comply with legal obligations, and prevent misuse or fraud. Inactive accounts may be removed after extended inactivity.",
  },
  {
    title: "9. USER RIGHTS UNDER POPIA",
    body: "Users have the right to access personal data, correct inaccurate information, request deletion of personal data, and withdraw consent to data processing where applicable. Requests may be submitted to support@tenbucks-mobile.co.za.",
  },
  {
    title: "10. AGE RESTRICTIONS",
    body: "The App is intended only for individuals 18 years or older. We do not knowingly collect personal information from minors.",
  },
  {
    title: "11. PLATFORM MODERATION AND REPORTING",
    body: "TenBucks Mobile reserves the right to review user content where reports of misuse are received. Users may report inappropriate content or behaviour through support@tenbucks-mobile.co.za. We may remove content or suspend accounts that violate platform policies.",
  },
  {
    title: "12. UPDATES TO THIS POLICY",
    body: "This Privacy Policy may be updated periodically. Continued use of the App constitutes acceptance of revised terms.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />

      <div className="mt-8 mb-10 text-center">
        <p className="text-[#f5a623] font-bold text-sm tracking-widest uppercase mb-2">Fizzog®</p>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm">TenBucks Mobile (Pty) Ltd · Effective Date: August 2026</p>
      </div>

      <p className="text-white/60 leading-relaxed mb-10 border border-white/10 bg-white/5 rounded-2xl p-5 text-sm">
        TenBucks Mobile (Pty) Ltd ("TenBucks Mobile", "we", "us", or "our"), a company registered in the Republic
        of South Africa and headquartered in Gauteng, owns and operates the FIZZOG mobile application ("the App").
        This Privacy Policy explains how personal information is collected, processed, and protected when users
        interact with the App. By downloading, accessing, or using the App, users consent to the practices described
        in this Privacy Policy.
      </p>

      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-[#f5a623] font-bold text-sm mb-3">{s.title}</h2>
            {s.content ? (
              <div className="flex flex-col gap-4">
                {s.content.map((sub) => (
                  <div key={sub.subtitle}>
                    <p className="text-white font-semibold text-sm mb-1">{sub.subtitle}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{sub.body}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/55 text-sm leading-relaxed">{s.body}</p>
            )}
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
