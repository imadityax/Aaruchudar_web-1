"use client";

import React from "react";

export default function NeuroTechSuitePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
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
    </main>
  );
}