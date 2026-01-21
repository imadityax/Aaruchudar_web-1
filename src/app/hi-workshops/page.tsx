import { Metadata } from "next";
import HIWorkshopPage from "./HIWorkshopPage";

export const metadata: Metadata = {
  title:
    "Human Intelligence Workshops | Cognitive & Brain Performance Training – Aaruchudar",
  description:
    "Join Aaruchudar’s Human Intelligence workshops focused on cognitive development, neuroscience-based learning and productivity improvement.",
  keywords: [
    //Primary
    "Human Intelligence Workshops",

    //Secondary
    "Cognitive Training Workshops",
    "Neuroscience Based Workshops",
    "Brain Performance Training",
    "Decision Making Workshops",
    "Aaruchudar Workshops",
  ],
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        Human Intelligence Workshops for Cognitive & Brain Performance Training
      </h1>

      <section className="sr-only">
        <p>
          Aaruchudar’s Human Intelligence workshops deliver practical, immersive
          training programs focused on cognitive development, emotional
          intelligence, decision-making, and innovation. These
          neuroscience-based workshops help participants strengthen focus,
          clarity, and mental performance.
        </p>
      </section>

      <HIWorkshopPage />
    </>
  );
}
