import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const transactionId = formData.get("transactionId") as string;
    const file = formData.get("proofOfTransaction") as File;

    if (!name || !email || !transactionId || !file) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Convert file → buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // SMTP transporter (YOUR CONFIG)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true only for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Billing Form" <${process.env.SMTP_USER}>`,
      to: "hi@aaruchudar.com", // where you want to receive
      subject: "New Billing Form Submission",
      html: `
        <h2>New Billing Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Transaction ID:</strong> ${transactionId}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}