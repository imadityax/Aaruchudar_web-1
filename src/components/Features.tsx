'use client';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

// ========================= PROGRAM CARD =========================
const ProgramCard = ({ data }: { data: any }) => (
  <div className="group flex flex-col h-full rounded-xl overflow-hidden border border-white/50 backdrop-blur-xl bg-white/70 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px] hover:border-purple-400/60">
    {/* Image: reduce height */}
    <div className="w-full h-24 overflow-hidden">
      <img src={data.image} alt={data.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>
    {/* Content: tighter paddings & smaller typography */}
    <div className="p-3 flex flex-col flex-1">
      <div className="flex items-center gap-2 mb-2">
        <img src={data.icon} className="w-6 h-6 opacity-90" />
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight">{data.title}</h3>
      </div>
      <p className="text-[11px] text-slate-600 leading-relaxed mb-2 flex-grow">{data.description}</p>
      <ul className="space-y-1 mb-3">
        {data.points.map((p: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-[11px] text-slate-600">
            <span className="w-1.5 h-1.5 bg-purple-500/80 rounded-full"></span>
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-2 pt-2 border-t border-white/50">
        <Link href={data.href} className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-purple-600 text-white text-[11px] font-semibold shadow-sm hover:bg-purple-700">
          Explore
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M13.94 5.94a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.75a.75.75 0 0 1 0-1.5h11.91l-3.72-3.72a.75.75 0 0 1 0-1.06Z"/></svg>
        </Link>
        <Link href={data.learnMoreHref ?? data.href} className="inline-flex items-center px-2.5 py-1.5 rounded-full border border-purple-300 bg-white text-purple-700 text-[11px] font-semibold shadow-sm hover:bg-purple-50">
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

// ========================= DATA =========================
const programCards = [
  {
    id: 1,
    title: "Human intelligence Labs",
    image: "/images/hi-labs-banner.jpg",
    icon: "/globe.svg",
    description:
      "Cutting-edge scientific and experiential learning settings to help the development of the key qualities of the future: creativity, critical thinking, and leadership.",
    points: [
      "Innovation challenges grounded in the real world",
      "Mentor-led strategic guidance",
      "Collaborative research experiences",
      "Leadership mastery ​‍​‌‍​‍‌​‍​‌‍​‍‌workshop",
    ],
    href: "/hi-labs",
  },
  {
    id: 2,
    title: "Human intelligence Courses",
    image: "/images/hi-courses-banner.jpg",
    icon: "/file.svg",
    description:
      "Engaging in relevant programs that combine real-life work experience with deeper understanding for the holistic development of careers.",
    points: [
      "Industry-Aligned Curriculum",
      "Custom Learning Tracks Strategic",
      "Career guidance",
      "Professional Skill certification",
    ],
    href: "/hi-courses",
  },
  {
    id: 3,
    title: "Human intelligence Workshop",
    image: "/images/hi-workshops-banner.jpg",
    icon: "/window.svg",
    description:
      "Activity-based learning through collaborative, hands-on experiences with practical tools that inspire creativity, teamwork, and strategic execution.",
    points: [
      "Immersive interactive sessions",
      "Challenge-driven collaboration",
      "Scenario-based, hands-on exercises",
      "Expert facilitator guidance",
    ],
    href: "/hi-workshops",
    learnMoreHref: "/hi-workshops/psychological",
  },
  {
    id: 4,
    title: "Human intelligence Events",
    image: "/images/hi-events-banner.jpg",
    icon: "/gem.png",
    description:
      "Engaging and interactive forums that bring together innovators, leaders, and creators to network purposefully and grow together.",
    points: [
      "Networking opportunities",
      "Insightful keynote sessions",
      "Expert Panel Discussions",
      "Interactive Activities",
    ],
    href: "/hi-events",
  },
  {
    id: 5,
    title: "Aaruchudar Neuro-Tech Suite",
    image: "/images/hi-labs-banner.jpg",
    icon: "/globe.svg",
    description:
      "A single system that measures, trains, and improves your mind every day.",
    points: [
      "Real-time cognitive scoring",
      "Personalized training plans",
      "Daily progress tracking",
      "Actionable insights",
    ],
    href: "/productpage", // Explore Suite
    learnMoreHref: "/about", // Learn More
  },
  {
    id: 6,
    title: "Neuro Band & Neuro Lens",
    image: "/images/hi-workshops-banner.jpg",
    icon: "/file.svg",
    description:
      "Track focus, stress, clarity, and decision patterns in real time — like a fitness tracker, but for your brain.",
    points: [
      "Focus & stress tracking",
      "Clarity and decision metrics",
      "Comfortable wearable devices",
      "Companion app integration",
    ],
    href: "/hi-workshops", // View Devices
    learnMoreHref: "/privacy", // Specs
  },
];

// ========================= MAIN SECTION =========================
export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const startAutoplay = () => {
    const el = scrollRef.current;
    if (!el) return;
    stopAutoplay();
    intervalRef.current = window.setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + el.clientWidth;
      if (next >= maxScroll - 2) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
      }
    }, 4000);
  };
  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    startAutoplay();
    const onEnter = () => stopAutoplay();
    const onLeave = () => startAutoplay();
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('touchstart', onEnter, { passive: true });
    el.addEventListener('touchend', onLeave, { passive: true });
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('touchstart', onEnter);
      el.removeEventListener('touchend', onLeave);
      stopAutoplay();
    };
  }, []);

  const scrollByViewport = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth; // scroll by one viewport width
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section
      className="
        py-28 
        bg-gradient-to-b 
        from-purple-50 
        via-white 
        to-indigo-50
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-center sm:text-left">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Explore Our Programs
            </h2>
            <p className="mt-2 text-slate-600 max-w-xl leading-relaxed">
              Structured cognitive development pathways designed for clarity,
              creativity, and long-term performance.
            </p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button
              aria-label="Previous"
              onClick={() => scrollByViewport(-1)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-purple-300 bg-white text-purple-700 shadow hover:bg-purple-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M10.06 18.06a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 1.06L6.31 11.25h11.94a.75.75 0 0 1 0 1.5H6.31l3.75 3.75a.75.75 0 0 1 0 1.56Z"/></svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByViewport(1)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-purple-300 bg-white text-purple-700 shadow hover:bg-purple-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M13.94 5.94a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H2.75a.75.75 0 0 1 0-1.5h12.91l-3.72-3.72a.75.75 0 0 1 0-1.06Z"/></svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6"
        >
          {programCards.map((card) => (
            <div key={card.id} className="snap-start shrink-0 w-[80%] sm:w-[55%] lg:w-[28%]">
              <ProgramCard data={card} />
            </div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden justify-center gap-4 mt-2">
          <button
            aria-label="Previous"
            onClick={() => scrollByViewport(-1)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-purple-300 bg-white text-purple-700 shadow hover:bg-purple-50 text-sm"
          >
            Prev
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollByViewport(1)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-purple-300 bg-white text-purple-700 shadow hover:bg-purple-50 text-sm"
          >
            Next
          </button>
        </div>

        {/* Enhanced callout below programs */}
        <div className="mt-16">
          <div className="rounded-2xl border border-purple-300 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-lg text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-semibold mb-4">
              <img src="/globe.svg" alt="NeuroTech" className="w-5 h-5" />
              Real-time NeuroTech Score
            </div>
            <p className="text-lg sm:text-xl font-bold text-slate-900">
              Get your hear real time score for neuro tech
            </p>
            <p className="mt-2 text-slate-700">
              Scale: <span className="font-semibold">1&nbsp;to&nbsp;100</span>
            </p>
            <div className="mt-4 flex justify-center">
              <a href="/quiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 text-white text-sm font-semibold shadow hover:bg-purple-700 transition-colors">
                Check My Score
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.94 5.94a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.75a.75.75 0 0 1 0-1.5h11.91l-3.72-3.72a.75.75 0 0 1 0-1.06Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
