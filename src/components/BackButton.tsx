"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group"
    >
      <span className="w-8 h-8 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/15 flex items-center justify-center transition-colors">
        <ArrowLeft size={15} />
      </span>
      Back
    </button>
  );
}
