'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import "./BlogPage.css";

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);

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
      category: "Innovation",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tags: ["Psychology", "Innovation", "Human Intelligence"],
      content: "Full content of the first blog post goes here...",
    },
    {
      id: 2,
      title: "The Evolving Role of Human Intelligence in the Age of AI",
      excerpt:
        "How cognitive psychology principles are being applied in modern learning systems and educational technologies.",
      author: "SHELSIA SHARON",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      tags: ["Cognitive Psychology", "Learning", "Education"],
      content: "Full content of the second blog post goes here...",
    },
    {
      id: 3,
      title: "AARUCHUDAR CONSULTANCY",
      excerpt:
        "Breaking silos: The power of combining multiple disciplines for breakthrough innovation and creative problem-solving.",
      author: "NIROSHINI",
      category: "Intellectual Growth",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      tags: ["Innovation", "Interdisciplinary", "Creative Thinking"],
      content: "Full content of the third blog post goes here...",
    },
    {
      id: 4,
      title: "The Cognitive Cost of Constant Screen Exposure",
      excerpt:
        "Exploring how excessive screen time affects focus, memory, and deep thinking, and how to rebuild cognitive health.",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      tags: ["Digital Dementia", "Neuroscience", "Focus", "Memory"],
      content: `Today, most of us spend hours every day on phones, laptops, and tablets. We use them for work, study, entertainment, and even relaxation. Over time, this constant screen exposure begins to affect how our brain works.

Digital dementia does not mean an actual medical disease. It is a term used to describe how excessive digital use can reduce our ability to focus, remember things, and think deeply. Many people now feel mentally tired, distracted, and forgetful even at a young age.

We are not becoming less intelligent, but our brains are getting used to fast and easy information instead of slow and thoughtful thinking. This change is happening quietly, and most of us do not notice it until concentration becomes difficult.

How Screens Reshape the Brain

The brain works based on what we repeatedly do. When we constantly scroll, tap, and switch between apps, the brain learns to work in short bursts of attention.

Instead of focusing on one task for a long time, the brain becomes trained to jump quickly from one thing to another. Notifications, videos, and social media feed this pattern.

Over time, this reshapes how the brain processes information. Deep thinking becomes harder, and quick reactions become easier. This is not because the brain is weak, but because it is adapting to the environment we give it.

The brain always adjusts to habits. Screen habits shape brain habits.

Hidden Effects on Focus and Memory

Many people experience these problems but ignore them:

- Difficulty concentrating on one task
- Forgetting small things easily
- Feeling restless without the phone
- Reading without understanding
- Constant urge to check messages

Memory becomes weaker not because the brain is damaged, but because we stop using it properly. When everything is stored in phones, we do not practice remembering. When attention is always divided, learning becomes shallow.

Focus and memory work like muscles. If they are not used, they slowly weaken.

Why the Brain Craves Digital Stimulation

Digital content gives the brain quick pleasure. Likes, messages, videos, and updates create excitement and reward feelings. The brain starts wanting more of this stimulation again and again.

This does not mean we are addicted in a serious medical way, but the brain becomes dependent on constant input. Silence and stillness feel uncomfortable. Boredom feels difficult.

The brain begins to prefer easy stimulation instead of effortful thinking. This makes studying, reading, or deep work feel tiring.

The craving is not a personal weakness. It is how the brain reacts to repeated digital rewards.

Neuroscience Insights on Recovery

Neuroscience shows that the brain is flexible. It can change when habits change. This ability is called neuroplasticity.

If the brain can learn distraction, it can also relearn focus. If it can adapt to screens, it can adapt back to calm and clarity.

Recovery does not need extreme actions like quitting technology completely. It needs balance and awareness.

Small changes in daily routine can slowly restore healthy brain function:

- Limiting unnecessary screen time
- Creating screen-free moments
- Practicing single-task focus
- Giving the brain rest from stimulation

The brain improves when it is given the right environment.

Neuroplasticity and Cognitive Rebuilding

Neuroplasticity means the brain builds new connections when we practice new behaviors.

To rebuild focus and thinking:

- Read without checking the phone
- Sit quietly for a few minutes daily
- Do one task at a time
- Think before reacting
- Reflect on what you learn

These actions slowly train the brain to concentrate again. At first, it feels uncomfortable because the brain is used to stimulation. But with time, clarity returns.

This is not fast. It is gradual. But it works because the brain is designed to change.

Towards a Healthier Digital Life

Technology is not the enemy. The problem is unconscious use.

A healthier digital life means:

- Using technology with purpose
- Not letting it control attention
- Knowing when to stop
- Protecting time for thinking and rest

Human intelligence grows when we are aware of how our mind works. Screens should support learning, not replace thinking.

The goal is not to reject technology but to build a balanced relationship with it. When we combine neuroscience understanding with daily discipline, we can protect and improve our focus, memory, and clarity.

Digital tools should serve the human brain not shape it blindly.`
    },
    {
      id: 5,
      title: "The Science Behind Human Intelligence and Learning",
      excerpt:
        "Exploring how the brain grows and adapts through life, and how understanding neuroplasticity can transform learning.",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1558478551-1a378f63328e?w=800&h=600&fit=crop",
      tags: ["Neuroplasticity", "Learning", "Human Intelligence"],
      content: `Many people think that intelligence is something we are born with and that it cannot change much after childhood. But science shows us something different.

Our brain keeps changing throughout life. It changes when we learn something new, when we try to understand our mistakes, and when we practice new ways of thinking. This means intelligence is not fixed. It can grow.

So when we say “your brain is not finished yet,” it simply means that learning and development never really stop.

The Brain That Learns from Life

The brain does not learn only from textbooks or classrooms. It also learns from daily life.

- When we face problems, our brain looks for solutions.
- When we repeat a habit, the brain remembers that pattern.
- When we experience stress or joy, the brain stores those experiences too.

Life itself becomes a learning process for the brain. That is why two people can go through the same situation but think differently. Their brains have learned from different experiences. Human intelligence is shaped by what we go through and how we understand it.

The Secret Power of a Changing Brain

One important idea in neuroscience is that the brain can change its structure and connections. This is called neuroplasticity.

In simple words, whatever we practice often becomes stronger in the brain.

- If we practice focusing, the brain becomes better at focus.
- If we practice reacting quickly, the brain becomes faster at reacting.
- If we practice calm thinking, the brain becomes better at calm thinking.

So intelligence grows through repeated actions and thoughts. It is not something that suddenly appears. It develops slowly over time.

The Missing Piece in the Way We Learn

In traditional education, we are taught subjects like math, science, and history. But we are not taught how our own brain works.

- We learn what to study, but not how learning actually happens inside the brain.
- We learn answers, but not how attention, emotions, and habits affect thinking.

Because of this, learning often becomes about memorizing instead of understanding. This is the missing piece in education knowing the brain that is doing the learning. When we understand how the brain works, learning becomes more meaningful.

The Moment Learning Becomes Alive

Learning changes when we start paying attention to how our brain learns.
Instead of only reading and memorizing, we begin to notice:

- How we think
- Why we get distracted
- What makes us confused
- What helps us understand

At this point, learning feels more real. It is not just about finishing a syllabus. It is about improving the way we think. This is when human intelligence starts growing in a deeper way.

If the Brain Can Change, So Can You

Since the brain can change, it also means our thinking and behavior can change. We are not stuck with the same habits forever.

- We can learn to focus better.
- We can learn to respond instead of react.
- We can learn to think more clearly.

Change does not happen in one day. It happens through small daily efforts. Each time we choose to think differently, the brain slowly adapts to that new way. So personal growth is not just motivation. It is connected to how the brain works.

A New Way of Learning for a New World

Today’s world is changing very fast. Technology is growing and information is everywhere. But human thinking still needs to grow in the right direction.

We need a way of learning that helps people:

- Understand their own mind
- Build focus and clarity
- Manage emotions
- Make better decisions

This is where neuroscience and neuroplasticity become important. They help us understand how human intelligence can be trained, not just filled with information.

Learning in the future is not only about knowledge. It is about developing the brain and the way we think.`
    }
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

  return (
    <div className="blog-container pt-16 md:pt-24 pb-20">
      {selectedBlog ? (
        <div className="full-blog">
          <button onClick={() => setSelectedBlog(null)} className="back-button">
            Back to Blogs
          </button>
          <h1 className="blog-title">{selectedBlog.title}</h1>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="blog-image"
          />
          <p className="blog-content">{selectedBlog.content}</p>
        </div>
      ) : (
        <>
          {/* Search and Categories */}
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search blog posts"
            />
          </div>
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

          {/* Blog Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="blog-card"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedBlog(post)}
              >
                <div className="blog-image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                  />
                </div>
                <div className="blog-info">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}



