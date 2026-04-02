'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Layers, Star } from 'lucide-react';

export default function PsychologicalWorkshop() {
  const title = 'Mind Architecture';
  const details = {
    duration: '2 days',
    level: 'Intermediate',
    rating: 4.8,
    modules: [
      'Neural Detox Protocol – Clears mental stress and emotional interference',
      'Emotional Intelligence Engine – Builds emotional awareness and control',
      'Decision Matrix Optimization – Strengthens logical and confident decision-making'
    ],
    description:
      'Mind Architecture is a neuroscience-based psychological pathway that helps individuals restructure their thinking, regulate emotions, and improve decision-making. The workshop equips participants with practical frameworks to build mental clarity, emotional stability, and cognitive discipline for personal and professional growth.'
  };

  const audience = [
    'Students and young professionals',
    'Leaders and managers',
    'Entrepreneurs and decision-makers',
    'Individuals seeking mental clarity and emotional balance'
  ];

  const learnings = [
    'Emotional regulation and stress management',
    'Structured decision-making',
    'Focus and cognitive discipline',
    'Psychological resilience'
  ];

  const methodology = [
    'Brain-based learning',
    'Reflection exercises',
    'Simulations',
    'Guided group activities'
  ];

  const structure = [
    'Day 1: Neural Detox Protocol and Emotional Intelligence Engine',
    'Day 2: Decision Matrix Optimization and clarity blueprint'
  ];

  const benefits = [
    'Mental clarity',
    'Emotional discipline',
    'Decision confidence',
    'Practical life tools'
  ];

  const outcomes = [
    'Mind Architecture Completion Certificate',
    'Personal Cognitive Blueprint',
    'Human Intelligence Toolkit'
  ];

  const cardBase =
    'rounded-2xl border border-[#1f3566] bg-[#0f1e3d]/90 p-6 md:p-7 shadow-[0_10px_30px_rgba(2,8,24,0.35)]';
  const sectionTitle = 'text-xl md:text-2xl font-semibold text-[#eaf2ff]';
  const listClass = 'space-y-2 text-[#d9e6ff] leading-relaxed';

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,#1f4ea6_0%,#10244a_35%,#08142c_70%,#040a17_100%)] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-8 md:pt-10">
        <Link
          href="/hi-workshops"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5a84d6] bg-[#112955]/70 px-4 py-2 text-sm font-medium text-[#eaf2ff] transition hover:bg-[#1a3d7a]"
          aria-label="Back to workshops"
        >
          <ArrowLeft size={16} /> Back
        </Link>

        <header className="overflow-hidden rounded-3xl border border-[#2c4f8f] bg-[#0c1a38]/85 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <div className="relative">
            <div
              className="h-44 w-full bg-cover bg-center md:h-56"
              style={{ backgroundImage: "linear-gradient(180deg, rgba(3,9,24,0.15), rgba(3,9,24,0.8)), url('/images/hi-workshops-banner.jpg')" }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#123e85]/75 via-[#1b3678]/45 to-transparent" aria-hidden />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                {title}
              </motion.h1>
              <motion.p
                className="mt-2 text-base font-medium text-[#d8e7ff] md:text-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                Psychological Pathway
              </motion.p>
            </div>
          </div>
        </header>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4c72b9] bg-[#102a55] px-4 py-2 text-sm text-[#d9e6ff]">
            <Clock size={14} /> {details.duration}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4c72b9] bg-[#102a55] px-4 py-2 text-sm text-[#d9e6ff]">
            <Layers size={14} /> {details.level}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4c72b9] bg-[#102a55] px-4 py-2 text-sm text-[#d9e6ff]">
            <Star size={14} /> {details.rating}
          </span>
        </div>

        <main className="mt-8 grid gap-6 md:grid-cols-2">
          <section className={`${cardBase} md:col-span-2`}>
            <h2 className={sectionTitle}>Program Overview</h2>
            <p className="mt-3 text-base leading-8 text-[#d9e6ff] md:text-lg">{details.description}</p>
          </section>

          <section className={cardBase}>
            <h3 className={sectionTitle}>Who This Pathway Is For</h3>
            <ul className={`${listClass} mt-4`}>
              {audience.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>

          <section className={cardBase}>
            <h3 className={sectionTitle}>What You Will Learn</h3>
            <ul className={`${listClass} mt-4`}>
              {learnings.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>

          <section className={`${cardBase} md:col-span-2`}>
            <h3 className={sectionTitle}>Core Modules</h3>
            <ul className={`${listClass} mt-4`} aria-label="Modules">
              {details.modules.map((m) => (
                <li key={m}>- {m}</li>
              ))}
            </ul>
          </section>

          <section className={cardBase}>
            <h3 className={sectionTitle}>Methodology</h3>
            <ul className={`${listClass} mt-4`}>
              {methodology.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>

          <section className={cardBase}>
            <h3 className={sectionTitle}>Workshop Structure</h3>
            <ul className={`${listClass} mt-4`}>
              {structure.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>

          <section className={cardBase}>
            <h3 className={sectionTitle}>Key Benefits</h3>
            <ul className={`${listClass} mt-4`}>
              {benefits.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>

          <section className={cardBase}>
            <h3 className={sectionTitle}>Certification and Outcome</h3>
            <ul className={`${listClass} mt-4`}>
              {outcomes.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
        </main>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={{ pathname: '/productpage', query: { workshop: title } }}
            className="inline-flex rounded-lg border border-[#85a8e6] bg-[#e9f1ff] px-5 py-2.5 font-semibold text-[#0b1d40] transition hover:bg-white"
            aria-label="Learn more"
          >
            Learn More
          </Link>
          <Link
            href="/hi-workshops"
            className="inline-flex rounded-lg border border-[#5b80c9] bg-[#122d5d] px-5 py-2.5 font-semibold text-[#eaf2ff] transition hover:bg-[#173975]"
            aria-label="All workshops"
          >
            Browse More
          </Link>
        </div>
      </div>
    </div>
  );
}
