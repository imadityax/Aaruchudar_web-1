'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import "./BlogPage.css";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  images?: string[];
  tags: string[];
  content: string;
};

type ContentBlock =
  | { type: "h2"; text: string; colorIndex: number }
  | { type: "p"; text: string }
  | { type: "img"; src: string; alt?: string };

function parseContentToBlocks(
  content: string,
  images: string[] = [],
  heroImage?: string
): ContentBlock[] {
  // De-duplicate images, and also avoid repeating the hero image inside the body.
  const uniqueImages = Array.from(
    new Set(
      images
        .filter(Boolean)
        .filter((src) => (heroImage ? src !== heroImage : true))
    )
  );

  const lines = String(content)
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => l.trim());

  const blocks: ContentBlock[] = [];
  let para: string[] = [];
  let imgAutoIndex = 0;
  let headingIndex = 0;

  const flushParagraph = () => {
    const text = para.join(" ").trim();
    if (text) blocks.push({ type: "p", text });
    para = [];
  };

  for (const line of lines) {
    if (!line) {
      flushParagraph();
      continue;
    }

    // Explicit image marker inside content: [image] or [image:2]
    const imgMatch = line.match(/^\[(?:image|img)(?::(\d+))?\]$/i);
    if (imgMatch) {
      flushParagraph();
      const explicit = imgMatch[1] ? Number(imgMatch[1]) - 1 : undefined;
      const src = uniqueImages[explicit ?? imgAutoIndex];
      if (src) {
        blocks.push({ type: "img", src });
        if (explicit === undefined) imgAutoIndex++;
      }
      continue;
    }

    // Treat normal title-case lines as section headings (not bullets)
    const isBullet = /^[-•]/.test(line);
    const isShortish = line.length <= 80;
    const looksLikeHeading = isShortish && !isBullet && !/[.!?]$/.test(line);

    if (looksLikeHeading) {
      flushParagraph();
      blocks.push({ type: "h2", text: line, colorIndex: headingIndex % 6 });
      headingIndex++;
      continue;
    }

    para.push(line);
  }

  flushParagraph();

  // If blog provides extra images but no markers, distribute them through the article.
  if (uniqueImages.length > 0 && !blocks.some((b) => b.type === "img")) {
    const paragraphCount = blocks.filter((b) => b.type === "p").length;

    if (paragraphCount > 0) {
      const step = Math.max(1, Math.floor(paragraphCount / (uniqueImages.length + 1)));

      let inserted = 0;
      let paragraphsSeen = 0;
      const out: ContentBlock[] = [];

      for (const b of blocks) {
        out.push(b);

        if (b.type === "p") {
          paragraphsSeen++;
          const shouldInsertHere =
            inserted < uniqueImages.length && paragraphsSeen % step === 0 && paragraphsSeen < paragraphCount;

          if (shouldInsertHere) {
            out.push({ type: "img", src: uniqueImages[inserted] });
            inserted++;
          }
        }
      }

      // If any images remain (very short content), append them separated.
      while (inserted < uniqueImages.length) {
        out.push({ type: "p", text: "" });
        out.push({ type: "img", src: uniqueImages[inserted] });
        inserted++;
      }

      return out;
    }
  }

  return blocks;
}

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const featuredFirstTitle =
    "Mapping the Invisible: Visualizing Human Intelligence as the New Standard for Student Performance";

  const categories = [
    "All",
    "Innovation",
    "Psychology",
    "Intellectual Growth",
    "Technology",
    "Research",
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 7,
      title: "The Power of Mental Discipline in a Distracted World",
      excerpt:
        "Mental discipline is quiet control—how to stay steady, focused, and intentional in a world designed to distract you.",
      category: "Psychology",
      image: "/images/neuro_tech_suite.jpg",
      images: [
        "/images/Blog_%20Mental%20discipline%20/IMG-20260224-WA0015.jpg",
        "/images/Blog_%20Mental%20discipline%20/IMG-20260224-WA0016.jpg",
        "/images/neurolens_and_band.jpg",
      ],
      tags: ["Mental Discipline", "Focus", "Habits", "Mindfulness"],
      content: `The Power of Mental Discipline in a Distracted World

What Is Mental Discipline, Really?

Mental discipline is not about forcing yourself to be strong all the time. It is about being able to notice what your mind is doing and choosing how to respond.

Most of us live on auto-pilot. We react without thinking. We get distracted easily. We say yes when we want to say no. We quit when things feel uncomfortable. Mental discipline is the ability to stay aware and steady even when the mind wants to escape.

It is quiet control. Not loud motivation.

Why Motivation Is Not Enough

Motivation comes and goes. One day we feel inspired. The next day we feel tired.

If our life depends only on motivation, our actions will always be unstable. This is why many people start things but don’t continue them – exercise, learning, habits, even relationships.

Mental discipline is what carries us when motivation is absent. It helps us act based on values, not moods.

It is the difference between:

“I feel like doing it” and “I will do it because it matters.”

How We Lose Control of Our Mind in Everyday Life

Look at a normal day.

We wake up and check our phone.
We scroll without noticing time.
We get irritated by small things.
We jump from one task to another.
We feel busy but not focused.

Slowly, the mind learns to avoid effort and chase comfort. Notifications, videos, and noise train the brain to seek quick pleasure instead of deep thinking.

This is not a personal failure. It is how the environment trains the brain. Without realizing it, we lose control over attention, emotions, and decisions.

The Cost of an Undisciplined Mind

An undisciplined mind feels tired even when the body is fine.

It struggles with focus.
It overthinks small problems.
It reacts emotionally instead of responding calmly.

Over time, this affects:

Work performance
Relationships
Self-confidence
Decision making

When the mind is not trained, life feels heavy. Not because life is difficult, but because the mind is scattered.

Training the Mind Like We Train the Body.

We train our body with small exercises every day. The mind needs the same approach.

Mental discipline is not built in one day. It is built through repetition.

Just like muscles grow through stress and rest, the brain grows through awareness and practice. This is where neuroscience and neuroplasticity matter the brain can change at any age.

Every time you pause before reacting
Every time you focus a little longer
Every time you finish what you started you are training your brain.

Small Daily Practices That Build Mental Discipline

Mental discipline does not need big methods

It starts with small actions:

Sit in silence for 2 minutes without checking your phone
Finish one task fully before moving to the next
Notice your emotions instead of running from them
Keep one promise to yourself each day
Reduce unnecessary digital noise
Reflect on your day for five minutes

These look simple. But they slowly rebuild control over attention and behavior.

Small practice. Strong mind.

A New Way to Live with Inner Control

Mental discipline is not about becoming strict. It is about becoming clear.

Clear about what you think.
Clear about what you feel.
Clear about what you choose.

In a world full of distraction, inner control becomes a rare strength. Not through pressure, but through awareness and training.

When the mind is disciplined,

Life feels lighter.
Decisions feel calmer.
Actions feel intentional.

This is not motivation. This is mental fitness.

And just like the body, the mind can be trained at any age, in everyday life, starting now.`,
    },
    {
      id: 4,
      title: "The Cognitive Cost of Constant Screen Exposure",
      excerpt:
        "Exploring how excessive screen time affects focus, memory, and deep thinking, and how to rebuild cognitive health.",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=700&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=700&fit=crop",
      ],
      tags: ["Digital Dementia", "Neuroscience", "Focus", "Memory"],
      content: `The Cognitive Cost of Constant Screen Exposure

Digital Dementia: What Is Happening to Our Minds?

Today, most of us spend hours every day on phones, laptops, and tablets. We use them for work, study, entertainment, and even relaxation. Over time, this constant screen exposure begins to affect how our brain works.

Digital dementia does not mean an actual medical disease. It is a term used to describe how excessive digital use can reduce our ability to focus, remember things, and think deeply. Many people now feel mentally tired, distracted, and forgetful even at a young age.

We are not becoming less intelligent, but our brains are getting used to fast and easy information instead of slow and thoughtful thinking. This change is happening quietly, and most of us do not notice it until concentration becomes difficult.

How Screens Reshape the Brain

The brain works based on what we repeatedly do. When we constantly scroll, tap, and switch between apps, the brain learns to work in short bursts of attention.

Instead of focusing on one task for a long time, the brain becomes trained to jump quickly from one thing to another. Notifications, videos, and social media feed this pattern.

Over time, this reshapes how the brain processes information. Deep thinking becomes harder, and quick reactions become easier. This is not because the brain is weak, but because it is adapting to the environment we give it.

The brain always adjusts to habits. Screen habits shape brain habits.

Hidden Effects on Focus and Memory

Many people experience these problems but ignore them:

Difficulty concentrating on one task
Forgetting small things easily
Feeling restless without the phone
Reading without understanding
Constant urge to check messages

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

Limiting unnecessary screen time
Creating screen-free moments
Practicing single-task focus
Giving the brain rest from stimulation

The brain improves when it is given the right environment.

Neuroplasticity and Cognitive Rebuilding

Neuroplasticity means the brain builds new connections when we practice new behaviors.

To rebuild focus and thinking:

Read without checking the phone
Sit quietly for a few minutes daily
Do one task at a time
Think before reacting
Reflect on what you learn

These actions slowly train the brain to concentrate again. At first, it feels uncomfortable because the brain is used to stimulation. But with time, clarity returns.

This is not fast. It is gradual. But it works because the brain is designed to change.

Towards a Healthier Digital Life

Technology is not the enemy. The problem is unconscious use.

A healthier digital life means:

Using technology with purpose
Not letting it control attention
Knowing when to stop
Protecting time for thinking and rest

Human intelligence grows when we are aware of how our mind works. Screens should support learning, not replace thinking.

The goal is not to reject technology but to build a balanced relationship with it. When we combine neuroscience understanding with daily discipline, we can protect and improve our focus, memory, and clarity.

Digital tools should serve the human brain not shape it blindly.`,
    },
    {
      id: 5,
      title: "The Science Behind Human Intelligence and Learning",
      excerpt:
        "Exploring how the brain grows and adapts through life, and how understanding neuroplasticity can transform learning.",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1558478551-1a378f63328e?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558478551-1a378f63328e?w=1200&h=700&fit=crop",
        "https://images.unsplash.com/photo-1526378722370-1e7d3d5fb3b1?w=1200&h=700&fit=crop",
      ],
      tags: ["Neuroplasticity", "Learning", "Human Intelligence"],
      content: `The Science Behind Human Intelligence and Learning

The Brain is Not Finished Yet

Many people think that intelligence is something we are born with and that it cannot change much after childhood. But science shows us something different.

Our brain keeps changing throughout life. It changes when we learn something new, when we try to understand our mistakes, and when we practice new ways of thinking. This means intelligence is not fixed. It can grow.

So when we say “your brain is not finished yet,” it simply means that learning and development never really stop.

The Brain That Learns from Life

The brain does not learn only from textbooks or classrooms. It also learns from daily life.

When we face problems, our brain looks for solutions.
When we repeat a habit, the brain remembers that pattern.
When we experience stress or joy, the brain stores those experiences too.

Life itself becomes a learning process for the brain. That is why two people can go through the same situation but think differently. Their brains have learned from different experiences. Human intelligence is shaped by what we go through and how we understand it.

The Secret Power of a Changing Brain

One important idea in neuroscience is that the brain can change its structure and connections. This is called neuroplasticity.
In simple words, whatever we practice often becomes stronger in the brain.

If we practice focusing, the brain becomes better at focus.
If we practice reacting quickly, the brain becomes faster at reacting.
If we practice calm thinking, the brain becomes better at calm thinking.

So intelligence grows through repeated actions and thoughts. It is not something that suddenly appears. It develops slowly over time.

The Missing Piece in the Way We Learn

In traditional education, we are taught subjects like math, science, and history. But we are not taught how our own brain works.

We learn what to study, but not how learning actually happens inside the brain.
We learn answers, but not how attention, emotions, and habits affect thinking.

Because of this, learning often becomes about memorizing instead of understanding. This is the missing piece in education knowing the brain that is doing the learning. When we understand how the brain works, learning becomes more meaningful.

The Moment Learning Becomes Alive

Learning changes when we start paying attention to how our brain learns.
Instead of only reading and memorizing, we begin to notice:
How we think
why we get distracted
what makes us confused
what helps us understand

At this point, learning feels more real. It is not just about finishing a syllabus. It is about improving the way we think. This is when human intelligence starts growing in a deeper way.

If the Brain Can Change

So Can You

Since the brain can change, it also means our thinking and behavior can change. We are not stuck with the same habits forever.

We can learn to focus better.
We can learn to respond instead of react.
We can learn to think more clearly.

Change does not happen in one day. It happens through small daily efforts. Each time we choose to think differently, the brain slowly adapts to that new way.

So personal growth is not just motivation. It is connected to how the brain works.

A New Way of Learning for a New World

Today’s world is changing very fast. Technology is growing and information is everywhere. But human thinking still needs to grow in the right direction.

We need a way of learning that helps people:
Understand their own mind
Build focus and clarity
Manage emotions
Make better decisions

This is where neuroscience and neuroplasticity become important. They help us understand how human intelligence can be trained, not just filled with information.

Learning in the future is not only about knowledge. It is about developing the brain and the way we think.`,
    },
    {
      id: 6,
      title: "Do You Really Know Yourself?",
      excerpt:
        "Exploring the importance of self-awareness in a fast-paced world and how it can transform our lives.",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=700&fit=crop",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=700&fit=crop",
      ],
      tags: ["Self-Awareness", "Personal Growth", "Mindfulness"],
      content: `Do You Really Know Yourself?

The Skill We Are Slowly Losing

We live in a world where we know many things.
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

This is where real self-awareness begins not with judgment, but with curiosity.

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

And maybe that is what we need the most today – not more information, but more understanding of who we are.`,
    },
    {
      id: 8,
      title: "Neuroplasticity in Action: A New Path for Autism Development",
      excerpt:
        "Training the brain, transforming behavior—how neuroplasticity-guided experiences can support communication, regulation, and learning in autism.",
      category: "Research",
      image:
        "/images/hi-labs-banner.jpg",
      images: [
        "/images/Autism and Neuroplasticity images /Neuroplasticity-1-scaled.webp",
        "/images/Autism and Neuroplasticity images /puzzle-child-illo-rf-gty-ps-230323_1679581047759_hpMain.jpg",
        "/images/Autism and Neuroplasticity images /autism_ninja_1140px.jpg",
        "/images/Autism and Neuroplasticity images /qnAvPOCTaZoSYlTL3pKPd_ae6c1601f043490a873e58caa0f1f18c.jpg",
        "/images/banner.jpg",
      ],
      tags: [
        "Autism",
        "ASD",
        "Neuroplasticity",
        "Brain Training",
        "Sensory Integration",
        "Human Intelligence Labs",
      ],
      content: `Neuroplasticity in Action: A New Path for Autism Development

Training the Brain, Transforming Behavior.

Understanding Autism

Autism, clinically known as Autism Spectrum Disorder (ASD), is a condition where the brain develops and connects differently.

These differences affect:

Communication
Emotional regulation
Sensory processing
Attention
Social interaction

Scientific research shows that autism is not simply a behavioral condition - it is linked to atypical neuroplasticity, meaning the brain’s ability to form and adjust neural connections works differently than in typical development.

Some areas may show too much plasticity, while others show too little. This imbalance affects how behaviors are learned and regulated.

[image]

Neuroplasticity: The Science of Brain Change

Neuroplasticity is the brain’s ability to:

Reorganize itself
Strengthen useful connections
Weaken unused ones
Create new pathways through experience and repetition

Research clearly shows that experience changes brain structure. When a task is repeated, the brain strengthens the pathway responsible for that behavior.

This principle is the foundation of learning, therapy, and rehabilitation - and it is the core of our work at Human Intelligence Labs.

Autism and Neuroplasticity: What Research Reveals

Modern neuroscience confirms that in autism:

Brain connectivity patterns differ from typical development
Sensory and motor circuits show altered plasticity
Emotional and social brain networks develop unevenly
Learning systems respond strongly to repeated structured experience

This means autism is not fixed. It is a trainable brain state when guided with the right experiences.

[image]

Our Vision: Human Intelligence Labs

At Aaruchudar, our Human Intelligence Labs are built on one belief:

“Behavior improves when the brain learns better patterns.”

We do not treat symptoms alone.
We train the brain systems that generate behavior.

Our labs combine:

Neuroscience
Neuroplasticity principles
Behavioral science
Human-centered design

To create structured brain training environments for autistic individuals.

How We Implement Neuroplasticity in Human Intelligence Labs

1. Brain System Mapping

Each participant begins with an understanding of their dominant challenges:

Communication
Emotional regulation
Attention
Sensory processing
Social interaction

We design training based on which brain systems need strengthening. This makes the process personalized and targeted, not generic therapy.

2. Experience-Based Brain Training

Research shows the brain changes through experience and repetition.

So our labs are built around structured experiences such as:

Guided speech and expression exercises
Emotional recognition activities
Attention-focus challenges
Sensory balance tasks
Social interaction simulations

Each activity is designed to:

Activate a specific brain circuit
Repeat it consistently
Reinforce functional neural pathways

This is neuroplasticity in action.

[image]

3. Repetition with Meaning

One of the strongest findings from neuroscience research is:

Repetition strengthens neural connections only when it is meaningful and emotionally safe.

Our lab ensures:

Calm learning environments
Positive reinforcement
No punishment-based correction
Gradual complexity increase

This allows the brain to learn without stress, which improves retention and behavior adaptation.

4. Sensory Integration Training

Research confirms that many autistic challenges come from sensory overload or under-processing.

Our labs use:

Controlled sound exposure
Light and touch tolerance activities
Movement coordination exercises
Breathing and grounding practices

These help the sensory brain circuits reorganize and reduce distress reactions.

5. Emotional Regulation & Social Brain Training

Emotional circuits are trained through:

Emotion identification exercises
Response-delay practices
Calming techniques
Guided interaction scenarios

Social brain networks are trained through:

Role-play
Group tasks
Communication games
Eye-contact comfort exercises

This gradually builds:

Confidence
Emotional balance
Social awareness

6. Family & Caregiver Integration

Neuroplasticity depends on consistency.

We involve parents and caregivers so that:

Home environments support learning
Daily routines reinforce lab training
Emotional safety continues beyond sessions

This multiplies the effect of brain training.

Behavioral Changes Observed Through Neuroplastic Training

Before training:

Frequent meltdowns
Communication frustration
Isolation
Sensory distress
Rigid routines

After consistent lab engagement:

Improved speech and expression
Calmer emotional responses
Better routine handling
Increased attention
Stronger social comfort
Higher self-confidence

These changes reflect brain adaptation, not forced behavior correction.

Why Human Intelligence Labs Are Different

Most interventions focus on managing behavior. We focus on training the brain that produces behavior.

Our approach is:

Neuroscience-driven
Neuroplasticity-based
Personalized
Humane
Structured
Long-term focused

“We do not aim to change identity.
We aim to strengthen functioning”

The Science Behind Our Confidence

Neuroscience research confirms:

Brain pathways reorganize through practice
Sensory systems adapt with training
Emotional circuits strengthen with experience
Learning is possible at any age

This makes autism support not just therapeutic - but neurological.

Conclusion: A New Path for Autism Support

Autism is not a limitation of potential.
It is a different neurological structure that can grow with the right guidance.

Through neuroplasticity and Human Intelligence Labs, individuals with autism can:

Improve communication
Regulate emotions
Develop social skills
Live with greater independence

The brain can learn, adapt, grow.`
    },
    {
      id: 9,
      title: "Mapping the Invisible: Visualizing Human Intelligence as the New Standard for Student Performance",
      excerpt:
        "Beyond traditional grades—how Power BI dashboards and glassmorphism design transform student performance metrics into actionable insights for personal growth.",
      category: "Innovation",
      image: "/images/blggpic.png",
      tags: [
        "Data Visualization",
        "Human Intelligence",
        "Performance Analytics",
        "Power BI",
        "Education Technology",
        "Student Development",
      ],
      content: `Mapping the Invisible: Visualizing Human Intelligence as the New Standard for Student Performance

The Evolution Beyond Traditional Metrics

The transition from traditional academic metrics to the nuanced measurement of Human Intelligence marks a significant evolution in how we understand student potential at Aaruchudar.

For decades, education has relied on a single dimension: grades. A number, a letter, a score. But this approach misses the full picture of who a student really is and what they are capable of becoming.

Human Intelligence encompasses far more than test scores. It includes:

Cognitive agility
Emotional resilience
Collaborative abilities
Creative problem-solving
Self-awareness
Adaptive capacity

These qualities are harder to measure, but infinitely more valuable in determining real-world success.

The Challenge of Invisible Growth

Many students experience profound growth that traditional metrics simply cannot capture.

A student might improve their emotional regulation but show no change in test scores.
Someone might develop stronger collaborative skills but have the same GPA.
Another person might build the resilience to bounce back from failure, an invisible but transformative change.

These developments are real, measurable, and critical—yet they remain invisible in conventional reporting systems.

This invisibility creates a problem: students do not see their own growth, parents cannot appreciate the deeper changes happening, and institutions miss the opportunity to celebrate what truly matters.

Introducing Dynamic Analytics: The Power BI Revolution

This is where data visualization transforms education.

By leveraging analytical power of Power BI, we have moved beyond the limitations of static grades to create a dynamic narrative of a participant's growth across complex internal attributes.

A Power BI dashboard does not just display numbers. It tells a story.

It shows patterns over time.
It reveals connections between different attributes.
It highlights unexpected correlations and breakthroughs.
It makes the invisible visible.

When a student opens their performance dashboard, they are not looking at a spreadsheet. They are viewing a comprehensive map of their development as a human being.

The Design Philosophy: Glassmorphism and Data

The visual design of these dashboards is intentionally sophisticated. We use a high-end Glassmorphism aesthetic—semi-transparent layers, frosted elements, soft-grain gradients, and refined typography.

Why this approach?

Because the nature of Human Intelligence we are measuring is sophisticated.

Glassmorphism creates depth. It allows us to overlay current performance data against historical benchmarks, providing a clear sense of progression that a standard spreadsheet cannot convey.

The transparency suggests clarity and honesty—there is nothing hidden in these dashboards.

The refined design communicates respect for the individual. It says: "Your growth matters. We have taken care to present it beautifully."

This professional yet modern interface encourages participants to engage deeply with their own analytics, fostering a sense of ownership over their learning journey. Instead of seeing performance data as something done to them, students begin to see it as something they own and can shape.

Beyond Beautiful: Structural Intelligence in Data Modeling

Beneath the elegant interface lies a robust data modeling framework that ensures every visualization is grounded in high-quality, continuously evolving data.

Our dashboards integrate multi-source inputs:

Behavioral assessments
Peer feedback loops
Real-time activity tracking
Self-reflection data
Engagement metrics

Using calculated measures, trend analysis, and comparative indexing, we enable participants to benchmark themselves not only against predefined standards but also against their own historical trajectories.

This reinforces a growth-first mindset: the only competitor that matters is who you were yesterday.

Personalization: Data Storytelling That Adapts

Every participant is different. Their challenges are unique. Their strengths are distinctive.

That is why our dashboards are not one-size-fits-all.

Each participant's interface dynamically adjusts to highlight the most relevant insights based on their performance patterns. Information remains contextual and actionable.

Through drill-through capabilities and layered visual hierarchies, users are guided toward meaningful self-reflection rather than passive observation. The dashboard asks: "What does this data mean about you? What can you do with this insight?"

This level of customization transforms data consumption into an interactive experience—one where users are not just consuming information, but discovering themselves.

Empowerment Through Visibility

When a student can see their emotional resilience improving over time, they understand that growth is real.

When a student can view how their collaboration scores have risen while their independence has also increased, they see that development is nuanced, not binary.

When a student can compare their current cognitive agility against where they started, they gain concrete evidence of their own capability to change and improve.

This visibility becomes powerful motivation—not the superficial motivation of external rewards, but the deeper motivation that comes from seeing your own potential becoming real.

The Strategic Asset: Human Intelligence as Competitive Advantage

The goal of visualizing these HI attributes is to empower participants to articulate their value in an increasingly automated world.

As artificial intelligence handles routine cognitive tasks, distinctly human skills become the ultimate competitive advantage:

Leadership
Emotional intelligence
Ethical reasoning
Creative synthesis
Collaborative problem-solving
Adaptability
Resilience

When a student interacts with their performance dashboard, they are not just looking at a report. They are viewing a strategic asset that helps them navigate their career path with confidence.

By distilling the complexities of human behavior into elegant, actionable insights, we provide participants with a clear blueprint for continuous improvement.

From Descriptive to Predictive: The Future of Educational Analytics

Currently, our dashboards are descriptive—they show what has happened.

But the framework opens the door to evolution.

Predictive analytics can forecast future performance trends based on current patterns.

AI-driven recommendations can suggest targeted developmental interventions before challenges become crises.

Machine learning can identify which interventions work best for which individuals.

This evolution shifts dashboards from being descriptive tools to prescriptive systems—and eventually to predictive systems.

The result is a proactive learning ecosystem that anticipates student needs before they arise, offering support and challenge at precisely the right moment.

Integration with Career Pathways

Human Intelligence metrics connect directly to real-world career competencies.

A student who sees their leadership capacity growing can explore roles that leverage that strength.

A student developing strong collaborative skills can find opportunities in team-based environments.

A student building emotional resilience sees pathways that require adaptability and growth mindset.

The dashboard becomes not just a reflection tool but a navigation tool—helping individuals find their fit in a complex world.

The Role of Continuous Learning

These dashboards are never static because growth never stops.

As participants engage with the system, they generate more data. Patterns emerge. New insights surface.

The dashboards evolve with each interaction, remaining fresh and relevant.

This creates a feedback loop where visibility drives engagement, engagement generates data, data reveals patterns, and patterns drive more targeted development.

A New Standard for Educational Excellence

Traditional metrics asked: "Can you reproduce knowledge?"

Human Intelligence metrics ask: "Can you grow as a human being? Can you learn from experience? Can you adapt? Can you collaborate? Can you lead yourself and others?"

These are the questions that matter in the modern world.

By continuously refining the intersection of technology, design, and human psychology, Aaruchudar is not only redefining performance measurement but also setting a new benchmark for how educational institutions can nurture truly future-ready individuals.

The Impact: Transformation Through Visibility

The result is a system where data does not merely inform. It inspires, guides, and transforms.

Students see themselves more clearly.
Parents understand their child's development more deeply.
Educators can personalize support more effectively.
Institutions can track their true impact on human development.

When invisible growth becomes visible, it becomes real. And when growth becomes real, transformation follows.

This is the promise of mapping the invisible: creating a world where every student's unique journey of human development is seen, celebrated, and continuously refined.

Because in the end, the most important metric is not what you know.

It is who you are becoming.`
    },
  ];

  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (a.title === featuredFirstTitle && b.title !== featuredFirstTitle) return -1;
      if (b.title === featuredFirstTitle && a.title !== featuredFirstTitle) return 1;
      return 0;
    });

  return (
    <div className="blog-container pt-16 md:pt-24 pb-20">
      {selectedBlog ? (
        <article className="full-blog">
          <div className="full-blog-topbar">
            <button onClick={() => setSelectedBlog(null)} className="back-button">
              Back to Blogs
            </button>
          </div>

          <header className="full-blog-hero">
            <div className="full-blog-hero-inner">
              <div className="full-blog-meta">
                <span className="full-blog-category">{selectedBlog.category}</span>
                {!!selectedBlog.tags?.length && (
                  <div className="full-blog-tags">
                    {selectedBlog.tags.slice(0, 6).map((tag, i) => (
                      <span key={`${tag}-${i}`} className="full-blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <h1 className="full-blog-title">{selectedBlog.title}</h1>
              <p className="full-blog-subtitle">{selectedBlog.excerpt}</p>

              <div className="full-blog-imageWrap">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="full-blog-image"
                />
              </div>
            </div>
          </header>

          <section className="full-blog-body">
            {parseContentToBlocks(
              selectedBlog.content,
              selectedBlog.images ?? [],
              selectedBlog.image
            ).map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={index}
                    className={`full-blog-heading color-${block.colorIndex}`}
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "img") {
                return (
                  <figure key={index} className="full-blog-inlineImageWrap">
                    <img
                      src={block.src}
                      alt={block.alt ?? selectedBlog.title}
                      className="full-blog-inlineImage"
                      loading="lazy"
                    />
                  </figure>
                );
              }

              return (
                <p key={index} className="full-blog-paragraph">
                  {block.text}
                </p>
              );
            })}
          </section>
        </article>
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
                whileHover={{ y: -6 }}
                onClick={() => setSelectedBlog(post)}
              >
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <div className="blog-card-badge">{post.category}</div>
                </div>

                <div className="blog-info">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>

                  {!!post.tags?.length && (
                    <div className="blog-tags">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span key={`${tag}-${i}`} className="blog-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="blog-card-cta">Read article</div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}



