import { Metadata } from "next";
import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title:
    "Human Intelligence & Neuroscience Blog | Brain Performance Insights – Aaruchudar",
  description:
    "Read Aaruchudar’s blog on Human Intelligence, neuroscience, meditation, Neuro Band, Neuro Lens, and cognitive performance improvement.",
  keywords: [
    //Primary
    "Human Intelligence Blog",

    //Secondary
    "Neuroscience Blog",
    "Brain Performance Insights",
    "Cognitive Science Articles",
    "Neuro Band Research",
    "Neuro Lens Technology",
    "Aaruchudar Blog",
  ],
};

export default function Page() {
'use client';
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import "./BlogPage.css";
import React from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Innovation", "Psychology", "Intellectual Growth", "Technology", "Research"];

  const blogPosts = [
    {
      id: 1,
      title: "INITIATIVE WITH PATRONAGE'S INTUITION",
      excerpt: "Exploring the intersection of psychology and technology in enhancing human potential and cognitive abilities.",
      author: "BEAUTY SABAT",
      role: "Content Creator",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tags: ["Psychology", "Innovation", "Human Intelligence"],
      featured: true,
    },
    {
      id: 2,
      title: "The Evolving Role of Human Intelligence in the Age of AI",
      excerpt: "How cognitive psychology principles are being applied in modern learning systems and educational technologies.",
      author: "SHELSIA SHARON",
      role: "Content Creator",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      tags: ["Cognitive Psychology", "Learning", "Education"],
      featured: false,
    },
    {
      id: 3,
      title: "AARUCHUDAR",
      excerpt: "Breaking silos: The power of combining multiple disciplines for breakthrough innovation and creative problem-solving.",
      author: "NIROSHINI",
      role: "Content Creator",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Intellectual Growth",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["Innovation", "Interdisciplinary", "Creative Thinking"],
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.5]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <>
      <h1 className="sr-only">
        Human Intelligence & Neuroscience Blog by Aaruchudar
      </h1>

      <section className="sr-only">
        <p>
          Aaruchudar’s blog covers Human Intelligence, neuroscience, meditation,
          cognitive performance, Neuro Band, and Neuro Lens technologies. These
          articles explain how the brain learns, adapts, and improves focus,
          memory, emotional intelligence, and mental clarity through
          science-backed methods.
        </p>
      </section>

      <BlogPage />
    </>
  );
}
