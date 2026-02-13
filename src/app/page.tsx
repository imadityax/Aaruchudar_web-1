import { Metadata } from "next";
import HomeClient from "./home.client";

/* ================= SEO META ================= */

export const metadata: Metadata = {
  title:
    "Aaruchudar | Human Intelligence, Cognitive Training & Neuroscience Platform",

  description:
    "Aaruchudar is a neuroscience-driven Human Intelligence and cognitive training platform. Using Neuro Band and Neuro Lens technologies, we deliver brain performance training to improve focus, memory, attention, productivity, and real-world intelligence for students and professionals.",

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
          Aaruchudar is a Human Intelligence and cognitive training platform
          focused on improving how the brain learns, adapts, and performs.
          Our programs combine cognitive development, applied neuroscience,
          and brain science principles to strengthen focus, attention, memory,
          decision-making, and productivity.
        </p>

        <p>
          Using Neuro Band and Neuro Lens technologies, Aaruchudar measures
          and enhances brain performance through structured training systems,
          neuroscience-based labs, courses, workshops, and real-world learning
          experiences. These Human Intelligence training programs are designed
          for students, graduates, professionals, and organisations seeking
          measurable cognitive and mental performance growth.
        </p>
      </section>

      {/* CLIENT UI */}
      <HomeClient />
    </main>
  );
}
