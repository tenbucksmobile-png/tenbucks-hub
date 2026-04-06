import Link from "next/link";
import Image from "next/image";
import { LifeBuoy, Mail, Apple, PlayCircle, Scale } from "lucide-react";
import BackButton from "@/components/BackButton";

const sections = [
  {
    label: "Support",
    desc: "FAQs & help",
    href: "/indabacares/support",
    icon: LifeBuoy,
    external: false,
  },
  {
    label: "Contact",
    desc: "Get in touch",
    href: "/indabacares/contact",
    icon: Mail,
    external: false,
  },
  {
    label: "Legal",
    desc: "Privacy Policy & Terms",
    href: "/indabacares/legal",
    icon: Scale,
    external: false,
  },
  {
    label: "App Store",
    desc: "Coming soon",
    href: "https://apps.apple.com",
    icon: Apple,
    external: true,
    disabled: true,
  },
  {
    label: "Google Play",
    desc: "Coming soon",
    href: "https://play.google.com",
    icon: PlayCircle,
    external: true,
    disabled: true,
  },
];

export default function IndabaCaresPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <BackButton />

      {/* Header with logo */}
      <div className="flex items-center gap-5 mb-6">
        <div className="w-20 h-20 rounded-3xl overflow-hidden flex-shrink-0">
          <Image src="/IndabaCares.png" alt="IndabaCares" width={80} height={80} className="object-contain p-1 w-full h-full" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">IndabaCares</h1>
          <p className="text-white/50 mt-1">Employee wellness & recognition.</p>
        </div>
      </div>

      <p className="text-white/60 leading-relaxed mb-10">
        IndabaCares is an employee engagement and wellness platform that helps companies recognise
        their people, track mood, manage rewards, and build a culture of appreciation.
      </p>

      {/* List */}
      <div className="flex flex-col gap-3">
        {sections.map((item) => {
          const Icon = item.icon;
          const inner = (
            <div className={`group flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 transition ${item.disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-white/10 cursor-pointer"}`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm text-white/40 mt-0.5">{item.desc}</p>
              </div>
            </div>
          );

          if (item.disabled) return <div key={item.label}>{inner}</div>;
          return item.external ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <Link key={item.label} href={item.href}>
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
