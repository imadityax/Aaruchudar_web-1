import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming feedback:", body);

    const { name, email, rating, feedback } = body;

    const created = await prisma.feedback.create({
      data: {
        name,
        email,
        rating: Number(rating),
        text: feedback,
      },
    });
    

    return NextResponse.json({ success: true });
  } catch (error: any) {

    return NextResponse.json(
      {
        error: "Internal server error",
        details: error?.message,
      },
      { status: 500 }
    );
  }
}
