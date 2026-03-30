import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star, Zap, Eye, Video, FileText, Search } from "lucide-react";
import BackButton from "@/components/BackButton";

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[200px]">
      {/* Phone shell */}
      <div className="relative rounded-[2.5rem] border-[6px] border-white/20 bg-[#0a1628] shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-10" />
        <Image
          src={src}
          alt={alt}
          width={400}
          height={800}
          className="w-full h-auto block"
        />
      </div>
      {/* Glow */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-[#f5a623]/10 blur-2xl -z-10 scale-110" />
    </div>
  );
}

export default function FizzogAboutPage() {
  return (
    <div className="bg-[#0a1220] text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <BackButton />
      </div>

      {/* ── HERO ── */}
      <section className="relative max-w-5xl mx-auto px-6 pt-8 pb-24 text-center">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#f5a623]/10 rounded-full blur-[120px] -z-0" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 text-[#f5a623] text-sm font-medium mb-8">
            <Zap size={14} />
            The Future of Talent Discovery
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl shadow-[#f5a623]/20">
              <Image src="/Fizzog.png" alt="Fizzog" width={96} height={96} className="object-contain p-1 w-full h-full" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-6">
            Stop Searching.<br />
            <span className="text-[#f5a623]">Start Discovering.</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Fizzog connects exceptional people with the organisations that deserve them —
            through video, personality, and precision. No noise. No guesswork. Just the right fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#f5a623] text-[#0a1220] font-bold text-base hover:bg-[#e8962a] transition"
            >
              Download on the App Store
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 text-white font-bold text-base hover:bg-white/10 transition"
            >
              Get it on Google Play
            </a>
          </div>
        </div>

        {/* Hero phones */}
        <div className="relative z-10 mt-20 flex justify-center items-end gap-6 sm:gap-10">
          <div className="hidden sm:block translate-y-8 opacity-70 scale-90">
            <PhoneFrame src="/fizzog-screen-shortlist.png" alt="Employer shortlists" />
          </div>
          <div className="z-10">
            <PhoneFrame src="/fizzog-screen-discovered.png" alt="Discovered candidate" />
          </div>
          <div className="hidden sm:block translate-y-8 opacity-70 scale-90">
            <PhoneFrame src="/fizzog-screen-candidate.png" alt="Candidate profile" />
          </div>
        </div>
      </section>

      {/* ── TAGLINE BREAK ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "Video-First", label: "See the person, not just the paper" },
              { stat: "AI-Powered", label: "Smart discovery that finds the right match" },
              { stat: "Be Discovered", label: "Let your talent speak for itself" },
            ].map((item) => (
              <div key={item.stat}>
                <p className="text-2xl font-black text-[#f5a623] mb-1">{item.stat}</p>
                <p className="text-sm text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR CANDIDATES ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest mb-4">For Talent</p>
            <h2 className="text-4xl font-black leading-tight mb-6">
              Your story is bigger<br />than a two-page CV.
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Fizzog gives you a stage. Build a complete professional presence — your photo,
              your summary, your credentials — and let your <span className="text-white font-semibold">ProPitch video</span> do
              the talking. The right people will find you.
            </p>

            <div className="space-y-4">
              {[
                { icon: Video, label: "ProPitch Video", desc: "45 seconds to make your mark" },
                { icon: FileText, label: "Smart CV", desc: "Upload and let AI enhance it" },
                { icon: Star, label: "Boost Your Profile", desc: "Rise to the top of every search" },
                { icon: Eye, label: "See Who's Watching", desc: "Track views and shortlist activity" },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#f5a623]/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#f5a623]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{f.label}</p>
                      <p className="text-xs text-white/40">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneFrame src="/fizzog-screen-candidate.png" alt="Candidate profile" />
          </div>
        </div>
      </section>

      {/* ── PROPITCH FEATURE ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 sm:order-1">
              <PhoneFrame src="/fizzog-screen-propitch.png" alt="ProPitch video upload" />
            </div>
            <div className="order-1 sm:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                <Play size={14} className="fill-red-400" />
                ProPitch — Your 45-Second Edge
              </div>
              <h2 className="text-4xl font-black leading-tight mb-6">
                First impressions<br />
                <span className="text-[#f5a623]">happen in seconds.</span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                A ProPitch video lets talent speak directly to the people who matter.
                Personality, confidence, communication — all visible before a single
                conversation takes place. Organisations find their next standout performer
                before anyone else even knows they exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR EMPLOYERS ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#f5a623] text-sm font-semibold uppercase tracking-widest mb-4">For Organisations</p>
            <h2 className="text-4xl font-black leading-tight mb-6">
              Describe who you need.<br />
              <span className="text-[#f5a623]">We find them.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Tell Fizzog exactly who you're looking for — in plain language. Our AI surfaces
              the most relevant profiles instantly. Browse their video, review their credentials,
              and shortlist the ones that fit. Fast. Precise. No intermediaries.
            </p>

            <div className="space-y-4">
              {[
                { icon: Search, label: "AI-Powered Discovery", desc: "Natural language talent search" },
                { icon: Play, label: "Watch Before You Commit", desc: "ProPitch videos before unlocking CVs" },
                { icon: FileText, label: "Shortlist Management", desc: "Build multiple shortlists by role" },
                { icon: Zap, label: "Instant Access", desc: "Unlock CVs on demand, no delays" },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#f5a623]/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#f5a623]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{f.label}</p>
                      <p className="text-xs text-white/40">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-6 items-end">
            <div className="scale-90 opacity-80 translate-y-6">
              <PhoneFrame src="/fizzog-screen-discover.png" alt="Discover talent" />
            </div>
            <PhoneFrame src="/fizzog-screen-shortlist.png" alt="Shortlist management" />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">How It Works</h2>
            <p className="text-white/50 text-lg">Two sides. One platform. Zero friction.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            {/* Talent side */}
            <div>
              <p className="text-[#f5a623] font-bold text-sm uppercase tracking-widest mb-6">Talent</p>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Build Your Profile", desc: "Add your photo, professional summary, experience and qualifications." },
                  { step: "02", title: "Record Your ProPitch", desc: "A 45-second video introduction — your personality in motion." },
                  { step: "03", title: "Upload Your CV", desc: "Let AI enhance it. Get discovered with a stronger story." },
                  { step: "04", title: "Go Live", desc: "Your profile is now visible to organisations actively searching for talent like you." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="text-3xl font-black text-[#f5a623]/30 leading-none w-10 flex-shrink-0">{s.step}</span>
                    <div>
                      <p className="font-bold mb-1">{s.title}</p>
                      <p className="text-sm text-white/50">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employer side */}
            <div>
              <p className="text-[#f5a623] font-bold text-sm uppercase tracking-widest mb-6">Organisations</p>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Create Your Profile", desc: "Set up your company presence with logo, summary and industry." },
                  { step: "02", title: "Create a Shortlist", desc: "Define the role — title, department, contract type and description." },
                  { step: "03", title: "Discover Talent", desc: "Describe your ideal person in plain language. Fizzog surfaces the best matches." },
                  { step: "04", title: "Unlock & Engage", desc: "Watch ProPitch videos, unlock CVs, and shortlist the ones that fit." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="text-3xl font-black text-[#f5a623]/30 leading-none w-10 flex-shrink-0">{s.step}</span>
                    <div>
                      <p className="font-bold mb-1">{s.title}</p>
                      <p className="text-sm text-white/50">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE MOMENT ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <PhoneFrame src="/fizzog-screen-live.png" alt="Profile is now live" />
          </div>
          <div>
            <h2 className="text-4xl font-black leading-tight mb-6">
              The moment<br />
              <span className="text-[#f5a623]">everything changes.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              When your profile goes live on Fizzog, you don't send applications into the void.
              You become visible to every organisation actively looking for someone exactly like you.
              That's not luck — that's positioning.
            </p>
            <p className="text-white/60 leading-relaxed">
              <span className="text-white font-semibold">"Be Discovered"</span> isn't a tagline. It's a shift in power —
              from chasing opportunities to having them find you.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5a623]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#f5a623]/10 rounded-full blur-[100px] -z-0" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl shadow-[#f5a623]/20">
              <Image src="/Fizzog.png" alt="Fizzog" width={64} height={64} className="object-contain p-1 w-full h-full" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to be<br />
            <span className="text-[#f5a623]">Discovered?</span>
          </h2>
          <p className="text-white/50 mb-10 text-lg">
            Join Fizzog today. Build your profile, record your ProPitch, and let the right
            organisations find you — on your terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#f5a623] text-[#0a1220] font-bold text-base hover:bg-[#e8962a] transition"
            >
              App Store
              <ArrowRight size={16} />
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 text-white font-bold text-base hover:bg-white/10 transition"
            >
              Google Play
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-center text-sm text-white/30">
            <Link href="/fizzog/support" className="hover:text-white transition">Support</Link>
            <Link href="/fizzog/contact" className="hover:text-white transition">Contact</Link>
            <span>© {new Date().getFullYear()} Ten Bucks (Pty) Ltd</span>
          </div>
        </div>
      </section>

    </div>
  );
}
