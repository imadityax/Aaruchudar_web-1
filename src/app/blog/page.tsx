import { Metadata } from "next";
import BlogPages from "./BlogPage";

export const metadata: Metadata = {
  title: "Human Intelligence & Neuroscience Blog | Brain Performance Insights",
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
      {/* Main SEO Heading */}
      <h1 className=" sr-only text-3xl font-semibold mb-4">
        Human Intelligence & Neuroscience Blog
      </h1>

      {/* Visible SEO intro paragraph */}
      <p className="text-gray-600 max-w-3xl mb-8 sr-only">
        Explore research-backed insights on human intelligence, neuroscience,
        psychology, meditation, and cognitive performance. Aaruchudar’s blog
        focuses on improving focus, memory, emotional intelligence, and mental
        clarity using modern science and technology.
      </p>

      <BlogPages />
    </>
  );
}
