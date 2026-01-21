"use client";

import dynamic from "next/dynamic";
import Features from "@/components/Features";
import Landing from "@/components/Landing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

/* ================= HERO (CLIENT ONLY) ================= */

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
});

export default function HomeClient() {
  return (
    <>
      <Hero />
      <Features />
      <Landing />
      <Testimonials />
      <Footer />
      <Chatbot />
    </>
  );
}
