'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InteractiveBrain, type RegionKey } from '@/components/interactive-brain/InteractiveBrain';
import styles from '../styles.module.css';

const labData = {
  id: 7,
  title: 'Voice, Value and Vulnerability',
  description: 'Strengthening truth and building confidence',
  activeRegions: ['Frontal' as RegionKey, 'Temporal' as RegionKey],
  brainParts: {
    Frontal: {
      title: 'Expression & Regulation Centers',
      description: 'Clarity of speech, intent, and regulation under observation.',
      details: [
        { name: 'Medial PFC', role: 'Authentic voice & self-meaning', functions: ['Self-referential processing', 'Intent alignment', 'Social cognition'] },
        { name: 'DLPFC', role: 'Assertive articulation', functions: ['Working memory', 'Language planning', 'Response control'] }
      ]
    },
    Temporal: {
      title: 'Value & Safety Awareness',
      description: 'Emotional grounding, safety cues, and resilience.',
      details: [
        { name: 'Anterior Insula', role: 'Vulnerability awareness', functions: ['Interoception', 'Emotional salience', 'Risk awareness'] },
        { name: 'Anterior Cingulate', role: 'Acceptance & conflict mediation', functions: ['Conflict monitoring', 'Empathy modulation', 'Error correction'] }
      ]
    }
  }
};

export default function Lab7Page() {
  const router = useRouter();
  const [autoRotate, setAutoRotate] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome');
  const [activeBrainRegion, setActiveBrainRegion] = useState<RegionKey>(labData.activeRegions[0]);

  const sections = {
    welcome: 'Welcome',
    brain: 'Brain Activation',
    tools: 'Voice Tools',
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
            <InteractiveBrain activeRegions={[activeBrainRegion]} labHighlight={true} autoRotate={autoRotate} onRegionSelect={(r)=>r&&setActiveBrainRegion(r)} isolationOpacity={0.12} />
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
                  <h2 className={styles.sectionTitle}>Lab 7: Voice, Value and Vulnerability</h2>
                  <p className={styles.sectionDescription}>
                    Psychological safety is needed to enhance innovation, inspire trust, and grow. Welcome to Voice, Value and Vulnerability, which helps participants develop the strength and insight to express their voice, reconnect with their sense of worth, and use positive dissent.
                  </p>
                  <div className={styles.focusArea}>
                    <h3 className={styles.focusTitle}>Core Theme</h3>
                    <ul>
                      <li>Authentic Voice: Express thoughts and ideas clearly and confidently.</li>
                      <li>Value Awareness: Reconnect with inner value regardless of outcomes.</li>
                      <li>Healthy Dissent: Disagree constructively without harming trust.</li>
                      <li>Psychological Safety: Build environments that promote openness.</li>
                      <li>Emotional Resilience: Stay grounded when observed or challenged.</li>
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
                  <h2 className={styles.sectionTitle}>Voice Tools</h2>
                  <p className={styles.sectionDescription}>
                    Courage Language Framework for safe, effective speaking; Inner Voice Reflectors to recognize one’s language; Acceptance Archetype Mapping to identify safety and response styles.
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
                        Neha feared judgment and hesitated to share. Using the Courage Language Framework, she learned to share without self-doubt.
                      </p>
                      <div className={styles.tagContainer}><span className={styles.tag}>Result: Engagement</span><span className={styles.tag}>Confidence</span></div>
                    </div>
                    <div className={styles.infoCard}>
                      <h3 className={styles.infoCardTitle}>Example 2</h3>
                      <p className={styles.infoCardDescription}>
                        A group suppressed contradictions “to keep the peace.” Acceptance Archetype Mapping built an atmosphere for expressed dissent.
                      </p>
                      <div className={styles.tagContainer}><span className={styles.tag}>Result: Healthy debates</span><span className={styles.tag}>Sound decisions</span></div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection==='games' && (
                <div>
                  <h2 className={styles.sectionTitle}>Games & Activities</h2>
                  <p className={styles.sectionDescription}>
                    Guided exercises build confidence in speaking, boundary-setting, listening, and sharing vulnerability without falling apart—promoting constructive challenge.
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
                        <li>Reluctance to voice views due to fear of rejection or ridicule.</li>
                        <li>Reliance on approval or results.</li>
                        <li>Avoided disagreements breed false harmony.</li>
                        <li>Threatening feedback undermines growth.</li>
                        <li>Psychological safety remains vulnerable.</li>
                      </ul>
                    </div>
                    <div className={styles.brainRegionCard}>
                      <h3 className={styles.focusTitle}>Active Outcomes</h3>
                      <ul>
                        <li>Thoughts and ideas articulated effectively and assertively.</li>
                        <li>Sense of value constant, unaffected by acceptance or outcome.</li>
                        <li>Respectful dissent without damaging trust.</li>
                        <li>Feedback and challenge received with stability.</li>
                        <li>Transparency establishes psychological safety.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection==='journey' && (
                <div>
                  <h2 className={styles.sectionTitle}>Journey Beyond</h2>
                  <p className={styles.sectionDescription}>
                    Beyond Voice, Value and Vulnerability, participants speak their truth, detach worth from approval, and receive questioning openly. Teams develop cultures of psychological safety.
                  </p>
                </div>
              )}

              {activeSection==='reflection' && (
                <div>
                  <h2 className={styles.sectionTitle}>Reflection Corner</h2>
                  <ul>
                    <li>What does true speaking courage mean to you?</li>
                    <li>How will you know you’re being dishonest or closed—and return to your true self?</li>
                    <li>What daily habit helps recognize and appreciate your contributions and others’?</li>
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