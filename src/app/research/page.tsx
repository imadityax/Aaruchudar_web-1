import { Metadata } from "next";
import ResearchPage from "./ResearchPage";

export const metadata: Metadata = {
  title:
    "Human Intelligence Research | Neuroscience & Cognitive Studies – Aaruchudar",
  description:
    "Explore Aaruchudar’s research on Human Intelligence, neuroscience, cognitive development and brain-performance enhancement.",
  keywords: [
    "Human Intelligence Research",
    "Neuroscience Research",
    "Cognitive Science Studies",
    "Brain Performance Research",
    "Mental Health Research",
  ],
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        Human Intelligence Research & Cognitive Neuroscience Studies –
        Aaruchudar
      </h1>
      <section className="sr-only">
        <p>
          Aaruchudar conducts Human Intelligence research focused on cognitive
          neuroscience, brain performance, learning systems, and mental agility.
          Research initiatives explore how Neuro Band and Neuro Lens
          technologies measure focus, attention, and cognitive growth in
          real-world environments.
        </p>
      </section>
      <ResearchPage />;
    </>
  );
}
