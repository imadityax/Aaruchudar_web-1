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
    },
    {
      id: 6,
      title: "Do You Really Know Yourself?",
      excerpt:
        "Exploring the importance of self-awareness in a fast-paced world and how it can transform our lives.",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      tags: ["Self-Awareness", "Personal Growth", "Mindfulness"],
      content: `We live in a world where we know many things.
We know what is happening outside us – news, trends, social media, other people’s lives.

But how much do we know about what is happening inside us?

Think about your day so far.

Did you notice how you reacted to people?
Did you notice what made you irritated, happy, or tired?

Most of us move from one moment to another without really noticing ourselves. We are busy, rushed, and distracted. In that rush, self-awareness slowly disappears.

Maybe that is why self-awareness is becoming one of the rarest skills today.

Pause for a second.
When was the last time you truly observed yourself?

Why We Keep Repeating the Same Patterns

Have you ever said this to yourself:

Why do I always do this?
Why does this keep happening again?

We repeat the same mistakes not because we want to, but because we do not see our patterns clearly.

We react the same way.
We think the same way.
We choose the same way.

Without self-awareness, life becomes a loop. Different situations, but the same responses.

If we do not understand how we think, how can we change it?
If we do not see our habits, how can we grow beyond them?

The first step is not changing.
The first step is noticing.

Living on Auto-Pilot Without Noticing It

Most of our day runs on auto-pilot.

We wake up.
Check our phone.
Rush to work or study.
React to people.
Sleep.
Repeat.

We think we are making choices, but often we are just following routines and emotions without awareness.

Auto-pilot feels safe. But it also keeps us unconscious.

Ask yourself honestly:

Did I choose my reactions today, or did they just happen?
Did I really listen to people, or was I already thinking of my reply?
Did I understand why I felt stressed, or did I just escape it?

Self-awareness begins when auto-pilot stops.

The Difference Between Knowing and Observing Yourself

Many people say, “I know myself.”
But knowing and observing are not the same.

Knowing is saying:

I am angry.
I am stressed.
I am like this.

Observing is asking:

Why am I angry right now?
What triggered this stress?
What thought created this feeling?

Observation creates space.
Instead of being inside emotions, we start watching them.

This is where real self-awareness begins  not with judgment, but with curiosity.

What am I thinking right now?
Why did I react this way?
What does this say about me?

These questions slowly wake us up.

What Your Daily Reactions Say About You

Your reactions are like mirrors.

How you respond to pressure.
How you speak when tired.
How you behave when things don’t go your way.

These moments show your inner patterns.

You don’t need a big life crisis to understand yourself. Your everyday life already shows you who you are.

Next time something upsets you, pause and ask:

What is really happening inside me right now?

Not to blame yourself.
But to understand yourself.

Awareness grows in small moments, not in big speeches.

When Self-Awareness Begins, Change Begins

Change does not start with motivation.
It starts with clarity.

When you see your thinking clearly, you automatically begin to act differently.
Not because someone forced you.
But because you understood yourself.

Self-awareness gives you a choice:

You can react or you can respond.
You can repeat or you can rethink.

This is a silent change.
Deep change.
Sustainable change.

The more you understand your inner world, the less controlled you are by it.

Learning to Pause and Understand Yourself

Self-awareness is not about becoming perfect. It is about becoming honest with yourself.

It begins with a pause.

A pause before reacting.
A pause before judging.
A pause before escaping feelings.

In that pause, understanding grows.

Try this today: At the end of the day, ask yourself:

What did I feel today?
What did I learn about myself?
What pattern did I notice?

This simple reflection can slowly transform the way you live and think.

In a world that is rushing forward, self-awareness brings you back to yourself.

And maybe that is what we need the most today – not more information, but more understanding of who we are.`
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
          <button
            onClick={() => setSelectedBlog(null)}
            className="back-button"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Back to Blogs
          </button>
          <h1 className="blog-title">{selectedBlog.title}</h1>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="blog-image"
            style={{ maxWidth: "50%", margin: "20px auto", display: "block" }}
          />
          {selectedBlog.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="blog-content" style={{ marginBottom: "20px" }}>
              {paragraph}
            </p>
          ))}
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



