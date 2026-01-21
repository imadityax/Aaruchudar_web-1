"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

const Navbar = () => (
  <header className="sticky top-0 z-30 bg-transparent border-b border-[rgba(255,255,255,0.15)] backdrop-blur">
    <nav
      className={`${styles.container} flex items-center justify-between py-4`}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/logo2.png"
          alt="Aaruchudar Logo"
          width={40}
          height={40}
          className="rounded-2xl"
        />
        <span className="font-bold text-xl text-[#111827] tracking-tight">
          Aaruchudar
        </span>
      </div>
      <div className="flex gap-6 text-[#4b5563] font-medium">
        <a href="#labs" className="hover:text-[#111827] transition">
          Labs
        </a>
        <a href="#programs" className="hover:text-[#111827] transition">
          Programs
        </a>
        <a href="#contact" className="hover:text-[#111827] transition">
          Contact
        </a>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className={styles.heroSection}>
    <div className={styles.heroBg} />
    <div className={styles.heroContentWrapper}>
      <h1 className={styles.heroTitleDark}>
        Human Intelligence Labs Ecosystem
      </h1>
      <p className={styles.heroSubtitleDark}>
        Clarity, Confidence and Focus for the Next Generation
      </p>
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        <button className={styles.btnPrimaryDark}>View Labs</button>
        <button className={styles.btnOutlineDark}>Book a Demo</button>
        <button className={styles.btnPrimaryDark}>Download Program Deck</button>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 mb-2 justify-center px-4">
        <StatCard value="+68%" label="Decision Confidence" />
        <StatCard value="+54%" label="Attention Resilience" />
        <StatCard value="1200+" label="Participants" />
      </div>
    </div>
  </section>
);

const StatCard = ({ value, label }) => (
  <div className={styles.statCard}>
    <span className={styles.statNumber}>{value}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
);

const SolutionsSection = () => {
  const router = useRouter();

  const handleViewDevices = () => {
    router.push("/neuro");
  };

  return (
    <section className={`${styles.container} ${styles.section}`}>
      <h2 className={`${styles.sectionTitle} ${styles.textGradient}`}>
        Aaruchudar SaaS - HI
      </h2>
      <div className={styles.solutionsGrid}>
        {/* Solution 1 */}
        <div className={styles.solutionCard}>
          <div className={styles.solutionHeader}>
            <span className={styles.solutionTitle}>Solution 1</span>
            <span className={styles.solutionBadge}>Suite</span>
          </div>
          <div className={styles.solutionMedia}>
            <Image
              src="/images/neuro_tech_suite.jpg"
              alt="Neuro-Tech Suite"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={styles.solutionBody}>
            <p className={`${styles.solutionLine} font-semibold`}>
              Aaruchudar Neuro-Tech Suite - A
            </p>
            <p className={styles.solutionLine}>single system that measures,</p>
            <p className={styles.solutionLine}>
              trains, and improves your mind
            </p>
            <p className={styles.solutionLine}>every day.</p>
          </div>
          <div className={styles.solutionCTA}>
            <button className={styles.solutionBtnPrimary}>Explore Suite</button>
          </div>
        </div>

        {/* Solution 2 */}
        <div className={styles.solutionCard}>
          <div className={styles.solutionHeader}>
            <span className={styles.solutionTitle}>Solution 2</span>
            <span className={styles.solutionBadge}>Devices</span>
          </div>
          <div className={styles.solutionMedia}>
            <Image
              src="/images/neurolens_and_band.jpg"
              alt="Neuro Band and Lens"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={styles.solutionBody}>
            <p className={`${styles.solutionLine} font-semibold`}>
              Neuro Band + Neuro Lens -
            </p>
            <p className={styles.solutionLine}>
              Track your focus, stress, clarity,
            </p>
            <p className={styles.solutionLine}>
              and decision patterns in real time
            </p>
            <p className={styles.solutionLine}>
              like a fitness tracker, but for your
            </p>
            <p className={styles.solutionLine}>brain.</p>
          </div>
          <div className={styles.solutionCTA}>
            <button
              className={styles.solutionBtnPrimary}
              onClick={handleViewDevices}
            >
              View Devices
            </button>
          </div>
        </div>

        {/* Solution 3 */}
        <div className={styles.solutionCard}>
          <div className={styles.solutionHeader}>
            <span className={styles.solutionTitle}>Solution 3</span>
            <span className={styles.solutionBadge}>Training</span>
          </div>
          <div className={styles.solutionMedia}>
            <Image
              src="/images/hi-labs-banner.jpg"
              alt="Human intelligence Labs"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={styles.solutionBody}>
            <p className={`${styles.solutionLine} font-semibold`}>
              Human Intelligence Labs (HI Labs) -
            </p>
            <p className={styles.solutionLine}>Daily brain-training</p>
            <p className={styles.solutionLine}>exercises that build clarity,</p>
            <p className={styles.solutionLine}>
              confidence, focus, communication,
            </p>
            <p className={styles.solutionLine}>and original thinking.</p>
          </div>
          <div className={styles.solutionCTA}>
            <button className={styles.solutionBtnPrimary}>Explore Labs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatAreHILabs = () => (
  <section className={`${styles.container} ${styles.section} text-center`}>
    <h2 className={styles.sectionTitle}>What Are Human Intelligence Labs?</h2>
    <p className="text-[#374151] text-lg font-medium">
      Human intelligence Labs are neuroscience-driven programs that activate
      clarity, focus, and ethical leadership. Each lab targets a core human
      skill, blending cognitive science with practical training for measurable
      outcomes.
    </p>
  </section>
);

const labs = [
  { title: "Lab of Light", subtitle: "Clarity as Culture" },
  { title: "Lab of Compass", subtitle: "Decision-Making Without Drama" },
  { title: "Lab of Stillness", subtitle: "Inner Focus in a Noisy World" },
  { title: "Lab of Echoes", subtitle: "The Power of Listening" },
  { title: "Lab of Fire & Flow", subtitle: "Intelligent Conflict & Recovery" },
  { title: "Lab of Patterns", subtitle: "Systematic Thinking" },
  { title: "Lab of Mirrors", subtitle: "Voice, Value & Vulnerability" },
  { title: "Lab of Originals", subtitle: "Leadership Without Imitation" },
];

const LabsGrid = () => (
  <section id="labs" className={`${styles.container} ${styles.section}`}>
    <h2 className={styles.sectionTitle}>Explore the 8 Labs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {labs.map((lab, i) => (
        <div key={lab.title} className={styles.labCard}>
          <div className={styles.labBadge}>{i + 1}</div>
          <span className="font-bold text-lg text-[#111827] mb-1">
            {lab.title}
          </span>
          <span className="text-[#4b5563] text-sm text-left">
            {lab.subtitle}
          </span>
        </div>
      ))}
    </div>
  </section>
);

const ProgramFormats = () => {
  const router = useRouter();
  const handleGetProposal = () => {
    router.push("/contact");
  };

  return (
    <section id="programs" className={`${styles.container} ${styles.section}`}>
      <h2 className={styles.sectionTitle}>Program Formats</h2>
      <div className={styles.programGrid}>
        {/* Workshops */}
        <div className={styles.programCard}>
          <div className={styles.programHeader}>
            <span className={styles.programTitle}>Workshops</span>
            <span className={styles.programBadge}>1–2 days</span>
          </div>
          <div className={styles.programBody}>
            <p className={styles.programLine}>
              Intensive, hands-on HI modules.
            </p>
            <div className={styles.programFeatures}>
              <div className={styles.programFeature}>
                <span className={styles.programDot} />
                Live facilitation
              </div>
              <div className={styles.programFeature}>
                <span className={styles.programDot} />
                Practice + reflection
              </div>
              <div className={styles.programFeature}>
                <span className={styles.programDot} />
                Baseline metrics
              </div>
            </div>
          </div>
          <div className={styles.programCTA}>
            <button
              className={styles.programBtnPrimary}
              onClick={handleGetProposal}
            >
              Book Workshop
            </button>
            <button className={styles.programBtnGhost}>Agenda</button>
          </div>
        </div>

        {/* Cohort Programs */}
        <div className={styles.programCard}>
          <div className={styles.programHeader}>
            <span className={styles.programTitle}>Cohort Programs</span>
            <span className={styles.programBadge}>4–12 weeks</span>
          </div>
          <div className={styles.programBody}>
            <p className={styles.programLine}>
              Structured progression with weekly labs.
            </p>
            <div className={styles.programFeatures}>
              <div className={styles.programFeature}>
                <span className={styles.programDot} />
                Guided learning
              </div>
              <div className={styles.programFeature}>
                <span className={styles.programDot} />
                Peer practice
              </div>
              <div className={styles.programFeature}>
                <span className={styles.programDot} />
                Outcome tracking
              </div>
            </div>
          </div>
          <div className={styles.programCTA}>
            <button
              className={styles.programBtnPrimary}
              onClick={handleGetProposal}
            >
              Join Cohort
            </button>
            <button className={styles.programBtnGhost}>Syllabus</button>
          </div>
        </div>

        {/* Annual Integrations */}
        <div className={styles.programCard}>
          <div className={styles.programHeader}>
            <span className={styles.programTitle}>
              Annual Institutional Integrations
            </span>
            <span className={styles.programBadge}>Year-round</span>
          </div>
          <div className={styles.programBody}>
            <p className={styles.programLine}>
              Organization-wide HI embedding.
            </p>
            <div className={styles.programFeatures}>
              <div className={styles.programFeature}>
                <span className={styles.programDot} />
                Leadership tracks
              </div>
              <div className={styles.programFeature}>
                <span className={styles.programDot} />
                Measurement & reporting
              </div>
              <div className={styles.programFeature}>
                <span className={styles.programDot} />
                Custom curriculum
              </div>
            </div>
          </div>
          <div className={styles.programCTA}>
            <button
              className={styles.programBtnPrimary}
              onClick={handleGetProposal}
            >
              Get Proposal
            </button>
            <button className={styles.programBtnGhost}>Overview</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoIsThisFor = () => {
  const router = useRouter();
  const handleAudienceGetProposal = () => {
    router.push("/contact");
  };

  return (
    <section className={`${styles.container} ${styles.section}`}>
      <h2 className={styles.sectionTitle}>Who Is This For?</h2>
      <div className={styles.audienceGrid}>
        {/* Schools & Colleges */}
        <div className={styles.audienceCard}>
          <div className={styles.audienceHeader}>
            <div className={styles.audienceIcon}>🎓</div>
            <span className={styles.audienceTitle}>Schools & Colleges</span>
          </div>
          <div className={styles.audienceBody}>
            <p className={styles.audienceLine}>
              Build clarity and focus across classrooms with measurable
              outcomes.
            </p>
          </div>
          <div className={styles.audienceCTA}>
            <button className={styles.audienceBtnPrimary } onClick={handleAudienceGetProposal}>Get Syllabus</button>
          </div>
        </div>

        {/* Corporates & Institutions */}
        <div className={styles.audienceCard}>
          <div className={styles.audienceHeader}>
            <div className={styles.audienceIcon}>🏢</div>
            <span className={styles.audienceTitle}>
              Corporates & Institutions
            </span>
          </div>
          <div className={styles.audienceBody}>
            <p className={styles.audienceLine}>
              Embed HI culture: decision clarity, communication, and resilience.
            </p>
          </div>
          <div className={styles.audienceCTA}>
            <button
              className={styles.audienceBtnPrimary}
              onClick={handleAudienceGetProposal}
            >
              Get Proposal
            </button>
            <button className={styles.audienceBtnGhost}>Overview</button>
          </div>
        </div>

        {/* Educators & Leaders */}
        <div className={styles.audienceCard}>
          <div className={styles.audienceHeader}>
            <div className={styles.audienceIcon}>🧭</div>
            <span className={styles.audienceTitle}>Educators & Leaders</span>
          </div>
          <div className={styles.audienceBody}>
            <p className={styles.audienceLine}>
              Train ethical, confident leadership habits with Human intelligence
              Labs routines.
            </p>
          </div>
          <div className={styles.audienceCTA}>
            <button className={styles.audienceBtnPrimary} onClick={handleAudienceGetProposal}>Start Track</button>
            <button className={styles.audienceBtnGhost}>Details</button>
          </div>
        </div>

        {/* Students & Professionals */}
        <div className={styles.audienceCard}>
          <div className={styles.audienceHeader}>
            <div className={styles.audienceIcon}>💼</div>
            <span className={styles.audienceTitle}>
              Students & Professionals
            </span>
          </div>
          <div className={styles.audienceBody}>
            <p className={styles.audienceLine}>
              Daily HI exercises to improve focus, clarity, and original
              thinking.
            </p>
          </div>
          <div className={styles.audienceCTA}>
            <button className={styles.audienceBtnPrimary} onClick={handleAudienceGetProposal}>Join Cohort</button>
            <button className={styles.audienceBtnGhost}>Programs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const MeasurableOutcomes = () => (
  <section className={`${styles.container} ${styles.section}`}>
    <h2 className={styles.sectionTitle}>Measurable Outcomes</h2>
    <div className={styles.outcomesGrid}>
      <div className={styles.outcomeCard}>
        <div className={styles.outcomeHeader}>
          <div className={styles.outcomeIcon}>🎯</div>
          <div>
            <div className={styles.outcomeValue}>+68%</div>
            <div className={styles.outcomeLabel}>Decision Confidence</div>
          </div>
        </div>
        <div className={styles.outcomeBarWrap}>
          <div className={styles.outcomeBar} style={{ width: "68%" }} />
        </div>
        <div className={styles.outcomeFooter}>Measured after 4-week cohort</div>
      </div>

      <div className={styles.outcomeCard}>
        <div className={styles.outcomeHeader}>
          <div className={styles.outcomeIcon}>🧠</div>
          <div>
            <div className={styles.outcomeValue}>+54%</div>
            <div className={styles.outcomeLabel}>
              Attention Resilience Score
            </div>
          </div>
        </div>
        <div className={styles.outcomeBarWrap}>
          <div className={styles.outcomeBar} style={{ width: "54%" }} />
        </div>
        <div className={styles.outcomeFooter}>
          Measured improvement in stress recovery
        </div>
      </div>

      <div className={styles.outcomeCard}>
        <div className={styles.outcomeHeader}>
          <div className={styles.outcomeIcon}>📈</div>
          <div>
            <div className={styles.outcomeValue}>85%</div>
            <div className={styles.outcomeLabel}>Knowledge Retention</div>
          </div>
        </div>
        <div className={styles.outcomeBarWrap}>
          <div className={styles.outcomeBar} style={{ width: "85%" }} />
        </div>
        <div className={styles.outcomeFooter}>
          Post-program knowledge retention rate
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className={styles.footer}>
    &copy; {new Date().getFullYear()} Aaruchudar. All rights reserved.
  </footer>
);

const ExplorePrograms = () => (
  <section className={`${styles.container} ${styles.section}`}>
    <h2 className={styles.sectionTitle}>Explore Our Programs</h2>
    <p className="text-[#4b5563] max-w-2xl mx-auto text-center mb-10">
      Structured cognitive development pathways designed for clarity,
      creativity, and long-term performance.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {/* Human intelligence Labs */}
      <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl">
        <div className="relative h-40 w-full">
          <Image
            src="/images/hi-labs-banner.jpg"
            alt="Human intelligence Labs"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/globe.svg" alt="labs icon" width={22} height={22} />
            <span className="font-semibold text-[#111827]">
              Human intelligence Labs
            </span>
          </div>
          <p className="text-[#4b5563] text-sm leading-6">
            Cutting-edge research and experiential learning spaces designed to
            foster innovation, critical thinking, and leadership development.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#4b5563]">
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Innovation-driven
              projects
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Mentorship from experts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Collaborative research
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Leadership workshops
            </li>
          </ul>
          <div className="mt-4 flex gap-5 text-sm">
            <a
              href="/hi-labs"
              className="text-violet-700 hover:text-violet-500"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* Human intelligence Courses */}
      <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl">
        <div className="relative h-40 w-full">
          <Image
            src="/images/hi-courses-banner.jpg"
            alt="Human intelligence Courses"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/file.svg" alt="courses icon" width={22} height={22} />
            <span className="font-semibold text-[#111827]">
              Human intelligence Courses
            </span>
          </div>
          <p className="text-[#4b5563] text-sm leading-6">
            Transformative educational programs blending practical skills with
            deep insights for holistic career growth.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#4b5563]">
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Industry-relevant
              curriculum
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Personalized learning
              paths
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Career guidance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Skill certification
            </li>
          </ul>
          <div className="mt-4 flex gap-5 text-sm">
            <a
              href="/hi-courses"
              className="text-violet-700 hover:text-violet-500"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* Human intelligence Workshop */}
      <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl">
        <div className="relative h-40 w-full">
          <Image
            src="/images/hi-workshops-banner.jpg"
            alt="Human intelligence Workshop"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/window.svg"
              alt="workshops icon"
              width={22}
              height={22}
            />
            <span className="font-semibold text-[#111827]">
              Human intelligence Workshop
            </span>
          </div>
          <p className="text-[#4b5563] text-sm leading-6">
            Hands-on collaborative sessions with practical tools for teamwork,
            creativity, and strategic execution.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#4b5563]">
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Interactive sessions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Team-based challenges
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Real-world scenarios
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Expert facilitators
            </li>
          </ul>
          <div className="mt-4 flex gap-5 text-sm">
            <a
              href="/hi-workshops"
              className="text-violet-700 hover:text-violet-500"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* Human intelligence Events */}
      <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl">
        <div className="relative h-40 w-full">
          <Image
            src="/images/hi-events-banner.jpg"
            alt="Human intelligence Events"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/file.svg" alt="events icon" width={22} height={22} />
            <span className="font-semibold text-[#111827]">
              Human intelligence Events
            </span>
          </div>
          <p className="text-[#4b5563] text-sm leading-6">
            Immersive gatherings of innovators, leaders, and creators for
            meaningful networking and growth.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#4b5563]">
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Networking
              opportunities
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Keynote speakers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Panel discussions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-violet-600">•</span> Interactive activities
            </li>
          </ul>
          <div className="mt-4 flex gap-5 text-sm">
            <a
              href="/hi-events"
              className="text-violet-700 hover:text-violet-500"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function ProductPage() {
  return (
    <main className={`${styles.pageBackdrop} pt-16 md:pt-24 pb-20`}>
      {/* Navbar removed to hide the top bar on the product page */}
      <Hero />
      <SolutionsSection />
      <ExplorePrograms />
      <WhatAreHILabs />
      <LabsGrid />
      <ProgramFormats />
      <WhoIsThisFor />
      <MeasurableOutcomes />
      <Footer />
    </main>
  );
}
