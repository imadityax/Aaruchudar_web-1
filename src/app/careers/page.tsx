import React from "react";
import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at Aaruchudar | Human Intelligence & Cognitive Research Jobs",
  description:
    "Explore careers at Aaruchudar. Build the future of human intelligence and EdTech with roles across video editing, biomedical engineering, content creation, research internships, and business development.",
  keywords: [
    "Aaruchudar careers",
    "human intelligence jobs",
    "cognitive research jobs",
    "frontend developer Next.js job",
    "Three.js WebGL jobs",
    "edtech jobs",
    "business development jobs",
    "video editor jobs",
    "biomedical engineering jobs",
    "content creator jobs",
    "research intern jobs",
    "Cheyyar jobs",
    "Arcot jobs",
    "Kanchipuram jobs",
    "Vellore jobs",
  ],
};

export default function CareersPage() {
  return <CareersClient />;
}
