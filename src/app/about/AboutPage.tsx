'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function AboutPage() {
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: headerRef });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.5]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div className="min-h-screen bg-[#0b0e17]">
      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 border border-purple-500/40 text-purple-300 flex items-center gap-2 px-4 py-2 rounded-md bg-transparent hover:bg-purple-600 hover:text-white transition"
        aria-label="Go back to home"
      >
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>Home</span>
      </Link>

      {/* Hero */}
      <header
        ref={headerRef}
        className="relative flex items-center justify-center overflow-hidden py-24 px-8 min-h-[50vh]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hi-workshops-banner.jpg')" }}
          aria-hidden
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ y: titleY, opacity: titleOpacity }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            AARUCHUDAR PRIVATE LIMITED
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ y: subtitleY }}
          >
           AARUCHUDAR PRIVATE LIMITED is a human intelligence research and training organization
            focused on cognitive health, mental agility, and improving brain
            function through practical learning experiences.
          </motion.p>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-12">
        <div className="max-w-5xl mx-auto grid gap-10">
          {/* Mission */}
          <section className="rounded-2xl p-8 backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Our Mission in Human Intelligence Research
            </h2>
            <p className="text-gray-300">
              Our mission is to strengthen cognitive health and mental agility by
              combining psychology, neuroscience, and systems thinking. We design
              human intelligence training experiences that convert knowledge for
              the brain into measurable real-world outcomes.
            </p>
          </section>

          {/* What We Do */}
          <section className="rounded-2xl p-8 backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-3">
              What We Do
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400" aria-hidden />
                Human Intelligence Labs for cognitive skill development
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400" aria-hidden />
                Human Intelligence Courses for structured learning
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400" aria-hidden />
                Human Intelligence Workshops for practical training
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400" aria-hidden />
                Human Intelligence Events for research and collaboration
              </li>
            </ul>
          </section>

          {/* Get Involved */}
          <section className="rounded-2xl p-8 backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Get Involved
            </h2>
            <p className="text-gray-300 mb-4">
              Choose a pathway designed to improve brain function and cognitive
              performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/hi-labs" className="px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:bg-white/10 transition">
                Explore Human Intelligence Labs
              </Link>
              <Link href="/hi-courses" className="px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:bg-white/10 transition">
                Explore Human Intelligence Courses
              </Link>
              <Link href="/hi-workshops" className="px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:bg-white/10 transition">
                Explore Human Intelligence Workshops
              </Link>
              <Link href="/hi-events" className="px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:bg-white/10 transition">
                Explore Human Intelligence Events
              </Link>
            </div>
          </section>

          {/* Organization Structure */}
          <section className="rounded-2xl p-8 backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Organization Structure
            </h2>
            <p className="text-gray-300 mb-4">
              Our organization structure supports human intelligence research,
              cognitive training, and scalable learning with clarity and
              accountability.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Leadership</h3>
                <ul className="space-y-2">
                  <li>Founder & CEO — Vision, strategy, partnerships</li>
                  <li>COO — Operations, processes, compliance</li>
                  <li>CTO — Platforms, engineering, data systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Programs</h3>
                <ul className="space-y-2">
                  <li>Human Intelligence Labs — Research & mentorship</li>
                  <li>Human Intelligence Courses — Curriculum & certification</li>
                  <li>Human Intelligence Workshops — Facilitation & outcomes</li>
                  <li>Human Intelligence Events — Community & collaboration</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Enablement</h3>
                <ul className="space-y-2">
                  <li>Product & Design — Platform experience</li>
                  <li>Marketing & Growth — Brand & outreach</li>
                  <li>Partnerships — Institutions & industry</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Operations</h3>
                <ul className="space-y-2">
                  <li>Finance & Legal — Governance & compliance</li>
                  <li>Community Success — Learner outcomes</li>
                  <li>Administration — Scheduling & coordination</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Connect With Us */}
          <section className="rounded-2xl p-8 backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Connect With Us
            </h2>
            <p className="text-gray-300 mb-4">
              Follow Aaruchudar for updates on human intelligence research,
              cognitive training programs, workshops, and events.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="https://twitter.com/aaruchudar" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:bg-white/10 transition">Twitter / X</Link>
              <Link href="https://www.instagram.com/aaruchudar" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:bg-white/10 transition">Instagram</Link>
              <Link href="https://www.linkedin.com/company/aaruchudar" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:bg-white/10 transition">LinkedIn</Link>
              <Link href="https://www.youtube.com/@aaruchudar" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-white/10 text-gray-200 hover:bg-white/10 transition">YouTube</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
