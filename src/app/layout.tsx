import type { Metadata } from "next";
import "./globals.css";
import "../styles/reset.css";
import ClientLayout from "./layout.client";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "Aaruchudar | Human Intelligence Platform",
    template: "%s | Aaruchudar",
  },
  description:
    "AARUCHUDAR PRIVATE LIMITED is a human intelligence research and training platform focused on cognitive health and mental agility.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
