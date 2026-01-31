"use client";

import Link from "next/link";

export default function InternshipPage() {
  const programs = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Data Science (Python)",
    "Mobile App Development",
  ];

  const oneMonthPricing = [
    { name: "Frontend Development", price: "₹3,600 + 18% GST" },
    { name: "Backend Development", price: "₹3,650 + 18% GST" },
    { name: "Full Stack Development", price: "₹3,700 + 18% GST" },
    { name: "Data Science (Python)", price: "₹3,750 + 18% GST" },
    { name: "Mobile App Development", price: "₹3,780 + 18% GST" },
  ];

  const threeMonthPricing = [
    { name: "Frontend Development", price: "₹10,800 + 18% GST" },
    { name: "Backend Development", price: "₹10,950 + 18% GST" },
    { name: "Full Stack Development", price: "₹11,100 + 18% GST" },
    { name: "Data Science (Python)", price: "₹11,250 + 18% GST" },
    { name: "Mobile App Development", price: "₹11,340 + 18% GST" },
  ];

  const sixMonthPricing = [
    { name: "Frontend Development", price: "₹21,600 + 18% GST" },
    { name: "Backend Development", price: "₹21,900 + 18% GST" },
    { name: "Full Stack Development", price: "₹22,200 + 18% GST" },
    { name: "Data Science (Python)", price: "₹22,500 + 18% GST" },
    { name: "Mobile App Development", price: "₹22,680 + 18% GST" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-cyan-50 to-blue-50">
        <div className="relative mx-auto max-w-6xl px-6 py-24">
         

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Aaruchudar <br className="hidden sm:block" />
            Internship Program
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Structured, skill-based internships designed to make you job-ready
            through real projects, mentorship, and certification.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="#pricing"
              className="rounded-xl bg-indigo-600 text-white px-8 py-4 font-semibold shadow-lg hover:bg-indigo-500 transition"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold shadow hover:bg-slate-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Available Programs</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {programs.map((p) => (
            <span
              key={p}
              className="rounded-full bg-slate-100 border border-slate-200 px-5 py-2 text-sm font-medium"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Internship Pricing</h2>
        <p className="mt-2 text-slate-600">
          Choose a duration based on your learning and career goals.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {/* 1 MONTH */}
          <PricingCard
            title="1-Month Internship"
            subtitle="Foundation Level"
            gradient="from-indigo-600 to-cyan-600"
            data={oneMonthPricing}
          />

          {/* 3 MONTH */}
          <PricingCard
            title="3-Month Internship"
            subtitle="Skill Development Level"
            gradient="from-emerald-600 to-teal-600"
            data={threeMonthPricing}
          />

          {/* 6 MONTH */}
          <PricingCard
            title="6-Month Internship"
            subtitle="Advanced / Job-Ready Level"
            gradient="from-rose-600 to-orange-600"
            data={sixMonthPricing}
          />
        </div>

        <p className="mt-8 text-sm text-slate-500">
          * Taxes as applicable. Prices may vary slightly based on updates.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-indigo-600 text-white px-8 py-4 font-semibold shadow-lg hover:bg-indigo-500 transition"
          >
            Apply / Enquire
          </Link>
          <Link
            href="/quiz"
            className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold shadow hover:bg-slate-50 transition"
          >
            Take Free Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= PRICING CARD COMPONENT ================= */

function PricingCard({
  title,
  subtitle,
  gradient,
  data,
}: {
  title: string;
  subtitle: string;
  gradient: string;
  data: { name: string; price: string }[];
}) {
  const duration = title.includes("1-Month")
    ? "1 Month"
    : title.includes("3-Month")
    ? "3 Months"
    : title.includes("6-Month")
    ? "6 Months"
    : "";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition">
      <div className={`rounded-t-3xl bg-gradient-to-r ${gradient} p-6 text-white`}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-90">{subtitle}</p>
      </div>

      <ul className="divide-y divide-slate-200">
        {data.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between p-5 gap-4"
          >
            <div className="flex-1">
              <span className="font-medium">{item.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-slate-700">{item.price}</span>
              <Link
                href={`/register?course=${encodeURIComponent(item.name)}&duration=${encodeURIComponent(duration)}`}
                className="rounded-lg bg-indigo-600 text-white px-3 py-2 text-sm font-semibold hover:bg-indigo-500 transition"
              >
                Register
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
