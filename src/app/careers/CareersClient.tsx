"use client";
import React, { useMemo, useState } from "react";
import ApplicationForm from "../../components/ApplicationForm";

// Job data to enable filtering
const JOBS = [
  {
    title: "Video Editor",
    type: "Full time | Hybrid",
    locations: ["Cheyyar", "Arcot", "Kanchipuram", "Vellore"],
    package: "₹3.5 LPA",
    hours: "8 hours/day, 6 days/week",
    roleSummary:
      "Create engaging video content for workshops, learning modules, and digital platforms.",
    responsibilities: [
      "Edit training and promotional videos",
      "Create short-form content for social media",
      "Maintain brand style and video quality",
      "Add subtitles, sound, and transitions",
      "Support live event video documentation",
      "Organize and manage video assets",
      "Collaborate with content and design teams",
      "Ensure timely delivery of videos",
      "Improve storytelling and flow of videos",
      "Experiment with new video formats",
    ],
    mustHave: [
      "Video editing software proficiency",
      "Creative storytelling skills",
      "Attention to detail",
      "Time management ability",
      "Willingness to learn",
    ],
    goodToHave: [
      "Motion graphics knowledge",
      "Experience in educational content",
      "Camera handling basics",
      "Social media video experience",
    ],
    benefits: ["Portfolio growth", "Mentorship", "Career development"],
  },
  {
    title: "Biomedical Engineer",
    type: "Full time | Hybrid",
    locations: ["Cheyyar", "Arcot", "Kanchipuram", "Vellore"],
    package: "₹3.5 LPA",
    hours: "8 hours/day, 6 days/week",
    roleSummary:
      "Support neuroscience-based labs and data analysis for human intelligence programs.",
    responsibilities: [
      "Handle biomedical tools and lab equipment",
      "Assist in neuroscience experiments",
      "Collect participant data",
      "Analyze and organize data",
      "Support research documentation",
      "Maintain lab protocols and safety",
      "Assist during live lab sessions",
      "Prepare basic technical reports",
      "Support innovation and R&D tasks",
      "Work with trainers and research teams",
    ],
    mustHave: [
      "Biomedical Engineering degree",
      "Interest in neuroscience & research",
      "Basic analytical skills",
      "Documentation ability",
      "Team collaboration skills",
    ],
    goodToHave: [
      "EEG or signal processing exposure",
      "MATLAB or Python basics",
      "Research project experience",
      "Data visualization skills",
    ],
    benefits: ["Practical research exposure", "Mentorship", "Innovation environment"],
  },
  {
    title: "Content Creator",
    type: "Full time | Hybrid",
    locations: ["Cheyyar", "Arcot", "Kanchipuram", "Vellore"],
    package: "₹3.5 LPA",
    hours: "8 hours/day, 6 days/week",
    roleSummary: "Create simple, powerful content on human intelligence and leadership.",
    responsibilities: [
      "Write blogs and learning content",
      "Create social media posts",
      "Script videos and reels",
      "Support branding campaigns",
      "Research human intelligence topics",
      "Simplify complex ideas into clear language",
      "Maintain content calendar",
      "Edit and proofread content",
      "Coordinate with video and design teams",
      "Support workshop content creation",
    ],
    mustHave: [
      "Strong writing skills",
      "Creativity & curiosity",
      "Communication skills",
      "Interest in human behavior",
      "Consistency in content creation",
    ],
    goodToHave: [
      "Social media experience",
      "Canva or design basics",
      "SEO knowledge",
      "Video scripting experience",
    ],
    benefits: ["Thought leadership exposure", "Writing portfolio", "Mentorship"],
  },
  {
    title: "Research Intern",
    type: "Internship | Hybrid",
    locations: ["Cheyyar", "Arcot", "Kanchipuram", "Vellore"],
    package: "₹3.5 LPA",
    hours: "8 hours/day, 6 days/week",
    roleSummary: "Assist in research, data analysis, and lab documentation.",
    responsibilities: [
      "Support research projects",
      "Collect participant data",
      "Analyze thinking patterns",
      "Prepare reports and summaries",
      "Assist lab activities",
      "Maintain research documentation",
      "Conduct literature review",
      "Organize research records",
      "Support experiments",
      "Present findings to team",
    ],
    mustHave: [
      "Student or graduate",
      "Interest in research",
      "Basic analytical skills",
      "Documentation ability",
      "Discipline and consistency",
    ],
    goodToHave: [
      "Psychology or neuroscience background",
      "Data tools knowledge",
      "Research paper exposure",
      "Presentation skills",
    ],
    benefits: ["Research experience", "Mentorship", "PPO opportunity"],
  },
  {
    title: "Business Development Professional (EdTech Labs)",
    type: "Full-time | Hybrid",
    locations: ["Cheyyar", "Arcot", "Kanchipuram", "Vellore"],
    package: "₹7 LPA + travel support",
    hours: undefined,
    roleSummary:
      "Build partnerships and grow Aaruchudar’s Human Intelligence Labs in the EdTech domain.",
    responsibilities: [
      "Develop institutional partnerships",
      "Conduct meetings and presentations",
      "Drive business growth",
      "Manage client relationships",
      "Identify new business opportunities",
      "Handle follow-ups and closures",
      "Plan market expansion strategies",
      "Coordinate with training teams",
      "Represent the brand professionally",
      "Track performance and targets",
    ],
    mustHave: [
      "3+ years in business development / sales",
      "EdTech or training experience",
      "Strong communication skills",
      "Willingness to travel",
      "Negotiation ability",
    ],
    goodToHave: [
      "Institutional sales background",
      "Presentation skills",
      "Leadership experience",
      "Strategic planning ability",
    ],
    benefits: ["Leadership role", "Travel support", "Growth opportunities"],
  },
  // New Founder’s Office Role
  {
    title: "Personal Assistant & Founder’s Office Intern (Founder’s Office Role)",
    type: "Full-time | In-office",
    locations: ["Cheyyar", "Arcot", "Kanchipuram", "Vellore"],
    package: "Open to discussion based on experience and prior exposure",
    hours: "8 hours/day | 6 days/week",
    roleSummary:
      "Work closely with the Founder’s Office on strategy, operations, coordination, and execution, with direct exposure to leadership decision-making. Open positions: 3.",
    responsibilities: [
      "Assist the Founder with daily operations and planning",
      "Coordinate meetings, follow-ups, and execution tracking",
      "Support business and growth initiatives",
      "Work cross-functionally with internal teams",
    ],
    mustHave: [
      "MBA candidates / graduates preferred",
      "Strong communication, organization, and execution skills",
    ],
    goodToHave: [
      "Prior experience in unicorn or soon-to-be unicorn startups",
    ],
    benefits: [
      "Direct exposure to leadership & decision-making",
      "High-impact role with real ownership",
      "Fast-paced learning environment",
    ],
  },
] as const;

export default function CareersClient() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");

  const allLocations = useMemo(
    () => Array.from(new Set(JOBS.flatMap((j) => j.locations))),
    []
  );
  const allTypes = useMemo(
    () => Array.from(new Set(JOBS.map((j) => j.type))),
    []
  );

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesQuery = query
        ? [
            job.title,
            job.type,
            job.package,
            job.roleSummary,
            job.responsibilities.join(" "),
            job.mustHave.join(" "),
            job.goodToHave.join(" "),
          ]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase())
        : true;

      const matchesType = typeFilter ? job.type === typeFilter : true;
      const matchesLocation = locationFilter
        ? (job.locations as unknown as string[]).includes(locationFilter)
        : true;
      return matchesQuery && matchesType && matchesLocation;
    });
  }, [query, typeFilter, locationFilter]);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-30 flex md:hidden px-4">
        <a
          href="#apply"
          className="flex-1 text-center rounded-full bg-teal-700 text-white py-3 shadow-lg hover:bg-teal-800 transition-colors"
        >
          Apply Now
        </a>
      </div>

      {/* Title & Intro */}
      <section className="px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-indigo-600 p-8 md:p-12 shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <img src="/logo2.png" alt="Aaruchudar Logo" className="h-9 w-9 rounded-md shadow-sm" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Careers at Aaruchudar</h1>
              </div>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-white">
                At Aaruchudar, we build human intelligence through awareness, neuroscience, and real-life learning experiences.
                Join us to create meaningful impact on minds and future leaders.
              </p>
              <div className="mt-6">
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-700 text-white px-5 py-2.5 font-medium shadow-sm hover:bg-teal-800 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="px-6 md:px-10 lg:px-16 pb-6">
        <div className="mx-auto max-w-6xl">
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-950">Why Work With Us</h2>
          </header>
          <ul className="grid gap-3 text-slate-800 list-disc pl-6">
            <li>Learn and grow in the field of human intelligence & neuroscience</li>
            <li>Work on real projects with ownership and responsibility</li>
            <li>Purpose-driven and supportive team culture</li>
            <li>Strong in-office collaboration and hands-on experience</li>
            <li>Meaningful work with social impact</li>
          </ul>
        </div>
      </section>

      {/* Open Positions + Filters */}
      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="mx-auto max-w-6xl">
          <header className="mb-3 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-950">Open Positions</h2>
          </header>

          {/* Filters */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Search</label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, skills, responsibilities..."
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All</option>
                {allTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">All</option>
                {allLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-slate-600 mb-4">
            Showing {filteredJobs.length} of {JOBS.length} positions
          </p>

          {/* Job cards mapped from data */}
          <div>
            {filteredJobs.map((job) => (
              <article key={job.title} className="border border-slate-200 rounded-2xl p-6 md:p-8 mb-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{job.title}</h3>
                  <a href="#apply" className="inline-flex items-center rounded-full bg-indigo-600 text-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-indigo-700 transition-colors">Apply</a>
                </div>
                <p className="mt-2 text-slate-700">Type: {job.type}</p>
                <p className="text-slate-700">Locations: {job.locations.join(", ")}</p>
                <p className="text-slate-700">Package: {job.package}</p>
                {job.hours && <p className="text-slate-700">Working Hours: {job.hours}</p>}
                <div className="mt-4">
                  <h4 className="font-medium text-slate-900">Role Summary:</h4>
                  <p className="text-slate-700">{job.roleSummary}</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-slate-900">Responsibilities:</h4>
                  <ol className="list-decimal pl-6 text-slate-700 space-y-1">
                    {job.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ol>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-slate-900">Requirements:</h4>
                  <p className="mt-1 font-medium text-slate-800">Must-have:</p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    {job.mustHave.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                  <p className="mt-2 font-medium text-slate-800">Good-to-have:</p>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    {job.goodToHave.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-slate-900">What You Get:</h4>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    {job.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="px-6 md:px-10 lg:px-16 pt-4 pb-20">
        <div className="mx-auto max-w-3xl">
          <header className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-950">Apply Now</h2>
            <p className="mt-2 text-slate-800">Submit your application and we’ll get back to you.</p>
          </header>
          <ApplicationForm
            roles={[
              "Personal Assistant & Founder’s Office Intern (Founder’s Office Role)",
              ...JOBS.filter((j) => j.title !== "Personal Assistant & Founder’s Office Intern (Founder’s Office Role)").map((j) => j.title),
            ]}
            locations={["Cheyyar", "Arcot", "Kanchipuram", "Vellore"]}
          />
        </div>
      </section>
    </div>
  );
}
