"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [compact, setCompact] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<null | "programs" | "neuro" | "company">(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    // Default to dark for glassmorphism navbar
    if (typeof document !== "undefined") {
      const hasDark = document.documentElement.classList.contains("dark");
      if (!hasDark) document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    const onScroll = () => {
      setCompact(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { key: "home", label: "Home", href: "/" },
    { key: "programs", label: "Programs", href: "/hi-labs", dropdown: [
      { label: "Human Intelligence Labs", href: "/hi-labs" },
      { label: "Human Intelligence Courses", href: "/hi-courses" },
      { label: "Human Intelligence Workshops", href: "/hi-workshops" },
      { label: "Human Intelligence Events", href: "/hi-events" },
    ] },
    { key: "neuro", label: "Neuro Tech", href: "/neuro", dropdown: [
      { label: "Neuro Tech Suite", href: "/neuro" },
      { label: "Brain Gym", href: "/productpage" },
      { label: "Cognitive Assessments", href: "/assessment" },
      { label: "AI Intelligence Benchmark", href: "/benchmark" },
    ] },
    { key: "research", label: "Research", href: "/research" },
    { key: "quiz", label: "Quiz", href: "/quiz" },
    { key: "company", label: "Company", href: "/about", dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Product", href: "/productpage" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ] },
    { key: "franchise", label: "Franchise", href: "/franchise" },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleDropdownEnter = (key: "programs" | "neuro" | "company") => {
    setOpenDropdown(key);
  };
  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  const handleParentClick = (
    e: React.MouseEvent,
    key: "programs" | "neuro" | "company",
    hasDropdown: boolean
  ) => {
    if (!hasDropdown) return;
    e.preventDefault();
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <header
      className={`sticky top-0 inset-x-0 z-[9999] w-full bg-transparent backdrop-blur-md border-b border-transparent ${styles.header}`}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 py-3" aria-label="Main Navigation">
        {/* Use pure flex for three-zone layout */}
        <div className="flex items-center justify-between w-full">
          {/* LEFT: Logo + Mobile Hamburger */}
          <div className="flex items-center gap-3 flex-shrink min-w-0">

            <button
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <span className="sr-only">Toggle menu</span>
              {/* Hamburger */}
              <svg className={`h-6 w-6 ${menuOpen ? "hidden" : "block"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
              {/* Close */}
              <svg className={`h-6 w-6 ${menuOpen ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo2.png" alt="Aaruchudar" className="h-8 w-8" />
              <span className="font-semibold text-[#D4AF37]">AARUCHUDAR PRIVATE LIMITED</span>
            </Link>
          </div>

          {/* CENTER: Tabs (desktop only) */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <ul role="menubar" className="flex items-center gap-6 list-none">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const hasDropdown = !!item.dropdown;

                return (
                  <li
                    key={item.key}
                    role="none"
                    className="relative"
                    onMouseEnter={() => hasDropdown && handleDropdownEnter(item.key as any)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={item.href}
                      role="menuitem"
                      className={`${styles.navTab} text-[#D4AF37] ${active ? styles.tabUnderlineActive : styles.tabUnderline} flex items-center gap-1`}
                      onClick={(e) => hasDropdown && handleParentClick(e, item.key as any, hasDropdown)}
                      aria-haspopup={hasDropdown ? "menu" : undefined}
                      aria-expanded={hasDropdown ? (openDropdown === item.key ? true : false) : undefined}
                    >
                      {item.label}
                      {hasDropdown && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 opacity-75">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>

                    {hasDropdown && openDropdown === item.key && (
                      <div
                        ref={(el) => {
                          dropdownRefs.current[item.key] = el;
                        }}
                        role="menu"
                        aria-label={`${item.label} submenu`}
                        className={`${styles.dropdownPanel} absolute left-0 top-full mt-2 z-50 min-w-48 whitespace-nowrap bg-black/85 backdrop-blur-md border border-white/10 rounded-md shadow-lg`}
                      >
                        <ul className="p-2 space-y-1" role="none">
                          {item.dropdown!.map((dd) => (
                            <li key={dd.label} role="none">
                              <Link
                                href={dd.href}
                                role="menuitem"
                                className={`${styles.dropdownItem} block px-3 py-2 text-sm text-[#D4AF37] rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30`}
                                onClick={closeMenu}
                              >
                                {dd.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT: actions */}
          <div className="hidden md:flex items-center justify-end gap-3 flex-none">

            <Link href="/login" className="text-sm font-medium text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-white/30">
              Login
            </Link>
            <Link href="/webinar-training" className="cta-primary">Training Request</Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${menuOpen ? "block" : "hidden"} border-t border-transparent bg-black/80 backdrop-blur-md`}
        role="dialog"
        aria-modal="true"
      >
        <div className="px-4 py-3 text-white">
          <Link href="/webinar-training" className="mobile-cta" onClick={closeMenu}>
            Start Training
          </Link>
          <nav aria-label="Mobile Navigation">
            <ul className="mt-2 space-y-1 list-none">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const hasDropdown = !!item.dropdown;
                const isOpen = openDropdown === item.key;
                return (
                  <li key={item.key} className="">
                    <div
                      className={`flex items-center justify-between px-3 py-2 text-base ${active ? "text-[#D4AF37] border-l-2 border-[#D4AF37]" : "text-[#D4AF37]"}`}
                    >
                      <Link
                        href={hasDropdown ? item.href : item.href}
                        className="flex-1"
                        onClick={(e) => {
                          if (hasDropdown) {
                            e.preventDefault();
                            setOpenDropdown((prev) => (prev === item.key ? null : (item.key as any)));
                          } else {
                            closeMenu();
                          }
                        }}
                        aria-haspopup={hasDropdown ? "menu" : undefined}
                        aria-expanded={hasDropdown ? (isOpen ? true : false) : undefined}
                      >
                        {item.label}
                      </Link>
                      {hasDropdown && (
                        <button
                          aria-label={isOpen ? `Collapse ${item.label}` : `Expand ${item.label}`}
                          className="text-xs text-[#D4AF37]"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDropdown((prev) => (prev === item.key ? null : (item.key as any)));
                          }}
                        >
                          {isOpen ? "▲" : "▼"}
                        </button>
                      )}
                    </div>
                    {hasDropdown && isOpen && (
                      <ul className="pl-6 pr-3 pb-2 space-y-1 list-none" role="menu">
                        {item.dropdown!.map((dd) => (
                          <li key={dd.label}>
                            <Link href={dd.href} className="block py-1 text-[#D4AF37]" role="menuitem" onClick={closeMenu}>
                              {dd.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
              <li>
                <Link href="/login" className="flex items-center px-3 py-2 text-base text-[#D4AF37]" onClick={closeMenu}>
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
