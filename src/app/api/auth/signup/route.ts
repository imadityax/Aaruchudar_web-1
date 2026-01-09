import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
   const { email, password, name } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: "EMPLOYEE",
    },
  });


  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 409 }
    );
  }



  return NextResponse.json({ success: true });
}
