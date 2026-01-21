export default function ResearchPage() {
  return (
    // Dark-only theme background
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Research
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            Advancing learning with neuroscience, visualization, and interactive
            design.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {[
            {
              title: "Cognitive Neuroscience",
              desc: "Exploring interactive 3D models of the brain regions and their functions.",
            },
            {
              title: "Educational Technology",
              desc: "Creating visualization tools that simplify complex concepts.",
            },
            {
              title: "Behavioral Studies",
              desc: "Exploring learning and engagement through interactive activities.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow hover:border-orange-300"
            >
              <h2 className="text-xl font-semibold text-gray-900">{card.title}</h2>
              <p className="mt-2 text-gray-700">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Human Intelligence Development Programs */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Human Intelligence Development Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "HI Labs (Human Intelligence Labs)",

                desc: "Not a Workshop. Not a Seminar. A Real Lab for Real People.",
                labs: [
                  "Lab of Light — Clarity as Culture (Where fog becomes direction)",
                  "Lab of the Compass — Decision Making Without Drama (Find your true north)",
                  "Lab of Stillness — Inner Focus in a Noisy World (Quiet is a superpower)",
                  "Lab of Echoes — The Power of Listening (Learn to really hear)",
                  "Lab of Fire & Flow — Intelligent Conflict and Recovery (Fight. Heal. Grow.)",
                  "Lab of Patterns — Systematic Thinking (See the web, not the mess)",
                  "Lab of Mirrors — Voice, Value and Vulnerability (Speak the unsaid)",
                  "Lab of Originals — Leadership without Imitation (Be the First You)",
                ],
              },
              {
                title: "Human Intelligence (HI) Courses",

                desc: "Structured learning journeys with curated weekly topics, mentor feedback, and task-based output",
                labs: [
                  "Career Intelligence: Decode your path without following trends",
                  "Clarity over Confusion: Learn how to think, not what to think",
                  "Professional Readiness: From thinking to articulation to execution",
                  "Purpose Engineering: Reverse-engineer your career from within",
                ],
              },
              {
                title: "Paid Internships",

                desc: "Our internships are:",
                labs: [
                  "Role-specific (Marketing, Strategy, Research, Development)",
                  "Feedback-heavy",
                  "Real deadlines, real conflict, real management challenges",
                  "Paid only on performance or progression",
                ],
              },
              {
                title: "Fee-Based Internships",

                desc: "For early-year college students — a hands-on, low-cost model to",
                labs: [
                  "Learn coding (Python, JS, etc.)",
                  "Build soft skills (writing, clarity, reporting)",
                  "Undergo a 3-day or 1-week live task challenge",
                  "With: Structured syllabus, Daily review + team evaluation",
                  "₹2,000 (3-day) or ₹5,000 (1-week)",
                ],
              },
              {
                title: "Research, Games, and Facts",

                desc: "We blend research with reality",
                labs: [
                  "All labs designed using principles from MIT Media Lab, Stanford d.school, and NIMHANS neuroscience",
                  "Games include simulated conflict, clarity sprinting, and listening dares",
                  "Research links: Clarity as Cognitive Anchor – NCBI Study, Systematic Thinking vs Analytical Thinking – Harvard Business Review",
                ],
              },
            ].map((pro) => (
              <article
                key={pro.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-6"
              >
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {pro.title}
                </h3>
                <p className="mt-2 text-gray-700">{pro.desc}</p>
                <ul className="mt-4 ">
                  {pro.labs.map((t) => (
                    <li key={t} className="px-2 py-1 text-xs text-black-600">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Transforming Education & Workplaces */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Transforming Education & Workplaces
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "School Transformation",
                what_we_offer: [
                  "Curriculum redesign for creativity & life skills",
                  "Educator mindset and pedagogy transformation",
                  "Student-centric tech and assessment tools",
                  "Parent-teacher collaboration models",
                ],
                impact: [
                  "More engaged learners and higher student well-being",
                  "Teachers as facilitators of growth, not just content",
                  "Stronger community trust and school outcomes",
                ],
              },
              {
                title: "College Innovation",
                what_we_offer: [
                  "Curriculum and faculty realignment with industry 4.0",
                  "Career cell transformation and employer mapping",
                  "Accreditation and global standards consulting",
                  "Student success lifecycle models",
                ],

                impact: [
                  "Higher placement rates and employer satisfaction",
                  "Future-ready graduates with hybrid skill sets",
                  "Stronger institution branding and rankings",
                ],
              },
              {
                title: "Corporate Solutions",
                what_we_offer: [
                  "Full culture diagnostics and employee sentiment mapping",
                  "AI-powered people strategy tools",
                  "Workshops on empathy-based leadership",
                  "Tailored DEI & belonging blueprints",
                ],
                impact: [
                  "Increase in productivity by up to 40%",
                  "Reduced attrition and increased engagement",
                  "Future-proof leadership pipelines",
                ],
              },
              {
                title: "Student Success",
                what_we_offer: [
                  "AI-powered interest and aptitude discovery",
                  "Access to global mentors and industry insiders",
                  "Career simulation bootcamps",
                  "Mental health and resilience building",
                ],
                impact: [
                  "Deeper understanding of real-world career paths",
                  "2x increase in confidence and clarity",
                  "Reduced dropouts and mismatched career choices",
                ],
              },
              {
                title: "Career Transformation",
                what_we_offer: [
                  "Personalized career mapping",
                  "Skills and mindset re-engineering",
                  "Portfolio building beyond resumes",
                  "Direct access to career mentors",
                ],
                impact: [
                  "We guide people back to themselves - not just market trends",
                  "Clarity in career transitions",
                  "Authentic professional identity development",
                ],
              },
              {
                title: "Startup Growth",
                what_we_offer: [
                  "End-to-end startup blueprint creation",
                  "Business model refinement & investor readiness",
                  "Talent strategy and culture co-design",
                  "Go-to-market and scaling support",
                ],
                impact: [
                  "Faster time-to-market with fewer pivots",
                  "Increased funding success rates",
                  "Stronger founder resilience and leadership",
                ],
              },
            ].map((pro) => (
              <article
                key={pro.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-6"
              >
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {pro.title}
                </h3>
                <ul className="mt-4 ">
                  {pro.what_we_offer.map((t) => (
                    <li key={t} className="px-2 py-1 text-xs text-black-600">
                      {t}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-4 text-md font-semibold text-gray-900">
                  Impact:
                </h4>
                <ul className="mt-2 ">
                  {pro.impact.map((i) => (
                    <li key={i} className="px-2 py-1 text-xs text-black-600">
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
            <a
              href="/blog"
              className="text-sm font-medium text-orange-600 hover:text-orange-500"
            >
              See all
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "WebGL",
                title: "Interactive Brain Atlas",
                desc: "A 3D brain tool to explore with the regions labeled, Three.js powered.",
                tags: ["3D", "Neuroanatomy"],
              },
              {
                label: "UX Research",
                title: "Quiz-Driven Learning",
                desc: "Adaptive quizzes use spaced repetition to reinforce neuro concepts.",
                tags: ["Assessment", "Cognition"],
              },
              {
                label: "Workshops",
                title: "Hands-on Labs",
                desc: "Community sessions focused on exploratory learning and engagement.",
                tags: ["Community", "Education"],
              },
            ].map((proj) => (
              <article
                key={proj.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-6"
              >
                <div className="text-sm text-orange-600 font-semibold">
                  {proj.label}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {proj.title}
                </h3>
                <p className="mt-2 text-gray-700">{proj.desc}</p>
                <div className="mt-4 flex gap-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Publications / Highlights */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-14 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Highlights</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2">
              <span className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-700">
                Preprint
              </span>
              <span className="text-gray-800">
                Interactive brain atlas prototype using WebGL and Three.js.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="px-2 py-0.5 text-xs rounded bg-orange-100 text-orange-700">
                Study
              </span>
              <span className="text-gray-800">
                Quiz-driven learning modules to reinforce neuroanatomy concepts.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-700">
                Program
              </span>
              <span className="text-gray-800">
                Community workshops and lab sessions focused on hands-on
                learning.
              </span>
            </li>
          </ul>
        </div>

        {/* Team */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Research Lead", role: "Neuroscience & EdTech" },
              { name: "UX Specialist", role: "Learning Design" },
              { name: "Engineer", role: "WebGL & Systems" },
            ].map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                  {m.name.split(" ")[0][0]}
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-gray-900">{m.name}</div>
                  <div className="text-sm text-gray-700">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white p-8 shadow-sm text-center">
          <h3 className="text-xl font-bold text-gray-900">
            Interested in collaborating or learning more?
          </h3>
          <p className="mt-2 text-gray-700">
            We welcome partnerships for research, tools, and community learning.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-5 py-2.5 rounded-lg bg-orange-500 text-white hover:bg-orange-400 transition font-medium shadow-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
