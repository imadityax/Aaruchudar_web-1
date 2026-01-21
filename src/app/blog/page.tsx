import { Metadata } from "next";
import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title: "Human Intelligence & Neuroscience Blog | Aaruchudar",
  description:
    "Explore Aaruchudar’s blog on human intelligence, neuroscience, meditation, cognitive performance, Neuro Band, and Neuro Lens technologies.",
  openGraph: {
    title: "Human Intelligence & Neuroscience Blog | Aaruchudar",
    description:
      "Insights on neuroscience, psychology, meditation, and cognitive performance to enhance human intelligence.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      {/* Main SEO Heading */}
      <h1 className="text-3xl font-semibold mb-4">
        Human Intelligence & Neuroscience Blog
      </h1>

      {/* Visible SEO intro paragraph */}
      <p className="text-gray-600 max-w-3xl mb-8">
        Explore research-backed insights on human intelligence, neuroscience,
        psychology, meditation, and cognitive performance. Aaruchudar’s blog
        focuses on improving focus, memory, emotional intelligence, and mental
        clarity using modern science and technology.
      </p>

      <BlogPage/>
    </>
  );
}
