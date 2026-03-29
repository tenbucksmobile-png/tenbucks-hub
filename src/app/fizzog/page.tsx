import Link from "next/link";

const sections = [
  { label: "About", href: "/fizzog", desc: "About the app" },
  { label: "Support", href: "/fizzog/support", desc: "FAQs & help" },
  { label: "Contact", href: "/fizzog/contact", desc: "Get in touch" },
];

export default function FizzogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-white/40 hover:text-white mb-8 inline-block">
        ← Back
      </Link>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold">
          F
        </div>
        <div>
          <h1 className="text-3xl font-bold">Fizzog</h1>
          <p className="text-white/50">Connect. Pitch. Get Hired.</p>
        </div>
      </div>

      <p className="text-white/60 leading-relaxed mb-10">
        Fizzog is a next-generation job-matching platform that lets candidates upload their CV,
        record a ProPitch video, and get discovered by employers — all from their mobile device.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {sections.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <p className="font-semibold">{item.label}</p>
            <p className="text-sm text-white/40 mt-1">{item.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium"
        >
          App Store
        </a>
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium"
        >
          Google Play
        </a>
      </div>
    </div>
  );
}
