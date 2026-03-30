import Link from "next/link";
import BackButton from "@/components/BackButton";

const channels = [
  {
    label: "General Support",
    email: "support@tenbucks-mobile.co.za",
    desc: "Help with your account or the app",
  },
  {
    label: "Partnerships",
    email: "hello@tenbucks-mobile.co.za",
    desc: "Business enquiries and partnerships",
  },
  {
    label: "Media",
    email: "media@tenbucks-mobile.co.za",
    desc: "Press and media enquiries",
  },
  {
    label: "Privacy",
    email: "privacy@tenbucks-mobile.co.za",
    desc: "POPIA and data privacy requests",
  },
];

export default function IndabaCaresContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <p className="text-white/50 mb-10">Get in touch with the IndabaCares team.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {channels.map((c) => (
          <a
            key={c.label}
            href={`mailto:${c.email}`}
            className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <p className="font-semibold mb-1">{c.label}</p>
            <p className="text-sm text-emerald-400 mb-2">{c.email}</p>
            <p className="text-sm text-white/40">{c.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
