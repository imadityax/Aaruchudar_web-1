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
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function AaruchudarFranchise() {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Own a Lab",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      icon: Brain,
      iconColor: "text-cyan-600",
      title: "OWN A LAB",
      subtitle: "Launch a Cognitive Training center",
      description:
        "Build your own centre using our structured neuroscience-based lab systems and full operational support.",
      options: [
        "Training & Certification",
        "Brand & Marketing Support",
        "Operational Playbooks",
        "Ongoing Framework Updates",
      ],
      color: "from-cyan-500 to-blue-600",
      gradientBg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      borderColor: "border-cyan-100",
    },
    {
      icon: Users,
      iconColor: "text-blue-600",
      title: "BECOME AN INVESTOR",
      subtitle: "Integrate Aaruchudar Into Your Ecosystem",
      description:
        "Embed our cognitive frameworks into your platform through a revenue-sharing partnership.",
      options: [
        "Partner Training",
        "Co-Branded Assets",
        "Integration Guidelines",
        "Continuous Updates",
      ],
      color: "from-blue-500 to-indigo-600",
      gradientBg: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
    },
    {
      icon: Globe,
      iconColor: "text-indigo-600",
      title: "GLOBAL EXPANSION",
      subtitle: "Master Licensing for New Territories",
      description:
        "Lead expansion into new regions with exclusive territorial rights.",
      options: [
        "Advanced Certification",
        "Territory Launch Support",
        "Scalable Operating Systems",
        "Priority IP Access",
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
                  AARUCHUDAR
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
              <Shield className="h-4 w-4 text-cyan-300" />
              <span className="text-sm text-cyan-100 font-medium">
                TRUSTED FRANCHISE NETWORK
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">Build a Legacy </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                That Thinks Ahead
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Partner with India’s leading cognitive wellness franchise. Create
              measurable human impact while scaling a high-return, purpose-led
              business powered by applied neuroscience..
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
                <span>Watch Success Stories</span>
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Franchises", value: "150", suffix: "+" },
                { label: "Cities", value: "45", suffix: "+" },
                { label: "Success Rate", value: "96", suffix: "%" },
                { label: "Avg ROI", value: "3.2", suffix: " Years" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                    <span className="text-cyan-300">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
              Human Intelligence is the integrated capacity to think clearly,
              feel consciously, understand one’s own thinking (metacognition),
              decide wisely, and act purposefully.
              <br />
              <br />
              Unlike traditional IQ-only models, Aaruchudar’s framework develops
              cognitive, emotional, social, and metacognitive intelligence —
              enabling individuals to perform better in learning, leadership,
              relationships, and life decisions.
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
              Each Aaruchudar center delivers structured, neuroscience-backed
              labs using a balanced mix of mental, emotional, physical,
              reflective, and interactive activities.
              <br />
              <br />
              These labs are designed to develop cognitive intelligence,
              emotional intelligence, and metacognitive awareness the ability to
              observe, regulate, and improve one’s own thinking and behavior.
            </p>
          </div>

          {/* Labs Grid */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Human Intelligence Labs & Games
          </h3>
          <br></br>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cognitive Intelligence */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <Brain className="h-10 w-10 text-cyan-600 mb-5" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Cognitive & Brain Games (Mental Intelligence)
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Purpose:</span> Focus, memory,
                  reasoning, problem-solving
                </li>
                <li>
                  <span className="font-semibold">Activities:</span> Pattern
                  recognition, logic puzzles, decoding games, working memory
                  drills, speed accuracy tasks
                </li>
                <li>
                  <span className="font-semibold">Brain Areas:</span> Prefrontal
                  cortex, hippocampus, parietal lobes
                </li>
                <li>
                  <span className="font-semibold">Impact:</span> Faster
                  thinking, improved performance, clarity under pressure
                </li>
              </ul>
            </div>

            {/* Emotional & Metacognitive */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <Heart className="h-10 w-10 text-blue-600 mb-5" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Mind, Emotional & Metacognitive Intelligence Labs
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Purpose: </span>Emotional
                  awareness, regulation, resilience, and self-monitoring of
                  thoughts
                </li>
                <li>
                  <span className="font-semibold">Activities: </span>Emotion
                  awareness, trigger mapping, stress regulation, perspective
                  shifting, metacognitive reflection, values-based games
                </li>
                <li>
                  <span className="font-semibold">Brain Systems: </span>Limbic
                  system, prefrontal emotional integration pathways
                </li>
                <li>
                  <span className="font-semibold">Impact: </span>Emotional
                  balance, reduced reactivity, improved self-control, stronger
                  interpersonal intelligence
                </li>
              </ul>
            </div>

            {/* Physical Cognitive */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <Activity className="h-10 w-10 text-indigo-600 mb-5" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Physical–Cognitive Intelligence Games
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Purpose: </span>Link movement
                  with attention and thinking
                </li>
                <li>
                  <span className="font-semibold">Activities: </span>
                  Coordination games, reaction-time challenges, balance + focus
                  drills, rhythm tasks, dual-task exercises
                </li>
                <li>
                  <span className="font-semibold">Impact: </span>Higher
                  engagement, improved alertness, better learning retention
                </li>
              </ul>
            </div>

            {/* Decision Intelligence */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <Compass className="h-10 w-10 text-purple-600 mb-5" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Decision & Clarity Intelligence Labs
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Purpose: </span>Structured
                  thinking and wise decision-making
                </li>
                <li>
                  <span className="font-semibold">Activities: </span>Decision
                  simulations, consequence mapping, bias identification, ethical
                  dilemmas, clarity frameworks
                </li>
                <li>
                  <span className="font-semibold">Brain Areas: </span>Executive
                  function and planning networks
                </li>
                <li>
                  <span className="font-semibold">Impact: </span>Better life and
                  career decisions, reduced mental overload, stronger
                  self-leadership
                </li>
              </ul>
            </div>

            {/* Social Intelligence */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <Users className="h-10 w-10 text-green-600 mb-5" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Social, Communication & Emotional Intelligence Activities
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Purpose: </span>Collaboration,
                  empathy, listening, and expression
                </li>
                <li>
                  <span className="font-semibold">Activities: </span>Group
                  intelligence games, listening accuracy challenges,
                  role-reversal labs, conflict-recovery simulations, team
                  problem-solving
                </li>
                <li>
                  <span className="font-semibold">Impact: </span>Leadership
                  presence, emotional maturity, improved teamwork, social
                  adaptability
                </li>
              </ul>
            </div>

            {/* Creativity */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <Sparkles className="h-10 w-10 text-pink-600 mb-5" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Creativity & Adaptive Intelligence Labs
              </h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Purpose: </span>Imagination,
                  innovation, flexible thinking
                </li>
                <li>
                  <span className="font-semibold">Activities: </span>
                  Object-combination games, creative scenarios, constraint-based
                  innovation, idea-stretching
                </li>
                <li>
                  <span className="font-semibold">Brain Activation: </span>
                  Creative networks, cross-hemispheric integration
                </li>
                <li>
                  <span className="font-semibold">Impact: </span>Original
                  thinking, innovation mindset, entrepreneurial intelligence
                </li>
              </ul>
            </div>
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
            This partnership model should be something that matches your vision
            and the things you want to achieve with your investments. Choose a
            partnership model that's right, for you and your investment goals.
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
                  onClick={() =>
                    router.push(`/franchise1/explore-details?type=${option.id}`)
                  }
                  className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 group"
                >
                  <span>Explore Details</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                  "The Brain-GPT workshop was really interesting. It helped us a lot. We did some activities that made us think. That was good for our problem-solving skills. The Brain-GPT workshop also helped us make decisions.We learned a lot from the Brain-GPT workshop. It was fun to do the hands-on activities. The Brain-GPT workshop was an experience.",
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
                <p className="text-gray-700 mb-6 italic">\"{t.testimonial}\"</p>
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
              {[
                {
                  label: "Initial Investment",
                  value: "₹25-50L",
                  detail: "Setup, tech, training & marketing",
                },
                {
                  label: "Monthly Operating",
                  value: "₹3-5L",
                  detail: "Staff, rent, utilities",
                },
                {
                  label: "Monthly Revenue",
                  value: "₹8-12L",
                  detail: "300-400 active clients",
                },
                {
                  label: "Payback Period",
                  value: "18-24 months",
                  detail: "Standard model",
                },
                {
                  label: "5-Year ROI",
                  value: "350-400%",
                  detail: "Conservative",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm  "
                >
                  <div className="flex justify-between items-start mb-2 ">
                    <h4 className="font-semibold text-gray-900">
                      {item.label}
                    </h4>
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 ">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-12 rounded-3xl border border-cyan-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Why Aaruchudar Wins
              </h3>
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
        </div>
      </div>

      {/* Compliance */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance &{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Trust
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Certified & backed by scientific research
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "🏛️",
                label: "FSSAI Compliant",
                desc: "Licensed wellness",
              },
              { icon: "🔬", label: "Science-Backed", desc: "Peer-reviewed" },
              { icon: "📜", label: "ISO Certified", desc: "Quality standards" },
              { icon: "🛡️", label: "Data Secure", desc: "GDPR protected" },
            ].map((b, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{b.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{b.label}</h4>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-105">
              Download Franchise Brochure
            </button>
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
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Franchise Success Stories
                  </h3>
                  <p className="text-gray-400">Video content placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
