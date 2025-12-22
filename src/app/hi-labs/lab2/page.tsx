'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InteractiveBrain, type RegionKey } from '@/components/interactive-brain/InteractiveBrain';
import styles from '../styles.module.css';

const labData = {
  id: 2,
  title: "Decision Making Without Drama",
  description: "Master the art of making clear, balanced decisions without emotional overwhelm",
  activeRegions: ['Frontal' as RegionKey, 'Temporal' as RegionKey],
  brainParts: {
    'Frontal': {
      title: "Prefrontal Decision Centers",
      description: "Critical regions for balanced decision-making and emotional processing",
      functions: [
        "Value assessment",
        "Emotional regulation",
        "Logical analysis",
        "Strategic planning",
        "Working memory",
        "Cognitive control"
      ],
      details: [
        {
          name: "Ventromedial PFC (vmPFC)",
          role: "Value assessment and emotional regulation",
          functions: ["Decision value calculation", "Emotional processing", "Risk assessment", "Reward evaluation"]
        },
        {
          name: "Dorsolateral PFC (dlPFC)",
          role: "Rational decision-making",
          functions: ["Logical analysis", "Working memory", "Cognitive control", "Strategic planning"]
        }
      ]
    },
    'Temporal': {
      title: "Emotional Memory Centers",
      description: "Regions responsible for emotional memory and response",
      functions: [
        "Emotional processing",
        "Fear response",
        "Memory enhancement",
        "Social signals",
        "Interoception",
        "Risk processing"
      ],
      details: [
        {
          name: "Amygdala",
          role: "Emotional significance detector",
          functions: ["Emotional processing", "Fear response", "Memory enhancement", "Social signals"]
        },
        {
          name: "Anterior Insula",
          role: "Emotional awareness hub",
          functions: ["Interoception", "Risk processing", "Emotional awareness", "Social emotions"]
        }
      ]
    }
  }
};

export default function Lab2Page() {
  const router = useRouter();
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeSection, setActiveSection] = useState('welcome');
  const [activeBrainRegion, setActiveBrainRegion] = useState<RegionKey>(labData.activeRegions[0]);

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Decision Tools',
    cases: 'Case Examples',
    games: 'Games & Activities',
    culture: 'Outcomes',
    journey: 'Journey Beyond',
    reflection: 'Reflection Corner'
  };

  const handleBackToLabs = () => {
    router.push('/hi-labs');
  };

  return (
    <main className={styles.labContainer}>
      <div className={styles.contentOverlay} />
      
      <div className={styles.mainContent}>
        <div className={styles.brainViewerContainer}>
          <div className={styles.brainViewer}>
            <InteractiveBrain 
              activeRegions={labData.activeRegions}
              labHighlight={true}
              autoRotate={autoRotate}
              onRegionSelect={(region) => region && setActiveBrainRegion(region)}
              isolationOpacity={0.12}
            />
          </div>
        </div>

        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <button onClick={handleBackToLabs} className={styles.backButton}>
                ← Back to Labs
              </button>
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

        <div className={styles.navigationSection}>
          <div className={styles.contentGrid}>
            <div className={styles.navSidebar}>
              <h2 className={styles.navTitle}>Navigation</h2>
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
                  <h2 className={styles.sectionTitle}>Lab 2: Decision making without drama</h2>
                  <p className={styles.sectionDescription}>
                    Welcome to Decision making without drama, where you learn to make choices that are calm, clear, and in line with your values. This empowers the capacity to make decisions without emotional noise, confusion, or hesitation. Instead of yielding to pressure, you will learn to act with direction, confidence, and inner stability.
                  </p>
                  <div className={styles.focusArea}>
                    <h3 className={styles.focusTitle}>Core Theme</h3>
                    <ul>
                      <li>Emotional Clarity: Regulate your emotions to support clean, balanced decisions.</li>
                      <li>Cognitive Control: Stay clear-headed under pressure.</li>
                      <li>Aligned Choices: Make decisions that align with what is important and your direction.</li>
                      <li>Deliberate Action: Move from reactive to intent-driven decision-making.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'brain' && (
                <div>
                  <h2 className={styles.sectionTitle}>Brain Activation Details</h2>
                  {Object.entries(labData.brainParts).map(([region, info]) => (
                    <div key={region} className={styles.brainRegionCard}>
                      <h3>{info.title}</h3>
                      <p>{info.description}</p>
                      <div className={styles.detailsGrid}>
                        {info.details?.map((detail, index) => (
                          <div key={index} className={styles.detailCard}>
                            <h4>{detail.name}</h4>
                            <p className={styles.role}>{detail.role}</p>
                            <div className={styles.functionTags}>
                              {detail.functions.map((func, i) => (
                                <span key={i} className={styles.tag}>{func}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === 'tools' && (
                <div>
                  <h2 className={styles.sectionTitle}>Decision Tools</h2>
                  <p className={styles.sectionDescription}>
                    Decision tools equips you with practical decisions which bring structure, clarity, and emotional steadiness to complex choices. Using cognitive maps to organise thoughts, values grids to align decisions with what truly matters, regret-index visuals to anticipate long-term impact, and ethical edge boards to support shared judgement, you learn to evaluate options without emotional noise.
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
                        Arun kept postponing a decision as he reckoned that everything was a risk. Arun used the Decision Ladder and created a clear difference between facts and assumptions.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: Confident choice</span>
                        <span className={styles.tag}>No overwhelm</span>
                      </div>
                    </div>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 2</h3>
                      <p className={styles.infoCardDescription}>
                        A project group was constantly at odds because they had differing values. The Values Grid facilitated an alignment on core values.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: Collective decisions</span>
                        <span className={styles.tag}>Easier cooperation</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'games' && (
                <div>
                  <h2 className={styles.sectionTitle}>Games & Activities</h2>
                  <p className={styles.sectionDescription}>
                    Hands-on exercises offered in this lab allow thoughtful decision-making to become an instinctual process. The activities assist participants with identifying emotional noise and develop structured skills to make fast and sound decisions even under stressful conditions. All these activities improve judgment and control and make calm and clear decisions as a habit.
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
                        <li>The choices that one makes could be a result of emotion, pressure, or urgency.</li>
                        <li>Overthinking, hesitation, and avoidance cause delays.</li>
                        <li>Trouble distinguishing between facts and assumptions.</li>
                        <li>Conflicting values may create friction and repeated disagreements.</li>
                        <li>Stress increases when it is a matter of making a decision.</li>
                      </ul>
                    </div>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Active Outcomes</h3>
                      <ul>
                        <li>Emotions are governed to facilitate calm and sound judgment.</li>
                        <li>Clear separation between facts, assumptions, and feelings.</li>
                        <li>All decisions remain aligned to our values.</li>
                        <li>Confident action within the boundaries of time.</li>
                        <li>Mutual decision clarity enhances cooperation and lessens conflicts.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'journey' && (
                <div>
                  <h2 className={styles.sectionTitle}>Journey Beyond</h2>
                  <p className={styles.sectionDescription}>
                    Beyond the Decision making without drama, making decisions becomes easier, more instinctive: you understand your emotions, reflect before you act, and choose with confidence. For teams, this turns into a shared way of deciding that removes confusion, keeps everyone on the same page, and makes working together smoother and drama-free.
                  </p>
                </div>
              )}

              {activeSection === 'reflection' && (
                <div>
                  <h2 className={styles.sectionTitle}>Reflection Corner</h2>
                  <ul>
                    <li>If decision making isn't about having all your facts, then what is it really about?</li>
                    <li>How will you spot yourself drifting back into indecision or overthinking, and how will you find recourse to a calmer choice?</li>
                    <li>What's one little thing you could build into your daily routine to avoid needless mental drama before making a decision?</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}