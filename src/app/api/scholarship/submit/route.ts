import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      studentId,
      name,
      email,
      phone,
      age,

      totalQuestions,
      answeredCount,
      skippedCount,
      totalSections,
      score,
      percentage,
      timeTakenSec,
    } = body;

    // ❌ required validation
    if (!studentId || !email) {
      console.error("Invalid data:", { studentId, email });
      return NextResponse.json(
        { error: "Invalid student data" },
        { status: 400 }
      );
    }

    // Validate exam data
    if (
      totalQuestions === undefined ||
      answeredCount === undefined ||
      skippedCount === undefined ||
      totalSections === undefined ||
      score === undefined ||
      percentage === undefined ||
      timeTakenSec === undefined
    ) {
      console.error("Missing exam data:", {
        totalQuestions,
        answeredCount,
        skippedCount,
        totalSections,
        score,
        percentage,
        timeTakenSec,
      });
      return NextResponse.json(
        { error: "Missing exam data fields" },
        { status: 400 }
      );
    }

    // ✅ 1️⃣ ensure student exists
    const student = await prisma.student.upsert({
      where: { id: studentId },
      update: {}, // do nothing if exists
      create: {
        id: studentId,
        name: name || "Unknown",
        email,
        phone: phone || undefined,
        age: age ? Number(age) : undefined,
      },
    });

    // ✅ 2️⃣ create exam attempt
    const examAttempt = await prisma.examAttempt.create({
      data: {
        studentId: student.id,

        totalQuestions,
        answeredCount,
        skippedCount,
        totalSections,

        score,
        percentage,
        timeTakenSec,
      },
    });

    console.log("Exam attempt created successfully:", examAttempt);
    return NextResponse.json({ success: true, attemptId: examAttempt.id });
  } catch (error) {
    console.error("Scholarship submit error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Server error", details: errorMessage },
      { status: 500 }
    );
  }
}
