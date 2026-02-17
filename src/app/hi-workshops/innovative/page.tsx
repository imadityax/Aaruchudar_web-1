'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Layers, Star } from 'lucide-react';
import styles from '../styles.module.css';

export default function InnovationWorkshop() {
  const title = 'Innovation Circuits';
  const details = {
    duration: '2 days',
    level: 'Advanced',
    rating: 4.9,
    modules: [
      'Creative Neural Networks – Strengthens creative and idea-generation skills',
      'Leadership Algorithm Labs – Builds leadership judgment and strategy',
      'Innovation Sprint Engine – Converts ideas into practical solutions'
    ],
    description:
      'An advanced pathway focused on creative thinking, leadership development, and innovation execution. Train to transform ideas into action through structured innovation and leadership frameworks.'
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
            Innovation Pathway
          </motion.p>
        </div>
      </header>

      {/* Content */}
      <main className={`${styles.scrollSection} ${styles.workshopsSection}`}>
        <div className={styles.container}>
          <div className={`${styles.workshopCard} ${styles.innovative}`}>
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
              <li>Innovation labs</li>
              <li>Creative exercises</li>
              <li>Group strategy sessions</li>
              <li>Reflection activities</li>
            </ul>

            <h3 className="heading-3" style={{ marginTop: '1rem' }}>Workshop Structure</h3>
            <ul className={styles.workshopList}>
              <li>Day 1: Creative Neural Networks & Leadership Algorithm Labs</li>
              <li>Day 2: Innovation Sprint Engine & innovation blueprint</li>
            </ul>

            <h3 className="heading-3" style={{ marginTop: '1rem' }}>Key Benefits</h3>
            <ul className={styles.workshopList}>
              <li>Creative confidence</li>
              <li>Leadership capability</li>
              <li>Innovation execution skills</li>
              <li>Strategic clarity</li>
            </ul>

            <h3 className="heading-3" style={{ marginTop: '1rem' }}>Certification & Outcome</h3>
            <ul className={styles.workshopList}>
              <li>Innovation Circuits Completion Certificate</li>
              <li>Personal Innovation Blueprint</li>
              <li>Human Intelligence Innovation Toolkit</li>
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
