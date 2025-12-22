"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");

  /* ---------------- FEEDBACK FORM STATE ---------------- */
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [contactStatus, setContactStatus] = useState<string | null>(null);
  const [feedbackStatus, setFeedbackStatus] = useState<string | null>(null);

  /* ---------------- MAIL LINKS ---------------- */
  const mailtoHref = `mailto:hello@aaruchudar.com?subject=Contact from ${encodeURIComponent(
    contactName || "Anonymous"
  )}&body=${encodeURIComponent(
    `Name: ${contactName}\nEmail: ${contactEmail}\n\n${message}`
  )}`;

  const feedbackMailtoHref = `mailto:hello@aaruchudar.com?subject=Feedback from ${encodeURIComponent(
    feedbackName || "Anonymous"
  )}&body=${encodeURIComponent(
    `Name: ${feedbackName}\nEmail: ${feedbackEmail}\nRating: ${rating}/5\n\n${feedback}`
  )}`;

  /* ---------------- CONTACT SUBMIT ---------------- */
  const submitContact = async () => {
    setSubmitting(true);
    setContactStatus(null);

    try {
      if (!contactName || !contactEmail || !message) {
        setContactStatus("Please fill all fields.");
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message,
        }),
      });

      if (!res.ok) throw new Error();

      setContactStatus("Message sent successfully.");
      setContactName("");
      setContactEmail("");
      setMessage("");
    } catch {
      setContactStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- FEEDBACK SUBMIT ---------------- */
  const submitFeedback = async () => {
    setSubmitting(true);
    setFeedbackStatus(null);

    try {
      if (!feedbackName || !feedbackEmail || !rating || !feedback) {
        setFeedbackStatus(
          "Please provide name, email, rating, and feedback."
        );
        return;
      }

      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: feedbackName,
          email: feedbackEmail,
          rating,
          feedback,
        }),
      });

      if (!res.ok) throw new Error();

      setFeedbackStatus("Feedback submitted. Thank you!");
      setFeedbackName("");
      setFeedbackEmail("");
      setRating(0);
      setFeedback("");
    } catch {
      setFeedbackStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <section className="min-h-screen bg-white">
      {/* Immersive hero */}
      <div className="relative isolate overflow-hidden">
        {/* mesh blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />
          <div className="absolute top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
          <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-purple-200/60 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Let’s build something meaningful</h1>
              <p className="mt-3 text-gray-600 max-w-xl md:mx-0 mx-auto">
                Reach out for partnerships, questions, or feedback. We respond within 1–2 business days.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="mailto:hello@aaruchudar.com" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 shadow-sm">✉️ Email us</a>
                <a href="tel:+910000000000" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 hover:bg-gray-50">📞 Call</a>
              </div>
            </div>
            <div className="relative">
              {/* Removed hero cards to declutter */}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left column: contact + feedback stack */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitContact();
                }}
                className="space-y-8 p-8 md:p-10"
                aria-labelledby="contact-form-title"
              >
                <div className="mb-2">
                  <h2 id="contact-form-title" className="text-xl font-medium text-gray-900">Send us a message</h2>
                  <p className="text-sm text-gray-600">Tell us about your idea or question.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="Your name"
                      aria-required
                    />

                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="you@example.com"
                      aria-required
                    />

                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400 min-h-32"
                    placeholder="How can we help?"
                    aria-required
                  />
                  <p className="mt-1 text-xs text-gray-500">By clicking Send, your email client will open with the message.</p>
                </div>

                <div className="flex items-center gap-4">
                  <button disabled={submitting} type="submit" className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-60">
                    {submitting ? "Sending..." : "Send"}
                  </button>
                  <a href={mailtoHref} className="text-sm text-indigo-600 hover:text-indigo-700 underline">Or email us directly</a>
                </div>
                {contactStatus && (
                  <p className="text-sm text-gray-700">{contactStatus}</p>
                )}
              </form>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitFeedback();
                }}
                className="space-y-8 p-8 md:p-10"
                aria-labelledby="feedback-form-title"
              >
                <div className="mb-2">
                  <h2 id="feedback-form-title" className="text-xl font-medium text-gray-900">Feedback</h2>
                  <p className="text-sm text-gray-600">Rate your experience and leave a comment.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={feedbackName}
                      onChange={(e) => setFeedbackName(e.target.value)}
                      className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="Your name"
                      aria-required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={feedbackEmail}
                      onChange={(e) => setFeedbackEmail(e.target.value)}
                      className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="you@example.com"
                      aria-required
                    />
                  </div>
                </div>

                {/* Rating stars */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <div className="flex items-center gap-1" role="radiogroup" aria-label="Rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        aria-pressed={rating === star}
                        aria-label={`${star} star${star > 1 ? "s" : ""}`}
                        className={`h-9 w-9 flex items-center justify-center rounded-md transition-all ${star <= rating
                          ? "bg-indigo-600 text-white hover:bg-indigo-700 scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="ml-3 text-sm text-gray-500">{rating ? `${rating} / 5` : "No rating yet"}</span>
                  </div>
                </div>

                {/* Feedback message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="feedbackMessage">Your feedback</label>
                  <textarea
                    id="feedbackMessage"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400 min-h-28"
                    placeholder="Tell us what we did well, or what we could improve"
                  />
                  <p className="mt-1 text-xs text-gray-500">We may share anonymized feedback to improve our services.</p>
                </div>

                <div className="flex items-center gap-4">
                  <button disabled={submitting} type="submit" className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-60">
                    {submitting ? "Submitting..." : "Submit feedback"}
                  </button>
                  <a href={feedbackMailtoHref} className="text-sm text-indigo-600 hover:text-indigo-700 underline">Open in email</a>
                </div>
                {feedbackStatus && (
                  <p className="text-sm text-gray-700">{feedbackStatus}</p>
                )}
              </form>
            </div>
          </div>

          {/* Right column: uniform cards */}
          <div className="lg:col-span-1 flex flex-col gap-10">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Connect with us</h2>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://www.instagram.com/aaruchudar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50">
                  <Image src="/globe.svg" width={18} height={18} alt="Instagram" /> <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/company/aaruchudar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50">
                  <Image src="/globe.svg" width={18} height={18} alt="LinkedIn" /> <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com/aaruchudar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50">
                  <Image src="/globe.svg" width={18} height={18} alt="Twitter" /> <span>Twitter/X</span>
                </a>
                <a href="https://www.facebook.com/aaruchudar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50">
                  <Image src="/globe.svg" width={18} height={18} alt="Facebook" /> <span>Facebook</span>
                </a>
                <a href="https://www.youtube.com/@aaruchudar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50 col-span-2">
                  <Image src="/globe.svg" width={18} height={18} alt="YouTube" /> <span>YouTube</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8 min-h-[160px] flex flex-col justify-center">
                <Image src="/globe.svg" width={24} height={24} alt="Location" />
                <div className="mt-2 font-medium text-gray-900">Chennai, India</div>
                <p className="text-sm text-gray-600">Serving clients worldwide</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8 min-h-[160px] flex flex-col justify-center">
                <Image src="/file.svg" width={24} height={24} alt="Hours" />
                <div className="mt-2 font-medium text-gray-900">Hours</div>
                <p className="text-sm text-gray-600">Mon–Fri, 9:00–18:00 IST</p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Our location</h2>
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.879620064667!2d80.270718!3d13.082680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e4f0f0f0f0%3A0x0!2sChennai!5e0!3m2!1sen!2sin!4v1700000000000"
                ></iframe>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
              {/* FAQ accordion placeholder */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
