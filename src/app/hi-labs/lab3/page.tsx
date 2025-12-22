'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InteractiveBrain, type RegionKey } from '@/components/interactive-brain/InteractiveBrain';
import styles from '../styles.module.css';

const labData = {
  id: 3,
  title: "Inner Focus in a Noisy World",
  description: "Master the art of maintaining focus and attention in a distraction-filled environment",
  activeRegions: ['Frontal' as RegionKey, 'Parietal' as RegionKey],
  brainParts: {
    'Frontal': {
      title: "Executive Attention Network",
      description: "Regions responsible for maintaining focus and filtering distractions.",
      functions: [
        "Sustained attention",
        "Goal-directed focus",
        "Distraction filtering",
        "Task switching",
        "Mind wandering control",
        "Self-reflection"
      ],
      details: [
        {
          name: "Dorsal Attention Network",
          role: "Your focus spotlight",
          functions: ["Sustained attention", "Goal-directed focus", "Distraction filtering", "Task switching"]
        },
        {
          name: "Default Mode Network",
          role: "Internal thought manager",
          functions: ["Mind wandering control", "Self-reflection", "Future planning", "Memory consolidation"]
        }
      ]
    },
    'Parietal': {
      title: "Attention Control Centers",
      description: "Areas that help direct and maintain attention in space and time.",
      functions: [
        "Spatial awareness",
        "Attention shifting",
        "Visual-motor coordination",
        "Multi-sensory integration",
        "Sustained attention",
        "Working memory"
      ],
      details: [
        {
          name: "Posterior Parietal Cortex",
          role: "Spatial attention director",
          functions: ["Spatial awareness", "Attention shifting", "Visual-motor coordination", "Multi-sensory integration"]
        },
        {
          name: "Superior Parietal Lobule",
          role: "Focus maintainer",
          functions: ["Sustained attention", "Working memory", "Spatial processing", "Motor planning"]
        }
      ]
    }
  }
};

export default function Lab3Page() {
  const router = useRouter();
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeSection, setActiveSection] = useState('welcome');
  const [activeBrainRegion, setActiveBrainRegion] = useState<RegionKey>(labData.activeRegions[0]);

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Focus Tools',
    cases: 'Case Examples',
    games: 'Attention Games',
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
                  <h2 className={styles.sectionTitle}>Lab 3: Inner Focus in Noisy world</h2>
                  <p className={styles.sectionDescription}>
                    Welcome to Inner Focus in Noisy world, which assists the participants in reclaiming control over their attention in a distracted world by learning how to optimize their brains to recognize distractions and develop the ability to filter out distractions and cultivate deep focus. This targets the development of consistent inner focus and productivity and the establishment of a peaceful mind under distracting circumstances.
                  </p>
                  <div className={styles.focusArea}>
                    <h3 className={styles.focusTitle}>Core Theme</h3>
                    <ul>
                      <li>Focused Attention: Maintain attention despite internal or external distractions.</li>
                      <li>Mindfulness Regulation: Recognize focus drift and refocus effortlessly.</li>
                      <li>Focus Habits: Create repetitive habits of deep focus.</li>
                      <li>Mental Clarity: Enhance understanding of what matters.</li>
                      <li>Cool Response: Awareness over tension to distractions.</li>
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
                  <h2 className={styles.sectionTitle}>Focus tools</h2>
                  <p className={styles.sectionDescription}>
                    Focus tools help participants for focusing, which allow participants to deal with diverted attentions while tracking their attention movements and aligning tasks based on mental energy and then creating habits of deep focus, resulting in developing high-level focused skills.
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
                        Meena had a short attention span and was always getting distracted. Meena was able to identify and control sources of distraction by performing the Focus Flow Exercise.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: Effortless task focus</span>
                      </div>
                    </div>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 2</h3>
                      <p className={styles.infoCardDescription}>
                        In one project team, members lost focus among all those mental and environmental sounds and used attention-drills techniques to maintain their presence in sync.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: In-depth discussions</span>
                        <span className={styles.tag}>Better collaboration</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'games' && (
                <div>
                  <h2 className={styles.sectionTitle}>Games & Activities</h2>
                  <p className={styles.sectionDescription}>
                    Practical sessions will teach participants how to control their attentions. The focus activities ensure awareness of distractions and teach switching back to focus even under pressure.
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
                        <li>Attention easily diverted by internal or external stimuli.</li>
                        <li>Frequent task switching between activities.</li>
                        <li>Distractions lead to stress, annoyance, or mental tiredness.</li>
                        <li>Lack of awareness about deviating focus causing wasted time and mistakes.</li>
                        <li>Presence in conversations and tasks is partial or sporadic.</li>
                      </ul>
                    </div>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Active Outcomes</h3>
                      <ul>
                        <li>Continuous focus despite diversion within and/or outside.</li>
                        <li>Rapid detection of focus drift and effortless refocusing.</li>
                        <li>A calm awareness replaces tension when distractions arise.</li>
                        <li>Greater awareness of priorities and task relevance.</li>
                        <li>Consistency in focus habits raises productivity.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'journey' && (
                <div>
                  <h2 className={styles.sectionTitle}>Journey beyond</h2>
                  <p className={styles.sectionDescription}>
                    Beyond the Inner focus in noisy world, being present becomes habit. Attendees notice distraction early and remain mentally present in difficult circumstances. Teams build a culture of presence where listening is real, tasks are completed with fewer distractions, and teamwork is smoother.
                  </p>
                </div>
              )}

              {activeSection === 'reflection' && (
                <div>
                  <h2 className={styles.sectionTitle}>Reflection Corner</h2>
                  <ul>
                    <li>If not productivity, what do you think focus is really about?</li>
                    <li>How will you know if you’re distracted–and how will you return to focus?</li>
                    <li>Suggest a daily practice to strengthen inner focus in noisy world.</li>
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