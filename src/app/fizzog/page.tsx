import Link from "next/link";
import Image from "next/image";
import { Info, LifeBuoy, Apple, PlayCircle } from "lucide-react";
import BackButton from "@/components/BackButton";

const sections = [
  {
    label: "About",
    desc: "About the app",
    href: "/fizzog/about",
    icon: Info,
    external: false,
  },
  {
    label: "Support",
    desc: "FAQs & help",
    href: "/fizzog/support",
    icon: LifeBuoy,
    external: false,
  },
  {
    label: "App Store",
    desc: "Download on iOS",
    href: "https://apps.apple.com",
    icon: Apple,
    external: true,
  },
  {
    label: "Google Play",
    desc: "Download on Android",
    href: "https://play.google.com",
    icon: PlayCircle,
    external: true,
  },
];

export default function FizzogPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <BackButton />

      {/* Header with logo */}
      <div className="flex items-center gap-5 mb-6">
        <div className="w-20 h-20 rounded-3xl overflow-hidden flex-shrink-0">
          <Image src="/Fizzog.png" alt="Fizzog" width={80} height={80} className="object-contain p-1 w-full h-full" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Fizzog</h1>
          <p className="text-white/50 mt-1">Be Discovered</p>
        </div>
      </div>

      <p className="text-white/60 leading-relaxed mb-10">
        Fizzog is a next-generation job-matching platform that lets candidates upload their CV,
        record a ProPitch video, and get discovered by employers — all from their mobile device.
      </p>

      {/* List */}
      <div className="flex flex-col gap-3">
        {sections.map((item) => {
          const Icon = item.icon;
          const inner = (
            <div className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm text-white/40 mt-0.5">{item.desc}</p>
              </div>
            </div>
          );

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
