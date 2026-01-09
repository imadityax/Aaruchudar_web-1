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
      return NextResponse.json(
        { error: "Invalid student data" },
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
        phone,
        age,
      },
    });

    // ✅ 2️⃣ create exam attempt
    await prisma.examAttempt.create({
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Scholarship submit error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
