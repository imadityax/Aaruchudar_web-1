import { Metadata } from "next";
import HICoursesPage from "./HICoursesPage";

export const metadata: Metadata = {
  title:
    "Human Intelligence Courses | Cognitive & Neuroscience Training – Aaruchudar",
  description:
    "Explore Aaruchudar’s Human Intelligence courses designed to enhance cognitive skills, focus, memory and problem-solving using neuroscience-based learning programs.",
  keywords: [
    //Primary
    "Human Intelligence Courses",

    //Secondary
    "Cognitive Training Courses",
    "Brain Development Programs",
    "Neuroscience Learning Courses",
    "Focus and Memory Training",
    "Aaruchudar Courses",
  ],
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        Human Intelligence Courses for Cognitive Skills & Mental Agility
      </h1>

      <section className="sr-only">
        <p>
          Aaruchudar offers Human Intelligence courses designed to improve
          cognitive skills, memory, focus, and problem-solving using
          neuroscience-based learning frameworks. These structured programs
          combine theory, assessment, and applied brain training for measurable
          growth.
        </p>
      </section>

      <HICoursesPage />
    </>
  );
}
