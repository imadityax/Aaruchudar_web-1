import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const application = await prisma.application.create({
      data: {
        name: body.name,
        dob: new Date(body.dob),
        gender: body.gender,
        contact: body.contact,
        email: body.email,
        educationStatus: body.educationStatus,
        institution: body.institution,
        field: body.field,
        board: body.board,
        percentage: parseFloat(body.percentage),
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to submit application" },
      { status: 500 }
    );
  }
}
