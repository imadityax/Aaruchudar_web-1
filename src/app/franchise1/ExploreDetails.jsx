import React, { useState } from 'react';
import {
  Brain, Users, Globe, X, CheckCircle,
  BookOpen, Users as UsersIcon, Target, Map, Building,
  BarChart, GraduationCap, Globe as GlobeIcon,
  FileText, DollarSign, Lightbulb, Lock, Star,
  Calendar, Download, ArrowRight,
  Check, TrendingUp, PieChart, Clock, ShieldCheck,
  Network, Cpu, Zap, Scale,
  Crown, Key, LineChart, Coins,
  Sparkles, Award, CalendarDays, BadgeCheck
} from "lucide-react";

import "./ExploreDetails.css"



const ExploreDetailsModal = ({ activeModal, setActiveModal, setFormData }) => {
  const franchiseOptions = [
    {
      id: 'own-a-lab',
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 'strategic-investor',
      icon: Users,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 'global-expansion',
      icon: Globe,
      color: "from-indigo-500 to-purple-600",
    }
  ];

  const modalContents = {
    'own-a-lab': {
      title: "Own a Cognitive Training Lab",
      subtitle: "Launch and operate a premier neuroscience-based cognitive training center",
      description: "A comprehensive franchise opportunity for establishing and running a successful cognitive training center with complete systems and support.",
      stats: [
        { label: "Avg Annual Revenue", value: "₹85L - ₹1.8Cr", icon: TrendingUp },
        { label: "Operating Margin", value: "35-45%", icon: PieChart },
        { label: "Training Duration", value: "6-8 weeks", icon: Calendar },
        { label: "Support Score", value: "9.8/10", icon: Star }
      ],
      sections: [
        {
          title: "Who This Is For",
          icon: Users,
          color: "text-cyan-600",
          bg: "bg-cyan-50",
          items: [
            "Educators & trainers seeking purpose-led learning ventures",
            "Entrepreneurs interested in cognitive wellness space",
            "Educational institutions expanding their offerings",
            "Professionals transitioning to meaningful education work",
            "No neuroscience background required"
          ]
        },
        {
          title: "Core Deliverables",
          icon: BookOpen,
          color: "text-blue-600",
          bg: "bg-blue-50",
          items: [
            "Eight structured neuroscience-based human intelligence labs",
            "Focus on cognitive abilities, clarity, focus, values, and decision-making",
            "Designed for students, professionals, teams, and individuals",
            "Modular curriculum adaptable to different audience needs"
          ]
        },
        {
          title: "Training & Certification",
          icon: GraduationCap,
          color: "text-indigo-600",
          bg: "bg-indigo-50",
          items: [
            "6-week intensive training program",
            "Complete facilitator certification",
            "Ongoing mentor guidance and support",
            "Quality assurance systems for consistent delivery"
          ]
        },
        {
          title: "Operational Excellence",
          icon: Building,
          color: "text-purple-600",
          bg: "bg-purple-50",
          items: [
            "Complete center setup guidance",
            "Detailed facilitation playbooks",
            "Operational manuals and systems",
            "Marketing enablement materials and strategies"
          ]
        },
        {
          title: "Business Model",
          icon: Target,
          color: "text-cyan-700",
          bg: "bg-cyan-50",
          items: [
            "Session-based programs with flexible formats",
            "Individual, group, and institutional delivery options",
            "Low-infrastructure, scalable business model",
            "Both in-person and virtual delivery capabilities"
          ]
        },
        {
          title: "Revenue Streams",
          icon: Coins,
          color: "text-green-600",
          bg: "bg-green-50",
          items: [
            "Structured program fees (₹25,000 - ₹1,50,000 per participant)",
            "Workshop and intensive sessions",
            "Institutional and corporate engagements",
            "Corporate learning development sessions",
            "Note: Outcomes depend on execution and market conditions"
          ]
        }
      ],
      timeline: [
        { month: 1, title: "Onboarding & Training", desc: "Complete certification and systems training" },
        { month: 2, title: "Center Setup", desc: "Location preparation and branding" },
        { month: 3, title: "Launch Operations", desc: "First cohort launch and marketing" },
        { month: 6, title: "Growth Phase", desc: "Expand offerings and partnerships" },
        { month: 12, title: "Maturity", desc: "Sustainable operations with multiple revenue streams" }
      ]
    },
    'strategic-investor': {
      title: "Strategic Integration Partnership",
      subtitle: "Embed our cognitive frameworks into your existing platform",
      description: "A revenue-sharing partnership that integrates neuroscience-based human intelligence labs into your ecosystem with comprehensive support.",
      stats: [
        { label: "Integration Time", value: "4-6 weeks", icon: Clock },
        { label: "Revenue Share", value: "30-50%", icon: PieChart },
        { label: "Platform Support", value: "24/7", icon: ShieldCheck },
        { label: "Client Satisfaction", value: "94%", icon: Star }
      ],
      sections: [
        {
          title: "Target Partners",
          icon: Network,
          color: "text-blue-600",
          bg: "bg-blue-50",
          items: [
            "EdTech platforms expanding their course offerings",
            "Educational institutions enhancing their curriculum",
            "Training organizations seeking cognitive programs",
            "Corporate L&D departments for employee development",
            "Development ecosystems and learning communities"
          ]
        },
        {
          title: "Integration Package",
          icon: Cpu,
          color: "text-indigo-600",
          bg: "bg-indigo-50",
          items: [
            "API integration with documentation",
            "White-label platform access",
            "Custom integration support",
            "Technical partnership team"
          ]
        },
        {
          title: "Partner Enablement",
          icon: Zap,
          color: "text-purple-600",
          bg: "bg-purple-50",
          items: [
            "Complete partner onboarding process",
            "Facilitation frameworks and guides",
            "Co-branded assets and materials",
            "Technical and operational integration support"
          ]
        },
        {
          title: "Growth Support",
          icon: TrendingUp,
          color: "text-cyan-600",
          bg: "bg-cyan-50",
          items: [
            "Quarterly strategy sessions",
            "Market expansion guidance",
            "Performance analytics dashboard",
            "Regular content updates"
          ]
        },
        {
          title: "Operational Framework",
          icon: Scale,
          color: "text-blue-700",
          bg: "bg-blue-50",
          items: [
            "Embedded into existing programs and platforms",
            "Available across academic and professional audiences",
            "Works with cohort-based learning models",
            "Integrates with various learning tracks and systems"
          ]
        },
        {
          title: "Financial Model",
          icon: DollarSign,
          color: "text-green-600",
          bg: "bg-green-50",
          items: [
            "Revenue-share model based on delivered programs",
            "Transparent reporting and accounting",
            "Flexible partnership terms",
            "Minimum guarantee options available",
            "Note: Terms defined case-by-case with each partner"
          ]
        }
      ],
      timeline: [
        { week: 1, title: "Discovery & Assessment", desc: "Platform evaluation and alignment" },
        { week: 2, title: "Integration Planning", desc: "Technical roadmap development" },
        { week: 4, title: "Implementation", desc: "API integration and testing" },
        { week: 6, title: "Launch", desc: "Go-live with first cohort" },
        { week: 12, title: "Optimization", desc: "Performance review and scaling" }
      ]
    },
    'global-expansion': {
      title: "Master Licensing for Global Markets",
      subtitle: "Lead regional expansion with exclusive territorial rights",
      description: "Establish and scale our neuroscience-based human intelligence labs in new regions through a master licensing partnership.",
      stats: [
        { label: "Market Exclusivity", value: "5-10 years", icon: Lock },
        { label: "Territory Support", value: "Dedicated Team", icon: UsersIcon },
        { label: "Launch Timeline", value: "3-6 months", icon: CalendarDays },
        { label: "Success Rate", value: "91%", icon: Award }
      ],
      sections: [
        {
          title: "Ideal Partners",
          icon: Crown,
          color: "text-indigo-600",
          bg: "bg-indigo-50",
          items: [
            "International educators with local market access",
            "Training organizations expanding regionally",
            "Educational institutions with regional networks",
            "Strategic partners with strong market presence",
            "Entrepreneurs with multi-center capabilities"
          ]
        },
        {
          title: "Licensing Package",
          icon: Key,
          color: "text-purple-600",
          bg: "bg-purple-50",
          items: [
            "Exclusive territorial rights",
            "Master franchisee certification",
            "Sub-franchising rights",
            "Regional adaptation guidelines"
          ]
        },
        {
          title: "Training & Certification",
          icon: BadgeCheck,
          color: "text-cyan-600",
          bg: "bg-cyan-50",
          items: [
            "Advanced partner training programs",
            "Trainer certification systems",
            "Leadership enablement for territory management",
            "Quality assurance training"
          ]
        },
        {
          title: "Market Launch Support",
          icon: Map,
          color: "text-blue-600",
          bg: "bg-blue-50",
          items: [
            "Market entry guidance and strategies",
            "Complete launch frameworks and playbooks",
            "Territory-level operating systems",
            "Localization support and guidelines"
          ]
        },
        {
          title: "Governance Model",
          icon: GlobeIcon,
          color: "text-indigo-700",
          bg: "bg-indigo-50",
          items: [
            "Exclusive territorial rights for operations",
            "Multi-center and multi-partner scalability",
            "Central governance with local execution autonomy",
            "Regional adaptation with core standard maintenance"
          ]
        },
        {
          title: "Investment Structure",
          icon: LineChart,
          color: "text-green-600",
          bg: "bg-green-50",
          items: [
            "License fee + ongoing royalties",
            "Territory-level revenue sharing",
            "Multi-tiered support structures",
            "Performance-based incentives",
            "Note: Terms are structured per region and market potential"
          ]
        }
      ],
      timeline: [
        { month: 1, title: "Market Assessment", desc: "Territory analysis and planning" },
        { month: 2, title: "Agreement Finalization", desc: "Legal and commercial terms" },
        { month: 4, title: "Team Training", desc: "Master trainer certification" },
        { month: 6, title: "Market Launch", desc: "First center establishment" },
        { month: 12, title: "Scale Operations", desc: "Multiple centers and partnerships" }
      ]
    }
  };

  const renderModal = () => {
    if (!activeModal) return null;
    const content = modalContents[activeModal];
    const option = franchiseOptions.find(f => f.id === activeModal);
    
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative w-full max-w-7xl bg-white rounded-2xl shadow-2xl my-8 modal-scroll max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-100 p-8">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${option?.color}`}>
                    {React.createElement(option?.icon || X, { className: "h-8 w-8 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{content.title}</h2>
                    <p className="text-lg text-gray-600">{content.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700 max-w-3xl">{content.description}</p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-3 hover:bg-gray-100 rounded-xl transition"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white rounded-lg">
                      <stat.icon className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Sections Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {content.sections.map((section, index) => (
                <div 
                  key={index} 
                  className={`${section.bg} border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${section.bg} border border-gray-200`}>
                      <section.icon className={`h-7 w-7 ${section.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="p-1">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Timeline */}
            {content.timeline && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h3>
                <div className="relative">
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 -translate-y-1/2"></div>
                  <div className="relative flex justify-between">
                    {content.timeline.map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-white border-4 border-cyan-500 rounded-full flex items-center justify-center mb-4 relative z-10">
                          <div className="text-sm font-bold text-cyan-600">
                            {step.week ? `${step.week}W` : `${step.month}M`}
                          </div>
                        </div>
                        <div className="text-center max-w-[200px]">
                          <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a personalized consultation with our partnership team to explore this opportunity in detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, interest: content.title }));
                    setActiveModal(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule Consultation
                </button>
                <button
                  onClick={() => window.open('/franchise-brochure.pdf', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl border border-cyan-400/30 hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Download className="h-5 w-5" />
                  Download Detailed PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return renderModal();
};


export default ExploreDetailsModal;
