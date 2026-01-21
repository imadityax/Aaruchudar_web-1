'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Filter, Star, Clock, Layers, PlayCircle, Brain, Puzzle, CheckCircle } from 'lucide-react';

const programs = [
  {
    title: 'Clarity as Culture',
    description: 'Transform your mindset and build a culture of clear thinking and purposeful action in your personal and professional life.',
    features: [
      'Foundations of Clarity & Awareness',
      'Mindset Restructuring Techniques',
      'Practical Clarity Tools for Daily Use'
    ],
    duration: '8 weeks',
    level: 'Intermediate',
    category: 'Mindset',
    rating: 4.8,
  },
  {
    title: 'Decision Making Without Drama',
    description: 'Master the art of confident decision-making free from emotional turmoil, stress, or paralysis through analysis.',
    features: [
      'Understanding Decision Fatigue',
      'Emotional Detachment Techniques',
      'Logical Decision Frameworks'
    ],
    duration: '6 weeks',
    level: 'Beginner',
    category: 'Decisions',
    rating: 4.7,
  },
  {
    title: 'Inner Focus in Noisy Worlds',
    description: 'Focus and concentration are assets in development that will help one make it through a modern world full of distractions.',
    features: [
      'Attention Training Essentials',
      'Digital Discipline Methods',
      'Deep Work Implementation System'
    ],
    duration: '10 weeks',
    level: 'Advanced',
    category: 'Focus',
    rating: 4.9,
  },
  {
    title: 'The Power of Listening',
    description: 'Deep, active listening can transform the way you communicate and relate to others.',
    features: [
      'Difference Between Hearing & Listening',
      'Empathic Listening Practices',
      'Listening Applied Drills'
    ],
    duration: '6 weeks',
    level: 'Beginner',
    category: 'Communication',
    rating: 4.6,
  },
  {
    title: 'Intelligent Conflict & Recovery',
    description: 'Handle conflict smarter; build better relationships using effective conflict resolution techniques.',
    features: [
      'Understanding Conflict Structure',
      'Emotional Regulation Tools',
      'Resolution Strategy Frameworks'
    ],
    duration: '8 weeks',
    level: 'Intermediate',
    category: 'Communication',
    rating: 4.7,
  },
  {
    title: 'Systematic Thinking',
    description: 'Master systematic thinking to demystify the complexity of a problem into clear, precise solutions.',
    features: [
      'Fundamentals of Systems Analysis',
      'Pattern Mapping & Recognition',
      'Tools of Strategic Planning'
    ],
    duration: '10 weeks',
    level: 'Advanced',
    category: 'Thinking',
    rating: 4.8,
  },
  {
    title: 'Mind Architect',
    description: 'Advanced program on cognitive architecture and metacognition.',
    features: [
      'Design of Cognitive System',
      'Advanced Mental Models',
      'Metacognitive Strategies',
      'Personalized Cognitive Enhancement Plan'
    ],
    duration: '12 weeks',
    level: 'Expert',
    category: 'Thinking',
    rating: 5.0,
  }
];

const categories = ['All', 'Mindset', 'Decisions', 'Focus', 'Communication', 'Thinking'];

const HICoursesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredPrograms = useMemo(() => {
    if (activeCategory === 'All') return programs;
    return programs.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0b0e17]" aria-live="polite" aria-busy>
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0e17] pt-16 md:pt-24 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-purple-500/40 text-purple-300 bg-transparent hover:bg-purple-600 hover:text-white transition"
          aria-label="Go back to home"
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Home</span>
        </Link>
      </div>

      {/* HERO SECTION */}
      <header className="relative flex items-center justify-center overflow-hidden py-24 md:py-28 px-6 min-h-[54vh]">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/hi-courses-banner.jpg')" }} aria-hidden />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            HI <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Courses</span>
          </motion.h1>

          <motion.p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
            Structured programs designed to elevate how you think, decide and lead. Practical-driven learning, guided by experts.
          </motion.p>

          {/* Hero stat badges */}
          <motion.div className="mt-8 flex flex-wrap justify-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <span className="px-3 py-1 rounded-full text-xs md:text-sm border border-white/10 bg-white/5 text-gray-200">Cohort-based & self-paced</span>
            <span className="px-3 py-1 rounded-full text-xs md:text-sm border border-white/10 bg-white/5 text-gray-200">Certificate of completion</span>
            <span className="px-3 py-1 rounded-full text-xs md:text-sm border border-white/10 bg-white/5 text-gray-200">Lifetime access</span>
          </motion.div>
        </div>
      </header>

      {/* FILTERS BAR */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Filter className="w-4 h-4" aria-hidden />
            <span className="text-sm">Filter by category</span>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Course categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 rounded-md text-sm border transition ${
                  activeCategory === cat
                    ? 'border-purple-500 text-white bg-purple-600'
                    : 'border-white/10 text-gray-300 bg-white/5 hover:border-purple-400/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* /////////////////// */}

      <section className="py-20 bg-transparent">
        <h2 className="text-center text-3xl font-bold mb-12">
          <span className="inline-block px-4 py-2 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/20 text-white">
            Boost Your Abilities
          </span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            { title: "Expert Video Courses", Icon: PlayCircle, points: ["20+ hours", "Easy lessons", "Track progress"] },
            { title: "Brain Training Games", Icon: Brain, points: ["Adaptive difficulty", "Improve logic & focus"] },
            { title: "Puzzles", Icon: Puzzle, points: ["150+ puzzles", "Smart difficulty progression"] }
          ].map(({ title, Icon, points }, i) => (
            <div key={i} className="rounded-2xl p-8 shadow-xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur border border-white/10 hover:border-emerald-400/40 transition transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-emerald-400" aria-hidden />
                <h4 className="text-xl font-semibold text-white">{title}</h4>
              </div>
              <ul className="space-y-2 text-gray-300">
                {points.map((p: string) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-400" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-transparent py-24 border-t border-white/10">
        <h2 className="text-center text-3xl font-bold mb-12">
          <span className="inline-block px-4 py-2 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/20 text-white">
            Explore our plans
          </span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div className="rounded-2xl p-8 shadow-xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur border border-white/10 hover:border-emerald-400/40 transition transform hover:-translate-y-1">
            <h4 className="font-semibold mb-4 text-gray-300">BI-WEEKLY</h4>
            <h2 className="text-3xl font-bold mb-4 text-white">₹1358.99</h2>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden /><span>7-day trial</span></li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden /><span>IQ Certificate</span></li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden /><span>Full Access</span></li>
            </ul>
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl transition shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0e17]">
              Get Started
            </button>
          </div>

          <div className="relative rounded-2xl p-8 shadow-2xl bg-gradient-to-b from-emerald-600/10 to-white/0 backdrop-blur border-2 border-emerald-600/70 hover:border-emerald-400 transition transform hover:-translate-y-1 ring-1 ring-emerald-500/30">
            <span className="absolute -top-3 right-4 px-3 py-1 text-xs rounded-full bg-emerald-600 text-white shadow">
              Most popular
            </span>
            <h4 className="font-semibold mb-4 text-gray-300">MONTHLY</h4>
            <h2 className="text-3xl font-bold mb-4 text-white">₹2718.99</h2>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden /><span>Maximum savings</span></li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden /><span>Complete assessment</span></li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden /><span>Expert courses</span></li>
            </ul>
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl transition shadow-lg shadow-emerald-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0e17]">
              Get Started
            </button>
          </div>
        </div>
      </section>



      {/* /////////////////// */}

      {/* COURSE GRID */}
      <main className="py-12 md:py-14 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {filteredPrograms.map((program, index) => (
            <motion.article
              key={program.title}
              className="rounded-2xl p-7 flex flex-col backdrop-blur-md shadow-xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                <div className="flex items-center gap-1 text-yellow-400" aria-label={`${program.rating} out of 5 stars`}>
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span className="text-sm">{program.rating}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">{program.description}</p>

              {/* badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-gray-300">
                  <Clock className="w-3.5 h-3.5" /> {program.duration}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-gray-300">
                  <Layers className="w-3.5 h-3.5" /> {program.level}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-gray-300">
                  {program.category}
                </span>
              </div>

              {/* features */}
              <ul className="space-y-3 mb-8" aria-label="Key features">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-purple-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* price & CTA */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400">Includes resources & support</span>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={{ pathname: '/hi-labs' }}
                    className="px-4 py-3 rounded-md border border-white/10 text-gray-200 hover:bg-white/10 transition"
                    aria-label="Explore labs"
                  >
                    Explore Labs
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty state */}
        {filteredPrograms.length === 0 && (
          <div className="max-w-7xl mx-auto mt-10 text-center text-gray-300">No courses match this category.</div>
        )}
      </main>
    </div>
  );
};

export default HICoursesPage;
