"use client";

import React from "react";

export default function NeuroLensPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <section className="max-w-7xl mx-auto mb-28">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-3">
          NEURO LENS
        </h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg mb-10">
          Neuro Lens is a professional neuro analytics and visualization platform that transforms raw brain signals into clear, actionable cognitive intelligence for researchers, clinicians, and performance professionals.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
    </main>
  );
}

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