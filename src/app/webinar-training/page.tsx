"use client";

import React, { useState } from "react";

export default function WebinarTrainingRequestPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/webinar-training-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with indigo banner and logo */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500">
        <div className="container mx-auto px-6 py-10 flex items-center gap-4">
          <img src="/logo2.png" alt="Aaruchudar" className="h-12 w-12 rounded-md bg-white/90 p-2 shadow-sm" />
          <div>
            <h1 className="text-3xl font-bold text-white">Webinar & Training Request</h1>
            <p className="mt-1 text-sm text-indigo-100">Start your learning session with Aaruchudar. Use this form to request a webinar or training session tailored to your audience and goals.</p>
            <p className="text-xs text-indigo-200">Ideal for institutions, organizations, and teams committed to developing clarity, awareness, and decision-making skills.</p>
          </div>
        </div>
      </div>

      {/* Full-page form card styled like ApplicationForm */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success / Error inline messages */}
          {status === "success" && (
            <div className="mb-6 rounded-xl bg-emerald-50 px-4 py-3 text-slate-800">
              <p className="font-medium">Your request has been successfully submitted. Our team has received your details.</p>
              <p className="mt-1 text-sm">Thank you for reaching out to Aaruchudar. We appreciate your interest in our webinars and training programs.</p>
              <p className="mt-1 text-sm">Our team will contact you within 48 hours to discuss your requirements and plan the next steps.</p>
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 rounded-xl bg-rose-50 px-4 py-3 text-slate-800">{errorMsg || "There was a problem submitting your request."}</div>
          )}

          <form id="webinar-training-form" onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
            {/* Basic Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-800">Full Name *</label>
                <input id="fullName" name="fullName" required placeholder="John Doe" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800">Email Address *</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-800">Phone Number *</label>
                <input id="phone" name="phone" type="tel" required placeholder="Include country/area code" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-slate-800">Organization / Institution Name *</label>
                <input id="organization" name="organization" required placeholder="Company or Institution" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="role" className="block text-sm font-medium text-slate-800">Role / Designation</label>
                <input id="role" name="role" placeholder="e.g., Program Coordinator" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" />
              </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-slate-200" />

            {/* Request Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="requestType" className="block text-sm font-medium text-slate-800">Type of Request *</label>
                <select id="requestType" name="requestType" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20">
                  <option value="">Select Type</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Training Program">Training Program</option>
                </select>
              </div>
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-slate-800">Select Topic *</label>
                <select id="topic" name="topic" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20">
                  <option value="">Select Topic</option>
                  <option>Human Intelligence & Self-Awareness</option>
                  <option>Brain-Based Decision Making</option>
                  <option>Clarity in Chaos (Focus & Thinking Skills)</option>
                  <option>Emotional Intelligence & Leadership</option>
                  <option>Ethics vs Opportunity (Values & Choices)</option>
                  <option>Feedback Intelligence</option>
                  <option>Communication & Silence in Meetings</option>
                  <option>Managing Mental Load & Stress</option>
                  <option>Critical Thinking & Problem Solving</option>
                  <option>Creativity & Original Thinking</option>
                  <option>Student Mindset & Career Readiness</option>
                  <option>Workplace Awareness & Responsibility</option>
                  <option>Customized Topic (Please specify in notes)</option>
                </select>
              </div>
              <div>
                <label htmlFor="audienceType" className="block text-sm font-medium text-slate-800">Select Target Audience *</label>
                <select id="audienceType" name="audienceType" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20">
                  <option value="">Select Target Audience</option>
                  <option>School Students</option>
                  <option>College / University Students</option>
                  <option>Educators / Faculty</option>
                  <option>Working Professionals</option>
                  <option>Corporate Teams</option>
                  <option>Leadership / Managers</option>
                  <option>Entrepreneurs / Startups</option>
                  <option>Mixed Audience</option>
                </select>
              </div>
              <div>
                <label htmlFor="mode" className="block text-sm font-medium text-slate-800">Preferred Mode *</label>
                <select id="mode" name="mode" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20">
                  <option value="">Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div>
                <label htmlFor="audienceSize" className="block text-sm font-medium text-slate-800">Expected Audience Size</label>
                <input id="audienceSize" name="audienceSize" type="number" min="1" placeholder="e.g., 50" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" />
              </div>
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-800">Preferred Date or Timeline</label>
                <input id="preferredDate" name="preferredDate" placeholder="e.g., Next month" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-slate-800">Location (only if Offline)</label>
                <input id="location" name="location" placeholder="City, venue, etc." className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-slate-800">Duration Required *</label>
                <select id="duration" name="duration" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20">
                  <option value="">Select Duration</option>
                  <option>60 min</option>
                  <option>90 min</option>
                  <option>Half-day</option>
                  <option>Full-day</option>
                </select>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-slate-200" />

            {/* Additional */}
            <div className="grid grid-cols-1 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="requirements" className="block text-sm font-medium text-slate-800">Specific Requirements</label>
                <textarea id="requirements" name="requirements" rows={5} placeholder="Add any notes or customization details" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20" />
              </div>
            </div>

            {/* Consent & CTA */}
            <div className="mt-6">
              <p className="text-xs text-slate-500">By submitting this form, you agree to be contacted by Aaruchudar regarding your webinar or training request. Your information will be kept confidential and used only for this purpose.</p>
              <div className="mt-4 flex items-center gap-3">
                <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70">
                  {status === "submitting" ? "Submitting..." : "Request Session"}
                </button>
                {status === "success" && <span className="text-sm text-emerald-700">Submitted</span>}
                {status === "error" && <span className="text-sm text-red-600">{errorMsg || "Failed to submit"}</span>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
