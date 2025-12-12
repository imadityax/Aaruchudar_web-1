import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "quiz-questions.json");
    const data = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(data);
    return new NextResponse(JSON.stringify(json), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Ensure fresh fetches on each request
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: "Quiz data not found" }, { status: 500 });
  }
}
