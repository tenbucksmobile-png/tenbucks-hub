"use client";
import Image from "next/image";
import { X } from "lucide-react";

const portals = [
  {
    name: "Fizzog",
    description: "Be Discovered",
    url: "https://admin-fizzog.tenbucks-mobile.co.za",
    logo: "/Fizzog.png",
    color: "bg-blue-600",
  },
  {
    name: "MaisonClaudia",
    description: "Coming soon",
    url: "#",
    logo: "/MaisonClaudia.png",
    color: "bg-purple-600",
  },
  {
    name: "SpaSynergy",
    description: "Coming soon",
    url: "#",
    logo: "/SpaSynergy.png",
    color: "bg-orange-600",
  },
];

export default function AdminLoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Select Admin Portal</h2>
          <button onClick={onClose} className="text-white/50 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {portals.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={p.url === "#" ? (e) => e.preventDefault() : undefined}
              className={`flex items-center gap-4 p-4 rounded-xl transition bg-white/5 border border-white/10 ${
                p.url === "#"
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-white/10 cursor-pointer"
              }`}
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src={p.logo} alt={p.name} width={40} height={40} className="object-contain p-1 w-full h-full" />
              </div>
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-white/50">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
