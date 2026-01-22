import { Metadata } from "next";
import HomeClient from "./home.client";

/* ================= SEO META ================= */

export const metadata: Metadata = {
  title:
    "Aaruchudar | Human Intelligence Training & Cognitive Development",
  description:
    "Aaruchudar delivers Human Intelligence development using Neuro Band and Neuro Lens technologies. Neuroscience-based cognitive training to improve focus, memory, attention, productivity and brain performance.",
  keywords: [
    //Primary
    "Human Intelligence Training",

    //Secondary
    "Cognitive Development",
    "Brain Performance Training",
    "Neuroscience Based Learning",
    "Neuro Band",
    "Neuro Lens",
    "Aaruchudar ",
  ],
};

/* ================= PAGE (SERVER) ================= */

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* SEO H1 – invisible */}
      <h1 className="sr-only">
        Human Intelligence Training & Cognitive Development Platform –
        Aaruchudar
      </h1>

      {/* SEO intro */}
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
