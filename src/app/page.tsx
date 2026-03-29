import AppCard from "@/components/AppCard";

const apps = [
  {
    name: "Fizzog",
    tagline: "Connect. Pitch. Get Hired.",
    href: "/fizzog",
    color: "bg-blue-600",
    initial: "F",
  },
  {
    name: "IndabaCares",
    tagline: "Employee wellness & recognition.",
    href: "/indabacares",
    color: "bg-emerald-600",
    initial: "I",
  },
  {
    name: "App 3",
    tagline: "Coming soon.",
    href: "#",
    color: "bg-purple-600",
    initial: "3",
    disabled: true,
  },
  {
    name: "App 4",
    tagline: "Coming soon.",
    href: "#",
    color: "bg-orange-600",
    initial: "4",
    disabled: true,
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold tracking-tight">TenBucks Mobile</h1>
        <p className="text-white/50 mt-3 text-lg">
          Innovative mobile experiences — built in South Africa.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {apps.map((app) => (
          <AppCard key={app.name} {...app} />
        ))}
      </div>
    </div>
  );
}
