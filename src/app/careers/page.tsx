// filepath: src/app/careers/page.tsx
import React from "react";
import type { Metadata } from "next";

/* ================= SEO META (SERVER SAFE) ================= */

export const metadata: Metadata = {
  title: "Careers at Aaruchudar | Human Intelligence & Cognitive Research Jobs",
  description:
    "Explore careers at Aaruchudar. Join our human intelligence research and cognitive learning team as a frontend developer, Three.js engineer, or future innovator.",
  keywords: [
    "Aaruchudar careers",
    "human intelligence jobs",
    "cognitive research jobs",
    "frontend developer Next.js job",
    "Three.js WebGL jobs",
    "remote tech jobs India",
  ],
};

/* ================= PAGE ================= */

export default function CareersPage() {
  const jobs = [
    {
      title: "Frontend Developer (React/Next.js)",
      type: "Full-time",
      location: "Remote / Chennai",
      description:
        "Build interactive learning experiences, optimize performance, and collaborate across design and backend teams.",
      requirements: [
        "2+ years with React/Next.js",
        "Strong TypeScript skills",
        "Experience with CSS modules/Tailwind",
      ],
      email: "careers@aaruchudar.com",
    },
    {
      title: "3D Web Engineer (Three.js)",
      type: "Contract",
      location: "Remote",
      description:
        "Develop and optimize interactive brain models and scenes using Three.js/WebGL.",
      requirements: [
        "Hands-on Three.js/WebGL",
        "Performance profiling",
        "GLTF/GLB asset pipelines",
      ],
      email: "careers@aaruchudar.com",
    },
  ];

  return (
    <section className="min-h-screen px-6 md:px-10 lg:px-16 py-12 bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-16 md:pt-24 pb-20">
      
      {/* SEO H1 – visible, no UI change */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Careers at Aaruchudar
        </h1>
        <p className="mt-2 text-gray-600">
          Join us in building engaging, science-backed human intelligence learning experiences.
        </p>
      </header>

      {/* SEO SUPPORTING CONTENT – invisible */}
      <section className="sr-only">
        <p>
          Aaruchudar careers focus on human intelligence research, cognitive health,
          brain training platforms, and interactive learning technologies.
          We hire frontend developers, Three.js engineers, and innovators passionate
          about mental agility and intelligence development.
        </p>
      </section>

      {/* JOB LISTINGS – UI UNCHANGED */}
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <article
            key={job.title}
            className="rounded-xl border border-gray-200 p-6 shadow-sm bg-white/90 backdrop-blur-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-medium text-gray-900">{job.title}</h2>
            <p className="mt-1 text-sm text-gray-500">
              {job.type} • {job.location}
            </p>
            <p className="mt-3 text-gray-700">{job.description}</p>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              {job.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
            <a
              href={`mailto:${job.email}?subject=${encodeURIComponent(
                "Application: " + job.title
              )}`}
              className="mt-4 inline-block rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-black"
            >
              Apply via Email
            </a>
          </article>
        ))}
      </div>

      <footer className="mt-12 text-gray-600">
        <p>
          Don’t see a role that fits? Send your resume and portfolio to{" "}
          <a
            href="mailto:careers@aaruchudar.com"
            className="underline text-gray-900"
          >
            careers@aaruchudar.com
          </a>.
        </p>
      </footer>
    </section>
  );
}
