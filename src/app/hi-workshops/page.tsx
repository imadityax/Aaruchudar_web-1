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
      <HIWorkshopPage />
    </>
  );
}
