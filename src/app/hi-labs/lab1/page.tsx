'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// Removed Canvas/drei imports since InteractiveBrain manages its own Canvas
import { InteractiveBrain, RegionKey } from '@/components/interactive-brain/InteractiveBrain';
import styles from '../styles.module.css';

const labData = {
  id: 1,
  title: "Clarity as Culture",
  description: "Breaking confusion, Building thinking clarity",
  activeRegions: ['Frontal'] as const,
  brainParts: {
    'Frontal': {
      title: "Prefrontal Cortex & Anterior Cingulate Cortex",
      description: "The CEO of your thinking and error detection system",
      details: [
        {
          name: "Prefrontal Cortex (PFC)",
          role: "The CEO of your thinking",
          functions: ["Executive control", "Decision making", "Logical processing", "Planning"]
        },
        {
          name: "Anterior Cingulate Cortex (ACC)",
          role: "Your brain's error detector",
          functions: ["Error detection", "Conflict monitoring", "Attention control", "Self-correction"]
        }
      ]
    }
  }
};

export default function Lab1Page() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeBrainRegion, setActiveBrainRegion] = useState<RegionKey>('Frontal');

  const sections = {
    welcome: 'Welcome',
    about: 'About Us',
    clarity: 'Clarity as Culture',
    brain: 'Brain Activation',
    tools: 'Clarity Tools',
    cases: 'Case Examples',
    games: 'Games & Activities',
    culture: 'Team Culture',
    journey: 'Journey Beyond',
    reflection: 'Reflection Corner'
  };

  const sideHeadingMap: Record<string, string> = {
    welcome: 'Welcome',
    about: 'About',
    clarity: 'Clarity as Culture',
    brain: 'Brain Activation',
    tools: 'Clarity Tools',
    cases: 'Case Examples',
    games: 'Games & Activities',
    culture: 'Team Culture',
    journey: 'Journey Beyond',
    reflection: 'Reflection'
  };

  return (
    <main className={styles.labContainer}>
      <div className={styles.contentOverlay} />
      
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <Link href="/hi-labs" className={styles.backButton}>
                ← Back to Labs
              </Link>
              <div className={styles.labTitle}>
                <h1>HI LAB {labData.id}</h1>
                <p>{labData.title}</p>
              </div>
            </div>
            <Link href="/" className={styles.homeButton}>
              Home
            </Link>
          </div>
        </header>

        {/* Program overview banner */}
        <div className={styles.headerContent} style={{gap:'8px', padding:'0 16px'}}>
          <div className={styles.headerBadges}>
            <span className={styles.headerBadge}>🗓️ Time period: 8–12 months</span>
            <span className={styles.headerBadge}>📚 Each lab: 8–12 sessions</span>
            <span className={styles.headerBadge}>⏱️ One session: 40 mins</span>
          </div>
        </div>

        <div className={styles.brainViewerContainer}>
          <div className={styles.brainViewer} style={{ width: '100%', height: '500px', position: 'relative' }}>
            {/* Render InteractiveBrain directly (it manages its own Canvas) */}
            <InteractiveBrain 
              activeRegions={[activeBrainRegion]}
              labHighlight={true}
              autoRotate={autoRotate}
              onRegionSelect={(region) => region && setActiveBrainRegion(region)}
            />

            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={styles.controlButton}
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: autoRotate ? 'rgba(6, 255, 165, 0.3)' : 'rgba(6, 255, 165, 0.15)'
              }}
            >
              {autoRotate ? '⏸ Pause Rotation' : '▶️ Auto Rotate'}
            </button>
          </div>

          <div className={styles.infoPanel}>
            <h2 className={styles.infoTitle}>Active Brain Regions</h2>
            {Object.entries(labData.brainParts).map(([region, info]) => (
              <div key={region} className={styles.infoGrid}>
                {info.details.map((detail, index) => (
                  <div key={index} className={styles.infoCard}>
                    <h3 className={styles.infoCardTitle}>{detail.name}</h3>
                    <p className={styles.infoCardDescription}>{detail.role}</p>
                    <div className={styles.tagContainer}>
                      {detail.functions.map((func, i) => (
                        <span key={i} className={styles.tag}>{func}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.navigationSection}>
          <div className={styles.contentGrid}>
            <div className={styles.navSidebar}>
              <h2 className={styles.navTitle}>Lab Navigation</h2>
              <div className={styles.navButtons}>
                {Object.entries(sections).map(([key, title]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`${styles.navButton} ${
                      activeSection === key ? styles.navButtonActive : styles.navButtonInactive
                    }`}
                  >
                    {title}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.mainPanel}>
              {activeSection === 'welcome' && (
                <div>
                  <h2 className={styles.sectionTitle}>Welcome to Lab 1: Clarity as Culture</h2>
                  <p className={styles.sectionDescription}>
                    Welcome to Lab 1, where we transform the way you think, process information, and make decisions. 
                    This lab is designed to activate your brain's executive control centers, helping you develop 
                    crystal-clear thinking patterns that cut through confusion and uncertainty.
                  </p>
                  <div className={styles.focusArea}>
                    <h3 className={styles.focusTitle}>Lab Outcomes</h3>
                    <ul>
                      <li>Develop systematic thinking processes that eliminate mental clutter</li>
                      <li>Strengthen your brain's error detection and self-correction abilities</li>
                      <li>Build sustainable habits for clear decision-making under pressure</li>
                      <li>Transform reactive thinking into intentional, strategic responses</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'clarity' && (
                <div>
                  <h2 className={styles.sectionTitle}>Lab 1: Clarity as Culture</h2>
                  <p className={styles.sectionDescription}>
                    From Confusion to Clarity – by Design, Not by Chance. Welcome to Clarity as Culture where the aim is
                    to improve the way you think, perceive, and decide. This turns on the executive control functions of
                    the brain in order to develop analytical thinking habits so that you can efficiently lock-out
                    distractions, confusion, and inefficiencies.
                  </p>

                  <div className={styles.focusArea}>
                    <h3 className={styles.focusTitle}>Core Theme</h3>
                    <ul>
                      <li>Structured Thinking — Construct sound, logical, and organized thought processes.</li>
                      <li>Accuracy — Improve error detection and correct oneself.</li>
                      <li>High-Clarity — Make strong decisions, even under stress.</li>
                      <li>Intentional Response — Move away from reactive behavior and towards thoughtful action.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'tools' && (
                <div>
                  <h2 className={styles.sectionTitle}>Clarity Tools</h2>
                  <p className={styles.sectionDescription}>
                    Clarity tools are simple models of thought designed to clarify confusion, organize thoughts, and allow
                    one to make quick, clear decisions. They uncover implicit assumptions, reduce mind noise, and yield a
                    unified way of thinking, whether solo or in synchronization with others. They serve as gatekeepers
                    between thinking and doing, managing workflow and ensuring alignment.
                  </p>
                </div>
              )}

              {activeSection === 'cases' && (
                <div>
                  <h2 className={styles.sectionTitle}>Case Examples</h2>
                  <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 1</h3>
                      <p className={styles.infoCardDescription}>
                        Riya felt disturbed but could not put her finger on why. By using the tool known as 10 Whys, she
                        realized that the underlying concern was not workload.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: Clear priorities</span>
                        <span className={styles.tag}>De-stressing</span>
                      </div>
                    </div>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 2</h3>
                      <p className={styles.infoCardDescription}>
                        A group kept missing deadlines because of a misunderstanding on an assignment. They used the
                        Clarity Grid and were able to agree on facts, assumptions, and next actions.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: Removal of confusion</span>
                        <span className={styles.tag}>Faster execution</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'games' && (
                <div>
                  <h2 className={styles.sectionTitle}>Games & Activities</h2>
                  <p className={styles.sectionDescription}>
                    Hands-on experience translates the principles of thinking into reality. They break down difficult
                    concepts, uncover underlying thinking patterns, and give participants the opportunity to apply clarity
                    in making decisions. Dynamic challenges help participants pick apart assumptions fast and make clarity
                    a habit.
                  </p>
                </div>
              )}

              {activeSection === 'culture' && (
                <div>
                  <h2 className={styles.sectionTitle}>Outcomes: Reactive vs Active</h2>
                  <div className={styles.contentGrid}>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Reactive Outcomes</h3>
                      <ul>
                        <li>Thoughts remain disorganized.</li>
                        <li>Choices are made under pressure, urgency, or emotional need.</li>
                        <li>Errors pass undetected or are discovered too late.</li>
                        <li>Responses are automatic and based on habit.</li>
                        <li>Lack of coordination in communication, leading to frequent confusion.</li>
                      </ul>
                    </div>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Active Outcomes</h3>
                      <ul>
                        <li>Thoughts are systematic, logical, and easy to prioritize.</li>
                        <li>Decisions are made calmly, confidently, and clearly, even under stress.</li>
                        <li>Mistakes are picked up early and corrected correctly.</li>
                        <li>Answers are driven by intent.</li>
                        <li>Communication is managed well, eliminating confusion.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'journey' && (
                <div>
                  <h2 className={styles.sectionTitle}>Journey Beyond</h2>
                  <p className={styles.sectionDescription}>
                    Beyond Clarity as Culture, clarity becomes a habit. You start questioning assumptions, making your
                    thoughts visible, and responding thoughtfully. Teams build a shared language through alignment and by
                    identifying underlying misunderstandings, enabling more effective collaboration.
                  </p>
                </div>
              )}

              {activeSection === 'reflection' && (
                <div>
                  <h2 className={styles.sectionTitle}>Reflection Corner</h2>
                  <ul>
                    <li>If not goal-setting, what do you think clarity is all about?</li>
                    <li>How will you know if you’re drifting away from clarity—and how will you return to it?</li>
                    <li>Suggest a daily practice to cultivate clarity in your life.</li>
                  </ul>
                </div>
              )}

              {activeSection === 'brain' && (
                <div>
                  <h2 className={styles.sectionTitle}>Brain Activation Details</h2>
                  {Object.entries(labData.brainParts).map(([region, info]) => (
                    <div key={region} className={styles.brainRegionCard}>
                      <h3>{info.title}</h3>
                      <p>{info.description}</p>
                      {info.details.map((detail, index) => (
                        <div key={index} className={styles.focusArea}>
                          <h4 className={styles.focusTitle}>{detail.name}</h4>
                          <p>{detail.role}</p>
                          <div className={styles.tagContainer}>
                            {detail.functions.map((func, i) => (
                              <span key={i} className={styles.tag}>{func}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}