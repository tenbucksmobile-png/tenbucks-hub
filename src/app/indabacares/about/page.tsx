import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, Trophy, Gift, Zap, Users, BarChart3, Sparkles } from "lucide-react";
import BackButton from "@/components/BackButton";

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[200px]">
      <div className="relative rounded-[2.5rem] border-[6px] border-white/20 bg-[#100a2e] shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-2xl z-10" />
        <Image
          src={src}
          alt={alt}
          width={400}
          height={800}
          className="w-full h-auto block"
        />
      </div>
      <div className="absolute inset-0 rounded-[2.5rem] bg-[#7c3aed]/15 blur-2xl -z-10 scale-110" />
    </div>
  );
}

export default function IndabaCaresAboutPage() {
  return (
    <div className="bg-[#0d0a1f] text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <BackButton />
      </div>

      {/* ── HERO ── */}
      <section className="relative max-w-5xl mx-auto px-6 pt-8 pb-24 text-center">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#7c3aed]/15 rounded-full blur-[120px] -z-0" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/15 text-[#a78bfa] text-sm font-medium mb-8">
            <Sparkles size={14} />
            Employee Wellness & Recognition
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl shadow-[#7c3aed]/30">
              <Image src="/IndabaCares.png" alt="IndabaCares" width={96} height={96} className="object-contain p-1 w-full h-full" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-6">
            Recognise People.<br />
            <span className="text-[#a78bfa]">Build Culture.</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            IndabaCares gives teams a platform to celebrate one another, track wellbeing,
            climb leaderboards, and earn real rewards — building a workplace people actually want to show up for.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#7c3aed] text-white font-bold text-base hover:bg-[#6d28d9] transition"
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
            <PhoneFrame src="/ic-screen-4.png" alt="Recognition feed" />
          </div>
          <div className="z-10">
            <PhoneFrame src="/ic-screen-2.png" alt="Employee profile" />
          </div>
          <div className="hidden sm:block translate-y-8 opacity-70 scale-90">
            <PhoneFrame src="/ic-screen-3.png" alt="Send recognition" />
          </div>
        </div>
      </section>

      {/* ── TAGLINE BREAK ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "Peer Recognition", label: "Celebrate the people who make a difference" },
              { stat: "Real Rewards", label: "Points redeemable for retail & hotel vouchers" },
              { stat: "Live Leaderboard", label: "Monthly rankings that inspire healthy competition" },
            ].map((item) => (
              <div key={item.stat}>
                <p className="text-2xl font-black text-[#a78bfa] mb-1">{item.stat}</p>
                <p className="text-sm text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR EMPLOYEES ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#a78bfa] text-sm font-semibold uppercase tracking-widest mb-4">For Employees</p>
            <h2 className="text-4xl font-black leading-tight mb-6">
              Your effort deserves<br />to be seen.
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              IndabaCares gives every employee a voice and a presence. Track your recognitions,
              collect achievement badges, and watch your points grow — all in one place.
            </p>

            <div className="space-y-4">
              {[
                { icon: Heart, label: "Send & Receive Recognition", desc: "Celebrate colleagues with meaningful shout-outs" },
                { icon: Star, label: "Earn Achievement Badges", desc: "Team Player, Leadership, You Legend and more" },
                { icon: Trophy, label: "Climb the Leaderboard", desc: "Monthly rankings across Employees & Legends" },
                { icon: Gift, label: "Redeem Real Rewards", desc: "Turn points into Steers, KFC, Vodacom & more" },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#a78bfa]" />
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
            <PhoneFrame src="/ic-screen-2.png" alt="Employee profile and achievements" />
          </div>
        </div>
      </section>

      {/* ── RECOGNITION FEATURE ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 sm:order-1">
              <PhoneFrame src="/ic-screen-3.png" alt="Appreciate your colleague" />
            </div>
            <div className="order-1 sm:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c3aed]/15 border border-[#7c3aed]/30 text-[#a78bfa] text-sm font-medium mb-6">
                <Sparkles size={14} />
                Peer Recognition — Appreciate Your Colleague
              </div>
              <h2 className="text-4xl font-black leading-tight mb-6">
                One message.<br />
                <span className="text-[#a78bfa]">A lasting impact.</span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                Choose a badge, search for a colleague, and write a message that matters.
                Going the Extra Mile, Customer Excellence, Hospitality Hero — each recognition
                lands on the feed and earns them points. Small gestures build great cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR MANAGERS ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#a78bfa] text-sm font-semibold uppercase tracking-widest mb-4">For Management</p>
            <h2 className="text-4xl font-black leading-tight mb-6">
              A culture dashboard<br />
              <span className="text-[#a78bfa]">in your pocket.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Monitor team engagement, see who's thriving, and reinforce the behaviours
              that define your company values — all from the IndabaCares admin portal.
            </p>

            <div className="space-y-4">
              {[
                { icon: BarChart3, label: "Engagement Analytics", desc: "Track recognition activity across your team" },
                { icon: Users, label: "Team Leaderboards", desc: "Separate views for Employees, Management & Legends" },
                { icon: Star, label: "Reward Management", desc: "Configure voucher catalogues and point values" },
                { icon: Zap, label: "Instant Visibility", desc: "See the feed, reactions, and moods in real time" },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#a78bfa]" />
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
              <PhoneFrame src="/ic-screen-4.png" alt="Recognition feed" />
            </div>
            <PhoneFrame src="/ic-screen-5.png" alt="Leaderboard" />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">How It Works</h2>
            <p className="text-white/50 text-lg">Built for teams. Loved by the people in them.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            {/* Employee side */}
            <div>
              <p className="text-[#a78bfa] font-bold text-sm uppercase tracking-widest mb-6">Employees</p>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Create Your Account", desc: "Register with your employee code and choose your property." },
                  { step: "02", title: "Send Recognition", desc: "Pick a badge, find a colleague, write a message — and hit send." },
                  { step: "03", title: "Earn Points", desc: "Every recognition you give and receive adds to your reward wallet." },
                  { step: "04", title: "Redeem Rewards", desc: "Browse the rewards store and cash out points for real-world vouchers." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="text-3xl font-black text-[#7c3aed]/40 leading-none w-10 flex-shrink-0">{s.step}</span>
                    <div>
                      <p className="font-bold mb-1">{s.title}</p>
                      <p className="text-sm text-white/50">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Management side */}
            <div>
              <p className="text-[#a78bfa] font-bold text-sm uppercase tracking-widest mb-6">Management</p>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Set Up Your Property", desc: "Configure departments, roles, and your team structure." },
                  { step: "02", title: "Define Your Values", desc: "Customise recognition badges to reflect what your culture stands for." },
                  { step: "03", title: "Watch Culture Grow", desc: "Monitor the feed, leaderboard, and engagement in real time." },
                  { step: "04", title: "Drive Retention", desc: "Reward your top performers and reduce turnover through appreciation." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="text-3xl font-black text-[#7c3aed]/40 leading-none w-10 flex-shrink-0">{s.step}</span>
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

      {/* ── REWARDS MOMENT ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid sm:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <PhoneFrame src="/ic-screen-6.png" alt="Rewards store" />
          </div>
          <div>
            <h2 className="text-4xl font-black leading-tight mb-6">
              Points that mean<br />
              <span className="text-[#a78bfa]">something real.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              IndabaCares rewards are drawn from a catalogue of real South African brands —
              Steers, KFC, Vodacom, Pick n Pay, MTN, Checkers. When your team earns recognition,
              they earn something they can actually use.
            </p>
            <p className="text-white/60 leading-relaxed">
              <span className="text-white font-semibold">Recognition without reward is hollow.</span> IndabaCares closes
              the loop — from appreciation to action.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7c3aed]/15 rounded-full blur-[100px] -z-0" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl shadow-[#7c3aed]/30">
              <Image src="/IndabaCares.png" alt="IndabaCares" width={64} height={64} className="object-contain p-1 w-full h-full" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to build a<br />
            <span className="text-[#a78bfa]">culture that cares?</span>
          </h2>
          <p className="text-white/50 mb-10 text-lg">
            Join IndabaCares today. Recognise your people, reward your top performers,
            and build the kind of workplace where everyone wants to stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#7c3aed] text-white font-bold text-base hover:bg-[#6d28d9] transition"
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
            <Link href="/indabacares/support" className="hover:text-white transition">Support</Link>
            <Link href="/indabacares/contact" className="hover:text-white transition">Contact</Link>
            <span>© {new Date().getFullYear()} Ten Bucks (Pty) Ltd</span>
          </div>
        </div>
      </section>

    </div>
  );
}
