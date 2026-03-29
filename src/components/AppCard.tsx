import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {
  name: string;
  tagline: string;
  href: string;
  logo?: string;
  initial: string;
  color: string;
  disabled?: boolean;
};

export default function AppCard({ name, tagline, href, logo, initial, color, disabled }: Props) {
  const content = (
    <div
      className={`group flex flex-row items-center gap-5 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center">
        {logo ? (
          <Image src={logo} alt={name} width={56} height={56} className="object-contain p-1 w-full h-full" />
        ) : (
          <div className={`w-full h-full ${color} flex items-center justify-center text-2xl font-bold`}>
            {initial}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-white/50 mt-0.5">{tagline}</p>
      </div>
      {!disabled && (
        <ArrowRight size={18} className="text-white/30 group-hover:text-white transition flex-shrink-0" />
      )}
    </div>
  );

  if (disabled) return content;
  return <Link href={href}>{content}</Link>;
}
