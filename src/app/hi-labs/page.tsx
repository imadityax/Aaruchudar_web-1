import { Metadata } from "next";
import HILabPage from "./HILabPage";

export const metadata: Metadata = {
  title:
    "Human Intelligence Labs | Cognitive & Neuroscience Training Labs – Aaruchudar",
  description:
    "Hands-on Human Intelligence labs at Aaruchudar use neuroscience techniques, Neuro Band and Neuro Lens tools to improve focus, attention and brain performance.",
  keywords: [
    //Primary
    "Human Intelligence Labs",

    //Secondary
    "Cognitive Training Labs",
    "Brain Skill Development Labs",
    "Neuroscience Experiments",
    "Mental Agility Training",
    "Aaruchudar Labs",
  ],
};

export default function Page() {
  return(
  <>
    <h1 className="sr-only">
      Human Intelligence Labs for Cognitive Assessment & Brain Training
    </h1>

    <section className="sr-only">
      <p>
        Aaruchudar Human Intelligence Labs provide hands-on cognitive assessment
        and brain training environments using Neuro Band and Neuro Lens
        technologies. These labs focus on measuring attention, focus, learning
        speed, and mental agility through practical experimentation.
      </p>
    </section>

    <HILabPage />
  </>);
}
