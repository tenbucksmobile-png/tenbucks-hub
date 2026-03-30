"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="fixed top-20 left-6 z-30 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group"
    >
      <span className="w-9 h-9 rounded-full border border-white/10 bg-gray-950/80 backdrop-blur-sm group-hover:bg-white/15 flex items-center justify-center transition-colors shadow-lg">
        <ArrowLeft size={16} />
      </span>
    </button>
  );
}
