import BackButton from "@/components/BackButton";

const sections = [
  {
    title: "1. INTRODUCTION",
    body: `This Privacy Policy explains how personal information is collected, processed, and protected in accordance with:

• Protection of Personal Information Act, 4 of 2013 (POPIA)
• Electronic Communications and Transactions Act, 25 of 2002 (ECTA)

The App is:
• Owned by Indaba Hospitality Group
• Managed by Tenbucks-Mobile (PTY) Ltd`,
  },
  {
    title: "2. INFORMATION WE COLLECT",
    content: [
      {
        subtitle: "2.1 Personal Information",
        body: "We may collect: full name, employee ID, contact details (email, phone), job role and department, and employment status.",
      },
      {
        subtitle: "2.2 Usage Data",
        body: "App activity, reward interactions, login history, and device information.",
      },
      {
        subtitle: "2.3 Technical Data",
        body: "IP address, device type, and operating system.",
      },
    ],
  },
  {
    title: "3. PURPOSE OF PROCESSING",
    body: `Your information is processed for:

• Employee verification
• Reward allocation
• Performance recognition tracking
• Internal reporting
• App functionality and security`,
  },
  {
    title: "4. LEGAL BASIS FOR PROCESSING (POPIA)",
    body: `Processing is justified under:

• Employment relationship necessity
• Legitimate business interests
• Consent (where applicable)
• Legal obligations`,
  },
  {
    title: "5. DATA SHARING",
    body: `Your data may be shared with:

• Indaba Hospitality Group internal departments
• Tenbucks-Mobile (PTY) Ltd (system management)
• Third-party service providers (where necessary)

We do not sell personal data.`,
  },
  {
    title: "6. DATA SECURITY",
    body: `We implement:

• Encryption protocols
• Secure authentication systems
• Access controls
• Regular system monitoring

However, no system is completely secure.`,
  },
  {
    title: "7. DATA RETENTION",
    body: `We retain data for the duration of employment, as required by law, and as necessary for operational purposes. Data is deleted or anonymized when no longer required.`,
  },
  {
    title: "8. USER RIGHTS (POPIA)",
    body: `You have the right to:

• Access your personal data
• Request correction
• Request deletion (where applicable)
• Object to processing
• Lodge a complaint with the Information Regulator`,
  },
  {
    title: "9. CROSS-BORDER DATA TRANSFERS",
    body: "If data is transferred outside South Africa, it will be protected under equivalent safeguards and compliant jurisdictions or agreements will be used.",
  },
  {
    title: "10. COOKIES AND TRACKING",
    body: "The App may use session tracking and analytics tools, used strictly for performance and user experience improvements.",
  },
  {
    title: "11. CHILDREN'S PRIVACY",
    body: "The App is not intended for individuals under 18.",
  },
  {
    title: "12. BREACH NOTIFICATION",
    body: "In the event of a data breach, users will be notified where required and authorities will be informed in line with POPIA.",
  },
  {
    title: "13. CHANGES TO POLICY",
    body: "We may update this policy periodically. Users will be notified via app notifications or internal communication channels.",
  },
  {
    title: "14. CONTACT DETAILS",
    body: `For all privacy-related queries:

Tenbucks-Mobile (PTY) Ltd
Email: support@tenbucks-mobile.co.za`,
  },
  {
    title: "15. INFORMATION REGULATOR (SOUTH AFRICA)",
    body: "If unresolved, complaints may be directed to the Information Regulator (South Africa).",
  },
];

export default function IndabaCaresPrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />

      <div className="mt-8 mb-10 text-center">
        <p className="text-[#a78bfa] font-bold text-sm tracking-widest uppercase mb-2">IndabaCares</p>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm">Indaba Hospitality Group · Employee Rewards Application</p>
        <p className="text-white/30 text-xs mt-1">Managed by Tenbucks-Mobile (PTY) Ltd · Republic of South Africa</p>
      </div>

      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-[#a78bfa] font-bold text-sm mb-3">{s.title}</h2>
            {"content" in s && s.content ? (
              <div className="flex flex-col gap-4">
                {s.content.map((sub) => (
                  <div key={sub.subtitle}>
                    <p className="text-white font-semibold text-sm mb-1">{sub.subtitle}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{sub.body}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/55 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 rounded-2xl border border-white/10 bg-white/5 text-center">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Indaba Hospitality Group · Managed by Tenbucks-Mobile (PTY) Ltd
          <br />
          <a href="mailto:support@tenbucks-mobile.co.za" className="text-[#a78bfa] hover:underline">
            support@tenbucks-mobile.co.za
          </a>
        </p>
      </div>
    </div>
  );
}
