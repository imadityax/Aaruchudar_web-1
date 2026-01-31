import { Metadata } from "next";
import InternshipPage from "./InternshipPage";

export const metadata: Metadata = {
  title: "Student & Fresher Internship Program | Training with Internship",
  description:
    "Apply for student and fresher internships with training. Build practical skills through real-time projects and professional mentorship.",
  keywords: [
    "internship",
    "internship program",
    "student internship",
    "fresher internship",
    "summer internship",
    "online internship",
    "paid internship",
    "unpaid internship",
    "industrial internship",
    "training and internship",
    "aaruchudar internship",
  ],
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">
        Human Intelligence Labs for Cognitive Assessment & Brain Training
      </h1>

      <section className="sr-only">
        <p>
          Aaruchudar Human Intelligence Labs provide hands-on cognitive
          assessment and brain training environments using Neuro Band and Neuro
          Lens technologies. These labs focus on measuring attention, focus,
          learning speed, and mental agility through practical experimentation.
        </p>
      </section>

      <InternshipPage />
    </>
  );
}
