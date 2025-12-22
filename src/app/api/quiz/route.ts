import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export const runtime = "nodejs"; // ✅ REQUIRED FOR fs

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "quiz-questions.json");
    const data = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(data);

    return new NextResponse(JSON.stringify(json), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err) {
    console.error("Quiz API error:", err); // 👈 add this
    return NextResponse.json(
      { error: "Quiz data not found" },
      { status: 500 }
    );
  }
}
