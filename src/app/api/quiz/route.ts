import { NextResponse } from "next/server";
import raw from "../../../../public/quiz-questions.json";

export async function GET() {
  try {
    // Support both shapes: raw array or { quiz: { questions: [...] } }
    const questions = Array.isArray((raw as any)?.quiz?.questions)
      ? (raw as any).quiz.questions
      : (raw as any);

    const payload = {
      quiz: {
        title: "Human Intelligence Assessment",
        description: "Discover your mental clarity and decision-making skills",
        timeLimit: 300,
        questions,
        scoring: {
          excellent: {
            min: 13,
            max: 15,
            message:
              "Outstanding performance! You demonstrate excellent reasoning, memory, and decision-making skills.",
          },
          good: {
            min: 9,
            max: 12,
            message:
              "Great job! You have strong cognitive abilities with room for fine-tuning.",
          },
          fair: {
            min: 5,
            max: 8,
            message:
              "Decent effort. Strengthen focus and strategy to boost your performance.",
          },
          low: {
            min: 0,
            max: 4,
            message:
              "Consider practicing regularly to improve memory, focus, and problem-solving.",
          },
        },
      },
    };

    return NextResponse.json(payload, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err) {
    console.error("Quiz API error:", err);
    return NextResponse.json({ error: "Quiz data not available" }, { status: 500 });
  }
}
