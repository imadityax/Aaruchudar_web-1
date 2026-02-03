"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [show, setShow] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "research", label: "Research", href: "/research" },
    { id: "quiz", label: "Quiz", href: "/quiz" },
    { id: "contact", label: "Contact", href: "/contact" },
    { id: "product", label: "Product", href: "/productpage" },
    { id: "franchise", label: "Franchise", href: "/franchise" },
    { id: "internship", label: "Internship", href: "/internship" },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header
        className={`hidden md:block fixed z-[999] top-0 left-1/2 -translate-x-1/2 transition-all duration-500 ${
          show ? "translate-y-0" : "-translate-y-28"
        }`}
      >
        <div className="px-6 py-2 flex items-center gap-6 rounded-full backdrop-blur-lg bg-amber-900/40">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo2.png" alt="Logo" width={36} height={36} />
            <span className="text-white font-bold">Aaruchudar</span>
          </Link>

          <nav className="flex gap-5">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-medium ${
                  activeTab === item.id
                    ? "text-orange-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/login"
            onClick={() => setActiveTab("login")}
            className="text-sm font-medium text-white/80 hover:text-white"
          >
            Login
          </Link>
        </div>
      </header>

      {/* ================= MOBILE TOP NAVBAR ================= */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-[999] transition-transform duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 backdrop-blur-lg bg-amber-900/40">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo2.png" alt="Logo" width={30} height={30} />
            <span className="text-white font-semibold">Aaruchudar</span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="
					text-orange-400 
					hover:text-orange-500 
					transition 
					text-2xl 
					leading-none
					focus:outline-none
					bg-transparent
					border-none
					p-0
				"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`overflow-hidden transition-all duration-300 backdrop-blur-lg bg-amber-900/40 ${
            mobileOpen ? "max-h-[420px] py-4" : "max-h-0 py-0"
          }`}
        >
          <nav className="flex flex-col gap-3 px-5">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileOpen(false);
                }}
                className={`text-sm font-medium ${
                  activeTab === item.id
                    ? "text-orange-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-sm font-medium text-white/90"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
