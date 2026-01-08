"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StudentForm from "./StudentForm";

/*SECTION DATA*/
const sections = [
  {
    sectionId: "I",
    sectionName: "CLARITY AS CULTURE",
    questions: [
      {
        question: "In a high-performing culture, clarity mainly helps people:",
        options: ["Act aligned", "Think clearly", "Work faster", "Avoid errors"]
      },
      {
        question: "When clarity is missing in a team, the first visible result is:",
        options: ["Role confusion", "Low morale", "Slow progress", "Poor results"]
      },
      {
        question: "A person with strong self-awareness will usually:",
        options: ["Notice patterns", "Admit limits", "Accept feedback", "Control reactions"]
      },
      {
        question: "Cultural clarity improves decision-making because it reduces:",
        options: ["Emotional noise", "Mental stress", "Task overload", "External pressure"]
      },
      {
        question: "The strongest foundation for personal clarity is:",
        options: ["Honest reflection", "Clear values", "Stable mindset", "Strong discipline"]
      },
      {
        question: "When individuals understand their purpose clearly, they tend to:",
        options: ["Act steadily", "Lead confidently", "Communicate openly", "Perform consistently"]
      },
      {
        question: "Self-awareness is best strengthened through:",
        options: ["Daily reflection", "Regular feedback", "Focused thinking", "Quiet observation"]
      },
      {
        question: "In a clarity-driven culture, communication is usually:",
        options: ["Direct simple", "Open consistent", "Calm respectful", "Clear timely"]
      },
      {
        question: "Loss of clarity in personal goals often leads to:",
        options: ["Poor focus", "Wrong choices", "Low motivation", "Weak effort"]
      },
      {
        question: "True clarity is achieved when thoughts and actions are:",
        options: ["Fully aligned", "Well balanced", "Clearly defined", "Strongly connected"]
      }
    ]
  },
  {
    sectionId: "II",
    sectionName: "DECISION-MAKING WITHOUT DRAMA",
    questions: [
      {
        question: "When emotions rise, the best response is to:",
        options: ["Pause briefly", "Act quickly", "Seek support", "Push forward"]
      },
      {
        question: "Drama-free decisions are guided mainly by:",
        options: ["Clear intent", "Strong emotion", "External pressure", "Fast action"]
      },
      {
        question: "A mature decision maker will usually:",
        options: ["Think calmly", "Speak boldly", "Act firmly", "Move quickly"]
      },
      {
        question: "Impulsive decisions often happen when people:",
        options: ["Skip reflection", "Feel excited", "Face urgency", "Lose control"]
      },
      {
        question: "Strong decisions depend most on:",
        options: ["Stable focus", "Clear goals", "Deep values", "Right timing"]
      },
      {
        question: "Emotional control helps you:",
        options: ["Choose wisely", "Work faster", "Speak better", "Lead strongly"]
      },
      {
        question: "When unsure, the best first step is to:",
        options: ["Review options", "Ask others", "Wait longer", "Act slowly"]
      },
      {
        question: "Regret reduces when decisions are:",
        options: ["Well considered", "Quickly taken", "Publicly shared", "Firmy defended"]
      },
      {
        question: "Long-term thinking mainly improves:",
        options: ["Decision quality", "Work results", "Team trust", "Personal growth"]
      },
      {
        question: "Emotional balance allows you to:",
        options: ["Stay objective", "Act confident", "Lead better", "Think faster"]
      }
    ]
  },
  {
    sectionId: "III",
    sectionName: "INNER FOCUS IN NOISY WORLDS",
    questions: [
      {
        question: "When surrounded by distractions, the first step to focus is to:",
        options: ["Reduce noise", "Change place", "Slow down", "Ignore people"]
      },
      {
        question: "Strong inner focus mainly helps you:",
        options: ["Think clearly", "Work longer", "Act faster", "Speak better"]
      },
      {
        question: "Mental overload most directly reduces your:",
        options: ["Attention span", "Thinking speed", "Memory power", "Emotional calm"]
      },
      {
        question: "Regaining focus during chaos requires you to:",
        options: ["Center thoughts", "Limit input", "Pause briefly", "Control breath"]
      },
      {
        question: "Continuous digital noise weakens your:",
        options: ["Attention control", "Mental energy", "Thinking depth", "Emotional strength"]
      },
      {
        question: "Deep focus becomes possible when you:",
        options: ["Block distractions", "Reduce tasks", "Work silently", "Sit alone"]
      },
      {
        question: "A focused mind usually produces:",
        options: ["Clear output", "Quick results", "Perfect work", "Fast success"]
      },
      {
        question: "Losing focus often leads to:",
        options: ["Poor decisions", "Slow progress", "High stress", "Low results"]
      },
      {
        question: "Inner stability grows when you:",
        options: ["Manage attention", "Control emotions", "Limit reactions", "Reduce thoughts"]
      },
      {
        question: "Sustained focus is built through:",
        options: ["Daily practice", "Strong will", "Deep effort", "Right methods"]
      }
    ]
  },
  {
    sectionId: "IV",
    sectionName: "THE POWER OF LISTENING",
    questions: [
      {
        question: "True listening begins the moment you:",
        options: ["Suspend judgement", "Release assumptions", "Reduce ego", "Control impulse"]
      },
      {
        question: "The most common reason people fail to listen is:",
        options: ["Inner noise", "Mental bias", "Emotional defense", "Cognitive overload"]
      },
      {
        question: "High-level listening is demonstrated when one can:",
        options: ["Interpret silence", "Detect shifts", "Sense meaning", "Track emotion"]
      },
      {
        question: "Listening becomes transformative when the listener:",
        options: ["Mirror intent", "Reflect feeling", "Clarify thought", "Align response"]
      },
      {
        question: "A breakdown in listening most often damages:",
        options: ["Mutual trust", "Shared clarity", "Team stability", "Relational depth"]
      },
      {
        question: "The strongest listening skill in leadership is the ability to:",
        options: ["Absorb complexity", "Hold space", "Manage reaction", "Regulate focus"]
      },
      {
        question: "Deep listening requires one to:",
        options: ["Slow cognition", "Silence judgement", "Anchor attention", "Control emotion"]
      },
      {
        question: "Listening fails immediately when a person begins to:",
        options: ["Form responses", "Defend position", "Justify stance", "Predict outcome"]
      },
      {
        question: "Listening creates influence primarily because it builds:",
        options: ["Psychological safety", "Emotional connection", "Cognitive trust", "Relational alignment"]
      },
      {
        question: "Mastery of listening is evident when one can:",
        options: ["Navigate tension", "Sustain presence", "Resolve conflict", "Guide dialogue"]
      }
    ]
  },
  {
    sectionId: "V",
    sectionName: "INTELLIGENT CONFLICT & RECOVERY",
    questions: [
      {
        question: "The most intelligent response to conflict is first to:",
        options: ["Regulate emotion", "Clarify intent", "Assess context", "Control reaction"]
      },
      {
        question: "Conflict becomes destructive primarily when people:",
        options: ["Defend identity", "Protect ego", "Resist feedback", "Assume motives"]
      },
      {
        question: "True recovery after conflict begins when one:",
        options: ["Accepts impact", "Restores trust", "Releases blame", "Resets mindset"]
      },
      {
        question: "The core skill preventing recurring conflict is:",
        options: ["Self regulation", "Boundary clarity", "Emotional maturity", "Cognitive awareness"]
      },
      {
        question: "Conflict escalates fastest when communication lacks:",
        options: ["Issue clarity", "Intent honesty", "Emotional control", "Perspective balance"]
      },
      {
        question: "Post-conflict growth is strongest when individuals:",
        options: ["Reflect deeply", "Adjust behavior", "Repair connection", "Rebuild purpose"]
      },
      {
        question: "Conflict resolution fails mainly when people:",
        options: ["Rush closure", "Avoid dialogue", "Deny impact", "Seek blame"]
      },
      {
        question: "Intelligent disagreement requires the ability to:",
        options: ["Separate issues", "Balance emotions", "Maintain focus", "Control language"]
      },
      {
        question: "The fastest path to resolution is usually:",
        options: ["Honest dialogue", "Calm listening", "Shared meaning", "Clear intention"]
      },
      {
        question: "Sustainable recovery after conflict occurs when:",
        options: ["Trust returns", "Growth occurs", "Stability forms", "Balance restores"]
      }
    ]
  },
  {
    sectionId: "VI",
    sectionName: "SYSTEMIC THINKING",
    questions: [
      {
        question: "Systemic thinking begins when you focus on:",
        options: ["Root causes", "Core patterns", "Hidden links", "Dynamic flows"]
      },
      {
        question: "A system fails most often when people ignore:",
        options: ["Feedback loops", "Structural limits", "Interactions effects", "Causal delays"]
      },
      {
        question: "Effective solutions require understanding:",
        options: ["Whole structure", "Total process", "Complete system", "Overall design"]
      },
      {
        question: "The greatest error in problem-solving is treating:",
        options: ["Symptoms only", "Isolated events", "Single outcomes", "Linear effects"]
      },
      {
        question: "Systemic leaders think primarily in terms of:",
        options: ["Relationships patterns", "Structural behavior", "Feedback responses", "Causal movement"]
      },
      {
        question: "Long-term change is created when you alter:",
        options: ["Core structure", "Primary process", "Main drivers", "Key variables"]
      },
      {
        question: "System collapse often occurs due to:",
        options: ["Poor alignment", "Weak feedback", "Unseen dependencies", "Delayed response"]
      },
      {
        question: "High-level systems understanding requires the ability to:",
        options: ["See connections", "Track patterns", "Anticipate shifts", "Integrate views"]
      },
      {
        question: "Sustainable improvement depends most on:",
        options: ["System balance", "Process stability", "Structural coherence", "Functional harmony"]
      },
      {
        question: "True systemic mastery is shown when one can:",
        options: ["Predict outcomes", "Prevent failures", "Guide evolution", "Shape behavior"]
      }
    ]
  },
  {
    sectionId: "VII",
    sectionName: "VOICE, VALUE & VULNERABILITY",
    questions: [
      {
        question: "A person’s voice carries power when it reflects:",
        options: ["Inner clarity", "Core values", "Emotional truth", "Personal conviction"]
      },
      {
        question: "Suppressing one’s voice most often results in:",
        options: ["Inner conflict", "Identity loss", "Emotional fatigue", "Psychological strain"]
      },
      {
        question: "True vulnerability in leadership requires:",
        options: ["Emotional courage", "Honest expression", "Self acceptance", "Inner strength"]
      },
      {
        question: "A strong sense of personal value grows from:",
        options: ["Self respect", "Purpose alignment", "Internal validation", "Ethical grounding"]
      },
      {
        question: "Voice becomes influential when communication is:",
        options: ["Authentic grounded", "Clear consistent", "Calm confident", "Purpose driven"]
      },
      {
        question: "Avoiding vulnerability often leads to:",
        options: ["Weak connection", "Lost trust", "Shallow bonds", "Limited growth"]
      },
      {
        question: "A leader’s credibility strengthens when they:",
        options: ["Speak honestly", "Admit limits", "Show humility", "Accept mistakes"]
      },
      {
        question: "Emotional openness primarily builds:",
        options: ["Psychological safety", "Mutual trust", "Relational depth", "Team cohesion"]
      },
      {
        question: "Personal value declines when individuals:",
        options: ["Seek approval", "Hide feelings", "Ignore needs", "Abandon principles"]
      },
      {
        question: "Voice, value and vulnerability together create:",
        options: ["Human connection", "Leadership presence", "Emotional influence", "Personal integrity"]
      }
    ]
  },
  {
    sectionId: "VIII",
    sectionName: "LEADERSHIP WITHOUT IMITATION",
    questions: [
      {
        question: "Authentic leadership begins when one:",
        options: ["Discovers self", "Defines values", "Builds vision", "Shapes purpose"]
      },
      {
        question: "Leadership without imitation requires the ability to:",
        options: ["Think independently", "Act confidently", "Decide clearly", "Speak boldly"]
      },
      {
        question: "Copying leadership styles usually results in:",
        options: ["Lost identity", "Weak influence", "Shallow trust", "Limited impact"]
      },
      {
        question: "A leader’s uniqueness is strongest when they:",
        options: ["Honor values", "Express vision", "Trust instinct", "Follow purpose"]
      },
      {
        question: "The foundation of original leadership is:",
        options: ["Self awareness", "Inner clarity", "Ethical strength", "Personal vision"]
      },
      {
        question: "True leaders influence others because they:",
        options: ["Stay authentic", "Remain consistent", "Act decisively", "Think boldly"]
      },
      {
        question: "Leadership imitation most often happens due to:",
        options: ["Fear failure", "Need approval", "Lack direction", "Low confidence"]
      },
      {
        question: "The most dangerous leadership trap is:",
        options: ["Ego dominance", "Blind imitation", "Power attachment", "Status obsession"]
      },
      {
        question: "Sustainable leadership grows when leaders:",
        options: ["Develop self", "Strengthen values", "Build culture", "Inspire trust"]
      },
      {
        question: "Leadership mastery is reached when one can:",
        options: ["Shape systems", "Guide people", "Create change", "Build legacy"]
      }
    ]
  },
  {
    sectionId: "IX",
    sectionName: "COGNITIVE INTELLIGENCE & BRAIN SCIENCE",
    questions: [
      {
        question: "Neuroplasticity refers to the brain’s ability to:",
        options: ["Change structure", "Adjust wiring", "Rebuild circuits", "Modify networks"]
      },
      {
        question: "Learning strengthens intelligence mainly by:",
        options: ["Creating pathways", "Reinforcing synapses", "Activating neurons", "Linking regions"]
      },
      {
        question: "Long-term skill development depends most on:",
        options: ["Repeated practice", "Focused attention", "Emotional engagement", "Cognitive challenge"]
      },
      {
        question: "Neuroplastic growth occurs fastest when learning is:",
        options: ["Consistent active", "Challenging meaningful", "Repetitive focused", "Intentional adaptive"]
      },
      {
        question: "Stress weakens neuroplastic change because it:",
        options: ["Disrupts attention", "Blocks memory", "Reduces flexibility", "Limits learning"]
      },
      {
        question: "Executive decision-making is mainly controlled by the:",
        options: ["Prefrontal cortex", "Frontal lobe", "Temporal lobe", "Parietal lobe"]
      },
      {
        question: "Emotional regulation is primarily associated with the:",
        options: ["Amygdala", "Hippocampus", "Thalamus", "Hypothalamus"]
      },
      {
        question: "Memory formation depends largely on the:",
        options: ["Hippocampus", "Cerebellum", "Medulla", "Pons"]
      },
      {
        question: "The brain region responsible for coordination is the:",
        options: ["Cerebellum", "Brainstem", "Occipital lobe", "Limbic system"]
      },
      {
        question: "Sensory information is relayed mainly through the:",
        options: ["Thalamus", "Hypothalamus", "Midbrain", "Cortex"]
      }
    ]
  },
  {
    sectionId: "X",
    sectionName: "HUMAN INTELLIGENCE & APTITUDE IN ACTION",
    questions: [
      {
        question: "In 2024, major AI research highlighted intelligence as primarily involving:",
        options: ["Pattern learning", "Adaptive reasoning", "Problem solving", "Knowledge application"]
      },
      {
        question: "In 2025 global AI ethics forums emphasized that human intelligence surpasses AI mainly in:",
        options: ["Emotional insight", "Moral judgment", "Context awareness", "Creative reasoning"]
      },
      {
        question: "UNESCO’s 2025 AI policy framework warns that AI lacks:",
        options: ["Moral agency", "Self awareness", "Human empathy", "Ethical autonomy"]
      },
      {
        question: "In 2025–26, which group of companies announced major workforce reductions linked to AI-led restructuring?",
        options: ["Amazon Meta", "Google Intel", "Microsoft Salesforce", "All above"]
      },
      {
        question: "Neuroscience reports in 2024 highlight that human intelligence is uniquely driven by:",
        options: ["Neural plasticity", "Emotional memory", "Intent formation", "Meaning creation"]
      },
      {
        question: "World Economic Forum discussions in 2025 stress that AI must remain a tool for:",
        options: ["Human support", "Cognitive extension", "Skill enhancement", "Decision assistance"]
      },
      {
        question: "Choose the word closest in meaning to Neuroplasticity:",
        options: ["Brain adaptation", "Neural change", "Cognitive shift", "Mental growth"]
      },
      {
        question: "Choose the word opposite in meaning to Cognition:",
        options: ["Mental absence", "Thought void", "Brain inertia", "Awareness loss"]
      },
      {
        question: "Improve the sentence: Intelligence depends on neural activity.",
        options: ["Depends on", "Depend upon", "Depended on", "Depending on"]
      },
      {
        question: "Choose correct usage: Memory is associated ___ hippocampus.",
        options: ["With", "By", "From", "For"]
      },
      {
        question: "One word for study of brain functions:",
        options: ["Neuroscience", "Neurobiology", "Neurology", "Psychophysics"]
      },
      {
        question: "Meaning of Metacognition:",
        options: ["Thinking process", "Thought awareness", "Mental control", "Cognitive insight"]
      },
      {
        question: "40% of the number is 160. The number is:",
        options: ["400", "360", "320", "420"]
      },
      {
        question: "The average of 5 numbers is 24. If one number is removed, the average becomes 23. The removed number is:",
        options: ["28", "29", "27", "30"]
      },
      {
        question: "A sum of ₹1500 earns ₹300 as simple interest in 4 years. The rate of interest is:",
        options: ["5%", "4%", "6%", "8%"]
      },
      {
        question: "The ratio of two numbers is 3 : 5. Their sum is 64. The larger number is:",
        options: ["40", "24", "32", "20"]
      },
      {
        question: "If the cost price is ₹800 and profit is 25%, the selling price is:",
        options: ["1000", "900", "960", "1050"]
      },
      {
        question: "Find the next number: 3, 7, 15, 31, ?",
        options: ["63", "60", "64", "61"]
      },
      {
        question: "P is the brother of Q. R is the mother of Q. S is the father of R. How is P related to S?",
        options: ["Grandson", "Nephew", "Son", "Cousin"]
      },
      {
        question: "A is the sister of B. C is the brother of A. D is the father of C. How is D related to B?",
        options: ["Father", "Uncle", "Grandfather", "Brother"]
      },
      {
        question: "M is the daughter of N. O is the son of N. P is the brother of O. How is P related to M?",
        options: ["Brother", "Cousin", "Uncle", "Nephew"]
      },
      {
        question: "X is the mother of Y. Z is the brother of X. W is the daughter of Z. How is W related to Y?",
        options: ["Cousin", "Sister", "Aunt", "Niece"]
      },
      {
        question: "A is the son of B. B is the daughter of C. D is the brother of C. How is D related to A?",
        options: ["Granduncle", "Uncle", "Father", "Cousin"]
      },
      {
        question: "P is the father of Q. R is the sister of Q. S is the daughter of R. How is P related to S?",
        options: ["Grandfather", "Uncle", "Father", "Cousin"]
      },
      {
        question: "A walks 30 m east, turns right, walks 20 m, turns left, walks 10 m, turns left again and walks 20 m. How far is A from start?",
        options: ["10 m", "20 m", "30 m", "40 m"]
      },
      {
        question: "P faces north, Q sits to P’s left. R sits opposite Q. Which direction does R face?",
        options: ["South", "North", "East", "West"]
      },
      {
        question: "Five people sit in a row. A is second left of B. C is third right of B. D is immediate left of A. Who is at the center?",
        options: ["B", "A", "C", "D"]
      },
      {
        question: "Six people sit around a circle facing the center. P is opposite Q. R sits between P and S. T is not a neighbor of Q. Who sits next to Q?",
        options: ["S", "R", "T", "P"]
      },
      {
        question: "A faces west. B is 40 m to the right of A. C is 20 m south of B. How far is C from A?",
        options: ["20 m", "40 m", "45 m", "60 m"]
      },
      {
        question: "Eight persons sit in a circle facing the center. A sits third left of B. C sits second right of A. Who sits opposite C?",
        options: ["B", "D", "F", "A"]
      }
    ]
  }
];

export default function ScollarshipPage() {
  const router = useRouter();

  /* FORM GATE */
  const [started, setStarted] = useState(false);

  /* QUIZ STATE */
  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const [answeredMap, setAnsweredMap] = useState<number[]>([]);
  const [skippedMap, setSkippedMap] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showCongrats, setShowCongrats] = useState(false);

  const currentSection = sections[sectionIndex];
  const currentQuestion = currentSection.questions[questionIndex];

  const isLastSection = sectionIndex === sections.length - 1;
  const isLastQuestion =
    questionIndex === currentSection.questions.length - 1;

  /* AUTO SKIP */
  const handleAutoSkip = (idx: number) => {
    setSkippedMap((p) => (p.includes(idx) ? p : [...p, idx]));
    setSelectedOption(null);
    setTimeLeft(30);

    if (idx < currentSection.questions.length - 1) {
      setQuestionIndex(idx + 1);
      return;
    }

    if (!isLastSection) {
      setSectionIndex(sectionIndex + 1);
      setQuestionIndex(0);
      setAnsweredMap([]);
      setSkippedMap([]);
    } else {
      setShowCongrats(true);
    }
  };

  /* TIMER */
  useEffect(() => {
    if (!started || showCongrats) return;

    const t = setInterval(() => {
      setTimeLeft((p) => {
        if (p === 1) {
          handleAutoSkip(questionIndex);
          return 30;
        }
        return p - 1;
      });
    }, 1000);

    return () => clearInterval(t);
  }, [questionIndex, sectionIndex, started, showCongrats]);

  /* NEXT */
  const handleNext = () => {
    setAnsweredMap((p) =>
      p.includes(questionIndex) ? p : [...p, questionIndex]
    );

    setSelectedOption(null);
    setTimeLeft(30);

    if (!isLastQuestion) {
      setQuestionIndex(questionIndex + 1);
      return;
    }

    if (!isLastSection) {
      setSectionIndex(sectionIndex + 1);
      setQuestionIndex(0);
      setAnsweredMap([]);
      setSkippedMap([]);
      return;
    }

    setShowCongrats(true);
  };

  /* REDIRECT */
  useEffect(() => {
    if (!showCongrats) return;
    const t = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(t);
  }, [showCongrats, router]);

  /* FORM FIRST */
  if (!started) return <StudentForm onStart={() => setStarted(true)} />;

  /* CONGRATS */
  if (showCongrats) {
    return (
      <div className="min-h-screen bg-[#ECFDF5] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl px-8 py-8 text-center max-w-md w-full shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">🎉 Congratulations!</h2>
          <p className="text-gray-600">
            You have successfully completed the scholarship assessment.
          </p>
          <p className="mt-4 text-green-600 font-semibold">
            Redirecting to courses…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ECFDF5] p-4 md:p-6">
      {/* HEADER */}
      <div className="bg-white rounded-xl px-4 md:px-8 py-4 md:py-6 mb-6
                      flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* LEFT: LOGO + TEXT */}
<div className="flex items-start md:items-center gap-3">
  {/* LOGO */}
  <div className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
    <img
      src="/logo2.png"
      alt="Aaruchudar logo"
      className="w-full h-full object-contain"
    />
  </div>

  {/* TEXT */}
  <div className="leading-tight">
    <h2 className="text-base md:text-xl font-semibold">
      AARUCHUDAR SCHOLARSHIP EXAM SERIES - 1
    </h2>
    <p className="text-xs md:text-sm text-gray-500">
      Discover your mental clarity and decision-making skills
    </p>
  </div>
</div>


        {/* TIMER */}
        <div className="text-green-600 font-semibold self-end md:self-auto">
          ⏱ {timeLeft}s
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* PROGRESS */}
        <div className="w-full md:w-[260px] bg-white rounded-xl p-5">
          <h4 className="font-semibold mb-4">Progress Map</h4>
          <div className="grid grid-cols-5 md:grid-cols-5 gap-3">
            {currentSection.questions.map((_, i: number) => (
              <div
                key={i}
                className={`
                  h-9 md:h-10 rounded-lg flex items-center justify-center text-sm border
                  ${i === questionIndex ? "border-green-500 bg-green-50" : ""}
                  ${answeredMap.includes(i)
                    ? "bg-green-500 text-white border-green-500"
                    : ""}
                  ${skippedMap.includes(i)
                    ? "bg-red-100 border-red-500 text-red-600"
                    : ""}
                `}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* QUESTION */}
        <div className="flex-1 bg-white rounded-xl p-5 md:p-8">
          <p className="text-[#059669] text-sm font-semibold mb-2">
            SECTION {currentSection.sectionId} — {currentSection.sectionName}
          </p>

          <h3 className="text-base md:text-lg font-semibold mb-4">
            {currentQuestion.question}
          </h3>

          {currentQuestion.options.map((opt: string, i: number) => (
            <button
              key={i}
              onClick={() => setSelectedOption(i)}
              className={`
                w-full text-left px-4 py-3 mb-3 rounded-lg border
                ${selectedOption === i
                  ? "border-green-500 bg-green-50 font-semibold"
                  : "border-gray-300 bg-white"}
              `}
            >
              {opt}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="
              w-full mt-6 py-4 rounded-xl
              bg-[#10b981] text-white font-semibold
              disabled:opacity-60 border-[1px] border-[#10b981]
            "
          >
            {isLastSection && isLastQuestion ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
