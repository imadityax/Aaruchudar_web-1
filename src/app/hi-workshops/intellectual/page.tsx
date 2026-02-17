'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Layers, Star } from 'lucide-react';
import styles from '../styles.module.css';

export default function IntellectualWorkshop() {
  const title = 'Cognitive Networks';
  const details = {
    duration: '1 day',
    level: 'Beginner',
    rating: 4.7,
    modules: [
      'Critical Thinking Accelerator – Builds reasoning and problem-solving skills',
      'Deep Listening Protocols – Improves attention and understanding',
      'Conflict Resolution Engine – Develops balanced and solution-oriented responses'
    ],
    description:
      'A foundational intellectual pathway designed to strengthen thinking, listening, and conflict-handling skills for clear communication, logical reasoning, and effective collaboration.'
  };

  return (
    <div className={styles.hiWorkshops}>
      {/* Back */}
      <Link href="/hi-workshops" className={styles.backLink} aria-label="Back to workshops">
        <ArrowLeft size={16} /> Back
      </Link>

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroBanner} aria-hidden style={{ backgroundImage: "url('/images/hi-workshops-banner.jpg')" }} />
        <div className={styles.heroContent}>
          <motion.h1 className="heading-1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {title}
          </motion.h1>
          <motion.p style={{ color: 'var(--text-secondary)' }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Intellectual Pathway
          </motion.p>
        </div>
      </header>

      {/* Content */}
      <main className={`${styles.scrollSection} ${styles.workshopsSection}`}>
        <div className={styles.container}>
          <div className={`${styles.workshopCard} ${styles.intellectual}`}>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={styles.badge}><Clock size={14} /> {details.duration}</span>
              <span className={styles.badge}><Layers size={14} /> {details.level}</span>
              <span className={styles.badge}><Star size={14} /> {details.rating}</span>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{details.description}</p>

            <h3 className="heading-3" style={{ marginTop: '0.75rem' }}>Core Modules</h3>
            <ul className={styles.workshopList} aria-label="Modules">
              {details.modules.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>

            <h3 className="heading-3" style={{ marginTop: '1rem' }}>Methodology</h3>
            <ul className={styles.workshopList}>
              <li>Interactive exercises</li>
              <li>Scenario learning</li>
              <li>Group discussions</li>
              <li>Reflection tasks</li>
            </ul>

            <h3 className="heading-3" style={{ marginTop: '1rem' }}>Workshop Structure</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Single Day Program: Critical Thinking Accelerator, Deep Listening Protocols, Conflict Resolution Engine, Integration session
            </p>

            <h3 className="heading-3" style={{ marginTop: '1rem' }}>Key Benefits</h3>
            <ul className={styles.workshopList}>
              <li>Clear thinking</li>
              <li>Strong communication</li>
              <li>Conflict-handling skills</li>
              <li>Increased confidence</li>
            </ul>

            <h3 className="heading-3" style={{ marginTop: '1rem' }}>Certification & Outcome</h3>
            <ul className={styles.workshopList}>
              <li>Cognitive Networks Completion Certificate</li>
              <li>Core Human Intelligence Toolkit</li>
              <li>Personal Thinking Framework</li>
            </ul>

            <div className="flex items-center justify-between mt-4">
              <div className={styles.cardActions}>
                <Link href={{ pathname: '/productpage', query: { workshop: title } }} className={styles.ctaSecondary} aria-label="Learn more">
                  Learn More
                </Link>
                <Link href="/hi-workshops" className={styles.ctaPrimary} aria-label="All workshops">
                  Browse More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
