'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InteractiveBrain, type RegionKey } from '@/components/interactive-brain/InteractiveBrain';
import styles from '../styles.module.css';

const labData = {
  id: 6,
  title: 'Systemic Thinking',
  description: 'Complex thoughts and patterns forming',
  activeRegions: ['Frontal' as RegionKey, 'Parietal' as RegionKey, 'Cerebellum' as RegionKey],
  brainParts: {
    Frontal: {
      title: 'Systems Reasoning Network',
      description: 'Executive networks for modeling, forecasting, and leverage identification.',
      details: [
        { name: 'Dorsolateral PFC', role: 'Modeling & result thinking', functions: ['Scenario planning', 'Working memory', 'Hypothesis testing'] },
        { name: 'Orbitofrontal Cortex', role: 'Consequence evaluation', functions: ['Outcome valuation', 'Trade-off analysis', 'Adaptive decisioning'] }
      ]
    },
    Parietal: {
      title: 'Integration & Mapping Centers',
      description: 'Spatial-temporal integration for systems mapping and relations.',
      details: [
        { name: 'Posterior Parietal Cortex', role: 'Pattern & connection mapping', functions: ['Multi-variable integration', 'Spatial mapping', 'Attention shifting'] },
        { name: 'Precuneus', role: 'Complex network awareness', functions: ['Network visualization', 'Self-other relations', 'Memory integration'] }
      ]
    },
    Cerebellum: {
      title: 'Coordination & Stability Centers',
      description: 'Supports timing, error correction, and stable execution for complex tasks.',
      details: [
        { name: 'Cerebellar Cortex', role: 'Timing & smoothing', functions: ['Response timing', 'Error prediction', 'Motor-cognitive coupling'] },
        { name: 'Dentate Nucleus', role: 'Cognitive coordination', functions: ['Output stabilization', 'Adaptive correction', 'Task sequencing'] }
      ]
    }
  }
};

export default function Lab6Page() {
  const router = useRouter();
  const [autoRotate, setAutoRotate] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [activeBrainRegion, setActiveBrainRegion] = useState<RegionKey>(labData.activeRegions[0]);

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Thinking Tools',
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
                  <h2 className={styles.sectionTitle}>Lab 6: Systemic Thinking</h2>
                  <p className={styles.sectionDescription}>
                    Linear thinking is usually symptomatic and target-oriented. Welcome to Systematic thinking, which guide participants how to think like system thinkers, empowering them to consider effects and make decisions that produce long-term impact, not just patch-up work.
                  </p>
                  <div className={styles.focusArea}>
                    <h3 className={styles.focusTitle}>Core Theme</h3>
                    <ul>
                      <li>System Awareness: Recognize patterns and connections beyond single events.</li>
                      <li>Result Thinking: Project consequences of decisions.</li>
                      <li>Leverage Identification: Recognize points of high leverage.</li>
                      <li>Sustainable Decisions: Create solutions that remain sustainable.</li>
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
                  <h2 className={styles.sectionTitle}>Thinking Tools</h2>
                  <p className={styles.sectionDescription}>
                    Improve graphic cognitive mapping using Feedback Loop Boards, Stakeholder Webbing for interlocking interests, and Delay Chain Visuals for understanding time delays—leading to clearer vision and effective long-term decision-making.
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
                        A team fixed delivery issues using overtime. Using Feedback Loop Boards, the manager identified incentive and workload loops.
                      </p>
                      <div className={styles.tagContainer}><span className={styles.tag}>Result: Structure</span><span className={styles.tag}>Sustained performance</span></div>
                    </div>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 2</h3>
                      <p className={styles.infoCardDescription}>
                        With Delay Chain Visuals, the product team understood chain consequences and corrected the software to meet customer feedback.
                      </p>
                      <div className={styles.tagContainer}><span className={styles.tag}>Result: Root cause solutions</span><span className={styles.tag}>Rework reduction</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection==='games' && (
                <div>
                  <h2 className={styles.sectionTitle}>Games & Activities</h2>
                  <p className={styles.sectionDescription}>
                    Hands-on mapping exercises teach systems thinking, visualizing outcomes of assumptions and interventions, and developing slow thinking to target leverage points.
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
                        <li>Solutions address one symptom at a time.</li>
                        <li>Short-term optimization dominates.</li>
                        <li>Patterns, feedback loops, and delays remain unseen.</li>
                        <li>Constant firefighting.</li>
                        <li>Poor long-term results.</li>
                      </ul>
                    </div>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Active Outcomes</h3>
                      <ul>
                        <li>Acknowledge patterns and connections within the system.</li>
                        <li>Identify future results of decisions beforehand.</li>
                        <li>Use high-leverage points effectively.</li>
                        <li>Solutions target core problems and are sustainable.</li>
                        <li>Teams shift from firefighting to data-driven thinking.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection==='journey' && (
                <div>
                  <h2 className={styles.sectionTitle}>Journey Beyond</h2>
                  <p className={styles.sectionDescription}>
                    Beyond Systemic thinking, individuals move from reactive problem-solving to systemic insight, predicting ripple effects and making decisions that handle complexity with shared language.
                  </p>
                </div>
              )}

              {activeSection==='reflection' && (
                <div>
                  <h2 className={styles.sectionTitle}>Reflection Corner</h2>
                  <ul>
                    <li>How has your view of cause and effect evolved beyond linear thinking?</li>
                    <li>How will you notice slipping back into quick fixes—and return to systemic thinking?</li>
                    <li>What habit helps you mind chain reactions your choices create?</li>
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