import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  name: string;
  tagline: string;
  href: string;
  color: string;
  initial: string;
  disabled?: boolean;
};

export default function AppCard({ name, tagline, href, color, initial, disabled }: Props) {
  const content = (
    <div
      className={`group flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div
        className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-2xl font-bold`}
      >
        {initial}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-white/50 mt-1">{tagline}</p>
      </div>
      {!disabled && (
        <div className="flex items-center gap-1 text-sm text-white/60 group-hover:text-white transition">
          Learn more <ArrowRight size={14} />
        </div>
      )}
    </div>
  );

  if (disabled) return content;
  return <Link href={href}>{content}</Link>;
}
