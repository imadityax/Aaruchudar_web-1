"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    // Initialize based on current class
    if (typeof document !== "undefined") {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDark(hasDark);
      // Load persisted preference
      try {
        const saved = localStorage.getItem("theme");
        if (saved) {
          const shouldDark = saved === "dark";
          document.documentElement.classList.toggle("dark", shouldDark);
          setIsDark(shouldDark);
        }
      } catch {}
    }
  }, []);

  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark");
      const nowDark = document.documentElement.classList.contains("dark");
      setIsDark(nowDark);
      // Persist preference
      try {
        localStorage.setItem("theme", nowDark ? "dark" : "light");
      } catch {}
    }
  };

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-900/80 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <span className="sr-only">Toggle menu</span>
            {/* Hamburger icon */}
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
            {/* Close icon */}
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <Link href="/" className="text-base font-semibold text-gray-900 dark:text-gray-100" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/careers" className="hidden md:inline-block text-base font-semibold text-gray-900 hover:text-indigo-700 dark:text-gray-100 dark:hover:text-indigo-300" onClick={closeMenu}>
            Careers
          </Link>
        </div>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900`}
        role="dialog"
        aria-modal="true"
      >
        <div className="space-y-1 px-4 py-3 sm:px-6">
          <Link href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800" onClick={closeMenu}>
            About
          </Link>
          <Link href="/hi-courses" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800" onClick={closeMenu}>
            Courses
          </Link>
          <Link href="/hi-labs" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800" onClick={closeMenu}>
            Labs
          </Link>
          <Link href="/hi-workshops" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800" onClick={closeMenu}>
            Workshops
          </Link>
          <Link href="/blog" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800" onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/careers" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800" onClick={closeMenu}>
            Careers
          </Link>
        </div>
      </div>
    </header>
  );
}
