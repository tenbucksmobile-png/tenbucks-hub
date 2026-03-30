"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import AdminLoginModal from "./AdminLoginModal";
import { LogIn, ChevronDown } from "lucide-react";

const projects = [
  {
    name: "Fizzog",
    tagline: "Be Discovered",
    href: "/fizzog",
    color: "bg-blue-500",
    accent: "text-blue-400",
    disabled: false,
  },
  {
    name: "IndabaCares",
    tagline: "Employee Wellness & Recognition",
    href: "/indabacares",
    color: "bg-emerald-500",
    accent: "text-emerald-400",
    disabled: false,
  },
  {
    name: "SpaSynergy",
    tagline: "Coming Soon",
    href: "#",
    color: "bg-orange-500",
    accent: "text-orange-400",
    disabled: true,
  },
  {
    name: "Maison Claudia",
    tagline: "Coming Soon",
    href: "#",
    color: "bg-purple-500",
    accent: "text-purple-400",
    disabled: true,
  },
];

export default function NavBar() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-4 bg-gray-950/75 backdrop-blur-xl border-b border-white/10">
        {/* Brand */}
        <Link href="/" className="brand-name text-2xl gradient-text select-none">
          TenBucks Mobile
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Projects dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              Projects
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-2">
                  {projects.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={(e) => {
                        if (p.disabled) e.preventDefault();
                        else setDropdownOpen(false);
                      }}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${
                        p.disabled
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-white/10 cursor-pointer"
                      }`}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${p.color}`} />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white leading-none mb-1">{p.name}</p>
                        <p className={`text-xs ${p.accent} opacity-80 truncate`}>{p.tagline}</p>
                      </div>
                      {p.disabled && (
                        <span className="ml-auto text-[10px] font-medium text-white/30 bg-white/10 px-2 py-0.5 rounded-full flex-shrink-0">
                          Soon
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Admin Login */}
          <button
            onClick={() => setAdminOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 active:scale-95 transition-all text-sm font-semibold shadow-lg shadow-blue-900/30"
          >
            <LogIn size={14} />
            Admin
          </button>
        </div>
      </nav>

      <AdminLoginModal open={adminOpen} onClose={() => setAdminOpen(false)} />
    </>
  );
}
