import AppCard from "@/components/AppCard";

const apps = [
  {
    name: "Fizzog",
    tagline: "Connect. Pitch. Get Hired.",
    href: "/fizzog",
    logo: "/Fizzog.png",
    color: "bg-blue-600",
    initial: "F",
  },
  {
    name: "IndabaCares",
    tagline: "Employee wellness & recognition.",
    href: "/indabacares",
    logo: "/IndabaCares.png",
    color: "bg-emerald-600",
    initial: "I",
  },
  {
    name: "SpaSynergy",
    tagline: "Coming soon.",
    href: "#",
    logo: "/SpaSynergy.png",
    color: "bg-orange-600",
    initial: "S",
    disabled: true,
  },
  {
    name: "MaisonClaudia",
    tagline: "Coming soon.",
    href: "#",
    logo: "/MaisonClaudia.png",
    color: "bg-purple-600",
    initial: "M",
    disabled: true,
  },
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold tracking-tight">TenBucks Mobile</h1>
        <p className="text-white/50 mt-3 text-lg">
          Innovative mobile experiences — built in South Africa.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {apps.map((app) => (
          <AppCard key={app.name} {...app} />
        ))}
      </div>
    </div>
  );
}
