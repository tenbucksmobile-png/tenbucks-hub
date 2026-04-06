import Link from "next/link";
import { ShieldCheck, FileText } from "lucide-react";
import BackButton from "@/components/BackButton";

const docs = [
  {
    label: "Privacy Policy",
    desc: "How we collect, process, and protect your data",
    href: "/indabacares/legal/privacy-policy",
    icon: ShieldCheck,
    color: "bg-[#7C3AED]/20 text-[#a78bfa]",
  },
  {
    label: "Terms of Service",
    desc: "Terms & Conditions governing use of IndabaCares",
    href: "/indabacares/legal/terms",
    icon: FileText,
    color: "bg-emerald-600/20 text-emerald-400",
  },
];

export default function IndabaCaresLegalPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <BackButton />

      <div className="mt-8 mb-10">
        <h1 className="text-3xl font-bold mb-2">Legal</h1>
        <p className="text-white/50">
          IndabaCares is owned and operated by Indaba Cares (Pty) Ltd, registered in the Republic of South Africa.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {docs.map((doc) => {
          const Icon = doc.icon;
          return (
            <Link key={doc.label} href={doc.href}>
              <div className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${doc.color}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold">{doc.label}</p>
                  <p className="text-sm text-white/40 mt-0.5">{doc.desc}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="text-white/25 text-xs mt-10 text-center">
        © {new Date().getFullYear()} Indaba Cares (Pty) Ltd · Republic of South Africa
      </p>
    </div>
  );
}
