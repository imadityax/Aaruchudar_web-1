"use client";
import React, { useState, useMemo } from "react";

type ApplicationFormProps = {
  roles: string[];
  locations: string[];
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  role: string;
  location: string;
  resume?: File | null;
  portfolio?: string;
  reason: string;
};

export default function ApplicationForm({ roles, locations }: ApplicationFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    role: roles[0] ?? "",
    location: locations[0] ?? "",
    resume: null,
    portfolio: "",
    reason: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const roleOptions = useMemo(() => roles, [roles]);
  const locationOptions = useMemo(() => locations, [locations]);

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.reason.trim() || form.reason.trim().length < 20) e.reason = "Tell us more (min 20 characters).";

    if (form.resume) {
      const isPdf = form.resume.type === "application/pdf" || (form.resume.name || "").toLowerCase().endsWith(".pdf");
      if (!isPdf) e.resume = "Upload PDF only.";
      const sizeMB = form.resume.size / (1024 * 1024);
      if (sizeMB > 10) e.resume = "File must be under 10MB.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (key: keyof FormState, value: unknown) => {
    setForm((prev) => ({ ...prev, [key]: value as any }));
    if (errors[key as string]) setErrors((prev) => ({ ...prev, [key as string]: "" }));
    setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    if (!validate()) return;
    setSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setSuccess("Application submitted successfully. We will contact you soon.");
      setForm((prev) => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
        role: roleOptions[0] ?? "",
        location: locationOptions[0] ?? "",
        resume: null,
        portfolio: "",
        reason: "",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-800">Full Name *</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
            placeholder="John Doe"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-800">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
            placeholder="you@example.com"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-800">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-800">Role Applying For</label>
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={(e) => onChange("role", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
          >
            {roleOptions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-slate-800">Preferred Location</label>
          <select
            id="location"
            name="location"
            value={form.location}
            onChange={(e) => onChange("location", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
          >
            {locationOptions.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="resume" className="block text-sm font-medium text-slate-800">Resume (PDF only)</label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept="application/pdf,.pdf"
            onChange={(e) => onChange("resume", e.target.files?.[0] ?? null)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-white file:hover:bg-indigo-700 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
            aria-invalid={!!errors.resume}
            aria-describedby={errors.resume ? "resume-error" : undefined}
          />
          {errors.resume && <p id="resume-error" className="mt-1 text-xs text-red-600">{errors.resume}</p>}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="portfolio" className="block text-sm font-medium text-slate-800">Portfolio / LinkedIn URL </label>
          <input
            id="portfolio"
            name="portfolio"
            type="url"
            value={form.portfolio}
            onChange={(e) => onChange("portfolio", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="reason" className="block text-sm font-medium text-slate-800">Why should we hire you? *</label>
          <textarea
            id="reason"
            name="reason"
            value={form.reason}
            onChange={(e) => onChange("reason", e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
            rows={5}
            placeholder="Share your motivation, relevant experience, and what you’ll bring to Aaruchudar."
            required
            aria-invalid={!!errors.reason}
            aria-describedby={errors.reason ? "reason-error" : undefined}
          />
          {errors.reason && <p id="reason-error" className="mt-1 text-xs text-red-600">{errors.reason}</p>}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
        {success && <span className="text-sm text-emerald-700">{success}</span>}
      </div>
    </form>
  );
}
