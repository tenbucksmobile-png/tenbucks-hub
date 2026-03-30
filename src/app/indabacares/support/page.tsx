import Link from "next/link";
import BackButton from "@/components/BackButton";

const faqs = [
  {
    q: "How do I recognise a colleague?",
    a: "Tap the 'Recognise' button on your home screen, select a colleague, choose a company value, and send your recognition.",
  },
  {
    q: "How do I redeem my rewards?",
    a: "Go to 'Rewards' in the app, browse available rewards, and tap 'Redeem' on your chosen reward.",
  },
  {
    q: "How is my mood data used?",
    a: "Mood data is anonymised and aggregated. Individual responses are never shared with your employer.",
  },
  {
    q: "How do I update my profile?",
    a: "Tap your avatar in the top-right corner and select 'Edit Profile'.",
  },
  {
    q: "Who do I contact if the app isn't working?",
    a: "Email support@tenbucks-mobile.co.za and include your device model and OS version.",
  },
];

export default function IndabaCaresSupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <BackButton />
      <h1 className="text-3xl font-bold mb-2">Support</h1>
      <p className="text-white/50 mb-10">Frequently asked questions for IndabaCares.</p>

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
          <a href="mailto:support@tenbucks-mobile.co.za" className="text-emerald-400 hover:underline">
            support@tenbucks-mobile.co.za
          </a>
        </p>
      </div>
    </div>
  );
}
