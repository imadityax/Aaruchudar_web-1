import { Metadata } from "next";
import HIEventsPage from "./HIEventsPage";

export const metadata: Metadata = {
  title: "Human Intelligence Events & Neuroscience Programs | Aaruchudar",
  description:
    "Participate in Aaruchudar’s Human Intelligence events and neuroscience programs designed to improve cognitive skills, focus and mental performance.",
  keywords: [
    //Primary
    "Human Intelligence Events",

    //Secondary
    "Neuroscience Webinars",
    "Cognitive Development Events",
    "Brain Performance Talks",
    "Psychology Workshops",
    "Aaruchudar Events",
  ],
};

export default function Page() {
  return (
  <>
    <h1 className="sr-only">
      Human Intelligence Events, Conferences & Cognitive Training Sessions
    </h1>

    <section className="sr-only">
      <p>
        Aaruchudar’s Human Intelligence events bring together researchers,
        practitioners, and learners to explore neuroscience, cognitive training,
        and brain performance systems. Events include talks, workshops, and
        collaborative sessions focused on real-world intelligence development.
      </p>
    </section>

    <HIEventsPage />
  </>);
}
