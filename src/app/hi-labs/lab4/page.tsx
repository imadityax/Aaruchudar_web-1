'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InteractiveBrain, type RegionKey } from '@/components/interactive-brain/InteractiveBrain';
import styles from '../styles.module.css';

const labData = {
  id: 4,
  title: "The Power of Listening",
  description: "Master the art of deep listening and understanding others",
  activeRegions: ['Temporal' as RegionKey, 'Frontal' as RegionKey],
  brainParts: {
    'Temporal': {
      title: "Language and Emotion Processing Centers",
      description: "Regions responsible for understanding speech, tone, and emotional signals.",
      functions: [
        "Speech comprehension",
        "Emotional tone detection",
        "Social cue processing",
        "Voice recognition",
        "Auditory processing",
        "Emotional memory"
      ],
      details: [
        {
          name: "Temporal Lobes (Wernicke's Area)",
          role: "Your language decoder",
          functions: ["Speech comprehension", "Language processing", "Auditory processing", "Semantic memory"]
        },
        {
          name: "Superior Temporal Sulcus (STS)",
          role: "Your tone and emotion detector",
          functions: ["Voice tone analysis", "Facial expression processing", "Social cue detection", "Emotion recognition"]
        }
      ]
    },
    'Frontal': {
      title: "Social Understanding Network",
      description: "Areas that enable empathy and social cognition.",
      functions: [
        "Empathy processing",
        "Theory of mind",
        "Action understanding",
        "Emotional mirroring",
        "Social cognition",
        "Perspective taking"
      ],
      details: [
        {
          name: "Mirror Neuron System",
          role: "Your brain's empathy engine",
          functions: ["Action understanding", "Emotional mirroring", "Empathy processing", "Social learning"]
        },
        {
          name: "Medial Prefrontal Cortex (mPFC)",
          role: "Your social thinker",
          functions: ["Theory of mind", "Social cognition", "Self-awareness", "Emotional understanding"]
        }
      ]
    }
  }
};

export default function Lab4Page() {
  const router = useRouter();
  const [autoRotate, setAutoRotate] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [activeBrainRegion, setActiveBrainRegion] = useState<RegionKey>(labData.activeRegions[0]);

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Listening Tools',
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
                  <h2 className={styles.sectionTitle}>Lab 4: The Power of Listening</h2>
                  <p className={styles.sectionDescription}>
                    When it comes to fast-moving situations, listening becomes more reactive than tactical. Welcome to The Power of Listening, which enables participants to improve their listening skills by training their brains to be more present in the situation with fewer distractions and the ability to discern the actual meaning.
                  </p>
                  <div className={styles.focusArea}>
                    <h3 className={styles.focusTitle}>Core Theme</h3>
                    <ul>
                      <li>Deep Listening: Get comfortable, do not interrupt, do not judge.</li>
                      <li>Meaning Awareness: Discern significant statements, emotions, and meaning behind words.</li>
                      <li>Reflective Response: Straightforward, correct, and closely related to the question.</li>
                      <li>Trust Building: Enhanced psychological safety and connection.</li>
                      <li>Collaborative Clarity: Communicate more in line and misunderstand less.</li>
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
                  <h2 className={styles.sectionTitle}>Listening Tools</h2>
                  <p className={styles.sectionDescription}>
                    Listening tools address internal noise and interruptions through Interruptibility Drills (program responses to impulses), Layered Listening Loops (capture information, emotion, and intent), and Meaning Capture Templates (translate a conversation into clear comprehension).
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
                        Ravi had a typical reactive style where he responded quickly but missed critical points during feedback conversations. Ravi developed skills using Layered Listening Loops.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: Better feedback</span>
                        <span className={styles.tag}>Enhanced comprehension</span>
                      </div>
                    </div>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 2</h3>
                      <p className={styles.infoCardDescription}>
                        Miscommunication among leadership in a team meeting. Listening exercises enabled concentration and clear thinking.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: Trust-building dialogue</span>
                        <span className={styles.tag}>Quick alignment</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'games' && (
                <div>
                  <h2 className={styles.sectionTitle}>Games & Activities</h2>
                  <p className={styles.sectionDescription}>
                    Listening practicals train attention during engagement, helping people listen and respond reflectively rather than reactively. Individuals learn to listen calmly in key conversations.
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
                        <li>Listening is interrupted by internal thoughts, judgements, or urge to respond.</li>
                        <li>Critical information, feelings, or intentions are missed.</li>
                        <li>Responses are rapid but often misaligned with the question or input.</li>
                        <li>Conversations lead to friction, defensiveness, or misunderstandings.</li>
                        <li>Miscommunication reduces trust and psychological safety.</li>
                      </ul>
                    </div>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Active Outcomes</h3>
                      <ul>
                        <li>Full presence without interrupting or pre-judging.</li>
                        <li>Capture meanings, emotions, and intentions under the words.</li>
                        <li>Responses are reflective, relevant, and specific.</li>
                        <li>Conversations feel safe, respectful, and productive.</li>
                        <li>Shared understanding improves alignment, trust, and teamwork.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'journey' && (
                <div>
                  <h2 className={styles.sectionTitle}>Journey Beyond</h2>
                  <p className={styles.sectionDescription}>
                    Beyond The Power of Listening, listening becomes a deliberate skill: hearing without interrupting, understanding, and responding accordingly. Teams build trust where every voice is heard.
                  </p>
                </div>
              )}

              {activeSection === 'reflection' && (
                <div>
                  <h2 className={styles.sectionTitle}>Reflection Corner</h2>
                  <ul>
                    <li>How has your view of listening evolved beyond simply hearing the words?</li>
                    <li>How will you notice drifting away from truly listening—and what helps you return?</li>
                    <li>What daily habit helps you listen more attentively and with presence?</li>
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