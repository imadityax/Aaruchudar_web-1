"use client";

import { useState } from "react";

export default function BasicApplicationForm() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptedTerms) {
      alert("You must accept the Scholarship Rules & Regulations");
      return;
    }

    const res = await fetch("/api/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        acceptedTerms: true,
      }),
    });

    if (res.ok) {
      alert("Form submitted successfully");
      setFormData({});
      setAcceptedTerms(false);
    } else {
      alert("Something went wrong");
    }
  };


  return (
    <>
      <section className="page">
        <div className="card">
          <h1>Application Form</h1>
          <p className="subtitle">
            Please provide your basic personal and academic details
          </p>

          <form onSubmit={handleSubmit} className="form">

            {/* PERSONAL & CONTACT */}
            <div className="section">
              <h2>Personal & Contact Information</h2>

              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />

              <input
                name="dob"
                type="date"
                onChange={handleChange}
                required
              />

              <select name="gender" onChange={handleChange} required>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <input
                name="contact"
                placeholder="Contact Number"
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
            </div>

            {/* ACADEMIC */}
            <div className="section">
              <h2>Academic Background</h2>

              <select name="educationStatus" onChange={handleChange} required>
                <option value="">Current Educational Status</option>
                <option>School</option>
                <option>UG</option>
                <option>PG</option>
                <option>Professional</option>
              </select>

              <input
                name="institution"
                placeholder="Institution Name"
                onChange={handleChange}
                required
              />

              <input
                name="field"
                placeholder="Specific Field / Course"
                onChange={handleChange}
                required
              />

              <input
                name="board"
                placeholder="Board / University Name"
                onChange={handleChange}
                required
              />

              <input
                name="percentage"
                placeholder="Current Percentage"
                onChange={handleChange}
                required
              />
            </div>
            {/* TERMS & CONDITIONS */}
            <div className="terms">
              <h3>Scholarship Rules & Regulations</h3>

              <div className="terms-box">
                <p>
                  <strong>1. Scholarship – Full Details</strong><br />
                  The Scholarship Examination is an initiative designed to identify and
                  support meritorious students who demonstrate academic potential,
                  analytical ability, and commitment towards learning. The decision of the
                  Scholarship Committee shall be final and binding.
                </p>

                <p>
                  <strong>2. Eligibility Criteria</strong><br />
                  Applicants must be enrolled in a recognized institution, provide valid
                  academic records, submit only one application, and complete registration
                  within the deadline.
                </p>

                <p>
                  <strong>3. Examination Rules</strong><br />
                  The exam may be online/offline. Any form of malpractice, impersonation,
                  or use of unfair means will result in immediate disqualification.
                </p>

                <p>
                  <strong>4. Instructions</strong><br />
                  Candidates must ensure stable internet connectivity, follow invigilator
                  instructions, and manage time responsibly.
                </p>

                <p>
                  <strong>5. Do’s & Don’ts</strong><br />
                  Providing false information, submitting multiple applications, or
                  attempting influence will lead to disqualification.
                </p>
              </div>
            </div>


            <div className="declaration">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                required
              />
              <span>
                I have read, understood, and agree to the Scholarship Rules & Regulations.
              </span>
            </div>


            {/* SUBMIT */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* ================= CSS ================= */}
      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
          background: #f8fafc;
        }

        .card {
          width: 100%;
          max-width: 520px;
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
        }

        h1 {
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
        }

        .subtitle {
          text-align: center;
          font-size: 14px;
          color: #64748b;
          margin-top: 6px;
          margin-bottom: 28px;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .section h2 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 4px;
        }

        input,
        select {
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          font-size: 14px;
        }

        input:focus,
        select:focus {
          outline: none;
          border-color: #06b6d4;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
        }

        .declaration {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 13px;
          color: #334155;
          background: #f8fafc;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
        }

        button {
          margin-top: 8px;
          padding: 14px;
          background: #06b6d4;
          color: white;
          font-size: 15px;
          font-weight: 600;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: 0.2s;
        }

        button:hover {
          background: #0891b2;
        }
          .terms {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.terms h3 {
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
}

.terms-box {
  max-height: 160px;
  overflow-y: auto;
  padding: 12px;
  font-size: 13px;
  line-height: 1.6;
  color: #334155;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}

      `}</style>
    </>
  );
}
