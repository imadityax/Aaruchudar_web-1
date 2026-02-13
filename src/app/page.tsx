import { Metadata } from "next";
import HomeClient from "./home.client";

/* ================= SEO META ================= */

export const metadata: Metadata = {
  title:
    "Aaruchudar | Human Intelligence, Cognitive Training & Neuroscience Platform",

  description:
    "Aaruchudar delivers Human Intelligence development using Neuro Band and Neuro Lens technologies. Neuroscience-based cognitive training to improve focus, memory, attention, productivity and brain performance.",
  keywords: [
    // Core Entity
    "Human Intelligence",
    "Human Intelligence Training",
    "Human Intelligence Development",

    // Cognitive & Brain
    "Cognitive Training",
    "Cognitive Development",
    "Brain Performance",
    "Brain Performance Training",
    "Brain Systems and Learning",

    // Neuroscience
    "Neuroscience Based Training",
    "Applied Neuroscience",
    "Neuroscience Learning Methods",
    "Brain Science Training",
    
    // Brand
    "Aaruchudar",
    "Aaruchudar Pvt. Ltd.",
  ],
};

/* ================= PAGE (SERVER) ================= */

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* SEO H1 – invisible but indexed */}
      <h1 className="sr-only">
        Human Intelligence, Cognitive Training & Neuroscience-Based Brain
        Performance Platform
      </h1>

      {/* SEO Intro – Topical Authority Block */}
      <section className="sr-only">
        <p>
          Aaruchudar is a Human Intelligence training and research platform
          focused on cognitive development, mental agility, neuroscience-based
          learning, and brain performance improvement. Using Neuro Band and
          Neuro Lens technologies, Aaruchudar delivers labs, courses, workshops,
          and events designed to enhance focus, memory, decision-making, and
          real-world intelligence.
        </p>
      </section>

      {/* CLIENT UI */}
      <HomeClient />
    </main>
  );
}
