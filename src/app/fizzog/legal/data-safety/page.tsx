import BackButton from "@/components/BackButton";
import { ShieldCheck, Lock, Eye, Trash2, UserCheck, Server, Scale } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Lawful Processing",
    color: "bg-blue-600/20 text-blue-400",
    body: "Personal information is processed lawfully, minimally, and transparently. We collect only what is necessary for the platform to function and never sell your data to third parties.",
  },
  {
    icon: Eye,
    title: "What We Collect",
    color: "bg-[#f5a623]/20 text-[#f5a623]",
    body: "We collect: full name, email address, professional profile information, profile photograph, CV documents, ProPitch video, skills and qualifications, device/technical data (OS, app version, IP address), and usage activity.",
  },
  {
    icon: Lock,
    title: "How We Protect It",
    color: "bg-purple-600/20 text-purple-400",
    body: "We implement encrypted communication protocols, controlled system access, and platform monitoring. All data is stored securely via Supabase infrastructure. No digital system guarantees absolute security, but we take all reasonable precautions.",
  },
  {
    icon: Server,
    title: "Data Retention",
    color: "bg-emerald-600/20 text-emerald-400",
    body: "Your data is retained only while your account is active or as required by law. Inactive accounts may be removed after extended inactivity. You may request deletion of your data at any time.",
  },
  {
    icon: UserCheck,
    title: "Your Rights Under POPIA",
    color: "bg-pink-600/20 text-pink-400",
    body: "Under the Protection of Personal Information Act, 4 of 2013 (POPIA), you have the right to: access your personal data, correct inaccurate information, request deletion of your data, and withdraw consent to data processing where applicable.",
  },
  {
    icon: Trash2,
    title: "Account Deletion",
    color: "bg-red-600/20 text-red-400",
    body: "You may delete your account at any time from within the Fizzog® app. Deletion requests are subject to a 7-day grace period before permanent removal. All associated personal data is removed upon confirmed deletion.",
  },
  {
    icon: Scale,
    title: "Third-Party Services",
    color: "bg-orange-600/20 text-orange-400",
    body: "Fizzog® uses third-party services including Supabase (secure cloud storage), Google AdMob (advertising), and AI processing services (optional photo enhancement only). These providers process data solely to deliver their respective services.",
  },
];

export default function DataSafetyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />

      <div className="mt-8 mb-10 text-center">
        <p className="text-[#f5a623] font-bold text-sm tracking-widest uppercase mb-2">Fizzog®</p>
        <h1 className="text-3xl font-bold mb-2">Data Safety &amp; Transparency</h1>
        <p className="text-white/40 text-sm">
          How Fizzog® handles, protects, and respects your personal information
        </p>
      </div>

      <div className="p-5 rounded-2xl border border-white/10 bg-white/5 mb-10">
        <p className="text-white/55 text-sm leading-relaxed">
          Ten Bucks (Pty) Ltd is a <span className="text-white font-semibold">Responsible Party</span> as defined
          under the Protection of Personal Information Act, 4 of 2013 (POPIA). We are committed to processing
          your personal information lawfully, transparently, and only for the purposes described below.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="flex gap-4 p-5 rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${p.color}`}>
                <Icon size={18} />
              </div>
              <div>
                <p className="font-semibold mb-1">{p.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 p-5 rounded-2xl border border-[#f5a623]/20 bg-[#f5a623]/5">
        <p className="text-sm text-white/70 leading-relaxed">
          <span className="text-[#f5a623] font-bold">Exercise your rights —</span> To access, correct, or
          delete your personal data, or to withdraw consent, contact us at{" "}
          <a href="mailto:privacy@tenbucks-mobile.co.za" className="text-[#f5a623] hover:underline">
            privacy@tenbucks-mobile.co.za
          </a>
          . We will respond within a reasonable timeframe in accordance with POPIA obligations.
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} Ten Bucks (Pty) Ltd · Republic of South Africa
        </p>
      </div>
    </div>
  );
}
