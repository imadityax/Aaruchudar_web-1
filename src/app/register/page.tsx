"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const search = useSearchParams();
  const prefillCourse = search.get("course") || "";
  const prefillDuration = search.get("duration") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: prefillCourse,
    duration: prefillDuration,
    message: "",
  });

  const courses = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Data Science (Python)",
    "Mobile App Development",
  ];

  const durations = ["1 Month", "3 Months", "6 Months"];

  useEffect(() => {
    setForm((f) => ({
      ...f,
      course: prefillCourse || f.course,
      duration: prefillDuration || f.duration,
    }));
  }, [prefillCourse, prefillDuration]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Registration submitted. We will contact you shortly.");
    router.push("/thank-you");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-blue-50 text-slate-900">
      {/* ================= HEADER ================= */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.25),transparent_60%)]" />

        <div className="relative mx-auto max-w-3xl px-6 pt-16 pb-10">
          {/* BACK BUTTON */}
          <button
            onClick={() => router.back()}
            className="mb-6 inline-flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow hover:bg-white transition"
          >
            ← Back
          </button>

          <div className="text-center">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
              Aaruchudar Internship
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Internship Registration
            </h1>
            <p className="mt-3 text-slate-700">
              Fill in your details and our team will contact you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FORM CARD ================= */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl">
          <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
            {/* NAME */}
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* EMAIL & PHONE */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

            {/* COURSE & DURATION */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  Course
                </label>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  {courses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">
                  Duration
                </label>
                <select
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
                  <option value="" disabled>
                    Select duration
                  </option>
                  {durations.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any specific questions or expectations?"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-4 w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-4 font-semibold text-white shadow-lg hover:opacity-90 transition"
            >
              Submit Registration
            </button>

            <p className="text-center text-xs text-slate-500">
              By submitting, you agree to be contacted by Aaruchudar regarding the internship.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
