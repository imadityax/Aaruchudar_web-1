"use client"; // ADDED THIS LINE - REQUIRED FOR REACT HOOKS

import React, { useState } from "react";
import {
  Brain,
  Users,
  Globe,
  ChevronRight,
  Play,
  Menu,
  X,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  Heart,
  Activity,
  Compass,
  Sparkles,
  Search,
  Handshake,
  GitBranch,
  FileText,
  GraduationCap,
  Rocket,
} from "lucide-react";
import ExploreDetailsModal from "./ExploreDetails";
import { useRouter } from "next/navigation";

export default function AaruchudarFranchise() {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Own a Lab",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLabIndices, setSelectedLabIndices] = useState([]);
  const toggleLabSelection = (idx) => {
    setSelectedLabIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert(
        "Thank you for your interest! Our Business team will contact you within 24 hours."
      );
      setFormData({ name: "", email: "", interest: "Own a Lab", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const franchiseOptions = [
    {
      id: "own-a-lab",
      icon: Brain,
      iconColor: "text-cyan-600",
      title: "OWN A COGNITIVE TRAINING LAB",
      subtitle: "Launch a Cognitive Training Center with full support",
      description:
        "A comprehensive franchise opportunity to establish and run a successful cognitive training center with complete systems and support.",
      options: [
        "₹85L - ₹1.8Cr Avg Annual Revenue",
        "35-45% Operating Margin",
        "6-8 weeks Training Duration",
        "9.8/10 Support Score",
      ],
      color: "from-cyan-500 to-blue-600",
      gradientBg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      borderColor: "border-cyan-100",
    },
    {
      id: "strategic-investor",
      icon: Users,
      iconColor: "text-blue-600",
      title: "BECOME AN INVESTOR",
      subtitle: "Integrate Aaruchudar through a revenue-sharing partnership",
      description:
        "Integrate neuroscience-based human intelligence labs into your ecosystem with comprehensive support.",
      options: [
        "4-6 weeks Integration Time",
        "30-50% Revenue Share",
        "24/7 Platform Support",
        "94% Client Satisfaction",
      ],
      color: "from-blue-500 to-indigo-600",
      gradientBg: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
    },
    {
      id: "global-expansion",
      icon: Globe,
      iconColor: "text-indigo-600",
      title: "GLOBAL EXPANSION",
      subtitle: "Lead new territories with exclusive master licensing",
      description:
        "Establish and scale our neuroscience-based human intelligence labs in new regions through a master licensing partnership.",
      options: [
        "5-10 years Market Exclusivity",
        "Dedicated Team Territory Support",
        "3-6 months Launch Timeline",
        "91% Success Rate",
      ],
      color: "from-indigo-500 to-purple-600",
      gradientBg: "bg-gradient-to-br from-indigo-50 to-purple-50",
      borderColor: "border-indigo-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/logo2.png"
                  alt="Aaruchudar logo"
                  className="h-full w-full object-contain p-1"
                />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-transparent">
                  AARUCHUDAR PRIVATE LIMITED

                </span>
                <span className="text-xs text-gray-500 block">
                  Franchise Network
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-centerjustify-between gap-3 space-x-10 ">
              <a
                href="#franchise"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Opportunities
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Benefits
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Contact
              </a>
              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </button>
              <button
                onClick={() => router.back()}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                Back
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%229C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">Build a Legacy</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                That Thinks Ahead
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Partner with India’s leading cognitive wellness franchise. Create measurable human impact while scaling a high-return, purpose-led business powered by applied neuroscience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const section = document.getElementById("franchise");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
              >
                <span>Start Your Journey</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setShowVideo(true)}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3 group"
              >
                <Play className="h-5 w-5" />
                <span>Watch video</span>
              </button>
            </div>

            {/* Planned Ahead heading */}
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-semibold text-white/90">Planned Ahead</h2>
              <p className="text-sm text-white/60 mt-1">2026 Goals</p>
            </div>

            {/* 2026 goals chips (replaces stats) */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Franchises", value: "150+" },
                { label: "Cities", value: "45+" },
                { label: "Success Rate", value: "96%", note: "(in market validation)" },
                { label: "Avg ROI", value: "3.2 Years" },
              ].map((goal, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/20"
                >
                  <div className="text-3xl font-bold text-white">
                    {goal.value}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{goal.label}</div>
                  {goal.note && (
                    <div className="text-xs text-white/60 mt-0.5">{goal.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Validation & Scaling Notice - Highlighted */}
      <section className="px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-cyan-50 to-blue-50">
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 20% 20%, #06b6d4 2px, transparent 2px), radial-gradient(circle at 80% 60%, #3b82f6 2px, transparent 2px)", backgroundSize: "24px 24px"}} />
            <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-xs font-semibold text-cyan-700">Important Update</span>
              </div>
              <div className="text-gray-800">
                <p className="text-base md:text-lg font-semibold">
                  We are currently validating our model offline to build a strong, repeatable, and value-driven system. Once fully proven, we will scale responsibly.
                </p>
                <p className="text-sm md:text-base text-gray-700 mt-1">
                  For this reason, we are hiring franchise partners to learn with us at free of cost during the validation phase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Human Intelligence at the{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Core
              </span>{" "}
              of Aaruchudar
            </h2>
          </div>

          {/* What is Human Intelligence */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 md:p-14 shadow-sm mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What We Mean by Human Intelligence
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Human Intelligence is the ability to think clearly, regulate emotions, understand one’s own thinking (metacognition), make wise decisions, and act with purpose.
              <br />
              <br />
              Aaruchudar develops cognitive, emotional, social, and metacognitive intelligence beyond traditional IQ models.
            </p>
          </div>

          {/*How We Build Human Intelligence*/}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 md:p-14 shadow-sm mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How We Build Human Intelligence
            </h3>
            <h4 className="text-l font-bold text-gray-900 mb-4">
              Games, Labs & Cognitive Activities
            </h4>

            <p className="text-gray-700 leading-relaxed text-lg">
              Through structured, neuroscience-aligned labs and games combining mental, emotional, physical, and reflective activities.
              <br />
              <br />
              These labs develop cognitive intelligence, emotional intelligence, and metacognitive awareness
            </p>
          </div>

          {/* Labs Grid */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Core Human Intelligence Labs
          </h3>
          <br></br>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                color: "text-cyan-600",
                ring: "ring-cyan-300",
                border: "border-cyan-100",
                cardBg: "bg-cyan-50",
                title: "Cognitive & Brain Games – Focus, memory, reasoning",
                content: (
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      Focus, memory, reasoning, problem-solving
                    </li>
                  </ul>
                ),
              },
              {
                icon: Heart,
                color: "text-blue-600",
                ring: "ring-blue-300",
                border: "border-blue-100",
                cardBg: "bg-blue-50",
                title: "Emotional & Metacognitive Labs – Emotional regulation, self-awareness",
                content: (
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      Emotional regulation, resilience, self-monitoring of thoughts
                    </li>
                  </ul>
                ),
              },
              {
                icon: Activity,
                color: "text-indigo-600",
                ring: "ring-indigo-300",
                border: "border-indigo-100",
                cardBg: "bg-indigo-50",
                title: "Physical–Cognitive Games – Attention through movement",
                content: (
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      Link movement with attention and thinking
                    </li>
                  </ul>
                ),
              },
              {
                icon: Compass,
                color: "text-purple-600",
                ring: "ring-purple-300",
                border: "border-purple-100",
                cardBg: "bg-purple-50",
                title: "Decision & Clarity Labs – Structured thinking, wise decisions",
                content: (
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      Decision simulations, clarity frameworks, bias identification
                    </li>
                  </ul>
                ),
              },
              {
                icon: Users,
                color: "text-green-600",
                ring: "ring-green-300",
                border: "border-green-100",
                cardBg: "bg-green-50",
                title: "Social & Communication Labs – Teamwork, empathy, leadership",
                content: (
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      Group intelligence games, listening challenges, teamwork
                    </li>
                  </ul>
                ),
              },
              {
                icon: Sparkles,
                color: "text-pink-600",
                ring: "ring-pink-300",
                border: "border-pink-100",
                cardBg: "bg-pink-50",
                title: "Creativity & Adaptive Labs – Innovation and flexible thinking",
                content: (
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>
                      Creative scenarios, constraint-based innovation, idea-stretching
                    </li>
                  </ul>
                ),
              },
            ].map((lab, index) => {
              const Icon = lab.icon;
              const isActive = selectedLabIndices.includes(index);
              return (
                <button
                  key={index}
                  onClick={() => toggleLabSelection(index)}
                  className={`text-left ${lab.cardBg} p-8 rounded-2xl border border-gray-100 transition-all focus:outline-none hover:shadow-xl hover:ring-2 ${lab.ring} ${
                    isActive ? `ring-4 ${lab.ring} ${lab.border} shadow-xl` : ""
                  }`}
                >
                  <Icon className={`h-10 w-10 mb-5 ${lab.color}`} />
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {lab.title}
                  </h4>
                  {lab.content}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Franchise Opportunities */}
      <div
        id="franchise"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investment{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose a partnership model aligned with your vision and investment goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {franchiseOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className={`${option.gradientBg} border ${option.borderColor} rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${option.color} mb-6`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <h4 className="text-l font-bold text-gray-900 mb-3">
                  {option.subtitle}
                </h4>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <div className="space-y-4 mb-8">
                  {option.options.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-700 py-2"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* Explore Details Button */}
                <button
                  onClick={() => setActiveModal(option.id)}
                  className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex justify-center items-center gap-2"
                >
                  Explore Details
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features"
        className="bg-gradient-to-b from-white to-gray-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Aaruchudar?
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join a franchise network built for long term success with
              comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Structured Lab Model",
                desc: "Neuroscience-based, well-defined labs designed for consistent and practical delivery.",
                color: "text-cyan-600",
                bg: "bg-cyan-50",
              },
              {
                icon: Zap,
                title: "Complete Support System",
                desc: "Guidance across training, launch, operations, and ongoing program enablement.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: TrendingUp,
                title: "Revenue-Ready Design",
                desc: "Multiple engagement streams built for sustainable business growth.",
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
              {
                icon: Award,
                title: "Partner Advantage",
                desc: "Early partner access to a first-mover human intelligence model with future expansion potential.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`${feature.bg} p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all`}
                >
                  <div
                    className={`inline-flex p-3 rounded-lg ${feature.bg} mb-6`}
                  >
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Real impact from our neuroscience-based initiatives
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya S",
                role: "Online participant, Mumbai",
                testimonial:
                  "The SMART-IQ webinar really helped me see what I am good at and what I need to work on. I liked the exercises because they were fun and I could actually use them in my life. The SMART-IQ webinar was a help to me.",
                rating: 5,
              },
              {
                name: "Vikram R",
                role: "Offline participant, Bangalore",
                testimonial:
                  "The Brain-GPT workshop was really interesting. It helped us a lot. We did some activities that made us think. That was good for our problem-solving skills. The Brain-GPT workshop also helped us make decisions. We learned a lot from the Brain-GPT workshop. It was fun to do the hands-on activities. The Brain-GPT workshop was an experience.",
                rating: 5,
              },
              {
                name: "Meera K",
                role: "Offline participant, Tamilnadu",
                testimonial:
                  "The workshop sessions were really great. They were set up in a way that made sense. I learned a lot of useful things. I found the workshop sessions to be fun too. I could use what I learned from the workshop sessions in my life and when I am studying. The workshop sessions were very helpful to me.",
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{t.testimonial}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-cyan-600">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI & Investment */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment &{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Returns
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Transparent breakdown
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 ">
              <h3 className="text-xl font-bold text-gray-900">Investment Structure (Indicative)</h3>
              {/* Table style card */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
                {/* subtle pattern */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 20% 20%, #06b6d4 2px, transparent 2px), radial-gradient(circle at 80% 60%, #3b82f6 2px, transparent 2px)", backgroundSize: "24px 24px"}} />
                <div className="relative">
                  <div className="grid grid-cols-2 md:grid-cols-3 text-xs uppercase tracking-wide text-gray-500 border-b border-gray-100">
                    <div className="px-4 py-3 font-medium">Item</div>
                    <div className="px-4 py-3 font-medium">Amount</div>
                    <div className="hidden md:block px-4 py-3 font-medium">Notes</div>
                  </div>

                  {[
                    { label: "Total Investment Range", value: "Depends on the city or region,", note: "enquire to know more " },
                    { label: "Franchise Fee (one-time)", value: "₹4 – ₹6 Lakhs", note: "Enrollment" },
                    { label: "Interior & Space Setup", value: "₹10 – ₹12 Lakhs", note: "Fit-out" },
                    { label: "Furniture & Physical Infrastructure", value: "₹6 – ₹8 Lakhs", note: "Fixtures" },
                    { label: "Cognitive Tools & other Devices", value: "₹6 – ₹10 Lakhs", note: "Core devices" },
                    { label: "Initial Curriculum & Licensing", value: "Included", note: "IP access" },
                    { label: "Initial Marketing & Launch", value: "₹2 – ₹3 Lakhs", note: "Go-live" },
                    { label: "Working Capital (3–4 months)", value: "₹6 – ₹8 Lakhs", note: "Ops buffer" },
                  ].map((row, idx) => (
                    <div key={idx} className={`grid grid-cols-2 md:grid-cols-3 items-center ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b border-gray-100 last:border-b-0`}> 
                      <div className="px-4 py-4">
                        <div className="font-semibold text-gray-900">{row.label}</div>
                      </div>
                      <div className="px-4 py-4">
                        <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{row.value}</span>
                      </div>
                      <div className="hidden md:block px-4 py-4">
                        <span className="text-sm text-gray-600">{row.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg border border-cyan-100">
                <p className="text-sm text-gray-700">
                  Note: The cost of tools are separate and mandatory, unlike salons or food franchises. This is your core IP delivery layer.
                </p>
              </div>
            </div>

            {/* Right side remains unchanged */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-12 rounded-3xl border border-cyan-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Aaruchudar Wins</h3>
              <ul className="space-y-4">
                {[
                  "Recurring revenue model",
                  "High Retention",
                  "Scalable across locations",
                  "Proprietary technology",
                  "B2B partnerships potential",
                  "Rising demand for wellness",
                ].map((p, i) => (
                  <div key={i} className="flex gap-3 py-2">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{p}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline: Bring down under Investment & Returns */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Implementation Timeline
            </h3>
            <div className="relative">
              {/* line */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {(() => {
                  const steps = [
                    { week: 1, title: "Discovery & Assessment", desc: "Platform evaluation and alignment" },
                    { week: 2, title: "Integration Planning", desc: "Technical roadmap development" },
                    { week: 4, title: "Implementation", desc: "API integration and testing" },
                    { week: 6, title: "Launch", desc: "Go-live with first cohort" },
                    { week: 12, title: "Optimization", desc: "Performance review and scaling" },
                  ];
                  const colors = [
                    { dot: "from-cyan-500 to-blue-600", bg: "bg-cyan-100", header: "text-cyan-800", shadow: "shadow-cyan-200" },
                    { dot: "from-indigo-500 to-purple-600", bg: "bg-indigo-100", header: "text-indigo-800", shadow: "shadow-indigo-200" },
                    { dot: "from-green-500 to-emerald-600", bg: "bg-green-100", header: "text-green-800", shadow: "shadow-green-200" },
                    { dot: "from-orange-500 to-amber-600", bg: "bg-amber-100", header: "text-orange-800", shadow: "shadow-amber-200" },
                    { dot: "from-pink-500 to-rose-600", bg: "bg-pink-100", header: "text-pink-800", shadow: "shadow-pink-200" },
                  ];
                  return steps.map((step, idx) => {
                    const c = colors[idx % colors.length];
                    return (
                      <div key={idx} className="relative">
                        {/* dot */}
                        <div className="hidden md:flex justify-center">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${c.dot} border-2 border-white shadow-md`} />
                        </div>
                        <div className={`mt-4 ${c.bg} rounded-xl p-5 shadow-md hover:shadow-lg transition`}>
                          <div className={`text-sm font-semibold ${c.header}`}>Week {step.week}</div>
                          <div className="text-gray-900 font-bold mt-1">{step.title}</div>
                          <div className="text-gray-700 text-sm mt-1">{step.desc}</div>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          </div>

          {/* Roadmap: exact like provided image */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Aaruchudar Franchise Roadmap</h3>
            {(() => {
              const steps = [
                { num: 1, icon: Search, title: "Inquiry", desc: "Filing for contact and Franchise Brochure briefing" },
                { num: 2, icon: Handshake, title: "One on One Meet", desc: "No-Obligation session to explore vision and investment chances" },
                { num: 3, icon: GitBranch, title: "Select Partnership Model", desc: "Own Lab, Strategic Investor, or Global Expansion" },
                { num: 4, icon: FileText, title: "Agreement & Onboarding", desc: "Formalize partnership and kick off onboarding" },
                { num: 5, icon: GraduationCap, title: "Training Sessions", desc: "Facilitator training and operations setup" },
                { num: 6, icon: Rocket, title: "Public Launch", desc: "Open your center and begin delivering labs" },
              ];
              const palettes = [
                { badge: "bg-cyan-600", ring: "ring-cyan-200", text: "text-cyan-700", card: "bg-cyan-50" },
                { badge: "bg-indigo-600", ring: "ring-indigo-200", text: "text-indigo-700", card: "bg-indigo-50" },
                { badge: "bg-emerald-600", ring: "ring-emerald-200", text: "text-emerald-700", card: "bg-emerald-50" },
                { badge: "bg-amber-600", ring: "ring-amber-200", text: "text-amber-700", card: "bg-amber-50" },
                { badge: "bg-rose-600", ring: "ring-rose-200", text: "text-rose-700", card: "bg-rose-50" },
                { badge: "bg-purple-600", ring: "ring-purple-200", text: "text-purple-700", card: "bg-purple-50" },
              ];
              return (
                <div className="relative">
                  {/* connectors for large screens */}
                  <div className="hidden lg:block absolute top-[68px] left-0 right-0">
                    <div className="flex justify-between items-center px-4">
                      {steps.map((_, i) => (
                        <div key={i} className="flex-1 h-0.5 bg-gray-200 mx-2" />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {steps.map((step, idx) => {
                      const c = palettes[idx % palettes.length];
                      const Icon = step.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center text-center">
                          {/* number badge */}
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm">
                            <span className="font-bold text-gray-700">{step.num}</span>
                          </div>
                          {/* icon badge */}
                          <div className={`mt-4 w-20 h-20 rounded-full ${c.badge} shadow-lg ring-4 ${c.ring} flex items-center justify-center`}>
                            <Icon className="h-9 w-9 text-white" />
                          </div>
                          {/* card */}
                          <div className={`mt-6 ${c.card} border border-gray-100 rounded-xl p-4 w-full max-w-[240px] shadow-sm`}> 
                            <div className={`text-sm font-semibold ${c.text}`}>{step.title}</div>
                            <div className="text-gray-700 text-xs mt-2">{step.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Compliance */}
      

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the first wave of partners in India’s emerging cognitive
            wellness and human intelligence sector
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/assets/Franchise.pdf" download className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105">
              Download Franchise Brochure
            </a>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl border border-cyan-400/30 hover:shadow-2xl transition-all hover:scale-105">
              Schedule a Discovery Call
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Begin Your{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-gray-600 mb-8">
              Our franchise team will guide you through every step. Fill out the
              form, and we’ll contact you within 24 hours with a personalized
              proposal.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Clock,
                  title: "24-Hour Response",
                  desc: "Quick follow-up guaranteed",
                },
                {
                  icon: Users,
                  title: "Personal Consultation",
                  desc: "One-on-one discovery session",
                },
                {
                  icon: Shield,
                  title: "No Obligation",
                  desc: "Completely confidential process",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 py-2">
                  <div className="p-3 bg-cyan-50 rounded-lg">
                    <item.icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6 ">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 py-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 py-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 py-2">
                  Investment Interest
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                >
                  <option>Own a Lab</option>
                  <option>Become an Investor</option>
                  <option>Global Expansion</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 py-2">
                  Message / Inquiry
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your background and investment goals"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all ${
                  isSubmitting ? "opacity-75" : "hover:scale-105"
                }`}
              >
                {isSubmitting ? "Processing..." : "Submit Your Application"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo2.png"
                    alt="Aaruchudar logo"
                    className="h-full w-full object-contain p-1"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">
                    AARUCHUDAR
                  </span>
                  <span className="text-xs text-gray-400 block">
                    Cognitive Wellness Franchise
                  </span>
                </div>
              </div>
              <p className="text-gray-400">
                Transforming minds, building futures.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                © 2025 Aaruchudar Franchise Network. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Level Up Your Business. Empower Minds.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <video
                src="/images/VIDEO-2026-01-02-18-47-13.mp4"
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      )}

      <ExploreDetailsModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        setFormData={setFormData}
      />
    </div>
  );
}
