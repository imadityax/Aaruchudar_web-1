'use client';

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import "./BlogPage.css";
import React from "react";

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Innovation",
    "Psychology",
    "Intellectual Growth",
    "Technology",
    "Research",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "INITIATIVE WITH PATRONAGE'S INTUITION",
      excerpt:
        "Exploring the intersection of psychology and technology in enhancing human potential and cognitive abilities.",
      author: "BEAUTY SABAT",
      role: "Content Creator",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Innovation",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tags: ["Psychology", "Innovation", "Human Intelligence"],
      featured: true,
    },
    {
      id: 2,
      title: "The Evolving Role of Human Intelligence in the Age of AI",
      excerpt:
        "How cognitive psychology principles are being applied in modern learning systems and educational technologies.",
      author: "SHELSIA SHARON",
      role: "Content Creator",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      tags: ["Cognitive Psychology", "Learning", "Education"],
      featured: false,
    },
    {
      id: 3,
      title: "AARUCHUDAR CONSULTANCY",
      excerpt:
        "Breaking silos: The power of combining multiple disciplines for breakthrough innovation and creative problem-solving.",
      author: "NIROSHINI",
      role: "Content Creator",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Intellectual Growth",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["Innovation", "Interdisciplinary", "Creative Thinking"],
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
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
    <div
      className="blog-container pt-16 md:pt-24 pb-20"
      role="main"
      aria-label="Blog content"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section px-6">
        <div className="hero-bg" />
        <div className="hero-content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-indigo-300 font-bold border border-white/20"
            >
              ✨ Insights & Innovation
            </motion.span>

            <motion.h1
              className="hero-title"
              style={{ y: titleY, opacity: titleOpacity }}
            >
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Aaruchudar
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto"
              style={{ y: subtitleY }}
            >
              Human Intelligence Is Not A Fixed Trait, But A Dynamic Potential
            </motion.p>

            {/* Search */}
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Search blog posts"
              />
              <Search className="search-icon" />
            </div>

            {/* Categories */}
            <div className="category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-pill ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section px-6">
          <div className="container">
            <h2 className="section-title">Featured Article</h2>
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="featured-card"
            >
              <div className="featured-image">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  loading="lazy"
                />
                <span className="featured-badge">⭐ Featured</span>
              </div>
              <div className="featured-content">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge">{featuredPost.category}</span>
                  <span className="text-white/60 text-sm">
                    {featuredPost.readTime}
                  </span>
                </div>
                <h3 className="featured-title">{featuredPost.title}</h3>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-footer">
                  <div className="author">
                    <div className="avatar">
                      {featuredPost.author[0]}
                    </div>
                    <div>
                      <p className="author-name">{featuredPost.author}</p>
                      <p className="author-role">{featuredPost.role}</p>
                    </div>
                  </div>
                  <button className="btn-primary">
                    Read More{" "}
                    <ArrowRight className="w-5 h-5 text-yellow-400" />
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="section px-6">
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>
          <div className="posts-grid">
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="post-card"
              >
                <div className="post-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="post-badge">{post.category}</span>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="post-footer">
                    <div className="author-small">
                      <div className="avatar-small">
                        {post.author[0]}
                      </div>
                      <span>{post.author}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



