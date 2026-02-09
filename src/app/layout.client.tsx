"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isQuizPage = pathname === "/quiz";
  const isFranchisePage = pathname?.startsWith("/franchise1");

  return (
    <>
      {/* Render Navbar globally; skip on specific pages if desired */}
      {!(isQuizPage || isFranchisePage) && <Navbar />}
      <main
        className="min-h-screen safe-bottom pb-16 md:pb-0"
        aria-label="Page content"
      >
        {children}
      </main>
    </>
  );
}
