


"use client";

import { useState } from "react";

type Props = {
  onStart: () => void;
};

export default function StudentForm({ onStart }: Props) {
  // 🔹 VIDEO STATE (NEW)
  const [showVideo, setShowVideo] = useState(true);

  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  // 🔹 VIDEO SCREEN (NO FORM UI TOUCHED)
  if (showVideo) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative">
  <video
    src="/videos/assessment-intro.mp4"
    autoPlay
    playsInline
    className="w-full max-w-4xl h-[420px] rounded-xl object-cover"
    onEnded={() => setShowVideo(false)}
  />
</div>

    );
  }

  // 🔹 FORM LOGIC (UNCHANGED)
  const handleStart = () => {
    if (!form.name || !form.email || !form.phone || !form.college) {
      alert("Please fill all details");
      return;
    }

    if (!agreed) {
      alert("Please accept the instructions");
      return;
    }

    onStart();
  };

  // 🔹 YOUR ORIGINAL UI (UNCHANGED)
  return (
    <div className="min-h-screen bg-[#ecfdf5] flex items-center justify-center p-6">
      <div className="bg-white max-w-[560px] w-full rounded-2xl p-10 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        {/* TITLE */}
        <h2 className="text-xl font-semibold mb-1">Scholarship Assessment</h2>
        <p className="text-gray-500 mb-4">
          Please fill your details to start the test
        </p>

        {/* HOW THIS HELPS */}
        <div className="bg-gray-50 rounded-lg p-4 text-sm mb-4">
          <h4 className="font-semibold mb-1">How this assessment helps you</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Improves clarity in decision-making</li>
            <li>Strengthens emotional intelligence</li>
            <li>Enhances focus in complex situations</li>
            <li>Builds leadership self-awareness</li>
          </ul>
        </div>

        {/* LIVE STATS */}
        <div className="flex flex-wrap gap-4 text-sm mb-5">
          <span className="text-emerald-600 font-medium">
            👥 1,02,000+ Participants
          </span>

          <span className="text-sky-600 font-medium">
            🌍 Learners across India
          </span>

          <span className="text-indigo-600 font-medium">
            🎓 Students & Professionals
          </span>
        </div>

        {/* FORM INPUTS */}
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
          placeholder="Student Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
          placeholder="Email ID"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
          placeholder="Contact Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
          placeholder="College Name"
          value={form.college}
          onChange={(e) => setForm({ ...form, college: e.target.value })}
        />

        {/* INSTRUCTIONS */}
        <div className="bg-gray-50 rounded-lg p-4 text-sm mt-4">
          <h4 className="font-semibold mb-1">Instructions</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Each question carries 1 mark.</li>
            <li>Negative Marking: –0.25 for every incorrect answer.</li>
            <li>No marks will be deducted for unattempted questions.</li>
            <li>All questions are compulsory.</li>
            <li>No tab switch. No copy–paste.</li>
          </ul>
        </div>

        {/* DEVELOPMENT INFO */}
        <div className="bg-gray-50 rounded-lg p-4 text-sm mt-4">
          <h4 className="font-semibold mb-1">
            How this assessment was developed
          </h4>
          <p>
            This assessment was developed using insights from cognitive science,
            leadership psychology, and real-world decision-making research.
            Questions were refined through expert review and pilot testing to
            ensure relevance, clarity, and real-life applicability.
          </p>
        </div>

        {/* AGREEMENT */}
        <label className="flex items-center gap-3 text-sm mt-5">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-4 h-4 accent-green-500"
          />
          <span>I have read and understood the instructions</span>
        </label>

        {/* START BUTTON */}
        <button
          onClick={handleStart}
          disabled={!agreed}
          className="w-full mt-5 py-3 rounded-xl bg-green-500 text-white text-base font-semibold disabled:opacity-50"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}