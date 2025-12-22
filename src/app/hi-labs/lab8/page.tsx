'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InteractiveBrain, type RegionKey } from '@/components/interactive-brain/InteractiveBrain';
import styles from '../styles.module.css';

const labData = {
  id: 8,
  title: 'Leadership Without Imitation',
  description: 'Leadership through originality and inner clarity',
  activeRegions: ['Frontal' as RegionKey, 'Parietal' as RegionKey],
  brainParts: {
    Frontal: {
      title: 'Identity & Intent Network',
      description: 'Values, strengths, and leadership intention processing.',
      details: [
        { name: 'Medial PFC', role: 'Identity clarity & values alignment', functions: ['Self-meaning', 'Goal alignment', 'Social cognition'] },
        { name: 'Orbitofrontal Cortex', role: 'Impact evaluation', functions: ['Outcome valuation', 'Ethical appraisal', 'Adaptive choices'] }
      ]
    },
    Parietal: {
      title: 'Influence Awareness Centers',
      description: 'Understanding systems of influence and sustainable impact.',
      details: [
        { name: 'Posterior Parietal', role: 'Influence mapping', functions: ['Field awareness', 'Network relations', 'Priority focus'] },
        { name: 'Precuneus', role: 'Legacy visualization', functions: ['Future projection', 'Identity integration', 'Perspective taking'] }
      ]
    }
  }
};

export default function Lab8Page() {
  const router = useRouter();
  const [autoRotate, setAutoRotate] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [activeBrainRegion, setActiveBrainRegion] = useState<RegionKey>(labData.activeRegions[0]);

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Leadership Tools',
    cases: 'Case Examples',
    games: 'Games & Activities',
    culture: 'Outcomes',
    journey: 'Journey Beyond',
    reflection: 'Reflection Corner'
  };

  const back = () => router.push('/hi-labs');

  return (
    <main className={styles.labContainer}>
      <div className={styles.contentOverlay} />
      <div className={styles.mainContent}>
        <div className={styles.brainViewerContainer}>
          <div className={styles.brainViewer}>
            <InteractiveBrain activeRegions={labData.activeRegions} labHighlight={true} autoRotate={autoRotate} onRegionSelect={(r)=>r&&setActiveBrainRegion(r)} isolationOpacity={0.12} />
          </div>
        </div>

        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
              <button onClick={back} className={styles.backButton}>← Back to Labs</button>
              <div className={styles.labTitle}><h1>HI LAB {labData.id}</h1><p>{labData.title}</p></div>
            </div>
            <Link href="/" className={styles.homeButton}>Home</Link>
          </div>
        </header>

        <div className={styles.navigationSection}>
          <div className={styles.contentGrid}>
            <div className={styles.navSidebar}>
              <h2 className={styles.navTitle}>Navigation</h2>
              <div className={styles.navButtons}>
                {Object.entries(sections).map(([k,t])=> (
                  <button key={k} onClick={()=>setActiveSection(k)} className={`${styles.navButton} ${activeSection===k?styles.navButtonActive:styles.navButtonInactive}`}>{t}</button>
                ))}
              </div>
            </div>

            <div className={styles.mainPanel}>
              {activeSection==='welcome' && (
                <div>
                  <h2 className={styles.sectionTitle}>Lab 8: Leadership Without Imitation</h2>
                  <p className={styles.sectionDescription}>
                    Leadership is not imitation; it rests on clear identity. Welcome to Leadership without Imitation, enabling participants to identify their own leadership framework and lead as who they are—not who they imitate.
                  </p>
                  <div className={styles.focusArea}>
                    <h3 className={styles.focusTitle}>Core Theme</h3>
                    <ul>
                      <li>Authentic Leadership: Originality over borrowed styles.</li>
                      <li>Identity Clarity: Know your values, strengths, and intentions.</li>
                      <li>Influence Awareness: Understand effects on people and systems.</li>
                      <li>Sustainable Impact: Leadership beyond roles and positions.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection==='brain' && (
                <div>
                  <h2 className={styles.sectionTitle}>Brain Activation Details</h2>
                  {Object.entries(labData.brainParts).map(([region, info]) => (
                    <div key={region} className={styles.brainRegionCard}>
                      <h3>{info.title}</h3>
                      <p>{info.description}</p>
                      <div className={styles.detailsGrid}>
                        {info.details?.map((d,i)=> (
                          <div key={i} className={styles.detailCard}>
                            <h4>{d.name}</h4>
                            <p className={styles.role}>{d.role}</p>
                            <div className={styles.functionTags}>
                              {d.functions?.map((f,j)=>(<span key={j} className={styles.tag}>{f}</span>))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection==='tools' && (
                <div>
                  <h2 className={styles.sectionTitle}>Leadership Tools</h2>
                  <p className={styles.sectionDescription}>
                    Legacy Path Builders for long-term leadership vision, Influence Map Sheets to understand fields of influence, and Identity-to-Action Frameworks to translate values into everyday leadership decisions—enabling confident, grounded, self-led leadership.
                  </p>
                </div>
              )}

              {activeSection==='cases' && (
                <div>
                  <h2 className={styles.sectionTitle}>Case Examples</h2>
                  <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 1</h3>
                      <p className={styles.infoCardDescription}>
                        Arjun imitated senior leaders and felt imposter syndrome. Identity-to-Action Framework helped him craft his own leadership style.
                      </p>
                      <div className={styles.tagContainer}><span className={styles.tag}>Result: Confidence</span><span className={styles.tag}>Better decisions</span></div>
                    </div>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 2</h3>
                      <p className={styles.infoCardDescription}>
                        A founder wrestled with influence without authority. Influence Map Sheets showed where his influence counts most.
                      </p>
                      <div className={styles.tagContainer}><span className={styles.tag}>Result: Stronger effect</span><span className={styles.tag}>No imitation</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection==='games' && (
                <div>
                  <h2 className={styles.sectionTitle}>Games & Activities</h2>
                  <p className={styles.sectionDescription}>
                    Experiential exercises explore identity, test leadership choices, and assess influence styles—raising self-awareness, reducing comparison-driven behavior, and promoting clarity-led leadership.
                  </p>
                </div>
              )}

              {activeSection==='culture' && (
                <div>
                  <h2 className={styles.sectionTitle}>Outcomes: Reactive vs Active</h2>
                  <div className={styles.contentGrid}>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Reactive Outcomes</h3>
                      <ul>
                        <li>Leadership behavior imitated from others.</li>
                        <li>Decisions based on comparison.</li>
                        <li>Confidence varies with role, title, or recognition.</li>
                        <li>Unclear or inconsistent influence.</li>
                        <li>Impact remains short-term and role-dependent.</li>
                      </ul>
                    </div>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Active Outcomes</h3>
                      <ul>
                        <li>Leadership flows from values and strengths.</li>
                        <li>Decisions based on identity, not imitation.</li>
                        <li>Stable confidence regardless of position.</li>
                        <li>Intentional influence with awareness of consequences.</li>
                        <li>Lasting impact beyond position.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection==='journey' && (
                <div>
                  <h2 className={styles.sectionTitle}>Journey Beyond</h2>
                  <p className={styles.sectionDescription}>
                    Beyond Leadership without Imitation, leadership is authored by each individual. Teams build a culture of originality where clarity—not conformity—guides leadership.
                  </p>
                </div>
              )}

              {activeSection==='reflection' && (
                <div>
                  <h2 className={styles.sectionTitle}>Reflection Corner</h2>
                  <ul>
                    <li>What does real leadership mean to you now?</li>
                    <li>How will you know when you're slipping into imitation—and return to authenticity?</li>
                    <li>What daily habit helps check: "Is this my idea, or am I repeating what I heard?"</li>
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