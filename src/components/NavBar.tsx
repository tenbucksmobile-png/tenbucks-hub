"use client";
import { useState } from "react";
import AdminLoginModal from "./AdminLoginModal";
import { LogIn } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <span className="text-xl font-bold tracking-tight">TenBucks Mobile</span>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm font-medium"
        >
          <LogIn size={16} />
          Admin Login
        </button>
      </nav>
      <AdminLoginModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
