"use client";

import React from "react";

export default function NeuroBandPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-3">
          NEURO BAND
        </h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-lg mb-10">
          Neuro Band is an AI-powered brain-sensing wearable that uses non-invasive EEG technology to measure real-time cognitive and emotional states.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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