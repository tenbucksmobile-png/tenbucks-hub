import BackButton from "@/components/BackButton";

const sections = [
  {
    title: "1. AGREEMENT TO TERMS",
    body: `By accessing or using IndabaCares ("the App"), you agree to be bound by these Terms of Service. If you do not agree, do not use the App.

These Terms govern your use of IndabaCares in your capacity as an employee of a hotel or hospitality property that has licensed the platform. Your employer has agreed to separate terms with Indaba Cares (Pty) Ltd.`,
  },
  {
    title: "2. ELIGIBILITY",
    body: "The App is available only to employees who have been registered in the system by their employer. You must be at least 18 years old to use the App. Your employer is responsible for ensuring that only eligible employees are registered.",
  },
  {
    title: "3. YOUR ACCOUNT",
    body: `• Your employee code and password are personal and must not be shared.
• You are responsible for all activity that occurs under your account.
• You must notify your HR administrator immediately if you suspect unauthorised access to your account.
• You may not create an account on behalf of another person.`,
  },
  {
    title: "4. ACCEPTABLE USE",
    body: `You agree NOT to use the App to:

• Post recognition messages or chat content that is abusive, discriminatory, sexually explicit, threatening, or defamatory.
• Harass, intimidate, or bully any colleague.
• Misrepresent your identity or impersonate another employee.
• Attempt to access another employee's account or data.
• Interfere with the App's functionality or security systems.
• Use the App for any unlawful purpose.
• Upload content to which you do not have the right to grant us a licence.`,
  },
  {
    title: "5. RECOGNITION & POINTS",
    body: `• Points earned through recognition are a reward mechanism provided at your employer's discretion and have no cash value.
• Your employer retains the right to modify, suspend, or terminate the points and rewards programme at any time.
• Points cannot be transferred between employees, converted to cash, or used outside of the IndabaCares platform.
• Fraudulent manipulation of points or recognition submissions may result in account suspension and disciplinary action.`,
  },
  {
    title: "6. REWARDS REDEMPTION",
    body: `• Reward availability is subject to stock and your employer's budget.
• All redemptions are subject to approval by your employer's administration team.
• Your employer is responsible for fulfilling approved redemptions. Indaba Cares (Pty) Ltd is not responsible for reward fulfilment.
• Approved and fulfilled redemptions cannot be reversed except at the sole discretion of your employer.`,
  },
  {
    title: "7. CONTENT YOU POST",
    body: `You retain ownership of content you submit (recognition messages, chat messages, profile photos). By posting content, you grant Indaba Cares (Pty) Ltd and your employer a non-exclusive, royalty-free licence to display that content within the platform.

You are solely responsible for the content you post. We may remove any content that violates these Terms or applicable law.`,
  },
  {
    title: "8. INTELLECTUAL PROPERTY",
    body: "The App, its design, logos, and software are owned by or licenced to Indaba Cares (Pty) Ltd. Nothing in these Terms grants you ownership of any intellectual property rights in the App.",
  },
  {
    title: "9. AVAILABILITY",
    body: "We aim to keep the App available at all times but do not guarantee uninterrupted access. We may suspend, modify, or discontinue the App or any features at any time with or without notice.",
  },
  {
    title: "10. LIMITATION OF LIABILITY",
    body: "To the maximum extent permitted by law, Indaba Cares (Pty) Ltd is not liable for any indirect, incidental, special, or consequential damages arising from your use of the App, including lost points, unavailable rewards, or data loss.",
  },
  {
    title: "11. ACCOUNT TERMINATION",
    body: "Your access to the App is tied to your employment. Your employer may deactivate your account at any time, including upon termination of your employment. You may request deletion of your account and personal data at any time via Settings → Delete Account.",
  },
  {
    title: "12. CHANGES TO THESE TERMS",
    body: "We may update these Terms from time to time. Significant changes will be communicated via an in-app notification. Continued use of the App after the updated Terms take effect constitutes your acceptance.",
  },
  {
    title: "13. GOVERNING LAW & JURISDICTION",
    body: "These Terms are governed by the laws of the Republic of South Africa. Any disputes will be subject to the jurisdiction of the South African courts.",
  },
  {
    title: "14. COMPANY & CONTACT DETAILS",
    body: `Indaba Cares (Pty) Ltd
Republic of South Africa
legal@indabacares.com`,
  },
];

export default function IndabaCaresTermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />

      <div className="mt-8 mb-10 text-center">
        <p className="text-[#a78bfa] font-bold text-sm tracking-widest uppercase mb-2">IndabaCares</p>
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm">
          Terms &amp; Conditions · Usage Policy
        </p>
        <p className="text-white/30 text-xs mt-1">
          Owner &amp; Operator: Indaba Cares (Pty) Ltd · Republic of South Africa
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title} className="border-b border-white/5 pb-8 last:border-0">
            <h2 className="text-[#a78bfa] font-bold text-sm mb-3">{s.title}</h2>
            <p className="text-white/55 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 rounded-2xl border border-white/10 bg-white/5 text-center">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Indaba Cares (Pty) Ltd · Republic of South Africa
          <br />
          <a href="mailto:legal@indabacares.com" className="text-[#a78bfa] hover:underline">
            legal@indabacares.com
          </a>
        </p>
      </div>
    </div>
  );
}
