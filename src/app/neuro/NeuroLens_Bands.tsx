"use client";
import React from "react";

export default function NeuroPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      {/* ================= HERO (Suite Overview) ================= */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-3">
          Aaruchudar Neuro-Tech Suite
        </h1>
        <p className="text-sm uppercase tracking-widest text-indigo-300 mb-6">Explore Suite</p>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg">
          The Aaruchdar Neuro-Tech Suite is an integrated Human Intelligence ecosystem designed to structure,
          strengthen, and evolve the way the mind thinks, feels, and decides. It brings together brain sensing,
          cognitive analytics, and Human Intelligence training into one unified system designed for continuous mental
          development, performance optimization, and emotional regulation.
        </p>
      </section>

      {/* ================= THE SYSTEM ================= */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-6">The Neuro-Tech Suite System</h2>
        <p className="text-slate-300 mb-8">
          The Aaruchudar Neuro-Tech Suite integrates three elements into one seamless platform:
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">Human Intelligent Labs</h3>
            <p className="text-sm text-slate-300">Structured cognitive and emotional training</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">NeuroLens</h3>
            <p className="text-sm text-slate-300">Brain analytics and visualization</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">NeuroBand</h3>
            <p className="text-sm text-slate-300">Real-time brain signal capture</p>
          </div>
        </div>
        <p className="text-slate-300 mt-8">
          Together, they function as a single Human Intelligence ecosystem rather than separate tools.
        </p>
      </section>

      {/* ================= WHAT IT'S ABOUT ================= */}
      <section className="max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-6">What the Neuro-Tech Suite Is About</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl list-disc pl-6 text-slate-300">
            <li>Understand brain activity and cognitive states</li>
            <li>Measure focus, stress, and mental performance</li>
            <li>Train the brain through structured Human Intelligence programs</li>
            <li>Track cognitive progress scientifically</li>
          </ul>
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl text-slate-300">
            <p className="text-sm">
              Built for individuals, institutions, labs, and research environments looking to combine real-time brain
              sensing with scientific analytics and guided Human Intelligence training.
            </p>
          </div>
        </div>
      </section>

      {/* ================= NEURO LENS ================= */}
      <section className="max-w-7xl mx-auto mb-28">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-10">
          NEURO LENS
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Card
            title="What is Neuro Lens?"
            content="Neuro Lens is a professional neuro analytics and visualization platform that transforms raw brain signals into clear, actionable cognitive intelligence for researchers, clinicians, and performance professionals."
          />

          <Card
            title="What Neuro Lens Does"
            list={[
              "Real-time brain activity visualization",
              "Stress, focus & fatigue analysis",
              "Cognitive progress tracking",
              "Research & performance support"
            ]}
          />

          <Card
            title="Brain Data Visualization"
            list={[
              "Live EEG waveforms",
              "Brainwave distribution maps",
              "Cognitive state timelines"
            ]}
          />

          <Card
            title="Scientific Analytics Engine"
            list={[
              "Cognitive load analysis",
              "Stress-response modeling",
              "Pre & post training comparison",
              "Performance benchmarking"
            ]}
          />

          <Card
            title="Human Intelligence Integration"
            list={[
              "Focus training labs",
              "Stress regulation programs",
              "Emotional resilience modules",
              "Decision-making simulations"
            ]}
          />

          <Card
            title="Clinical & Research Ready"
            list={[
              "Exportable datasets",
              "Multi-user dashboards",
              "Session comparison tools",
              "Evidence-backed tracking"
            ]}
          />
        </div>
      </section>

      {/* ================= NEURO BAND ================= */}
      <section id="band" className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-10">
          NEURO BAND
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Card
            title="What is Neuro Band?"
            content="Neuro Band is an AI-powered brain-sensing wearable that uses non-invasive EEG technology to measure real-time cognitive and emotional states."
          />

          <Card
            title="How Neuro Band Works"
            list={[
              "Wear lightweight Neuro Band",
              "EEG sensors capture brain signals",
              "AI interprets mental states",
              "Personalized insights & training"
            ]}
          />

          <Card
            title="EEG Brain Sensing Technology"
            list={[
              "Multi-channel EEG architecture",
              "High signal-to-noise ratio",
              "Hybrid dry electrode system"
            ]}
          />

          <Card
            title="Neural Intelligence Engine (AI)"
            list={[
              "Real-time signal cleaning",
              "Brainwave classification",
              "Stress & focus detection",
              "Adaptive learning models"
            ]}
          />

          <Card
            title="Smart Companion App"
            list={[
              "Mental state dashboards",
              "Guided neurofeedback sessions",
              "Weekly & monthly reports"
            ]}
          />

          <Card
            title="What Neuro Band Helps You Achieve"
            list={[
              "Improve focus & clarity",
              "Reduce stress & burnout",
              "Enhance productivity",
              "Build cognitive resilience"
            ]}
          />
        </div>

        <p className="mt-14 text-center text-slate-300 max-w-3xl mx-auto text-lg">
          Neuro Band doesn’t just show brain data — it helps you
          <span className="text-indigo-300 font-semibold"> change your brain for the better.</span>
        </p>
      </section>
    </main>
  );
}

/* ================= CARD COMPONENT ================= */
function Card({
  title,
  content,
  list
}: {
  title: string;
  content?: string;
  list?: string[];
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-lg font-semibold text-indigo-300 mb-3">
        {title}
      </h3>

      {content && (
        <p className="text-sm text-slate-300 leading-relaxed">
          {content}
        </p>
      )}

      {list && (
        <ul className="mt-2 space-y-2 text-sm text-slate-300 list-disc pl-5">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
