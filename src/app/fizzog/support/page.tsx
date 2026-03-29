import Link from "next/link";

const faqs = [
  {
    q: "How do I upload my CV?",
    a: "Go to your candidate profile, tap 'Upload CV', and select a PDF from your device.",
  },
  {
    q: "How do I record a ProPitch video?",
    a: "From your profile, tap 'ProPitch', allow camera access, and record up to 60 seconds.",
  },
  {
    q: "How do employers find me?",
    a: "Employers search and filter candidates by skills and location. A complete profile increases your visibility.",
  },
  {
    q: "How do I contact an employer?",
    a: "Employers initiate contact after shortlisting you. Keep your profile up to date to attract interest.",
  },
  {
    q: "Is Fizzog free for candidates?",
    a: "Yes. Fizzog is free for job seekers. Employers pay to unlock candidate CVs.",
  },
];

export default function FizzogSupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/fizzog" className="text-sm text-white/40 hover:text-white mb-8 inline-block">
        ← Fizzog
      </Link>
      <h1 className="text-3xl font-bold mb-2">Support</h1>
      <p className="text-white/50 mb-10">Frequently asked questions for Fizzog.</p>

      <div className="flex flex-col gap-6">
        {faqs.map((faq) => (
          <div key={faq.q} className="border-b border-white/10 pb-6">
            <p className="font-semibold mb-2">{faq.q}</p>
            <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 rounded-xl bg-white/5 border border-white/10">
        <p className="font-medium mb-1">Still need help?</p>
        <p className="text-sm text-white/50">
          Email us at{" "}
          <a href="mailto:support@tenbucks-mobile.co.za" className="text-blue-400 hover:underline">
            support@tenbucks-mobile.co.za
          </a>
        </p>
      </div>
    </div>
  );
}
