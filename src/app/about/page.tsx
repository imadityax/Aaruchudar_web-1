import { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title:
    "About Aaruchudar Consultancy | Human Intelligence Research & Cognitive Training",
  description:
    "Aaruchudar Consultancy is a human intelligence research and training organisation focused on cognitive health, mental agility, neuroscience-based learning, and brain performance development.",
  keywords: [
    //Primary
    "Human Intelligence Research Organization",

    //Secondary
    "Cognitive Health Training",
    "Neuroscience Based Education",
    "Brain Performance Coaching",
    "Human Intelligence Experts",
    "Aaruchudar Consultancy",
  ],
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        About Aaruchudar Consultancy – Human Intelligence & Neuroscience Experts
      </h1>

      <section className="sr-only">
        <p>
          Aaruchudar Consultancy is a neuroscience-driven organisation
          specialising in Human Intelligence research, cognitive training, and
          brain performance systems. The organisation integrates psychology,
          neuroscience, and technology to build measurable mental agility,
          focus, and decision-making capabilities.
        </p>
      </section>

      <AboutPage />
    </>
  );
}
