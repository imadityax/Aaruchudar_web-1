'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InteractiveBrain, type RegionKey } from '@/components/interactive-brain/InteractiveBrain';
import styles from '../styles.module.css';

const labData = {
  id: 5,
  title: 'Intelligent Conflict and Recovery',
  description: 'Handling conflicts with emotional maturity',
  activeRegions: ['Frontal' as RegionKey, 'Temporal' as RegionKey, 'Cerebellum' as RegionKey],
  brainParts: {
    Frontal: {
      title: 'Regulation & Resolution Network',
      description: 'Regions supporting cognitive control and calm conflict navigation.',
      details: [
        { name: 'Dorsolateral PFC', role: 'Resolution clarity & cognitive control', functions: ['Reappraisal', 'Strategic planning', 'Impulse control', 'Perspective taking'] },
        { name: 'Anterior Cingulate Cortex', role: 'Conflict monitoring', functions: ['Error detection', 'Conflict monitoring', 'Attention control', 'Adaptation'] }
      ]
    },
    Temporal: {
      title: 'Emotion Awareness Centers',
      description: 'Areas involved in emotional signal detection and regulation.',
      details: [
        { name: 'Amygdala', role: 'Emotional escalation detector', functions: ['Threat detection', 'Arousal signaling', 'Emotional memory'] },
        { name: 'Insula', role: 'Interoceptive awareness', functions: ['Bodily state awareness', 'Emotion integration', 'Risk awareness'] }
      ]
    },
    Cerebellum: {
      title: 'Emotion-Action Coordination',
      description: 'Cerebellar modulation supporting coordination and regulation under stress.',
      details: [
        { name: 'Cerebellar Cortex', role: 'Behavioral smoothing', functions: ['Response timing', 'Regulation support', 'Motor-emotion coupling'] },
        { name: 'Deep Cerebellar Nuclei', role: 'Stable output', functions: ['Signal integration', 'Error correction', 'Adaptive tuning'] }
      ]
    }
  }
};

export default function Lab5Page() {
  const router = useRouter();
  const [autoRotate, setAutoRotate] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [activeBrainRegion, setActiveBrainRegion] = useState<RegionKey>(labData.activeRegions[0]);

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Conflict Tools',
    cases: 'Case Examples',
    games: 'Games & Activities',
    culture: 'Outcomes',
    journey: 'Journey Beyond',
    reflection: 'Reflection Corner'
  };

  const handleBackToLabs = () => router.push('/hi-labs');

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
              onRegionSelect={(r) => r && setActiveBrainRegion(r)}
              isolationOpacity={0.12}
            />
          </div>
        </div>

        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <button onClick={handleBackToLabs} className={styles.backButton}>← Back to Labs</button>
              <div className={styles.labTitle}>
                <h1>HI LAB {labData.id}</h1>
                <p>{labData.title}</p>
              </div>
            </div>
            <Link href="/" className={styles.homeButton}>Home</Link>
          </div>
        </header>

        <div className={styles.navigationSection}>
          <div className={styles.contentGrid}>
            <div className={styles.navSidebar}>
              <h2 className={styles.navTitle}>Navigation</h2>
              <div className={styles.navButtons}>
                {Object.entries(sections).map(([key, title]) => (
                  <button key={key} onClick={() => setActiveSection(key)} className={`${styles.navButton} ${activeSection === key ? styles.navButtonActive : styles.navButtonInactive}`}>{title}</button>
                ))}
              </div>
            </div>

            <div className={styles.mainPanel}>
              {activeSection === 'welcome' && (
                <div>
                  <h2 className={styles.sectionTitle}>Lab 5: Intelligent Conflict and Recovery</h2>
                  <p className={styles.sectionDescription}>
                    Unaddressed conflict in high-pressure environments turns into emotional that weakens trust and performance. Welcome to Intelligent Conflict and Recovery, which help participants to reframe conflict as cognitive tension, training the brain to deal with disagreement with clarity, regulate emotional responses, and recover relationships sans avoidance or suppression.
                  </p>
                  <div className={styles.focusArea}>
                    <h3 className={styles.focusTitle}>Core Theme</h3>
                    <ul>
                      <li>Conflict Awareness: Recognize early warning signals of rising tension.</li>
                      <li>Emotional Regulation: Respond to conflict without escalation or shutdown.</li>
                      <li>Resolution Clarity: Explore disagreements with form and purpose.</li>
                      <li>Trust Repair: Restore safety and confidence after conflict.</li>
                      <li>Resilient Systems: Build repeatable recovery practices.</li>
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
                        {info.details?.map((detail, i) => (
                          <div key={i} className={styles.detailCard}>
                            <h4>{detail.name}</h4>
                            <p className={styles.role}>{detail.role}</p>
                            <div className={styles.functionTags}>
                              {detail.functions?.map((f, j) => (<span key={j} className={styles.tag}>{f}</span>))}
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
                  <h2 className={styles.sectionTitle}>Conflict Tools</h2>
                  <p className={styles.sectionDescription}>
                    Transition from reaction to resolution: Conflict Inventory uncovers hidden conflicts, Behavioural Escalation Maps disrupt conflict cycles, and Trust & Recovery Tracker repairs and regains trust—leading to healthier conversations and quicker recoveries from friction points.
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
                        Anita is conflict-avoiding; this causes tension. She uses a Conflict Inventory to identify sources and resolve early.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: Less friction</span>
                        <span className={styles.tag}>Closer team</span>
                      </div>
                    </div>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 2</h3>
                      <p className={styles.infoCardDescription}>
                        A cross-functional team escalated rapidly. Behavioural Escalation Maps enabled time-outs and de-escalation.
                      </p>
                      <div className={styles.tagContainer}>
                        <span className={styles.tag}>Result: Controlled discussion</span>
                        <span className={styles.tag}>Quick solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'games' && (
                <div>
                  <h2 className={styles.sectionTitle}>Games & Activities</h2>
                  <p className={styles.sectionDescription}>
                    Simulations allow experiencing conflict in a controlled manner, observing escalation, and building skills in expression, regulation, and trust repair—instilling confidence in dealing with conflict.
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
                        <li>Conflict leads to emotional escalation or disengagement.</li>
                        <li>Talking becomes positional rather than issue-centered.</li>
                        <li>People guard themselves, not the relationship.</li>
                        <li>Unresolved tension persists and recurs.</li>
                        <li>Psychological safety declines over time.</li>
                      </ul>
                    </div>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Active Outcomes</h3>
                      <ul>
                        <li>Conflicts are dealt with calmly and promptly.</li>
                        <li>Focus stays on issues, not personal.</li>
                        <li>Emotional awareness supports respectful expression.</li>
                        <li>Relationships heal quickly after tension.</li>
                        <li>Psychological safety increases via honest resolution.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'journey' && (
                <div>
                  <h2 className={styles.sectionTitle}>Journey Beyond</h2>
                  <p className={styles.sectionDescription}>
                    Beyond Intelligent Conflict and Recovery, conflict becomes a source of clarity, not damage. Individuals resolve early, repair relationships, and retain trust. Teams build a culture of constructive conflict and common recovery.
                  </p>
                </div>
              )}

              {activeSection === 'reflection' && (
                <div>
                  <h2 className={styles.sectionTitle}>Reflection Corner</h2>
                  <ul>
                    <li>What does “winning” a conflict mean to you now?</li>
                    <li>How will you know when a conflict is hurting trust—and how will you start repair?</li>
                    <li>What daily habit could turn a brewing fight into problem-solving?</li>
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