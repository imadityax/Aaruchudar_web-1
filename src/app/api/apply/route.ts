import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const role = data.get("role") as string;
    const location = data.get("location") as string;
    const portfolio = data.get("portfolio") as string;
    const reason = data.get("reason") as string;
    const resume = data.get("resume") as File | null;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = [];

    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer,
        contentType: resume.type,
      });
    }

    await transporter.sendMail({
      from: `"Careers - Aaruchudar" <${process.env.SMTP_USER}>`,
      to: "hi@aaruchudar.com",
      subject: `New Job Application – ${role}`,
      html: `
        <h2>New Application Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Role:</b> ${role}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Portfolio:</b> ${portfolio}</p>
        <p><b>Why Hire:</b></p>
        <p>${reason}</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
