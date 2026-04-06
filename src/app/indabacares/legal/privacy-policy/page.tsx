import BackButton from "@/components/BackButton";

const sections = [
  {
    title: "1. INTRODUCTION",
    body: `IndabaCares ("we", "our", or "the App") is an employee recognition and engagement platform operated on behalf of your employer (the hotel or hospitality group that has licensed IndabaCares). This Privacy Policy explains what personal data we collect, why we collect it, how it is used, and your rights regarding that data.

By using IndabaCares you confirm that you have read and understood this policy. If you have any questions, contact us at privacy@indabacares.com.`,
  },
  {
    title: "2. WHO CONTROLS YOUR DATA",
    body: "Your employer is the primary data controller for the personal data held in IndabaCares. Indaba Cares (Pty) Ltd acts as a data processor on your employer's behalf. Queries about how your employer manages your data should be directed to your HR department.",
  },
  {
    title: "3. DATA WE COLLECT",
    content: [
      {
        subtitle: "3.1 Account & Identity",
        body: "Full name and employee code (assigned by your employer), department and hotel/property, profile photograph (optional, uploaded by you), and role (employee, manager, administrator).",
      },
      {
        subtitle: "3.2 Activity Data",
        body: "Recognition posts you send and receive (message, badge, timestamp), reactions and comments on recognition posts, points earned, awarded, and redeemed, reward redemption requests and their status, skill ratings you submit or receive from colleagues, chat messages sent in the hotel chat channel, and badges and achievements earned.",
      },
      {
        subtitle: "3.3 Mood Data",
        body: "Daily mood check-in (a 5-level emoji scale) and an optional free-text note accompanying the mood entry. Individual mood entries are private. Aggregated, anonymised mood trends may be shared with your hotel's management.",
      },
      {
        subtitle: "3.4 Device & Technical Data",
        body: "Push notification token (Expo push token for your device), device platform (iOS or Android), app version and session timestamps, and IP address (captured by server logs for rate limiting and security).",
      },
      {
        subtitle: "3.5 Data We Do NOT Collect",
        body: "Passwords — your password is hashed server-side using bcrypt and is never stored in plain text or transmitted after entry. Location data — we do not access your GPS or location at any time. Contacts — we do not access your phone's contact list. Microphone or audio — we do not record audio.",
      },
    ],
  },
  {
    title: "4. HOW WE USE YOUR DATA",
    body: `• To operate the recognition, rewards, and engagement features of the App
• To authenticate your identity and maintain your session securely
• To deliver push notifications about recognitions, rewards, and updates
• To display your profile, points balance, and achievements
• To generate leaderboard rankings and anonymised analytics for your employer
• To detect and prevent fraud, abuse, or security threats
• To comply with applicable law and legal obligations`,
  },
  {
    title: "5. LEGAL BASIS FOR PROCESSING",
    body: `We process your personal data on the following bases:

• Contract: Processing is necessary to provide the services described in your employer's agreement with IndabaCares.
• Legitimate interests: Security monitoring, fraud prevention, and service improvement.
• Legal obligation: Where required by applicable law (including POPIA and GDPR where applicable).`,
  },
  {
    title: "6. DATA SHARING",
    body: `We do not sell your personal data. We may share your data with:

• Your employer — management and HR staff who administer the platform have access to recognition activity, points, and aggregated mood data.
• Supabase (infrastructure provider) — our database, storage, and backend are hosted on Supabase. Data is stored in secure, access-controlled cloud infrastructure.
• Expo (push notification delivery) — your device push token is transmitted to Expo's push notification service to deliver alerts.
• Law enforcement — where required by a valid legal order.`,
  },
  {
    title: "7. DATA RETENTION",
    body: "Your personal data is retained for as long as your employment record is active in the App, plus a period determined by your employer's data retention policy (typically 12 months after account deactivation). Push notification tokens are removed when you log out of the App.",
  },
  {
    title: "8. DATA SECURITY",
    body: `• All data is transmitted over HTTPS (TLS 1.2+).
• Session tokens are stored in your device's secure enclave (iOS Keychain / Android Keystore) — not in unencrypted app storage.
• Passwords are hashed server-side using bcrypt with a cost factor suitable for production use.
• Hotel-level data isolation is enforced at the database layer — employees can only access data belonging to their own hotel.
• Rate limiting is applied to authentication and sensitive actions.`,
  },
  {
    title: "9. YOUR RIGHTS UNDER POPIA",
    body: `Depending on your jurisdiction, you may have the right to:

• Access a copy of the personal data we hold about you.
• Correct inaccurate personal data (contact your HR administrator or us directly).
• Delete your account and associated data. Contact privacy@indabacares.com or your HR administrator to request deletion. Note that your employer may be required to retain certain records.
• Object to certain processing activities.
• Portability — request your data in a structured, machine-readable format.

To exercise any of these rights, email us at privacy@indabacares.com with the subject "Data Rights Request".`,
  },
  {
    title: "10. ACCOUNT DELETION",
    body: `You can delete your IndabaCares account directly within the App:

1. Go to Settings → Delete Account.
2. Type the confirmation phrase and enter your password.
3. Tap Delete My Account.

Your personal data (name, photo, mood history, sessions, push tokens, and reaction history) is permanently removed immediately. Recognitions you have sent are anonymised. Pending reward orders are cancelled and points refunded.

Alternatively, you may request deletion by emailing privacy@indabacares.com with the subject "Account Deletion Request". Email requests are processed within 30 days.`,
  },
  {
    title: "11. CHILDREN",
    body: "IndabaCares is intended exclusively for use by employees aged 18 and over. We do not knowingly collect data from individuals under 18.",
  },
  {
    title: "12. UPDATES TO THIS POLICY",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes via an in-app announcement. Continued use of the App after the updated policy takes effect constitutes your acceptance.",
  },
  {
    title: "13. CONTACT",
    body: "For any privacy-related questions or requests: privacy@indabacares.com",
  },
];

export default function IndabaCaresPrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />

      <div className="mt-8 mb-10 text-center">
        <p className="text-[#a78bfa] font-bold text-sm tracking-widest uppercase mb-2">IndabaCares</p>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm">Indaba Cares (Pty) Ltd · Effective Date: April 2025</p>
      </div>

      <p className="text-white/60 leading-relaxed mb-10 border border-white/10 bg-white/5 rounded-2xl p-5 text-sm">
        Indaba Cares (Pty) Ltd ("IndabaCares", "we", "us", or "our"), a company registered in the Republic of South Africa,
        owns and operates the IndabaCares mobile application ("the App"). This Privacy Policy explains how personal information
        is collected, processed, and protected when users interact with the App. By downloading, accessing, or using the App,
        users consent to the practices described in this Privacy Policy.
      </p>

      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-[#a78bfa] font-bold text-sm mb-3">{s.title}</h2>
            {"content" in s && s.content ? (
              <div className="flex flex-col gap-4">
                {s.content.map((sub) => (
                  <div key={sub.subtitle}>
                    <p className="text-white font-semibold text-sm mb-1">{sub.subtitle}</p>
                    <p className="text-white/55 text-sm leading-relaxed whitespace-pre-line">{sub.body}</p>
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
          © {new Date().getFullYear()} Indaba Cares (Pty) Ltd · Republic of South Africa
          <br />
          <a href="mailto:privacy@indabacares.com" className="text-[#a78bfa] hover:underline">
            privacy@indabacares.com
          </a>
        </p>
      </div>
    </div>
  );
}
