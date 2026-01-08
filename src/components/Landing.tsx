import React from "react";
import Link from "next/link";
import Image from "next/image";

// ======================= DATA =======================
const stats = [
  { value: "8", label: "Intelligence Labs" },
  { value: "1200+", label: "Active Learners" },
  { value: "20+", label: "Workshops" },
  { value: "96%", label: "Positive Feedback" },
];

// ======================= COMPONENT =======================
export default function Landing() {
  return (
    <>

    {/*      /////////////////////////////////////////////////////////////////                           */}

      <section className="py-20 bg-white">
        <h2 className="text-center text-3xl font-bold mb-12">
          What is the process?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Take a Test",
              desc: "Get an unbiased view of yourself",
            },
            {
              title: "Get Your Report",
              desc: "Discover strengths & weaknesses",
            },
            {
              title: "Begin Your Journey",
              desc: "Improve with expert guidance",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <h2 className="text-center text-3xl font-bold mb-4">
          The <span className="text-blue-600">5 essential</span> cognitive
          skills
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 mt-12 px-6">
          {["Reaction", "Logic", "Memory", "Concentration", "Speed"].map(
            (skill) => (
              <div
                key={skill}
                className="bg-white rounded-xl p-6 text-center shadow"
              >
                <p className="font-semibold">{skill}</p>
              </div>
            )
          )}
        </div>

        <div className="text-center mt-10">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl">
            Start Training →
          </button>
        </div>
      </section>

      {/*      //////////////////    */}


      {/* ================= TOP SCHOLARSHIP BANNER ================= */}
      <section className="w-full">
        <Link href="/scholarship" className="block">
          <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px] bg-black">
            <Image
              src="/images/banner.jpg"
              alt="Scholarship Application Banner"
              fill
              priority
              className="object-contain"
            />

            {/* Optional soft overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* CTA Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg">
                <p className="text-lg sm:text-xl font-bold text-slate-900">
                  🎓 Start the Scholoarship Test
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ================= HERO SECTION ================= */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 text-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.16),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-28 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight">
              Unlock <span className="text-cyan-600">Human Intelligence</span>
            </h1>

            <p className="text-lg text-slate-700 leading-relaxed">
              Structured programs, research-driven methods, and continuous
              assessments that elevate clarity, decision-making, and innovation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quiz"
                className="rounded-xl bg-cyan-600 text-white px-6 py-3 shadow-lg hover:bg-cyan-500 active:scale-[0.98] transition-all flex items-center gap-2"
              >
                🧠 Take Free Assessment
              </Link>

              <Link
                href="/hi-labs"
                className="rounded-xl border border-slate-300 backdrop-blur bg-white/70 px-6 py-3 hover:bg-slate-100 shadow-md flex items-center gap-2"
              >
                🔬 Explore Labs
              </Link>

              {/* New Internship CTA */}
              <Link
                href="/internship"
                className="rounded-xl bg-indigo-600 text-white px-6 py-3 shadow-lg hover:bg-indigo-500 active:scale-[0.98] transition-all flex items-center gap-2"
              >
                💼 Internships
              </Link>
            </div>

            <div className="mt-10 flex gap-6 text-xs text-slate-500 flex-wrap">
              {["Daily Quizzes", "Expert Designed", "Personalized Feedback", "Internships"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-slate-100 p-8 text-center shadow-lg border border-slate-200"
            >
              <div className="text-4xl font-black text-indigo-700">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-700">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 text-slate-900">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-2xl bg-white/70 backdrop-blur-xl p-12 shadow-2xl border border-slate-200">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Transform Your Way of Thinking
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Take a free baseline assessment and receive a customized roadmap
              that helps accelerate your cognitive improvement.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/quiz"
                className="bg-cyan-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg 
                           hover:bg-cyan-500 active:scale-[0.98] transition-all"
              >
                Start Quiz
              </Link>

              <Link
                href="/blog"
                className="bg-white/80 border border-slate-200 px-7 py-3 rounded-xl font-semibold text-slate-900 
                           hover:bg-white transition-all"
              >
                Explore Insights
              </Link>

              <Link
                href="/scholarship"
                className="rounded-xl bg-indigo-600 text-white px-7 py-3 shadow-lg hover:bg-indigo-500 transition"
              >
                🎓 Apply for Scholarship
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
