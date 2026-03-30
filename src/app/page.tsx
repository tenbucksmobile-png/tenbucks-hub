import Link from "next/link";
import Image from "next/image";

const apps = [
  {
    initial: "F",
    logo: "/Fizzog.png",
    name: "Fizzog",
    tagline: "Be Discovered",
    description:
      "The next-generation job marketplace where talent meets opportunity. Skip the CV queue — record a 60-second pitch and get discovered by top employers, straight from your phone.",
    href: "/fizzog",
    colorClass: "bg-blue-600",
    gradientFrom: "from-blue-600/25",
    gradientTo: "to-blue-950/30",
    border: "hover:border-blue-500/50",
    accent: "text-blue-300",
    orb: "bg-blue-500/15",
    linkColor: "text-blue-400 hover:text-blue-300",
    disabled: false,
  },
  {
    initial: "I",
    logo: "/IndabaCares.png",
    name: "IndabaCares",
    tagline: "Employee Wellness & Recognition",
    description:
      "Transforming workplace culture through meaningful peer recognition and proactive wellness programmes. Happy teams build great companies.",
    href: "/indabacares",
    colorClass: "bg-emerald-600",
    gradientFrom: "from-emerald-600/25",
    gradientTo: "to-emerald-950/30",
    border: "hover:border-emerald-500/50",
    accent: "text-emerald-300",
    orb: "bg-emerald-500/15",
    linkColor: "text-emerald-400 hover:text-emerald-300",
    disabled: false,
  },
  {
    initial: "S",
    logo: "/SpaSynergy.png",
    name: "SpaSynergy",
    tagline: "The Future of Wellness Booking",
    description:
      "Seamlessly connect wellness seekers with premium spa and beauty experiences near them. Something beautiful is on its way.",
    href: "#",
    colorClass: "bg-orange-600",
    gradientFrom: "from-orange-600/20",
    gradientTo: "to-orange-950/20",
    border: "",
    accent: "text-orange-300",
    orb: "bg-orange-500/10",
    linkColor: "",
    disabled: true,
  },
  {
    initial: "M",
    logo: "/MaisonClaudia.png",
    name: "Maison Claudia",
    tagline: "Luxury Redefined",
    description:
      "An exclusive platform where luxury lifestyle meets digital convenience. The finest curated experiences, delivered to your fingertips.",
    href: "#",
    colorClass: "bg-purple-600",
    gradientFrom: "from-purple-600/20",
    gradientTo: "to-purple-950/20",
    border: "",
    accent: "text-purple-300",
    orb: "bg-purple-500/10",
    linkColor: "",
    disabled: true,
  },
];

const pillars = [
  {
    icon: "⚡",
    title: "Rapid Innovation",
    description:
      "We move fast, iterate faster, and ship products that users love from day one — no bloat, no delays.",
  },
  {
    icon: "🎯",
    title: "Purpose-Driven Design",
    description:
      "Every pixel and every interaction is crafted with clear intent. Beautiful design that actually works.",
  },
  {
    icon: "🌍",
    title: "African Excellence",
    description:
      "Proudly South African, globally minded. We build technology that competes — and wins — on the world stage.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
        {/* Animated background orbs */}
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <div className="orb orb-blue" />
          <div className="orb orb-purple" />
          <div className="orb orb-pink" />
        </div>

        {/* Dark overlay */}
        <div aria-hidden className="absolute inset-0 bg-gray-950/50" />

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-16">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-white/70 mb-10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            South Africa&apos;s Premier Mobile Application Studio
          </div>

          {/* Headline */}
          <h1
            className="font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.02] tracking-tight mb-7"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            We Build Apps
            <br />
            <span className="gradient-text">That Move People.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed">
            From connecting job seekers to revolutionising employee wellness — TenBucks Mobile
            crafts digital experiences that matter, at a pace that surprises.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-lg hover:opacity-90 active:scale-95 transition-all shadow-2xl shadow-blue-900/40"
            >
              Explore Our Work
            </a>
            <a
              href="mailto:hello@tenbucks-mobile.co.za"
              className="px-8 py-4 rounded-2xl border border-white/20 font-semibold text-lg hover:bg-white/10 active:scale-95 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="scroll-indicator absolute bottom-10 left-1/2">
          <div className="w-6 h-10 border-2 border-white/25 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-white/10 bg-white/[0.03] py-12">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {[
            { value: "4", label: "Apps in Portfolio" },
            { value: "2", label: "Live Products" },
            { value: "ZA", label: "Made in South Africa" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="text-5xl font-bold gradient-text mb-2"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-white/45 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Our Portfolio
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Four Apps. One Vision.
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto leading-relaxed">
              Every product we build is driven by a singular purpose — to make life better, one tap
              at a time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {apps.map((app) => (
              <div
                key={app.name}
                className={`relative group rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${app.gradientFrom} ${app.gradientTo} p-8 transition-all duration-300 ${app.disabled ? "opacity-55" : `cursor-pointer ${app.border}`}`}
              >
                {/* Glow orb */}
                <div
                  aria-hidden
                  className={`absolute -top-6 -right-6 w-48 h-48 ${app.orb} rounded-full blur-3xl transition-all duration-500 ${!app.disabled ? "group-hover:scale-110" : ""}`}
                />

                <div className="relative">
                  {/* App icon */}
                  <div className={`w-14 h-14 rounded-2xl overflow-hidden mb-6 shadow-lg`}>
                    <Image
                      src={app.logo}
                      alt={app.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Coming soon badge */}
                  {app.disabled && (
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 ${app.accent} text-xs font-semibold mb-4`}>
                      Coming Soon
                    </div>
                  )}

                  <h3
                    className="text-2xl font-bold mb-1.5 tracking-tight"
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                  >
                    {app.name}
                  </h3>
                  <p className={`${app.accent} font-semibold text-sm mb-4`}>{app.tagline}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-7">{app.description}</p>

                  {!app.disabled && (
                    <Link
                      href={app.href}
                      className={`inline-flex items-center gap-1.5 ${app.linkColor} font-semibold text-sm transition-colors`}
                    >
                      Explore {app.name} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why TenBucks ── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-purple-400 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Why TenBucks
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Built in Africa.
              <br />
              <span className="gradient-text">Built for the World.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Great software doesn&apos;t require a Silicon Valley address — just vision, craft, and
              relentless execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-7 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-5">{pillar.icon}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-3xl border border-white/10 overflow-hidden">
            {/* Gradient fill */}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
            <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />

            {/* Orbs inside */}
            <div aria-hidden className="absolute -top-10 -left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />
            <div aria-hidden className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative p-14">
              <h2
                className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                Ready to Build Something Great?
              </h2>
              <p className="text-white/55 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
                Join the TenBucks Mobile ecosystem and let&apos;s shape the future of mobile
                together — from South Africa to the world.
              </p>
              <a
                href="mailto:hello@tenbucks-mobile.co.za"
                className="inline-block px-10 py-4 rounded-2xl bg-white text-gray-950 font-bold text-lg hover:bg-white/90 active:scale-95 transition-all shadow-2xl"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/35 text-sm">
          <span
            className="brand-name text-xl gradient-text"
          >
            TenBucks Mobile
          </span>
          <p>© 2026 TenBucks Mobile (Pty) Ltd. All rights reserved.</p>
          <p>Made with ❤️ in South Africa</p>
        </div>
      </footer>
    </>
  );
}
