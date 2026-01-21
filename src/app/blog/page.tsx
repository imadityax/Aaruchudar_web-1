import { Metadata } from "next";
import BlogPages from "./BlogPage";

export const metadata: Metadata = {
  title:
    "Human Intelligence & Neuroscience Blog | Brain Performance Insights",
  description:
    "Read Aaruchudar’s blog on Human Intelligence, neuroscience, meditation, Neuro Band, Neuro Lens and cognitive performance improvement.",
  keywords: [
    //Primary
    "Human Intelligence Blog",

    //Secondary
    "Neuroscience Blog",
    "Brain Performance Insights",
    "Cognitive Science Articles",
    "Neuro Band Research",
    "Neuro Lens Technology",
    "Aaruchudar Blog",
  ],
};


export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        Human Intelligence & Neuroscience Blog by Aaruchudar
      </h1>

      <section className="sr-only">
        <p>
          Aaruchudar’s blog covers Human Intelligence, neuroscience, meditation,
          cognitive performance, Neuro Band, and Neuro Lens technologies. These
          articles explain how the brain learns, adapts, and improves focus,
          memory, emotional intelligence, and mental clarity through
          science-backed methods.
        </p>
      </section>

      <BlogPages />
    </>
  );
}
