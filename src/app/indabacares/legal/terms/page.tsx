import BackButton from "@/components/BackButton";

const sections = [
  {
    title: "1. INTRODUCTION",
    body: `These Terms of Use ("Terms") govern access to and use of the Indaba Hospitality Group Employee Rewards & Recognition Application ("the App").

The App is:
• Owned by Indaba Hospitality Group ("the Company")
• Managed and operated by Tenbucks-Mobile (PTY) Ltd ("Managing Agent")
• Restricted exclusively to verified employees of Indaba Hospitality Group and its subsidiaries

By accessing or using the App, you agree to be bound by these Terms. If you do not agree, you must immediately discontinue use.`,
  },
  {
    title: "2. ELIGIBILITY AND ACCESS CONTROL",
    content: [
      {
        subtitle: "2.1 Restricted Access",
        body: "The App is a closed system, accessible only to current employees of Indaba Hospitality Group and employees of its subsidiaries and affiliated entities.",
      },
      {
        subtitle: "2.2 Verification",
        body: "Access is granted based on employee records, internal authentication systems, and employer-issued credentials. The Company reserves the right to approve, deny, or revoke access at any time.",
      },
      {
        subtitle: "2.3 Termination of Access",
        body: "Access will be terminated if employment ends, misuse is detected, or policy violations occur.",
      },
    ],
  },
  {
    title: "3. PURPOSE OF THE APPLICATION",
    body: `The App provides:

• Employee reward allocation
• Recognition programs
• Incentive tracking
• Internal engagement features

The App is strictly for internal corporate use.`,
  },
  {
    title: "4. USER RESPONSIBILITIES",
    body: `You agree to:

• Use the App lawfully and in good faith
• Maintain confidentiality of login credentials
• Not share access with unauthorized users
• Not manipulate or exploit reward systems

You may not:

• Reverse engineer the App
• Attempt unauthorized access
• Interfere with system security
• Use the App for fraudulent purposes`,
  },
  {
    title: "5. REWARDS AND INCENTIVES",
    content: [
      {
        subtitle: "5.1 Nature of Rewards",
        body: "Rewards are discretionary, have no cash equivalence unless explicitly stated, and are subject to internal policies.",
      },
      {
        subtitle: "5.2 Modification",
        body: "The Company reserves the right to change reward structures, adjust point allocations, and withdraw or replace incentives.",
      },
      {
        subtitle: "5.3 No Guarantee",
        body: "Participation does not guarantee rewards or continued availability of programs.",
      },
    ],
  },
  {
    title: "6. INTELLECTUAL PROPERTY",
    body: "All content within the App — including software, branding, design, and data — is owned by Indaba Hospitality Group and/or Tenbucks-Mobile (PTY) Ltd. Unauthorized use is strictly prohibited.",
  },
  {
    title: "7. DATA USAGE AND PRIVACY",
    body: "Use of the App is subject to the Privacy Policy, in compliance with the Protection of Personal Information Act (POPIA) and the Electronic Communications and Transactions Act (ECTA).",
  },
  {
    title: "8. DISCLAIMERS",
    body: `The App is provided "as is":

• No warranties of uninterrupted service
• No guarantee of accuracy of all content
• Subject to system downtime and maintenance`,
  },
  {
    title: "9. LIMITATION OF LIABILITY",
    body: "To the fullest extent permitted by law, the Company and Managing Agent are not liable for indirect or consequential damages, loss of rewards due to technical issues, or unauthorized access due to user negligence.",
  },
  {
    title: "10. TERMINATION",
    body: "The Company may suspend or terminate access without prior notice, for operational, legal, or disciplinary reasons.",
  },
  {
    title: "11. GOVERNING LAW",
    body: "These Terms are governed by the laws of the Republic of South Africa. Disputes will be subject to South African courts.",
  },
  {
    title: "12. CONTACT DETAILS",
    body: `Managing Agent:
Tenbucks-Mobile (PTY) Ltd
Email: support@tenbucks-mobile.co.za`,
  },
];

export default function IndabaCaresTermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />

      <div className="mt-8 mb-10 text-center">
        <p className="text-[#a78bfa] font-bold text-sm tracking-widest uppercase mb-2">IndabaCares</p>
        <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
        <p className="text-white/40 text-sm">Indaba Hospitality Group · Employee Rewards & Recognition Application</p>
        <p className="text-white/30 text-xs mt-1">Managed by Tenbucks-Mobile (PTY) Ltd · Republic of South Africa</p>
      </div>

      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title} className="border-b border-white/5 pb-8 last:border-0">
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
