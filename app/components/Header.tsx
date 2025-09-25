"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-10 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-primary" aria-hidden />
          <span className="text-xl font-heading font-semibold tracking-tight text-primary">SkillBoost</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#" className="hover:text-accent">Home</Link>
          <Link href="#about" className="hover:text-accent">About</Link>
          <Link href="#features" className="hover:text-accent">Features</Link>
          <Link href="#pricing" className="hover:text-accent">Pricing</Link>
          <Link href="#contact" className="hover:text-accent">Contact</Link>
          <Link href="/register" className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 font-semibold text-white shadow hover:shadow-md transition-shadow">Get Started</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-gray-300"
          aria-label="Open Menu"
        >
          <span className="block h-0.5 w-5 bg-gray-700 mb-1" />
          <span className="block h-0.5 w-5 bg-gray-700 mb-1" />
          <span className="block h-0.5 w-5 bg-gray-700" />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-xl border-l border-gray-200 p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-base font-heading font-semibold text-primary">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close Menu"
                className="h-8 w-8 inline-flex items-center justify-center rounded border border-gray-300"
              >
                <span className="block h-0.5 w-4 bg-gray-700 rotate-45 translate-y-[1px]" />
                <span className="block h-0.5 w-4 bg-gray-700 -rotate-45 -translate-y-[1px]" />
              </button>
            </div>
            <nav className="flex flex-col gap-3 text-sm">
              <Link href="#" onClick={() => setOpen(false)} className="hover:text-accent">Home</Link>
              <Link href="#about" onClick={() => setOpen(false)} className="hover:text-accent">About</Link>
              <Link href="#features" onClick={() => setOpen(false)} className="hover:text-accent">Features</Link>
              <Link href="#pricing" onClick={() => setOpen(false)} className="hover:text-accent">Pricing</Link>
              <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-accent">Contact</Link>
              <Link href="/register" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 font-semibold text-white shadow hover:shadow-md">Get Started</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
